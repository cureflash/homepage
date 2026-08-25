"""Deterministic mixed/review builders for junior-high grade-3 physics.

All numerical content is drawn from the already verified JH3 formula topic registry.
No new formula relation, renderer, or validation path is introduced here.
"""

import random

try:
    from scripts.science_physics_jh3_topics import JH3_PHYSICS_FORMULA_TOPICS
    from scripts.science_worksheet_helpers import generate_formula_drill
    from scripts.worksheet_factory import validate
except ModuleNotFoundError:
    from science_physics_jh3_topics import JH3_PHYSICS_FORMULA_TOPICS
    from science_worksheet_helpers import generate_formula_drill
    from worksheet_factory import validate

JH3_PHYSICS_MIXED_SEEDS = tuple(range(6451, 6466))
JH3_PHYSICS_REVIEW_SEEDS = tuple(range(6471, 6486))
JH3_PHYSICS_MIXED_REVIEW_PROBLEM_COUNT = 20


def _chunk(topic_key, mode_key, seed, count):
    topic = JH3_PHYSICS_FORMULA_TOPICS[topic_key]
    mode = topic["modes"][mode_key]
    return generate_formula_drill(topic["spec"], seed, count, solve_for=mode["solve_for"])


def _shuffle_validated(problems, seed):
    rng = random.Random(seed)
    rng.shuffle(problems)
    validate(problems)
    return problems


def generate_jh3_physics_mixed(seed):
    """Cross-topic calculation practice spanning speed, work and work rate."""
    recipe = [
        ("speed", "basic", 4),
        ("speed", "reverse-distance", 3),
        ("average-speed", "basic", 3),
        ("work", "basic", 4),
        ("work", "reverse-force", 3),
        ("power", "basic", 3),
    ]
    problems = []
    for index, (topic_key, mode_key, count) in enumerate(recipe, start=1):
        problems += _chunk(topic_key, mode_key, seed * 100 + index, count)
    assert len(problems) == JH3_PHYSICS_MIXED_REVIEW_PROBLEM_COUNT
    return _shuffle_validated(problems, seed * 100 + 99)


def generate_jh3_physics_review(seed):
    """Cumulative JH3 motion/work review with deliberate reverse-solving breadth."""
    recipe = [
        ("speed", "basic", 3),
        ("speed", "reverse-distance", 4),
        ("average-speed", "basic", 3),
        ("work", "basic", 3),
        ("work", "reverse-force", 3),
        ("power", "basic", 4),
    ]
    problems = []
    for index, (topic_key, mode_key, count) in enumerate(recipe, start=1):
        problems += _chunk(topic_key, mode_key, seed * 1000 + index, count)
    assert len(problems) == JH3_PHYSICS_MIXED_REVIEW_PROBLEM_COUNT
    return _shuffle_validated(problems, seed * 1000 + 999)
