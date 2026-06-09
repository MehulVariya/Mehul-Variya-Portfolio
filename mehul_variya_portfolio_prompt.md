# 🧠 MASTER PROMPT — Mehul Variya Portfolio Website
# Next.js + SEO + AEO Optimized | Built by AI

---

## ⚠️ RULES — READ BEFORE WRITING ANY CODE

These rules are NON-NEGOTIABLE. Follow every single one strictly.

### 🔴 MANDATORY RULES

1. **Framework**: Use Next.js 14+ with App Router (`/app` directory). No Pages Router.
2. **Styling**: Use Tailwind CSS only. No inline styles. No CSS Modules unless absolutely required.
3. **Animations**: Use Framer Motion for all animations (entrance, hover, scroll-triggered).
4. **Language**: TypeScript only. No plain `.js` files except `next.config.js`.
5. **Icons**: Use `lucide-react` or `react-icons`. No image-based icons.
6. **Fonts**: Use `next/font` (Google Fonts) — Suggest: `Inter` for body, `Poppins` for headings.
7. **Images**: Use `next/image` for ALL images. Never use raw `<img>` tags.
8. **Performance**: Lazy load all sections below the fold using dynamic imports.
9. **Accessibility**: Every interactive element must have `aria-label`. Images must have `alt` text.
10. **No hardcoded colors**: Use Tailwind semantic classes and CSS variables for dark/light mode.
11. **Dark Mode**: Implement dark/light toggle using `next-themes`. Default to dark mode.
12. **Mobile First**: Design mobile-first. All layouts must be responsive (sm, md, lg, xl).
13. **No external UI libraries** (no shadcn, no MUI, no Chakra) unless specifically instructed.
14. **Clean code**: Every component must have a single responsibility. No component > 150 lines.
15. **Comments**: Add short comments above every major section or logic block.

### 🟡 SEO RULES (Search Engine Optimization)

