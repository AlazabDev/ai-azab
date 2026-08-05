'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/i18n/LanguageProvider'

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const match = value.match(/\d+/)
  const target = match ? parseInt(match[0], 10) : 0
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView || !target) return
    let raf = 0
    const start = performance.now()
    const duration = 1200
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return <span ref={ref}>{match ? value.replace(match[0], String(n)) : value}</span>
}

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
            className="group px-4 py-4"
          >
            <div className="text-3xl sm:text-5xl font-black tracking-tight text-brand transition-transform duration-300 group-hover:-translate-y-0.5">
              <CountUp value={s.value} />
            </div>
            <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
