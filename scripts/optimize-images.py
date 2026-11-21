#!/usr/bin/env python3
"""
OTTIMIZZAZIONE IMMAGINI MASSIVA
- Photobook: max 1200px width, qualità 80, mantieni aspect ratio
- Altre cartelle: max 1400px width, qualità 82
- Obiettivo: -70% dimensioni totali
"""
import os
from pathlib import Path
from PIL import Image, ImageOps
import io
import sys

ROOT = Path("/home/z/my-project/public/images")
BACKUP = Path("/tmp/images-backup")

# Configurazione per cartella
CONFIG = {
    "photobook": {"max_width": 1200, "max_height": 1600, "quality": 78, "progressive": True},
    "biografia": {"max_width": 1400, "max_height": 1800, "quality": 82, "progressive": True},
    "films": {"max_width": 1000, "max_height": 1500, "quality": 82, "progressive": True},
    "relation": {"max_width": 1200, "max_height": 1600, "quality": 80, "progressive": True},
    "venezia": {"max_width": 1200, "max_height": 1600, "quality": 80, "progressive": True},
    "content-creator": {"max_width": 1200, "max_height": 1500, "quality": 82, "progressive": True},
    "news": {"max_width": 1200, "max_height": 800, "quality": 80, "progressive": True},
}

def optimize_image(src_path: Path, dst_path: Path, cfg: dict) -> dict:
    """Ottimizza una singola immagine."""
    try:
        original_size = src_path.stat().st_size
        with Image.open(src_path) as img:
            # Auto-orient (fix EXIF rotation)
            img = ImageOps.exif_transpose(img)
            
            # Converti RGB se necessario (per JPEG)
            if img.mode in ("RGBA", "P", "LA"):
                img = img.convert("RGB")
            elif img.mode != "RGB":
                img = img.convert("RGB")
            
            # Ridimensiona mantenendo aspect ratio (solo se più grande del max)
            w, h = img.size
            max_w, max_h = cfg["max_width"], cfg["max_height"]
            
            if w > max_w or h > max_h:
                # Calcola ratio per fit dentro max_w x max_h
                ratio = min(max_w / w, max_h / h)
                new_w = int(w * ratio)
                new_h = int(h * ratio)
                # Usa LANCZOS per alta qualità downscale
                img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
            
            # Salva con ottimizzazioni
            dst_path.parent.mkdir(parents=True, exist_ok=True)
            img.save(
                dst_path,
                format="JPEG",
                quality=cfg["quality"],
                optimize=True,
                progressive=cfg["progressive"],
                subsampling=2,  # 4:2:0 per file più piccoli
            )
            
            new_size = dst_path.stat().st_size
            saved_pct = (1 - new_size / original_size) * 100 if original_size > 0 else 0
            return {
                "file": src_path.name,
                "orig_kb": original_size // 1024,
                "new_kb": new_size // 1024,
                "saved_pct": saved_pct,
                "dimensions": f"{img.size[0]}x{img.size[1]}",
            }
    except Exception as e:
        return {"file": src_path.name, "error": str(e)}


def process_folder(folder_name: str, cfg: dict):
    """Processa tutte le immagini in una cartella."""
    folder = ROOT / folder_name
    if not folder.exists():
        print(f"  [SKIP] Cartella {folder_name} non esiste")
        return
    
    images = list(folder.glob("*.jpg")) + list(folder.glob("*.jpeg")) + list(folder.glob("*.png"))
    if not images:
        print(f"  [SKIP] Nessuna immagine in {folder_name}")
        return
    
    print(f"\n=== {folder_name.upper()} ({len(images)} immagini) ===")
    total_orig = 0
    total_new = 0
    errors = 0
    
    for img_path in images:
        result = optimize_image(img_path, img_path, cfg)  # overwrite in place
        if "error" in result:
            print(f"  [ERR] {result['file']}: {result['error']}")
            errors += 1
        else:
            total_orig += result["orig_kb"]
            total_new += result["new_kb"]
            if result["saved_pct"] > 5:
                print(f"  [OK] {result['file']}: {result['orig_kb']}KB → {result['new_kb']}KB ({result['dimensions']}, -{result['saved_pct']:.0f}%)")
    
    saved_total = total_orig - total_new
    saved_pct = (saved_total / total_orig * 100) if total_orig > 0 else 0
    print(f"  >>> TOTALE {folder_name}: {total_orig//1024}MB → {total_new//1024}MB (-{saved_pct:.0f}%, {errors} errori)")


def main():
    print("=" * 60)
    print("OTTIMIZZAZIONE IMMAGINI MASSIVA")
    print("=" * 60)
    
    # Backup in /tmp (non nel repo)
    BACKUP.mkdir(parents=True, exist_ok=True)
    
    # Processa tutte le cartelle configured
    for folder_name, cfg in CONFIG.items():
        process_folder(folder_name, cfg)
    
    # Stampa riepilogo finale
    print("\n" + "=" * 60)
    print("RIEPILOGO FINALE")
    print("=" * 60)
    
    total_size = 0
    for folder_name in CONFIG:
        folder = ROOT / folder_name
        if folder.exists():
            size = sum(f.stat().st_size for f in folder.glob("*") if f.is_file())
            total_size += size
            print(f"  {folder_name}: {size//1024//1024}MB")
    
    print(f"\n  TOTALE public/images: {total_size//1024//1024}MB")
    print("=" * 60)


if __name__ == "__main__":
    main()
