import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "subjects/social/worksheets/data"
INDEX = ROOT / "subjects/social/worksheets/index.html"
STATUS = ROOT / "docs/social-worksheet-factory/STATUS.json"

VERIFIED_FILES = [
    "imperialism-sino-japanese-russo-japanese-wars.js",
    "taisho-democracy-interwar-japan.js",
    "asia-pacific-war.js",
    "postwar-japan.js",
    "contemporary-japan-cumulative-review.js",
]
VERIFIED_SLUGS = [name.removesuffix(".js") for name in VERIFIED_FILES]


def test_first_five_pending_units_are_fully_verified_and_published():
    index = INDEX.read_text(encoding="utf-8")
    positions = []
    for filename in VERIFIED_FILES:
        text = (DATA / filename).read_text(encoding="utf-8")
        assert 'factcheckStatus: "pending_factcheck"' not in text
        assert 'factcheckStatus: "verified"' in text
        needle = f'<script src="data/{filename}"></script>'
        assert needle in index
        positions.append(index.index(needle))
    assert positions == sorted(positions)
    assert positions[-1] < index.index('<script src="app.js"></script>')


def test_factcheck_status_advances_exactly_five_units():
    status = json.loads(STATUS.read_text(encoding="utf-8"))
    assert status["pending_factcheck_count"] == 194
    assert status["last_completed_role"] == "factcheck"
    assert status["verified_through"] == "contemporary-japan-cumulative-review"
    assert status["last_factchecked_batch"] == VERIFIED_SLUGS
    assert len(status["unverified_backlog"]) == 194
    assert status["unverified_backlog"][0] == "constitution-constitutionalism"
    for slug in VERIFIED_SLUGS:
        assert slug not in status["unverified_backlog"]


def test_ambiguous_generation_stage_images_are_not_published():
    taisho = (DATA / "taisho-democracy-interwar-japan.js").read_text(encoding="utf-8")
    war = (DATA / "asia-pacific-war.js").read_text(encoding="utf-8")
    assert "Picture_of_Takashi_Hara.jpg" not in taisho
    assert "Instrument_of_surrender_Japan.jpg" not in war


def test_retained_images_have_verified_reuse_status():
    imperialism = (DATA / "imperialism-sino-japanese-russo-japanese-wars.js").read_text(encoding="utf-8")
    postwar = (DATA / "postwar-japan.js").read_text(encoding="utf-8")
    assert "PD-Japan-exempt" in imperialism
    assert "PD-Japan / PD-1996" in imperialism
    assert "CC BY-SA 4.0" in postwar
    assert 'factcheckStatus: "verified"' in imperialism
    assert 'factcheckStatus: "verified"' in postwar
