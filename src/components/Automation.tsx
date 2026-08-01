'use client'

import { motion } from 'framer-motion'
import { Bot, ScanLine, LineChart, CameraIcon, Library, Gauge } from 'lucide-react'
import { useLang } from '@/i18n/LanguageProvider'

const icons = [Bot, ScanLine, LineChart, CameraIcon, Library, Gauge]

export function Automation() {
  const { t } = useLang()
  return (
    <section id="ai" className="relative overflow-hidden border-y border-border bg-card py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(var(--brand) 1px, transparent 1px), linear-gradient(90deg, var(--brand) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{t.ai.eyebrow}</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
            {t.ai.title}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">{t.ai.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {t.ai.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                className="group bg-background p-7 transition-colors hover:bg-secondary"
              >
                <Icon className="h-6 w-6 text-brand" />
                <h3 className="mt-5 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