16. Every page must export a `generateMetadata()` function with: `title`, `description`, `keywords`, `openGraph`, `twitter`, `canonical`.
17. Use Next.js built-in `<Head>` or metadata API — never manually write `<head>` tags.
18. The `<h1>` tag must appear exactly ONCE per page. Use `<h2>–<h6>` for hierarchy.
19. All internal links must use `next/link`. No `<a href>` for internal navigation.
20. Add `robots.txt` and `sitemap.xml` using `next-sitemap` or App Router route handlers.
21. Add `JSON-LD` structured data (Schema.org `Person` type) in the root layout.
22. All images must have descriptive `alt` text containing relevant keywords.
23. Page titles must follow format: `{Page Name} | Mehul Variya – Flutter & Node.js Developer`.
24. Meta description: 150–160 characters, include primary keyword naturally.
25. Use semantic HTML: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`, `<aside>`.

### 🟢 AEO RULES (Answer Engine Optimization — for AI search like ChatGPT, Perplexity, Google SGE)

26. Add an `<FAQPage>` JSON-LD schema on the homepage with at least 6 Q&A pairs about Mehul's skills and work.
27. Write all "About" and "Skills" section content in clear, factual, direct sentences — no vague buzzwords.
28. Every project card must have: project name, tech stack, what problem it solves, outcome/result.
29. Add a dedicated `/about` page that reads like a factual biography (AEO engines extract this).
30. Use `<BreadcrumbList>` JSON-LD on all sub-pages.
31. The homepage Hero section must answer: "Who is Mehul Variya?" in one clear sentence.
32. Add `SoftwareApplication` or `CreativeWork` JSON-LD schema for each featured project.
33. Avoid passive voice in all content. Write in active, factual tone.
34. Include a "Skills" section structured as a definition list or clear labeled grid — not just icon rows.
35. Add `WebSite` JSON-LD with `SearchAction` to enable sitelinks search box.

### 🔵 PERFORMANCE RULES

36. Lighthouse score target: Performance ≥ 95, SEO = 100, Accessibility ≥ 95, Best Practices = 100.
37. Use `loading="lazy"` on all below-the-fold images.
38. Minimize client components (`"use client"`). Keep them only for interactive elements.
39. Use `React.Suspense` with skeleton loaders for any async sections.
40. Enable `next/bundle-analyzer` to check bundle size.

---

## 👤 ABOUT THE DEVELOPER — CONTENT TO USE

Use this data to populate ALL sections of the website. Do NOT invent any information.

### Personal Details
- **Full Name**: Mehul Variya
- **Title**: Application Developer | Full Stack Developer | Flutter & Node.js Specialist
- **Location**: Surat, Gujarat, India
- **Email**: mehul639108@gmail.com
- **Website**: mehulvariya.in
- **Phone**: +91 9265881131 (do NOT display publicly — use only for contact form meta)

### Social Links
- **GitHub**: https://github.com/MehulVariya
- **LinkedIn**: https://in.linkedin.com/in/mehul-variya
- **Twitter/X**: https://twitter.com/Mehul_Variya_
- **Instagram**: https://www.instagram.com/mehul_variya_/
- **Facebook**: https://www.facebook.com/Mehul.R.Variya

### Professional Summary (use verbatim in Hero/About section)
> "Mobile application and backend developer with 2+ years of experience building scalable
> applications using Android (Java/Kotlin), Flutter, and Node.js. Proven expertise in both
> product-based and service-based development, UI/UX performance optimization, RESTful API
> integration, and cross-functional team collaboration."

**Additional (post April 2025 — current role):**
> Since April 2025, Mehul has been working as a **Backend Developer**, focusing on
> server-side architecture, API design, and backend systems.

---

## 🎓 EDUCATION

- **Degree**: Bachelor of Computer Applications (BCA)
- **Institution**: Vivekanand College, Surat
- **Duration**: June 2021 – May 2024
- **CGPA**: 8.48 / 10.0
- **Relevant Coursework**: Software Development, Web Development, Database Administration, Network Administration

---

## 💼 WORK EXPERIENCE

### 1. Backend Developer (Current Role — Post April 2025)
- **Type**: Backend Development
- **Focus**: Server-side architecture, REST API design, database optimization, backend systems
- **Stack**: Node.js, Express.js, MongoDB, MySQL, Firebase
- **Note**: This is the most recent role. Highlight it prominently.

### 2. Application and Backend Developer — RadhaVision Infotech, Surat
- **Duration**: Feb 2024 – Apr 2025
- **Highlights**:
  - Developed and deployed full-stack mobile apps using Flutter and Node.js
  - Created scalable REST APIs; integrated MongoDB and Firebase
  - Delivered real-world solutions: food delivery app, health management system, investment platform
  - Led backend integration and real-time data handling for user-facing features

### 3. Application Developer — Kamadh Infotech, Surat
- **Duration**: Aug 2022 – Sep 2023
- **Highlights**:
  - Designed and developed 7+ Android and Flutter applications
  - Features: photo editing, grid making, AI background removal
  - Implemented REST API integration, in-app ads, and third-party SDKs
  - Optimized app performance; collaborated with designers, QA, and backend teams

### 4. Android Developer Intern — Kamadh Infotech, Surat
- **Duration**: Feb 2022 – Jul 2022
- **Highlights**:
  - Assisted in developing Android and Flutter utility apps
  - Gained hands-on experience in UI implementation, Firebase integration, and debugging
  - Learned clean architecture and responsive design best practices

---

## 🛠️ SKILLS

### Languages
- Dart, JavaScript, TypeScript, Java, Kotlin

### Mobile Development
- Flutter, Android (Java/Kotlin)

### Backend Development
- Node.js, Express.js

### Databases
- MongoDB, MySQL, Firebase Realtime DB, Firestore, SQLite

### Tools & Platforms
- Git, Postman, Figma, Android Studio, VS Code

### APIs & Services
- REST APIs, Firebase, Google Maps API, Payment Gateway Integration

### Other Skills (Soft)
- Leadership, Problem Solving, Time Management, Communication
- Cross-functional Team Collaboration
- UI/UX Performance Optimization

### Interests
- Full Stack Development
- Artificial Intelligence
- Machine Learning

---

## 🚀 PROJECTS

### Featured Projects (Show on homepage)

#### 1. Yummy — Food Delivery App
- **Type**: Mobile App (Flutter)
- **GitHub**: https://github.com/MehulVariya (link to repo)
- **Description**: A quick commerce food delivery app offering regional cuisines like Gujarati Thali, Dhokla, and Punjabi meals.
- **Features**: Multi-role system (admin panel, partner/restaurant panel, delivery agent app, user app), live order tracking, timely order processing, seamless delivery experience.
- **Stack**: Flutter, Node.js, MongoDB, Firebase
- **Problem Solved**: Streamlined regional food delivery with real-time tracking and multi-stakeholder management.

#### 2. Hophsee — Hospital Management System
- **Type**: Mobile App (Flutter)
- **GitHub**: https://github.com/MehulVariya/Hophsee_Flutter
- **Description**: A multi-role hospital management app.
- **Features**: Patients can book appointments, chat with doctors, manage health records. Doctor approval workflows, patient check-in, staff/admin dashboards, real-time communication with role-based access.
- **Stack**: Flutter, Node.js, Firebase
- **Problem Solved**: Digitized hospital operations with secure role-based access control.

#### 3. Royal Investor App
- **Type**: Mobile App (Flutter)
- **GitHub**: https://github.com/MehulVariya (link to repo)
- **Description**: An investment management app allowing clients to invest in 30, 90, or 180-day plans with fixed returns.
- **Features**: Automates plan tracking, calculates maturity amounts, credits returns to bank accounts, investment history, transaction logs, admin control.
- **Stack**: Flutter, Node.js, MongoDB
- **Problem Solved**: Automated investment lifecycle management with transparent return calculations.

#### 4. StackOverflow Clone
- **Type**: Web App (MERN)
- **GitHub**: https://github.com/Mehul0255/Stackoverflow-Clone
- **Demo**: https://www.youtube.com/watch?v=3jDIEf5vNp8
- **Description**: A replica of the Q&A platform for developers using MERN + MySQL stack.
- **Features**: Account creation, CRUD on questions, tags, answers, comments.
- **Stack**: MySQL, Express.js, React.js, Node.js
- **Problem Solved**: Demonstrated full MERN stack capability by replicating a complex real-world platform.

#### 5. Background Eraser — AI BG Remover
- **Type**: Mobile App (Android/Flutter)
- **Play Store**: Available on Play Store
- **Description**: AI-powered photo editing app with one-tap background removal.
- **Features**: Automatic object detection, manual lasso tool, soft edge, undo/redo, zoom, image blending, custom backgrounds, high-quality export.
- **Stack**: Flutter, AI/ML APIs
- **Problem Solved**: Made professional-grade background removal accessible on mobile.

#### 6. Melody Medi System
- **Type**: Mobile App (Flutter)
- **GitHub**: https://github.com/MehulVariya (link to repo)
- **Description**: Manufacturing and clinic supply management app for a medical equipment firm.
- **Features**: GST-compliant billing, one-time and variant-based product selection, fund and doctor management, image-based invoice generation.
- **Stack**: Flutter, Node.js, MongoDB
- **Problem Solved**: Replaced manual billing with a digital, GST-compliant system for medical suppliers.

### Other Projects (Show on /projects page)

- **Resume Bot** — Facebook Messenger chatbot that auto-generates resumes via Q&A. Stack: Node.js, LaTeX, Facebook Webhook.
- **SD Times App** — Cross-platform Flutter developer news app using Hacker News API. Stack: Flutter, SQFLite.
- **Photo Lab — Photo Art & Effect** — Comprehensive photo editing app with 70+ effects, AI BG removal, collages. Available on Play Store.
- **Full Size Pic — No Crop Photo** — No-crop photo editor with filters, stickers, Instagram grid creation. Play Store.
- **Grid Maker** — Instagram utility app for 3x3 grid splits and collages. Play Store.
- **Umbra — Photo Editor** — Feature-rich image editor with borders, filters, shadow effects. Stack: Android/Flutter.
- **MovieSurfer** — IMDB-inspired watchlist app. Stack: Node.js, MongoDB, Bootstrap 4.
- **Blog Site** — Full CRUD blog platform with authentication. Stack: Node.js, MySQL, Semantic UI.
- **Space Invaders** — Python/Pygame game inspired by Atari classic. Stack: Python, PyGame.
- **Track2Fit** — Fitness app with workout tracking, meal planning, sleep monitoring. Stack: Flutter, Firebase.
- **BodyWorky** — Flutter fitness app with clean architecture, workout plans, progress visualization.
- **Kids Learning** — Alphabet learning app for children. Stack: Kotlin, Android.
- **Happy Valentine's Day Wishes** — Greeting app with love messages, wallpapers, WhatsApp sticker sharing via APIs.

---

## 📄 PAGES & COMPONENTS TO BUILD

### Public Pages
1. `/` — Homepage (Hero, About snippet, Skills, Featured Projects, Experience timeline, Latest Blogs, Contact CTA)
2. `/about` — Full biography, timeline, education, soft skills, interests
3. `/projects` — All projects with filters by category (Mobile, Web, Backend, AI)
4. `/experience` — Full work history timeline
5. `/contact` — Contact form + social links
6. `/resume` — PDF resume viewer + download button
7. `/blog` — Blog listing page (paginated, searchable, filterable by tag)
8. `/blog/[slug]` — Individual blog post page (dynamic, SSG with ISR)

### Admin Pages (Protected — JWT auth)
9. `/admin` — Admin login page
10. `/admin/dashboard` — Overview stats (blogs, projects, messages, views)
11. `/admin/blogs` — All blogs list with status (Published / Draft)
12. `/admin/blogs/new` — Create new blog post
13. `/admin/blogs/edit/[id]` — Edit existing blog post
14. `/admin/projects` — Manage all projects (add/edit/delete/reorder)
15. `/admin/projects/new` — Add new project
16. `/admin/projects/edit/[id]` — Edit existing project
17. `/admin/experience` — Manage work experience entries
18. `/admin/skills` — Manage skills (add/edit/delete/reorder categories)
19. `/admin/profile` — Edit personal info, bio, social links, resume PDF
20. `/admin/messages` — View contact form submissions (read/unread/delete)
21. `/admin/media` — Upload and manage images/files (used in blogs & projects)
22. `/admin/settings` — Site settings (SEO defaults, theme, maintenance mode)

### Components
- `Navbar` — Sticky, transparent on top, blurred on scroll. Logo + nav links + dark mode toggle.
- `HeroSection` — Name, animated role titles (typewriter: "Flutter Developer", "Backend Developer", "Full Stack Developer"), CTA buttons (View Work / Download Resume), social icons.
- `AboutSection` — Photo + bio text + key stats (2+ yrs experience, 7+ apps, 3 companies).
- `SkillsSection` — Categorized skill cards (Mobile, Backend, Languages, Tools). Show proficiency visually.
- `ExperienceSection` — Vertical timeline with company, role, duration, highlights.
- `ProjectCard` — Image/mockup, title, tech stack tags, description, GitHub + Live links.
- `ProjectsGrid` — Filterable grid with category tabs.
- `BlogCard` — Cover image, title, excerpt, tags, read time, date, author.
- `BlogGrid` — Paginated grid with search + tag filter.
- `BlogPost` — Full blog post renderer with MDX/rich text support.
- `ContactSection` — Contact form (name, email, message) + email + social links.
- `Footer` — Copyright, social links, back-to-top button.
- `ScrollProgress` — Top progress bar showing page scroll %.
- `SectionWrapper` — Reusable wrapper with fade-in-on-scroll animation.
- `TechBadge` — Reusable tech stack pill/badge component.
- `ThemeToggle` — Dark/light mode toggle button.
- `ResumeButton` — Floating or nav CTA to download PDF resume.
- `AdminSidebar` — Collapsible sidebar with all admin nav links + logout.
- `AdminHeader` — Top bar with page title, admin avatar, notifications.
- `RichTextEditor` — WYSIWYG blog editor (use `@uiw/react-md-editor` or `TipTap`).
- `ImageUploader` — Drag-and-drop image uploader with preview.
- `StatusBadge` — Published / Draft / Archived badge component.
- `ConfirmModal` — Reusable delete confirmation dialog.
- `DataTable` — Reusable sortable, searchable table for admin lists.
- `StatCard` — Dashboard stat card (icon, number, label, trend).

---

## 🏗️ FOLDER STRUCTURE

```
mehul-variya-portfolio/
├── app/
│   ├── layout.tsx                      # Root layout — JSON-LD, fonts, ThemeProvider
│   ├── page.tsx                        # Homepage
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── experience/page.tsx
│   ├── contact/page.tsx
│   ├── resume/page.tsx
│   ├── blog/
│   │   ├── page.tsx                    # Blog listing (paginated, filterable)
│   │   └── [slug]/page.tsx             # Individual blog post (SSG + ISR)
│   ├── admin/
│   │   ├── layout.tsx                  # Admin layout — sidebar + auth guard
│   │   ├── page.tsx                    # Redirect to /admin/dashboard
│   │   ├── login/page.tsx              # Admin login (JWT)
│   │   ├── dashboard/page.tsx          # Stats overview
│   │   ├── blogs/
│   │   │   ├── page.tsx                # All blogs table
│   │   │   ├── new/page.tsx            # Create blog
│   │   │   └── edit/[id]/page.tsx      # Edit blog
│   │   ├── projects/
│   │   │   ├── page.tsx                # All projects table
│   │   │   ├── new/page.tsx            # Add project
│   │   │   └── edit/[id]/page.tsx      # Edit project
│   │   ├── experience/page.tsx         # Manage work experience
│   │   ├── skills/page.tsx             # Manage skills
│   │   ├── profile/page.tsx            # Edit personal info + resume upload
│   │   ├── messages/page.tsx           # Contact form submissions
│   │   ├── media/page.tsx              # Image/file manager
│   │   └── settings/page.tsx          # Site-wide settings
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/route.ts          # POST — JWT login
│   │   │   └── logout/route.ts         # POST — logout
│   │   ├── blogs/
│   │   │   ├── route.ts                # GET all, POST create
│   │   │   └── [id]/route.ts           # GET one, PUT update, DELETE
│   │   ├── projects/
│   │   │   ├── route.ts                # GET all, POST create
│   │   │   └── [id]/route.ts           # GET one, PUT update, DELETE
│   │   ├── experience/
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   ├── skills/
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   ├── profile/route.ts            # GET + PUT profile data
│   │   ├── messages/
│   │   │   ├── route.ts                # GET all messages, POST (public contact form)
│   │   │   └── [id]/route.ts           # PUT (mark read), DELETE
│   │   ├── media/
│   │   │   ├── upload/route.ts         # POST — upload image (Cloudinary/S3)
│   │   │   └── route.ts               # GET all media, DELETE
│   │   └── settings/route.ts          # GET + PUT site settings
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── admin/
│   │   ├── AdminSidebar.tsx
│   │   ├── AdminHeader.tsx
│   │   ├── AuthGuard.tsx              # Wraps admin pages — redirect if no token
│   │   ├── RichTextEditor.tsx         # TipTap or react-md-editor
│   │   ├── ImageUploader.tsx          # Drag-drop uploader with preview
│   │   ├── DataTable.tsx              # Reusable sortable/searchable table
│   │   ├── StatCard.tsx
│   │   ├── StatusBadge.tsx
│   │   └── ConfirmModal.tsx
│   ├── blog/
│   │   ├── BlogCard.tsx
│   │   ├── BlogGrid.tsx
│   │   ├── BlogPost.tsx               # Full post renderer
│   │   ├── BlogSearch.tsx
│   │   ├── TagFilter.tsx
│   │   └── TableOfContents.tsx        # Auto-generated from headings
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── BlogPreviewSection.tsx     # Latest 3 blogs on homepage
│   │   └── ContactSection.tsx
│   ├── ui/
│   │   ├── ProjectCard.tsx
│   │   ├── TechBadge.tsx
│   │   ├── SectionWrapper.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── Pagination.tsx
│   └── seo/
│       ├── JsonLd.tsx
│       └── FAQSection.tsx
├── lib/
│   ├── metadata.ts
│   ├── auth.ts                        # JWT sign/verify helpers
│   ├── db.ts                          # MongoDB connection (Mongoose)
│   ├── cloudinary.ts                  # Image upload helper
│   └── utils.ts
├── models/                            # Mongoose schemas
│   ├── Blog.ts
│   ├── Project.ts
│   ├── Experience.ts
│   ├── Skill.ts
│   ├── Message.ts
│   ├── Media.ts
│   └── Settings.ts
├── middleware.ts                      # Protect /admin/* routes — check JWT cookie
├── public/
│   ├── resume/mehul_variya_resume.pdf
│   ├── images/
│   └── og-image.png
├── styles/
│   └── globals.css
├── .env.local                         # See ENV VARIABLES section below
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🔍 SEO METADATA — USE THIS EXACTLY

