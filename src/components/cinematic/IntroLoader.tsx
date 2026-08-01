/**
 * IntroLoader — Pre-entry cinematografica CSS-only
 *
 * CSS @keyframes con animation-delay — NESSUN JavaScript richiesto.
 * Funziona immediatamente al primo byte HTML, prima dell'idratazione.
 *
 * Sequenza (6.5s totali):
 * 0.0s → Letterbox bars
 * 0.4s → Icona film dorata
 * 1.0s → "Una produzione siciliana"
 * 1.8s → Monogramma M·M con blur reveal + glow
 * 3.4s → "Maria Antonina Macaluso"
 * 4.2s → Barra di caricamento
 * 5.8s → Dissolvenza
 * 6.5s → visibility:hidden
 *
 * Server Component — presente nell'HTML statico dal primo byte.
 */
export default function IntroLoader() {
  return (
    <div aria-hidden="true" className="intro-pre-entry">
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
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-10 w-10 text-gold"
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
          <span>Una produzione siciliana</span>
        </p>

        {/* Monogramma M·M */}
        <div className="intro-monogram">
          <span className="intro-m-letter">M</span>
          <span className="intro-m-dot">·</span>
          <span className="intro-m-letter">M</span>
        </div>

        {/* Nome completo */}
        <div className="intro-fullname">
          <span>Maria Antonina </span>
          <span className="intro-name-gold">Macaluso</span>
        </div>

        {/* Barra caricamento */}
        <div className="intro-progress-track">
          <div className="intro-progress-bar" />
        </div>
      </div>
    </div>
  );
}
