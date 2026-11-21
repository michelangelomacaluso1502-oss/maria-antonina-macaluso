#!/usr/bin/env python3
"""
FIX DEFINITIVO CONTEGGI FILMOGRAFIA.
Post-rimozione Sabbie Nere:
- 8 film totali (era 9 con Sabbie Nere, 10 contando anche le "altre produzioni")
- 7 diretti da Angelo Faraci (non "tutti" - Vanina è di Davide Marengo)
- 1 diretto da Davide Marengo (Vanina)

Verità numerica:
- "otto produzioni cinematografiche" (non "nove" o "dieci")
- "sette dirette da Angelo Faraci" (non "sei" o "tutti")
"""
import re
from pathlib import Path

ROOT = Path("/home/z/my-project/src")

# Map di sostituzioni precise
REPLACEMENTS = [
    # "nove produzioni cinematografiche" → "otto produzioni cinematografiche"
    ("nove produzioni cinematografiche", "otto produzioni cinematografiche"),
    ("Nove produzioni cinematografiche", "Otto produzioni cinematografiche"),
    ("nove produzioni cinematografiche e televisive", "otto produzioni cinematografiche e televisive"),
    ("Nove produzioni cinematografiche e televisive", "Otto produzioni cinematografiche e televisive"),
    ("nove produzioni, una visione", "otto produzioni, una visione"),
    ("Nove produzioni, una visione", "Otto produzioni, una visione"),
    # "ha interpretato nove produzioni" → "ha interpretato otto produzioni"
    ("ha interpretato nove produzioni", "ha interpretato otto produzioni"),
    # "9 produzioni" → "8 produzioni"
    ("9 produzioni cinematografiche", "8 produzioni cinematografiche"),
    ("9 produzioni", "8 produzioni"),
    # Filmografia SEO description: "sei film diretti da Angelo Faraci" → "sette film"
    ("sei film diretti da Angelo Faraci", "sette film diretti da Angelo Faraci (su otto produzioni totali)"),
    ("Sei film diretti da Angelo Faraci", "Sette film diretti da Angelo Faraci"),
    # "tutti diretti da Angelo Faraci" → fix (Vanina è di Marengo)
    ("tutti diretti da Angelo Faraci", "sette diretti da Angelo Faraci (più Vanina di Davide Marengo)"),
    # CollectionPage JSON-LD: "nove produzioni... dirette da Angelo Faraci" → "otto produzioni, di cui sette dirette da Angelo Faraci"
    ("nove produzioni cinematografiche e televisive dal 2019 al 2026, dirette da Angelo Faraci",
     "otto produzioni cinematografiche e televisive dal 2019 al 2026, di cui sette dirette da Angelo Faraci"),
    # "dieci produzioni interpretate da Maria Antonina" (in Angelo Faraci FAQ) → "otto produzioni"
    ("dieci produzioni interpretate da Maria Antonina", "otto produzioni interpretate da Maria Antonina"),
    ("nove produzioni interpretate da Maria Antonina", "otto produzioni interpretate da Maria Antonina"),
    # "È il regista di tutte le dieci produzioni" → "È il regista di sette delle otto produzioni"
    ("È il regista di tutte le dieci produzioni interpretate da Maria Antonina",
     "È il regista di sette delle otto produzioni interpretate da Maria Antonina"),
    ("È il regista di tutte le nove produzioni interpretate da Maria Antonina",
     "È il regista di sette delle otto produzioni interpretate da Maria Antonina"),
    # "dieci produzioni cinematografiche" → "otto produzioni"
    ("dieci produzioni cinematografiche", "otto produzioni cinematografiche"),
    ("Dieci produzioni cinematografiche", "Otto produzioni cinematografiche"),
]

def fix_file(filepath: Path) -> int:
    """Fix un singolo file. Ritorna numero di sostituzioni fatte."""
    if not filepath.exists():
        return 0
    original = filepath.read_text(encoding="utf-8")
    content = original
    count = 0
    for old, new in REPLACEMENTS:
        if old in content:
            occurrences = content.count(old)
            content = content.replace(old, new)
            count += occurrences
    if content != original:
        filepath.write_text(content, encoding="utf-8")
    return count

def main():
    print("=" * 60)
    print("FIX DEFINITIVO CONTEGGI FILMOGRAFIA")
    print("Verità: 8 film totali, 7 diretti da Angelo Faraci, 1 da Marengo")
    print("=" * 60)
    
    total_changes = 0
    for ts_file in ROOT.rglob("*.tsx"):
        changes = fix_file(ts_file)
        if changes > 0:
            print(f"[OK] {ts_file.relative_to(ROOT)}: {changes} sostituzioni")
            total_changes += changes
    for ts_file in ROOT.rglob("*.ts"):
        changes = fix_file(ts_file)
        if changes > 0:
            print(f"[OK] {ts_file.relative_to(ROOT)}: {changes} sostituzioni")
            total_changes += changes
    
    print()
    print(f"TOTALE: {total_changes} sostituzioni fatte")
    
    # Verifica residui
    print()
    print("=== VERIFICA RESIDUI ===")
    import subprocess
    for term in ["dieci produzioni", "nove produzioni cinematografiche", "sei film diretti", "tutti diretti da Angelo"]:
        result = subprocess.run(
            ["grep", "-rn", term, str(ROOT), "--include=*.tsx", "--include=*.ts"],
            capture_output=True, text=True
        )
        count = len(result.stdout.split("\n")) if result.stdout else 0
        status = "OK" if count == 0 else f"ANCORA {count}"
        print(f"  '{term}': {status}")

if __name__ == "__main__":
    main()
