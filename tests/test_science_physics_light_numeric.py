import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_light_numeric import (
    PHYSICS_LIGHT_NUMERIC_PROBLEM_COUNT,
    PHYSICS_LIGHT_NUMERIC_TOPICS,
)
from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsLightNumericTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_LIGHT_NUMERIC_TOPICS.items():
            self.assertEqual(topic.get("generator"), "formula")
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    problems = generate_formula_drill(
                        topic["spec"], seed, PHYSICS_LIGHT_NUMERIC_PROBLEM_COUNT,
                        solve_for=mode["solve_for"],
                    )
                    batches.append((topic_key, mode_key, variant, seed, problems))
        return batches

    def test_four_checkpoints_total_120_variants(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 120)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))
        counts = {}
        for topic_key, *_ in batches:
            counts[topic_key] = counts.get(topic_key, 0) + 1
        self.assertEqual(counts, {
            "light-reflection-angle-numeric": 10,
            "light-refractive-index-speed-numeric": 20,
            "light-snell-law-sine-numeric": 30,
            "light-young-fringe-spacing-numeric": 30,
            "light-diffraction-grating-numeric": 30,
        })

    def test_deterministic_regeneration_independent_validation_and_hashes(self):
        hashes = set()
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            topic = PHYSICS_LIGHT_NUMERIC_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            regenerated = generate_formula_drill(topic["spec"], seed, 20, solve_for=mode["solve_for"])
            self.assertEqual(problems, regenerated, (topic_key, mode_key, variant))
            validate(problems)
            for problem in problems:
                self.assertTrue(validate_science_problem(problem))
                self.assertEqual(problem["answer_spec"]["type"], "numeric")
            digest = normalized_hash(problems)
            self.assertNotIn(digest, hashes)
            hashes.add(digest)
        self.assertEqual(len(hashes), 120)

    def test_learner_visible_values_recompute_every_answer(self):
        for topic_key, mode_key, _, seed, problems in self.generated_batches():
            for problem in problems:
                k = problem["known"]
                solve_for = problem["solve_for"]
                if topic_key == "light-reflection-angle-numeric":
                    expected = k["incident_angle"]
                elif topic_key == "light-refractive-index-speed-numeric":
                    if solve_for == "refractive_index":
                        expected = k["vacuum_speed"] / k["medium_speed"]
                    else:
                        expected = k["vacuum_speed"] / k["refractive_index"]
                elif topic_key == "light-snell-law-sine-numeric":
                    if solve_for == "sin_r":
                        expected = k["refractive_index_1"] * k["sin_i"] / k["refractive_index_2"]
                    elif solve_for == "refractive_index_2":
                        expected = k["refractive_index_1"] * k["sin_i"] / k["sin_r"]
                    else:
                        expected = k["refractive_index_2"] * k["sin_r"] / k["refractive_index_1"]
                elif topic_key == "light-young-fringe-spacing-numeric":
                    if solve_for == "fringe_spacing":
                        expected = k["wavelength"] * k["screen_distance"] / k["slit_spacing"]
                    elif solve_for == "screen_distance":
                        expected = k["fringe_spacing"] * k["slit_spacing"] / k["wavelength"]
                    else:
                        expected = k["wavelength"] * k["screen_distance"] / k["fringe_spacing"]
                else:
                    if solve_for == "wavelength":
                        expected = k["grating_spacing"] * k["sin_theta"] / k["order"]
                    elif solve_for == "grating_spacing":
                        expected = k["wavelength"] * k["order"] / k["sin_theta"]
                    else:
                        expected = k["wavelength"] * k["order"] / k["grating_spacing"]
                self.assertAlmostEqual(problem["answer"], expected, msg=(topic_key, mode_key, seed))
                self.assertAlmostEqual(problem["answer_spec"]["value"], expected)

    def test_angle_units_formulas_and_no_hidden_inverse_trig(self):
        text = json.dumps(PHYSICS_LIGHT_NUMERIC_TOPICS, ensure_ascii=False)
        for token in [
            "法線", "n = c / v", "3.0×10^8", "n1 sin i = n2 sin r",
            "sin i", "sin r", "Δx = λL/d", "d sin θ = mλ", "sin θ",
        ]:
            self.assertIn(token, text)
        self.assertNotIn("arcsin", text)
        self.assertNotIn("asin", text)
        self.assertTrue(all(topic["unit"] == "波：光" for topic in PHYSICS_LIGHT_NUMERIC_TOPICS.values()))

    def test_physical_domains(self):
        for topic_key, _, _, _, problems in self.generated_batches():
            for problem in problems:
                self.assertGreater(problem["answer"], 0)
                if topic_key == "light-snell-law-sine-numeric":
                    if problem["solve_for"] == "sin_r":
                        self.assertLessEqual(problem["answer"], 1)
                    self.assertLessEqual(problem["known"].get("sin_i", 1), 1)
                    self.assertLessEqual(problem["known"].get("sin_r", 1), 1)
                if topic_key == "light-diffraction-grating-numeric":
                    self.assertLessEqual(problem["known"].get("sin_theta", 1), 1)

    def test_corrupted_numeric_answer_is_rejected(self):
        topic = PHYSICS_LIGHT_NUMERIC_TOPICS["light-young-fringe-spacing-numeric"]
        mode = topic["modes"]["basic-fringe-spacing"]
        problem = generate_formula_drill(topic["spec"], topic["seeds"][0], 1, solve_for=mode["solve_for"])[0]
        bad = copy.deepcopy(problem)
        bad["answer"] += 1
        with self.assertRaises(AssertionError):
            validate_science_problem(bad)

    def test_normalized_hashes_unique_and_disjoint_from_existing_catalog(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 120)
        self.assertEqual(len(set(hashes)), 120)
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        current_ids = {
            f"science-physics-motion-{topic_key}-{mode_key}-{variant:02d}"
            for topic_key, topic in PHYSICS_LIGHT_NUMERIC_TOPICS.items()
            for mode_key in topic["modes"]
            for variant, _ in enumerate(topic["seeds"], start=1)
        }
        prior_hashes = {row["content_hash"] for row in catalog if row.get("id") not in current_ids}
        self.assertTrue(set(hashes).isdisjoint(prior_hashes))


if __name__ == "__main__":
    unittest.main()
