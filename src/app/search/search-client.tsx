"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, ArrowRight, Film, Newspaper, Users, Calendar } from "lucide-react";

// Indice di ricerca statico (tutti i contenuti principali del sito)
const SEARCH_INDEX = [
  // Pagine principali
  { type: "Pagina", title: "Home", url: "/", keywords: "maria antonina macaluso attrice siciliana home" },
  { type: "Pagina", title: "Biografia", url: "/biografia", keywords: "biografia vita bologna camporeale 2001 nata infanzia" },
  { type: "Pagina", title: "Filmografia", url: "/filmografia", keywords: "filmografia film serie tv sky rai cinema mediaset canale 5" },
  { type: "Pagina", title: "Photo Book", url: "/photobook", keywords: "photo book foto scatti 90 immagini attrice" },
  { type: "Pagina", title: "Timeline", url: "/timeline", keywords: "timeline cronologia 2001 2019 2026 storia" },
  { type: "Pagina", title: "Premi", url: "/premi", keywords: "premi riconoscimenti fiuggi taormina venezia leone lungo" },
  { type: "Pagina", title: "Festival", url: "/festival", keywords: "festival cinema taormina roma fiuggi venezia mediterranean" },
  { type: "Pagina", title: "Articoli", url: "/articoli", keywords: "articoli stampa giornali fonti" },
  { type: "Pagina", title: "FAQ", url: "/faq", keywords: "faq domande frequenti domande risposte" },
  { type: "Pagina", title: "Contatti", url: "/contatti", keywords: "contatti email press" },
  { type: "Pagina", title: "Multimedia", url: "/multimedia", keywords: "video interviste youtube trailer" },
  { type: "Pagina", title: "Angelo Faraci", url: "/angelo-faraci", keywords: "angelo faraci regista attore produttore palermo" },
  { type: "Pagina", title: "Collaborazioni", url: "/collaborazioni", keywords: "collaborazioni rai cinema sky mediaset" },
  { type: "Pagina", title: "Enciclopedia", url: "/enciclopedia-maria-antonina", keywords: "enciclopedia voce principale scheda identità" },
  { type: "Pagina", title: "Citazioni", url: "/citazioni", keywords: "citazioni frasi angelo faraci cinema" },

  // Articoli news
  { type: "News", title: "VENEZIA 83 — Pochi Attimi al Premio Leone Lungo", url: "/news/pochi-attimi-venezia-83", keywords: "venezia 83 premio leone lungo pochi attimi hotel excelsior lido" },
  { type: "News", title: "Sodalizio artistico Macaluso-Faraci", url: "/news/sodalizio-maria-antonina-angelo-faraci", keywords: "sodalizio artistico angelo faraci 10 film 2019 2026" },
  { type: "News", title: "Cast Pochi Attimi — scheda completa", url: "/news/cast-pochi-attimi", keywords: "cast pochi attimi angelo faraci salvatore maria antonina rosaria lo porto totò borgese enio drovandi massimo spata" },
  { type: "News", title: "Catastrofi ambientali italiane", url: "/news/catastrofi-ambientali-italiane", keywords: "catastrofi ambientali terremoto belice 1968 irpinia sarno cinque terre sardegna ischia alluvione frana" },
  { type: "News", title: "Camporeale — radici siciliane", url: "/news/camporeale-radici-maria-antonina", keywords: "camporeale radici sicilia palermo vino nero d avola ulivi" },
  { type: "News", title: "Intervista a Maria Antonina Macaluso", url: "/news/intervista-maria-antonina-macaluso", keywords: "intervista maria antonina attrice 24 anni cinema" },
  { type: "News", title: "Ritratto di Maria Antonina a 24 anni", url: "/news/ritratto-maria-antonina-24-anni", keywords: "ritratto 24 anni attrice content creator instagram" },
  { type: "News", title: "Percorso artistico nel cinema siciliano", url: "/news/percorso-artistico-cinema-sicilia", keywords: "percorso artistico cinema siciliano 2019 2026 debutto" },
  { type: "News", title: "Angelo Faraci — regista siciliano", url: "/news/angelo-faraci-regista-siciliano", keywords: "angelo faraci regista siciliano palermo imdb nm11444273" },
  { type: "News", title: "Premi e riconoscimenti di Maria Antonina", url: "/news/premi-riconoscimenti-maria-antonina", keywords: "premi riconoscimenti fiuggi taormina venezia leone lungo" },
  { type: "News", title: "Valle del Belice — dal terremoto al cinema", url: "/news/valle-belice-1968-cinema-rinascita", keywords: "valle belice terremoto 1968 cinema gibellina cretto burri" },
  { type: "News", title: "10 domande frequenti su Maria Antonina", url: "/news/domande-piu-cercate-maria-antonina", keywords: "domande frequenti faq chi è dove nata fidanzato" },
  { type: "News", title: "15 curiosità e fatti su Maria Antonina", url: "/news/curiosita-fatti-maria-antonina", keywords: "curiosità fatti verità nata bologna camporeale" },

  // Hub tematici
  { type: "Hub", title: "Tag Angelo Faraci", url: "/tag/angelo-faraci", keywords: "tag angelo faraci regista filmografia" },
  { type: "Hub", title: "Tag Venezia 83", url: "/tag/venezia-83", keywords: "tag venezia 83 evento leone lungo" },
  { type: "Hub", title: "Tag Cinema siciliano", url: "/tag/cinema-siciliano", keywords: "tag cinema siciliano palermo sicilia" },

  // Film
  { type: "Film", title: "Pochi Attimi (2026)", url: "/film/pochi-attimi", keywords: "pochi attimi 2026 lungometraggio angelo faraci salvatore" },
  { type: "Film", title: "Ciò che non ti ho detto (2019)", url: "/film/cio-che-non-ti-ho-detto", keywords: "ciò che non ti ho detto 2019 fiction sky gaetano scalici" },
  { type: "Film", title: "Don't Be Silent (2020)", url: "/film/dont-be-silent", keywords: "don't be silent 2020 cortometraggio rai cinema bullismo" },
  { type: "Film", title: "Provvidenza (2021)", url: "/film/provvidenza", keywords: "provvidenza 2021 cortometraggio rai cinema montalbano" },
  { type: "Film", title: "Pietrazita (2023)", url: "/film/pietrazita", keywords: "pietrazita 2023 cortometraggio rai cinema nebros" },
  { type: "Film", title: "Separati Mai (2023-2024)", url: "/film/separati-mai", keywords: "separati mai 2023 lungometraggio rai cinema" },
  { type: "Film", title: "Sabbie Nere (2023)", url: "/film/sabbie-nere", keywords: "sabbie nere 2023 serie tv mediaset marengo" },
  { type: "Film", title: "Vanina (2024)", url: "/film/vanina", keywords: "vanina 2024 serie tv canale 5 mediaset catania" },
  { type: "Film", title: "Il Mistero di Spartivento (2024-2025)", url: "/film/il-mistero-di-spartivento", keywords: "mistero spartivento 2024 2025 rai cinema suspense" },
  { type: "Film", title: "Eccellenza Siciliana (2025)", url: "/altre-produzioni/eccellenza-siciliana", keywords: "eccellenza siciliana 2025 documentario" },
  { type: "Film", title: "Creo Kitchens (2021)", url: "/altre-produzioni/creo-kitchens-cucine-italiane", keywords: "creo kitchens cucine italiane cortometraggio sky" },
  { type: "Film", title: "Red Bull Minas Riders (2016)", url: "/altre-produzioni/red-bull-minas-riders", keywords: "red bull minas riders 2016 serie tv documentario sportivo" },
  { type: "Film", title: "Di Tutto un pò (2025)", url: "/altre-produzioni/di-tutto-un-po", keywords: "di tutto un pò 2025 speciale tv" },
];

