import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_sound import PHYSICS_SOUND_PROBLEM_COUNT, PHYSICS_SOUND_TOPICS
from scripts.science_worksheet_helpers import generate_formula_drill, generate_retrieval_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsSoundTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_SOUND_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    if topic.get("generator") == "retrieval":
                        problems = generate_retrieval_drill(
                            mode["spec"], seed, PHYSICS_SOUND_PROBLEM_COUNT, mode=mode_key
                        )
                    else:
                        problems = generate_formula_drill(
                            topic["spec"], seed, PHYSICS_SOUND_PROBLEM_COUNT, solve_for=mode["solve_for"]
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
            "sound-interference-diffraction-concepts": 40,
            "sound-doppler-core-concepts": 40,
            "sound-doppler-numeric": 30,
        })

    def test_deterministic_regeneration_validation_and_hashes(self):
        hashes = set()
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            topic = PHYSICS_SOUND_TOPICS[topic_key]
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

    def test_doppler_visible_value_independent_recalculation_and_domain(self):
        topic = PHYSICS_SOUND_TOPICS["sound-doppler-numeric"]
        mode = topic["modes"]["basic-observed-frequency"]
        for seed in topic["seeds"]:
            problems = generate_formula_drill(topic["spec"], seed, 20, solve_for=mode["solve_for"])
            for problem in problems:
                known = problem["known"]
                f_src = known["source_frequency"]
                c = known["sound_speed"]
                v_o = known["observer_velocity"]
                v_s = known["source_velocity"]
                self.assertGreater(c + v_o, 0)
                self.assertGreater(c - v_s, 0)
                self.assertLess(abs(v_o), c)
                self.assertLess(abs(v_s), c)
                expected = round(f_src * (c + v_o) / (c - v_s), 1)
                self.assertEqual(problem["answer"], expected)
                self.assertEqual(problem["answer_spec"]["value"], expected)

    def test_doppler_inverse_generation_rejected_after_rounding(self):
        topic = PHYSICS_SOUND_TOPICS["sound-doppler-numeric"]
        with self.assertRaises(ValueError):
            generate_formula_drill(topic["spec"], topic["seeds"][0], 1, solve_for="source_frequency")
        with self.assertRaises(ValueError):
            generate_formula_drill(topic["spec"], topic["seeds"][0], 1, solve_for="observer_velocity")
        with self.assertRaises(ValueError):
            generate_formula_drill(topic["spec"], topic["seeds"][0], 1, solve_for="source_velocity")

    def test_reverse_retrieval_shown_text_is_unique(self):
        for topic_key, topic in PHYSICS_SOUND_TOPICS.items():
            if topic.get("generator") != "retrieval":
                continue
            reverse_items = topic["modes"]["reverse"]["spec"]["items"]
            shown = [answer for item in reverse_items for answer in item["right"]]
            self.assertEqual(len(shown), len(set(shown)), topic_key)

    def test_corrupted_answers_are_rejected(self):
        retrieval = PHYSICS_SOUND_TOPICS["sound-doppler-core-concepts"]
        mode = retrieval["modes"]["fill"]
        problem = generate_retrieval_drill(mode["spec"], retrieval["seeds"][0], 1, mode="fill")[0]
        bad = copy.deepcopy(problem)
        bad["answer"] = "誤答"
        with self.assertRaises(AssertionError):
            validate_science_problem(bad)

        numeric = PHYSICS_SOUND_TOPICS["sound-doppler-numeric"]
        mode = numeric["modes"]["basic-observed-frequency"]
        problem = generate_formula_drill(numeric["spec"], numeric["seeds"][0], 1, solve_for=mode["solve_for"])[0]
        bad = copy.deepcopy(problem)
        bad["answer"] += 1
        with self.assertRaises(AssertionError):
            validate_science_problem(bad)

    def test_curriculum_scope_and_direction_conventions_are_learner_visible(self):
        text = json.dumps(PHYSICS_SOUND_TOPICS, ensure_ascii=False)
        for token in [
            "音の干渉", "クインケ管", "音の回折", "音の屈折",
            "ドップラー効果", "同一直線上", "近づく", "遠ざかる", "波長",
            "音速 c", "音源の振動数", "観測者速度", "音源速度",
            "＋:音源へ接近", "＋:観測者へ接近",
        ]:
            self.assertIn(token, text)
        numeric = PHYSICS_SOUND_TOPICS["sound-doppler-numeric"]
        self.assertEqual(numeric["spec"]["relation"], "doppler-same-line")
        self.assertTrue(all(topic["unit"] == "波：音" for topic in PHYSICS_SOUND_TOPICS.values()))

    def test_normalized_hashes_unique_and_disjoint_from_existing_catalog(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 110)
        self.assertEqual(len(set(hashes)), 110)
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        current_ids = {
            f"science-physics-motion-{topic_key}-{mode_key}-{variant:02d}"
            for topic_key, topic in PHYSICS_SOUND_TOPICS.items()
            for mode_key in topic["modes"]
            for variant, _ in enumerate(topic["seeds"], start=1)
        }
        prior_hashes = {row["content_hash"] for row in catalog if row.get("id") not in current_ids}
        self.assertTrue(set(hashes).isdisjoint(prior_hashes))


if __name__ == "__main__":
    unittest.main()
