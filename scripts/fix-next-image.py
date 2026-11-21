#!/usr/bin/env python3
"""
FIX CRITICO: sostituisce next/image con <img> standard HTML.
Motivo: GitHub Pages (static export) non ha la route /_next/image → 404 → immagini rotte.
Con <img> standard, gli src rimangono /images/... e funzionano su qualsiasi static host.

Trasformazioni:
1. Rimuove: `import Image from "next/image";` (con varianti)
2. Sostituisce: <Image con <img
3. Rimuove props Next-specific: fill, priority, quality, sizes, placeholder, blurDataURL,
   loader, unoptimized, objectFit, objectPosition (da <img>), alt rimane, className rimane
4. Le props width/height (numeri) rimangono valide per <img>
5. fill={true} → style con position absolute
"""
import re
import sys
from pathlib import Path

ROOT = Path("/home/z/my-project/src")
FILES = [
    "app/photo/[id]/page.tsx",
    "app/altre-produzioni/[slug]/page.tsx",
    "app/enciclopedia-maria-antonina/page.tsx",
    "app/tag/cinema-siciliano/page.tsx",
    "app/tag/venezia-83/page.tsx",
    "app/tag/angelo-faraci/page.tsx",
    "app/film/[slug]/page.tsx",
    "app/news/camporeale-radici-maria-antonina/page.tsx",
    "app/news/pochi-attimi-venezia-83/page.tsx",
    "app/news/sodalizio-maria-antonina-angelo-faraci/page.tsx",
    "app/news/valle-belice-1968-cinema-rinascita/page.tsx",
    "app/news/curiosita-fatti-maria-antonina/page.tsx",
    "app/news/percorso-artistico-cinema-sicilia/page.tsx",
    "app/news/cast-pochi-attimi/page.tsx",
    "app/news/angelo-faraci-regista-siciliano/page.tsx",
    "app/news/intervista-maria-antonina-macaluso/page.tsx",
    "app/news/domande-piu-cercate-maria-antonina/page.tsx",
    "app/news/ritratto-maria-antonina-24-anni/page.tsx",
    "app/news/catastrofi-ambientali-italiane/page.tsx",
    "app/news/premi-riconoscimenti-maria-antonina/page.tsx",
    "components/sections/ContentCreator.tsx",
    "components/sections/Biography.tsx",
    "components/sections/Filmography.tsx",
    "components/sections/PochiAttimiVenezia.tsx",
    "components/sections/Hero.tsx",
    "components/sections/PhotoBook.tsx",
    "components/sections/AltreProduzioni.tsx",
    "components/sections/LoveStory.tsx",
    "components/cinematic/YouTubeFacade.tsx",
    "components/cinematic/FacebookEmbed.tsx",
]

# Props Next.js-specific da rimuovere completamente
PROPS_TO_REMOVE = [
    "priority",
    "quality=\\{[^}]+\\}",
    "sizes=\\{?\"[^\"]*\"\\}?",
    "sizes=\\{[^}]+\\}",
    "placeholder=\\{?\"?[a-z]+\"?\\}?",
    "placeholder=\"[a-z]+\"",
    "blurDataURL=\\{[^}]+\\}",
    "loader=\\{[^}]+\\}",
    "unoptimized",
    "objectFit=\\{?\"?[a-z-]+\"?\\}?",
    "objectPosition=\\{?\"?[a-z\\s]+\"?\\}?",
    "loading=\"eager\"",
]

# Pattern: import Image from "next/image";
IMPORT_PATTERN = re.compile(
    r'^import\s+Image\s*,?\s*(?:\{[^}]*\})?\s+from\s+["\']next/image["\'];?\s*\n',
    re.MULTILINE
)

# Pattern: import type { ImageProps } from "next/image"  (rare, lascia stare se solo type)
IMPORT_TYPE_PATTERN = re.compile(
    r'^import\s+(?:type\s+)?\{[^}]*Image[^}]*\}\s+from\s+["\']next/image["\'];?\s*\n',
    re.MULTILINE
)

