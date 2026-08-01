'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'

import { useLang } from '@/i18n/LanguageProvider'

export function Navbar() {
  const { t, toggle, isRTL } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [open])

  const links = [
    { href: '/#services', label: t.nav.services },
    { href: '/#ai', label: t.nav.ai },
    { href: '/#projects', label: t.nav.projects },
    { href: '/#process', label: t.nav.process },
    { href: '/#contact', label: t.nav.contact },
  ]

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[110] transition-all duration-300 ${
          scrolled ? 'bg-background/85 backdrop-blur-xl border-b border-border' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center shrink-0" aria-label="ai-azab.co">
            <img src="/logo-mark.png" alt="شركة العزب للخدمات الهندسية — ai-azab.co" className="h-8 w-auto" width={732} height={186} />
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-bold text-foreground hover:border-brand hover:text-brand transition-colors"
              aria-label="Switch language"
            >
              <Globe className="w-3.5 h-3.5" />
              {t.nav.langLabel}
            </button>
            <a
              href="/#contact"
              className="hidden sm:inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-brand-foreground hover:bg-brand-soft transition-colors"
            >
              {t.nav.cta}
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden rounded-full border border-border p-2.5 text-foreground"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:hidden fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl pt-24 px-6"
          onClick={() => setOpen(false)}
        >
          <div className="flex flex-col gap-2" dir={isRTL ? 'rtl' : 'ltr'}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-4 text-lg font-bold text-foreground border-b border-border"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-full bg-brand px-6 py-4 text-center font-bold text-brand-foreground"
            >
              {t.nav.cta}
            </a>
          </div>
        </motion.div>
      )}
    </>
  )
}
