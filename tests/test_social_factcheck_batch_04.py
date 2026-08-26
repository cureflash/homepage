import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "subjects/social/worksheets/data"
INDEX = ROOT / "subjects/social/worksheets/index.html"
STATUS = ROOT / "docs/social-worksheet-factory/STATUS.json"

VERIFIED = [
    "history-comprehensive-history-and-us",
    "history-comprehensive-characteristics-sources",
    "history-comprehensive-modernization-questions",
    "history-comprehensive-18c-asia-economy-society",
    "history-comprehensive-industrial-revolution-world-market-opening",
    "history-comprehensive-nation-state-meiji-restoration",
    "history-comprehensive-modernization-contemporary-issues",
]


def test_batch_04_units_are_fully_verified_and_public():
    index = INDEX.read_text(encoding="utf-8")
    positions = []
    for slug in VERIFIED:
        text = (DATA / f"{slug}.js").read_text(encoding="utf-8")
        assert 'factcheckStatus:"pending_factcheck"' not in text
        assert 'factcheckStatus: "pending_factcheck"' not in text
        assert 'factcheckStatus:"verified"' in text or 'factcheckStatus: "verified"' in text
        needle = f'<script src="data/{slug}.js"></script>'
        assert needle in index
        positions.append(index.index(needle))
    assert positions == sorted(positions)
    assert positions[-1] < index.index('<script src="app.js"></script>')


def test_batch_04_advances_exactly_seven_units():
    status = json.loads(STATUS.read_text(encoding="utf-8"))
    assert status["pending_factcheck_count"] == 173
    assert status["last_factchecked_batch"] == VERIFIED
    assert status["verified_through"] == VERIFIED[-1]
    assert len(status["unverified_backlog"]) == 173
    assert status["unverified_backlog"][0] == "history-comprehensive-massification-questions"
    for slug in VERIFIED:
        assert slug not in status["unverified_backlog"]


def test_next_pending_history_comprehensive_unit_stays_unpublished():
    index = INDEX.read_text(encoding="utf-8")
    assert 'data/history-comprehensive-massification-questions.js' not in index


def test_material_factcheck_corrections_are_locked():
    questions = (DATA / "history-comprehensive-modernization-questions.js").read_text(encoding="utf-8")
    asia = (DATA / "history-comprehensive-18c-asia-economy-society.js").read_text(encoding="utf-8")
    opening = (DATA / "history-comprehensive-industrial-revolution-world-market-opening.js").read_text(encoding="utf-8")
    nation = (DATA / "history-comprehensive-nation-state-meiji-restoration.js").read_text(encoding="utf-8")
    issues = (DATA / "history-comprehensive-modernization-contemporary-issues.js").read_text(encoding="utf-8")

    assert "交通と貿易" in questions
    assert "労働と家族" in questions
    assert "移民" in questions
    assert "移民・植民" not in questions

    assert "清では人口が大きく増加" not in asia
    assert "中国の磁器" in asia
    assert "インドの綿織物" in asia
    assert "世界市場形成の前提" not in asia

    assert "南京条約" in opening
    assert "広州・厦門・福州・寧波・上海" in opening
    assert "日米和親条約" in opening
    assert "下田・箱館" in opening

    assert "1871年" in nation and "廃藩置県" in nation
    assert "1889年" in nation and "大日本帝国憲法" in nation
    assert "1890年" in nation and "第1回帝国議会" in nation

    for phrase in ["自由・制限", "平等・格差", "開発・保全", "統合・分化", "対立・協調"]:
        assert phrase in issues
