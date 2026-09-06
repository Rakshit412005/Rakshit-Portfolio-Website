/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { projects } from "../../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Intersection observer hook
function useInView(threshold = 0.08) {
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

// Subsystem telemetry data for all 5 projects
const projectMetadata = {
  0: {
    code: "01 // FLAGSHIP ARCHITECTURE",
    highlight: "OPTIMIZED: O(N+1) \u2192 O(2) Gemini API calls per interview",
    domain: "ai-interviewer-chi-six.vercel.app",
    statusText: "Live Production",
    isFlagship: true,
  },
  1: {
    code: "02 // AI_FINANCE_ML",
    highlight: "BENCHMARK: 5 ML Models (RMSE, MAE, R\u00B2) & 20+ Engineered Features",
    domain: "ai-stock-price-predictor.streamlit.app",
    statusText: "Streamlit Cloud",
    isFlagship: false,
  },
  2: {
    code: "03 // REALTIME_ENGINE",
    highlight: "REAL-TIME: Bidirectional Socket.IO & FEN State Synchronization",
    domain: "chess-game-mwu9.onrender.com",
    statusText: "Live Deployed",
    isFlagship: false,
  },
  3: {
    code: "04 // DISCOVERY_ENGINE",
    highlight: "RECOMMENDER: Content Filtering across Genres & Trending Criteria",
    domain: "movies-zone-eight.vercel.app",
    statusText: "Vercel Deployed",
    isFlagship: false,
  },
  4: {
    code: "05 // RESERVATION_PLATFORM",
    highlight: "MERN PLATFORM: Dynamic Availability Verification & Table Booking",
    domain: "github.com/restaurant-reservation",
    statusText: "Full-Stack System",
    isFlagship: false,
  },
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
      <p className="section-label mb-3">{"// PRODUCTION DEPLOYMENTS & SYSTEMS"}</p>
      <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
        Featured{" "}
        <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-400 bg-clip-text text-transparent">
          Product Showcases
        </span>
      </h2>
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4" />
      <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
        Production AI platforms, real-time distributed applications, and machine learning
        systems built with architectural efficiency.
      </p>
    </div>
  );
};

