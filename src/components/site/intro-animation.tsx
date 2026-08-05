"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * IntroAnimation — Preloader cinematografico siciliano
 *
 * Ispirazione: sito Angelo Faraci (sfondo bordeaux, icona pellicola, "UNA PRODUZIONE SICILIANA")
 *
 * Sequenza (2.5-3s totali + 0.5s fade out):
 *   0.0-0.5s  → Schermo bordeaux scuro + stelle scintillanti dorate
 *   0.5-1.0s  → Appare icona pellicola cinematografica arancione
 *   1.0-1.5s  → Sopra l'icona "UNA PRODUZIONE SICILIANA" (arancione, maiuscolo)
 *   1.5-2.0s  → Sotto l'icona "Maria Antonina Macaluso" lettera per lettera
 *   2.0-2.5s  → "Attrice Siciliana" + barra di progresso
 *   2.5-3.0s  → Fade out fluido nel sito principale
 *
 * Architettura:
 *   - Solo transform e opacity (GPU-accelerated, 60fps)
 *   - will-change: transform, opacity
 *   - backface-visibility: hidden
 *   - prefers-reduced-motion: salta animazione (WCAG 2.1 AAA)
 *   - role="progressbar" con aria-valuenow dinamico
 *   - sessionStorage "intro-seen" per non ripetere
 */
export function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

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
          }, 300);
          return 100;
        }
        return p + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#7c2d12] to-[#4a1d0e] flex items-center justify-center"
          role="progressbar"
          aria-label="Caricamento sito Maria Antonina Macaluso"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {/* Stelle scintillanti dorate */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 60 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#d4af37] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Contenuto centrale */}
          <div className="relative z-10 text-center px-6">
            {/* Testo superiore */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#f97316] text-xs md:text-sm font-semibold tracking-[0.4em] uppercase mb-6"
            >
              Una Produzione Siciliana
            </motion.p>

            {/* Icona pellicola cinematografica SVG */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
              className="flex justify-center mb-6"
            >
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-[#f97316]" style={{ willChange: "transform, opacity" }}>
                <rect x="8" y="12" width="48" height="40" rx="4" stroke="currentColor" strokeWidth="2" fill="rgba(249, 115, 22, 0.1)" />
                {[16, 24, 32, 40, 48].map((y) => (
                  <g key={y}>
                    <rect x="12" y={y - 1} width="4" height="2" fill="currentColor" />
                    <rect x="48" y={y - 1} width="4" height="2" fill="currentColor" />
                  </g>
                ))}
                <rect x="20" y="20" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="32" cy="32" r="6" fill="currentColor" opacity="0.3" />
                <circle cx="32" cy="32" r="3" fill="currentColor" />
              </svg>
            </motion.div>

            {/* Nome lettera per lettera */}
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-[#d4af37] mb-3">
              {"Maria Antonina".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 + i * 0.04, ease: "easeOut" }}
                  className="inline-block"
                  style={{ willChange: "transform, opacity" }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
              <br />
              {"Macaluso".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.3 + i * 0.04, ease: "easeOut" }}
                  className="inline-block text-[#f97316]"
                  style={{ willChange: "transform, opacity" }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>

            {/* Ruolo */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="font-sans text-base md:text-lg text-white/80 tracking-[0.3em] uppercase"
            >
              Attrice Siciliana
            </motion.p>

            {/* Barra di progresso */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0 }}
              className="mt-10 mx-auto w-48 h-0.5 bg-white/20 rounded-full overflow-hidden"
            >
              <motion.div className="h-full bg-[#d4af37]" style={{ width: `${progress}%` }} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroAnimation;
