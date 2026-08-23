"use client";

import { useEffect } from "react";

export default function PWARegister() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV !== "production") return;

    const onLoad = () => {
      try {
        // Registra il Service Worker
        navigator.serviceWorker.register("/sw.js").then((reg) => {
          // Forza update immediato se c'è una nuova versione
          reg.update();
        }).catch(() => {
          // silently ignore — non-critical
        });

        // Ascolta per aggiornamenti del SW
        navigator.serviceWorker.addEventListener("controllerchange", () => {
          // Nuovo SW attivo — ricarica pagina solo se necessario
        });

        // Check updates ogni 30 minuti
        setInterval(() => {
          navigator.serviceWorker.getRegistration().then((reg) => {
            if (reg) reg.update();
          }).catch(() => {});
        }, 30 * 60 * 1000);
      } catch {
        // silently ignore
      }
    };

    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);
  return null;
}
