import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_projectile import PHYSICS_PROJECTILE_PROBLEM_COUNT, PHYSICS_PROJECTILE_TOPICS
from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsProjectileTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_PROJECTILE_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    problems = generate_formula_drill(topic["spec"], seed, PHYSICS_PROJECTILE_PROBLEM_COUNT, solve_for=mode["solve_for"])
                    batches.append((topic_key, mode_key, variant, seed, problems))
        return batches

    def test_eight_checkpoints_total_two_hundred_forty_variants(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 240)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))
        counts = {key: 0 for key in PHYSICS_PROJECTILE_TOPICS}
        for topic_key, *_ in batches:
            counts[topic_key] += 1
        self.assertEqual(set(counts.values()), {30})

    def test_deterministic_regeneration_and_validation(self):
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            topic = PHYSICS_PROJECTILE_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            regenerated = generate_formula_drill(topic["spec"], seed, PHYSICS_PROJECTILE_PROBLEM_COUNT, solve_for=mode["solve_for"])
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
                    expected = known["horizontal_velocity"] * known["time"] if solve_for == "horizontal_displacement" else (known["horizontal_displacement"] / known["time"] if solve_for == "horizontal_velocity" else known["horizontal_displacement"] / known["horizontal_velocity"])
                elif topic_key == "horizontal-projectile-vertical-displacement":
                    expected = 0.5 * known["gravity"] * known["time"] ** 2 if solve_for == "vertical_drop" else (2 * known["vertical_drop"] / known["gravity"]) ** 0.5
                elif topic_key == "horizontal-projectile-vertical-velocity":
                    expected = known["gravity"] * known["time"] if solve_for == "vertical_velocity" else known["vertical_velocity"] / known["gravity"]
                elif topic_key == "oblique-projectile-initial-horizontal-component":
                    if solve_for == "initial_horizontal_velocity": expected = known["initial_speed"] * known["cos_theta"]
                    elif solve_for == "initial_speed": expected = known["initial_horizontal_velocity"] / known["cos_theta"]
                    else: expected = known["initial_horizontal_velocity"] / known["initial_speed"]
                elif topic_key == "oblique-projectile-initial-vertical-component":
                    if solve_for == "initial_vertical_velocity": expected = known["initial_speed"] * known["sin_theta"]
                    elif solve_for == "initial_speed": expected = known["initial_vertical_velocity"] / known["sin_theta"]
                    else: expected = known["initial_vertical_velocity"] / known["initial_speed"]
                elif topic_key == "oblique-projectile-vertical-velocity":
                    if solve_for == "vertical_velocity": expected = known["initial_vertical_velocity"] + known["vertical_acceleration"] * known["time"]
                    elif solve_for == "initial_vertical_velocity": expected = known["vertical_velocity"] - known["vertical_acceleration"] * known["time"]
                    else: expected = (known["vertical_velocity"] - known["initial_vertical_velocity"]) / known["vertical_acceleration"]
                elif topic_key == "oblique-projectile-vertical-displacement":
                    if solve_for == "vertical_displacement":
                        expected = known["initial_vertical_velocity"] * known["time"] + 0.5 * known["vertical_acceleration"] * known["time"] ** 2
                    else:
                        expected = (known["vertical_displacement"] - 0.5 * known["vertical_acceleration"] * known["time"] ** 2) / known["time"]
                elif topic_key == "oblique-projectile-time-to-highest-point":
                    expected = known["initial_vertical_velocity"] / known["gravity"] if solve_for == "time_to_highest_point" else known["gravity"] * known["time_to_highest_point"]
                else:
                    self.fail(topic_key)
                self.assertAlmostEqual(problem["answer"], expected, msg=(topic_key, mode_key, variant))
                self.assertAlmostEqual(problem["answer_spec"]["value"], expected)

    def test_normalized_hashes_unique_and_disjoint_from_existing_series(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 240)
        self.assertEqual(len(set(hashes)), 240)
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        current_ids = {f"science-physics-motion-{topic_key}-{mode_key}-{variant:02d}" for topic_key, topic in PHYSICS_PROJECTILE_TOPICS.items() for mode_key in topic["modes"] for variant, _ in enumerate(topic["seeds"], start=1)}
        prior_hashes = {row["content_hash"] for row in catalog if row.get("id") not in current_ids}
        self.assertTrue(set(hashes).isdisjoint(prior_hashes))

    def test_curriculum_scope_and_conditions_are_explicit(self):
        self.assertEqual(PHYSICS_PROJECTILE_TOPICS["oblique-projectile-initial-horizontal-component"]["spec"]["relation"], "product")
        self.assertEqual(PHYSICS_PROJECTILE_TOPICS["oblique-projectile-initial-vertical-component"]["spec"]["relation"], "product")
        velocity = PHYSICS_PROJECTILE_TOPICS["oblique-projectile-vertical-velocity"]
        self.assertEqual(velocity["spec"]["relation"], "offset-product")
        self.assertEqual(velocity["spec"]["variables"]["vertical_acceleration"]["values"], [-9.8])
        displacement = PHYSICS_PROJECTILE_TOPICS["oblique-projectile-vertical-displacement"]
        self.assertEqual(displacement["spec"]["relation"], "linear-plus-half-quadratic")
        self.assertEqual(displacement["spec"]["variables"]["vertical_acceleration"]["values"], [-9.8])
        self.assertNotIn("reverse-time", displacement["modes"])
        peak_time = PHYSICS_PROJECTILE_TOPICS["oblique-projectile-time-to-highest-point"]
        self.assertEqual(peak_time["spec"]["relation"], "product")
        self.assertEqual(peak_time["spec"]["variables"]["gravity"]["values"], [9.8])
        for topic in PHYSICS_PROJECTILE_TOPICS.values():
            self.assertEqual(topic["unit"], "様々な運動：平面運動と放物運動")
            self.assertNotIn("grade", topic)
            self.assertNotIn("school_year", topic)
            self.assertTrue(all("空気抵抗" in mode["description"] for mode in topic["modes"].values()))
        ratios = {0.5, 0.7071067811865476, 0.8660254037844386}
        self.assertEqual(set(PHYSICS_PROJECTILE_TOPICS["oblique-projectile-initial-horizontal-component"]["spec"]["variables"]["cos_theta"]["values"]), ratios)
        self.assertEqual(set(PHYSICS_PROJECTILE_TOPICS["oblique-projectile-initial-vertical-component"]["spec"]["variables"]["sin_theta"]["values"]), ratios)

    def test_vertical_displacement_stays_in_basic_positive_range(self):
        topic = PHYSICS_PROJECTILE_TOPICS["oblique-projectile-vertical-displacement"]
        for mode in topic["modes"].values():
            for seed in topic["seeds"]:
                problems = generate_formula_drill(topic["spec"], seed, PHYSICS_PROJECTILE_PROBLEM_COUNT, solve_for=mode["solve_for"])
                for problem in problems:
                    if "vertical_displacement" in problem["known"]:
                        self.assertGreater(problem["known"]["vertical_displacement"], 0)
                    if problem["solve_for"] == "vertical_displacement":
                        self.assertGreater(problem["answer"], 0)

    def test_expected_units(self):
        units = {definition["unit"] for topic in PHYSICS_PROJECTILE_TOPICS.values() for definition in topic["spec"]["variables"].values() if definition.get("unit")}
        self.assertEqual(units, {"m", "s", "m/s", "m/s²"})

    def test_corrupted_answers_are_rejected(self):
        for topic_key, topic in PHYSICS_PROJECTILE_TOPICS.items():
            mode = next(iter(topic["modes"].values()))
            problem = generate_formula_drill(topic["spec"], topic["seeds"][0], 1, solve_for=mode["solve_for"])[0]
            bad = copy.deepcopy(problem)
            bad["answer"] += 1
            with self.assertRaises(AssertionError, msg=topic_key):
                validate_science_problem(bad)


if __name__ == "__main__":
    unittest.main()
