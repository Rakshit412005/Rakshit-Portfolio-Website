import { FaGithub, FaLinkedin, FaInstagram, FaCode } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    if (sectionId === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80;
      const top = section.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About",      id: "about" },
    { name: "Skills",     id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects",   id: "work" },
    { name: "Education",    id: "education" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact",      id: "contact" },
  ];

  const socialLinks = [
    { name: "GitHub",    href: "https://github.com/Rakshit412005",                   icon: <FaGithub size={16} />    },
    { name: "LinkedIn",  href: "https://www.linkedin.com/in/rakshit-kumar07",         icon: <FaLinkedin size={16} />  },
    { name: "Codolio",   href: "https://codolio.com/profile/rakshit07",               icon: <FaCode size={16} />      },
    { name: "Instagram", href: "https://www.instagram.com/ig_rakshit07/",             icon: <FaInstagram size={16} /> },
  ];

  return (
    <footer className="relative mt-20 border-t border-white/[0.06] bg-[#02000e]">
      {/* Top ambient glow */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-purple-600/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <button
              onClick={() => handleScroll("about")}
              className="group text-xl font-bold tracking-tight hover:text-purple-300 transition-colors section-title"
              aria-label="Scroll to top"
            >
              <span className="text-cyan-400 font-mono group-hover:text-cyan-300 transition-colors">&lt;</span>
              <span className="text-white font-display">Rakshit</span>
              <span className="text-purple-400 font-mono mx-0.5">/</span>
              <span className="text-white font-display">Kumar</span>
              <span className="text-cyan-400 font-mono group-hover:text-cyan-300 transition-colors">&gt;</span>
            </button>
            <p className="font-mono text-[11px] text-slate-500">
              {"// Systems, Edge-AI & Full-Stack Engineer"}
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="hover:text-purple-300 transition-colors focus:outline-none focus-visible:underline"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Social Icons & Copyright */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="flex items-center gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-purple-500/50 hover:bg-purple-600/20 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <p className="text-[11px] font-mono text-slate-600">
              © {new Date().getFullYear()} · React · Tailwind CSS · Vite
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
