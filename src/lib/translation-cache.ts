// Persistent translation cache: IndexedDB (durable) + LRU Map (fast in-memory).
// Key format: `${sourceLang}|${targetLang}|${text}` — lowercased, trimmed.

const DB_NAME = "mam-translate";
const STORE = "translations";
const DB_VERSION = 1;
const LRU_MAX = 5000;

type LRUMap = Map<string, string>;

let dbPromise: Promise<IDBDatabase | null> | null = null;
const lru: LRUMap = new Map();

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof indexedDB !== "undefined";
}

function openDB(): Promise<IDBDatabase | null> {
  if (!isBrowser()) return Promise.resolve(null);
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve) => {
    try {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE)) {
          db.createObjectStore(STORE);
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
  return dbPromise;
}

export function cacheKey(sourceLang: string, targetLang: string, text: string): string {
  return `${sourceLang.toLowerCase()}|${targetLang.toLowerCase()}|${text.trim()}`;
}

// LRU: move-to-end on access
function lruGet(key: string): string | undefined {
  if (!lru.has(key)) return undefined;
  const val = lru.get(key)!;
  lru.delete(key);
  lru.set(key, val);
  return val;
}

function lruSet(key: string, val: string): void {
  if (lru.has(key)) lru.delete(key);
  lru.set(key, val);
  if (lru.size > LRU_MAX) {
    const oldest = lru.keys().next().value;
    if (oldest !== undefined) lru.delete(oldest);
  }
}

export async function getCachedTranslation(
  sourceLang: string,
  targetLang: string,
  text: string,
): Promise<string | null> {
  if (targetLang === sourceLang) return null;
  const key = cacheKey(sourceLang, targetLang, text);
  const mem = lruGet(key);
  if (mem !== undefined) return mem;
  const db = await openDB();
  if (!db) return null;
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE, "readonly");
      const store = tx.objectStore(STORE);
      const req = store.get(key);
      req.onsuccess = () => {
        const val = req.result as string | undefined;
        if (val !== undefined) lruSet(key, val);
        resolve(val ?? null);
      };
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

export async function setCachedTranslation(
  sourceLang: string,
  targetLang: string,
  text: string,
  translation: string,
): Promise<void> {
  if (targetLang === sourceLang || !translation) return;
  const key = cacheKey(sourceLang, targetLang, text);
  lruSet(key, translation);
  const db = await openDB();
  if (!db) return;
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).put(translation, key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    } catch {
      resolve();
    }
  });
}

export async function batchSetCachedTranslations(
  sourceLang: string,
  targetLang: string,
  pairs: { text: string; translation: string }[],
): Promise<void> {
  if (targetLang === sourceLang) return;
  for (const p of pairs) {
    if (p.translation) lruSet(cacheKey(sourceLang, targetLang, p.text), p.translation);
  }
  const db = await openDB();
  if (!db) return;
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE, "readwrite");
      const store = tx.objectStore(STORE);
      for (const p of pairs) {
        if (p.translation) store.put(p.translation, cacheKey(sourceLang, targetLang, p.text));
      }
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    } catch {
      resolve();
    }
  });
}
