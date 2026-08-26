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
    questionId: `${skillId}-${context ?? 'training'}-${index + 1}`,
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

test('training-only success can never become mastered', () => {
  const snapshot = buildMasterySnapshot('skill.alpha', makeAttempts('skill.alpha', Array(12).fill(true), 'training'));
  assert.equal(snapshot.state, MASTERY_STATES.TRAINING);
  assert.equal(snapshot.mixed.attempts, 0);
  assert.equal(snapshot.review.attempts, 0);
});

test('mastery progresses training to mixed pass, reviewing, then mastered', () => {
  const training = makeAttempts('skill.alpha', [true, true, true, true], 'training');
  const mixed = makeAttempts('skill.alpha', [true, true, true], 'mixed');
  const oneReview = makeAttempts('skill.alpha', [true], 'review');
  const twoReviews = makeAttempts('skill.alpha', [true, true], 'review');

  const mixedPass = buildMasterySnapshot('skill.alpha', [...training, ...mixed]);
  assert.equal(mixedPass.state, MASTERY_STATES.MIXED_PASS);

  const reviewing = buildMasterySnapshot('skill.alpha', [...training, ...mixed, ...oneReview]);
  assert.equal(reviewing.state, MASTERY_STATES.REVIEWING);

  const mastered = buildMasterySnapshot('skill.alpha', [...training, ...mixed, ...twoReviews]);
  assert.equal(mastered.state, MASTERY_STATES.MASTERED);
  assert.deepEqual(mastered.mixed, { attempts: 3, correct: 3, accuracy: 1 });
  assert.deepEqual(mastered.review, { attempts: 2, correct: 2, accuracy: 1 });
});

test('weak recent performance overrides older transfer evidence', () => {
  const attempts = [
    ...makeAttempts('skill.alpha', [true, true, true], 'mixed'),
    ...makeAttempts('skill.alpha', [true, true], 'review'),
    ...makeAttempts('skill.alpha', [false, false, false, false], 'training')
  ];
  const snapshot = buildMasterySnapshot('skill.alpha', attempts);
  assert.equal(snapshot.state, MASTERY_STATES.WEAK);
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
