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
    title: 'B.Tech CSE — IoT',
    location: 'SRM Institute of Science and Technology',
    description: 'Began undergraduate degree in Computer Science and Engineering with specialization in Internet of Things at SRMIST, focusing on core programming, computer science principles, and electronics.',
    technologies: ['C / C++', 'Core CS', 'Data Structures', 'Algorithms']
  },
  {
    year: '2023',
    phase: 'FOUNDATION',
    title: 'IoT & Embedded Systems',
    location: 'Academic & Laboratory Research',
    description: 'Explored hardware programming, microcontroller interfacing, embedded systems, and practical sensor integration.',
    technologies: ['IoT', 'Arduino', 'Sensors', 'Embedded Systems', 'Programming']
  },
  {
    year: '2024',
    phase: 'AI + SYSTEMS',
    title: 'Machine Learning & Backend Development',
    location: 'Project Development',
    description: 'Developed full-stack and intelligent software systems combining machine learning models, computer vision, and backend APIs for real-world applications.',
    technologies: ['Python', 'FastAPI', 'Machine Learning', 'Computer Vision', 'Next.js', 'PostgreSQL']
  },
  {
    year: '2025',
    phase: 'INDUSTRY',
    title: 'Saint-Gobain',
    location: 'Saint-Gobain',
    description: 'Industrial development experience focusing on Java, Spring Boot microservices, RESTful APIs, relational databases, and enterprise backend engineering.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Enterprise Development']
  },
  {
    year: '2026',
    phase: 'HORIZON',
    title: 'AI, Backend & Full-Stack Systems',
    location: 'Active Engineering',
    description: 'Continuing to build and explore scalable backend systems, machine learning applications, IoT platforms, and full-stack software development.',
    technologies: ['AI', 'Backend', 'Full-Stack Development', 'IoT', 'Java / Spring Boot', 'Python']
  }
];
