import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-[#030014] text-white min-h-screen relative overflow-x-hidden selection:bg-purple-600 selection:text-white">

      {/* ── Atmospheric Layer 1: Floating Primary Violet Nebula Orb ── */}
      <div
        className="fixed top-[-10%] left-[-5%] w-[800px] h-[750px]
          bg-gradient-to-br from-violet-600/18 via-purple-700/12 to-transparent
          rounded-full blur-[140px] pointer-events-none -z-10
          animate-float-orb-1 will-change-transform"
      />

      {/* ── Atmospheric Layer 2: Cyber-Cyan Counter-Aura (Hero Profile Glow) ── */}
      <div
        className="fixed top-[5%] right-[-8%] w-[680px] h-[680px]
          bg-gradient-to-bl from-cyan-500/14 via-indigo-600/10 to-transparent
          rounded-full blur-[130px] pointer-events-none -z-10
          animate-float-orb-2 will-change-transform"
      />

      {/* ── Atmospheric Layer 3: Mid-page Deep Indigo Atmosphere ── */}
      <div
        className="fixed top-[45%] left-[20%] w-[900px] h-[600px]
          bg-gradient-to-r from-purple-900/12 via-indigo-950/16 to-transparent
          rounded-full blur-[160px] pointer-events-none -z-10"
      />

      {/* ── Atmospheric Layer 4: Lower Section Accent ── */}
      <div
        className="fixed bottom-[-10%] right-[10%] w-[700px] h-[700px]
          bg-gradient-to-t from-violet-900/14 via-purple-950/10 to-transparent
          rounded-full blur-[150px] pointer-events-none -z-10"
      />

      {/* ── Atmospheric Layer 5: High-Tech Architectural Grid Matrix ── */}
      <div
        className="fixed inset-0
          bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)]
          bg-[size:44px_44px]
          [mask-image:radial-gradient(ellipse_85%_65%_at_50%_15%,#000_65%,transparent_100%)]
          pointer-events-none -z-10"
      />

      {/* ── Atmospheric Layer 6: Film Grain / Noise Overlay ── */}
      <div className="fixed inset-0 bg-noise pointer-events-none -z-10 opacity-70 mix-blend-screen" />

      {/* ── Atmospheric Layer 7: Micro Scanline Texture ── */}
      <div
        className="fixed inset-0
          bg-[repeating-linear-gradient(to_bottom,transparent,transparent_3px,rgba(255,255,255,0.007)_3px,rgba(255,255,255,0.007)_4px)]
          pointer-events-none -z-10"
      />

      {/* ── Main Portfolio Application ── */}
      <div className="relative pt-20">
        <Navbar />
        <main>
          <About />
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
