import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "subjects/social/worksheets/data"
INDEX = ROOT / "subjects/social/worksheets/index.html"
STATUS = ROOT / "docs/social-worksheet-factory/STATUS.json"

VERIFIED = [
    "history-comprehensive-globalization-questions",
    "history-comprehensive-cold-war-decolonization",
    "history-comprehensive-high-growth-order-change",
    "history-comprehensive-cold-war-end-regional-integration",
    "history-comprehensive-market-information-globalization",
    "history-comprehensive-contemporary-issues-outlook",
]

ALL_HISTORY_COMPREHENSIVE = [
    "history-comprehensive-history-and-us",
    "history-comprehensive-characteristics-sources",
    "history-comprehensive-modernization-questions",
    "history-comprehensive-18c-asia-economy-society",
    "history-comprehensive-industrial-revolution-world-market-opening",
    "history-comprehensive-nation-state-meiji-restoration",
    "history-comprehensive-modernization-contemporary-issues",
    "history-comprehensive-massification-questions",
    "history-comprehensive-wwi-international-cooperation",
    "history-comprehensive-mass-society-participation",
    "history-comprehensive-world-depression-cooperation-crisis",
    "history-comprehensive-wwii-postwar-order",
    "history-comprehensive-massification-contemporary-issues",
    *VERIFIED,
]


def test_batch_06_units_are_verified_and_public():
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
    assert positions[-1] < index.index('<script src="app.js"></script>')


def test_all_history_comprehensive_units_are_now_public_and_verified():
    index = INDEX.read_text(encoding="utf-8")
    assert len(ALL_HISTORY_COMPREHENSIVE) == 19
    for slug in ALL_HISTORY_COMPREHENSIVE:
        text = (DATA / f"{slug}.js").read_text(encoding="utf-8")
        assert "pending_factcheck" not in text
        assert f'<script src="data/{slug}.js"></script>' in index


def test_batch_06_advances_to_japanese_history():
    status = json.loads(STATUS.read_text(encoding="utf-8"))
    assert status["pending_factcheck_count"] == 161
    assert status["last_factchecked_batch"] == VERIFIED
    assert status["verified_through"] == VERIFIED[-1]
    assert len(status["unverified_backlog"]) == 161
    assert status["unverified_backlog"][0] == "japanese-history-paleolithic-environment"
    for slug in VERIFIED:
        assert slug not in status["unverified_backlog"]


def test_first_japanese_history_unit_remains_unpublished():
    index = INDEX.read_text(encoding="utf-8")
    assert 'data/japanese-history-paleolithic-environment.js' not in index


def test_material_d_corrections_are_locked():
    questions = (DATA / "history-comprehensive-globalization-questions.js").read_text(encoding="utf-8")
    market = (DATA / "history-comprehensive-market-information-globalization.js").read_text(encoding="utf-8")
    politics = (DATA / "history-comprehensive-cold-war-end-regional-integration.js").read_text(encoding="utf-8")
    outlook = (DATA / "history-comprehensive-contemporary-issues-outlook.js").read_text(encoding="utf-8")

    for phrase in ["冷戦と国際関係", "人と資本の移動", "高度情報通信", "感染症", "多様な人々の共存"]:
        assert phrase in questions
    for phrase in ["石油危機", "アジアの諸地域の経済発展", "市場開放", "情報通信技術"]:
        assert phrase in market
    for phrase in ["冷戦の終結", "民主化", "地域統合", "地域紛争"]:
        assert phrase in politics
    for phrase in ["持続可能な社会", "自ら主題", "歴史的経緯", "多面的・多角的"]:
        assert phrase in outlook
