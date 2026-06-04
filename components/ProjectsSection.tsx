"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo?: string;
  demoLabel?: string;
  deployingSoon?: boolean;
  type: "dev" | "design";
}

const devProjects: Project[] = [
  {
    id: "ai-interview-mocker",
    name: "AI Interview Mocker",
    description:
      "A full-stack AI-powered platform that simulates real job interviews tailored to any role or company. Gemini AI dynamically generates role-specific interview questions and provides instant, detailed feedback with ratings and improvement suggestions after every answer. Features include live speech-to-text input, webcam preview during the interview, and a personal dashboard to review all past sessions. Built with secure Clerk authentication and persistent storage via Neon PostgreSQL — making it feel like a real interview environment, not just a chatbot.",
    tags: [
      "Next.js",
      "Gemini API",
      "Clerk",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
    ],
    image: "/projects/ai-interview-mocker.png",
    github: "https://github.com/GauravTarale77/AI-Interview-Mocker",
    demo: "https://ai-interview-mocker-dun-nine.vercel.app/",
    type: "dev",
  },
  {
    id: "multi-document-assistant",
    name: "Multi-Document Assistant",
    description:
      "A production-ready AI research assistant that lets you upload multiple documents — PDFs, DOCX, CSVs, TXT files, or even paste website URLs — and instantly ask questions across all of them. The system uses a RAG (Retrieval-Augmented Generation) pipeline to convert your documents into a searchable FAISS vector knowledge base, then retrieves the most relevant chunks and generates accurate, context-grounded answers using Groq LLM. Unlike regular chatbots limited by training data, this system reads and understands your actual documents in real time.",
    tags: [
      "Next.js",
      "LangChain",
      "FastAPI",
      "FAISS",
      "RAG",
      "Groq API",
      "Render",
      "Vercel",
    ],
    image: "/projects/multi-document-assistant.png",
    github: "https://github.com/GauravTarale77/Multi-Document-Assistant",
    demo: "https://multi-document-assistant.vercel.app/",
    type: "dev",
  },
  {
    id: "youtube-chatbot",
    name: "YouTube Chatbot",
    description:
      "A RAG-based AI chatbot that turns any YouTube video into an interactive knowledge source. Paste a YouTube URL, and the system automatically extracts the video transcript, splits it into chunks, and stores them in a FAISS vector database using HuggingFace embeddings. You can then ask any question about the video and get precise, context-grounded answers powered by Groq LLM — no need to watch the entire video. Perfect for learning from long lectures, tutorials, or conference talks in minutes.",
    tags: [
      "LangChain",
      "Python",
      "HuggingFace",
      "Groq API",
      "FAISS",
      "RAG",
      "Streamlit",
    ],
    image: "/projects/youtube-chatbot.png",
    github: "https://github.com/GauravTarale77/Youtube-Chatbot",
    demo: "https://youtube-chatbot-w2o2tmbex6um3w9zrfsovm.streamlit.app/",
    type: "dev",
  },
  {
    id: "image-classifier",
    name: "Image Classifier (TensorFlow)",
    description:
      "An intelligent image classification web app powered by a fine-tuned TensorFlow MobileNetV2 model trained on 11,000+ labeled animal images across multiple categories — achieving approximately 97% accuracy. Upload any animal image and the model predicts the category in real time. The backend is a Flask REST API deployed on Render for model inference, and the frontend is a clean Next.js interface on Vercel for image upload and result visualization with confidence scores.",
    tags: [
      "TensorFlow",
      "MobileNetV2",
      "Python",
      "Flask",
      "Next.js",
      "Render",
      "Vercel",
    ],
    image: "/projects/image-classifier.png",
    github: "https://github.com/GauravTarale77/Image-Classifier-TensorFlow-",
    demo: "https://image-classifier-tensor-flow.vercel.app/",
    type: "dev",
  },
  {
    id: "dog-vs-cat",
    name: "Dog vs Cat Classifier (PyTorch)",
    description:
      "A deep learning image classifier built with a custom Convolutional Neural Network (CNN) in PyTorch, trained to distinguish between dogs and cats with high accuracy. This project demonstrates end-to-end ML deployment — from model training and evaluation to a production Flask API on Render and a modern Next.js frontend on Vercel. Full CORS-enabled communication between frontend and backend makes it a complete, deployable deep learning web application.",
    tags: [
      "PyTorch",
      "CNN",
      "Flask",
      "Next.js",
      "Tailwind CSS",
      "Render",
      "Vercel",
    ],
    image: "/projects/dog-vs-cat.png",
    github: "https://github.com/GauravTarale77/Dog-vs-Cat-Classifier-PyTorch-",
    demo: "https://dog-vs-cat-classifier-py-torch.vercel.app/",
    type: "dev",
  },
  {
    id: "expense-tracker",
    name: "Expense Tracker",
    description:
      "A modern full-stack personal finance application for managing budgets and tracking daily expenses. Users can sign up securely with Clerk authentication, create multiple budgets, add categorized expenses, and view their financial health through intuitive charts and analytics. Built with a mobile-first responsive design using Next.js and Tailwind CSS, with persistent data storage via Neon PostgreSQL. A practical tool that makes personal finance management simple, visual, and secure.",
    tags: ["Next.js", "Clerk", "PostgreSQL", "Neon", "Tailwind CSS", "Vercel"],
    image: "/projects/expense-tracker.png",
    github: "https://github.com/GauravTarale77/Expense-Tracker",
    demo: "https://expense-tracker-gauravtarale.vercel.app",
    type: "dev",
  },
  {
    id: "password-manager",
    name: "Password Manager (MongoDB)",
    description:
      "A secure full-stack password manager that lets users store, retrieve, and delete credentials with a clean and modern interface. All passwords are persisted in MongoDB via a Node.js + Express.js REST API backend, ensuring your data survives page refreshes. Built with React and Tailwind CSS for a smooth, responsive experience. Designed with a strong focus on usability and security — a practical utility project demonstrating full-stack CRUD operations and REST API design.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Vercel",
    ],
    image: "/projects/password-manager.png",
    github: "https://github.com/GauravTarale77/PasswordManager-Mongodb-",
    demo: "https://password-manager-local-storage-theta.vercel.app",
    type: "dev",
  },
  {
    id: "ai-todo",
    name: "AI Powered Todo List",
    description:
      "A smart task management app that goes beyond a regular todo list by integrating CopilotKit and OpenAI API to bring AI assistance directly into your workflow. The AI can help you break down complex tasks, suggest priorities, and even auto-generate subtasks based on your goals. Features include real-time task management, AI chat sidebar powered by CopilotKit, and a clean intuitive interface — showcasing how AI can be embedded seamlessly into everyday productivity tools.",
    tags: ["Next.js", "CopilotKit", "OpenAI API", "React", "Tailwind CSS"],
    image: "/projects/ai-todo.png",
    github: "https://github.com/GauravTarale77/Todo-List-Powered-by-AI",
    deployingSoon: true,
    type: "dev",
  },
];

