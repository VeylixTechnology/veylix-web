export interface Company {
  name: string;
  shortName: string;
  tagline: string;
  footerTagline: string;
  founder: string;
  coFounder: string;
  email: string;
  phone: string;
  whatsapp: string; // digits only for wa.me
  whatsappDisplay: string;
  linkedin: string;
  github: string;
  location: string;
}

export const COMPANY: Company = {
  name: 'Veylix Tech',
  shortName: 'Veylix Tech',
  tagline: 'Enterprise Software. AI Innovation. Real Impact.',
  footerTagline: 'Custom Software. Intelligent Solutions. Real Business Impact.',
  founder: 'Vishal Mahajan',
  coFounder: 'Priyanka Shinde',
  email: 'techveylix@gmail.com',
  phone: '+91 94052 03952',
  whatsapp: '919405203952',
  whatsappDisplay: '+91 94052 03952',
  linkedin: 'https://www.linkedin.com/company/veylix-tech/',
  github: 'https://github.com/veylix-tech',
  location: 'India',
};

export interface NavLink {
  label: string;
  path: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Technologies', path: '/technologies' },
  { label: 'Why Us', path: '/why-us' },
  { label: 'Contact', path: '/contact' },
];

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

/* ---------------- Home: Capabilities ---------------- */
export const CAPABILITIES: Feature[] = [
  {
    icon: 'business_center',
    title: 'Business Software',
    description:
      'Centralized platforms that consolidate operations, eliminate spreadsheet fragmentation, and enable unified reporting.',
  },
  {
    icon: 'dashboard_customize',
    title: 'Custom Applications',
    description:
      'Purpose-built applications engineered to your exact workflows, compliance requirements, and operational logic.',
  },
  {
    icon: 'account_balance',
    title: 'Financial Applications',
    description:
      'Treasury, GL, and financial reporting systems built to institutional standards for accuracy and auditability.',
  },
  {
    icon: 'api',
    title: 'Web & API Development',
    description:
      'Scalable web platforms and enterprise-grade APIs that integrate securely across your technology stack.',
  },
  {
    icon: 'smart_toy',
    title: 'AI Solutions',
    description:
      'Production-ready AI agents, chatbots, and retrieval-augmented systems that automate decisions and operations.',
  },
  {
    icon: 'cloud_sync',
    title: 'DevOps & Cloud',
    description:
      'Automated deployment pipelines, infrastructure-as-code, and cloud architecture optimized for reliability.',
  },
];

/* ---------------- Home: Problem -> Solution ---------------- */
export const BUSINESS_PROBLEMS: { icon: string; label: string }[] = [
  { icon: 'grid_on', label: 'Excel-Based Operations' },
  { icon: 'engineering', label: 'Manual Processes' },
  { icon: 'visibility_off', label: 'Limited Visibility' },
  { icon: 'hourglass_bottom', label: 'Delayed Reporting' },
  { icon: 'content_copy', label: 'Duplicate Work' },
];

export const OUR_SOLUTIONS: { icon: string; label: string }[] = [
  { icon: 'hub', label: 'Centralized Applications' },
  { icon: 'bolt', label: 'Automation' },
  { icon: 'monitoring', label: 'Real-Time Dashboards' },
  { icon: 'insights', label: 'Reporting & Analytics' },
  { icon: 'auto_awesome', label: 'AI-Powered Insights' },
];

/* ---------------- Services ---------------- */
export interface Service extends Feature {
  category: string;
}

