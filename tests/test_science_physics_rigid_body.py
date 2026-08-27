import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_rigid_body import PHYSICS_RIGID_BODY_PROBLEM_COUNT, PHYSICS_RIGID_BODY_TOPICS
from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsRigidBodyTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_RIGID_BODY_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    problems = generate_formula_drill(topic["spec"], seed, PHYSICS_RIGID_BODY_PROBLEM_COUNT, solve_for=mode["solve_for"])
                    batches.append((topic_key, mode_key, variant, seed, problems))
        return batches

    def test_four_checkpoints_total_one_hundred_twenty_variants(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 120)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))
        counts = {key: 0 for key in PHYSICS_RIGID_BODY_TOPICS}
        for topic_key, *_ in batches:
            counts[topic_key] += 1
        self.assertEqual(set(counts.values()), {30})

    def test_deterministic_regeneration_and_validation(self):
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            topic = PHYSICS_RIGID_BODY_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            regenerated = generate_formula_drill(topic["spec"], seed, PHYSICS_RIGID_BODY_PROBLEM_COUNT, solve_for=mode["solve_for"])
            self.assertEqual(problems, regenerated, (topic_key, mode_key, variant))
            validate(problems)
            for problem in problems:
                self.assertTrue(validate_science_problem(problem))

    def test_independent_visible_value_recalculation(self):
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            for problem in problems:
                known = problem["known"]
                solve_for = problem["solve_for"]
                if topic_key == "rigid-body-force-moment":
                    if solve_for == "moment": expected = known["force"] * known["lever_arm"]
                    elif solve_for == "force": expected = known["moment"] / known["lever_arm"]
                    else: expected = known["moment"] / known["force"]
                elif topic_key == "rigid-body-weight-moment":
                    if solve_for == "moment": expected = known["mass"] * known["gravity"] * known["lever_arm"]
                    elif solve_for == "mass": expected = known["moment"] / (known["gravity"] * known["lever_arm"])
                    else: expected = known["moment"] / (known["mass"] * known["gravity"])
                elif topic_key == "rigid-body-couple-moment":
                    if solve_for == "couple_moment": expected = known["force"] * known["line_separation"]
                    elif solve_for == "force": expected = known["couple_moment"] / known["line_separation"]
                    else: expected = known["couple_moment"] / known["force"]
                elif topic_key == "rigid-body-signed-net-moment":
                    if solve_for == "net_moment": expected = known["counterclockwise_moment"] - known["clockwise_moment"]
                    elif solve_for == "counterclockwise_moment": expected = known["net_moment"] + known["clockwise_moment"]
                    else: expected = known["counterclockwise_moment"] - known["net_moment"]
                else:
                    self.fail(topic_key)
                self.assertAlmostEqual(problem["answer"], expected, msg=(topic_key, mode_key, variant))
                self.assertAlmostEqual(problem["answer_spec"]["value"], expected)

    def test_normalized_hashes_unique_and_disjoint_from_existing_series(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 120)
        self.assertEqual(len(set(hashes)), 120)
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        current_ids = {f"science-physics-motion-{topic_key}-{mode_key}-{variant:02d}" for topic_key, topic in PHYSICS_RIGID_BODY_TOPICS.items() for mode_key in topic["modes"] for variant, _ in enumerate(topic["seeds"], start=1)}
        prior_hashes = {row["content_hash"] for row in catalog if row.get("id") not in current_ids}
        self.assertTrue(set(hashes).isdisjoint(prior_hashes))

    def test_scope_units_geometry_and_sign_convention(self):
        self.assertEqual(set(PHYSICS_RIGID_BODY_TOPICS), {
            "rigid-body-force-moment", "rigid-body-weight-moment", "rigid-body-couple-moment", "rigid-body-signed-net-moment",
        })
        for topic in PHYSICS_RIGID_BODY_TOPICS.values():
            self.assertEqual(topic["unit"], "様々な運動：剛体のつり合い")
            self.assertNotIn("grade", topic)
            self.assertNotIn("school_year", topic)
        self.assertEqual(PHYSICS_RIGID_BODY_TOPICS["rigid-body-force-moment"]["spec"]["relation"], "product")
        self.assertEqual(PHYSICS_RIGID_BODY_TOPICS["rigid-body-weight-moment"]["spec"]["relation"], "product")
        self.assertEqual(PHYSICS_RIGID_BODY_TOPICS["rigid-body-couple-moment"]["spec"]["relation"], "product")
        signed = PHYSICS_RIGID_BODY_TOPICS["rigid-body-signed-net-moment"]
        self.assertEqual(signed["spec"]["relation"], "difference")
        self.assertTrue(all("反時計回りを正" in mode["description"] and "時計回りを負" in mode["description"] for mode in signed["modes"].values()))
        self.assertIn("反時計回りを正", signed["spec"]["variables"]["net_moment"]["label"])
        force_moment = PHYSICS_RIGID_BODY_TOPICS["rigid-body-force-moment"]
        self.assertTrue(all("垂直" in mode["description"] for mode in force_moment["modes"].values()))
        weight_moment = PHYSICS_RIGID_BODY_TOPICS["rigid-body-weight-moment"]
        self.assertEqual(weight_moment["spec"]["variables"]["gravity"]["values"], [9.8])
        couple = PHYSICS_RIGID_BODY_TOPICS["rigid-body-couple-moment"]
        self.assertTrue(all("作用線" in mode["description"] for mode in couple["modes"].values()))
        units = {definition["unit"] for topic in PHYSICS_RIGID_BODY_TOPICS.values() for definition in topic["spec"]["variables"].values() if definition.get("unit")}
        self.assertEqual(units, {"N·m", "N", "m", "kg", "m/s²"})

    def test_signed_net_moment_includes_both_rotation_directions(self):
        topic = PHYSICS_RIGID_BODY_TOPICS["rigid-body-signed-net-moment"]
        values = []
        mode = topic["modes"]["basic-net-moment"]
        for seed in topic["seeds"]:
            problems = generate_formula_drill(topic["spec"], seed, PHYSICS_RIGID_BODY_PROBLEM_COUNT, solve_for=mode["solve_for"])
            values.extend(problem["answer"] for problem in problems)
        self.assertTrue(any(value > 0 for value in values))
        self.assertTrue(any(value < 0 for value in values))
        self.assertTrue(any(value == 0 for value in values))

    def test_corrupted_answers_are_rejected(self):
        for topic_key, topic in PHYSICS_RIGID_BODY_TOPICS.items():
            mode = next(iter(topic["modes"].values()))
            problem = generate_formula_drill(topic["spec"], topic["seeds"][0], 1, solve_for=mode["solve_for"])[0]
            bad = copy.deepcopy(problem)
            bad["answer"] += 1
            with self.assertRaises(AssertionError, msg=topic_key):
                validate_science_problem(bad)


if __name__ == "__main__":
    unittest.main()
