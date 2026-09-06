/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { experiences } from "../../constants";

// Intersection observer hook
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

// Extracted verified telemetry highlights from constants data
const experienceHighlights = {
  0: [
    { label: "Award of Excellence", isAward: true },
    { label: "13 TOPS NPU // AI HAT+", isAward: false },
    { label: "Accuracy: 52% → 84% via CoT", isAward: false },
    { label: "Phi-2 ~20s Latency Reduction", isAward: false },
  ],
  1: [
    { label: "Full-Stack Social Platform", isAward: false },
    { label: "Razorpay Payments Pipeline", isAward: false },
    { label: "Cloudinary Media Architecture", isAward: false },
  ],
  2: [
    { label: "Technical Head & Lead", isAward: false },
    { label: "Developer Mentorship & Code Reviews", isAward: false },
    { label: "Technical Workshops & Hackathons", isAward: false },
  ],
};

const SectionHeader = () => {
  const [ref, inView] = useInView(0.2);
  return (
    <div
      ref={ref}
      className={`text-center mb-16 sm:mb-20 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <p className="section-label mb-3">{"// PROFESSIONAL TRAJECTORY & R&D"}</p>
      <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
        Engineering{" "}
        <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-400 bg-clip-text text-transparent">
          Experience &amp; Leadership
        </span>
      </h2>
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4" />
      <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
        Proven track record across research &amp; development in Edge-AI, full-stack enterprise web platforms,
        and technical community leadership.
      </p>
    </div>
  );
};

const ExperienceCard = ({ experience, index }) => {
  const [ref, inView] = useInView(0.1);
  const isEven = index % 2 === 0;
  const num = String(index + 1).padStart(2, "0");
  const highlights = experienceHighlights[experience.id] || [];

  return (
    <div
      ref={ref}
      className="relative flex items-start md:justify-between"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* ── Timeline Center Node Beacon ── */}
      <div
        className={`absolute left-6 md:left-1/2 -translate-x-1/2 z-10
          transition-all duration-700 ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        style={{ transitionDelay: `${index * 100 + 100}ms` }}
      >
        <div className="relative">
          {/* Animated beacon ring */}
          <div className="absolute -inset-1.5 rounded-full bg-purple-500/30 animate-pulse-halo" />
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full
            bg-gradient-to-br from-[#0c0828] via-[#140b3c] to-[#08041a]
            border-2 border-purple-400/70 shadow-xl shadow-purple-950
            flex items-center justify-center relative z-10">
            <img
              src={experience.img}
              alt={experience.company}
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-full filter drop-shadow"
            />
          </div>
        </div>
      </div>

      {/* ── Experience Content Card ── */}
      <div
        className={`w-full ml-16 md:ml-0 md:w-[calc(50%-3.5rem)]
          ${isEven ? "md:mr-auto" : "md:ml-auto"}
          transition-all duration-700
          ${
            inView
              ? "opacity-100 translate-x-0 translate-y-0"
              : isEven
              ? "opacity-0 -translate-x-8 translate-y-4"
              : "opacity-0 translate-x-8 translate-y-4"
          }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div
          className="tech-card rounded-2xl p-6 sm:p-7
            border border-white/[0.08] hover:border-purple-500/40
            shadow-xl shadow-black/40 hover:shadow-purple-950/30
            transition-all duration-300 relative group overflow-hidden"
        >
          {/* Top hairline gradient */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/40 via-cyan-400/50 to-transparent" />

          {/* Number badge */}
          <span className="absolute top-5 right-5 font-mono text-xs text-purple-400/50 select-none">
            {num} {"//"}
          </span>

          {/* Header */}
          <div className="flex flex-col gap-1 mb-4 pr-10">
            <h3 className="section-title text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-purple-200 transition-colors">
              {experience.role}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-0.5">
              <span className="text-sm font-semibold text-purple-300">
                {experience.company}
              </span>
              <span className="font-mono text-xs text-slate-400 bg-white/[0.04] border border-white/[0.08] px-2.5 py-0.5 rounded-full">
                {experience.date}
              </span>
            </div>
          </div>

          {/* Key Impact Telemetry Badges */}
          {highlights.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5 pb-4 border-b border-white/[0.06]">
              {highlights.map((h, i) => (
                <span
                  key={i}
                  className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg border flex items-center gap-1.5 ${
                    h.isAward
                      ? "bg-amber-950/60 border-amber-500/40 text-amber-300 shadow-sm shadow-amber-900/30"
                      : "bg-purple-950/50 border-purple-500/30 text-purple-200"
                  }`}
                >
                  {h.isAward && <span>🏆</span>}
                  <span>{h.label}</span>
                </span>
              ))}
            </div>
          )}

          {/* Bullet Points */}
          <ul className="space-y-2.5 mb-5 text-xs sm:text-sm text-slate-300/90 leading-relaxed">
            {experience.desc.map((point, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-cyan-400/80" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Skills & Technologies */}
          <div className="pt-4 border-t border-white/[0.06]">
            <p className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mb-2">
              Domain Competencies
            </p>
            <div className="flex flex-wrap gap-1.5">
              {experience.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-white/[0.03] text-slate-300 border border-white/[0.07] px-2 py-0.5 text-[10px] sm:text-xs font-mono rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const [lineRef, lineInView] = useInView(0.05);

  return (
    <section
      id="experience"
      className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-[550px] h-[550px] bg-purple-600/6 rounded-full blur-[160px] pointer-events-none -z-10" />

      <SectionHeader />

      <div className="relative">
        {/* Continuous Energized Timeline Conduit */}
        <div
          ref={lineRef}
          className={`absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px]
            bg-gradient-to-b from-purple-500/20 via-purple-500/60 to-cyan-500/20
            -translate-x-1/2 origin-top
            transition-all duration-1000
            ${lineInView ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
        />

        <div className="space-y-14 sm:space-y-20">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;