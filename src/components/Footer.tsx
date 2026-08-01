'use client'


import { useLang } from '@/i18n/LanguageProvider'

export function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <img src="/logo-mark.png" alt="Al Azab" className="h-7 w-auto" width={64} height={32} />
            <span className="text-lg font-extrabold tracking-tight text-foreground">
              ai-azab<span className="text-brand">.co</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{t.footer.about}</p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-foreground">{t.footer.quick}</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {[
              { href: '#services', label: t.nav.services },
              { href: '#ai', label: t.nav.ai },
              { href: '#projects', label: t.nav.projects },
              { href: '#process', label: t.nav.process },
              { href: '#contact', label: t.nav.contact },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-brand transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-foreground">{t.footer.services}</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {t.services.items.slice(0, 5).map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 sm:px-8 py-5 text-xs text-muted-foreground">
          <span>
            © {year} {t.brand.name} — {t.footer.rights}
          </span>
          <a href="mailto:info@ai-azab.co" className="hover:text-brand transition-colors">
            info@ai-azab.co
          </a>
        </div>
      </div>
    </footer>
  )
}
