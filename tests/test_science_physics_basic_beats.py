from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_basic_beats import PHYSICS_BASIC_BEATS_PROBLEM_COUNT, PHYSICS_BASIC_BEATS_TOPICS
from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsBasicBeatsTests(unittest.TestCase):
    def batches(self):
        out = []
        for topic_key, topic in PHYSICS_BASIC_BEATS_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    problems = generate_formula_drill(topic["spec"], seed, PHYSICS_BASIC_BEATS_PROBLEM_COUNT, solve_for=mode["solve_for"])
                    out.append((topic_key, mode_key, variant, seed, problems))
        return out

    def test_exactly_thirty_variants(self):
        batches = self.batches()
        self.assertEqual(len(batches), 30)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))

    def test_deterministic_and_independently_validated(self):
        for topic_key, mode_key, variant, seed, problems in self.batches():
            topic = PHYSICS_BASIC_BEATS_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            regenerated = generate_formula_drill(topic["spec"], seed, PHYSICS_BASIC_BEATS_PROBLEM_COUNT, solve_for=mode["solve_for"])
            self.assertEqual(problems, regenerated, (topic_key, mode_key, variant))
            validate(problems)
            self.assertTrue(all(validate_science_problem(problem) for problem in problems))

    def test_relation_and_independent_math(self):
        for topic_key, mode_key, *_rest, problems in self.batches():
            topic = PHYSICS_BASIC_BEATS_TOPICS[topic_key]
            self.assertEqual(topic["spec"]["relation"], "difference")
            self.assertEqual(topic["formula"], "f_beat = f_high - f_low")
            solve_for = topic["modes"][mode_key]["solve_for"]
            for problem in problems:
                known = problem["known"]
                if solve_for == "beat_frequency":
                    expected = known["higher_frequency"] - known["lower_frequency"]
                elif solve_for == "higher_frequency":
                    expected = known["beat_frequency"] + known["lower_frequency"]
                else:
                    expected = known["higher_frequency"] - known["beat_frequency"]
                self.assertEqual(problem["answer"], expected)

    def test_ordered_frequencies_and_basic_beat_range(self):
        for topic_key, mode_key, *_rest, problems in self.batches():
            solve_for = PHYSICS_BASIC_BEATS_TOPICS[topic_key]["modes"][mode_key]["solve_for"]
            for problem in problems:
                values = dict(problem["known"])
                values[solve_for] = problem["answer"]
                self.assertGreater(values["higher_frequency"], values["lower_frequency"])
                self.assertGreaterEqual(values["beat_frequency"], 5)
                self.assertLessEqual(values["beat_frequency"], 15)
                self.assertEqual(problem["answer_spec"]["unit"], "Hz")

    def test_unique_and_disjoint_hashes(self):
        new_hashes = {normalized_hash(problems) for *_, problems in self.batches()}
        self.assertEqual(len(new_hashes), 30)

        from scripts.science_physics_basic_sound import PHYSICS_BASIC_SOUND_PROBLEM_COUNT, PHYSICS_BASIC_SOUND_TOPICS
        from scripts.science_physics_basic_string import PHYSICS_BASIC_STRING_PROBLEM_COUNT, PHYSICS_BASIC_STRING_TOPICS
        old_hashes = set()
        for topics, count in [
            (PHYSICS_BASIC_SOUND_TOPICS, PHYSICS_BASIC_SOUND_PROBLEM_COUNT),
            (PHYSICS_BASIC_STRING_TOPICS, PHYSICS_BASIC_STRING_PROBLEM_COUNT),
        ]:
            for topic in topics.values():
                for mode in topic["modes"].values():
                    for seed in topic["seeds"]:
                        old_hashes.add(normalized_hash(generate_formula_drill(topic["spec"], seed, count, solve_for=mode["solve_for"])))
        self.assertTrue(new_hashes.isdisjoint(old_hashes))


if __name__ == "__main__":
    unittest.main()
