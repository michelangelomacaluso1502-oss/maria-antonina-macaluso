"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * IntroAnimation v7 — Golden Time Definitivo
 *
 * NO sessionStorage — l'intro appare SEMPRE ad ogni caricamento pagina
 * Timing molto lento per dare tempo di leggere ogni parola
 * Hold finale di 2s dove tutto è visibile come la reference
 *
 * Sequenza cinematografica (11s totali + 1s fade out = 12s):
 *   0.0-1.5s  → Letterbox bars entrano (molto lento)
 *   0.5-2.5s  → Sfondo + glow dorato + stelle
 *   2.0-3.5s  → Icona pellicola (scale lento + glow)
 *   3.0-4.5s  → "UNA PRODUZIONE SICILIANA" (tracking animato)
 *   4.0-6.0s  → "Maria Antonina" lettera per lettera (blur reveal lentissimo)
 *   5.8-7.5s  → "Macaluso" lettera per lettera (corsivo)
 *   7.2-8.5s  → "Attrice Siciliana" (fade up lento)
 *   8.0-9.5s  → Monogramma M·M (blur reveal estremo)
 *   9.5-11s   → HOLD — tutto visibile (come screenshot reference)
 *   11-12s    → Fade out fluido
 *
 * Architettura:
 *   - Solo transform e opacity (GPU-accelerated, 60fps)
 *   - will-change: transform, opacity
 *   - backface-visibility: hidden
 *   - Easing: [0.22, 1, 0.36, 1] (expo out)
 *   - prefers-reduced-motion: salta animazione (WCAG 2.1 AAA)
 *   - NO sessionStorage — appare sempre
 */
