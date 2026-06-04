"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Services", href: "services" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const heroBottom = hero.getBoundingClientRect().bottom;
      setVisible(heroBottom <= 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight active section on scroll
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href);
    const handleScroll = () => {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-in-out
          ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
      >
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-b border-white/20" />

        <div className="relative max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-9 h-9 rounded-xl overflow-hidden ring-1 ring-white/30 group-hover:ring-white/60 transition-all duration-300 cursor-pointer">
              <Image
                src="/GT.png"
                alt="Gaurav Tarale Logo"
                fill
                className="object-cover"
              />
            </div>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`
                  relative px-4 py-2 text-sm font-medium cursor-pointer rounded-lg
                  transition-all duration-300 group
                  ${
                    activeSection === link.href
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }
                `}
              >
                {/* Active indicator */}
                {activeSection === link.href && (
                  <span className="absolute inset-0 rounded-lg bg-white/15 border border-white/20" />
                )}
                <span className="relative">{link.label}</span>
              </button>
            ))}

            {/* Resume button */}
            <a
              href="/GauravTarale.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                ml-3 px-4 py-2 text-sm font-semibold rounded-lg
                bg-white text-gray-900
                hover:bg-white/90 active:scale-95
                transition-all duration-200
              "
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 group cursor-pointer"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`
            md:hidden absolute top-full left-0 right-0
            bg-black/80 backdrop-blur-md border-b border-white/10
            transition-all duration-300 overflow-hidden
            ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`
                  text-left px-4 py-3 rounded-lg text-sm font-medium cursor-pointer
                  transition-all duration-200
                  ${
                    activeSection === link.href
                      ? "bg-white/15 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                {link.label}
              </button>
            ))}
            <a
              href="/GauravTarale.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold bg-white text-gray-900 text-center"
            >
              Resume ↗
            </a>
          </div>
        </div>
      </nav>

      {/* Hero sentinel — wraps the scroll section */}
      <div id="hero" ref={heroRef} />
    </>
  );
}
