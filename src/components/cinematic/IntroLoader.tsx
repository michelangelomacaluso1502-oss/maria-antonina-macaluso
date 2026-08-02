"use client";

import { useEffect } from "react";

/**
 * IntroLoader — Pre-entry cinematografica con M·M
 * Versione ULTRA-VELOCE: 2.8s totali (era 5.6s)
 * Tempi ridotti del 70% per fluidità massima.
 * Stile Angelo Faraci: overlay fisso, letterbox, M·M, fade-out rapido.
 */
export default function IntroLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ov = document.createElement("div");
    ov.id = "intro-overlay";
    ov.setAttribute("aria-hidden", "true");
    ov.style.cssText =
      "position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#08070a;overflow:hidden;opacity:1;transition:opacity 0.5s ease-out;";

    ov.innerHTML =
      '<div style="position:absolute;top:0;left:0;right:0;height:8vh;background:#000;z-index:3"></div>' +
      '<div style="position:absolute;bottom:0;left:0;right:0;height:8vh;background:#000;z-index:3"></div>' +
      '<div id="i-glow" style="position:absolute;width:50vw;height:50vw;max-width:350px;max-height:350px;border-radius:50%;background:radial-gradient(circle,rgba(201,169,106,0.15) 0%,transparent 70%);z-index:1;opacity:0;transform:scale(0.5);transition:all 0.6s ease-out"></div>' +
      '<div style="position:relative;z-index:4;text-align:center;padding:0 1.5rem">' +
        '<div id="i-icon" style="display:inline-flex;margin-bottom:1.5rem;opacity:0;transform:scale(0.7);transition:all 0.4s ease-out">' +
          '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#c9a96a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/></svg>' +
        '</div>' +
        '<p id="i-sub" style="font-size:10px;text-transform:uppercase;letter-spacing:0.4em;color:rgba(201,169,106,0.7);margin-bottom:1rem;opacity:0;transform:translateY(8px);transition:all 0.4s ease-out">Una produzione siciliana</p>' +
        '<div id="i-mono" style="display:flex;align-items:center;justify-content:center;gap:0.1em;margin-bottom:1.5rem;opacity:0;transform:translateY(20px) scale(0.9);filter:blur(10px);transition:all 0.6s ease-out">' +
          '<span style="font-family:Italiana,Cormorant Garamond,serif;font-size:clamp(3rem,10vw,5rem);line-height:1;background:linear-gradient(180deg,#f5efe4 0%,#c9a96a 50%,#8a6f3f 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0 0 40px rgba(201,169,106,0.4)">M</span>' +
          '<span style="font-family:Italiana,Cormorant Garamond,serif;font-size:clamp(1.5rem,5vw,2.5rem);color:#d4a5a5;transform:translateY(-0.1em)">·</span>' +
          '<span style="font-family:Italiana,Cormorant Garamond,serif;font-size:clamp(3rem,10vw,5rem);line-height:1;background:linear-gradient(180deg,#f5efe4 0%,#c9a96a 50%,#8a6f3f 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0 0 40px rgba(201,169,106,0.4)">M</span>' +
        '</div>' +
        '<div id="i-name" style="font-family:Italiana,Cormorant Garamond,serif;font-size:clamp(1rem,3.5vw,1.75rem);color:#f5efe4;opacity:0;transform:translateY(15px);transition:all 0.4s ease-out">Maria Antonina <span style="color:#c9a96a;font-style:italic">Macaluso</span></div>' +
      '</div>';

    document.body.appendChild(ov);
    document.body.style.overflow = "hidden";

    const el = (id: string) => document.getElementById(id);
    const timers: ReturnType<typeof setTimeout>[] = [];

    // Sequenza ULTRA-VELOCE (2.8s totali)
    timers.push(setTimeout(() => { const e=el("i-icon"); if(e){e.style.opacity="1";e.style.transform="scale(1)";} }, 100));
    timers.push(setTimeout(() => { const e=el("i-sub"); if(e){e.style.opacity="1";e.style.transform="translateY(0)";} }, 300));
    timers.push(setTimeout(() => {
      const m=el("i-mono"),g=el("i-glow");
      if(m){m.style.opacity="1";m.style.transform="translateY(0) scale(1)";m.style.filter="blur(0px)";}
      if(g){g.style.opacity="1";g.style.transform="scale(1.1)";}
    }, 500));
    timers.push(setTimeout(() => { const e=el("i-name"); if(e){e.style.opacity="1";e.style.transform="translateY(0)";} }, 1200));
    // Dissolvenza rapida
    timers.push(setTimeout(() => { ov.style.opacity="0"; ov.style.pointerEvents="none"; }, 2000));
    timers.push(setTimeout(() => { ov.remove(); document.body.style.overflow=""; }, 2600));

    return () => {
      timers.forEach(clearTimeout);
      if (ov.parentNode) ov.remove();
      document.body.style.overflow = "";
    };
  }, []);

  return null;
}
