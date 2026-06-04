"use client";

const services = [
  {
    id: "fullstack",
    icon: "🌐",
    name: "Full Stack Website",
    description:
      "From simple landing pages and portfolio sites to complex multi-page web applications with authentication, databases, dashboards, and REST APIs. Built with Next.js, React, Node.js, and PostgreSQL/MongoDB — responsive, fast, and production-ready.",
    price: "₹5,000 – ₹1,00,000",
    tag: "Most Popular",
    tagColor: "amber",
  },
  {
    id: "ai-platform",
    icon: "🤖",
    name: "AI Platform / Website",
    description:
      "Full-stack web platforms powered by AI — think interview simulators, document assistants, AI dashboards, or custom LLM-powered tools. Built end-to-end with Next.js frontend, FastAPI/Node.js backend, and integrated with Gemini, OpenAI, or Groq APIs.",
    price: "₹15,000 – ₹1,50,000",
    tag: "High Value",
    tagColor: "purple",
  },
  {
    id: "chatbot",
    icon: "💬",
    name: "AI Chatbot",
    description:
      "Custom AI chatbots for your website, business, or application. From simple FAQ bots to advanced RAG-powered assistants that read your documents, websites, or databases and answer questions with accurate, context-grounded responses using LangChain and FAISS.",
    price: "₹8,000 – ₹80,000",
    tag: "In Demand",
    tagColor: "blue",
  },
  {
    id: "ai-integration",
    icon: "⚡",
    name: "AI Integration",
    description:
      "Already have a website or app? I'll integrate AI capabilities into it — add a chatbot, automate workflows, connect LLM APIs, build recommendation systems, or add intelligent search. Minimal disruption to your existing codebase, maximum impact.",
    price: "₹5,000 – ₹60,000",
    tag: "Quick Turnaround",
    tagColor: "green",
  },
  {
    id: "uiux",
    icon: "🎨",
    name: "UI/UX Design",
    description:
      "Clean, modern, and user-friendly interface designs using Figma and Canva. From wireframes and prototypes to complete design systems — covering web apps, mobile apps, landing pages, and dashboards. Focused on usability, aesthetics, and developer handoff.",
    price: "₹2,000 – ₹20,000",
    tag: null,
    tagColor: null,
  },
  {
    id: "design",
    icon: "✏️",
    name: "Logo / Poster / Template",
    description:
      "Professional logos, social media posters, banners, presentation templates, and brand identity designs using Canva and Figma. Priced based on complexity and number of deliverables. Fast turnaround with unlimited revisions on basic packages.",
    price: "₹500 – ₹5,000",
    tag: null,
    tagColor: null,
  },
  {
    id: "project-help",
    icon: "🛠️",
    name: "Project Help & Debugging",
    description:
      "Stuck on a bug? Need help building your college project or understanding a concept? I offer 1-on-1 sessions to help students and developers debug issues, review code, explain concepts, or collaborate on building projects from scratch.",
    price: "₹300 – ₹2,000 / session",
    tag: "Students Welcome",
    tagColor: "orange",
  },
];

const tagStyles: Record<string, string> = {
  amber: "bg-amber-400/10 border-amber-400/20 text-amber-400",
  purple: "bg-purple-400/10 border-purple-400/20 text-purple-400",
  blue: "bg-blue-400/10 border-blue-400/20 text-blue-400",
  green: "bg-green-400/10 border-green-400/20 text-green-400",
  orange: "bg-orange-400/10 border-orange-400/20 text-orange-400",
};

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="group relative bg-white/3 border border-white/10 rounded-2xl p-6 flex flex-col hover:border-amber-400/25 hover:bg-white/6 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-400/5 transition-all duration-500">
      {/* Tag */}
      {service.tag && service.tagColor && (
        <div className="absolute top-4 right-4">
          <span
            className={`text-xs px-2.5 py-1 rounded-full border font-mono ${tagStyles[service.tagColor]}`}
          >
            {service.tag}
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-5 group-hover:bg-amber-400/10 group-hover:border-amber-400/20 transition-all duration-300">
        {service.icon}
      </div>

      {/* Name */}
      <h3
        className="text-lg font-bold text-white mb-3 leading-snug"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {service.name}
      </h3>

      {/* Description */}
      <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">
        {service.description}
      </p>

      {/* Divider */}
      <div className="h-px bg-white/5 mb-5" />

      {/* Price + Button */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <p className="text-xs font-mono text-white/30 uppercase tracking-wider mb-1">
            Starting from
          </p>
          <p className="text-amber-400 font-bold text-sm font-mono">
            {service.price}
          </p>
        </div>

        <button
          onClick={scrollToContact}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm font-medium hover:bg-amber-400 hover:text-gray-900 hover:border-amber-400 transition-all duration-300 group/btn cursor-pointer"
        >
          Get in Touch
          <svg
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-[#0d0d14] py-24 overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-100 h-100 bg-amber-500/5 blur-[100px] rounded-full" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-75 h-75 bg-purple-500/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="mb-14">
          <p className="text-xs font-mono tracking-[0.3em] text-amber-400/70 uppercase mb-3">
            Freelance Services
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What I can build
              <span className="block text-white/30">for you</span>
            </h2>
            <p className="text-white/40 text-sm max-w-sm leading-relaxed">
              All prices are negotiable based on project scope and timeline.
              Reach out with your requirements for a custom quote.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 p-8 rounded-2xl bg-white/2 border border-white/8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Not sure what you need?
            </h3>
            <p className="text-white/40 text-sm">
              Describe your idea and I'll suggest the best approach and a fair
              price.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="shrink-0 flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 text-gray-900 text-sm font-semibold hover:bg-amber-300 active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            Let's discuss your project
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
