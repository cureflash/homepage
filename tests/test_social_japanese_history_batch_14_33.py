import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "subjects/social/worksheets/data/japanese-history-medieval-earlymodern-14-33.js"
INDEX = ROOT / "subjects/social/worksheets/index.html"

EXPECTED = [
    "japanese-history-medieval-transition",
    "japanese-history-landholding-transition",
    "japanese-history-medieval-sources-outlook",
    "japanese-history-kamakura-shogunate",
    "japanese-history-gokenin-landholding",
    "japanese-history-song-exchange-medieval-economy",
    "japanese-history-mongol-invasions-kamakura-change",
    "japanese-history-kamakura-new-buddhism-culture",
    "japanese-history-kenmu-nanbokucho",
    "japanese-history-muromachi-shogunate-shugo",
    "japanese-history-ming-trade-east-asia",
    "japanese-history-ryukyu-kingdom-exchange",
    "japanese-history-agriculture-commerce-distribution",
    "japanese-history-village-city-autonomy",
    "japanese-history-onin-war-sengoku-daimyo",
    "japanese-history-muromachi-regional-culture",
    "japanese-history-sengoku-unification-transition",
    "japanese-history-european-arrival-global-links",
    "japanese-history-early-modern-sources-outlook",
    "japanese-history-shokuho-unification",
]


def _specs():
    text = DATA.read_text(encoding="utf-8")
    match = re.search(r"const specs = (\[.*\]);\n  const units", text)
    assert match, "batch specs JSON not found"
    return json.loads(match.group(1)), text


def test_batch_contains_exactly_20_sequential_pending_units():
    specs, text = _specs()
    assert [item["n"] for item in specs] == list(range(14, 34))
    assert [item["slug"] for item in specs] == EXPECTED
    assert 'formalCourse: "日本史探究"' in text
    assert 'factcheckStatus: "pending_factcheck"' in text
    assert 'window.SOCIAL_WORKSHEET_UNITS.push(...units)' in text


def test_every_cloze_term_is_explicitly_present_in_its_template():
    specs, _ = _specs()
    for spec in specs:
        assert len(spec["items"]) >= 2
        for item in spec["items"]:
            assert item["term"]
            assert "{{" + item["term"] + "}}" in item["template"]
            assert item["claim"]


def test_pending_batch_is_not_in_public_selector():
    index = INDEX.read_text(encoding="utf-8")
    assert DATA.name not in index
    for slug in EXPECTED:
        assert slug not in index
