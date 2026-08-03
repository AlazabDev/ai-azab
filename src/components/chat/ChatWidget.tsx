'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, X, Maximize2, Plus } from 'lucide-react'
import { azabot } from '@/lib/azabot'
import { useLang } from '@/i18n/LanguageProvider'
import { ChatPanel } from './ChatPanel'

export function ChatWidget() {
  const { lang, isRTL } = useLang()
  const ar = lang === 'ar'
  const [open, setOpen] = useState(false)
  const [threadId, setThreadId] = useState<string | null>(null)
  const creating = useRef<Promise<string> | null>(null)

  useEffect(() => {
    if (!open || threadId) return
    azabot
      .listThreads()
      .then((list) => list[0] && setThreadId(list[0].id))
      .catch(() => undefined)
  }, [open, threadId])

  const ensureThread = useCallback(async () => {
    if (threadId) return threadId
    if (!creating.current) {
      creating.current = azabot.createThread(lang).then((t) => {
        setThreadId(t.id)
        creating.current = null
        return t.id
      })
    }
    return creating.current
  }, [threadId, lang])

  const newChat = async () => {
    const t = await azabot.createThread(lang)
    setThreadId(t.id)
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={ar ? 'افتح المساعد الذكي' : 'Open AI assistant'}
        className={`fixed bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-2xl transition-transform hover:scale-105 ${
          isRTL ? 'left-5' : 'right-5'
        }`}
      >
        {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className={`fixed bottom-24 z-50 flex h-[min(70vh,560px)] w-[min(92vw,400px)] flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl ${
              isRTL ? 'left-5' : 'right-5'
            }`}
          >
            <header className="flex items-center justify-between gap-3 border-b border-border bg-card px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-brand-foreground">
                  <Bot className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    {ar ? 'عزبوت (AzaBot)' : 'AzaBot'}
                  </p>
                  <p className="text-[11px] text-brand">{ar ? 'المساعد الذكي · متصل' : 'AI assistant · online'}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={newChat}
                  aria-label={ar ? 'محادثة جديدة' : 'New chat'}
                  className="rounded-lg p-2 text-muted-foreground hover:text-brand"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <Link
                  to="/chat"
                  aria-label={ar ? 'عرض كامل' : 'Full view'}
                  className="rounded-lg p-2 text-muted-foreground hover:text-brand"
                >
                  <Maximize2 className="h-4 w-4" />
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  aria-label={ar ? 'إغلاق' : 'Close'}
                  className="rounded-lg p-2 text-muted-foreground hover:text-brand"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </header>

            <ChatPanel threadId={threadId} ensureThread={ensureThread} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
