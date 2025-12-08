import { 
  Code, 
  Smartphone, 
  Layout, 
  Server, 
  Trello, 
  Cpu, 
  ScanLine,
  LayoutDashboard,
  Briefcase
} from 'lucide-react';
import { Project, Service, TeamMember, Testimonial, Product, LocalizedData } from './types';

export const COMPANY_NAME = "NexusItera";
export const COMPANY_TAGLINE: LocalizedData<string> = {
  en: "Where Ideas Connect and Evolve",
  ar: "حيث تتصل الأفكار وتتطور"
};

export const TESTIMONIALS_DATA: LocalizedData<Testimonial[]> = {
  en: [
    {
      id: 't1',
      client: 'Jonathan Sterling',
      company: 'Apex Banking Group',
      quote: 'NexusItera delivered a robust fintech solution that completely modernized our transaction processing layer.'
    },
    {
      id: 't2',
      client: 'Maria Gonzalez',
      company: 'LogiChain Intl',
      quote: 'Their AI-driven dashboard gave us visibility we never thought possible. A true partner in innovation.'
    },
    {
      id: 't3',
      client: 'Ahmed Al-Fayed',
      company: 'Future Ventures',
      quote: 'Professional, punctual, and technically brilliant. They transformed our startup idea into a scalable reality.'
    }
  ],
  ar: [
    {
      id: 't1',
      client: 'جوناثان ستيرلينغ',
      company: 'مجموعة أبيكس المصرفية',
      quote: 'قدمت نيكسوس إيتيرا حلولاً مالية قوية أحدثت نقلة نوعية في طبقة معالجة المعاملات لدينا.'
    },
    {
      id: 't2',
      client: 'ماريا جونزاليس',
      company: 'لوجي تشين الدولية',
      quote: 'منحتنا لوحة التحكم المدعومة بالذكاء الاصطناعي رؤية لم نكن نتخيلها. شريك حقيقي في الابتكار.'
    },
    {
      id: 't3',
      client: 'أحمد الفايد',
      company: 'مشاريع المستقبل',
      quote: 'احترافية، التزام بالوقت، وبراعة تقنية. حولوا فكرة شركتنا الناشئة إلى واقع قابل للتوسع.'
    }
  ]
};

export const SERVICES_DATA: LocalizedData<Service[]> = {
  en: [
    {
      id: 'web-dev',
      title: 'Web Ecosystems',
      description: 'Scalable, high-performance web architectures using React, Node.js, and modern frameworks tailored for enterprise evolution.',
      icon: Layout,
      features: ['SPA Architecture', 'Progressive Web Apps', 'Enterprise Dashboards']
    },
    {
      id: 'mobile-dev',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile experiences that engage users and drive business growth.',
      icon: Smartphone,
      features: ['iOS & Android', 'React Native / Flutter', 'Mobile Strategy']
    },
    {
      id: 'custom-soft',
      title: 'Custom Engineering',
      description: 'Bespoke software engineering to solve complex business challenges that off-the-shelf products cannot.',
      icon: Code,
      features: ['API Integration', 'Legacy Migration', 'SaaS Development']
    },
    {
      id: 'pm-consulting',
      title: 'Project Intelligence',
      description: 'Expert project delivery using Agile and Waterfall methodologies to ensure on-time, on-budget execution.',
      icon: Trello,
      features: ['Agile Transformation', 'Risk Management', 'Resource Planning']
    },
    {
      id: 'cloud-infra',
      title: 'Cloud & DevOps',
      description: 'Secure, scalable cloud infrastructure design and automated CI/CD pipelines.',
      icon: Server,
      features: ['AWS / Azure / GCP', 'Docker & Kubernetes', 'Security Audits']
    }
  ],
  ar: [
    {
      id: 'web-dev',
      title: 'بيئات الويب',
      description: 'هيكليات ويب قابلة للتوسع وعالية الأداء باستخدام React و Node.js وأطر عمل حديثة مصممة لتطور المؤسسات.',
      icon: Layout,
      features: ['هيكلية الصفحة الواحدة', 'تطبيقات الويب التقدمية', 'لوحات تحكم المؤسسات']
    },
    {
      id: 'mobile-dev',
      title: 'تطوير تطبيقات الجوال',
      description: 'تجارب جوال أصلية ومتعددة المنصات تتفاعل مع المستخدمين وتدفع نمو الأعمال.',
      icon: Smartphone,
      features: ['iOS و Android', 'React Native / Flutter', 'استراتيجيات الجوال']
    },
    {
      id: 'custom-soft',
      title: 'هندسة برمجيات مخصصة',
      description: 'هندسة برمجيات مفصلة لحل تحديات الأعمال المعقدة التي لا تستطيع المنتجات الجاهزة حلها.',
      icon: Code,
      features: ['تكامل API', 'نقل الأنظمة القديمة', 'تطوير SaaS']
    },
    {
      id: 'pm-consulting',
      title: 'ذكاء المشاريع',
      description: 'تسليم مشاريع خبير باستخدام منهجيات Agile و Waterfall لضمان التنفيذ في الوقت المحدد وفي حدود الميزانية.',
      icon: Trello,
      features: ['التحول إلى Agile', 'إدارة المخاطر', 'تخطيط الموارد']
    },
    {
      id: 'cloud-infra',
      title: 'الحوسبة السحابية و DevOps',
      description: 'تصميم بنية تحتية سحابية آمنة وقابلة للتوسع وخطوط أنابيب CI/CD مؤتمتة.',
      icon: Server,
      features: ['AWS / Azure / GCP', 'Docker و Kubernetes', 'تدقيق الأمان']
    }
  ]
};

