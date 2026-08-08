import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { IntroAnimation } from "@/components/site/intro-animation";
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
    default: `${SITE.name} — Attrice Siciliana | Enciclopedia Digitale`,
    template: `%s | ${SITE.name} — Enciclopedia Digitale`,
  },
  description: "Maria Antonina Macaluso, attrice siciliana nata a Bologna il 9 novembre 2001, cresciuta a Camporeale (Palermo). Compagna artistica e di vita del regista Angelo Faraci dal 2019. Filmografia completa: Ciò che non ti ho detto, Provvidenza, Separati Mai, Il Mistero di Spartivento, Pochi Attimi. Photo Book 83 scatti 8K Ultra HD. Enciclopedia digitale ufficiale.",
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
  alternates: { canonical: "/", languages: { "it-IT": "/", "x-default": "/" } },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "it_IT",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Attrice Siciliana | Enciclopedia Digitale`,
    description: "Maria Antonina Macaluso, attrice siciliana. Enciclopedia digitale ufficiale con filmografia, biografia, photo book 8K.",
    images: [{ url: "/images/hero-maria-antonina.jpg", width: 797, height: 1280, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Attrice Siciliana | Enciclopedia Digitale`,
    description: "Maria Antonina Macaluso, attrice siciliana. Enciclopedia digitale ufficiale.",
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
  alternateName: "Mary Macaluso",
  jobTitle: "Attrice",
  description: "Maria Antonina Macaluso — attrice siciliana nata a Bologna il 9 novembre 2001, cresciuta a Camporeale (Palermo). Compagna artistica e di vita del regista Angelo Faraci. Filmografia: Ciò che non ti ho detto, Provvidenza, Separati Mai, Il Mistero di Spartivento, Pochi Attimi.",
  birthDate: "2001-11-09",
  birthPlace: { "@type": "Place", name: "Bologna, Italia" },
  nationality: { "@type": "Country", name: "Italia" },
  address: { "@type": "PostalAddress", addressLocality: "Camporeale", addressRegion: "Palermo", addressCountry: "IT" },
  url: SITE.url,
  image: `${SITE.url}/images/hero-maria-antonina.jpg`,
  sameAs: [
    "https://www.instagram.com/mary.macaluso09",
    "https://www.instagram.com/mary.macaluso.16",
    "https://www.facebook.com/mary.macaluso.16",
    "https://www.tiktok.com/@mary.macaluso",
    "https://www.imdb.com/name/nm14708762/",
  ],
  knowsAbout: [
    "Cinema",
    "Recitazione",
    "Cinema siciliano",
    "Cortometraggi",
    "Content creation",
    "Rai Cinema",
    "Fiction Sky",
  ],
  knowsLanguage: ["it", "scn"],
  award: [
    "Migliore Attrice Emergente (2021)",
    "Premio Speciale della Giuria — Taormina (2022)",
    "Attrice Rivelazione — Fiuggi (2023)",
    "Migliore Attrice Protagonista — Mediterranean Film Festival (2025)",
  ],
  relatedTo: {
    "@type": "Person",
    name: "Angelo Faraci",
    jobTitle: "Regista, Attore, Produttore",
    url: "https://angelo-faraci.vercel.app",
    sameAs: "https://www.imdb.com/name/nm11444273/",
  },
};

// FAQ Schema per SEO (ricerche long-tail)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Chi è Maria Antonina Macaluso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maria Antonina Macaluso è un'attrice siciliana nata a Bologna il 9 novembre 2001 e cresciuta a Camporeale (Palermo). Ha debuttato nel 2019 con la fiction Sky 'Ciò che non ti ho detto' diretta da Angelo Faraci.",
      },
    },
    {
      "@type": "Question",
      name: "Quali film ha interpretato Maria Antonina Macaluso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nove produzioni cinematografiche: Ciò che non ti ho detto (2019), Don't Be Silent (2020), Provvidenza (2022), Pietrazita (2023), Separati Mai (2023-2024), Sabbie Nere (2023), Vanina (2024), Il Mistero di Spartivento (2024-2025) e Pochi Attimi (2026).",
      },
    },
    {
      "@type": "Question",
      name: "Quando si sono fidanzati Maria Antonina Macaluso e Angelo Faraci?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il 14 agosto 2019 a Palermo, l'indomani del compleanno di Angelo (nato il 13 agosto 1989).",
      },
    },
    {
      "@type": "Question",
      name: "Dove è nata Maria Antonina Macaluso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maria Antonina Macaluso è nata a Bologna il 9 novembre 2001 ed è cresciuta a Camporeale, in provincia di Palermo.",
      },
    },
  ],
};

// Website Schema per SEO
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Maria Antonina Macaluso — Attrice Siciliana",
  url: SITE.url,
  description: SITE.description,
  inLanguage: "it-IT",
  author: { "@type": "Person", name: "Maria Antonina Macaluso" },
  publisher: { "@type": "Person", name: "Maria Antonina Macaluso" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Resource hints per TTFB <40ms */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        {/* Preload font primario per eliminare FOUT */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Italiana&display=swap"
          rel="stylesheet"
        />
        {/* Preload immagine hero per LCP <1s */}
        <link rel="preload" as="image" href="/images/hero-maria-antonina.jpg" fetchPriority="high" />
        {/* CSS critico inline per l'intro animation — fallback se Framer Motion non carica
            ATTENZIONE: NON bloccare mai overflow sul body — causa scroll bloccato su mobile */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* CSS critico per IntroAnimation — fallback se Framer Motion non carica */
            [role="progressbar"][aria-label*="Maria Antonina"] {
              position: fixed !important;
              inset: 0 !important;
              z-index: 99999 !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              overflow: hidden !important;
              opacity: 1 !important;
              visibility: visible !important;
              background: radial-gradient(ellipse at 50% 40%, #803322 0%, #7C2D12 35%, #5C2419 70%, #4A1C14 100%) !important;
            }
            [role="progressbar"][aria-label*="Maria Antonina"] > div > div > div > h1 {
              color: #D4AF37 !important;
              opacity: 1 !important;
              font-size: clamp(2rem, 7vw, 4rem) !important;
              text-shadow: 0 0 40px rgba(212, 175, 55, 0.5) !important;
            }
            [role="progressbar"][aria-label*="Maria Antonina"] p,
            [role="progressbar"][aria-label*="Maria Antonina"] span,
            [role="progressbar"][aria-label*="Maria Antonina"] h1 {
              opacity: 1 !important;
              filter: none !important;
              transform: none !important;
            }
          `
        }} />
        {/* Structured Data JSON-LD per SEO (Person + FAQ + Website) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-noir text-cream antialiased" suppressHydrationWarning>
        <a href="#main" className="skip-link">Vai al contenuto</a>
        <ErrorBoundary>
          <IntroAnimation />
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
