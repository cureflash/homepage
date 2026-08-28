import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_ideal_gas import (
    PHYSICS_IDEAL_GAS_PROBLEM_COUNT,
    PHYSICS_IDEAL_GAS_TOPICS,
)
from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsIdealGasTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_IDEAL_GAS_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    problems = generate_formula_drill(
                        topic["spec"], seed, PHYSICS_IDEAL_GAS_PROBLEM_COUNT,
                        solve_for=mode["solve_for"],
                    )
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
            "ideal-gas-state-equation-numeric": 40,
            "boyle-law-numeric": 40,
            "charles-law-numeric": 40,
        })

    def test_deterministic_regeneration_and_independent_validation(self):
        hashes = set()
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            topic = PHYSICS_IDEAL_GAS_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            regenerated = generate_formula_drill(topic["spec"], seed, 20, solve_for=mode["solve_for"])
            self.assertEqual(problems, regenerated, (topic_key, mode_key, variant))
            validate(problems)
            for problem in problems:
                self.assertTrue(validate_science_problem(problem))
                self.assertEqual(problem["answer_spec"]["type"], "numeric")
                self.assertEqual(problem["relation"], "product-over-divisor")
            digest = normalized_hash(problems)
            self.assertNotIn(digest, hashes)
            hashes.add(digest)
        self.assertEqual(len(hashes), 120)

    def test_visible_value_recalculation_for_all_three_equations(self):
        for topic_key, mode_key, _, seed, problems in self.generated_batches():
            for problem in problems:
                known = problem["known"]
                solve_for = problem["solve_for"]
                if topic_key == "ideal-gas-state-equation-numeric":
                    if solve_for == "pressure":
                        expected = known["amount"] * known["gas_constant"] * known["absolute_temperature"] / known["volume"]
                    elif solve_for == "amount":
                        expected = known["pressure"] * known["volume"] / (known["gas_constant"] * known["absolute_temperature"])
                    elif solve_for == "absolute_temperature":
                        expected = known["pressure"] * known["volume"] / (known["amount"] * known["gas_constant"])
                    else:
                        expected = known["amount"] * known["gas_constant"] * known["absolute_temperature"] / known["pressure"]
                elif topic_key == "boyle-law-numeric":
                    if solve_for == "final_pressure":
                        expected = known["initial_pressure"] * known["initial_volume"] / known["final_volume"]
                    elif solve_for == "initial_pressure":
                        expected = known["final_pressure"] * known["final_volume"] / known["initial_volume"]
                    elif solve_for == "initial_volume":
                        expected = known["final_pressure"] * known["final_volume"] / known["initial_pressure"]
                    else:
                        expected = known["initial_pressure"] * known["initial_volume"] / known["final_pressure"]
                else:
                    if solve_for == "final_volume":
                        expected = known["initial_volume"] * known["final_temperature"] / known["initial_temperature"]
                    elif solve_for == "initial_volume":
                        expected = known["final_volume"] * known["initial_temperature"] / known["final_temperature"]
                    elif solve_for == "final_temperature":
                        expected = known["final_volume"] * known["initial_temperature"] / known["initial_volume"]
                    else:
                        expected = known["initial_volume"] * known["final_temperature"] / known["final_volume"]
                self.assertAlmostEqual(problem["answer"], expected, msg=(topic_key, mode_key, seed))
                self.assertAlmostEqual(problem["answer_spec"]["value"], expected)
                self.assertGreater(problem["answer"], 0)

    def test_units_absolute_temperature_and_constant_are_learner_visible(self):
        state = PHYSICS_IDEAL_GAS_TOPICS["ideal-gas-state-equation-numeric"]
        state_text = json.dumps(state, ensure_ascii=False)
        for token in ["pV = nRT", "絶対温度", "8.31", "kPa", "L", "mol", "K"]:
            self.assertIn(token, state_text)
        self.assertEqual(state["spec"]["variables"]["gas_constant"]["values"], [8.31])
        self.assertNotIn("℃", state_text)

        boyle_text = json.dumps(PHYSICS_IDEAL_GAS_TOPICS["boyle-law-numeric"], ensure_ascii=False)
        self.assertIn("絶対温度一定", boyle_text)
        self.assertIn("p₁V₁ = p₂V₂", boyle_text)

        charles_text = json.dumps(PHYSICS_IDEAL_GAS_TOPICS["charles-law-numeric"], ensure_ascii=False)
        self.assertIn("圧力一定", charles_text)
        self.assertIn("絶対温度", charles_text)
        self.assertIn("V₁/T₁ = V₂/T₂", charles_text)
        self.assertNotIn("℃", charles_text)

    def test_corrupted_numeric_answer_is_rejected(self):
        topic = PHYSICS_IDEAL_GAS_TOPICS["ideal-gas-state-equation-numeric"]
        mode = topic["modes"]["basic-pressure"]
        problem = generate_formula_drill(topic["spec"], topic["seeds"][0], 1, solve_for=mode["solve_for"])[0]
        bad = copy.deepcopy(problem)
        bad["answer"] += 1
        with self.assertRaises(AssertionError):
            validate_science_problem(bad)

    def test_all_generated_physical_values_are_positive(self):
        for *_, problems in self.generated_batches():
            for problem in problems:
                self.assertGreater(problem["answer"], 0)
                for value in problem["known"].values():
                    self.assertGreater(value, 0)

    def test_normalized_hashes_unique_and_disjoint_from_existing_catalog(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 120)
        self.assertEqual(len(set(hashes)), 120)
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        current_ids = {
            f"science-physics-motion-{topic_key}-{mode_key}-{variant:02d}"
            for topic_key, topic in PHYSICS_IDEAL_GAS_TOPICS.items()
            for mode_key in topic["modes"]
            for variant, _ in enumerate(topic["seeds"], start=1)
        }
        prior_hashes = {row["content_hash"] for row in catalog if row.get("id") not in current_ids}
        self.assertTrue(set(hashes).isdisjoint(prior_hashes))


if __name__ == "__main__":
    unittest.main()
