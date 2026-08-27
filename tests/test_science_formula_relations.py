from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem


class ScienceFormulaRelationTests(unittest.TestCase):
    def setUp(self):
        self.spec = {
            "id": "test-linear-plus-half-quadratic",
            "relation": "linear-plus-half-quadratic",
            "result": "y",
            "inputs": ["v0", "a", "t"],
            "variables": {
                "y": {"label": "y", "unit": "m"},
                "v0": {"label": "v0", "unit": "m/s", "values": [19.6, 29.4]},
                "a": {"label": "a", "unit": "m/s²", "values": [-9.8]},
                "t": {"label": "t", "unit": "s", "values": [1, 2]},
            },
            "tolerance": 1e-9,
        }

    def test_direct_linear_plus_half_quadratic(self):
        problems = generate_formula_drill(self.spec, 9901, 20, solve_for="y")
        for problem in problems:
            known = problem["known"]
            expected = known["v0"] * known["t"] + 0.5 * known["a"] * known["t"] ** 2
            self.assertAlmostEqual(problem["answer"], expected)
            self.assertTrue(validate_science_problem(problem))

    def test_reverse_linear_rate(self):
        problems = generate_formula_drill(self.spec, 9902, 20, solve_for="v0")
        for problem in problems:
            known = problem["known"]
            expected = (known["y"] - 0.5 * known["a"] * known["t"] ** 2) / known["t"]
            self.assertAlmostEqual(problem["answer"], expected)
            self.assertTrue(validate_science_problem(problem))

    def test_reverse_acceleration(self):
        problems = generate_formula_drill(self.spec, 9903, 20, solve_for="a")
        for problem in problems:
            known = problem["known"]
            expected = 2 * (known["y"] - known["v0"] * known["t"]) / known["t"] ** 2
            self.assertAlmostEqual(problem["answer"], expected)
            self.assertTrue(validate_science_problem(problem))

    def test_time_inversion_is_rejected_as_ambiguous(self):
        with self.assertRaisesRegex(ValueError, "time inversion"):
            generate_formula_drill(self.spec, 9904, 20, solve_for="t")

    def test_wrong_arity_is_rejected(self):
        bad = dict(self.spec)
        bad["inputs"] = ["v0", "t"]
        with self.assertRaisesRegex(ValueError, "three unique inputs"):
            generate_formula_drill(bad, 9905, 1, solve_for="y")

    def test_square_over_double_direct_and_reverse(self):
        spec = {
            "id": "test-square-over-double", "relation": "square-over-double",
            "result": "h", "inputs": ["v", "g"],
            "variables": {
                "h": {"label": "h", "unit": "m"},
                "v": {"label": "v", "unit": "m/s", "values": [9.8, 19.6, 29.4]},
                "g": {"label": "g", "unit": "m/s²", "values": [9.8]},
            }, "tolerance": 1e-9,
        }
        for solve_for in ("h", "v", "g"):
            for problem in generate_formula_drill(spec, 9910, 20, solve_for=solve_for):
                known = problem["known"]
                if solve_for == "h": expected = known["v"] ** 2 / (2 * known["g"])
                elif solve_for == "v": expected = (2 * known["h"] * known["g"]) ** 0.5
                else: expected = known["v"] ** 2 / (2 * known["h"])
                self.assertAlmostEqual(problem["answer"], expected)
                self.assertTrue(validate_science_problem(problem))

    def test_double_quotient_direct_and_reverse(self):
        spec = {
            "id": "test-double-quotient", "relation": "double-quotient",
            "result": "t", "inputs": ["v", "g"],
            "variables": {
                "t": {"label": "t", "unit": "s"},
                "v": {"label": "v", "unit": "m/s", "values": [9.8, 19.6, 29.4]},
                "g": {"label": "g", "unit": "m/s²", "values": [9.8]},
            }, "tolerance": 1e-9,
        }
        for solve_for in ("t", "v", "g"):
            for problem in generate_formula_drill(spec, 9911, 20, solve_for=solve_for):
                known = problem["known"]
                if solve_for == "t": expected = 2 * known["v"] / known["g"]
                elif solve_for == "v": expected = known["t"] * known["g"] / 2
                else: expected = 2 * known["v"] / known["t"]
                self.assertAlmostEqual(problem["answer"], expected)
                self.assertTrue(validate_science_problem(problem))

    def test_equal_products_direct_and_all_reverse_directions(self):
        spec = {
            "id": "test-equal-products", "relation": "equal-products",
            "result": "f1", "inputs": ["d1", "f2", "d2"],
            "variables": {
                "f1": {"label": "f1", "unit": "N"},
                "d1": {"label": "d1", "unit": "m", "values": [0.5, 1, 2]},
                "f2": {"label": "f2", "unit": "N", "values": [8, 16, 32]},
                "d2": {"label": "d2", "unit": "m", "values": [0.5, 1, 2]},
            }, "tolerance": 1e-9,
        }
        for solve_for in ("f1", "d1", "f2", "d2"):
            for problem in generate_formula_drill(spec, 9913, 20, solve_for=solve_for):
                known = problem["known"]
                if solve_for == "f1": expected = known["f2"] * known["d2"] / known["d1"]
                elif solve_for == "d1": expected = known["f2"] * known["d2"] / known["f1"]
                elif solve_for == "f2": expected = known["f1"] * known["d1"] / known["d2"]
                else: expected = known["f1"] * known["d1"] / known["f2"]
                self.assertAlmostEqual(problem["answer"], expected)
                self.assertAlmostEqual(problem["answer_spec"]["value"], expected)
                self.assertTrue(validate_science_problem(problem))

    def test_new_relation_wrong_arity_is_rejected(self):
        for relation in ("square-over-double", "double-quotient"):
            spec = {
                "id": "bad", "relation": relation, "result": "r", "inputs": ["x"],
                "variables": {"r": {"label": "r"}, "x": {"label": "x", "values": [1]}},
            }
            with self.assertRaisesRegex(ValueError, "two unique inputs"):
                generate_formula_drill(spec, 9912, 1, solve_for="r")

        equal_products = {
            "id": "bad-equal-products", "relation": "equal-products", "result": "r", "inputs": ["x", "y"],
            "variables": {
                "r": {"label": "r"},
                "x": {"label": "x", "values": [1]},
                "y": {"label": "y", "values": [1]},
            },
        }
        with self.assertRaisesRegex(ValueError, "three unique inputs"):
            generate_formula_drill(equal_products, 9914, 1, solve_for="r")


if __name__ == "__main__":
    unittest.main()