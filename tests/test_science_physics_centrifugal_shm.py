import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_centrifugal_shm import (
    PHYSICS_CENTRIFUGAL_SHM_PROBLEM_COUNT,
    PHYSICS_CENTRIFUGAL_SHM_TOPICS,
)
from scripts.science_worksheet_helpers import generate_formula_drill, generate_retrieval_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsCentrifugalShmTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_CENTRIFUGAL_SHM_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    if topic.get("generator") == "retrieval":
                        problems = generate_retrieval_drill(mode["spec"], seed, PHYSICS_CENTRIFUGAL_SHM_PROBLEM_COUNT, mode=mode_key)
                    else:
                        problems = generate_formula_drill(topic["spec"], seed, PHYSICS_CENTRIFUGAL_SHM_PROBLEM_COUNT, solve_for=mode["solve_for"])
                    batches.append((topic_key, mode_key, variant, seed, problems))
        return batches

    def test_three_checkpoints_total_110_variants(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 110)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))
        counts = {}
        for topic_key, *_ in batches:
            counts[topic_key] = counts.get(topic_key, 0) + 1
        self.assertEqual(counts, {
            "circular-centrifugal-frame-concepts": 40,
            "simple-harmonic-core-concepts": 40,
            "simple-harmonic-spring-restoring-force": 30,
        })

    def test_deterministic_regeneration_and_independent_validation(self):
        hashes = set()
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            topic = PHYSICS_CENTRIFUGAL_SHM_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            if topic.get("generator") == "retrieval":
                regenerated = generate_retrieval_drill(mode["spec"], seed, 20, mode=mode_key)
                expected_type = "accepted-set"
            else:
                regenerated = generate_formula_drill(topic["spec"], seed, 20, solve_for=mode["solve_for"])
                expected_type = "numeric"
            self.assertEqual(problems, regenerated, (topic_key, mode_key, variant))
            validate(problems)
            for problem in problems:
                self.assertTrue(validate_science_problem(problem))
                self.assertEqual(problem["answer_spec"]["type"], expected_type)
            digest = normalized_hash(problems)
            self.assertNotIn(digest, hashes)
            hashes.add(digest)
        self.assertEqual(len(hashes), 110)

    def test_reverse_retrieval_descriptions_are_unambiguous(self):
        for topic_key, topic in PHYSICS_CENTRIFUGAL_SHM_TOPICS.items():
            if topic.get("generator") != "retrieval":
                continue
            items = topic["modes"]["reverse"]["spec"]["items"]
            owners = {}
            for item in items:
                for shown in item["right"]:
                    self.assertNotIn(shown, owners, (topic_key, shown, owners.get(shown), item["left"]))
                    owners[shown] = item["left"]

    def test_spring_visible_value_recalculation(self):
        topic = PHYSICS_CENTRIFUGAL_SHM_TOPICS["simple-harmonic-spring-restoring-force"]
        for mode_key, mode in topic["modes"].items():
            for seed in topic["seeds"]:
                problems = generate_formula_drill(topic["spec"], seed, 20, solve_for=mode["solve_for"])
                for problem in problems:
                    known = problem["known"]
                    if problem["solve_for"] == "restoring_force":
                        expected = known["spring_constant"] * known["displacement"]
                    elif problem["solve_for"] == "spring_constant":
                        expected = known["restoring_force"] / known["displacement"]
                    else:
                        expected = known["restoring_force"] / known["spring_constant"]
                    self.assertAlmostEqual(problem["answer"], expected, msg=(mode_key, seed))
                    self.assertAlmostEqual(problem["answer_spec"]["value"], expected)

    def test_retrieval_corruption_is_rejected(self):
        topic = PHYSICS_CENTRIFUGAL_SHM_TOPICS["circular-centrifugal-frame-concepts"]
        mode = topic["modes"]["fill"]
        problem = generate_retrieval_drill(mode["spec"], topic["seeds"][0], 1, mode="fill")[0]
        bad = copy.deepcopy(problem)
        bad["answer"] = "誤答"
        with self.assertRaises(AssertionError):
            validate_science_problem(bad)

    def test_formula_corruption_is_rejected(self):
        topic = PHYSICS_CENTRIFUGAL_SHM_TOPICS["simple-harmonic-spring-restoring-force"]
        mode = topic["modes"]["basic-force"]
        problem = generate_formula_drill(topic["spec"], topic["seeds"][0], 1, solve_for=mode["solve_for"])[0]
        bad = copy.deepcopy(problem)
        bad["answer"] += 1
        with self.assertRaises(AssertionError):
            validate_science_problem(bad)

    def test_reference_frame_and_shm_contracts_are_learner_visible(self):
        centrifugal = PHYSICS_CENTRIFUGAL_SHM_TOPICS["circular-centrifugal-frame-concepts"]
        text = json.dumps(centrifugal, ensure_ascii=False)
        self.assertIn("慣性系", text)
        self.assertIn("回転座標系", text)
        self.assertIn("見かけの力", text)
        self.assertIn("回転中心から外向き", text)

        shm = PHYSICS_CENTRIFUGAL_SHM_TOPICS["simple-harmonic-core-concepts"]
        shm_text = json.dumps(shm, ensure_ascii=False)
        for token in ["変位", "速度", "加速度", "復元力", "振幅", "周期"]:
            self.assertIn(token, shm_text)

        spring = PHYSICS_CENTRIFUGAL_SHM_TOPICS["simple-harmonic-spring-restoring-force"]
        self.assertIn("つり合いの位置向き", spring["formula"])
        self.assertEqual(spring["spec"]["relation"], "product")

    def test_normalized_hashes_unique_and_disjoint_from_existing_catalog(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 110)
        self.assertEqual(len(set(hashes)), 110)
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        current_ids = {
            f"science-physics-motion-{topic_key}-{mode_key}-{variant:02d}"
            for topic_key, topic in PHYSICS_CENTRIFUGAL_SHM_TOPICS.items()
            for mode_key in topic["modes"]
            for variant, _ in enumerate(topic["seeds"], start=1)
        }
        prior_hashes = {row["content_hash"] for row in catalog if row.get("id") not in current_ids}
        self.assertTrue(set(hashes).isdisjoint(prior_hashes))


if __name__ == "__main__":
    unittest.main()
