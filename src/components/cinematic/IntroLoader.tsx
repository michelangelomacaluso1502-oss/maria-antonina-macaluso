/**
 * IntroLoader — Pre-entry cinematografica ultra-professionale
 *
 * Sequenza a 5 atti (totale 4.5s):
 * 1. Tende che si aprono (curtain reveal) — 0s → 1.2s
 * 2. Monogramma MAM con glow dorato e blur reveal — 0.4s → 2.0s
 * 3. Linea oro che si disegna — 1.4s → 2.6s
 * 4. Sottotitolo "Maria Antonina Macaluso" fade-in — 2.0s → 3.0s
 * 5. Dissolvenza finale con slide-up — 3.8s → 4.5s
 *
 * CSS-only: nessun JS richiesto per l'animazione.
 * Lo scroll del body è bloccato da script inline nel <head>.
 * Server Component: presente nell'HTML statico fin dal primo byte.
 */
export default function IntroLoader() {
  return (
    <div aria-hidden="true" className="intro-loader">
      {/* === Strato 1: Tende cinematografiche === */}
      <div className="intro-curtain intro-curtain-left" />
      <div className="intro-curtain intro-curtain-right" />

      {/* === Strato 2: Particelle d'oro fluttuanti === */}
      <div className="intro-particles">
        <span className="intro-particle" style={{ left: "15%", animationDelay: "0.3s" }} />
        <span className="intro-particle" style={{ left: "35%", animationDelay: "0.8s" }} />
        <span className="intro-particle" style={{ left: "55%", animationDelay: "0.5s" }} />
        <span className="intro-particle" style={{ left: "75%", animationDelay: "1.0s" }} />
        <span className="intro-particle" style={{ left: "85%", animationDelay: "0.6s" }} />
        <span className="intro-particle" style={{ left: "25%", animationDelay: "1.2s" }} />
        <span className="intro-particle" style={{ left: "65%", animationDelay: "0.9s" }} />
        <span className="intro-particle" style={{ left: "45%", animationDelay: "1.4s" }} />
      </div>

      {/* === Strato 3: Contenuto centrale === */}
      <div className="intro-loader-inner">
        {/* Monogramma MAM con reveal cinematografico */}
        <div className="intro-mm-wrap">
          <span className="intro-mm-letter" style={{ animationDelay: "0.4s" }}>
            M
          </span>
          <span
            className="intro-mm-letter intro-mm-dot"
            style={{ animationDelay: "0.7s" }}
          >
            ·
          </span>
          <span className="intro-mm-letter" style={{ animationDelay: "1.0s" }}>
            M
          </span>
        </div>

        {/* Linea oro che si disegna */}
        <span className="intro-line" />

        {/* Sottotitolo */}
        <p className="intro-subtitle" style={{ animationDelay: "2.0s" }}>
          Maria Antonina Macaluso
        </p>

        {/* Tagline */}
        <p className="intro-tagline" style={{ animationDelay: "2.3s" }}>
          Attrice siciliana
        </p>
      </div>

      {/* === Strato 4: Vignette radiale per profondità === */}
      <div className="intro-vignette" />

      {/* === Strato 5: Glow dorato pulsante dietro il monogramma === */}
      <div className="intro-glow" />
    </div>
  );
}
