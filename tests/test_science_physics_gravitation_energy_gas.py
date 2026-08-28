import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_gravitation_energy_gas import (
    PHYSICS_GRAV_ENERGY_GAS_PROBLEM_COUNT,
    PHYSICS_GRAV_ENERGY_GAS_TOPICS,
)
from scripts.science_worksheet_helpers import generate_formula_drill, generate_retrieval_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsGravitationEnergyGasTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_GRAV_ENERGY_GAS_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    if topic.get("generator") == "retrieval":
                        problems = generate_retrieval_drill(mode["spec"], seed, PHYSICS_GRAV_ENERGY_GAS_PROBLEM_COUNT, mode=mode_key)
                    else:
                        problems = generate_formula_drill(topic["spec"], seed, PHYSICS_GRAV_ENERGY_GAS_PROBLEM_COUNT, solve_for=mode["solve_for"])
                    batches.append((topic_key, mode_key, variant, seed, problems))
        return batches

    def test_three_checkpoints_total_110_variants(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 110)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))
        counts = {}
        for topic_key, *_ in batches:
            counts[topic_key] = counts.get(topic_key, 0) + 1
        self.assertEqual(counts, {
            "gravitational-potential-energy": 30,
            "gravitational-potential-energy-concepts": 40,
            "gas-molecular-motion-core-concepts": 40,
        })

    def test_deterministic_regeneration_and_independent_validation(self):
        hashes = set()
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            topic = PHYSICS_GRAV_ENERGY_GAS_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            if topic.get("generator") == "retrieval":
                regenerated = generate_retrieval_drill(mode["spec"], seed, 20, mode=mode_key)
                expected_type = "accepted-set"
            else:
                regenerated = generate_formula_drill(topic["spec"], seed, 20, solve_for=mode["solve_for"])
                expected_type = "numeric"
            self.assertEqual(problems, regenerated, (topic_key, mode_key, variant))
            validate(problems)
            for problem in problems:
                self.assertTrue(validate_science_problem(problem))
                self.assertEqual(problem["answer_spec"]["type"], expected_type)
            digest = normalized_hash(problems)
            self.assertNotIn(digest, hashes)
            hashes.add(digest)
        self.assertEqual(len(hashes), 110)

    def test_potential_energy_visible_value_recalculation_and_sign(self):
        topic = PHYSICS_GRAV_ENERGY_GAS_TOPICS["gravitational-potential-energy"]
        self.assertIn("U(∞)=0", topic["formula"])
        self.assertIn("-GMm/r", topic["formula"])
        self.assertEqual(topic["spec"]["relation"], "product")
        for mode_key, mode in topic["modes"].items():
            for seed in topic["seeds"]:
                problems = generate_formula_drill(topic["spec"], seed, 20, solve_for=mode["solve_for"])
                for problem in problems:
                    known = problem["known"]
                    if problem["solve_for"] == "potential_energy":
                        expected = known["negative_gravitational_constant"] * known["mass_1"] * known["mass_2"] * known["inverse_distance"]
                        self.assertLess(expected, 0)
                    elif problem["solve_for"] == "mass_1":
                        expected = known["potential_energy"] / (known["negative_gravitational_constant"] * known["mass_2"] * known["inverse_distance"])
                        self.assertGreater(expected, 0)
                    else:
                        expected = known["potential_energy"] / (known["negative_gravitational_constant"] * known["mass_1"] * known["mass_2"])
                        self.assertGreater(expected, 0)
                    self.assertAlmostEqual(problem["answer"], expected, msg=(mode_key, seed))
                    self.assertAlmostEqual(problem["answer_spec"]["value"], expected)

    def test_retrieval_reverse_sources_are_unique(self):
        for topic_key in ("gravitational-potential-energy-concepts", "gas-molecular-motion-core-concepts"):
            items = PHYSICS_GRAV_ENERGY_GAS_TOPICS[topic_key]["modes"]["reverse"]["spec"]["items"]
            shown = [answer for item in items for answer in item["right"]]
            self.assertEqual(len(shown), len(set(shown)), topic_key)

    def test_corrupted_answers_are_rejected(self):
        formula_topic = PHYSICS_GRAV_ENERGY_GAS_TOPICS["gravitational-potential-energy"]
        mode = formula_topic["modes"]["basic-potential"]
        problem = generate_formula_drill(formula_topic["spec"], formula_topic["seeds"][0], 1, solve_for=mode["solve_for"])[0]
        bad = copy.deepcopy(problem)
        bad["answer"] += 1
        with self.assertRaises(AssertionError):
            validate_science_problem(bad)

        retrieval_topic = PHYSICS_GRAV_ENERGY_GAS_TOPICS["gas-molecular-motion-core-concepts"]
        rmode = retrieval_topic["modes"]["fill"]
        problem = generate_retrieval_drill(rmode["spec"], retrieval_topic["seeds"][0], 1, mode="fill")[0]
        bad = copy.deepcopy(problem)
        bad["answer"] = "誤答"
        with self.assertRaises(AssertionError):
            validate_science_problem(bad)

    def test_contracts_are_learner_visible(self):
        potential = json.dumps(PHYSICS_GRAV_ENERGY_GAS_TOPICS["gravitational-potential-energy"], ensure_ascii=False)
        for token in ["無限遠", "-G", "1/r", "r>0"]:
            self.assertIn(token, potential)
        gas = json.dumps(PHYSICS_GRAV_ENERGY_GAS_TOPICS["gas-molecular-motion-core-concepts"], ensure_ascii=False)
        for token in ["容器", "pV = nRT", "ボイル", "シャルル", "絶対温度", "内部エネルギー"]:
            self.assertIn(token, gas)

    def test_normalized_hashes_unique_and_disjoint_from_existing_catalog(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 110)
        self.assertEqual(len(set(hashes)), 110)
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        current_ids = {
            f"science-physics-motion-{topic_key}-{mode_key}-{variant:02d}"
            for topic_key, topic in PHYSICS_GRAV_ENERGY_GAS_TOPICS.items()
            for mode_key in topic["modes"]
            for variant, _ in enumerate(topic["seeds"], start=1)
        }
        prior_hashes = {row["content_hash"] for row in catalog if row.get("id") not in current_ids}
        self.assertTrue(set(hashes).isdisjoint(prior_hashes))


if __name__ == "__main__":
    unittest.main()
