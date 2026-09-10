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

    def test_photon_checkpoint_has_30_variants_per_direction(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 60)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))
        self.assertEqual({topic_key for topic_key, *_ in batches}, {"atomic-photon-energy-numeric"})
        counts = {
            mode_key: sum(1 for _, batch_mode, *_ in batches if batch_mode == mode_key)
            for mode_key in {mode_key for _, mode_key, *_ in batches}
        }
        self.assertEqual(counts, {"basic-energy": 30, "reverse-frequency": 30})

    def test_scope_and_metadata_are_explicit(self):
        topic = PHYSICS_ATOMIC_TOPICS["atomic-photon-energy-numeric"]
        self.assertEqual(topic["unit"], "原子：光子とエネルギー")
        self.assertEqual(topic["skill"], "atomic-photon-energy-numeric")
        self.assertIn("E=hν", topic["formula"])
        self.assertIn("h=6.63×10^-34 J·s", topic["formula"])
        self.assertIn("ν=a×10^14 Hz", topic["formula"])
        self.assertIn("E=b×10^-20 J", topic["formula"])
        self.assertEqual(topic["modes"]["basic-energy"]["worksheet_mode"], "calculation-basic")
        self.assertEqual(topic["modes"]["reverse-frequency"]["worksheet_mode"], "calculation-reverse")
        self.assertEqual(topic["modes"]["reverse-frequency"]["solve_for"], "frequency_coefficient")

    def test_deterministic_validation_and_unique_hashes(self):
        hashes = set()
        topic = PHYSICS_ATOMIC_TOPICS["atomic-photon-energy-numeric"]
        for _, mode_key, _, seed, problems in self.generated_batches():
            mode = topic["modes"][mode_key]
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
        self.assertEqual(len(hashes), 60)

    def test_visible_coefficients_independently_recompute_energy(self):
        topic = PHYSICS_ATOMIC_TOPICS["atomic-photon-energy-numeric"]
        mode = topic["modes"]["basic-energy"]
        for seed in topic["seeds"]:
            problems = generate_formula_drill(
                topic["spec"], seed, PHYSICS_ATOMIC_PROBLEM_COUNT, solve_for=mode["solve_for"]
            )
            for problem in problems:
                known = problem["known"]
                self.assertEqual(problem["solve_for"], "energy_coefficient")
                self.assertEqual(known["planck_coefficient"], 6.63)
                expected = known["planck_coefficient"] * known["frequency_coefficient"]
                self.assertAlmostEqual(problem["answer"], expected)
                self.assertAlmostEqual(problem["answer_spec"]["value"], expected)

    def test_visible_coefficients_independently_recompute_frequency(self):
        topic = PHYSICS_ATOMIC_TOPICS["atomic-photon-energy-numeric"]
        mode = topic["modes"]["reverse-frequency"]
        for seed in topic["seeds"]:
            problems = generate_formula_drill(
                topic["spec"], seed, PHYSICS_ATOMIC_PROBLEM_COUNT, solve_for=mode["solve_for"]
            )
            for problem in problems:
                known = problem["known"]
                self.assertEqual(problem["solve_for"], "frequency_coefficient")
                self.assertEqual(known["planck_coefficient"], 6.63)
                expected = known["energy_coefficient"] / known["planck_coefficient"]
                self.assertAlmostEqual(problem["answer"], expected)
                self.assertAlmostEqual(problem["answer_spec"]["value"], expected)

    def test_corrupted_direct_and_reverse_answers_are_rejected(self):
        topic = PHYSICS_ATOMIC_TOPICS["atomic-photon-energy-numeric"]
        for mode in topic["modes"].values():
            problem = generate_formula_drill(
                topic["spec"], topic["seeds"][0], 1, solve_for=mode["solve_for"]
            )[0]
            bad = copy.deepcopy(problem)
            bad["answer"] += 1
            with self.assertRaises(AssertionError):
                validate_science_problem(bad)

    def test_hashes_are_disjoint_from_existing_catalog(self):
        hashes = {normalized_hash(problems) for *_, problems in self.generated_batches()}
        self.assertEqual(len(hashes), 60)
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        current_ids = {
            f"science-physics-motion-{topic_key}-{mode_key}-{variant:02d}"
            for topic_key, topic in PHYSICS_ATOMIC_TOPICS.items()
            for mode_key in topic["modes"]
            for variant, _ in enumerate(topic["seeds"], start=1)
        }
        prior_hashes = {
            row["content_hash"]
            for row in catalog
            if row.get("id") not in current_ids
        }
        self.assertTrue(hashes.isdisjoint(prior_hashes))


if __name__ == "__main__":
    unittest.main()
