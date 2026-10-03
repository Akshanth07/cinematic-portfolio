export interface Milestone {
  year: string;
  phase: string;
  title: string;
  location: string;
  description: string;
  technologies: string[];
  highlights?: string[];
}

export const journeyMilestones: Milestone[] = [
  {
    year: '2024',
    phase: 'FOUNDATION',
    title: 'Building the Core',
    location: 'SRMIST · CSE (IoT)',
    description: 'Started my B.Tech journey in Computer Science & Engineering (IoT), building strong foundations in programming, problem solving, databases, and IoT systems.',
    technologies: ['Python', 'C++', 'SQL', 'Arduino', 'IoT'],
    highlights: [
      'Started B.Tech CSE (IoT) at SRMIST',
      'Built programming fundamentals',
      'Explored databases and IoT systems',
      'Worked with Arduino and sensor-based projects',
      'Began developing problem-solving skills'
    ]
  },
  {
    year: '2025',
    phase: 'BUILDING',
    title: 'Fundamentals → Projects',
    location: 'SRMIST · Projects & DSA',
    description: 'Strengthened core CS fundamentals while moving from classroom concepts to real projects, backend development, machine learning, and consistent DSA practice.',
    technologies: ['Java', 'Python', 'DSA', 'FastAPI', 'Machine Learning', 'MySQL'],
    highlights: [
      'Strengthened Java and Python fundamentals',
      'Started structured DSA and problem solving',
      'Built backend and database-driven applications',
      'Explored Machine Learning and anomaly detection',
      'Developed IoT and AI-based academic projects',
      'Worked with REST APIs and FastAPI'
    ]
  },
  {
    year: '2026',
    phase: 'INDUSTRY',
    title: 'From Projects to Production',
    location: 'Saint-Gobain · Mumbai',
    description: 'Stepped into industry through a Backend Development Internship at Saint-Gobain, working with Java, APIs, CRUD workflows, DTOs, services, repositories, and enterprise backend modules.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'Postman', 'Git', 'Backend'],
    highlights: [
      'Joined Saint-Gobain as a Backend Development Intern',
      'Worked with Java-based backend development',
      'Built and tested REST API workflows',
      'Worked with CRUD operations',
      'Worked with DTOs, services, repositories, and data mapping',
      'Contributed to Oxygen and Transition platform modules',
      'Continued expanding into AI, backend engineering, and IoT'
    ]
  }
];
