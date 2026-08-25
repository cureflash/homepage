from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_jh3_topics import (
    JH3_PHYSICS_FORMULA_TOPICS,
    JH3_PHYSICS_PROBLEM_COUNT,
)
from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, text_problem, validate


def generated(topic_key, mode_key, seed):
    topic = JH3_PHYSICS_FORMULA_TOPICS[topic_key]
    mode = topic["modes"][mode_key]
    return generate_formula_drill(topic["spec"], seed, JH3_PHYSICS_PROBLEM_COUNT, solve_for=mode["solve_for"])


def test_deterministic_distinct_60_sheets():
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


if __name__ == "__main__":
    test_deterministic_distinct_60_sheets()
    test_speed_and_average_speed_answers()
    test_work_answers()
    test_power_answers()
    test_prompts_are_short_and_units_are_explicit()
    test_energy_formulas_not_prematurely_added()
    test_corruption_is_rejected()
    print("junior-high physics grade 3 tests: OK")
