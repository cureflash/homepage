import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_circular_period import PHYSICS_CIRCULAR_PERIOD_PROBLEM_COUNT, PHYSICS_CIRCULAR_PERIOD_TOPICS
from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsCircularPeriodTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_CIRCULAR_PERIOD_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    problems = generate_formula_drill(topic["spec"], seed, PHYSICS_CIRCULAR_PERIOD_PROBLEM_COUNT, solve_for=mode["solve_for"])
                    batches.append((topic_key, mode_key, variant, seed, problems))
        return batches

    def test_one_checkpoint_total_twenty_variants(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 20)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))

    def test_deterministic_regeneration_and_validation(self):
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            topic = PHYSICS_CIRCULAR_PERIOD_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            regenerated = generate_formula_drill(topic["spec"], seed, PHYSICS_CIRCULAR_PERIOD_PROBLEM_COUNT, solve_for=mode["solve_for"])
            self.assertEqual(problems, regenerated, (topic_key, mode_key, variant))
            validate(problems)
            for problem in problems:
                self.assertTrue(validate_science_problem(problem))

    def test_independent_visible_value_recalculation(self):
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            for problem in problems:
                known = problem["known"]
                self.assertEqual(known["pi"], 3.14)
                if problem["solve_for"] == "angular_speed":
                    expected = 2 * known["pi"] / known["period"]
                else:
                    expected = 2 * known["pi"] / known["angular_speed"]
                self.assertAlmostEqual(problem["answer"], expected, msg=(topic_key, mode_key, variant))
                self.assertAlmostEqual(problem["answer_spec"]["value"], expected)

    def test_pi_rounding_contract_is_learner_visible(self):
        topic = PHYSICS_CIRCULAR_PERIOD_TOPICS["circular-period-angular-speed"]
        self.assertEqual(topic["spec"]["relation"], "double-quotient")
        self.assertIn("π = 3.14", topic["formula"])
        self.assertEqual(topic["spec"]["variables"]["pi"]["values"], [3.14])
        self.assertIn("3.14", topic["spec"]["variables"]["pi"]["label"])
        self.assertTrue(all("3.14" in mode["description"] for mode in topic["modes"].values()))
        self.assertEqual(topic["unit"], "様々な運動：円運動と単振動")

    def test_normalized_hashes_unique_and_disjoint_from_existing_catalog(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 20)
        self.assertEqual(len(set(hashes)), 20)
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        current_ids = {f"science-physics-motion-{topic_key}-{mode_key}-{variant:02d}" for topic_key, topic in PHYSICS_CIRCULAR_PERIOD_TOPICS.items() for mode_key in topic["modes"] for variant, _ in enumerate(topic["seeds"], start=1)}
        prior_hashes = {row["content_hash"] for row in catalog if row.get("id") not in current_ids}
        self.assertTrue(set(hashes).isdisjoint(prior_hashes))

    def test_corrupted_answers_are_rejected(self):
        topic = PHYSICS_CIRCULAR_PERIOD_TOPICS["circular-period-angular-speed"]
        for mode in topic["modes"].values():
            problem = generate_formula_drill(topic["spec"], topic["seeds"][0], 1, solve_for=mode["solve_for"])[0]
            bad = copy.deepcopy(problem)
            bad["answer"] += 1
            with self.assertRaises(AssertionError):
                validate_science_problem(bad)


if __name__ == "__main__":
    unittest.main()
