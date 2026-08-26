from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_basic_conservation import PHYSICS_BASIC_CONSERVATION_PROBLEM_COUNT, PHYSICS_BASIC_CONSERVATION_TOPICS
from scripts.science_worksheet_helpers import generate_formula_drill, text_science_problem, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsBasicConservationTests(unittest.TestCase):
    def batches(self):
        out = []
        for topic_key, topic in PHYSICS_BASIC_CONSERVATION_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    problems = generate_formula_drill(topic["spec"], seed, PHYSICS_BASIC_CONSERVATION_PROBLEM_COUNT, solve_for=mode["solve_for"])
                    out.append((topic_key, mode_key, variant, seed, problems))
        return out

    def test_exactly_thirty_variants(self):
        batches = self.batches()
        self.assertEqual(len(batches), 30)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))

    def test_deterministic_and_independently_validated(self):
        for topic_key, mode_key, variant, seed, problems in self.batches():
            topic = PHYSICS_BASIC_CONSERVATION_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            regenerated = generate_formula_drill(topic["spec"], seed, PHYSICS_BASIC_CONSERVATION_PROBLEM_COUNT, solve_for=mode["solve_for"])
            self.assertEqual(problems, regenerated, (topic_key, mode_key, variant))
            validate(problems)
            self.assertTrue(all(validate_science_problem(problem) for problem in problems))

    def test_unique_hashes(self):
        hashes = [normalized_hash(problems) for *_, problems in self.batches()]
        self.assertEqual(len(hashes), 30)
        self.assertEqual(len(set(hashes)), 30)

    def test_relation_and_directions(self):
        topic = PHYSICS_BASIC_CONSERVATION_TOPICS["mechanical-energy-conservation"]
        self.assertEqual(topic["formula"], "E = K + U（摩擦・空気抵抗がない場合）")
        self.assertEqual(topic["spec"]["relation"], "sum")
        self.assertEqual(topic["spec"]["result"], "initial_mechanical_energy")
        self.assertEqual(topic["spec"]["inputs"], ["final_kinetic_energy", "final_potential_energy"])
        self.assertEqual(set(topic["modes"]), {"basic-conserved-energy", "reverse-final-kinetic", "reverse-final-potential"})

    def test_every_problem_states_condition(self):
        for *_, problems in self.batches():
            for problem in problems:
                wording = text_science_problem(problem)
                self.assertIn("摩擦・空気抵抗がない", wording)
                self.assertIn("力学的エネルギー", wording)

    def test_direct_and_reverse_math(self):
        spec = PHYSICS_BASIC_CONSERVATION_TOPICS["mechanical-energy-conservation"]["spec"]
        direct = generate_formula_drill(spec, 6741, 1, solve_for="initial_mechanical_energy")[0]
        self.assertEqual(direct["answer"], direct["known"]["final_kinetic_energy"] + direct["known"]["final_potential_energy"])
        reverse_k = generate_formula_drill(spec, 6741, 1, solve_for="final_kinetic_energy")[0]
        self.assertEqual(reverse_k["answer"], reverse_k["known"]["initial_mechanical_energy"] - reverse_k["known"]["final_potential_energy"])
        reverse_u = generate_formula_drill(spec, 6741, 1, solve_for="final_potential_energy")[0]
        self.assertEqual(reverse_u["answer"], reverse_u["known"]["initial_mechanical_energy"] - reverse_u["known"]["final_kinetic_energy"])


if __name__ == "__main__":
    unittest.main()
