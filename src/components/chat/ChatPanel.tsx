'use client'

import { useEffect, useRef, useState } from 'react'
import { Send, Loader2, Bot } from 'lucide-react'
import { azabot, type ChatMessage } from '@/lib/azabot'
import { useLang } from '@/i18n/LanguageProvider'

const suggestions = {
  en: [
    'What services does Al Azab offer?',
    'How do you use BIM and AI?',
    'I need a finishing quote',
    'Where are your offices?',
  ],
  ar: [
    'ما هي خدمات الشركة؟',
    'كيف تستخدمون البيم والذكاء الاصطناعي؟',
    'أريد عرض سعر تشطيب',
    'ما هي فروع الشركة؟',
  ],
}

export function ChatPanel({
  threadId,
  ensureThread,
  className = '',
}: {
  threadId: string | null
  ensureThread: () => Promise<string>
  className?: string
}) {
  const { lang, isRTL } = useLang()
  const ar = lang === 'ar'
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const endRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    let active = true
    if (!threadId) {
      setMessages([])
      return
    }
    azabot
      .getMessages(threadId)
      .then((m) => active && setMessages(m))
      .catch(() => active && setMessages([]))
    return () => {
      active = false
    }
  }, [threadId])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, busy])

  useEffect(() => {
    inputRef.current?.focus()
  }, [threadId])

  const submit = async (text: string) => {
    const value = text.trim()
    if (!value || busy) return
    setInput('')
    setError(null)
    setBusy(true)
    const optimistic: ChatMessage = {
      id: `tmp-${Date.now()}`,
      role: 'user',
      content: value,
      created_at: new Date().toISOString(),
    }
    setMessages((prev) => [...prev, optimistic])
    try {
      const id = threadId ?? (await ensureThread())
      const res = await azabot.send(id, value)
      setMessages((prev) => [
        ...prev.filter((m) => m.id !== optimistic.id),
        res.userMessage,
        res.assistantMessage,
      ])
    } catch (e) {
      setMessages((prev) => prev.filter((m) => m.id !== optimistic.id))
      setInput(value)
      setError(e instanceof Error ? e.message : String(e))
    } finally {
      setBusy(false)
      inputRef.current?.focus()
    }
  }

  return (
    <div className={`flex min-h-0 flex-1 flex-col ${className}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-6 sm:px-6">
        {messages.length === 0 && (
          <div className="flex flex-col items-center gap-4 py-10 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
              <Bot className="h-7 w-7" />
            </span>
            <div>
              <p className="text-lg font-bold text-foreground">
                {ar ? 'مرحباً! أنا عزبوت 👋' : "Hi, I'm AzaBot 👋"}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {ar ? 'كيف يمكنني مساعدتك؟' : 'How can I help you today?'}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestions[ar ? 'ar' : 'en'].map((s) => (
                <button
                  key={s}
                  onClick={() => submit(s)}
                  className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-brand hover:text-brand"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m) =>
          m.role === 'user' ? (
            <div key={m.id} className="flex justify-end">
              <p className="max-w-[85%] whitespace-pre-wrap rounded-2xl bg-brand px-4 py-2.5 text-sm font-medium leading-relaxed text-brand-foreground">
                {m.content}
              </p>
            </div>
          ) : (
            <div key={m.id} className="flex gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Bot className="h-4 w-4" />
              </span>
              <p className="max-w-[85%] whitespace-pre-wrap text-sm leading-relaxed text-foreground">
                {m.content}
              </p>
            </div>
          ),
        )}

        {busy && (
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-brand">
              <Bot className="h-4 w-4" />
            </span>
            <span className="animate-pulse">{ar ? 'يكتب…' : 'Thinking…'}</span>
          </div>
        )}

        {error && <p className="text-sm text-destructive">{error}</p>}
        <div ref={endRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          void submit(input)
        }}
        className="border-t border-border bg-card/60 p-3 sm:p-4"
      >
        <div className="flex items-end gap-2 rounded-2xl border border-border bg-background p-2 focus-within:border-brand transition-colors">
          <textarea
            ref={inputRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                void submit(input)
              }
            }}
            placeholder={ar ? 'اكتب رسالتك…' : 'Type your message…'}
            className="max-h-40 min-h-[40px] flex-1 resize-none bg-transparent px-2 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          <button
            type="submit"
            disabled={busy || !input.trim()}
            aria-label={ar ? 'إرسال' : 'Send'}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
          >
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </button>
        </div>
        <p className="mt-2 text-center text-[11px] text-muted-foreground">
          {ar ? 'مدعوم بالذكاء الاصطناعي · قد يخطئ أحياناً' : 'AI powered · may occasionally be inaccurate'}
        </p>
      </form>
    </div>
  )
}
