"""Deterministic mixed/review builders for junior-high grade-2 physics.

All numerical content is drawn from the already verified JH2 formula topic registry.
No formula, answer type, renderer, or validation path is duplicated here.
"""

import random

try:
    from scripts.science_physics_jh2_topics import JH2_PHYSICS_FORMULA_TOPICS
    from scripts.science_worksheet_helpers import generate_formula_drill
    from scripts.worksheet_factory import validate
except ModuleNotFoundError:
    from science_physics_jh2_topics import JH2_PHYSICS_FORMULA_TOPICS
    from science_worksheet_helpers import generate_formula_drill
    from worksheet_factory import validate

JH2_PHYSICS_MIXED_SEEDS = tuple(range(6301, 6316))
JH2_PHYSICS_REVIEW_SEEDS = tuple(range(6351, 6366))
JH2_PHYSICS_MIXED_REVIEW_PROBLEM_COUNT = 20


def _chunk(topic_key, mode_key, seed, count):
    topic = JH2_PHYSICS_FORMULA_TOPICS[topic_key]
    mode = topic["modes"][mode_key]
    return generate_formula_drill(topic["spec"], seed, count, solve_for=mode["solve_for"])


def _shuffle_validated(problems, seed):
    rng = random.Random(seed)
    rng.shuffle(problems)
    validate(problems)
    return problems


def generate_jh2_physics_mixed(seed):
    """Cross-skill calculation practice spanning circuits, Ohm's law and energy."""
    recipe = [
        ("ohms-law", "basic", 3),
        ("ohms-law", "reverse-current", 2),
        ("ohms-law", "reverse-resistance", 2),
        ("series-voltage", "basic", 2),
        ("parallel-current", "basic", 2),
        ("series-resistance", "basic", 2),
        ("electric-power", "basic", 3),
        ("electric-energy", "basic", 2),
        ("heat-quantity", "basic", 2),
    ]
    problems = []
    for index, (topic_key, mode_key, count) in enumerate(recipe, start=1):
        problems += _chunk(topic_key, mode_key, seed * 100 + index, count)
    assert len(problems) == JH2_PHYSICS_MIXED_REVIEW_PROBLEM_COUNT
    return _shuffle_validated(problems, seed * 100 + 99)


def generate_jh2_physics_review(seed):
    """Cumulative JH2 electricity review with deliberate breadth and reverse solving."""
    recipe = [
        ("ohms-law", "basic", 2),
        ("ohms-law", "reverse-current", 2),
        ("ohms-law", "reverse-resistance", 2),
        ("series-voltage", "basic", 2),
        ("parallel-current", "basic", 2),
        ("series-resistance", "basic", 2),
        ("electric-power", "basic", 2),
        ("electric-energy", "basic", 3),
        ("heat-quantity", "basic", 3),
    ]
    problems = []
    for index, (topic_key, mode_key, count) in enumerate(recipe, start=1):
        problems += _chunk(topic_key, mode_key, seed * 1000 + index, count)
    assert len(problems) == JH2_PHYSICS_MIXED_REVIEW_PROBLEM_COUNT
    return _shuffle_validated(problems, seed * 1000 + 999)
