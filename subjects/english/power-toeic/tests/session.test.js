import test from 'node:test';
import assert from 'node:assert/strict';
import { QuizSession } from '../js/core/session.js';
import { InMemoryQuestionBank } from '../js/data/question-bank-adapter.js';
import { demoQuestions, demoSkills } from '../js/data/fixtures.js';

function makeSession(context = 'training') {
  const repository = new InMemoryQuestionBank({ questions: demoQuestions, skills: demoSkills });
  const times = [1000, 1450, 2000, 2600];
  return new QuizSession({ questionIds: ['fixture-q-001', 'fixture-q-002'], repository, now: () => times.shift(), context });
}

test('started question list is immutable and attempts are deterministic', () => {
  const session = makeSession();
  assert.equal(Object.isFrozen(session.questionIds), true);
  assert.equal(session.currentQuestion.id, 'fixture-q-001');

  const first = session.submitAnswer(2);
  assert.deepEqual(first, {
    questionId: 'fixture-q-001', questionVersion: 1, skillId: 'fixture.pos-adverb',
    selectedIndex: 2, correctIndex: 2, correct: true, responseMs: 450,
    answeredAt: '1970-01-01T00:00:01.450Z', context: 'training'
  });
  assert.throws(() => session.submitAnswer(2), /already answered/);

  session.next();
  const second = session.submitAnswer(0);
  assert.equal(second.correct, false);
  assert.equal(second.responseMs, 600);
  assert.equal(second.context, 'training');
  session.next();
  assert.equal(session.isComplete, true);
});

test('results derive only from emitted attempts', () => {
  const session = makeSession();
  session.submitAnswer(2);
  session.next();
  session.submitAnswer(1);
  const results = session.getResults();
  assert.equal(results.answered, 2);
  assert.equal(results.correct, 2);
  assert.equal(results.accuracy, 1);
  assert.deepEqual(results.bySkill, {
    'fixture.pos-adverb': { answered: 1, correct: 1 },
    'fixture.verb-tense': { answered: 1, correct: 1 }
  });
});

test('mixed and review session context is emitted without changing answer truth', () => {
  const mixed = makeSession('mixed');
  const mixedAttempt = mixed.submitAnswer(2);
  assert.equal(mixedAttempt.context, 'mixed');
  assert.equal(mixedAttempt.correct, true);

  const review = makeSession('review');
  const reviewAttempt = review.submitAnswer(2);
  assert.equal(reviewAttempt.context, 'review');
  assert.equal(reviewAttempt.correct, true);
});

test('unsupported context is rejected and cannot become arbitrary persisted evidence', () => {
  const repository = new InMemoryQuestionBank({ questions: demoQuestions, skills: demoSkills });
  assert.throws(() => new QuizSession({ questionIds: ['fixture-q-001'], repository, context: 'other' }), /unsupported session context/);
});

test('cannot advance before answering', () => {
  const session = makeSession();
  assert.throws(() => session.next(), /answer current question/);
});
