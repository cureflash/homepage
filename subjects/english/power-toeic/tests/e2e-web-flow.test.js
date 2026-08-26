import test from 'node:test';
import assert from 'node:assert/strict';
import { QuizSession } from '../js/core/session.js';
import { createWorkoutRecipe, selectQuestionIds } from '../js/core/workout-builder.js';
import { VersionedAppStore } from '../js/core/persistence.js';
import { createReviewEntryFromAttempt, upsertReviewEntry } from '../js/core/review.js';
import { applyProgressionEvent, progressionEventFromAttempt } from '../js/core/progression.js';
import { InMemoryQuestionBank } from '../js/data/question-bank-adapter.js';
import { demoQuestions, demoSkills } from '../js/data/fixtures.js';

class FakeStorage {
  constructor() { this.values = new Map(); }
  getItem(key) { return this.values.has(key) ? this.values.get(key) : null; }
  setItem(key, value) { this.values.set(key, String(value)); }
  removeItem(key) { this.values.delete(key); }
}

test('recipe -> selection -> session -> persistence -> review/progression -> results remains coherent', () => {
  const repository = new InMemoryQuestionBank({ questions: demoQuestions, skills: demoSkills });
  const storage = new FakeStorage();
  const store = new VersionedAppStore({ storage });
  const recipe = createWorkoutRecipe({
    mode: 'CUSTOM',
    totalCount: 2,
    skillAllocations: [
      { skillId: 'fixture.pos-adverb', count: 1 },
      { skillId: 'fixture.verb-tense', count: 1 }
    ],
    seed: 17
  });

  const questionIds = selectQuestionIds({ repository, recipe, attempts: store.load().attempts });
  assert.equal(questionIds.length, 2);
  assert.equal(new Set(questionIds).size, 2);

  const times = [1000, 1400, 2000, 2600];
  const session = new QuizSession({ questionIds, repository, now: () => times.shift(), context: 'training' });

  while (!session.isComplete) {
    const question = session.currentQuestion;
    const before = store.load();
    const attempt = session.submitAnswer(question.correctIndex);
    const previousReview = before.reviewEntries.find((entry) => entry.questionId === attempt.questionId) ?? null;
    store.appendAttempt(attempt);
    store.replaceReviewEntries(upsertReviewEntry(before.reviewEntries, createReviewEntryFromAttempt(attempt, previousReview)));
    const nextProgression = applyProgressionEvent(before.progression, progressionEventFromAttempt(attempt, before.attempts));
    store.replaceProgression({ points: nextProgression.points, stage: nextProgression.stage });
    session.next();
  }

  const results = session.getResults();
  assert.equal(results.answered, 2);
  assert.equal(results.correct, 2);
  assert.equal(results.accuracy, 1);

  const reloaded = new VersionedAppStore({ storage }).load();
  assert.equal(reloaded.attempts.length, 2);
  assert.equal(reloaded.reviewEntries.length, 2);
  assert.ok(reloaded.progression.points > 0);
  assert.deepEqual(new Set(reloaded.attempts.map((attempt) => attempt.questionId)), new Set(questionIds));
});
