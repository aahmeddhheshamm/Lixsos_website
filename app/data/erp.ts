import type { L } from './types'

export const erpModules: { name: L; text: L }[] = [
  {
    name: { en: 'Finance & Accounting', ar: 'المالية والمحاسبة' },
    text: { en: 'General ledger, multi-currency, VAT/e-invoicing and real-time financial statements.', ar: 'دفتر الأستاذ وتعدد العملات وضريبة القيمة المضافة والفاتورة الإلكترونية وقوائم مالية لحظية.' },
  },
  {
    name: { en: 'Inventory & Warehouses', ar: 'المخزون والمستودعات' },
    text: { en: 'Multi-warehouse stock, barcodes, batches, expiry dates and smart reordering.', ar: 'مستودعات متعددة وباركود ودفعات وتواريخ صلاحية وإعادة طلب ذكية.' },
  },
  {
    name: { en: 'Sales & POS', ar: 'المبيعات ونقاط البيع' },
    text: { en: 'Quotes, orders, invoicing and a fast POS that works even offline.', ar: 'عروض أسعار وطلبات وفواتير ونقطة بيع سريعة تعمل حتى بدون إنترنت.' },
  },
  {
    name: { en: 'Purchasing', ar: 'المشتريات' },
    text: { en: 'Requests, approvals, supplier management and purchase analytics.', ar: 'طلبات وموافقات وإدارة الموردين وتحليلات المشتريات.' },
  },
  {
    name: { en: 'HR & Payroll', ar: 'الموارد البشرية والرواتب' },
    text: { en: 'Employees, attendance, leaves, payroll and self-service portal.', ar: 'الموظفون والحضور والإجازات والرواتب وبوابة الخدمة الذاتية.' },
  },
  {
    name: { en: 'CRM', ar: 'إدارة علاقات العملاء' },
    text: { en: 'Leads, pipelines, follow-ups and customer history in one place.', ar: 'العملاء المحتملون ومراحل البيع والمتابعات وسجل العملاء في مكان واحد.' },
  },
  {
    name: { en: 'Manufacturing', ar: 'التصنيع' },
    text: { en: 'BOMs, work orders, production planning and costing.', ar: 'قوائم المواد وأوامر العمل وتخطيط الإنتاج والتكاليف.' },
  },
  {
    name: { en: 'BI & Reports', ar: 'التقارير وذكاء الأعمال' },
    text: { en: 'Live dashboards and 150+ ready-made reports with export anywhere.', ar: 'لوحات تحكم مباشرة وأكثر من 150 تقريرًا جاهزًا قابلًا للتصدير.' },
  },
]

export const erpFeatures: { title: L; text: L }[] = [
  { title: { en: 'Cloud or on-premise', ar: 'سحابي أو على خوادمك' }, text: { en: 'Run it on our secure cloud or your own servers.', ar: 'شغّله على سحابتنا الآمنة أو على خوادمك الخاصة.' } },
  { title: { en: 'Arabic & English', ar: 'عربي وإنجليزي' }, text: { en: 'Full RTL support and bilingual documents out of the box.', ar: 'دعم كامل للعربية ومستندات ثنائية اللغة جاهزة.' } },
  { title: { en: 'Role-based access', ar: 'صلاحيات حسب الدور' }, text: { en: 'Fine-grained permissions and full audit trail.', ar: 'صلاحيات دقيقة وسجل كامل لكل العمليات.' } },
  { title: { en: 'Open API', ar: 'واجهة API مفتوحة' }, text: { en: 'Connect your website, apps and third-party tools.', ar: 'اربط موقعك وتطبيقاتك وأدواتك الخارجية.' } },
  { title: { en: 'Mobile ready', ar: 'جاهز للموبايل' }, text: { en: 'Approve, sell and check reports from your phone.', ar: 'وافق وبِع وتابع التقارير من هاتفك.' } },
  { title: { en: 'Local compliance', ar: 'متوافق محليًا' }, text: { en: 'Tax and e-invoice integrations for the region.', ar: 'تكامل مع أنظمة الضرائب والفاتورة الإلكترونية في المنطقة.' } },
]

export const erpPlans: { name: L; price: string; custom?: boolean; perUser: boolean; text: L; features: L<string[]>; highlighted?: boolean }[] = [
  {
    name: { en: 'Starter', ar: 'المبتدئ' },
    price: '$49',
    perUser: true,
    text: { en: 'For small teams getting organised.', ar: 'للفرق الصغيرة التي تبدأ التنظيم.' },
    features: {
      en: ['Finance & Sales', 'Inventory (1 warehouse)', 'Up to 10 users', 'Email support'],
      ar: ['المالية والمبيعات', 'المخزون (مستودع واحد)', 'حتى 10 مستخدمين', 'دعم بالبريد الإلكتروني'],
    },
  },
  {
    name: { en: 'Business', ar: 'الأعمال' },
    price: '$89',
    perUser: true,
    text: { en: 'For growing companies with multiple branches.', ar: 'للشركات المتنامية متعددة الفروع.' },
    features: {
      en: ['All core modules', 'Unlimited warehouses', 'HR & Payroll', 'Priority support', 'BI dashboards'],
      ar: ['جميع الوحدات الأساسية', 'مستودعات غير محدودة', 'الموارد البشرية والرواتب', 'دعم ذو أولوية', 'لوحات ذكاء الأعمال'],
    },
    highlighted: true,
  },
  {
    name: { en: 'Enterprise', ar: 'المؤسسات' },
    price: '',
    custom: true,
    perUser: false,
    text: { en: 'Tailored modules and on-premise deployment.', ar: 'وحدات مخصصة وتشغيل على خوادمك.' },
    features: {
      en: ['Custom modules', 'On-premise option', 'Dedicated success manager', 'SLA 99.9%', 'Training on-site'],
      ar: ['وحدات مخصصة', 'خيار التشغيل الداخلي', 'مدير نجاح مخصص', 'اتفاقية خدمة 99.9%', 'تدريب في موقعك'],
    },
  },
]
