import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_induction_followup import PHYSICS_INDUCTION_FOLLOWUP_PROBLEM_COUNT, PHYSICS_INDUCTION_FOLLOWUP_TOPICS
from scripts.science_worksheet_helpers import generate_formula_drill, generate_retrieval_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsInductionFollowupTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_INDUCTION_FOLLOWUP_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    if topic["generator"] == "retrieval":
                        problems = generate_retrieval_drill(mode["spec"], seed, PHYSICS_INDUCTION_FOLLOWUP_PROBLEM_COUNT, mode=mode_key)
                    else:
                        problems = generate_formula_drill(topic["spec"], seed, PHYSICS_INDUCTION_FOLLOWUP_PROBLEM_COUNT, solve_for=mode["solve_for"])
                    batches.append((topic_key, mode_key, variant, seed, problems))
        return batches

    def test_three_checkpoints_total_120_variants(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 120)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))
        counts = {}
        for topic_key, *_ in batches:
            counts[topic_key] = counts.get(topic_key, 0) + 1
        self.assertEqual(counts, {
            "induction-self-inductance-numeric": 40,
            "induction-mutual-inductance-numeric": 40,
            "induction-followup-concepts": 40,
        })

    def test_deterministic_validation_and_unique_hashes(self):
        hashes = set()
        for topic_key, mode_key, _, seed, problems in self.generated_batches():
            topic = PHYSICS_INDUCTION_FOLLOWUP_TOPICS[topic_key]
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
        self.assertEqual(len(hashes), 120)

    def test_numeric_visible_values_recompute_answers(self):
        for topic_key, _, _, _, problems in self.generated_batches():
            if topic_key == "induction-followup-concepts":
                continue
            coeff_key = "inductance" if topic_key == "induction-self-inductance-numeric" else "mutual_inductance"
            for problem in problems:
                k = problem["known"]
                solve_for = problem["solve_for"]
                if solve_for == "emf": expected = k[coeff_key] * k["current_change"] / k["time_interval"]
                elif solve_for == coeff_key: expected = k["emf"] * k["time_interval"] / k["current_change"]
                elif solve_for == "current_change": expected = k["emf"] * k["time_interval"] / k[coeff_key]
                else: expected = k[coeff_key] * k["current_change"] / k["emf"]
                self.assertAlmostEqual(problem["answer"], expected)
                self.assertAlmostEqual(problem["answer_spec"]["value"], expected)

    def test_scope_units_and_direction_are_visible(self):
        text = json.dumps(PHYSICS_INDUCTION_FOLLOWUP_TOPICS, ensure_ascii=False)
        for token in ["|E|=L|ΔI|/Δt", "|E2|=M|ΔI1|/Δt", "H", "自己誘導", "相互誘導", "交流発電機", "レンツの法則"]:
            self.assertIn(token, text)
        self.assertTrue(all(topic["unit"] == "電気と磁気：電磁誘導" for topic in PHYSICS_INDUCTION_FOLLOWUP_TOPICS.values()))

    def test_numeric_domains_and_corruption_rejection(self):
        for topic_key, _, _, _, problems in self.generated_batches():
            if topic_key == "induction-followup-concepts": continue
            for problem in problems:
                self.assertGreater(problem["answer"], 0)
                self.assertTrue(all(value > 0 for value in problem["known"].values()))
        topic = PHYSICS_INDUCTION_FOLLOWUP_TOPICS["induction-self-inductance-numeric"]
        mode = topic["modes"]["basic-emf"]
        problem = generate_formula_drill(topic["spec"], topic["seeds"][0], 1, solve_for=mode["solve_for"])[0]
        bad = copy.deepcopy(problem)
        bad["answer"] += 1
        with self.assertRaises(AssertionError): validate_science_problem(bad)

    def test_retrieval_answers_are_finite(self):
        topic = PHYSICS_INDUCTION_FOLLOWUP_TOPICS["induction-followup-concepts"]
        for mode_key, mode in topic["modes"].items():
            problems = generate_retrieval_drill(mode["spec"], topic["seeds"][0], 20, mode=mode_key)
            for problem in problems:
                self.assertEqual(problem["answer_spec"]["type"], "accepted-set")
                self.assertTrue(problem["answer_spec"]["values"])

    def test_hashes_disjoint_from_existing_catalog(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(set(hashes)), 120)
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        current_ids = {f"science-physics-motion-{topic_key}-{mode_key}-{variant:02d}" for topic_key, topic in PHYSICS_INDUCTION_FOLLOWUP_TOPICS.items() for mode_key in topic["modes"] for variant, _ in enumerate(topic["seeds"], start=1)}
        prior_hashes = {row["content_hash"] for row in catalog if row.get("id") not in current_ids}
        self.assertTrue(set(hashes).isdisjoint(prior_hashes))


if __name__ == "__main__": unittest.main()
