export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  featured: boolean;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  repoName: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: 'curatrack',
    slug: 'cura-track-v2',
    title: 'CuraTrack V2',
    subtitle: 'Healthcare & Telemedicine Platform',
    category: 'HEALTHCARE / WEB',
    year: '2024',
    featured: true,
    tagline: 'Healthcare platform connecting patients and doctors with clinical scheduling, video consultations, and health management across web and mobile.',
    description: 'CuraTrack V2 is a full-stack telemedicine application providing structured doctor and patient portals, clinical appointment scheduling, consultation rooms, and database integration across web and mobile platforms.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Python',
      'FastAPI',
      'React Native / Expo',
      'Supabase',
      'PostgreSQL',
      'Tailwind CSS'
    ],
    features: [
      'Patient and Doctor clinical schedule management and appointment routing',
      'Consultation call room support with real-time signaling',
      'Cross-platform access across web portals and Expo mobile application',
      'FastAPI asynchronous backend with PostgreSQL and Supabase data layer'
    ],
    githubUrl: 'https://github.com/Akshanth07/cura-track-v2',
    repoName: 'Akshanth07/cura-track-v2',
    color: '#ff3344'
  },
  {
    id: 'finbud',
    slug: 'fin-bud',
    title: 'FinBud (FinancialOS)',
    subtitle: 'Financial Management & Budgeting Application',
    category: 'FINTECH',
    year: '2024',
    featured: true,
    tagline: 'Full-stack financial tracking application featuring automated mutual fund data synchronization, ledger management, and budget insights.',
    description: 'FinBud is an application for personal financial management, featuring automated mutual fund scheme synchronization, relational database migrations, and expense ledger tracking with a FastAPI backend and Next.js frontend.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'Alembic',
      'TanStack Query',
      'Tailwind CSS'
    ],
    features: [
      'Mutual fund scheme synchronization script (sync_schemes.py) for financial data ingest',
      'Database schema management and migrations via Alembic and SQLAlchemy ORM',
      'Interactive expense tracking, budget allocation, and transaction ledger',
      'Asynchronous REST API endpoints powered by FastAPI and PostgreSQL'
    ],
    githubUrl: 'https://github.com/Akshanth07/fin-bud',
    repoName: 'Akshanth07/fin-bud',
    color: '#ff5e3a'
  },
  {
    id: 'safetysense',
    slug: 'safetysense',
    title: 'SafetySense',
    subtitle: 'Real-Time Arduino Sensor Dashboard & Anomaly Detection',
    category: 'IoT / AI',
    year: '2024',
    featured: true,
    tagline: 'Real-time Arduino hardware sensor monitoring dashboard with supervised machine learning anomaly detection.',
    description: 'SafetySense connects physical Arduino microcontrollers and sensor hardware with a Node.js dashboard server and Python supervised anomaly detection scripts for sensor monitoring and threshold alert detection.',
    technologies: [
      'Python',
      'Scikit-Learn',
      'Node.js',
      'Express',
      'JavaScript',
      'Arduino Hardware',
      'Sensor Interfacing'
    ],
    features: [
      'Real-time Arduino hardware sensor dashboard server (server.js) built with Node.js and Express',
      'Supervised anomaly detection model for sensor data analysis (supervised_anomaly_detection.py)',
      'Sensor dataset ingestion and threshold breach alerting',
      'Hardware-to-software data bridge for industrial and safety monitoring'
    ],
    githubUrl: 'https://github.com/Akshanth07/safetysense',
    repoName: 'Akshanth07/safetysense',
    color: '#ff2a2a'
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce-springboot',
    title: 'E-Commerce Spring Boot Backend',
    subtitle: 'Enterprise E-Commerce REST API Backend',
    category: 'ENTERPRISE BACKEND',
    year: '2024',
    featured: true,
    tagline: 'Java and Spring Boot backend application with Role-Based Access Control, Order Processing, Reseller Reviews, and PostgreSQL integration.',
    description: 'An internship project engineered with Java and Spring Boot implementing User & Role Management, Product & Category Management, Reseller Reviews & Ratings, Order Processing, DTO Pattern, Validation, Exception Handling, and RESTful APIs.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'PostgreSQL',
      'Spring Security',
      'JWT Authentication',
      'DTO Pattern',
      'Maven',
      'REST APIs'
    ],
    features: [
      'User & Role Management with Role-Based Access Control (RBAC)',
      'Product and Category hierarchy management with inventory tracking',
      'Reseller review and rating system with calculation logic',
      'Transactional order processing lifecycle and global exception handling',
      'PostgreSQL relational database persistence via Spring Data JPA / Hibernate'
    ],
    githubUrl: 'https://github.com/Akshanth07/ecommerce-springboot',
    repoName: 'Akshanth07/ecommerce-springboot',
    color: '#ff4466'
  }
];