def remove_props(content: str) -> str:
    """Rimuove props Next-specific mantenendo sintassi JSX valida."""
    for prop in PROPS_TO_REMOVE:
        content = re.sub(r'\s+' + prop, '', content)
    return content

def handle_fill_prop(content: str) -> str:
    """
    Gestisce fill={true} o fill:
    - Rimuove il prop fill
    - Mantiene className (contiene già absolute inset-0 h-full w-full via CSS)
    """
    # fill={true} o fill={false} o fill alone
    content = re.sub(r'\s+fill=\{(?:true|false)\}', '', content)
    content = re.sub(r'\s+fill(?=\s|/?>)', '', content)
    return content

def transform_image_component(content: str) -> str:
    """Trasforma <Image ...> in <img ...> preservando struttura."""
    # Sostituisci <Image con <img (preserva spazio e props)
    content = re.sub(r'<Image(?=\s|/?>)', '<img', content)
    # Sostituisci </Image> con </img>
    content = re.sub(r'</Image>', '</img>', content)
    return content

def fix_file(filepath: Path) -> dict:
    """Fix un singolo file."""
    if not filepath.exists():
        return {"file": str(filepath), "status": "MISSING", "changes": 0}
    
    original = filepath.read_text(encoding="utf-8")
    content = original
    
    # 1. Rimuovi import di next/image
    import_matches = IMPORT_PATTERN.findall(content)
    content = IMPORT_PATTERN.sub('', content)
    
    # Rimuovi anche import type da next/image (se presenti)
    type_matches = IMPORT_TYPE_PATTERN.findall(content)
    content = IMPORT_TYPE_PATTERN.sub('', content)
    
    # 2. Trasforma <Image in <img
    img_count_before = content.count("<Image")
    content = transform_image_component(content)
    img_count_after = content.count("<Image")
    transformed_components = img_count_before - img_count_after
    
    # 3. Gestisci fill prop PRIMA di rimuovere altre props
    content = handle_fill_prop(content)
    
    # 4. Rimuovi props Next-specific
    content = remove_props(content)
    
    # 5. Aggiungi loading="lazy" se non presente (per performance) SOLO se l'img non ha già loading
    # Non lo facciamo per evitare di toccare troppo
    
    # Scrivi solo se ci sono stati cambiamenti
    if content != original:
        filepath.write_text(content, encoding="utf-8")
        return {
            "file": str(filepath.relative_to(ROOT)),
            "status": "FIXED",
            "changes": transformed_components + len(import_matches) + len(type_matches),
            "imports_removed": len(import_matches) + len(type_matches),
            "components_transformed": transformed_components,
        }
    return {"file": str(filepath.relative_to(ROOT)), "status": "NO_CHANGES", "changes": 0}

def main():
    print("=" * 60)
    print("FIX NEXT/IMAGE → <IMG> STANDARD")
    print("Motivo: GitHub Pages non ha /_next/image route → 404")
    print("=" * 60)
    print()
    
    results = []
    for rel_path in FILES:
        filepath = ROOT / rel_path
        result = fix_file(filepath)
        results.append(result)
        status_icon = "OK" if result["status"] == "FIXED" else "SKIP" if result["status"] == "NO_CHANGES" else "ERR"
        print(f"[{status_icon}] {result['file']}: {result.get('components_transformed', 0)} componenti, {result.get('imports_removed', 0)} import")
    
    print()
    print("=" * 60)
    total_fixed = sum(1 for r in results if r["status"] == "FIXED")
    total_components = sum(r.get("components_transformed", 0) for r in results)
    total_imports = sum(r.get("imports_removed", 0) for r in results)
    print(f"TOTALE: {total_fixed}/{len(FILES)} file sistemati")
    print(f"         {total_components} componenti <Image> → <img>")
    print(f"         {total_imports} import next/image rimossi")
    print("=" * 60)
    
    return 0 if total_fixed > 0 else 1

if __name__ == "__main__":
    sys.exit(main())
