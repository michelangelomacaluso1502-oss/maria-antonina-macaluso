"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * IntroAnimation v9 — Nome SEMPRE visibile e leggibile
 *
 * PROBLEMA RISOLTO: il nome non era leggibile perché:
 * 1. initial={{ opacity: 0 }} lo nascondeva fino al delay
 * 2. filter: blur(12px) rendeva le lettere illeggibili
 *
 * SOLUZIONE: il nome appare con fade-in leggero (no blur), leggibile subito
 *
 * Sequenza (8s totali):
 *   0.0-0.8s  → Letterbox bars + sfondo
 *   0.3-1.0s  → Icona pellicola (fade-in)
 *   0.5-1.0s  → "UNA PRODUZIONE SICILIANA" (fade-in)
 *   0.8-1.5s  → "Maria Antonina" (fade-in, NO blur, leggibile subito)
 *   1.2-1.8s  → "Macaluso" (fade-in, NO blur)
 *   1.5-2.0s  → "Attrice Siciliana" (fade-in)
 *   2.0-4.0s  → M·M monogramma (blur reveal LENTO — rimane sfocato come reference)
 *   4.0-7.0s  → HOLD (nome nitido, M·M che finisce)
 *   7.0-8.0s  → Fade out
 */
export function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  const EASE = [0.22, 1, 0.36, 1] as const;

  const stars = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.8,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 3,
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

    const fadeTimer = setTimeout(() => setIsVisible(false), 7000);
    const removeTimer = setTimeout(() => {
      const el = document.querySelector('[role="progressbar"]');
      if (el && el.parentNode) el.remove();
      // Assicura che il body possa scorrere dopo la rimozione dell'overlay
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }, 8000);

    return () => {
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
          aria-valuenow={70}
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
            transition={{ duration: 0.8, ease: EASE }}
            className="absolute top-0 left-0 right-0 bg-black z-20"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "12.5vh" }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="absolute bottom-0 left-0 right-0 bg-black z-20"
          />

          {/* GLOW DORATO */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute w-[85vw] h-[85vw] max-w-[650px] max-h-[650px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, rgba(212, 175, 55, 0.06) 40%, transparent 70%)",
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
                }}
              />
            ))}
          </div>

          {/* CONTENUTO CENTRALE — nome SEMPRE leggibile */}
          <div className="relative z-10 text-center px-6">
            {/* ICONA PELLICOLA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center mb-6"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 64 64"
                fill="none"
                style={{
                  color: "#FF6B35",
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[#FF6B35] text-[10px] md:text-xs font-semibold uppercase mb-10"
              style={{
                letterSpacing: "0.3em",
                textShadow: "0 0 18px rgba(255, 107, 53, 0.4)",
              }}
            >
              Una Produzione Siciliana
            </motion.p>

            {/* NOME "Maria Antonina" — NO blur, fade-in, leggibile subito */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-medium"
              style={{ lineHeight: 1 }}
            >
              <span className="block" style={{
                color: "#D4AF37",
                textShadow: "0 0 40px rgba(212, 175, 55, 0.5), 2px 2px 4px rgba(74, 28, 20, 0.6)",
              }}>
                Maria Antonina
              </span>
              <span className="block italic mt-1" style={{
                color: "#FF6B35",
                textShadow: "0 0 35px rgba(255, 107, 53, 0.45), 2px 2px 4px rgba(74, 28, 20, 0.5)",
              }}>
                Macaluso
              </span>
            </motion.h1>

            {/* "ATTRICE SICILIANA" */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.82 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase mt-7 mb-10"
              style={{ color: "#CFC4B8" }}
            >
              Attrice Siciliana
            </motion.p>

            {/* MONOGRAMMA M·M — blur reveal LENTO come reference */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(20px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 2.5,
                delay: 2.0,
                ease: EASE,
              }}
              className="flex items-center justify-center gap-1 mb-10"
            >
              <span
                className="font-display text-4xl md:text-5xl"
                style={{
                  background: "linear-gradient(180deg, #FFF8DC 0%, #D4AF37 45%, #8B6914 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 50px rgba(212, 175, 55, 0.5)",
                }}
              >
                M
              </span>
              <span
                className="font-display text-2xl md:text-3xl"
                style={{ color: "#D4A574", transform: "translateY(-0.3rem)" }}
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
                }}
              >
                M
              </span>
            </motion.div>

            {/* BARRA DI PROGRESSO */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="mx-auto w-48 h-px bg-white/15 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, delay: 2.5, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroAnimation;
