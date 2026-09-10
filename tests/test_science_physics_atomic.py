import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_atomic import PHYSICS_ATOMIC_PROBLEM_COUNT, PHYSICS_ATOMIC_TOPICS
from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsAtomicTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_ATOMIC_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    problems = generate_formula_drill(
                        topic["spec"], seed, PHYSICS_ATOMIC_PROBLEM_COUNT, solve_for=mode["solve_for"]
                    )
                    batches.append((topic_key, mode_key, variant, seed, problems))
        return batches

    def test_first_atomic_checkpoint_has_30_direct_variants(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 30)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))
        self.assertEqual({topic_key for topic_key, *_ in batches}, {"atomic-photon-energy-numeric"})
        self.assertEqual({mode_key for _, mode_key, *_ in batches}, {"basic-energy"})

    def test_scope_and_metadata_are_explicit(self):
        topic = PHYSICS_ATOMIC_TOPICS["atomic-photon-energy-numeric"]
        self.assertEqual(topic["unit"], "原子：光子とエネルギー")
        self.assertEqual(topic["skill"], "atomic-photon-energy-numeric")
        self.assertIn("E=hν", topic["formula"])
        self.assertIn("h=6.63×10^-34 J·s", topic["formula"])
        self.assertIn("ν=a×10^14 Hz", topic["formula"])
        self.assertEqual(topic["modes"]["basic-energy"]["worksheet_mode"], "calculation-basic")

    def test_deterministic_validation_and_unique_hashes(self):
        hashes = set()
        topic = PHYSICS_ATOMIC_TOPICS["atomic-photon-energy-numeric"]
        mode = topic["modes"]["basic-energy"]
        for _, _, _, seed, problems in self.generated_batches():
            regenerated = generate_formula_drill(
                topic["spec"], seed, PHYSICS_ATOMIC_PROBLEM_COUNT, solve_for=mode["solve_for"]
            )
            self.assertEqual(problems, regenerated)
            validate(problems)
            for problem in problems:
                self.assertTrue(validate_science_problem(problem))
            digest = normalized_hash(problems)
            self.assertNotIn(digest, hashes)
            hashes.add(digest)
        self.assertEqual(len(hashes), 30)

    def test_visible_coefficients_independently_recompute_energy(self):
        for *_, problems in self.generated_batches():
            for problem in problems:
                known = problem["known"]
                self.assertEqual(problem["solve_for"], "energy_coefficient")
                self.assertEqual(known["planck_coefficient"], 6.63)
                expected = known["planck_coefficient"] * known["frequency_coefficient"]
                self.assertAlmostEqual(problem["answer"], expected)
                self.assertAlmostEqual(problem["answer_spec"]["value"], expected)

    def test_corrupted_answer_is_rejected(self):
        topic = PHYSICS_ATOMIC_TOPICS["atomic-photon-energy-numeric"]
        mode = topic["modes"]["basic-energy"]
        problem = generate_formula_drill(topic["spec"], topic["seeds"][0], 1, solve_for=mode["solve_for"])[0]
        bad = copy.deepcopy(problem)
        bad["answer"] += 1
        with self.assertRaises(AssertionError):
            validate_science_problem(bad)

    def test_hashes_are_disjoint_from_existing_catalog(self):
        hashes = {normalized_hash(problems) for *_, problems in self.generated_batches()}
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        prior_hashes = {row["content_hash"] for row in catalog}
        self.assertTrue(hashes.isdisjoint(prior_hashes))


if __name__ == "__main__":
    unittest.main()
