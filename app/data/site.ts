import type { L } from './types'

export const site = {
  name: { en: 'LIXSOS Technologies', ar: 'ليكسوس للتكنولوجيا' } as L,
  shortName: 'LIXSOS',
  url: 'https://lixsos.com',
  description: {
    en: 'LIXSOS Technologies is a software development and digital marketing agency building web & mobile products, growth campaigns and LIXSOS ERP — the all-in-one business platform.',
    ar: 'ليكسوس للتكنولوجيا شركة برمجيات وتسويق رقمي نبني مواقع وتطبيقات وحملات نمو، ونظام LIXSOS ERP — المنصة المتكاملة لإدارة الأعمال.',
  } as L,
  email: 'hello@lixsos.com',
  phone: '+20 100 000 0000',
  address: { en: 'Cairo, Egypt', ar: 'القاهرة، مصر' } as L,
  socials: {
    linkedin: 'https://www.linkedin.com/company/lixsos',
    instagram: 'https://www.instagram.com/lixsos',
    x: 'https://x.com/lixsos',
    behance: 'https://www.behance.net/lixsos',
  },
}

/** Labels come from i18n `nav.*` keys. */
export const navLinks = [
  { key: 'home', to: '/' },
  { key: 'services', to: '/services' },
  { key: 'work', to: '/work' },
  { key: 'erp', to: '/erp' },
  { key: 'about', to: '/about' },
]

export const stats: { value: number; suffix: string; label: L }[] = [
  { value: 120, suffix: '+', label: { en: 'Projects delivered', ar: 'مشروع منجز' } },
  { value: 85, suffix: '+', label: { en: 'Happy clients', ar: 'عميل سعيد' } },
  { value: 40, suffix: '+', label: { en: 'Companies on LIXSOS ERP', ar: 'شركة تستخدم LIXSOS ERP' } },
  { value: 9, suffix: '', label: { en: 'Countries served', ar: 'دول نخدمها' } },
]

