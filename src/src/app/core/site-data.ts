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
  tagline: 'Rooted in Values. Powered by Technology.',
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
      'Centralized platforms that replace spreadsheets and connect your teams, data and daily operations.',
  },
  {
    icon: 'dashboard_customize',
    title: 'Custom Applications',
    description:
      'Tailor-made applications engineered precisely around your unique workflows and business rules.',
  },
  {
    icon: 'account_balance',
    title: 'Financial Applications',
    description:
      'Robust treasury, cashflow and financial reporting systems built for accuracy and compliance.',
  },
  {
    icon: 'api',
    title: 'Web & API Development',
    description:
      'Modern, scalable web applications and secure APIs that integrate cleanly with your ecosystem.',
  },
  {
    icon: 'smart_toy',
    title: 'AI Solutions',
    description:
      'Chatbots, assistants, RAG and AI agents that turn your documents and data into intelligent action.',
  },
  {
    icon: 'cloud_sync',
    title: 'DevOps',
    description:
      'CI/CD pipelines, cloud deployment and automation that ship reliably and scale on demand.',
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
      'Manage leads, customers and sales pipelines in one centralized, insight-driven platform.',
  },
  {
    category: 'Business',
    icon: 'inventory_2',
    title: 'Inventory Management System',
    description:
      'Track stock, movements and valuations in real time with automated alerts and reporting.',
  },
  {
    category: 'Business',
    icon: 'badge',
    title: 'Employee Management System',
    description:
      'Digitize HR, attendance, roles and employee records with secure role-based access.',
  },
  {
    category: 'Business',
    icon: 'admin_panel_settings',
    title: 'Admin Portal Development',
    description:
      'Powerful back-office portals to configure, monitor and control your entire operation.',
  },
  {
    category: 'Finance',
    icon: 'account_balance',
    title: 'Financial Software Solutions',
    description:
      'Treasury, cashflow, GL and MIS reporting systems engineered for accuracy and control.',
  },
  {
    category: 'Web',
    icon: 'language',
    title: 'Web Application Development',
    description:
      'Fast, responsive and scalable web apps built with Angular and modern best practices.',
  },
  {
    category: 'Web',
    icon: 'api',
    title: 'API Development',
    description:
      'Secure, well-documented REST APIs that power integrations across your systems.',
  },
  {
    category: 'AI',
    icon: 'chat',
    title: 'AI Chatbot Development',
    description:
      'Conversational chatbots that engage users and automate support around the clock.',
  },
  {
    category: 'AI',
    icon: 'support_agent',
    title: 'AI Business Assistant',
    description:
      'An intelligent assistant that answers business questions from your documents and data.',
  },
  {
    category: 'AI',
    icon: 'psychology',
    title: 'LLM Integration',
    description:
      'Integrate OpenAI and Azure OpenAI models securely into your products and workflows.',
  },
  {
    category: 'AI',
    icon: 'find_in_page',
    title: 'RAG Application Development',
    description:
      'Retrieval-augmented generation apps that ground AI answers in your trusted knowledge.',
  },
  {
    category: 'AI',
    icon: 'precision_manufacturing',
    title: 'AI Agent Development',
    description:
      'Autonomous AI agents that reason, use tools and execute multi-step business tasks.',
  },
  {
    category: 'AI',
    icon: 'analytics',
    title: 'AI-Powered Reporting',
    description:
      'Natural-language insights and automated narratives generated from your operational data.',
  },
];

