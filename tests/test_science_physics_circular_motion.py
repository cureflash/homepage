import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_circular_motion import PHYSICS_CIRCULAR_MOTION_PROBLEM_COUNT, PHYSICS_CIRCULAR_MOTION_TOPICS
from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsCircularMotionTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_CIRCULAR_MOTION_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    problems = generate_formula_drill(topic["spec"], seed, PHYSICS_CIRCULAR_MOTION_PROBLEM_COUNT, solve_for=mode["solve_for"])
                    batches.append((topic_key, mode_key, variant, seed, problems))
        return batches

    def test_four_checkpoints_total_one_hundred_twenty_variants(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 120)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))
        counts = {key: 0 for key in PHYSICS_CIRCULAR_MOTION_TOPICS}
        for topic_key, *_ in batches:
            counts[topic_key] += 1
        self.assertTrue(all(count == 30 for count in counts.values()))

    def test_deterministic_regeneration_and_validation(self):
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            topic = PHYSICS_CIRCULAR_MOTION_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            regenerated = generate_formula_drill(topic["spec"], seed, PHYSICS_CIRCULAR_MOTION_PROBLEM_COUNT, solve_for=mode["solve_for"])
            self.assertEqual(problems, regenerated, (topic_key, mode_key, variant))
            validate(problems)
            for problem in problems:
                self.assertTrue(validate_science_problem(problem))

    def test_independent_visible_value_recalculation(self):
        result_for = {
            "circular-linear-speed-angular-speed-radius": "linear_speed",
            "circular-angular-displacement": "angular_displacement",
            "circular-centripetal-acceleration": "centripetal_acceleration",
            "circular-centripetal-force": "centripetal_force",
        }
        input_for = {
            "circular-linear-speed-angular-speed-radius": ("radius", "angular_speed"),
            "circular-angular-displacement": ("angular_speed", "time"),
            "circular-centripetal-acceleration": ("linear_speed", "angular_speed"),
            "circular-centripetal-force": ("mass", "centripetal_acceleration"),
        }
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            result = result_for[topic_key]
            left, right = input_for[topic_key]
            for problem in problems:
                known = problem["known"]
                solve_for = problem["solve_for"]
                if solve_for == result:
                    expected = known[left] * known[right]
                elif solve_for == left:
                    expected = known[result] / known[right]
                else:
                    expected = known[result] / known[left]
                self.assertAlmostEqual(problem["answer"], expected, msg=(topic_key, mode_key, variant))
                self.assertAlmostEqual(problem["answer_spec"]["value"], expected)

    def test_curriculum_quantities_and_directions_are_learner_visible(self):
        speed = PHYSICS_CIRCULAR_MOTION_TOPICS["circular-linear-speed-angular-speed-radius"]
        self.assertIn("v = rω", speed["formula"])
        self.assertEqual(speed["spec"]["variables"]["angular_speed"]["unit"], "rad/s")
        accel = PHYSICS_CIRCULAR_MOTION_TOPICS["circular-centripetal-acceleration"]
        force = PHYSICS_CIRCULAR_MOTION_TOPICS["circular-centripetal-force"]
        self.assertIn("中心向き", accel["spec"]["variables"]["centripetal_acceleration"]["label"])
        self.assertIn("中心向き", force["spec"]["variables"]["centripetal_force"]["label"])
        self.assertTrue(all("等速円運動" in topic["title"] for topic in PHYSICS_CIRCULAR_MOTION_TOPICS.values()))
        self.assertTrue(all(topic["unit"] == "様々な運動：円運動と単振動" for topic in PHYSICS_CIRCULAR_MOTION_TOPICS.values()))
        self.assertTrue(all(topic["spec"]["relation"] == "product" for topic in PHYSICS_CIRCULAR_MOTION_TOPICS.values()))

    def test_normalized_hashes_unique_and_disjoint_from_existing_catalog(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 120)
        self.assertEqual(len(set(hashes)), 120)
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        current_ids = {f"science-physics-motion-{topic_key}-{mode_key}-{variant:02d}" for topic_key, topic in PHYSICS_CIRCULAR_MOTION_TOPICS.items() for mode_key in topic["modes"] for variant, _ in enumerate(topic["seeds"], start=1)}
        prior_hashes = {row["content_hash"] for row in catalog if row.get("id") not in current_ids}
        self.assertTrue(set(hashes).isdisjoint(prior_hashes))

    def test_corrupted_answers_are_rejected(self):
        for topic_key, topic in PHYSICS_CIRCULAR_MOTION_TOPICS.items():
            mode = next(iter(topic["modes"].values()))
            problem = generate_formula_drill(topic["spec"], topic["seeds"][0], 1, solve_for=mode["solve_for"])[0]
            bad = copy.deepcopy(problem)
            bad["answer"] += 1
            with self.assertRaises(AssertionError, msg=topic_key):
                validate_science_problem(bad)


if __name__ == "__main__":
    unittest.main()
