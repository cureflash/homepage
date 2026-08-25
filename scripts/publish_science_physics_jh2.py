import json
import shutil
import sys
import tempfile
from pathlib import Path

try:
    from scripts.science_physics_jh2_topics import (
        JH2_PHYSICS_FORMULA_TOPICS,
        JH2_PHYSICS_PROBLEM_COUNT,
        JH2_PHYSICS_SEEDS,
    )
    from scripts.science_worksheet_helpers import generate_formula_drill
    from scripts.worksheet_factory import normalized_hash, render_pdf, validate, validate_catalog
except ModuleNotFoundError:
    from science_physics_jh2_topics import (
        JH2_PHYSICS_FORMULA_TOPICS,
        JH2_PHYSICS_PROBLEM_COUNT,
        JH2_PHYSICS_SEEDS,
    )
    from science_worksheet_helpers import generate_formula_drill
    from worksheet_factory import normalized_hash, render_pdf, validate, validate_catalog


def build_batch(repo_root):
    root = Path(repo_root)
    catalog_path = root / "worksheets" / "catalog.json"
    catalog = json.loads(catalog_path.read_text(encoding="utf-8"))
    by_id = {entry["id"]: entry for entry in catalog}
    by_url = {entry["url"]: entry for entry in catalog}
    by_hash = {entry["content_hash"]: entry for entry in catalog}

    output_rel_dir = Path("materials/worksheets/science/junior-high/grade-02/physics")
    output_dir = root / output_rel_dir
    pending = []

    for topic_key, topic in JH2_PHYSICS_FORMULA_TOPICS.items():
        seeds = topic.get("seeds", JH2_PHYSICS_SEEDS)
        for mode_key, mode in topic["modes"].items():
            for variant, seed in enumerate(seeds, start=1):
                problems = generate_formula_drill(
                    topic["spec"], seed, JH2_PHYSICS_PROBLEM_COUNT, solve_for=mode["solve_for"]
                )
                validate(problems)
                content_hash = normalized_hash(problems)
                wid = f"science-jh2-physics-{topic_key}-{mode_key}-{variant:02d}"
                filename = f"{wid}.pdf"
                url = (output_rel_dir / filename).as_posix()
                title = f"{topic['title']} {mode_key} {variant:02d}"
                entry = {
                    "id": wid,
                    "school_level": "junior-high",
                    "grade": 2,
                    "subject": "理科",
                    "science_field": "physics",
                    "worksheet_mode": mode["worksheet_mode"],
                    "unit": topic["unit"],
                    "skill": topic["skill"],
                    "problem_count": JH2_PHYSICS_PROBLEM_COUNT,
                    "seed": seed,
                    "variant": variant,
                    "title": title,
                    "description": mode["description"],
                    "url": url,
                    "content_hash": content_hash,
                    "difficulty": "basic",
                    "worksheet_series": "focused",
                    "answer_type": "numeric",
                }

                if wid in by_id:
                    existing = by_id[wid]
                    assert existing["url"] == url, f"existing worksheet URL mismatch: {wid}"
                    assert existing["content_hash"] == content_hash, f"existing worksheet content mismatch: {wid}"
                    continue
                if url in by_url:
                    raise AssertionError(f"worksheet URL already belongs to another id: {url}")
                if content_hash in by_hash or any(
                    item["entry"]["content_hash"] == content_hash for item in pending
                ):
                    raise AssertionError(f"duplicate worksheet content: {topic_key}/{mode_key}/{variant}")

                pending.append({"entry": entry, "problems": problems, "filename": filename, "title": title})

    prospective_catalog = catalog + [item["entry"] for item in pending]
    validate_catalog(prospective_catalog)
    return catalog_path, output_dir, catalog, pending, prospective_catalog


def publish(repo_root):
    root = Path(repo_root)
    catalog_path, output_dir, catalog, pending, prospective_catalog = build_batch(root)
    if not pending:
        validate_catalog(catalog, root)
        print("junior-high grade-2 physics worksheets already published")
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
    catalog_path.write_text(json.dumps(prospective_catalog, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"published {len(pending)} junior-high grade-2 physics worksheets")
    return len(pending)


if __name__ == "__main__":
    publish(Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parents[1])
