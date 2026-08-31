import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { InMemoryQuestionBank } from '../../../subjects/english/power-toeic/js/data/question-bank-adapter.js';
import { QuizSession } from '../../../subjects/english/power-toeic/js/core/session.js';
import { createWorkoutRecipe, selectQuestionIds } from '../../../subjects/english/power-toeic/js/core/workout-builder.js';

const runtime = JSON.parse(await readFile(new URL('../data/grade3-runtime.json', import.meta.url), 'utf8'));
const authoring = JSON.parse(await readFile(new URL('../data/grade3-authoring-value-gradient-0001-0012.json', import.meta.url), 'utf8'));

function parseSequence(value) {
  return value.split('→').map((part) => Number(part));
}

function direction(sequence) {
  const diffs = sequence.slice(1).map((value, index) => value - sequence[index]);
  if (diffs.every((diff) => diff > 0)) return 'up';
  if (diffs.every((diff) => diff < 0)) return 'down';
  return null;
}

test('value-gradient runtime promotion preserves all 12 verified authoring records exactly', () => {
  assert.equal(runtime.questions.length, 187);
  assert.equal(runtime.questions.filter((q) => q.validationStatus === 'verified').length, 187);
  assert.equal(runtime.questions.filter((q) => q.validationStatus === 'pending_validation').length, 0);
  const promoted = runtime.questions.filter((question) => question.skillId === authoring.skill.id);
  assert.equal(promoted.length, 12);
  assert.deepEqual(promoted, authoring.questions);
  assert.ok(runtime.skills.some((skill) => skill.id === authoring.skill.id));
});

test('promoted value-gradient answers independently resolve to the unique monotonic lightness sequence', () => {
  const promoted = runtime.questions.filter((question) => question.skillId === authoring.skill.id);
  const distribution = [0, 0, 0, 0];
  const directions = { up: 0, down: 0 };
  for (const question of promoted) {
    const candidates = question.choices
      .map((choice, index) => ({ direction: direction(parseSequence(choice)), index }))
      .filter(({ direction }) => direction !== null);
    assert.equal(candidates.length, 1, question.id);
    assert.equal(question.correctIndex, candidates[0].index, question.id);
    directions[candidates[0].direction] += 1;
    distribution[question.correctIndex] += 1;
  }
  assert.deepEqual(directions, { up: 6, down: 6 });
  assert.deepEqual(distribution, [3, 3, 3, 3]);
});

test('shared Power TOEIC engine runs promoted value-gradient text questions', () => {
  const repository = new InMemoryQuestionBank({ questions: runtime.questions, skills: runtime.skills });
  const recipe = createWorkoutRecipe({ mode: 'TRAINING', totalCount: 2, skillAllocations: [{ skillId: authoring.skill.id, count: 2 }], seed: 23 });
  const ids = selectQuestionIds({ repository, recipe });
  assert.equal(ids.length, 2);
  const session = new QuizSession({ questionIds: ids, repository, now: () => 1000 });
  const question = session.currentQuestion;
  assert.equal(question.skillId, authoring.skill.id);
  assert.equal(session.submitAnswer(question.correctIndex).correct, true);
});
