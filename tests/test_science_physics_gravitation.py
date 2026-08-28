import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_gravitation import (
    PHYSICS_GRAVITATION_PROBLEM_COUNT,
    PHYSICS_GRAVITATION_TOPICS,
)
from scripts.science_worksheet_helpers import (
    generate_formula_drill,
    generate_retrieval_drill,
    validate_science_problem,
)
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsGravitationTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_GRAVITATION_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    if topic.get("generator") == "retrieval":
                        problems = generate_retrieval_drill(
                            mode["spec"], seed, PHYSICS_GRAVITATION_PROBLEM_COUNT, mode=mode_key
                        )
                    else:
                        problems = generate_formula_drill(
                            topic["spec"], seed, PHYSICS_GRAVITATION_PROBLEM_COUNT,
                            solve_for=mode["solve_for"],
                        )
                    batches.append((topic_key, mode_key, variant, seed, problems))
        return batches

    def test_three_checkpoints_total_110_variants(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 110)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))
        counts = {}
        for topic_key, *_ in batches:
            counts[topic_key] = counts.get(topic_key, 0) + 1
        self.assertEqual(counts, {
            "universal-gravitation-force": 30,
            "universal-gravitation-core-concepts": 40,
            "kepler-laws-core-concepts": 40,
        })

    def test_deterministic_regeneration_and_independent_validation(self):
        hashes = set()
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            topic = PHYSICS_GRAVITATION_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            if topic.get("generator") == "retrieval":
                regenerated = generate_retrieval_drill(mode["spec"], seed, 20, mode=mode_key)
                expected_type = "accepted-set"
            else:
                regenerated = generate_formula_drill(topic["spec"], seed, 20, solve_for=mode["solve_for"])
                expected_type = "numeric"
            self.assertEqual(problems, regenerated, (topic_key, mode_key, variant))
            validate(problems)
            for problem in problems:
                self.assertTrue(validate_science_problem(problem))
                self.assertEqual(problem["answer_spec"]["type"], expected_type)
            digest = normalized_hash(problems)
            self.assertNotIn(digest, hashes)
            hashes.add(digest)
        self.assertEqual(len(hashes), 110)

    def test_gravitation_formula_recalculated_from_visible_values(self):
        topic = PHYSICS_GRAVITATION_TOPICS["universal-gravitation-force"]
        self.assertEqual(topic["spec"]["relation"], "product")
        for mode_key, mode in topic["modes"].items():
            for seed in topic["seeds"]:
                problems = generate_formula_drill(topic["spec"], seed, 20, solve_for=mode["solve_for"])
                for problem in problems:
                    known = problem["known"]
                    if problem["solve_for"] == "force":
                        expected = (
                            known["gravitational_constant"] * known["mass_1"] * known["mass_2"]
                            * known["inverse_square_distance"]
                        )
                    elif problem["solve_for"] == "mass_1":
                        expected = known["force"] / (
                            known["gravitational_constant"] * known["mass_2"]
                            * known["inverse_square_distance"]
                        )
                    else:
                        expected = known["force"] / (
                            known["gravitational_constant"] * known["mass_1"] * known["mass_2"]
                        )
                    self.assertAlmostEqual(problem["answer"], expected, msg=(mode_key, seed))
                    self.assertAlmostEqual(problem["answer_spec"]["value"], expected)

    def test_gravitation_contract_is_learner_visible(self):
        topic = PHYSICS_GRAVITATION_TOPICS["universal-gravitation-force"]
        self.assertIn("r²", topic["formula"])
        self.assertIn("1/r²", topic["formula"])
        self.assertIn("6.67×10^-11", topic["formula"])
        variables = topic["spec"]["variables"]
        self.assertEqual(variables["gravitational_constant"]["values"], [6.67e-11])
        self.assertIn("逆2乗", variables["inverse_square_distance"]["label"])
        self.assertEqual(variables["inverse_square_distance"]["unit"], "m⁻²")
        self.assertTrue(all(value > 0 for value in variables["inverse_square_distance"]["values"]))

    def test_reverse_retrieval_sources_are_unambiguous(self):
        for topic_key in ("universal-gravitation-core-concepts", "kepler-laws-core-concepts"):
            items = PHYSICS_GRAVITATION_TOPICS[topic_key]["modes"]["reverse"]["spec"]["items"]
            seen = {}
            for item in items:
                for right in item["right"]:
                    self.assertNotIn(right, seen, (topic_key, right, seen.get(right), item["left"]))
                    seen[right] = item["left"]

    def test_corrupted_answers_are_rejected(self):
        formula = PHYSICS_GRAVITATION_TOPICS["universal-gravitation-force"]
        problem = generate_formula_drill(
            formula["spec"], formula["seeds"][0], 1,
            solve_for=formula["modes"]["basic-force"]["solve_for"],
        )[0]
        bad_formula = copy.deepcopy(problem)
        bad_formula["answer"] += 1
        with self.assertRaises(AssertionError):
            validate_science_problem(bad_formula)

        retrieval = PHYSICS_GRAVITATION_TOPICS["kepler-laws-core-concepts"]
        fill = retrieval["modes"]["fill"]
        problem = generate_retrieval_drill(fill["spec"], retrieval["seeds"][0], 1, mode="fill")[0]
        bad_retrieval = copy.deepcopy(problem)
        bad_retrieval["answer"] = "誤答"
        with self.assertRaises(AssertionError):
            validate_science_problem(bad_retrieval)

    def test_normalized_hashes_unique_and_disjoint_from_existing_catalog(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 110)
        self.assertEqual(len(set(hashes)), 110)
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        current_ids = {
            f"science-physics-motion-{topic_key}-{mode_key}-{variant:02d}"
            for topic_key, topic in PHYSICS_GRAVITATION_TOPICS.items()
            for mode_key in topic["modes"]
            for variant, _ in enumerate(topic["seeds"], start=1)
        }
        prior_hashes = {row["content_hash"] for row in catalog if row.get("id") not in current_ids}
        self.assertTrue(set(hashes).isdisjoint(prior_hashes))


if __name__ == "__main__":
    unittest.main()
