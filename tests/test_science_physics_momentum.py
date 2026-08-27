import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_momentum import PHYSICS_MOMENTUM_PROBLEM_COUNT, PHYSICS_MOMENTUM_TOPICS
from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsMomentumTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_MOMENTUM_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    problems = generate_formula_drill(topic["spec"], seed, PHYSICS_MOMENTUM_PROBLEM_COUNT, solve_for=mode["solve_for"])
                    batches.append((topic_key, mode_key, variant, seed, problems))
        return batches

    def test_five_checkpoints_total_one_hundred_fifty_variants(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 150)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))
        counts = {key: 0 for key in PHYSICS_MOMENTUM_TOPICS}
        for topic_key, *_ in batches:
            counts[topic_key] += 1
        self.assertEqual(set(counts.values()), {30})

    def test_deterministic_regeneration_and_validation(self):
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            topic = PHYSICS_MOMENTUM_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            regenerated = generate_formula_drill(topic["spec"], seed, PHYSICS_MOMENTUM_PROBLEM_COUNT, solve_for=mode["solve_for"])
            self.assertEqual(problems, regenerated, (topic_key, mode_key, variant))
            validate(problems)
            for problem in problems:
                self.assertTrue(validate_science_problem(problem))

    def test_independent_visible_value_recalculation(self):
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            for problem in problems:
                known = problem["known"]
                solve_for = problem["solve_for"]
                if topic_key == "momentum-one-dimensional":
                    if solve_for == "momentum": expected = known["mass"] * known["velocity"]
                    elif solve_for == "mass": expected = known["momentum"] / known["velocity"]
                    else: expected = known["momentum"] / known["mass"]
                elif topic_key in {"impulse-one-dimensional", "momentum-change-from-impulse"}:
                    result_key = "impulse" if topic_key == "impulse-one-dimensional" else "momentum_change"
                    if solve_for == result_key: expected = known["force"] * known["duration"]
                    elif solve_for == "force": expected = known[result_key] / known["duration"]
                    else: expected = known[result_key] / known["force"]
                elif topic_key == "momentum-conservation-total-before-after":
                    if solve_for == "final_total_momentum": expected = known["initial_momentum_1"] + known["initial_momentum_2"]
                    elif solve_for == "initial_momentum_1": expected = known["final_total_momentum"] - known["initial_momentum_2"]
                    else: expected = known["final_total_momentum"] - known["initial_momentum_1"]
                else:
                    if solve_for == "final_momentum_2": expected = known["initial_total_momentum"] - known["final_momentum_1"]
                    elif solve_for == "initial_total_momentum": expected = known["final_momentum_2"] + known["final_momentum_1"]
                    else: expected = known["initial_total_momentum"] - known["final_momentum_2"]
                self.assertAlmostEqual(problem["answer"], expected, msg=(topic_key, mode_key, variant))
                self.assertAlmostEqual(problem["answer_spec"]["value"], expected)

    def test_sign_convention_is_visible_and_both_directions_occur(self):
        for topic_key, topic in PHYSICS_MOMENTUM_TOPICS.items():
            self.assertEqual(topic["unit"], "様々な運動：運動量と力積")
            self.assertNotIn("grade", topic)
            self.assertNotIn("school_year", topic)
            self.assertTrue(any("右向きを正" in variable.get("label", "") for variable in topic["spec"]["variables"].values()))
            mode = next(iter(topic["modes"].values()))
            answers = []
            for seed in topic["seeds"]:
                answers.extend(p["answer"] for p in generate_formula_drill(topic["spec"], seed, PHYSICS_MOMENTUM_PROBLEM_COUNT, solve_for=mode["solve_for"]))
            self.assertTrue(any(value > 0 for value in answers), topic_key)
            self.assertTrue(any(value < 0 for value in answers), topic_key)

    def test_conservation_assumptions_and_equal_total_are_learner_visible(self):
        conservation = [PHYSICS_MOMENTUM_TOPICS[key] for key in (
            "momentum-conservation-total-before-after",
            "momentum-conservation-final-object",
        )]
        self.assertEqual(conservation[0]["spec"]["relation"], "sum")
        self.assertEqual(conservation[1]["spec"]["relation"], "difference")
        for topic in conservation:
            self.assertIn("P前=P後", topic["formula"])
            self.assertTrue(all("外力の力積を無視できる" in mode["description"] for mode in topic["modes"].values()))
            self.assertTrue(all("1次元" in mode["description"] for mode in topic["modes"].values()))

    def test_momentum_change_checkpoint_states_impulse_theorem(self):
        topic = PHYSICS_MOMENTUM_TOPICS["momentum-change-from-impulse"]
        self.assertIn("力積は運動量の変化に等しい", topic["formula"])
        self.assertTrue(all("力積は運動量の変化に等しい" in mode["description"] for mode in topic["modes"].values()))

    def test_normalized_hashes_unique_and_disjoint_from_existing_catalog(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 150)
        self.assertEqual(len(set(hashes)), 150)
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        current_ids = {f"science-physics-motion-{topic_key}-{mode_key}-{variant:02d}" for topic_key, topic in PHYSICS_MOMENTUM_TOPICS.items() for mode_key in topic["modes"] for variant, _ in enumerate(topic["seeds"], start=1)}
        prior_hashes = {row["content_hash"] for row in catalog if row.get("id") not in current_ids}
        self.assertTrue(set(hashes).isdisjoint(prior_hashes))

    def test_corrupted_answers_are_rejected(self):
        for topic_key, topic in PHYSICS_MOMENTUM_TOPICS.items():
            mode = next(iter(topic["modes"].values()))
            problem = generate_formula_drill(topic["spec"], topic["seeds"][0], 1, solve_for=mode["solve_for"])[0]
            bad = copy.deepcopy(problem)
            bad["answer"] += 1
            with self.assertRaises(AssertionError, msg=topic_key):
                validate_science_problem(bad)


if __name__ == "__main__":
    unittest.main()
