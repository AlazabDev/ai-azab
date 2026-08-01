'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/i18n/LanguageProvider'

export function Process() {
  const { t } = useLang()
  return (
    <section id="process" className="border-t border-border bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{t.process.eyebrow}</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
            {t.process.title}
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative border-t-2 border-border pt-6 transition-colors hover:border-brand"
            >
              <span className="text-5xl font-black text-brand/25">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
