import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createReviewEntryFromAttempt,
  getDueReviewEntries,
  getDueReviewQuestionIds,
  upsertReviewEntry,
} from '../js/core/review.js';

function attempt(overrides = {}) {
  return {
    questionId: 'q1', questionVersion: 1, skillId: 'skill.a', correct: true,
    answeredAt: '2026-08-27T00:00:00.000Z', context: 'training', ...overrides,
  };
}

test('ordinary correct or wrong attempts schedule next-day review', () => {
  const correct = createReviewEntryFromAttempt(attempt());
  const wrong = createReviewEntryFromAttempt(attempt({ correct: false }));
  assert.equal(correct.dueAt, '2026-08-28T00:00:00.000Z');
  assert.equal(wrong.dueAt, '2026-08-28T00:00:00.000Z');
  assert.equal(correct.intervalIndex, 0);
});

test('successful review advances deterministic intervals while failure resets', () => {
  const first = createReviewEntryFromAttempt(attempt());
  const second = createReviewEntryFromAttempt(attempt({ context: 'review', answeredAt: '2026-08-28T00:00:00.000Z' }), first);
  assert.equal(second.intervalIndex, 1);
  assert.equal(second.dueAt, '2026-08-31T00:00:00.000Z');
  const reset = createReviewEntryFromAttempt(attempt({ context: 'review', correct: false, answeredAt: '2026-08-31T00:00:00.000Z' }), second);
  assert.equal(reset.intervalIndex, 0);
  assert.equal(reset.dueAt, '2026-09-01T00:00:00.000Z');
});

test('upsert keeps one review entry per question and sorts by due date', () => {
  const q1 = createReviewEntryFromAttempt(attempt());
  const q2 = createReviewEntryFromAttempt(attempt({ questionId: 'q2', answeredAt: '2026-08-27T06:00:00.000Z' }));
  const updated = upsertReviewEntry([q1], q2);
  assert.deepEqual(updated.map((entry) => entry.questionId), ['q1', 'q2']);
  const q1Later = createReviewEntryFromAttempt(attempt({ context: 'review', answeredAt: '2026-08-28T00:00:00.000Z' }), q1);
  const replaced = upsertReviewEntry(updated, q1Later);
  assert.equal(replaced.filter((entry) => entry.questionId === 'q1').length, 1);
});

test('due queries are deterministic at date boundaries', () => {
  const q1 = createReviewEntryFromAttempt(attempt());
  const q2 = createReviewEntryFromAttempt(attempt({ questionId: 'q2', answeredAt: '2026-08-28T00:00:00.000Z' }));
  const entries = [q2, q1];
  assert.deepEqual(getDueReviewEntries(entries, '2026-08-27T23:59:59.999Z'), []);
  assert.deepEqual(getDueReviewQuestionIds(entries, '2026-08-28T00:00:00.000Z'), ['q1']);
});
