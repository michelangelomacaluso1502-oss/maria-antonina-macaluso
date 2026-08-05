"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/**
 * IntroAnimation — Preloader cinematografico siciliano
 *
 * Sequenza (2.5s totali + 0.5s fade out):
 *   0.0–0.5s  → Schermo nero + stelle scintillanti
 *   0.5–1.0s  → Nome lettera per lettera (Playfair Display, oro #d4af37)
 *   1.0–1.5s  → Sotto il nome appare il ruolo (Geist Sans, bianco opaco)
 *   1.5–2.0s  → Elementi siciliani (mandorlo SVG, onde mare, sole stilizzato)
 *   2.0–2.5s  → Hold + fade out fluido 0.5s
 *
 * Architettura:
 *   - Solo transform e opacity (GPU-accelerated, 60fps)
 *   - will-change: transform, opacity
 *   - backface-visibility: hidden
 *   - sessionStorage: una volta per sessione
 *   - prefers-reduced-motion: salta animazione (WCAG 2.1 AAA)
 *   - role="progressbar" con aria-valuenow dinamico
 *   - aria-label sul container
 *   - Click/tap per skip
 */

const NAME = "Maria Antonina Macaluso";
const ROLE = "Attrice Siciliana";

// Colori
const C = {
  bgFrom: "#0c0a09",
  bgTo: "#1e1b4b",
  gold: "#d4af37",
  white: "rgba(255, 255, 255, 0.92)",
  starWhite: "rgba(255, 255, 255, 0.9)",
};

// === Generatore stelle (memoizzato, 80 stelle) ===
function useStars(count = 80) {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 1.5,
        duration: Math.random() * 1.5 + 1,
      })),
    [count]
  );
}

// === SVG: Mandorlo in fiore (silhouette elegante) ===
function AlmondTreeSVG() {
  return (
    <svg
      viewBox="0 0 120 140"
      width="80"
      height="100"
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 0 8px rgba(212, 175, 55, 0.4))" }}
    >
      {/* Tronco */}
      <path
        d="M58 138 Q56 100 60 70 Q62 50 58 30"
        stroke={C.gold}
        strokeWidth="2"
        fill="none"
        opacity="0.85"
      />
      {/* Ramo principale sinistro */}
      <path
        d="M60 70 Q45 60 35 50"
        stroke={C.gold}
        strokeWidth="1.5"
        fill="none"
        opacity="0.75"
      />
      {/* Ramo principale destro */}
      <path
        d="M58 60 Q75 50 85 42"
        stroke={C.gold}
        strokeWidth="1.5"
        fill="none"
        opacity="0.75"
      />
      {/* Rami secondari */}
      <path
        d="M35 50 Q28 45 22 42"
        stroke={C.gold}
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M85 42 Q92 38 98 35"
        stroke={C.gold}
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      {/* Fiori di mandorlo (puntini bianchi) */}
      {[
        [22, 42], [28, 38], [35, 40], [40, 45], [33, 50],
        [55, 35], [62, 32], [58, 40], [65, 42], [60, 48],
        [78, 40], [85, 38], [82, 45], [90, 42], [88, 48],
        [98, 35], [92, 32], [45, 55], [70, 50], [50, 60],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="1.8"
          fill={C.white}
          opacity="0.85"
        />
      ))}
    </svg>
  );
}

// === SVG: Onde del mare stilizzate ===
function SeaWavesSVG() {
  return (
    <svg
      viewBox="0 0 120 40"
      width="100"
      height="32"
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 0 6px rgba(96, 165, 250, 0.4))" }}
    >
      <path
        d="M0 20 Q15 10 30 20 T60 20 T90 20 T120 20"
        stroke="rgba(96, 165, 250, 0.85)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M0 28 Q15 18 30 28 T60 28 T90 28 T120 28"
        stroke="rgba(96, 165, 250, 0.55)"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M0 36 Q15 26 30 36 T60 36 T90 36 T120 36"
        stroke="rgba(96, 165, 250, 0.3)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

// === SVG: Sole stilizzato siciliano ===
function SunSVG() {
  return (
    <svg
      viewBox="0 0 80 80"
      width="60"
      height="60"
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 0 12px rgba(212, 175, 55, 0.6))" }}
    >
      {/* Disco centrale */}
      <circle cx="40" cy="40" r="14" fill={C.gold} opacity="0.95" />
      {/* Raggi (8) */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = 40 + Math.cos(angle) * 18;
        const y1 = 40 + Math.sin(angle) * 18;
        const x2 = 40 + Math.cos(angle) * 28;
        const y2 = 40 + Math.sin(angle) * 28;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={C.gold}
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.85"
          />
        );
      })}
    </svg>
  );
}

