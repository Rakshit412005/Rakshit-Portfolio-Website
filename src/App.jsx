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

      {/* ── Ambient Layer 1: Top violet aura ── */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px]
        bg-gradient-to-b from-violet-800/20 via-indigo-900/12 to-transparent
        blur-[100px] pointer-events-none -z-10 animate-gradient-shift
        [background-size:200%_200%]" />

      {/* ── Ambient Layer 2: Bottom-right accent ── */}
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px]
        bg-gradient-to-tl from-purple-900/12 via-indigo-900/8 to-transparent
        rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* ── Ambient Layer 3: Mid-left counter-accent ── */}
      <div className="fixed top-1/2 -left-40 w-[500px] h-[500px]
        bg-purple-900/8 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* ── Floating Blob: Main glow blob ── */}
      <div
        className="fixed pointer-events-none -z-10 animate-blob-float"
        style={{ top: "28%", left: "22%", width: "38%", height: "38%",
          transform: "translate(-50%, -50%)" }}
      >
        <div className="w-full h-full bg-purple-600/18 rounded-full blur-[110px]" />
      </div>

      {/* ── Grid Overlay ── */}
      <div className="fixed inset-0
        bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]
        bg-[size:36px_36px]
        [mask-image:radial-gradient(ellipse_80%_60%_at_50%_10%,#000_60%,transparent_100%)]
        pointer-events-none -z-10" />

      {/* ── Subtle scanline texture ── */}
      <div className="fixed inset-0
        bg-[repeating-linear-gradient(to_bottom,transparent,transparent_3px,rgba(255,255,255,0.009)_3px,rgba(255,255,255,0.009)_4px)]
        pointer-events-none -z-10" />

      {/* ── Content ── */}
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
