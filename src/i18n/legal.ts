export type LegalSection = { heading: string; body: string[] }
export type LegalDoc = {
  slug: string
  title: string
  description: string
  updated: string
  intro: string
  sections: LegalSection[]
}

const COMPANY_EN = 'Al Azab Engineering Services'
const COMPANY_AR = 'شركة العزب للخدمات الهندسية'
const EMAIL = 'info@ai-azab.co'
const SITE = 'ai-alazab.co'
const UPDATED_EN = 'Last updated: 1 August 2026'
const UPDATED_AR = 'آخر تحديث: 1 أغسطس 2026'

export const legalEn: LegalDoc[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    description: `How ${COMPANY_EN} collects, uses and protects personal data on ${SITE}.`,
    updated: UPDATED_EN,
    intro: `This Privacy Policy explains how ${COMPANY_EN} ("we", "us") handles personal data collected through ${SITE}. This page is maintained by the app owner and describes our current practices.`,
    sections: [
      {
        heading: 'Data we collect',
        body: [
          'Contact data you submit through our consultation form: name, email address, phone number, project type and the project details you choose to share.',
          'Basic technical data generated when you browse the site, such as pages viewed, approximate region, browser type and referring page.',
          'We do not knowingly collect data from children under 16, and we do not ask for payment card details on this website.',
        ],
      },
      {
        heading: 'How we use your data',
        body: [
          'To respond to consultation requests and prepare engineering proposals.',
          'To communicate about ongoing or prospective projects.',
          'To maintain, secure and improve the website.',
          'We do not sell personal data to third parties.',
        ],
      },
      {
        heading: 'Legal bases',
        body: [
          'Where applicable law requires a legal basis, we rely on your consent when you submit a form, our legitimate interest in operating and securing the website, and contract performance when we deliver engineering services.',
        ],
      },
      {
        heading: 'Service providers',
        body: [
          'The website is built and hosted on the Lovable platform, with backend data storage provided by Supabase. These providers process data on our behalf under their own security and privacy terms.',
          'If we add analytics or advertising partners (for example Google or Meta measurement tools), they will be listed here before activation.',
        ],
      },
      {
        heading: 'Retention',
        body: [
          'Consultation enquiries are retained for as long as needed to serve the request and to keep a record of the business relationship, and are deleted on request unless we must keep them for legal or accounting reasons.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'You may request access to, correction of, or deletion of your personal data, and you may object to or restrict certain processing.',
          `To exercise any right, email ${EMAIL}. We aim to reply within 30 days.`,
        ],
      },
      {
        heading: 'Security',
        body: [
          'Data is transmitted over HTTPS and stored with access controls on our backend. No online service can guarantee absolute security, but we work to protect data against unauthorised access.',
        ],
      },
      {
        heading: 'Contact',
        body: [`Questions about this policy: ${EMAIL}.`],
      },
    ],
  },
  {
    slug: 'terms-of-service',
    title: 'Terms of Service',
    description: `The terms that govern use of the ${SITE} website operated by ${COMPANY_EN}.`,
    updated: UPDATED_EN,
    intro: `By accessing ${SITE} you agree to these Terms of Service. If you do not agree, please stop using the website.`,
    sections: [
      {
        heading: 'About the service',
        body: [
          `${COMPANY_EN} is an architectural engineering firm providing architectural and structural design, construction supervision, quantity surveying, BIM modelling and AI-assisted workflow automation. This website presents those services and allows visitors to request a consultation.`,
        ],
      },
      {
        heading: 'Acceptable use',
        body: [
          'Do not use the website unlawfully, attempt to breach its security, scrape it at a scale that harms performance, or submit false or misleading information through our forms.',
        ],
      },
      {
        heading: 'Enquiries are not contracts',
        body: [
          'Submitting the consultation form does not create a binding engagement. Engineering work begins only after a signed scope of work and commercial agreement.',
        ],
      },
      {
        heading: 'Intellectual property',
        body: [
          'The site content, brand marks, drawings and imagery are owned by us or our licensors and may not be reproduced without written permission.',
        ],
      },
      {
        heading: 'Disclaimer and liability',
        body: [
          'Website content is provided for general information and does not constitute engineering advice for a specific site or project.',
          'To the extent permitted by law, we are not liable for indirect or consequential loss arising from use of the website.',
        ],
      },
      {
        heading: 'Changes and governing law',
        body: [
          'We may update these terms; the updated date at the top reflects the current version.',
          'These terms are governed by the laws of the Arab Republic of Egypt.',
        ],
      },
    ],
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    description: `How ${SITE} uses cookies and similar technologies.`,
    updated: UPDATED_EN,
    intro: 'This page explains the cookies and similar storage technologies used on this website.',
    sections: [
      {
        heading: 'Essential storage',
        body: [
          'We use strictly necessary browser storage to keep the site working, including your selected interface language and basic security protections.',
        ],
      },
      {
        heading: 'Analytics and advertising',
        body: [
          'The website does not currently run third-party advertising cookies. If measurement tools such as Google Analytics or the Meta Pixel are enabled in future, this page will be updated and consent will be requested where the law requires it.',
        ],
      },
      {
        heading: 'Managing cookies',
        body: [
          'You can delete or block cookies in your browser settings. Blocking essential storage may affect language selection and form submission.',
        ],
      },
      { heading: 'Contact', body: [`Cookie questions: ${EMAIL}.`] },
    ],
  },
  {
    slug: 'data-deletion',
    title: 'Data Deletion Instructions',
    description: 'How to request deletion of personal data held by Al Azab Engineering Services.',
    updated: UPDATED_EN,
    intro: 'You can ask us to delete the personal data we hold about you at any time. This page describes the process required by platforms such as Meta.',
    sections: [
      {
        heading: 'How to request deletion',
        body: [
          `Send an email to ${EMAIL} with the subject "Data deletion request".`,
          'Include the name, email address and phone number you used when contacting us so we can locate the record.',
        ],
      },
      {
        heading: 'What happens next',
        body: [
          'We confirm receipt, verify that the request comes from the data subject, and delete the matching records within 30 days.',
          'We may retain limited information where retention is required by law, accounting rules, or to resolve a dispute; we will tell you if that applies.',
        ],
      },
      {
        heading: 'Social login data',
        body: [
          'We do not currently operate social login on this website. If you interacted with us through a social platform, deleting your data with us does not delete data held by that platform — use the platform\u2019s own settings for that.',
        ],
      },
    ],
  },
  {
    slug: 'disclaimer',
    title: 'Disclaimer',
    description: 'Professional and content disclaimer for the Al Azab Engineering Services website.',
    updated: UPDATED_EN,
    intro: 'Please read this disclaimer before relying on any information published on this website.',
    sections: [
      {
        heading: 'No professional advice',
        body: [
          'Articles, service descriptions, cost figures and performance metrics on this site are general and illustrative. They are not engineering, legal or financial advice for a specific project. Always engage a qualified engineer for site-specific work.',
        ],
      },
      {
        heading: 'Project imagery',
        body: [
          'Some visuals are conceptual or computer-generated renders used to illustrate design capability and may not depict a delivered project exactly as built.',
        ],
      },
      {
        heading: 'AI-assisted outputs',
        body: [
          'We use AI tools internally to accelerate review, estimation and reporting. AI outputs are always reviewed by our engineers before they inform a deliverable, and we make no claim that AI output alone is a certified engineering result.',
        ],
      },
      {
        heading: 'External links',
        body: [
          'We are not responsible for the content, security or privacy practices of third-party websites linked from this site.',
        ],
      },
    ],
  },
  {
    slug: 'accessibility',
    title: 'Accessibility Statement',
    description: 'Our commitment to an accessible experience on ai-alazab.co.',
    updated: UPDATED_EN,
    intro: 'We want this website to be usable by as many people as possible, including users of assistive technology.',
    sections: [
      {
        heading: 'What we do',
        body: [
          'We aim to follow WCAG 2.1 level AA guidance: semantic structure, readable contrast, keyboard-operable navigation, descriptive alternative text and full right-to-left support for Arabic.',
        ],
      },
      {
        heading: 'Known limitations',
        body: [
          'Some decorative motion and video backgrounds may not suit every user. Enabling the reduced-motion setting in your operating system limits animation on this site.',
        ],
      },
      {
        heading: 'Feedback',
        body: [
          `If you encounter an accessibility barrier, email ${EMAIL} with the page address and a short description, and we will work to resolve it.`,
        ],
      },
    ],
  },
]

