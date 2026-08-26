import copy
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_basic_energy import (
    PHYSICS_BASIC_ENERGY_PROBLEM_COUNT,
    PHYSICS_BASIC_ENERGY_TOPICS,
)
from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsBasicEnergyTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_BASIC_ENERGY_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    problems = generate_formula_drill(
                        topic["spec"], seed, PHYSICS_BASIC_ENERGY_PROBLEM_COUNT,
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
            topic = PHYSICS_BASIC_ENERGY_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            regenerated = generate_formula_drill(
                topic["spec"], seed, PHYSICS_BASIC_ENERGY_PROBLEM_COUNT,
                solve_for=mode["solve_for"],
            )
            self.assertEqual(problems, regenerated, (topic_key, mode_key, variant))
            validate(problems)
            for problem in problems:
                self.assertTrue(validate_science_problem(problem))

    def test_all_new_problem_sets_are_distinct(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 50)
        self.assertEqual(len(set(hashes)), 50)

    def test_work_relation_is_parallel_and_has_three_directions(self):
        topic = PHYSICS_BASIC_ENERGY_TOPICS["work-parallel"]
        self.assertEqual(topic["formula"], "W = F × d（力と変位が平行）")
        self.assertEqual(topic["spec"]["relation"], "product")
        self.assertEqual(topic["spec"]["result"], "work")
        self.assertEqual(topic["spec"]["inputs"], ["force", "distance"])
        self.assertEqual(set(topic["modes"]), {"basic-work", "reverse-force", "reverse-distance"})
        self.assertTrue(all("平行" in mode["description"] for mode in topic["modes"].values()))

    def test_work_rate_relation_has_basic_and_time_reverse(self):
        topic = PHYSICS_BASIC_ENERGY_TOPICS["work-rate"]
        self.assertEqual(topic["spec"]["relation"], "product")
        self.assertEqual(topic["spec"]["result"], "work")
        self.assertEqual(topic["spec"]["inputs"], ["power", "time"])
        self.assertEqual(set(topic["modes"]), {"basic-work-rate", "reverse-time"})

    def test_expected_units_and_no_fixed_grade_metadata(self):
        seen_units = set()
        for topic in PHYSICS_BASIC_ENERGY_TOPICS.values():
            self.assertNotIn("grade", topic)
            self.assertNotIn("school_year", topic)
            for definition in topic["spec"]["variables"].values():
                unit = definition.get("unit")
                if unit:
                    seen_units.add(unit)
        self.assertEqual(seen_units, {"J", "N", "m", "W", "s"})

    def test_corrupted_numeric_answer_is_rejected(self):
        _, _, _, _, problems = self.generated_batches()[0]
        bad = copy.deepcopy(problems[0])
        bad["answer"] = bad["answer"] + 1
        with self.assertRaises(AssertionError):
            validate_science_problem(bad)


if __name__ == "__main__":
    unittest.main()
