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
    { value: "2+",  label: "Internships" },
    { value: "5+",  label: "Projects" },
    { value: "9.2", label: "CGPA" },
    { value: "1",   label: "Award of Excellence" },
  ];

  return (
    <section
      id="about"
      className="min-h-[calc(100vh-5rem)] flex items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
    >
      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-12 lg:gap-16">

        {/* ── Left: Bio & Actions ── */}
        <div className="w-full md:w-3/5 text-center md:text-left flex flex-col items-center md:items-start">

          {/* Status Badge */}
          <div className="animate-fade-slide-up delay-100
            inline-flex items-center gap-2.5 px-4 py-1.5 mb-7
            rounded-full bg-emerald-950/50 border border-emerald-500/30
            text-emerald-300 text-xs sm:text-sm font-medium
            shadow-sm shadow-emerald-900/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Opportunities &bull; SDE, AI/ML &amp; Full-Stack</span>
          </div>

          {/* Greeting */}
          <p className="animate-fade-slide-up delay-150
            text-sm sm:text-base font-mono tracking-widest text-purple-400/80 mb-2">
            Hi, I&apos;m
          </p>

          {/* Main Name Heading */}
          <h1 className="animate-fade-slide-up delay-200
            section-title text-5xl sm:text-6xl lg:text-7xl mb-5 leading-none">
            <span className="bg-gradient-to-br from-white via-slate-100 to-purple-300
              bg-clip-text text-transparent">
              Rakshit Kumar
            </span>
          </h1>

          {/* Typing Role */}
          <div className="animate-fade-slide-up delay-300
            flex flex-wrap items-center justify-center md:justify-start gap-2 mb-7
            text-lg sm:text-xl font-medium text-gray-300">
            <span className="text-gray-400 font-light">I specialize in</span>
            <span className="text-purple-400 font-mono">
              <ReactTypingEffect
                text={[
                  'Fullstack Development',
                  'AI/ML Engineering',
                  'Edge AI & Vision',
                  'Scalable Web Systems',
                ]}
                speed={75}
                eraseSpeed={40}
                typingDelay={400}
                eraseDelay={2200}
                cursorRenderer={(cursor) => (
                  <span className="text-purple-400" style={{ animation: 'blink 1s step-end infinite' }}>
                    {cursor}
                  </span>
                )}
              />
            </span>
          </div>

          {/* About Paragraph */}
          <p className="animate-fade-slide-up delay-400
            text-sm sm:text-base text-slate-300/80 mb-8 max-w-xl leading-relaxed
            text-center md:text-left">
            Final-year Computer Science engineer with hands-on experience in AI/ML,
            Edge&nbsp;AI, and full-stack development. I build intelligent applications
            using computer vision &amp; LLMs, and develop scalable web solutions using
            the MERN stack — focused on end-to-end, production-quality software.
          </p>

          {/* Stats Row */}
          <div className="animate-fade-slide-up delay-500
            flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mb-9 w-full">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center md:items-start">
                <span className="section-title text-2xl sm:text-3xl font-bold
                  bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 mt-0.5 tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-slide-up delay-600
            flex flex-wrap items-center justify-center md:justify-start gap-4 w-full sm:w-auto">
            <a
              href="https://drive.google.com/file/d/1RF_n1jv5ql9DWgYzwQnZ5ZVwlHo0jKJo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5
                rounded-full text-sm font-semibold text-white
                bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600
                bg-[length:200%_auto] hover:bg-right
                shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50
                hover:scale-[1.03] active:scale-[0.98]
                border border-purple-400/30
                transition-all duration-300
                focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5
                rounded-full text-sm font-medium text-slate-300 hover:text-white
                bg-white/[0.04] hover:bg-white/[0.08]
                border border-white/10 hover:border-purple-500/40
                transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            >
              <span>View Projects</span>
              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Right: Profile Photo ── */}
        <div className="animate-fade-in delay-300 w-full md:w-2/5 flex justify-center md:justify-end">
          <div className="relative group">

            {/* Outer slow-spinning gradient ring */}
            <div className="absolute -inset-3 rounded-full opacity-60
              bg-gradient-to-r from-purple-500 via-cyan-400 to-indigo-500
              blur-md animate-spin-slow group-hover:opacity-90
              transition-opacity duration-500 -z-10" />

            {/* Ambient Aura */}
            <div className="absolute -inset-6
              bg-gradient-to-tr from-purple-600/30 via-fuchsia-500/15 to-cyan-400/15
              rounded-full blur-3xl opacity-70 group-hover:opacity-100
              transition-opacity duration-500 -z-20" />

            {/* Tilt Image Frame */}
            <Tilt
              className="w-52 h-52 sm:w-64 sm:h-64 lg:w-76 lg:h-76 rounded-full p-[3px]
                bg-gradient-to-b from-white/20 via-purple-500/25 to-white/5
                border border-white/20 shadow-2xl shadow-purple-950/70
                animate-glow-ring"
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={1000}
              scale={1.04}
              transitionSpeed={900}
              gyroscope={false}
            >
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={profileImage}
                  alt="Rakshit Kumar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </Tilt>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
