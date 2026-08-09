"use client";

import React from "react";

interface State {
  hasError: boolean;
}

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * ErrorBoundary — Previene che un errore JS faccia schermata bianca.
 *
 * FIX iOS: Invece di mostrare un errore, tenta automaticamente il reload.
 * Se l'errore persiste, mostra il fallback con pulsante Ricarica.
 * Usa sessionStorage per evitare loop di reload infiniti.
 */
export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("[ErrorBoundary]", error?.message || error, info?.componentStack);

    // FIX iOS: auto-reload al primo errore (non al secondo, per evitare loop)
    try {
      const reloadCount = parseInt(sessionStorage.getItem("error-reload-count") || "0", 10);
      if (reloadCount < 1) {
        sessionStorage.setItem("error-reload-count", String(reloadCount + 1));
        // Auto-reload dopo 100ms
        setTimeout(() => {
          window.location.reload();
        }, 100);
      }
    } catch {
      // sessionStorage non disponibile
    }
  }

  render() {
    if (this.state.hasError) {
      // Reset del contatore dopo 10 secondi (l'utente è rimasto sulla pagina)
      try {
        const reloadCount = parseInt(sessionStorage.getItem("error-reload-count") || "0", 10);
        if (reloadCount >= 1) {
          // Il reload è già stato tentato — mostra il fallback
          setTimeout(() => {
            sessionStorage.removeItem("error-reload-count");
          }, 10000);
        }
      } catch {}

      return (
        this.props.fallback ?? (
          <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="font-display text-2xl text-gold">Qualcosa è andato storto.</p>
            <p className="max-w-md text-sm text-cream/60">
              Si è verificato un errore imprevisto. Ricarica la pagina per continuare.
            </p>
            <button
              onClick={() => {
                try { sessionStorage.removeItem("error-reload-count"); } catch {}
                window.location.reload();
              }}
              className="btn-cinema mt-2"
            >
              Ricarica
            </button>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
