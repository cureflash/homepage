import json
import shutil
import sys
import tempfile
from pathlib import Path

try:
    from scripts.science_physics_jh3_topics import (
        JH3_PHYSICS_FORMULA_TOPICS,
        JH3_PHYSICS_PROBLEM_COUNT,
    )
    from scripts.science_physics_jh3_mixed_review import (
        JH3_PHYSICS_MIXED_SEEDS,
        JH3_PHYSICS_REVIEW_SEEDS,
        JH3_PHYSICS_MIXED_REVIEW_PROBLEM_COUNT,
        generate_jh3_physics_mixed,
        generate_jh3_physics_review,
    )
    from scripts.science_physics_jh3_retrieval import (
        JH3_PHYSICS_FORWARD_SEEDS,
        JH3_PHYSICS_REVERSE_SEEDS,
        JH3_PHYSICS_FILL_SEEDS,
        JH3_PHYSICS_RETRIEVAL_PROBLEM_COUNT,
        generate_jh3_physics_retrieval,
    )
    from scripts.science_worksheet_helpers import generate_formula_drill
    from scripts.worksheet_factory import normalized_hash, render_pdf, validate, validate_catalog
except ModuleNotFoundError:
    from science_physics_jh3_topics import (
        JH3_PHYSICS_FORMULA_TOPICS,
        JH3_PHYSICS_PROBLEM_COUNT,
    )
    from science_physics_jh3_mixed_review import (
        JH3_PHYSICS_MIXED_SEEDS,
        JH3_PHYSICS_REVIEW_SEEDS,
        JH3_PHYSICS_MIXED_REVIEW_PROBLEM_COUNT,
        generate_jh3_physics_mixed,
        generate_jh3_physics_review,
    )
    from science_physics_jh3_retrieval import (
        JH3_PHYSICS_FORWARD_SEEDS,
        JH3_PHYSICS_REVERSE_SEEDS,
        JH3_PHYSICS_FILL_SEEDS,
        JH3_PHYSICS_RETRIEVAL_PROBLEM_COUNT,
        generate_jh3_physics_retrieval,
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

    output_rel_dir = Path("materials/worksheets/science/junior-high/grade-03/physics")
    output_dir = root / output_rel_dir
    pending = []

    def add_candidate(wid, title, seed, variant, problems, worksheet_mode, skill,
                      worksheet_series, answer_type, description):
        validate(problems)
        content_hash = normalized_hash(problems)
        filename = f"{wid}.pdf"
        url = (output_rel_dir / filename).as_posix()
        entry = {
            "id": wid,
            "school_level": "junior-high",
            "grade": 3,
            "subject": "理科",
            "science_field": "physics",
            "worksheet_mode": worksheet_mode,
            "unit": "運動とエネルギー",
            "skill": skill,
            "problem_count": len(problems),
            "seed": seed,
            "variant": variant,
            "title": title,
            "description": description,
            "url": url,
            "content_hash": content_hash,
            "difficulty": "basic",
            "worksheet_series": worksheet_series,
            "answer_type": answer_type,
        }
        if wid in by_id:
            existing = by_id[wid]
            assert existing["url"] == url, f"existing worksheet URL mismatch: {wid}"
            assert existing["content_hash"] == content_hash, f"existing worksheet content mismatch: {wid}"
            return
        if url in by_url:
            raise AssertionError(f"worksheet URL already belongs to another id: {url}")
        if content_hash in by_hash or any(item["entry"]["content_hash"] == content_hash for item in pending):
            raise AssertionError(f"duplicate worksheet content: {wid}")
        pending.append({"entry": entry, "problems": problems, "filename": filename, "title": title})

    for topic_key, topic in JH3_PHYSICS_FORMULA_TOPICS.items():
        for mode_key, mode in topic["modes"].items():
            for variant, seed in enumerate(topic["seeds"], start=1):
                problems = generate_formula_drill(
                    topic["spec"], seed, JH3_PHYSICS_PROBLEM_COUNT, solve_for=mode["solve_for"]
                )
                wid = f"science-jh3-physics-{topic_key}-{mode_key}-{variant:02d}"
                title = f"{topic['title']} {mode_key} {variant:02d}"
                add_candidate(
                    wid, title, seed, variant, problems,
                    mode["worksheet_mode"], topic["skill"], "focused", "numeric", mode["description"]
                )

    for series, seeds, generator, mode, skill, description in (
        (
            "mixed", JH3_PHYSICS_MIXED_SEEDS, generate_jh3_physics_mixed,
            "calculation-mixed", "motion-work-mixed",
            "速さ・平均の速さ・距離逆算・仕事・力逆算・仕事率を横断する中3運動とエネルギーの混合計算です。",
        ),
        (
            "review", JH3_PHYSICS_REVIEW_SEEDS, generate_jh3_physics_review,
            "calculation-review", "motion-work-review",
            "中3の速さ・仕事・仕事率の検証済み数量関係を累積的に復習する基本計算です。",
        ),
    ):
        for variant, seed in enumerate(seeds, start=1):
            problems = generator(seed)
            assert len(problems) == JH3_PHYSICS_MIXED_REVIEW_PROBLEM_COUNT
            wid = f"science-jh3-physics-{series}-{variant:02d}"
            title = f"中3理科 運動と仕事 {series} {variant:02d}"
            add_candidate(
                wid, title, seed, variant, problems,
                mode, skill, series, "numeric", description
            )

    retrieval_groups = (
        (
            "forward", JH3_PHYSICS_FORWARD_SEEDS, "retrieval-forward",
            "用語から内容を取り出す、中3「運動とエネルギー」の基本概念反復です。",
        ),
        (
            "reverse", JH3_PHYSICS_REVERSE_SEEDS, "retrieval-reverse",
            "内容から用語を取り出す、中3「運動とエネルギー」の逆方向反復です。",
        ),
        (
            "fill", JH3_PHYSICS_FILL_SEEDS, "retrieval-fill",
            "等速直線運動、力の合成・分解、位置・運動エネルギー、力学的エネルギー保存を穴埋めで確認します。",
        ),
    )
    for retrieval_mode, seeds, worksheet_mode, description in retrieval_groups:
        for variant, seed in enumerate(seeds, start=1):
            problems = generate_jh3_physics_retrieval(retrieval_mode, seed)
            assert len(problems) == JH3_PHYSICS_RETRIEVAL_PROBLEM_COUNT
            wid = f"science-jh3-physics-concepts-{retrieval_mode}-{variant:02d}"
            title = f"中3理科 運動とエネルギー概念 {retrieval_mode} {variant:02d}"
            add_candidate(
                wid, title, seed, variant, problems,
                worksheet_mode, "motion-energy-concepts", "focused", "accepted-set", description
            )

    prospective_catalog = catalog + [item["entry"] for item in pending]
    validate_catalog(prospective_catalog)
    return catalog_path, output_dir, catalog, pending, prospective_catalog


def publish(repo_root):
    root = Path(repo_root)
    catalog_path, output_dir, catalog, pending, prospective_catalog = build_batch(root)
    if not pending:
        validate_catalog(catalog, root)
        print("junior-high grade-3 physics worksheets already published")
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
    print(f"published {len(pending)} junior-high grade-3 physics worksheets")
    return len(pending)


if __name__ == "__main__":
    publish(Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parents[1])
