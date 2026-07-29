/**
 * IntroLoader — splash cinematografico con sigla "MM"
 *
 * Approccio BULLETPROOF: CSS-only, nessun JavaScript richiesto.
 * - Renderizza HTML statico con classi CSS
 * - Le animazioni sono gestite interamente da @keyframes nel CSS
 * - L'intro si mostra e si nasconde da solo con CSS animation + visibility:hidden finale
 * - Funziona anche se JS è disabilitato o fallisce l'idratazione
 * - Lo scroll del body è bloccato da uno script inline nel <head> del layout
 *
 * Server Component (nessun "use client") — viene renderizzato lato server
 * ed è presente nell'HTML statico fin dal primo byte.
 */
export default function IntroLoader() {
  return (
    <div aria-hidden="true" className="intro-loader">
      <div className="intro-loader-inner">
        {/* Sigla MM con reveal letter-spacing */}
        <div className="intro-mm-wrap">
          <span className="intro-mm-letter" style={{ animationDelay: "0.2s" }}>
            M
          </span>
          <span
            className="intro-mm-letter intro-mm-dot"
            style={{ animationDelay: "0.5s" }}
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