export const SERVICES: Service[] = [
  {
    category: 'Business',
    icon: 'contacts',
    title: 'CRM Software',
    description:
      'Unified customer management platform that tracks interactions, automates workflows, and enables data-driven sales.',
  },
  {
    category: 'Business',
    icon: 'inventory_2',
    title: 'Inventory Management',
    description:
      'Real-time stock tracking with automated replenishment alerts, valuations, and movement audits.',
  },
  {
    category: 'Business',
    icon: 'badge',
    title: 'HR & Payroll Systems',
    description:
      'Centralized employee records, compliance tracking, and payroll automation with full audit trails.',
  },
  {
    category: 'Business',
    icon: 'admin_panel_settings',
    title: 'Admin Portals',
    description:
      'Secure back-office control centers for configuration, monitoring, and operational oversight.',
  },
  {
    category: 'Finance',
    icon: 'account_balance',
    title: 'Financial Software',
    description:
      'Treasury, cashflow forecasting, and GL reporting systems built to institutional compliance standards.',
  },
  {
    category: 'Web',
    icon: 'language',
    title: 'Web Applications',
    description:
      'Enterprise-grade web platforms built on modern architectures with responsive design and performance.',
  },
  {
    category: 'Web',
    icon: 'api',
    title: 'API Development',
    description:
      'RESTful APIs with comprehensive documentation, security controls, and seamless third-party integration.',
  },
  {
    category: 'AI',
    icon: 'chat',
    title: 'AI Chatbots',
    description:
      'Conversational interfaces for customer engagement and support automation with continuous learning.',
  },
  {
    category: 'AI',
    icon: 'support_agent',
    title: 'Business Assistants',
    description:
      'AI systems trained on your knowledge base to answer questions and accelerate decision-making.',
  },
  {
    category: 'AI',
    icon: 'psychology',
    title: 'LLM Integration',
    description:
      'Secure, scalable integration of OpenAI and Azure models into production applications.',
  },
  {
    category: 'AI',
    icon: 'find_in_page',
    title: 'Retrieval-Augmented Systems',
    description:
      'AI systems grounded in your proprietary data for accurate, contextual answers and reduced hallucination.',
  },
  {
    category: 'AI',
    icon: 'precision_manufacturing',
    title: 'AI Agents',
    description:
      'Autonomous systems that reason, execute multi-step tasks, and integrate with your workflows.',
  },
  {
    category: 'AI',
    icon: 'analytics',
    title: 'AI-Driven Analytics',
    description:
      'Automated insights and narrative generation from operational data for faster decision-making.',
  },
];

/* ---------------- Solutions ---------------- */
export const SOLUTIONS: Feature[] = [
  {
    icon: 'sync_alt',
    title: 'Process Automation',
    description:
      'Replace manual workflows with rule-driven automation to reduce errors and accelerate execution.',
  },
  {
    icon: 'swap_horiz',
    title: 'Spreadsheet to Software Migration',
    description:
      'Convert legacy spreadsheets into secure, auditable, multi-user web applications with data integrity.',
  },
  {
    icon: 'payments',
    title: 'Financial Modernization',
    description:
      'Implement treasury, cashflow, and GL systems to establish a single source of truth for finance.',
  },
  {
    icon: 'dashboard',
    title: 'Business Intelligence Systems',
    description:
      'Real-time dashboards and automated reports that provide instant visibility to leadership.',
  },
  {
    icon: 'support_agent',
    title: 'AI-Powered Intelligence',
    description:
      'Deploy AI systems that extract insights from your data and augment decision-making.',
  },
  {
    icon: 'integration_instructions',
    title: 'System Integration',
    description:
      'Connect ERPs, financial platforms, payment systems, and third-party services into cohesive workflows.',
  },
  {
    icon: 'rocket_launch',
    title: 'Digital Transformation',
    description:
      'Comprehensive modernization from legacy operations to intelligent, automated platforms.',
  },
];

export const INDUSTRIES: { icon: string; name: string }[] = [
  { icon: 'account_balance', name: 'Finance & Treasury' },
  { icon: 'factory', name: 'Manufacturing' },
  { icon: 'storefront', name: 'Retail' },
  { icon: 'local_shipping', name: 'Logistics' },
  { icon: 'store', name: 'SMEs' },
  { icon: 'rocket_launch', name: 'Startups' },
  { icon: 'insights', name: 'Consulting' },
  { icon: 'school', name: 'Education' },
  { icon: 'medical_services', name: 'Healthcare' },
  { icon: 'apartment', name: 'Real Estate' },
];

