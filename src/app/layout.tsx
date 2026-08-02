import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import ErrorBoundary from "@/components/cinematic/ErrorBoundary";
import ScrollProgress from "@/components/cinematic/ScrollProgress";
import FilmGrain from "@/components/cinematic/FilmGrain";
import PWARegister from "@/components/cinematic/PWARegister";
import BackToTop from "@/components/cinematic/BackToTop";
import IntroLoader from "@/components/cinematic/IntroLoader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Attrice siciliana`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Maria Antonina Macaluso",
    "attrice siciliana",
    "Camporeale",
    "Palermo",
    "Angelo Faraci",
    "cinema siciliano",
    "Pochi Attimi",
    "Rai Cinema",
    "Taormina",
    "Fiuggi",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  manifest: "/manifest.webmanifest",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "it_IT",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Attrice siciliana`,
    description: SITE.description,
    images: [{ url: "/images/hero-maria-antonina.jpg", width: 797, height: 1280, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Attrice siciliana`,
    description: SITE.description,
    images: ["/images/hero-maria-antonina.jpg"],
  },
  icons: { icon: "/icons/icon.svg", apple: "/icons/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#08070a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Maria Antonina Macaluso",
  jobTitle: "Attrice",
  description: SITE.description,
  birthDate: "2001-11-09",
  birthPlace: { "@type": "Place", name: "Bologna, Italia" },
  nationality: { "@type": "Country", name: "Italia" },
  address: { "@type": "PostalAddress", addressLocality: "Camporeale", addressRegion: "Palermo", addressCountry: "IT" },
  url: SITE.url,
  image: `${SITE.url}/images/hero-maria-antonina.jpg`,
  sameAs: [
    "https://www.instagram.com/mary.macaluso.16",
    "https://www.facebook.com/mary.macaluso.16",
  ],
  knowsAbout: ["Cinema", "Recitazione", "Cinema siciliano", "Cortometraggi"],
  relatedTo: {
    "@type": "Person",
    name: "Angelo Faraci",
    jobTitle: "Regista, Attore, Produttore",
    url: "https://angelo-faraci.vercel.app",
    sameAs: "https://www.imdb.com/name/nm11444273/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Italiana&display=swap"
          rel="stylesheet"
        />
        {/* Script inline nel <head> che gestisce l'intro cinematografica.
            Gira PRIMA dell'idratazione React.
            Usa requestAnimationFrame per aspettare che il DOM sia pronto. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    function runIntro() {
      var overlay = document.getElementById('intro-overlay');
      if (!overlay) {
        // Retry — React might not have rendered yet
        requestAnimationFrame(runIntro);
        return;
      }

      var icon = document.getElementById('intro-icon');
      var sub = document.getElementById('intro-subtitle');
      var mono = document.getElementById('intro-monogram');
      var glow = document.getElementById('intro-glow');
      var name = document.getElementById('intro-name');
      var prog = document.getElementById('intro-progress');
      var pbar = document.getElementById('intro-progress-bar');

      if (!icon || !mono) {
        requestAnimationFrame(runIntro);
        return;
      }

      document.body.style.overflow = 'hidden';

      setTimeout(function(){ if(icon){icon.style.opacity='1';icon.style.transform='scale(1)';} },400);
      setTimeout(function(){ if(sub){sub.style.opacity='1';sub.style.transform='translateY(0)';} },1000);
      setTimeout(function(){
        if(mono){mono.style.opacity='1';mono.style.transform='translateY(0) scale(1)';mono.style.filter='blur(0px)';}
        if(glow){glow.style.opacity='1';glow.style.transform='scale(1.15)';}
      },1800);
      setTimeout(function(){ if(name){name.style.opacity='1';name.style.transform='translateY(0)';} },3400);
      setTimeout(function(){
        if(prog){prog.style.opacity='1';}
        if(pbar){pbar.style.transform='translateX(100%)';}
      },4200);
      setTimeout(function(){
        if(overlay){overlay.style.opacity='0';overlay.style.pointerEvents='none';}
      },5800);
      setTimeout(function(){
        if(overlay) overlay.remove();
        document.body.style.overflow='';
      },6500);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', runIntro);
    } else {
      runIntro();
    }
  } catch(e) {
    var ov = document.getElementById('intro-overlay');
    if(ov) ov.remove();
    document.body.style.overflow='';
  }
})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-noir text-cream antialiased">
        <a href="#main" className="skip-link">Vai al contenuto</a>
        <ErrorBoundary>
          <IntroLoader />
          <ScrollProgress />
          <FilmGrain />
          <Header />
          <div className="flex min-h-screen flex-col">
            {children}
            <Footer />
          </div>
          <BackToTop />
          <PWARegister />
        </ErrorBoundary>
      </body>
    </html>
  );
}
