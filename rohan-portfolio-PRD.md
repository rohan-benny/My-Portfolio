# PRD — Rohan Benny Portfolio Website

## Goal
A job-search-focused personal portfolio to land software development roles (Android/Web/Full-stack).

## Target Audience
Hiring managers and recruiters at IT companies, startups, and product firms in India.

## Aesthetic Direction
**Light & Clean + Glassmorphism/Modern** — crisp white base with frosted-glass cards, subtle depth via backdrop blur and soft shadows, accented with a bold single color (e.g. electric indigo or teal). Clean editorial typography. Smooth scroll-triggered reveal animations. No purple gradient clichés.

---

## Pages & Sections

### 1. Hero
- Name: **Rohan Benny**
- Title: MCA Postgraduate · Android & Web Developer
- Tagline: short punchy line (AI-generated on load or static)
- CTAs: **View Projects** | **Download Resume**
- Subtle animated background (mesh gradient or particle dots)

### 2. About
- 3–4 line bio drawn from professional summary
- Key stat chips: 3 Internships · 4 Projects · 6 Certifications · IEEE Member

### 3. Skills
- Grouped visual display (not a boring list):
  - Languages: Java, Kotlin, Python, C, JavaScript
  - Web: HTML, CSS, React.js, Node.js
  - Databases: MySQL, Firebase, MongoDB, MS Access
  - Tools: Android Studio, VS Code, Figma, Power BI, N8N
  - Concepts: DSA, OOP, SDLC, DBMS

### 4. Experience / Internships (Timeline)
| Company | Role | Period |
|---|---|---|
| Beepeaks, Bengaluru (Remote) | Website/App Developer Intern – Team Lead | Apr 2026–Present |
| Rejola IT Services, Chennai | React Intern | Jun–Jul 2025 |
| EduPhoenix Solutions, Bengaluru | Web Development Intern | Jun–Jul 2023 |

### 5. Projects (Cards with tags + GitHub links)
1. **STRIVO** – Campus Comm & Mgmt System (Kotlin, Firebase, ReactJS)
2. **FleetMinder** – Vehicle Service Tracker (Android, Kotlin, Firebase)
3. **Attendance Monitoring** – Face Recognition (Python, OpenCV)
4. **Leave Management System** (VB, MS Access)
5. **Recruitment Web App** @ Beepeaks (Role-based, Google Sheets integration)

### 6. Education (Timeline)
- MCA – Kristu Jayanti University, Bengaluru (2024–2026) · 79%
- BCA – Kristu Jayanti College, Bengaluru (2021–2024) · 85%
- Class XII – St. Peter's, Kerala (2021) · 95%
- Class X – St. Peter's, Kerala (2019) · 94%

### 7. Certifications (Badge/pill layout)
- NASSCOM FutureSkills: Data Science & ML (2026)
- Oracle: AI Foundations Associate (2025)
- AWS Academy: Cloud Developing (2025)
- Google: Cybersecurity Professional Certificate (2024)
- Blockchain Foundation Certification (2024)
- NPTEL: Cloud Computing (2023)

### 8. Achievements
- Research paper: "Quantum Computing in AV, Security, and Medicine" — SRS 2025, Kristu Jayanti University
- IEEE Active Member
- Tech outreach: taught emerging tech in government schools

### 9. Resume Download
- Prominent button → download PDF resume

### 10. Contact / Footer
- Email: rohanbenny99@gmail.com
- Phone: +91 6282241801
- LinkedIn: linkedin.com/in/rohan-benny-207161262
- GitHub: github.com/rohan-benny

---

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom CSS for glassmorphism effects
- **Animations**: Framer Motion (scroll reveals, stagger, hover)
- **Icons**: Lucide React or React Icons
- **Fonts**: Clash Display (headings) + DM Sans (body) — or similar distinctive pair
- **Deployment**: Vercel

## Design Tokens (proposed)
```
--bg: #f8f9fc
--surface: rgba(255,255,255,0.6)   /* glass cards */
--accent: #4F46E5                  /* indigo */
--text-primary: #0f0f0f
--text-muted: #6b7280
--blur: blur(16px)
--border: rgba(255,255,255,0.4)
```

## Key UX Principles
- Mobile-first, fully responsive
- Smooth scroll with section highlighting in nav
- Fast load — no heavy assets
- Each project card has: title, tech tags, 2-line description, GitHub icon link
- Resume download triggers file download (PDF)

## Out of Scope (v1)
- Blog
- Testimonials
- Contact form (just mailto link)
- CMS integration

---

## Success Metric
A recruiter should be able to understand Rohan's stack, see 3+ projects, and reach out — all within 60 seconds of landing.