const figmaProjects: Project[] = [
  {
    id: "figma-cvmaker",
    name: "CV Maker Powered by AI",
    description:
      "A UI/UX design concept for an AI-powered CV builder platform. Includes Signup, Sign In, and the main CVRobo dashboard page — designed with a clean, modern interface that makes resume creation intuitive and intelligent.",
    tags: ["UI/UX Design", "Figma", "AI Product Design"],
    image: "/projects/figma-cvmaker.png",
    github: "https://github.com/GauravTarale77/Figma-Projects",
    type: "design",
  },
  {
    id: "figma-construction",
    name: "Construction App",
    description:
      "A mobile and desktop UI design for a construction management application. Includes Signup, Sign In, main construction dashboard, and a responsive mobile view — built with a professional, structured visual style suited for the construction industry.",
    tags: ["UI/UX Design", "Figma", "Mobile Design", "Desktop Design"],
    image: "/projects/figma-construction.png",
    github: "https://github.com/GauravTarale77/Figma-Projects",
    type: "design",
  },
  {
    id: "figma-skywings",
    name: "Skywings",
    description:
      "A sleek landing page UI design for Skywings — a concept aviation or travel brand. Designed with bold typography, clean layouts, and an elevated visual identity that communicates speed, freedom, and modernity.",
    tags: ["UI/UX Design", "Figma", "Landing Page"],
    image: "/projects/figma-skywings.png",
    github: "https://github.com/GauravTarale77/Figma-Projects",
    type: "design",
  },
];

