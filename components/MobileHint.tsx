"use client";

import { useEffect, useState } from "react";

export default function MobileHint() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on mobile/tablet (screen width < 1024px)
    if (window.innerWidth < 1024) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`
        fixed bottom-6 left-1/2 -translate-x-1/2 z-999
        flex items-center gap-3
        bg-white/10 backdrop-blur-md
        border border-white/20
        rounded-2xl px-5 py-3 shadow-2xl
        transition-all duration-500
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <span className="text-lg">🖥️</span>
      <div>
        <p className="text-white text-sm font-medium leading-tight">
          Best viewed on desktop
        </p>
        <p className="text-white/50 text-xs mt-0.5">
          Some animations may vary on mobile
        </p>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="ml-2 text-white/40 hover:text-white/80 transition-colors text-lg leading-none"
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  );
}
