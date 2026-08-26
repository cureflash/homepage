#!/usr/bin/env python3
import copy
import hashlib
import json
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

SOURCE_URL = "https://www.simplemaplab.com/maps/blank/world.svg"
REPO_ROOT = Path(__file__).resolve().parents[1]
COUNTRY_DATA = REPO_ROOT / "subjects/social/quiz/js/data/world-countries.js"
OUT_DIR = REPO_ROOT / "subjects/social/quiz/assets/maps/world"
MANIFEST = OUT_DIR / "manifest.json"

COUNTRY_RE = re.compile(
    r'country\("(?P<code>[A-Z]{2})",\s*"(?:[^"\\]|\\.)*",\s*(?:null|"(?:[^"\\]|\\.)*"),\s*"(?P<region>[a-z0-9-]+)"'
)

POSSIBLE_CODE_ATTRS = (
    "data-code",
    "data-iso",
    "data-iso2",
    "data-country-code",
    "data-country",
    "id",
    "class",
)


def parse_region_memberships():
    text = COUNTRY_DATA.read_text(encoding="utf-8")
    regions = {}
    for match in COUNTRY_RE.finditer(text):
        regions.setdefault(match.group("region"), []).append(match.group("code"))
    if len(regions) < 10:
        raise RuntimeError(f"Could not parse world regions from {COUNTRY_DATA}")
    return {region: sorted(set(codes)) for region, codes in regions.items()}


def normalize_code(value, known_codes):
    if not value:
        return None
    raw = value.strip()
    candidates = [raw]
    candidates.extend(re.split(r"[^A-Za-z0-9]+", raw))
    lowered = raw.lower()
    for prefix in ("country-", "country_", "iso-", "iso_", "map-"):
        if lowered.startswith(prefix):
            candidates.append(raw[len(prefix):])
    for candidate in candidates:
        code = candidate.strip().upper()
        if code in known_codes:
            return code
    return None


def element_code(element, known_codes):
    for attr in POSSIBLE_CODE_ATTRS:
        code = normalize_code(element.attrib.get(attr), known_codes)
        if code:
            return code
    return None


def annotate_codes(root, known_codes):
    found = set()
    samples = []
    for element in root.iter():
        code = element_code(element, known_codes)
        if code:
            element.set("data-code", code)
            found.add(code)
        if len(samples) < 30 and element.tag.rsplit("}", 1)[-1] in {"path", "g", "polygon"}:
            samples.append(dict(element.attrib))
    if len(found) < 150:
        print("Could not identify enough country codes in source SVG.")
        print("Detected:", len(found), sorted(found)[:50])
        print("Sample SVG attributes:")
        for sample in samples:
            print(sample)
        raise RuntimeError("SimpleMapLab SVG country identifiers were not recognized")
    return found


def filter_region(root, allowed_codes):
    allowed = set(allowed_codes)

    def visit(parent):
        for child in list(parent):
            code = child.attrib.get("data-code")
            if code and code not in allowed:
                parent.remove(child)
                continue
            visit(child)

    visit(root)
    present = {el.attrib["data-code"] for el in root.iter() if "data-code" in el.attrib}
    missing = sorted(allowed - present)
    if missing:
        raise RuntimeError(f"Region is missing country elements: {missing}")
    return present


def download_source():
    request = urllib.request.Request(
        SOURCE_URL,
        headers={"User-Agent": "cureflash-homepage-map-builder/1.0"},
    )
    with urllib.request.urlopen(request, timeout=60) as response:
        data = response.read()
    if not data.lstrip().startswith(b"<svg") and b"<svg" not in data[:500]:
        raise RuntimeError("Downloaded SimpleMapLab source is not SVG")
    return data


def main():
    memberships = parse_region_memberships()
    known_codes = set(code for codes in memberships.values() for code in codes)
    source = download_source()
    source_sha256 = hashlib.sha256(source).hexdigest()
    root = ET.fromstring(source)
    source_view_box = root.attrib.get("viewBox")
    if not source_view_box:
        raise RuntimeError("SimpleMapLab source SVG has no viewBox")

    found = annotate_codes(root, known_codes)
    missing_from_source = sorted(known_codes - found)
    if missing_from_source:
        raise RuntimeError(f"Quiz country codes missing from source SVG: {missing_from_source}")

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    generated = {}
    for region, codes in sorted(memberships.items()):
        region_root = copy.deepcopy(root)
        filter_region(region_root, codes)
        region_root.set("data-source", "SimpleMapLab / Natural Earth 1:50m")
        region_root.set("data-projection", "Mercator")
        region_root.set("data-region", region)
        payload = ET.tostring(region_root, encoding="utf-8", xml_declaration=True)
        path = OUT_DIR / f"{region}.svg"
        path.write_bytes(payload)
        generated[region] = {
            "file": path.name,
            "bytes": len(payload),
            "countries": len(codes),
            "sha256": hashlib.sha256(payload).hexdigest(),
        }

    manifest = {
        "sourceUrl": SOURCE_URL,
        "sourceSha256": source_sha256,
        "sourceLicense": "CC0 / Public Domain",
        "sourceGeometry": "Natural Earth 1:50m",
        "projection": "Mercator",
        "sourceViewBox": source_view_box,
        "regions": generated,
    }
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    total = sum(item["bytes"] for item in generated.values())
    print(f"Generated {len(generated)} local Mercator region SVGs ({total} bytes total)")
    for region, meta in generated.items():
        print(f"{region}: {meta['countries']} countries, {meta['bytes']} bytes")
    print("SimpleMapLab source SHA256:", source_sha256)


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        raise