export const services: { icon: string; title: L; text: L; points: L<string[]> }[] = [
  {
    icon: 'code',
    title: { en: 'Web Development', ar: 'تطوير المواقع والمنصات' },
    text: {
      en: 'High-performance websites, platforms and SaaS products built with modern frameworks and clean architecture.',
      ar: 'مواقع ومنصات ومنتجات SaaS عالية الأداء مبنية بأحدث التقنيات وبنية برمجية نظيفة.',
    },
    points: {
      en: ['Nuxt / Vue / React', 'APIs & microservices', 'Cloud & DevOps'],
      ar: ['Nuxt / Vue / React', 'واجهات API وخدمات مصغّرة', 'الحوسبة السحابية وDevOps'],
    },
  },
  {
    icon: 'mobile',
    title: { en: 'Mobile Apps', ar: 'تطبيقات الموبايل' },
    text: {
      en: 'Native-feeling iOS and Android apps that users love — from MVP to millions of downloads.',
      ar: 'تطبيقات iOS وAndroid بتجربة سلسة يحبها المستخدمون — من النسخة الأولى حتى ملايين التحميلات.',
    },
    points: {
      en: ['Flutter & React Native', 'Real-time features', 'App store launch'],
      ar: ['Flutter وReact Native', 'مزايا لحظية', 'النشر على المتاجر'],
    },
  },
  {
    icon: 'erp',
    title: { en: 'LIXSOS ERP', ar: 'نظام LIXSOS ERP' },
    text: {
      en: 'Our in-house ERP that unifies finance, inventory, HR, sales and CRM — customised to how you work.',
      ar: 'نظامنا الخاص لتخطيط موارد المؤسسات يجمع المالية والمخزون والموارد البشرية والمبيعات وإدارة العملاء — ومخصص لطريقة عملك.',
    },
    points: {
      en: ['Cloud or on-premise', 'Custom modules', 'Arabic & English'],
      ar: ['سحابي أو على خوادمك', 'وحدات مخصصة', 'عربي وإنجليزي'],
    },
  },
  {
    icon: 'growth',
    title: { en: 'Digital Marketing', ar: 'التسويق الرقمي' },
    text: {
      en: 'Performance campaigns, SEO and content that turn attention into measurable revenue.',
      ar: 'حملات أداء وتحسين محركات البحث ومحتوى يحوّل الاهتمام إلى أرباح قابلة للقياس.',
    },
    points: {
      en: ['Paid social & search', 'SEO & content', 'Analytics & CRO'],
      ar: ['إعلانات السوشيال والبحث', 'SEO وصناعة المحتوى', 'التحليلات وتحسين التحويل'],
    },
  },
  {
    icon: 'brand',
    title: { en: 'Branding & UI/UX', ar: 'الهوية البصرية وتجربة المستخدم' },
    text: {
      en: 'Identities and interfaces that feel premium, intuitive and unmistakably yours.',
      ar: 'هويات وواجهات راقية وسهلة الاستخدام وتعبّر عنك بوضوح.',
    },
    points: {
      en: ['Brand identity', 'Product design', 'Design systems'],
      ar: ['الهوية التجارية', 'تصميم المنتجات', 'أنظمة التصميم'],
    },
  },
  {
    icon: 'ai',
    title: { en: 'AI & Automation', ar: 'الذكاء الاصطناعي والأتمتة' },
    text: {
      en: 'Chatbots, smart workflows and data pipelines that save hours every single day.',
      ar: 'روبوتات محادثة وسير عمل ذكي وأنظمة بيانات توفر ساعات كل يوم.',
    },
    points: {
      en: ['AI assistants', 'Process automation', 'BI dashboards'],
      ar: ['مساعدات ذكية', 'أتمتة العمليات', 'لوحات ذكاء الأعمال'],
    },
  },
  {
    icon: 'qa',
    title: { en: 'QA & Testing', ar: 'ضمان الجودة والاختبار' },
    text: {
      en: 'Manual and automated testing that catches bugs before your users do — so every release ships with confidence.',
      ar: 'اختبارات يدوية وآلية تكتشف الأخطاء قبل أن يكتشفها عملاؤك — لتُطلق كل إصدار بثقة.',
    },
    points: {
      en: ['Automated & manual testing', 'Performance & load testing', 'Security checks'],
      ar: ['اختبارات آلية ويدوية', 'اختبارات الأداء والضغط', 'فحوصات الأمان'],
    },
  },
  {
    icon: 'consult',
    title: { en: 'Tech Consultation', ar: 'الاستشارات التقنية' },
    text: {
      en: 'Expert advice on architecture, tech stack and digital strategy — the right decisions before you invest.',
      ar: 'استشارات متخصصة في البنية التقنية واختيار التقنيات والاستراتيجية الرقمية — لتتخذ القرار الصحيح قبل أن تستثمر.',
    },
    points: {
      en: ['Architecture & stack review', 'Digital transformation', 'Project scoping & estimates'],
      ar: ['مراجعة البنية والتقنيات', 'التحول الرقمي', 'تحديد نطاق المشروع والتكلفة'],
    },
  },
  {
    icon: 'maintenance',
    title: { en: 'Support & Maintenance', ar: 'الدعم والصيانة' },
    text: {
      en: 'We keep your systems fast, secure and up to date after launch — with monitoring and a team on call.',
      ar: 'نحافظ على أنظمتك سريعة وآمنة ومحدّثة بعد الإطلاق — مع مراقبة مستمرة وفريق جاهز للدعم.',
    },
    points: {
      en: ['24/7 monitoring', 'Updates & security patches', 'SLA-backed support'],
      ar: ['مراقبة على مدار الساعة', 'تحديثات وترقيعات أمنية', 'دعم مضمون باتفاقية خدمة'],
    },
  },
]

export const processSteps: { title: L; text: L }[] = [
  {
    title: { en: 'Discover', ar: 'الاكتشاف' },
    text: { en: 'Workshops to understand your business, users and goals.', ar: 'ورش عمل لفهم نشاطك وعملائك وأهدافك.' },
  },
  {
    title: { en: 'Design', ar: 'التصميم' },
    text: { en: 'Wireframes, prototypes and a visual language that fits your brand.', ar: 'مخططات ونماذج أولية ولغة بصرية تناسب علامتك.' },
  },
  {
    title: { en: 'Build', ar: 'التطوير' },
    text: { en: 'Agile sprints with demos every two weeks — no black boxes.', ar: 'دورات عمل مرنة مع عرض للتقدم كل أسبوعين — بشفافية كاملة.' },
  },
  {
    title: { en: 'Launch & Grow', ar: 'الإطلاق والنمو' },
    text: { en: 'Go live, measure, market and keep improving together.', ar: 'نطلق ونقيس ونسوّق ونستمر في التطوير معًا.' },
  },
]

/** Brand names stay in Latin script in both languages. */
export const clients = [
  'NovaPay',
  'Orbit Retail',
  'MediCore',
  'Pulse Fitness',
  'Atlas Logistics',
  'Luma Coffee',
  'Edura',
  'Souq Express',
  'Nile Bank',
  'Vertex Motors',
  'Zenith Realty',
  'Greenfield Foods',
]

