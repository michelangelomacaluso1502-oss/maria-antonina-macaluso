import Link from "next/link";
import { Instagram, Facebook, ExternalLink } from "lucide-react";
import { SITE, SOCIAL, NAV_ITEMS, ALL_PAGES } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-gold/15 bg-noir">
      <div className="cinematic-container grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-2xl text-cream">{SITE.name}</p>
          <p className="mt-1 text-xs uppercase tracking-cinema text-gold/70">{SITE.tagline}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/55">
            Archivio digitale autorevole. Dati verificati da fonti pubbliche.
          </p>
        </div>

        <nav aria-label="Navigazione footer" className="md:col-span-1">
          <p className="mb-3 text-[11px] uppercase tracking-cinema text-gold/70">Sezioni</p>
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-cream/70 transition-colors hover:text-gold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Pagine" className="md:col-span-1">
          <p className="mb-3 text-[11px] uppercase tracking-cinema text-gold/70">Pagine</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {ALL_PAGES.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-cream/70 transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-1">
          <p className="mb-3 text-[11px] uppercase tracking-cinema text-gold/70">Social</p>
          <ul className="space-y-3">
            {SOCIAL.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-cream/70 transition-colors hover:text-gold"
                >
                  {s.icon === "instagram" ? (
                    <Instagram className="h-4 w-4 text-gold" />
                  ) : (
                    <Facebook className="h-4 w-4 text-gold" />
                  )}
                  <span>
                    <span className="block">{s.label}</span>
                    <span className="block text-[11px] text-cream/40">{s.handle}</span>
                  </span>
                  <ExternalLink className="ml-auto h-3 w-3 text-cream/30 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="cinematic-container flex flex-col items-center justify-between gap-2 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] uppercase tracking-wide-sm text-cream/45">
            © {year} {SITE.name}. Tutti i diritti riservati.
          </p>
          <p className="text-[11px] tracking-wide-sm text-cream/35">
            Realizzato con cura cinematografica
          </p>
        </div>
      </div>
    </footer>
  );
}
