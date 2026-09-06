/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { projects } from "../../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Intersection observer hook
function useInView(threshold = 0.1) {
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
      <p className="section-label mb-3">Featured Work</p>
      <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
        Selected <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
      </h2>
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4" />
      <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
        Full-stack, AI/ML, and systems engineering projects built to solve real-world problems.
      </p>
    </div>
  );
};

const ProjectCard = ({ project, index, onOpen }) => {
  const [ref, inView] = useInView(0.08);
  const isFeatured = index === 0;

  return (
    <div
      ref={ref}
      onClick={() => onOpen(project)}
      className={`group relative bg-slate-900/50 backdrop-blur-xl
        border border-white/[0.08] hover:border-purple-500/50
        rounded-2xl overflow-hidden cursor-pointer
        shadow-xl shadow-black/30 hover:shadow-purple-900/25
        hover:-translate-y-2 transition-all duration-350
        flex flex-col justify-between
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        shimmer-on-hover`}
      style={{ transition: "opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease, border-color 0.3s ease", transitionDelay: `${index * 80}ms` }}
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
        [background:linear-gradient(#030014,#030014)_padding-box,linear-gradient(135deg,rgba(168,85,247,0.5),rgba(34,211,238,0.3))_border-box]
        border border-transparent" />

      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-3 left-3 z-20
          flex items-center gap-1.5 px-2.5 py-1
          bg-gradient-to-r from-amber-500/90 to-orange-500/90
          text-white text-[10px] font-bold tracking-wider uppercase
          rounded-full shadow-lg shadow-orange-900/30">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Featured
        </div>
      )}

      {/* Image Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950/80 border-b border-white/[0.06]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Body */}
      <div className="flex-1 p-5 sm:p-6">
        <h3 className="section-title text-lg font-bold text-white mb-2
          group-hover:text-purple-200 transition-colors duration-200">
          {project.title}
        </h3>
        <div className="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">
          {Array.isArray(project.description) ? project.description[0] : project.description}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag, i) => (
            <span
              key={i}
              className="bg-purple-950/50 text-purple-300/90
                border border-purple-800/25
                text-[10px] sm:text-xs font-medium rounded-md px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[10px] text-purple-400/70 px-1.5 py-0.5 font-medium">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 sm:px-6 pb-4 pt-3 flex items-center justify-between border-t border-white/[0.05]">
        <span className="text-[11px] text-purple-400/70 font-medium group-hover:text-purple-300 transition-colors">
          Click for details →
        </span>
        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub: ${project.title}`}
              className="p-2 rounded-lg text-slate-400 hover:text-white
                hover:bg-white/10 transition-all duration-150"
            >
              <FaGithub size={15} />
            </a>
          )}
          {project.webapp && (
            <a
              href={project.webapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo: ${project.title}`}
              className="p-2 rounded-lg text-slate-400 hover:text-purple-300
                hover:bg-purple-950/40 transition-all duration-150"
            >
              <FaExternalLinkAlt size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal  = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === "Escape") handleCloseModal(); };
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
      className="py-20 lg:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative"
    >
      <SectionHeader />

      <div className="grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpen={handleOpenModal}
          />
        ))}
      </div>

      {/* ── Modal ── */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-lg transition-opacity"
            onClick={handleCloseModal}
            aria-hidden="true"
          />

          {/* Dialog */}
          <div
            className="relative gradient-border
              bg-[#08061a] border border-white/[0.12]
              rounded-2xl shadow-2xl shadow-purple-950/60
              max-w-2xl w-full max-h-[92vh] overflow-y-auto z-10
              p-6 sm:p-8
              animate-scale-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white
                p-2 rounded-lg bg-white/[0.05] hover:bg-white/10
                border border-white/10 hover:border-white/20
                transition-all"
              aria-label="Close modal"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="w-full aspect-video rounded-xl overflow-hidden
              bg-black/50 mb-6 border border-white/[0.08]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Title */}
            <h3 id="modal-title" className="section-title text-2xl sm:text-3xl font-bold text-white mb-4">
              {selectedProject.title}
            </h3>

            {/* Description */}
            <div className="text-slate-300/85 text-sm sm:text-base leading-relaxed mb-6">
              {Array.isArray(selectedProject.description) ? (
                <ul className="space-y-2.5">
                  {selectedProject.description.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-purple-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{selectedProject.description}</p>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-7">
              {selectedProject.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-purple-950/60 text-purple-200
                    border border-purple-800/30
                    text-xs font-medium rounded-md px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-3">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2
                    bg-white/[0.05] hover:bg-white/[0.1]
                    border border-white/[0.12] hover:border-white/25
                    text-white py-3 px-6 rounded-xl font-semibold
                    transition-all text-sm"
                >
                  <FaGithub size={17} />
                  <span>View Source Code</span>
                </a>
              )}
              {selectedProject.webapp && (
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2
                    bg-gradient-to-r from-purple-600 to-indigo-600
                    hover:from-purple-500 hover:to-indigo-500
                    text-white py-3 px-6 rounded-xl font-semibold
                    shadow-lg shadow-purple-900/40
                    transition-all text-sm shimmer-on-hover"
                >
                  <FaExternalLinkAlt size={13} />
                  <span>Live Demo</span>
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
