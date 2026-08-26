#!/usr/bin/env python3
import hashlib
import io
import json
import math
import re
import sys
import urllib.request
import zipfile
from pathlib import Path

import shapefile

SOURCE_VERSION = "5.1.1"
SOURCE_URLS = (
    f"https://naturalearth.s3.amazonaws.com/{SOURCE_VERSION}/50m_cultural/ne_50m_admin_0_countries.zip",
    "https://www.naturalearthdata.com/download/50m/cultural/ne_50m_admin_0_countries.zip",
)
SOURCE_PAGE = "https://www.naturalearthdata.com/downloads/50m-cultural-vectors/50m-admin-0-countries-2/"
TERMS_URL = "https://www.naturalearthdata.com/about/terms-of-use/"
WORLD_SIZE = 2000.0
MAX_MERCATOR_LAT = 85.05112878
REPO_ROOT = Path(__file__).resolve().parents[1]
COUNTRY_DATA = REPO_ROOT / "subjects/social/quiz/js/data/world-countries.js"
OUT_DIR = REPO_ROOT / "subjects/social/quiz/assets/maps/world"
MANIFEST = OUT_DIR / "manifest.json"

REGION_GROUPS = {
    "asia": ("east-asia", "southeast-asia", "south-asia", "west-central-asia"),
    "europe": ("north-west-europe", "central-south-europe", "east-europe"),
    "africa": ("north-africa", "west-central-africa", "east-south-africa"),
    "north-america": ("north-central-america", "caribbean"),
    "south-america": ("south-america",),
    "oceania": ("oceania-west", "pacific-islands"),
}

COUNTRY_RE = re.compile(
    r'country\("(?P<code>[A-Z]{2})",\s*"(?:[^"\\]|\\.)*",\s*(?:null|"(?:[^"\\]|\\.)*"),\s*"(?P<region>[a-z0-9-]+)"'
)
MARKER_RE = re.compile(r"marker:\s*\[\s*(?P<lon>-?\d+(?:\.\d+)?)\s*,\s*(?P<lat>-?\d+(?:\.\d+)?)\s*\]")

ADM0_A3_TO_QUIZ_CODE = {
    "KOS": "XK",
}


def parse_quiz_geography():
    text = COUNTRY_DATA.read_text(encoding="utf-8")
    detailed = {}
    markers = {}
    for line in text.splitlines():
        match = COUNTRY_RE.search(line)
        if not match:
            continue
        code = match.group("code")
        region = match.group("region")
        detailed.setdefault(region, []).append(code)
        marker_match = MARKER_RE.search(line)
        if marker_match:
            markers[code] = (float(marker_match.group("lon")), float(marker_match.group("lat")))

    expected_subregions = {item for group in REGION_GROUPS.values() for item in group}
    missing_subregions = sorted(expected_subregions - set(detailed))
    if missing_subregions:
        raise RuntimeError(f"Country data is missing expected subregions: {missing_subregions}")

    regions = {}
    for region, subregions in REGION_GROUPS.items():
        codes = []
        for subregion in subregions:
            codes.extend(detailed[subregion])
        regions[region] = sorted(set(codes))
    return regions, markers


def download_source():
    last_error = None
    for url in SOURCE_URLS:
        try:
            request = urllib.request.Request(url, headers={"User-Agent": "cureflash-homepage-map-builder/3.0"})
            with urllib.request.urlopen(request, timeout=60) as response:
                data = response.read()
            if not zipfile.is_zipfile(io.BytesIO(data)):
                raise RuntimeError(f"Natural Earth response is not a ZIP archive: {url}")
            return url, data
        except Exception as exc:
            last_error = exc
            print(f"Source download failed, trying next URL: {url}: {exc}", file=sys.stderr)
    raise RuntimeError("Could not download Natural Earth 1:50m countries") from last_error


