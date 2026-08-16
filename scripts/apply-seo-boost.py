#!/usr/bin/env python3
"""
Applica SeoBoost component a tutte le pagine interne:
- Aggiunge import SeoBoost
- Inserisce <SeoBoost items={[...]} /> come primo figlio di <main>

Mappa pagine → breadcrumb items
"""
import os
import re
from pathlib import Path

PAGES = [
    # (file_path, breadcrumb_label, parent_path)
    ("src/app/filmografia/page.tsx", "Filmografia"),
    ("src/app/collaborazioni/page.tsx", "Collaborazioni"),
    ("src/app/timeline/page.tsx", "Timeline"),
    ("src/app/premi/page.tsx", "Premi"),
    ("src/app/festival/page.tsx", "Festival"),
    ("src/app/articoli/page.tsx", "Articoli"),
    ("src/app/citazioni/page.tsx", "Citazioni"),
    ("src/app/faq/page.tsx", "FAQ"),
    ("src/app/contatti/page.tsx", "Contatti"),
    ("src/app/photobook/page.tsx", "Photo Book"),
    ("src/app/collegamenti-esteri/page.tsx", "Collegamenti Esteri"),
    ("src/app/multimedia/page.tsx", "Multimedia"),
    ("src/app/angelo-faraci/page.tsx", "Angelo Faraci"),
]

BASE = "/home/z/my-project"

def apply_seo_boost(file_rel: str, label: str) -> tuple[bool, str]:
    file_path = os.path.join(BASE, file_rel)
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    if "SeoBoost" in content:
        return False, f"✓ Già applicato: {file_rel}"

    # 1. Aggiungi import dopo l'ultimo import esistente
    lines = content.split("\n")
    last_import_idx = -1
    for i, line in enumerate(lines):
        if line.startswith("import "):
            last_import_idx = i

    if last_import_idx == -1:
        return False, f"✗ Nessun import trovato: {file_rel}"

    lines.insert(last_import_idx + 1, 'import SeoBoost from "@/components/site/SeoBoost";')
    content = "\n".join(lines)

    # 2. Inserisci <SeoBoost /> come primo figlio di <main>
    seo_component = (
        '<SeoBoost\n'
        '        items={[\n'
        '          { label: "Home", path: "/" },\n'
        f'          {{ label: "{label}" }},\n'
        '        ]}\n'
        '      />'
    )

    # Cerca <main id="main"> o <main>
    main_match = re.search(r"<main([^>]*)>", content)
    if not main_match:
        return False, f"✗ Tag <main> non trovato: {file_rel}"

    main_tag = main_match.group(0)
    main_end = main_match.end()
    # Inserisci subito dopo il tag <main ...>
    new_content = (
        content[:main_end] + "\n      " + seo_component + content[main_end:]
    )

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)

    return True, f"✓ Applicato: {file_rel}"

def main():
    print("=== Applicazione SeoBoost a tutte le pagine ===\n")
    applied = 0
    skipped = 0
    for file_rel, label in PAGES:
        ok, msg = apply_seo_boost(file_rel, label)
        print(f"  {msg}")
        if ok:
            applied += 1
        else:
            skipped += 1
    print(f"\n=== Riepilogo ===")
    print(f"  Applicati: {applied}")
    print(f"  Saltati: {skipped}")
    print(f"  Totale: {len(PAGES)}")

if __name__ == "__main__":
    main()
