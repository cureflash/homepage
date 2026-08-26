from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_basic_string import PHYSICS_BASIC_STRING_PROBLEM_COUNT, PHYSICS_BASIC_STRING_TOPICS
from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsBasicStringTests(unittest.TestCase):
    def batches(self):
        out = []
        for topic_key, topic in PHYSICS_BASIC_STRING_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    problems = generate_formula_drill(topic["spec"], seed, PHYSICS_BASIC_STRING_PROBLEM_COUNT, solve_for=mode["solve_for"])
                    out.append((topic_key, mode_key, variant, seed, problems))
        return out

    def test_exactly_thirty_variants(self):
        batches = self.batches()
        self.assertEqual(len(batches), 30)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))

    def test_deterministic_and_independently_validated(self):
        for topic_key, mode_key, variant, seed, problems in self.batches():
            topic = PHYSICS_BASIC_STRING_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            regenerated = generate_formula_drill(topic["spec"], seed, PHYSICS_BASIC_STRING_PROBLEM_COUNT, solve_for=mode["solve_for"])
            self.assertEqual(problems, regenerated, (topic_key, mode_key, variant))
            validate(problems)
            self.assertTrue(all(validate_science_problem(problem) for problem in problems))

    def test_model_and_independent_math(self):
        self.assertEqual(sum(len(t["modes"]) * len(t["seeds"]) for t in PHYSICS_BASIC_STRING_TOPICS.values()), 30)
        for topic in PHYSICS_BASIC_STRING_TOPICS.values():
            self.assertEqual(topic["formula"], "v = 2 L f")
            self.assertEqual(topic["spec"]["relation"], "product")
            self.assertEqual(topic["spec"]["variables"]["string_fundamental_factor"]["values"], [2])
            for mode in topic["modes"].values():
                self.assertIn("両端を固定した弦の基本振動", mode["description"])

        spec = PHYSICS_BASIC_STRING_TOPICS["string-fundamental-vibration-speed-length"]["spec"]
        direct = generate_formula_drill(spec, 6891, 1, solve_for="string_wave_speed")[0]
        self.assertEqual(direct["answer"], 2 * direct["known"]["fundamental_frequency"] * direct["known"]["string_length"])
        reverse_length = generate_formula_drill(spec, 6891, 1, solve_for="string_length")[0]
        self.assertEqual(reverse_length["answer"], reverse_length["known"]["string_wave_speed"] / (2 * reverse_length["known"]["fundamental_frequency"]))

        freq_spec = PHYSICS_BASIC_STRING_TOPICS["string-fundamental-vibration-frequency"]["spec"]
        reverse_frequency = generate_formula_drill(freq_spec, 6911, 1, solve_for="fundamental_frequency")[0]
        self.assertEqual(reverse_frequency["answer"], reverse_frequency["known"]["string_wave_speed"] / (2 * reverse_frequency["known"]["string_length"]))

    def test_units_and_positive_basic_ranges(self):
        for topic_key, mode_key, *_rest, problems in self.batches():
            topic = PHYSICS_BASIC_STRING_TOPICS[topic_key]
            solve_for = topic["modes"][mode_key]["solve_for"]
            expected_unit = topic["spec"]["variables"][solve_for].get("unit")
            self.assertTrue(all(problem["answer"] > 0 for problem in problems))
            if expected_unit:
                self.assertTrue(all(problem["answer_spec"]["unit"] == expected_unit for problem in problems))

    def test_unique_hashes_and_disjointness_from_prior_sound(self):
        hashes = {normalized_hash(problems) for *_, problems in self.batches()}
        self.assertEqual(len(hashes), 30)

        from scripts.science_physics_basic_sound import PHYSICS_BASIC_SOUND_PROBLEM_COUNT, PHYSICS_BASIC_SOUND_TOPICS
        sound_hashes = set()
        for topic in PHYSICS_BASIC_SOUND_TOPICS.values():
            for mode in topic["modes"].values():
                for seed in topic["seeds"]:
                    problems = generate_formula_drill(topic["spec"], seed, PHYSICS_BASIC_SOUND_PROBLEM_COUNT, solve_for=mode["solve_for"])
                    sound_hashes.add(normalized_hash(problems))
        self.assertTrue(hashes.isdisjoint(sound_hashes))


if __name__ == "__main__":
    unittest.main()
