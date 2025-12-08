
import { 
  Code, 
  Smartphone, 
  Layout, 
  Server, 
  Bot, 
  Cpu, 
  ScanLine,
  LayoutDashboard,
  BrainCircuit,
  Database,
  ShieldCheck,
  Zap,
  FileText,
  Calculator,
  Search,
  CheckCircle2,
  Rocket,
  Layers
} from 'lucide-react';
import { Project, Service, TeamMember, Testimonial, Product, LocalizedData } from './types';

export const COMPANY_NAME = "NexusItera Tech";
export const COMPANY_TAGLINE: LocalizedData<string> = {
  en: "Intelligent Systems Designed for Evolution",
  ar: "أنظمة ذكية مصممة للتطور"
};

export const SERVICES_DATA: LocalizedData<Service[]> = {
  en: [
    {
      id: 'consulting',
      title: 'AI & Software Consulting',
      description: 'Strategic guidance on integrating AI logic into business architectures for maximum efficiency.',
      icon: BrainCircuit,
      features: ['AI Strategy', 'System Architecture', 'Process Optimization']
    },
    {
      id: 'digital-trans',
      title: 'Digital Transformation',
      description: 'Modernizing legacy infrastructures into fast, scalable, cloud-native intelligent ecosystems.',
      icon: Rocket,
      features: ['Legacy Migration', 'Cloud-Native', 'Scalability']
    },
    {
      id: 'delivery',
      title: 'Project Management',
      description: 'Precision-led delivery of complex technical initiatives using agile methodologies.',
      icon: CheckCircle2,
      features: ['Agile Delivery', 'Risk Management', 'Quality Assurance']
    }
  ],
  ar: [
    {
      id: 'consulting',
      title: 'استشارات الذكاء الاصطناعي والبرمجيات',
      description: 'توجيه استراتيجي لدمج منطق الذكاء الاصطناعي في هياكل الأعمال لتحقيق أقصى قدر من الكفاءة.',
      icon: BrainCircuit,
      features: ['استراتيجية الذكاء الاصطناعي', 'هيكلية النظام', 'تحسين العمليات']
    },
    {
      id: 'digital-trans',
      title: 'التحول الرقمي',
      description: 'تحديث البنى التحتية القديمة لتصبح أنظمة سحابية ذكية وسريعة وقابلة للتوسع.',
      icon: Rocket,
      features: ['نقل الأنظمة', 'سحابية', 'قابلية التوسع']
    },
    {
      id: 'delivery',
      title: 'إدارة المشاريع',
      description: 'تسليم دقيق للمبادرات التقنية المعقدة باستخدام منهجيات رشيقة.',
      icon: CheckCircle2,
      features: ['تسليم أجايل', 'إدارة المخاطر', 'ضمان الجودة']
    }
  ]
};