const typeIcons: Record<string, typeof Film> = {
  "Pagina": Film,
  "News": Newspaper,
  "Hub": Users,
  "Film": Film,
};

export default function SearchClient() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return SEARCH_INDEX.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q)
    ).slice(0, 30);
  }, [query]);

  return (
    <div className="min-h-screen bg-noir text-cream">
      <div className="cinematic-container py-12">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <Search className="h-7 w-7 text-gold" />
            <h1 className="font-display text-3xl text-cream">Cerca nel sito</h1>
          </div>

          <div className="divider-cinema mb-8 max-w-xs" />

          <div className="glass-card p-4 mb-8">
            <div className="flex items-center gap-3">
              <Search className="h-5 w-5 text-gold/60" />
              <input
                type="search"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cerca tra articoli, film, news..."
                className="flex-1 bg-transparent text-cream placeholder:text-cream/40 focus:outline-none text-lg"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-cream/40 hover:text-cream text-sm"
                >
                  Pulisci
                </button>
              )}
            </div>
          </div>

          {query.trim() === "" ? (
            <div className="text-center py-12">
              <Search className="mx-auto mb-4 h-12 w-12 text-gold/30" />
              <p className="text-cream/60">
                Inizia a digitare per cercare tra articoli, film, news e pagine del sito.
              </p>
              <p className="mt-2 text-xs text-cream/40">
                {SEARCH_INDEX.length} contenuti indicizzati
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-12">
              <Search className="mx-auto mb-4 h-12 w-12 text-gold/30" />
              <p className="text-cream/60">
                Nessun risultato per &laquo;<strong>{query}</strong>&raquo;
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm text-cream/60 mb-4">
                {results.length} risultati per &laquo;<strong className="text-cream">{query}</strong>&raquo;
              </p>
              <div className="space-y-3">
                {results.map((r, i) => {
                  const Icon = typeIcons[r.type] || Film;
                  return (
                    <Link
                      key={i}
                      href={r.url}
                      className="glass-card group card-lift-premium block p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] uppercase tracking-wide-sm text-gold/70">{r.type}</span>
                          </div>
                          <h3 className="mt-1 font-display text-base text-cream group-hover:text-gold">{r.title}</h3>
                          <p className="mt-1 text-xs text-cream/50 truncate">
                            {r.url}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 shrink-0 text-gold/40 group-hover:text-gold" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </>
          )}

          <div className="mt-12 text-center">
            <Link href="/" className="btn-ghost-cinema">
              Torna alla home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
