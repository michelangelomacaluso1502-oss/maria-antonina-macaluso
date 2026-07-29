"use client";

import React from "react";

interface State {
  hasError: boolean;
}

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

// Prevents a single client-side exception from blanking the whole page.
export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("[ErrorBoundary]", error, info?.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="font-display text-2xl text-gold">Qualcosa è andato storto.</p>
            <p className="max-w-md text-sm text-cream/60">
              Si è verificato un errore imprevisto. Ricarica la pagina per continuare.
            </p>
            <button
              onClick={() => window.location.reload()}
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
