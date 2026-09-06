/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { education } from "../../constants";

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
      <p className="section-label mb-3">{"// ACADEMIC TELEMETRY & FOUNDATION"}</p>
      <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
        Education &amp;{" "}
        <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-400 bg-clip-text text-transparent">
          Academic Credentials
        </span>
      </h2>
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4" />
      <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
        Rigorous engineering coursework, foundational computer science fundamentals, and academic excellence.
      </p>
    </div>
  );
};

const EducationCard = ({ edu, index }) => {
  const [ref, inView] = useInView(0.1);
  const isEven = index % 2 === 0;
  const num = String(index + 1).padStart(2, "0");
  const isDegree = edu.id === 1; // SRMIST B.Tech

  return (
    <div ref={ref} className="relative flex items-start md:justify-between">
      {/* Timeline Node Beacon */}
      <div
        className={`absolute left-6 md:left-1/2 -translate-x-1/2 z-10
          transition-all duration-700 ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        style={{ transitionDelay: `${index * 100 + 100}ms` }}
      >
        <div className="relative">
          <div className="absolute -inset-1.5 rounded-full bg-cyan-500/20 animate-pulse-halo" />
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full
            bg-gradient-to-br from-[#0c0828] via-[#140b3c] to-[#08041a]
            border-2 border-cyan-400/60 shadow-xl shadow-purple-950
            flex items-center justify-center relative z-10">
            <img
              src={edu.img}
              alt={edu.school}
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-full filter drop-shadow"
            />
          </div>
        </div>
      </div>

      {/* Education Content Card */}
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
          className={`tech-card rounded-2xl p-6 sm:p-7
            border ${isDegree ? "border-cyan-500/30 hover:border-cyan-400/50" : "border-white/[0.08] hover:border-purple-500/40"}
            shadow-xl shadow-black/40 hover:shadow-cyan-950/20
            transition-all duration-300 relative group overflow-hidden`}
        >
          {/* Top hairline */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500/40 via-purple-400/50 to-transparent" />

          {/* Number badge */}
          <span className="absolute top-5 right-5 font-mono text-xs text-slate-500 select-none">
            {num} {"//"}
          </span>

          {/* Degree & School */}
          <div className="flex flex-col gap-1 mb-3 pr-10">
            <h3 className="section-title text-base sm:text-lg font-bold text-white leading-snug group-hover:text-cyan-200 transition-colors">
              {edu.degree}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-0.5">
              <span className="text-sm font-semibold text-purple-300">
                {edu.school}
              </span>
              <span className="font-mono text-xs text-slate-400 bg-white/[0.04] border border-white/[0.08] px-2.5 py-0.5 rounded-full">
                {edu.date}
              </span>
            </div>
          </div>

          {/* Grade Telemetry Badge */}
          <div className="mb-4">
            <span
              className={`inline-flex items-center gap-2 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg border ${
                isDegree
                  ? "bg-cyan-950/50 border-cyan-500/40 text-cyan-300 shadow-sm shadow-cyan-900/30"
                  : "bg-emerald-950/50 border-emerald-500/30 text-emerald-300"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Score: {edu.grade}</span>
              {isDegree && <span className="text-[10px] text-cyan-400/80 uppercase font-mono ml-1">{"// Top Percentile"}</span>}
            </span>
          </div>

          {/* Narrative */}
          <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed">
            {edu.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const [lineRef, lineInView] = useInView(0.05);

  return (
    <section
      id="education"
      className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
    >
      <SectionHeader />

      <div className="relative">
        {/* Timeline Conduit */}
        <div
          ref={lineRef}
          className={`absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px]
            bg-gradient-to-b from-cyan-500/20 via-purple-500/60 to-purple-500/20
            -translate-x-1/2 origin-top
            transition-all duration-1000
            ${lineInView ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
        />

        <div className="space-y-14 sm:space-y-20">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
