"use client";

import { useEffect, useRef } from "react";

// Subtle animated film grain overlay — fixed, pointer-events none, GPU layer.
export default function FilmGrain() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion: hide entirely.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    el.style.display = "";
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="animate-film-grain pointer-events-none fixed inset-0 z-[60] opacity-[0.045] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundSize: "220px 220px",
        display: "none",
      }}
    />
  );
}
