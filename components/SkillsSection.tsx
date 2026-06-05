"use client";

import { useState } from "react";

const skills = [
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    invert: true,
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "FastAPI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    invert: true,
  },
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "PyTorch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "Scikit-learn",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  },
  {
    name: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    invert: true,
  },
  {
    name: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    invert: true,
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    invert: true,
  },
  {
    name: "Streamlit",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg",
  },
  { name: "Power BI", icon: "https://img.icons8.com/color/96/power-bi.png" },
  { name: "Canva", icon: "https://img.icons8.com/color/96/canva.png" },
  {
    name: "HuggingFace",
    icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
  },
  {
    name: "LangChain",
    icon: "/icons/langchain.png",
  },
  {
    name: "Clerk",
    icon: "https://img.clerk.com/static/logo-light-mode-400x400.png",
  },
  {
    name: "Render",
    icon: "/icons/render.png",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    invert: true,
  },
  { name: "Groq", icon: "/icons/groq.png" },
];

const row1 = skills.slice(0, 16);
const row2 = skills.slice(16);

interface SkillCardProps {
  name: string;
  icon: string;
  invert?: boolean;
}

function SkillCard({ name, icon, invert }: SkillCardProps) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="relative shrink-0 mx-3 group "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <div
        className={`
          absolute -top-12 left-1/2 -translate-x-1/2
          z-999 pointer-events-none
          transition-all duration-200
          ${hovered ? "opacity-100 -translate-y-1" : "opacity-0 translate-y-0"}
        `}
      >
        <div className="relative">
          <div className="bg-[#1a1a2e] border border-white/20 rounded-lg px-3 py-1.5 whitespace-nowrap shadow-xl ">
            <span className="text-white text-xs font-medium">{name}</span>
          </div>
          <div className="absolute -bottom-1.25 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#1a1a2e] border-r border-b border-white/20 rotate-45" />
        </div>
      </div>

      {/* Logo pill */}
      <div
        className={`
          w-16 h-16 rounded-2xl
          bg-white/5 border border-white/10
          flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${hovered ? "bg-white/10 border-amber-400/40 scale-110 shadow-lg shadow-amber-400/10" : ""}
        `}
      >
        {!imgError ? (
          <img
            src={icon}
            alt={name}
            width={36}
            height={36}
            className={`w-9 h-9 object-contain transition-all duration-300 ${invert ? "invert opacity-80" : ""}`}
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-white/70 text-sm font-bold font-mono">
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
    </div>
  );
}

interface MarqueeRowProps {
  items: typeof skills;
  direction?: "left" | "right";
  paused: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function MarqueeRow({
  items,
  direction = "left",
  paused,
  onMouseEnter,
  onMouseLeave,
}: MarqueeRowProps) {
  const doubled = [...items, ...items, ...items];

  return (
    <div
      className="w-full"
      style={{ overflow: "visible" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`
          flex items-center py-4
          ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}
          ${paused ? "[animation-play-state:paused]" : ""}
        `}
        style={{ width: "max-content" }}
      >
        {doubled.map((skill, i) => (
          <SkillCard key={`${skill.name}-${i}`} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="skills"
      className="relative bg-[#0d0d14] pt-16 pb-6 overflow-hidden"
      style={{}}
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-amber-500/5 blur-[80px] rounded-full" />

      {/* Section heading */}
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <p className="text-xs font-mono tracking-[0.3em] text-amber-400/70 uppercase mb-3">
          Technical Skills
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Tools I work with
        </h2>
      </div>

      {/* Marquee rows */}
      <div className="space-y-5" style={{ overflow: "visible" }}>
        <MarqueeRow
          items={row1}
          direction="left"
          paused={paused}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        />
        <MarqueeRow
          items={row2}
          direction="right"
          paused={paused}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        />
      </div>

      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#0d0d14] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#0d0d14] to-transparent z-10" />
    </section>
  );
}
