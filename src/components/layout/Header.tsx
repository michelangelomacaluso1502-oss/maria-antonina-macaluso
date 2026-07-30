"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/lib/data";
import LanguageSwitcher50 from "@/components/site/language-switcher";
import { cn } from "@/lib/cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "glass-luxury border-b border-gold/15 py-2.5"
          : "border-b border-transparent py-4",
      )}
    >
      <div className="cinematic-container flex items-center justify-between gap-4">
        <Link
          href="/"
          onClick={(e) => {
            // Se siamo già sulla home, previeni il cambio URL e scrolla in cima
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="group flex flex-col leading-none no-tap-highlight"
        >
          <span className="font-display text-lg tracking-wide-sm text-cream transition-colors group-hover:text-gold sm:text-xl">
            {SITE.name}
          </span>
          <span className="mt-0.5 text-[10px] uppercase tracking-cinema text-gold/70">
            {SITE.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigazione principale">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-cinema text-xs uppercase tracking-wide-sm text-cream/80"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher50 />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center text-cream lg:hidden no-tap-highlight"
            aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[57px] z-30 origin-top overflow-hidden bg-noir/98 backdrop-blur-xl transition-all duration-300 lg:hidden",
          mobileOpen
            ? "max-h-[80vh] opacity-100"
            : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <nav className="cinematic-container flex flex-col gap-1 py-6" aria-label="Navigazione mobile">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between border-b border-gold/10 py-3 font-display text-xl text-cream/90 transition-colors hover:text-gold"
            >
              {item.label}
              <span className="text-gold/40">→</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
