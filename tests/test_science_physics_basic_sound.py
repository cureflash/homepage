from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_basic_sound import PHYSICS_BASIC_SOUND_PROBLEM_COUNT, PHYSICS_BASIC_SOUND_TOPICS
from scripts.science_worksheet_helpers import generate_formula_drill, validate_science_problem
from scripts.worksheet_factory import normalized_hash, validate


class PhysicsBasicSoundTests(unittest.TestCase):
    def batches(self):
        out = []
        for topic_key, topic in PHYSICS_BASIC_SOUND_TOPICS.items():
            for mode_key, mode in topic["modes"].items():
                for variant, seed in enumerate(topic["seeds"], start=1):
                    problems = generate_formula_drill(
                        topic["spec"], seed, PHYSICS_BASIC_SOUND_PROBLEM_COUNT, solve_for=mode["solve_for"]
                    )
                    out.append((topic_key, mode_key, variant, seed, problems))
        return out

    def test_exactly_thirty_variants(self):
        batches = self.batches()
        self.assertEqual(len(batches), 30)
        self.assertTrue(all(len(problems) == 20 for *_, problems in batches))

    def test_deterministic_and_independently_validated(self):
        for topic_key, mode_key, variant, seed, problems in self.batches():
            topic = PHYSICS_BASIC_SOUND_TOPICS[topic_key]
            mode = topic["modes"][mode_key]
            regenerated = generate_formula_drill(
                topic["spec"], seed, PHYSICS_BASIC_SOUND_PROBLEM_COUNT, solve_for=mode["solve_for"]
            )
            self.assertEqual(problems, regenerated, (topic_key, mode_key, variant))
            validate(problems)
            self.assertTrue(all(validate_science_problem(problem) for problem in problems))

    def test_unique_hashes(self):
        hashes = [normalized_hash(problems) for *_, problems in self.batches()]
        self.assertEqual(len(hashes), 30)
        self.assertEqual(len(set(hashes)), 30)

    def test_relation_directions_and_units(self):
        topic = PHYSICS_BASIC_SOUND_TOPICS["sound-speed-frequency-wavelength"]
        self.assertEqual(topic["formula"], "v = f λ")
        self.assertEqual(topic["spec"]["relation"], "product")
        self.assertEqual(topic["spec"]["result"], "sound_speed")
        self.assertEqual(topic["spec"]["inputs"], ["sound_frequency", "sound_wavelength"])
        self.assertEqual(
            set(topic["modes"]),
            {"basic-sound-speed", "reverse-sound-frequency", "reverse-sound-wavelength"},
        )
        self.assertEqual(topic["spec"]["variables"]["sound_speed"]["unit"], "m/s")
        self.assertEqual(topic["spec"]["variables"]["sound_frequency"]["unit"], "Hz")
        self.assertEqual(topic["spec"]["variables"]["sound_wavelength"]["unit"], "m")

    def test_direct_and_reverse_math(self):
        spec = PHYSICS_BASIC_SOUND_TOPICS["sound-speed-frequency-wavelength"]["spec"]
        direct = generate_formula_drill(spec, 6781, 1, solve_for="sound_speed")[0]
        self.assertEqual(
            direct["answer"], direct["known"]["sound_frequency"] * direct["known"]["sound_wavelength"]
        )
        reverse_frequency = generate_formula_drill(spec, 6781, 1, solve_for="sound_frequency")[0]
        self.assertEqual(
            reverse_frequency["answer"],
            reverse_frequency["known"]["sound_speed"] / reverse_frequency["known"]["sound_wavelength"],
        )
        reverse_wavelength = generate_formula_drill(spec, 6781, 1, solve_for="sound_wavelength")[0]
        self.assertEqual(
            reverse_wavelength["answer"],
            reverse_wavelength["known"]["sound_speed"] / reverse_wavelength["known"]["sound_frequency"],
        )

    def test_generated_answers_keep_requested_units(self):
        for topic_key, mode_key, *_rest, problems in self.batches():
            topic = PHYSICS_BASIC_SOUND_TOPICS[topic_key]
            solve_for = topic["modes"][mode_key]["solve_for"]
            expected_unit = topic["spec"]["variables"][solve_for]["unit"]
            self.assertTrue(all(problem["answer_spec"]["unit"] == expected_unit for problem in problems))

    def test_sound_hashes_do_not_collide_with_general_wave_batch(self):
        from scripts.science_physics_basic_wave import PHYSICS_BASIC_WAVE_PROBLEM_COUNT, PHYSICS_BASIC_WAVE_TOPICS

        wave_hashes = set()
        for topic in PHYSICS_BASIC_WAVE_TOPICS.values():
            for mode in topic["modes"].values():
                for seed in topic["seeds"]:
                    problems = generate_formula_drill(
                        topic["spec"], seed, PHYSICS_BASIC_WAVE_PROBLEM_COUNT, solve_for=mode["solve_for"]
                    )
                    wave_hashes.add(normalized_hash(problems))
        sound_hashes = {normalized_hash(problems) for *_, problems in self.batches()}
        self.assertTrue(sound_hashes.isdisjoint(wave_hashes))


if __name__ == "__main__":
    unittest.main()