export const PROJECTS_DATA: LocalizedData<Project[]> = {
  en: [
    {
      id: 'fintech-core',
      title: 'NovaBank Core System',
      category: 'FinTech',
      description: 'A complete digital banking transformation platform handling millions of secure transactions daily.',
      imageUrl: 'https://picsum.photos/800/600?random=1',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker']
    },
    {
      id: 'logistics-tracker',
      title: 'Global Logistics Tracker',
      category: 'Supply Chain',
      description: 'Real-time fleet management and cargo tracking system with predictive delay analysis.',
      imageUrl: 'https://picsum.photos/800/600?random=2',
      technologies: ['Flutter', 'Firebase', 'Google Maps API']
    },
    {
      id: 'health-connect',
      title: 'HealthConnect Portal',
      category: 'Healthcare',
      description: 'HIPAA-compliant telemedicine platform connecting patients with specialists instantly.',
      imageUrl: 'https://picsum.photos/800/600?random=3',
      technologies: ['Next.js', 'WebRTC', 'AWS']
    },
    {
      id: 'smart-retail',
      title: 'OmniShop Retail Dashboard',
      category: 'E-Commerce',
      description: 'Unified inventory and sales analytics dashboard for a multinational retail chain.',
      imageUrl: 'https://picsum.photos/800/600?random=4',
      technologies: ['Vue.js', 'Python', 'GraphQL']
    }
  ],
  ar: [
    {
      id: 'fintech-core',
      title: 'نظام نوفا بنك الأساسي',
      category: 'التقنية المالية',
      description: 'منصة تحول رقمي مصرفي متكاملة تتعامل مع ملايين المعاملات الآمنة يومياً.',
      imageUrl: 'https://picsum.photos/800/600?random=1',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker']
    },
    {
      id: 'logistics-tracker',
      title: 'متتبع اللوجستيات العالمي',
      category: 'سلاسل الإمداد',
      description: 'نظام إدارة الأسطول وتتبع الشحنات في الوقت الفعلي مع تحليل تنبؤي للتأخير.',
      imageUrl: 'https://picsum.photos/800/600?random=2',
      technologies: ['Flutter', 'Firebase', 'Google Maps API']
    },
    {
      id: 'health-connect',
      title: 'بوابة الاتصال الصحي',
      category: 'الرعاية الصحية',
      description: 'منصة طب عن بعد متوافقة مع HIPAA تربط المرضى بالأخصائيين فورياً.',
      imageUrl: 'https://picsum.photos/800/600?random=3',
      technologies: ['Next.js', 'WebRTC', 'AWS']
    },
    {
      id: 'smart-retail',
      title: 'لوحة أومني شوب للتجزئة',
      category: 'التجارة الإلكترونية',
      description: 'لوحة تحليلات موحدة للمخزون والمبيعات لسلسلة تجزئة متعددة الجنسيات.',
      imageUrl: 'https://picsum.photos/800/600?random=4',
      technologies: ['Vue.js', 'Python', 'GraphQL']
    }
  ]
};

