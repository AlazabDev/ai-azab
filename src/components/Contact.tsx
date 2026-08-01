'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Globe, Clock, CheckCircle2, Loader2 } from 'lucide-react'
import { supabase } from '@/integrations/supabase/client'
import { useLang } from '@/i18n/LanguageProvider'

export function Contact() {
  const { t, lang } = useLang()
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    setSending(true)
    setError(null)
    const { error } = await supabase.from('leads').insert({
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      phone: String(form.get('phone') || ''),
      project_type: String(form.get('project_type') || ''),
      message: String(form.get('message') || ''),
      lang,
    })
    setSending(false)
    if (error) setError(error.message)
    else setDone(true)
  }

  const field =
    'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-brand transition-colors'

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{t.contact.eyebrow}</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
            {t.contact.title}
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed">{t.contact.subtitle}</p>

          <div className="mt-10 space-y-4">
            <h3 className="text-sm font-bold text-foreground">{t.contact.infoTitle}</h3>
            {[
              { Icon: Mail, value: t.contact.email_v, href: `mailto:${t.contact.email_v}` },
              { Icon: Globe, value: t.contact.site_v, href: 'https://ai-alazab.co' },
              { Icon: Clock, value: t.contact.hours },
            ].map(({ Icon, value, href }) => (
              <div key={value} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="h-4 w-4" />
                </span>
                {href ? (
                  <a href={href} className="hover:text-brand transition-colors">
                    {value}
                  </a>
                ) : (
                  <span>{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          {done ? (
            <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
              <CheckCircle2 className="h-12 w-12 text-brand" />
              <p className="text-lg font-bold text-foreground">{t.contact.success}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <input name="name" required placeholder={t.contact.name} className={field} />
              <input name="email" type="email" required placeholder={t.contact.email} className={field} />
              <input name="phone" placeholder={t.contact.phone} className={field} />
              <select name="project_type" defaultValue="" className={field} required>
                <option value="" disabled>
                  {t.contact.project}
                </option>
                {t.contact.projectTypes.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                rows={5}
                placeholder={t.contact.message}
                className={`${field} sm:col-span-2 resize-none`}
              />
              {error && <p className="sm:col-span-2 text-sm text-destructive">{error}</p>}
              <button
                type="submit"
                disabled={sending}
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-brand-foreground hover:bg-brand-soft transition-colors disabled:opacity-60"
              >
                {sending && <Loader2 className="h-4 w-4 animate-spin" />}
                {t.contact.submit}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
