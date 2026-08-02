import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import ErrorBoundary from "@/components/cinematic/ErrorBoundary";
import ScrollProgress from "@/components/cinematic/ScrollProgress";
import FilmGrain from "@/components/cinematic/FilmGrain";
import PWARegister from "@/components/cinematic/PWARegister";
import BackToTop from "@/components/cinematic/BackToTop";
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
        {/* L'overlay pre-entry è gestito dal <script> alla fine del <body> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-noir text-cream antialiased">
        {/* === OVERLAY PRE-ENTRY — iniettato direttamente nell'HTML SSR === */}
        {/* Questo div è nel PRIMO BYTE dell'HTML, prima di qualsiasi React. */}
        <div
          id="intro-overlay"
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html: `<div style="position:absolute;top:0;left:0;right:0;height:8vh;background:#000;z-index:3"></div><div style="position:absolute;bottom:0;left:0;right:0;height:8vh;background:#000;z-index:3"></div><div id="i-glow" style="position:absolute;width:50vw;height:50vw;max-width:350px;max-height:350px;border-radius:50%;background:radial-gradient(circle,rgba(201,169,106,0.15) 0%,transparent 70%);z-index:1;opacity:0;transform:scale(0.5);transition:all 0.6s ease-out"></div><div style="position:relative;z-index:4;text-align:center;padding:0 1.5rem"><div id="i-icon" style="display:inline-flex;margin-bottom:1.5rem;opacity:0;transform:scale(0.7);transition:all 0.4s ease-out"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#c9a96a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/></svg></div><p id="i-sub" style="font-size:10px;text-transform:uppercase;letter-spacing:0.4em;color:rgba(201,169,106,0.7);margin-bottom:1rem;opacity:0;transform:translateY(8px);transition:all 0.4s ease-out">Una produzione siciliana</p><div id="i-mono" style="display:flex;align-items:center;justify-content:center;gap:0.1em;margin-bottom:1.5rem;opacity:0;transform:translateY(20px) scale(0.9);filter:blur(10px);transition:all 0.6s ease-out"><span style="font-family:Italiana,Cormorant Garamond,serif;font-size:clamp(3rem,10vw,5rem);line-height:1;background:linear-gradient(180deg,#f5efe4 0%,#c9a96a 50%,#8a6f3f 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0 0 40px rgba(201,169,106,0.4)">M</span><span style="font-family:Italiana,Cormorant Garamond,serif;font-size:clamp(1.5rem,5vw,2.5rem);color:#d4a5a5;transform:translateY(-0.1em)">·</span><span style="font-family:Italiana,Cormorant Garamond,serif;font-size:clamp(3rem,10vw,5rem);line-height:1;background:linear-gradient(180deg,#f5efe4 0%,#c9a96a 50%,#8a6f3f 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0 0 40px rgba(201,169,106,0.4)">M</span></div><div id="i-name" style="font-family:Italiana,Cormorant Garamond,serif;font-size:clamp(1rem,3.5vw,1.75rem);color:#f5efe4;opacity:0;transform:translateY(15px);transition:all 0.4s ease-out">Maria Antonina <span style="color:#c9a96a;font-style:italic">Macaluso</span></div></div>`,
          }}
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
            transition: "opacity 0.5s ease-out",
          }}
        />
        {/* === SCRIPT che anima e rimuove l'overlay === */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
try{
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){var o=document.getElementById('intro-overlay');if(o)o.remove();return;}
document.body.style.overflow='hidden';
var ov=document.getElementById('intro-overlay');
if(!ov)return;
var el=function(id){return document.getElementById(id);};
var timers=[];
timers.push(setTimeout(function(){var e=el('i-icon');if(e){e.style.opacity='1';e.style.transform='scale(1)';}},100));
timers.push(setTimeout(function(){var e=el('i-sub');if(e){e.style.opacity='1';e.style.transform='translateY(0)';}},300));
timers.push(setTimeout(function(){var m=el('i-mono'),g=el('i-glow');if(m){m.style.opacity='1';m.style.transform='translateY(0) scale(1)';m.style.filter='blur(0px)';}if(g){g.style.opacity='1';g.style.transform='scale(1.1)';}},500));
timers.push(setTimeout(function(){var e=el('i-name');if(e){e.style.opacity='1';e.style.transform='translateY(0)';}},1200));
timers.push(setTimeout(function(){ov.style.opacity='0';ov.style.pointerEvents='none';},2000));
timers.push(setTimeout(function(){ov.remove();document.body.style.overflow='';},2600));
}catch(e){try{document.body.style.overflow='';}catch(e2){}}
})();`,
          }}
        />
        <a href="#main" className="skip-link">Vai al contenuto</a>
        <ErrorBoundary>
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
