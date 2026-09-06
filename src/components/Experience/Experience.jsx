/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { experiences } from "../../constants";

// Intersection observer hook
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
    <div ref={ref} className={`text-center mb-16 sm:mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <p className="section-label mb-3">Career Journey</p>
      <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
        Work <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
      </h2>
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4" />
      <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
        A timeline of my professional roles, research internships, and technical leadership.
      </p>
    </div>
  );
};

const ExperienceCard = ({ experience, index }) => {
  const [ref, inView] = useInView(0.12);
  const isEven = index % 2 === 0;
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={ref}
      className="relative flex items-start md:justify-between"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Timeline Center Node */}
      <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 z-10
        transition-all duration-700 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
        style={{ transitionDelay: `${index * 120 + 100}ms` }}
      >
        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-full bg-purple-500/25 animate-glow-ring" />
        <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full
          bg-gradient-to-br from-[#0c0824] to-[#13093a]
          border-2 border-purple-500/60
          shadow-lg shadow-purple-950
          flex items-center justify-center">
          <img
            src={experience.img}
            alt={experience.company}
            className="w-6 h-6 sm:w-7 sm:h-7 object-contain rounded-full"
          />
        </div>
      </div>

      {/* Card Container */}
      <div
        className={`w-full ml-16 md:ml-0 md:w-[calc(50%-3rem)]
          ${isEven ? "md:mr-auto" : "md:ml-auto"}
          transition-all duration-700
          ${inView
            ? "opacity-100 translate-x-0 translate-y-0"
            : isEven
              ? "opacity-0 -translate-x-6 translate-y-4"
              : "opacity-0 translate-x-6 translate-y-4"
          }`}
        style={{ transitionDelay: `${index * 120}ms` }}
      >
        <div className="relative bg-slate-900/55 backdrop-blur-xl
          border border-white/[0.08] hover:border-purple-500/40
          rounded-2xl p-5 sm:p-6
          shadow-xl shadow-black/30
          transition-all duration-300
          hover:shadow-purple-900/20 hover:-translate-y-1
          shimmer-on-hover overflow-hidden">

          {/* Subtle left accent line */}
          <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full
            bg-gradient-to-b from-transparent via-purple-500/60 to-transparent" />

          {/* Number badge */}
          <span className="absolute top-4 right-4 text-xs font-mono text-purple-500/50 select-none">
            {num}
          </span>

          {/* Header */}
          <div className="flex flex-col gap-1 mb-3 pr-8">
            <h3 className="section-title text-lg sm:text-xl font-bold text-white leading-tight">
              {experience.role}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-purple-300">
                {experience.company}
              </span>
              <span className="text-xs font-mono text-purple-300/70
                bg-purple-950/50 border border-purple-800/40
                px-2.5 py-0.5 rounded-full">
                {experience.date}
              </span>
            </div>
          </div>

          {/* Bullet Points */}
          <ul className="list-none space-y-2 mb-5">
            {experience.desc.map((point, i) => (
              <li key={i} className="flex gap-2.5 text-xs sm:text-sm text-slate-300/85 leading-relaxed">
                <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-purple-400" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Skills */}
          <div className="pt-4 border-t border-white/[0.06]">
            <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-500 mb-2">
              Stack &amp; Skills
            </p>
            <div className="flex flex-wrap gap-1.5">
              {experience.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-purple-950/40 text-purple-200/90
                    border border-purple-800/25
                    px-2 py-0.5 text-[10px] sm:text-xs font-medium rounded-md"
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
      className="py-20 lg:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative"
    >
      <SectionHeader />

      <div className="relative">
        {/* Vertical Timeline Line with animated draw-in */}
        <div
          ref={lineRef}
          className={`absolute left-6 md:left-1/2 top-0 bottom-0 w-px
            bg-gradient-to-b from-purple-500/5 via-purple-500/50 to-purple-500/5
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