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
    { name: "Education",  id: "education" },
    { name: "Contact",    id: "contact" },
  ];

  const socialLinks = [
    { name: "GitHub",    href: "https://github.com/Rakshit412005",                   icon: <FaGithub size={16} />    },
    { name: "LinkedIn",  href: "https://www.linkedin.com/in/rakshit-kumar07",         icon: <FaLinkedin size={16} />  },
    { name: "Codolio",   href: "https://codolio.com/profile/rakshit07",               icon: <FaCode size={16} />      },
    { name: "Instagram", href: "https://www.instagram.com/ig_rakshit07/",             icon: <FaInstagram size={16} /> },
  ];

  return (
    <footer className="relative mt-16">
      {/* Top gradient divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      {/* Subtle ambient glow above footer */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-32
        bg-purple-600/8 blur-[60px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center space-y-6">

          {/* Brand */}
          <button
            onClick={() => handleScroll("about")}
            className="group text-xl font-bold tracking-tight
              hover:text-purple-300 transition-colors section-title"
            aria-label="Scroll to top"
          >
            <span className="text-purple-400 font-mono group-hover:text-purple-300 transition-colors">&lt;</span>
            <span className="text-white">Rakshit</span>
            <span className="text-purple-400 font-mono mx-0.5">/</span>
            <span className="text-white">Kumar</span>
            <span className="text-purple-400 font-mono group-hover:text-purple-300 transition-colors">&gt;</span>
          </button>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="hover:text-purple-400 transition-colors
                  focus:outline-none focus-visible:underline"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="w-9 h-9 rounded-full
                  bg-white/[0.04] border border-white/[0.08]
                  hover:border-purple-500/50 hover:bg-purple-600/20
                  text-slate-400 hover:text-white
                  flex items-center justify-center
                  transition-all duration-200"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="space-y-1">
            <p className="text-[11px] text-slate-500">
              Designed &amp; Built by{" "}
              <span className="text-purple-400 font-medium">Rakshit Kumar</span>
            </p>
            <p className="text-[11px] text-slate-600">
              © {new Date().getFullYear()} · React · Tailwind CSS · Vite
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
