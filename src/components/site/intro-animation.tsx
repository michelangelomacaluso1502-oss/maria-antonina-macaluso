"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * IntroAnimation v5 — Cinematografica Golden Time
 *
 * Reference: intro-v4-peak.png
 * Stile: Hollywood Golden Age, palette terrosa siciliana, fluidità estrema
 *
 * Sequenza cinematografica (5.5s totali + 0.8s fade out):
 *   0.0-0.8s  → Letterbox bars entrano lentamente (ease cinematico)
 *   0.3-1.2s  → Glow dorato centrale + stelle scintillanti
 *   0.8-1.6s  → Icona pellicola (scale + glow, fade lento)
 *   1.4-2.2s  → "UNA PRODUZIONE SICILIANA" (tracking ampio, fade up)
 *   2.0-3.0s  → "Maria Antonina" lettera per lettera (blur reveal lento)
 *   2.8-3.8s  → "Macaluso" lettera per lettera (corsivo, blur reveal)
 *   3.6-4.2s  → "Attrice Siciliana" (fade up, letter-spacing)
 *   4.0-5.0s  → Monogramma M·M (blur reveal estremo, gradient oro)
 *   5.0-5.5s  → Hold + progress bar completa
 *   5.5-6.3s  → Fade out fluido
 *
 * Architettura:
 *   - Solo transform e opacity (GPU-accelerated, 60fps)
 *   - will-change: transform, opacity
 *   - backface-visibility: hidden
 *   - Easing: [0.22, 1, 0.36, 1] (expo out) per fluidità estrema
 *   - prefers-reduced-motion: salta animazione (WCAG 2.1 AAA)
 *   - role="progressbar" con aria-valuenow dinamico
 *   - sessionStorage "intro-seen" per non ripetere
 */
