'use client'

import { motion } from 'framer-motion'
import { Building2, Sofa, Ruler, HardHat, Calculator, Boxes } from 'lucide-react'
import { useLang } from '@/i18n/LanguageProvider'

const icons = [Building2, Sofa, Ruler, HardHat, Calculator, Boxes]

export function Services() {
  const { t } = useLang()
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{t.services.eyebrow}</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
            {t.services.title}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">{t.services.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border bg-card p-7 transition-colors duration-300 hover:border-brand/60 hover:shadow-[0_18px_40px_-24px_hsl(var(--brand)/0.55)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
