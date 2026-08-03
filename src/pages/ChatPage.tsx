import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Plus, Trash2, MessageSquare, Bot } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ChatPanel } from '@/components/chat/ChatPanel'
import { azabot, type ChatThread } from '@/lib/azabot'
import { useLang } from '@/i18n/LanguageProvider'

export default function ChatPage() {
  const { lang } = useLang()
  const ar = lang === 'ar'
  const navigate = useNavigate()
  const { threadId } = useParams<{ threadId?: string }>()
  const [threads, setThreads] = useState<ChatThread[]>([])

  useEffect(() => {
    document.title = ar ? 'عزبوت | المساعد الذكي للعزب' : 'AzaBot | Al Azab AI Assistant'
    const meta = document.querySelector('meta[name="description"]')
    if (meta)
      meta.setAttribute(
        'content',
        ar
          ? 'تحدث مع عزبوت، المساعد الذكي لشركة العزب للخدمات الهندسية، للاستفسار عن الخدمات والأسعار والمشروعات.'
          : 'Chat with AzaBot, the AI assistant of Al Azab Engineering Services, for services, pricing and project enquiries.',
      )
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', 'https://ai-alazab.co/chat')
  }, [ar])

  const refresh = useCallback(async () => {
    try {
      setThreads(await azabot.listThreads())
    } catch {
      /* offline */
    }
  }, [])

  useEffect(() => {
    void refresh()
  }, [refresh])

  const ensureThread = useCallback(async () => {
    if (threadId) return threadId
    const t = await azabot.createThread(lang)
    setThreads((prev) => [t, ...prev])
    navigate(`/chat/${t.id}`, { replace: true })
    return t.id
  }, [threadId, lang, navigate])

  const newChat = async () => {
    const t = await azabot.createThread(lang)
    setThreads((prev) => [t, ...prev])
    navigate(`/chat/${t.id}`)
  }

  const remove = async (id: string) => {
    await azabot.deleteThread(id)
    setThreads((prev) => prev.filter((t) => t.id !== id))
    if (threadId === id) navigate('/chat')
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main role="main" className="pt-28">
        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Bot className="h-6 w-6" />
            </span>
            <div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
                {ar ? 'عزبوت — المساعد الذكي' : 'AzaBot — AI Assistant'}
              </h1>
              <p className="text-sm text-muted-foreground">
                {ar
                  ? 'مدعوم بوكيل Microsoft Foundry ومتخصص في الخدمات الهندسية والتشطيبات.'
                  : 'Powered by a Microsoft Foundry agent, specialised in engineering and finishing services.'}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[260px_1fr]">
            <aside className="rounded-2xl border border-border bg-card p-3">
              <button
                onClick={newChat}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-bold text-brand-foreground hover:opacity-90 transition-opacity"
              >
                <Plus className="h-4 w-4" />
                {ar ? 'محادثة جديدة' : 'New chat'}
              </button>
              <ul className="mt-3 max-h-[420px] space-y-1 overflow-y-auto">
                {threads.map((t) => (
                  <li
                    key={t.id}
                    className={`group flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors ${
                      t.id === threadId ? 'bg-brand/10 text-brand' : 'text-muted-foreground hover:bg-secondary'
                    }`}
                  >
                    <button
                      onClick={() => navigate(`/chat/${t.id}`)}
                      className="flex min-w-0 flex-1 items-center gap-2 text-start"
                    >
                      <MessageSquare className="h-4 w-4 shrink-0" />
                      <span className="truncate">{t.title}</span>
                    </button>
                    <button
                      onClick={() => remove(t.id)}
                      aria-label={ar ? 'حذف' : 'Delete'}
                      className="opacity-0 transition-opacity group-hover:opacity-100 hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </li>
                ))}
                {threads.length === 0 && (
                  <li className="px-3 py-6 text-center text-xs text-muted-foreground">
                    {ar ? 'لا توجد محادثات بعد' : 'No conversations yet'}
                  </li>
                )}
              </ul>
            </aside>

            <div className="flex h-[min(72vh,680px)] flex-col overflow-hidden rounded-2xl border border-border bg-card">
              <ChatPanel key={threadId ?? 'new'} threadId={threadId ?? null} ensureThread={ensureThread} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
