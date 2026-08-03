import { supabase } from '@/integrations/supabase/client'

export type ChatThread = {
  id: string
  title: string
  lang: string
  created_at: string
  updated_at: string
}

export type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
  created_at: string
}

const SESSION_KEY = 'azabot_session_id'

export function getSessionId(): string {
  let id = localStorage.getItem(SESSION_KEY)
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem(SESSION_KEY, id)
  }
  return id
}

async function call<T>(payload: Record<string, unknown>): Promise<T> {
  const { data, error } = await supabase.functions.invoke('azabot-chat', {
    body: { sessionId: getSessionId(), ...payload },
  })
  if (error) {
    let detail = error.message
    try {
      const ctx = (error as unknown as { context?: Response }).context
      if (ctx) {
        const txt = await ctx.text()
        const parsed = JSON.parse(txt)
        if (parsed?.error) detail = parsed.error
      }
    } catch {
      /* keep default message */
    }
    throw new Error(detail)
  }
  if ((data as { error?: string })?.error) throw new Error((data as { error: string }).error)
  return data as T
}

export const azabot = {
  listThreads: () => call<{ threads: ChatThread[] }>({ action: 'listThreads' }).then((r) => r.threads),
  createThread: (lang: string) =>
    call<{ thread: ChatThread }>({ action: 'createThread', lang }).then((r) => r.thread),
  deleteThread: (threadId: string) => call<{ ok: true }>({ action: 'deleteThread', threadId }),
  getMessages: (threadId: string) =>
    call<{ messages: ChatMessage[] }>({ action: 'getMessages', threadId }).then((r) => r.messages),
  send: (threadId: string, message: string) =>
    call<{ userMessage: ChatMessage; assistantMessage: ChatMessage }>({
      action: 'send',
      threadId,
      message,
    }),
}
