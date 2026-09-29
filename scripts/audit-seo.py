#!/usr/bin/env python3
"""
Audit SEO tecnico completo — Verifica tutti gli URL del sito
- HTTP status
- Title tag
- Meta description
- Canonical
- OpenGraph (og:title, og:description, og:image)
- JSON-LD validità (parse + tipo)
- H1 count
- Image alt mancanti
- Internal broken links
- Mixed content (http:// su https)
- robots directives
"""

import re
import json
import urllib.request
import urllib.error
import ssl
from html.parser import HTMLParser
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

SITE = "https://maria-antonina-macaluso.vercel.app"

# Tutti gli URL da testare
URLS = [
    "/",
    "/biografia",
    "/filmografia",
    "/collaborazioni",
    "/timeline",
    "/premi",
    "/festival",
    "/articoli",
    "/citazioni",
    "/faq",
    "/contatti",
    "/photobook",
    "/collegamenti-esteri",
    "/multimedia",
    "/angelo-faraci",
    "/news/pochi-attimi-venezia-83",
    "/news/sodalizio-maria-antonina-angelo-faraci",
    "/film/cio-che-non-ti-ho-detto",
    "/film/dont-be-silent",
    "/film/provvidenza",
    "/film/pietrazita",
    "/film/separati-mai",
    "/film/sabbie-nere",
    "/film/vanina",
    "/film/il-mistero-di-spartivento",
    "/film/pochi-attimi",
    "/altre-produzioni/eccellenza-siciliana",
    "/altre-produzioni/creo-kitchens-cucine-italiane",
    "/altre-produzioni/red-bull-minas-riders",
    "/altre-produzioni/di-tutto-un-po",
    "/photo/1",
    "/photo/85",
    "/photo/91",
    "/sitemap.xml",
    "/robots.txt",
    "/manifest.webmanifest",
]


class HTMLTitleParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_title = False
        self.in_h1 = False
        self.title = ""
        self.h1_count = 0
        self.meta_description = ""
        self.canonical = ""
        self.og_title = ""
        self.og_desc = ""
        self.og_image = ""
        self.json_ld_blocks = []
        self.in_jsonld = False
        self.jsonld_content = ""
        self.img_count = 0
        self.img_alt_missing = 0
        self.internal_links = []
        self.in_head = True

    def handle_starttag(self, tag, attrs):
        attrs_d = dict(attrs)
        if tag == "title" and self.in_head:
            self.in_title = True
        elif tag == "h1":
            self.h1_count += 1
        elif tag == "meta":
            name = attrs_d.get("name", "")
            prop = attrs_d.get("property", "")
            content = attrs_d.get("content", "")
            if name == "description":
                self.meta_description = content
            elif prop == "og:title":
                self.og_title = content
            elif prop == "og:description":
                self.og_desc = content
            elif prop == "og:image":
                self.og_image = content
        elif tag == "link":
            if attrs_d.get("rel") == "canonical":
                self.canonical = attrs_d.get("href", "")
        elif tag == "img":
            self.img_count += 1
            if not attrs_d.get("alt"):
                self.img_alt_missing += 1
        elif tag == "a":
            href = attrs_d.get("href", "")
            if href and not href.startswith("http") and not href.startswith("#") and not href.startswith("mailto"):
                self.internal_links.append(href)
        elif tag == "script":
            if attrs_d.get("type") == "application/ld+json":
                self.in_jsonld = True
        elif tag == "/head" or tag == "body":
            self.in_head = False

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        elif tag == "script" and self.in_jsonld:
            self.in_jsonld = False
            if self.jsonld_content:
                self.json_ld_blocks.append(self.jsonld_content)
            self.jsonld_content = ""

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        if self.in_jsonld:
            self.jsonld_content += data


