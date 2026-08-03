"use client";

import { useEffect } from "react";

/**
 * IntroLoader v8 — Cinematografica Hollywood + M·M
 *
 * ARCHITETTURA DEFINITIVA (dopo 7 tentativi falliti):
 *
 * Problema: React non esegue <script> tag durante l'idratazione, e Next.js
 * può avere problemi con script inline nei Server Components.
 *
 * Soluzione: Client Component che usa useEffect per:
 *   1. Creare l'overlay via document.createElement (markup completo)
 *   2. Aggiungerlo al body PRIMA dell'idratazione React completa
 *   3. Avviare i timer di cleanup
 *
 * Per evitare il delay dell'idratazione, il markup è anche nel Server Component
 * (IntroLoaderMarkup) che viene renderizzato nell'HTML del primo byte.
 * Quando useEffect gira, rimuove il markup SSR e lo ricostruisce con i timer.
 *
 * In questo modo:
 *   - L'utente vede l'overlay dal primo byte (markup SSR)
 *   - Le animazioni CSS partono al parse HTML
 *   - useEffect riconosce l'overlay esistente e ci attacca i timer
 *   - NESSUNA dipendenza dall'idratazione per la visibilità
 */
export default function IntroLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const ov = document.getElementById("intro-overlay");
      if (ov) ov.remove();
      return;
    }

    const ov = document.getElementById("intro-overlay");
    if (!ov) return;

    // Scroll lock fallback
    document.documentElement.classList.add("intro-lock");

    const timers: ReturnType<typeof setTimeout>[] = [];

    // 4.0s → fade-out via classe .is-hidden
    timers.push(
      setTimeout(() => {
        ov.classList.add("is-hidden");
      }, 4000)
    );

    // 4.7s → rimozione dal DOM
    timers.push(
      setTimeout(() => {
        if (ov.parentNode) ov.remove();
        document.documentElement.classList.remove("intro-lock");
      }, 4700)
    );

    // Skip on click/tap
    const skip = () => {
      timers.forEach(clearTimeout);
      ov.classList.add("is-hidden");
      setTimeout(() => {
        if (ov.parentNode) ov.remove();
        document.documentElement.classList.remove("intro-lock");
      }, 600);
      ov.removeEventListener("click", skip);
      ov.removeEventListener("touchstart", skip);
    };
    ov.addEventListener("click", skip);
    ov.addEventListener("touchstart", skip, { passive: true });

    return () => {
      timers.forEach(clearTimeout);
      ov.removeEventListener("click", skip);
      ov.removeEventListener("touchstart", skip);
      document.documentElement.classList.remove("intro-lock");
    };
  }, []);

  return null;
}
