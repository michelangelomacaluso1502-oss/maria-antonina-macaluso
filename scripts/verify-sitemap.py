#!/usr/bin/env python3
"""Verifica tutti gli URL della sitemap via GET (curl) e genera una sitemap
pulita contenente SOLO gli URL che rispondono 200. Usa curl perche' GitHub
Pages restituisce 200 su HEAD anche sui 404 (non affidabile)."""
import subprocess, re, concurrent.futures, sys
from collections import Counter

SRC = '/home/z/my-project/download/sitemap.xml'
OUT = '/home/z/my-project/download/sitemap.xml'
REPORT = '/home/z/my-project/download/sitemap-404-report.txt'

xml = open(SRC).read()
url_blocks = re.findall(r'<url>\s*(.*?)\s*</url>', xml, re.DOTALL)
urls = [re.search(r'<loc>([^<]+)</loc>', b).group(1) for b in url_blocks]

def check(u):
    http_url = u.replace('https://', 'http://', 1)
    if http_url.endswith('mariaantoninamacaluso.it'):
        http_url += '/'
    try:
        r = subprocess.run(
            ['curl', '-s', '-o', '/dev/null', '-w', '%{http_code}',
             '--max-time', '15', '-A', 'Mozilla/5.0 (sitemap-verify)', http_url],
            capture_output=True, text=True, timeout=20)
        return (u, r.stdout.strip() or 'ERR')
    except Exception as e:
        return (u, f'ERR:{type(e).__name__}')

print(f'Verifica GET (curl) di {len(urls)} URL...', file=sys.stderr)
with concurrent.futures.ThreadPoolExecutor(max_workers=15) as ex:
    results = list(ex.map(check, urls))

ok = [r for r in results if r[1] == '200']
bad = [r for r in results if r[1] != '200']

def cat(u):
    if '/photo/' in u: return 'photo'
    if '/film/' in u: return 'film'
    if '/altre-produzioni/' in u: return 'altre'
    if '/news/' in u: return 'news'
    if '/tag/' in u: return 'tag'
    return 'statiche'

cats_ok = Counter(cat(u) for u, _ in ok)
cats_bad = Counter(cat(u) for u, _ in bad)

print(f'Totale: {len(urls)} | OK (200): {len(ok)} | Non OK: {len(bad)}')
print('OK per categoria   :', dict(cats_ok))
print('BAD per categoria  :', dict(cats_bad))

# Sitemap pulita (solo 200)
ok_set = set(u for u, _ in ok)
clean_blocks = [b for b, u in zip(url_blocks, urls) if u in ok_set]
lines = ['<?xml version="1.0" encoding="UTF-8"?>',
         '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">']
for b in clean_blocks:
    b_fixed = b.replace('<loc>https://mariaantoninamacaluso.it</loc>', '<loc>https://mariaantoninamacaluso.it/</loc>')
    lines.append('  <url>')
    lines.append(b_fixed.strip())
    lines.append('  </url>')
lines.append('</urlset>')
clean_xml = '\n'.join(lines) + '\n'
open(OUT, 'w').write(clean_xml)
print(f'\nSitemap pulita (solo 200): {len(ok)} URL -> {OUT} ({len(clean_xml)} bytes)')

if bad:
    with open(REPORT, 'w') as f:
        f.write('URL non raggiungibili (esclusi dalla sitemap pulita):\n')
        f.write(f'Totale esclusi: {len(bad)}\n\n')
        for u, s in sorted(bad):
            f.write(f'{s}\t{u}\n')
    print(f'Report 404: {REPORT}')
    print('--- primi 12 BAD ---')
    for u, s in sorted(bad)[:12]:
        print(f'  {s}  {u}')
