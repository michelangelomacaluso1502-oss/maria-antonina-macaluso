#!/usr/bin/env python3
"""
Ping massiccio Google per forzare il crawl e l'indicizzazione.
- Ping sitemap tramite endpoint Bing/Google (anche deprecati, ritenta)
- Fetch con user-agent multipli per simulare traffico organico
- IndexNow per tutti gli URL importanti
"""

import urllib.request
import urllib.error
import ssl
import time
import json

SITE = "https://maria-antonina-macaluso.vercel.app"
INDEXNOW_KEY = "a8f3b7c9d2e1f4a6b8c0d2e4f6a8b0c2"

# URL principali aggiornati oggi
URLS_TO_PING = [
    "/",
    "/enciclopedia-maria-antonina",
    "/news/domande-piu-cercate-maria-antonina",
    "/news/curiosita-fatti-maria-antonina",
    "/news/angelo-faraci-regista-siciliano",
    "/news/premi-riconoscimenti-maria-antonina",
    "/news/valle-belice-1968-cinema-rinascita",
    "/news/intervista-maria-antonina-macaluso",
    "/news/ritratto-maria-antonina-24-anni",
    "/news/percorso-artistico-cinema-sicilia",
    "/news/sodalizio-maria-antonina-angelo-faraci",
    "/news/pochi-attimi-venezia-83",
    "/news/cast-pochi-attimi",
    "/news/catastrofi-ambientali-italiane",
    "/news/camporeale-radici-maria-antonina",
    "/tag/angelo-faraci",
    "/tag/venezia-83",
    "/tag/cinema-siciliano",
    "/biografia",
    "/filmografia",
    "/photobook",
    "/timeline",
    "/premi",
    "/festival",
    "/articoli",
    "/multimedia",
    "/angelo-faraci",
    "/contatti",
    "/faq",
    "/sitemap.xml",
    "/sitemap-news.xml",
    "/sitemap-images.xml",
    "/film/pochi-attimi",
    "/film/cio-che-non-ti-ho-detto",
    "/film/provvidenza",
    "/film/pietrazita",
    "/film/separati-mai",
    "/film/dont-be-silent",
    "/film/sabbie-nere",
    "/film/vanina",
    "/film/il-mistero-di-spartivento",
]

# User-Agent multipli per simulare traffico reale
USER_AGENTS = [
    "Mozilla/5.0 (compatible; GoogleBot/2.1; +http://www.google.com/bot.html)",
    "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.71 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    "Mozilla/5.0 (compatible; Googlebot-Image/1.0; +http://www.google.com/bot.html)",
    "Mozilla/5.0 (compatible; Bingbot/2.0; +http://www.bing.com/bingbot.htm)",
    "Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)",
    "Mozilla/5.0 (compatible; DuckDuckBot/1.1; +http://duckduckgo.com/duckduckbot.html)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
]

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE


def fetch_with_ua(url, ua, timeout=15):
    """Fetch URL con uno specifico user agent."""
    req = urllib.request.Request(url, headers={"User-Agent": ua, "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "it-IT,it;q=0.9,en;q=0.8"})
    try:
        with urllib.request.urlopen(req, context=ctx, timeout=timeout) as resp:
            return resp.status, len(resp.read())
    except urllib.error.HTTPError as e:
        return e.code, 0
    except Exception as e:
        return 0, 0


def indexnow_notify():
    """Notifica IndexNow per tutti gli URL."""
    payload = {
        "host": "maria-antonina-macaluso.vercel.app",
        "key": INDEXNOW_KEY,
        "keyLocation": f"{SITE}/{INDEXNOW_KEY}.txt",
        "urlList": [f"{SITE}{u}" for u in URLS_TO_PING],
    }
    data = json.dumps(payload).encode("utf-8")
    headers = {"Content-Type": "application/json; charset=utf-8", "User-Agent": "MariaAntoninaMacaluso/1.0"}

    for endpoint in ["https://yandex.com/indexnow", "https://api.indexnow.org/IndexNow", "https://www.bing.com/indexnow"]:
        req = urllib.request.Request(endpoint, data=data, headers=headers, method="POST")
        try:
            with urllib.request.urlopen(req, context=ctx, timeout=30) as resp:
                print(f"  IndexNow {endpoint.split('/')[2]}: HTTP {resp.status}")
        except urllib.error.HTTPError as e:
            print(f"  IndexNow {endpoint.split('/')[2]}: HTTP {e.code}")
        except Exception as e:
            print(f"  IndexNow {endpoint}: ERROR")
        time.sleep(1)


def google_fetch_multi_ua():
    """Fetch tutte le URL con user-agent multipli per simulare traffico."""
    print("\n=== Fetch con user-agent multipli ===")
    total_ok = 0
    for url_path in URLS_TO_PING[:15]:  # prime 15 URL
        url = f"{SITE}{url_path}"
        for ua in USER_AGENTS[:4]:  # 4 UA per URL
            status, size = fetch_with_ua(url, ua)
            if status == 200:
                total_ok += 1
            time.sleep(0.3)
        print(f"  {url_path}: 4 UA fetch completati")
    print(f"\n  Totale fetch OK: {total_ok}/60")


def sitemap_ping():
    """Ping sitemap a tutti i motori di ricerca."""
    print("\n=== Ping sitemap ===")
    sitemap_urls = [
        f"{SITE}/sitemap.xml",
        f"{SITE}/sitemap-news.xml",
        f"{SITE}/sitemap-images.xml",
    ]
    for sm in sitemap_urls:
        for engine in [
            f"https://www.google.com/ping?sitemap={sm}",
            f"https://www.bing.com/ping?sitemap={sm}",
            f"https://www.google.com/webmasters/sitemaps/ping?sitemap={sm}",
        ]:
            try:
                req = urllib.request.Request(engine, headers={"User-Agent": "Mozilla/5.0"})
                with urllib.request.urlopen(req, context=ctx, timeout=10) as resp:
                    print(f"  {engine[:60]}...: HTTP {resp.status}")
            except urllib.error.HTTPError as e:
                print(f"  {engine[:60]}...: HTTP {e.code}")
            except:
                pass
            time.sleep(0.5)


def main():
    print(f"=== PING MASSICCIO GOOGLE per {SITE} ===")
    print(f"Data: {time.strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"URL totali: {len(URLS_TO_PING)}")
    print()

    # 1. IndexNow
    print("=== IndexNow ===")
    indexnow_notify()

    # 2. Sitemap ping
    sitemap_ping()

    # 3. Google fetch con multipli user-agent
    google_fetch_multi_ua()

    print(f"\n=== COMPLETATO ===")
    print(f"Data fine: {time.strftime('%Y-%m-%d %H:%M:%S')}")


if __name__ == "__main__":
    main()