```typescript
// lib/metadata.ts

export const siteMetadata = {
  name: "Mehul Variya",
  title: "Mehul Variya | Flutter & Node.js Developer | Surat, India",
  description:
    "Mehul Variya is an Application and Backend Developer from Surat, India with 2+ years of experience in Flutter, Android, Node.js, and full-stack mobile development.",
  url: "https://mehulvariya.in",
  ogImage: "https://mehulvariya.in/og-image.png",
  keywords: [
    "Mehul Variya",
    "Flutter Developer",
    "Android Developer",
    "Node.js Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Mobile App Developer India",
    "Surat Developer",
    "React Developer",
    "TypeScript Developer",
    "App Developer Gujarat",
  ],
  author: "Mehul Variya",
  twitterHandle: "@Mehul_Variya_",
};
```

---

## 🤖 JSON-LD SCHEMAS — IMPLEMENT ALL

### 1. Person Schema (in root layout.tsx)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mehul Variya",
  "url": "https://mehulvariya.in",
  "image": "https://mehulvariya.in/images/mehul-variya.png",
  "jobTitle": "Application Developer",
  "description": "Mobile application and backend developer with 2+ years of experience in Flutter, Android, and Node.js.",
  "email": "mehul639108@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Surat",
    "addressRegion": "Gujarat",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://github.com/MehulVariya",
    "https://in.linkedin.com/in/mehul-variya",
    "https://twitter.com/Mehul_Variya_",
    "https://www.instagram.com/mehul_variya_/",
    "https://www.facebook.com/Mehul.R.Variya"
  ],
  "knowsAbout": ["Flutter", "Android Development", "Node.js", "React.js", "TypeScript", "MongoDB", "Firebase"],
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Vivekanand College, Surat"
  }
}
```

### 2. FAQ Schema (on homepage — for AEO/SGE)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is Mehul Variya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mehul Variya is an Application and Backend Developer from Surat, Gujarat, India with 2+ years of experience building mobile apps using Flutter, Android (Java/Kotlin), and backend systems using Node.js and Express.js."
      }
    },
    {
      "@type": "Question",
      "name": "What technologies does Mehul Variya specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mehul Variya specializes in Flutter, Android (Java/Kotlin), Node.js, Express.js, MongoDB, Firebase, TypeScript, and REST API integration."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Mehul Variya based?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mehul Variya is based in Surat, Gujarat, India."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of projects has Mehul Variya built?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mehul Variya has built food delivery apps, hospital management systems, investment platforms, photo editing apps, fitness apps, and full-stack web applications."
      }
    },
    {
      "@type": "Question",
      "name": "How can I hire Mehul Variya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact Mehul Variya via email at mehul639108@gmail.com or connect on LinkedIn at linkedin.com/in/mehul-variya."
      }
    },
    {
      "@type": "Question",
      "name": "What is Mehul Variya's educational background?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mehul Variya completed his Bachelor of Computer Applications (BCA) from Vivekanand College, Surat with a CGPA of 8.48/10 in May 2024."
      }
    }
  ]
}
```

