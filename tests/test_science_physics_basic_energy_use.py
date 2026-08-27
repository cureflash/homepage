import copy
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from scripts.science_physics_basic_energy_use import (
    PHYSICS_BASIC_ENERGY_USE_PROBLEM_COUNT,
    PHYSICS_BASIC_ENERGY_USE_TOPICS,
)
from scripts.science_worksheet_helpers import generate_retrieval_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


def generated_sets():
    for topic_key, topic in PHYSICS_BASIC_ENERGY_USE_TOPICS.items():
        for mode_key, mode in topic["modes"].items():
            for seed in topic["seeds"]:
                problems = generate_retrieval_drill(mode["spec"], seed, topic["problem_count"], mode=mode_key)
                yield topic_key, mode_key, seed, problems


def test_three_independent_forty_pdf_checkpoints():
    batches = list(generated_sets())
    assert len(batches) == 120
    assert set(PHYSICS_BASIC_ENERGY_USE_TOPICS) == {
        "energy-resources-electric-conversion",
        "radiation-basics",
        "radiation-use-challenges",
    }
    for topic_key in PHYSICS_BASIC_ENERGY_USE_TOPICS:
        topic_batches = [batch for batch in batches if batch[0] == topic_key]
        assert len(topic_batches) == 40
        assert {mode for _, mode, _, _ in topic_batches} == {"forward", "reverse", "fill", "tf"}
    assert all(len(problems) == PHYSICS_BASIC_ENERGY_USE_PROBLEM_COUNT for *_, problems in batches)


def test_deterministic_independent_validation_and_unique_hashes():
    hashes = set()
    hashes_by_topic = {key: set() for key in PHYSICS_BASIC_ENERGY_USE_TOPICS}
    for topic_key, mode_key, seed, problems in generated_sets():
        mode = PHYSICS_BASIC_ENERGY_USE_TOPICS[topic_key]["modes"][mode_key]
        again = generate_retrieval_drill(mode["spec"], seed, PHYSICS_BASIC_ENERGY_USE_PROBLEM_COUNT, mode=mode_key)
        assert problems == again
        validate(problems)
        assert all(validate_science_problem(problem) for problem in problems)
        assert all(problem["answer_spec"]["type"] == "accepted-set" for problem in problems)
        digest = normalized_hash(problems)
        assert digest not in hashes
        hashes.add(digest)
        hashes_by_topic[topic_key].add(digest)
    assert len(hashes) == 120
    assert all(len(values) == 40 for values in hashes_by_topic.values())


def test_independent_validation_rejects_corruption_in_each_checkpoint():
    for topic_key, topic in PHYSICS_BASIC_ENERGY_USE_TOPICS.items():
        mode = topic["modes"]["fill"]
        problem = generate_retrieval_drill(mode["spec"], topic["seeds"][0], 1, mode="fill")[0]
        broken = copy.deepcopy(problem)
        broken["answer"] = "誤答"
        try:
            validate_science_problem(broken)
        except AssertionError:
            pass
        else:
            raise AssertionError(f"corrupted retrieval answer was accepted: {topic_key}")


def test_curriculum_concepts_are_present():
    resources = PHYSICS_BASIC_ENERGY_USE_TOPICS["energy-resources-electric-conversion"]
    resource_lefts = {item["left"] for item in resources["modes"]["forward"]["spec"]["items"]}
    assert {"水力発電", "火力発電", "原子力発電", "太陽光発電", "風力発電"} <= resource_lefts

    basics = PHYSICS_BASIC_ENERGY_USE_TOPICS["radiation-basics"]
    basic_lefts = {item["left"] for item in basics["modes"]["forward"]["spec"]["items"]}
    assert {"α線", "β線", "γ線", "中性子線", "半減期", "ベクレル（Bq）", "グレイ（Gy）", "シーベルト（Sv）"} <= basic_lefts

    uses = PHYSICS_BASIC_ENERGY_USE_TOPICS["radiation-use-challenges"]
    use_lefts = {item["left"] for item in uses["modes"]["forward"]["spec"]["items"]}
    assert {"医療での放射線利用", "工業での放射線利用", "農業での放射線利用"} <= use_lefts
    assert "原子力利用で生じる廃棄物の課題" in use_lefts
    assert "原子力施設を役目の終了後に解体する課題" in use_lefts


def test_hashes_are_disjoint_from_prior_retrieval_topics():
    from scripts.science_physics_basic_resonance import PHYSICS_BASIC_RESONANCE_TOPICS
    from scripts.science_physics_basic_electric_resistance import PHYSICS_BASIC_ELECTRIC_RESISTANCE_TOPICS
    from scripts.science_physics_basic_electric_use import PHYSICS_BASIC_ELECTRIC_USE_TOPICS

    new_hashes = {normalized_hash(problems) for *_, problems in generated_sets()}
    old_hashes = set()
    for topics in [
        PHYSICS_BASIC_RESONANCE_TOPICS,
        PHYSICS_BASIC_ELECTRIC_RESISTANCE_TOPICS,
        PHYSICS_BASIC_ELECTRIC_USE_TOPICS,
    ]:
        for topic in topics.values():
            for mode_key, mode in topic["modes"].items():
                for seed in topic["seeds"]:
                    old_hashes.add(
                        normalized_hash(
                            generate_retrieval_drill(mode["spec"], seed, topic["problem_count"], mode=mode_key)
                        )
                    )
    assert len(new_hashes) == 120
    assert new_hashes.isdisjoint(old_hashes)


if __name__ == "__main__":
    test_three_independent_forty_pdf_checkpoints()
    test_deterministic_independent_validation_and_unique_hashes()
    test_independent_validation_rejects_corruption_in_each_checkpoint()
    test_curriculum_concepts_are_present()
    test_hashes_are_disjoint_from_prior_retrieval_topics()
    print("Physics Basics energy-use retrieval tests: OK")