export const testimonials: { quote: L; name: L; role: L }[] = [
  {
    quote: {
      en: 'LIXSOS shipped our wallet in record time and the quality blew our board away. They feel like part of our own team.',
      ar: 'أطلقت ليكسوس محفظتنا في وقت قياسي وبجودة أبهرت مجلس الإدارة. نشعر أنهم جزء من فريقنا.',
    },
    name: { en: 'Sara Mansour', ar: 'سارة منصور' },
    role: { en: 'CTO, NovaPay', ar: 'المديرة التقنية، نوفا باي' },
  },
  {
    quote: {
      en: 'Moving nine hospitals onto LIXSOS ERP sounded impossible. Twelve weeks later, everything runs from one dashboard.',
      ar: 'نقل تسع مستشفيات إلى LIXSOS ERP بدا مستحيلًا. بعد اثني عشر أسبوعًا أصبح كل شيء يُدار من لوحة واحدة.',
    },
    name: { en: 'Dr. Karim Adel', ar: 'د. كريم عادل' },
    role: { en: 'COO, MediCore Hospitals', ar: 'مدير العمليات، مستشفيات ميدي كور' },
  },
  {
    quote: {
      en: 'Their marketing team thinks like engineers — every dirham is tracked. Our launch beat every target we set.',
      ar: 'فريق التسويق لديهم يفكر كالمهندسين — كل جنيه محسوب. تجاوز إطلاقنا كل الأهداف التي وضعناها.',
    },
    name: { en: 'Omar Fathy', ar: 'عمر فتحي' },
    role: { en: 'Founder, Pulse Fitness', ar: 'المؤسس، بالس فيتنس' },
  },
  {
    quote: {
      en: 'The new storefront is unbelievably fast. Revenue tripled and our merchandisers finally love their tools.',
      ar: 'المتجر الجديد سريع بشكل مذهل. تضاعفت الإيرادات ثلاث مرات وأصبح فريقنا يحب أدواته أخيرًا.',
    },
    name: { en: 'Laila Hassan', ar: 'ليلى حسن' },
    role: { en: 'Head of Digital, Orbit Retail', ar: 'رئيسة التحول الرقمي، أوربت' },
  },
]

export const team: { name: L; role: L; initials: string }[] = [
  { name: { en: 'Ahmed Hesham', ar: 'أحمد هشام' }, role: { en: 'CEO', ar: 'الرئيس التنفيذي' }, initials: 'AH' },
  { name: { en: 'Mohamed Mahmoud', ar: 'محمد محمود' }, role: { en: 'CTO', ar: 'المدير التقني' }, initials: 'MM' },
  { name: { en: 'Mohamed Ayyad', ar: 'محمد عياد' }, role: { en: 'Engineering Manager', ar: 'مدير الهندسة' }, initials: 'MA' },
  { name: { en: 'Abdelrhman Hassan', ar: 'عبدالرحمن حسن' }, role: { en: 'Marketing Director', ar: 'مديرة التسويق' }, initials: 'AH' },
]

export const values: { title: L; text: L }[] = [
  {
    title: { en: 'Craft over shortcuts', ar: 'الإتقان قبل السرعة' },
    text: { en: 'We sweat the details — clean code, sharp design, measurable results.', ar: 'نهتم بأدق التفاصيل — كود نظيف وتصميم دقيق ونتائج قابلة للقياس.' },
  },
  {
    title: { en: 'Radical transparency', ar: 'شفافية كاملة' },
    text: { en: 'Shared boards, demos every sprint, honest estimates. No surprises.', ar: 'لوحات مشتركة وعروض في كل مرحلة وتقديرات صادقة. بلا مفاجآت.' },
  },
  {
    title: { en: 'Growth mindset', ar: 'عقلية النمو' },
    text: { en: 'We don’t stop at launch. We measure, learn and keep improving.', ar: 'لا نتوقف عند الإطلاق. نقيس ونتعلم ونستمر في التحسين.' },
  },
  {
    title: { en: 'Partners, not vendors', ar: 'شركاء لا موردون' },
    text: { en: 'Your goals become our KPIs. We win when you win.', ar: 'أهدافك تصبح مؤشرات أدائنا. نجاحك هو نجاحنا.' },
  },
]

export const timeline: { year: string; text: L }[] = [
  { year: '2019', text: { en: 'LIXSOS founded as a two-person web studio in Cairo.', ar: 'تأسست ليكسوس كاستوديو ويب من شخصين في القاهرة.' } },
  { year: '2021', text: { en: 'Launched our digital marketing division.', ar: 'أطلقنا قسم التسويق الرقمي.' } },
  { year: '2023', text: { en: 'Released LIXSOS ERP to our first 10 customers.', ar: 'أطلقنا نظام LIXSOS ERP لأول 10 عملاء.' } },
  { year: '2025', text: { en: '100+ projects shipped across 9 countries.', ar: 'أكثر من 100 مشروع منجز في 9 دول.' } },
  { year: '2026', text: { en: 'LIXSOS ERP 3.0 with AI-powered insights.', ar: 'إصدار LIXSOS ERP 3.0 بتحليلات مدعومة بالذكاء الاصطناعي.' } },
]
