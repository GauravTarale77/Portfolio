"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const blocks = [
  {
    id: "intro",
    label: "01 / Who I Am",
    title: "Hey, I'm Gaurav Tarale",
    content:
      "A Generative AI & Full Stack Developer from Akola, Maharashtra. I completed my B.Tech in Electronics & Telecommunication from YCCE Nagpur — but somewhere along the way, I discovered that my real passion wasn't in circuits, it was in building intelligent software that solves real problems. That curiosity led me deep into the world of AI, and I haven't looked back since.",
  },
  {
    id: "what",
    label: "02 / What I Do",
    title: "Building at the intersection of AI & Design",
    content:
      "I build Generative AI applications, full-stack web platforms, and clean UI/UX experiences. From RAG-powered document assistants to AI interview simulators — I focus on shipping products that are actually deployed and usable, not just local demos. I also create UI/UX designs using Figma and Canva for clients and personal projects.",
  },
  {
    id: "how",
    label: "03 / How I Work",
    title: "Always learning, always shipping",
    content:
      "Over the past year I've been consistently learning Python, Machine Learning, Deep Learning, NLP, and Power BI — and applying everything immediately into real projects. I believe the best way to learn is to build. I'm currently sharpening my problem-solving skills through daily DSA practice, building the foundation for stronger, cleaner code.",
  },
  {
    id: "experience",
    label: "04 / Experience",
    title: "Real-world internship experience",
    content: null,
    experience: [
      {
        role: "Web Development Intern",
        company: "Elecstark",
        duration: "Jan 2025 – Jun 2025 · 6 months",
        points: [
          "Built a full-stack e-commerce website with product listings, cart & checkout using React.js and Node.js.",
          "Designed and integrated REST APIs for product management, user auth, and order processing.",
          "Collaborated on UI/UX improvements using Figma prototypes.",
        ],
      },
      {
        role: "UI/UX Developer Intern",
        company: "SS InfoTech",
        duration: "Jul 2025 – Aug 2025 · 1 month",
        points: [
          "Developed multiple UI/UX designs for client projects using Figma and Canva.",
          "Worked directly with clients on design feedback and iteration.",
        ],
      },
    ],
  },
  {
    id: "education",
    label: "05 / Education",
    title: "Academic background",
    content: null,
    education: [
      {
        degree: "B.Tech — Electronics & Telecommunication",
        institution: "Yeshwantrao Chavan College of Engineering, Nagpur",
        year: "2021 – 2025",
        icon: "🎓",
      },
      {
        degree: "Higher Secondary Certificate (12th)",
        institution: "Shri Samartha Junior College of Science, Akola",
        year: "2019 – 2021",
        percent: "93.00%",
        icon: "📘",
      },
      {
        degree: "Secondary School Certificate (10th)",
        institution: "Shri Swami Vivekanand English School, Akot",
        year: "2019",
        percent: "84.20%",
        icon: "📗",
      },
    ],
  },
  {
    id: "status",
    label: "06 / Right Now",
    title: "Open & ready to contribute",
    content:
      "I'm a fresher actively looking for AI developer roles and full-stack opportunities. I'm also open to freelance projects — websites, chatbots, AI integrations, and UI/UX design. I bring curiosity, consistency, and a genuine love for building. If you're looking for someone who will learn fast and ship faster — let's talk.",
  },
];

export default function AboutSection() {
  const [activeBlock, setActiveBlock] = useState(0);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    blockRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveBlock(i);
        },
        { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" },
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#0a0a0f] py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Section heading */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <p className="text-xs font-mono tracking-[0.3em] text-amber-400/70 uppercase mb-3">
          About Me
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          The story so far
        </h2>
      </div>

      {/* Sticky layout */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          {/* LEFT — Sticky image */}
          <div className="md:sticky md:top-24 md:w-85 shrink-0 self-start">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-4 rounded-3xl bg-amber-500/10 blur-2xl" />

              {/* Image frame */}
              <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/img.png"
                  alt="Gaurav Tarale"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#0a0a0f]/80 to-transparent" />
              </div>

              {/* Active block indicator */}
              <div className="mt-6 space-y-1.5">
                {blocks.map((b, i) => (
                  <div key={b.id} className="flex items-center gap-3">
                    <div
                      className={`h-0.5 transition-all duration-500 rounded-full ${
                        i === activeBlock
                          ? "w-8 bg-amber-400"
                          : i < activeBlock
                            ? "w-4 bg-white/30"
                            : "w-2 bg-white/15"
                      }`}
                    />
                    <span
                      className={`text-xs font-mono transition-all duration-300 ${
                        i === activeBlock ? "text-amber-400" : "text-white/25"
                      }`}
                    >
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Scrollable blocks */}
          <div className="flex-1 space-y-24 pb-16">
            {blocks.map((block, i) => (
              <div
                key={block.id}
                ref={(el) => {
                  blockRefs.current[i] = el;
                }}
                className={`transition-all duration-700 ${
                  i === activeBlock
                    ? "opacity-100 translate-y-0"
                    : "opacity-30 translate-y-4"
                }`}
              >
                {/* Label */}
                <p className="text-xs font-mono tracking-[0.25em] text-amber-400/60 uppercase mb-4">
                  {block.label}
                </p>

                {/* Title */}
                <h3
                  className="text-2xl md:text-3xl font-bold text-white mb-5 leading-snug"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {block.title}
                </h3>

                {/* Plain text block */}
                {block.content && (
                  <p className="text-white/60 text-base md:text-lg leading-relaxed">
                    {block.content}
                  </p>
                )}

                {/* Experience cards */}
                {block.experience && (
                  <div className="space-y-4 mt-2">
                    {block.experience.map((exp) => (
                      <div
                        key={exp.company}
                        className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-amber-400/30 hover:bg-white/8 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <p className="text-white font-semibold text-base">
                              {exp.role}
                            </p>
                            <p className="text-amber-400/80 text-sm font-medium mt-0.5">
                              {exp.company}
                            </p>
                          </div>
                          <span className="text-xs text-white/40 font-mono whitespace-nowrap mt-1">
                            {exp.duration}
                          </span>
                        </div>
                        <ul className="space-y-1.5">
                          {exp.points.map((pt, j) => (
                            <li
                              key={j}
                              className="flex gap-2 text-sm text-white/55 leading-relaxed"
                            >
                              <span className="text-amber-400/50 mt-1 shrink-0">
                                ▸
                              </span>
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Education cards */}
                {block.education && (
                  <div className="space-y-4 mt-2">
                    {block.education.map((edu) => (
                      <div
                        key={edu.degree}
                        className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-amber-400/30 transition-all duration-300"
                      >
                        <span className="text-2xl mt-0.5">{edu.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-semibold text-sm leading-snug">
                            {edu.degree}
                          </p>
                          <p className="text-white/50 text-xs mt-1">
                            {edu.institution}
                          </p>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="text-xs font-mono text-white/35">
                              {edu.year}
                            </span>
                            {edu.percent && (
                              <>
                                <span className="text-white/20">·</span>
                                <span className="text-xs font-mono text-amber-400/70">
                                  {edu.percent}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