### 3. WebSite Schema (for sitelinks searchbox)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mehul Variya Portfolio",
  "url": "https://mehulvariya.in",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://mehulvariya.in/projects?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

---

## 🎨 DESIGN GUIDELINES

### Color Palette (Dark Mode — Primary)
- **Background**: `#0a0a0a` (near black)
- **Surface**: `#111111`
- **Card**: `#1a1a1a`
- **Border**: `#2a2a2a`
- **Primary Accent**: `#6366f1` (Indigo) — for CTAs, highlights
- **Secondary Accent**: `#06b6d4` (Cyan) — for tech badges
- **Text Primary**: `#f5f5f5`
- **Text Secondary**: `#a3a3a3`
- **Success**: `#22c55e`

### Typography
- **Heading font**: Poppins (700, 600)
- **Body font**: Inter (400, 500)
- **Code font**: JetBrains Mono

### Animation Guidelines
- Page entrance: fade-in + slide-up (duration: 0.6s, ease: easeOut)
- Skill cards: stagger children by 0.1s
- Project cards: hover scale(1.02) + shadow lift
- Hero title: typewriter effect for role titles
- Scroll-triggered: use Framer Motion `whileInView` with `viewport={{ once: true }}`

---

## 📦 DEPENDENCIES TO INSTALL

