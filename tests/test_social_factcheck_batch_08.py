import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "subjects/social/worksheets/data"
INDEX = ROOT / "subjects/social/worksheets/index.html"
STATUS = ROOT / "docs/social-worksheet-factory/STATUS.json"

VERIFIED = [
    "japanese-history-asuka-state-formation",
    "japanese-history-ritsuryo-state",
    "japanese-history-nara-government-society",
    "japanese-history-tenpyo-culture-east-asia",
    "japanese-history-early-heian-rule",
    "japanese-history-sekkan-politics",
    "japanese-history-shoen-warrior-rise",
]


def test_batch_08_units_are_verified_and_public():
    index = INDEX.read_text(encoding="utf-8")
    for slug in VERIFIED:
        text = (DATA / f"{slug}.js").read_text(encoding="utf-8")
        assert "pending_factcheck" not in text
        assert 'factcheckStatus:"verified"' in text or 'factcheckStatus: "verified"' in text
        assert f'<script src="data/{slug}.js"></script>' in index


def test_batch_08_advances_exactly_seven_units():
    status = json.loads(STATUS.read_text(encoding="utf-8"))
    assert status["formal_course"] == "日本史探究"
    assert status["pending_factcheck_count"] == 148
    assert len(status["unverified_backlog"]) == 148
    assert status["last_factchecked_batch"] == VERIFIED
    assert status["verified_through"] == "japanese-history-shoen-warrior-rise"
    assert status["unverified_backlog"][0] == "japanese-history-medieval-transition"
    for slug in VERIFIED:
        assert slug not in status["unverified_backlog"]


def test_next_medieval_unit_remains_unpublished():
    index = INDEX.read_text(encoding="utf-8")
    assert 'data/japanese-history-medieval-transition.js' not in index


def test_batch_08_formal_placement_and_corrections_are_locked():
    texts = {slug: (DATA / f"{slug}.js").read_text(encoding="utf-8") for slug in VERIFIED}
    for text in texts.values():
        assert 'A「原始・古代の日本と東アジア」(3) 古代の国家・社会の展開と画期' in text

    assert "古代国家の形成" in texts["japanese-history-asuka-state-formation"]
    assert "大化改新" in texts["japanese-history-asuka-state-formation"]
    assert "大宝律令" in texts["japanese-history-ritsuryo-state"]
    assert "平城京" in texts["japanese-history-nara-government-society"]
    assert "戸籍" in texts["japanese-history-nara-government-society"]
    assert "班田収授" not in texts["japanese-history-nara-government-society"]
    assert "遣唐使" in texts["japanese-history-tenpyo-culture-east-asia"]
    assert "天平文化" in texts["japanese-history-tenpyo-culture-east-asia"]
    assert "平安京" in texts["japanese-history-early-heian-rule"]
    assert "地方支配の変化" in texts["japanese-history-early-heian-rule"]
    assert "摂関政治" in texts["japanese-history-sekkan-politics"]
    assert "藤原道長" in texts["japanese-history-sekkan-politics"]
    assert "地方支配の変化" in texts["japanese-history-shoen-warrior-rise"]
    assert "武士の出現" in texts["japanese-history-shoen-warrior-rise"]
    assert "荘園・公領" not in texts["japanese-history-shoen-warrior-rise"]


def test_public_order_keeps_batch_08_after_verified_ancient_block():
    index = INDEX.read_text(encoding="utf-8")
    order = [
        "japanese-history-kofun-yamato",
        *VERIFIED,
    ]
    positions = [index.index(f"data/{slug}.js") for slug in order]
    assert positions == sorted(positions)
