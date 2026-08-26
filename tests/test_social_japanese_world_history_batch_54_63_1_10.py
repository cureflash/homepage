import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "subjects/social/worksheets/data/japanese-history-modern-54-63-world-history-1-10.js"
INDEX = ROOT / "subjects/social/worksheets/index.html"

JAPANESE = [
    "japanese-history-taisho-democracy-mass-society",
    "japanese-history-depression-party-politics-crisis",
    "japanese-history-manchurian-incident-sino-japanese-war",
    "japanese-history-asia-pacific-war-wartime-society",
    "japanese-history-defeat-occupation-postwar-reforms",
    "japanese-history-cold-war-peace-international-return",
    "japanese-history-high-growth-social-change",
    "japanese-history-post-1970s-economy-politics-society",
    "japanese-history-cold-war-end-globalization",
    "japanese-history-contemporary-issues-inquiry",
]

WORLD = [
    "world-history-earth-environment-human-history",
    "world-history-daily-life-global-connections",
    "world-history-regional-characteristics-questions",
    "world-history-agriculture-pastoralism-civilizations",
    "world-history-orient-civilizations",
    "world-history-indus-civilization",
    "world-history-chinese-civilization",
    "world-history-east-asia-central-eurasia",
    "world-history-south-southeast-asia-characteristics",
    "world-history-west-asia-mediterranean-characteristics",
]


def _specs():
    text = DATA.read_text(encoding="utf-8")
    match = re.search(r"const specs = (\[.*\]);\n  const units", text, re.S)
    assert match, "batch specs JSON not found"
    return json.loads(match.group(1)), text


def test_batch_contains_exactly_20_ordered_pending_units():
    specs, text = _specs()
    assert len(specs) == 20
    assert [item["n"] for item in specs[:10]] == list(range(54, 64))
    assert [item["slug"] for item in specs[:10]] == JAPANESE
    assert all(item["course"] == "日本史探究" for item in specs[:10])
    assert [item["n"] for item in specs[10:]] == list(range(1, 11))
    assert [item["slug"] for item in specs[10:]] == WORLD
    assert all(item["course"] == "世界史探究" for item in specs[10:])
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
    for slug in JAPANESE + WORLD:
        assert slug not in index
