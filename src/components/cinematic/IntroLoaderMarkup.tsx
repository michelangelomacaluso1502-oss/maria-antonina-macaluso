/**
 * IntroLoaderMarkup — Server Component puro
 *
 * Renderizza SOLO il markup dell'overlay.
 * Il cleanup script è in layout.tsx (fuori da React, direttamente nel <body>).
 * NESSUNA dipendenza da React idratazione.
 */
export default function IntroLoaderMarkup() {
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
            <rect x="9" y="17" width="3" height="3" fill="#c9a96a" />
            <rect x="16" y="17" width="3" height="3" fill="#c9a96a" />
            <rect x="23" y="17" width="3" height="3" fill="#c9a96a" />
            <rect x="30" y="17" width="3" height="3" fill="#c9a96a" />
            <rect x="37" y="17" width="3" height="3" fill="#c9a96a" />
            <rect x="44" y="17" width="3" height="3" fill="#c9a96a" />
            <rect x="51" y="17" width="3" height="3" fill="#c9a96a" />
            <rect x="9" y="44" width="3" height="3" fill="#c9a96a" />
            <rect x="16" y="44" width="3" height="3" fill="#c9a96a" />
            <rect x="23" y="44" width="3" height="3" fill="#c9a96a" />
            <rect x="30" y="44" width="3" height="3" fill="#c9a96a" />
            <rect x="37" y="44" width="3" height="3" fill="#c9a96a" />
            <rect x="44" y="44" width="3" height="3" fill="#c9a96a" />
            <rect x="51" y="44" width="3" height="3" fill="#c9a96a" />
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
        <div className="intro-profession">Attrice · Cinema Siciliano</div>

        {/* Progress bar */}
        <div className="intro-progress-track">
          <div className="intro-progress-bar" />
        </div>
      </div>
    </div>
  );
}
