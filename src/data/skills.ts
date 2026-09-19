export interface SkillItem {
  name: string;
  domain: 'BACKEND' | 'AI / ML' | 'IoT' | 'FRONTEND';
  category: 'BACKEND' | 'AI / ML' | 'IoT' | 'FRONTEND';
  related: string[];
  context: string;
}

export const skillCategories = ['ALL', 'BACKEND', 'AI / ML', 'IoT', 'FRONTEND'] as const;

export const skillsData: SkillItem[] = [
  // Backend
  {
    name: 'Java',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['Spring Boot', 'REST APIs', 'PostgreSQL', 'SQL'],
    context: 'Used in enterprise backend architecture and RESTful service development.'
  },
  {
    name: 'Spring Boot',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['Java', 'Spring Data JPA', 'PostgreSQL', 'JWT Security'],
    context: 'Core framework for building secure, scalable microservices and transactional APIs.'
  },
  {
    name: 'Python',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['FastAPI', 'Machine Learning', 'Data Processing'],
    context: 'Used for asynchronous backend endpoints, ML data scripts, and API services.'
  },
  {
    name: 'FastAPI',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['Python', 'Pydantic', 'REST APIs', 'SQLAlchemy'],
    context: 'High-performance asynchronous backend framework used for full-stack applications.'
  },
  {
    name: 'PostgreSQL',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['SQL', 'Alembic', 'Spring Data JPA', 'Supabase'],
    context: 'Relational database used for structured persistent data storage across projects.'
  },
  {
    name: 'REST APIs',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['FastAPI', 'Spring Boot', 'HTTP', 'JSON'],
    context: 'Standardized client-server communication interfaces implemented across all services.'
  },
  {
    name: 'Git',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['GitHub', 'Version Control', 'Branching'],
    context: 'Source code management and version control across all personal and team repositories.'
  },

  // AI / ML
  {
    name: 'Machine Learning',
    domain: 'AI / ML',
    category: 'AI / ML',
    related: ['Python', 'Scikit-Learn', 'Anomaly Detection'],
    context: 'Applied in supervised anomaly detection on IoT sensor telemetry datasets.'
  },
  {
    name: 'Computer Vision',
    domain: 'AI / ML',
    category: 'AI / ML',
    related: ['OpenCV', 'Image Processing', 'Video Feeds'],
    context: 'Used for matrix-based image analysis and computer vision processing.'
  },
  {
    name: 'YOLO',
    domain: 'AI / ML',
    category: 'AI / ML',
    related: ['Object Detection', 'Computer Vision', 'PyTorch'],
    context: 'Applied in multi-class real-time object detection models.'
  },
  {
    name: 'PyTorch',
    domain: 'AI / ML',
    category: 'AI / ML',
    related: ['Python', 'Neural Networks', 'Tensors'],
    context: 'Framework for designing and evaluating deep learning models.'
  },
  {
    name: 'OpenCV',
    domain: 'AI / ML',
    category: 'AI / ML',
    related: ['Computer Vision', 'Python', 'Stream Processing'],
    context: 'Library for camera stream handling and real-time visual transformations.'
  },

  // IoT
  {
    name: 'Arduino',
    domain: 'IoT',
    category: 'IoT',
    related: ['Sensors', 'Embedded C/C++', 'Microcontrollers'],
    context: 'Microcontroller hardware used for sensor interfacing and data collection.'
  },
  {
    name: 'Sensors',
    domain: 'IoT',
    category: 'IoT',
    related: ['Arduino', 'Telemetry', 'Analog/Digital Signals'],
    context: 'Hardware sensor arrays measuring physical environmental and safety metrics.'
  },
  {
    name: 'Embedded Systems',
    domain: 'IoT',
    category: 'IoT',
    related: ['Microcontrollers', 'Firmware', 'C/C++'],
    context: 'Foundational hardware-software integration and physical computing principles.'
  },

  // Frontend
  {
    name: 'React',
    domain: 'FRONTEND',
    category: 'FRONTEND',
    related: ['JavaScript', 'TypeScript', 'Next.js', 'Vite'],
    context: 'Building interactive and responsive web application user interfaces.'
  },
  {
    name: 'JavaScript',
    domain: 'FRONTEND',
    category: 'FRONTEND',
    related: ['TypeScript', 'React', 'Node.js', 'Web Standards'],
    context: 'Core programming language for web client applications and Node.js servers.'
  },
  {
    name: 'Three.js',
    domain: 'FRONTEND',
    category: 'FRONTEND',
    related: ['WebGL', 'Shaders', '3D Graphics', 'GSAP'],
    context: 'Rendering real-time WebGL scenes, 3D particle fields, and interactive graphics.'
  }
];
