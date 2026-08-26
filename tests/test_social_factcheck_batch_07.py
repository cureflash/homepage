import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "subjects/social/worksheets/data"
INDEX = ROOT / "subjects/social/worksheets/index.html"
STATUS = ROOT / "docs/social-worksheet-factory/STATUS.json"

VERIFIED = [
    "japanese-history-paleolithic-environment",
    "japanese-history-jomon-society",
    "japanese-history-yayoi-agriculture",
    "japanese-history-yayoi-polities-exchange",
    "japanese-history-kofun-yamato",
    "japanese-history-ancient-sources-outlook",
]


def test_batch_07_units_are_verified_and_public():
    index = INDEX.read_text(encoding="utf-8")
    for slug in VERIFIED:
        text = (DATA / f"{slug}.js").read_text(encoding="utf-8")
        assert "pending_factcheck" not in text
        assert 'factcheckStatus:"verified"' in text or 'factcheckStatus: "verified"' in text
        assert f'<script src="data/{slug}.js"></script>' in index


def test_batch_07_advances_exactly_six_units():
    status = json.loads(STATUS.read_text(encoding="utf-8"))
    assert status["formal_course"] == "日本史探究"
    assert status["pending_factcheck_count"] == 155
    assert len(status["unverified_backlog"]) == 155
    assert status["last_factchecked_batch"] == VERIFIED
    assert status["verified_through"] == "japanese-history-ancient-sources-outlook"
    assert status["unverified_backlog"][0] == "japanese-history-asuka-state-formation"
    for slug in VERIFIED:
        assert slug not in status["unverified_backlog"]


def test_next_asuka_unit_remains_unpublished():
    index = INDEX.read_text(encoding="utf-8")
    assert 'data/japanese-history-asuka-state-formation.js' not in index


def test_formal_placement_corrections_are_locked():
    paleolithic = (DATA / "japanese-history-paleolithic-environment.js").read_text(encoding="utf-8")
    yayoi = (DATA / "japanese-history-yayoi-agriculture.js").read_text(encoding="utf-8")
    polities = (DATA / "japanese-history-yayoi-polities-exchange.js").read_text(encoding="utf-8")
    kofun = (DATA / "japanese-history-kofun-yamato.js").read_text(encoding="utf-8")
    source_outlook = (DATA / "japanese-history-ancient-sources-outlook.js").read_text(encoding="utf-8")

    assert 'A「原始・古代の日本と東アジア」(1) 黎明期の日本列島と歴史的環境' in paleolithic
    assert 'A「原始・古代の日本と東アジア」(1) 黎明期の日本列島と歴史的環境' in yayoi
    assert 'A「原始・古代の日本と東アジア」(2) 歴史資料と原始・古代の展望' in polities
    assert 'A「原始・古代の日本と東アジア」(2) 歴史資料と原始・古代の展望' in source_outlook
    assert 'A「原始・古代の日本と東アジア」(3) 古代の国家・社会の展開と画期' in kofun
    assert "卑弥呼" not in polities
    assert "歴史書" in polities and "考古学の成果" in polities
    assert "広域の政治的連合" in kofun


def test_public_order_follows_curriculum_structure():
    index = INDEX.read_text(encoding="utf-8")
    order = [
        "japanese-history-paleolithic-environment",
        "japanese-history-jomon-society",
        "japanese-history-yayoi-agriculture",
        "japanese-history-ancient-sources-outlook",
        "japanese-history-yayoi-polities-exchange",
        "japanese-history-kofun-yamato",
    ]
    positions = [index.index(f'data/{slug}.js') for slug in order]
    assert positions == sorted(positions)
