import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_electric_field_potential import (
    PHYSICS_ELECTRIC_FIELD_POTENTIAL_PROBLEM_COUNT,
    PHYSICS_ELECTRIC_FIELD_POTENTIAL_TOPICS,
)
from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsElectricFieldPotentialTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_ELECTRIC_FIELD_POTENTIAL_TOPICS.items():
            self.assertEqual(topic.get("generator"), "formula")
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    problems = generate_formula_drill(
                        topic["spec"], seed, PHYSICS_ELECTRIC_FIELD_POTENTIAL_PROBLEM_COUNT,
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
            "electric-coulomb-force-numeric": 30,
            "electric-point-charge-field-numeric": 30,
            "electric-point-charge-potential-numeric": 30,
            "electric-potential-energy-numeric": 30,
        })

    def test_deterministic_regeneration_independent_validation_and_hashes(self):
        hashes = set()
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            topic = PHYSICS_ELECTRIC_FIELD_POTENTIAL_TOPICS[topic_key]
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
                if topic_key == "electric-coulomb-force-numeric":
                    if solve_for == "force":
                        expected = k["scaled_coulomb_constant"] * k["charge_1_magnitude"] * k["charge_2_magnitude"] * k["inverse_square_distance"]
                    elif solve_for == "charge_1_magnitude":
                        expected = k["force"] / (k["scaled_coulomb_constant"] * k["charge_2_magnitude"] * k["inverse_square_distance"])
                    else:
                        expected = k["force"] / (k["scaled_coulomb_constant"] * k["charge_1_magnitude"] * k["charge_2_magnitude"])
                elif topic_key == "electric-point-charge-field-numeric":
                    if solve_for == "electric_field":
                        expected = k["scaled_coulomb_constant"] * k["source_charge_magnitude"] * k["inverse_square_distance"]
                    elif solve_for == "source_charge_magnitude":
                        expected = k["electric_field"] / (k["scaled_coulomb_constant"] * k["inverse_square_distance"])
                    else:
                        expected = k["electric_field"] / (k["scaled_coulomb_constant"] * k["source_charge_magnitude"])
                elif topic_key == "electric-point-charge-potential-numeric":
                    if solve_for == "electric_potential":
                        expected = k["scaled_coulomb_constant"] * k["source_charge"] * k["inverse_distance"]
                    elif solve_for == "source_charge":
                        expected = k["electric_potential"] / (k["scaled_coulomb_constant"] * k["inverse_distance"])
                    else:
                        expected = k["electric_potential"] / (k["scaled_coulomb_constant"] * k["source_charge"])
                else:
                    if solve_for == "potential_energy":
                        expected = k["charge"] * k["electric_potential"]
                    elif solve_for == "charge":
                        expected = k["potential_energy"] / k["electric_potential"]
                    else:
                        expected = k["potential_energy"] / k["charge"]
                self.assertAlmostEqual(problem["answer"], expected, msg=(topic_key, mode_key, seed))
                self.assertAlmostEqual(problem["answer_spec"]["value"], expected)

    def test_curriculum_conventions_units_and_signs_are_visible(self):
        text = json.dumps(PHYSICS_ELECTRIC_FIELD_POTENTIAL_TOPICS, ensure_ascii=False)
        for token in [
            "k≈9.0×10^9", "1/r²", "電界の大きさ", "無限遠を電位0",
            "QとVの符号は一致", "U=qV", "μC", "kV", "mJ",
        ]:
            self.assertIn(token, text)
        self.assertTrue(all(topic["unit"] == "電気と磁気：電場・電位" for topic in PHYSICS_ELECTRIC_FIELD_POTENTIAL_TOPICS.values()))

    def test_physical_domains_and_sign_rules(self):
        for topic_key, _, _, _, problems in self.generated_batches():
            for problem in problems:
                if topic_key in {"electric-coulomb-force-numeric", "electric-point-charge-field-numeric"}:
                    self.assertGreater(problem["answer"], 0)
                if "inverse_square_distance" in problem["known"]:
                    self.assertGreater(problem["known"]["inverse_square_distance"], 0)
                if "inverse_distance" in problem["known"]:
                    self.assertGreater(problem["known"]["inverse_distance"], 0)
                if topic_key == "electric-point-charge-potential-numeric":
                    if problem["solve_for"] == "electric_potential":
                        self.assertEqual(problem["answer"] > 0, problem["known"]["source_charge"] > 0)
                    if problem["solve_for"] == "inverse_distance":
                        self.assertGreater(problem["answer"], 0)

    def test_corrupted_numeric_answer_is_rejected(self):
        topic = PHYSICS_ELECTRIC_FIELD_POTENTIAL_TOPICS["electric-potential-energy-numeric"]
        mode = topic["modes"]["basic-energy"]
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
            for topic_key, topic in PHYSICS_ELECTRIC_FIELD_POTENTIAL_TOPICS.items()
            for mode_key in topic["modes"]
            for variant, _ in enumerate(topic["seeds"], start=1)
        }
        prior_hashes = {row["content_hash"] for row in catalog if row.get("id") not in current_ids}
        self.assertTrue(set(hashes).isdisjoint(prior_hashes))


if __name__ == "__main__":
    unittest.main()