export default function IntroAnimation() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();
  const stars = useStars(80);

  // === Skip se reduced motion o già visto in sessione ===
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (reduceMotion) {
      setVisible(false);
      return;
    }

    try {
      if (sessionStorage.getItem("intro-played") === "1") {
        setVisible(false);
        return;
      }
      sessionStorage.setItem("intro-played", "1");
    } catch {
      // sessionStorage non disponibile (private mode) — procedi comunque
    }

    // === Progress bar accessibile (0→100 in 2.5s) ===
    const start = performance.now();
    const DURATION = 2500;
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / DURATION) * 100);
      setProgress(pct);
      if (pct < 100) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // === Fade out a 2.5s, rimosso a 3.0s ===
    const fadeTimer = setTimeout(() => setVisible(false), 2500);
    const removeTimer = setTimeout(() => {
      const el = document.getElementById("intro-animation");
      if (el && el.parentNode) el.remove();
    }, 3000);

    // === Skip on click/tap ===
    const skip = () => {
      cancelAnimationFrame(raf);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      setVisible(false);
      setTimeout(() => {
        const el = document.getElementById("intro-animation");
        if (el && el.parentNode) el.remove();
      }, 500);
    };
    const overlay = document.getElementById("intro-animation");
    overlay?.addEventListener("click", skip);
    overlay?.addEventListener("touchstart", skip, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      overlay?.removeEventListener("click", skip);
      overlay?.removeEventListener("touchstart", skip);
    };
  }, [reduceMotion]);

  // Non renderizzare nulla se già visto o reduced motion
  if (!visible && !reduceMotion) return null;
  if (reduceMotion) return null;

  // === Stili inline GPU-accelerated ===
  const starStyle = (s: { x: number; y: number; size: number; delay: number; duration: number }) =>
    ({
      position: "absolute" as const,
      left: `${s.x}%`,
      top: `${s.y}%`,
      width: `${s.size}px`,
      height: `${s.size}px`,
      backgroundColor: C.starWhite,
      borderRadius: "50%",
      willChange: "transform, opacity",
      backfaceVisibility: "hidden" as const,
      animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
    }) satisfies React.CSSProperties;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="intro-animation"
          role="progressbar"
          aria-label="Animazione cinematografica di introduzione al sito di Maria Antonina Macaluso"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuetext={`Caricamento ${Math.round(progress)}%`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: `linear-gradient(180deg, ${C.bgFrom} 0%, ${C.bgTo} 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1.5rem",
            cursor: "pointer",
            willChange: "opacity",
            backfaceVisibility: "hidden",
            overflow: "hidden",
          }}
        >
          {/* === STELLE SCINTILLANTI (50-100, qui 80) === */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
            }}
          >
            {stars.map((s) => (
              <span key={s.id} style={starStyle(s)} />
            ))}
          </div>

          {/* === KEYFRAME twinkle inline === */}
          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes twinkle {
                0%, 100% { opacity: 0.2; transform: scale(0.8); }
                50% { opacity: 1; transform: scale(1.2); }
              }
            `
          }} />

          {/* === CONTENUTO CENTRALE === */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              padding: "0 1.5rem",
              maxWidth: "92vw",
            }}
          >
            {/* 1. NOME lettera per lettera (0.5–1.0s) */}
            <motion.h1
              aria-label={NAME}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.025, delayChildren: 0.5 },
                },
              }}
              style={{
                fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
                fontSize: "clamp(2rem, 7vw, 4rem)",
                fontWeight: 600,
                color: C.gold,
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "0.02em",
                textShadow: `0 0 40px rgba(212, 175, 55, 0.4)`,
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
              }}
            >
              {NAME.split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            {/* 2. RUOLO (1.0–1.5s) */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
              style={{
                fontFamily: '"Geist Sans", "Inter", sans-serif',
                fontSize: "clamp(0.85rem, 2.5vw, 1.125rem)",
                fontWeight: 400,
                color: C.white,
                marginTop: "0.75rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
              }}
            >
              {ROLE}
            </motion.p>

            {/* 3. ELEMENTI SICILIANI (1.5–2.0s) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
                marginTop: "2rem",
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
              }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform" }}
              >
                <AlmondTreeSVG />
              </motion.div>

              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform" }}
              >
                <SunSVG />
              </motion.div>

              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform" }}
              >
                <SeaWavesSVG />
              </motion.div>
            </motion.div>
          </div>

          {/* === BARRA DI PROGRESSO (sotto, sottile) === */}
          <motion.div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "8vh",
              left: "50%",
              transform: "translateX(-50%)",
              width: "clamp(8rem, 20vw, 12rem)",
              height: "1px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                backgroundColor: C.gold,
                transition: "width 0.1s linear",
                willChange: "width",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
