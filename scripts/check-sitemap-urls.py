#!/usr/bin/env python3
"""Verifica AUTHORITATIVA di tutti gli URL della sitemap via GET curl (UA default).
Genera sitemap pulita con SOLO i 200. Debug esplicito sui primi URL photo."""
import subprocess, re, concurrent.futures
from collections import Counter

SRC = '/home/z/my-project/download/sitemap.xml'

xml = open(SRC).read()
urls = re.findall(r'<loc>([^<]+)</loc>', xml)
url_blocks = re.findall(r'<url>\s*(.*?)\s*</url>', xml, re.DOTALL)
print(f'URL estratti: {len(urls)} (blocchi: {len(url_blocks)})')

def check(u):
    hu = u.replace('https://', 'http://', 1)
    if hu == 'http://mariaantoninamacaluso.it':
        hu = 'http://mariaantoninamacaluso.it/'
    r = subprocess.run(['curl', '-s', '-o', '/dev/null', '-w', '%{http_code}',
                        '--max-time', '15', hu],
                       capture_output=True, text=True, timeout=20)
    return (u, r.stdout.strip() or 'ERR')

# DEBUG: primi 3 photo, 1 film, 1 altre, 1 statica
print('\n--- DEBUG (chiamate singole, no thread pool) ---')
for u in [x for x in urls if '/photo/' in x][:3] + \
         [x for x in urls if '/film/' in x][:1] + \
         [x for x in urls if '/altre-produzioni/' in x][:1] + \
         [x for x in urls if '/photo/' not in x and '/film/' not in x and '/altre-produzioni/' not in x][:1]:
    print(f'  {check(u)}')

print('\n--- Verifica completa (10 worker paralleli) ---')
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as ex:
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

print(f'OK(200): {len(ok)} | non-200: {len(bad)}')
print('OK per categoria :', dict(Counter(cat(u) for u,_ in ok)))
print('BAD per categoria:', dict(Counter(cat(u) for u,_ in bad)))
if bad:
    print('--- tutti i BAD ---')
    for u, s in sorted(bad):
        print(f'  {s}  {u}')

# Scrive sitemap pulita (solo 200)
ok_set = set(u for u, _ in ok)
lines = ['<?xml version="1.0" encoding="UTF-8"?>',
         '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">']
for b, u in zip(url_blocks, urls):
    if u in ok_set:
        b2 = b.replace('<loc>https://mariaantoninamacaluso.it</loc>', '<loc>https://mariaantoninamacaluso.it/</loc>')
        lines.append('  <url>')
        lines.append(b2.strip())
        lines.append('  </url>')
lines.append('</urlset>')
clean = '\n'.join(lines) + '\n'
open('/home/z/my-project/download/sitemap.xml', 'w').write(clean)
print(f'\nSitemap pulita scritta: {len(ok)} URL -> /home/z/my-project/download/sitemap.xml ({len(clean)} bytes)')

# Report 404
if bad:
    with open('/home/z/my-project/download/sitemap-404-report.txt', 'w') as f:
        f.write(f'URL esclusi dalla sitemap ({len(bad)}):\n\n')
        for u, s in sorted(bad):
            f.write(f'{s}\t{u}\n')
    print(f'Report 404: /home/z/my-project/download/sitemap-404-report.txt')