def extract_shapefile(zip_bytes):
    with zipfile.ZipFile(io.BytesIO(zip_bytes)) as archive:
        names = archive.namelist()
        base = next((name[:-4] for name in names if name.endswith("ne_50m_admin_0_countries.shp")), None)
        if base is None:
            raise RuntimeError("Natural Earth ZIP does not contain expected countries shapefile")
        return (
            io.BytesIO(archive.read(base + ".shp")),
            io.BytesIO(archive.read(base + ".shx")),
            io.BytesIO(archive.read(base + ".dbf")),
        )


def mercator_xy(longitude, latitude, wrap_dateline=False):
    lon = float(longitude)
    lat = max(-MAX_MERCATOR_LAT, min(MAX_MERCATOR_LAT, float(latitude)))
    if wrap_dateline and lon < 0:
        lon += 360.0
    x = ((lon + 180.0) / 360.0) * WORLD_SIZE
    radians = math.radians(lat)
    y = (1.0 - math.asinh(math.tan(radians)) / math.pi) * 0.5 * WORLD_SIZE
    return x, y


def normalize_code(value, known_codes):
    if value is None:
        return None
    code = str(value).strip().upper()
    if code in known_codes:
        return code
    return None


def record_code(record, known_codes):
    data = record.as_dict()
    for field in ("ISO_A2_EH", "ISO_A2", "WB_A2", "POSTAL"):
        code = normalize_code(data.get(field), known_codes)
        if code:
            return code
    mapped = ADM0_A3_TO_QUIZ_CODE.get(str(data.get("ADM0_A3", "")).upper())
    if mapped in known_codes:
        return mapped
    return None


def projected_part(points, wrap_dateline=False):
    projected = [mercator_xy(lon, lat, wrap_dateline) for lon, lat in points]
    if not projected:
        return "", []
    commands = [f"M{projected[0][0]:.1f},{projected[0][1]:.1f}"]
    commands.extend(f"L{x:.1f},{y:.1f}" for x, y in projected[1:])
    commands.append("Z")
    return "".join(commands), projected


def shape_path(shape, wrap_dateline=False):
    parts = list(shape.parts) + [len(shape.points)]
    commands = []
    all_points = []
    for start, end in zip(parts, parts[1:]):
        command, projected = projected_part(shape.points[start:end], wrap_dateline)
        if command:
            commands.append(command)
            all_points.extend(projected)
    return "".join(commands), all_points


def svg_view_box(points):
    if not points:
        raise RuntimeError("Cannot create regional SVG without any geometry")
    xs = [point[0] for point in points]
    ys = [point[1] for point in points]
    width = max(xs) - min(xs)
    height = max(ys) - min(ys)
    pad_x = max(8.0, width * 0.035)
    pad_y = max(8.0, height * 0.05)
    return (
        min(xs) - pad_x,
        min(ys) - pad_y,
        max(1.0, width + 2 * pad_x),
        max(1.0, height + 2 * pad_y),
    )


def xml_escape(value):
    return str(value).replace("&", "&amp;").replace('"', "&quot;").replace("<", "&lt;").replace(">", "&gt;")


def build_region_svg(region, codes, feature_paths, feature_points, markers):
    wrap_dateline = region == "oceania"
    points = []
    path_elements = []

    for code in codes:
        for path_d in feature_paths.get((code, wrap_dateline), []):
            path_elements.append(
                f'<path data-code="{code}" class="world-country" d="{path_d}" fill-rule="evenodd"/>'
            )
        points.extend(feature_points.get((code, wrap_dateline), []))

    marker_elements = []
    for code in codes:
        if code not in markers:
            continue
        x, y = mercator_xy(*markers[code], wrap_dateline=wrap_dateline)
        points.append((x, y))
        marker_elements.append(
            f'<circle data-code="{code}" class="world-country world-country-marker" cx="{x:.1f}" cy="{y:.1f}" r="6"/>'
        )

    missing_without_marker = [code for code in codes if not feature_paths.get((code, wrap_dateline)) and code not in markers]
    if missing_without_marker:
        raise RuntimeError(f"{region}: countries missing both Natural Earth geometry and marker: {missing_without_marker}")

    x, y, width, height = svg_view_box(points)
    body = "".join(path_elements + marker_elements)
    return (
        '<?xml version="1.0" encoding="UTF-8"?>'
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x:.1f} {y:.1f} {width:.1f} {height:.1f}" '
        f'data-region="{xml_escape(region)}" data-projection="Web Mercator" '
        'data-source="Natural Earth 1:50m admin-0 countries">'
        f"{body}</svg>"
    ).encode("utf-8"), missing_without_marker


