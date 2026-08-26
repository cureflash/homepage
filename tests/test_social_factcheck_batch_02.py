import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "subjects/social/worksheets/data"
INDEX = ROOT / "subjects/social/worksheets/index.html"
STATUS = ROOT / "docs/social-worksheet-factory/STATUS.json"

VERIFIED_FILES = [
    "civics-constitution-constitutionalism.js",
    "civics-fundamental-human-rights.js",
    "civics-diet.js",
    "civics-cabinet.js",
    "civics-courts.js",
    "civics-separation-of-powers.js",
]
VERIFIED_SLUGS = [
    "constitution-constitutionalism",
    "fundamental-human-rights",
    "diet",
    "cabinet",
    "courts",
    "separation-of-powers",
]


def test_second_factcheck_batch_is_fully_verified_and_published_in_order():
    index = INDEX.read_text(encoding="utf-8")
    positions = []
    for filename in VERIFIED_FILES:
        text = (DATA / filename).read_text(encoding="utf-8")
        assert 'factcheckStatus: "pending_factcheck"' not in text
        assert 'factcheckStatus: "verified"' in text
        needle = f'<script src="data/{filename}"></script>'
        assert needle in index
        positions.append(index.index(needle))
    assert positions == sorted(positions)
    assert positions[-1] < index.index('<script src="app.js"></script>')


def test_status_advances_exactly_six_more_units():
    status = json.loads(STATUS.read_text(encoding="utf-8"))
    assert status["pending_factcheck_count"] == 188
    assert status["last_completed_role"] == "factcheck"
    assert status["verified_through"] == "separation-of-powers"
    assert status["last_factchecked_batch"] == VERIFIED_SLUGS
    assert len(status["unverified_backlog"]) == 188
    assert status["unverified_backlog"][0] == "elections-political-participation"
    for slug in VERIFIED_SLUGS:
        assert slug not in status["unverified_backlog"]


def test_unreviewed_decorative_building_images_are_not_published():
    diet = (DATA / "civics-diet.js").read_text(encoding="utf-8")
    cabinet = (DATA / "civics-cabinet.js").read_text(encoding="utf-8")
    courts = (DATA / "civics-courts.js").read_text(encoding="utf-8")
    assert "Japanese_national_diet_building.jpg" not in diet
    assert "Kantei_PM_Japan_Residence.jpg" not in cabinet
    assert "Supreme_Court_of_Japan01s4s3872.jpg" not in courts


def test_reused_constitution_image_keeps_verified_license_metadata():
    constitution = (DATA / "civics-constitution-constitutionalism.js").read_text(encoding="utf-8")
    assert "Constitution_of_Japan_original_signatures.jpg" in constitution
    assert 'license: "CC BY-SA 4.0"' in constitution
    assert 'factcheckStatus: "verified"' in constitution


def test_cabinet_no_confidence_wording_keeps_constitutional_deadline():
    cabinet = (DATA / "civics-cabinet.js").read_text(encoding="utf-8")
    assert "10日以内に衆議院を解散するか、総辞職しなければならない" in cabinet
