import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "subjects/social/worksheets/data/world-history-31-38-public-1-12.js"
INDEX = ROOT / "subjects/social/worksheets/index.html"

WORLD = ['world-history-wwii-regional-transformation', 'world-history-international-organizations-peace', 'world-history-cold-war-decolonization', 'world-history-high-growth-north-south', 'world-history-cold-war-end-regional-integration', 'world-history-globalization-inequality', 'world-history-science-technology-knowledge-society', 'world-history-global-issues-inquiry']
PUBLIC = ['public-public-space-and-us', 'public-dignity-autonomy-diversity', 'public-happiness-justice-fairness', 'public-basic-principles', 'public-law-norms', 'public-contracts-consumer-rights', 'public-judicial-participation', 'public-political-participation-public-opinion', 'public-local-government', 'public-sovereignty-territory', 'public-security-defense-international-contribution', 'public-career-employment-labor']

def _specs():
    text = DATA.read_text(encoding="utf-8")
    match = re.search(r"const specs = (\[.*\]);\n  const units", text, re.S)
    assert match, "batch specs JSON not found"
    return json.loads(match.group(1)), text

def test_batch_contains_exactly_20_ordered_pending_units():
    specs, text = _specs()
    assert len(specs) == 20
    assert [item["n"] for item in specs[:8]] == list(range(31, 39))
    assert [item["n"] for item in specs[8:]] == list(range(1, 13))
    assert [item["slug"] for item in specs[:8]] == WORLD
    assert [item["slug"] for item in specs[8:]] == PUBLIC
    assert all(item["course"] == "世界史探究" for item in specs[:8])
    assert all(item["course"] == "公共" for item in specs[8:])
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
    for slug in WORLD + PUBLIC:
        assert slug not in index
