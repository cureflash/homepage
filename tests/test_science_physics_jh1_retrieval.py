import copy
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from scripts.science_physics_topics import (
    JH1_PHYSICS_PROBLEM_COUNT,
    JH1_PHYSICS_RETRIEVAL_SEEDS,
    JH1_PHYSICS_RETRIEVAL_TOPICS,
)
from scripts.science_worksheet_helpers import generate_retrieval_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


def generated_sets():
    for topic_key, topic in JH1_PHYSICS_RETRIEVAL_TOPICS.items():
        for mode_key, mode in topic["modes"].items():
            for seed in JH1_PHYSICS_RETRIEVAL_SEEDS:
                problems = generate_retrieval_drill(
                    mode["spec"], seed, JH1_PHYSICS_PROBLEM_COUNT, mode=mode_key
                )
                yield topic_key, mode_key, seed, problems


def test_deterministic_and_valid():
    hashes = set()
    count = 0
    for topic_key, mode_key, seed, problems in generated_sets():
        again = generate_retrieval_drill(
            JH1_PHYSICS_RETRIEVAL_TOPICS[topic_key]["modes"][mode_key]["spec"],
            seed,
            JH1_PHYSICS_PROBLEM_COUNT,
            mode=mode_key,
        )
        assert problems == again, (topic_key, mode_key, seed)
        assert len(problems) == JH1_PHYSICS_PROBLEM_COUNT
        validate(problems)
        digest = normalized_hash(problems)
        assert digest not in hashes, (topic_key, mode_key, seed)
        hashes.add(digest)
        count += 1
    assert count == 12


def test_independent_retrieval_validation_rejects_corruption():
    mode = JH1_PHYSICS_RETRIEVAL_TOPICS["force-concepts"]["modes"]["fill"]
    problem = generate_retrieval_drill(mode["spec"], 6201, 1, mode="fill")[0]
    broken = copy.deepcopy(problem)
    broken["answer"] = "誤った答え"
    try:
        validate_science_problem(broken)
    except AssertionError:
        pass
    else:
        raise AssertionError("corrupted retrieval answer was accepted")


def test_curriculum_fact_pool_contains_required_force_basics():
    topic = JH1_PHYSICS_RETRIEVAL_TOPICS["force-concepts"]
    forward_items = topic["modes"]["forward"]["spec"]["items"]
    lefts = {item["left"] for item in forward_items}
    assert "力の大きさの単位" in lefts
    assert "1 Nの力" in lefts
    assert "質量" in lefts
    assert "重さ" in lefts
    assert "力の3要素" in lefts
    assert "2力がつり合うときの大きさ" in lefts
    assert "2力がつり合うときの向き" in lefts
    assert "2力がつり合うときの位置関係" in lefts


if __name__ == "__main__":
    test_deterministic_and_valid()
    test_independent_retrieval_validation_rejects_corruption()
    test_curriculum_fact_pool_contains_required_force_basics()
    print("junior-high physics grade 1 retrieval tests: OK")
