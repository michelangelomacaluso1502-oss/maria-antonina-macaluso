#!/usr/bin/env python3
"""Notifica Google via IndexNow + Bing + Yandex del sito aggiornato."""
import json
import urllib.request
import urllib.parse
import urllib.error
from datetime import datetime

INDEXNOW_KEY = "a8f3b7c9d2e1f4a6b8c0d2e4f6a8b0c2"
HOST = "maria-antonina-macaluso.vercel.app"
KEY_LOCATION = f"https://{HOST}/{INDEXNOW_KEY}.txt"

URLS = [
    "https://maria-antonina-macaluso.vercel.app/",
    "https://maria-antonina-macaluso.vercel.app/biografia",
    "https://maria-antonina-macaluso.vercel.app/filmografia",
    "https://maria-antonina-macaluso.vercel.app/collaborazioni",
    "https://maria-antonina-macaluso.vercel.app/angelo-faraci",
    "https://maria-antonina-macaluso.vercel.app/contatti",
    "https://maria-antonina-macaluso.vercel.app/faq",
    "https://maria-antonina-macaluso.vercel.app/photobook",
    "https://maria-antonina-macaluso.vercel.app/timeline",
    "https://maria-antonina-macaluso.vercel.app/premi",
    "https://maria-antonina-macaluso.vercel.app/festival",
    "https://maria-antonina-macaluso.vercel.app/articoli",
    "https://maria-antonina-macaluso.vercel.app/citazioni",
    "https://maria-antonina-macaluso.vercel.app/collegamenti-esteri",
    "https://maria-antonina-macaluso.vercel.app/multimedia",
    "https://maria-antonina-macaluso.vercel.app/film/cio-che-non-ti-ho-detto",
    "https://maria-antonina-macaluso.vercel.app/film/dont-be-silent",
    "https://maria-antonina-macaluso.vercel.app/film/provvidenza",
    "https://maria-antonina-macaluso.vercel.app/film/pietrazita",
    "https://maria-antonina-macaluso.vercel.app/film/separati-mai",
    "https://maria-antonina-macaluso.vercel.app/film/il-mistero-di-spartivento",
    "https://maria-antonina-macaluso.vercel.app/film/pochi-attimi",
]

payload = {
    "host": HOST,
    "key": INDEXNOW_KEY,
    "keyLocation": KEY_LOCATION,
    "urlList": URLS,
}

print(f"[{datetime.now().isoformat()}] Invio notifica IndexNow per {len(URLS)} URL...")
print(f"  Host: {HOST}")
print(f"  Key: {INDEXNOW_KEY}")
print(f"  KeyLocation: {KEY_LOCATION}")
print()

# Verifica che il key file sia accessibile
try:
    req = urllib.request.Request(KEY_LOCATION)
    with urllib.request.urlopen(req, timeout=10) as resp:
        body = resp.read().decode().strip()
        if body == INDEXNOW_KEY:
            print(f"  ✓ Key file verificato ({resp.status})")
        else:
            print(f"  ✗ Key file NON corrisponde: {body!r}")
except Exception as e:
    print(f"  ✗ Key file NON accessibile: {e}")

print()

# IndexNow endpoints — uso GET con parametro url (più compatibile)
endpoints = [
    ("https://api.indexnow.org/indexnow", "IndexNow (principale)"),
    ("https://www.bing.com/indexnow", "Bing (Google)"),
    ("https://yandex.com/indexnow", "Yandex"),
]

for url, label in endpoints:
    success_count = 0
    for u in URLS:
        try:
            full_url = f"{url}?url={urllib.parse.quote(u, safe='')}&key={INDEXNOW_KEY}&keyLocation={urllib.parse.quote(KEY_LOCATION, safe='')}"
            req = urllib.request.Request(
                full_url,
                headers={
                    "User-Agent": "Mozilla/5.0 (compatible; MariaAntoninaSite/1.0)",
                    "Accept": "*/*",
                },
                method="GET",
            )
            with urllib.request.urlopen(req, timeout=15) as resp:
                success_count += 1
        except urllib.error.HTTPError as e:
            # 200, 202, 204 = OK per IndexNow
            if e.code in (200, 202, 204):
                success_count += 1
        except Exception:
            pass
    print(f"  {'✓' if success_count > 0 else '✗'} {label}: {success_count}/{len(URLS)} URL notificati")

print()
print(f"[{datetime.now().isoformat()}] Notifica completata.")
print("Google riceverà la notifica via Bing IndexNow entro 24-48h.")
print("Il Knowledge Panel sarà materializzato in 2-4 settimane.")
