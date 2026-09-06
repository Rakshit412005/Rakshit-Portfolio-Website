import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram, FaCode } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to style navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy using IntersectionObserver to track current active section
  useEffect(() => {
    const sectionIds = ["about", "skills", "experience", "work", "education", "achievements", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Smooth scroll handler
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    if (sectionId === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Rakshit412005",
      icon: <FaGithub size={17} />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rakshit-kumar07",
      icon: <FaLinkedin size={17} />,
    },
    {
      name: "Codolio",
      href: "https://codolio.com/profile/rakshit07",
      icon: <FaCode size={17} />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ig_rakshit07/",
      icon: <FaInstagram size={17} />,
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#030014]/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl shadow-purple-950/30 py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo / Brand */}
          <button
            onClick={() => handleMenuItemClick("about")}
            className="group flex items-center text-lg font-bold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg py-1 px-1.5 transition-transform"
            aria-label="Rakshit Kumar - Return to top"
          >
            <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors font-mono">&lt;</span>
            <span className="text-white group-hover:text-purple-200 transition-colors font-display">Rakshit</span>
            <span className="text-purple-400 group-hover:text-purple-300 transition-colors font-mono mx-0.5">/</span>
            <span className="text-white group-hover:text-purple-200 transition-colors font-display">Kumar</span>
            <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors font-mono">&gt;</span>
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-slate-950/60 border border-white/[0.08] rounded-full px-3 py-1.5 backdrop-blur-xl shadow-lg shadow-black/50">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                      isActive
                        ? "text-white bg-gradient-to-r from-purple-600/50 to-cyan-500/40 border border-purple-400/40 shadow-sm shadow-purple-500/40 font-semibold"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-2">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="w-9 h-9 rounded-full bg-white/[0.04] hover:bg-purple-600/25 border border-white/[0.08] hover:border-purple-500/40 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.05] border border-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <FiX className="text-2xl text-purple-400" /> : <FiMenu className="text-2xl text-purple-400" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="fixed top-20 inset-x-4 max-w-md mx-auto bg-[#0a071e]/95 border border-white/12 backdrop-blur-2xl z-50 rounded-2xl p-6 shadow-2xl shadow-purple-950/60 md:hidden animate-scale-in"
          role="dialog"
          aria-label="Mobile Navigation"
        >
          <ul className="flex flex-col space-y-2">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-purple-600/40 text-white border border-purple-500/40 font-semibold"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 pt-5 border-t border-white/10">
            <p className="font-mono text-xs text-slate-400 mb-3 text-center uppercase tracking-wider">
              {"// Direct Links"}
            </p>
            <div className="flex justify-center space-x-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 hover:border-purple-500/50 hover:bg-purple-600/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
