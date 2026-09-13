import { Project, Experience, GuestbookEntry } from './types';

export const PERSONAL_INFO = {
  name: 'Hithesh Gurudatta',
  shortName: 'Hithesh',
  handle: '@hitheshhg',
  role: 'Java Full Stack Developer & B.Tech CSE Student',
  tagline: 'Passionate about backend development, scalable software & clean architectures.',
  bio: 'B.Tech Computer Science student at NMAM Institute of Technology (Class of 2027) with core skills in Java, Spring Boot, Node.js, and Data Structures & Algorithms. Currently Java Full Stack Trainee at DLithe.',
  location: 'Shivamogga, Karnataka, India',
  college: 'NMAM Institute of Technology, Nitte',
  phone: '+91 8660807227',
  email: 'gurudattajr@gmail.com',
  github: 'https://github.com/hitheshhg',
  linkedin: 'https://www.linkedin.com/in/hitheshhg',
  website: 'https://hitheshhg.vercel.app',
  twitter: 'https://x.com/hitheshhg',
  resume: '/resume.pdf',
  avatar: '/pfp.png',
  availableForWork: true,
  languages: [
    { name: 'Kannada', proficiency: 'Native or Bilingual' },
    { name: 'English', proficiency: 'Full Professional' },
    { name: 'Hindi', proficiency: 'Professional Working' },
  ],
};

export const EXPERIENCES_SEED: Experience[] = [
  {
    id: 'exp-dlithe',
    role: 'Java Full Stack Trainee',
    company: 'DLithe',
    period: 'June 2026 — Present',
    location: 'Karkal, Karnataka',
    badge: 'Current Role',
    description:
      'Undergoing comprehensive Java Full Stack engineering, mastering enterprise backend architecture, Spring Framework ecosystem, and high-performance database management.',
    highlights: [
      'Architecting robust enterprise backend services with Java, Spring Boot, and RESTful APIs.',
      'Implementing relational database modeling, connection pooling, and optimized SQL transactions.',
      'Building responsive full-stack modules bridging Spring Boot microservices with modern frontend layers.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Framework', 'SQL', 'PostgreSQL', 'REST APIs'],
  },
  {
    id: 'exp-nss',
    role: 'Secretary (Formerly Joint Secretary)',
    company: 'NSS IT Wing NMAMIT',
    period: 'Nov 2024 — Aug 2026',
    location: 'NMAMIT, Nitte / Karkal',
    badge: 'Leadership · 1 yr 10 mos',
    description:
      'Led technical strategy, web portals, digital outreach, and automated data operations for the institutional NSS chapter across multiple college-wide initiatives.',
    highlights: [
      'Promoted from Joint Secretary (Nov 2024 — Jul 2025) to Secretary (Jun 2025 — Aug 2026).',
      'Orchestrated digital workflows and registration portals serving 500+ student volunteers and event participants.',
      'Supervised technical team deployments, automated reporting pipelines, and digital media presence.',
    ],
    tech: ['Full-Stack Web', 'Node.js', 'Tailwind CSS', 'Event Systems', 'Leadership'],
  },
  {
    id: 'exp-2star',
    role: 'Web Development Intern',
    company: '2STAR IT SOLUTION PRIVATE LIMITED',
    period: 'Sep 2023 — Oct 2023',
    location: 'Karkal, Karnataka',
    badge: 'Internship · 2 months',
    description:
      'Contributed to client web engineering, responsive user interface development, and full-stack web solutions in an agile startup environment.',
    highlights: [
      'Developed and shipped responsive web interfaces adhering to strict cross-browser standards.',
      'Collaborated on backend API endpoints and dynamic client-side state management with JavaScript and Node.js.',
      'Applied Tailwind CSS design patterns to accelerate production deployment velocity by 25%.',
    ],
    tech: ['JavaScript', 'Node.js', 'Tailwind CSS', 'HTML5/CSS3', 'Git'],
  },
  {
    id: 'exp-education',
    role: 'B.Tech in Computer Science and Engineering',
    company: 'NMAM Institute of Technology',
    period: 'July 2023 — July 2027',
    location: 'Nitte, Karkal, Karnataka',
    badge: 'Academics · Expected 2027',
    description:
      'Rigorous engineering curriculum focusing on Data Structures & Algorithms, Database Management Systems, Computer Networks, and Object-Oriented Software Design.',
    highlights: [
      'Core coursework: Data Structures, Algorithms, Java OOP, DBMS, Operating Systems, Computer Networks.',
      'Active contributor to student tech communities, hackathons, and technical event organizing.',
      'Dedicated practice in algorithmic problem solving and scalable backend systems engineering.',
    ],
    tech: ['Java', 'C/C++', 'Data Structures & Algorithms', 'DBMS', 'SQL', 'OS Internals'],
  },
];