// Browser mockup frame wrapper
function BrowserMockup({
  image,
  name,
  onPreview,
}: {
  image: string;
  name: string;
  onPreview: () => void;
}) {
  return (
    <div className="relative rounded-xl overflow-hidden border border-white/10 group/img">
      {/* Browser chrome bar */}
      <div className="bg-[#1e1e2e] border-b border-white/10 px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 bg-white/5 rounded-md h-4 mx-2 flex items-center px-2">
          <div className="w-2 h-2 rounded-full bg-white/20 mr-1.5" />
          <div className="h-1.5 bg-white/15 rounded-full w-24" />
        </div>
      </div>

      {/* Screenshot */}
      <div className="relative aspect-video overflow-hidden bg-[#0d0d14]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
        />
        {/* Hover overlay with preview button */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-all duration-300 flex items-center justify-center">
          <button
            onClick={onPreview}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm font-medium hover:bg-white/20 transition-all duration-200 cursor-pointer"
          >
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
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            Preview
          </button>
        </div>
      </div>
    </div>
  );
}

// Individual project card
function ProjectCard({
  project,
  onPreview,
}: {
  project: Project;
  onPreview: (image: string, name: string) => void;
}) {
  return (
    <div className="group relative bg-white/3 border border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/30 hover:bg-white/6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-400/5 flex flex-col">
      {/* Browser mockup image */}
      <div className="p-3 pb-0">
        <BrowserMockup
          image={project.image}
          name={project.name}
          onPreview={() => onPreview(project.image, project.name)}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Name + deploy badge */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3
            className="text-lg font-bold text-white leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {project.name}
          </h3>
          {project.deployingSoon && (
            <span className="shrink-0 text-xs px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 font-mono">
              Deploy soon
            </span>
          )}
          {project.type === "design" && (
            <span className="shrink-0 text-xs px-2.5 py-1 rounded-full bg-purple-400/10 border border-purple-400/20 text-purple-400 font-mono">
              UI/UX
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-white/55 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/50 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm font-medium hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-200"
          >
            {/* GitHub icon */}
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>

          {project.demo && !project.deployingSoon && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-medium hover:bg-amber-400/20 hover:border-amber-400/40 transition-all duration-200"
            >
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Lightbox
function Lightbox({
  image,
  name,
  onClose,
}: {
  image: string;
  name: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-9999 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-all duration-200 cursor-pointer"
        >
          ✕
        </button>

        {/* Browser bar */}
        <div className="bg-[#1e1e2e] border-b border-white/10 px-4 py-2.5 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <div className="flex-1 bg-white/5 rounded-md h-5 mx-3 flex items-center px-3">
            <span className="text-white/30 text-xs font-mono">{name}</span>
          </div>
        </div>

        {/* Full image */}
        <div className="relative overflow-auto max-h-[80vh] bg-[#0d0d14]">
          <img src={image} alt={name} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(2);
  const [lightbox, setLightbox] = useState<{
    image: string;
    name: string;
  } | null>(null);

  const visibleProjects = devProjects.slice(0, visibleCount);
  const hasMore = visibleCount < devProjects.length;

  const openLightbox = (image: string, name: string) => {
    setLightbox({ image, name });
  };

  const closeLightbox = () => setLightbox(null);

  return (
    <section id="projects" className="relative bg-[#0a0a0f] pt-10 pb-24">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-125 h-50 bg-amber-500/5 blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="mb-14">
          <p className="text-xs font-mono tracking-[0.3em] text-amber-400/70 uppercase mb-3">
            My Work
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Projects I've built
          </h2>
          <p className="text-white/40 text-sm mt-3">
            Real deployed applications — not just local demos.
          </p>
        </div>

        {/* Dev projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPreview={openLightbox}
            />
          ))}
        </div>

        {/* Load more button */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() =>
                setVisibleCount((c) => Math.min(c + 2, devProjects.length))
              }
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/70 text-sm font-medium hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 group cursor-pointer"
            >
              <span>Load more projects</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}

        {/* ── Design Work ── */}
        <div className="mt-24">
          <div className="mb-10">
            <p className="text-xs font-mono tracking-[0.3em] text-purple-400/70 uppercase mb-3">
              Design Work
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              UI/UX & Figma Projects
            </h2>
            <p className="text-white/40 text-sm mt-3">
              Interfaces designed in Figma — focused on clean, modern user
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {figmaProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onPreview={openLightbox}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          image={lightbox.image}
          name={lightbox.name}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}
