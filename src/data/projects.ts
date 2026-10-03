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
    id: 'ecommerce',
    slug: 'ecommerce-springboot',
    title: 'E-Commerce Spring Boot API',
    subtitle: 'Backend Application',
    category: 'ENTERPRISE JAVA',
    year: '2025',
    featured: true,
    tagline: 'REST API backend for product, cart, order, and user workflows.',
    description: 'A Spring Boot backend application designed to manage e-commerce workflows such as product management, cart operations, orders, and user access.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'PostgreSQL',
      'Spring Security',
      'JWT',
      'REST APIs',
      'Maven'
    ],
    features: [
      'Product and category management',
      'Cart and order workflows',
      'RESTful API architecture',
      'Database persistence using Spring Data JPA',
      'Authentication and authorization',
      'Structured controller-service-repository architecture'
    ],
    githubUrl: 'https://github.com/Akshanth07/ecommerce-springboot',
    repoName: 'Akshanth07/ecommerce-springboot',
    color: '#ff4466'
  },
  {
    id: 'curatrack',
    slug: 'cura-track-v2',
    title: 'CuraTrack V2',
    subtitle: 'Group Project',
    category: 'HEALTHCARE / REAL-TIME',
    year: '2026',
    featured: true,
    tagline: 'Healthcare and telemedicine platform for patient-doctor workflows and medical data management.',
    description: 'A healthcare and telemedicine platform focused on patient and doctor workflows, communication, and healthcare data management.',
    technologies: [
      'Next.js',
      'TypeScript',
      'FastAPI',
      'Supabase',
      'PostgreSQL',
      'WebRTC',
      'BLE',
      'OCR',
      'JWT'
    ],
    features: [
      'Doctor and patient workflows',
      'Telemedicine communication',
      'Backend REST APIs',
      'Healthcare data management',
      'BLE-based data integration',
      'Medical document OCR',
      'Authentication and access control'
    ],
    githubUrl: 'https://github.com/Akshanth07/cura-track-v2',
    repoName: 'Akshanth07/cura-track-v2',
    color: '#ff3344'
  },
  {
    id: 'safetysense',
    slug: 'safetysense',
    title: 'SafetySense',
    subtitle: 'IoT + Machine Learning Project',
    category: 'IoT / MACHINE LEARNING',
    year: '2025',
    featured: true,
    tagline: 'Sensor data collection and machine learning-based anomaly detection.',
    description: 'An IoT-based machine monitoring project that combines sensor data collection with machine learning-based anomaly detection.',
    technologies: [
      'Arduino Uno',
      'ESP8266 / NodeMCU',
      'Python',
      'FastAPI',
      'Scikit-learn',
      'Isolation Forest',
      'NumPy',
      'Pandas',
      'Sensor Integration'
    ],
    features: [
      'Sensor data collection',
      'Machine telemetry monitoring',
      'FastAPI backend',
      'IoT-to-software communication',
      'Machine learning anomaly detection',
      'Real-time monitoring interface'
    ],
    githubUrl: 'https://github.com/Akshanth07/safetysense',
    repoName: 'Akshanth07/safetysense',
    color: '#ff5e3a'
  },
  {
    id: 'foodcourt',
    slug: 'food-court-management',
    title: 'Food Court Management System',
    subtitle: 'DBMS Project',
    category: 'DBMS / ANALYTICS',
    year: '2024',
    featured: true,
    tagline: 'Database-driven ordering, vendor workflows, billing, and sales analytics.',
    description: 'A database-driven food court management application for customer ordering, vendor workflows, billing, and basic analytics.',
    technologies: [
      'Python',
      'Flask',
      'MySQL',
      'Streamlit',
      'SQL',
      'DBMS'
    ],
    features: [
      'Customer ordering',
      'Vendor order management',
      'Billing workflow',
      'Database-backed operations',
      'Sales and vendor analytics',
      'Relational database design'
    ],
    githubUrl: 'https://github.com/Akshanth07/food-court-management',
    repoName: 'Akshanth07/food-court-management',
    color: '#ffaa00'
  }
];
