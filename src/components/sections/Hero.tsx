"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, BookOpen, Camera } from "lucide-react";
import { HERO_QUOTES, HERO_STATS } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Multi-layer parallax: bg moves slowest, gradient mid, content fast.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const gradientY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-noir"
      aria-label="Maria Antonina Macaluso — attrice siciliana"
    >
      {/* Layer 1 — background image (parallax + kenburns) */}
      <motion.div style={{ y: bgY }} className="hero-parallax-bg absolute inset-0 z-0">
        <div className="absolute inset-0 animate-slow-zoom">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-maria-antonina.jpg"
            alt="Maria Antonina Macaluso"
            className="h-full w-full object-contain object-center md:object-cover md:object-top"
            fetchPriority="high"
          />
        </div>
      </motion.div>

      {/* Layer 2 — gradient overlays (legibility) */}
      <motion.div
        style={{ y: gradientY }}
        className="hero-vignette pointer-events-none absolute inset-0 z-[1]"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-1/2 bg-gradient-to-t from-noir via-noir/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-24 bg-gradient-to-b from-noir/70 to-transparent" />

      {/* Layer 3 — content (parallax + fade) */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex min-h-[100svh] flex-col justify-end"
      >
        <div className="cinematic-container w-full pb-20 pt-28 md:pb-24">
          <span className="pill-cinema mb-5 animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            {HERO_QUOTES[0]}
          </span>

          <h1
            className="animate-blur-reveal font-display text-5xl leading-[0.95] tracking-tight text-cream sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ opacity: 0 }}
          >
            <span className="text-gradient-gold">Maria Antonina</span>
            <br />
            <span>Macaluso</span>
          </h1>

          {/* 5 quotes — fully visible, staggered fade-up */}
          <div className="mt-7 max-w-2xl space-y-2.5">
            {HERO_QUOTES.slice(1).map((q, i) => (
              <p
                key={i}
                className="animate-fade-up text-pretty text-sm leading-relaxed text-cream/85 sm:text-base"
                style={{ animationDelay: `${0.7 + i * 0.18}s`, opacity: 0 }}
              >
                <span className="mr-2 text-gold/60">—</span>
                {q}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {HERO_STATS.map((s, i) => (
              <div
                key={s.value}
                className="animate-fade-up border-l border-gold/30 pl-3"
                style={{ animationDelay: `${1.6 + i * 0.12}s`, opacity: 0 }}
              >
                <p className="font-display text-3xl text-gradient-gold sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide-sm text-cream/60">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="animate-fade-up mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "2.1s", opacity: 0 }}
          >
            <a href="/#biografia" className="btn-cinema btn-cinema-solid">
              <BookOpen className="h-4 w-4" />
              Scopri la biografia
            </a>
            <a href="/#photobook" className="btn-cinema">
              <Camera className="h-4 w-4" />
              Guarda il Photo Book
            </a>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <a
        href="/#storia"
        aria-label="Scorri per scoprire"
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-gold/70 transition-colors hover:text-gold"
      >
        <span className="text-[10px] uppercase tracking-cinema">Scorri per scoprire</span>
        <span className="relative flex h-9 w-5 items-start justify-center rounded-full border border-gold/40 pt-1.5">
          <span className="animate-scroll-indicator h-1.5 w-1 rounded-full bg-gold" />
        </span>
        <ArrowDown className="h-3 w-3 animate-bounce" />
      </a>
    </section>
  );
}
