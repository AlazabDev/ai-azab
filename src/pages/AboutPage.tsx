import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { useLang } from '@/i18n/LanguageProvider'

export default function AboutPage() {
  const { lang } = useLang()
  const ar = lang === 'ar'

  useEffect(() => {
    document.title = ar ? 'عن الشركة | العزب للخدمات الهندسية' : 'About Us | Al Azab Engineering Services'
    const meta = document.querySelector('meta[name="description"]')
    if (meta)
      meta.setAttribute(
        'content',
        ar
          ? 'معلومات عن شركة العزب للخدمات الهندسية: النشاط، الخدمات، الموقع الرسمي وبيانات التواصل.'
          : 'Company information for Al Azab Engineering Services: activity, services, official website and contact details.',
      )
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', 'https://ai-alazab.co/about')
    window.scrollTo(0, 0)
  }, [ar])

  const blocks = ar
    ? [
        {
          h: 'من نحن',
          p: [
            'شركة العزب للخدمات الهندسية شركة متخصصة في التصميم المعماري والإنشائي والإشراف على التنفيذ ونمذجة معلومات البناء (BIM).',
            'نحن لسنا شركة تقنية؛ نحن مكتب هندسي يستخدم الذكاء الاصطناعي كطبقة أتمتة تدعم دقة وسرعة العمل الهندسي.',
          ],
        },
        {
          h: 'ما نقدمه',
          p: [
            'التصميم المعماري والداخلي، التصميم الإنشائي، الإشراف على التنفيذ، نمذجة BIM، ودعم حصر الكميات وتقدير التكاليف.',
            'كل المخرجات تُراجع وتُعتمد من مهندسين مؤهلين قبل التسليم.',
          ],
        },
        {
          h: 'بيانات الشركة',
          p: [
            'الاسم: شركة العزب للخدمات الهندسية',
            'الموقع الرسمي: ai-alazab.co',
            'البريد الإلكتروني: info@ai-azab.co',
            'نطاق الخدمة: جمهورية مصر العربية والمنطقة',
          ],
        },
      ]
    : [
        {
          h: 'Who we are',
          p: [
            'Al Azab Engineering Services is an engineering practice specialising in architectural and structural design, construction supervision and BIM modelling.',
            'We are not a technology company. We are an engineering office that uses AI as an automation layer supporting the accuracy and speed of engineering work.',
          ],
        },
        {
          h: 'What we deliver',
          p: [
            'Architectural and interior design, structural design, construction supervision, BIM modelling, and quantity and cost estimation support.',
            'Every deliverable is reviewed and approved by qualified engineers before issue.',
          ],
        },
        {
          h: 'Company details',
          p: [
            'Name: Al Azab Engineering Services',
            'Official website: ai-alazab.co',
            'Email: info@ai-azab.co',
            'Service area: Egypt and the wider region',
          ],
        },
      ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main role="main" className="mx-auto max-w-3xl px-5 sm:px-8 pt-32 pb-24">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          {ar ? 'معلومات الشركة' : 'About the company'}
        </h1>
        <div className="mt-10 space-y-10">
          {blocks.map((b) => (
            <section key={b.h}>
              <h2 className="text-xl font-bold text-foreground">{b.h}</h2>
              <div className="mt-3 space-y-3">
                {b.p.map((x, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                    {x}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <Link
          to="/contact"
          className="mt-12 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-soft transition-colors"
        >
          {ar ? 'تواصل معنا' : 'Contact us'}
        </Link>
      </main>
      <Footer />
    </div>
  )
}
