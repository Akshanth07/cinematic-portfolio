export interface Milestone {
  year: string;
  phase: string;
  title: string;
  location: string;
  description: string;
  technologies: string[];
}

export const journeyMilestones: Milestone[] = [
  {
    year: '2022',
    phase: 'GENESIS',
    title: 'Core Computing & Foundations',
    location: 'Higher Secondary Education (73.2%)',
    description: 'Developed rigorous foundations in mathematics, physical sciences, core programming, data structures, and computer science principles.',
    technologies: ['C / C++', 'Core CS', 'Mathematics', 'Algorithms']
  },
  {
    year: '2023',
    phase: 'FOUNDATION',
    title: 'IoT & Embedded Electronics',
    location: 'Hardware Prototyping & Systems',
    description: 'Explored microcontroller programming with Arduino UNO, ESP-01, sensor interfacing (vibration, temperature, sound), and physical computing architectures.',
    technologies: ['Arduino UNO', 'ESP-01', 'Sensors', 'Embedded C++', 'Telemetry']
  },
  {
    year: '2024',
    phase: 'ACADEMIC EXCELLENCE',
    title: 'SRMIST CSE (IoT) — 9.36 CGPA',
    location: 'SRM Institute of Science and Technology',
    description: 'Began B.Tech in Computer Science and Engineering (Internet of Things) at SRMIST, maintaining a 9.36 / 10 CGPA while building full-stack DBMS applications and machine learning pipelines.',
    technologies: ['SRMIST', 'Python', 'FastAPI', 'MySQL', 'Flask', 'Streamlit']
  },
  {
    year: '2025',
    phase: 'AI & SYSTEMS',
    title: 'ML Anomaly Detection & Microservices',
    location: 'Open Source & Hackathons',
    description: 'Trained Isolation Forest ML models on 14,000+ vibration samples for SafetySense, architected async microservices for FinBud, and built an Eye Care Hospital System at INT Bot Hackathon.',
    technologies: ['Isolation Forest', 'FastAPI', 'Scikit-learn', 'Supabase RLS', 'SQLAlchemy', 'WebRTC']
  },
  {
    year: '2026',
    phase: 'ENTERPRISE & SIH',
    title: 'Saint-Gobain & SIH 2026 Qualified',
    location: 'Saint-Gobain (Mumbai) · SIH 2026',
    description: 'Engineered Java & Spring Boot backend modules for Oxygen & Transition platforms at Saint-Gobain. Qualified for Smart India Hackathon 2026 (SIH26133) building rural healthcare teleconsultation platforms.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'Postman', 'SIH 2026', 'WebRTC', 'BLE']
  }
];