/* ---------------- Portfolio ---------------- */
export interface Project {
  name: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: string;
  accent: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'DigiTreasury',
    description: 'Enterprise treasury platform consolidating investment tracking, cashflow forecasting, and financial reporting in one system.',
    features: [
      'Investment MIS Reporting',
      'Real-Time Cashflow Forecasts',
      'GL Reconciliation',
      'Compliance Reporting',
      'Workflow Automation',
    ],
    technologies: ['Angular', '.NET', 'SQL Server'],
    icon: 'account_balance',
    accent: '#c9a54e',
  },
  {
    name: 'AI Business Assistant',
    description:
      'AI-powered platform that extracts insights from company documents and operational data, enabling instant answers to business questions.',
    features: [
      'Conversational Interface',
      'Document Search & Retrieval',
      'LLM Integration',
      'Knowledge Base Management',
    ],
    technologies: ['Angular', 'OpenAI', 'RAG', 'Python'],
    icon: 'smart_toy',
    accent: '#3f68a8',
  },
  {
    name: 'Business Management System',
    description: 'Integrated platform automating core business operations, from user management and workflows to reporting and compliance.',
    features: [
      'Role-Based Access Control',
      'Process Automation',
      'Real-Time Dashboards',
      'Audit Trail & Compliance',
    ],
    technologies: ['Angular', '.NET Core', 'SQL Server'],
    icon: 'dashboard_customize',
    accent: '#1b3766',
  },
];

/* ---------------- Development Process ---------------- */
export interface ProcessStep {
  step: number;
  icon: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    icon: 'assignment',
    title: 'Requirements & Discovery',
    description:
      'In-depth conversations to understand your objectives, constraints, success metrics, and technical environment.',
  },
  {
    step: 2,
    icon: 'query_stats',
    title: 'Analysis & Architecture',
    description:
      'Define scope, technical architecture, implementation timeline, and detailed project roadmap.',
  },
  {
    step: 3,
    icon: 'design_services',
    title: 'Design & Prototyping',
    description:
      'Create intuitive user interfaces and interactive prototypes validated with your team.',
  },
  {
    step: 4,
    icon: 'code',
    title: 'Development',
    description:
      'Iterative development using modern frameworks, clean architecture, and continuous integration practices.',
  },
  {
    step: 5,
    icon: 'bug_report',
    title: 'Testing & QA',
    description:
      'Comprehensive testing including functionality, performance, security, and user acceptance verification.',
  },
  {
    step: 6,
    icon: 'rocket_launch',
    title: 'Deployment & Release',
    description:
      'Smooth production deployment with automated pipelines, comprehensive documentation, and zero downtime.',
  },
  {
    step: 7,
    icon: 'support',
    title: 'Support & Optimization',
    description:
      'Ongoing technical support, performance monitoring, security updates, and continuous improvements.',
  },
];

/* ---------------- Why Veylix Tech ---------------- */
export const WHY_REASONS: Feature[] = [
  {
    icon: 'tune',
    title: 'Custom Engineering',
    description: 'Solutions architected around your processes, compliance needs, and competitive advantages—never templated software.',
  },
  {
    icon: 'workspace_premium',
    title: 'Deep Technical Depth',
    description: 'Full-stack expertise in enterprise architectures, modern frameworks, clean code practices, and system design.',
  },
  {
    icon: 'account_balance',
    title: 'Financial Domain Expertise',
    description: 'Proven track record building treasury systems, compliance-grade financial platforms, and audit-ready reporting.',
  },
  {
    icon: 'smart_toy',
    title: 'Production AI Implementation',
    description: 'End-to-end AI capability—from architecture and model integration to deployment and ongoing optimization.',
  },
  {
    icon: 'architecture',
    title: 'Enterprise-Grade Architecture',
    description: 'Scalable systems designed for growth—handling increased users, data volume, and operational complexity.',
  },
  {
    icon: 'verified',
    title: 'Predictable Delivery',
    description: 'Transparent process, realistic timelines, frequent communication, and outcomes that match commitments.',
  },
  {
    icon: 'auto_awesome',
    title: 'Modern Technology Stack',
    description: 'Built on proven frameworks and platforms that minimize technical debt and support long-term maintenance.',
  },
  {
    icon: 'handshake',
    title: 'Ongoing Partnership',
    description: 'Dedicated support, proactive maintenance, and continuous enhancement as your business evolves.',
  },
];