export function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  const EASE_CINEMA = [0.22, 1, 0.36, 1] as const;

  const stars = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.8,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 3,
        opacity: 0.4 + Math.random() * 0.5,
      })),
    []
  );

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(false);
      return;
    }

    // NO sessionStorage — l'intro appare SEMPRE

    // Progress bar molto lento (12s totali)
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 0.9; // ~12s totali
      });
    }, 100);

    // Fade out a 11s, rimosso a 12s
    const fadeTimer = setTimeout(() => setIsVisible(false), 11000);
    const removeTimer = setTimeout(() => {
      const el = document.querySelector('[role="progressbar"]');
      if (el && el.parentNode) el.remove();
    }, 12000);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden"
          role="progressbar"
          aria-label="Caricamento sito Maria Antonina Macaluso"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, #803322 0%, #7C2D12 35%, #5C2419 70%, #4A1C14 100%)",
            willChange: "opacity",
          }}
        >
          {/* LETTERBOX BARS */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "12.5vh" }}
            transition={{ duration: 1.5, ease: EASE_CINEMA }}
            className="absolute top-0 left-0 right-0 bg-black z-20"
            style={{ willChange: "height" }}
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "12.5vh" }}
            transition={{ duration: 1.5, delay: 0.2, ease: EASE_CINEMA }}
            className="absolute bottom-0 left-0 right-0 bg-black z-20"
            style={{ willChange: "height" }}
          />

          {/* GLOW DORATO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 0.3, scale: 1.3 }}
            transition={{ duration: 2.5, delay: 0.5, ease: EASE_CINEMA }}
            className="absolute w-[85vw] h-[85vw] max-w-[650px] max-h-[650px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, rgba(212, 175, 55, 0.06) 40%, transparent 70%)",
              willChange: "transform, opacity",
            }}
          />

          {/* STELLE */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
              <motion.div
                key={star.id}
                className="absolute rounded-full"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  backgroundColor: star.size > 1.8 ? "#FFF8DC" : "#FFE4B5",
                  willChange: "transform, opacity",
                  filter: star.size > 2 ? "blur(0.5px)" : "none",
                }}
                animate={{
                  opacity: [star.opacity * 0.2, star.opacity, star.opacity * 0.2],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: star.duration,
                  repeat: Infinity,
                  delay: star.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* CONTENUTO CENTRALE */}
          <div
            className="relative z-10 text-center px-6"
            style={{ willChange: "transform, opacity" }}
          >
            {/* ICONA PELLICOLA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 2.0, ease: EASE_CINEMA }}
              className="flex justify-center mb-6"
              style={{ willChange: "transform, opacity" }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 64 64"
                fill="none"
                style={{
                  color: "#FF6B35",
                  willChange: "transform, opacity",
                  filter: "drop-shadow(0 0 12px rgba(255, 107, 53, 0.45))",
                }}
              >
                <rect x="6" y="14" width="52" height="36" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                {[9, 16, 23, 30, 37, 44, 51].map((x) => (
                  <rect key={`top-${x}`} x={x} y="17" width="3" height="3" fill="currentColor" />
                ))}
                {[9, 16, 23, 30, 37, 44, 51].map((x) => (
                  <rect key={`bot-${x}`} x={x} y="44" width="3" height="3" fill="currentColor" />
                ))}
                <rect x="20" y="20" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
                <path d="M28 26 L28 38 L38 32 Z" fill="currentColor" opacity="0.9" />
              </svg>
            </motion.div>

            {/* "UNA PRODUZIONE SICILIANA" */}
            <motion.p
              initial={{ opacity: 0, y: -8, letterSpacing: "0.6em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.3em" }}
              transition={{ duration: 1.5, delay: 3.0, ease: EASE_CINEMA }}
              className="text-[#FF6B35] text-[10px] md:text-xs font-semibold uppercase mb-10"
              style={{
                willChange: "transform, opacity",
                textShadow: "0 0 18px rgba(255, 107, 53, 0.4)",
              }}
            >
              Una Produzione Siciliana
            </motion.p>

            {/* NOME "Maria Antonina" */}
            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-medium"
              style={{ willChange: "transform, opacity", lineHeight: 1 }}
            >
              <span className="block">
                {"Maria Antonina".split("").map((letter, i) => (
                  <motion.span
                    key={`ma-${i}`}
                    initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 1,
                      delay: 4.0 + i * 0.1,
                      ease: EASE_CINEMA,
                    }}
                    className="inline-block"
                    style={{
                      color: "#D4AF37",
                      willChange: "transform, opacity, filter",
                      textShadow:
                        "0 0 40px rgba(212, 175, 55, 0.5), 2px 2px 4px rgba(74, 28, 20, 0.6)",
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
              {/* COGNOME "Macaluso" */}
              <span className="block italic mt-1">
                {"Macaluso".split("").map((letter, i) => (
                  <motion.span
                    key={`mc-${i}`}
                    initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 1,
                      delay: 5.8 + i * 0.1,
                      ease: EASE_CINEMA,
                    }}
                    className="inline-block"
                    style={{
                      color: "#FF6B35",
                      willChange: "transform, opacity, filter",
                      textShadow:
                        "0 0 35px rgba(255, 107, 53, 0.45), 2px 2px 4px rgba(74, 28, 20, 0.5)",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* "ATTRICE SICILIANA" */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.82, y: 0 }}
              transition={{ duration: 1.3, delay: 7.2, ease: EASE_CINEMA }}
              className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase mt-7 mb-10"
              style={{
                color: "#CFC4B8",
                willChange: "transform, opacity",
              }}
            >
              Attrice Siciliana
            </motion.p>

            {/* MONOGRAMMA M·M */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.9, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 8.0, ease: EASE_CINEMA }}
              className="flex items-center justify-center gap-1 mb-10"
              style={{ willChange: "transform, opacity, filter" }}
            >
              <span
                className="font-display text-4xl md:text-5xl"
                style={{
                  background: "linear-gradient(180deg, #FFF8DC 0%, #D4AF37 45%, #8B6914 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 50px rgba(212, 175, 55, 0.5)",
                  willChange: "transform, opacity",
                }}
              >
                M
              </span>
              <span
                className="font-display text-2xl md:text-3xl -translate-y-1"
                style={{ color: "#D4A574", willChange: "transform" }}
              >
                ·
              </span>
              <span
                className="font-display text-4xl md:text-5xl"
                style={{
                  background: "linear-gradient(180deg, #FFF8DC 0%, #D4AF37 45%, #8B6914 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 50px rgba(212, 175, 55, 0.5)",
                  willChange: "transform, opacity",
                }}
              >
                M
              </span>
            </motion.div>

            {/* BARRA DI PROGRESSO */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 9.0, duration: 0.6 }}
              className="mx-auto w-48 h-px bg-white/15 rounded-full overflow-hidden"
              style={{ willChange: "opacity" }}
            >
              <div
                className="h-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                style={{
                  width: `${progress}%`,
                  willChange: "width",
                  transition: "width 0.2s linear",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroAnimation;
