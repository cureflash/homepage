#!/usr/bin/env python3
import hashlib
import json
import re
import shutil
import struct
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WEB_DIR = ROOT / "subjects/english/power-toeic/assets/characters"
SWIFT_DIR = ROOT / "subjects/english/power-toeic-ios/Sources/PowerTOEIC/Resources/Character"
MANIFEST = ROOT / "subjects/english/power-toeic-ios/Release/AssetManifest.json"
WEB_CATALOG = ROOT / "subjects/english/power-toeic/js/ui/asset-catalog.js"

ASSETS = [
    ("irasutoya_sergeant_instructor", "法務教官のイラスト（男性）", "https://www.irasutoya.com/2017/09/blog-post_34.html"),
    ("irasutoya_trainee_skinny", "痩せた男性のイラスト", "https://www.irasutoya.com/2016/05/blog-post_397.html"),
    ("irasutoya_trainee_muscular", "筋肉質な人のイラスト（男性）", "https://www.irasutoya.com/2018/06/blog-post_865.html"),
    ("irasutoya_trainee_bodybuilder", "ボディービルダーのイラスト", "https://www.irasutoya.com/2014/06/blog-post_14.html"),
]

UA = "Mozilla/5.0 PowerTOEIC asset bundler (repository build-time acquisition; no runtime hotlinking)"
ALLOWED_IMAGE_HOSTS = ("blogger.googleusercontent.com", "bp.blogspot.com")
EXCLUDED_NAMES = ("pyoko_", "logo", "search", "button", "banner", "icon", "line_")


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as response:
        return response.read()


def png_dimensions(data: bytes):
    if data[:8] != b"\x89PNG\r\n\x1a\n" or len(data) < 24:
        return None
    return struct.unpack(">II", data[16:24])


def candidate_urls(html: str):
    urls = set()
    for value in re.findall(r'''(?:src|href|data-original)=["']([^"']+)["']''', html, flags=re.I):
        value = value.replace("&amp;", "&")
        parsed = urllib.parse.urlparse(value)
        host = parsed.hostname or ""
        if any(host == allowed or host.endswith("." + allowed) for allowed in ALLOWED_IMAGE_HOSTS):
            lower = parsed.path.lower()
            if lower.endswith(".png") and not any(token in lower for token in EXCLUDED_NAMES):
                urls.add(value)
    return urls


def select_article_image(page_url: str, title: str):
    html = fetch(page_url).decode("utf-8", errors="replace")
    if title not in html:
        raise RuntimeError(f"source title mismatch for {page_url}: expected {title}")
    scored = []
    for url in candidate_urls(html):
        try:
            data = fetch(url)
            dims = png_dimensions(data)
            if not dims:
                continue
            width, height = dims
            if width < 300 or height < 300:
                continue
            scored.append((width * height, len(data), width, height, url, data))
        except Exception as exc:
            print(f"skip candidate {url}: {exc}")
    if not scored:
        raise RuntimeError(f"no qualifying Irasutoya PNG found for {title}")
    scored.sort(reverse=True)
    _, _, width, height, url, data = scored[0]
    print(f"selected {title}: {width}x{height} {url}")
    return url, data


def update_web_catalog():
    text = WEB_CATALOG.read_text(encoding="utf-8")
    replacements = {
        "[ASSET_IDS.SERGEANT_NEUTRAL]: null": "[ASSET_IDS.SERGEANT_NEUTRAL]: './assets/characters/irasutoya_sergeant_instructor.png'",
        "[ASSET_IDS.SERGEANT_CORRECT]: null": "[ASSET_IDS.SERGEANT_CORRECT]: './assets/characters/irasutoya_sergeant_instructor.png'",
        "[ASSET_IDS.SERGEANT_WRONG]: null": "[ASSET_IDS.SERGEANT_WRONG]: './assets/characters/irasutoya_sergeant_instructor.png'",
        "[ASSET_IDS.SERGEANT_COMPLETE]: null": "[ASSET_IDS.SERGEANT_COMPLETE]: './assets/characters/irasutoya_sergeant_instructor.png'",
        "[ASSET_IDS.TRAINEE_STAGE_0]: null": "[ASSET_IDS.TRAINEE_STAGE_0]: './assets/characters/irasutoya_trainee_skinny.png'",
        "[ASSET_IDS.TRAINEE_STAGE_1]: null": "[ASSET_IDS.TRAINEE_STAGE_1]: './assets/characters/irasutoya_trainee_skinny.png'",
        "[ASSET_IDS.TRAINEE_STAGE_2]: null": "[ASSET_IDS.TRAINEE_STAGE_2]: './assets/characters/irasutoya_trainee_muscular.png'",
        "[ASSET_IDS.TRAINEE_STAGE_3]: null": "[ASSET_IDS.TRAINEE_STAGE_3]: './assets/characters/irasutoya_trainee_muscular.png'",
        "[ASSET_IDS.TRAINEE_STAGE_4]: null": "[ASSET_IDS.TRAINEE_STAGE_4]: './assets/characters/irasutoya_trainee_muscular.png'",
        "[ASSET_IDS.TRAINEE_STAGE_5]: null": "[ASSET_IDS.TRAINEE_STAGE_5]: './assets/characters/irasutoya_trainee_bodybuilder.png'",
    }
    for before, after in replacements.items():
        if before in text:
            text = text.replace(before, after)
        elif after not in text:
            raise RuntimeError(f"unexpected web asset catalog state: missing {before}")
    WEB_CATALOG.write_text(text, encoding="utf-8")


def main():
    WEB_DIR.mkdir(parents=True, exist_ok=True)
    SWIFT_DIR.mkdir(parents=True, exist_ok=True)
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    manifest_assets = {item["resource_name"]: item for item in manifest["character_art"]["assets"]}

    for resource_name, title, page_url in ASSETS:
        selected_url, data = select_article_image(page_url, title)
        digest = hashlib.sha256(data).hexdigest()
        filename = resource_name + ".png"
        web_path = WEB_DIR / filename
        swift_path = SWIFT_DIR / filename
        web_path.write_bytes(data)
        shutil.copyfile(web_path, swift_path)
        item = manifest_assets[resource_name]
        if item["source_title"] != title or item["source_url"] != page_url:
            raise RuntimeError(f"manifest provenance mismatch for {resource_name}")
        item["bundle_status"] = "bundled"
        item["bundled_filename"] = filename
        item["sha256"] = digest
        item["resolved_image_url_at_bundle_time"] = selected_url

    manifest["character_art"]["bundled_unique_assets"] = len(ASSETS)
    manifest["character_art"]["verification"] = {
        "verified_at": "2026-08-27",
        "method": "Official Irasutoya article title/URL verified; build-time acquisition selected the largest qualifying PNG from official Blogger image hosts, then identical bytes were committed for Web and SwiftPM. Runtime hotlinking remains disabled."
    }
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    update_web_catalog()

    print("Bundled character assets:")
    for path in sorted(WEB_DIR.glob("*.png")):
        print(path.relative_to(ROOT), hashlib.sha256(path.read_bytes()).hexdigest())


if __name__ == "__main__":
    main()
