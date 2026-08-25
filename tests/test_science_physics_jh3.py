from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

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
from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, text_problem, validate


def generated(topic_key, mode_key, seed):
    topic = JH3_PHYSICS_FORMULA_TOPICS[topic_key]
    mode = topic["modes"][mode_key]
    return generate_formula_drill(topic["spec"], seed, JH3_PHYSICS_PROBLEM_COUNT, solve_for=mode["solve_for"])


def focused_hashes():
    hashes = set()
    for topic_key, topic in JH3_PHYSICS_FORMULA_TOPICS.items():
        for mode_key in topic["modes"]:
            for seed in topic["seeds"]:
                hashes.add(normalized_hash(generated(topic_key, mode_key, seed)))
    return hashes


def test_deterministic_distinct_60_focused_sheets():
    hashes = set()
    count = 0
    for topic_key, topic in JH3_PHYSICS_FORMULA_TOPICS.items():
        for mode_key in topic["modes"]:
            for seed in topic["seeds"]:
                first = generated(topic_key, mode_key, seed)
                second = generated(topic_key, mode_key, seed)
                assert first == second
                assert len(first) == JH3_PHYSICS_PROBLEM_COUNT == 20
                validate(first)
                content_hash = normalized_hash(first)
                assert content_hash not in hashes
                hashes.add(content_hash)
                count += 1
    assert count == 60
    assert len(hashes) == 60


def test_speed_and_average_speed_answers():
    for topic_key, mode_key in (
        ("speed", "basic"),
        ("average-speed", "basic"),
    ):
        seed = JH3_PHYSICS_FORMULA_TOPICS[topic_key]["seeds"][0]
        for problem in generated(topic_key, mode_key, seed):
            if topic_key == "speed":
                assert problem["solve_for"] == "v"
                assert abs(problem["answer"] - problem["known"]["d"] / problem["known"]["t"]) < 1e-9
            else:
                assert problem["solve_for"] == "vavg"
                assert abs(problem["answer"] - problem["known"]["D"] / problem["known"]["T"]) < 1e-9
            assert problem["answer_spec"]["unit"] == "m/s"

    seed = JH3_PHYSICS_FORMULA_TOPICS["speed"]["seeds"][1]
    for problem in generated("speed", "reverse-distance", seed):
        assert problem["solve_for"] == "d"
        assert abs(problem["answer"] - problem["known"]["v"] * problem["known"]["t"]) < 1e-9
        assert problem["answer_spec"]["unit"] == "m"


def test_work_answers():
    seed = JH3_PHYSICS_FORMULA_TOPICS["work"]["seeds"][0]
    for problem in generated("work", "basic", seed):
        assert problem["solve_for"] == "W"
        assert abs(problem["answer"] - problem["known"]["F"] * problem["known"]["d"]) < 1e-9
        assert problem["answer_spec"]["unit"] == "J"
    for problem in generated("work", "reverse-force", seed):
        assert problem["solve_for"] == "F"
        assert abs(problem["answer"] - problem["known"]["W"] / problem["known"]["d"]) < 1e-9
        assert problem["answer_spec"]["unit"] == "N"


def test_power_answers():
    seed = JH3_PHYSICS_FORMULA_TOPICS["power"]["seeds"][0]
    for problem in generated("power", "basic", seed):
        assert problem["solve_for"] == "P"
        assert abs(problem["answer"] - problem["known"]["W"] / problem["known"]["t"]) < 1e-9
        assert problem["answer_spec"]["unit"] == "W"


def test_mixed_review_are_deterministic_distinct_and_broad():
    hashes = focused_hashes()
    seen_new = set()
    expected_formula_ids = {
        "jh3-physics-speed",
        "jh3-physics-average-speed",
        "jh3-physics-work",
        "jh3-physics-power",
    }
    for seeds, generator in (
        (JH3_PHYSICS_MIXED_SEEDS, generate_jh3_physics_mixed),
        (JH3_PHYSICS_REVIEW_SEEDS, generate_jh3_physics_review),
    ):
        for seed in seeds:
            first = generator(seed)
            second = generator(seed)
            assert first == second
            assert len(first) == JH3_PHYSICS_MIXED_REVIEW_PROBLEM_COUNT == 20
            validate(first)
            content_hash = normalized_hash(first)
            assert content_hash not in hashes
            assert content_hash not in seen_new
            seen_new.add(content_hash)
            assert {p["formula_id"] for p in first} == expected_formula_ids
            assert {p["answer_spec"].get("unit") for p in first} >= {"m/s", "m", "J", "N", "W"}
    assert len(seen_new) == 30


