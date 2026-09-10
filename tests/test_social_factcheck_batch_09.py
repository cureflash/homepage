import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "subjects/social/worksheets/data"
INDEX = ROOT / "subjects/social/worksheets/index.html"
STATUS = ROOT / "docs/social-worksheet-factory/STATUS.json"

VERIFIED = [
    "japanese-history-medieval-transition",
    "japanese-history-landholding-transition",
    "japanese-history-medieval-sources-outlook",
]


def test_batch_09_units_are_verified_and_public():
    index = INDEX.read_text(encoding="utf-8")
    for slug in VERIFIED:
        text = (DATA / f"{slug}.js").read_text(encoding="utf-8")
        assert "pending_factcheck" not in text
        assert 'factcheckStatus:"verified"' in text or 'factcheckStatus: "verified"' in text
        assert f'<script src="data/{slug}.js"></script>' in index


def test_batch_09_advances_exactly_three_units():
    status = json.loads(STATUS.read_text(encoding="utf-8"))
    assert status["formal_course"] == "日本史探究"
    assert status["pending_factcheck_count"] == 145
    assert len(status["unverified_backlog"]) == 145
    assert status["last_factchecked_batch"] == VERIFIED
    assert status["verified_through"] == "japanese-history-medieval-sources-outlook"
    assert status["unverified_backlog"][0] == "japanese-history-kamakura-shogunate"
    for slug in VERIFIED:
        assert slug not in status["unverified_backlog"]


def test_batch_09_formal_placement_and_corrections_are_locked():
    texts = {slug: (DATA / f"{slug}.js").read_text(encoding="utf-8") for slug in VERIFIED}
    assert 'B「中世の日本と世界」(1) 中世への転換と歴史的環境' in texts["japanese-history-medieval-transition"]
    assert 'B「中世の日本と世界」(1) 中世への転換と歴史的環境' in texts["japanese-history-landholding-transition"]
    assert 'B「中世の日本と世界」(2) 歴史資料と中世の展望' in texts["japanese-history-medieval-sources-outlook"]

    assert "貴族政治の変容" in texts["japanese-history-medieval-transition"]
    assert "権力の主体の変化" in texts["japanese-history-medieval-transition"]
    assert "土地支配の変容" in texts["japanese-history-landholding-transition"]
    assert "武士の土地所有" in texts["japanese-history-landholding-transition"]
    assert "荘園・公領を基盤" not in texts["japanese-history-landholding-transition"]
    assert "資料の特性" in texts["japanese-history-medieval-sources-outlook"]
    assert "仮説" in texts["japanese-history-medieval-sources-outlook"]


def test_public_order_keeps_batch_09_after_verified_ancient_block():
    index = INDEX.read_text(encoding="utf-8")
    order = [
        "japanese-history-shoen-warrior-rise",
        *VERIFIED,
    ]
    positions = [index.index(f"data/{slug}.js") for slug in order]
    assert positions == sorted(positions)
