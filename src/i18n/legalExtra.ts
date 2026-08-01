import type { LegalDoc } from './legal'

const COMPANY_EN = 'Al Azab Engineering Services'
const COMPANY_AR = 'شركة العزب للخدمات الهندسية'
const EMAIL = 'info@ai-azab.co'
const SITE = 'ai-alazab.co'
const UPDATED_EN = 'Last updated: 1 August 2026'
const UPDATED_AR = 'آخر تحديث: 1 أغسطس 2026'

export const extraEn: LegalDoc[] = [
  {
    slug: 'acceptable-use',
    title: 'Acceptable Use Policy',
    description: `Rules for using ${SITE} and the AI-assisted engineering tools offered by ${COMPANY_EN}.`,
    updated: UPDATED_EN,
    intro: `This Acceptable Use Policy sets out what is and is not permitted when using ${SITE}, including any AI-assisted features. It is maintained by ${COMPANY_EN} and forms part of our Terms of Service.`,
    sections: [
      {
        heading: 'Permitted use',
        body: [
          'The website and its AI-assisted features are provided for legitimate engineering, architectural and business enquiries.',
          'You may submit project information you own or are authorised to share for the purpose of receiving a proposal or technical response.',
        ],
      },
      {
        heading: 'Prohibited activities',
        body: [
          'Uploading or requesting content that is unlawful, defamatory, infringing, discriminatory, sexually explicit or harmful.',
          'Attempting to bypass security controls, probe our infrastructure, scrape content at scale, or overload the service.',
          'Using AI outputs to impersonate licensed professionals, forge stamped drawings, or produce documents presented as certified engineering approvals.',
          'Submitting personal data of other people without a lawful basis, or confidential material you are not permitted to disclose.',
          'Reverse engineering, reselling or redistributing our AI features or outputs as a competing service.',
        ],
      },
      {
        heading: 'AI-specific rules',
        body: [
          'AI-assisted outputs are drafts and decision support only. They must be reviewed by a qualified engineer before any construction, procurement or regulatory use.',
          'Do not submit prompts intended to generate unsafe structural guidance, or to circumvent building codes and local regulations.',
        ],
      },
      {
        heading: 'Enforcement',
        body: [
          'We may restrict or suspend access, remove submitted content, and where required report unlawful activity to competent authorities.',
          `Report abuse or security concerns to ${EMAIL}.`,
        ],
      },
    ],
  },
  {
    slug: 'refund-policy',
    title: 'Payment and Refund Policy',
    description: `Payment terms, cancellation and refund conditions for services from ${COMPANY_EN}.`,
    updated: UPDATED_EN,
    intro: `This policy explains how payments, cancellations and refunds are handled for engineering and AI-assisted services delivered by ${COMPANY_EN}. Specific contracts may add terms; where they conflict, the signed contract prevails.`,
    sections: [
      {
        heading: 'Pricing and payment',
        body: [
          'Fees for design, supervision, BIM and AI-assisted services are quoted per project or per agreed milestone before work starts.',
          'No payment is collected directly through this website. Invoices are issued separately and paid through the method stated in the proposal.',
        ],
      },
      {
        heading: 'Cancellation',
        body: [
          'You may cancel an engagement in writing at any time. Work completed and costs already incurred up to the cancellation date remain payable.',
          'For subscription-style retainers, cancellation takes effect at the end of the current billing period unless agreed otherwise.',
        ],
      },
      {
        heading: 'Refunds',
        body: [
          'Advance payments are refundable pro-rata for deliverables not yet started, less any third-party costs already committed on your behalf.',
          'Delivered design deliverables, issued drawings and completed AI processing are non-refundable, since the work cannot be returned.',
          'Approved refunds are issued to the original payment method within 14 business days of approval.',
        ],
      },
      {
        heading: 'Disputes',
        body: [
          `If you believe an invoice is incorrect, contact ${EMAIL} within 14 days of the invoice date with the details, and we will review and respond in writing.`,
        ],
      },
    ],
  },
  {
    slug: 'ai-disclaimer',
    title: 'AI Disclaimer',
    description: 'How AI-assisted features are used at Al Azab, their limits, and the role of human engineering review.',
    updated: UPDATED_EN,
    intro: `${COMPANY_EN} uses AI as an automation layer that supports our engineers. This page explains what that means and what it does not mean.`,
    sections: [
      {
        heading: 'What our AI does',
        body: [
          'Assists with drawing review, quantity and cost estimation support, document drafting, and faster turnaround on routine engineering tasks.',
          'Produces suggestions, summaries and draft outputs that are then checked by our engineering team.',
        ],
      },
      {
        heading: 'What our AI is not',
        body: [
          'It is not a licensed engineer, and its output is not a stamped or certified engineering document.',
          'It does not replace site inspection, structural verification, regulatory approval or professional judgement.',
          'It may produce incomplete or incorrect results; accuracy is not guaranteed.',
        ],
      },
      {
        heading: 'Human oversight',
        body: [
          'Every deliverable released to a client is reviewed and approved by a qualified member of our engineering team before issue.',
        ],
      },
      {
        heading: 'Your responsibility',
        body: [
          'Do not rely on AI-generated content on this website for construction, safety, financial or legal decisions without professional confirmation.',
          `Questions about how AI is used in a specific deliverable: ${EMAIL}.`,
        ],
      },
    ],
  },
]

