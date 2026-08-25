import copy
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_basic_motion import (
    PHYSICS_BASIC_MOTION_PROBLEM_COUNT,
    PHYSICS_BASIC_MOTION_TOPICS,
)
from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsBasicMotionTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_BASIC_MOTION_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    problems = generate_formula_drill(
                        topic["spec"],
                        seed,
                        PHYSICS_BASIC_MOTION_PROBLEM_COUNT,
                        solve_for=mode["solve_for"],
                    )
                    batches.append((topic_key, mode_key, variant, seed, problems))
        return batches

    def test_exactly_sixty_focused_variants(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 60)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))

    def test_deterministic_regeneration_and_independent_answers(self):
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            topic = PHYSICS_BASIC_MOTION_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            regenerated = generate_formula_drill(
                topic["spec"], seed, PHYSICS_BASIC_MOTION_PROBLEM_COUNT, solve_for=mode["solve_for"]
            )
            self.assertEqual(problems, regenerated, (topic_key, mode_key, variant))
            validate(problems)
            for problem in problems:
                self.assertTrue(validate_science_problem(problem))

    def test_all_sixty_problem_sets_are_distinct(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 60)
        self.assertEqual(len(set(hashes)), 60)

    def test_course_stays_one_dimensional_and_uses_expected_units(self):
        expected_units = {"m", "s", "m/s", "m/s²"}
        seen_units = set()
        for topic in PHYSICS_BASIC_MOTION_TOPICS.values():
            for definition in topic["spec"]["variables"].values():
                unit = definition.get("unit")
                if unit:
                    seen_units.add(unit)
        self.assertTrue(expected_units.issubset(seen_units))
        relations = {topic["spec"]["relation"] for topic in PHYSICS_BASIC_MOTION_TOPICS.values()}
        self.assertIn("product", relations)
        self.assertIn("sum", relations)

    def test_corrupted_numeric_answer_is_rejected(self):
        _, _, _, _, problems = self.generated_batches()[0]
        bad = copy.deepcopy(problems[0])
        bad["answer"] = bad["answer"] + 1
        with self.assertRaises(AssertionError):
            validate_science_problem(bad)

    def test_topic_scope_has_no_fixed_high_school_grade_metadata(self):
        for topic in PHYSICS_BASIC_MOTION_TOPICS.values():
            self.assertNotIn("grade", topic)
            self.assertNotIn("school_year", topic)


if __name__ == "__main__":
    unittest.main()
