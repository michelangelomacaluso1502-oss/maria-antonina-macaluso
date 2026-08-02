"use client";

import { useEffect } from "react";

/**
 * IntroLoader — Pre-entry cinematografica con M·M
 *
 * Crea l'overlay via DOM manipulation diretta in useEffect.
 * Non usa useState né render — React non può interferire.
 *
 * L'overlay viene creato, animato e rimosso interamente via JS.
 */
export default function IntroLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    // Crea l'overlay via JS — React non lo toccherà
    const ov = document.createElement("div");
    ov.id = "intro-overlay";
    ov.setAttribute("aria-hidden", "true");
    ov.style.cssText =
      "position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#08070a;overflow:hidden;opacity:1;transition:opacity 0.8s ease-out;";

    ov.innerHTML =
      '<div style="position:absolute;top:0;left:0;right:0;height:8vh;background:#000;z-index:3"></div>' +
      '<div style="position:absolute;bottom:0;left:0;right:0;height:8vh;background:#000;z-index:3"></div>' +
      '<div id="intro-glow" style="position:absolute;width:60vw;height:60vw;max-width:400px;max-height:400px;border-radius:50%;background:radial-gradient(circle,rgba(201,169,106,0.18) 0%,rgba(201,169,106,0.05) 40%,transparent 70%);z-index:1;opacity:0;transform:scale(0.5);transition:all 1.2s ease-out"></div>' +
      '<div style="position:relative;z-index:4;text-align:center;padding:0 1.5rem">' +
        '<div id="intro-icon" style="display:inline-flex;align-items:center;justify-content:center;margin-bottom:2rem;opacity:0;transform:scale(0.7);transition:all 0.8s ease-out">' +
          '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c9a96a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/></svg>' +
        '</div>' +
        '<p id="intro-sub" style="font-size:10px;text-transform:uppercase;letter-spacing:0.4em;color:rgba(201,169,106,0.7);margin-bottom:1.5rem;opacity:0;transform:translateY(10px);transition:all 0.8s ease-out">Una produzione siciliana</p>' +
        '<div id="intro-mono" style="display:flex;align-items:center;justify-content:center;gap:0.1em;margin-bottom:2rem;opacity:0;transform:translateY(30px) scale(0.9);filter:blur(16px);transition:all 1.2s ease-out">' +
          '<span style="font-family:Italiana,Cormorant Garamond,serif;font-size:clamp(3.5rem,12vw,6rem);line-height:1;background:linear-gradient(180deg,#f5efe4 0%,#c9a96a 50%,#8a6f3f 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0 0 60px rgba(201,169,106,0.4)">M</span>' +
          '<span style="font-family:Italiana,Cormorant Garamond,serif;font-size:clamp(2rem,6vw,3rem);color:#d4a5a5;transform:translateY(-0.1em)">·</span>' +
          '<span style="font-family:Italiana,Cormorant Garamond,serif;font-size:clamp(3.5rem,12vw,6rem);line-height:1;background:linear-gradient(180deg,#f5efe4 0%,#c9a96a 50%,#8a6f3f 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0 0 60px rgba(201,169,106,0.4)">M</span>' +
        '</div>' +
        '<div id="intro-name" style="font-family:Italiana,Cormorant Garamond,serif;font-size:clamp(1.25rem,4vw,2rem);color:#f5efe4;opacity:0;transform:translateY(20px);transition:all 0.8s ease-out">Maria Antonina <span style="color:#c9a96a;font-style:italic">Macaluso</span></div>' +
        '<div id="intro-prog" style="margin:2rem auto 0;width:12rem;height:1px;background:rgba(245,239,228,0.15);overflow:hidden;opacity:0;transition:opacity 0.5s ease-out">' +
          '<div id="intro-pbar" style="height:100%;width:50%;background:#c9a96a;transform:translateX(-100%);transition:transform 1.5s ease-out"></div>' +
        '</div>' +
      '</div>';

    document.body.appendChild(ov);
    document.body.style.overflow = "hidden";

    const icon = document.getElementById("intro-icon");
    const sub = document.getElementById("intro-sub");
    const mono = document.getElementById("intro-mono");
    const glow = document.getElementById("intro-glow");
    const name = document.getElementById("intro-name");
    const prog = document.getElementById("intro-prog");
    const pbar = document.getElementById("intro-pbar");

    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(
      setTimeout(() => {
        if (icon) {
          icon.style.opacity = "1";
          icon.style.transform = "scale(1)";
        }
      }, 300),
    );

    timers.push(
      setTimeout(() => {
        if (sub) {
          sub.style.opacity = "1";
          sub.style.transform = "translateY(0)";
        }
      }, 800),
    );

    timers.push(
      setTimeout(() => {
        if (mono) {
          mono.style.opacity = "1";
          mono.style.transform = "translateY(0) scale(1)";
          mono.style.filter = "blur(0px)";
        }
        if (glow) {
          glow.style.opacity = "1";
          glow.style.transform = "scale(1.15)";
        }
      }, 1200),
    );

    timers.push(
      setTimeout(() => {
        if (name) {
          name.style.opacity = "1";
          name.style.transform = "translateY(0)";
        }
      }, 2600),
    );

    timers.push(
      setTimeout(() => {
        if (prog) prog.style.opacity = "1";
        if (pbar) pbar.style.transform = "translateX(100%)";
      }, 3400),
    );

    timers.push(
      setTimeout(() => {
        ov.style.opacity = "0";
        ov.style.pointerEvents = "none";
      }, 4800),
    );

    timers.push(
      setTimeout(() => {
        ov.remove();
        document.body.style.overflow = "";
      }, 5600),
    );

    return () => {
      timers.forEach(clearTimeout);
      if (ov.parentNode) ov.remove();
      document.body.style.overflow = "";
    };
  }, []);

  return null;
}