export function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  // Easing cinematografico — expo out per fluidità estrema
  const EASE_CINEMA = [0.22, 1, 0.36, 1] as const;

  // Stelle generate una sola volta (memoizzate) — 35 particelle come reference
  const stars = useMemo(
    () =>
      Array.from({ length: 35 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.8,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 3,
        opacity: 0.3 + Math.random() * 0.5,
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

    const seen = sessionStorage.getItem("intro-seen");
    if (seen) {
      setIsVisible(false);
      return;
    }

    // Progress bar più lento (6s totali, +1.2 ogni 70ms)
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem("intro-seen", "true");
          }, 600);
          return 100;
        }
        return p + 1.4;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden"
          role="progressbar"
          aria-label="Caricamento sito Maria Antonina Macaluso"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{
            // Gradiente radiale come reference: terracotta centro → cioccolato bordi
            background:
              "radial-gradient(ellipse at 50% 40%, #A0522D 0%, #7C2D12 40%, #5C2E1B 75%, #4A1D0E 100%)",
            willChange: "opacity",
          }}
        >
          {/* === LETTERBOX BARS cinematografiche (entrate lente) === */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "13vh" }}
            transition={{ duration: 0.8, ease: EASE_CINEMA }}
            className="absolute top-0 left-0 right-0 bg-black z-20"
            style={{ willChange: "height" }}
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "13vh" }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE_CINEMA }}
            className="absolute bottom-0 left-0 right-0 bg-black z-20"
            style={{ willChange: "height" }}
          />

          {/* === GLOW DORATO CENTRALE (lume di proiezione) === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 0.35, scale: 1.2 }}
            transition={{ duration: 1.5, delay: 0.3, ease: EASE_CINEMA }}
            className="absolute w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 215, 0, 0.18) 0%, rgba(212, 175, 55, 0.08) 40%, transparent 70%)",
              willChange: "transform, opacity",
            }}
          />

          {/* === STELLE/POLVERE DORATA (35 particelle) === */}
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
                  backgroundColor: star.size > 1.8 ? "#FFD700" : "#FFE4B5",
                  willChange: "transform, opacity",
                  filter: star.size > 2 ? "blur(0.5px)" : "none",
                }}
                animate={{
                  opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
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

          {/* === CONTENUTO CENTRALE === */}
          <div
            className="relative z-10 text-center px-6"
            style={{ willChange: "transform, opacity" }}
          >
            {/* === ICONA PELLICOLA (line art sottile, arancione) === */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 8 }}
              animate={{ opacity: 0.95, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8, ease: EASE_CINEMA }}
              className="flex justify-center mb-5"
              style={{ willChange: "transform, opacity" }}
            >
              <svg
                width="52"
                height="52"
                viewBox="0 0 64 64"
                fill="none"
                style={{
                  color: "#FF8C00",
                  willChange: "transform, opacity",
                  filter: "drop-shadow(0 0 14px rgba(255, 140, 0, 0.5))",
                }}
              >
                {/* Frame esterno line art */}
                <rect
                  x="6"
                  y="14"
                  width="52"
                  height="36"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* Perforazioni superiori */}
                {[9, 16, 23, 30, 37, 44, 51].map((x) => (
                  <rect key={`top-${x}`} x={x} y="17" width="3" height="3" fill="currentColor" />
                ))}
                {/* Perforazioni inferiori */}
                {[9, 16, 23, 30, 37, 44, 51].map((x) => (
                  <rect key={`bot-${x}`} x={x} y="44" width="3" height="3" fill="currentColor" />
                ))}
                {/* Riquadro centrale */}
                <rect
                  x="20"
                  y="20"
                  width="24"
                  height="24"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  fill="none"
                />
                {/* Triangolo play */}
                <path d="M28 26 L28 38 L38 32 Z" fill="currentColor" opacity="0.9" />
              </svg>
            </motion.div>

            {/* === "UNA PRODUZIONE SICILIANA" === */}
            <motion.p
              initial={{ opacity: 0, y: -8, letterSpacing: "0.55em" }}
              animate={{ opacity: 0.9, y: 0, letterSpacing: "0.4em" }}
              transition={{ duration: 0.9, delay: 1.4, ease: EASE_CINEMA }}
              className="text-[#FF8C00] text-[10px] md:text-xs font-semibold uppercase mb-8"
              style={{
                willChange: "transform, opacity",
                textShadow: "0 0 20px rgba(255, 140, 0, 0.4)",
              }}
            >
              Una Produzione Siciliana
            </motion.p>

            {/* === NOME "Maria Antonina" (oro, blur reveal lento) === */}
            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-0"
              style={{
                willChange: "transform, opacity",
                lineHeight: 0.95,
              }}
            >
              <span className="block">
                {"Maria Antonina".split("").map((letter, i) => (
                  <motion.span
                    key={`ma-${i}`}
                    initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.7,
                      delay: 2.0 + i * 0.05,
                      ease: EASE_CINEMA,
                    }}
                    className="inline-block"
                    style={{
                      color: "#DAA520",
                      willChange: "transform, opacity, filter",
                      textShadow:
                        "0 0 40px rgba(255, 215, 0, 0.4), 2px 2px 4px rgba(74, 37, 13, 0.6)",
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
              {/* === COGNOME "Macaluso" (arancione corallo, corsivo) === */}
              <span className="block italic">
                {"Macaluso".split("").map((letter, i) => (
                  <motion.span
                    key={`mc-${i}`}
                    initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.7,
                      delay: 2.8 + i * 0.05,
                      ease: EASE_CINEMA,
                    }}
                    className="inline-block"
                    style={{
                      color: "#FF6B35",
                      willChange: "transform, opacity, filter",
                      textShadow:
                        "0 0 35px rgba(255, 107, 53, 0.4), 2px 2px 4px rgba(74, 37, 13, 0.5)",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* === "ATTRICE SICILIANA" (beige sabbia, tracking) === */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.75, y: 0 }}
              transition={{ duration: 0.8, delay: 3.6, ease: EASE_CINEMA }}
              className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase mt-6 mb-8"
              style={{
                color: "#C4A77D",
                willChange: "transform, opacity",
              }}
            >
              Attrice Siciliana
            </motion.p>

            {/* === MONOGRAMMA M·M (blur reveal estremo, gradient oro) === */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.92, filter: "blur(18px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 4.0, ease: EASE_CINEMA }}
              className="flex items-center justify-center gap-1 mb-10"
              style={{ willChange: "transform, opacity, filter" }}
            >
              <span
                className="font-display text-4xl md:text-5xl"
                style={{
                  background:
                    "linear-gradient(180deg, #FFE4B5 0%, #DAA520 40%, #8B6914 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 50px rgba(255, 215, 0, 0.5)",
                  willChange: "transform, opacity",
                }}
              >
                M
              </span>
              <span
                className="font-display text-2xl md:text-3xl -translate-y-1"
                style={{
                  color: "#D4A574",
                  willChange: "transform",
                }}
              >
                ·
              </span>
              <span
                className="font-display text-4xl md:text-5xl"
                style={{
                  background:
                    "linear-gradient(180deg, #FFE4B5 0%, #DAA520 40%, #8B6914 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 50px rgba(255, 215, 0, 0.5)",
                  willChange: "transform, opacity",
                }}
              >
                M
              </span>
            </motion.div>

            {/* === BARRA DI PROGRESSO (gradient oro) === */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.5, duration: 0.5 }}
              className="mx-auto w-48 h-px bg-white/15 rounded-full overflow-hidden"
              style={{ willChange: "opacity" }}
            >
              <div
                className="h-full bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
                style={{
                  width: `${progress}%`,
                  willChange: "width",
                  transition: "width 0.15s linear",
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
