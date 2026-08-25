import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.science_physics_jh1_light_sound_topics import (
    JH1_LIGHT_SOUND_PROBLEM_COUNT,
    JH1_LIGHT_SOUND_SEEDS,
    JH1_PHYSICS_LIGHT_SOUND_TOPICS,
)
from scripts.science_worksheet_helpers import generate_retrieval_drill
from scripts.worksheet_factory import normalized_hash, text_problem, validate

assert JH1_LIGHT_SOUND_PROBLEM_COUNT == 10
assert set(JH1_PHYSICS_LIGHT_SOUND_TOPICS) == {'light', 'sound'}

hashes = set()
for topic_key, topic in JH1_PHYSICS_LIGHT_SOUND_TOPICS.items():
    assert topic['unit'] == '光と音'
    assert set(topic['modes']) == {'forward', 'reverse', 'fill'}
    for mode_key, mode in topic['modes'].items():
        assert mode['spec']['mode'] == 'fill'
        assert len(mode['spec']['items']) >= 10
        for variant, seed in enumerate(JH1_LIGHT_SOUND_SEEDS, start=1):
            problems_a = generate_retrieval_drill(
                mode['spec'], seed, JH1_LIGHT_SOUND_PROBLEM_COUNT, mode=mode['spec']['mode']
            )
            problems_b = generate_retrieval_drill(
                mode['spec'], seed, JH1_LIGHT_SOUND_PROBLEM_COUNT, mode=mode['spec']['mode']
            )
            assert problems_a == problems_b
            validate(problems_a)
            assert len(problems_a) == JH1_LIGHT_SOUND_PROBLEM_COUNT
            assert all(p['answer_spec']['type'] == 'accepted-set' for p in problems_a)
            assert all(len(text_problem(p)) <= 34 for p in problems_a), (topic_key, mode_key)
            content_hash = normalized_hash(problems_a)
            assert content_hash not in hashes, (topic_key, mode_key, variant)
            hashes.add(content_hash)

assert len(hashes) == 18

light_answers = {
    answer
    for mode in JH1_PHYSICS_LIGHT_SOUND_TOPICS['light']['modes'].values()
    for item in mode['spec']['items']
    for answer in item['answer']
}
for required in ('等しい', '屈折', '全反射', '焦点', '実像', '虚像', 'プリズム'):
    assert required in light_answers

sound_answers = {
    answer
    for mode in JH1_PHYSICS_LIGHT_SOUND_TOPICS['sound']['modes'].values()
    for item in mode['spec']['items']
    for answer in item['answer']
}
for required in ('振動', '空気', '波', '振幅', '振動数', '物質'):
    assert required in sound_answers

sample = generate_retrieval_drill(
    JH1_PHYSICS_LIGHT_SOUND_TOPICS['sound']['modes']['fill']['spec'],
    JH1_LIGHT_SOUND_SEEDS[0],
    JH1_LIGHT_SOUND_PROBLEM_COUNT,
    mode='fill',
)
broken = dict(sample[0])
broken['answer_spec'] = {'type': 'accepted-set', 'values': ['誤答']}
try:
    validate([broken])
    raise AssertionError('corrupted light/sound answer was not rejected')
except AssertionError:
    pass

print('junior-high physics grade 1 light/sound tests: OK')
