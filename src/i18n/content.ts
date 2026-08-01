export type Lang = "ar" | "en";

export const content = {
  ar: {
    dir: "rtl",
    brand: {
      name: "العزب",
      domain: "ai-azab.co",
      tagline: "هندسة معمارية مدعومة بالذكاء الاصطناعي",
    },
    nav: {
      services: "الخدمات",
      ai: "الأتمتة الذكية",
      projects: "المشاريع",
      process: "منهجية العمل",
      contact: "تواصل معنا",
      cta: "احجز استشارة",
      langLabel: "EN",
    },
    hero: {
      badge: "شركة العزب للخدمات الهندسية",
      title1: "نصمّم العمارة",
      title2: "وندير التنفيذ",
      title3: "بذكاء اصطناعي",
      subtitle:
        "خبرة هندسية معمارية راسخة، مدعومة بمنظومة أتمتة ذكية تختصر زمن التصميم، تضبط التكاليف، وترفع دقة التنفيذ في كل مرحلة من مراحل المشروع.",
      ctaPrimary: "ابدأ مشروعك",
      ctaSecondary: "استكشف الحلول الذكية",
      scroll: "مرّر للأسفل",
      sound: "تشغيل الصوت",
    },
    stats: [
      { value: "+18", label: "سنة خبرة في السوق الهندسي" },
      { value: "+420", label: "مشروع معماري منفّذ" },
      { value: "%40", label: "اختصار في زمن دورة التصميم" },
      { value: "%99", label: "التزام بمواعيد التسليم" },
    ],
    services: {
      eyebrow: "خدماتنا الهندسية",
      title: "خدمات معمارية متكاملة من الفكرة إلى التسليم",
      subtitle:
        "فريق معماري وإنشائي متخصص يغطي دورة حياة المشروع كاملة بمعايير جودة عالمية.",
      items: [
        {
          title: "التصميم المعماري",
          desc: "تصميمات سكنية وتجارية وإدارية تجمع بين الهوية المحلية والكفاءة الوظيفية.",
        },
        {
          title: "التصميم الداخلي والتشطيبات",
          desc: "حلول داخلية متكاملة مع جداول مواد دقيقة ورؤية بصرية واقعية قبل التنفيذ.",
        },
        {
          title: "التصميم الإنشائي",
          desc: "حسابات إنشائية معتمدة ومخططات تنفيذية مطابقة للأكواد الهندسية.",
        },
        {
          title: "إدارة وإشراف التنفيذ",
          desc: "متابعة ميدانية، ضبط جودة، وتقارير دورية توثّق تقدّم الأعمال أولًا بأول.",
        },
        {
          title: "حصر الكميات والتكاليف",
          desc: "جداول كميات ومقايسات تفصيلية تحمي ميزانية المشروع من الانحراف.",
        },
        {
          title: "نمذجة BIM ثلاثية الأبعاد",
          desc: "نموذج معلومات بناء موحّد يكشف التعارضات قبل نزولها للموقع.",
        },
      ],
    },
    ai: {
      eyebrow: "منظومة الذكاء الاصطناعي",
      title: "الأتمتة التي تُشغّل مكتبنا الهندسي",
      subtitle:
        "العزب شركة خدمات هندسية معمارية أولًا؛ ونستخدم الذكاء الاصطناعي كأداة تشغيلية لرفع سرعة ودقة العمل، لا كواجهة تسويقية.",
      items: [
        {
          title: "مساعد ذكي لطلبات العملاء",
          desc: "استقبال طلبات التصميم وتصنيفها وتحويلها لفريق التخصص خلال دقائق.",
        },
        {
          title: "تحليل المخططات آليًا",
          desc: "مراجعة المخططات واكتشاف التعارضات والملاحظات المتكررة قبل الاعتماد.",
        },
        {
          title: "تقدير التكلفة التنبؤي",
          desc: "نماذج تقديرية تعتمد على بيانات مشاريعنا السابقة لتقريب الميزانية بدقة.",
        },
        {
          title: "تقارير الموقع الذكية",
          desc: "تحويل صور وملاحظات الموقع إلى تقارير تقدّم منظّمة قابلة للمشاركة.",
        },
        {
          title: "أرشيف معرفي موحّد",
          desc: "بحث فوري داخل عقود ومواصفات وكودات المشاريع بلغة طبيعية.",
        },
        {
          title: "لوحات متابعة لحظية",
          desc: "مؤشرات أداء حيّة لكل مشروع: الجدول الزمني، الصرف، ونسب الإنجاز.",
        },
      ],
    },
    projects: {
      eyebrow: "أعمالنا",
      title: "مشاريع تتحدث عن نفسها",
      subtitle: "نماذج من أعمالنا في التصميم المعماري والإشراف الهندسي.",
      items: [
        { title: "نمذجة BIM لمجمع إداري", tag: "نمذجة رقمية" },
        { title: "كمبوند سكني متكامل", tag: "تصميم وإشراف" },
        { title: "واجهة برج تجاري", tag: "تصميم معماري" },
      ],
      cta: "اطلب ملف أعمالنا الكامل",
    },
    process: {
      eyebrow: "منهجية العمل",
      title: "أربع مراحل واضحة، بلا مفاجآت",
      steps: [
        { title: "الدراسة والتحليل", desc: "فهم الموقع والاحتياج والميزانية وتحديد نطاق العمل بدقة." },
        { title: "التصميم والنمذجة", desc: "مخططات ونماذج ثلاثية الأبعاد مع مراجعة ذكية للتعارضات." },
        { title: "التوثيق والتسعير", desc: "مخططات تنفيذية وجداول كميات ومقايسات معتمدة." },
        { title: "الإشراف والتسليم", desc: "متابعة ميدانية وتقارير دورية حتى التسليم النهائي." },
      ],
    },
    contact: {
      eyebrow: "لنبدأ",
      title: "احجز استشارة هندسية مجانية",
      subtitle:
        "أخبرنا بتفاصيل مشروعك وسيتواصل معك أحد مهندسينا خلال 24 ساعة عمل.",
      name: "الاسم",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      project: "نوع المشروع",
      message: "تفاصيل المشروع",
      submit: "إرسال الطلب",
      success: "تم استلام طلبك، سنتواصل معك قريبًا.",
      projectTypes: ["سكني", "تجاري", "إداري", "أتمتة وذكاء اصطناعي", "أخرى"],
      infoTitle: "بيانات التواصل",
      email_v: "info@ai-azab.co",
      site_v: "ai-azab.co",
      hours: "السبت – الخميس · 9 ص – 6 م",
    },
    footer: {
      about:
        "شركة العزب للخدمات الهندسية المعمارية — نصمم ونشرف وننفذ بمعايير احترافية، مدعومين بمنظومة أتمتة ذكية.",
      quick: "روابط سريعة",
      services: "خدماتنا",
      rights: "جميع الحقوق محفوظة",
    },
  },
  en: {
    dir: "ltr",
    brand: {
      name: "AL AZAB",
      domain: "ai-azab.co",
      tagline: "AI-powered architectural engineering",
    },
    nav: {
      services: "Services",
      ai: "AI Automation",
      projects: "Projects",
      process: "Process",
      contact: "Contact",
      cta: "Book a consultation",
      langLabel: "ع",
    },
    hero: {
      badge: "Al Azab Engineering Services",
      title1: "We design architecture",
      title2: "and manage delivery",
      title3: "with applied AI",
      subtitle:
        "Established architectural engineering expertise, powered by an automation layer that shortens design cycles, controls cost, and raises execution accuracy at every project stage.",
      ctaPrimary: "Start your project",
      ctaSecondary: "Explore AI solutions",
      scroll: "Scroll",
      sound: "Sound on",
    },
    stats: [
      { value: "18+", label: "Years in engineering" },
      { value: "420+", label: "Projects delivered" },
      { value: "40%", label: "Faster design cycles" },
      { value: "99%", label: "On-time delivery" },
    ],
    services: {
      eyebrow: "Engineering services",
      title: "Full-cycle architecture, from concept to handover",
      subtitle:
        "An architectural and structural team covering the entire project lifecycle to international quality standards.",
      items: [
        { title: "Architectural design", desc: "Residential, commercial and corporate designs balancing local identity with functional efficiency." },
        { title: "Interior design & finishes", desc: "Complete interior packages with precise material schedules and photoreal previews." },
        { title: "Structural design", desc: "Certified structural calculations and shop drawings compliant with engineering codes." },
        { title: "Construction supervision", desc: "On-site follow-up, quality control and periodic reports documenting real progress." },
        { title: "Quantities & cost control", desc: "Detailed BOQs and estimates that protect the project budget from drift." },
        { title: "3D BIM modelling", desc: "A single building information model that catches clashes before they reach site." },
      ],
    },
    ai: {
      eyebrow: "AI layer",
      title: "The automation that runs our engineering office",
      subtitle:
        "Al Azab is an architectural engineering firm first. AI is an operational tool we use for speed and accuracy — not a marketing badge.",
      items: [
        { title: "Client intake assistant", desc: "Design requests captured, classified and routed to the right team in minutes." },
        { title: "Automated drawing review", desc: "Plans checked for clashes and recurring issues before approval." },
        { title: "Predictive cost estimation", desc: "Models trained on our own project history to tighten budget accuracy." },
        { title: "Smart site reporting", desc: "Site photos and notes turned into structured, shareable progress reports." },
        { title: "Unified knowledge archive", desc: "Instant natural-language search across contracts, specs and codes." },
        { title: "Live project dashboards", desc: "Real-time KPIs per project: schedule, spend and completion rates." },
      ],
    },
    projects: {
      eyebrow: "Selected work",
      title: "Projects that speak for themselves",
      subtitle: "A sample of our architectural design and supervision work.",
      items: [
        { title: "BIM model for a corporate complex", tag: "Digital modelling" },
        { title: "Integrated residential compound", tag: "Design & supervision" },
        { title: "Commercial tower facade", tag: "Architectural design" },
      ],
      cta: "Request our full portfolio",
    },
    process: {
      eyebrow: "How we work",
      title: "Four clear stages, no surprises",
      steps: [
        { title: "Study & analysis", desc: "Understanding site, needs and budget, then fixing a precise scope." },
        { title: "Design & modelling", desc: "Drawings and 3D models with AI-assisted clash review." },
        { title: "Documentation & pricing", desc: "Shop drawings, BOQs and approved cost estimates." },
        { title: "Supervision & handover", desc: "Field follow-up and periodic reporting through final delivery." },
      ],
    },
    contact: {
      eyebrow: "Get started",
      title: "Book a free engineering consultation",
      subtitle: "Tell us about your project and one of our engineers will reply within 24 business hours.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      project: "Project type",
      message: "Project details",
      submit: "Send request",
      success: "Request received — we'll be in touch shortly.",
      projectTypes: ["Residential", "Commercial", "Corporate", "AI & automation", "Other"],
      infoTitle: "Contact details",
      email_v: "info@ai-azab.co",
      site_v: "ai-azab.co",
      hours: "Sat – Thu · 9am – 6pm",
    },
    footer: {
      about:
        "Al Azab Architectural Engineering Services — design, supervision and delivery to professional standards, powered by an intelligent automation layer.",
      quick: "Quick links",
      services: "Services",
      rights: "All rights reserved",
    },
  },
} as const;

export type Content = (typeof content)["ar"];
