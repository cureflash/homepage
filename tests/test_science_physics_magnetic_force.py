import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_magnetic_force import PHYSICS_MAGNETIC_FORCE_PROBLEM_COUNT, PHYSICS_MAGNETIC_FORCE_TOPICS
from scripts.science_worksheet_helpers import generate_formula_drill, generate_retrieval_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsMagneticForceTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_MAGNETIC_FORCE_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    if topic["generator"] == "retrieval":
                        problems = generate_retrieval_drill(mode["spec"], seed, PHYSICS_MAGNETIC_FORCE_PROBLEM_COUNT, mode=mode_key)
                    else:
                        problems = generate_formula_drill(topic["spec"], seed, PHYSICS_MAGNETIC_FORCE_PROBLEM_COUNT, solve_for=mode["solve_for"])
                    batches.append((topic_key, mode_key, variant, seed, problems))
        return batches

    def test_three_checkpoints_total_120_variants(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 120)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))
        counts = {}
        for topic_key, *_ in batches:
            counts[topic_key] = counts.get(topic_key, 0) + 1
        self.assertEqual(counts, {
            "magnetic-force-wire-perpendicular-numeric": 40,
            "magnetic-force-lorentz-perpendicular-numeric": 40,
            "magnetic-force-core-concepts": 40,
        })

    def test_deterministic_regeneration_independent_validation_and_hashes(self):
        hashes = set()
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            topic = PHYSICS_MAGNETIC_FORCE_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            if topic["generator"] == "retrieval":
                regenerated = generate_retrieval_drill(mode["spec"], seed, 20, mode=mode_key)
            else:
                regenerated = generate_formula_drill(topic["spec"], seed, 20, solve_for=mode["solve_for"])
            self.assertEqual(problems, regenerated, (topic_key, mode_key, variant))
            validate(problems)
            for problem in problems:
                self.assertTrue(validate_science_problem(problem))
            digest = normalized_hash(problems)
            self.assertNotIn(digest, hashes)
            hashes.add(digest)
        self.assertEqual(len(hashes), 120)

    def test_numeric_visible_values_recompute_answers(self):
        for topic_key, mode_key, _, seed, problems in self.generated_batches():
            if topic_key == "magnetic-force-core-concepts":
                continue
            for problem in problems:
                k = problem["known"]
                solve_for = problem["solve_for"]
                if topic_key == "magnetic-force-wire-perpendicular-numeric":
                    if solve_for == "force":
                        expected = k["magnetic_flux_density"] * k["current"] * k["wire_length"]
                    elif solve_for == "magnetic_flux_density":
                        expected = k["force"] / (k["current"] * k["wire_length"])
                    elif solve_for == "current":
                        expected = k["force"] / (k["magnetic_flux_density"] * k["wire_length"])
                    else:
                        expected = k["force"] / (k["magnetic_flux_density"] * k["current"])
                else:
                    if solve_for == "force":
                        expected = k["charge_magnitude"] * k["speed"] * k["magnetic_flux_density"]
                    elif solve_for == "charge_magnitude":
                        expected = k["force"] / (k["speed"] * k["magnetic_flux_density"])
                    elif solve_for == "speed":
                        expected = k["force"] / (k["charge_magnitude"] * k["magnetic_flux_density"])
                    else:
                        expected = k["force"] / (k["charge_magnitude"] * k["speed"])
                self.assertAlmostEqual(problem["answer"], expected, msg=(topic_key, mode_key, seed))
                self.assertAlmostEqual(problem["answer_spec"]["value"], expected)

    def test_curriculum_scope_units_and_conventions_visible(self):
        text = json.dumps(PHYSICS_MAGNETIC_FORCE_TOPICS, ensure_ascii=False)
        for token in [
            "F=BIl", "F=|q|vB", "T（テスラ）", "ローレンツ力",
            "μC", "μN", "両方に垂直", "平行", "磁場中の力",
        ]:
            self.assertIn(token, text)
        self.assertTrue(all(topic["unit"] == "電気と磁気：磁場中の力" for topic in PHYSICS_MAGNETIC_FORCE_TOPICS.values()))

    def test_numeric_physical_domains(self):
        for topic_key, _, _, _, problems in self.generated_batches():
            if topic_key == "magnetic-force-core-concepts":
                continue
            for problem in problems:
                self.assertGreater(problem["answer"], 0)
                for value in problem["known"].values():
                    self.assertGreater(value, 0)

    def test_corrupted_numeric_answer_is_rejected(self):
        topic = PHYSICS_MAGNETIC_FORCE_TOPICS["magnetic-force-wire-perpendicular-numeric"]
        mode = topic["modes"]["basic-force"]
        problem = generate_formula_drill(topic["spec"], topic["seeds"][0], 1, solve_for=mode["solve_for"])[0]
        bad = copy.deepcopy(problem)
        bad["answer"] += 1
        with self.assertRaises(AssertionError):
            validate_science_problem(bad)

    def test_reverse_retrieval_prompts_are_finite(self):
        topic = PHYSICS_MAGNETIC_FORCE_TOPICS["magnetic-force-core-concepts"]
        mode = topic["modes"]["reverse"]
        problems = generate_retrieval_drill(mode["spec"], topic["seeds"][0], 20, mode="reverse")
        for problem in problems:
            self.assertEqual(problem["answer_spec"]["type"], "accepted-set")
            self.assertTrue(problem["answer_spec"]["values"])

    def test_normalized_hashes_unique_and_disjoint_from_existing_catalog(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 120)
        self.assertEqual(len(set(hashes)), 120)
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        current_ids = {
            f"science-physics-motion-{topic_key}-{mode_key}-{variant:02d}"
            for topic_key, topic in PHYSICS_MAGNETIC_FORCE_TOPICS.items()
            for mode_key in topic["modes"]
            for variant, _ in enumerate(topic["seeds"], start=1)
        }
        prior_hashes = {row["content_hash"] for row in catalog if row.get("id") not in current_ids}
        self.assertTrue(set(hashes).isdisjoint(prior_hashes))


if __name__ == "__main__":
    unittest.main()
