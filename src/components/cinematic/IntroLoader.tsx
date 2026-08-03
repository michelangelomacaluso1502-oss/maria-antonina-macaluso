"use client";

import { useEffect } from "react";

/**
 * IntroLoader v6.1 — Cinematografica Hollywood style + monogramma M·M
 *
 * Sequenza animata (CSS @keyframes, 4.7s totali):
 *   0.0s → Letterbox bars (entrano da sopra/sotto)
 *   0.2s → Glow dorato centrale
 *   0.3s → Film strip icon (SVG inline, oro)
 *   0.6s → Tagline "UNA PRODUZIONE SICILIANA"
 *   0.9s → Monogramma M·M (blur reveal, gradient oro)
 *   1.7s → Nome grande "Maria Antonina" (bianco) + "Macaluso" (oro)
 *   2.3s → Sottotitolo professione
 *   2.6s → Progress bar sweep dorato
 *   4.0s → Fade-out via .is-hidden
 *   4.7s → Rimozione dal DOM
 *
 * Architettura:
 *   - Il markup completo viene renderizzato nell'SSR (primo byte HTML)
 *   - Le animazioni sono CSS @keyframes definite in globals.css
 *   - Le animazioni partono automaticamente quando il browser parsa l'HTML
 *   - useEffect (lato client) gestisce solo la rimozione dopo 4.7s
 *   - body:has(.intro-pre-entry) locka lo scroll senza JS
 *   - Click/tap per skip
 *   - prefers-reduced-motion disabilita tutto
 */
export default function IntroLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const ov = document.getElementById("intro-overlay");
      if (ov) ov.remove();
      return;
    }

    const ov = document.getElementById("intro-overlay");
    if (!ov) return;

    // Fallback scroll lock (in caso :has non supportato)
    document.documentElement.classList.add("intro-lock");

    const timers: ReturnType<typeof setTimeout>[] = [];

    // 4.0s → fade-out via classe .is-hidden (la transizione CSS gestisce l'opacità)
    timers.push(
      setTimeout(() => {
        ov.classList.add("is-hidden");
      }, 4000)
    );

    // 4.7s → rimozione dal DOM + ripristino scroll
    timers.push(
      setTimeout(() => {
        if (ov.parentNode) ov.remove();
        document.documentElement.classList.remove("intro-lock");
      }, 4700)
    );

    // Skip on click/tap
    const skip = () => {
      timers.forEach(clearTimeout);
      ov.classList.add("is-hidden");
      setTimeout(() => {
        if (ov.parentNode) ov.remove();
        document.documentElement.classList.remove("intro-lock");
      }, 600);
      ov.removeEventListener("click", skip);
      ov.removeEventListener("touchstart", skip);
    };
    ov.addEventListener("click", skip);
    ov.addEventListener("touchstart", skip, { passive: true });

    return () => {
      timers.forEach(clearTimeout);
      ov.removeEventListener("click", skip);
      ov.removeEventListener("touchstart", skip);
      document.documentElement.classList.remove("intro-lock");
    };
  }, []);

  // Markup completo renderizzato nell'SSR — visibile dal primo byte
  return (
    <div
      id="intro-overlay"
      className="intro-pre-entry"
      aria-hidden="true"
      role="presentation"
    >
      {/* Vignettatura di fondo */}
      <div className="intro-bg-vignette" />

      {/* Letterbox cinematografiche */}
      <div className="intro-bar intro-bar-top" />
      <div className="intro-bar intro-bar-bottom" />

      {/* Glow dorato */}
      <div className="intro-glow-orb" />

      {/* Contenuto centrale */}
      <div className="intro-content">
        {/* Film strip icon (SVG inline) */}
        <div className="intro-icon">
          <svg
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Frame esterno */}
            <rect
              x="6"
              y="14"
              width="52"
              height="36"
              rx="1.5"
              fill="none"
              stroke="#c9a96a"
              strokeWidth="1.8"
            />
            {/* Perforazioni superiori */}
            <rect x="9" y="17" width="3" height="3" fill="#c9a96a" />
            <rect x="16" y="17" width="3" height="3" fill="#c9a96a" />
            <rect x="23" y="17" width="3" height="3" fill="#c9a96a" />
            <rect x="30" y="17" width="3" height="3" fill="#c9a96a" />
            <rect x="37" y="17" width="3" height="3" fill="#c9a96a" />
            <rect x="44" y="17" width="3" height="3" fill="#c9a96a" />
            <rect x="51" y="17" width="3" height="3" fill="#c9a96a" />
            {/* Perforazioni inferiori */}
            <rect x="9" y="44" width="3" height="3" fill="#c9a96a" />
            <rect x="16" y="44" width="3" height="3" fill="#c9a96a" />
            <rect x="23" y="44" width="3" height="3" fill="#c9a96a" />
            <rect x="30" y="44" width="3" height="3" fill="#c9a96a" />
            <rect x="37" y="44" width="3" height="3" fill="#c9a96a" />
            <rect x="44" y="44" width="3" height="3" fill="#c9a96a" />
            <rect x="51" y="44" width="3" height="3" fill="#c9a96a" />
            {/* Triangolo play centrale */}
            <path
              d="M28 26 L28 38 L38 32 Z"
              fill="#c9a96a"
              opacity="0.95"
            />
          </svg>
        </div>

        {/* Tagline */}
        <div className="intro-tagline">Una Produzione Siciliana</div>

        {/* Monogramma M·M — identità di Mary */}
        <div className="intro-monogram" aria-label="Monogramma M M">
          <span className="intro-m-letter">M</span>
          <span className="intro-m-dot" aria-hidden="true">·</span>
          <span className="intro-m-letter">M</span>
        </div>

        {/* Nome grande — split bianco/oro */}
        <h1 className="intro-name-big">
          <span className="intro-name-white">Maria Antonina</span>
          <span className="intro-name-gold">Macaluso</span>
        </h1>

        {/* Professione */}
        <div className="intro-profession">Attrice &middot; Cinema Siciliano</div>

        {/* Progress bar */}
        <div className="intro-progress-track">
          <div className="intro-progress-bar" />
        </div>
      </div>
    </div>
  );
}
