import json
import shutil
import sys
import tempfile
from pathlib import Path

try:
    from scripts.science_physics_topics import (
        JH1_PHYSICS_PROBLEM_COUNT,
        JH1_PHYSICS_RETRIEVAL_SEEDS,
        JH1_PHYSICS_RETRIEVAL_TOPICS,
    )
    from scripts.science_worksheet_helpers import generate_retrieval_drill
    from scripts.worksheet_factory import normalized_hash, render_pdf, validate, validate_catalog
except ModuleNotFoundError:
    from science_physics_topics import (
        JH1_PHYSICS_PROBLEM_COUNT,
        JH1_PHYSICS_RETRIEVAL_SEEDS,
        JH1_PHYSICS_RETRIEVAL_TOPICS,
    )
    from science_worksheet_helpers import generate_retrieval_drill
    from worksheet_factory import normalized_hash, render_pdf, validate, validate_catalog


def build_batch(repo_root):
    root = Path(repo_root)
    catalog_path = root / "worksheets" / "catalog.json"
    catalog = json.loads(catalog_path.read_text(encoding="utf-8"))
    by_id = {entry["id"]: entry for entry in catalog}
    by_url = {entry["url"]: entry for entry in catalog}
    by_hash = {entry["content_hash"]: entry for entry in catalog}

    output_rel_dir = Path("materials/worksheets/science/junior-high/grade-01/physics")
    output_dir = root / output_rel_dir
    pending = []

    for topic_key, topic in JH1_PHYSICS_RETRIEVAL_TOPICS.items():
        for mode_key, mode in topic["modes"].items():
            for variant, seed in enumerate(JH1_PHYSICS_RETRIEVAL_SEEDS, start=1):
                problems = generate_retrieval_drill(
                    mode["spec"], seed, JH1_PHYSICS_PROBLEM_COUNT, mode=mode_key
                )
                validate(problems)
                content_hash = normalized_hash(problems)
                wid = f"science-jh1-physics-{topic_key}-{mode_key}-{variant:02d}"
                filename = f"{wid}.pdf"
                url = (output_rel_dir / filename).as_posix()
                title = f"{topic['title']} {mode['label']} {variant:02d}"

                entry = {
                    "id": wid,
                    "school_level": "junior-high",
                    "grade": 1,
                    "subject": "理科",
                    "science_field": "physics",
                    "worksheet_mode": mode["worksheet_mode"],
                    "unit": topic["unit"],
                    "skill": topic["skill"],
                    "problem_count": JH1_PHYSICS_PROBLEM_COUNT,
                    "seed": seed,
                    "variant": variant,
                    "title": title,
                    "description": mode["description"],
                    "url": url,
                    "content_hash": content_hash,
                    "difficulty": "basic",
                    "worksheet_series": "focused",
                    "answer_type": "accepted-set",
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
        print("junior-high grade-1 physics retrieval worksheets already published")
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
    print(f"published {len(pending)} junior-high grade-1 physics retrieval worksheets")
    return len(pending)


if __name__ == "__main__":
    publish(Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parents[1])
