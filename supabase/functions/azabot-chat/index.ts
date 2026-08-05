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

const env = (name: string) => (Deno.env.get(name) ?? "").trim();

function foundryConfig() {
  const projectEndpoint = (env("AZURE_FOUNDRY_PROJECT_ENDPOINT") || env("AZURE_FOUNDRY_ENDPOINT")).replace(/\/+$/, "");
  const agentName = env("AZURE_FOUNDRY_AGENT_NAME") || env("AZURE_FOUNDRY_AGENT_ID");
  const agentVersion = env("AZURE_FOUNDRY_AGENT_VERSION") || "1";
  const apiKey = env("AZURE_FOUNDRY_API_KEY");
  if (!projectEndpoint || !agentName) {
    throw new Error("Microsoft Foundry agent is not configured (project endpoint / agent name missing).");
  }
  // Candidate OpenAI v1 base URLs: project-scoped first, then resource-scoped.
  const resourceRoot = projectEndpoint.replace(/\/api\/projects\/[^/]+$/, "");
  const bases = [`${projectEndpoint}/openai/v1`, `${resourceRoot}/openai/v1`];
  return { projectEndpoint, agentName, agentVersion, apiKey, bases };
}

let cachedToken: { value: string; expires: number } | null = null;

async function aadToken(): Promise<string | null> {
  if (cachedToken && cachedToken.expires > Date.now() + 60_000) return cachedToken.value;
  const tenant = env("AZURE_TENANT_ID");
  const clientId = env("AZURE_CLIENT_ID");
  const clientSecret = env("AZURE_CLIENT_SECRET");
  if (!tenant || !clientId || !clientSecret) return null;

  const res = await fetch(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
      scope: "https://ai.azure.com/.default",
    }),
  });
  const text = await res.text();
  if (!res.ok) {
    console.error(`AAD token failed [${res.status}]: ${text.slice(0, 400)}`);
    return null;
  }
  const data = JSON.parse(text);
  cachedToken = { value: data.access_token, expires: Date.now() + Number(data.expires_in ?? 3600) * 1000 };
  return cachedToken.value;
}

let workingBase: string | null = null;

async function foundry(path: string, init: RequestInit = {}) {
  const { apiKey, bases } = foundryConfig();

  const authVariants: Array<{ label: string; headers: Record<string, string> }> = [];
  const token = await aadToken();
  if (token) authVariants.push({ label: "aad", headers: { Authorization: `Bearer ${token}` } });
  if (apiKey) {
    authVariants.push({ label: "api-key", headers: { "api-key": apiKey, Authorization: `Bearer ${apiKey}` } });
  }
  if (authVariants.length === 0) throw new Error("No Microsoft Foundry credentials available.");

  const baseList = workingBase ? [workingBase, ...bases.filter((b) => b !== workingBase)] : bases;
  let last = { status: 0, text: "" };

  for (const base of baseList) {
    for (const auth of authVariants) {
      const res = await fetch(`${base}${path}`, {
        ...init,
        headers: { "Content-Type": "application/json", ...auth.headers, ...(init.headers ?? {}) },
      });
      const text = await res.text();
      if (res.ok) {
        workingBase = base;
        return text ? JSON.parse(text) : {};
      }
      console.error(`Foundry ${base}${path} via ${auth.label} -> ${res.status}: ${text.slice(0, 300)}`);
      last = { status: res.status, text };
      // 404 => wrong base URL, try next base; 401/403 => try next auth variant
      if (res.status === 404) break;
      if (res.status !== 401 && res.status !== 403) {
        throw new Error(`Foundry request failed [${res.status}]: ${text.slice(0, 600)}`);
      }
      cachedToken = null;
    }
  }

  if (last.status === 401 || last.status === 403) {
    throw new Error(
      "The Microsoft Foundry agent rejected the request: the service principal is not authorised on the Foundry project. " +
        "Grant it the 'Azure AI User' role on the project, then try again.",
    );
  }
  throw new Error(`Foundry request failed [${last.status}]: ${last.text.slice(0, 600)}`);
}

function extractOutputText(response: Record<string, any>): string {
  if (typeof response?.output_text === "string" && response.output_text.trim()) {
    return response.output_text.trim();
  }
  const output = (response?.output ?? []) as Array<Record<string, any>>;
  return output
    .flatMap((item) => (Array.isArray(item?.content) ? item.content : []))
    .map((c: Record<string, any>) => (typeof c?.text === "string" ? c.text : c?.text?.value ?? ""))
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

      const { agentName, agentVersion } = foundryConfig();

      // Conversation (Foundry v1) keeps the agent's memory across turns.
      let conversationId = thread.foundry_thread_id as string | null;
      if (!conversationId) {
        const conversation = await foundry("/conversations", {
          method: "POST",
          body: JSON.stringify({
            items: [{ type: "message", role: "user", content: text }],
          }),
        });
        conversationId = conversation.id;
      } else {
        await foundry(`/conversations/${conversationId}/items`, {
          method: "POST",
          body: JSON.stringify({
            items: [{ type: "message", role: "user", content: text }],
          }),
        });
      }

      const response = await foundry("/responses", {
        method: "POST",
        body: JSON.stringify({
          conversation: conversationId,
          agent_reference: { name: agentName, version: agentVersion, type: "agent_reference" },
        }),
      });


      const reply = extractOutputText(response) ||
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
          foundry_thread_id: conversationId,
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
