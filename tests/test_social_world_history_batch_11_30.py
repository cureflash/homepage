import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "subjects/social/worksheets/data/world-history-11-30.js"
INDEX = ROOT / "subjects/social/worksheets/index.html"

WORLD = [
    "world-history-exchange-reorganization-questions",
    "world-history-islamic-expansion-trade",
    "world-history-mongol-empire-eurasian-exchange",
    "world-history-maritime-asia-trade-networks",
    "world-history-ming-qing-east-asia-reorganization",
    "world-history-ottoman-safavid-mughal-empires",
    "world-history-renaissance-reformation",
    "world-history-age-of-exploration-atlantic-world",
    "world-history-sovereign-state-system-international-relations",
    "world-history-integration-transformation-questions",
    "world-history-industrial-revolution-world-market",
    "world-history-american-french-revolutions",
    "world-history-nation-states-19c-europe",
    "world-history-latin-american-independence",
    "world-history-asia-western-expansion",
    "world-history-imperialism-world-partition",
    "world-history-asian-african-national-movements",
    "world-history-wwi-total-war",
    "world-history-russian-revolution-interwar-order",
    "world-history-depression-fascism",
]


def _specs():
    text = DATA.read_text(encoding="utf-8")
    match = re.search(r"const specs = (\[.*\]);\n  const units", text, re.S)
    assert match, "batch specs JSON not found"
    return json.loads(match.group(1)), text


def test_batch_contains_exactly_20_ordered_pending_units():
    specs, text = _specs()
    assert len(specs) == 20
    assert [item["n"] for item in specs] == list(range(11, 31))
    assert [item["slug"] for item in specs] == WORLD
    assert all(item["course"] == "世界史探究" for item in specs)
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
    for slug in WORLD:
        assert slug not in index