```bash
npx create-next-app@latest mehul-variya-portfolio --typescript --tailwind --app --eslint

# Core UI & animation
npm install framer-motion next-themes lucide-react react-icons

# Database — MongoDB with Mongoose
npm install mongoose

# Auth — JWT
npm install jsonwebtoken bcryptjs
npm install -D @types/jsonwebtoken @types/bcryptjs

# Rich Text Editor — TipTap (for blog writing)
npm install @tiptap/react @tiptap/pm @tiptap/starter-kit
npm install @tiptap/extension-image @tiptap/extension-link
npm install @tiptap/extension-placeholder @tiptap/extension-code-block-lowlight
npm install lowlight

# Image uploads — Cloudinary
npm install cloudinary next-cloudinary

# Blog slug generation
npm install slugify

# Reading time estimate
npm install reading-time

# Date formatting
npm install date-fns

# Form validation
npm install react-hook-form zod @hookform/resolvers

# Contact form emails
npm install resend

# Analytics
npm install @vercel/analytics

# Dev tools
npm install -D @types/node @types/react
```

---

## 🔐 ADMIN PANEL — FULL SPECIFICATION

### Authentication
- Single admin user only (Mehul). No registration page.
- Login via email + password stored in MongoDB (hashed with bcryptjs).
- On successful login: issue a signed JWT (7-day expiry) stored as an `httpOnly` cookie.
- `middleware.ts` checks the cookie on every `/admin/*` route. Redirect to `/admin/login` if invalid.
- Logout clears the cookie and redirects to `/admin/login`.
- Never expose admin routes in the public sitemap or robots.txt.

