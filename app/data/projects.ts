import type { L } from './types'

export type ProjectCategory =
  | 'ecommerce'
  | 'mobility'
  | 'realestate'
  | 'sports'
  | 'tourism'
  | 'hr'
  | 'creative'
  | 'erp'

export interface Project {
  slug: string
  title: L
  client: L
  category: ProjectCategory
  /** Live website, shown as "Visit website" */
  url?: string
  /** Screenshot in /public/projects */
  image?: string
  market?: L
  year?: number
  summary: L
  description: L
  /** Key features, shown as a checklist on the case study */
  highlights?: L<string[]>
  challenge?: L
  solution?: L
  /** Only list technologies we can confirm */
  stack: string[]
  results?: { value: string; label: L }[]
  gradient: [string, string]
  featured?: boolean
}

export const projects: Project[] = [
  // ---------- E-commerce ----------
  {
    slug: 'al-shiaka',
    title: { en: 'Al Shiaka Store', ar: 'متجر الشياكة' },
    client: { en: 'Al Shiaka', ar: 'الشياكة' },
    category: 'ecommerce',
    url: 'https://alshiaka.com',
    image: '/projects/al-shiaka.jpg',
    market: { en: 'Saudi Arabia', ar: 'السعودية' },
    summary: {
      en: 'Online store for a Saudi menswear brand: thobes, shemaghs and accessories.',
      ar: 'متجر إلكتروني لعلامة أزياء رجالية سعودية: ثياب وأشمغة وإكسسوارات.',
    },
    description: {
      en: 'A bilingual e-commerce store for Al Shiaka, covering white, coloured and winter thobes, ghutras and shemaghs, loungewear, accessories and fragrances, with collections for men, kids and women.',
      ar: 'متجر إلكتروني ثنائي اللغة للشياكة يضم الثياب البيضاء والملونة والشتوية، والغتر والأشمغة، وملابس الراحة والإكسسوارات والعطور، مع أقسام للرجال والأطفال والنساء.',
    },
    highlights: {
      en: ['Arabic & English storefront', 'Rich category navigation', 'Free shipping threshold', 'Product search'],
      ar: ['متجر بالعربية والإنجليزية', 'تصنيفات منظمة للمنتجات', 'شحن مجاني فوق حد معين', 'بحث عن المنتجات'],
    },
    stack: ['WordPress'],
    gradient: ['#a67c52', '#1e3a5f'],
    featured: true,
  },
  {
    slug: 'al-jouf',
    title: { en: 'Al Jouf Store', ar: 'متجر الجوف' },
    client: { en: 'JADCO (Al Jouf Agricultural)', ar: 'جادكو (الجوف الزراعية)' },
    category: 'ecommerce',
    url: 'https://aljouf.com',
    image: '/projects/al-jouf.jpg',
    market: { en: 'Saudi Arabia', ar: 'السعودية' },
    summary: {
      en: 'Online store for Al Jouf’s olive oil, olives, honey and gifts.',
      ar: 'متجر إلكتروني لزيت الزيتون والزيتون والعسل وهدايا الجوف.',
    },
    description: {
      en: 'The official online store of the Al Jouf Agricultural Development Company (JADCO), selling its olive oil, table olives, honey and gift boxes directly to customers across Saudi Arabia.',
      ar: 'المتجر الرسمي لشركة الجوف للتنمية الزراعية (جادكو) لبيع زيت الزيتون وزيتون المائدة والعسل وصناديق الهدايا مباشرة للعملاء في جميع أنحاء السعودية.',
    },
    highlights: {
      en: ['Arabic & English', 'Order tracking & wishlist', 'Offers section', 'Free shipping threshold'],
      ar: ['عربي وإنجليزي', 'تتبع الطلبات وقائمة الرغبات', 'قسم العروض', 'شحن مجاني فوق حد معين'],
    },
    stack: [],
    gradient: ['#15803d', '#84cc16'],
  },
  {
    slug: 'beauty-bar',
    title: { en: 'Beauty Bar', ar: 'بيوتي بار' },
    client: { en: 'Beauty Bar', ar: 'بيوتي بار' },
    category: 'ecommerce',
    url: 'https://beauty-bareg.net',
    image: '/projects/beauty-bar.jpg',
    summary: {
      en: 'Luxury fashion store for bags, footwear, watches and more.',
      ar: 'متجر أزياء فاخرة للحقائب والأحذية والساعات وغيرها.',
    },
    description: {
      en: 'An online store for Beauty Bar offering collections of bags, fashion, footwear and watches from international brands, with buy-now-pay-later instalments through valU.',
      ar: 'متجر إلكتروني لبيوتي بار يقدم تشكيلات من الحقائب والأزياء والأحذية والساعات من علامات عالمية، مع إمكانية التقسيط عبر valU.',
    },
    highlights: {
      en: ['Shop by category', 'Buy now, pay later (valU)', 'Sale & promotions', 'WhatsApp support'],
      ar: ['تسوق حسب الفئة', 'اشترِ الآن وادفع لاحقًا (valU)', 'التخفيضات والعروض', 'دعم عبر واتساب'],
    },
    stack: ['Shopify'],
    gradient: ['#b07a4f', '#7c4a2d'],
  },
  {
    slug: 'its-mine',
    title: { en: 'It’s Mine', ar: 'اتزماين' },
    client: { en: 'It’s Mine', ar: 'اتزماين' },
    category: 'ecommerce',
    url: 'https://itsminesa.com',
    image: '/projects/its-mine.jpg',
    market: { en: 'Saudi Arabia', ar: 'السعودية' },
    summary: {
      en: 'Fashion store for evening and occasion dresses.',
      ar: 'متجر أزياء لفساتين السهرة والمناسبات.',
    },
    description: {
      en: 'An online boutique for It’s Mine, selling evening and occasion dresses, jalabiyas, Eid sets and accessories, with delivery across Saudi Arabia and international shipping.',
      ar: 'متجر إلكتروني لاتزماين لبيع فساتين السهرة والمناسبات والجلابيات وأطقم العيد والإكسسوارات، مع التوصيل داخل السعودية والشحن الدولي.',
    },
    highlights: {
      en: ['Arabic & English', 'Seasonal collections', 'Shoppable videos', 'International shipping'],
      ar: ['عربي وإنجليزي', 'تشكيلات موسمية', 'فيديوهات قابلة للتسوق', 'شحن دولي'],
    },
    stack: ['Salla'],
    gradient: ['#0f766e', '#ea580c'],
  },
  {
    slug: 'carmen',
    title: { en: 'Carmen Professional', ar: 'كارمن بروفيشنال' },
    client: { en: 'Carmen Nails & Lashes', ar: 'كارمن للأظافر والرموش' },
    category: 'ecommerce',
    url: 'https://carmenprofessional.com',
    image: '/projects/carmen.jpg',
    market: { en: 'Kuwait', ar: 'الكويت' },
    summary: {
      en: 'Online store for professional nail and lash products.',
      ar: 'متجر إلكتروني لمنتجات الأظافر والرموش الاحترافية.',
    },
    description: {
      en: 'An e-commerce store for Carmen’s professional nail and lash range, including a gel polish line of 100+ shades with an interactive colour chart.',
      ar: 'متجر إلكتروني لمنتجات كارمن الاحترافية للأظافر والرموش، ومنها مجموعة جل بوليش بأكثر من 100 لون مع دليل ألوان تفاعلي.',
    },
    highlights: {
      en: ['Separate nails & lashes stores', 'Colour chart', 'Newsletter sign-up', 'Free delivery threshold'],
      ar: ['متجران للأظافر والرموش', 'دليل الألوان', 'الاشتراك في النشرة البريدية', 'توصيل مجاني فوق حد معين'],
    },
    stack: ['Shopify'],
    gradient: ['#dc2626', '#9f1239'],
  },
  {
    slug: 'toyz',
    title: { en: 'TOYZ', ar: 'تويز' },
    client: { en: 'TOYZ', ar: 'تويز' },
    category: 'ecommerce',
    url: 'https://toyz.com.kw',
    image: '/projects/toyz.jpg',
    market: { en: 'Kuwait', ar: 'الكويت' },
    summary: {
      en: 'Kids’ toy shopping app with delivery across Kuwait.',
      ar: 'تطبيق لتسوق ألعاب الأطفال مع التوصيل داخل الكويت.',
    },
    description: {
      en: 'TOYZ lets parents order toys from an app and get them delivered to their door. Orders are checked against the shelf before payment; unavailable items are removed and the total recalculated, so customers never pay for what they don’t receive.',
      ar: 'يتيح تويز للأهالي طلب الألعاب من التطبيق وتوصيلها إلى باب البيت. تتم مراجعة الطلب على الرف قبل الدفع، ويُحذف الصنف غير المتوفر ويُعاد حساب المبلغ، فلا يدفع العميل ثمن ما لم يصله.',
    },
    highlights: {
      en: ['iOS & Android apps', 'Stock check before payment', 'Home delivery', 'Arabic-first'],
      ar: ['تطبيقات iOS وAndroid', 'مراجعة المخزون قبل الدفع', 'توصيل للمنازل', 'تجربة عربية أولًا'],
    },
    stack: ['Next.js'],
    gradient: ['#7c3aed', '#a855f7'],
  },

  // ---------- Transportation ----------
  {
    slug: 'go-way',
    title: { en: 'Go Way', ar: 'جو واي' },
    client: { en: 'Go Way', ar: 'جو واي' },
    category: 'mobility',
    url: 'https://www.gowayapps.com',
    image: '/projects/go-way.jpg',
    market: { en: 'Egypt', ar: 'مصر' },
    summary: {
      en: 'Ride-hailing app where riders and drivers agree on the fare.',
      ar: 'تطبيق نقل ذكي يتفق فيه الراكب والسائق على الأجرة.',
    },
    description: {
      en: 'Go Way is a ride-hailing platform for Egypt where riders and drivers negotiate the fare before the trip. Riders can choose a car, scooter or tuk-tuk and pay by cash, card or wallet, with separate apps for riders and drivers.',
      ar: 'جو واي منصة نقل في مصر يتفاوض فيها الراكب والسائق على الأجرة قبل الرحلة. يمكن للراكب اختيار سيارة أو سكوتر أو توك توك والدفع نقدًا أو بالبطاقة أو المحفظة، مع تطبيقات منفصلة للركاب والسائقين.',
    },
    highlights: {
      en: ['Rider & driver apps', 'Fare negotiation', 'Car, scooter & tuk-tuk', 'Cash, card & wallet'],
      ar: ['تطبيق للراكب وآخر للسائق', 'التفاوض على الأجرة', 'سيارة وسكوتر وتوك توك', 'نقدًا أو بطاقة أو محفظة'],
    },
    stack: [],
    gradient: ['#86198f', '#ec4899'],
    featured: true,
  },

  // ---------- Real estate & construction ----------
  {
    slug: 'mito-consult',
    title: { en: 'Mito Consult', ar: 'ميتو للاستشارات' },
    client: { en: 'Mito Consult', ar: 'ميتو للاستشارات' },
    category: 'realestate',
    url: 'https://mitoconsult.com',
    image: '/projects/mito-consult.jpg',
    summary: {
      en: 'Corporate website for an MEP and fire-safety engineering consultancy.',
      ar: 'موقع تعريفي لشركة استشارات هندسية في الأنظمة الكهروميكانيكية والحماية من الحريق.',
    },
    description: {
      en: 'A content-managed corporate website for Mito Consult, presenting its integrated engineering services (plumbing, fire protection, sanitary networks, water treatment and MEP supervision), along with its projects and clients.',
      ar: 'موقع تعريفي بنظام إدارة محتوى لشركة ميتو يعرض خدماتها الهندسية المتكاملة (السباكة والحماية من الحريق وشبكات الصرف ومعالجة المياه والإشراف على الأعمال الكهروميكانيكية) إلى جانب مشاريعها وعملائها.',
    },
    highlights: {
      en: ['CMS-driven content', 'Projects & clients showcase', 'Full-screen hero slider', 'Consultation booking'],
      ar: ['محتوى قابل للإدارة', 'عرض المشاريع والعملاء', 'سلايدر بملء الشاشة', 'حجز الاستشارات'],
    },
    stack: ['Next.js'],
    gradient: ['#0ea5e9', '#1e3a8a'],
  },

  // ---------- Sports & booking ----------
  {
    slug: 'bayan-padel',
    title: { en: 'Bayan Padel', ar: 'بيان بادل' },
    client: { en: 'Bayan Padel', ar: 'بيان بادل' },
    category: 'sports',
    url: 'https://www.bayanpadel.com/auth/login',
    image: '/projects/bayan-padel.jpg',
    market: { en: 'Kuwait', ar: 'الكويت' },
    summary: {
      en: 'Padel court booking platform.',
      ar: 'منصة لحجز ملاعب البادل.',
    },
    description: {
      en: 'A web platform for Bayan Padel where players sign up with their phone number and book padel courts online.',
      ar: 'منصة ويب لبيان بادل يسجّل فيها اللاعبون برقم الهاتف ويحجزون ملاعب البادل أونلاين.',
    },
    highlights: {
      en: ['Phone-number sign-in', 'Online court booking', 'Player accounts'],
      ar: ['تسجيل الدخول برقم الهاتف', 'حجز الملاعب أونلاين', 'حسابات للاعبين'],
    },
    stack: ['Nuxt'],
    gradient: ['#4f46e5', '#65a30d'],
  },

  // ---------- Tourism & travel ----------
  {
    slug: 'thabat',
    title: { en: 'Thabat Aviation', ar: 'ثبات للطيران' },
    client: { en: 'Thabat Aviation', ar: 'ثبات للطيران' },
    category: 'tourism',
    url: 'https://thavco.com/en',
    image: '/projects/thabat.jpg',
    market: { en: 'Saudi Arabia', ar: 'السعودية' },
    summary: {
      en: 'Online travel agency for flights, hotels and activities.',
      ar: 'وكالة سفر إلكترونية لحجز الطيران والفنادق والأنشطة.',
    },
    description: {
      en: 'A booking platform for Thabat Aviation, a Saudi online travel agency: customers search and book flights, hotels and activities, browse deals and manage their bookings in Arabic or English.',
      ar: 'منصة حجز لثبات للطيران، وكالة سفر إلكترونية سعودية: يبحث العملاء ويحجزون الرحلات والفنادق والأنشطة، ويتصفحون العروض ويديرون حجوزاتهم بالعربية أو الإنجليزية.',
    },
    highlights: {
      en: ['Flight, hotel & activity search', 'Manage booking', 'Arabic & English', 'Multi-currency'],
      ar: ['بحث عن الطيران والفنادق والأنشطة', 'إدارة الحجز', 'عربي وإنجليزي', 'تعدد العملات'],
    },
    stack: ['Nuxt'],
    gradient: ['#a8865a', '#3f3a33'],
    featured: true,
  },
  {
    slug: 'hido',
    title: { en: 'HiDo', ar: 'هايدو' },
    client: { en: 'HiDo', ar: 'هايدو' },
    category: 'tourism',
    url: 'https://www.hido.app',
    image: '/projects/hido.jpg',
    market: { en: 'Saudi Arabia', ar: 'السعودية' },
    summary: {
      en: 'Local tourism app. Discover Saudi Arabia with its people.',
      ar: 'تطبيق سياحة محلية. اكتشف السعودية بأهلها.',
    },
    description: {
      en: 'HiDo connects travellers with authentic local experiences in Saudi Arabia: tours with Saudi hosts, stays in local homes and farms, and local activities, booked through the app.',
      ar: 'يربط هايدو المسافرين بتجارب محلية أصيلة في السعودية: جولات برفقة مضيفين سعوديين، واستضافات في البيوت والمزارع، وأنشطة محلية، تُحجز عبر التطبيق.',
    },
    highlights: {
      en: ['iOS & Android apps', 'Verified local hosts', 'Map-based booking', 'Secure payments'],
      ar: ['تطبيقات iOS وAndroid', 'مضيفون محليون موثّقون', 'الحجز عبر الخريطة', 'دفع آمن'],
    },
    stack: ['WordPress'],
    gradient: ['#16a34a', '#0891b2'],
    featured: true,
  },

  // ---------- HR & business ----------
  {
    slug: 'hr-lab',
    title: { en: 'HRlab', ar: 'إتش آر لاب' },
    client: { en: 'HRlab', ar: 'إتش آر لاب' },
    category: 'hr',
    url: 'https://www.hrlab.de/en',
    image: '/projects/hr-lab.jpg',
    market: { en: 'Germany', ar: 'ألمانيا' },
    summary: {
      en: 'All-in-one HR software for small and medium businesses.',
      ar: 'برنامج موارد بشرية متكامل للشركات الصغيرة والمتوسطة.',
    },
    description: {
      en: 'HRlab automates routine HR tasks and gives employees self-service access to their data, covering personnel records, absences, time tracking, documents and training management.',
      ar: 'يؤتمت HRlab مهام الموارد البشرية الروتينية ويمنح الموظفين وصولًا ذاتيًا لبياناتهم، ويشمل ملفات الموظفين والغياب وتتبع الوقت والمستندات وإدارة التدريب.',
    },
    highlights: {
      en: ['Employee self-service', 'Absence & time tracking', 'Document management', 'Multilingual'],
      ar: ['خدمة ذاتية للموظفين', 'تتبع الغياب والوقت', 'إدارة المستندات', 'متعدد اللغات'],
    },
    stack: ['Next.js'],
    gradient: ['#1e3a8a', '#f59e0b'],
    featured: true,
  },
  {
    slug: 'wakkt',
    title: { en: 'Wakkt', ar: 'واكت' },
    client: { en: 'Wakkt', ar: 'واكت' },
    category: 'hr',
    url: 'https://www.wakkt.com',
    image: '/projects/wakkt.jpg',
    summary: {
      en: 'Employee management app for attendance, leave and payroll.',
      ar: 'تطبيق لإدارة الموظفين: الحضور والإجازات والرواتب.',
    },
    description: {
      en: 'Wakkt is a complete employee management solution that streamlines attendance, leave management, time tracking and payroll in one app.',
      ar: 'واكت حل متكامل لإدارة الموظفين يسهّل الحضور والانصراف وإدارة الإجازات وتتبع الوقت والرواتب في تطبيق واحد.',
    },
    highlights: {
      en: ['Attendance tracking', 'Leave management', 'Payroll', 'Workforce reports'],
      ar: ['تتبع الحضور', 'إدارة الإجازات', 'الرواتب', 'تقارير القوى العاملة'],
    },
    stack: [],
    gradient: ['#16a34a', '#047857'],
  },

  // ---------- Creative tools ----------
  {
    slug: 'jamil-cards',
    title: { en: 'Jamil Cards', ar: 'بطاقات جميل' },
    client: { en: 'Jamil', ar: 'جميل' },
    category: 'creative',
    url: 'https://shop.jamilcards.com/en/',
    image: '/projects/jamil-cards.jpg',
    market: { en: 'Saudi Arabia', ar: 'السعودية' },
    summary: {
      en: 'Store for smart digital business cards and NFC products.',
      ar: 'متجر لبطاقات العمل الرقمية الذكية ومنتجات NFC.',
    },
    description: {
      en: 'An online store for Jamil, a Saudi brand of smart digital business cards, selling NFC cards, tags and stands that share your contact details with a tap, alongside the Jamil app.',
      ar: 'متجر إلكتروني لجميل، علامة سعودية لبطاقات العمل الرقمية الذكية، تبيع بطاقات وملصقات وستاندات NFC تشارك بياناتك بلمسة، إلى جانب تطبيق جميل.',
    },
    highlights: {
      en: ['NFC cards, tags & stands', 'Companion mobile app', 'Arabic & English', 'Customer reviews'],
      ar: ['بطاقات وملصقات وستاندات NFC', 'تطبيق موبايل مرافق', 'عربي وإنجليزي', 'تقييمات العملاء'],
    },
    stack: ['Salla'],
    gradient: ['#475569', '#14b8a6'],
  },
  {
    slug: 'drac-avatar',
    title: { en: 'Drac Avatar', ar: 'دراك أفاتار' },
    client: { en: 'Meta Draculas', ar: 'ميتا دراكولاز' },
    category: 'creative',
    url: 'https://dracavatar.web.app',
    image: '/projects/drac-avatar.jpg',
    summary: {
      en: 'Metaverse avatar generator for an NFT community.',
      ar: 'منصة لإنشاء أفاتار للميتافيرس لمجتمع NFT.',
    },
    description: {
      en: 'A web app for the Meta Draculas community where users claim a free metaverse avatar in three stages: avatar, wallet address and Twitter verification.',
      ar: 'تطبيق ويب لمجتمع ميتا دراكولاز يحصل فيه المستخدم على أفاتار مجاني للميتافيرس عبر ثلاث مراحل: الأفاتار ثم عنوان المحفظة ثم التحقق عبر تويتر.',
    },
    highlights: {
      en: ['3-step claim flow', 'Wallet address capture', 'Twitter verification', 'Animated UI'],
      ar: ['خطوات مطالبة من 3 مراحل', 'ربط عنوان المحفظة', 'التحقق عبر تويتر', 'واجهة متحركة'],
    },
    stack: ['Flutter Web', 'Firebase'],
    gradient: ['#f97316', '#8b5cf6'],
  },

  // ---------- ERP (kept from the original showcase) ----------
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
]

/** Filter tabs: "all" plus every category that has at least one project, in first-seen order. */
export const projectCategories: ('all' | ProjectCategory)[] = [
  'all',
  ...new Set(projects.map((p) => p.category)),
]
