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
    subtitle: 'Group Project (4 members) | Backend & Real-time Systems Lead',
    category: 'HEALTHCARE / REAL-TIME',
    year: '2026',
    featured: true,
    tagline: 'End-to-end WebRTC consultations (<200ms latency), 20+ backend APIs, offline-first BLE data sync, doctor portal, and medical OCR.',
    description: 'Engineered an end-to-end clinical telemedicine system as Backend & Real-time Systems Lead. Built WebRTC signaling pipelines enabling sub-200ms video consultations, 20+ backend APIs, offline-first BLE patient data synchronization, and medical document OCR with openFDA drug checks.',
    technologies: [
      'Next.js',
      'TypeScript',
      'FastAPI',
      'Supabase',
      'WebRTC',
      'BLE (Bluetooth)',
      'AI / OCR',
      'PostgreSQL',
      'JWT / RLS'
    ],
    features: [
      'Engineered end-to-end WebRTC signalling pipelines, peer-connection APIs, and session management enabling sub-200ms real-time video consultations',
      'Shipped 20+ backend APIs across WebRTC session control, offline-first BLE patient-data synchronisation with auto-sync on reconnection',
      'Full doctor portal with appointment scheduling, medical document OCR, openFDA drug-interaction checks, and emergency QR patient passport generation',
      'Enforced zero cross-user data leakage across all API surfaces by combining JWT access tokens with Supabase Row-Level Security (RLS) policies and Isolation Forest health-risk analytics'
    ],
    githubUrl: 'https://github.com/Akshanth07/cura-track-v2',
    repoName: 'Akshanth07/cura-track-v2',
    color: '#ff3344'
  },
  {
    id: 'safetysense',
    slug: 'safetysense',
    title: 'Safety Sense',
    subtitle: 'Group Project (4 members) | IoT-Web Integration Lead',
    category: 'IoT / MACHINE LEARNING',
    year: '2025',
    featured: true,
    tagline: 'IoT machine health monitor with Arduino UNO, live Wi-Fi telemetry streaming, and Isolation Forest ML anomaly detection on 14,000+ samples.',
    description: 'Hardware-to-cloud machine health monitor integrating vibration, temperature, and sound sensors with Arduino UNO. Built a FastAPI backend for real-time telemetry streaming over Wi-Fi and trained an Isolation Forest anomaly detection model achieving 85–90% detection accuracy.',
    technologies: [
      'Arduino UNO',
      'NodeMCU (ESP8266)',
      'FastAPI',
      'Python',
      'Isolation Forest',
      'Scikit-learn',
      'NumPy / Pandas',
      'Sensor Integration'
    ],
    features: [
      'Integrated vibration, temperature, and sound sensors with Arduino UNO, processed analog/digital signals, and built a FastAPI backend to stream live telemetry over Wi-Fi',
      'Trained an Isolation Forest anomaly detection pipeline (NumPy, Pandas, Scikit-learn) on 14,000+ vibration samples, achieving 85–90% detection accuracy',
      'Reduced false-positive alerts through data filtering and custom threshold tuning',
      'Deployed a real-time Machine Health Monitor dashboard surfacing live sound, vibration, temperature, and humidity with colour-coded status indicators and a composite machine health index'
    ],
    githubUrl: 'https://github.com/Akshanth07/safetysense',
    repoName: 'Akshanth07/safetysense',
    color: '#ff5e3a'
  },
  {
    id: 'finbud',
    slug: 'fin-bud',
    title: 'FinBud – FinancialOS',
    subtitle: 'Group Project | Backend Lead',
    category: 'FINTECH / DISTRIBUTED',
    year: '2025',
    featured: true,
    tagline: 'Async FastAPI microservices powering 5 financial tracking modules, Supabase Row-Level Security, and SQLAlchemy ORM data-access layer.',
    description: 'Full-featured multi-user financial intelligence platform architected with async FastAPI microservices powering 5 tracking modules (assets, liabilities, investments, goals, and health score) with zero cross-user data leakage.',
    technologies: [
      'Next.js',
      'TypeScript',
      'FastAPI',
      'PostgreSQL',
      'Supabase',
      'SQLAlchemy',
      'Alembic',
      'Tailwind CSS'
    ],
    features: [
      'Architected async FastAPI microservices powering 5 financial tracking modules: assets, liabilities, investments, goals, and health score',
      'Eliminated cross-user data leakage by pairing JWT access tokens with Supabase Row-Level Security (RLS)',
      'Implemented a structured SQLAlchemy ORM data-access layer for multi-user financial data management',
      'Automated financial scheme ingestion, historical metrics calculation, and budget transaction tracking'
    ],
    githubUrl: 'https://github.com/Akshanth07/fin-bud',
    repoName: 'Akshanth07/fin-bud',
    color: '#ff2a2a'
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce-springboot',
    title: 'E-Commerce Spring Boot API',
    subtitle: 'Enterprise Backend Application',
    category: 'ENTERPRISE JAVA',
    year: '2025',
    featured: true,
    tagline: 'Java and Spring Boot REST backend with layered architecture (controllers, services, DTOs, repositories), RBAC, and JPA persistence.',
    description: 'Designed and shipped a production-grade e-commerce REST backend in Spring Boot featuring product catalogue management, cart workflows, order lifecycle state transitions, and role-based access control.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'PostgreSQL',
      'Spring Security',
      'JWT Auth',
      'DTO Pattern',
      'Maven',
      'REST APIs'
    ],
    features: [
      'Designed and shipped full-featured e-commerce REST backend in Spring Boot across product catalogue, cart, order lifecycle, and role management',
      'Engineered a layered architecture (controllers, services, DTOs, repositories) across 3 core entities',
      'Implemented product validation and category-based retrieval using Spring Data JPA repositories',
      'Structured global exception handling for invalid requests and missing resources with standardized contracts'
    ],
    githubUrl: 'https://github.com/Akshanth07/ecommerce-springboot',
    repoName: 'Akshanth07/ecommerce-springboot',
    color: '#ff4466'
  },
  {
    id: 'foodcourt',
    slug: 'food-court-management',
    title: 'Food Court Management System',
    subtitle: 'Multi-Tenant DBMS & Analytics Platform',
    category: 'DBMS / ANALYTICS',
    year: '2024',
    featured: true,
    tagline: 'Multi-tenant DBMS application handling real-time customer ordering, vendor token-based order fulfilment, automated billing, and sales analytics.',
    description: 'Multi-tenant DBMS web application handling customer ordering, vendor token-based order fulfillment, automated billing, and an admin analytics dashboard tracking sales volume and vendor performance.',
    technologies: [
      'Flask',
      'MySQL',
      'Streamlit',
      'Python',
      'DBMS',
      'Analytics'
    ],
    features: [
      'Built a multi-tenant DBMS web application handling real-time customer ordering and vendor token-based order fulfilment',
      'Automated billing calculation, order queueing, and kitchen fulfillment workflow',
      'Admin analytics dashboard built with Streamlit tracking sales volume and individual vendor performance',
      'Structured relational MySQL schema design for ACID transactional guarantees'
    ],
    githubUrl: 'https://github.com/Akshanth07/food-court-management',
    repoName: 'Akshanth07/food-court-management',
    color: '#ffaa00'
  }
];