export const PRODUCTS_DATA: LocalizedData<Product[]> = {
  en: [
    {
      id: 'ai-invoice',
      name: 'AI Invoice Extraction',
      tagline: 'Autonomous financial intelligence.',
      description: 'Liberate your business from the burden of processing massive volumes of invoices. Our system automatically extracts data and tracks payments, while our AI agent actively assists and follows up with you—eliminating operational suffering entirely.',
      icon: ScanLine,
      features: ['High-Volume Extraction', 'Smart Follow-up Agents', 'Zero-Touch Reconciliation'],
      status: 'Live',
      price: 'Scale'
    },
    {
      id: 'kpi-dashboard',
      name: 'Intelligent KPI Dashboard',
      tagline: 'From Excel to Insights instantly.',
      description: 'Transform your raw Excel sheets into a strategic command center without the complexity. Simply upload your spreadsheets, and our AI instantly structures the data, identifies trends, and builds interactive visualizations for you. No coding, no hassle.',
      icon: LayoutDashboard,
      features: ['Instant Excel Import', 'AI Trend Forecasting', 'Zero-Setup Visualization'],
      status: 'Live',
      price: 'Growth'
    },
    {
      id: 'smart-pm',
      name: 'Smart Project Nexus',
      tagline: 'Projects & Payments. Perfectly Synced.',
      description: 'Manage your projects and financial flows in a single intelligent environment. Link deliverables directly to payments, while our AI companion guides you step-by-step through the lifecycle, ensuring budget adherence and smart execution.',
      icon: Briefcase,
      features: ['Milestone-Linked Payments', 'AI Execution Assistant', 'Unified Financial Timeline'],
      status: 'Live',
      price: 'Professional'
    }
  ],
  ar: [
    {
      id: 'ai-invoice',
      name: 'استخراج الفواتير بالذكاء الاصطناعي',
      tagline: 'ذكاء مالي مستقل.',
      description: 'حرر عملك من عبء معالجة كميات هائلة من الفواتير. يقوم نظامنا باستخراج البيانات وتتبع المدفوعات تلقائياً، بينما يقوم وكيل الذكاء الاصطناعي بمساعدتك والمتابعة معك بفعالية—مما يقضي على المعاناة التشغيلية تماماً.',
      icon: ScanLine,
      features: ['استخراج عالي الحجم', 'وكلاء متابعة أذكياء', 'تسوية بدون تدخل يدوي'],
      status: 'متاح',
      price: 'مقياس'
    },
    {
      id: 'kpi-dashboard',
      name: 'لوحة مؤشرات الأداء الذكية',
      tagline: 'من إكسل إلى رؤى فورية.',
      description: 'حول جداول إكسل الخام إلى مركز قيادة استراتيجي دون أي تعقيد. ما عليك سوى رفع ملفاتك، وسيقوم الذكاء الاصطناعي لدينا بتنظيم البيانات فوراً، وتحديد الاتجاهات، وبناء تصورات تفاعلية لك. بدون برمجة، وبدون عناء.',
      icon: LayoutDashboard,
      features: ['استيراد فوري للإكسل', 'تنبؤ الاتجاهات بالذكاء الاصطناعي', 'تصور بيانات بدون إعداد'],
      status: 'متاح',
      price: 'نمو'
    },
    {
      id: 'smart-pm',
      name: 'نظام إدارة المشاريع الذكي',
      tagline: 'المشاريع والمدفوعات. متزامنة بامتياز.',
      description: 'أدر مشاريعك وتدفقاتك المالية في بيئة ذكية واحدة. اربط التسليمات مباشرة بالمدفوعات، بينما يرافقك رفيق الذكاء الاصطناعي خطوة بخطوة خلال دورة الحياة، مما يضمن الالتزام بالميزانية والتنفيذ الذكي.',
      icon: Briefcase,
      features: ['مدفوعات مرتبطة بالإنجاز', 'مساعد تنفيذ ذكي', 'جدول زمني مالي موحد'],
      status: 'متاح',
      price: 'احترافي'
    }
  ]
};

export const TEAM_DATA: LocalizedData<TeamMember[]> = {
  en: [
    {
      id: 'founder',
      name: 'James Stirling',
      role: 'Founder & Principal Architect',
      bio: 'With over 15 years in enterprise software and banking systems, James leads NexusItera with a focus on engineering excellence and strategic innovation.',
      imageUrl: 'https://picsum.photos/400/400?random=10'
    },
    {
      id: 'lead-dev',
      name: 'Alicia Varrick',
      role: 'Head of Engineering',
      bio: 'Expert in cloud-native architectures and AI integration. Alicia ensures every line of code meets our rigorous quality standards.',
      imageUrl: 'https://picsum.photos/400/400?random=11'
    }
  ],
  ar: [
    {
      id: 'founder',
      name: 'جيمس ستيرلينغ',
      role: 'المؤسس والمهندس الرئيسي',
      bio: 'مع أكثر من 15 عاماً في برمجيات المؤسسات والأنظمة المصرفية، يقود جيمس نيكسوس إيتيرا بتركيز على التميز الهندسي والابتكار الاستراتيجي.',
      imageUrl: 'https://picsum.photos/400/400?random=10'
    },
    {
      id: 'lead-dev',
      name: 'أليسيا فاريك',
      role: 'رئيس قسم الهندسة',
      bio: 'خبيرة في البنى السحابية وتكامل الذكاء الاصطناعي. تضمن أليسيا أن كل سطر من الكود يلبي معايير الجودة الصارمة لدينا.',
      imageUrl: 'https://picsum.photos/400/400?random=11'
    }
  ]
};