### Admin Dashboard (`/admin/dashboard`)
Show live stats fetched from the database:
- Total blogs published / drafts
- Total projects listed
- Total contact messages (unread count highlighted)
- Total media files uploaded
- Latest 5 contact messages preview (name, email, date)
- Latest 5 blog posts with status
- Quick action buttons: "New Blog", "New Project", "View Messages"

### Blog Management — FULL SPEC

#### Blog Data Model (`models/Blog.ts`)
```typescript
{
  _id: ObjectId,
  title: string,               // required, max 100 chars
  slug: string,                // auto-generated from title, unique
  excerpt: string,             // short summary, max 200 chars
  content: string,             // rich HTML from TipTap editor
  coverImage: string,          // Cloudinary URL
  coverImageAlt: string,       // for SEO alt text
  tags: string[],              // e.g. ["Flutter", "Node.js", "Tutorial"]
  category: string,            // e.g. "Mobile Dev", "Backend", "Career"
  status: "draft" | "published" | "archived",
  featured: boolean,           // show on homepage blog preview
  readTime: number,            // auto-calculated in minutes
  metaTitle: string,           // SEO title override (optional)
  metaDescription: string,     // SEO meta desc override (optional)
  ogImage: string,             // OG image override (optional)
  views: number,               // auto-incremented on each visit
  createdAt: Date,
  updatedAt: Date,
  publishedAt: Date,           // set when status changes to published
}
```

