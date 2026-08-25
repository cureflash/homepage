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


def generated(mode_key, seed):
    topic = JH2_PHYSICS_FORMULA_TOPICS["ohms-law"]
    mode = topic["modes"][mode_key]
    return generate_formula_drill(topic["spec"], seed, JH2_PHYSICS_PROBLEM_COUNT, solve_for=mode["solve_for"])


def test_deterministic_and_distinct():
    hashes = set()
    for mode_key in ("basic", "reverse-current", "reverse-resistance"):
        for seed in JH2_PHYSICS_SEEDS:
            first = generated(mode_key, seed)
            second = generated(mode_key, seed)
            assert first == second
            validate(first)
            h = normalized_hash(first)
            assert h not in hashes
            hashes.add(h)
    assert len(hashes) == 30


def test_ohms_law_answers():
    basic = generated("basic", 6201)
    current = generated("reverse-current", 6201)
    resistance = generated("reverse-resistance", 6201)
    for problem in basic:
        assert abs(problem["answer"] - problem["known"]["I"] * problem["known"]["R"]) < 1e-9
        assert problem["solve_for"] == "V"
    for problem in current:
        assert abs(problem["answer"] - problem["known"]["V"] / problem["known"]["R"]) < 1e-9
        assert problem["solve_for"] == "I"
    for problem in resistance:
        assert abs(problem["answer"] - problem["known"]["V"] / problem["known"]["I"]) < 1e-9
        assert problem["solve_for"] == "R"


def test_prompts_and_units_are_basic():
    expected_units = {"basic": "V", "reverse-current": "A", "reverse-resistance": "Ω"}
    for mode_key, expected_unit in expected_units.items():
        for problem in generated(mode_key, 6202):
            prompt = text_problem(problem)
            assert "求めなさい" in prompt
            assert problem["answer_spec"]["unit"] == expected_unit
            assert len(prompt) < 90


def test_corruption_is_rejected():
    problem = generated("basic", 6203)[0]
    broken = {**problem, "answer": problem["answer"] + 1}
    try:
        validate_science_problem(broken)
    except AssertionError:
        pass
    else:
        raise AssertionError("corrupted Ohm-law answer was accepted")


if __name__ == "__main__":
    test_deterministic_and_distinct()
    test_ohms_law_answers()
    test_prompts_and_units_are_basic()
    test_corruption_is_rejected()
    print("junior-high physics grade 2 tests: OK")
