import type { Metadata } from "next";

export const siteUrl = "https://mehulvariya.in";

export const person = {
  name: "Mehul Variya",
  title: "Android Developer | Flutter Developer | Node.js Backend Developer",
  location: "Surat, Gujarat, India",
  email: "mehul639108@gmail.com",
  website: "mehulvariya.in",
  phone: "+91 9265881131",
  summary:
    "Android, Flutter, and Node.js backend developer with 4+ years of total experience building Android and iOS applications, REST APIs, and scalable backend systems. Mehul has 2 years of Android experience, 1 year of Flutter experience, and 1.5 years of Node.js backend experience.",
  current:
    "Since April 2025, Mehul has been working as a Node.js Backend Developer, focusing on Node.js, Express.js, NestJS, server-side architecture, API design, and backend systems.",
  socials: [
    { label: "GitHub", href: "https://github.com/MehulVariya" },
    { label: "LinkedIn", href: "https://in.linkedin.com/in/mehul-variya" },
    { label: "Twitter/X", href: "https://twitter.com/Mehul_Variya_" },
    { label: "Instagram", href: "https://www.instagram.com/mehul_variya_/" },
    { label: "Facebook", href: "https://www.facebook.com/Mehul.R.Variya" }
  ]
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const experiences = [
  {
    role: "Node.js Backend Developer",
    company: "Current Role",
    duration: "April 2025 - Present",
    stack: "Node.js, Express.js, NestJS, MongoDB, MySQL, Firebase",
    highlights: [
      "Builds server-side architecture, REST API design, database optimization, and backend systems with Node.js, Express.js, and NestJS.",
      "Focuses on scalable API patterns and reliable database-backed product workflows."
    ]
  },
  {
    role: "Android, Flutter, and Backend Developer",
    company: "RadhaVision Infotech, Surat",
    duration: "February 2024 - April 2025",
    stack: "Android, Flutter, iOS, Node.js, Express.js, MongoDB, Firebase",
    highlights: [
      "Developed and deployed Android and iOS apps using Flutter with Node.js backend APIs.",
      "Created scalable REST APIs and delivered food delivery, health management, and investment platforms.",
      "Led backend integration and real-time data handling for user-facing features."
    ]
  },
  {
    role: "Application Developer",
    company: "Kamadh Infotech, Surat",
    duration: "August 2022 - September 2023",
    stack: "Android, Flutter, REST APIs, SDKs",
    highlights: [
      "Designed and developed 7+ Android and Flutter applications.",
      "Built photo editing, grid making, and AI background removal features.",
      "Optimized app performance and collaborated with designers, QA, and backend teams."
    ]
  },
  {
    role: "Android Developer Intern",
    company: "Kamadh Infotech, Surat",
    duration: "February 2022 - July 2022",
    stack: "Android, Flutter, Firebase",
    highlights: [
      "Assisted in Android and Flutter utility app development.",
      "Gained hands-on experience in UI implementation, Firebase integration, debugging, and responsive design."
    ]
  }
];

export const skillGroups = [
  { term: "Languages", items: ["Dart", "JavaScript", "TypeScript", "Java", "Kotlin"] },
  { term: "Mobile Development", items: ["Android (Java/Kotlin)", "Flutter", "iOS app development with Flutter"] },
  { term: "Backend Development", items: ["Node.js", "Express.js", "NestJS"] },
  { term: "Databases", items: ["MongoDB", "MySQL", "Firebase Realtime DB", "Firestore", "SQLite"] },
  { term: "Tools and Platforms", items: ["Git", "Postman", "Figma", "Android Studio", "VS Code"] },
  { term: "APIs and Services", items: ["REST APIs", "Firebase", "Google Maps API", "Payment Gateway Integration"] },
  { term: "Professional Skills", items: ["Leadership", "Problem Solving", "Time Management", "Communication"] },
  { term: "Interests", items: ["Full Stack Development", "Artificial Intelligence", "Machine Learning"] }
];

export const featuredProjects = [
  {
    name: "Yummy",
    type: "Mobile App (Flutter)",
    href: "https://github.com/MehulVariya",
    description: "A quick commerce food delivery app offering regional cuisines like Gujarati Thali, Dhokla, and Punjabi meals.",
    features: "Multi-role system, live order tracking, timely order processing, and seamless delivery workflows.",
    stack: "Flutter, Node.js, MongoDB, Firebase",
    problem: "Streamlined regional food delivery with real-time tracking and multi-stakeholder management.",
    outcome: "Improved order visibility for users, restaurants, delivery agents, and admins.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Hophsee",
    type: "Mobile App (Flutter)",
    href: "https://github.com/MehulVariya/Hophsee_Flutter",
    description: "A multi-role hospital management app for patients, doctors, staff, and admins.",
    features: "Appointment booking, doctor chat, health records, approval workflows, check-in, and dashboards.",
    stack: "Flutter, Node.js, Firebase",
    problem: "Digitized hospital operations with secure role-based access control.",
    outcome: "Reduced manual coordination across appointment and patient record workflows.",
    image: "https://images.unsplash.com/photo-1582802447191-34d7ccc7e5be?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Royal Investor App",
    type: "Mobile App (Flutter)",
    href: "https://github.com/MehulVariya",
    description: "An investment management app for 30, 90, and 180-day fixed-return plans.",
    features: "Plan tracking, maturity calculations, return credits, investment history, transaction logs, and admin control.",
    stack: "Flutter, Node.js, MongoDB",
    problem: "Automated investment lifecycle management with transparent return calculations.",
    outcome: "Made client investment tracking measurable, auditable, and easier to administer.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "StackOverflow Clone",
    type: "Web App (MERN)",
    href: "https://github.com/Mehul0255/Stackoverflow-Clone",
    demo: "https://www.youtube.com/watch?v=3jDIEf5vNp8",
    description: "A replica of the Q&A platform for developers using MERN and MySQL stack.",
    features: "Account creation, CRUD on questions, tags, answers, and comments.",
    stack: "MySQL, Express.js, React.js, Node.js",
    problem: "Demonstrated full-stack capability by replicating a complex real-world platform.",
    outcome: "Showed end-to-end product thinking across data, API, and interface layers.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Background Eraser",
    type: "Mobile App (Android/Flutter)",
    description: "AI-powered photo editing app with one-tap background removal.",
    features: "Automatic object detection, manual lasso, soft edge, undo, redo, zoom, blending, backgrounds, and export.",
    stack: "Flutter, AI/ML APIs",
    problem: "Made professional-grade background removal accessible on mobile.",
    outcome: "Helped users create clean cutouts and polished image edits on phone-first workflows.",
    image: "https://images.unsplash.com/photo-1566707941817-c5ab9d0d6866?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Melody Medi System",
    type: "Mobile App (Flutter)",
    href: "https://github.com/MehulVariya",
    description: "Manufacturing and clinic supply management app for a medical equipment firm.",
    features: "GST-compliant billing, variant-based products, fund and doctor management, and image-based invoices.",
    stack: "Flutter, Node.js, MongoDB",
    problem: "Replaced manual billing with a digital GST-compliant system for medical suppliers.",
    outcome: "Improved billing accuracy and supplier workflow traceability.",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80"
  }
];

export type Project = (typeof featuredProjects)[number];

export const otherProjects = [
  "Resume Bot - Node.js, LaTeX, Facebook Webhook",
  "SD Times App - Flutter, SQFLite, Hacker News API",
  "Photo Lab - Photo Art & Effect - Play Store photo editing app",
  "Full Size Pic - No Crop Photo - Play Store editor",
  "Grid Maker - Instagram grid split and collage app",
  "Umbra - Photo Editor - Android/Flutter image editor",
  "MovieSurfer - Node.js, MongoDB, Bootstrap 4",
  "Blog Site - Node.js, MySQL, Semantic UI",
  "Space Invaders - Python, PyGame",
  "Track2Fit - Flutter, Firebase",
  "BodyWorky - Flutter fitness app",
  "Kids Learning - Kotlin, Android",
  "Happy Valentine's Day Wishes - greeting app with WhatsApp sticker sharing"
];

export const faq = [
  {
    question: "Who is Mehul Variya?",
    answer: "Mehul Variya is an Android developer, Flutter developer, and Node.js backend developer from Surat, Gujarat, India."
  },
  {
    question: "What does Mehul Variya specialize in?",
    answer: "Mehul specializes in Android app development, Flutter Android and iOS apps, Node.js backend systems, Express.js, NestJS, REST APIs, and database-backed applications."
  },
  {
    question: "How much experience does Mehul Variya have?",
    answer: "Mehul has 4+ years of total experience, including 2 years in Android, 1 year in Flutter, and 1.5 years in Node.js backend development."
  },
  {
    question: "What is Mehul Variya's current role?",
    answer: "Since April 2025, Mehul has worked as a Node.js Backend Developer focused on Express.js, NestJS, server-side architecture, API design, and backend systems."
  },
  {
    question: "Which databases does Mehul Variya work with?",
    answer: "Mehul works with MongoDB, MySQL, Firebase Realtime Database, Firestore, and SQLite."
  },
  {
    question: "What are Mehul Variya's featured projects?",
    answer: "Mehul's featured projects include Yummy, Hophsee, Royal Investor App, StackOverflow Clone, Background Eraser, and Melody Medi System."
  }
];

export const blogPosts = [
  {
    id: "android-flutter-node-backend",
    slug: "android-flutter-node-backend",
    title: "How I Build Android and Flutter Apps with Node.js Backends",
    excerpt:
      "A practical overview of how Mehul Variya connects Android apps, Flutter iOS apps, REST APIs, Express.js services, and NestJS backends.",
    content:
      "Mehul Variya builds Android and Flutter applications with backend systems that support real product workflows. His mobile work covers Android apps, Flutter Android apps, and Flutter iOS apps. His backend work covers Node.js, Express.js, NestJS, REST APIs, database integration, and scalable server-side architecture.",
    tags: ["Android", "Flutter", "Node.js", "Express.js", "NestJS"],
    published_at: "2026-06-09",
    is_published: true
  },
  {
    id: "mobile-api-product-workflow",
    slug: "mobile-api-product-workflow",
    title: "Mobile App and API Workflow for Product Teams",
    excerpt:
      "A short guide to planning mobile features, backend APIs, database models, and admin workflows before development starts.",
    content:
      "Strong mobile applications need clear backend planning. Mehul starts by defining app roles, core screens, API contracts, database entities, and admin panel actions. This approach helps Android, Flutter, iOS, and Node.js systems stay easier to maintain as the product grows.",
    tags: ["Mobile Apps", "REST APIs", "Database", "Admin Panel"],
    published_at: "2026-06-09",
    is_published: true
  }
];

export type BlogPost = (typeof blogPosts)[number];

export function buildMetadata(path: string, title: string, description: string): Metadata {
  const canonical = `${siteUrl}${path}`;
  const fullTitle = `${title} | Mehul Variya - Android, Flutter & Node.js Backend Developer`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "Mehul Variya",
      "Flutter developer",
      "Node.js developer",
      "NestJS developer",
      "backend developer Surat",
      "full stack developer India",
      "Android developer",
      "iOS app developer"
    ],
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: "Mehul Variya Portfolio",
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description
    }
  };
}
