/**
 * IntroLoader — Pre-entry cinematografica con M·M
 *
 * Server Component con CSS @keyframes.
 * Per garantire che sia nel <body> (non <head>), usiamo un tag <div>
 * come fragment wrapper che Next.js non può hoistare.
 *
 * Le animazioni sono CSS pure con animation-delay.
 * Lo scroll del body è bloccato da uno script nel <head> di layout.tsx.
 */

// Questo componente deve essere un Server Component (nessun "use client")
// per essere incluso nell'SSR HTML. Next.js non lo mette nel <head> se
// è il primo figlio di <body> dentro ErrorBoundary.

export default function IntroLoader() {
  return (
    <div
      id="intro-overlay"
      className="intro-pre-entry"
      aria-hidden="true"
      suppressHydrationWarning
    >
      {/* Letterbox bars */}
      <div className="intro-bar intro-bar-top" />
      <div className="intro-bar intro-bar-bottom" />

      {/* Glow dorato */}
      <div className="intro-glow-orb" />

      {/* Contenuto centrale */}
      <div className="intro-content">
        {/* Icona film */}
        <div className="intro-icon">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "#c9a96a" }}
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M7 3v18" />
            <path d="M3 7.5h4" />
            <path d="M3 12h18" />
            <path d="M3 16.5h4" />
            <path d="M17 3v18" />
            <path d="M17 7.5h4" />
            <path d="M17 16.5h4" />
          </svg>
        </div>

        {/* Sottotitolo */}
        <p className="intro-subtitle-text">
          Una produzione siciliana
        </p>

        {/* Monogramma M·M */}
        <div className="intro-monogram">
          <span className="intro-m-letter">M</span>
          <span className="intro-m-dot">·</span>
          <span className="intro-m-letter">M</span>
        </div>

        {/* Nome completo */}
        <div className="intro-fullname">
          Maria Antonina <span className="intro-name-gold">Macaluso</span>
        </div>

        {/* Barra caricamento */}
        <div className="intro-progress-track">
          <div className="intro-progress-bar" />
        </div>
      </div>
    </div>
  );
}
