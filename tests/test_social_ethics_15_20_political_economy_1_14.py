import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "subjects/social/worksheets/data/ethics-15-20-political-economy-1-14.js"
INDEX = ROOT / "subjects/social/worksheets/index.html"

ETHICS = [
    "ethics-life-bioethics",
    "ethics-nature-environment",
    "ethics-science-technology",
    "ethics-welfare",
    "ethics-culture-religion-coexistence",
    "ethics-peace",
]

POLITICAL_ECONOMY = [
    "political-economy-politics-law",
    "political-economy-rights-rule-of-law",
    "political-economy-rights-obligations-private-law",
    "political-economy-parliamentary-democracy",
    "political-economy-elections-parties-participation",
    "political-economy-local-autonomy",
    "political-economy-market-economic-activity",
    "political-economy-economic-actors-circular-flow",
    "political-economy-gdp-economic-growth",
    "political-economy-prices-business-cycle",
    "political-economy-fiscal-tax",
    "political-economy-finance-system",
    "political-economy-market-failure-environment-consumer",
    "political-economy-domestic-issues-inquiry",
]


def _specs():
    text = DATA.read_text(encoding="utf-8")
    match = re.search(r"const specs = (\[.*\]);\n\n  const units", text, re.S)
    assert match, "batch specs JSON not found"
    return json.loads(match.group(1)), text


def test_batch_contains_exactly_20_ordered_pending_units():
    specs, text = _specs()
    assert len(specs) == 20
    assert [item["n"] for item in specs[:6]] == list(range(15, 21))
    assert [item["n"] for item in specs[6:]] == list(range(1, 15))
    assert [item["slug"] for item in specs[:6]] == ETHICS
    assert [item["slug"] for item in specs[6:]] == POLITICAL_ECONOMY
    assert all(item["course"] == "倫理" for item in specs[:6])
    assert all(item["course"] == "政治・経済" for item in specs[6:])
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
    for slug in ETHICS + POLITICAL_ECONOMY:
        assert slug not in index
