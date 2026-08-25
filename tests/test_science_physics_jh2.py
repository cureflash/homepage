from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_jh2_topics import (
    JH2_PHYSICS_FORMULA_TOPICS,
    JH2_PHYSICS_PROBLEM_COUNT,
    JH2_PHYSICS_SEEDS,
)
from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, text_problem, validate


def generated(topic_key, mode_key, seed):
    topic = JH2_PHYSICS_FORMULA_TOPICS[topic_key]
    mode = topic["modes"][mode_key]
    return generate_formula_drill(topic["spec"], seed, JH2_PHYSICS_PROBLEM_COUNT, solve_for=mode["solve_for"])


def topic_seeds(topic_key):
    return JH2_PHYSICS_FORMULA_TOPICS[topic_key].get("seeds", JH2_PHYSICS_SEEDS)


def test_deterministic_and_distinct():
    hashes = set()
    count = 0
    for topic_key, topic in JH2_PHYSICS_FORMULA_TOPICS.items():
        for mode_key in topic["modes"]:
            for seed in topic_seeds(topic_key):
                first = generated(topic_key, mode_key, seed)
                second = generated(topic_key, mode_key, seed)
                assert first == second
                validate(first)
                h = normalized_hash(first)
                assert h not in hashes
                hashes.add(h)
                count += 1
    assert count == 90
    assert len(hashes) == 90


def test_ohms_law_answers():
    basic = generated("ohms-law", "basic", 6201)
    current = generated("ohms-law", "reverse-current", 6201)
    resistance = generated("ohms-law", "reverse-resistance", 6201)
    for problem in basic:
        assert abs(problem["answer"] - problem["known"]["I"] * problem["known"]["R"]) < 1e-9
        assert problem["solve_for"] == "V"
    for problem in current:
        assert abs(problem["answer"] - problem["known"]["V"] / problem["known"]["R"]) < 1e-9
        assert problem["solve_for"] == "I"
    for problem in resistance:
        assert abs(problem["answer"] - problem["known"]["V"] / problem["known"]["I"]) < 1e-9
        assert problem["solve_for"] == "R"


def test_series_parallel_and_combined_resistance_answers():
    checks = (
        ("series-voltage", "V1", "V2", "Vtotal", "V"),
        ("parallel-current", "I1", "I2", "Itotal", "A"),
        ("series-resistance", "R1", "R2", "Rtotal", "Ω"),
    )
    for topic_key, first, second, result, unit in checks:
        seed = topic_seeds(topic_key)[0]
        for problem in generated(topic_key, "basic", seed):
            assert abs(problem["answer"] - (problem["known"][first] + problem["known"][second])) < 1e-9
            assert problem["solve_for"] == result
            assert problem["answer_spec"]["unit"] == unit


def test_power_energy_and_heat_answers():
    checks = (
        ("electric-power", "V", "I", "P", "W"),
        ("electric-energy", "P", "t", "E", "J"),
        ("heat-quantity", "P", "t", "Q", "J"),
    )
    for topic_key, first, second, result, unit in checks:
        seed = topic_seeds(topic_key)[0]
        for problem in generated(topic_key, "basic", seed):
            assert abs(problem["answer"] - problem["known"][first] * problem["known"][second]) < 1e-9
            assert problem["solve_for"] == result
            assert problem["answer_spec"]["unit"] == unit


def test_energy_and_heat_time_is_seconds():
    for topic_key in ("electric-energy", "heat-quantity"):
        topic = JH2_PHYSICS_FORMULA_TOPICS[topic_key]
        assert topic["spec"]["variables"]["t"]["unit"] == "s"
        for seed in topic_seeds(topic_key):
            for problem in generated(topic_key, "basic", seed):
                assert problem["known"]["t"] > 0
                assert problem["answer"] >= 0


def test_prompts_and_units_are_basic():
    expected_units = {
        ("ohms-law", "basic"): "V",
        ("ohms-law", "reverse-current"): "A",
        ("ohms-law", "reverse-resistance"): "Ω",
        ("series-voltage", "basic"): "V",
        ("parallel-current", "basic"): "A",
        ("series-resistance", "basic"): "Ω",
        ("electric-power", "basic"): "W",
        ("electric-energy", "basic"): "J",
        ("heat-quantity", "basic"): "J",
    }
    for (topic_key, mode_key), expected_unit in expected_units.items():
        seed = topic_seeds(topic_key)[1]
        for problem in generated(topic_key, mode_key, seed):
            prompt = text_problem(problem)
            assert "求めなさい" in prompt
            assert problem["answer_spec"]["unit"] == expected_unit
            assert len(prompt) < 120


def test_corruption_is_rejected():
    problem = generated("electric-energy", "basic", topic_seeds("electric-energy")[2])[0]
    broken = {**problem, "answer": problem["answer"] + 1}
    try:
        validate_science_problem(broken)
    except AssertionError:
        pass
    else:
        raise AssertionError("corrupted JH2 energy answer was accepted")


if __name__ == "__main__":
    test_deterministic_and_distinct()
    test_ohms_law_answers()
    test_series_parallel_and_combined_resistance_answers()
    test_power_energy_and_heat_answers()
    test_energy_and_heat_time_is_seconds()
    test_prompts_and_units_are_basic()
    test_corruption_is_rejected()
    print("junior-high physics grade 2 tests: OK")