// ── Uniform Horizontal Product Showcase Card ──
const HorizontalProductCard = ({ project, index, onOpen }) => {
  const [ref, inView] = useInView(0.06);
  const meta = projectMetadata[project.id] || {
    code: `0${index + 1} // SYSTEM`,
    highlight: "Engineered Full-Stack Architecture",
    domain: "production-system",
    statusText: "Deployed",
    isFlagship: false,
  };

  const isLiveDemo = project.webapp && !project.webapp.includes("github.com");

  return (
    <div
      ref={ref}
      onClick={() => onOpen(project)}
      className={`w-full tech-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9
        border ${
          meta.isFlagship
            ? "border-purple-500/35 hover:border-purple-400/55 shadow-purple-950/40"
            : "border-white/[0.08] hover:border-purple-500/40 shadow-black/50"
        }
        shadow-2xl hover:shadow-purple-950/25
        transition-all duration-500 cursor-pointer overflow-hidden relative group
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Top Hairline Accent */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${
          meta.isFlagship
            ? "from-purple-500 via-cyan-400 to-purple-500"
            : "from-transparent via-purple-500/50 to-transparent group-hover:via-cyan-400/60"
        }`}
      />

      {/* Grid Layout: Visual Frame (5 cols) + Information (7 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">

        {/* ── Left Column: Viewport Frame ── */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.12] bg-slate-950 shadow-2xl relative group/img">
            {/* Window control bar */}
            <div className="px-3.5 py-2 bg-slate-900/90 border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/70" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                <span className="w-2 h-2 rounded-full bg-green-500/70" />
              </div>
              <span className="font-mono text-[10px] text-slate-400 truncate max-w-[210px]">
                {meta.domain}
              </span>
              <span className="w-2" />
            </div>

            {/* Viewport Image */}
            <div className="aspect-[16/10] overflow-hidden relative bg-[#09061c]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
            </div>
          </div>
        </div>

        {/* ── Right Column: Information, Specs & Actions ── */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Telemetry Header Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className={`font-mono text-xs font-semibold tracking-wider px-3 py-0.5 rounded-full border ${
                  meta.isFlagship
                    ? "text-purple-300 bg-purple-950/60 border-purple-500/40"
                    : "text-slate-300 bg-white/[0.04] border-white/10"
                }`}
              >
                {meta.code}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{meta.statusText}</span>
              </span>
            </div>

            {/* Project Title */}
            <h3 className="section-title text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
              {project.title}
            </h3>

            {/* Architectural Highlight Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-950/40 border border-purple-500/30 mb-3.5 text-xs sm:text-sm font-medium text-purple-200 max-w-full">
              <span className="text-cyan-400 font-mono font-bold shrink-0">KEY:</span>
              <span className="truncate">{meta.highlight}</span>
            </div>

            {/* Description Narrative */}
            <p className="text-slate-300/85 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
              {Array.isArray(project.description) ? project.description[0] : project.description}
            </p>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.slice(0, 7).map((tag, i) => (
                <span
                  key={i}
                  className="bg-white/[0.04] text-slate-300 border border-white/[0.08] text-[11px] sm:text-xs font-mono px-2.5 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 7 && (
                <span className="text-xs font-mono text-purple-400/80 px-2 py-0.5">
                  +{project.tags.length - 7} more
                </span>
              )}
            </div>
          </div>

          {/* Action Button Row */}
          <div
            className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.07]"
            onClick={(e) => e.stopPropagation()}
          >
            {isLiveDemo && (
              <a
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white
                  bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500
                  shadow-lg shadow-purple-900/40 hover:shadow-purple-700/50 transition-all shimmer-on-hover"
              >
                <span>Launch Live System</span>
                <FaExternalLinkAlt size={11} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-200
                  bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all"
              >
                <FaGithub size={15} />
                <span>Source Code</span>
              </a>
            )}

            <button
              onClick={() => onOpen(project)}
              className="ml-auto text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors py-2"
            >
              System Specs &rarr;
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
    >
      <SectionHeader />

      {/* ── Product Catalog: All 5 Horizontal Product Showcases ── */}
      <div className="space-y-8 sm:space-y-10">
        {projects.map((project, index) => (
          <HorizontalProductCard
            key={project.id}
            project={project}
            index={index}
            onOpen={handleOpenModal}
          />
        ))}
      </div>

      {/* ── Technical Modal Dialog ── */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
            onClick={handleCloseModal}
            aria-hidden="true"
          />

          {/* Dialog Container */}
          <div
            className="relative tech-card bg-[#08061a]/95 border border-white/[0.15]
              rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-950/80
              max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10
              p-6 sm:p-8 animate-scale-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 text-gray-400 hover:text-white
                p-2 rounded-xl bg-white/[0.05] hover:bg-white/10
                border border-white/10 hover:border-white/20 transition-all"
              aria-label="Close modal"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Preview */}
            <div className="w-full aspect-video rounded-xl overflow-hidden bg-black/60 mb-6 border border-white/[0.08]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Title & Telemetry */}
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-purple-400">
                SYSTEM SPECIFICATIONS
              </span>
            </div>
            <h3 id="modal-title" className="section-title text-2xl sm:text-3xl font-bold text-white mb-4">
              {selectedProject.title}
            </h3>

            {/* Technical Bullet Points */}
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {Array.isArray(selectedProject.description) ? (
                <ul className="space-y-3">
                  {selectedProject.description.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{selectedProject.description}</p>
              )}
            </div>

            {/* Technology Stack Badges */}
            <div className="flex flex-wrap gap-1.5 mb-7">
              {selectedProject.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-purple-950/60 text-purple-200 border border-purple-700/40 text-xs font-mono rounded-lg px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex flex-col sm:flex-row gap-3">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2
                    bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/20
                    text-white py-3 px-5 rounded-xl font-semibold transition-all text-sm font-mono"
                >
                  <FaGithub size={16} />
                  <span>Inspect Code Repository</span>
                </a>
              )}
              {selectedProject.webapp && !selectedProject.webapp.includes("github.com") && (
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2
                    bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600
                    hover:from-purple-500 hover:to-indigo-500
                    text-white py-3 px-5 rounded-xl font-semibold
                    shadow-lg shadow-purple-900/50 transition-all text-sm font-mono shimmer-on-hover"
                >
                  <FaExternalLinkAlt size={13} />
                  <span>Launch Live Deployment</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
