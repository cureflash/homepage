import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_waves import PHYSICS_WAVES_PROBLEM_COUNT, PHYSICS_WAVES_TOPICS
from scripts.science_worksheet_helpers import generate_retrieval_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsWavesTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_WAVES_TOPICS.items():
            self.assertEqual(topic.get("generator"), "retrieval")
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    problems = generate_retrieval_drill(
                        mode["spec"], seed, PHYSICS_WAVES_PROBLEM_COUNT, mode=mode_key
                    )
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
            "wave-propagation-core-concepts": 40,
            "wave-sine-phase-core-concepts": 40,
            "water-wave-interference-diffraction-concepts": 40,
        })

    def test_deterministic_regeneration_finite_answer_validation_and_hashes(self):
        hashes = set()
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            topic = PHYSICS_WAVES_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            regenerated = generate_retrieval_drill(mode["spec"], seed, 20, mode=mode_key)
            self.assertEqual(problems, regenerated, (topic_key, mode_key, variant))
            validate(problems)
            for problem in problems:
                self.assertTrue(validate_science_problem(problem))
                self.assertEqual(problem["answer_spec"]["type"], "accepted-set")
            digest = normalized_hash(problems)
            self.assertNotIn(digest, hashes)
            hashes.add(digest)
        self.assertEqual(len(hashes), 120)

    def test_reverse_retrieval_shown_text_is_unique(self):
        for topic_key, topic in PHYSICS_WAVES_TOPICS.items():
            reverse_items = topic["modes"]["reverse"]["spec"]["items"]
            shown = [answer for item in reverse_items for answer in item["right"]]
            self.assertEqual(len(shown), len(set(shown)), topic_key)

    def test_corrupted_retrieval_answer_is_rejected(self):
        topic = PHYSICS_WAVES_TOPICS["water-wave-interference-diffraction-concepts"]
        mode = topic["modes"]["fill"]
        problem = generate_retrieval_drill(mode["spec"], topic["seeds"][0], 1, mode="fill")[0]
        bad = copy.deepcopy(problem)
        bad["answer"] = "誤答"
        with self.assertRaises(AssertionError):
            validate_science_problem(bad)

    def test_formal_wave_scope_is_learner_visible_and_standing_wave_not_duplicated(self):
        text = json.dumps(PHYSICS_WAVES_TOPICS, ensure_ascii=False)
        for token in [
            "ホイヘンス", "水面波", "反射", "屈折", "正弦波", "位相", "干渉", "回折",
            "mλ", "(m+1/2)λ",
        ]:
            self.assertIn(token, text)
        self.assertNotIn("定在波", text)
        self.assertNotIn("定常波", text)
        self.assertTrue(all(topic["unit"] == "波：波の伝わり方" for topic in PHYSICS_WAVES_TOPICS.values()))

    def test_normalized_hashes_unique_and_disjoint_from_existing_catalog(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 120)
        self.assertEqual(len(set(hashes)), 120)
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        current_ids = {
            f"science-physics-motion-{topic_key}-{mode_key}-{variant:02d}"
            for topic_key, topic in PHYSICS_WAVES_TOPICS.items()
            for mode_key in topic["modes"]
            for variant, _ in enumerate(topic["seeds"], start=1)
        }
        prior_hashes = {row["content_hash"] for row in catalog if row.get("id") not in current_ids}
        self.assertTrue(set(hashes).isdisjoint(prior_hashes))


if __name__ == "__main__":
    unittest.main()
