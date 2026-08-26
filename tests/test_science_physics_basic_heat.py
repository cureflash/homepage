from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_basic_heat import PHYSICS_BASIC_HEAT_PROBLEM_COUNT, PHYSICS_BASIC_HEAT_TOPICS
from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsBasicHeatTests(unittest.TestCase):
    def batches(self):
        out = []
        for topic_key, topic in PHYSICS_BASIC_HEAT_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    problems = generate_formula_drill(topic["spec"], seed, PHYSICS_BASIC_HEAT_PROBLEM_COUNT, solve_for=mode["solve_for"])
                    out.append((topic_key, mode_key, variant, seed, problems))
        return out

    def test_exactly_sixty_variants(self):
        batches = self.batches()
        self.assertEqual(len(batches), 60)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))

    def test_deterministic_and_independently_validated(self):
        for topic_key, mode_key, variant, seed, problems in self.batches():
            topic = PHYSICS_BASIC_HEAT_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            regenerated = generate_formula_drill(topic["spec"], seed, PHYSICS_BASIC_HEAT_PROBLEM_COUNT, solve_for=mode["solve_for"])
            self.assertEqual(problems, regenerated, (topic_key, mode_key, variant))
            validate(problems)
            self.assertTrue(all(validate_science_problem(problem) for problem in problems))

    def test_unique_hashes(self):
        hashes = [normalized_hash(problems) for *_, problems in self.batches()]
        self.assertEqual(len(hashes), 60)
        self.assertEqual(len(set(hashes)), 60)

    def test_relations_directions_and_units(self):
        specific = PHYSICS_BASIC_HEAT_TOPICS["specific-heat-quantity"]
        self.assertEqual(specific["formula"], "Q = m c ΔT")
        self.assertEqual(specific["spec"]["relation"], "product")
        self.assertEqual(specific["spec"]["inputs"], ["mass", "specific_heat", "temperature_change"])
        self.assertEqual(set(specific["modes"]), {"basic-heat-quantity", "reverse-mass", "reverse-specific-heat", "reverse-temperature-change"})
        self.assertEqual(specific["spec"]["variables"]["heat_quantity"]["unit"], "J")
        self.assertEqual(specific["spec"]["variables"]["mass"]["unit"], "kg")
        self.assertEqual(specific["spec"]["variables"]["specific_heat"]["unit"], "J/(kg·K)")
        self.assertEqual(specific["spec"]["variables"]["temperature_change"]["unit"], "K")

        capacity = PHYSICS_BASIC_HEAT_TOPICS["heat-capacity"]
        self.assertEqual(capacity["formula"], "Q = C ΔT")
        self.assertEqual(capacity["spec"]["relation"], "product")
        self.assertEqual(capacity["spec"]["inputs"], ["heat_capacity", "temperature_change"])
        self.assertEqual(set(capacity["modes"]), {"basic-heat-quantity", "reverse-heat-capacity"})
        self.assertEqual(capacity["spec"]["variables"]["heat_capacity"]["unit"], "J/K")

    def test_direct_and_reverse_math(self):
        spec = PHYSICS_BASIC_HEAT_TOPICS["specific-heat-quantity"]["spec"]
        direct = generate_formula_drill(spec, 6751, 1, solve_for="heat_quantity")[0]
        self.assertEqual(direct["answer"], direct["known"]["mass"] * direct["known"]["specific_heat"] * direct["known"]["temperature_change"])
        reverse_mass = generate_formula_drill(spec, 6751, 1, solve_for="mass")[0]
        self.assertEqual(reverse_mass["answer"], reverse_mass["known"]["heat_quantity"] / (reverse_mass["known"]["specific_heat"] * reverse_mass["known"]["temperature_change"]))
        reverse_c = generate_formula_drill(spec, 6751, 1, solve_for="specific_heat")[0]
        self.assertEqual(reverse_c["answer"], reverse_c["known"]["heat_quantity"] / (reverse_c["known"]["mass"] * reverse_c["known"]["temperature_change"]))
        reverse_dt = generate_formula_drill(spec, 6751, 1, solve_for="temperature_change")[0]
        self.assertEqual(reverse_dt["answer"], reverse_dt["known"]["heat_quantity"] / (reverse_dt["known"]["mass"] * reverse_dt["known"]["specific_heat"]))

        capacity_spec = PHYSICS_BASIC_HEAT_TOPICS["heat-capacity"]["spec"]
        reverse_capacity = generate_formula_drill(capacity_spec, 6761, 1, solve_for="heat_capacity")[0]
        self.assertEqual(reverse_capacity["answer"], reverse_capacity["known"]["heat_quantity"] / reverse_capacity["known"]["temperature_change"])

    def test_generated_answers_keep_requested_units(self):
        for topic_key, mode_key, *_rest, problems in self.batches():
            topic = PHYSICS_BASIC_HEAT_TOPICS[topic_key]
            solve_for = topic["modes"][mode_key]["solve_for"]
            expected_unit = topic["spec"]["variables"][solve_for]["unit"]
            self.assertTrue(all(problem["answer_spec"]["unit"] == expected_unit for problem in problems))


if __name__ == "__main__":
    unittest.main()