/* ---------------- Solutions ---------------- */
export const SOLUTIONS: Feature[] = [
  {
    icon: 'sync_alt',
    title: 'Business Process Automation',
    description:
      'Eliminate repetitive manual work with automated, rule-driven digital workflows.',
  },
  {
    icon: 'swap_horiz',
    title: 'Excel To Web Application Conversion',
    description:
      'Transform fragile spreadsheets into secure, multi-user web applications with audit trails.',
  },
  {
    icon: 'payments',
    title: 'Financial Management Solutions',
    description:
      'Manage cashflow, investments and financial reporting from a single source of truth.',
  },
  {
    icon: 'dashboard',
    title: 'Reporting & Dashboard Systems',
    description:
      'Real-time dashboards and rich reports that give leaders instant operational visibility.',
  },
  {
    icon: 'support_agent',
    title: 'AI Business Assistant Solutions',
    description:
      'Deploy AI assistants that understand your business and accelerate decision-making.',
  },
  {
    icon: 'integration_instructions',
    title: 'API Integration Solutions',
    description:
      'Connect ERPs, banks, payment gateways and third-party services into one workflow.',
  },
  {
    icon: 'rocket_launch',
    title: 'Digital Transformation Solutions',
    description:
      'End-to-end modernization that moves your organization from manual to intelligent.',
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
    description: 'Enterprise Treasury & Financial Management Platform',
    features: [
      'Investment MIS Reports',
      'Cashflow Management',
      'GL Reports',
      'Financial Reporting',
      'Workflow Automation',
    ],
    technologies: ['Angular', '.NET', 'SQL Server'],
    icon: 'account_balance',
    accent: '#c9a54e',
  },
  {
    name: 'AI Business Assistant',
    description:
      'AI-powered assistant that answers business questions using company documents and operational data.',
    features: [
      'AI Chat Interface',
      'RAG Search',
      'LLM Integration',
      'Business Knowledge Assistant',
    ],
    technologies: ['Angular', 'OpenAI', 'RAG', 'Python'],
    icon: 'smart_toy',
    accent: '#3f68a8',
  },
  {
    name: 'Business Management System',
    description: 'A unified platform to run day-to-day business operations end to end.',
    features: [
      'User Management',
      'Workflow Automation',
      'Reports & Dashboards',
      'Role-Based Access',
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
    title: 'Requirement Gathering',
    description:
      'We listen closely to understand your goals, challenges and success criteria in detail.',
  },
  {
    step: 2,
    icon: 'query_stats',
    title: 'Analysis & Planning',
    description:
      'We define scope, architecture and a clear roadmap with realistic milestones and estimates.',
  },
  {
    step: 3,
    icon: 'design_services',
    title: 'UI/UX Design',
    description:
      'We craft intuitive, modern interfaces and interactive prototypes for your review.',
  },
  {
    step: 4,
    icon: 'code',
    title: 'Development',
    description:
      'We build in agile iterations using clean, scalable and maintainable code.',
  },
  {
    step: 5,
    icon: 'bug_report',
    title: 'Testing',
    description:
      'We rigorously test functionality, performance and security before every release.',
  },
  {
    step: 6,
    icon: 'rocket_launch',
    title: 'Deployment',
    description:
      'We deploy smoothly to the cloud with automated CI/CD pipelines and zero-drama releases.',
  },
  {
    step: 7,
    icon: 'support',
    title: 'Support & Enhancement',
    description:
      'We provide reliable long-term support and continuously enhance your solution.',
  },
];

/* ---------------- Why Veylix Tech ---------------- */
export const WHY_REASONS: Feature[] = [
  {
    icon: 'tune',
    title: 'Custom Solution Approach',
    description: 'Every solution is engineered around your exact processes — never one-size-fits-all.',
  },
  {
    icon: 'workspace_premium',
    title: 'Strong Technical Expertise',
    description: 'A team fluent in modern architectures, best practices and clean engineering.',
  },
  {
    icon: 'account_balance',
    title: 'Financial Domain Knowledge',
    description: 'Deep experience building treasury, cashflow and financial reporting systems.',
  },
  {
    icon: 'smart_toy',
    title: 'AI Integration Capabilities',
    description: 'Practical, production-grade AI: chatbots, assistants, RAG and autonomous agents.',
  },
  {
    icon: 'architecture',
    title: 'Scalable Architecture',
    description: 'Solutions designed to grow effortlessly with your users, data and ambitions.',
  },
  {
    icon: 'verified',
    title: 'Reliable Delivery',
    description: 'Predictable timelines, transparent communication and dependable outcomes.',
  },
  {
    icon: 'auto_awesome',
    title: 'Modern Technologies',
    description: 'We build with today\u2019s best tools so your product stays future-ready.',
  },
  {
    icon: 'handshake',
    title: 'Long-Term Support',
    description: 'A committed partner for ongoing maintenance, enhancements and growth.',
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
  { value: '13+', label: 'Services Offered' },
  { value: '10+', label: 'Industries Served' },
  { value: '100%', label: 'Custom Built' },
  { value: '24/7', label: 'Support Mindset' },
];

/* ---------------- About ---------------- */
export interface AboutHighlight {
  icon: string;
  title: string;
  description: string;
}

export const ABOUT_INTRO: string[] = [
  'Veylix Tech is a software development and AI solutions company that helps organizations replace manual, spreadsheet-driven operations with secure, scalable and intelligent digital platforms.',
  'From custom business applications and financial software to advanced AI assistants and automation, we partner with growing businesses and enterprises to design, build and support solutions that deliver measurable impact.',
];

export const ABOUT_HIGHLIGHTS: AboutHighlight[] = [
  {
    icon: 'flag',
    title: 'Our Mission',
    description:
      'To engineer dependable software and AI that automate operations and accelerate business growth.',
  },
  {
    icon: 'visibility',
    title: 'Our Vision',
    description:
      'To be the trusted technology partner that transforms how businesses operate through intelligent software.',
  },
  {
    icon: 'diversity_3',
    title: 'Our Values',
    description:
      'Integrity, craftsmanship and long-term partnership — rooted in values, powered by technology.',
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
    name: 'Vishal Mahajan',
    role: 'Founder',
    initials: 'VM',
    bio: 'Drives Veylix Tech’s vision and engineering, building custom software and AI solutions that create real business impact.',
    email: 'vishalm.techveylix@gmail.com',
  },
  {
    name: 'Priyanka Shinde',
    role: 'Co-Founder',
    initials: 'PS',
    bio: 'Leads delivery and client partnerships, ensuring every solution is reliable, scalable and built around customer needs.',
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
      'Veylix Tech replaced our fragile Excel processes with a centralized platform. Reporting that took days now happens in real time.',
    name: 'Finance Director',
    role: 'Treasury & Finance',
    initials: 'FD',
  },
  {
    quote:
      'Their AI business assistant genuinely understands our documents and data. It has become part of how our team makes decisions every day.',
    name: 'Operations Head',
    role: 'Manufacturing Enterprise',
    initials: 'OH',
  },
  {
    quote:
      'Professional, reliable and technically excellent. They delivered a scalable system on time and continue to support us as we grow.',
    name: 'Managing Director',
    role: 'Growing SME',
    initials: 'MD',
  },
];
