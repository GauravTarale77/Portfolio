import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] py-14 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-mono transition-colors duration-200 mb-12"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-mono tracking-[0.3em] text-amber-400/70 uppercase mb-3">
            Legal
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-white/40 text-sm font-mono">
            Last updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-white/60 text-sm leading-relaxed">

          <div>
            <h2 className="text-white text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              1. Who I Am
            </h2>
            <p>
              This privacy policy applies to the personal portfolio website of <span className="text-white">Gaurav Tarale</span>, a Generative AI & Full Stack Developer based in Akola, Maharashtra, India. This website is available at <span className="text-amber-400">portfolio-gaurav-tarale.vercel.app</span>.
            </p>
            <p className="mt-3">
              If you have any questions about this policy, you can contact me at{" "}
              <a href="mailto:gauravtarale6@gmail.com" className="text-amber-400 hover:text-amber-300 transition-colors">
                gauravtarale6@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              2. What Data I Collect
            </h2>
            <p>
              This website only collects personal data when you voluntarily fill out and submit the contact form. The data collected includes:
            </p>
            <ul className="mt-3 space-y-2">
              {["Your full name", "Your email address", "The message you write"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">▸</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              No other personal data is collected. This website does not use cookies, tracking pixels, or any analytics tools.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              3. Why I Collect This Data
            </h2>
            <p>
              The sole purpose of collecting your name, email, and message is to <span className="text-white">respond to your inquiry</span>. I use this information only to reply to you directly and for no other purpose.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              4. How Your Data is Processed
            </h2>
            <p>
              When you submit the contact form, your data is sent directly to my email inbox via <span className="text-white">EmailJS</span> — a third-party email delivery service. EmailJS acts as a transporter only and does not store your data permanently on their servers beyond what is needed for delivery.
            </p>
            <p className="mt-3">
              Your data is not stored in any database, not shared with any other third parties, and not used for marketing or advertising purposes.
            </p>
            <p className="mt-3">
              You can read EmailJS's privacy policy at{" "}
              <a
                href="https://www.emailjs.com/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition-colors"
              >
                emailjs.com/legal/privacy-policy
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              5. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="mt-3 space-y-2">
              {[
                "Request a copy of any personal data I hold about you",
                "Request deletion of your personal data",
                "Withdraw your consent at any time by contacting me",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">▸</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email me at{" "}
              <a href="mailto:gauravtarale6@gmail.com" className="text-amber-400 hover:text-amber-300 transition-colors">
                gauravtarale6@gmail.com
              </a>{" "}
              and I will respond within 7 days.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              6. Data Security
            </h2>
            <p>
              Your data is transmitted securely via HTTPS and handled through EmailJS's secure infrastructure. I do not store your data in any external database and take reasonable precautions to protect it during transmission.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              7. Children's Privacy
            </h2>
            <p>
              This website is not directed at children under the age of 13. I do not knowingly collect personal data from children. If you believe a child has submitted data through this form, please contact me immediately.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              8. Changes to This Policy
            </h2>
            <p>
              I may update this privacy policy from time to time. Any changes will be reflected on this page with an updated date at the top. I encourage you to review this page periodically.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/5" />

          <p className="text-white/30 text-xs font-mono">
            © {new Date().getFullYear()} Gaurav Tarale. All rights reserved.
          </p>

        </div>
      </div>
    </main>
  );
}