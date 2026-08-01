import { useEffect } from 'react'
import { Link, useParams, useLocation, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { useLang } from '@/i18n/LanguageProvider'
import { legal } from '@/i18n/legal'

export default function LegalPage() {
  const params = useParams<{ slug: string }>()
  const location = useLocation()
  const slug = params.slug ?? location.pathname.replace(/^\/+|\/+$/g, '')
  const { lang, isRTL } = useLang()
  const docs = legal[lang]
  const doc = docs.find((d) => d.slug === slug)

  useEffect(() => {
    if (!doc) return
    document.title = `${doc.title} | Al Azab Engineering`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', doc.description)
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', `https://ai-alazab.co/${doc.slug}`)
    window.scrollTo(0, 0)
  }, [doc])

  if (!doc) return <Navigate to="/" replace />


  const Arrow = isRTL ? ArrowRight : ArrowLeft

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main role="main" className="mx-auto max-w-3xl px-5 sm:px-8 pt-32 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-brand transition-colors"
        >
          <Arrow className="h-4 w-4" />
          {lang === 'ar' ? 'العودة للرئيسية' : 'Back to home'}
        </Link>

        <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight">{doc.title}</h1>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">{doc.updated}</p>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">{doc.intro}</p>

        <div className="mt-12 space-y-10">
          {doc.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl font-bold text-foreground">{s.heading}</h2>
              <div className="mt-3 space-y-3">
                {s.body.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <nav className="mt-16 border-t border-border pt-8" aria-label={lang === 'ar' ? 'صفحات قانونية' : 'Legal pages'}>
          <h2 className="text-sm font-bold text-foreground">{lang === 'ar' ? 'صفحات قانونية أخرى' : 'Other legal pages'}</h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {docs
              .filter((d) => d.slug !== doc.slug)
              .map((d) => (
                <li key={d.slug}>
                  <Link to={`/legal/${d.slug}`} className="hover:text-brand transition-colors">
                    {d.title}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </main>
      <Footer />
    </div>
  )
}
