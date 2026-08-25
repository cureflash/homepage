import json
import shutil
import sys
import tempfile
from pathlib import Path

try:
    from scripts.science_physics_jh1_mixed_review import (
        JH1_PHYSICS_MIXED_REVIEW_PROBLEM_COUNT,
        JH1_PHYSICS_MIXED_SEEDS,
        JH1_PHYSICS_REVIEW_SEEDS,
        generate_jh1_physics_mixed,
        generate_jh1_physics_review,
    )
    from scripts.worksheet_factory import normalized_hash, render_pdf, validate, validate_catalog
except ModuleNotFoundError:
    from science_physics_jh1_mixed_review import (
        JH1_PHYSICS_MIXED_REVIEW_PROBLEM_COUNT,
        JH1_PHYSICS_MIXED_SEEDS,
        JH1_PHYSICS_REVIEW_SEEDS,
        generate_jh1_physics_mixed,
        generate_jh1_physics_review,
    )
    from worksheet_factory import normalized_hash, render_pdf, validate, validate_catalog

BATCHES = (
    {
        "key": "mixed",
        "title": "中1理科 光・音・力 混合確認",
        "description": "光・音・力の基本事項を横断して短い穴埋めで取り出す混合反復です。",
        "worksheet_mode": "retrieval-mixed",
        "worksheet_series": "mixed",
        "skill": "jh1-physics-mixed-retrieval",
        "seeds": JH1_PHYSICS_MIXED_SEEDS,
        "generator": generate_jh1_physics_mixed,
    },
    {
        "key": "review",
        "title": "中1理科 物理分野 総復習",
        "description": "光・音・力を、用語→内容・内容→用語・正誤・穴埋めの複数方向から累積確認する総復習です。",
        "worksheet_mode": "retrieval-review",
        "worksheet_series": "review",
        "skill": "jh1-physics-cumulative-review",
        "seeds": JH1_PHYSICS_REVIEW_SEEDS,
        "generator": generate_jh1_physics_review,
    },
)


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

    for batch in BATCHES:
        for variant, seed in enumerate(batch["seeds"], start=1):
            problems = batch["generator"](seed)
            validate(problems)
            content_hash = normalized_hash(problems)
            wid = f"science-jh1-physics-{batch['key']}-{variant:02d}"
            filename = f"{wid}.pdf"
            url = (output_rel_dir / filename).as_posix()
            title = f"{batch['title']} {variant:02d}"
            entry = {
                "id": wid,
                "school_level": "junior-high",
                "grade": 1,
                "subject": "理科",
                "science_field": "physics",
                "worksheet_mode": batch["worksheet_mode"],
                "unit": "身近な物理現象",
                "skill": batch["skill"],
                "problem_count": JH1_PHYSICS_MIXED_REVIEW_PROBLEM_COUNT,
                "seed": seed,
                "variant": variant,
                "title": title,
                "description": batch["description"],
                "url": url,
                "content_hash": content_hash,
                "difficulty": "basic",
                "worksheet_series": batch["worksheet_series"],
                "answer_type": "accepted-set",
            }
            if wid in by_id:
                existing = by_id[wid]
                assert existing["url"] == url, f"existing worksheet URL mismatch: {wid}"
                assert existing["content_hash"] == content_hash, f"existing worksheet content mismatch: {wid}"
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
        print("junior-high grade-1 mixed/review worksheets already published")
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
    print(f"published {len(pending)} junior-high grade-1 mixed/review worksheets")
    return len(pending)


if __name__ == "__main__":
    publish(Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parents[1])
