/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

// Per-category color accent system
const categoryStyles = {
  "Frontend":  { accent: "from-blue-500/40 to-cyan-400/20",   border: "hover:border-cyan-500/40",   chip: "hover:border-cyan-500/30 hover:bg-cyan-950/25 hover:text-cyan-300",   dot: "bg-cyan-400"   },
  "Backend":   { accent: "from-emerald-500/40 to-teal-400/20", border: "hover:border-emerald-500/40", chip: "hover:border-emerald-500/30 hover:bg-emerald-950/25 hover:text-emerald-300", dot: "bg-emerald-400" },
  "Languages": { accent: "from-orange-500/40 to-yellow-400/20",border: "hover:border-orange-500/40",  chip: "hover:border-orange-500/30 hover:bg-orange-950/25 hover:text-orange-300",  dot: "bg-orange-400"  },
  "Tools":     { accent: "from-violet-500/40 to-purple-400/20", border: "hover:border-violet-500/40", chip: "hover:border-violet-500/30 hover:bg-violet-950/25 hover:text-violet-300", dot: "bg-violet-400"  },
  "AI/ML":     { accent: "from-fuchsia-500/40 to-pink-400/20", border: "hover:border-fuchsia-500/40", chip: "hover:border-fuchsia-500/30 hover:bg-fuchsia-950/25 hover:text-fuchsia-300", dot: "bg-fuchsia-400" },
};
const defaultStyle = { accent: "from-purple-500/40 to-indigo-400/20", border: "hover:border-purple-500/40", chip: "hover:border-purple-500/30 hover:bg-purple-950/25 hover:text-purple-300", dot: "bg-purple-400" };

// Intersection-observer hook for viewport entrance
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const SectionHeader = () => {
  const [ref, inView] = useInView(0.2);
  return (
    <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <p className="section-label mb-3">Technical Proficiency</p>
      <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
        Skills &amp; <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
      </h2>
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4" />
      <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
        A curated set of technical skills honed through hands-on internships, research, and production projects.
      </p>
    </div>
  );
};

const SkillCard = ({ category, index }) => {
  const [ref, inView] = useInView(0.1);
  const style = categoryStyles[category.title] || defaultStyle;
  const isLastOdd = index === SkillsInfo.length - 1 && SkillsInfo.length % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`w-full ${isLastOdd ? "md:col-span-2 md:max-w-xl md:mx-auto" : ""}
        transition-all duration-700
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        perspective={1100}
        scale={1.01}
        transitionSpeed={900}
        gyroscope={false}
        className="h-full"
      >
        {/* Card */}
        <div className={`h-full relative bg-slate-900/50 backdrop-blur-xl p-6 sm:p-7
          rounded-2xl border border-white/[0.08] ${style.border}
          shadow-xl shadow-black/30
          transition-all duration-300
          shimmer-on-hover overflow-hidden`}>

          {/* Gradient top accent bar */}
          <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl
            bg-gradient-to-r ${style.accent}`} />

          {/* Card Header */}
          <div className="flex items-center gap-3 mb-5">
            <span className={`w-2 h-2 rounded-full ${style.dot} shadow-lg`} />
            <h3 className="section-title text-base sm:text-lg font-semibold text-white">
              {category.title}
            </h3>
            <span className="ml-auto text-xs text-slate-500 font-mono">
              {String(category.skills.length).padStart(2, "0")} skills
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className={`flex items-center gap-2 bg-white/[0.03] border border-white/[0.07]
                  ${style.chip}
                  rounded-xl py-2 px-3 transition-all duration-200 group`}
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-4 h-4 sm:w-5 sm:h-5 object-contain shrink-0 opacity-90 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white truncate transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const Skills = () => (
  <section
    id="skills"
    className="py-20 lg:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
  >
    <SectionHeader />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
      {SkillsInfo.map((category, idx) => (
        <SkillCard key={category.title} category={category} index={idx} />
      ))}
    </div>
  </section>
);

export default Skills;
