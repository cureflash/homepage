import copy
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from scripts.science_physics_basic_electric_use import (
    PHYSICS_BASIC_ELECTRIC_USE_PROBLEM_COUNT,
    PHYSICS_BASIC_ELECTRIC_USE_TOPICS,
)
from scripts.science_worksheet_helpers import generate_retrieval_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


def generated_sets():
    for topic_key, topic in PHYSICS_BASIC_ELECTRIC_USE_TOPICS.items():
        for mode_key, mode in topic["modes"].items():
            for seed in topic["seeds"]:
                problems = generate_retrieval_drill(mode["spec"], seed, topic["problem_count"], mode=mode_key)
                yield topic_key, mode_key, seed, problems


def test_exactly_forty_variants_and_four_modes():
    batches = list(generated_sets())
    assert len(batches) == 40
    assert {mode for _, mode, _, _ in batches} == {"forward", "reverse", "fill", "tf"}
    assert all(len(problems) == PHYSICS_BASIC_ELECTRIC_USE_PROBLEM_COUNT for *_, problems in batches)


def test_deterministic_independent_validation_and_unique_hashes():
    hashes = set()
    for topic_key, mode_key, seed, problems in generated_sets():
        mode = PHYSICS_BASIC_ELECTRIC_USE_TOPICS[topic_key]["modes"][mode_key]
        again = generate_retrieval_drill(mode["spec"], seed, PHYSICS_BASIC_ELECTRIC_USE_PROBLEM_COUNT, mode=mode_key)
        assert problems == again
        validate(problems)
        assert all(validate_science_problem(problem) for problem in problems)
        assert all(problem["answer_spec"]["type"] == "accepted-set" for problem in problems)
        digest = normalized_hash(problems)
        assert digest not in hashes
        hashes.add(digest)
    assert len(hashes) == 40


def test_independent_validation_rejects_corruption():
    mode = PHYSICS_BASIC_ELECTRIC_USE_TOPICS["electric-use-concepts"]["modes"]["fill"]
    problem = generate_retrieval_drill(mode["spec"], 11101, 1, mode="fill")[0]
    broken = copy.deepcopy(problem)
    broken["answer"] = "誤答"
    try:
        validate_science_problem(broken)
    except AssertionError:
        pass
    else:
        raise AssertionError("corrupted electric-use retrieval answer was accepted")


def test_curriculum_concepts_are_present():
    topic = PHYSICS_BASIC_ELECTRIC_USE_TOPICS["electric-use-concepts"]
    lefts = {item["left"] for item in topic["modes"]["forward"]["spec"]["items"]}
    assert "交流" in lefts
    assert "変圧器" in lefts
    assert "整流" in lefts
    assert "高い電圧で送電する主な理由" in lefts
    assert "発電機の基本的な仕組み" in lefts
    assert "電波の利用例" in lefts


def test_hashes_are_disjoint_from_prior_retrieval_topics():
    from scripts.science_physics_basic_resonance import PHYSICS_BASIC_RESONANCE_TOPICS
    from scripts.science_physics_basic_electric_resistance import PHYSICS_BASIC_ELECTRIC_RESISTANCE_TOPICS
    new_hashes = {normalized_hash(problems) for *_, problems in generated_sets()}
    old_hashes = set()
    for topics in [PHYSICS_BASIC_RESONANCE_TOPICS, PHYSICS_BASIC_ELECTRIC_RESISTANCE_TOPICS]:
        for topic in topics.values():
            for mode_key, mode in topic["modes"].items():
                for seed in topic["seeds"]:
                    old_hashes.add(normalized_hash(generate_retrieval_drill(mode["spec"], seed, topic["problem_count"], mode=mode_key)))
    assert len(new_hashes) == 40
    assert new_hashes.isdisjoint(old_hashes)


if __name__ == "__main__":
    test_exactly_forty_variants_and_four_modes()
    test_deterministic_independent_validation_and_unique_hashes()
    test_independent_validation_rejects_corruption()
    test_curriculum_concepts_are_present()
    test_hashes_are_disjoint_from_prior_retrieval_topics()
    print("Physics Basics electric-use retrieval tests: OK")
