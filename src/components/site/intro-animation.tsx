"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * IntroAnimation v4 — Preloader cinematografico Hollywood-style
 *
 * Sequenza cinematografica (3.5s totali + 0.5s fade out):
 *   0.0-0.4s  → Letterbox bars entrano da sopra/sotto
 *   0.2-0.6s  → Glow dorato centrale + stelle scintillanti dorate
 *   0.4-0.8s  → Icona pellicola cinematografica (scale + glow)
 *   0.8-1.2s  → "UNA PRODUZIONE SICILIANA" (arancione, maiuscolo, tracking ampio)
 *   1.2-1.8s  → "Maria Antonina" lettera per lettera (oro, Playfair Display)
 *   1.6-2.0s  → "Macaluso" lettera per lettera (arancione, corsivo elegante)
 *   2.0-2.4s  → "Attrice Siciliana" (bianco opaco, letter-spacing)
 *   2.4-3.0s  → Monogramma M·M (blur reveal, gradient oro)
 *   3.0-3.4s  → Hold + progress bar completa
 *   3.4-3.9s  → Fade out fluido
 *
 * Architettura:
 *   - Solo transform e opacity (GPU-accelerated, 60fps)
 *   - will-change: transform, opacity
 *   - backface-visibility: hidden
 *   - prefers-reduced-motion: salta animazione (WCAG 2.1 AAA)
 *   - role="progressbar" con aria-valuenow dinamico
 *   - sessionStorage "intro-seen" per non ripetere
 *   - Letterbox bars cinematografiche
 *   - Glow dorato centrale
 *   - Stelle scintillanti
 */
export function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  // Stelle generate una sola volta (memoizzate)
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 2,
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

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem("intro-seen", "true");
          }, 400);
          return 100;
        }
        return p + 2;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-gradient-to-br from-[#7c2d12] via-[#5a1f0b] to-[#4a1d0e] flex items-center justify-center overflow-hidden"
          role="progressbar"
          aria-label="Caricamento sito Maria Antonina Macaluso"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {/* === LETTERBOX BARS cinematografiche === */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "9vh" }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
            className="absolute top-0 left-0 right-0 bg-black z-20"
            style={{ willChange: "height" }}
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "9vh" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.7, 0, 0.3, 1] }}
            className="absolute bottom-0 left-0 right-0 bg-black z-20"
            style={{ willChange: "height" }}
          />

          {/* === GLOW DORATO CENTRALE === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 0.4, scale: 1.1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute w-[70vw] h-[70vw] max-w-[500px] max-h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, rgba(212, 175, 55, 0.08) 40%, transparent 70%)",
              willChange: "transform, opacity",
            }}
          />

          {/* === STELLE SCINTILLANTI DORATE === */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
              <motion.div
                key={star.id}
                className="absolute rounded-full bg-[#d4af37]"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  willChange: "transform, opacity",
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1],
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
            {/* Icona pellicola cinematografica SVG */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center mb-6"
              style={{ willChange: "transform, opacity" }}
            >
              <svg
                width="56"
                height="56"
                viewBox="0 0 64 64"
                fill="none"
                className="text-[#f97316]"
                style={{
                  willChange: "transform, opacity",
                  filter: "drop-shadow(0 0 16px rgba(249, 115, 22, 0.6))",
                }}
              >
                <rect
                  x="6"
                  y="14"
                  width="52"
                  height="36"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  fill="rgba(249, 115, 22, 0.08)"
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
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* Triangolo play */}
                <path d="M28 26 L28 38 L38 32 Z" fill="currentColor" opacity="0.95" />
              </svg>
            </motion.div>

            {/* Testo superiore "UNA PRODUZIONE SICILIANA" */}
            <motion.p
              initial={{ opacity: 0, y: -10, letterSpacing: "0.6em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.4em" }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#f97316] text-[10px] md:text-xs font-semibold uppercase mb-6"
              style={{
                willChange: "transform, opacity",
                textShadow: "0 0 20px rgba(249, 115, 22, 0.4)",
              }}
            >
              Una Produzione Siciliana
            </motion.p>

            {/* Nome "Maria Antonina" lettera per lettera (oro) */}
            <h1
              className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-1"
              style={{ willChange: "transform, opacity" }}
            >
              <span className="block">
                {"Maria Antonina".split("").map((letter, i) => (
                  <motion.span
                    key={`ma-${i}`}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.5,
                      delay: 1.2 + i * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block text-[#d4af37]"
                    style={{
                      willChange: "transform, opacity, filter",
                      textShadow: "0 0 40px rgba(212, 175, 55, 0.5)",
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
              {/* Cognome "Macaluso" lettera per lettera (arancione, corsivo) */}
              <span className="block">
                {"Macaluso".split("").map((letter, i) => (
                  <motion.span
                    key={`mc-${i}`}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.5,
                      delay: 1.6 + i * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block text-[#f97316] italic"
                    style={{
                      willChange: "transform, opacity, filter",
                      textShadow: "0 0 40px rgba(249, 115, 22, 0.5)",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Ruolo "Attrice Siciliana" */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.85, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
              className="font-sans text-sm md:text-base text-white/85 tracking-[0.3em] uppercase mt-3 mb-6"
              style={{ willChange: "transform, opacity" }}
            >
              Attrice Siciliana
            </motion.p>

            {/* Monogramma M·M (blur reveal, gradient oro) */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(16px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center gap-1 mb-8"
              style={{ willChange: "transform, opacity, filter" }}
            >
              <span
                className="font-display text-4xl md:text-5xl"
                style={{
                  background: "linear-gradient(180deg, #f5efe4 0%, #d4af37 50%, #8a6f3f 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 60px rgba(212, 175, 55, 0.5)",
                  willChange: "transform, opacity",
                }}
              >
                M
              </span>
              <span
                className="font-display text-2xl md:text-3xl text-[#d4a5a5] -translate-y-1"
                style={{ willChange: "transform" }}
              >
                ·
              </span>
              <span
                className="font-display text-4xl md:text-5xl"
                style={{
                  background: "linear-gradient(180deg, #f5efe4 0%, #d4af37 50%, #8a6f3f 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 60px rgba(212, 175, 55, 0.5)",
                  willChange: "transform, opacity",
                }}
              >
                M
              </span>
            </motion.div>

            {/* Barra di progresso cinematografica */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.4 }}
              className="mx-auto w-48 h-px bg-white/20 rounded-full overflow-hidden"
              style={{ willChange: "opacity" }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
                style={{
                  width: `${progress}%`,
                  willChange: "width",
                  transition: "width 0.1s linear",
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
