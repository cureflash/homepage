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

    def test_exactly_one_hundred_forty_focused_energy_variants(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 140)
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

    def test_all_energy_problem_sets_are_distinct(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 140)
        self.assertEqual(len(set(hashes)), 140)

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

    def test_gravitational_potential_uses_mgh_and_reference_height(self):
        topic = PHYSICS_BASIC_ENERGY_TOPICS["gravitational-potential"]
        self.assertEqual(topic["formula"], "U = mgh（基準面を U = 0 とする）")
        self.assertEqual(topic["spec"]["relation"], "product")
        self.assertEqual(topic["spec"]["inputs"], ["mass", "gravity", "height"])
        self.assertEqual(topic["spec"]["variables"]["gravity"]["values"], [9.8])
        self.assertIn("基準面", topic["spec"]["variables"]["height"]["label"])
        self.assertEqual(
            set(topic["modes"]),
            {"basic-potential-energy", "reverse-mass", "reverse-height"},
        )

    def test_kinetic_energy_uses_real_speed_squared_relation(self):
        topic = PHYSICS_BASIC_ENERGY_TOPICS["kinetic-energy"]
        self.assertEqual(topic["formula"], "K = 1/2 mv²")
        self.assertEqual(topic["spec"]["relation"], "half-product-last-square")
        self.assertEqual(topic["spec"]["inputs"], ["mass", "speed"])
        self.assertNotIn("speed_squared", topic["spec"]["variables"])
        self.assertEqual(
            set(topic["modes"]),
            {"basic-kinetic-energy", "reverse-mass", "reverse-speed"},
        )

        direct = generate_formula_drill(topic["spec"], 6721, 1, solve_for="kinetic_energy")[0]
        mass = direct["known"]["mass"]
        speed = direct["known"]["speed"]
        self.assertAlmostEqual(direct["answer"], 0.5 * mass * speed ** 2)

        reverse_speed = generate_formula_drill(topic["spec"], 6721, 1, solve_for="speed")[0]
        expected_speed = (2 * reverse_speed["known"]["kinetic_energy"] / reverse_speed["known"]["mass"]) ** 0.5
        self.assertAlmostEqual(reverse_speed["answer"], expected_speed)

    def test_elastic_potential_uses_actual_extension_squared_relation(self):
        topic = PHYSICS_BASIC_ENERGY_TOPICS["elastic-potential"]
        self.assertEqual(topic["formula"], "U = 1/2 kx²（自然長を x = 0 とする）")
        self.assertEqual(topic["spec"]["relation"], "half-product-last-square")
        self.assertEqual(topic["spec"]["inputs"], ["spring_constant", "extension"])
        self.assertNotIn("extension_squared", topic["spec"]["variables"])
        self.assertIn("自然長", topic["spec"]["variables"]["extension"]["label"])
        self.assertEqual(
            set(topic["modes"]),
            {"basic-elastic-potential-energy", "reverse-spring-constant", "reverse-extension"},
        )

        direct = generate_formula_drill(
            topic["spec"], 6731, 1, solve_for="elastic_potential_energy"
        )[0]
        spring_constant = direct["known"]["spring_constant"]
        extension = direct["known"]["extension"]
        self.assertAlmostEqual(direct["answer"], 0.5 * spring_constant * extension ** 2)

        reverse_extension = generate_formula_drill(
            topic["spec"], 6731, 1, solve_for="extension"
        )[0]
        expected_extension = (
            2 * reverse_extension["known"]["elastic_potential_energy"]
            / reverse_extension["known"]["spring_constant"]
        ) ** 0.5
        self.assertAlmostEqual(reverse_extension["answer"], expected_extension)

    def test_expected_units_and_no_fixed_grade_metadata(self):
        seen_units = set()
        for topic in PHYSICS_BASIC_ENERGY_TOPICS.values():
            self.assertNotIn("grade", topic)
            self.assertNotIn("school_year", topic)
            for definition in topic["spec"]["variables"].values():
                unit = definition.get("unit")
                if unit:
                    seen_units.add(unit)
        self.assertEqual(seen_units, {"J", "N", "m", "W", "s", "kg", "m/s²", "m/s", "N/m"})

    def test_corrupted_numeric_answers_are_rejected_for_product_and_square_relations(self):
        first_product = self.generated_batches()[0][-1][0]
        bad_product = copy.deepcopy(first_product)
        bad_product["answer"] = bad_product["answer"] + 1
        with self.assertRaises(AssertionError):
            validate_science_problem(bad_product)

        kinetic = PHYSICS_BASIC_ENERGY_TOPICS["kinetic-energy"]
        square_problem = generate_formula_drill(
            kinetic["spec"], 6721, 1, solve_for="speed"
        )[0]
        bad_square = copy.deepcopy(square_problem)
        bad_square["answer_spec"]["value"] = bad_square["answer_spec"]["value"] + 1
        with self.assertRaises(AssertionError):
            validate_science_problem(bad_square)

        elastic = PHYSICS_BASIC_ENERGY_TOPICS["elastic-potential"]
        elastic_problem = generate_formula_drill(
            elastic["spec"], 6731, 1, solve_for="extension"
        )[0]
        bad_elastic = copy.deepcopy(elastic_problem)
        bad_elastic["answer"] = bad_elastic["answer"] + 0.1
        with self.assertRaises(AssertionError):
            validate_science_problem(bad_elastic)


if __name__ == "__main__":
    unittest.main()
