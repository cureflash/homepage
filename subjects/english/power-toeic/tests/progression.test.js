import test from 'node:test';
import assert from 'node:assert/strict';
import {
  applyProgressionEvent,
  deriveProgressionStage,
  progressionEventFromAttempt,
} from '../js/core/progression.js';

test('wrong answers and repeated labeled answers do not reward tap spam', () => {
  const wrong = progressionEventFromAttempt({ questionId: 'q1', correct: false, context: 'training' }, []);
  assert.equal(applyProgressionEvent({ points: 0, stage: 0 }, wrong).earned, 0);

  const repeated = progressionEventFromAttempt(
    { questionId: 'q1', correct: true, context: 'training' },
    [{ questionId: 'q1', correct: true }]
  );
  assert.equal(applyProgressionEvent({ points: 2, stage: 0 }, repeated).earned, 0);
});

test('first correct, mixed and review evidence receive increasing meaningful rewards', () => {
  const first = progressionEventFromAttempt({ questionId: 'q1', correct: true, context: 'training' }, []);
  assert.equal(applyProgressionEvent({ points: 0, stage: 0 }, first).earned, 2);

  const mixed = progressionEventFromAttempt({ questionId: 'q2', correct: true, context: 'mixed' }, []);
  assert.equal(applyProgressionEvent({ points: 0, stage: 0 }, mixed).earned, 4);

  const review = progressionEventFromAttempt(
    { questionId: 'q1', correct: true, context: 'review' },
    [{ questionId: 'q1', correct: true }]
  );
  assert.equal(applyProgressionEvent({ points: 0, stage: 0 }, review).earned, 3);
});

test('stages derive deterministically from accumulated points', () => {
  assert.deepEqual([0, 19, 20, 60, 140, 280, 500, 999].map(deriveProgressionStage), [0, 0, 1, 2, 3, 4, 5, 5]);
});

test('mastery and substantial session completion can award milestone points', () => {
  const mastery = applyProgressionEvent({ points: 15, stage: 0 }, { type: 'mastery', newlyMastered: true });
  assert.equal(mastery.points, 25);
  assert.equal(mastery.stage, 1);
  const session = applyProgressionEvent(mastery, { type: 'session_complete', questionCount: 10 });
  assert.equal(session.earned, 5);
});
