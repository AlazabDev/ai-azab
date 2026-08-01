import { useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { useLang } from '@/i18n/LanguageProvider'

export default function ContactPage() {
  const { lang } = useLang()
  const ar = lang === 'ar'

  useEffect(() => {
    document.title = ar ? 'تواصل معنا | العزب للخدمات الهندسية' : 'Contact & Support | Al Azab Engineering'
    const meta = document.querySelector('meta[name="description"]')
    if (meta)
      meta.setAttribute(
        'content',
        ar
          ? 'تواصل مع شركة العزب للخدمات الهندسية للاستشارات والدعم: البريد الإلكتروني ومواعيد العمل ونموذج الطلب.'
          : 'Contact Al Azab Engineering Services for consultations and support: email, working hours and enquiry form.',
      )
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', 'https://ai-alazab.co/contact')
    window.scrollTo(0, 0)
  }, [ar])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main role="main" className="pt-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            {ar ? 'التواصل والدعم' : 'Contact & Support'}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {ar
              ? 'فريق العزب متاح للرد على استفسارات المشاريع الهندسية وطلبات الدعم. راسلنا على info@ai-azab.co أو أرسل التفاصيل عبر النموذج أدناه وسنعود إليك خلال يوم عمل واحد.'
              : 'The Al Azab team is available for engineering project enquiries and support requests. Email info@ai-azab.co or send the details through the form below and we will reply within one business day.'}
          </p>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
