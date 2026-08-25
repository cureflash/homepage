import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_jh1_mixed_review import (
    JH1_PHYSICS_MIXED_REVIEW_PROBLEM_COUNT,
    JH1_PHYSICS_MIXED_SEEDS,
    JH1_PHYSICS_REVIEW_SEEDS,
    generate_jh1_physics_mixed,
    generate_jh1_physics_review,
)
from scripts.worksheet_factory import normalized_hash, validate

all_sets = []
for generator, seeds in (
    (generate_jh1_physics_mixed, JH1_PHYSICS_MIXED_SEEDS),
    (generate_jh1_physics_review, JH1_PHYSICS_REVIEW_SEEDS),
):
    for seed in seeds:
        first = generator(seed)
        second = generator(seed)
        assert first == second
        assert len(first) == JH1_PHYSICS_MIXED_REVIEW_PROBLEM_COUNT
        validate(first)
        assert all(problem['answer_spec']['type'] == 'accepted-set' for problem in first)
        assert max(len(problem['prompt']) for problem in first) < 80
        all_sets.append(first)

hashes = [normalized_hash(problems) for problems in all_sets]
assert len(hashes) == len(set(hashes)) == 6

# Mixed sheets are intentionally fill-style and must retrieve all three domains.
mixed = generate_jh1_physics_mixed(JH1_PHYSICS_MIXED_SEEDS[0])
prompts = ' '.join(problem['prompt'] for problem in mixed)
assert any(word in prompts for word in ('力', '質量', '重力', 'ニュートン'))
assert any(word in prompts for word in ('光', '反射', '屈折', 'レンズ', '像'))
assert any(word in prompts for word in ('音', '振幅', '振動数', '振動'))

# Review changes retrieval direction/format instead of being a renamed mixed sheet.
review = generate_jh1_physics_review(JH1_PHYSICS_REVIEW_SEEDS[0])
assert any(problem['type'] == 'science-retrieval-pair' for problem in review)
assert any(problem['type'] == 'science-retrieval-tf' for problem in review)
assert any(problem['type'] == 'science-retrieval-fill' for problem in review)

broken = dict(review[0])
broken['answer'] = '誤答'
try:
    validate([broken])
    raise AssertionError('corrupted mixed/review answer was not rejected')
except AssertionError:
    pass

print('junior-high physics grade 1 mixed/review tests: OK')