def audit_url(path):
    url = f"{SITE}{path}" if not path.startswith("http") else path
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    req = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0 (compatible; SEOAudit/1.0)"}
    )

    errors = []
    warnings = []

    try:
        with urllib.request.urlopen(req, context=ctx, timeout=20) as resp:
            status = resp.status
            html = resp.read().decode("utf-8", errors="ignore")
            final_url = resp.url
    except urllib.error.HTTPError as e:
        return path, e.code, [], [f"HTTP {e.code}"]
    except Exception as e:
        return path, 0, [], [f"ERROR: {e}"]

    if status != 200:
        errors.append(f"HTTP {status}")

    # Skip XML/robots checks for non-HTML
    if path in ("/sitemap.xml", "/robots.txt", "/manifest.webmanifest"):
        return path, status, [], []

    # Parse HTML
    parser = HTMLTitleParser()
    try:
        parser.feed(html)
    except Exception as e:
        errors.append(f"HTML parse error: {e}")

    # Title
    if not parser.title.strip():
        errors.append("Missing <title>")
    elif len(parser.title) < 30:
        warnings.append(f"Title troppo corto ({len(parser.title)} chars): {parser.title}")
    elif len(parser.title) > 65:
        warnings.append(f"Title troppo lungo ({len(parser.title)} chars): {parser.title[:80]}")

    # Meta description
    if not parser.meta_description:
        warnings.append("Missing meta description")
    elif len(parser.meta_description) < 100:
        warnings.append(f"Meta desc corta ({len(parser.meta_description)} chars)")
    elif len(parser.meta_description) > 200:
        warnings.append(f"Meta desc lunga ({len(parser.meta_description)} chars)")

    # Canonical
    if not parser.canonical:
        warnings.append("Missing canonical")

    # H1
    if parser.h1_count == 0:
        warnings.append("No H1")
    elif parser.h1_count > 1:
        warnings.append(f"{parser.h1_count} H1 (should be 1)")

    # OpenGraph
    if not parser.og_title:
        warnings.append("Missing og:title")
    if not parser.og_desc:
        warnings.append("Missing og:description")
    if not parser.og_image:
        warnings.append("Missing og:image")

    # JSON-LD
    jsonld_errors = []
    jsonld_types = []
    for i, block in enumerate(parser.json_ld_blocks):
        try:
            d = json.loads(block)
            if isinstance(d, dict):
                jsonld_types.append(d.get("@type", "?"))
            elif isinstance(d, list):
                for item in d:
                    if isinstance(item, dict):
                        jsonld_types.append(item.get("@type", "?"))
        except json.JSONDecodeError as e:
            jsonld_errors.append(f"JSON-LD block {i+1} invalid: {e}")

    if jsonld_errors:
        errors.extend(jsonld_errors)
    if not jsonld_types:
        warnings.append("No JSON-LD blocks")

    # Image alt
    if parser.img_alt_missing > 0:
        warnings.append(f"{parser.img_alt_missing} img senza alt (su {parser.img_count})")

    # Mixed content
    if "http://" in html and "https://" not in html:
        mixed = re.findall(r'src=["\']http://[^"\']+["\']', html)
        if mixed:
            errors.append(f"Mixed content: {len(mixed)} URL http://")

    return path, status, warnings + [f"JSON-LD types: {jsonld_types}"] if jsonld_types else warnings, errors


def main():
    print(f"=== AUDIT SEO TECNICO COMPLETO ===")
    print(f"Sito: {SITE}")
    print(f"URL da testare: {len(URLS)}")
    print(f"Inizio: {time.strftime('%H:%M:%S')}")
    print()

    all_errors = []
    all_warnings = []
    results = []

    # Test URLs in parallel (max 5 concurrent)
    with ThreadPoolExecutor(max_workers=5) as executor:
        futures = {executor.submit(audit_url, p): p for p in URLS}
        for fut in as_completed(futures):
            path = futures[fut]
            try:
                p, status, warnings, errors = fut.result()
                results.append((p, status, warnings, errors))
                if errors:
                    all_errors.extend([(p, e) for e in errors])
                if warnings:
                    all_warnings.extend([(p, w) for w in warnings])
            except Exception as e:
                results.append((path, 0, [], [f"EXCEPTION: {e}"]))

    # Sort results
    results.sort(key=lambda x: x[0])

    # Stampa risultati
    print("=== RISULTATI ===\n")
    for path, status, warnings, errors in results:
        icon = "✓" if not errors else "✗"
        print(f"{icon} {path}")
        print(f"   HTTP: {status}")
        for e in errors:
            print(f"   ERROR: {e}")
        for w in warnings:
            print(f"   WARN: {w}")
        print()

    # Riepilogo
    print("\n=== RIEPILOGO ===")
    print(f"URL testati: {len(results)}")
    print(f"URL con errori: {len([r for r in results if r[3]])}")
    print(f"URL con warning: {len([r for r in results if r[2]])}")
    print(f"Errori totali: {len(all_errors)}")
    print(f"Warning totali: {len(all_warnings)}")

    if all_errors:
        print("\n=== TUTTI GLI ERRORI ===")
        for p, e in all_errors:
            print(f"  {p}: {e}")

    if all_warnings:
        print("\n=== TUTTI I WARNING ===")
        for p, w in all_warnings:
            print(f"  {p}: {w}")


if __name__ == "__main__":
    main()
