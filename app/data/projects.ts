import type { L } from './types'

export type ProjectCategory = 'web' | 'mobile' | 'erp' | 'marketing' | 'branding'

export interface Project {
  slug: string
  title: L
  client: L
  category: ProjectCategory
  year: number
  summary: L
  description: L
  challenge: L
  solution: L
  stack: string[]
  results: { value: string; label: L }[]
  gradient: [string, string]
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'nova-pay',
    title: { en: 'NovaPay Wallet', ar: 'محفظة نوفا باي' },
    client: { en: 'NovaPay', ar: 'نوفا باي' },
    category: 'mobile',
    year: 2026,
    summary: {
      en: 'A secure digital wallet serving 400k+ users across the MENA region.',
      ar: 'محفظة رقمية آمنة تخدم أكثر من 400 ألف مستخدم في منطقة الشرق الأوسط وشمال أفريقيا.',
    },
    description: {
      en: 'We designed and built NovaPay’s flagship mobile wallet from the ground up — instant transfers, bill payments and virtual cards in one beautifully simple app.',
      ar: 'صممنا وطورنا تطبيق محفظة نوفا باي من الصفر — تحويلات فورية ودفع فواتير وبطاقات افتراضية في تطبيق واحد بسيط وجميل.',
    },
    challenge: {
      en: 'NovaPay needed to launch in three markets within six months while meeting strict central-bank compliance requirements.',
      ar: 'احتاجت نوفا باي للإطلاق في ثلاث أسواق خلال ستة أشهر مع الالتزام بمتطلبات البنك المركزي الصارمة.',
    },
    solution: {
      en: 'A Flutter app on top of a modular Node.js microservice backend, with biometric auth, real-time fraud scoring and a design system shared across web and mobile.',
      ar: 'تطبيق Flutter مبني على خدمات Node.js مصغّرة، مع تسجيل دخول بالبصمة وكشف فوري للاحتيال ونظام تصميم موحد للويب والموبايل.',
    },
    stack: ['Flutter', 'Node.js', 'PostgreSQL', 'Kafka', 'AWS'],
    results: [
      { value: '400k+', label: { en: 'Active users', ar: 'مستخدم نشط' } },
      { value: '4.8★', label: { en: 'App store rating', ar: 'تقييم المتجر' } },
      { value: '6 mo', label: { en: 'Time to market', ar: 'مدة الإطلاق' } },
    ],
    gradient: ['#22d3ee', '#6366f1'],
    featured: true,
  },
  {
    slug: 'orbit-commerce',
    title: { en: 'Orbit Commerce', ar: 'أوربت للتجارة الإلكترونية' },
    client: { en: 'Orbit Retail Group', ar: 'مجموعة أوربت للتجزئة' },
    category: 'web',
    year: 2025,
    summary: {
      en: 'Headless e-commerce platform that tripled online revenue in a year.',
      ar: 'منصة تجارة إلكترونية حديثة ضاعفت المبيعات أونلاين ثلاث مرات خلال عام.',
    },
    description: {
      en: 'A blazing-fast headless storefront for a 120-branch retail chain, unified with their stock and loyalty systems.',
      ar: 'متجر إلكتروني فائق السرعة لسلسلة تجزئة تضم 120 فرعًا، مربوط بأنظمة المخزون وبرامج الولاء.',
    },
    challenge: {
      en: 'The legacy store was slow, hard to update and disconnected from in-store inventory.',
      ar: 'كان المتجر القديم بطيئًا وصعب التحديث وغير مربوط بمخزون الفروع.',
    },
    solution: {
      en: 'Nuxt storefront on the edge, a headless CMS for merchandisers and real-time inventory sync with LIXSOS ERP.',
      ar: 'واجهة متجر Nuxt على الحافة، ونظام إدارة محتوى لفريق المبيعات، ومزامنة فورية للمخزون مع نظام LIXSOS ERP.',
    },
    stack: ['Nuxt', 'TypeScript', 'Strapi', 'Redis', 'Cloudflare'],
    results: [
      { value: '3.2×', label: { en: 'Online revenue', ar: 'المبيعات أونلاين' } },
      { value: '0.9s', label: { en: 'Avg. page load', ar: 'متوسط تحميل الصفحة' } },
      { value: '+68%', label: { en: 'Conversion rate', ar: 'معدل التحويل' } },
    ],
    gradient: ['#a855f7', '#ec4899'],
    featured: true,
  },
  {
    slug: 'medicore-erp',
    title: { en: 'MediCore Hospital ERP', ar: 'نظام ERP لمستشفيات ميدي كور' },
    client: { en: 'MediCore Hospitals', ar: 'مستشفيات ميدي كور' },
    category: 'erp',
    year: 2025,
    summary: {
      en: 'End-to-end ERP rollout for a network of 9 hospitals.',
      ar: 'تطبيق نظام ERP متكامل لشبكة من 9 مستشفيات.',
    },
    description: {
      en: 'We deployed and customised LIXSOS ERP across finance, procurement, pharmacy inventory and HR for a growing hospital group.',
      ar: 'نفذنا وخصصنا نظام LIXSOS ERP للمالية والمشتريات ومخزون الصيدليات والموارد البشرية لمجموعة مستشفيات متنامية.',
    },
    challenge: {
      en: 'Nine hospitals running on spreadsheets and four disconnected systems with no single source of truth.',
      ar: 'تسع مستشفيات تعمل بجداول Excel وأربعة أنظمة منفصلة بدون مصدر موحد للبيانات.',
    },
    solution: {
      en: 'A phased LIXSOS ERP rollout with custom pharmacy and insurance-claim modules, plus BI dashboards for leadership.',
      ar: 'تطبيق مرحلي لنظام LIXSOS ERP مع وحدات مخصصة للصيدلية ومطالبات التأمين ولوحات تحكم ذكية للإدارة.',
    },
    stack: ['LIXSOS ERP', 'Laravel', 'Vue', 'MySQL', 'Power BI'],
    results: [
      { value: '-35%', label: { en: 'Procurement cost', ar: 'تكلفة المشتريات' } },
      { value: '9', label: { en: 'Hospitals unified', ar: 'مستشفيات موحدة' } },
      { value: '12 wk', label: { en: 'Full rollout', ar: 'مدة التطبيق الكامل' } },
    ],
    gradient: ['#10b981', '#22d3ee'],
    featured: true,
  },
  {
    slug: 'pulse-campaign',
    title: { en: 'Pulse Fitness Launch', ar: 'إطلاق بالس فيتنس' },
    client: { en: 'Pulse Fitness', ar: 'بالس فيتنس' },
    category: 'marketing',
    year: 2026,
    summary: {
      en: 'Performance marketing campaign that filled 5 new gyms before opening.',
      ar: 'حملة تسويق بالأداء ملأت 5 صالات رياضية جديدة قبل افتتاحها.',
    },
    description: {
      en: 'A full-funnel launch campaign — content, paid social, influencer partnerships and a conversion-optimised landing page.',
      ar: 'حملة إطلاق متكاملة — محتوى وإعلانات ممولة وشراكات مع المؤثرين وصفحة هبوط محسّنة للتحويل.',
    },
    challenge: {
      en: 'Pre-sell memberships for five new branches in a crowded market with a limited budget.',
      ar: 'بيع اشتراكات مسبقة لخمسة فروع جديدة في سوق مزدحم وبميزانية محدودة.',
    },
    solution: {
      en: 'Data-driven creative testing across Meta and TikTok, a referral engine and retargeting powered by first-party data.',
      ar: 'اختبار إبداعي مبني على البيانات عبر Meta وTikTok، ونظام إحالات، وإعادة استهداف ببيانات العملاء.',
    },
    stack: ['Meta Ads', 'TikTok Ads', 'GA4', 'HubSpot', 'Figma'],
    results: [
      { value: '12k', label: { en: 'Pre-sold memberships', ar: 'اشتراك مُباع مسبقًا' } },
      { value: '7.4×', label: { en: 'ROAS', ar: 'العائد على الإعلانات' } },
      { value: '-42%', label: { en: 'Cost per lead', ar: 'تكلفة العميل المحتمل' } },
    ],
    gradient: ['#f97316', '#ef4444'],
    featured: true,
  },
  {
    slug: 'atlas-logistics',
    title: { en: 'Atlas Fleet Control', ar: 'أطلس لإدارة الأسطول' },
    client: { en: 'Atlas Logistics', ar: 'أطلس للخدمات اللوجستية' },
    category: 'web',
    year: 2024,
    summary: {
      en: 'Real-time fleet tracking dashboard for 1,800 trucks.',
      ar: 'لوحة تتبع لحظية لأسطول من 1,800 شاحنة.',
    },
    description: {
      en: 'Live map, route optimisation and driver performance analytics in a single control-room dashboard.',
      ar: 'خريطة مباشرة وتحسين للمسارات وتحليلات أداء السائقين في لوحة تحكم واحدة.',
    },
    challenge: {
      en: 'Dispatchers juggled phone calls and spreadsheets to track deliveries.',
      ar: 'كان فريق التوزيع يتابع الشحنات بالمكالمات وجداول Excel.',
    },
    solution: {
      en: 'A WebSocket-driven dashboard with Mapbox, predictive ETAs and automatic customer notifications.',
      ar: 'لوحة تحكم لحظية مع Mapbox وتوقع مواعيد الوصول وإشعارات تلقائية للعملاء.',
    },
    stack: ['Vue', 'Go', 'Mapbox', 'TimescaleDB', 'GCP'],
    results: [
      { value: '-18%', label: { en: 'Fuel cost', ar: 'تكلفة الوقود' } },
      { value: '98%', label: { en: 'On-time delivery', ar: 'التسليم في الموعد' } },
      { value: '1.8k', label: { en: 'Vehicles tracked', ar: 'مركبة متتبعة' } },
    ],
    gradient: ['#3b82f6', '#22d3ee'],
  },
  {
    slug: 'luma-rebrand',
    title: { en: 'Luma Coffee Rebrand', ar: 'هوية لوما كوفي الجديدة' },
    client: { en: 'Luma Coffee', ar: 'لوما كوفي' },
    category: 'branding',
    year: 2024,
    summary: {
      en: 'A warm, modern identity for a specialty coffee chain.',
      ar: 'هوية دافئة وعصرية لسلسلة قهوة مختصة.',
    },
    description: {
      en: 'Brand strategy, visual identity, packaging and a social content system for a fast-growing coffee brand.',
      ar: 'استراتيجية علامة تجارية وهوية بصرية وتغليف ونظام محتوى للسوشيال ميديا لعلامة قهوة سريعة النمو.',
    },
    challenge: {
      en: 'Luma looked like every other café and struggled to stand out on social.',
      ar: 'كانت لوما تشبه أي مقهى آخر وتجد صعوبة في التميز على السوشيال ميديا.',
    },
    solution: {
      en: 'A bold new identity built around motion, custom typography and a recognisable content style.',
      ar: 'هوية جديدة جريئة قائمة على الحركة وخطوط مخصصة وأسلوب محتوى مميز.',
    },
    stack: ['Brand strategy', 'Illustrator', 'After Effects', 'Instagram'],
    results: [
      { value: '+210%', label: { en: 'Instagram followers', ar: 'متابعي إنستجرام' } },
      { value: '14', label: { en: 'New branches', ar: 'فرع جديد' } },
      { value: '+31%', label: { en: 'Avg. basket', ar: 'متوسط الفاتورة' } },
    ],
    gradient: ['#eab308', '#f97316'],
  },
  {
    slug: 'edura-lms',
    title: { en: 'Edura Learning Platform', ar: 'منصة إديورا التعليمية' },
    client: { en: 'Edura Academy', ar: 'أكاديمية إديورا' },
    category: 'web',
    year: 2025,
    summary: {
      en: 'Live-class LMS serving 60k students and 900 teachers.',
      ar: 'منصة تعليم بفصول مباشرة تخدم 60 ألف طالب و900 معلم.',
    },
    description: {
      en: 'Interactive classrooms, assessments and parent reporting in a platform that scales to exam-season peaks.',
      ar: 'فصول تفاعلية واختبارات وتقارير لأولياء الأمور في منصة تتحمل ضغط مواسم الامتحانات.',
    },
    challenge: {
      en: 'Their off-the-shelf LMS crashed every exam season.',
      ar: 'كانت منصتهم الجاهزة تتوقف في كل موسم امتحانات.',
    },
    solution: {
      en: 'An autoscaling Nuxt + NestJS platform with WebRTC classrooms and an AI-assisted grading workflow.',
      ar: 'منصة Nuxt وNestJS قابلة للتوسع تلقائيًا مع فصول WebRTC وتصحيح بمساعدة الذكاء الاصطناعي.',
    },
    stack: ['Nuxt', 'NestJS', 'WebRTC', 'PostgreSQL', 'Kubernetes'],
    results: [
      { value: '60k', label: { en: 'Students', ar: 'طالب' } },
      { value: '99.98%', label: { en: 'Uptime', ar: 'وقت التشغيل' } },
      { value: '-60%', label: { en: 'Grading time', ar: 'وقت التصحيح' } },
    ],
    gradient: ['#8b5cf6', '#22d3ee'],
  },
  {
    slug: 'souq-mobile',
    title: { en: 'Souq Express App', ar: 'تطبيق سوق إكسبريس' },
    client: { en: 'Souq Express', ar: 'سوق إكسبريس' },
    category: 'mobile',
    year: 2026,
    summary: {
      en: 'On-demand grocery delivery app with 30-minute delivery.',
      ar: 'تطبيق توصيل بقالة عند الطلب خلال 30 دقيقة.',
    },
    description: {
      en: 'Customer, rider and store apps working together in real time to deliver groceries in under 30 minutes.',
      ar: 'تطبيقات للعميل والمندوب والمتجر تعمل معًا لحظيًا لتوصيل الطلبات في أقل من 30 دقيقة.',
    },
    challenge: {
      en: 'Coordinate stock, riders and customers across three apps without delays.',
      ar: 'تنسيق المخزون والمناديب والعملاء عبر ثلاثة تطبيقات بدون تأخير.',
    },
    solution: {
      en: 'React Native apps with a shared real-time core, smart batching of orders and in-app marketing automation.',
      ar: 'تطبيقات React Native بنواة لحظية مشتركة وتجميع ذكي للطلبات وأتمتة تسويقية داخل التطبيق.',
    },
    stack: ['React Native', 'Firebase', 'Node.js', 'Algolia'],
    results: [
      { value: '27 min', label: { en: 'Avg. delivery', ar: 'متوسط التوصيل' } },
      { value: '250k', label: { en: 'Downloads', ar: 'تحميل' } },
      { value: '+45%', label: { en: 'Repeat orders', ar: 'الطلبات المتكررة' } },
    ],
    gradient: ['#06b6d4', '#10b981'],
  },
]

export const projectCategories: ('all' | ProjectCategory)[] = [
  'all',
  'web',
  'mobile',
  'erp',
  'marketing',
  'branding',
]
