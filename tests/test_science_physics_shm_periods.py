import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_shm_periods import (
    PHYSICS_SHM_PERIODS_PROBLEM_COUNT,
    PHYSICS_SHM_PERIODS_TOPICS,
)
from scripts.science_worksheet_helpers import generate_formula_drill, generate_retrieval_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsShmPeriodsTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_SHM_PERIODS_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    if topic.get("generator") == "retrieval":
                        problems = generate_retrieval_drill(mode["spec"], seed, PHYSICS_SHM_PERIODS_PROBLEM_COUNT, mode=mode_key)
                    else:
                        problems = generate_formula_drill(topic["spec"], seed, PHYSICS_SHM_PERIODS_PROBLEM_COUNT, solve_for=mode["solve_for"])
                    batches.append((topic_key, mode_key, variant, seed, problems))
        return batches

    def test_five_checkpoints_total_130_variants(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 130)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))
        counts = {}
        for topic_key, *_ in batches:
            counts[topic_key] = counts.get(topic_key, 0) + 1
        self.assertEqual(counts, {
            "simple-harmonic-acceleration-displacement-magnitude": 30,
            "spring-pendulum-period-concepts": 40,
            "simple-pendulum-period-concepts": 40,
            "spring-pendulum-period-numeric": 10,
            "simple-pendulum-period-numeric": 10,
        })

    def test_deterministic_regeneration_and_validation(self):
        hashes = set()
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            topic = PHYSICS_SHM_PERIODS_TOPICS[topic_key]
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
        self.assertEqual(len(hashes), 130)

    def test_acceleration_visible_value_recalculation(self):
        topic = PHYSICS_SHM_PERIODS_TOPICS["simple-harmonic-acceleration-displacement-magnitude"]
        self.assertEqual(topic["spec"]["relation"], "product")
        self.assertIn("大きさのみ", topic["formula"])
        self.assertIn("つり合いの位置向き", topic["formula"])
        for mode_key, mode in topic["modes"].items():
            for seed in topic["seeds"]:
                problems = generate_formula_drill(topic["spec"], seed, 20, solve_for=mode["solve_for"])
                for problem in problems:
                    known = problem["known"]
                    if problem["solve_for"] == "acceleration_magnitude":
                        expected = known["angular_speed_squared"] * known["displacement_magnitude"]
                    elif problem["solve_for"] == "angular_speed_squared":
                        expected = known["acceleration_magnitude"] / known["displacement_magnitude"]
                    else:
                        expected = known["acceleration_magnitude"] / known["angular_speed_squared"]
                    self.assertAlmostEqual(problem["answer"], expected, msg=(mode_key, seed))
                    self.assertAlmostEqual(problem["answer_spec"]["value"], expected)

    def test_reverse_retrieval_prompts_are_unique(self):
        for topic_key in ("spring-pendulum-period-concepts", "simple-pendulum-period-concepts"):
            items = PHYSICS_SHM_PERIODS_TOPICS[topic_key]["modes"]["reverse"]["spec"]["items"]
            seen = {}
            for item in items:
                for shown in item["right"]:
                    self.assertNotIn(shown, seen, (topic_key, shown, seen.get(shown), item["left"]))
                    seen[shown] = item["left"]

    def test_period_formula_contracts_are_learner_visible(self):
        spring_text = json.dumps(PHYSICS_SHM_PERIODS_TOPICS["spring-pendulum-period-concepts"], ensure_ascii=False)
        self.assertIn("T = 2π√(m/k)", spring_text)
        self.assertIn("質量m", spring_text)
        self.assertIn("ばね定数k", spring_text)
        pendulum_text = json.dumps(PHYSICS_SHM_PERIODS_TOPICS["simple-pendulum-period-concepts"], ensure_ascii=False)
        self.assertIn("T = 2π√(l/g)", pendulum_text)
        self.assertIn("振れ角が十分小さい", pendulum_text)
        self.assertIn("質量", pendulum_text)
        self.assertIn("重力加速度", pendulum_text)


    def test_numeric_period_visible_value_recalculation_and_contracts(self):
        for topic_key, numerator_name, divisor_name in (
            ("spring-pendulum-period-numeric", "mass", "spring_constant"),
            ("simple-pendulum-period-numeric", "length", "gravity"),
        ):
            topic = PHYSICS_SHM_PERIODS_TOPICS[topic_key]
            self.assertEqual(topic["spec"]["relation"], "two-pi-sqrt-ratio")
            text = json.dumps(topic, ensure_ascii=False)
            self.assertIn("π=3.14", text)
            self.assertIn("0.001 s", text)
            if topic_key.startswith("simple-pendulum"):
                self.assertIn("振れ角が十分小さい", text)
            mode = topic["modes"]["basic-period"]
            for seed in topic["seeds"]:
                for problem in generate_formula_drill(topic["spec"], seed, 20, solve_for=mode["solve_for"]):
                    known = problem["known"]
                    expected = round(2 * known["pi_value"] * (known[numerator_name] / known[divisor_name]) ** 0.5, 3)
                    self.assertEqual(problem["answer"], expected)
                    self.assertEqual(problem["answer_spec"]["value"], expected)
                    self.assertTrue(validate_science_problem(problem))

    def test_corrupted_answers_are_rejected(self):
        formula_topic = PHYSICS_SHM_PERIODS_TOPICS["simple-harmonic-acceleration-displacement-magnitude"]
        mode = formula_topic["modes"]["basic-acceleration"]
        problem = generate_formula_drill(formula_topic["spec"], formula_topic["seeds"][0], 1, solve_for=mode["solve_for"])[0]
        bad = copy.deepcopy(problem)
        bad["answer"] += 1
        with self.assertRaises(AssertionError):
            validate_science_problem(bad)

        retrieval_topic = PHYSICS_SHM_PERIODS_TOPICS["spring-pendulum-period-concepts"]
        mode = retrieval_topic["modes"]["fill"]
        problem = generate_retrieval_drill(mode["spec"], retrieval_topic["seeds"][0], 1, mode="fill")[0]
        bad = copy.deepcopy(problem)
        bad["answer"] = "誤答"
        with self.assertRaises(AssertionError):
            validate_science_problem(bad)

    def test_normalized_hashes_unique_and_disjoint_from_existing_catalog(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 130)
        self.assertEqual(len(set(hashes)), 110)
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        current_ids = {
            f"science-physics-motion-{topic_key}-{mode_key}-{variant:02d}"
            for topic_key, topic in PHYSICS_SHM_PERIODS_TOPICS.items()
            for mode_key in topic["modes"]
            for variant, _ in enumerate(topic["seeds"], start=1)
        }
        prior_hashes = {row["content_hash"] for row in catalog if row.get("id") not in current_ids}
        self.assertTrue(set(hashes).isdisjoint(prior_hashes))


if __name__ == "__main__":
    unittest.main()
