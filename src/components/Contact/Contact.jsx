import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaLinkedin, FaCode, FaPaperPlane } from "react-icons/fa";

const socialShortcuts = [
  {
    label: "GitHub",
    handle: "Rakshit412005",
    href: "https://github.com/Rakshit412005",
    icon: <FaGithub size={18} />,
    color: "hover:border-slate-400/50 hover:text-white hover:bg-slate-800/30",
  },
  {
    label: "LinkedIn",
    handle: "in/rakshit-kumar07",
    href: "https://www.linkedin.com/in/rakshit-kumar07",
    icon: <FaLinkedin size={18} />,
    color: "hover:border-blue-500/50 hover:text-blue-300 hover:bg-blue-950/30",
  },
  {
    label: "Codolio",
    handle: "rakshit07",
    href: "https://codolio.com/profile/rakshit07",
    icon: <FaCode size={18} />,
    color: "hover:border-purple-500/50 hover:text-purple-300 hover:bg-purple-950/30",
  },
];

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_fjgisnq",
        "template_0ctg7ak",
        form.current,
        "Yag3cR-mWYT4VqKZ2"
      )
      .then(
        () => {
          setIsSubmitting(false);
          form.current.reset();
          toast.success("Transmission delivered successfully! ✅", {
            position: "top-right",
            autoClose: 3500,
            theme: "dark",
          });
        },
        (error) => {
          setIsSubmitting(false);
          console.error("Error sending message:", error);
          toast.error("Transmission failed. Please reach out directly.", {
            position: "top-right",
            autoClose: 3500,
            theme: "dark",
          });
        }
      );
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl bg-slate-950/80 text-white text-sm " +
    "border border-white/10 placeholder:text-slate-600 " +
    "input-glow transition-all duration-200 font-sans";

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
    >
      <ToastContainer />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-purple-600/6 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-14 sm:mb-16">
        <p className="section-label mb-3">{"// TRANSMISSION & INQUIRY HUB"}</p>
        <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          Initiate{" "}
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-400 bg-clip-text text-transparent">
            Contact
          </span>
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4" />
        <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          Open to full-time engineering roles, AI/ML research collaborations, and production opportunities.
        </p>
      </div>

      {/* Main Command Console Card */}
      <div className="max-w-4xl mx-auto tech-card rounded-2xl sm:rounded-3xl border border-white/[0.12] p-6 sm:p-10 shadow-2xl shadow-purple-950/40 relative overflow-hidden">
        {/* Top hairline gradient */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Left Column: Direct Links & Status (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="font-mono text-[11px] text-purple-400 tracking-wider uppercase block mb-1">
                {"// SECURE TERMINAL"}
              </span>
              <h3 className="section-title text-xl sm:text-2xl font-bold text-white mb-3">
                Let&apos;s Build Something Extraordinary
              </h3>
              <p className="text-slate-300/85 text-xs sm:text-sm leading-relaxed mb-6">
                Whether you have an opening for an AI/ML or Full-Stack software engineer,
                a challenging problem, or an innovative venture, drop a message.
              </p>

              {/* Status Indicator */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/[0.08] mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono font-semibold text-emerald-300">
                    STATUS: ACTIVE
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Target response latency: &lt; 24 hours.
                </p>
              </div>
            </div>

            {/* Social Channels */}
            <div>
              <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-3">
                Direct Channels
              </p>
              <div className="space-y-2.5">
                {socialShortcuts.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 rounded-xl
                      bg-white/[0.03] border border-white/[0.07]
                      text-slate-300 text-xs sm:text-sm font-medium
                      ${s.color} transition-all duration-200 group`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-purple-400 group-hover:text-white transition-colors">
                        {s.icon}
                      </span>
                      <span>{s.label}</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-500 group-hover:text-slate-300">
                      {s.handle} &rarr;
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Transmission Form (7 cols on lg) */}
          <div className="lg:col-span-7 bg-slate-950/60 p-5 sm:p-7 rounded-2xl border border-white/[0.06]">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
              <div>
                <label
                  htmlFor="user_name"
                  className="block font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1.5"
                >
                  Your Name // Identifier
                </label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  placeholder="e.g. Alex Mercer"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  className="block font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1.5"
                >
                  Email Address // Reply Route
                </label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  placeholder="alex@company.com"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1.5"
                >
                  Subject // Context
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="SDE / AI Role or Technical Discussion"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1.5"
                >
                  Message Payload
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Details of the opportunity, project scope, or questions..."
                  rows="4"
                  required
                  className={`${inputClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3.5 rounded-xl font-semibold text-sm text-white
                  bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600
                  bg-[length:200%_auto] hover:bg-right
                  shadow-lg shadow-purple-900/40 hover:shadow-purple-700/60
                  hover:scale-[1.01] active:scale-[0.99]
                  border border-purple-400/40
                  transition-all duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed
                  flex items-center justify-center gap-2.5 font-mono shimmer-on-hover"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Transmitting Data...</span>
                  </>
                ) : (
                  <>
                    <span>Dispatch Transmission</span>
                    <FaPaperPlane size={13} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
