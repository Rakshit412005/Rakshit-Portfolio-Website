/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

// Subsystem metadata and domain accents
const domainMetadata = {
  "AI/ML": {
    code: "SYS-01 // INTELLIGENT_SYSTEMS",
    sub: "Deep Learning, Computer Vision, Model Inference & Analysis",
    accentGlow: "group-hover:shadow-[0_0_20px_rgba(217,70,239,0.25)]",
    borderHover: "hover:border-fuchsia-500/40",
    tileHover: "hover:border-fuchsia-500/40 hover:bg-fuchsia-950/20 hover:text-fuchsia-200",
    topBar: "from-fuchsia-500 via-purple-500 to-cyan-500",
    badge: "bg-fuchsia-950/50 text-fuchsia-300 border-fuchsia-700/30",
    dot: "bg-fuchsia-400",
  },
  "Backend": {
    code: "SYS-02 // DISTRIBUTED_BACKEND_APIS",
    sub: "RESTful Services, Authentication, Relational & NoSQL Datastores",
    accentGlow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]",
    borderHover: "hover:border-emerald-500/40",
    tileHover: "hover:border-emerald-500/40 hover:bg-emerald-950/20 hover:text-emerald-200",
    topBar: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "bg-emerald-950/50 text-emerald-300 border-emerald-700/30",
    dot: "bg-emerald-400",
  },
  "Frontend": {
    code: "SYS-03 // REACTIVE_CLIENT_SYSTEMS",
    sub: "Reactive UI, Component Systems, State Management & WebSockets",
    accentGlow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]",
    borderHover: "hover:border-cyan-500/40",
    tileHover: "hover:border-cyan-500/40 hover:bg-cyan-950/20 hover:text-cyan-200",
    topBar: "from-cyan-500 via-blue-500 to-indigo-500",
    badge: "bg-cyan-950/50 text-cyan-300 border-cyan-700/30",
    dot: "bg-cyan-400",
  },
  "Languages": {
    code: "SYS-04 // CORE_LANGUAGES_COMPUTE",
    sub: "Compiled Systems, Dynamic Scripting & Algorithmic Problem Solving",
    accentGlow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]",
    borderHover: "hover:border-amber-500/40",
    tileHover: "hover:border-amber-500/40 hover:bg-amber-950/20 hover:text-amber-200",
    topBar: "from-amber-500 via-orange-500 to-yellow-500",
    badge: "bg-amber-950/50 text-amber-300 border-amber-700/30",
    dot: "bg-amber-400",
  },
  "Tools": {
    code: "SYS-05 // DEVOPS_HARDWARE_TOOLING",
    sub: "Containerization, Edge Hardware, Version Control & CI/CD",
    accentGlow: "group-hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]",
    borderHover: "hover:border-violet-500/40",
    tileHover: "hover:border-violet-500/40 hover:bg-violet-950/20 hover:text-violet-200",
    topBar: "from-violet-500 via-purple-500 to-indigo-500",
    badge: "bg-violet-950/50 text-violet-300 border-violet-700/30",
    dot: "bg-violet-400",
  },
};

const defaultDomain = {
  code: "SYS-00 // TECHNICAL_MODULE",
  sub: "Production Engineering & Architecture",
  accentGlow: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]",
  borderHover: "hover:border-purple-500/40",
  tileHover: "hover:border-purple-500/40 hover:bg-purple-950/20 hover:text-purple-200",
  topBar: "from-purple-500 to-indigo-500",
  badge: "bg-purple-950/50 text-purple-300 border-purple-700/30",
  dot: "bg-purple-400",
};

// Intersection-observer hook
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
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
    <div
      ref={ref}
      className={`text-center mb-16 sm:mb-20 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <p className="section-label mb-3">{"// TECHNICAL CAPABILITY MATRIX"}</p>
      <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
        Engineering &amp;{" "}
        <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-400 bg-clip-text text-transparent">
          Capability System
        </span>
      </h2>
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4" />
      <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
        Production-tested technologies across machine learning, scalable backend services,
        reactive web platforms, and embedded edge systems.
      </p>
    </div>
  );
};

const CapabilityModule = ({ category, index }) => {
  const [ref, inView] = useInView(0.08);
  const meta = domainMetadata[category.title] || defaultDomain;
  const isAIML = category.title === "AI/ML";

  return (
    <div
      ref={ref}
      className={`w-full ${isAIML ? "md:col-span-2" : ""}
        transition-all duration-700
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <Tilt
        tiltMaxAngleX={4}
        tiltMaxAngleY={4}
        perspective={1200}
        scale={1.01}
        transitionSpeed={1000}
        gyroscope={false}
        className="h-full"
      >
        <div
          className={`h-full relative tech-card p-6 sm:p-7 rounded-2xl
            border border-white/[0.08] ${meta.borderHover}
            ${meta.accentGlow}
            transition-all duration-300 overflow-hidden group`}
        >
          {/* Top illuminated hairline */}
          <div
            className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl
              bg-gradient-to-r ${meta.topBar}`}
          />

          {/* Module Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-5 border-b border-white/[0.06]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`w-2 h-2 rounded-full ${meta.dot} shadow-md`} />
                <span className="font-mono text-[11px] tracking-wider text-slate-400">
                  {meta.code}
                </span>
              </div>
              <h3 className="section-title text-lg sm:text-xl font-bold text-white tracking-tight">
                {category.title}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 font-light">
                {meta.sub}
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-center">
              <span
                className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${meta.badge}`}
              >
                {category.skills.length} Technologies
              </span>
            </div>
          </div>

          {/* Capability Tiles Grid */}
          <div
            className={`grid gap-2.5 ${
              isAIML
                ? "grid-cols-2 sm:grid-cols-4 lg:grid-cols-4"
                : "grid-cols-2 sm:grid-cols-3"
            }`}
          >
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className={`relative flex items-center gap-2.5 px-3 py-2.5
                  bg-slate-950/60 border border-white/[0.06]
                  ${meta.tileHover}
                  rounded-xl transition-all duration-200 cursor-default group/tile`}
              >
                {/* Tech Logo Plate with Ambient Glow */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0 p-1 group-hover/tile:scale-105 transition-transform">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} icon`}
                    className="w-full h-full object-contain filter drop-shadow"
                    loading="lazy"
                  />
                </div>

                {/* Skill Name */}
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover/tile:text-white truncate transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider group-hover/tile:text-slate-400">
                    Active Stack
                  </span>
                </div>
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
    className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
  >
    {/* Background localized aura for Skills section */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-purple-600/6 rounded-full blur-[140px] pointer-events-none -z-10" />

    <SectionHeader />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
      {SkillsInfo.map((category, idx) => (
        <CapabilityModule key={category.title} category={category} index={idx} />
      ))}
    </div>
  </section>
);

export default Skills;
