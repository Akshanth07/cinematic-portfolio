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
    related: ['Spring Boot', 'REST APIs', 'Spring Data JPA', 'PostgreSQL', 'Maven'],
    context: 'Used during backend development internship at Saint-Gobain and in enterprise Java REST API architectures.'
  },
  {
    name: 'Spring Boot',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['Java', 'Spring Data JPA', 'Spring Security', 'DTOs', 'Maven'],
    context: 'Used to build structured REST APIs with controller, service, DTO, and repository layers.'
  },
  {
    name: 'REST APIs',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['Spring Boot', 'FastAPI', 'Postman', 'DTO Pattern', 'JSON'],
    context: 'Used to design and implement structured endpoints and communication interfaces for backend applications.'
  },
  {
    name: 'FastAPI',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['Python', 'Async I/O', 'REST APIs', 'Pydantic'],
    context: 'Used for asynchronous backend development in CuraTrack V2 and IoT telemetry processing in SafetySense.'
  },
  {
    name: 'Python',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['FastAPI', 'Flask', 'Machine Learning', 'NumPy', 'Pandas'],
    context: 'Primary language for backend APIs, machine learning pipelines, and data processing scripts.'
  },
  {
    name: 'PostgreSQL',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['SQL', 'Supabase', 'Spring Data JPA', 'Relational DB'],
    context: 'Used for relational database persistence across Spring Boot applications and database-backed projects.'
  },
  {
    name: 'MySQL',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['SQL', 'Flask', 'Streamlit', 'DBMS Design'],
    context: 'Used for relational schema design, querying, and transactional data in the Food Court Management System.'
  },
  {
    name: 'Spring Data JPA',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['Java', 'Spring Boot', 'Hibernate', 'ORM', 'PostgreSQL'],
    context: 'Used for repository-based data access and entity persistence in Java backend projects.'
  },
  {
    name: 'SQL',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['PostgreSQL', 'MySQL', 'Relational Schemas', 'Queries'],
    context: 'Used for relational database querying, schema structuring, and transactional operations.'
  },
  {
    name: 'Postman',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['REST APIs', 'API Testing', 'HTTP Methods', 'Spring Boot'],
    context: 'Used for API endpoint testing, request validation, and backend service verification.'
  },
  {
    name: 'Git',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['GitHub', 'Version Control', 'Branching', 'Collaboration'],
    context: 'Used for distributed version control, source code management, and project tracking.'
  },
  {
    name: 'GitHub',
    domain: 'BACKEND',
    category: 'BACKEND',
    related: ['Git', 'Repositories', 'Open Source', 'Project Hosting'],
    context: 'Used for repository hosting, project documentation, and code collaboration.'
  },

  // AI / Machine Learning
  {
    name: 'Machine Learning',
    domain: 'AI / ML',
    category: 'AI / ML',
    related: ['Scikit-learn', 'Regression Models', 'Isolation Forest', 'Python'],
    context: 'Applied for predictive models, data analysis, and anomaly detection workflows.'
  },
  {
    name: 'Regression Models',
    domain: 'AI / ML',
    category: 'AI / ML',
    related: ['Scikit-learn', 'Python', 'Statistical Modeling'],
    context: 'Used for predictive analysis and continuous variable estimation in machine learning tasks.'
  },
  {
    name: 'Isolation Forest',
    domain: 'AI / ML',
    category: 'AI / ML',
    related: ['Scikit-learn', 'NumPy', 'Pandas', 'Anomaly Detection'],
    context: 'Used for unsupervised machine learning-based anomaly detection in the SafetySense project.'
  },
  {
    name: 'Scikit-learn',
    domain: 'AI / ML',
    category: 'AI / ML',
    related: ['Python', 'Machine Learning', 'Data Preprocessing', 'Model Training'],
    context: 'Used for training and evaluating machine learning models and dataset preparation.'
  },
  {
    name: 'PyTorch',
    domain: 'AI / ML',
    category: 'AI / ML',
    related: ['TorchVision', 'Deep Learning', 'Neural Networks', 'Python'],
    context: 'Used for exploring neural networks and deep learning model architectures.'
  },
  {
    name: 'TorchVision',
    domain: 'AI / ML',
    category: 'AI / ML',
    related: ['PyTorch', 'Computer Vision', 'Image Datasets'],
    context: 'Used for computer vision datasets and transformation pipelines in machine learning.'
  },
  {
    name: 'OpenCV',
    domain: 'AI / ML',
    category: 'AI / ML',
    related: ['Computer Vision', 'Image Processing', 'Python', 'YOLO'],
    context: 'Used for computer vision tasks, image filtering, preprocessing, and visual detection.'
  },
  {
    name: 'YOLO',
    domain: 'AI / ML',
    category: 'AI / ML',
    related: ['Object Detection', 'OpenCV', 'Computer Vision'],
    context: 'Used for exploring real-time object detection and bounding-box identification workflows.'
  },
  {
    name: 'OpenVINO',
    domain: 'AI / ML',
    category: 'AI / ML',
    related: ['Model Inference', 'Edge AI', 'Optimization'],
    context: 'Used for exploring optimized neural network inference on edge computing devices.'
  },
  {
    name: 'NumPy',
    domain: 'AI / ML',
    category: 'AI / ML',
    related: ['Pandas', 'Matrix Math', 'Array Computation', 'Python'],
    context: 'Used for numerical computation, array operations, and telemetry signal transformations.'
  },
  {
    name: 'Pandas',
    domain: 'AI / ML',
    category: 'AI / ML',
    related: ['DataFrames', 'Data Cleaning', 'NumPy', 'Python'],
    context: 'Used for dataset structuring, time-series data handling, and feature preparation.'
  },

  // IoT
  {
    name: 'Arduino Uno',
    domain: 'IoT',
    category: 'IoT',
    related: ['Microcontrollers', 'C/C++', 'Sensors', 'Embedded Systems'],
    context: 'Used for microcontroller programming, physical sensor acquisition, and hardware projects.'
  },
  {
    name: 'ESP-01',
    domain: 'IoT',
    category: 'IoT',
    related: ['Wi-Fi Module', 'UART', 'Microcontrollers', 'IoT'],
    context: 'Used for adding Wi-Fi connectivity to microcontrollers for data transmission.'
  },
  {
    name: 'ESP8266 / NodeMCU',
    domain: 'IoT',
    category: 'IoT',
    related: ['Wi-Fi Telemetry', 'Arduino IDE', 'IoT Systems', 'FastAPI'],
    context: 'Used for Wi-Fi-enabled microcontroller prototyping and live telemetry streaming.'
  },
  {
    name: 'Sensor Integration',
    domain: 'IoT',
    category: 'IoT',
    related: ['Vibration', 'Temperature', 'Sound', 'Analog/Digital Signals'],
    context: 'Used for hardware sensor interfacing, reading analog/digital signals, and data acquisition.'
  },
  {
    name: 'Embedded Systems',
    domain: 'IoT',
    category: 'IoT',
    related: ['C/C++', 'Microcontrollers', 'Hardware Protocols'],
    context: 'Studied and applied in B.Tech CSE (IoT) coursework and hands-on hardware builds.'
  },
  {
    name: 'IoT Communication',
    domain: 'IoT',
    category: 'IoT',
    related: ['MQTT', 'HTTP', 'WebSockets', 'Telemetry Streaming'],
    context: 'Used for streaming data between hardware microcontrollers and backend software servers.'
  },

  // Frontend
  {
    name: 'React',
    domain: 'FRONTEND',
    category: 'FRONTEND',
    related: ['JavaScript', 'TypeScript', 'Component Architecture', 'Next.js'],
    context: 'Used in frontend development and interactive web interfaces.'
  },
  {
    name: 'Next.js',
    domain: 'FRONTEND',
    category: 'FRONTEND',
    related: ['React', 'TypeScript', 'App Router', 'Web Development'],
    context: 'Used for building full-stack web applications and client portals.'
  },
  {
    name: 'TypeScript',
    domain: 'FRONTEND',
    category: 'FRONTEND',
    related: ['JavaScript', 'Type Safety', 'React', 'Next.js'],
    context: 'Used for type-safe application development and structured frontend codebases.'
  },
  {
    name: 'JavaScript',
    domain: 'FRONTEND',
    category: 'FRONTEND',
    related: ['Web Development', 'React', 'DOM', 'Async/Await'],
    context: 'Core programming language for interactive web applications and frontend functionality.'
  },
  {
    name: 'Tailwind CSS',
    domain: 'FRONTEND',
    category: 'FRONTEND',
    related: ['CSS', 'Utility-First Styling', 'Responsive Design'],
    context: 'Used for utility-first styling and responsive web interface layouts.'
  }
];
