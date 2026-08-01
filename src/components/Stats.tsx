'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/i18n/LanguageProvider'

export function Stats() {
  const { t } = useLang()
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px lg:grid-cols-4 px-5 sm:px-8 py-14">
        {t.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="px-4 py-4"
          >
            <div className="text-3xl sm:text-5xl font-black tracking-tight text-brand">{s.value}</div>
            <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
