"use client";

import { useEffect } from "react";

/**
 * IntroLoader v4 — Pre-entry cinematografica Hollywood
 *
 * Animazione completa in 1.5s:
 * 0.0s → Bagliore dorato pulsa al centro
 * 0.1s → M·M appare con blur→focus + glow dorato + zoom
 * 0.6s → "Maria Antonina Macaluso" fade-up
 * 1.0s → Dissolvenza overlay
 * 1.5s → Rimozione + scroll ripristinato
 *
 * Features:
 * - Skip al click/tocco
 * - prefers-reduced-motion: skip completo
 * - Musica royalty-free opzionale (Pixabay)
 * - Letterbox bars cinematografici
 * - Glow dorato pulsante
 * - Responsive (clamp per font-size)
 */
export default function IntroLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Crea l'overlay
    const ov = document.createElement("div");
    ov.id = "intro-overlay";
    ov.setAttribute("aria-hidden", "true");
    ov.style.cssText =
      "position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;" +
      "background:#08070a;overflow:hidden;opacity:1;transition:opacity 0.4s ease-out;cursor:pointer;";

    ov.innerHTML =
      // Letterbox bars
      '<div style="position:absolute;top:0;left:0;right:0;height:8vh;background:#000;z-index:3"></div>' +
      '<div style="position:absolute;bottom:0;left:0;right:0;height:8vh;background:#000;z-index:3"></div>' +
      // Glow dorato pulsante
      '<div id="i-glow" style="position:absolute;width:60vw;height:60vw;max-width:400px;max-height:400px;' +
      "border-radius:50%;background:radial-gradient(circle,rgba(201,169,106,0.25) 0%,rgba(201,169,106,0.05) 40%,transparent 70%);" +
      'z-index:1;opacity:0;transform:scale(0.3);transition:all 0.6s cubic-bezier(0.22,1,0.36,1)"></div>' +
      // Contenuto centrale
      '<div style="position:relative;z-index:4;text-align:center;padding:0 1.5rem">' +
        // Monogramma M·M
        '<div id="i-mono" style="display:flex;align-items:center;justify-content:center;gap:0.05em;margin-bottom:0.8rem;' +
        "opacity:0;transform:translateY(15px) scale(0.85);filter:blur(12px);" +
        'transition:all 0.5s cubic-bezier(0.22,1,0.36,1)">' +
          '<span style="font-family:Italiana,Cormorant Garamond,serif;font-size:clamp(3.5rem,14vw,7rem);line-height:1;' +
          "background:linear-gradient(180deg,#f5efe4 0%,#c9a96a 40%,#8a6f3f 100%);" +
          "-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;" +
          'text-shadow:0 0 80px rgba(201,169,106,0.6)">M</span>' +
          '<span style="font-family:Italiana,Cormorant Garamond,serif;font-size:clamp(1.5rem,5vw,2.5rem);' +
          'color:#d4a5a5;transform:translateY(-0.15em)">·</span>' +
          '<span style="font-family:Italiana,Cormorant Garamond,serif;font-size:clamp(3.5rem,14vw,7rem);line-height:1;' +
          "background:linear-gradient(180deg,#f5efe4 0%,#c9a96a 40%,#8a6f3f 100%);" +
          "-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;" +
          'text-shadow:0 0 80px rgba(201,169,106,0.6)">M</span>' +
        "</div>" +
        // Nome
        '<div id="i-name" style="font-family:Italiana,Cormorant Garamond,serif;' +
        "font-size:clamp(0.9rem,3vw,1.5rem);color:#f5efe4;opacity:0;transform:translateY(10px);" +
        'transition:all 0.35s cubic-bezier(0.22,1,0.36,1)">' +
          'Maria Antonina <span style="color:#c9a96a;font-style:italic">Macaluso</span>' +
        "</div>" +
      "</div>";

    document.body.appendChild(ov);
    document.body.style.overflow = "hidden";

    // Audio royalty-free (Pixabay Music - cinematic ambient)
    // Link: https://pixabay.com/music/cinematic-ambient-111355/
    // File scaricato in /public/audio/intro-music.mp3
    let audio: HTMLAudioElement | null = null;
    try {
      audio = new Audio("/audio/intro-music.mp3");
      audio.volume = 0;
      audio.loop = false;
      audio.play().catch(() => {
        // Autoplay blocked — skip audio silently
      });
      // Fade-in audio
      let vol = 0;
      const audioFadeIn = setInterval(() => {
        if (vol < 0.3) {
          vol += 0.03;
          if (audio) audio.volume = Math.min(vol, 0.3);
        } else {
          clearInterval(audioFadeIn);
        }
      }, 50);
    } catch {
      // Audio non disponibile — continua senza
    }

    const el = (id: string) => document.getElementById(id);
    const timers: ReturnType<typeof setTimeout>[] = [];

    // === SEQUENZA CINEMATOGRAFICA (1.5s totali) ===

    // 0.0s → Glow dorato pulsa
    timers.push(setTimeout(() => {
      const g = el("i-glow");
      if (g) {
        g.style.opacity = "1";
        g.style.transform = "scale(1.2)";
      }
    }, 0));

    // 0.1s → M·M appare con blur→focus + zoom
    timers.push(setTimeout(() => {
      const m = el("i-mono");
      if (m) {
        m.style.opacity = "1";
        m.style.transform = "translateY(0) scale(1)";
        m.style.filter = "blur(0px)";
      }
    }, 100));

    // 0.6s → Nome fade-up
    timers.push(setTimeout(() => {
      const n = el("i-name");
      if (n) {
        n.style.opacity = "1";
        n.style.transform = "translateY(0)";
      }
    }, 600));

    // 1.0s → Dissolvenza overlay
    timers.push(setTimeout(() => {
      ov.style.opacity = "0";
      ov.style.pointerEvents = "none";
      // Fade-out audio
      if (audio) {
        let vol = audio.volume;
        const audioFadeOut = setInterval(() => {
          if (vol > 0) {
            vol -= 0.03;
            if (audio) audio.volume = Math.max(vol, 0);
          } else {
            clearInterval(audioFadeOut);
            if (audio) audio.pause();
          }
        }, 30);
      }
    }, 1000));

    // 1.5s → Rimozione + scroll ripristinato
    timers.push(setTimeout(() => {
      ov.remove();
      document.body.style.overflow = "";
    }, 1500));

    // === SKIP: click/tocco per saltare ===
    const skipIntro = () => {
      timers.forEach(clearTimeout);
      ov.style.opacity = "0";
      ov.style.pointerEvents = "none";
      if (audio) {
        audio.volume = 0;
        audio.pause();
      }
      setTimeout(() => {
        ov.remove();
        document.body.style.overflow = "";
      }, 300);
      ov.removeEventListener("click", skipIntro);
      ov.removeEventListener("touchstart", skipIntro);
    };
    ov.addEventListener("click", skipIntro);
    ov.addEventListener("touchstart", skipIntro, { passive: true });

    return () => {
      timers.forEach(clearTimeout);
      if (ov.parentNode) ov.remove();
      document.body.style.overflow = "";
      if (audio) {
        audio.pause();
        audio = null;
      }
    };
  }, []);

  return null;
}
