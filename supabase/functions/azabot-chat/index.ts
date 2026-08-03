import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const API_VERSION = "2025-05-01";

function foundryConfig() {
  const endpoint = (Deno.env.get("AZURE_FOUNDRY_ENDPOINT") ?? "").trim().replace(/\/+$/, "");
  const apiKey = (Deno.env.get("AZURE_FOUNDRY_API_KEY") ?? "").trim();
  const agentId = (Deno.env.get("AZURE_FOUNDRY_AGENT_ID") ?? "").trim();
  if (!endpoint || !agentId) {
    throw new Error("Microsoft Foundry agent is not configured (endpoint / agent id missing).");
  }
  return { endpoint, apiKey, agentId };
}

const SCOPES = ["https://ai.azure.com/.default", "https://ml.azure.com/.default"];
let cachedToken: { value: string; scope: string; expires: number } | null = null;

async function aadToken(scope: string): Promise<string | null> {
  if (cachedToken && cachedToken.scope === scope && cachedToken.expires > Date.now() + 60_000) {
    return cachedToken.value;
  }
  const tenant = (Deno.env.get("AZURE_TENANT_ID") ?? "").trim();
  const clientId = (Deno.env.get("AZURE_CLIENT_ID") ?? "").trim();
  const clientSecret = (Deno.env.get("AZURE_CLIENT_SECRET") ?? "").trim();
  if (!tenant || !clientId || !clientSecret) return null;

  const res = await fetch(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
      scope,
    }),
  });
  const text = await res.text();
  if (!res.ok) {
    console.error(`AAD token failed [${res.status}]: ${text.slice(0, 400)}`);
    return null;
  }
  const data = JSON.parse(text);
  cachedToken = {
    value: data.access_token,
    scope,
    expires: Date.now() + (Number(data.expires_in ?? 3600) * 1000),
  };
  return cachedToken.value;
}

