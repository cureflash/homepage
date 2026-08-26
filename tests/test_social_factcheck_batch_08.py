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
    positions = []
    for slug in VERIFIED:
        text = (DATA / f"{slug}.js").read_text(encoding="utf-8")
        assert "pending_factcheck" not in text
        assert 'factcheckStatus:"verified"' in text or 'factcheckStatus: "verified"' in text
        needle = f'<script src="data/{slug}.js"></script>'
        assert needle in index
        positions.append(index.index(needle))
    assert positions == sorted(positions)


def test_batch_08_advances_exactly_seven_units():
    status = json.loads(STATUS.read_text(encoding="utf-8"))
    assert status["pending_factcheck_count"] == 148
    assert len(status["unverified_backlog"]) == 148
    assert status["last_factchecked_batch"] == VERIFIED
    assert status["verified_through"] == VERIFIED[-1]
    assert status["unverified_backlog"][0] == "japanese-history-medieval-transition"
    for slug in VERIFIED:
        assert slug not in status["unverified_backlog"]


def test_medieval_transition_remains_unpublished():
    index = INDEX.read_text(encoding="utf-8")
    assert 'data/japanese-history-medieval-transition.js' not in index


def test_material_corrections_are_locked():
    asuka = (DATA / "japanese-history-asuka-state-formation.js").read_text(encoding="utf-8")
    ritsuryo = (DATA / "japanese-history-ritsuryo-state.js").read_text(encoding="utf-8")
    nara = (DATA / "japanese-history-nara-government-society.js").read_text(encoding="utf-8")
    tenpyo = (DATA / "japanese-history-tenpyo-culture-east-asia.js").read_text(encoding="utf-8")
    heian = (DATA / "japanese-history-early-heian-rule.js").read_text(encoding="utf-8")
    sekkan = (DATA / "japanese-history-sekkan-politics.js").read_text(encoding="utf-8")
    shoen = (DATA / "japanese-history-shoen-warrior-rise.js").read_text(encoding="utf-8")

    assert "大化改新" not in asuka
    assert "東アジア情勢" in asuka and "律令制度" in asuka
    assert "701年" not in ritsuryo and "律令体制の成立過程" in ritsuryo
    assert "710年" not in nara and "平城京" in nara
    assert "遣唐使" in tenpyo and "天平文化" in tenpyo and "仏教文化" in tenpyo
    assert "794年" not in heian and "平安遷都前後" in heian
    assert "藤原北家" not in sekkan and "摂関政治" in sekkan
    assert "中世への移行" not in shoen
    assert "荘園" in shoen and "武士" in shoen and "律令体制の変容" in shoen
