#!/usr/bin/env python3
"""
optimize_images.py  -  Pollachi website image optimizer

What it does
  1. Finds big PNG/JPG images in your website folder
  2. Resizes them (max width 1400px) and converts to WebP (about 90% smaller)
  3. Updates every .html / .css / .js file so it uses the new .webp files
  4. Moves the ORIGINAL images to a backup folder (next to your project)

Usage (in a terminal / VS Code terminal):
  pip install pillow
  python optimize_images.py "path/to/your/project"              (does the work)
  python optimize_images.py "path/to/your/project" --dry-run    (only shows savings)

Options:
  --max-width 1400   biggest width allowed
  --quality 80       WebP quality (75-85 is a good range)
  --min-kb 100       images smaller than this are left alone
"""
import argparse, os, shutil, sys
from pathlib import Path
from PIL import Image

EXTS = {".png", ".jpg", ".jpeg"}
TEXT_EXTS = {".html", ".css", ".js"}
SKIP_DIRS = {".git", "node_modules"}

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("project")
    ap.add_argument("--max-width", type=int, default=1400)
    ap.add_argument("--quality", type=int, default=80)
    ap.add_argument("--min-kb", type=int, default=100)
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args()

    root = Path(a.project).resolve()
    if not root.is_dir():
        sys.exit(f"Folder not found: {root}")
    backup = root.parent / (root.name + "_original_images_backup")

    images, texts = [], []
    for dp, dn, fn in os.walk(root):
        dn[:] = [d for d in dn if d not in SKIP_DIRS]
        for f in fn:
            p = Path(dp) / f
            if p.suffix.lower() in EXTS and p.stat().st_size >= a.min_kb * 1024:
                images.append(p)
            elif p.suffix.lower() in TEXT_EXTS:
                texts.append(p)

    print(f"Found {len(images)} images of {a.min_kb} KB or more, {len(texts)} html/css/js files\n")
    mapping, before, after, rows = {}, 0, 0, []
    used_targets = set(str(p) for p in root.rglob("*.webp"))

    for img in sorted(images):
        size = img.stat().st_size
        target = img.with_suffix(".webp")
        if str(target) in used_targets:            # same name already taken (e.g. a.png and a.jpg)
            target = img.with_name(img.stem + "_" + img.suffix.lstrip(".").lower() + ".webp")
        try:
            im = Image.open(img)
            im.load()
            if im.mode in ("P", "LA"):
                im = im.convert("RGBA")
            elif im.mode not in ("RGB", "RGBA"):
                im = im.convert("RGB")
            if im.width > a.max_width:
                h = round(im.height * a.max_width / im.width)
                im = im.resize((a.max_width, h), Image.LANCZOS)
            tmp = target.with_suffix(".tmp.webp")
            im.save(tmp, "WEBP", quality=a.quality, method=6)
        except Exception as e:
            print(f"  skipped {img.relative_to(root)}  ({e})")
            continue
        new_size = tmp.stat().st_size
        if new_size >= size:                       # not smaller -> keep original
            tmp.unlink(); continue
        before += size; after += new_size
        rel_old = img.relative_to(root).as_posix()
        rel_new = target.relative_to(root).as_posix()
        rows.append((size, new_size, rel_old))
        if a.dry_run:
            tmp.unlink()
        else:
            used_targets.add(str(target))
            dest = backup / img.relative_to(root)
            dest.parent.mkdir(parents=True, exist_ok=True)
            shutil.move(str(img), str(dest))       # original -> backup
            tmp.rename(target)
            mapping[rel_old] = rel_new

    rows.sort(reverse=True)
    for s, n, name in rows[:12]:
        print(f"  {s/1048576:6.2f} MB -> {n/1024:6.0f} KB   {name}")
    if len(rows) > 12:
        print(f"  ... and {len(rows)-12} more")
    print(f"\nImages converted: {len(rows)}")
    print(f"Size: {before/1048576:.1f} MB  ->  {after/1048576:.1f} MB   (saved {100*(1-after/max(before,1)):.0f}%)")

    if a.dry_run:
        print("\n(dry run: nothing was changed)"); return

    # update references in html / css / js
    changed = 0
    keys = sorted(mapping, key=len, reverse=True)
    for t in texts:
        s = t.read_text(encoding="utf-8", errors="surrogateescape", newline="") if False else open(t, encoding="utf-8", errors="surrogateescape", newline="").read()
        o = s
        for old in keys:
            new = mapping[old]
            for variant_old, variant_new in ((old, new),
                                             (old.replace(" ", "%20"), new.replace(" ", "%20")),
                                             (old.replace("&", "&amp;"), new.replace("&", "&amp;"))):
                if variant_old in s:
                    s = s.replace(variant_old, variant_new)
        if s != o:
            open(t, "w", encoding="utf-8", errors="surrogateescape", newline="").write(s)
            changed += 1
    print(f"Updated image links in {changed} html/css/js files")
    print(f"Originals saved in: {backup}")
    print("\nNEXT: open the site, check every page, then upload the project to GitHub.")

if __name__ == "__main__":
    main()
