"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const socialLinks = [
  {
    name: "Email",
    value: "gauravtarale6@gmail.com",
    href: "mailto:gauravtarale6@gmail.com",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/gaurav-tarale",
    href: "https://www.linkedin.com/in/gaurav-tarale-871579372/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    value: "github.com/GauravTarale77",
    href: "https://github.com/GauravTarale77",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [cooldown, setCooldown] = useState(0);
  const cooldownRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const startCooldown = () => {
    setCooldown(60);
    const interval = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setStatus("idle");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    cooldownRef.current = interval;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cooldown > 0 || status === "sending") return;

    // Honeypot check — if bot filled hidden field, silently reject
    const honeypot = (
      formRef.current?.querySelector('[name="website"]') as HTMLInputElement
    )?.value;
    if (honeypot) return;

    if (
      !form.from_name.trim() ||
      !form.from_email.trim() ||
      !form.message.trim()
    )
      return;

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.from_name,
          from_email: form.from_email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ from_name: "", from_email: "", message: "" });
      startCooldown();
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const isDisabled = status === "sending" || cooldown > 0;

  return (
    <section
      id="contact"
      className="relative bg-[#0d0d14] py-24 overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-175 h-75 bg-amber-500/8 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="text-xs font-mono tracking-[0.3em] text-amber-400/70 uppercase mb-3">
            Get In Touch
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Let's build something
            <span className="block text-amber-400">together</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto leading-relaxed">
            Whether you have a project in mind, need help with AI integration,
            or just want to say hello — my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* LEFT — Social links */}
          <div className="space-y-6">
            <div>
              <h3
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Reach me directly
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                I'm currently open to freelance projects and full-time AI
                developer roles. Response time is usually within 24 hours.
              </p>
            </div>

            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/3 border border-white/10 hover:bg-white/[0.07] hover:border-amber-400/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/10 group-hover:border-amber-400/20 transition-all duration-300">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-0.5">
                      {link.name}
                    </p>
                    <p className="text-white text-sm font-medium group-hover:text-amber-400 transition-colors duration-300">
                      {link.value}
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 text-white/20 ml-auto group-hover:text-amber-400/60 group-hover:translate-x-0.5 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-green-500/5 border border-green-500/20">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-400 animate-ping opacity-60" />
              </div>
              <p className="text-green-400 text-sm font-medium">
                Available for freelance & full-time opportunities
              </p>
            </div>
          </div>

          {/* RIGHT — Contact form */}
          <div className="bg-white/3 border border-white/10 rounded-2xl p-6 md:p-8">
            <h3
              className="text-xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Send a message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot — hidden from humans, bots fill this */}
              <input
                type="text"
                name="website"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name */}
              <div>
                <label className="block text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={form.from_name}
                  onChange={handleChange}
                  placeholder="Gaurav Tarale"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-amber-400/40 focus:bg-white/8 transition-all duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={form.from_email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-amber-400/40 focus:bg-white/8 transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Gaurav, I'd like to discuss a project..."
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-amber-400/40 focus:bg-white/8 transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isDisabled}
                className={`
                  w-full py-3.5 rounded-xl text-sm font-semibold
                  transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer
                  ${
                    isDisabled
                      ? "bg-white/5 border border-white/10 text-white/30 cursor-not-allowed"
                      : "bg-amber-400 text-gray-900 hover:bg-amber-300 active:scale-[0.98]"
                  }
                `}
              >
                {status === "sending" && (
                  <>
                    <svg
                      className="w-4 h-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </>
                )}
                {status === "success" &&
                  cooldown > 0 &&
                  `Message sent! Wait ${cooldown}s`}
                {status === "error" && "Failed — try again"}
                {status === "idle" && "Send Message →"}
              </button>

              {/* Success message */}
              {status === "success" && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                  <svg
                    className="w-4 h-4 text-green-400 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-green-400 text-sm">
                    Message sent! I'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {/* Error message */}
              {status === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                  <svg
                    className="w-4 h-4 text-red-400 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try emailing directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer line */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-mono">
            © {new Date().getFullYear()} Gaurav Tarale. Built with Next.js &
            Tailwind CSS.
          </p>
          <p className="text-white/20 text-xs font-mono">
            Akola, Maharashtra, India
          </p>
        </div>
      </div>
    </section>
  );
}
