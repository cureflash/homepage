import json
import shutil
import sys
import tempfile
from pathlib import Path

try:
    from scripts.science_physics_basic_beats import PHYSICS_BASIC_BEATS_TOPICS
    from scripts.science_physics_basic_conservation import PHYSICS_BASIC_CONSERVATION_TOPICS
    from scripts.science_physics_basic_electric_resistance import PHYSICS_BASIC_ELECTRIC_RESISTANCE_TOPICS
    from scripts.science_physics_basic_electric_use import PHYSICS_BASIC_ELECTRIC_USE_TOPICS
    from scripts.science_physics_basic_energy import PHYSICS_BASIC_ENERGY_TOPICS
    from scripts.science_physics_basic_energy_use import PHYSICS_BASIC_ENERGY_USE_TOPICS
    from scripts.science_physics_basic_forces import PHYSICS_BASIC_FORCE_TOPICS
    from scripts.science_physics_basic_heat import PHYSICS_BASIC_HEAT_TOPICS
    from scripts.science_physics_basic_motion import (
        PHYSICS_BASIC_MOTION_PROBLEM_COUNT,
        PHYSICS_BASIC_MOTION_TOPICS,
    )
    from scripts.science_physics_basic_resonance import PHYSICS_BASIC_RESONANCE_TOPICS
    from scripts.science_physics_basic_sound import PHYSICS_BASIC_SOUND_TOPICS
    from scripts.science_physics_basic_string import PHYSICS_BASIC_STRING_TOPICS
    from scripts.science_physics_basic_wave import PHYSICS_BASIC_WAVE_TOPICS
    from scripts.science_worksheet_helpers import generate_formula_drill, generate_retrieval_drill
    from scripts.worksheet_factory import normalized_hash, render_pdf, validate, validate_catalog
except ModuleNotFoundError:
    from science_physics_basic_beats import PHYSICS_BASIC_BEATS_TOPICS
    from science_physics_basic_conservation import PHYSICS_BASIC_CONSERVATION_TOPICS
    from science_physics_basic_electric_resistance import PHYSICS_BASIC_ELECTRIC_RESISTANCE_TOPICS
    from science_physics_basic_electric_use import PHYSICS_BASIC_ELECTRIC_USE_TOPICS
    from science_physics_basic_energy import PHYSICS_BASIC_ENERGY_TOPICS
    from science_physics_basic_energy_use import PHYSICS_BASIC_ENERGY_USE_TOPICS
    from science_physics_basic_forces import PHYSICS_BASIC_FORCE_TOPICS
    from science_physics_basic_heat import PHYSICS_BASIC_HEAT_TOPICS
    from science_physics_basic_motion import (
        PHYSICS_BASIC_MOTION_PROBLEM_COUNT,
        PHYSICS_BASIC_MOTION_TOPICS,
    )
    from science_physics_basic_resonance import PHYSICS_BASIC_RESONANCE_TOPICS
    from science_physics_basic_sound import PHYSICS_BASIC_SOUND_TOPICS
    from science_physics_basic_string import PHYSICS_BASIC_STRING_TOPICS
    from science_physics_basic_wave import PHYSICS_BASIC_WAVE_TOPICS
    from science_worksheet_helpers import generate_formula_drill, generate_retrieval_drill
    from worksheet_factory import normalized_hash, render_pdf, validate, validate_catalog


FORMAL_COURSE = "物理基礎"
ID_PREFIX = "science-physics-basic-motion-"
ALL_TOPICS = {
    **PHYSICS_BASIC_MOTION_TOPICS,
    **PHYSICS_BASIC_FORCE_TOPICS,
    **PHYSICS_BASIC_ENERGY_TOPICS,
    **PHYSICS_BASIC_CONSERVATION_TOPICS,
    **PHYSICS_BASIC_HEAT_TOPICS,
    **PHYSICS_BASIC_WAVE_TOPICS,
    **PHYSICS_BASIC_SOUND_TOPICS,
    **PHYSICS_BASIC_STRING_TOPICS,
    **PHYSICS_BASIC_BEATS_TOPICS,
    **PHYSICS_BASIC_RESONANCE_TOPICS,
    **PHYSICS_BASIC_ELECTRIC_RESISTANCE_TOPICS,
    **PHYSICS_BASIC_ELECTRIC_USE_TOPICS,
    **PHYSICS_BASIC_ENERGY_USE_TOPICS,
}


