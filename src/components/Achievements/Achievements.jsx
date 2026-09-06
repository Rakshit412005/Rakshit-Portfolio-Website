/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { achievements } from "../../constants";
import { FaAward, FaChartLine } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

function useInView(threshold = 0.15) {
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
      className={`text-center mb-14 sm:mb-16 lg:mb-20 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <p className="section-label mb-3">{"// RECOGNITION & BENCHMARKS"}</p>
      <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
        Verified{" "}
        <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-400 bg-clip-text text-transparent">
          Achievements
        </span>
      </h2>
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4" />
      <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
        Research honors, competitive algorithmic rankings, and institutional benchmark performance.
      </p>
    </div>
  );
};

const AchievementCard = ({ item, index }) => {
  const [ref, inView] = useInView(0.12);

  // Stylistic tokens per achievement theme
  const themeStyles = {
    amber: {
      topHairline: "from-amber-400/80 via-yellow-400/60 to-transparent",
      badge: "bg-amber-950/40 text-amber-300 border-amber-500/30",
      glowBg: "rgba(245, 158, 11, 0.15)",
      hoverBorder: "group-hover:border-amber-500/40",
      dot: "bg-amber-400",
      icon: <FaAward className="text-amber-300 text-lg sm:text-xl" />,
    },
    cyan: {
      topHairline: "from-cyan-400/80 via-blue-500/60 to-transparent",
      badge: "bg-cyan-950/40 text-cyan-300 border-cyan-500/30",
      glowBg: "rgba(6, 182, 212, 0.15)",
      hoverBorder: "group-hover:border-cyan-500/40",
      dot: "bg-cyan-400",
      icon: (
        <div className="flex items-center gap-1.5 text-cyan-300">
          <SiLeetcode className="text-lg sm:text-xl" />
          <SiGeeksforgeeks className="text-lg sm:text-xl" />
        </div>
      ),
    },
    purple: {
      topHairline: "from-purple-400/80 via-fuchsia-500/60 to-transparent",
      badge: "bg-purple-950/40 text-purple-300 border-purple-500/30",
      glowBg: "rgba(168, 85, 247, 0.15)",
      hoverBorder: "group-hover:border-purple-500/40",
      dot: "bg-purple-400",
      icon: <FaChartLine className="text-purple-300 text-lg sm:text-xl" />,
    },
  };

  const currentTheme = themeStyles[item.accent] || themeStyles.purple;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 flex flex-col ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className={`tech-card rounded-2xl p-6 sm:p-7 relative group flex flex-col justify-between h-full
          border border-white/[0.08] ${currentTheme.hoverBorder}
          shadow-xl shadow-black/40 hover:shadow-purple-950/30
          transition-all duration-300 overflow-hidden`}
      >
        {/* Top Hairline Gradient */}
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${currentTheme.topHairline}`}
        />

        {/* Localized Subtle Corner Ambient Glow */}
        <div
          className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-[45px] pointer-events-none transition-opacity duration-300 opacity-25 group-hover:opacity-50"
          style={{ background: currentTheme.glowBg }}
          aria-hidden="true"
        />

        {/* ── Card Content Top ── */}
        <div>
          {/* Header Row: Telemetry Tag & Category Icon */}
          <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/[0.06]">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-medium border ${currentTheme.badge}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${currentTheme.dot}`} />
              <span>{item.tag}</span>
            </div>
            <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              {currentTheme.icon}
            </div>
          </div>

          {/* Subtitle / Context */}
          <p className="text-[11px] font-mono tracking-wider uppercase text-purple-400/80 mb-1">
            {item.subtitle}
          </p>

          {/* Achievement Title */}
          <h3 className="section-title text-xl sm:text-2xl font-bold text-white mb-5 tracking-tight group-hover:text-purple-200 transition-colors">
            {item.title}
          </h3>

          {/* ── Key Numeric Telemetry Metrics ── */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {item.metrics.map((metric, mIdx) => (
              <div
                key={mIdx}
                className={`p-3.5 rounded-xl border transition-all ${
                  metric.highlight
                    ? "bg-white/[0.03] border-white/[0.12] shadow-inner"
                    : "bg-white/[0.015] border-white/[0.05]"
                }`}
              >
                <div className="font-mono text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-purple-200 bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className="text-[11px] font-medium text-slate-400 mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Full Verbatim Supporting Description */}
          <p className="text-slate-300/85 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
            {item.description}
          </p>
        </div>

        {/* ── Card Content Bottom ── */}
        <div className="pt-4 border-t border-white/[0.06] mt-auto">
          {/* Technical Metadata Highlights */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {item.technicalHighlights.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/[0.07] text-slate-300 group-hover:border-purple-500/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Existing Verified Link (if present) */}
          {item.link && (
            <div className="mt-3 pt-2">
              <a
                href={item.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none focus-visible:underline"
              >
                <span>{item.link.label}</span>
                <FiExternalLink className="text-xs" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative"
    >
      <SectionHeader />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {achievements.map((item, index) => (
          <AchievementCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
