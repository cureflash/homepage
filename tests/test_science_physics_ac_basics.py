import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_ac_basics import PHYSICS_AC_BASICS_PROBLEM_COUNT, PHYSICS_AC_BASICS_TOPICS
from scripts.science_worksheet_helpers import generate_formula_drill, generate_retrieval_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsAcBasicsTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_AC_BASICS_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    if topic["generator"] == "retrieval":
                        problems = generate_retrieval_drill(mode["spec"], seed, PHYSICS_AC_BASICS_PROBLEM_COUNT, mode=mode_key)
                    else:
                        problems = generate_formula_drill(topic["spec"], seed, PHYSICS_AC_BASICS_PROBLEM_COUNT, solve_for=mode["solve_for"])
                    batches.append((topic_key, mode_key, variant, seed, problems))
        return batches

    def test_eight_checkpoints_total_240_variants(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 240)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))
        counts = {}
        for topic_key, *_ in batches:
            counts[topic_key] = counts.get(topic_key, 0) + 1
        self.assertEqual(counts, {
            "ac-sinusoidal-rms-voltage-numeric": 20,
            "ac-resistor-ohm-rms-numeric": 30,
            "ac-resistor-average-power-numeric": 30,
            "ac-core-concepts": 40,
            "ac-inductive-reactance-numeric": 30,
            "ac-capacitive-reactance-numeric": 20,
            "ac-series-rlc-reactance-difference-numeric": 30,
            "ac-reactance-rlc-concepts": 40,
        })

    def test_deterministic_validation_and_unique_hashes(self):
        hashes = set()
        for topic_key, mode_key, _, seed, problems in self.generated_batches():
            topic = PHYSICS_AC_BASICS_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            if topic["generator"] == "retrieval":
                regenerated = generate_retrieval_drill(mode["spec"], seed, 20, mode=mode_key)
            else:
                regenerated = generate_formula_drill(topic["spec"], seed, 20, solve_for=mode["solve_for"])
            self.assertEqual(problems, regenerated)
            validate(problems)
            for problem in problems:
                self.assertTrue(validate_science_problem(problem))
            digest = normalized_hash(problems)
            self.assertNotIn(digest, hashes)
            hashes.add(digest)
        self.assertEqual(len(hashes), 240)

    def test_new_numeric_visible_values_recompute_answers(self):
        new_numeric = {
            "ac-inductive-reactance-numeric",
            "ac-capacitive-reactance-numeric",
            "ac-series-rlc-reactance-difference-numeric",
        }
        for topic_key, _, _, _, problems in self.generated_batches():
            if topic_key not in new_numeric:
                continue
            for problem in problems:
                k = problem["known"]
                solve_for = problem["solve_for"]
                if topic_key == "ac-inductive-reactance-numeric":
                    if solve_for == "inductive_reactance":
                        expected = k["two_pi_factor"] * k["frequency"] * k["inductance"]
                    elif solve_for == "frequency":
                        expected = k["inductive_reactance"] / (k["two_pi_factor"] * k["inductance"])
                    else:
                        expected = k["inductive_reactance"] / (k["two_pi_factor"] * k["frequency"])
                elif topic_key == "ac-capacitive-reactance-numeric":
                    if solve_for == "capacitive_reactance":
                        expected = k["numerator_one"] / k["omega_c_product"]
                    else:
                        expected = k["numerator_one"] / k["capacitive_reactance"]
                else:
                    if solve_for == "net_reactance":
                        expected = k["inductive_reactance"] - k["capacitive_reactance"]
                    elif solve_for == "inductive_reactance":
                        expected = k["net_reactance"] + k["capacitive_reactance"]
                    else:
                        expected = k["inductive_reactance"] - k["net_reactance"]
                self.assertAlmostEqual(problem["answer"], expected)
                self.assertAlmostEqual(problem["answer_spec"]["value"], expected)

    def test_scope_units_frequency_dependence_and_impedance_are_visible(self):
        text = json.dumps(PHYSICS_AC_BASICS_TOPICS, ensure_ascii=False)
        for token in [
            "Vmax=√2 Veff", "√2≈1.414", "Veff=Ieff R", "P=Veff Ieff",
            "XL=ωL=2πfL", "2π≈6.28", "XC=1/(ωC)", "X=XL-XC",
            "Z=√(R²+(XL-XC)²)", "XL=XC", "周波数が高いほど大きくなる",
            "周波数が高いほど小さくなる", "位相",
        ]:
            self.assertIn(token, text)
        self.assertTrue(all(topic["unit"] == "電気と磁気：交流の基本" for topic in PHYSICS_AC_BASICS_TOPICS.values()))

    def test_new_numeric_domains_and_corruption_rejection(self):
        for topic_key, _, _, _, problems in self.generated_batches():
            if topic_key == "ac-inductive-reactance-numeric":
                for problem in problems:
                    self.assertGreater(problem["answer"], 0)
            elif topic_key == "ac-capacitive-reactance-numeric":
                for problem in problems:
                    self.assertGreater(problem["answer"], 0)
                    self.assertTrue(all(value > 0 for value in problem["known"].values()))
            elif topic_key == "ac-series-rlc-reactance-difference-numeric":
                for problem in problems:
                    self.assertTrue(all(value >= 0 for name, value in problem["known"].items() if name != "net_reactance"))
        topic = PHYSICS_AC_BASICS_TOPICS["ac-inductive-reactance-numeric"]
        mode = topic["modes"]["basic-reactance"]
        problem = generate_formula_drill(topic["spec"], topic["seeds"][0], 1, solve_for=mode["solve_for"])[0]
        bad = copy.deepcopy(problem)
        bad["answer"] += 1
        with self.assertRaises(AssertionError):
            validate_science_problem(bad)

    def test_retrieval_answers_are_finite(self):
        for topic_key in ["ac-core-concepts", "ac-reactance-rlc-concepts"]:
            topic = PHYSICS_AC_BASICS_TOPICS[topic_key]
            for mode_key, mode in topic["modes"].items():
                problems = generate_retrieval_drill(mode["spec"], topic["seeds"][0], 20, mode=mode_key)
                for problem in problems:
                    self.assertEqual(problem["answer_spec"]["type"], "accepted-set")
                    self.assertTrue(problem["answer_spec"]["values"])

    def test_hashes_disjoint_from_existing_catalog(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(set(hashes)), 240)
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        current_ids = {f"science-physics-motion-{topic_key}-{mode_key}-{variant:02d}" for topic_key, topic in PHYSICS_AC_BASICS_TOPICS.items() for mode_key in topic["modes"] for variant, _ in enumerate(topic["seeds"], start=1)}
        prior_hashes = {row["content_hash"] for row in catalog if row.get("id") not in current_ids}
        self.assertTrue(set(hashes).isdisjoint(prior_hashes))


if __name__ == "__main__":
    unittest.main()
