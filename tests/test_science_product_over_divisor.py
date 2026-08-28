from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem


class ProductOverDivisorRelationTests(unittest.TestCase):
    def setUp(self):
        self.spec = {
            "id": "test-product-over-divisor",
            "relation": "product-over-divisor",
            "result": "r",
            "inputs": ["a", "b", "c", "d"],
            "variables": {
                "r": {"label": "r", "unit": "u"},
                "a": {"label": "a", "values": [2, 4, 8]},
                "b": {"label": "b", "values": [3, 6]},
                "c": {"label": "c", "values": [5, 10]},
                "d": {"label": "d", "values": [1, 2, 4]},
            },
            "tolerance": 1e-9,
        }

    def test_direct_and_every_reverse_direction(self):
        for solve_for in ("r", "a", "b", "c", "d"):
            for problem in generate_formula_drill(self.spec, 9930, 20, solve_for=solve_for):
                known = problem["known"]
                if solve_for == "r":
                    expected = known["a"] * known["b"] * known["c"] / known["d"]
                elif solve_for == "d":
                    expected = known["a"] * known["b"] * known["c"] / known["r"]
                else:
                    numerator_names = [name for name in ("a", "b", "c") if name != solve_for]
                    expected = known["r"] * known["d"]
                    for name in numerator_names:
                        expected /= known[name]
                self.assertAlmostEqual(problem["answer"], expected)
                self.assertAlmostEqual(problem["answer_spec"]["value"], expected)
                self.assertTrue(validate_science_problem(problem))

    def test_zero_divisor_is_rejected(self):
        bad = {
            **self.spec,
            "variables": {
                **self.spec["variables"],
                "d": {"label": "d", "values": [0]},
            },
        }
        with self.assertRaisesRegex(ValueError, "unable to generate|divisor must not be zero"):
            generate_formula_drill(bad, 9931, 1, solve_for="r")

    def test_wrong_arity_and_duplicate_input_names_are_rejected(self):
        one_input = {
            "id": "bad-product-over-divisor",
            "relation": "product-over-divisor",
            "result": "r",
            "inputs": ["a"],
            "variables": {"r": {"label": "r"}, "a": {"label": "a", "values": [1]}},
        }
        with self.assertRaisesRegex(ValueError, "at least two unique inputs"):
            generate_formula_drill(one_input, 9932, 1, solve_for="r")

        duplicate = {
            **self.spec,
            "inputs": ["a", "b", "b"],
        }
        with self.assertRaisesRegex(ValueError, "at least two unique inputs"):
            generate_formula_drill(duplicate, 9933, 1, solve_for="r")


if __name__ == "__main__":
    unittest.main()
