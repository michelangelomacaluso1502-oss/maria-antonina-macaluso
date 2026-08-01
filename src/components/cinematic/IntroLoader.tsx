"use client";

import { useEffect, useState } from "react";

/**
 * IntroLoader — Pre-entry cinematografica con monogramma MAM
 *
 * Sequenza (5.5s totali):
 * 0.0s → Letterbox bars appaiono
 * 0.3s → Icona film dorata fade-in + scale
 * 0.8s → "Una produzione siciliana" fade-up
 * 1.5s → Monogramma MAM con blur reveal + glow dorato
 * 2.8s → "Maria Antonina Macaluso" fade-up
 * 3.5s → Barra di caricamento oro
 * 4.8s → Dissolvenza completa
 * 5.5s → Rimozione
 */
export default function IntroLoader() {
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setPhase(1), 400));   // icona
    timers.push(setTimeout(() => setPhase(2), 1000));  // sottotitolo
    timers.push(setTimeout(() => setPhase(3), 1800));  // MAM monogramma
    timers.push(setTimeout(() => setPhase(4), 3400));  // nome completo
    timers.push(setTimeout(() => setPhase(5), 4200));  // barra caricamento
    timers.push(setTimeout(() => setPhase(6), 5800));  // fadeout
    timers.push(
      setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "";
      }, 6500),
    );

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-noir transition-all duration-[1000ms] ease-out"
      style={{
        opacity: phase >= 6 ? 0 : 1,
        pointerEvents: phase >= 6 ? "none" : "auto",
      }}
      aria-hidden="true"
    >
      {/* Letterbox bars */}
      <div
        className="absolute top-0 inset-x-0 bg-black transition-all duration-700 ease-out"
        style={{ height: phase >= 0 ? "8vh" : "0vh" }}
      />
      <div
        className="absolute bottom-0 inset-x-0 bg-black transition-all duration-700 ease-out"
        style={{ height: phase >= 0 ? "8vh" : "0vh" }}
      />

      {/* Glow dorato dietro il monogramma */}
      <div
        className="absolute rounded-full transition-all duration-[1500ms] ease-out"
        style={{
          width: "60vw",
          height: "60vw",
          maxWidth: "400px",
          maxHeight: "400px",
          background:
            "radial-gradient(circle, rgba(201,169,106,0.18) 0%, rgba(201,169,106,0.05) 40%, transparent 70%)",
          opacity: phase >= 3 ? 1 : 0,
          transform: phase >= 3 ? "scale(1)" : "scale(0.5)",
        }}
      />

      {/* Contenuto centrale */}
      <div className="relative z-10 text-center px-6">
        {/* Icona film dorata */}
        <div
          className="inline-flex items-center justify-center mb-8 transition-all duration-[800ms] ease-out"
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "scale(1)" : "scale(0.7)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-10 w-10 text-gold"
            aria-hidden="true"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M7 3v18" />
            <path d="M3 7.5h4" />
            <path d="M3 12h18" />
            <path d="M3 16.5h4" />
            <path d="M17 3v18" />
            <path d="M17 7.5h4" />
            <path d="M17 16.5h4" />
          </svg>
        </div>

        {/* Sottotitolo */}
        <p
          className="text-[10px] uppercase tracking-[0.4em] text-gold/70 mb-6 transition-all duration-[800ms] ease-out"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <span>Una produzione siciliana</span>
        </p>

        {/* Monogramma MAM con blur reveal */}
        <div
          className="flex items-center justify-center gap-1 mb-8 transition-all duration-[1200ms] ease-out"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? "translateY(0) scale(1)" : "translateY(30px) scale(0.9)",
            filter: phase >= 3 ? "blur(0px)" : "blur(16px)",
          }}
        >
          <span
            className="font-display text-6xl md:text-8xl"
            style={{
              background: "linear-gradient(180deg, #f5efe4 0%, #c9a96a 50%, #8a6f3f 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 60px rgba(201,169,106,0.4)",
            }}
          >
            M
          </span>
          <span
            className="font-display text-3xl md:text-5xl"
            style={{ color: "#d4a5a5", transform: "translateY(-0.1em)" }}
          >
            ·
          </span>
          <span
            className="font-display text-6xl md:text-8xl"
            style={{
              background: "linear-gradient(180deg, #f5efe4 0%, #c9a96a 50%, #8a6f3f 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 60px rgba(201,169,106,0.4)",
            }}
          >
            M
          </span>
        </div>

        {/* Nome completo */}
        <div
          className="font-display text-2xl md:text-4xl text-cream transition-all duration-[800ms] ease-out"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <span>Maria Antonina</span>{" "}
          <span className="text-gold italic">Macaluso</span>
        </div>

        {/* Barra di caricamento */}
        <div
          className="mt-8 mx-auto w-48 h-px bg-cream/15 overflow-hidden transition-all duration-500"
          style={{ opacity: phase >= 5 ? 1 : 0 }}
        >
          <div
            className="h-full w-1/2 bg-gold transition-transform duration-[1500ms] ease-out"
            style={{
              transform: phase >= 5 ? "translateX(100%)" : "translateX(-100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
