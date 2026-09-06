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

      {/* ── Compositional Atmospheric Lighting Architecture ── */}
      {/* Hero Lighting: Asymmetric Violet Bloom (Left) */}
      <div
        className="fixed top-0 left-0 w-[55vw] h-[65vh] pointer-events-none -z-10"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 20% 20%, rgba(139, 92, 246, 0.12), transparent 70%)",
        }}
      />

      {/* Hero Lighting: Restrained Cyber-Cyan Counter-Aura behind Profile (Right) */}
      <div
        className="fixed top-0 right-0 w-[50vw] h-[65vh] pointer-events-none -z-10"
        style={{
          background: "radial-gradient(ellipse 65% 55% at 80% 25%, rgba(6, 182, 212, 0.08), transparent 70%)",
        }}
      />

      {/* Skills Lighting: Structural Indigo Ambient Field */}
      <div
        className="fixed top-[28vh] left-1/2 -translate-x-1/2 w-[85vw] h-[55vh] pointer-events-none -z-10"
        style={{
          background: "radial-gradient(ellipse 65% 45% at 50% 50%, rgba(99, 102, 241, 0.06), transparent 75%)",
        }}
      />

      {/* Projects Lighting: Dedicated Showcase Spotlight Field */}
      <div
        className="fixed top-[52vh] left-1/2 -translate-x-1/2 w-[90vw] h-[65vh] pointer-events-none -z-10"
        style={{
          background: "radial-gradient(ellipse 75% 50% at 50% 50%, rgba(168, 85, 247, 0.07), transparent 75%)",
        }}
      />

      {/* Lower Section Lighting: Deep Violet Ambient Fadeout */}
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[45vh] pointer-events-none -z-10"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 85%, rgba(124, 58, 237, 0.05), transparent 70%)",
        }}
      />

      {/* ── High-Tech Architectural Grid Matrix ── */}
      <div
        className="fixed inset-0 pointer-events-none -z-10
          bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)]
          bg-[size:48px_48px]
          [mask-image:radial-gradient(ellipse_85%_70%_at_50%_25%,#000_50%,transparent_100%)]"
      />

      {/* ── Cinematic Noise / Film Grain Layer ── */}
      <div className="fixed inset-0 bg-noise pointer-events-none -z-10 opacity-60 mix-blend-screen" />

      {/* ── Subtle Micro-Scanline Texture ── */}
      <div
        className="fixed inset-0 pointer-events-none -z-10
          bg-[repeating-linear-gradient(to_bottom,transparent,transparent_3px,rgba(255,255,255,0.005)_3px,rgba(255,255,255,0.005)_4px)]"
      />

      {/* ── Main Application ── */}
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
