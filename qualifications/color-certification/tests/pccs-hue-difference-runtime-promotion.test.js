import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { InMemoryQuestionBank } from '../../../subjects/english/power-toeic/js/data/question-bank-adapter.js';
import { QuizSession } from '../../../subjects/english/power-toeic/js/core/session.js';
import { createWorkoutRecipe, selectQuestionIds } from '../../../subjects/english/power-toeic/js/core/workout-builder.js';

const runtime = JSON.parse(await readFile(new URL('../data/grade3-runtime.json', import.meta.url), 'utf8'));
const authoring = JSON.parse(await readFile(new URL('../data/grade3-authoring-hue-difference-0001-0012.json', import.meta.url), 'utf8'));

function circularDifference(a, b) {
  const raw = Math.abs(a - b);
  return Math.min(raw, 24 - raw);
}

function positions(prompt) {
  const match = prompt.match(/色相番号(\d{1,2})と(\d{1,2})/);
  assert.ok(match, `missing hue positions: ${prompt}`);
  return [Number(match[1]), Number(match[2])];
}

test('PCCS hue-difference runtime promotion preserves all 12 verified authoring records exactly', () => {
  assert.equal(runtime.questions.length, 175);
  assert.equal(runtime.questions.filter((q) => q.validationStatus === 'verified').length, 175);
  assert.equal(runtime.questions.filter((q) => q.validationStatus === 'pending_validation').length, 0);
  const promoted = runtime.questions.filter((question) => question.skillId === authoring.skill.id);
  assert.equal(promoted.length, 12);
  assert.deepEqual(promoted, authoring.questions);
  assert.ok(runtime.skills.some((skill) => skill.id === authoring.skill.id));
});

test('promoted hue-difference answers independently recompute from the 24-position circle', () => {
  const promoted = runtime.questions.filter((question) => question.skillId === authoring.skill.id);
  const distribution = [0, 0, 0, 0];
  const covered = new Set();
  for (const question of promoted) {
    const [a, b] = positions(question.prompt);
    const expected = circularDifference(a, b);
    assert.equal(Number(question.choices[question.correctIndex]), expected, question.id);
    assert.equal(question.choices.filter((choice) => Number(choice) === expected).length, 1, question.id);
    covered.add(expected);
    distribution[question.correctIndex] += 1;
  }
  assert.deepEqual([...covered].sort((a, b) => a - b), [1,2,3,4,5,6,7,8,9,10,11,12]);
  assert.deepEqual(distribution, [3,3,3,3]);
});

test('shared Power TOEIC engine runs promoted hue-difference text questions', () => {
  const repository = new InMemoryQuestionBank({ questions: runtime.questions, skills: runtime.skills });
  const recipe = createWorkoutRecipe({ mode: 'TRAINING', totalCount: 2, skillAllocations: [{ skillId: authoring.skill.id, count: 2 }], seed: 17 });
  const ids = selectQuestionIds({ repository, recipe });
  assert.equal(ids.length, 2);
  const session = new QuizSession({ questionIds: ids, repository, now: () => 1000 });
  const question = session.currentQuestion;
  assert.equal(question.skillId, authoring.skill.id);
  assert.equal(session.submitAnswer(question.correctIndex).correct, true);
});
