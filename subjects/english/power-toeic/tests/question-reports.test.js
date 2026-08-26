import test from 'node:test';
import assert from 'node:assert/strict';
import {
  QuestionReportStore,
  createQuestionReport,
} from '../js/core/question-reports.js';

function memoryStorage() {
  const data = new Map();
  return {
    getItem(key) { return data.has(key) ? data.get(key) : null; },
    setItem(key, value) { data.set(key, String(value)); },
  };
}

test('report records exact question id/version and reason', () => {
  const report = createQuestionReport({
    questionId: 'q-1',
    questionVersion: 3,
    reason: 'ambiguous',
    detail: 'A and C both seem possible.',
    createdAt: '2026-08-27T00:00:00.000Z',
    id: 'r-1',
  });
  assert.deepEqual(report, {
    id: 'r-1', questionId: 'q-1', questionVersion: 3,
    reason: 'ambiguous', detail: 'A and C both seem possible.',
    createdAt: '2026-08-27T00:00:00.000Z',
  });
});

test('store appends reports without mutating existing reports', () => {
  const store = new QuestionReportStore({ storage: memoryStorage() });
  const first = createQuestionReport({ questionId: 'q-1', questionVersion: 1, reason: 'wrong_answer', createdAt: '2026-08-27T00:00:00.000Z', id: 'r-1' });
  const second = createQuestionReport({ questionId: 'q-2', questionVersion: 2, reason: 'unnatural_english', createdAt: '2026-08-27T00:01:00.000Z', id: 'r-2' });
  store.append(first);
  store.append(second);
  assert.deepEqual(store.list().map(({ id, questionId, questionVersion, reason }) => ({ id, questionId, questionVersion, reason })), [
    { id: 'r-1', questionId: 'q-1', questionVersion: 1, reason: 'wrong_answer' },
    { id: 'r-2', questionId: 'q-2', questionVersion: 2, reason: 'unnatural_english' },
  ]);
});

test('invalid reasons are rejected and corrupted storage fails safe', () => {
  assert.throws(() => createQuestionReport({ questionId: 'q-1', questionVersion: 1, reason: 'spam' }), /invalid report reason/);
  const storage = memoryStorage();
  storage.setItem('power-toeic.question-reports.v1', '{bad json');
  const store = new QuestionReportStore({ storage });
  assert.deepEqual(store.list(), []);
});
