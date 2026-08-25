"""Deterministic mixed/review builders for junior-high grade-1 physics.

Facts stay sourced from the already verified light, sound, and force registries.
Generation/validation/rendering remain in the shared worksheet infrastructure.
"""

import random

try:
    from scripts.science_physics_topics import JH1_PHYSICS_RETRIEVAL_TOPICS
    from scripts.science_physics_jh1_light_sound_topics import JH1_PHYSICS_LIGHT_SOUND_TOPICS
    from scripts.science_worksheet_helpers import generate_retrieval_drill
    from scripts.worksheet_factory import validate
except ModuleNotFoundError:
    from science_physics_topics import JH1_PHYSICS_RETRIEVAL_TOPICS
    from science_physics_jh1_light_sound_topics import JH1_PHYSICS_LIGHT_SOUND_TOPICS
    from science_worksheet_helpers import generate_retrieval_drill
    from worksheet_factory import validate

JH1_PHYSICS_MIXED_SEEDS = (6401, 6402, 6403)
JH1_PHYSICS_REVIEW_SEEDS = (6501, 6502, 6503)
JH1_PHYSICS_MIXED_REVIEW_PROBLEM_COUNT = 10


def _generate_from_mode(mode, seed, count):
    spec = mode["spec"]
    return generate_retrieval_drill(spec, seed, count, mode=spec["mode"])


def _shuffle_validated(problems, seed):
    rng = random.Random(seed)
    rng.shuffle(problems)
    validate(problems)
    return problems


def generate_jh1_physics_mixed(seed):
    """Balanced fill-style retrieval across force, light, and sound."""
    force = JH1_PHYSICS_RETRIEVAL_TOPICS["force-concepts"]["modes"]["fill"]
    light = JH1_PHYSICS_LIGHT_SOUND_TOPICS["light"]["modes"]["fill"]
    sound = JH1_PHYSICS_LIGHT_SOUND_TOPICS["sound"]["modes"]["fill"]
    problems = []
    problems += _generate_from_mode(force, seed * 10 + 1, 4)
    problems += _generate_from_mode(light, seed * 10 + 2, 3)
    problems += _generate_from_mode(sound, seed * 10 + 3, 3)
    assert len(problems) == JH1_PHYSICS_MIXED_REVIEW_PROBLEM_COUNT
    return _shuffle_validated(problems, seed * 10 + 4)


def generate_jh1_physics_review(seed):
    """Cumulative retrieval using multiple directions across all three JH1 domains."""
    force_modes = JH1_PHYSICS_RETRIEVAL_TOPICS["force-concepts"]["modes"]
    light_modes = JH1_PHYSICS_LIGHT_SOUND_TOPICS["light"]["modes"]
    sound_modes = JH1_PHYSICS_LIGHT_SOUND_TOPICS["sound"]["modes"]
    recipe = [
        (force_modes["forward"], 2),
        (force_modes["reverse"], 1),
        (force_modes["tf"], 1),
        (light_modes["forward"], 1),
        (light_modes["reverse"], 1),
        (light_modes["fill"], 1),
        (sound_modes["forward"], 1),
        (sound_modes["reverse"], 1),
        (sound_modes["fill"], 1),
    ]
    problems = []
    for index, (mode, count) in enumerate(recipe, start=1):
        problems += _generate_from_mode(mode, seed * 100 + index, count)
    assert len(problems) == JH1_PHYSICS_MIXED_REVIEW_PROBLEM_COUNT
    return _shuffle_validated(problems, seed * 100 + 99)