def main():
    memberships, markers = parse_quiz_geography()
    known_codes = {code for codes in memberships.values() for code in codes}
    source_url, source_zip = download_source()
    source_sha256 = hashlib.sha256(source_zip).hexdigest()
    shp, shx, dbf = extract_shapefile(source_zip)
    reader = shapefile.Reader(shp=shp, shx=shx, dbf=dbf, encoding="utf-8")

    source_shapes = {}
    unmatched_source_names = []
    for shape_record in reader.iterShapeRecords():
        code = record_code(shape_record.record, known_codes)
        if not code:
            if len(unmatched_source_names) < 20:
                data = shape_record.record.as_dict()
                unmatched_source_names.append((data.get("NAME_EN"), data.get("ISO_A2"), data.get("ADM0_A3")))
            continue
        source_shapes.setdefault(code, []).append(shape_record.shape)

    feature_paths = {}
    feature_points = {}
    for code, shapes in source_shapes.items():
        for wrap in (False, True):
            paths = []
            points = []
            for shape in shapes:
                path_d, projected = shape_path(shape, wrap_dateline=wrap)
                if path_d:
                    paths.append(path_d)
                    points.extend(projected)
            feature_paths[(code, wrap)] = paths
            feature_points[(code, wrap)] = points

    found_codes = set(source_shapes)
    missing = sorted(known_codes - found_codes)
    tolerated = sorted(code for code in missing if code in markers)
    fatal = sorted(code for code in missing if code not in markers)
    if fatal:
        print("Natural Earth records not matched (sample):", unmatched_source_names, file=sys.stderr)
        raise RuntimeError(f"Quiz country codes not found in Natural Earth and lacking marker fallback: {fatal}")

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for old in OUT_DIR.glob("*.svg"):
        old.unlink()

    generated = {}
    for region, codes in REGION_GROUPS.items():
        payload, _ = build_region_svg(region, memberships[region], feature_paths, feature_points, markers)
        path = OUT_DIR / f"{region}.svg"
        path.write_bytes(payload)
        generated[region] = {
            "file": path.name,
            "bytes": len(payload),
            "countries": len(memberships[region]),
            "sha256": hashlib.sha256(payload).hexdigest(),
        }

    manifest = {
        "source": "Natural Earth 1:50m Admin 0 – Countries",
        "sourceVersion": SOURCE_VERSION,
        "sourcePage": SOURCE_PAGE,
        "downloadUrl": source_url,
        "sourceZipSha256": source_sha256,
        "termsUrl": TERMS_URL,
        "license": "Public Domain",
        "projection": "Web Mercator",
        "worldCoordinateSize": WORLD_SIZE,
        "markerFallbackCodes": tolerated,
        "regionModel": "six-major-regions",
        "regions": generated,
    }
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    total = sum(item["bytes"] for item in generated.values())
    largest = sorted(generated.items(), key=lambda item: item[1]["bytes"], reverse=True)[:6]
    print(f"Generated {len(generated)} local Web Mercator major-region SVGs ({total} bytes total)")
    print("Region files:", [(region, meta["bytes"]) for region, meta in largest])
    print("Marker-only source fallbacks:", tolerated)
    print("Natural Earth ZIP SHA256:", source_sha256)


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        raise
