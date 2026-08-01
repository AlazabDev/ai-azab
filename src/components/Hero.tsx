'use client'

import { motion } from 'framer-motion'
import { Volume2, VolumeX, ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/i18n/LanguageProvider'

export function Hero() {
  const { t, isRTL } = useLang()
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = isMuted
    v.volume = isMuted ? 0 : 0.7
  }, [isMuted])

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden bg-background">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://mojli.s3.us-east-2.amazonaws.com/Mojli+Website+upscaled+(12mb).webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />

      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-8 end-6 sm:end-10 z-30 flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur px-4 py-2.5 text-xs font-semibold text-foreground hover:border-brand hover:text-brand transition-colors"
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        {t.hero.sound}
      </button>

      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 sm:px-8 pb-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-bold text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {t.hero.badge}
          </span>

          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-foreground">
            <span className="block">{t.hero.title1}</span>
            <span className="block">{t.hero.title2}</span>
            <span className="block brand-gradient-text">{t.hero.title3}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-brand-foreground hover:bg-brand-soft transition-colors"
            >
              {t.hero.ctaPrimary}
              <Arrow className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 rtl:group-hover:-translate-x-1" />
            </a>
            <a
              href="#ai"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 backdrop-blur px-7 py-3.5 text-sm font-bold text-foreground hover:border-brand hover:text-brand transition-colors"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