#### Blog List Page (`/admin/blogs`)
- Table columns: Cover Thumbnail | Title | Category | Tags | Status | Views | Date | Actions
- Actions per row: Edit | Preview | Toggle Published/Draft | Delete
- Bulk actions: Delete selected | Publish selected | Archive selected
- Filters: by status, by category, by tag, by date range
- Search: by title keyword
- Sort: by date, by views, by title
- Pagination: 10 items per page

#### Create / Edit Blog (`/admin/blogs/new` and `/admin/blogs/edit/[id]`)
Form fields:
- **Title** — text input (required)
- **Slug** — auto-generated from title, editable manually
- **Excerpt** — textarea (max 200 chars, character counter shown)
- **Cover Image** — drag-drop uploader OR paste Cloudinary URL, preview shown
- **Cover Image Alt Text** — text input
- **Category** — dropdown (Mobile Dev / Backend / Web Dev / Career / Tutorial / Opinion)
- **Tags** — tag input (type and press Enter to add, click × to remove)
- **Content** — TipTap rich text editor with toolbar:
  - Headings (H2, H3, H4)
  - Bold, Italic, Underline, Strikethrough
  - Ordered list, Bullet list
  - Blockquote
  - Code block (with syntax highlighting via lowlight)
  - Inline code
  - Links (open in new tab option)
  - Images (upload via media library)
  - Horizontal rule
  - Undo / Redo
- **Status** — toggle: Draft / Published
- **Featured** — checkbox (show on homepage)
- **SEO Section** (collapsible):
  - Meta Title (override, shows character count, max 60)
  - Meta Description (override, shows character count, max 160)
  - OG Image (override)
  - Keywords (comma-separated)
- **Save as Draft** button + **Publish** button
- **Preview** button (open /blog/[slug] in new tab)

#### Public Blog Listing (`/blog`)
- Show all published blogs, newest first
- Search bar (client-side search by title/tag)
- Tag filter pills (click to filter)
- Category filter dropdown
- Pagination (6 per page)
- Each BlogCard shows: cover image, title, excerpt, tags, read time, date
- Featured blogs pinned at top with "Featured" badge

#### Public Blog Post (`/blog/[slug]`)
- Use `generateStaticParams()` to pre-render all published posts at build time
- Use `revalidate = 60` (ISR) so new posts appear within 60 seconds without full rebuild
- Layout: Cover image (full-width), Title (h1), Meta (date, read time, tags), Table of Contents (auto from h2/h3), Content, Related posts (same tag/category), Back to Blog button
- Auto-increment `views` counter on each page load (via API route)
- Add `Article` JSON-LD schema for each post:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[blog title]",
  "description": "[excerpt]",
  "image": "[coverImage]",
  "author": { "@type": "Person", "name": "Mehul Variya" },
  "publisher": { "@type": "Person", "name": "Mehul Variya" },
  "datePublished": "[publishedAt]",
  "dateModified": "[updatedAt]",
  "url": "https://mehulvariya.in/blog/[slug]"
}
```

---

### Project Management — FULL SPEC

#### Project Data Model (`models/Project.ts`)
```typescript
{
  _id: ObjectId,
  title: string,
  slug: string,
  shortDescription: string,     // max 150 chars, shown on card
  longDescription: string,      // rich text, shown on project detail
  coverImage: string,           // Cloudinary URL
  images: string[],             // gallery — multiple screenshots
  techStack: string[],          // e.g. ["Flutter", "Node.js", "MongoDB"]
  category: "Mobile" | "Web" | "Backend" | "AI" | "Game",
  githubUrl: string,
  liveUrl: string,              // optional — Play Store / live site
  demoVideoUrl: string,         // optional — YouTube link
  featured: boolean,            // show on homepage
  order: number,                // manual sort order
  status: "active" | "archived",
  problemSolved: string,        // 1-2 sentences
  outcome: string,              // result / impact
  startDate: Date,
  endDate: Date,                // null if ongoing
  createdAt: Date,
  updatedAt: Date,
}
```

#### Admin Project Features
- Add / Edit / Delete projects
- Drag-and-drop reorder (updates `order` field)
- Toggle featured / archived
- Multi-image gallery uploader
- Full form matching all model fields above

---

### Experience Management — FULL SPEC

#### Experience Data Model (`models/Experience.ts`)
```typescript
{
  _id: ObjectId,
  company: string,
  role: string,
  location: string,
  startDate: Date,
  endDate: Date | null,         // null = "Present"
  type: "full-time" | "part-time" | "internship" | "freelance",
  description: string,          // rich text
  highlights: string[],         // bullet points
  techStack: string[],
  companyLogo: string,          // Cloudinary URL
  order: number,
  createdAt: Date,
}
```

---

### Skills Management — FULL SPEC

#### Skill Data Model (`models/Skill.ts`)
```typescript
{
  _id: ObjectId,
  name: string,                 // e.g. "Flutter"
  category: string,             // e.g. "Mobile Development"
  icon: string,                 // Cloudinary URL or devicon class name
  proficiency: number,          // 1–100 (shown as progress bar optionally)
  order: number,
  featured: boolean,
  createdAt: Date,
}
```

---

### Profile Management (`/admin/profile`)
Admin can edit ALL of these fields:
- Full name
- Job title / headline
- Short bio (shown in Hero)
- Long bio (shown in About page)
- Profile photo (upload via Cloudinary)
- Location
- Email (public display)
- Phone (hidden from public)
- Resume PDF (upload and replace)
- Social links: GitHub, LinkedIn, Twitter, Instagram, Facebook
- Availability status: "Open to Work" | "Freelancing" | "Not Available" (shown as badge on site)
- Years of experience
- Number of projects completed
- Number of apps on Play Store

---

### Messages (`/admin/messages`)
Contact form submissions stored in DB:
```typescript
{
  _id: ObjectId,
  name: string,
  email: string,
  subject: string,
  message: string,
  isRead: boolean,
  createdAt: Date,
}
```
- List with read/unread status
- Click to view full message
- Mark as read / delete
- Reply button opens mailto link

---

### Media Library (`/admin/media`)
- Upload images via drag-and-drop (stored on Cloudinary)
- View all uploaded files in a grid
- Click to copy URL
- Delete media (also removes from Cloudinary)
- Filter by type (image, PDF)
- Used by blog editor and project forms

---

### Settings (`/admin/settings`)
Admin can configure:
- Site title and tagline
- Default SEO meta description
- Default OG image
- Google Analytics ID
- Google Search Console verification code
- Maintenance mode toggle (shows "Coming Soon" to public if ON)
- Footer copyright text
- Contact form: enable/disable, set notification email

---

## 🔐 ENVIRONMENT VARIABLES (`.env.local`)

```env
# MongoDB
MONGODB_URI=mongodb+srv://...

