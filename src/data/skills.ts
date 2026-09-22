export interface SkillItem {
  name: string;
  domain: 'BACKEND' | 'AI / ML' | 'IoT' | 'FRONTEND';
  category: 'BACKEND' | 'AI / ML' | 'IoT' | 'FRONTEND';
  related: string[];
  context: string;
}

export const skillCategories = ['ALL', 'BACKEND', 'AI / ML', 'IoT', 'FRONTEND'] as const;

export const skillsData: SkillItem[] = [
  // Backend & Architecture
  {
    name: 'Java',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['Spring Boot', 'Spring Data JPA', 'REST APIs', 'PostgreSQL', 'Maven'],
    context: 'Enterprise backend development for Oxygen & Transition platforms at Saint-Gobain and layered REST API architectures.'
  },
  {
    name: 'Spring Boot',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['Java', 'Spring Data JPA', 'Spring Security', 'DTOs', 'Mappers'],
    context: 'Developed enterprise REST endpoints, DTO mappers, Role-Based Access Control, and forecast recalculation workflows.'
  },
  {
    name: 'FastAPI',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['Python', 'Async I/O', 'REST APIs', 'SQLAlchemy', 'Pydantic'],
    context: 'Asynchronous microservices powering CuraTrack V2 teleconsultations, FinBud financial modules, and SafetySense live telemetry.'
  },
  {
    name: 'Python',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['FastAPI', 'Flask', 'Isolation Forest', 'Scikit-learn', 'NumPy'],
    context: 'Core language for async backend APIs, ML anomaly detection pipelines, and data processing scripts.'
  },
  {
    name: 'PostgreSQL',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['SQL', 'Supabase', 'SQLAlchemy', 'Spring Data JPA', 'Alembic'],
    context: 'Relational database persistence across Spring Boot e-commerce, FinBud ledger, and CuraTrack clinical systems.'
  },
  {
    name: 'REST APIs',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['Spring Boot', 'FastAPI', 'Postman', 'DTO Pattern', 'JSON'],
    context: 'Engineered 20+ clinical endpoints, financial data APIs, and enterprise Saint-Gobain resource management services.'
  },
  {
    name: 'Supabase & RLS',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['PostgreSQL', 'JWT', 'Security Policies', 'Zero Data Leakage'],
    context: 'Enforced zero cross-user data leakage by combining JWT access tokens with Supabase Row-Level Security policies.'
  },
  {
    name: 'Docker & Maven',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['Git', 'IntelliJ IDEA', 'Postman', 'CI/CD Pipelines'],
    context: 'Containerization, build management, Postman API validation, and Git-based collaborative development.'
  },

  // AI & Machine Learning
  {
    name: 'Isolation Forest',
    domain: 'AI / ML',
    category: 'AI / ML',
    related: ['Scikit-learn', 'NumPy', 'Pandas', 'Anomaly Detection'],
    context: 'Trained unsupervised anomaly detection pipeline on 14,000+ vibration samples, achieving 85–90% machine defect accuracy.'
  },
  {
    name: 'Machine Learning',
    domain: 'AI / ML',
    category: 'AI / ML',
    related: ['Scikit-learn', 'Random Forest', 'Regression Models', 'Python'],
    context: 'Applied predictive analytics, health-risk classification, threshold tuning, and machine health telemetry index computation.'
  },
  {
    name: 'OCR & Vision',
    domain: 'AI / ML',
    category: 'AI / ML',
    related: ['Tesseract', 'openFDA', 'Medical OCR', 'Document Parsing'],
    context: 'Automated medical prescription OCR and integrated openFDA database drug-interaction validation in CuraTrack V2.'
  },
  {
    name: 'NumPy & Pandas',
    domain: 'AI / ML',
    category: 'AI / ML',
    related: ['Data Cleaning', 'Feature Engineering', 'Telemetry Ingest'],
    context: 'High-speed dataset preprocessing, time-series telemetry matrix transforms, and statistical signal evaluation.'
  },

  // IoT & Real-Time Systems
  {
    name: 'Arduino Uno & ESP8266',
    domain: 'IoT',
    category: 'IoT',
    related: ['NodeMCU', 'ESP-01', 'Microcontrollers', 'Embedded C++'],
    context: 'Microcontroller hardware architecture for live sensor acquisition, Wi-Fi streaming, and embedded edge compute.'
  },
  {
    name: 'Sensor Integration',
    domain: 'IoT',
    category: 'IoT',
    related: ['Vibration Sensors', 'Temperature', 'Sound', 'Analog/Digital'],
    context: 'Multi-sensor hardware interfacing measuring vibration, sound, temperature, and humidity for machine health monitors.'
  },
  {
    name: 'WebRTC & Signaling',
    domain: 'IoT',
    category: 'IoT',
    related: ['Real-Time Video', 'Peer Connections', 'Sub-200ms Latency'],
    context: 'Engineered sub-200ms peer-connection signaling pipelines for live clinical doctor-patient telemedicine consultations.'
  },
  {
    name: 'BLE (Bluetooth)',
    domain: 'IoT',
    category: 'IoT',
    related: ['Offline-First Sync', 'Vitals Ingestion', 'Reconnection Sync'],
    context: 'Engineered offline-first Bluetooth Low Energy telemetry sync for automatic patient vitals transmission upon reconnect.'
  },

  // Frontend & Client
  {
    name: 'React & Next.js',
    domain: 'FRONTEND',
    category: 'FRONTEND',
    related: ['TypeScript', 'Tailwind CSS', 'TanStack Query', 'State Management'],
    context: 'Developed high-performance client portals for CuraTrack doctor/patient workflows and FinBud financial intelligence dashboards.'
  },
  {
    name: 'TypeScript & JavaScript',
    domain: 'FRONTEND',
    category: 'FRONTEND',
    related: ['Next.js', 'React', 'Node.js', 'Type Safety'],
    context: 'Primary language for type-safe frontend UI architecture, asynchronous API consumption, and real-time state reactivity.'
  },
  {
    name: 'Three.js & CSS',
    domain: 'FRONTEND',
    category: 'FRONTEND',
    related: ['WebGL', 'Cinematic Shaders', 'GSAP', 'Lenis Smooth Scroll'],
    context: 'Architected real-time 3D spatial environments, custom particle systems, and interactive cinematic web applications.'
  }
];