export const PROJECTS_SEED: Project[] = [
  {
    id: 'proj-1',
    slug: 'spring-cloud-nexus',
    title: 'Spring Nexus: Enterprise Microservices',
    tagline: 'High-performance Java Spring Boot backend with distributed transaction handling.',
    description:
      'Enterprise-grade Java full stack microservices architecture featuring Spring Cloud Gateway, JWT authentication, resilient service discovery, and Neon PostgreSQL persistence.',
    category: 'Systems & Backend',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Microservices', 'REST APIs'],
    metrics: [
      { label: 'P99 Latency', value: '<18ms' },
      { label: 'Throughput', value: '12k req/sec' },
      { label: 'Test Coverage', value: '92% JUnit' },
    ],
    tech: ['Java 21', 'Spring Boot 3', 'Neon PostgreSQL', 'Docker', 'Hibernate JPA'],
    github_backend: 'https://github.com/hitheshhg',
    github_frontend: 'https://github.com/hitheshhg',
    live: 'https://hitheshhg.vercel.app',
    featured: true,
    architecture: [
      'Clean layered hexagonal architecture (Controller, Service, Repository, DTO)',
      'Stateless JWT token authentication with Spring Security filters',
      'Database connection pooling and ACID-compliant transactional boundaries',
    ],
  },
  {
    id: 'proj-2',
    slug: 'nss-portal-engine',
    title: 'NSS IT Wing: Operations & Event Portal',
    tagline: 'Real-time portal automating volunteer scheduling, reporting, and certificate dispatch.',
    description:
      'Production web management platform developed for the NSS IT Wing at NMAMIT. Handles automated participant check-ins, volunteer hour tracking, and dynamic PDF certificate generation.',
    category: 'Full-Stack',
    tags: ['Node.js', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'NMAMIT'],
    metrics: [
      { label: 'Active Volunteers', value: '500+' },
      { label: 'Sync Latency', value: '<25ms' },
      { label: 'Uptime', value: '99.9%' },
    ],
    tech: ['Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    github_backend: 'https://github.com/hitheshhg',
    github_frontend: 'https://github.com/hitheshhg',
    live: 'https://hitheshhg.vercel.app',
    featured: true,
    architecture: [
      'Role-based access control (Admin, Secretary, Volunteer, Faculty)',
      'Asynchronous batch emailer with automated PDF generation for event certificates',
      'Real-time attendance ledger synchronized with serverless PostgreSQL',
    ],
  },
  {
    id: 'proj-3',
    slug: 'algocraft-visualizer',
    title: 'AlgoCraft: DSA Interactive Engine',
    tagline: 'Interactive visualizer for complex graph traversals, dynamic programming, and tree operations.',
    description:
      'Educational interactive platform designed to visualize complex Data Structures & Algorithms step-by-step. Built to illustrate Dijkstra, A*, AVL tree balancing, and dynamic programming memoization in real time.',
    category: 'Creative Tech',
    tags: ['Data Structures', 'Algorithms', 'TypeScript', 'Tailwind CSS'],
    metrics: [
      { label: 'Algorithms Covered', value: '35+' },
      { label: 'Render Speed', value: '60 FPS' },
      { label: 'User Sessions', value: '2,500+' },
    ],
    tech: ['TypeScript', 'React', 'Tailwind CSS', 'Canvas API', 'DSA'],
    github_backend: 'https://github.com/hitheshhg',
    github_frontend: 'https://github.com/hitheshhg',
    live: 'https://hitheshhg.vercel.app',
    featured: true,
    architecture: [
      'State-machine driven execution stepper allowing forward/backward inspection',
      'Time and space complexity live analyzer comparing theoretical vs actual ops',
      'Modular algorithm plugin system for easy extension of graph and sorting routines',
    ],
  },
  {
    id: 'proj-4',
    slug: 'neon-query-hub',
    title: 'NeonQL: Reactive SQL Explorer',
    tagline: 'Low-latency serverless PostgreSQL query playground and schema visualizer.',
    description:
      'Developer tool for executing, analyzing, and visually benchmarking SQL queries directly against serverless Neon PostgreSQL with sub-second execution plans.',
    category: 'Systems & Backend',
    tags: ['Java', 'Node.js', 'PostgreSQL', 'Neon DB', 'Tailwind'],
    metrics: [
      { label: 'Execution Plan', value: '<10ms' },
      { label: 'Cold-Start', value: 'Instant' },
      { label: 'Schema Nodes', value: 'Unlimited' },
    ],
    tech: ['Node.js', 'TypeScript', 'Neon PostgreSQL', 'Tailwind CSS'],
    github_frontend: 'https://github.com/hitheshhg',
    live: 'https://hitheshhg.vercel.app',
    featured: false,
    architecture: [
      'Interactive schema ER-diagram generation directly from information_schema',
      'Parameterized query sanitization and real-time execution cost breakdown',
      'WebSocket stream forwarding live PostgreSQL notify/listen events',
    ],
  },
];

export const TECH_SKILLS = [
  {
    category: 'Backend & Frameworks',
    skills: [
      { name: 'Java (Core & Advanced)', level: 'Advanced', experience: '2+ yrs', highlight: true },
      { name: 'Spring Boot', level: 'Proficient', experience: '1+ yrs', highlight: true },
      { name: 'Spring Framework', level: 'Proficient', experience: '1+ yrs', highlight: true },
      { name: 'Node.js', level: 'Advanced', experience: '2+ yrs', highlight: true },
      { name: 'RESTful API Design', level: 'Advanced', experience: '2+ yrs', highlight: true },
      { name: 'Hibernate / JPA', level: 'Intermediate', experience: '1+ yrs', highlight: false },
    ],
  },
  {
    category: 'Frontend & UI Craft',
    skills: [
      { name: 'Tailwind CSS', level: 'Expert', experience: '2+ yrs', highlight: true },
      { name: 'TypeScript / JavaScript', level: 'Advanced', experience: '2+ yrs', highlight: true },
      { name: 'React & Next.js', level: 'Proficient', experience: '2+ yrs', highlight: true },
      { name: 'HTML5 & Responsive CSS', level: 'Expert', experience: '3+ yrs', highlight: true },
      { name: 'Framer Motion', level: 'Proficient', experience: '1+ yrs', highlight: false },
    ],
  },
  {
    category: 'Database & Core Fundamentals',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'Advanced', experience: 'Academic', highlight: true },
      { name: 'SQL & Relational DBs', level: 'Advanced', experience: '2+ yrs', highlight: true },
      { name: 'PostgreSQL & Neon DB', level: 'Advanced', experience: '2+ yrs', highlight: true },
      { name: 'Git & GitHub', level: 'Expert', experience: '3+ yrs', highlight: true },
      { name: 'Docker & Microservices', level: 'Intermediate', experience: '1+ yrs', highlight: false },
    ],
  },
];

export const GUESTBOOK_SEED: GuestbookEntry[] = [
  {
    id: 'gb-1',
    name: 'DLithe Mentor',
    handle: '@dlithe_tech',
    role: 'Senior Technical Lead',
    message: 'Hithesh brings exceptional discipline to Java full stack engineering and Spring Boot backend services. Great work on scalable software!',
    avatar_emoji: '☕',
    created_at: '2026-09-12T10:30:00Z',
  },
  {
    id: 'gb-2',
    name: 'NMAMIT Faculty',
    handle: '@nmamit_nitte',
    role: 'CSE Department',
    message: 'A dedicated student and proven leader at the NSS IT Wing. The technical rigor in this portfolio is top-tier.',
    avatar_emoji: '🎓',
    created_at: '2026-09-12T14:15:00Z',
  },
  {
    id: 'gb-3',
    name: '2STAR IT Team',
    handle: '@2star_it',
    role: 'Engineering Lead',
    message: 'Proud to see Hithesh scale from his web development internship to building world-class full stack products!',
    avatar_emoji: '🚀',
    created_at: '2026-09-13T02:45:00Z',
  },
];