def test_retrieval_30_sheets_are_deterministic_and_independently_validated():
    hashes = focused_hashes()
    for seed in JH3_PHYSICS_MIXED_SEEDS:
        hashes.add(normalized_hash(generate_jh3_physics_mixed(seed)))
    for seed in JH3_PHYSICS_REVIEW_SEEDS:
        hashes.add(normalized_hash(generate_jh3_physics_review(seed)))

    seen_new = set()
    for mode, seeds in (
        ("forward", JH3_PHYSICS_FORWARD_SEEDS),
        ("reverse", JH3_PHYSICS_REVERSE_SEEDS),
        ("fill", JH3_PHYSICS_FILL_SEEDS),
    ):
        for seed in seeds:
            first = generate_jh3_physics_retrieval(mode, seed)
            second = generate_jh3_physics_retrieval(mode, seed)
            assert first == second
            assert len(first) == JH3_PHYSICS_RETRIEVAL_PROBLEM_COUNT == 10
            validate(first)
            assert all(p["answer_spec"]["type"] == "accepted-set" for p in first)
            assert all(len(text_problem(p)) < 120 for p in first)
            for problem in first:
                validate_science_problem(problem)
            content_hash = normalized_hash(first)
            assert content_hash not in hashes
            assert content_hash not in seen_new
            seen_new.add(content_hash)
    assert len(seen_new) == 30


def test_retrieval_covers_required_jh3_concepts_without_high_school_formulas():
    text = []
    for mode, seed in (
        ("forward", JH3_PHYSICS_FORWARD_SEEDS[0]),
        ("reverse", JH3_PHYSICS_REVERSE_SEEDS[0]),
        ("fill", JH3_PHYSICS_FILL_SEEDS[0]),
    ):
        text.extend(text_problem(p) + " " + str(p["answer"]) for p in generate_jh3_physics_retrieval(mode, seed))
    joined = "\n".join(text)
    assert any(term in joined for term in ("等速直線運動", "慣性"))
    assert any(term in joined for term in ("合力", "分力", "力の合成", "力の分解"))
    assert any(term in joined for term in ("位置エネルギー", "運動エネルギー", "力学的エネルギー"))
    assert "mgh" not in joined
    assert "1/2" not in joined


def test_prompts_are_short_and_units_are_explicit():
    expected_units = {
        ("speed", "basic"): "m/s",
        ("speed", "reverse-distance"): "m",
        ("average-speed", "basic"): "m/s",
        ("work", "basic"): "J",
        ("work", "reverse-force"): "N",
        ("power", "basic"): "W",
    }
    for (topic_key, mode_key), unit in expected_units.items():
        seed = JH3_PHYSICS_FORMULA_TOPICS[topic_key]["seeds"][2]
        for problem in generated(topic_key, mode_key, seed):
            prompt = text_problem(problem)
            assert "求めなさい" in prompt
            assert len(prompt) < 120
            assert problem["answer_spec"]["unit"] == unit


def test_energy_formulas_not_prematurely_added():
    ids = set(JH3_PHYSICS_FORMULA_TOPICS)
    assert "potential-energy" not in ids
    assert "kinetic-energy" not in ids
    assert "mechanical-energy" not in ids


def test_corruption_is_rejected():
    problem = generated("work", "basic", JH3_PHYSICS_FORMULA_TOPICS["work"]["seeds"][0])[0]
    broken = {**problem, "answer": problem["answer"] + 1}
    try:
        validate_science_problem(broken)
    except AssertionError:
        pass
    else:
        raise AssertionError("corrupted JH3 physics answer was accepted")

    retrieval = generate_jh3_physics_retrieval("fill", JH3_PHYSICS_FILL_SEEDS[0])[0]
    broken_retrieval = {**retrieval, "answer": "誤答"}
    try:
        validate_science_problem(broken_retrieval)
    except AssertionError:
        pass
    else:
        raise AssertionError("corrupted JH3 retrieval answer was accepted")


if __name__ == "__main__":
    test_deterministic_distinct_60_focused_sheets()
    test_speed_and_average_speed_answers()
    test_work_answers()
    test_power_answers()
    test_mixed_review_are_deterministic_distinct_and_broad()
    test_retrieval_30_sheets_are_deterministic_and_independently_validated()
    test_retrieval_covers_required_jh3_concepts_without_high_school_formulas()
    test_prompts_are_short_and_units_are_explicit()
    test_energy_formulas_not_prematurely_added()
    test_corruption_is_rejected()
    print("junior-high physics grade 3 tests: OK")
