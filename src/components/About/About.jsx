import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  const handleScrollToWork = (e) => {
    e.preventDefault();
    const el = document.getElementById("work");
    if (el) {
      const navHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const stats = [
    { value: "2+",   label: "Internships",        sub: "IIIT-A & Elevance" },
    { value: "5+",   label: "Production Systems", sub: "Full-Stack & AI" },
    { value: "9.20", label: "CGPA Academic",      sub: "B.Tech CSE @ SRM" },
    { value: "1",    label: "Award of Excellence",sub: "R&D Recognition" },
  ];

  return (
    <section
      id="about"
      className="min-h-[calc(100vh-5rem)] flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20"
    >
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:gap-14 xl:gap-20">

        {/* ── Left Column: Engineering Bio, Telemetry & Actions ── */}
        <div className="w-full lg:w-[57%] text-center lg:text-left flex flex-col items-center lg:items-start">

          {/* Status Telemetry Pill */}
          <div className="animate-fade-slide-up delay-100
            inline-flex items-center gap-2.5 px-4 py-1.5 mb-6
            rounded-full bg-emerald-950/40 border border-emerald-500/30
            text-emerald-300 text-xs sm:text-sm font-medium
            shadow-lg shadow-emerald-950/40 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-wide">Available for Roles &bull; AI/ML, Edge AI &amp; Full-Stack</span>
          </div>

          {/* Subsystem Header Monospace */}
          <p className="animate-fade-slide-up delay-150
            text-xs sm:text-sm font-mono tracking-widest text-purple-400/90 uppercase mb-2">
            {"// Software & AI Systems Engineer"}
          </p>

          {/* Main Name Heading */}
          <h1 className="animate-fade-slide-up delay-200
            section-title text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-white via-slate-100 to-purple-200 bg-clip-text text-transparent">
              Rakshit
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-300 via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
              Kumar
            </span>
          </h1>

          {/* Dynamic Technical Specialty */}
          <div className="animate-fade-slide-up delay-300
            flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6
            text-lg sm:text-xl lg:text-2xl font-medium text-slate-200">
            <span className="text-slate-400 font-light">Architecting</span>
            <span className="font-mono text-purple-300 font-semibold">
              <ReactTypingEffect
                text={[
                  'Full-Stack Web Architectures',
                  'Edge-AI & Computer Vision',
                  'LLM Pipelines & Evaluation',
                  'Real-Time Distributed Systems',
                ]}
                speed={70}
                eraseSpeed={40}
                typingDelay={400}
                eraseDelay={2200}
                cursorRenderer={(cursor) => (
                  <span className="text-cyan-400 font-normal" style={{ animation: 'blink 1s step-end infinite' }}>
                    {cursor}
                  </span>
                )}
              />
            </span>
          </div>

          {/* Bio Narrative */}
          <p className="animate-fade-slide-up delay-400
            text-sm sm:text-base text-slate-300/85 mb-8 max-w-2xl leading-relaxed
            text-center lg:text-left">
            Final-year Computer Science engineer specializing in production AI/ML,
            Edge&nbsp;AI on embedded hardware, and high-performance full-stack systems.
            Experienced in optimizing multimodal LLM pipelines, real-time computer vision,
            and scalable MERN architectures with strong engineering rigor.
          </p>

          {/* Verified Technical Telemetry Row */}
          <div className="animate-fade-slide-up delay-500
            grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-9 w-full max-w-2xl">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="relative tech-card p-3.5 sm:p-4 rounded-xl
                  border border-white/[0.07] hover:border-purple-500/30
                  flex flex-col items-center lg:items-start transition-all"
              >
                <div className="absolute top-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
                <span className="section-title text-2xl sm:text-3xl font-bold
                  bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-slate-200 mt-1 tracking-tight">
                  {stat.label}
                </span>
                <span className="text-[10px] font-mono text-purple-400/70 mt-0.5">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Action Buttons */}
          <div className="animate-fade-slide-up delay-600
            flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
            <a
              href="https://drive.google.com/file/d/1RF_n1jv5ql9DWgYzwQnZ5ZVwlHo0jKJo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5
                rounded-full text-sm font-semibold text-white
                bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600
                bg-[length:200%_auto] hover:bg-right
                shadow-xl shadow-purple-900/40 hover:shadow-purple-700/60
                hover:scale-[1.02] active:scale-[0.98]
                border border-purple-400/40
                transition-all duration-300
                focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400
                shimmer-on-hover"
            >
              <svg className="w-4 h-4 text-purple-200 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </a>

            <a
              href="#work"
              onClick={handleScrollToWork}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5
                rounded-full text-sm font-medium text-slate-300 hover:text-white
                bg-white/[0.04] hover:bg-white/[0.08]
                border border-white/10 hover:border-cyan-500/40
                shadow-lg shadow-black/40
                transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Explore Projects</span>
              <svg className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Right Column: High-Impact Prominent Profile with Dual Orbital Halo ── */}
        <div className="animate-fade-in delay-300 w-full lg:w-[43%] flex justify-center lg:justify-end">
          <div className="relative group">

            {/* Ambient Deep Atmospheric Aura */}
            <div className="absolute -inset-10 sm:-inset-14
              bg-gradient-to-tr from-purple-600/30 via-indigo-600/20 to-cyan-400/25
              rounded-full blur-3xl opacity-75 group-hover:opacity-100
              animate-pulse-halo transition-opacity duration-700 -z-20 pointer-events-none" />

            {/* Outer Slow-Spinning Conic Gradient Orbital Halo */}
            <div className="absolute -inset-4 sm:-inset-5 rounded-full
              bg-[conic-gradient(from_0deg,#a855f7,#06b6d4,#6366f1,#c084fc,#a855f7)]
              opacity-75 blur-md animate-spin-slow group-hover:opacity-100
              transition-opacity duration-500 -z-10" />

            {/* Secondary Counter-Rotating Subtle Cyan/Purple Tech Ring */}
            <div className="absolute -inset-2 rounded-full
              border border-cyan-400/40 border-dashed animate-spin-reverse-slow
              pointer-events-none -z-5" />

            {/* Prominent Profile Frame with 3D Parallax Tilt */}
            <Tilt
              className="w-72 h-72 sm:w-84 sm:h-84 md:w-[360px] md:h-[360px] lg:w-[390px] lg:h-[390px] xl:w-[420px] xl:h-[420px]
                rounded-full p-[4px]
                bg-gradient-to-b from-white/30 via-purple-500/30 to-cyan-500/20
                shadow-2xl shadow-purple-950/80
                relative cursor-pointer"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1100}
              scale={1.03}
              transitionSpeed={900}
              gyroscope={false}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0a071e] relative">
                <img
                  src={profileImage}
                  alt="Rakshit Kumar - AI & Full-Stack Engineer"
                  className="w-full h-full object-cover rounded-full filter contrast-[1.03] brightness-[1.02] transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                {/* Subtle glass reflection overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/[0.04] to-purple-400/[0.08] pointer-events-none" />
              </div>

              {/* Floating Technical Badge on Profile */}
              <div className="absolute -bottom-2 right-4 sm:right-8
                bg-[#070518]/95 border border-purple-500/40
                rounded-full px-3.5 py-1.5 shadow-xl shadow-black/80
                flex items-center gap-2 backdrop-blur-xl">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[11px] font-mono font-medium text-slate-200">
                  AI &bull; EDGE &bull; WEB
                </span>
              </div>
            </Tilt>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
