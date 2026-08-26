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

    def test_exactly_sixty_variants(self):
        batches = self.batches()
        self.assertEqual(len(batches), 60)
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
        self.assertEqual(len(hashes), 60)
        self.assertEqual(len(set(hashes)), 60)

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

    def test_closed_pipe_model_is_explicit_and_reuses_product_relation(self):
        air_topics = {
            key: topic for key, topic in PHYSICS_BASIC_SOUND_TOPICS.items()
            if key.startswith("closed-pipe-fundamental-resonance-")
        }
        self.assertEqual(len(air_topics), 2)
        self.assertEqual(sum(len(topic["modes"]) * len(topic["seeds"]) for topic in air_topics.values()), 30)
        for topic in air_topics.values():
            self.assertEqual(topic["formula"], "v = 4 L f")
            self.assertEqual(topic["spec"]["relation"], "product")
            self.assertEqual(topic["spec"]["variables"]["closed_pipe_factor"]["values"], [4])
            self.assertIn("閉管", topic["title"])
            for mode in topic["modes"].values():
                self.assertIn("一端が閉じた", mode["description"])
                self.assertIn("開口端補正を無視", mode["description"])

    def test_closed_pipe_direct_and_reverse_math(self):
        speed_length = PHYSICS_BASIC_SOUND_TOPICS["closed-pipe-fundamental-resonance-speed-length"]["spec"]
        direct = generate_formula_drill(speed_length, 6811, 1, solve_for="sound_speed")[0]
        self.assertEqual(
            direct["answer"],
            direct["known"]["closed_pipe_factor"]
            * direct["known"]["source_frequency"]
            * direct["known"]["air_column_length"],
        )
        reverse_length = generate_formula_drill(speed_length, 6811, 1, solve_for="air_column_length")[0]
        self.assertEqual(
            reverse_length["answer"],
            reverse_length["known"]["sound_speed"]
            / (reverse_length["known"]["closed_pipe_factor"] * reverse_length["known"]["source_frequency"]),
        )

        frequency = PHYSICS_BASIC_SOUND_TOPICS["closed-pipe-fundamental-resonance-frequency"]["spec"]
        reverse_frequency = generate_formula_drill(frequency, 6831, 1, solve_for="source_frequency")[0]
        self.assertEqual(
            reverse_frequency["answer"],
            reverse_frequency["known"]["sound_speed"]
            / (reverse_frequency["known"]["closed_pipe_factor"] * reverse_frequency["known"]["air_column_length"]),
        )

    def test_closed_pipe_generated_ranges_are_basic_and_physical(self):
        for topic_key, _mode_key, *_rest, problems in self.batches():
            if not topic_key.startswith("closed-pipe-fundamental-resonance-"):
                continue
            for problem in problems:
                self.assertEqual(problem["known"].get("closed_pipe_factor", 4), 4)
                speed = problem["answer"] if problem["solve_for"] == "sound_speed" else problem["known"]["sound_speed"]
                self.assertGreaterEqual(speed, 320)
                self.assertLessEqual(speed, 360)

    def test_generated_answers_keep_requested_units(self):
        for topic_key, mode_key, *_rest, problems in self.batches():
            topic = PHYSICS_BASIC_SOUND_TOPICS[topic_key]
            solve_for = topic["modes"][mode_key]["solve_for"]
            expected_unit = topic["spec"]["variables"][solve_for].get("unit")
            if expected_unit:
                self.assertTrue(all(problem["answer_spec"]["unit"] == expected_unit for problem in problems))
            else:
                self.assertTrue(all("unit" not in problem["answer_spec"] for problem in problems))

    def test_air_column_hashes_do_not_collide_with_basic_sound_quantity_batch(self):
        basic_topic = PHYSICS_BASIC_SOUND_TOPICS["sound-speed-frequency-wavelength"]
        basic_hashes = set()
        for mode in basic_topic["modes"].values():
            for seed in basic_topic["seeds"]:
                basic_hashes.add(normalized_hash(generate_formula_drill(
                    basic_topic["spec"], seed, PHYSICS_BASIC_SOUND_PROBLEM_COUNT, solve_for=mode["solve_for"]
                )))
        air_hashes = {
            normalized_hash(problems)
            for topic_key, _mode_key, *_rest, problems in self.batches()
            if topic_key.startswith("closed-pipe-fundamental-resonance-")
        }
        self.assertEqual(len(air_hashes), 30)
        self.assertTrue(air_hashes.isdisjoint(basic_hashes))

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
