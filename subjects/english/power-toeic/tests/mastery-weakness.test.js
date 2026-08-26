import test from 'node:test';
import assert from 'node:assert/strict';
import {
  MASTERY_STATES,
  buildMasterySnapshot,
  buildMasterySnapshots
} from '../js/core/mastery.js';
import { rankWeakSkills } from '../js/core/weakness.js';

function makeAttempts(skillId, results, context) {
  return results.map((correct, index) => ({
    questionId: `${skillId}-${index + 1}`,
    questionVersion: 1,
    skillId,
    selectedIndex: correct ? 0 : 1,
    correctIndex: 0,
    correct,
    responseMs: 500 + index,
    ...(context ? { context } : {})
  }));
}

test('mastery snapshot distinguishes no evidence, insufficient evidence, weak and training', () => {
  const cases = [
    { results: [], expected: MASTERY_STATES.UNKNOWN },
    { results: [true, false], expected: MASTERY_STATES.TRAINING },
    { results: [false, false, true, false], expected: MASTERY_STATES.WEAK },
    { results: [true, true, true, false], expected: MASTERY_STATES.TRAINING }
  ];

  for (const { results, expected } of cases) {
    const snapshot = buildMasterySnapshot('skill.alpha', makeAttempts('skill.alpha', results));
    assert.equal(snapshot.state, expected);
  }
});

test('mastery records mixed and review evidence without promoting training to mastered', () => {
  const attempts = [
    ...makeAttempts('skill.alpha', [true, true, true, true]),
    ...makeAttempts('skill.alpha', [true, false], 'mixed'),
    ...makeAttempts('skill.alpha', [true], 'review')
  ];
  const snapshot = buildMasterySnapshot('skill.alpha', attempts);
  assert.equal(snapshot.state, MASTERY_STATES.TRAINING);
  assert.deepEqual(snapshot.mixed, { attempts: 2, correct: 1, accuracy: 0.5 });
  assert.deepEqual(snapshot.review, { attempts: 1, correct: 1, accuracy: 1 });
});

test('snapshot list includes requested unknown skills and deterministic extra skill ordering', () => {
  const snapshots = buildMasterySnapshots({
    skillIds: ['skill.beta', 'skill.alpha'],
    attempts: [
      ...makeAttempts('skill.gamma', [false]),
      ...makeAttempts('skill.delta', [true])
    ]
  });
  assert.deepEqual(snapshots.map((snapshot) => snapshot.skillId), [
    'skill.beta',
    'skill.alpha',
    'skill.delta',
    'skill.gamma'
  ]);
});

test('weakness ranking excludes unknown skills and prioritizes stronger error evidence', () => {
  const snapshots = buildMasterySnapshots({
    skillIds: ['skill.unknown', 'skill.weak', 'skill.ok'],
    attempts: [
      ...makeAttempts('skill.weak', [false, false, true, false]),
      ...makeAttempts('skill.ok', [true, true, true, false])
    ]
  });
  const ranked = rankWeakSkills(snapshots);
  assert.deepEqual(ranked.map((item) => item.skillId), ['skill.weak', 'skill.ok']);
  assert.ok(ranked[0].weaknessScore > ranked[1].weaknessScore);
  assert.equal(ranked[0].state, MASTERY_STATES.WEAK);
});