export const extraAr: LegalDoc[] = [
  {
    slug: 'acceptable-use',
    title: 'سياسة الاستخدام المقبول',
    description: `قواعد استخدام ${SITE} والأدوات الهندسية المدعومة بالذكاء الاصطناعي من ${COMPANY_AR}.`,
    updated: UPDATED_AR,
    intro: `توضّح هذه السياسة ما هو مسموح وما هو ممنوع عند استخدام ${SITE}، بما في ذلك الخصائص المدعومة بالذكاء الاصطناعي، وهي جزء من شروط الاستخدام.`,
    sections: [
      {
        heading: 'الاستخدام المسموح',
        body: [
          'الموقع وخصائصه المدعومة بالذكاء الاصطناعي مخصّصة للاستفسارات الهندسية والمعمارية والتجارية المشروعة.',
          'يمكنك إرسال معلومات المشروع التي تملكها أو لديك تفويض بمشاركتها بهدف الحصول على عرض أو رد فني.',
        ],
      },
      {
        heading: 'الأنشطة الممنوعة',
        body: [
          'رفع أو طلب محتوى غير قانوني أو تشهيري أو منتهك للحقوق أو تمييزي أو مسيء.',
          'محاولة تجاوز إجراءات الأمان أو فحص البنية التقنية أو سحب المحتوى آليًا أو إرهاق الخدمة.',
          'استخدام مخرجات الذكاء الاصطناعي لانتحال صفة مهندس مرخّص أو تزوير مخططات معتمدة أو إصدار مستندات تُقدَّم كاعتمادات هندسية رسمية.',
          'إرسال بيانات شخصية لأشخاص آخرين دون أساس قانوني، أو مواد سرّية غير مصرّح بالإفصاح عنها.',
          'الهندسة العكسية أو إعادة بيع أو توزيع خصائصنا أو مخرجاتها كخدمة منافسة.',
        ],
      },
      {
        heading: 'قواعد خاصة بالذكاء الاصطناعي',
        body: [
          'مخرجات الذكاء الاصطناعي مسوّدات ودعم قرار فقط، ويجب مراجعتها من مهندس مؤهل قبل أي استخدام تنفيذي أو تعاقدي أو رقابي.',
          'يُمنع استخدام الأوامر لتوليد إرشادات إنشائية غير آمنة أو للالتفاف على أكواد البناء واللوائح المحلية.',
        ],
      },
      {
        heading: 'التطبيق',
        body: [
          'يحق لنا تقييد الوصول أو إيقافه وحذف المحتوى المرسل، وإبلاغ الجهات المختصة عند وجود نشاط غير قانوني.',
          `للإبلاغ عن إساءة استخدام أو مشكلة أمنية: ${EMAIL}.`,
        ],
      },
    ],
  },
  {
    slug: 'refund-policy',
    title: 'سياسة الدفع والاسترداد',
    description: `شروط الدفع والإلغاء والاسترداد لخدمات ${COMPANY_AR}.`,
    updated: UPDATED_AR,
    intro: `توضّح هذه السياسة طريقة التعامل مع المدفوعات والإلغاء والاسترداد للخدمات الهندسية والخدمات المدعومة بالذكاء الاصطناعي من ${COMPANY_AR}. وعند التعارض مع عقد موقّع، يسود العقد.`,
    sections: [
      {
        heading: 'الأسعار والدفع',
        body: [
          'تُحدَّد أتعاب التصميم والإشراف ونمذجة BIM والخدمات المدعومة بالذكاء الاصطناعي لكل مشروع أو مرحلة متفق عليها قبل بدء العمل.',
          'لا يتم تحصيل أي مدفوعات مباشرة عبر هذا الموقع، وتصدر الفواتير بشكل منفصل وتُسدَّد بالوسيلة الموضّحة في العرض.',
        ],
      },
      {
        heading: 'الإلغاء',
        body: [
          'يمكنك إلغاء التعاقد كتابيًا في أي وقت، مع استحقاق قيمة الأعمال المنجزة والتكاليف المتكبدة حتى تاريخ الإلغاء.',
          'في حالة الاشتراكات الشهرية، يسري الإلغاء في نهاية الدورة الحالية ما لم يُتفق على غير ذلك.',
        ],
      },
      {
        heading: 'الاسترداد',
        body: [
          'المبالغ المقدمة قابلة للاسترداد بالتناسب عن الأعمال التي لم تبدأ بعد، بعد خصم أي تكاليف خارجية تم الالتزام بها نيابة عنك.',
          'المخرجات المسلّمة والمخططات الصادرة والمعالجة المكتملة بالذكاء الاصطناعي غير قابلة للاسترداد لتعذّر إرجاع العمل.',
          'تُصرف المبالغ المعتمدة إلى وسيلة الدفع الأصلية خلال 14 يوم عمل من الموافقة.',
        ],
      },
      {
        heading: 'الاعتراضات',
        body: [
          `إذا رأيت خطأً في فاتورة، راسلنا على ${EMAIL} خلال 14 يومًا من تاريخها مع التفاصيل وسنراجعها ونرد كتابيًا.`,
        ],
      },
    ],
  },
  {
    slug: 'ai-disclaimer',
    title: 'إخلاء مسؤولية الذكاء الاصطناعي',
    description: 'كيفية استخدام الذكاء الاصطناعي في العزب وحدوده ودور المراجعة الهندسية البشرية.',
    updated: UPDATED_AR,
    intro: `تستخدم ${COMPANY_AR} الذكاء الاصطناعي كطبقة أتمتة تدعم فريق المهندسين، وتوضّح هذه الصفحة ما يعنيه ذلك وما لا يعنيه.`,
    sections: [
      {
        heading: 'ما يقوم به الذكاء الاصطناعي لدينا',
        body: [
          'المساعدة في مراجعة المخططات، ودعم حصر الكميات وتقدير التكاليف، وصياغة المستندات، وتسريع المهام الهندسية المتكررة.',
          'إنتاج اقتراحات وملخّصات ومسوّدات تخضع بعد ذلك لمراجعة فريقنا الهندسي.',
        ],
      },
      {
        heading: 'ما لا يقوم به',
        body: [
          'ليس مهندسًا مرخّصًا، ومخرجاته ليست مستندًا هندسيًا معتمدًا أو مختومًا.',
          'لا يغني عن المعاينة الميدانية والتحقق الإنشائي والموافقات الرسمية والحكم المهني.',
          'قد ينتج نتائج ناقصة أو غير دقيقة، والدقة غير مضمونة.',
        ],
      },
      {
        heading: 'الإشراف البشري',
        body: ['كل مخرج يُسلَّم للعميل يُراجع ويُعتمد من عضو مؤهل في الفريق الهندسي قبل الإصدار.'],
      },
      {
        heading: 'مسؤوليتك',
        body: [
          'لا تعتمد على المحتوى المولَّد بالذكاء الاصطناعي في قرارات تنفيذية أو مالية أو قانونية أو متعلقة بالسلامة دون تأكيد مهني.',
          `للاستفسار عن استخدام الذكاء الاصطناعي في مخرج معيّن: ${EMAIL}.`,
        ],
      },
    ],
  },
]
