import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "subjects/social/worksheets/data/japanese-history-earlymodern-modern-34-53.js"
INDEX = ROOT / "subjects/social/worksheets/index.html"

EXPECTED = [
    "japanese-history-land-survey-sword-hunt",
    "japanese-history-edo-shogunate-bakuhan",
    "japanese-history-daimyo-court-temples",
    "japanese-history-foreign-relations-four-gates",
    "japanese-history-status-village-town-society",
    "japanese-history-agriculture-goods-transport",
    "japanese-history-genroku-culture",
    "japanese-history-shogunate-finance-kyoho",
    "japanese-history-tanuma-kansei-reforms",
    "japanese-history-kasei-culture-education-learning",
    "japanese-history-social-change-tenpo-reforms",
    "japanese-history-russia-western-ships-coastal-defense",
    "japanese-history-opening-bakumatsu-transition",
    "japanese-history-meiji-restoration-new-government",
    "japanese-history-modern-state-freedom-rights",
    "japanese-history-meiji-constitution-diet",
    "japanese-history-treaty-revision-sino-japanese-war",
    "japanese-history-russo-japanese-war-imperialism",
    "japanese-history-modern-industry-society-culture",
    "japanese-history-world-war-one",
]


def _specs():
    text = DATA.read_text(encoding="utf-8")
    match = re.search(r"const specs = (\[.*\]);\n  const units", text)
    assert match, "batch specs JSON not found"
    return json.loads(match.group(1)), text


def test_batch_contains_exactly_20_sequential_pending_units():
    specs, text = _specs()
    assert [item["n"] for item in specs] == list(range(34, 54))
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
