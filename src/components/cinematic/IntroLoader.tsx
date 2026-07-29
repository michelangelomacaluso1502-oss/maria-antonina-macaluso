"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "mam-intro-played";

/**
 * IntroLoader — splash cinematografico con sigla "MM"
 * - Mostra la sigla MM con reveal letter-spacing + blur
 * - Linea gold che si disegna sotto
 * - Auto-dismiss dopo 2.2s
 * - Una sola volta per sessione (sessionStorage)
 * - Skip se prefers-reduced-motion
 */
export default function IntroLoader() {
  const [show, setShow] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // SSR safety + reduced motion: skip entirely
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    // Only show once per session
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    sessionStorage.setItem(STORAGE_KEY, "1");
    setShow(true);
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
