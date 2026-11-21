#!/usr/bin/env python3
"""
RIMUOVI SABBIE NERE da tutto il codice - VERSIONE SICURA.
NON comprime whitespace strutturale (preserva formattazione TypeScript/TSX).
"""
import re
from pathlib import Path

ROOT = Path("/home/z/my-project/src")

FILES_TO_PROCESS = [
    "lib/data.ts",
    "app/layout.tsx",
    "app/enciclopedia-maria-antonina/page.tsx",
    "app/filmografia/page.tsx",
    "app/search/search-client.tsx",
    "app/news/sodalizio-maria-antonina-angelo-faraci/page.tsx",
    "app/news/percorso-artistico-cinema-sicilia/page.tsx",
    "app/news/domande-piu-cercate-maria-antonina/page.tsx",
    "app/news/curiosita-fatti-maria-antonina/page.tsx",
    "app/news/cast-pochi-attimi/page.tsx",
    "app/news/ritratto-maria-antonina-24-anni/page.tsx",
    "app/news/intervista-maria-antonina-macaluso/page.tsx",
    "app/news/premi-riconoscimenti-maria-antonina/page.tsx",
    "app/news/valle-belice-1968-cinema-rinascita/page.tsx",
    "app/news/catastrofi-ambientali-italiane/page.tsx",
    "app/news/camporeale-radici-maria-antonina/page.tsx",
    "app/news/angelo-faraci-regista-siciliano/page.tsx",
    "components/sections/Filmography.tsx",
    "components/sections/Biography.tsx",
    "components/sections/AltreProduzioni.tsx",
]

def remove_sabbie_nere_film_block(content: str) -> str:
    """Rimuove l'oggetto Sabbie Nere da FILMS array in data.ts."""
    # Pattern: blocco completo { slug: "sabbie-nere", ... },
    pattern = r'\n\s*\{\s*slug:\s*"sabbie-nere",[\s\S]*?\},\n'
    return re.sub(pattern, '\n', content, count=1)

def clean_text_references(content: str) -> str:
    """Pulisce riferimenti testuali a Sabbie Nere SENZA toccare whitespace strutturale."""
    replacements = [
        # "Sabbie Nere (2023), " → ""
        (r',?\s*Sabbie Nere \(2023[^)]*\)', ''),
        (r'Sabbie Nere \(2023[^)]*\),?\s*', ''),
        # "«Sabbie Nere» (2023, Mediaset), " → ""
        (r'«Sabbie Nere»\s*\(2023[^)]*\),?\s*', ''),
        (r',?\s*«Sabbie Nere»\s*\(2023[^)]*\)', ''),
        # "Sabbie Nere (2023, Mediaset)" → ""
        (r'Sabbie Nere\s*\(2023[^)]*\)', ''),
        # "Sabbie Nere (2023)" → ""
        (r'Sabbie Nere \(2023\)', ''),
        # "Sabbie Nere — Mediaset" → ""
        (r'«Sabbie Nere»\s*—\s*Mediaset', ''),
        (r'Sabbie Nere — Mediaset', ''),
        # ListItem JSON-LD
        (r'\n\s*\{\s*"@type":\s*"ListItem",\s*position:\s*6,\s*name:\s*"Sabbie Nere[^"]*",\s*url:[^}]+\},', ''),
        # Movie JSON-LD
        (r'\n\s*\{\s*"@type":\s*"Movie",\s*name:\s*"Sabbie Nere[^"]*"[^}]+\},', ''),
        # Biografia: "esclusi Sabbie Nere e Vanina" → "esclusa Vanina"
        (r'esclusi Sabbie Nere e ', 'esclusa '),
        (r'esclusi Sabbie Nere, ', 'esclusa '),
        # Timeline entries: { year: "2023", title: "Sabbie Nere", ... },
        (r'\n\s*\{\s*year:\s*"2023",\s*title:\s*"Sabbie Nere[^"]*",[\s\S]*?\},', ''),
        # Enciclopedia: { anno: "2023", titolo: "Sabbie Nere", ... },
        (r'\n\s*\{\s*anno:\s*"2023",\s*titolo:\s*"Sabbie Nere[^"]*",[\s\S]*?\},', ''),
        # Aggiorna conteggi
        (r'10 produzioni cinematografiche', '9 produzioni cinematografiche'),
        (r'10 produzioni dal 2019 al 2026', '9 produzioni dal 2019 al 2026'),
        (r'ha interpretato 10 produzioni', 'ha interpretato 9 produzioni'),
        (r'dieci produzioni, una visione', 'nove produzioni, una visione'),
        (r'Dieci produzioni, una visione', 'Nove produzioni, una visione'),
        # FAQ list: "Sabbie Nere (2023, Mediaset), " → ""
        (r'Sabbie Nere \(2023,\s*Mediaset\),?\s*', ''),
        (r',?\s*Sabbie Nere \(2023,\s*Mediaset\)', ''),
        # Search keywords entry
        (r'\n\s*\{\s*type:\s*"Film",\s*title:\s*"Sabbie Nere[^}]+\},', ''),
        # Trivia: "Maria Antonina Macaluso accanto ad Angelo Faraci nel cast."
        (r'Maria Antonina Macaluso accanto ad Angelo Faraci nel cast\.', ''),
    ]
    
    for pattern, replacement in replacements:
        content = re.sub(pattern, replacement, content)
    
    # Fix ONLY punteggiatura doppi spazi (NO global whitespace collapse)
    content = re.sub(r',\s*,', ',', content)
    content = re.sub(r',\s+\.', '.', content)
    content = re.sub(r'\(\s*,', '(', content)
    content = re.sub(r',\s+\)', ')', content)
    # Fix spazi multipli dentro STRINGHE (preserva newlines)
    # NON applicare re.sub(r'\s+', ' ', content) - rompe il codice!
    
    return content

def main():
    print("=" * 60)
    print("RIMOZIONE SABBIE NERE - VERSIONE SICURA")
    print("=" * 60)
    
    for rel_path in FILES_TO_PROCESS:
        filepath = ROOT / rel_path
        if not filepath.exists():
            continue
        
        original = filepath.read_text(encoding="utf-8")
        content = original
        
        if "lib/data.ts" in rel_path:
            content = remove_sabbie_nere_film_block(content)
        
        content = clean_text_references(content)
        
        if content != original:
            remaining = content.lower().count("sabbie nere")
            filepath.write_text(content, encoding="utf-8")
            print(f"[OK] {rel_path}: modificato. Rimanenti: {remaining}")
        else:
            remaining = content.lower().count("sabbie nere")
            print(f"[SKIP] {rel_path}: nessun cambiamento. Rimanenti: {remaining}")

if __name__ == "__main__":
    main()
