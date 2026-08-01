/**
 * IntroLoader — Pre-entry cinematografica (stile Angelo Faraci)
 *
 * APPROCCIO: inline styles + script nel <head>
 * - Ogni elemento ha style="opacity:0" inline → invisibile dal primo byte HTML
 * - Script nel <head> cambia gli stili inline per far apparire gli elementi
 * - Dopo 6.5s, lo script rimuove l'overlay e ripristina lo scroll
 * - NESSUNA dipendenza da CSS esterno o idratazione React
 */
export default function IntroLoader() {
  return (
    <div
      id="intro-overlay"
      style={{
        position: "fixed",
        inset: "0",
        zIndex: "99999",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#08070a",
        overflow: "hidden",
        opacity: "1",
        transition: "opacity 0.8s ease-out",
      }}
      aria-hidden="true"
    >
      {/* Letterbox bars */}
      <div style={{ position: "absolute", top: "0", left: "0", right: "0", height: "8vh", background: "#000", zIndex: "3" }} />
      <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", height: "8vh", background: "#000", zIndex: "3" }} />

      {/* Glow dorato */}
      <div
        id="intro-glow"
        style={{
          position: "absolute",
          width: "60vw",
          height: "60vw",
          maxWidth: "400px",
          maxHeight: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,169,106,0.18) 0%, rgba(201,169,106,0.05) 40%, transparent 70%)",
          zIndex: "1",
          opacity: "0",
          transform: "scale(0.5)",
          transition: "all 1.2s ease-out",
        }}
      />

      {/* Contenuto centrale */}
      <div style={{ position: "relative", zIndex: "4", textAlign: "center", padding: "0 1.5rem" }}>
        {/* Icona film */}
        <div
          id="intro-icon"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "2rem",
            opacity: "0",
            transform: "scale(0.7)",
            transition: "all 0.8s ease-out",
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c9a96a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <p
          id="intro-subtitle"
          style={{
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.4em",
            color: "rgba(201,169,106,0.7)",
            marginBottom: "1.5rem",
            opacity: "0",
            transform: "translateY(10px)",
            transition: "all 0.8s ease-out",
          }}
        >
          Una produzione siciliana
        </p>

        {/* Monogramma M·M */}
        <div
          id="intro-monogram"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.1em",
            marginBottom: "2rem",
            opacity: "0",
            transform: "translateY(30px) scale(0.9)",
            filter: "blur(16px)",
            transition: "all 1.2s ease-out",
          }}
        >
          <span style={{
            fontFamily: '"Italiana", "Cormorant Garamond", serif',
            fontSize: "clamp(3.5rem, 12vw, 6rem)",
            lineHeight: "1",
            background: "linear-gradient(180deg, #f5efe4 0%, #c9a96a 50%, #8a6f3f 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 60px rgba(201,169,106,0.4)",
          }}>M</span>
          <span style={{
            fontFamily: '"Italiana", "Cormorant Garamond", serif',
            fontSize: "clamp(2rem, 6vw, 3rem)",
            color: "#d4a5a5",
            transform: "translateY(-0.1em)",
          }}>·</span>
          <span style={{
            fontFamily: '"Italiana", "Cormorant Garamond", serif',
            fontSize: "clamp(3.5rem, 12vw, 6rem)",
            lineHeight: "1",
            background: "linear-gradient(180deg, #f5efe4 0%, #c9a96a 50%, #8a6f3f 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 60px rgba(201,169,106,0.4)",
          }}>M</span>
        </div>

        {/* Nome completo */}
        <div
          id="intro-name"
          style={{
            fontFamily: '"Italiana", "Cormorant Garamond", serif',
            fontSize: "clamp(1.25rem, 4vw, 2rem)",
            color: "#f5efe4",
            opacity: "0",
            transform: "translateY(20px)",
            transition: "all 0.8s ease-out",
          }}
        >
          Maria Antonina{" "}
          <span style={{ color: "#c9a96a", fontStyle: "italic" }}>Macaluso</span>
        </div>

        {/* Barra caricamento */}
        <div
          id="intro-progress"
          style={{
            margin: "2rem auto 0",
            width: "12rem",
            height: "1px",
            background: "rgba(245,239,228,0.15)",
            overflow: "hidden",
            opacity: "0",
            transition: "opacity 0.5s ease-out",
          }}
        >
          <div
            id="intro-progress-bar"
            style={{
              height: "100%",
              width: "50%",
              background: "#c9a96a",
              transform: "translateX(-100%)",
              transition: "transform 1.5s ease-out",
            }}
          />
        </div>
      </div>

      {/* Script che gestisce tutta l'animazione — inline, nel body */}
      <script dangerouslySetInnerHTML={{ __html: `
(function(){
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var ov = document.getElementById('intro-overlay');
      if (ov) ov.remove();
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    var icon = document.getElementById('intro-icon');
    var sub = document.getElementById('intro-subtitle');
    var mono = document.getElementById('intro-monogram');
    var glow = document.getElementById('intro-glow');
    var name = document.getElementById('intro-name');
    var prog = document.getElementById('intro-progress');
    var pbar = document.getElementById('intro-progress-bar');
    var overlay = document.getElementById('intro-overlay');

    // Phase 1: icona (0.4s)
    setTimeout(function(){
      if(icon){ icon.style.opacity='1'; icon.style.transform='scale(1)'; }
    }, 400);

    // Phase 2: sottotitolo (1.0s)
    setTimeout(function(){
      if(sub){ sub.style.opacity='1'; sub.style.transform='translateY(0)'; }
    }, 1000);

    // Phase 3: monogramma + glow (1.8s)
    setTimeout(function(){
      if(mono){ mono.style.opacity='1'; mono.style.transform='translateY(0) scale(1)'; mono.style.filter='blur(0px)'; }
      if(glow){ glow.style.opacity='1'; glow.style.transform='scale(1.15)'; }
    }, 1800);

    // Phase 4: nome (3.4s)
    setTimeout(function(){
      if(name){ name.style.opacity='1'; name.style.transform='translateY(0)'; }
    }, 3400);

    // Phase 5: barra caricamento (4.2s)
    setTimeout(function(){
      if(prog){ prog.style.opacity='1'; }
      if(pbar){ pbar.style.transform='translateX(100%)'; }
    }, 4200);

    // Phase 6: dissolvenza (5.8s)
    setTimeout(function(){
      if(overlay){ overlay.style.opacity='0'; overlay.style.pointerEvents='none'; }
    }, 5800);

    // Phase 7: rimozione + ripristino scroll (6.5s)
    setTimeout(function(){
      if(overlay) overlay.remove();
      document.body.style.overflow = '';
    }, 6500);
  } catch(e) {
    var ov = document.getElementById('intro-overlay');
    if(ov) ov.remove();
    document.body.style.overflow = '';
  }
})();
      ` }} />
    </div>
  );
}
