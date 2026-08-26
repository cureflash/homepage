import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "subjects/social/worksheets/data/political-economy-15-22.js"
INDEX = ROOT / "subjects/social/worksheets/index.html"

POLITICAL_ECONOMY = [
    "political-economy-international-society-law",
    "political-economy-human-rights-sovereignty-territory",
    "political-economy-un-international-organizations",
    "political-economy-security-defense-contribution",
    "political-economy-trade",
    "political-economy-exchange-balance-payments",
    "political-economy-international-cooperation-economic-institutions",
    "political-economy-global-issues-inquiry",
]


def _specs():
    text = DATA.read_text(encoding="utf-8")
    match = re.search(r"const specs = (\[.*\]);\n\n  const units", text, re.S)
    assert match, "batch specs JSON not found"
    return json.loads(match.group(1)), text


def test_batch_contains_final_eight_ordered_pending_units():
    specs, text = _specs()
    assert len(specs) == 8
    assert [item["n"] for item in specs] == list(range(15, 23))
    assert [item["slug"] for item in specs] == POLITICAL_ECONOMY
    assert all(item["course"] == "政治・経済" for item in specs)
    assert 'factcheckStatus: "pending_factcheck"' in text
    assert 'window.SOCIAL_WORKSHEET_UNITS.push(...units)' in text


def test_every_cloze_term_is_explicitly_present_in_its_template():
    specs, _ = _specs()
    for spec in specs:
        assert len(spec["items"]) >= 2
        assert spec["keyPoint"]
        for item in spec["items"]:
            assert item["term"]
            assert "{{" + item["term"] + "}}" in item["template"]
            assert item["claim"]


def test_pending_batch_is_not_in_public_selector():
    index = INDEX.read_text(encoding="utf-8")
    assert DATA.name not in index
    for slug in POLITICAL_ECONOMY:
        assert slug not in index
