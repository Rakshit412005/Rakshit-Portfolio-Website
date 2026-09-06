/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { education } from "../../constants";

function useInView(threshold = 0.12) {
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
      <p className="section-label mb-3">Academic Background</p>
      <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
        Education &amp; <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Academics</span>
      </h2>
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4" />
      <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
        My academic foundation and educational milestones in Computer Science Engineering.
      </p>
    </div>
  );
};

const EducationCard = ({ edu, index }) => {
  const [ref, inView] = useInView(0.1);
  const isEven = index % 2 === 0;
  const num = String(index + 1).padStart(2, "0");

  return (
    <div ref={ref} className="relative flex items-start md:justify-between">
      {/* Timeline Node */}
      <div
        className={`absolute left-6 md:left-1/2 -translate-x-1/2 z-10
          transition-all duration-700
          ${inView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
        style={{ transitionDelay: `${index * 110 + 100}ms` }}
      >
        <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-glow-ring" />
        <div className="w-11 h-11 rounded-full
          bg-gradient-to-br from-[#0c0824] to-[#13093a]
          border-2 border-purple-500/60
          shadow-lg shadow-purple-950
          flex items-center justify-center">
          <img
            src={edu.img}
            alt={edu.school}
            className="w-6 h-6 object-contain rounded-full"
          />
        </div>
      </div>

      {/* Card */}
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
        style={{ transitionDelay: `${index * 110}ms` }}
      >
        <div className="relative bg-slate-900/55 backdrop-blur-xl
          border border-white/[0.08] hover:border-purple-500/40
          rounded-2xl p-5 sm:p-6
          shadow-xl shadow-black/30
          hover:shadow-purple-900/20 hover:-translate-y-1
          transition-all duration-300
          shimmer-on-hover overflow-hidden">

          {/* Left accent line */}
          <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full
            bg-gradient-to-b from-transparent via-purple-500/60 to-transparent" />

          {/* Number badge */}
          <span className="absolute top-4 right-4 text-xs font-mono text-purple-500/50 select-none">
            {num}
          </span>

          {/* Header */}
          <div className="flex flex-col gap-1 mb-3 pr-8">
            <h3 className="section-title text-base sm:text-lg font-bold text-white leading-tight">
              {edu.degree}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-purple-300">
                {edu.school}
              </span>
              <span className="text-xs font-mono text-purple-300/70
                bg-purple-950/50 border border-purple-800/40
                px-2.5 py-0.5 rounded-full">
                {edu.date}
              </span>
            </div>
          </div>

          {/* Grade */}
          <div className="inline-flex items-center gap-1.5
            bg-gradient-to-r from-emerald-950/60 to-teal-950/40
            border border-emerald-500/30
            text-emerald-300 text-xs font-semibold
            px-3 py-1 rounded-full mb-3">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            {edu.grade}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed line-clamp-3">
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
      className="py-20 lg:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative"
    >
      <SectionHeader />

      <div className="relative">
        {/* Timeline Line */}
        <div
          ref={lineRef}
          className={`absolute left-6 md:left-1/2 top-0 bottom-0 w-px
            bg-gradient-to-b from-purple-500/5 via-purple-500/50 to-purple-500/5
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
