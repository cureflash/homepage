import importlib.util
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_topics import (
    JH1_PHYSICS_FORMULA_TOPICS,
    JH1_PHYSICS_PROBLEM_COUNT,
    JH1_PHYSICS_SEEDS,
)
from scripts.science_worksheet_helpers import generate_formula_drill
from scripts.worksheet_factory import normalized_hash, validate

seen_hashes = set()
for topic in JH1_PHYSICS_FORMULA_TOPICS.values():
    for mode in topic["modes"].values():
        for seed in JH1_PHYSICS_SEEDS:
            problems = generate_formula_drill(
                topic["spec"], seed, JH1_PHYSICS_PROBLEM_COUNT, solve_for=mode["solve_for"]
            )
            assert problems == generate_formula_drill(
                topic["spec"], seed, JH1_PHYSICS_PROBLEM_COUNT, solve_for=mode["solve_for"]
            )
            validate(problems)
            content_hash = normalized_hash(problems)
            assert content_hash not in seen_hashes
            seen_hashes.add(content_hash)
            assert all(problem["answer_spec"]["type"] == "numeric" for problem in problems)

spring = JH1_PHYSICS_FORMULA_TOPICS["spring-extension"]
spring_direct = generate_formula_drill(spring["spec"], 6101, 20, solve_for="x")
assert all(problem["answer"] == problem["known"]["F"] * problem["known"]["k"] for problem in spring_direct)
spring_reverse = generate_formula_drill(spring["spec"], 6101, 20, solve_for="F")
assert all(problem["answer"] == problem["known"]["x"] / problem["known"]["k"] for problem in spring_reverse)

mass = JH1_PHYSICS_FORMULA_TOPICS["mass-newton"]
mass_direct = generate_formula_drill(mass["spec"], 6101, 20, solve_for="m")
assert all(problem["known"]["c"] == 100 for problem in mass_direct)
assert all(problem["answer"] == problem["known"]["F"] * 100 for problem in mass_direct)
mass_reverse = generate_formula_drill(mass["spec"], 6101, 20, solve_for="F")
assert all(problem["known"]["c"] == 100 for problem in mass_reverse)
assert all(problem["answer"] == problem["known"]["m"] / 100 for problem in mass_reverse)

print("junior-high physics grade 1 tests: OK")