# JWT
JWT_SECRET=your_super_secret_key_here
JWT_EXPIRY=7d

# Admin Credentials (hashed at setup)
ADMIN_EMAIL=mehul639108@gmail.com
ADMIN_PASSWORD_HASH=bcrypt_hash_here

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email (Resend)
RESEND_API_KEY=re_...
CONTACT_FORM_TO_EMAIL=mehul639108@gmail.com

# App
NEXT_PUBLIC_SITE_URL=https://mehulvariya.in
```

---

## ✅ FINAL CHECKLIST BEFORE DEPLOYING

### SEO & AEO
- [ ] All JSON-LD schemas added and validated at schema.org/validator
- [ ] sitemap.xml accessible at /sitemap.xml — includes blog post URLs
- [ ] robots.txt: disallow `/admin/*`, allow all else, reference sitemap
- [ ] OG image (1200x630) created and linked in metadata
- [ ] All images have descriptive alt text
- [ ] Each blog post has Article JSON-LD schema
- [ ] FAQ schema present on homepage

### Public Site
- [ ] Resume PDF downloadable at /resume
- [ ] Contact form works and sends email via Resend
- [ ] Dark mode toggle works and persists via localStorage
- [ ] Mobile navigation (hamburger menu) works correctly
- [ ] Blog listing page loads, paginates, and filters correctly
- [ ] Blog post ISR works — new posts appear within 60 seconds
- [ ] Table of Contents auto-generates from blog headings
- [ ] Blog view counter increments on each visit
- [ ] Related posts appear at bottom of each blog

### Admin Panel
- [ ] `/admin/login` works — correct credentials issue JWT cookie
- [ ] `/admin/*` routes all redirect to login if no valid JWT
- [ ] Logout clears cookie and redirects to login
- [ ] Dashboard stats load correctly from MongoDB
- [ ] Can create, edit, publish, draft, archive blogs
- [ ] TipTap editor saves rich HTML correctly
- [ ] Blog slug auto-generates from title
- [ ] Cover image uploads to Cloudinary successfully
- [ ] Can create, edit, reorder, archive projects
- [ ] Can manage experience, skills, profile from admin
- [ ] Contact messages appear in admin with read/unread status
- [ ] Media library uploads and deletes from Cloudinary
- [ ] Settings page saves and reflects on frontend

### Performance & Quality
- [ ] Lighthouse audit: Performance ≥ 95, SEO = 100, Accessibility ≥ 95
- [ ] Test in Chrome, Firefox, Safari, and mobile browsers
- [ ] Admin panel NOT indexed by Google (robots meta noindex on /admin/*)
- [ ] Deploy to Vercel and connect custom domain mehulvariya.in
- [ ] Add Vercel Analytics for visitor tracking
- [ ] Verify Google Search Console after deployment
- [ ] Submit sitemap to Google Search Console

---

*This prompt was generated specifically for Mehul Variya's portfolio. All data is real and verified.*
*Last updated: June 2026*
