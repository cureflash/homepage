import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "subjects/social/worksheets/data"
INDEX = ROOT / "subjects/social/worksheets/index.html"
STATUS = ROOT / "docs/social-worksheet-factory/STATUS.json"

VERIFIED_FILES = [
    "civics-elections-political-participation.js",
    "civics-local-government.js",
    "civics-market-economy-firms-labor.js",
    "civics-money-finance.js",
    "civics-public-finance-taxation.js",
    "civics-social-security.js",
    "civics-international-society-un.js",
    "civics-cumulative-review.js",
]
VERIFIED_SLUGS = [
    "elections-political-participation",
    "local-government",
    "market-economy-firms-labor",
    "money-finance",
    "public-finance-taxation",
    "social-security",
    "international-society-un",
    "civics-cumulative-review",
]


def test_remaining_junior_high_civics_units_are_verified_and_public():
    index = INDEX.read_text(encoding="utf-8")
    positions = []
    for filename in VERIFIED_FILES:
        text = (DATA / filename).read_text(encoding="utf-8")
        assert 'factcheckStatus:"pending_factcheck"' not in text
        assert 'factcheckStatus: "pending_factcheck"' not in text
        assert 'factcheckStatus:"verified"' in text or 'factcheckStatus: "verified"' in text
        needle = f'<script src="data/{filename}"></script>'
        assert needle in index
        positions.append(index.index(needle))
    assert positions == sorted(positions)
    assert positions[-1] < index.index('<script src="app.js"></script>')


def test_status_finishes_junior_high_backlog_and_starts_history_comprehensive():
    status = json.loads(STATUS.read_text(encoding="utf-8"))
    assert status["pending_factcheck_count"] == 180
    assert len(status["unverified_backlog"]) == 180
    assert status["last_factchecked_batch"] == VERIFIED_SLUGS
    assert status["verified_through"] == "civics-cumulative-review"
    assert status["unverified_backlog"][0] == "history-comprehensive-history-and-us"
    for slug in VERIFIED_SLUGS:
        assert slug not in status["unverified_backlog"]


def test_factcheck_corrections_are_preserved():
    local = (DATA / "civics-local-government.js").read_text(encoding="utf-8")
    market = (DATA / "civics-market-economy-firms-labor.js").read_text(encoding="utf-8")
    security = (DATA / "civics-social-security.js").read_text(encoding="utf-8")
    un = (DATA / "civics-international-society-un.js").read_text(encoding="utf-8")

    assert "普通地方公共団体には都道府県と市町村" in local
    assert "売り手と買い手が取引し、需要と供給などを通じて価格が形成" in market
    assert "年金・医療・介護・雇用・労災などの公的な保険制度" in security
    assert "1956年12月18日" in un
