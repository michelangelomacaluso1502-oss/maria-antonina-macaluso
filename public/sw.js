// Service Worker — Ultra offline-first PWA
// Cache strategico: network-first per HTML, cache-first per assets, stale-while-revalidate per immagini
const CACHE = "mam-v2-offline";
const CACHE_IMG = "mam-v2-img";

const PRECACHE = [
  "/",
  "/biografia",
  "/filmografia",
  "/photobook",
  "/manifest.webmanifest",
  "/icons/icon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(PRECACHE)).catch(() => {}),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE && k !== CACHE_IMG)
          .map((k) => caches.delete(k)),
      ),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  // Solo same-origin (ignora第三方)
  if (!sameOrigin) {
    // Per Google Fonts: cache-first
    if (url.hostname.includes("fonts.googleapis.com") || url.hostname.includes("fonts.gstatic.com")) {
      event.respondWith(
        caches.match(req).then((cached) => cached || fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        }).catch(() => cached)),
      );
    }
    return;
  }

  // Navigation: network-first con fallback cache (offline support)
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match("/"))),
    );
    return;
  }

  // Immagini: stale-while-revalidate (mostra cache subito, aggiorna in background)
  if (req.destination === "image" || url.pathname.match(/\.(jpg|jpeg|png|webp|avif|svg|gif)$/i)) {
    event.respondWith(
      caches.open(CACHE_IMG).then((cache) =>
        cache.match(req).then((cached) => {
          const fetchPromise = fetch(req)
            .then((res) => {
              if (res && res.status === 200) {
                const copy = res.clone();
                cache.put(req, copy).catch(() => {});
              }
              return res;
            })
            .catch(() => cached);
          return cached || fetchPromise;
        }),
      ),
    );
    return;
  }

  // Static assets (_next/static, icons): cache-first con fallback network
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === "basic") {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => cached);
    }),
  );
});
