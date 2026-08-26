import copy
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_basic_forces import (
    PHYSICS_BASIC_FORCE_PROBLEM_COUNT,
    PHYSICS_BASIC_FORCE_TOPICS,
)
from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsBasicForceTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_BASIC_FORCE_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    problems = generate_formula_drill(
                        topic["spec"],
                        seed,
                        PHYSICS_BASIC_FORCE_PROBLEM_COUNT,
                        solve_for=mode["solve_for"],
                    )
                    batches.append((topic_key, mode_key, variant, seed, problems))
        return batches

    def test_exactly_fifty_new_focused_variants(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 50)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))

    def test_deterministic_regeneration_and_independent_answers(self):
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            topic = PHYSICS_BASIC_FORCE_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            regenerated = generate_formula_drill(
                topic["spec"], seed, PHYSICS_BASIC_FORCE_PROBLEM_COUNT, solve_for=mode["solve_for"]
            )
            self.assertEqual(problems, regenerated, (topic_key, mode_key, variant))
            validate(problems)
            for problem in problems:
                self.assertTrue(validate_science_problem(problem))

    def test_all_new_problem_sets_are_distinct(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 50)
        self.assertEqual(len(set(hashes)), 50)

    def test_force_balance_is_explicitly_zero_resultant_and_opposed(self):
        topic = PHYSICS_BASIC_FORCE_TOPICS["force-balance-opposed"]
        self.assertEqual(topic["spec"]["relation"], "sum")
        self.assertEqual(topic["spec"]["variables"]["fnetzero"]["values"], [0])
        self.assertIn("合力0 N", topic["formula"])
        self.assertIn("右向き", topic["spec"]["variables"]["fright"]["label"])
        self.assertIn("左向き", topic["spec"]["variables"]["fleft"]["label"])
        for mode in topic["modes"].values():
            problems = generate_formula_drill(topic["spec"], 6671, 20, solve_for=mode["solve_for"])
            for problem in problems:
                self.assertEqual(problem["known"]["fnetzero"], 0)
                self.assertTrue(validate_science_problem(problem))

    def test_kinetic_friction_relation_and_assumptions_are_explicit(self):
        topic = PHYSICS_BASIC_FORCE_TOPICS["kinetic-friction"]
        self.assertEqual(topic["formula"], "F動 = μ' × N")
        self.assertEqual(topic["spec"]["relation"], "product")
        self.assertEqual(topic["spec"]["result"], "friction")
        self.assertEqual(topic["spec"]["inputs"], ["mu", "normal"])
        self.assertEqual(
            set(topic["modes"]),
            {"basic-friction", "reverse-coefficient", "reverse-normal-force"},
        )
        self.assertTrue(all("動摩擦" in mode["description"] for mode in topic["modes"].values()))

    def test_expected_units_and_no_fixed_grade_metadata(self):
        seen_units = set()
        for topic in PHYSICS_BASIC_FORCE_TOPICS.values():
            self.assertNotIn("grade", topic)
            self.assertNotIn("school_year", topic)
            for definition in topic["spec"]["variables"].values():
                unit = definition.get("unit")
                if unit:
                    seen_units.add(unit)
        self.assertEqual(seen_units, {"N"})

    def test_corrupted_numeric_answer_is_rejected(self):
        _, _, _, _, problems = self.generated_batches()[0]
        bad = copy.deepcopy(problems[0])
        bad["answer"] = bad["answer"] + 1
        with self.assertRaises(AssertionError):
            validate_science_problem(bad)


if __name__ == "__main__":
    unittest.main()
