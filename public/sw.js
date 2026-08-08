// Service Worker v3 — Cache intelligente con auto-update e cache-busting
const CACHE_VERSION = "mam-v3-20260807";
const CACHE_PAGES = `${CACHE_VERSION}-pages`;
const CACHE_IMG = `${CACHE_VERSION}-img`;
const CACHE_STATIC = `${CACHE_VERSION}-static`;

const PRECACHE = [
  "/",
  "/biografia",
  "/filmografia",
  "/photobook",
  "/faq",
  "/altre-produzioni",
  "/angelo-faraci",
  "/manifest.webmanifest",
  "/icons/icon.svg",
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

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  if (!sameOrigin) {
    if (url.hostname.includes("fonts.googleapis.com") || url.hostname.includes("fonts.gstatic.com")) {
      event.respondWith(
        caches.match(req).then((cached) => cached || fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(CACHE_STATIC).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        }).catch(() => cached)),
      );
    }
    return;
  }

  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_PAGES).then((c) => c.put(req, copy)).catch(() => {});
        return res;
      }).catch(() => caches.match(req).then((r) => r || caches.match("/"))),
    );
    return;
  }

  if (req.destination === "image" || url.pathname.match(/\.(jpg|jpeg|png|webp|avif|svg|gif)$/i)) {
    event.respondWith(
      caches.open(CACHE_IMG).then((cache) =>
        cache.match(req).then((cached) => {
          const fetchPromise = fetch(req).then((res) => {
            if (res && res.status === 200) {
              const copy = res.clone();
              cache.put(req, copy).catch(() => {});
            }
            return res;
          }).catch(() => cached);
          return cached || fetchPromise;
        }),
      ),
    );
    return;
  }

  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(
      caches.open(CACHE_STATIC).then((cache) =>
        cache.match(req).then((cached) => cached || fetch(req).then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            cache.put(req, copy).catch(() => {});
          }
          return res;
        }).catch(() => cached)),
      ),
    );
    return;
  }

  event.respondWith(fetch(req).catch(() => caches.match(req)));
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
