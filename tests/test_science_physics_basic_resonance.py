import copy
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from scripts.science_physics_basic_resonance import (
    PHYSICS_BASIC_RESONANCE_PROBLEM_COUNT,
    PHYSICS_BASIC_RESONANCE_TOPICS,
)
from scripts.science_worksheet_helpers import generate_formula_drill, generate_retrieval_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


def generated_sets():
    for topic_key, topic in PHYSICS_BASIC_RESONANCE_TOPICS.items():
        for mode_key, mode in topic["modes"].items():
            for seed in topic["seeds"]:
                problems = generate_retrieval_drill(
                    mode["spec"], seed, topic["problem_count"], mode=mode_key
                )
                yield topic_key, mode_key, seed, problems


def test_exactly_forty_variants_and_four_modes():
    batches = list(generated_sets())
    assert len(batches) == 40
    assert {mode_key for _, mode_key, _, _ in batches} == {"forward", "reverse", "fill", "tf"}
    assert all(len(problems) == PHYSICS_BASIC_RESONANCE_PROBLEM_COUNT for *_, problems in batches)


def test_deterministic_and_independently_validated():
    hashes = set()
    for topic_key, mode_key, seed, problems in generated_sets():
        mode = PHYSICS_BASIC_RESONANCE_TOPICS[topic_key]["modes"][mode_key]
        again = generate_retrieval_drill(mode["spec"], seed, PHYSICS_BASIC_RESONANCE_PROBLEM_COUNT, mode=mode_key)
        assert problems == again, (topic_key, mode_key, seed)
        validate(problems)
        assert all(validate_science_problem(problem) for problem in problems)
        assert all(problem["answer_spec"]["type"] == "accepted-set" for problem in problems)
        digest = normalized_hash(problems)
        assert digest not in hashes, (topic_key, mode_key, seed)
        hashes.add(digest)
    assert len(hashes) == 40


def test_independent_validation_rejects_corruption():
    mode = PHYSICS_BASIC_RESONANCE_TOPICS["resonance-concepts"]["modes"]["fill"]
    problem = generate_retrieval_drill(mode["spec"], 10901, 1, mode="fill")[0]
    broken = copy.deepcopy(problem)
    broken["answer"] = "誤答"
    try:
        validate_science_problem(broken)
    except AssertionError:
        pass
    else:
        raise AssertionError("corrupted Physics Basics retrieval answer was accepted")


def test_required_curriculum_concepts_are_present():
    topic = PHYSICS_BASIC_RESONANCE_TOPICS["resonance-concepts"]
    pairs = topic["modes"]["forward"]["spec"]["items"]
    terms = {item["left"] for item in pairs}
    assert {"共振", "共鳴", "固有振動数", "共振が起こる基本条件"} <= terms
    assert all(topic["unit"] == "様々な物理現象とエネルギーの利用：音と振動" for _ in [0])


def test_hashes_do_not_collide_with_existing_numeric_sound_series():
    new_hashes = {normalized_hash(problems) for *_, problems in generated_sets()}
    old_hashes = set()
    modules = []
    from scripts.science_physics_basic_beats import PHYSICS_BASIC_BEATS_TOPICS, PHYSICS_BASIC_BEATS_PROBLEM_COUNT
    from scripts.science_physics_basic_sound import PHYSICS_BASIC_SOUND_TOPICS, PHYSICS_BASIC_SOUND_PROBLEM_COUNT
    from scripts.science_physics_basic_string import PHYSICS_BASIC_STRING_TOPICS, PHYSICS_BASIC_STRING_PROBLEM_COUNT
    modules.extend([
        (PHYSICS_BASIC_SOUND_TOPICS, PHYSICS_BASIC_SOUND_PROBLEM_COUNT),
        (PHYSICS_BASIC_STRING_TOPICS, PHYSICS_BASIC_STRING_PROBLEM_COUNT),
        (PHYSICS_BASIC_BEATS_TOPICS, PHYSICS_BASIC_BEATS_PROBLEM_COUNT),
    ])
    for topics, count in modules:
        for topic in topics.values():
            for mode in topic["modes"].values():
                for seed in topic["seeds"]:
                    old_hashes.add(normalized_hash(generate_formula_drill(topic["spec"], seed, count, solve_for=mode["solve_for"])))
    assert len(new_hashes) == 40
    assert new_hashes.isdisjoint(old_hashes)


if __name__ == "__main__":
    test_exactly_forty_variants_and_four_modes()
    test_deterministic_and_independently_validated()
    test_independent_validation_rejects_corruption()
    test_required_curriculum_concepts_are_present()
    test_hashes_do_not_collide_with_existing_numeric_sound_series()
    print("Physics Basics resonance retrieval tests: OK")
