import type { L } from './types'

export const site = {
  name: { en: 'LIXSOS Technologies', ar: 'ليكسوس للتكنولوجيا' } as L,
  shortName: 'LIXSOS',
  url: 'https://lixsos.com',
  description: {
    en: 'LIXSOS Technologies is a software development and digital marketing agency building web & mobile products, growth campaigns and LIXSOS ERP, the all-in-one business platform.',
    ar: 'ليكسوس للتكنولوجيا شركة برمجيات وتسويق رقمي نبني مواقع وتطبيقات وحملات نمو، ونظام LIXSOS ERP، المنصة المتكاملة لإدارة الأعمال.',
  } as L,
  email: 'support@lixsos.com',
  phone: '+20 128 936 3389',
  address: { en: 'Cairo, Egypt', ar: 'القاهرة، مصر' } as L,
  socials: {
    x: 'https://x.com/lix_sos',
    instagram: 'https://www.instagram.com/lix.sos',
    facebook: 'https://www.facebook.com/share/1ABJgY9gtq/',
    snapchat: 'https://www.snapchat.com/add/lixsos22',
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

export type Service = {
  icon: string
  slug: string
  title: L
  text: L
  points: L<string[]>
  features: { title: L; text: L }[]
  /** Optional grouped offerings, shown as cards with a list of items. */
  groups?: { title: L; items: { title: L; text?: L }[] }[]
  /** Optional page with more detail (e.g. the ERP product page). */
  more?: string
}

export const services: Service[] = [
  {
    icon: 'code',
    slug: 'web-development',
    title: { en: 'Web Development', ar: 'تطوير المواقع والمنصات' },
    text: {
      en: 'High-performance websites, platforms and SaaS products built with modern frameworks and clean architecture.',
      ar: 'مواقع ومنصات ومنتجات SaaS عالية الأداء مبنية بأحدث التقنيات وبنية برمجية نظيفة.',
    },
    points: {
      en: ['Nuxt / Vue / React', 'APIs & microservices', 'Cloud & DevOps'],
      ar: ['Nuxt / Vue / React', 'واجهات API وخدمات مصغّرة', 'الحوسبة السحابية وDevOps'],
    },
    features: [
      { title: { en: 'Websites & landing pages', ar: 'المواقع وصفحات الهبوط' }, text: { en: 'Fast, responsive, SEO-ready sites designed to turn visitors into leads.', ar: 'مواقع سريعة ومتجاوبة وجاهزة لمحركات البحث مصممة لتحويل الزوار إلى عملاء محتملين.' } },
      { title: { en: 'Web platforms & SaaS', ar: 'المنصات ومنتجات SaaS' }, text: { en: 'Portals, dashboards and multi-tenant products with secure accounts and roles.', ar: 'بوابات ولوحات تحكم ومنتجات متعددة المستأجرين بحسابات وصلاحيات آمنة.' } },
      { title: { en: 'E-commerce', ar: 'التجارة الإلكترونية' }, text: { en: 'Storefronts with payments, shipping and inventory integrations that scale with your sales.', ar: 'متاجر إلكترونية مربوطة بالدفع والشحن والمخزون وتنمو مع مبيعاتك.' } },
      { title: { en: 'APIs & integrations', ar: 'واجهات API والتكاملات' }, text: { en: 'REST and GraphQL APIs that connect payment gateways, ERPs and third-party services.', ar: 'واجهات REST وGraphQL تربط بوابات الدفع وأنظمة ERP والخدمات الخارجية.' } },
      { title: { en: 'Cloud & DevOps', ar: 'السحابة وDevOps' }, text: { en: 'CI/CD pipelines, monitoring and scalable infrastructure on the cloud or your own servers.', ar: 'خطوط نشر آلية ومراقبة وبنية تحتية قابلة للتوسع على السحابة أو خوادمك.' } },
      { title: { en: 'Performance & SEO', ar: 'الأداء وتحسين الظهور' }, text: { en: 'Core Web Vitals, server rendering and structured data built in from day one.', ar: 'سرعة تحميل عالية وعرض من الخادم وبيانات منظمة مدمجة من اليوم الأول.' } },
    ],
  },
  {
    icon: 'mobile',
    slug: 'mobile-apps',
    title: { en: 'Mobile Apps', ar: 'تطبيقات الموبايل' },
    text: {
      en: 'Native-feeling iOS and Android apps that users love, from MVP to millions of downloads.',
      ar: 'تطبيقات iOS وAndroid بتجربة سلسة يحبها المستخدمون، من النسخة الأولى حتى ملايين التحميلات.',
    },
    points: {
      en: ['Flutter & React Native', 'Real-time features', 'App store launch'],
      ar: ['Flutter وReact Native', 'مزايا لحظية', 'النشر على المتاجر'],
    },
    features: [
      { title: { en: 'Cross-platform apps', ar: 'تطبيقات متعددة المنصات' }, text: { en: 'One Flutter or React Native codebase that feels native on iOS and Android.', ar: 'كود واحد بـ Flutter أو React Native يعمل بسلاسة على iOS وAndroid.' } },
      { title: { en: 'Real-time features', ar: 'مزايا لحظية' }, text: { en: 'Chat, live tracking and push notifications that keep users engaged.', ar: 'محادثات وتتبع مباشر وإشعارات فورية تحافظ على تفاعل المستخدمين.' } },
      { title: { en: 'Payments & maps', ar: 'الدفع والخرائط' }, text: { en: 'Local wallets, card gateways and location services wired into your app.', ar: 'محافظ إلكترونية وبوابات دفع وخدمات موقع مدمجة في تطبيقك.' } },
      { title: { en: 'App store launch', ar: 'النشر على المتاجر' }, text: { en: 'Store listings, submission and release management handled end to end.', ar: 'صفحات المتاجر والتقديم وإدارة الإصدارات من البداية للنهاية.' } },
    ],
  },
  {
    icon: 'erp',
    slug: 'lixsos-erp',
    more: '/erp',
    title: { en: 'LIXSOS ERP', ar: 'نظام LIXSOS ERP' },
    text: {
      en: 'Our in-house ERP that unifies finance, inventory, HR, sales and CRM, customised to how you work.',
      ar: 'نظامنا الخاص لتخطيط موارد المؤسسات يجمع المالية والمخزون والموارد البشرية والمبيعات وإدارة العملاء، ومخصص لطريقة عملك.',
    },
    points: {
      en: ['Cloud or on-premise', 'Custom modules', 'Arabic & English'],
      ar: ['سحابي أو على خوادمك', 'وحدات مخصصة', 'عربي وإنجليزي'],
    },
    features: [
      { title: { en: 'Finance & accounting', ar: 'المالية والمحاسبة' }, text: { en: 'General ledger, invoicing, taxes and real-time financial reports.', ar: 'دفتر الأستاذ والفواتير والضرائب وتقارير مالية لحظية.' } },
      { title: { en: 'Inventory & warehouses', ar: 'المخزون والمستودعات' }, text: { en: 'Stock levels, transfers and multi-warehouse tracking in one place.', ar: 'أرصدة المخزون والتحويلات وتتبع عدة مستودعات في مكان واحد.' } },
      { title: { en: 'Sales & POS', ar: 'المبيعات ونقاط البيع' }, text: { en: 'Quotes, orders and point-of-sale connected directly to your stock.', ar: 'عروض الأسعار والطلبات ونقاط البيع مربوطة مباشرة بالمخزون.' } },
      { title: { en: 'HR & payroll', ar: 'الموارد البشرية والرواتب' }, text: { en: 'Employees, attendance, leave and payroll without spreadsheets.', ar: 'الموظفون والحضور والإجازات والرواتب بدون جداول يدوية.' } },
      { title: { en: 'CRM', ar: 'إدارة العملاء' }, text: { en: 'Leads, pipelines and customer history your whole team can see.', ar: 'العملاء المحتملون ومراحل البيع وسجل العملاء متاح لكل الفريق.' } },
      { title: { en: 'Custom modules', ar: 'وحدات مخصصة' }, text: { en: 'Workflows and reports tailored to how your business actually runs.', ar: 'سير عمل وتقارير مصممة حسب طريقة عمل شركتك الفعلية.' } },
    ],
  },
  {
    icon: 'growth',
    slug: 'digital-marketing',
    title: { en: 'Digital Marketing', ar: 'التسويق الرقمي' },
    text: {
      en: 'Performance campaigns, SEO and content that turn attention into measurable revenue.',
      ar: 'حملات أداء وتحسين محركات البحث ومحتوى يحوّل الاهتمام إلى أرباح قابلة للقياس.',
    },
    points: {
      en: ['Paid social & search', 'SEO & content', 'Analytics & CRO'],
      ar: ['إعلانات السوشيال والبحث', 'SEO وصناعة المحتوى', 'التحليلات وتحسين التحويل'],
    },
    features: [
      { title: { en: 'Social media management', ar: 'إدارة السوشيال ميديا' }, text: { en: 'Content calendars, post design and community management across Facebook, Instagram, TikTok and LinkedIn.', ar: 'خطط محتوى وتصميم منشورات وإدارة المجتمع على فيسبوك وإنستجرام وتيك توك ولينكدإن.' } },
      { title: { en: 'Paid advertising', ar: 'الإعلانات الممولة' }, text: { en: 'Meta, Google, TikTok and Snapchat campaigns optimised for leads, sales and ROAS.', ar: 'حملات على ميتا وجوجل وتيك توك وسناب شات محسّنة للعملاء والمبيعات والعائد الإعلاني.' } },
      { title: { en: 'Search engine optimisation', ar: 'تحسين محركات البحث (SEO)' }, text: { en: 'Technical audits, keyword strategy, on-page optimisation and link building that grow organic traffic.', ar: 'فحص تقني واستراتيجية كلمات مفتاحية وتحسين الصفحات وبناء روابط لزيادة الزيارات المجانية.' } },
      { title: { en: 'Content creation', ar: 'صناعة المحتوى' }, text: { en: 'Copywriting, graphics, short-form video and photography that tell your story.', ar: 'كتابة إعلانية وتصاميم وفيديوهات قصيرة وتصوير يحكي قصة علامتك.' } },
      { title: { en: 'Email & automation', ar: 'البريد الإلكتروني والأتمتة' }, text: { en: 'Newsletters, funnels and automated customer journeys that nurture leads into buyers.', ar: 'نشرات بريدية ومسارات تسويقية آلية تحوّل العملاء المحتملين إلى مشترين.' } },
      { title: { en: 'Analytics & reporting', ar: 'التحليلات والتقارير' }, text: { en: 'GA4, pixels and live dashboards so every pound spent is tracked and reported.', ar: 'إعداد GA4 والبكسلات ولوحات متابعة مباشرة لتعرف أين يذهب كل جنيه.' } },
    ],
    groups: [
      {
        title: { en: 'Marketing Strategy', ar: 'استراتيجية التسويق' },
        items: [
          { title: { en: 'Online & offline marketing strategy', ar: 'استراتيجية التسويق الإلكتروني والتقليدي' } },
          { title: { en: 'Full-funnel campaign development', ar: 'تطوير حملات تغطي رحلة العميل كاملة' } },
          { title: { en: 'Data-driven reporting', ar: 'تقارير مبنية على البيانات' } },
          { title: { en: 'Performance analysis', ar: 'تحليل الأداء' } },
        ],
      },
      {
        title: { en: 'Event Management', ar: 'إدارة الفعاليات' },
        items: [
          { title: { en: 'Event planning & coordination', ar: 'تخطيط الفعاليات وتنسيقها' } },
          { title: { en: 'Vendor management', ar: 'إدارة الموردين' } },
          { title: { en: 'Venue selection & setup', ar: 'اختيار المكان وتجهيزه' } },
          { title: { en: 'Post-event analysis', ar: 'تحليل ما بعد الفعالية' } },
        ],
      },
      {
        title: { en: 'Reporting & Analytics', ar: 'التقارير والتحليلات' },
        items: [
          {
            title: { en: 'Performance intelligence', ar: 'ذكاء الأداء' },
            text: { en: 'Live KPI dashboards that put your key metrics at your fingertips.', ar: 'لوحات مؤشرات أداء مباشرة تضع أهم أرقامك بين يديك.' },
          },
          {
            title: { en: 'Objective-led tracking', ar: 'تتبع مرتبط بالأهداف' },
            text: { en: 'Every campaign is measured against your core business goals.', ar: 'نقيس كل حملة مقابل أهداف عملك الأساسية.' },
          },
          {
            title: { en: 'Growth-fueled recommendations', ar: 'توصيات تدفع النمو' },
            text: { en: 'We don’t just report the data; we prescribe the next winning move.', ar: 'لا نكتفي بعرض البيانات، بل نحدد لك الخطوة الرابحة التالية.' },
          },
        ],
      },
    ],
  },
  {
    icon: 'brand',
    slug: 'branding-ui-ux',
    title: { en: 'Branding & UI/UX', ar: 'الهوية البصرية وتجربة المستخدم' },
    text: {
      en: 'Identities and interfaces that feel premium, intuitive and unmistakably yours.',
      ar: 'هويات وواجهات راقية وسهلة الاستخدام وتعبّر عنك بوضوح.',
    },
    points: {
      en: ['Brand identity', 'Product design', 'Design systems'],
      ar: ['الهوية التجارية', 'تصميم المنتجات', 'أنظمة التصميم'],
    },
    features: [
      { title: { en: 'Brand strategy', ar: 'استراتيجية العلامة' }, text: { en: 'Positioning, voice and messaging that set you apart from competitors.', ar: 'تموضع ونبرة ورسائل تميزك عن منافسيك.' } },
      { title: { en: 'Visual identity', ar: 'الهوية البصرية' }, text: { en: 'Logo, colour, typography and brand guidelines ready for every channel.', ar: 'شعار وألوان وخطوط ودليل هوية جاهز لكل القنوات.' } },
      { title: { en: 'UI/UX design', ar: 'تصميم الواجهات وتجربة المستخدم' }, text: { en: 'Research, wireframes and interactive prototypes tested with real users.', ar: 'أبحاث ومخططات ونماذج تفاعلية مختبرة مع مستخدمين حقيقيين.' } },
      { title: { en: 'Design systems', ar: 'أنظمة التصميم' }, text: { en: 'Reusable components that keep every screen consistent as you grow.', ar: 'مكونات قابلة لإعادة الاستخدام تحافظ على تناسق كل الشاشات مع نموك.' } },
    ],
  },
  {
    icon: 'ai',
    slug: 'ai-automation',
    title: { en: 'AI & Automation', ar: 'الذكاء الاصطناعي والأتمتة' },
    text: {
      en: 'Chatbots, smart workflows and data pipelines that save hours every single day.',
      ar: 'روبوتات محادثة وسير عمل ذكي وأنظمة بيانات توفر ساعات كل يوم.',
    },
    points: {
      en: ['AI assistants', 'Process automation', 'BI dashboards'],
      ar: ['مساعدات ذكية', 'أتمتة العمليات', 'لوحات ذكاء الأعمال'],
    },
    features: [
      { title: { en: 'AI assistants & chatbots', ar: 'المساعدات الذكية وروبوتات المحادثة' }, text: { en: 'Assistants trained on your data that answer customers and staff 24/7.', ar: 'مساعدات مدربة على بياناتك ترد على العملاء والموظفين على مدار الساعة.' } },
      { title: { en: 'Process automation', ar: 'أتمتة العمليات' }, text: { en: 'Repetitive tasks across email, sheets and internal tools handled automatically.', ar: 'تنفيذ المهام المتكررة في البريد والجداول والأدوات الداخلية تلقائيًا.' } },
      { title: { en: 'Data pipelines & BI', ar: 'خطوط البيانات وذكاء الأعمال' }, text: { en: 'Clean data flowing into dashboards that show what is really happening.', ar: 'بيانات منظمة تتدفق إلى لوحات تُظهر ما يحدث فعلًا.' } },
      { title: { en: 'AI in your product', ar: 'الذكاء الاصطناعي داخل منتجك' }, text: { en: 'Search, recommendations and document processing added to existing apps.', ar: 'بحث ذكي وتوصيات ومعالجة مستندات تُضاف إلى تطبيقاتك الحالية.' } },
    ],
  },
  {
    icon: 'qa',
    slug: 'qa-testing',
    title: { en: 'QA & Testing', ar: 'ضمان الجودة والاختبار' },
    text: {
      en: 'Manual and automated testing that catches bugs before your users do, so every release ships with confidence.',
      ar: 'اختبارات يدوية وآلية تكتشف الأخطاء قبل أن يكتشفها عملاؤك، لتُطلق كل إصدار بثقة.',
    },
    points: {
      en: ['Automated & manual testing', 'Performance & load testing', 'Security checks'],
      ar: ['اختبارات آلية ويدوية', 'اختبارات الأداء والضغط', 'فحوصات الأمان'],
    },
    features: [
      { title: { en: 'Manual testing', ar: 'الاختبار اليدوي' }, text: { en: 'Exploratory and regression testing across devices and browsers.', ar: 'اختبارات استكشافية وانحدارية على مختلف الأجهزة والمتصفحات.' } },
      { title: { en: 'Test automation', ar: 'الاختبار الآلي' }, text: { en: 'Automated UI and API suites that run on every release.', ar: 'اختبارات آلية للواجهات وواجهات API تعمل مع كل إصدار.' } },
      { title: { en: 'Performance & load', ar: 'الأداء والضغط' }, text: { en: 'Find bottlenecks before peak traffic does.', ar: 'اكتشف نقاط الاختناق قبل أن يكشفها ضغط الزيارات.' } },
      { title: { en: 'Security checks', ar: 'فحوصات الأمان' }, text: { en: 'Vulnerability scans and reviews against common attack vectors.', ar: 'فحص الثغرات ومراجعة الحماية ضد أشهر أساليب الاختراق.' } },
    ],
  },
  {
    icon: 'consult',
    slug: 'tech-consultation',
    title: { en: 'Tech Consultation', ar: 'الاستشارات التقنية' },
    text: {
      en: 'Expert advice on architecture, tech stack and digital strategy, the right decisions before you invest.',
      ar: 'استشارات متخصصة في البنية التقنية واختيار التقنيات والاستراتيجية الرقمية، لتتخذ القرار الصحيح قبل أن تستثمر.',
    },
    points: {
      en: ['Architecture & stack review', 'Digital transformation', 'Project scoping & estimates'],
      ar: ['مراجعة البنية والتقنيات', 'التحول الرقمي', 'تحديد نطاق المشروع والتكلفة'],
    },
    features: [
      { title: { en: 'Architecture review', ar: 'مراجعة البنية التقنية' }, text: { en: 'An honest assessment of your system, its risks and how to scale it.', ar: 'تقييم صريح لنظامك ومخاطره وطريقة توسعته.' } },
      { title: { en: 'Tech stack selection', ar: 'اختيار التقنيات' }, text: { en: 'The right languages, frameworks and cloud for your goals and budget.', ar: 'اللغات والأطر والسحابة المناسبة لأهدافك وميزانيتك.' } },
      { title: { en: 'Digital transformation', ar: 'التحول الرقمي' }, text: { en: 'A practical roadmap for moving your operations online.', ar: 'خارطة طريق عملية لنقل عملياتك إلى العالم الرقمي.' } },
      { title: { en: 'Scoping & estimates', ar: 'تحديد النطاق والتكلفة' }, text: { en: 'Clear requirements, timelines and costs before you invest.', ar: 'متطلبات وجداول زمنية وتكاليف واضحة قبل أن تستثمر.' } },
    ],
  },
  {
    icon: 'maintenance',
    slug: 'support-maintenance',
    title: { en: 'Support & Maintenance', ar: 'الدعم والصيانة' },
    text: {
      en: 'We keep your systems fast, secure and up to date after launch, with monitoring and a team on call.',
      ar: 'نحافظ على أنظمتك سريعة وآمنة ومحدّثة بعد الإطلاق، مع مراقبة مستمرة وفريق جاهز للدعم.',
    },
    points: {
      en: ['24/7 monitoring', 'Updates & security patches', 'SLA-backed support'],
      ar: ['مراقبة على مدار الساعة', 'تحديثات وترقيعات أمنية', 'دعم مضمون باتفاقية خدمة'],
    },
    features: [
      { title: { en: '24/7 monitoring', ar: 'مراقبة على مدار الساعة' }, text: { en: 'Uptime, errors and performance watched around the clock.', ar: 'متابعة التشغيل والأخطاء والأداء ليلًا ونهارًا.' } },
      { title: { en: 'Updates & patches', ar: 'التحديثات والترقيعات' }, text: { en: 'Frameworks, dependencies and servers kept current and secure.', ar: 'تحديث الأطر والمكتبات والخوادم وإبقاؤها آمنة.' } },
      { title: { en: 'Bug fixes & improvements', ar: 'إصلاح الأخطاء والتحسينات' }, text: { en: 'A dedicated team fixing issues and shipping small enhancements.', ar: 'فريق مخصص لإصلاح المشكلات وإضافة التحسينات الصغيرة.' } },
      { title: { en: 'SLA-backed support', ar: 'دعم باتفاقية خدمة' }, text: { en: 'Guaranteed response times written into your agreement.', ar: 'أوقات استجابة مضمونة ضمن اتفاقية الخدمة.' } },
    ],
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
    text: { en: 'Agile sprints with demos every two weeks, no black boxes.', ar: 'دورات عمل مرنة مع عرض للتقدم كل أسبوعين، بشفافية كاملة.' },
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
      en: 'Their marketing team thinks like engineers: every dirham is tracked. Our launch beat every target we set.',
      ar: 'فريق التسويق لديهم يفكر كالمهندسين: كل جنيه محسوب. تجاوز إطلاقنا كل الأهداف التي وضعناها.',
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
    text: { en: 'We sweat the details: clean code, sharp design, measurable results.', ar: 'نهتم بأدق التفاصيل: كود نظيف وتصميم دقيق ونتائج قابلة للقياس.' },
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