async function foundryOnce(path: string, init: RequestInit, auth: Record<string, string>) {
  const { endpoint } = foundryConfig();
  const sep = path.includes("?") ? "&" : "?";
  const res = await fetch(`${endpoint}${path}${sep}api-version=${API_VERSION}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...auth, ...(init.headers ?? {}) },
  });
  return { res, text: await res.text() };
}

async function foundry(path: string, init: RequestInit = {}) {
  const { apiKey } = foundryConfig();
  const attempts: Array<{ label: string; headers: Record<string, string> }> = [];

  for (const scope of SCOPES) {
    const token = await aadToken(scope);
    if (token) attempts.push({ label: scope, headers: { Authorization: `Bearer ${token}` } });
  }
  if (apiKey) {
    attempts.push({ label: "api-key", headers: { "api-key": apiKey, Authorization: `Bearer ${apiKey}` } });
  }
  if (attempts.length === 0) throw new Error("No Microsoft Foundry credentials available.");

  let last = { status: 0, text: "" };
  for (const attempt of attempts) {
    const { res, text } = await foundryOnce(path, init, attempt.headers);
    if (res.ok) return text ? JSON.parse(text) : {};
    console.error(`Foundry ${path} via ${attempt.label} -> ${res.status}: ${text.slice(0, 300)}`);
    last = { status: res.status, text };
    if (res.status !== 401 && res.status !== 403) break;
    cachedToken = null;
  }
  throw new Error(`Foundry request failed [${last.status}]: ${last.text.slice(0, 600)}`);

}


function extractText(message: Record<string, unknown>): string {
  const parts = (message?.content ?? []) as Array<Record<string, any>>;
  return parts
    .map((p) => (p?.type === "text" ? (p.text?.value ?? p.text ?? "") : ""))
    .filter(Boolean)
    .join("\n")
    .trim();
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    { auth: { persistSession: false } },
  );

  try {
    const body = await req.json();
    const action = String(body.action ?? "");
    const sessionId = String(body.sessionId ?? "").trim();
    if (!sessionId || sessionId.length > 100) return json({ error: "Invalid session" }, 400);

    if (action === "listThreads") {
      const { data, error } = await supabase
        .from("chat_threads")
        .select("id, title, lang, created_at, updated_at")
        .eq("session_id", sessionId)
        .order("updated_at", { ascending: false })
        .limit(50);
      if (error) throw error;
      return json({ threads: data ?? [] });
    }

    if (action === "createThread") {
      const lang = body.lang === "ar" ? "ar" : "en";
      const { data, error } = await supabase
        .from("chat_threads")
        .insert({ session_id: sessionId, lang, title: lang === "ar" ? "محادثة جديدة" : "New chat" })
        .select("id, title, lang, created_at, updated_at")
        .single();
      if (error) throw error;
      return json({ thread: data });
    }

    if (action === "deleteThread") {
      const { error } = await supabase
        .from("chat_threads")
        .delete()
        .eq("session_id", sessionId)
        .eq("id", String(body.threadId ?? ""));
      if (error) throw error;
      return json({ ok: true });
    }

    if (action === "getMessages") {
      const threadId = String(body.threadId ?? "");
      const { data: thread } = await supabase
        .from("chat_threads")
        .select("id")
        .eq("session_id", sessionId)
        .eq("id", threadId)
        .maybeSingle();
      if (!thread) return json({ messages: [] });
      const { data, error } = await supabase
        .from("chat_messages")
        .select("id, role, content, created_at")
        .eq("thread_id", threadId)
        .order("created_at", { ascending: true });
      if (error) throw error;
      return json({ messages: data ?? [] });
    }

    if (action === "send") {
      const threadId = String(body.threadId ?? "");
      const text = String(body.message ?? "").trim();
      if (!text) return json({ error: "Empty message" }, 400);
      if (text.length > 4000) return json({ error: "Message too long" }, 400);

      const { data: thread, error: threadErr } = await supabase
        .from("chat_threads")
        .select("id, title, foundry_thread_id, lang")
        .eq("session_id", sessionId)
        .eq("id", threadId)
        .maybeSingle();
      if (threadErr) throw threadErr;
      if (!thread) return json({ error: "Thread not found" }, 404);

      const { data: userMsg, error: insErr } = await supabase
        .from("chat_messages")
        .insert({ thread_id: thread.id, role: "user", content: text })
        .select("id, role, content, created_at")
        .single();
      if (insErr) throw insErr;

      const { agentId } = foundryConfig();

      let foundryThreadId = thread.foundry_thread_id as string | null;
      if (!foundryThreadId) {
        const created = await foundry("/threads", { method: "POST", body: JSON.stringify({}) });
        foundryThreadId = created.id;
      }

      await foundry(`/threads/${foundryThreadId}/messages`, {
        method: "POST",
        body: JSON.stringify({ role: "user", content: text }),
      });

      let run = await foundry(`/threads/${foundryThreadId}/runs`, {
        method: "POST",
        body: JSON.stringify({ assistant_id: agentId }),
      });

      const deadline = Date.now() + 90_000;
      while (["queued", "in_progress", "requires_action"].includes(run.status) && Date.now() < deadline) {
        await new Promise((r) => setTimeout(r, 900));
        run = await foundry(`/threads/${foundryThreadId}/runs/${run.id}`, { method: "GET" });
      }

      if (run.status !== "completed") {
        const detail = run?.last_error?.message ?? run?.status ?? "unknown";
        throw new Error(`Agent run did not complete: ${detail}`);
      }

      const list = await foundry(`/threads/${foundryThreadId}/messages?order=desc&limit=10`, { method: "GET" });
      const items = (list.data ?? []) as Array<Record<string, any>>;
      const reply = extractText(items.find((m) => m.role === "assistant") ?? {}) ||
        (thread.lang === "ar" ? "لم أستطع توليد رد." : "I could not generate a reply.");

      const { data: botMsg, error: botErr } = await supabase
        .from("chat_messages")
        .insert({ thread_id: thread.id, role: "assistant", content: reply })
        .select("id, role, content, created_at")
        .single();
      if (botErr) throw botErr;

      const isNewTitle = thread.title === "New chat" || thread.title === "محادثة جديدة";
      await supabase
        .from("chat_threads")
        .update({
          foundry_thread_id: foundryThreadId,
          updated_at: new Date().toISOString(),
          ...(isNewTitle ? { title: text.slice(0, 60) } : {}),
        })
        .eq("id", thread.id);

      return json({ userMessage: userMsg, assistantMessage: botMsg });
    }

    return json({ error: "Unknown action" }, 400);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("azabot-chat error:", message);
    return json({ error: message }, 500);
  }
});
