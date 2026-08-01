"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, Globe, Search, X } from "lucide-react";
import { LANGUAGES_50, DEFAULT_LANG, detectBrowserLang, getLang, type LanguageDef } from "@/lib/i18n-50";
import {
  getCachedTranslation,
  batchSetCachedTranslations,
} from "@/lib/translation-cache";
import { cn } from "@/lib/cn";

const STORAGE_KEY = "mam-lang";
const SOURCE_LANG = "it";
const TRANSLATABLE_TAGS = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "SPAN", "A", "BUTTON", "LI"];
const TRANSLATABLE_SELECTOR = TRANSLATABLE_TAGS.join(",");
const BATCH_SIZE = 10;

// === Module-level stores ===

// Map: element → original Italian text. Survives re-renders.
const originalTexts = new Map<Element, string>();

// In-memory translation cache per language: langCode → Map<originalText, translatedText>
// This makes switching back to a previously-translated language INSTANT (no API calls).
const langCache = new Map<string, Map<string, string>>();

// Get or create the in-memory cache for a language
function getLangCache(lang: string): Map<string, string> {
  let cache = langCache.get(lang);
  if (!cache) {
    cache = new Map();
    langCache.set(lang, cache);
  }
  return cache;
}

function isTranslatable(el: Element): boolean {
  if (!el || el.nodeType !== 1) return false;
  if (el.closest("[data-no-translate]")) return false;
  const tag = el.tagName;
  if (!TRANSLATABLE_TAGS.includes(tag)) return false;
  if (el.children.length > 0) return false;
  const text = el.textContent;
  if (!text || text.trim().length < 2) return false;
  if (/^[\d\s.,/:%@#\-+()]+$/.test(text.trim())) return false;
  return true;
}

// Batch-collect translatable elements — optimized with single querySelectorAll
function collectTranslatable(): Element[] {
  const out: Element[] = [];
  const nodes = document.querySelectorAll(TRANSLATABLE_SELECTOR);
  for (let i = 0; i < nodes.length; i++) {
    const el = nodes[i];
    if (isTranslatable(el)) {
      if (!originalTexts.has(el)) {
        originalTexts.set(el, el.textContent as string);
      }
      out.push(el);
    }
  }
  return out;
}

// === INSTANT restore to Italian ===
// Uses direct textContent assignment — no async, no IndexedDB, no network.
// This is the key optimization: switching back to IT is O(n) DOM writes, ~1ms for 200 elements.
function restoreOriginalsInstant(): void {
  // Use a single pass — batch all DOM writes
  const entries: [Element, string][] = [];
  originalTexts.forEach((text, el) => {
    if (el.isConnected && el.textContent !== text) {
      entries.push([el, text]);
    }
  });
  // Apply all at once
  for (let i = 0; i < entries.length; i++) {
    entries[i][0].textContent = entries[i][1];
  }
}

// === INSTANT apply from in-memory cache ===
// If we've already translated to this language before, apply from cache — no API calls.
function applyFromMemoryCache(lang: string): boolean {
  const cache = langCache.get(lang);
  if (!cache || cache.size === 0) return false;

  const els = collectTranslatable();
  let applied = 0;
  const entries: [Element, string][] = [];

  for (let i = 0; i < els.length; i++) {
    const el = els[i];
    const orig = originalTexts.get(el) ?? (el.textContent as string);
    const cached = cache.get(orig);
    if (cached !== undefined) {
      entries.push([el, cached]);
      applied++;
    }
  }

  // Apply all at once
  for (let i = 0; i < entries.length; i++) {
    entries[i][0].textContent = entries[i][1];
  }

  return applied > 0;
}

export default function LanguageSwitcher50() {
  const [current, setCurrent] = useState<LanguageDef>(getLang(DEFAULT_LANG));
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [translating, setTranslating] = useState(false);
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const processingRef = useRef(false);
  const currentLangRef = useRef(DEFAULT_LANG);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Init
  useEffect(() => {
    let lang = DEFAULT_LANG;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) lang = saved;
      else lang = detectBrowserLang();
    } catch {
      lang = detectBrowserLang();
    }
    const def = getLang(lang);
    currentLangRef.current = lang;
    setCurrent(def);
    document.documentElement.lang = lang;
    document.documentElement.dir = def.dir;
    if (lang !== DEFAULT_LANG) {
      const t = setTimeout(() => runTranslation(lang), 300);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Close on outside click / escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // MutationObserver with debounce — picks up dynamically added nodes
  useEffect(() => {
    if (typeof document === "undefined") return;
    const obs = new MutationObserver((mutations) => {
      let added = false;
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            const el = node as Element;
            if (isTranslatable(el)) {
              if (!originalTexts.has(el)) originalTexts.set(el, el.textContent as string);
              added = true;
            }
            if (el.querySelectorAll) {
              el.querySelectorAll(TRANSLATABLE_SELECTOR).forEach((c) => {
                if (isTranslatable(c)) {
                  if (!originalTexts.has(c)) originalTexts.set(c, c.textContent as string);
                  added = true;
                }
              });
            }
          }
        });
      }
      if (added && currentLangRef.current !== SOURCE_LANG) {
        // Debounce: wait 150ms before translating new nodes
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
          scheduleTranslation(currentLangRef.current);
        }, 150);
      }
    });
    obs.observe(document.body, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return LANGUAGES_50;
    return LANGUAGES_50.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.native.toLowerCase().includes(q) ||
        l.code.includes(q),
    );
  }, [query]);

  // === MAIN: language selection — INSTANT switch ===
  const selectLanguage = useCallback((lang: LanguageDef) => {
    setOpen(false);
    setQuery("");
    if (lang.code === currentLangRef.current) return;

    currentLangRef.current = lang.code;
    setCurrent(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang.code);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang.code;
    document.documentElement.dir = lang.dir;

    if (lang.code === SOURCE_LANG) {
      // === SWITCH BACK TO ITALIAN — INSTANT ===
      // No async, no API calls — direct DOM restore
      restoreOriginalsInstant();
      setCount(0);
      setTranslating(false);
    } else {
      // === SWITCH TO FOREIGN LANGUAGE ===
      // Step 1: Try in-memory cache first (instant if previously translated)
      const memoryHit = applyFromMemoryCache(lang.code);
      if (memoryHit) {
        // Cache hit — apply remaining uncached texts in background
        setTranslating(false);
        // Still run full translation to catch any new/uncached elements
        runTranslation(lang.code);
      } else {
        // No cache — full translation needed
        runTranslation(lang.code);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function scheduleTranslation(lang: string) {
    if (processingRef.current) return;
    requestAnimationFrame(() => runTranslation(lang));
  }

  async function runTranslation(lang: string) {
    if (processingRef.current) return;
    if (lang === SOURCE_LANG) return;
    processingRef.current = true;
    setTranslating(true);

    try {
      const els = collectTranslatable().filter((el) => el.isConnected);
      setCount(els.length);

      // Group by unique original text
      const byText = new Map<string, Element[]>();
      els.forEach((el) => {
        const orig = originalTexts.get(el) ?? (el.textContent as string);
        if (!originalTexts.has(el)) originalTexts.set(el, orig);
        const arr = byText.get(orig) ?? [];
        arr.push(el);
        byText.set(orig, arr);
      });

      const uniqueTexts = Array.from(byText.keys());
      const memCache = getLangCache(lang);

      // Check in-memory cache first (synchronous, instant)
      const toTranslate: string[] = [];
      const cached = new Map<string, string>();

      for (const text of uniqueTexts) {
        const memHit = memCache.get(text);
        if (memHit !== undefined) {
          cached.set(text, memHit);
          continue;
        }
        // Check IndexedDB cache
        const idbHit = await getCachedTranslation(SOURCE_LANG, lang, text);
        if (idbHit !== null) {
          cached.set(text, idbHit);
          memCache.set(text, idbHit); // Promote to memory cache
        } else {
          toTranslate.push(text);
        }
      }

      // Apply cached hits immediately (batch DOM write)
      const cachedEntries: [Element, string][] = [];
      cached.forEach((trans, text) => {
        const targets = byText.get(text) ?? [];
        targets.forEach((el) => {
          if (el.isConnected && el.textContent !== trans) {
            cachedEntries.push([el, trans]);
          }
        });
      });
      for (let i = 0; i < cachedEntries.length; i++) {
        cachedEntries[i][0].textContent = cachedEntries[i][1];
      }

      // Batch translate misses via API
      for (let i = 0; i < toTranslate.length; i += BATCH_SIZE) {
        const batch = toTranslate.slice(i, i + BATCH_SIZE);
        try {
          const res = await fetch("/api/translate", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              texts: batch,
              targetLang: lang,
              sourceLang: SOURCE_LANG,
            }),
          });
          const data = await res.json();
          const translations: string[] = data?.translations ?? batch;
          const pairs = batch.map((text, idx) => ({
            text,
            translation: translations[idx] ?? text,
          }));

          // Save to both IndexedDB and in-memory cache
          await batchSetCachedTranslations(SOURCE_LANG, lang, pairs);
          pairs.forEach(({ text, translation }) => {
            memCache.set(text, translation); // Store in memory for instant future switch
          });

          // Apply translations (batch DOM write)
          const batchEntries: [Element, string][] = [];
          pairs.forEach(({ text, translation }) => {
            const targets = byText.get(text) ?? [];
            targets.forEach((el) => {
              if (el.isConnected) {
                batchEntries.push([el, translation]);
              }
            });
          });
          for (let j = 0; j < batchEntries.length; j++) {
            batchEntries[j][0].textContent = batchEntries[j][1];
          }
        } catch {
          // skip failed batch
        }
      }
    } finally {
      processingRef.current = false;
      setTranslating(false);
    }
  }

  return (
    <div ref={containerRef} className="relative" data-no-translate>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Seleziona lingua"
        className="flex items-center gap-1.5 border border-gold/40 bg-noir/40 px-2.5 py-1.5 text-xs tracking-wide-sm text-cream/90 backdrop-blur transition-colors hover:border-gold hover:text-gold no-tap-highlight"
      >
        <Globe className="h-3.5 w-3.5 text-gold" />
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden uppercase sm:inline">{current.code}</span>
        {translating ? (
          <span className="inline-block h-3 w-3 animate-spin rounded-full border border-gold border-t-transparent" />
        ) : (
          <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
        )}
      </button>

      {open && (
        <div className="glass-luxury absolute right-0 top-full z-50 mt-2 w-72 overflow-hidden shadow-cinema">
          <div className="border-b border-gold/15 p-2.5">
            <div className="flex items-center gap-2 bg-noir/50 px-2.5 py-1.5">
              <Search className="h-3.5 w-3.5 text-gold/70" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cerca lingua…"
                className="w-full bg-transparent text-sm text-cream placeholder:text-cream/40 focus:outline-none"
              />
              {query && (
                <button onClick={() => setQuery("")} aria-label="Cancella">
                  <X className="h-3.5 w-3.5 text-cream/50 hover:text-cream" />
                </button>
              )}
            </div>
          </div>
          <ul
            role="listbox"
            className="scrollbar-luxury max-h-72 overflow-y-auto py-1"
          >
            {filtered.map((l) => (
              <li key={l.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={l.code === current.code}
                  onClick={() => selectLanguage(l)}
                  className={cn(
                    "flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-gold/10",
                    l.code === current.code ? "text-gold" : "text-cream/85",
                  )}
                >
                  <span className="text-base">{l.flag}</span>
                  <span className="flex-1">
                    <span className="block font-medium">{l.native}</span>
                    <span className="block text-[11px] text-cream/45">{l.name}</span>
                  </span>
                  {l.code === current.code && <Check className="h-4 w-4 text-gold" />}
                </button>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="px-3 py-6 text-center text-sm text-cream/50">Nessuna lingua trovata.</li>
            )}
          </ul>
          {count > 0 && translating && (
            <div className="border-t border-gold/15 bg-noir/40 px-3 py-1.5 text-center text-[11px] text-cream/50">
              Traduzione di {count} elementi…
            </div>
          )}
        </div>
      )}
    </div>
  );
}
