// Service Worker v4 — ULTRA PERFORMANCE
// Strategia: stale-while-revalidate per tutto = caricamento istantaneo da cache
// + background update per refresh automatico
const CACHE_VERSION = "mam-v4-20260823";
const CACHE_PAGES = `${CACHE_VERSION}-pages`;
const CACHE_IMG = `${CACHE_VERSION}-img`;
const CACHE_STATIC = `${CACHE_VERSION}-static`;
const CACHE_FONT = `${CACHE_VERSION}-font`;

const PRECACHE = [
  "/",
  "/biografia",
  "/filmografia",
  "/photobook",
  "/faq",
  "/contatti",
  "/angelo-faraci",
  "/collaborazioni",
  "/premi",
  "/timeline",
  "/manifest.webmanifest",
  "/icons/icon.svg",
  "/images/hero-maria-antonina.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_PAGES).then((c) => c.addAll(PRECACHE)).catch(() => {}),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      const toDelete = keys.filter((k) => !k.startsWith(CACHE_VERSION));
      return Promise.all(toDelete.map((k) => caches.delete(k)));
    }).then(() => self.clients.claim()),
  );
});

// Helper: stale-while-revalidate
function staleWhileRevalidate(request, cacheName) {
  return caches.open(cacheName).then((cache) =>
    cache.match(request).then((cached) => {
      const fetchPromise = fetch(request).then((res) => {
        if (res && res.status === 200 && res.type === "basic") {
          const copy = res.clone();
          cache.put(request, copy).catch(() => {});
        }
        return res;
      }).catch(() => cached);
      return cached || fetchPromise;
    }),
  );
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  // Cross-origin: solo Google Fonts
  if (!sameOrigin) {
    if (url.hostname.includes("fonts.googleapis.com") || url.hostname.includes("fonts.gstatic.com")) {
      event.respondWith(staleWhileRevalidate(req, CACHE_FONT));
    }
    return;
  }

  // Navigation: stale-while-revalidate (carica istantaneamente da cache)
  if (req.mode === "navigate") {
    event.respondWith(staleWhileRevalidate(req, CACHE_PAGES));
    return;
  }

  // Images: cache-first (immutable)
  if (req.destination === "image" || url.pathname.match(/\.(jpg|jpeg|png|webp|avif|svg|gif)$/i)) {
    event.respondWith(staleWhileRevalidate(req, CACHE_IMG));
    return;
  }

  // Static assets: cache-first (immutable, hashed)
  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(staleWhileRevalidate(req, CACHE_STATIC));
    return;
  }

  // Default: network-first con cache fallback
  event.respondWith(
    fetch(req).then((res) => {
      if (res && res.status === 200) {
        const copy = res.clone();
        caches.open(CACHE_STATIC).then((c) => c.put(req, copy)).catch(() => {});
      }
      return res;
    }).catch(() => caches.match(req)),
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
  if (event.data === "CLEAR_CACHE") {
    caches.keys().then((keys) => {
      Promise.all(keys.map((k) => caches.delete(k))).then(() => {
        event.source?.postMessage("CACHE_CLEARED");
      });
    });
  }
});
