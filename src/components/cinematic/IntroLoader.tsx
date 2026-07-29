"use client";

import { useEffect, useState } from "react";

/**
 * IntroLoader — splash cinematografico con sigla "MM"
 * - Mostra la sigla MM con reveal letter-spacing + blur
 * - Linea gold che si disegna sotto
 * - Auto-dismiss dopo 2.2s
 * - Si mostra a ogni caricamento completo della pagina (full page load)
 *   In Next.js App Router il root layout persiste nelle navigazioni client-side,
 *   quindi questo componente si monta solo al primo caricamento o al refresh.
 * - Skip se prefers-reduced-motion
 */
export default function IntroLoader() {
  const [show, setShow] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // SSR safety + reduced motion: skip entirely
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setShow(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const t1 = window.setTimeout(() => setExiting(true), 2000);
    const t2 = window.setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 2700);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      className={`intro-loader ${exiting ? "intro-loader-exit" : ""}`}
    >
      <div className="intro-loader-inner">
        {/* Sigla MM con reveal letter-spacing */}
        <div className="intro-mm-wrap">
          <span className="intro-mm-letter" style={{ animationDelay: "0.2s" }}>
            M
          </span>
          <span
            className="intro-mm-letter intro-mm-dot"
            style={{ animationDelay: "0.45s" }}
            aria-hidden="true"
          >
            ·
          </span>
          <span className="intro-mm-letter" style={{ animationDelay: "0.7s" }}>
            M
          </span>
        </div>

        {/* Linea gold che si disegna */}
        <span className="intro-line" />

        {/* Sottotitolo fade */}
        <p className="intro-subtitle" style={{ animationDelay: "1.1s" }}>
          Maria Antonina Macaluso
        </p>
      </div>

      {/* Vignette radiale per profondità */}
      <div className="intro-vignette" />
    </div>
  );
}
