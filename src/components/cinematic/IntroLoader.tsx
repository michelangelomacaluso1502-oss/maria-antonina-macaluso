"use client";

import { useEffect, useState } from "react";

/**
 * IntroLoader v5 — Pre-entry cinematografica Hollywood
 *
 * SSR + Client: renderizza un div vuoto nell'SSR (visibile subito),
 * poi useEffect lo riempie con il contenuto e lo anima.
 * In questo modo l'overlay è visibile dal PRIMO BYTE HTML.
 */
export default function IntroLoader() {
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const el = document.getElementById("intro-overlay");
      if (el) el.remove();
      return;
    }

    // Imposta il contenuto dell'overlay
    setContent("loaded");

    const ov = document.getElementById("intro-overlay");
    if (!ov) return;

    document.body.style.overflow = "hidden";

    // Audio royalty-free (opzionale)
    let audio: HTMLAudioElement | null = null;
    try {
      audio = new Audio("/audio/intro-music.mp3");
      audio.volume = 0;
      audio.play().catch(() => {});
      let vol = 0;
      const fadeIn = setInterval(() => {
        if (vol < 0.3) { vol += 0.03; if (audio) audio.volume = Math.min(vol, 0.3); }
        else clearInterval(fadeIn);
      }, 50);
    } catch {}

    const el = (id: string) => ov.querySelector("#" + id);
    const timers: ReturnType<typeof setTimeout>[] = [];

    // 0.0s → Glow
    timers.push(setTimeout(() => {
      const g = el("i-glow") as HTMLElement;
      if (g) { g.style.opacity = "1"; g.style.transform = "scale(1.2)"; }
    }, 0));

    // 0.1s → M·M
    timers.push(setTimeout(() => {
      const m = el("i-mono") as HTMLElement;
      if (m) { m.style.opacity = "1"; m.style.transform = "translateY(0) scale(1)"; m.style.filter = "blur(0px)"; }
    }, 100));

    // 0.6s → Nome
    timers.push(setTimeout(() => {
      const n = el("i-name") as HTMLElement;
      if (n) { n.style.opacity = "1"; n.style.transform = "translateY(0)"; }
    }, 600));

    // 1.0s → Dissolvenza
    timers.push(setTimeout(() => {
      ov.style.opacity = "0";
      ov.style.pointerEvents = "none";
      if (audio) {
        let v = audio.volume;
        const fadeOut = setInterval(() => {
          if (v > 0) { v -= 0.03; if (audio) audio.volume = Math.max(v, 0); }
          else { clearInterval(fadeOut); if (audio) audio.pause(); }
        }, 30);
      }
    }, 1000));

    // 1.5s → Rimozione
    timers.push(setTimeout(() => {
      ov.remove();
      document.body.style.overflow = "";
    }, 1500));

    // Skip
    const skip = () => {
      timers.forEach(clearTimeout);
      ov.style.opacity = "0";
      ov.style.pointerEvents = "none";
      if (audio) { audio.volume = 0; audio.pause(); }
      setTimeout(() => { ov.remove(); document.body.style.overflow = ""; }, 300);
      ov.removeEventListener("click", skip);
      ov.removeEventListener("touchstart", skip);
    };
    ov.addEventListener("click", skip);
    ov.addEventListener("touchstart", skip, { passive: true });

    return () => {
      timers.forEach(clearTimeout);
      if (ov.parentNode) ov.remove();
      document.body.style.overflow = "";
      if (audio) audio.pause();
    };
  }, []);

  // SSR: renderizza l'overlay vuoto (sfondo nero) — visibile dal primo byte
  if (content === null) {
    return (
      <div
        id="intro-overlay"
        aria-hidden="true"
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
          transition: "opacity 0.4s ease-out",
          cursor: "pointer",
        }}
      />
    );
  }

  // Client: overlay con contenuto completo
  return (
    <div
      id="intro-overlay"
      aria-hidden="true"
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
        transition: "opacity 0.4s ease-out",
        cursor: "pointer",
      }}
    >
      {/* Letterbox */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "8vh", background: "#000", zIndex: 3 }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "8vh", background: "#000", zIndex: 3 }} />

      {/* Glow dorato */}
      <div
        id="i-glow"
        style={{
          position: "absolute",
          width: "60vw",
          height: "60vw",
          maxWidth: "400px",
          maxHeight: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,169,106,0.25) 0%, rgba(201,169,106,0.05) 40%, transparent 70%)",
          zIndex: 1,
          opacity: 0,
          transform: "scale(0.3)",
          transition: "all 0.6s cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      {/* Contenuto */}
      <div style={{ position: "relative", zIndex: 4, textAlign: "center", padding: "0 1.5rem" }}>
        {/* M·M */}
        <div
          id="i-mono"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.05em",
            marginBottom: "0.8rem",
            opacity: 0,
            transform: "translateY(15px) scale(0.85)",
            filter: "blur(12px)",
            transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <span style={{
            fontFamily: "Italiana, Cormorant Garamond, serif",
            fontSize: "clamp(3.5rem, 14vw, 7rem)",
            lineHeight: 1,
            background: "linear-gradient(180deg, #f5efe4 0%, #c9a96a 40%, #8a6f3f 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 80px rgba(201,169,106,0.6)",
          }}>M</span>
          <span style={{
            fontFamily: "Italiana, Cormorant Garamond, serif",
            fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
            color: "#d4a5a5",
            transform: "translateY(-0.15em)",
          }}>·</span>
          <span style={{
            fontFamily: "Italiana, Cormorant Garamond, serif",
            fontSize: "clamp(3.5rem, 14vw, 7rem)",
            lineHeight: 1,
            background: "linear-gradient(180deg, #f5efe4 0%, #c9a96a 40%, #8a6f3f 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 80px rgba(201,169,106,0.6)",
          }}>M</span>
        </div>

        {/* Nome */}
        <div
          id="i-name"
          style={{
            fontFamily: "Italiana, Cormorant Garamond, serif",
            fontSize: "clamp(0.9rem, 3vw, 1.5rem)",
            color: "#f5efe4",
            opacity: 0,
            transform: "translateY(10px)",
            transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          Maria Antonina <span style={{ color: "#c9a96a", fontStyle: "italic" }}>Macaluso</span>
        </div>
      </div>
    </div>
  );
}