/* ---------------- Technology Stack ---------------- */
export interface TechGroup {
  icon: string;
  title: string;
  items: string[];
}

export const TECH_STACK: TechGroup[] = [
  {
    icon: 'web',
    title: 'Frontend',
    items: ['Angular', 'TypeScript', 'HTML5', 'SCSS'],
  },
  {
    icon: 'dns',
    title: 'Backend Expertise',
    items: ['.NET Core', 'C#', 'REST API', 'Dapper'],
  },
  {
    icon: 'storage',
    title: 'Database',
    items: ['SQL Server'],
  },
  {
    icon: 'cloud_sync',
    title: 'DevOps',
    items: ['GitHub', 'Azure DevOps', 'CI/CD'],
  },
  {
    icon: 'smart_toy',
    title: 'AI & GenAI',
    items: [
      'OpenAI',
      'Azure OpenAI',
      'LLM Integration',
      'AI Agents',
      'RAG Applications',
      'Prompt Engineering',
    ],
  },
];

/* ---------------- Contact ---------------- */
export const CONTACT_SERVICES: string[] = [
  'Custom Software Development',
  'Business Automation',
  'Financial Software',
  'Web Application Development',
  'API Development & Integration',
  'AI Chatbot Development',
  'AI Business Assistant',
  'LLM Integration',
  'RAG Application',
  'AI Agent Development',
  'DevOps & Cloud',
  'Other',
];

/* ---------------- Stats ---------------- */
export const STATS: { value: string; label: string }[] = [
  { value: '13+', label: 'Core Services' },
  { value: '10+', label: 'Industries Served' },
  { value: '100%', label: 'Custom-Built Solutions' },
  { value: '24/7', label: 'Dedicated Support' },
];

/* ---------------- About ---------------- */
export interface AboutHighlight {
  icon: string;
  title: string;
  description: string;
}

export const ABOUT_INTRO: string[] = [
  'Veylix Tech engineers custom software and AI systems for organizations transitioning from manual operations to intelligent, automated platforms. We specialize in business applications, financial software, and production-grade AI that directly improve operational efficiency and decision-making.',
  'Our approach combines technical depth in modern architectures with domain expertise in finance, automation, and AI integration. We deliver comprehensive solutions—from requirements through ongoing support—designed around your specific business model, compliance needs, and growth trajectory.',
];

export const ABOUT_HIGHLIGHTS: AboutHighlight[] = [
  {
    icon: 'flag',
    title: 'Our Mission',
    description:
      'Build software and AI systems that reduce manual work, improve operational visibility, and enable faster business decisions.',
  },
  {
    icon: 'visibility',
    title: 'Our Vision',
    description:
      'Become the engineering partner enterprises trust to modernize operations and compete in a digital-first market.',
  },
  {
    icon: 'diversity_3',
    title: 'Our Values',
    description:
      'Technical integrity, transparent communication, reliable delivery, and long-term partnership.',
  },
];

/* ---------------- Leadership ---------------- */
export interface Founder {
  name: string;
  role: string;
  initials: string;
  bio: string;
  email?: string;
}

export const FOUNDERS: Founder[] = [
  {
    name: "Vishal Mahajan",
    role: "Founder",
    initials: "VM",
    bio: "Software architect with deep expertise in enterprise applications, financial systems, and AI integration. Leads technical strategy and engineering excellence at Veylix Tech.",
    email: "vishalm.techveylix@gmail.com",
  },
];

/* ---------------- Testimonials ---------------- */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Replaced fragmented Excel-based reporting with a unified platform. Financial dashboards that previously took two days now update in real time, giving leadership instant visibility.',
    name: 'Finance Director',
    role: 'Treasury & Finance',
    initials: 'FD',
  },
  {
    quote:
      'The AI business assistant has fundamentally changed how we access operational data. It understands context and delivers answers our team actually relies on for daily decisions.',
    name: 'Operations Head',
    role: 'Manufacturing Enterprise',
    initials: 'OH',
  },
  {
    quote:
      'Technical depth combined with reliable execution. Delivered a production-ready system on schedule, with continued support as we scale operations and add new capabilities.',
    name: 'Managing Director',
    role: 'SME Growth',
    initials: 'MD',
  },
];
