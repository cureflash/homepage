import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "subjects/social/worksheets/data"
INDEX = ROOT / "subjects/social/worksheets/index.html"
STATUS = ROOT / "docs/social-worksheet-factory/STATUS.json"

VERIFIED = [
    "history-comprehensive-massification-questions",
    "history-comprehensive-wwi-international-cooperation",
    "history-comprehensive-mass-society-participation",
    "history-comprehensive-world-depression-cooperation-crisis",
    "history-comprehensive-wwii-postwar-order",
    "history-comprehensive-massification-contemporary-issues",
]


def test_batch_05_units_are_verified_and_public():
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


def test_batch_05_advances_exactly_six_units():
    status = json.loads(STATUS.read_text(encoding="utf-8"))
    assert status["pending_factcheck_count"] == 167
    assert status["last_factchecked_batch"] == VERIFIED
    assert status["verified_through"] == VERIFIED[-1]
    assert len(status["unverified_backlog"]) == 167
    assert status["unverified_backlog"][0] == "history-comprehensive-globalization-questions"
    for slug in VERIFIED:
        assert slug not in status["unverified_backlog"]


def test_d_block_remains_unpublished():
    index = INDEX.read_text(encoding="utf-8")
    assert 'data/history-comprehensive-globalization-questions.js' not in index


def test_material_corrections_are_locked():
    q = (DATA / "history-comprehensive-massification-questions.js").read_text(encoding="utf-8")
    mass = (DATA / "history-comprehensive-mass-society-participation.js").read_text(encoding="utf-8")
    depression = (DATA / "history-comprehensive-world-depression-cooperation-crisis.js").read_text(encoding="utf-8")
    postwar = (DATA / "history-comprehensive-wwii-postwar-order.js").read_text(encoding="utf-8")
    issues = (DATA / "history-comprehensive-massification-contemporary-issues.js").read_text(encoding="utf-8")

    for phrase in ["国際関係の緊密化", "アメリカ合衆国とソヴィエト連邦の台頭", "植民地の独立", "生活様式の変化"]:
        assert phrase in q
    for phrase in ["女性の地位向上", "大正デモクラシー", "大量消費社会", "マスメディア"]:
        assert phrase in mass
    assert "ニューディール政策" in depression
    assert "ブロック経済政策" in depression
    assert "1933年3月27日" in depression
    assert "国際連合" in postwar
    assert "冷戦" in postwar
    assert "サンフランシスコ平和条約" in postwar
    assert "1952年4月28日" in postwar
    for phrase in ["自由・制限", "平等・格差", "開発・保全", "統合・分化", "対立・協調"]:
        assert phrase in issues
