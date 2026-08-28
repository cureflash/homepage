import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_light import PHYSICS_LIGHT_PROBLEM_COUNT, PHYSICS_LIGHT_TOPICS
from scripts.science_worksheet_helpers import generate_retrieval_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsLightTests(unittest.TestCase):
    def generated_batches(self):
        batches = []
        for topic_key, topic in PHYSICS_LIGHT_TOPICS.items():
            self.assertEqual(topic.get("generator"), "retrieval")
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    problems = generate_retrieval_drill(mode["spec"], seed, PHYSICS_LIGHT_PROBLEM_COUNT, mode=mode_key)
                    batches.append((topic_key, mode_key, variant, seed, problems))
        return batches

    def test_two_checkpoints_total_80_variants(self):
        batches = self.generated_batches()
        self.assertEqual(len(batches), 80)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))
        counts = {}
        for topic_key, *_ in batches:
            counts[topic_key] = counts.get(topic_key, 0) + 1
        self.assertEqual(counts, {
            "light-propagation-core-concepts": 40,
            "light-diffraction-interference-concepts": 40,
        })

    def test_deterministic_regeneration_independent_validation_and_hashes(self):
        hashes = set()
        for topic_key, mode_key, variant, seed, problems in self.generated_batches():
            topic = PHYSICS_LIGHT_TOPICS[topic_key]
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
        self.assertEqual(len(hashes), 80)

    def test_reverse_retrieval_shown_text_is_unique(self):
        for topic_key, topic in PHYSICS_LIGHT_TOPICS.items():
            reverse_items = topic["modes"]["reverse"]["spec"]["items"]
            shown = [answer for item in reverse_items for answer in item["right"]]
            self.assertEqual(len(shown), len(set(shown)), topic_key)

    def test_corrupted_retrieval_answer_is_rejected(self):
        topic = PHYSICS_LIGHT_TOPICS["light-diffraction-interference-concepts"]
        mode = topic["modes"]["fill"]
        problem = generate_retrieval_drill(mode["spec"], topic["seeds"][0], 1, mode="fill")[0]
        bad = copy.deepcopy(problem)
        bad["answer"] = "誤答"
        with self.assertRaises(AssertionError):
            validate_science_problem(bad)

    def test_curriculum_contract_is_learner_visible(self):
        text = json.dumps(PHYSICS_LIGHT_TOPICS, ensure_ascii=False)
        for token in [
            "3.0×10^8", "反射", "屈折", "屈折率", "分散", "偏光", "スペクトル",
            "ヤング", "回折格子", "薄膜干渉", "光路長", "位相変化",
        ]:
            self.assertIn(token, text)
        self.assertTrue(all(topic["unit"] == "波：光" for topic in PHYSICS_LIGHT_TOPICS.values()))

    def test_normalized_hashes_unique_and_disjoint_from_existing_catalog(self):
        hashes = [normalized_hash(problems) for *_, problems in self.generated_batches()]
        self.assertEqual(len(hashes), 80)
        self.assertEqual(len(set(hashes)), 80)
        catalog = json.loads((ROOT / "worksheets" / "catalog.json").read_text(encoding="utf-8"))
        current_ids = {
            f"science-physics-motion-{topic_key}-{mode_key}-{variant:02d}"
            for topic_key, topic in PHYSICS_LIGHT_TOPICS.items()
            for mode_key in topic["modes"]
            for variant, _ in enumerate(topic["seeds"], start=1)
        }
        prior_hashes = {row["content_hash"] for row in catalog if row.get("id") not in current_ids}
        self.assertTrue(set(hashes).isdisjoint(prior_hashes))


if __name__ == "__main__":
    unittest.main()