def _generate_topic_problems(topic, mode_key, mode, seed):
    problem_count = topic.get("problem_count", PHYSICS_BASIC_MOTION_PROBLEM_COUNT)
    generator = topic.get("generator", "formula")
    if generator == "retrieval":
        return generate_retrieval_drill(mode["spec"], seed, problem_count, mode=mode_key), "accepted-set"
    if generator != "formula":
        raise ValueError(f"unsupported Physics Basics generator: {generator}")
    return (
        generate_formula_drill(
            topic["spec"],
            seed,
            problem_count,
            solve_for=mode["solve_for"],
        ),
        "numeric",
    )


def build_batch(repo_root):
    root = Path(repo_root)
    catalog_path = root / "worksheets" / "catalog.json"
    catalog = json.loads(catalog_path.read_text(encoding="utf-8"))
    by_id = {entry["id"]: entry for entry in catalog}
    by_url = {entry["url"]: entry for entry in catalog}
    by_hash = {entry["content_hash"]: entry for entry in catalog}

    output_rel_dir = Path("materials/worksheets/science/high-school/physics-basic/motion")
    output_dir = root / output_rel_dir
    pending = []

    for topic_key, topic in ALL_TOPICS.items():
        for mode_key, mode in topic["modes"].items():
            for variant, seed in enumerate(topic["seeds"], start=1):
                problems, answer_type = _generate_topic_problems(topic, mode_key, mode, seed)
                validate(problems)
                content_hash = normalized_hash(problems)
                wid = f"{ID_PREFIX}{topic_key}-{mode_key}-{variant:02d}"
                filename = f"{wid}.pdf"
                url = (output_rel_dir / filename).as_posix()
                mode_label = mode.get("label", mode_key)
                title = f"{topic['title']} {mode_label} {variant:02d}"
                entry = {
                    "id": wid,
                    "school_level": "high-school",
                    "grade": None,
                    "formal_course": FORMAL_COURSE,
                    "subject": "理科",
                    "science_field": "physics",
                    "worksheet_mode": mode["worksheet_mode"],
                    "unit": topic["unit"],
                    "skill": topic["skill"],
                    "problem_count": len(problems),
                    "seed": seed,
                    "variant": variant,
                    "title": title,
                    "description": mode["description"],
                    "url": url,
                    "content_hash": content_hash,
                    "difficulty": "basic",
                    "worksheet_series": "focused",
                    "answer_type": answer_type,
                }

                if wid in by_id:
                    existing = by_id[wid]
                    assert existing["url"] == url, f"existing worksheet URL mismatch: {wid}"
                    assert existing["content_hash"] == content_hash, f"existing worksheet content mismatch: {wid}"
                    assert existing.get("formal_course") == FORMAL_COURSE
                    assert existing.get("grade") is None
                    assert existing.get("unit") == topic["unit"]
                    assert existing.get("answer_type") == answer_type
                    continue
                if url in by_url:
                    raise AssertionError(f"worksheet URL already belongs to another id: {url}")
                if content_hash in by_hash or any(item["entry"]["content_hash"] == content_hash for item in pending):
                    raise AssertionError(f"duplicate worksheet content: {wid}")
                pending.append({"entry": entry, "problems": problems, "filename": filename, "title": title})

    prospective_catalog = catalog + [item["entry"] for item in pending]
    validate_catalog(prospective_catalog)
    return catalog_path, output_dir, catalog, pending, prospective_catalog


def publish(repo_root):
    root = Path(repo_root)
    catalog_path, output_dir, catalog, pending, prospective_catalog = build_batch(root)
    if not pending:
        validate_catalog(catalog, root)
        print("Physics Basics worksheets already published")
        return 0

    output_dir.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(dir=root) as tmp:
        tmpdir = Path(tmp)
        for item in pending:
            rendered = tmpdir / item["filename"]
            render_pdf(rendered, item["title"], item["problems"])
            if not rendered.is_file() or rendered.stat().st_size <= 1000:
                raise AssertionError(f"PDF rendering failed: {item['filename']}")
        for item in pending:
            destination = output_dir / item["filename"]
            if destination.exists():
                raise AssertionError(f"refusing to overwrite: {destination}")
            shutil.move(str(tmpdir / item["filename"]), destination)

    validate_catalog(prospective_catalog, root)
    catalog_path.write_text(
        json.dumps(prospective_catalog, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"published {len(pending)} Physics Basics worksheets")
    return len(pending)


if __name__ == "__main__":
    publish(Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parents[1])
