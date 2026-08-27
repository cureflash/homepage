#!/usr/bin/env python3
import hashlib
import json
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

# The canonical source_url remains the Irasutoya article page. These pinned image
# URLs are the official Blogger-hosted PNGs for the exact article assets. We do
# not fetch article HTML in CI because Irasutoya rate-limits GitHub-hosted runners.
# Stage 5 bodybuilder remains intentionally unbundled until its official direct
# PNG URL is independently pinned; do not substitute a copied third-party image.
ASSETS = [
    {
        "resource_name": "irasutoya_sergeant_instructor",
        "source_title": "法務教官のイラスト（男性）",
        "source_url": "https://www.irasutoya.com/2017/09/blog-post_34.html",
        "image_url": "https://4.bp.blogspot.com/-bWokxivsF8U/WZP3jdEIcBI/AAAAAAABF_U/PRaxjIlVe8ETkbdrTix6ymro6feroK62QCLcBGAs/s450/keimusyo_job_houmukyoukan_man.png",
    },
    {
        "resource_name": "irasutoya_trainee_skinny",
        "source_title": "痩せた男性のイラスト",
        "source_url": "https://www.irasutoya.com/2016/05/blog-post_397.html",
        "image_url": "https://4.bp.blogspot.com/-bJB8o7IfTrI/VpjCsMPYMaI/AAAAAAAA3GY/QKqohLvIvmM/s800/yase03_man.png",
    },
    {
        "resource_name": "irasutoya_trainee_muscular",
        "source_title": "筋肉質な人のイラスト（男性）",
        "source_url": "https://www.irasutoya.com/2018/06/blog-post_865.html",
        "image_url": "https://2.bp.blogspot.com/-jqnzuMBq714/WwJaY08pZDI/AAAAAAABML0/MeB8mFNXN083xVJkGziPcqFIBMUaL-EnwCLcBGAs/s800/macho_man.png",
    },
]

UA = "Mozilla/5.0 PowerTOEIC asset bundler (repository build-time acquisition; no runtime hotlinking)"
ALLOWED_IMAGE_HOSTS = ("blogger.googleusercontent.com", "bp.blogspot.com")


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as response:
        return response.read()


def png_dimensions(data: bytes):
    if data[:8] != b"\x89PNG\r\n\x1a\n" or len(data) < 24:
        return None
    return struct.unpack(">II", data[16:24])


def validate_image_url(url: str):
    parsed = urllib.parse.urlparse(url)
    host = parsed.hostname or ""
    if not any(host == allowed or host.endswith("." + allowed) for allowed in ALLOWED_IMAGE_HOSTS):
        raise RuntimeError(f"unapproved image host: {host}")
    if not parsed.path.lower().endswith(".png"):
        raise RuntimeError(f"pinned asset is not PNG: {url}")


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

    for asset in ASSETS:
        validate_image_url(asset["image_url"])
        data = fetch(asset["image_url"])
        dims = png_dimensions(data)
        if not dims:
            raise RuntimeError(f"invalid PNG for {asset['resource_name']}")
        width, height = dims
        if width < 300 or height < 300:
            raise RuntimeError(f"unexpectedly small image for {asset['resource_name']}: {width}x{height}")
        digest = hashlib.sha256(data).hexdigest()
        filename = asset["resource_name"] + ".png"
        web_path = WEB_DIR / filename
        swift_path = SWIFT_DIR / filename
        web_path.write_bytes(data)
        shutil.copyfile(web_path, swift_path)

        item = manifest_assets[asset["resource_name"]]
        if item["source_title"] != asset["source_title"] or item["source_url"] != asset["source_url"]:
            raise RuntimeError(f"manifest provenance mismatch for {asset['resource_name']}")
        item["bundle_status"] = "bundled"
        item["bundled_filename"] = filename
        item["sha256"] = digest
        item["resolved_image_url_at_bundle_time"] = asset["image_url"]
        print(f"bundled {asset['source_title']}: {width}x{height} sha256={digest}")

    manifest["character_art"]["bundled_unique_assets"] = len(ASSETS)
    manifest["character_art"]["verification"] = {
        "verified_at": "2026-08-27",
        "method": "Official Irasutoya article title/URL verified externally. Exact official Blogger-hosted PNG URLs are pinned for deterministic build-time acquisition; identical bytes are committed for Web and SwiftPM. Runtime hotlinking remains disabled.",
        "remaining_unbundled": ["irasutoya_trainee_bodybuilder"]
    }
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    update_web_catalog()

    print("Bundled character assets:")
    for path in sorted(WEB_DIR.glob("*.png")):
        print(path.relative_to(ROOT), hashlib.sha256(path.read_bytes()).hexdigest())


if __name__ == "__main__":
    main()
