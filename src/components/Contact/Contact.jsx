import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const socialShortcuts = [
  {
    label: "GitHub",
    href: "https://github.com/Rakshit412005",
    icon: <FaGithub size={16} />,
    color: "hover:border-slate-400/50 hover:text-white hover:bg-slate-700/30",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rakshit-kumar07",
    icon: <FaLinkedin size={16} />,
    color: "hover:border-blue-500/50 hover:text-blue-300 hover:bg-blue-900/20",
  },
  {
    label: "Codolio",
    href: "https://codolio.com/profile/rakshit07",
    icon: <FaCode size={16} />,
    color: "hover:border-purple-500/50 hover:text-purple-300 hover:bg-purple-900/20",
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
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3500,
            theme: "dark",
          });
        },
        (error) => {
          setIsSubmitting(false);
          console.error("Error sending message:", error);
          toast.error("Failed to send. Please email me directly.", {
            position: "top-right",
            autoClose: 3500,
            theme: "dark",
          });
        }
      );
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-slate-950/70 text-white text-sm " +
    "border border-white/10 placeholder:text-slate-600 " +
    "input-glow transition-all duration-200";

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-14">
        <p className="section-label mb-3">Get in Touch</p>
        <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          Let&apos;s <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4" />
        <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          Have an opportunity, question, or project? Send a message and I&apos;ll get back to you promptly.
        </p>
      </div>

      {/* Social Shortcuts */}
      <div className="flex justify-center gap-3 mb-10">
        {socialShortcuts.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full
              text-slate-400 text-xs sm:text-sm font-medium
              bg-white/[0.04] border border-white/10
              ${s.color}
              transition-all duration-200`}
          >
            {s.icon}
            <span>{s.label}</span>
          </a>
        ))}
      </div>

      {/* Form Card */}
      <div className="max-w-lg mx-auto gradient-border
        bg-slate-900/55 backdrop-blur-xl
        rounded-2xl p-6 sm:p-8
        shadow-xl shadow-black/40">

        <h3 className="section-title text-lg font-bold text-white text-center mb-6">
          Send a Direct Message
          <span className="ml-2 text-xl">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="user_email" className="block text-[10px] uppercase tracking-widest font-semibold text-slate-400 mb-1.5">
              Email Address
            </label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              placeholder="you@example.com"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="user_name" className="block text-[10px] uppercase tracking-widest font-semibold text-slate-400 mb-1.5">
              Your Name
            </label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              placeholder="Your name"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-[10px] uppercase tracking-widest font-semibold text-slate-400 mb-1.5">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Project Inquiry / Job Opportunity"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-[10px] uppercase tracking-widest font-semibold text-slate-400 mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
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
              shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50
              transition-all duration-300
              disabled:opacity-50 disabled:cursor-not-allowed
              flex items-center justify-center gap-2
              shimmer-on-hover"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              <span>Send Message →</span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
