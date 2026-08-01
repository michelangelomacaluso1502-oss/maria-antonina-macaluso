"use client";

import { useEffect, useState } from "react";
import { Film } from "lucide-react";

/**
 * IntroLoader — Pre-entry cinematografica (stile Angelo Faraci)
 *
 * Struttura:
 * - Overlay fisso z-[200] con sfondo vinato scuro
 * - Barre nere letterbox in alto/basso (10vh)
 * - Icona film dorata → scale reveal
 * - "Una produzione siciliana" → fade-up
 * - "Maria Antonina Macaluso" → fade-up (Macaluso in italico dorato)
 * - Barra di caricamento oro → scorrimento
 * - Dissolvenza completa → rimozione
 *
 * JavaScript-driven con opacity/transform transitions.
 * Skip se prefers-reduced-motion.
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

    // Phase sequence: 0=icon, 1=subtitle, 2=name, 3=progress, 4=fadeout
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setPhase(1), 200));
    timers.push(setTimeout(() => setPhase(2), 600));
    timers.push(setTimeout(() => setPhase(3), 1000));
    timers.push(setTimeout(() => setPhase(4), 2200));
    timers.push(
      setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "";
      }, 2800),
    );

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-noir transition-all duration-700"
      style={{
        opacity: phase >= 4 ? 0 : 1,
        pointerEvents: phase >= 4 ? "none" : "auto",
      }}
      aria-hidden="true"
    >
      {/* Letterbox bars */}
      <div className="absolute top-0 inset-x-0 h-[8vh] bg-black" />
      <div className="absolute bottom-0 inset-x-0 h-[8vh] bg-black" />

      {/* Contenuto centrale */}
      <div className="text-center px-6">
        {/* Icona film dorata */}
        <div
          className="inline-flex items-center justify-center mb-6 transition-all duration-700 ease-out"
          style={{
            opacity: phase >= 0 ? 1 : 0,
            transform: phase >= 0 ? "scale(1)" : "scale(0.8)",
          }}
        >
          <Film className="h-12 w-12 text-gold" />
        </div>

        {/* Sottotitolo */}
        <p
          className="text-[10px] uppercase tracking-[0.4em] text-gold/70 mb-3 transition-all duration-700 ease-out"
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <span>Una produzione siciliana</span>
        </p>

        {/* Nome */}
        <div
          className="font-display text-4xl md:text-6xl font-bold text-cream transition-all duration-700 ease-out"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <span>Maria Antonina</span>{" "}
          <span className="text-gold italic">Macaluso</span>
        </div>

        {/* Barra di caricamento */}
        <div
          className="mt-8 mx-auto w-48 h-px bg-cream/15 overflow-hidden transition-all duration-500"
          style={{ opacity: phase >= 3 ? 1 : 0 }}
        >
          <div
            className="h-full w-1/2 bg-gold transition-transform duration-[1200ms] ease-out"
            style={{
              transform: phase >= 3 ? "translateX(100%)" : "translateX(-100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
