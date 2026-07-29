"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, BookOpen, Camera } from "lucide-react";
import { HERO_QUOTES, HERO_STATS } from "@/lib/data";

// Easing curve — premium "expo out"
const EASE = [0.16, 1, 0.3, 1] as const;

// Variant for staggered children
const containerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: EASE } },
};

const itemClipRight = {
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0 0)",
    transition: { duration: 1.0, ease: EASE },
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
      {/* === SPLIT-SCREEN LAYOUT ===
          Desktop: foto a destra con cornice gold, testo a sinistra
          Mobile: foto come backdrop full-screen con overlay, testo sopra */}

      {/* Layer 1 — Foto con cornice cinematografica */}
      <motion.div
        style={{ y: photoY, scale: photoScale }}
        className="absolute inset-0 z-0 md:inset-y-0 md:right-0 md:left-[42%] lg md:left-[45%]"
      >
        {/* Backdrop mobile: foto cover con overlay */}
        <div className="absolute inset-0 animate-slow-zoom md:animate-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-maria-antonina.jpg"
            alt="Maria Antonina Macaluso"
            className="h-full w-full object-contain object-top md:object-cover md:object-[50%_15%]"
            fetchPriority="high"
          />
        </div>

        {/* Cornice gold sottile su desktop (right side) */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <div className="absolute left-0 top-[8%] bottom-[8%] w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          <div className="absolute left-6 top-[8%] h-px w-16 bg-gradient-to-r from-gold/40 to-transparent" />
          <div className="absolute left-6 bottom-[8%] h-px w-16 bg-gradient-to-r from-gold/40 to-transparent" />
        </div>
      </motion.div>

      {/* Layer 2 — Overlay leggibilità */}
      {/* Mobile: gradient full che oscura la foto per leggibilità testo */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-noir via-noir/70 to-noir/40 md:hidden" />
      {/* Desktop: gradient solo sul lato sinistro (zona testo) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[55%] bg-gradient-to-r from-noir via-noir/85 to-transparent md:block" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-24 bg-gradient-to-b from-noir/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-32 bg-gradient-to-t from-noir via-noir/60 to-transparent" />

      {/* Layer 3 — Content (parallax + fade) */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex min-h-[100svh] flex-col justify-end md:justify-center md:items-start"
      >
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="visible"
          className="cinematic-container w-full pb-24 pt-28 md:pb-16 md:max-w-[55%]"
        >
          {/* Overline pill — clip-path reveal */}
          <motion.span
            variants={itemClipRight}
            className="pill-cinema mb-5 inline-block"
          >
            {HERO_QUOTES[0]}
          </motion.span>

          {/* H1 — split-line reveal with blur */}
          <motion.h1
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18, delayChildren: 0.4 } },
            }}
            className="font-display text-5xl leading-[0.95] tracking-tight text-cream sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <motion.span
              variants={itemUp}
              className="block text-gradient-gold"
            >
              Maria Antonina
            </motion.span>
            <motion.span
              variants={itemUp}
              className="block"
            >
              Macaluso
            </motion.span>
          </motion.h1>

          {/* 5 quotes — staggered fade-up with blur */}
          <motion.div
            variants={containerStagger}
            className="mt-7 max-w-2xl space-y-2.5"
          >
            {HERO_QUOTES.slice(1).map((q, i) => (
              <motion.p
                key={i}
                variants={itemUp}
                className="text-pretty text-sm leading-relaxed text-cream/85 sm:text-base"
              >
                <span className="mr-2 text-gold/60">—</span>
                {q}
              </motion.p>
            ))}
          </motion.div>

          {/* Stats — counter roll with stagger */}
          <motion.div
            variants={containerStagger}
            className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
          >
            {HERO_STATS.map((s) => (
              <motion.div
                key={s.value}
                variants={itemUp}
                className="border-l border-gold/30 pl-3"
              >
                <p className="font-display text-3xl text-gradient-gold sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wide-sm text-cream/60">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs — premium magnetic + glow */}
          <motion.div
            variants={itemUp}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="/#biografia"
              className="btn-cinema btn-cinema-solid magnetic animate-glow-pulse"
            >
              <BookOpen className="h-4 w-4" />
              Scopri la biografia
            </a>
            <a
              href="/#photobook"
              className="btn-cinema magnetic"
            >
              <Camera className="h-4 w-4" />
              Guarda il Photo Book
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
        transition={{ delay: 2.4, duration: 0.9, ease: EASE }}
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-gold/70 transition-colors hover:text-gold md:left-1/4"
      >
        <span className="text-[10px] uppercase tracking-cinema">Scorri per scoprire</span>
        <span className="relative flex h-9 w-5 items-start justify-center rounded-full border border-gold/40 pt-1.5">
          <span className="animate-scroll-indicator h-1.5 w-1 rounded-full bg-gold" />
        </span>
        <ArrowDown className="h-3 w-3 animate-bounce" />
      </motion.a>
    </section>
  );
}
