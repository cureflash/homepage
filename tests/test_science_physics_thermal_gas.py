import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_thermal_gas import (
    PHYSICS_THERMAL_GAS_PROBLEM_COUNT,
    PHYSICS_THERMAL_GAS_TOPICS,
)
from scripts.science_worksheet_helpers import generate_formula_drill, generate_retrieval_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsThermalGasTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_THERMAL_GAS_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    if topic.get("generator") == "retrieval":
                        problems = generate_retrieval_drill(mode["spec"], seed, PHYSICS_THERMAL_GAS_PROBLEM_COUNT, mode=mode_key)
                    else:
                        problems = generate_formula_drill(topic["spec"], seed, PHYSICS_THERMAL_GAS_PROBLEM_COUNT, solve_for=mode["solve_for"])
                    batches.append((topic_key, mode_key, variant, seed, problems))
        return batches

    def test_four_checkpoints_total_110_variants(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 110)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))
        counts = {}
        for topic_key, *_ in batches:
            counts[topic_key] = counts.get(topic_key, 0) + 1
        self.assertEqual(counts, {
            "molecular-mean-kinetic-energy-numeric": 10,
            "ideal-gas-internal-energy-numeric": 30,
            "thermal-gas-core-concepts": 40,
            "thermodynamics-first-law-numeric": 30,
        })

    def test_deterministic_regeneration_independent_validation_and_hashes(self):
        hashes = set()
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            topic = PHYSICS_THERMAL_GAS_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            if topic.get("generator") == "retrieval":
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
        self.assertEqual(len(hashes), 110)

    def test_mean_kinetic_energy_recomputed_from_visible_values(self):
        topic = PHYSICS_THERMAL_GAS_TOPICS["molecular-mean-kinetic-energy-numeric"]
        mode = topic["modes"]["basic-energy"]
        for seed in topic["seeds"]:
            problems = generate_formula_drill(topic["spec"], seed, 20, solve_for=mode["solve_for"])
            for problem in problems:
                known = problem["known"]
                expected = known["three_halves"] * known["boltzmann_constant"] * known["absolute_temperature"]
                self.assertAlmostEqual(problem["answer"], expected, delta=1e-30)
                self.assertGreater(problem["answer"], 0)

    def test_internal_energy_recomputed_in_all_modes(self):
        topic = PHYSICS_THERMAL_GAS_TOPICS["ideal-gas-internal-energy-numeric"]
        for mode_key, mode in topic["modes"].items():
            for seed in topic["seeds"]:
                for problem in generate_formula_drill(topic["spec"], seed, 20, solve_for=mode["solve_for"]):
                    known = problem["known"]
                    solve_for = problem["solve_for"]
                    if solve_for == "internal_energy":
                        expected = known["three_halves"] * known["amount"] * known["gas_constant"] * known["absolute_temperature"]
                    elif solve_for == "amount":
                        expected = known["internal_energy"] / (known["three_halves"] * known["gas_constant"] * known["absolute_temperature"])
                    else:
                        expected = known["internal_energy"] / (known["three_halves"] * known["amount"] * known["gas_constant"])
                    self.assertAlmostEqual(problem["answer"], expected, msg=(mode_key, seed))

    def test_first_law_recomputed_in_all_modes_and_signs_visible(self):
        topic = PHYSICS_THERMAL_GAS_TOPICS["thermodynamics-first-law-numeric"]
        answers = []
        for mode_key, mode in topic["modes"].items():
            for seed in topic["seeds"]:
                for problem in generate_formula_drill(topic["spec"], seed, 20, solve_for=mode["solve_for"]):
                    known = problem["known"]
                    solve_for = problem["solve_for"]
                    if solve_for == "internal_energy_change":
                        expected = known["heat_received"] + known["work_on_gas"]
                    elif solve_for == "heat_received":
                        expected = known["internal_energy_change"] - known["work_on_gas"]
                    else:
                        expected = known["internal_energy_change"] - known["heat_received"]
                    self.assertAlmostEqual(problem["answer"], expected, msg=(mode_key, seed))
                    answers.append(problem["answer"])
        self.assertTrue(any(value < 0 for value in answers))
        self.assertTrue(any(value > 0 for value in answers))
        text = json.dumps(topic, ensure_ascii=False)
        for token in ["ΔU = Q + W_on", "Q>0", "W_on>0", "放出は負", "気体が外部にする仕事は負"]:
            self.assertIn(token, text)

    def test_constants_units_and_absolute_temperature_are_learner_visible(self):
        mean = json.dumps(PHYSICS_THERMAL_GAS_TOPICS["molecular-mean-kinetic-energy-numeric"], ensure_ascii=False)
        for token in ["1.380649", "J/K", "絶対温度", "K̄"]:
            self.assertIn(token, mean)
        self.assertNotIn("℃", mean)
        internal = json.dumps(PHYSICS_THERMAL_GAS_TOPICS["ideal-gas-internal-energy-numeric"], ensure_ascii=False)
        for token in ["U = (3/2)nRT", "8.31", "J/(mol·K)", "絶対温度"]:
            self.assertIn(token, internal)

    def test_reverse_retrieval_shown_text_is_unique(self):
        topic = PHYSICS_THERMAL_GAS_TOPICS["thermal-gas-core-concepts"]
        reverse_items = topic["modes"]["reverse"]["spec"]["items"]
        shown = [answer for item in reverse_items for answer in item["right"]]
        self.assertEqual(len(shown), len(set(shown)))

    def test_corrupted_numeric_and_retrieval_answers_are_rejected(self):
        numeric = PHYSICS_THERMAL_GAS_TOPICS["thermodynamics-first-law-numeric"]
        mode = numeric["modes"]["basic-delta-u"]
        problem = generate_formula_drill(numeric["spec"], numeric["seeds"][0], 1, solve_for=mode["solve_for"])[0]
        bad = copy.deepcopy(problem)
        bad["answer"] += 1
        with self.assertRaises(AssertionError):
            validate_science_problem(bad)

        retrieval = PHYSICS_THERMAL_GAS_TOPICS["thermal-gas-core-concepts"]
        mode = retrieval["modes"]["fill"]
        problem = generate_retrieval_drill(mode["spec"], retrieval["seeds"][0], 1, mode="fill")[0]
        bad = copy.deepcopy(problem)
        bad["answer"] = "誤答"
        with self.assertRaises(AssertionError):
            validate_science_problem(bad)

    def test_normalized_hashes_unique_and_disjoint_from_existing_catalog(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 110)
        self.assertEqual(len(set(hashes)), 110)
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        current_ids = {
            f"science-physics-motion-{topic_key}-{mode_key}-{variant:02d}"
            for topic_key, topic in PHYSICS_THERMAL_GAS_TOPICS.items()
            for mode_key in topic["modes"]
            for variant, _ in enumerate(topic["seeds"], start=1)
        }
        prior_hashes = {row["content_hash"] for row in catalog if row.get("id") not in current_ids}
        self.assertTrue(set(hashes).isdisjoint(prior_hashes))


if __name__ == "__main__":
    unittest.main()
