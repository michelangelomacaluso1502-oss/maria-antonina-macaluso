#!/usr/bin/env python3
"""
Genera sitemap-images.xml e sitemap-news.xml come FILE STATICI XML in public/.
Le route handlers Next.js non funzionano su GitHub Pages static export.
"""
from pathlib import Path
from datetime import datetime

BASE = "https://mariaantoninamacaluso.it"
NOW = datetime.now().isoformat() + "Z"
PUBLIC = Path("/home/z/my-project/public")

# === SITEMAP-IMAGES.XML ===
images = [f"{BASE}/images/hero-maria-antonina.jpg"]

# 7 foto Venezia
for i in range(1, 8):
    images.append(f"{BASE}/images/venezia/venezia-{i:02d}.jpg")

# 90 foto photobook (mam-01 to mam-84, skip 49, + venezia-01 to venezia-07 già aggiunte sopra)
# mam-01 to mam-84 (skip 49)
for i in range(1, 85):
    if i == 49:
        continue
    images.append(f"{BASE}/images/photobook/mam-{i:02d}.jpg")

# Locandine film
film_posters = [
    "/images/films/cio-che-non-ti-ho-detto.jpg",
    "/images/films/cio-che-non-ti-ho-detto-revolution.jpg",
    "/images/films/provvidenza.jpg",
    "/images/films/pietrazita.jpg",
    "/images/films/separati-mai.jpg",
    "/images/films/spartivento.jpg",
    "/images/films/pochi-attimi.jpg",
]
for p in film_posters:
    images.append(f"{BASE}{p}")

# Biografia images
biografia = [
    "radici.jpg", "incontro-2025.jpg", "fidanzamento-angelo.jpg",
    "cio-che-non-ti-ho-detto-ritratto.jpg", "provvidenza-ritratto.jpg",
    "separati-mai-cavallo-ciak.jpg", "separati-mai-ciak-villa.jpg",
    "separati-mai-ritratto.jpg", "musa.jpg", "spartivento-set.jpg",
    "spartivento-ciak.jpg", "pochi-attimi.jpg",
]
for b in biografia:
    images.append(f"{BASE}/images/biografia/{b}")

# Content creator
for c in ["beauty-v2.jpg", "lifestyle-v2.jpg", "beauty-creator.jpg", "lifestyle-creator.jpg"]:
    images.append(f"{BASE}/images/content-creator/{c}")

# Relation (26)
for i in range(1, 27):
    images.append(f"{BASE}/images/relation/rel-{i:02d}.jpg")

# Genera XML
xml_parts = ['<?xml version="1.0" encoding="UTF-8"?>']
xml_parts.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">')

for img in images:
    xml_parts.append(f"""  <url>
    <loc>{img}</loc>
    <lastmod>{NOW}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>{img}</image:loc>
    </image:image>
  </url>""")

xml_parts.append('</urlset>')
xml_content = "\n".join(xml_parts)

(PUBLIC / "sitemap-images.xml").write_text(xml_content, encoding="utf-8")
print(f"[OK] sitemap-images.xml: {len(images)} immagini")

# === SITEMAP-NEWS.XML ===
news_articles = [
    ("/news/pochi-attimi-cinema-empire-partinico", "Pochi Attimi — Proiezione Cinema Empire Partinico", "2026-11-20"),
    ("/news/pochi-attimi-proiezione-messina", "Pochi Attimi — Proiezione Messina", "2026-11-21"),
    ("/news/pochi-attimi-venezia-83", "VENEZIA 83 — Pochi Attimi al Premio Leone Lungo", "2026-08-16"),
    ("/news/sodalizio-maria-antonina-angelo-faraci", "Sodalizio artistico Macaluso-Faraci — 10 film", "2026-09-25"),
    ("/news/cast-pochi-attimi", "Cast Pochi Attimi — scheda completa", "2026-09-28"),
    ("/news/catastrofi-ambientali-italiane", "Catastrofi ambientali italiane — il film Pochi Attimi", "2026-09-28"),
    ("/news/camporeale-radici-maria-antonina", "Camporeale — radici siciliane di Maria Antonina Macaluso", "2026-09-28"),
    ("/news/intervista-maria-antonina-macaluso", "Intervista a Maria Antonina Macaluso", "2026-09-28"),
    ("/news/ritratto-maria-antonina-24-anni", "Ritratto di Maria Antonina a 24 anni", "2026-09-28"),
    ("/news/percorso-artistico-cinema-sicilia", "Percorso artistico di Maria Antonina Macaluso nel cinema", "2026-09-28"),
    ("/news/angelo-faraci-regista-siciliano", "Angelo Faraci — regista siciliano biografia", "2026-09-28"),
    ("/news/premi-riconoscimenti-maria-antonina", "Premi e riconoscimenti di Maria Antonina Macaluso", "2026-09-28"),
    ("/news/valle-belice-1968-cinema-rinascita", "Valle del Belice — dal terremoto 1968 al cinema", "2026-09-28"),
    ("/news/domande-piu-cercate-maria-antonina", "10 domande frequenti su Maria Antonina Macaluso", "2026-09-29"),
    ("/news/curiosita-fatti-maria-antonina", "15 curiosità e fatti veritieri su Maria Antonina Macaluso", "2026-09-29"),
    ("/enciclopedia-maria-antonina", "Maria Antonina Macaluso — Enciclopedia (voce principale)", "2026-09-29"),
    ("/tag/angelo-faraci", "Angelo Faraci — regista e attore", "2026-09-28"),
    ("/tag/venezia-83", "Venezia 83 — Premio Leone Lungo", "2026-09-28"),
    ("/tag/cinema-siciliano", "Cinema siciliano contemporaneo", "2026-09-28"),
]

xml_parts = ['<?xml version="1.0" encoding="UTF-8"?>']
xml_parts.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">')

for path, title, date in news_articles:
    xml_parts.append(f"""  <url>
    <loc>{BASE}{path}</loc>
    <lastmod>{date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <news:news>
      <news:publication>
        <news:name>Maria Antonina Macaluso — Sito ufficiale</news:name>
        <news:language>it</news:language>
      </news:publication>
      <news:publication_date>{date}</news:publication_date>
      <news:title>{title}</news:title>
    </news:news>
  </url>""")

xml_parts.append('</urlset>')
xml_content = "\n".join(xml_parts)

(PUBLIC / "sitemap-news.xml").write_text(xml_content, encoding="utf-8")
print(f"[OK] sitemap-news.xml: {len(news_articles)} articoli")

# Aggiorna robots.txt per includere i nuovi sitemap
robots = f"""User-Agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: {BASE}/sitemap.xml
Sitemap: {BASE}/sitemap-images.xml
Sitemap: {BASE}/sitemap-news.xml
"""
(PUBLIC / "robots.txt").write_text(robots, encoding="utf-8")
print(f"[OK] robots.txt aggiornato con 3 sitemap")