export const legalAr: LegalDoc[] = [
  {
    slug: 'privacy-policy',
    title: 'سياسة الخصوصية',
    description: `كيف تجمع ${COMPANY_AR} البيانات الشخصية وتستخدمها وتحميها على ${SITE}.`,
    updated: UPDATED_AR,
    intro: `توضّح هذه السياسة كيفية تعامل ${COMPANY_AR} ("نحن") مع البيانات الشخصية التي تُجمع عبر ${SITE}. هذه الصفحة يديرها مالك الموقع وتصف ممارساتنا الحالية.`,
    sections: [
      {
        heading: 'البيانات التي نجمعها',
        body: [
          'بيانات التواصل التي ترسلها عبر نموذج الاستشارة: الاسم، البريد الإلكتروني، رقم الهاتف، نوع المشروع، وتفاصيل المشروع التي تختار مشاركتها.',
          'بيانات تقنية أساسية تنشأ أثناء التصفح مثل الصفحات المعروضة والمنطقة التقريبية ونوع المتصفح ومصدر الزيارة.',
          'لا نجمع عن قصد بيانات من هم دون 16 عامًا، ولا نطلب بيانات بطاقات الدفع عبر هذا الموقع.',
        ],
      },
      {
        heading: 'كيف نستخدم بياناتك',
        body: [
          'للرد على طلبات الاستشارة وإعداد العروض الهندسية.',
          'للتواصل بشأن المشاريع القائمة أو المحتملة.',
          'لتشغيل الموقع وتأمينه وتحسينه.',
          'لا نبيع البيانات الشخصية لأي طرف ثالث.',
        ],
      },
      {
        heading: 'الأساس القانوني',
        body: [
          'حيثما يتطلب القانون أساسًا قانونيًا، نعتمد على موافقتك عند إرسال النموذج، ومصلحتنا المشروعة في تشغيل الموقع وتأمينه، وتنفيذ العقد عند تقديم الخدمات الهندسية.',
        ],
      },
      {
        heading: 'مزوّدو الخدمة',
        body: [
          'الموقع مبني ومستضاف على منصة Lovable، وتخزين البيانات الخلفية عبر Supabase، ويعالج هؤلاء البيانات نيابةً عنا وفق شروطهم للأمان والخصوصية.',
          'في حال إضافة أدوات تحليلات أو إعلانات (مثل أدوات Google أو Meta) سيتم ذكرها هنا قبل التفعيل.',
        ],
      },
      {
        heading: 'مدة الاحتفاظ',
        body: [
          'نحتفظ بطلبات الاستشارة للمدة اللازمة لخدمة الطلب وتوثيق العلاقة التجارية، ونحذفها عند الطلب ما لم يوجد التزام قانوني أو محاسبي بالاحتفاظ بها.',
        ],
      },
      {
        heading: 'حقوقك',
        body: [
          'يحق لك طلب الوصول إلى بياناتك أو تصحيحها أو حذفها، والاعتراض على بعض المعالجة أو تقييدها.',
          `لممارسة أي حق راسلنا على ${EMAIL}، ونلتزم بالرد خلال 30 يومًا.`,
        ],
      },
      {
        heading: 'الأمان',
        body: [
          'تُنقل البيانات عبر HTTPS وتُخزَّن مع ضوابط وصول. لا يمكن لأي خدمة ضمان أمان مطلق، لكننا نعمل على حماية البيانات من الوصول غير المصرح به.',
        ],
      },
      { heading: 'التواصل', body: [`للاستفسار عن هذه السياسة: ${EMAIL}.`] },
    ],
  },
  {
    slug: 'terms-of-service',
    title: 'شروط الاستخدام',
    description: `الشروط المنظِّمة لاستخدام موقع ${SITE} التابع لـ${COMPANY_AR}.`,
    updated: UPDATED_AR,
    intro: `باستخدامك ${SITE} فإنك توافق على شروط الاستخدام هذه. إن لم توافق عليها يُرجى التوقف عن استخدام الموقع.`,
    sections: [
      {
        heading: 'عن الخدمة',
        body: [
          `${COMPANY_AR} شركة هندسة معمارية تقدّم التصميم المعماري والإنشائي، والإشراف على التنفيذ، وحصر الكميات، ونمذجة BIM، وأتمتة العمليات بالذكاء الاصطناعي. يعرض هذا الموقع تلك الخدمات ويتيح طلب استشارة.`,
        ],
      },
      {
        heading: 'الاستخدام المقبول',
        body: [
          'يُمنع استخدام الموقع بشكل مخالف للقانون أو محاولة اختراقه أو سحب بياناته بصورة تضر بالأداء أو إرسال معلومات غير صحيحة عبر النماذج.',
        ],
      },
      {
        heading: 'الطلبات ليست تعاقدًا',
        body: [
          'إرسال نموذج الاستشارة لا يُنشئ التزامًا تعاقديًا. يبدأ العمل الهندسي فقط بعد توقيع نطاق العمل والاتفاق التجاري.',
        ],
      },
      {
        heading: 'الملكية الفكرية',
        body: [
          'محتوى الموقع والعلامات والمخططات والصور مملوكة لنا أو لمرخّصينا ولا يجوز إعادة استخدامها دون إذن كتابي.',
        ],
      },
      {
        heading: 'إخلاء المسؤولية والحدود',
        body: [
          'محتوى الموقع للمعلومات العامة ولا يُعد استشارة هندسية لمشروع أو موقع بعينه.',
          'في الحدود التي يسمح بها القانون، لا نتحمل مسؤولية الأضرار غير المباشرة أو التبعية الناتجة عن استخدام الموقع.',
        ],
      },
      {
        heading: 'التعديلات والقانون الحاكم',
        body: [
          'قد نحدّث هذه الشروط، ويشير تاريخ التحديث أعلى الصفحة إلى النسخة السارية.',
          'تخضع هذه الشروط لقوانين جمهورية مصر العربية.',
        ],
      },
    ],
  },
  {
    slug: 'cookie-policy',
    title: 'سياسة ملفات الارتباط',
    description: `كيفية استخدام ${SITE} لملفات الارتباط والتقنيات المشابهة.`,
    updated: UPDATED_AR,
    intro: 'توضّح هذه الصفحة ملفات الارتباط وتقنيات التخزين المستخدمة في الموقع.',
    sections: [
      {
        heading: 'التخزين الضروري',
        body: ['نستخدم تخزينًا ضروريًا لتشغيل الموقع، يشمل لغة الواجهة المختارة وحمايات أمان أساسية.'],
      },
      {
        heading: 'التحليلات والإعلانات',
        body: [
          'لا يستخدم الموقع حاليًا ملفات ارتباط إعلانية من أطراف ثالثة. وعند تفعيل أدوات قياس مثل Google Analytics أو Meta Pixel مستقبلًا سيتم تحديث هذه الصفحة وطلب الموافقة حيثما يقتضي القانون.',
        ],
      },
      {
        heading: 'إدارة ملفات الارتباط',
        body: ['يمكنك حذف أو حظر ملفات الارتباط من إعدادات المتصفح، وقد يؤثر حظر التخزين الضروري على اختيار اللغة وإرسال النماذج.'],
      },
      { heading: 'التواصل', body: [`للاستفسار: ${EMAIL}.`] },
    ],
  },
  {
    slug: 'data-deletion',
    title: 'تعليمات حذف البيانات',
    description: 'كيفية طلب حذف بياناتك الشخصية من شركة العزب للخدمات الهندسية.',
    updated: UPDATED_AR,
    intro: 'يمكنك طلب حذف بياناتك الشخصية في أي وقت. توضح هذه الصفحة الإجراء المطلوب من منصات مثل Meta.',
    sections: [
      {
        heading: 'كيفية تقديم الطلب',
        body: [
          `أرسل بريدًا إلى ${EMAIL} بعنوان "طلب حذف بيانات".`,
          'أرفق الاسم والبريد ورقم الهاتف المستخدم عند التواصل معنا للتمكن من تحديد السجل.',
        ],
      },
      {
        heading: 'ماذا يحدث بعد ذلك',
        body: [
          'نؤكد الاستلام، ونتحقق من هوية صاحب البيانات، ثم نحذف السجلات المطابقة خلال 30 يومًا.',
          'قد نحتفظ بمعلومات محدودة عند وجود التزام قانوني أو محاسبي أو نزاع قائم، وسنخبرك بذلك.',
        ],
      },
      {
        heading: 'بيانات تسجيل الدخول الاجتماعي',
        body: [
          'لا نستخدم حاليًا تسجيل الدخول عبر منصات التواصل. وحذف بياناتك لدينا لا يحذف البيانات المحفوظة لدى تلك المنصات؛ استخدم إعداداتها الخاصة لذلك.',
        ],
      },
    ],
  },
  {
    slug: 'disclaimer',
    title: 'إخلاء المسؤولية',
    description: 'إخلاء المسؤولية المهني والمحتوى الخاص بموقع شركة العزب.',
    updated: UPDATED_AR,
    intro: 'يرجى قراءة إخلاء المسؤولية قبل الاعتماد على أي معلومة منشورة في الموقع.',
    sections: [
      {
        heading: 'ليست استشارة مهنية',
        body: [
          'المحتوى ووصف الخدمات والأرقام ومؤشرات الأداء المنشورة عامة وتوضيحية، وليست استشارة هندسية أو قانونية أو مالية لمشروع بعينه. استعن دائمًا بمهندس مؤهل للأعمال الخاصة بموقعك.',
        ],
      },
      {
        heading: 'صور المشاريع',
        body: ['بعض الصور تصورات أو نماذج بصرية توضّح القدرة التصميمية وقد لا تطابق مشروعًا منفّذًا كما هو على الطبيعة.'],
      },
      {
        heading: 'مخرجات الذكاء الاصطناعي',
        body: [
          'نستخدم أدوات الذكاء الاصطناعي داخليًا لتسريع المراجعة والتقدير والتقارير، وتُراجع مخرجاتها دائمًا من مهندسينا قبل اعتمادها، ولا ندّعي أن مخرجات الذكاء الاصطناعي وحدها نتيجة هندسية معتمدة.',
        ],
      },
      {
        heading: 'الروابط الخارجية',
        body: ['لا نتحمل مسؤولية محتوى أو أمان أو خصوصية المواقع الخارجية المرتبطة من موقعنا.'],
      },
    ],
  },
  {
    slug: 'accessibility',
    title: 'بيان إمكانية الوصول',
    description: 'التزامنا بتجربة استخدام متاحة للجميع على ai-alazab.co.',
    updated: UPDATED_AR,
    intro: 'نسعى لأن يكون الموقع قابلًا للاستخدام لأكبر عدد من الناس، بمن فيهم مستخدمو التقنيات المساعدة.',
    sections: [
      {
        heading: 'ما نلتزم به',
        body: [
          'نستهدف الالتزام بمعايير WCAG 2.1 مستوى AA: بنية دلالية، تباين مقروء، تنقّل بلوحة المفاتيح، نصوص بديلة وصفية، ودعم كامل للاتجاه من اليمين لليسار.',
        ],
      },
      {
        heading: 'قيود معروفة',
        body: ['قد لا تناسب بعض الحركات والخلفيات المرئية جميع المستخدمين، وتفعيل خيار تقليل الحركة في نظام التشغيل يقلّل التأثيرات الحركية في الموقع.'],
      },
      {
        heading: 'ملاحظاتك',
        body: [`عند مواجهة أي عائق راسلنا على ${EMAIL} مع عنوان الصفحة ووصف مختصر وسنعمل على معالجته.`],
      },
    ],
  },
]

export const legal = { en: legalEn, ar: legalAr }
