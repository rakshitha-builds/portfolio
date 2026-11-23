// Single source of truth for portfolio content.
// To add a repo or demo link to a project, set its `github` / `live` field below —
// the buttons only render when a real URL is present.

export const site = {
  name: 'Rakshitha R',
  shortName: 'Rakshitha',
  headline: ['Software Developer', 'Full Stack Developer', 'Python Developer'],
  location: 'Mysuru, Karnataka, India',
  email: 'rakshitharrakshitha91@gmail.com',
  resume: '/resume.pdf',
  links: {
    github: 'https://github.com/rakshitha-builds',
    linkedin: 'https://www.linkedin.com/in/rakshithar1/',
    portfolio: 'https://portfolio-qqwxopxr5-rakshitha13.vercel.app/',
  },
  // EmailJS identifiers (public client-side values, unchanged from the original site)
  emailjs: {
    publicKey: '-nY8mia3y3pGUp_-K',
    serviceId: 'service_qaygaiq',
    templateId: 'template_r8wdu3m',
  },
};

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export const about = {
  statement:
    'I turn practical problems into working software across frontend, backend and mobile.',
  body:
    'I am an MCA graduate with hands-on experience in software development across frontend, backend, and mobile technologies. I have worked on developing practical applications through internships and academic projects. I am passionate about problem-solving, continuous learning, and building efficient, user-focused software solutions.',
  pillars: [
    {
      icon: 'layout',
      title: 'Full-Stack Web Apps',
      desc: 'React, TypeScript, Node.js, Express.js and PostgreSQL.',
    },
    {
      icon: 'server',
      title: 'APIs & Backend',
      desc: 'APIs built with Node.js, Express.js and Python FastAPI.',
    },
    {
      icon: 'smartphone',
      title: 'Mobile Apps',
      desc: 'Cross-platform Flutter and Dart apps with Firebase Firestore.',
    },
    {
      icon: 'brain',
      title: 'AI-Assisted Features',
      desc: 'Complaint classification and a chatbot integrated into CampusIQ.',
    },
  ],
  certifications: [
    'Machine Learning — Coursera',
    'Python for Data Science — NPTEL (Elite)',
    'Ethical Hacking — Tech By Heart',
    'Data Analytics Job Simulation — Deloitte (Forage)',
  ],
  languages: ['English — Professional', 'Kannada — Fluent', 'Hindi — Conversational'],
};

