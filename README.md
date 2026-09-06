# 🌌 Rakshit Kumar — Software & AI Systems Engineer Portfolio

<div align="center">

[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg?style=for-the-badge)](LICENSE)

<br />

**A state-of-the-art, futuristic portfolio website engineered with a deep-space visual design system, hardware-accelerated ambient lighting, and rich interactive telemetry.**

[Explore Live Portfolio](https://github.com/Rakshit412005/Rakshit-Portfolio-Website) • [Report Issue](https://github.com/Rakshit412005/Rakshit-Portfolio-Website/issues) • [Connect on LinkedIn](https://www.linkedin.com/in/rakshit-kumar07)

</div>

---

## ⚡ Overview

This repository houses the source code for the personal engineering portfolio of **Rakshit Kumar** — a final-year Computer Science Engineering student at **SRMIST Chennai** (9.20 CGPA) specializing in **Production AI/ML**, **Edge-AI on Embedded Hardware**, and **High-Performance Full-Stack Web Architectures**.

Designed to transcend conventional resume-style webpages, the interface delivers a cinematic **"AI Systems Lab"** atmosphere featuring:
- A **dual-plane compositional architecture**: Fixed deep-space skybox (`#02000e`) + section-anchored atmospheric lighting fields.
- Hardware-accelerated **film grain overlays**, architectural **perspective grids**, and calibrated starlight coordinates.
- **Micro-interactions**: 3D parallax tilting, orbital telemetry arcs, monospace system telemetry codes, and staggered viewport reveals.

---

## 🛰️ Architectural Design System

### 1. Visual Foundation & Atmospheric Depth
- **Fixed Deep-Space Skybox**: Multi-layered background combining a subtle `#02000e` deep-void base, peripheral radial vignette, and an SVG fractal turbulence noise texture (`.bg-noise`) to eradicate digital color banding.
- **Architectural Perspective Grid**: Semi-transparent grid matrix masked via radial alpha gradients (`.perspective-grid`).
- **Section-Anchored Lighting Fields**: Each content domain features localized ambient lighting halos calibrated in hue and intensity to draw natural visual focus as the user scrolls:
  - **Hero**: Deep violet-to-indigo nebula bloom paired with an orbital cyan telemetry arc.
  - **Skills**: Structural cool indigo/cyan field highlighting the capability matrix.
  - **Projects**: Overhead spotlight cone framing production engineering showcases.
  - **Achievements & Contact**: High-tech planetary horizon illumination.

### 2. Design Tokens & Typography
- **Primary Accent**: Electric Violet (`#9333ea` / `#7c3aed`)
- **Secondary Accents**: Cyber Cyan (`#06b6d4` / `#22d3ee`), Deep Indigo (`#6366f1`), and Emerald (`#10b981`)
- **Display Typography**: **Space Grotesk** for confident, futuristic headings
- **Telemetry Typography**: **JetBrains Mono** for system status indicators, metrics, and subsystem identifiers
- **Body Font**: **Poppins** for optimal reading clarity

---

## 💻 Core Application Modules

```
├── 01 // HERO (ABOUT)
│   ├── Dynamic typing terminal engine (React Typing Effect)
│   ├── Live telemetry availability beacon
│   ├── Academic & engineering impact statistics counter
│   └── 3D Parallax aperture portrait with multi-layer conic orbit rings
│
├── 02 // SKILLS (SYS-01 to SYS-05)
│   ├── SYS-01: AI & ML Systems (OpenCV, PyTorch, TensorFlow, Scikit-learn)
│   ├── SYS-02: Backend Systems (Node.js, Express, FastAPI, MongoDB, MySQL, Firebase)
│   ├── SYS-03: Frontend Systems (React, Next.js, TypeScript, Tailwind CSS, Socket.IO)
│   ├── SYS-04: Core Languages (Python, C++, C, JavaScript)
│   └── SYS-05: DevOps & Infrastructure (Docker, Raspberry Pi, Git, Vercel, Render)
│
├── 03 // EXPERIENCE (TIMELINE)
│   ├── IIIT Allahabad — Research & Development Intern (Edge-AI on Raspberry Pi 5 + 13 TOPS AI HAT+)
│   ├── Elevance Skills — Full Stack Web Development Intern (Next.js, Node, MongoDB, Cloudinary)
│   └── Liftoff Club — Technical Head (Engineering leadership & mentoring)
│
├── 04 // PROJECTS (SHOWCASE PANELS)
│   ├── AI Interviewer (MERN, FastAPI, Gemini LLM, Whisper NLP, Socket.IO)
│   ├── Stock Price Predictor (Python, Streamlit, ML Benchmarking, Sentiment Analysis)
│   ├── Multiplayer Chess (WebSockets, Socket.IO, Chess.js, Real-time FEN sync)
│   ├── Movies Zone (React, TMDB API, JavaScript)
│   └── Restaurant Reservation (Full-Stack MERN Architecture)
│
├── 05 // EDUCATION (ACADEMIC FOUNDATION)
│   ├── SRMIST University, Chennai — B.Tech Computer Science (9.20 CGPA)
│   └── GRM School, Bareilly — CBSE Class XII (87%) & Class X (94%)
│
├── 06 // ACHIEVEMENTS (RECOGNITION & BENCHMARKS)
│   ├── 01 // RECOGNITION: Award of Excellence (IIIT Allahabad Edge-AI with 13 TOPS NPU)
│   ├── 02 // DSA: 200+ Problems Solved across LeetCode (1530 Rating) & GeeksforGeeks
│   └── 03 // RANKING: 138th Institutional Rank (Top 2.5% among 5,448 candidates)
│
└── 07 // CONTACT & FOOTER
    ├── Live interactive message console with real-time feedback (EmailJS)
    └── Quick navigation and verified external profiles (GitHub, LinkedIn, Codolio)
```

---

## 🛠️ Technology Stack

| Domain | Technologies / Libraries |
| :--- | :--- |
| **Core Framework** | [React 18.3](https://reactjs.org/) • [Vite 6.0](https://vitejs.dev/) |
| **Styling & Effects** | [Tailwind CSS 3.4](https://tailwindcss.com/) • Vanilla CSS • Custom Keyframe Shimmers |
| **3D & Motion** | [react-parallax-tilt](https://www.npmjs.com/package/react-parallax-tilt) • CSS 3D Transforms • Intersection Observer API |
| **Icons & Media** | [react-icons (FA6, SI, FI)](https://react-icons.github.io/react-icons/) |
| **Messaging & Telemetry**| [@emailjs/browser](https://www.emailjs.com/) • [react-toastify](https://fkhadra.github.io/react-toastify/) • [react-typing-effect](https://www.npmjs.com/package/react-typing-effect) |
| **Tooling & Quality** | ESLint 9 (Flat Config) • PostCSS • Autoprefixer |

---

## 📁 Repository Structure

```plaintext
Rakshit-Portfolio-Website/
├── public/                     # Static public assets
├── src/
│   ├── assets/                 # Tech logos, project banners, institutional badges, portrait
│   │   ├── company_logo/       # IIIT Allahabad, Elevance Skills, Liftoff
│   │   ├── education_logo/     # SRMIST, GRM School
│   │   ├── tech_logo/          # Language, framework, and tool icons
│   │   └── work_logo/          # Project visual assets
│   ├── components/
│   │   ├── About/              # Hero bio, status beacon, 3D aperture frame
│   │   ├── Achievements/       # Verified impact cards (Award, DSA 200+, 138th Rank)
│   │   ├── Contact/            # High-tech interactive contact console
│   │   ├── Education/          # Academic credentials and timeline
│   │   ├── Experience/         # Professional internship timeline
│   │   ├── Footer/             # Brand signature and verified social links
│   │   ├── Navbar/             # Fixed glass navbar with scroll-spy & mobile drawer
│   │   ├── Skills/             # SYS-01 to SYS-05 capability matrix
│   │   └── Work/               # Horizontal project showcase panels
│   ├── App.jsx                 # Compositional layout, dual-plane skybox & ambient fields
│   ├── constants.js            # Structured portfolio data (projects, skills, achievements, timeline)
│   ├── index.css               # Design system tokens, keyframes, utilities, grids
│   └── main.jsx                # Application root entrypoint
├── index.html                  # HTML5 template with Google Fonts preconnect
├── package.json                # Project dependencies and script definitions
├── tailwind.config.js          # Custom theme extensions, fonts, and animation timings
├── vite.config.js              # Vite configuration with React plugin
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run the portfolio locally on your machine:

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or `pnpm` / `yarn`)

### 1. Clone the Repository
```bash
git clone https://github.com/Rakshit412005/Rakshit-Portfolio-Website.git
cd Rakshit-Portfolio-Website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables (Optional)
To enable real-time message forwarding from the Contact Console, create a `.env` file in the project root:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Launch Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 5. Build for Production
To generate a fully minified, hardware-optimized production build:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

### 6. Linting
```bash
npm run lint
```

---

## 🌐 Connect & Collaborate

I am actively exploring **Full-Time Software Engineering**, **AI/ML**, and **Systems Architecture** roles. Let's build something impactful together!

- **LinkedIn**: [linkedin.com/in/rakshit-kumar07](https://www.linkedin.com/in/rakshit-kumar07)
- **GitHub**: [github.com/Rakshit412005](https://github.com/Rakshit412005)
- **Codolio**: [codolio.com/profile/rakshit07](https://codolio.com/profile/rakshit07)
- **Instagram**: [@ig_rakshit07](https://www.instagram.com/ig_rakshit07/)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE) — feel free to explore, learn, and use elements with attribution.

<div align="center">
  <sub>Designed & Developed with high engineering rigor by <strong>Rakshit Kumar</strong> • Built with React, Vite & Tailwind CSS</sub>
</div>