export const PRODUCTS_DATA: LocalizedData<Product[]> = {
  en: [
    {
      id: 'knowledge-distiller',
      name: 'Knowledge Distiller',
      tagline: 'Text to Insights',
      description: 'Transforms unstructured enterprise data into structured knowledge graphs and actionable insights using advanced NLP.',
      icon: BrainCircuit,
      features: ['Knowledge Graphing', 'Auto-Summarization', 'Concept Extraction'],
      status: 'Live',
      price: 'SaaS'
    },
    {
      id: 'invoice-extractor',
      name: 'Invoice Nexus',
      tagline: 'Instant Processing',
      description: 'A high-precision AI OCR engine that reads invoices, validates data, and integrates directly with ERP systems.',
      icon: ScanLine,
      features: ['99% Accuracy', 'Multi-Language', 'ERP Integration'],
      status: 'Live',
      price: 'API'
    },
    {
      id: 'kpi-dashboard',
      name: 'Metric Flow',
      tagline: 'Dynamic Analytics',
      description: 'An intelligent dashboard that turns static Excel sheets into real-time strategic visualizations for Finance & HR.',
      icon: LayoutDashboard,
      features: ['Real-time Viz', 'Predictive KPIs', 'Data Blending'],
      status: 'Live',
      price: 'Pro'
    },
    {
      id: 'pm-tool',
      name: 'Itera Plan',
      tagline: 'Smart Estimation',
      description: 'AI-assisted project planning and cost estimation tool designed for engineering teams needing precision without clutter.',
      icon: Calculator,
      features: ['Cost AI', 'Resource Alloc', 'Smart Timeline'],
      status: 'Beta',
      price: 'Team'
    },
    {
      id: 'smart-dms',
      name: 'Semantic DMS',
      tagline: 'Natural Search',
      description: 'Next-gen document management with semantic search capabilities, allowing users to query archives using natural language.',
      icon: FileText,
      features: ['Semantic Query', 'Auto-Tagging', 'Secure Archive'],
      status: 'Live',
      price: 'Enterprise'
    }
  ],
  ar: [
    {
      id: 'knowledge-distiller',
      name: 'مقطر المعرفة',
      tagline: 'من نصوص إلى رؤى',
      description: 'يحول بيانات المؤسسة غير المهيكلة إلى رسوم بيانية للمعرفة ورؤى قابلة للتنفيذ باستخدام معالجة اللغة الطبيعية.',
      icon: BrainCircuit,
      features: ['رسم بياني للمعرفة', 'تلخيص تلقائي', 'استخراج المفاهيم'],
      status: 'متاح',
      price: 'SaaS'
    },
    {
      id: 'invoice-extractor',
      name: 'نيكسوس الفواتير',
      tagline: 'معالجة فورية',
      description: 'محرك تعرف ضوئي عالي الدقة يقرأ الفواتير، يتحقق من البيانات، ويتكامل مباشرة مع أنظمة تخطيط الموارد.',
      icon: ScanLine,
      features: ['دقة 99%', 'متعدد اللغات', 'تكامل ERP'],
      status: 'متاح',
      price: 'API'
    },
    {
      id: 'kpi-dashboard',
      name: 'تدفق المؤشرات',
      tagline: 'تحليلات ديناميكية',
      description: 'لوحة تحكم ذكية تحول ملفات إكسل الثابتة إلى تصورات استراتيجية فورية للمالية والموارد البشرية.',
      icon: LayoutDashboard,
      features: ['رؤية فورية', 'مؤشرات تنبؤية', 'دمج البيانات'],
      status: 'متاح',
      price: 'محترف'
    },
    {
      id: 'pm-tool',
      name: 'إيتيرا للتخطيط',
      tagline: 'تقدير ذكي',
      description: 'أداة تخطيط وتقدير تكاليف مدعومة بالذكاء الاصطناعي مصممة للفرق الهندسية التي تحتاج إلى الدقة دون فوضى.',
      icon: Calculator,
      features: ['ذكاء التكلفة', 'توزيع الموارد', 'جدول ذكي'],
      status: 'تجريبي',
      price: 'فريق'
    },
    {
      id: 'smart-dms',
      name: 'إدارة المستندات الدلالية',
      tagline: 'بحث طبيعي',
      description: 'الجيل القادم من إدارة المستندات مع قدرات البحث الدلالي، مما يسمح للمستخدمين باستعلام الأرشيف بلغة طبيعية.',
      icon: FileText,
      features: ['استعلام دلالي', 'وسم تلقائي', 'أرشيف آمن'],
      status: 'متاح',
      price: 'مؤسسات'
    }
  ]
};

export const AI_CAPABILITIES = {
  en: [
    { title: 'Generative AI', desc: 'Custom LLM integration & RAG pipelines.', icon: Bot },
    { title: 'Semantic Search', desc: 'Understanding intent beyond keywords.', icon: Search },
    { title: 'Intelligent Automation', desc: 'Self-correcting process workflows.', icon: Cpu },
    { title: 'Predictive Analytics', desc: 'Forecasting trends from historical data.', icon: Zap },
  ],
  ar: [
    { title: 'الذكاء الاصطناعي التوليدي', desc: 'تكامل نماذج اللغة الكبيرة وخطوط RAG.', icon: Bot },
    { title: 'البحث الدلالي', desc: 'فهم النية وراء الكلمات المفتاحية.', icon: Search },
    { title: 'الأتمتة الذكية', desc: 'سير عمل يصحح نفسه ذاتياً.', icon: Cpu },
    { title: 'التحليلات التنبؤية', desc: 'توقع الاتجاهات من البيانات التاريخية.', icon: Zap },
  ]
};

export const TESTIMONIALS_DATA: LocalizedData<Testimonial[]> = {
  en: [
    {
      id: 't1',
      client: 'CTO',
      company: 'FinTech Corp',
      quote: 'NexusItera transformed our data pipeline. The efficiency gains were immediate.'
    },
    {
      id: 't2',
      client: 'Head of Ops',
      company: 'Global Logistics',
      quote: 'The automation tools are precise and reliable. Truly intelligent engineering.'
    }
  ],
  ar: [
    {
      id: 't1',
      client: 'مدير التقنية',
      company: 'مؤسسة مالية',
      quote: 'نيكسوس إيتيرا حولت مسار بياناتنا. مكاسب الكفاءة كانت فورية.'
    },
    {
      id: 't2',
      client: 'رئيس العمليات',
      company: 'لوجستيات عالمية',
      quote: 'أدوات الأتمتة دقيقة وموثوقة. هندسة ذكية حقاً.'
    }
  ]
};

export const TEAM_DATA: LocalizedData<TeamMember[]> = {
  en: [], ar: [] 
};

export const PROJECTS_DATA: LocalizedData<Project[]> = {
    en: [], ar: []
};
