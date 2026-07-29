"use client";

import { useEffect, useState } from "react";

/**
 * IntroLoader — splash cinematografico con sigla "MM"
 *
 * Approccio robusto:
 * - Stato iniziale show=true (rendering immediato)
 * - useEffect rimuove l'intro dopo 3.2s
 * - prefers-reduced-motion: salta completamente
 * - Animation tramite CSS puro (indipendente da JS)
 */
export default function IntroLoader() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_mounted, setMounted] = useState(false);
  const [show, setShow] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (typeof window === "undefined") return;

    // Skip se l'utente preferisce ridurre le animazioni
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setShow(false);
      return;
    }

    // Blocca scroll del body durante l'intro
    document.body.style.overflow = "hidden";

    // Avvia l'uscita a 2.4s, smonta a 3.2s
    const t1 = window.setTimeout(() => setExiting(true), 2400);
    const t2 = window.setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 3200);

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
      style={{ display: "flex" }}
    >
      <div className="intro-loader-inner">
        {/* Sigla MM con reveal letter-spacing */}
        <div className="intro-mm-wrap">
          <span className="intro-mm-letter" style={{ animationDelay: "0.2s" }}>
            M
          </span>
          <span
            className="intro-mm-letter intro-mm-dot"
            style={{ animationDelay: "0.5s" }}
            aria-hidden="true"
          >
            ·
          </span>
          <span className="intro-mm-letter" style={{ animationDelay: "0.8s" }}>
            M
          </span>
        </div>

        {/* Linea gold che si disegna */}
        <span className="intro-line" />

        {/* Sottotitolo fade */}
        <p className="intro-subtitle" style={{ animationDelay: "1.3s" }}>
          Maria Antonina Macaluso
        </p>
      </div>

      {/* Vignette radiale per profondità */}
      <div className="intro-vignette" />
    </div>
  );
}
