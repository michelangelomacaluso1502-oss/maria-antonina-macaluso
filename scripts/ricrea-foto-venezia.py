#!/usr/bin/env python3
"""Ricrea le 7 foto Venezia ottimizzate e le copia in photobook."""
import shutil
from pathlib import Path
from PIL import Image

PHOTOS = [
    ("photo_5850379635303059309_y.jpg", "venezia-01.jpg"),
    ("photo_5850379635303059310_w.jpg", "venezia-02.jpg"),
    ("photo_5850379635303059311_y.jpg", "venezia-03.jpg"),
    ("photo_5850379635303059312_w.jpg", "venezia-04.jpg"),
    ("photo_5850379635303059313_w.jpg", "venezia-05.jpg"),
    ("photo_5850379635303059314_w.jpg", "venezia-06.jpg"),
    ("photo_5850379635303059315_w.jpg", "venezia-07.jpg"),
]

UPLOAD = Path("/home/z/my-project/upload")
VENEZIA = Path("/home/z/my-project/public/images/venezia")
BOOK = Path("/home/z/my-project/public/images/photobook")

VENEZIA.mkdir(parents=True, exist_ok=True)
BOOK.mkdir(parents=True, exist_ok=True)

MAX_DIM = 1920
QUALITY = 96

for src_name, dst_name in PHOTOS:
    src = UPLOAD / src_name
    if not src.exists():
        print(f"  SKIP: {src_name} non trovato")
        continue
    dst1 = VENEZIA / dst_name
    dst2 = BOOK / dst_name
    img = Image.open(src)
    if img.mode != "RGB":
        img = img.convert("RGB")
    img.info.pop("exif", None)
    w, h = img.size
    if max(w, h) > MAX_DIM:
        if w >= h:
            new_w, new_h = MAX_DIM, int(h * (MAX_DIM / w))
        else:
            new_h, new_w = MAX_DIM, int(w * (MAX_DIM / h))
        img = img.resize((new_w, new_h), Image.LANCZOS)
        print(f"  {dst_name}: resize {w}x{h} -> {new_w}x{new_h}")
    img.save(dst1, format="JPEG", quality=QUALITY, subsampling=0, progressive=True, optimize=True, dpi=(72, 72))
    shutil.copy2(dst1, dst2)
    orig = src.stat().st_size
    new = dst1.stat().st_size
    print(f"  ✓ {dst_name}  {orig//1024}KB -> {new//1024}KB")

print("\n=== File creati ===")
for f in sorted(VENEZIA.glob("venezia-*.jpg")):
    print(f"  venezia/{f.name}  {f.stat().st_size//1024}KB")
print()
for f in sorted(BOOK.glob("venezia-*.jpg")):
    print(f"  photobook/{f.name}  {f.stat().st_size//1024}KB")