export const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { label: 'Java', icon: 'java' },
      { label: 'Python', icon: 'python' },
      { label: 'JavaScript', icon: 'javascript' },
      { label: 'TypeScript', icon: 'typescript' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { label: 'React.js', icon: 'react' },
      { label: 'HTML5', icon: 'html5' },
      { label: 'CSS3', icon: 'css3' },
      { label: 'Tailwind CSS', icon: 'tailwindcss' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { label: 'Node.js', icon: 'nodejs' },
      { label: 'Express.js', icon: 'express' },
      { label: 'FastAPI', icon: 'fastapi' },
    ],
  },
  {
    title: 'Mobile Development',
    skills: [
      { label: 'Flutter', icon: 'flutter' },
      { label: 'Dart', icon: 'dart' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { label: 'PostgreSQL', icon: 'postgresql' },
      { label: 'MySQL', icon: 'mysql' },
      { label: 'Firebase Firestore', icon: 'firebase' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { label: 'Git', icon: 'git' },
      { label: 'GitHub', icon: 'github' },
      { label: 'Postman', icon: 'postman' },
      { label: 'Docker', icon: 'docker' },
      { label: 'Jira', icon: 'jira' },
    ],
  },
];

export const techCount = skillGroups.reduce((n, g) => n + g.skills.length, 0);

// The three cards in the Skills section, built from the groups above
const byTitle = (t) => skillGroups.find((g) => g.title === t);
export const skillCards = [
  { title: 'Languages & Frontend', groups: [byTitle('Languages'), byTitle('Frontend')] },
  { title: 'Backend & Databases', groups: [byTitle('Backend'), byTitle('Databases')], dark: true },
  { title: 'Mobile & Tools', groups: [byTitle('Mobile Development'), byTitle('Tools')] },
].map((c) => ({ ...c, count: c.groups.reduce((n, g) => n + g.skills.length, 0) }));

// ---------------------------------------------------------------------------
// Projects shown in "Selected Works". To add another project, append an object
// to this array (same shape). Add `live` / `github` URLs to show their buttons.
// ---------------------------------------------------------------------------
export const projects = [
  {
    id: 'campusiq',
    badge: 'Capstone · Major project',
    title: 'CampusIQ',
    tagline: 'Smart Campus Operations Platform',
    chrome: 'campus-iq-xi.vercel.app',
    problem:
      'Campus maintenance requests need to reach the right team with the right priority, and operations data is often spread across separate tools.',
    approach:
      'React + TypeScript frontend, Node.js/Express API and PostgreSQL, with a Python FastAPI service that classifies and prioritises each complaint using TF-IDF and Logistic Regression.',
    result:
      'A role-based platform with complaint tracking, campus management modules, an AI chatbot and QR-based reporting, deployed on Vercel, Render and Neon.',
    highlights: [
      'AI complaint classification & prioritization',
      'Campus management modules',
      'AI chatbot integration',
      'QR-based complaint reporting',
    ],
    stack: [
      { label: 'React', icon: 'react' },
      { label: 'TypeScript', icon: 'typescript' },
      { label: 'Vite', icon: 'vite' },
      { label: 'Tailwind CSS', icon: 'tailwindcss' },
      { label: 'Node.js', icon: 'nodejs' },
      { label: 'Express.js', icon: 'express' },
      { label: 'PostgreSQL', icon: 'postgresql' },
      { label: 'Python', icon: 'python' },
      { label: 'FastAPI', icon: 'fastapi' },
      { label: 'scikit-learn', icon: 'scikitlearn' },
      { label: 'RoBERTa' },
      { label: 'JWT & bcrypt', icon: 'jwt' },
      { label: 'Groq API (Llama 3.1)' },
      { label: 'Multer' },
      { label: 'jsPDF' },
      { label: 'qrcode.react' },
      { label: 'html5-qrcode' },
    ],
    live: 'https://campus-iq-xi.vercel.app/dashboard',
    github: 'https://github.com/rakshitha-builds/campus-iq',
    visual: {
      type: 'screenshot',
      src: '/images/campusiq-login.webp',
      width: 1759,
      height: 864,
      alt: 'CampusIQ sign-in screen: Smart Campus Operations Platform with role selection',
    },
  },
  {
    id: 'opto',
    badge: 'Full-stack',
    title: 'Opto / IMA',
    tagline: 'Retail Inventory Management Application',
    chrome: 'Flutter · Node.js · PostgreSQL',
    problem:
      'Small retail stores need stock tracking, billing and GST-ready invoices in one place, even when connectivity is unreliable.',
    approach:
      'Flutter client with a Node.js/Express API and PostgreSQL, secured with JWT authentication and built with offline inventory support.',
    result:
      'An inventory and billing application with PDF invoice generation and an ERP assistant for business questions.',
    highlights: [
      'Inventory management',
      'JWT authentication',
      'Offline inventory support',
      'PDF invoice generation',
      'ERP assistant',
    ],
    stack: [
      { label: 'Flutter', icon: 'flutter' },
      { label: 'Dart', icon: 'dart' },
      { label: 'Node.js', icon: 'nodejs' },
      { label: 'Express.js', icon: 'express' },
      { label: 'PostgreSQL', icon: 'postgresql' },
    ],
    live: null, // add a live demo URL here when available
    github: null, // add the repository URL here when available
    visual: {
      type: 'architecture',
      nodes: [
        { label: 'Flutter app', note: 'Web · Android · Desktop', icon: 'flutter' },
        { label: 'Express API', note: 'JWT auth · invoices', icon: 'nodejs' },
        { label: 'PostgreSQL', note: 'Inventory & billing data', icon: 'postgresql' },
      ],
    },
  },
  {
    id: 'learnsphere',
    badge: 'Full-stack',
    title: 'LearnSphere',
    tagline: 'Online learning platform with live classes',
    chrome: 'MERN · LiveKit · FFmpeg · BullMQ',
    problem:
      'Small educators stitch together separate tools for videos, live sessions, quizzes, certificates and payments, which fragments the learner experience and hides progress and earnings.',
    approach:
      'MERN stack with three isolated roles (student, instructor, admin) and RBAC. Video uploads run through a BullMQ + FFmpeg pipeline to HLS, live classes use LiveKit (WebRTC) with Socket.IO chat, and payments run in Razorpay test mode.',
    result:
      'A complete online school: course and video lessons, auto-graded quizzes, progress analytics, verifiable PDF certificates, an instructor revenue dashboard and admin moderation, backed by 79 REST endpoints and automated tests.',
    highlights: [
      'Video pipeline: upload, FFmpeg, HLS',
      'Live classes with chat (LiveKit)',
      'Auto-graded quizzes',
      'Verifiable PDF certificates',
      'Instructor revenue dashboard',
      'Admin moderation & audit trail',
    ],
    stack: [
      { label: 'React', icon: 'react' },
      { label: 'Vite', icon: 'vite' },
      { label: 'Redux Toolkit', icon: 'redux' },
      { label: 'Tailwind CSS', icon: 'tailwindcss' },
      { label: 'Node.js', icon: 'nodejs' },
      { label: 'Express.js', icon: 'express' },
      { label: 'MongoDB', icon: 'mongodb' },
      { label: 'Redis', icon: 'redis' },
      { label: 'BullMQ' },
      { label: 'FFmpeg', icon: 'ffmpeg' },
      { label: 'LiveKit (WebRTC)', icon: 'webrtc' },
      { label: 'Socket.IO', icon: 'socketio' },
      { label: 'AWS S3 / CloudFront', icon: 'awss3' },
      { label: 'Razorpay', icon: 'razorpay' },
      { label: 'Jest', icon: 'jest' },
      { label: 'Docker', icon: 'docker' },
    ],
    live: null, // add a live demo URL here when available
    github: 'https://github.com/rakshitha-builds/learning-management-system',
    visual: {
      type: 'screenshot',
      src: '/images/learnsphere-login.webp',
      width: 1863,
      height: 861,
      alt: 'LearnSphere sign-in screen: courses, live classes, quizzes and verifiable certificates in one place',
    },
  },
];

export const experience = [
  {
    role: 'Mobile Application Developer Intern',
    org: 'Promenant Innovation Labs, Kochi (Remote)',
    date: 'May 2026 – Jul 2026',
    points: [
      'Developed features for a cross-platform Flutter/Dart mobile app with Firebase integration for real-time data sync across distributed clients.',
      'Resolved data-consistency issues in the Firebase Firestore real-time sync layer and wrote automated tests, collaborating within a remote, agile team.',
    ],
  },
  {
    role: 'Front-End Developer Intern',
    org: 'Cognifyz Technologies',
    date: 'Dec 2024 – Jan 2025',
    points: [
      'Built responsive UI components with HTML, CSS and JavaScript, contributing to a shared, reusable component library.',
      'Standardized UI/UX patterns across screens through peer code review, improving consistency across the codebase.',
    ],
  },
  {
    role: 'Web Development Intern',
    org: 'Jay Blues Technologies',
    date: 'Mar 2024 – May 2024',
    points: [
      'Built responsive web applications.',
      'Profiled and optimized page load performance and usability.',
    ],
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: "St. Philomena's College, Mysuru",
    year: '2024 – 2026',
    cgpa: '8.81',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: "Maharani's Science College for Women, Mysore",
    year: '2021 – 2024',
    cgpa: '9.04',
  },
];

export const achievements = [
  { icon: 'trophy', title: '2nd Highest Cumulative Scorer in MCA' },
  { icon: 'medal', title: '3rd Prize — Venture Fusion Smart India Hackathon' },
  { icon: 'award', title: 'Student Coordinator Appreciation Certificate', detail: 'National Level FDP on Ethical Hacking' },
];

export const heroStats = [
  { value: 8.81, decimals: 2, label: 'MCA CGPA' },
  { value: 3, decimals: 0, label: 'Internships' },
  { value: techCount, decimals: 0, label: 'Technologies' },
];
