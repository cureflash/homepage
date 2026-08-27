import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_projectile import (
    PHYSICS_PROJECTILE_PROBLEM_COUNT,
    PHYSICS_PROJECTILE_TOPICS,
)
from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsProjectileTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_PROJECTILE_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    problems = generate_formula_drill(
                        topic["spec"], seed, PHYSICS_PROJECTILE_PROBLEM_COUNT,
                        solve_for=mode["solve_for"],
                    )
                    batches.append((topic_key, mode_key, variant, seed, problems))
        return batches

    def test_three_checkpoints_total_ninety_variants(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 90)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))
        counts = {key: 0 for key in PHYSICS_PROJECTILE_TOPICS}
        for topic_key, *_ in batches:
            counts[topic_key] += 1
        self.assertEqual(set(counts.values()), {30})

    def test_deterministic_regeneration_and_validation(self):
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            topic = PHYSICS_PROJECTILE_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            regenerated = generate_formula_drill(
                topic["spec"], seed, PHYSICS_PROJECTILE_PROBLEM_COUNT,
                solve_for=mode["solve_for"],
            )
            self.assertEqual(problems, regenerated, (topic_key, mode_key, variant))
            validate(problems)
            for problem in problems:
                self.assertTrue(validate_science_problem(problem))

    def test_independent_visible_value_recalculation(self):
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            for problem in problems:
                known = problem["known"]
                solve_for = problem["solve_for"]
                if topic_key == "horizontal-projectile-horizontal-motion":
                    if solve_for == "horizontal_displacement":
                        expected = known["horizontal_velocity"] * known["time"]
                    elif solve_for == "horizontal_velocity":
                        expected = known["horizontal_displacement"] / known["time"]
                    else:
                        expected = known["horizontal_displacement"] / known["horizontal_velocity"]
                elif topic_key == "horizontal-projectile-vertical-displacement":
                    if solve_for == "vertical_drop":
                        expected = 0.5 * known["gravity"] * known["time"] ** 2
                    else:
                        expected = (2 * known["vertical_drop"] / known["gravity"]) ** 0.5
                elif topic_key == "horizontal-projectile-vertical-velocity":
                    if solve_for == "vertical_velocity":
                        expected = known["gravity"] * known["time"]
                    else:
                        expected = known["vertical_velocity"] / known["gravity"]
                else:
                    self.fail(topic_key)
                self.assertAlmostEqual(problem["answer"], expected, msg=(topic_key, mode_key, variant))
                self.assertAlmostEqual(problem["answer_spec"]["value"], expected)

    def test_normalized_hashes_unique_and_disjoint_from_existing_series(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 90)
        self.assertEqual(len(set(hashes)), 90)
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        prior_hashes = {
            row["content_hash"] for row in catalog
            if not row.get("id", "").startswith("science-physics-motion-")
        }
        self.assertTrue(set(hashes).isdisjoint(prior_hashes))

    def test_curriculum_scope_and_conditions_are_explicit(self):
        horizontal = PHYSICS_PROJECTILE_TOPICS["horizontal-projectile-horizontal-motion"]
        vertical_drop = PHYSICS_PROJECTILE_TOPICS["horizontal-projectile-vertical-displacement"]
        vertical_velocity = PHYSICS_PROJECTILE_TOPICS["horizontal-projectile-vertical-velocity"]
        self.assertEqual(horizontal["spec"]["relation"], "product")
        self.assertEqual(vertical_drop["spec"]["relation"], "half-product-last-square")
        self.assertEqual(vertical_velocity["spec"]["relation"], "product")
        for topic in PHYSICS_PROJECTILE_TOPICS.values():
            self.assertEqual(topic["unit"], "様々な運動：平面運動と放物運動")
            self.assertNotIn("grade", topic)
            self.assertNotIn("school_year", topic)
            self.assertTrue(all("空気抵抗" in mode["description"] for mode in topic["modes"].values()))
        self.assertEqual(vertical_drop["spec"]["variables"]["gravity"]["values"], [9.8])
        self.assertEqual(vertical_velocity["spec"]["variables"]["gravity"]["values"], [9.8])
        self.assertIn("空気抵抗なし", horizontal["spec"]["variables"]["horizontal_displacement"]["label"])
        self.assertIn("空気抵抗なし", vertical_drop["spec"]["variables"]["vertical_drop"]["label"])
        self.assertIn("空気抵抗なし", vertical_velocity["spec"]["variables"]["vertical_velocity"]["label"])

    def test_expected_units(self):
        units = set()
        for topic in PHYSICS_PROJECTILE_TOPICS.values():
            for definition in topic["spec"]["variables"].values():
                if definition.get("unit"):
                    units.add(definition["unit"])
        self.assertEqual(units, {"m", "s", "m/s", "m/s²"})

    def test_corrupted_answers_are_rejected(self):
        for topic_key, topic in PHYSICS_PROJECTILE_TOPICS.items():
            mode = next(iter(topic["modes"].values()))
            problem = generate_formula_drill(
                topic["spec"], topic["seeds"][0], 1, solve_for=mode["solve_for"]
            )[0]
            bad = copy.deepcopy(problem)
            bad["answer"] += 1
            with self.assertRaises(AssertionError, msg=topic_key):
                validate_science_problem(bad)


if __name__ == "__main__":
    unittest.main()
