"use client";

import { useEffect, useRef } from "react";

/**
 * FacebookEmbed — Componente per incorporare post/video Facebook
 *
 * Usa Facebook JS SDK per renderizzare il plugin fb-post in modo nativo.
 * Carica lo script solo quando il componente è visible (lazy).
 */

declare global {
  interface Window {
    fbAsyncInit?: () => void;
    FB?: {
      XFBML?: {
        parse?: (el?: HTMLElement) => void;
      };
    };
  }
}

let fbScriptLoaded = false;

function loadFbScript() {
  if (fbScriptLoaded || document.getElementById("facebook-jssdk")) {
    fbScriptLoaded = true;
    return;
  }
  fbScriptLoaded = true;
  const script = document.createElement("script");
  script.id = "facebook-jssdk";
  script.src = "https://connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v18.0";
  script.async = true;
  script.defer = true;
  script.crossOrigin = "anonymous";
  script.onerror = () => {
    fbScriptLoaded = false;
  };
  document.head.appendChild(script);
}

interface FacebookEmbedProps {
  url: string;
  width?: number;
  /** testo alternativo mostrato durante il caricamento o se FB è bloccato */
  fallbackText?: string;
}

export default function FacebookEmbed({ url, width = 500, fallbackText }: FacebookEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadFbScript();

    // Re-parse quando il componente monta
    const timer = setTimeout(() => {
      if (window.FB && window.FB.XFBML && containerRef.current) {
        window.FB.XFBML.parse(containerRef.current);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="fb-post-embed my-6 overflow-hidden rounded-lg border border-gold/20 bg-noir/50 p-4"
      data-url={url}
    >
      <div
        className="fb-post"
        data-href={url}
        data-width={width}
        data-show-text="true"
      >
        {/* Fallback visibile durante il caricamento o se Facebook è bloccato */}
        <div className="flex flex-col items-center gap-3 py-4 text-center">
          <svg
            className="h-8 w-8 text-[#1877F2]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#1877F2] hover:underline"
          >
            {fallbackText || "Vedi il post su Facebook"}
          </a>
          <p className="text-xs text-cream/50">
            Caricamento embed Facebook… (se non visualizzi il contenuto, clicca sul link sopra)
          </p>
        </div>
      </div>
    </div>
  );
}
