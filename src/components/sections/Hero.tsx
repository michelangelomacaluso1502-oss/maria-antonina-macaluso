"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, Camera } from "lucide-react";
import { HERO_QUOTES, HERO_STATS } from "@/lib/data";

// Easing curve — premium "expo out"
const EASE = [0.16, 1, 0.3, 1] as const;

// Variant for staggered children
const containerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: EASE } },
};

const itemClipRight = {
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0 0)",
    transition: { duration: 0.6, ease: EASE },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Multi-layer parallax: photo moves slowest, content fast.
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-noir"
      aria-label="Maria Antonina Macaluso — attrice siciliana"
    >
      {/* === LAYOUT CENTRATO PROFESSIONALE ===
          Foto come backdrop full-screen (object-contain object-top, visibile intera)
          Testo centrato sopra con gradient elegante per leggibilità */}

      {/* Layer 1 — Foto backdrop full-screen */}
      <motion.div
        style={{ y: photoY, scale: photoScale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 animate-slow-zoom">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-maria-antonina.jpg"
            alt="Maria Antonina Macaluso"
            className="h-full w-full object-contain object-top"
            fetchPriority="high"
          />
        </div>
      </motion.div>

      {/* Layer 2 — Overlay leggibilità (gradient simmetrico professionale) */}
      {/* Gradient laterale per fondere bande nere con il background */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-noir via-transparent to-noir" />
      {/* Gradient verticale per ancorare il testo in basso */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[60%] bg-gradient-to-t from-noir via-noir/70 to-transparent" />
      {/* Gradient superiore per header */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-32 bg-gradient-to-b from-noir/80 via-noir/30 to-transparent" />

      {/* Layer 3 — Content centrato */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex min-h-[100svh] flex-col items-center justify-end"
      >
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="visible"
          className="cinematic-container w-full pb-24 pt-28 text-center"
        >
          {/* Overline pill — clip-path reveal */}
          <motion.span
            variants={itemClipRight}
            className="pill-cinema mb-5 inline-block"
          >
            <span>{HERO_QUOTES[0]}</span>
          </motion.span>

          {/* H1 — split-line reveal with blur */}
          <motion.h1
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
            }}
            className="font-display text-5xl leading-[0.95] tracking-tight text-cream sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <motion.span
              variants={itemUp}
              className="block text-gradient-gold"
            >
              <span>Maria Antonina</span>
            </motion.span>
            <motion.span
              variants={itemUp}
              className="block"
            >
              <span>Macaluso</span>
            </motion.span>
          </motion.h1>

          {/* 5 quotes — staggered fade-up with blur */}
          <motion.div
            variants={containerStagger}
            className="mt-7 mx-auto max-w-2xl space-y-2.5"
          >
            {HERO_QUOTES.slice(1).map((q, i) => (
              <motion.p
                key={i}
                variants={itemUp}
                className="text-pretty text-sm leading-relaxed text-cream/85 sm:text-base"
              >
                <span className="mr-2 text-gold/60">—</span>
                <span>{q}</span>
              </motion.p>
            ))}
          </motion.div>

          {/* Stats — counter roll with stagger */}
          <motion.div
            variants={containerStagger}
            className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 max-w-3xl mx-auto"
          >
            {HERO_STATS.map((s) => (
              <motion.div
                key={s.value}
                variants={itemUp}
                className="border-l border-gold/30 pl-3 text-left"
              >
                <p className="font-display text-3xl text-gradient-gold sm:text-4xl">
                  <span>{s.value}</span>
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wide-sm text-cream/60">
                  <span>{s.label}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs — premium magnetic + glow */}
          <motion.div
            variants={itemUp}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="/#biografia"
              className="btn-cinema btn-cinema-solid magnetic animate-glow-pulse"
            >
              <BookOpen className="h-4 w-4" />
              <span>Scopri la biografia</span>
            </a>
            <a
              href="/#photobook"
              className="btn-cinema magnetic"
            >
              <Camera className="h-4 w-4" />
              <span>Guarda il Photo Book</span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — premium animated */}
      <motion.a
        href="/#storia"
        aria-label="Scorri per scoprire"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5, ease: EASE }}
        className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 rounded-full border border-gold/20 bg-noir/40 px-4 py-2 backdrop-blur-sm text-gold/70 transition-all hover:border-gold/40 hover:text-gold hover:bg-noir/60"
      >
        <span className="text-[10px] uppercase tracking-cinema"><span>Scorri per scoprire</span></span>
        <span className="relative flex h-7 w-4 items-start justify-center rounded-full border border-gold/30 pt-1">
          <span className="animate-scroll-indicator h-1.5 w-1 rounded-full bg-gold" />
        </span>
      </motion.a>
    </section>
  );
}
