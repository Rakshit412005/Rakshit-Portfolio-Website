import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-[#02000e] text-white min-h-screen relative overflow-x-hidden selection:bg-purple-600 selection:text-white">

      {/* ─────────────────────────────────────────────────────────
          PLANE 1: FIXED SKYBOX & DEEP SPACE ENVIRONMENT
      ───────────────────────────────────────────────────────── */}

      {/* Cinematic Peripheral Vignette: Edge shadow drawing visual focus toward content */}
      <div className="fixed inset-0 vignette-radial pointer-events-none -z-30" />

      {/* Hardware-Accelerated Film Grain Overlay: Eliminates digital color banding */}
      <div className="fixed inset-0 bg-noise pointer-events-none -z-28 opacity-65 mix-blend-screen" />

      {/* Architectural Perspective Grid Matrix */}
      <div className="fixed inset-0 perspective-grid pointer-events-none -z-25" />

      {/* Sparse Deep-Space Telemetry Coordinates (Fixed subtle starlight points) */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[12%] left-[8%] w-1 h-1 rounded-full bg-cyan-400/60 animate-starlight-1" />
        <div className="absolute top-[22%] right-[14%] w-1 h-1 rounded-full bg-purple-400/60 animate-starlight-2" />
        <div className="absolute top-[35%] left-[24%] w-1.5 h-1.5 rounded-full bg-indigo-300/50 animate-starlight-3" />
        <div className="absolute top-[48%] right-[8%] w-1 h-1 rounded-full bg-cyan-300/50 animate-starlight-1" />
        <div className="absolute top-[62%] left-[12%] w-1 h-1 rounded-full bg-purple-300/60 animate-starlight-2" />
        <div className="absolute top-[75%] right-[22%] w-1.5 h-1.5 rounded-full bg-violet-400/50 animate-starlight-3" />
        <div className="absolute top-[88%] left-[18%] w-1 h-1 rounded-full bg-cyan-400/50 animate-starlight-1" />
        <div className="absolute top-[18%] left-[78%] w-1 h-1 rounded-full bg-white/40 animate-starlight-2" />
        <div className="absolute top-[42%] left-[6%] w-1 h-1 rounded-full bg-indigo-400/40 animate-starlight-3" />
        <div className="absolute top-[82%] right-[12%] w-1 h-1 rounded-full bg-purple-400/50 animate-starlight-1" />
      </div>

      {/* ─────────────────────────────────────────────────────────
          PLANE 2: SECTION-ANCHORED ATMOSPHERIC ARCHITECTURE
          (Positioned in flow so lighting travels with each section)
      ───────────────────────────────────────────────────────── */}
      <div className="relative pt-20">
        <Navbar />

        <main>
          {/* ── 1. HERO ENVIRONMENT & ORBITAL SIGNATURE ── */}
          <div className="relative">
            {/* Hero Left: Large Deep Violet/Indigo Bloom */}
            <div
              className="absolute top-[-10%] left-[-10%] w-[65vw] max-w-[850px] h-[80vh]
                bg-gradient-to-br from-violet-600/16 via-indigo-900/10 to-transparent
                rounded-full blur-[120px] pointer-events-none -z-10 animate-aurora-pulse"
              aria-hidden="true"
            />

            {/* Hero Right: Cyber-Cyan Counter-Aura behind Portrait */}
            <div
              className="absolute top-[5%] right-[-5%] w-[55vw] max-w-[750px] h-[80vh]
                bg-gradient-to-bl from-cyan-500/12 via-sky-900/8 to-transparent
                rounded-full blur-[110px] pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* VISUAL SIGNATURE: Architectural Orbital Telemetry Arc */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[48%] w-[1150px] h-[1150px] pointer-events-none -z-10 animate-orbital-drift opacity-45 hidden md:block"
              aria-hidden="true"
            >
              <svg viewBox="0 0 1000 1000" className="w-full h-full" fill="none">
                <defs>
                  <linearGradient id="orbitalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="40%" stopColor="#8b5cf6" stopOpacity="0.5" />
                    <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Primary precision orbital trajectory */}
                <ellipse
                  cx="500"
                  cy="500"
                  rx="465"
                  ry="425"
                  stroke="url(#orbitalGradient)"
                  strokeWidth="1.2"
                  strokeDasharray="5 9"
                />

                {/* Secondary hairline ring with tick markers */}
                <ellipse
                  cx="500"
                  cy="500"
                  rx="490"
                  ry="450"
                  stroke="rgba(139, 92, 246, 0.22)"
                  strokeWidth="0.8"
                  strokeDasharray="1 18"
                />

                {/* Telemetry Coordinate Points on Orbit */}
                <circle cx="830" cy="235" r="3" fill="#06b6d4" opacity="0.8" />
                <circle cx="150" cy="630" r="2.5" fill="#a855f7" opacity="0.7" />
              </svg>
            </div>

            <About />
          </div>

          {/* ── 2. SKILLS ENVIRONMENT ── */}
          <div className="relative">
            {/* Structural Cool Indigo Ambient Field */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[1200px] h-[600px]
                bg-[radial-gradient(ellipse_75%_55%_at_50%_50%,rgba(99,102,241,0.08),rgba(6,182,212,0.03)_60%,transparent_80%)]
                pointer-events-none -z-10"
              aria-hidden="true"
            />
            <Skills />
          </div>

          {/* ── 3. EXPERIENCE ENVIRONMENT ── */}
          <div className="relative">
            {/* Focused Quiet Void with Center Conduit Trace */}
            <div
              className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70vw] max-w-[900px] h-[550px]
                bg-[radial-gradient(ellipse_65%_45%_at_50%_50%,rgba(99,102,241,0.05),transparent_75%)]
                pointer-events-none -z-10"
              aria-hidden="true"
            />
            <Experience />
          </div>

          {/* ── 4. PROJECTS ENVIRONMENT: The Presentation Stage ── */}
          <div className="relative">
            {/* Overhead Cinematic Spotlight Cone */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[95vw] max-w-[1300px] h-[800px]
                bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(168,85,247,0.14),rgba(6,182,212,0.05)_45%,transparent_75%)]
                pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* Mid-Showcase Gallery Ambient Glow */}
            <div
              className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[85vw] max-w-[1100px] h-[650px]
                bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(124,58,237,0.07),transparent_75%)]
                pointer-events-none -z-10"
              aria-hidden="true"
            />
            <Work />
          </div>

          {/* ── 5. EDUCATION ENVIRONMENT ── */}
          <div className="relative">
            <div
              className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70vw] max-w-[900px] h-[550px]
                bg-[radial-gradient(ellipse_65%_45%_at_50%_50%,rgba(6,182,212,0.04),transparent_75%)]
                pointer-events-none -z-10"
              aria-hidden="true"
            />
            <Education />
          </div>

          {/* ── 6. ACHIEVEMENTS ENVIRONMENT ── */}
          <div className="relative">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[1100px] h-[500px]
                bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(139,92,246,0.06),rgba(6,182,212,0.03)_55%,transparent_75%)]
                pointer-events-none -z-10"
              aria-hidden="true"
            />
            <Achievements />
          </div>

          {/* ── 7. CONTACT ENVIRONMENT: The Planetary Horizon ── */}
          <div className="relative">
            {/* Horizon Glow Line & Atmosphere */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1150px] h-[450px]
                bg-[radial-gradient(ellipse_85%_45%_at_50%_15%,rgba(139,92,246,0.12),rgba(6,182,212,0.05)_50%,transparent_75%)]
                pointer-events-none -z-10"
              aria-hidden="true"
            />
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
