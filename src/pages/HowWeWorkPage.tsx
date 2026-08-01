import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Compass, Boxes, Cpu, ClipboardCheck, HardHat, RefreshCw } from 'lucide-react'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { useLang } from '@/i18n/LanguageProvider'

const ICONS = [Compass, Boxes, Cpu, ClipboardCheck, HardHat, RefreshCw]

export default function HowWeWorkPage() {
  const { lang } = useLang()
  const ar = lang === 'ar'

  useEffect(() => {
    document.title = ar
      ? 'كيف نعمل | منهجية BIM والذكاء الاصطناعي — العزب للخدمات الهندسية'
      : 'How We Work | BIM & AI Delivery Method — Al Azab Engineering'
    const meta = document.querySelector('meta[name="description"]')
    if (meta)
      meta.setAttribute(
        'content',
        ar
          ? 'منهجية تنفيذ المشروعات المعمارية في العزب: من التحليل إلى نموذج BIM موحد، مع طبقة أتمتة بالذكاء الاصطناعي لمراجعة التعارضات والكميات والتكاليف.'
          : 'How Al Azab delivers architectural projects: from analysis to a single federated BIM model, with an AI automation layer for clash review, quantities and cost control.',
      )
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', 'https://ai-azab.co/how-we-work')
    window.scrollTo(0, 0)
  }, [ar])

  const intro = ar
    ? 'نحن مكتب هندسي معماري، والذكاء الاصطناعي عندنا ليس منتجًا بل طبقة أتمتة تعمل فوق نموذج BIM لتقليل الأخطاء وتسريع القرار. كل مخرج يمر على مهندس مسؤول قبل الاعتماد.'
    : 'We are an architectural engineering practice. AI is not our product — it is an automation layer running on top of the BIM model to cut errors and speed up decisions. Every deliverable is signed off by a responsible engineer.'

  const steps = ar
    ? [
        {
          h: '١. التحليل وبرنامج المشروع',
          p: 'نبدأ بجلسة تحديد الاحتياج: استعمالات المبنى، المساحات، الميزانية المستهدفة، والاشتراطات التخطيطية للموقع. المخرج هو برنامج مساحي معتمد ومعايير تصميم مكتوبة.',
        },
        {
          h: '٢. التصميم المفاهيمي داخل بيئة BIM',
          p: 'نبني الكتلة الأولية مباشرة كنموذج ثلاثي الأبعاد لا كرسومات مسطحة، فيمكن قياس المساحات والواجهات والتكلفة التقريبية من أول يوم بدل تأجيلها لمرحلة متأخرة.',
        },
        {
          h: '٣. طبقة الأتمتة بالذكاء الاصطناعي',
          p: 'نشغّل مراجعات آلية على النموذج: كشف التعارضات بين المعماري والإنشائي والميكانيكي، فحص الالتزام بالكود، توليد بدائل توزيع الفراغات، وتقدير الكميات والتكاليف الأولية.',
        },
        {
          h: '٤. التنسيق متعدد التخصصات والاعتماد',
          p: 'نجمع نماذج التخصصات في نموذج موحد (Federated Model)، ونعقد جلسات تنسيق دورية تُغلق فيها الملاحظات برقم متابعة حتى الاعتماد الرسمي من المالك.',
        },
        {
          h: '٥. مستندات التنفيذ والإشراف',
          p: 'تُستخرج رسومات التنفيذ وجداول الكميات من النموذج نفسه لضمان التطابق، ثم نتابع الموقع بتقارير دورية ومقارنة المنفّذ بالنموذج المعتمد.',
        },
        {
          h: '٦. التسليم والنموذج التشغيلي',
          p: 'نسلّم النموذج محدثًا كما نُفّذ (As-Built) مع بيانات العناصر، ليكون مرجعًا لأعمال التشغيل والصيانة والتوسعات المستقبلية.',
        },
      ]
    : [
        {
          h: '1. Analysis & project brief',
          p: 'We start with a requirements session: building use, areas, target budget and site planning constraints. The output is an approved area programme and written design criteria.',
        },
        {
          h: '2. Concept design inside BIM',
          p: 'The initial massing is built as a 3D model rather than flat drawings, so areas, facades and indicative cost can be measured from day one instead of late in the process.',
        },
        {
          h: '3. The AI automation layer',
          p: 'Automated reviews run against the model: clash detection across architecture, structure and MEP, code compliance checks, space-planning alternatives, and early quantity and cost estimation.',
        },
        {
          h: '4. Multidisciplinary coordination & sign-off',
          p: 'Discipline models are merged into a single federated model, with recurring coordination sessions where every comment is tracked to closure before formal client approval.',
        },
        {
          h: '5. Construction documents & supervision',
          p: 'Drawings and bills of quantities are extracted from the same model to guarantee consistency, then site progress is monitored against the approved model with periodic reports.',
        },
        {
          h: '6. Handover & operational model',
          p: 'We hand over an as-built model with element data, so it serves as the reference for operation, maintenance and future expansion.',
        },
      ]

  const principles = ar
    ? [
        { h: 'مصدر واحد للحقيقة', p: 'كل الرسومات والكميات تخرج من نموذج واحد، فلا يوجد تعارض بين المستندات.' },
        { h: 'المهندس هو صاحب القرار', p: 'الذكاء الاصطناعي يقترح ويراجع، والاعتماد النهائي دائمًا بتوقيع مهندس مؤهل.' },
        { h: 'تكلفة مرئية مبكرًا', p: 'ربط الكميات بالنموذج يجعل أثر أي تعديل تصميمي على الميزانية واضحًا فورًا.' },
        { h: 'شفافية مع المالك', p: 'تقارير مرحلية ونماذج قابلة للاستعراض بدل الانتظار حتى نهاية المرحلة.' },
      ]
    : [
        { h: 'Single source of truth', p: 'All drawings and quantities come from one model, so documents never contradict each other.' },
        { h: 'The engineer decides', p: 'AI proposes and reviews; final approval always carries a qualified engineer’s signature.' },
        { h: 'Cost visible early', p: 'Model-linked quantities make the budget impact of any design change immediately clear.' },
        { h: 'Transparency with the client', p: 'Stage reports and reviewable models instead of waiting until a phase ends.' },
      ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main role="main" className="mx-auto max-w-4xl px-5 sm:px-8 pt-32 pb-24">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
          {ar ? 'منهجية العمل' : 'Our methodology'}
        </p>
        <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          {ar ? 'كيف نعمل: من الفكرة إلى نموذج BIM منفَّذ' : 'How we work: from brief to a delivered BIM model'}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>

        <div className="mt-16 space-y-5">
          {steps.map((s, i) => {
            const Icon = ICONS[i]
            return (
              <motion.section
                key={s.h}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card/50 p-6 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-lg font-bold">{s.h}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
                  </div>
                </div>
              </motion.section>
            )
          })}
        </div>

        <h2 className="mt-20 text-2xl font-extrabold tracking-tight">
          {ar ? 'المبادئ التي تحكم كل مشروع' : 'Principles behind every project'}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.h} className="rounded-2xl border border-border p-6">
              <h3 className="text-base font-bold">{p.h}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.p}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-brand/30 bg-brand/5 p-8 text-center">
          <h2 className="text-xl font-bold">
            {ar ? 'عندك مشروع وتريد تقييم جدواه الهندسية؟' : 'Have a project you want assessed?'}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {ar
              ? 'ابدأ بجلسة تحليل مجانية نحدد فيها نطاق العمل والمخرجات والجدول الزمني.'
              : 'Start with a free analysis session covering scope, deliverables and timeline.'}
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-brand px-7 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-soft transition-colors"
          >
            {ar ? 'تواصل معنا' : 'Contact us'}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
