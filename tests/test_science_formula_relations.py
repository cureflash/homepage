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


if __name__ == "__main__":
    unittest.main()
