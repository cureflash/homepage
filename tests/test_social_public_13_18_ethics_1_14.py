import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "subjects/social/worksheets/data/public-13-18-ethics-1-14.js"
INDEX = ROOT / "subjects/social/worksheets/index.html"

PUBLIC = ['public-public-finance-taxation', 'public-social-security', 'public-market-economy-function-limits', 'public-finance-money', 'public-economic-globalization-interdependence', 'public-sustainable-society-inquiry']
ETHICS = ['ethics-mind-individuality-emotion', 'ethics-cognition-development', 'ethics-happiness-love', 'ethics-virtue-good-life', 'ethics-religion-meaning', 'ethics-art-meaning', 'ethics-good-justice', 'ethics-duty-responsibility', 'ethics-truth-knowledge', 'ethics-existence-world', 'ethics-reading-primary-thought-sources', 'ethics-japan-climate-human-view', 'ethics-japan-religion-foreign-thought', 'ethics-japanese-identity-global-society']

def _specs():
    text = DATA.read_text(encoding="utf-8")
    match = re.search(r"const specs = (\[.*\]);\n  const units", text, re.S)
    assert match, "batch specs JSON not found"
    return json.loads(match.group(1)), text

def test_batch_contains_exactly_20_ordered_pending_units():
    specs, text = _specs()
    assert len(specs) == 20
    assert [item["n"] for item in specs[:6]] == list(range(13, 19))
    assert [item["n"] for item in specs[6:]] == list(range(1, 15))
    assert [item["slug"] for item in specs[:6]] == PUBLIC
    assert [item["slug"] for item in specs[6:]] == ETHICS
    assert all(item["course"] == "公共" for item in specs[:6])
    assert all(item["course"] == "倫理" for item in specs[6:])
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
    for slug in PUBLIC + ETHICS:
        assert slug not in index
