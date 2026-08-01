'use client'

import { motion } from 'framer-motion'
import bim from '@/assets/project-bim.jpg'
import compound from '@/assets/project-compound.jpg'
import tower from '@/assets/project-tower.jpg'
import { useLang } from '@/i18n/LanguageProvider'

const images = [bim, compound, tower]

export function Projects() {
  const { t } = useLang()
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{t.projects.eyebrow}</span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
              {t.projects.title}
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">{t.projects.subtitle}</p>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-bold text-foreground hover:border-brand hover:text-brand transition-colors"
          >
            {t.projects.cta}
          </a>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {t.projects.items.map((p, i) => (
            <motion.figure
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border"
            >
              <img
                src={images[i]}
                alt={p.title}
                loading="lazy"
                width={1200}
                height={900}
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6">
                <span className="text-xs font-bold uppercase tracking-widest text-brand">{p.tag}</span>
                <h3 className="mt-1.5 text-lg font-bold text-foreground">{p.title}</h3>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
