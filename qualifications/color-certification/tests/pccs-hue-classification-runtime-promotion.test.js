import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { InMemoryQuestionBank } from '../../../subjects/english/power-toeic/js/data/question-bank-adapter.js';
import { QuizSession } from '../../../subjects/english/power-toeic/js/core/session.js';
import { createWorkoutRecipe, selectQuestionIds } from '../../../subjects/english/power-toeic/js/core/workout-builder.js';

const runtime = JSON.parse(await readFile(new URL('../data/grade3-runtime.json', import.meta.url), 'utf8'));
const authoring = JSON.parse(await readFile(new URL('../data/grade3-authoring-hue-classification-0001-0012.json', import.meta.url), 'utf8'));

function circularHueDifference(a, b) {
  const raw = Math.abs(a - b);
  return Math.min(raw, 24 - raw);
}

function classifyHueDifference(difference) {
  if (difference === 0) return '同一色相';
  if (difference === 1) return '隣接色相';
  if (difference <= 3) return '類似色相';
  if (difference <= 7) return '中差色相';
  if (difference <= 10) return '対照色相';
  return '補色色相';
}

function promptPositions(prompt) {
  const match = prompt.match(/色相番号(\d{1,2})と(\d{1,2})/);
  assert.ok(match, `missing hue positions in prompt: ${prompt}`);
  return [Number(match[1]), Number(match[2])];
}

test('named hue-classification runtime promotion is record-identical and owns the 211-question frontier', () => {
  assert.equal(runtime.questions.length, 211);
  assert.equal(runtime.questions.filter((question) => question.validationStatus === 'verified').length, 211);
  assert.equal(runtime.questions.filter((question) => question.validationStatus === 'pending_validation').length, 0);
  const promoted = runtime.questions.filter((question) => question.skillId === authoring.skill.id);
  assert.equal(promoted.length, 12);
  assert.deepEqual(promoted, authoring.questions);
  assert.ok(runtime.skills.some((skill) => skill.id === authoring.skill.id));
});

test('promoted named hue classifications independently recompute from circular distance and sourced boundaries', () => {
  const promoted = runtime.questions.filter((question) => question.skillId === authoring.skill.id);
  const coveredDifferences = new Set();
  const coveredClasses = new Set();
  const answerPositions = [0, 0, 0, 0];

  for (const question of promoted) {
    const [a, b] = promptPositions(question.prompt);
    const difference = circularHueDifference(a, b);
    const expected = classifyHueDifference(difference);
    assert.equal(question.choices.filter((choice) => choice === expected).length, 1, question.id);
    assert.equal(question.choices[question.correctIndex], expected, question.id);
    coveredDifferences.add(difference);
    coveredClasses.add(expected);
    answerPositions[question.correctIndex] += 1;
  }

  assert.deepEqual([...coveredDifferences].sort((a, b) => a - b), [1,2,3,4,5,6,7,8,9,10,11,12]);
  assert.deepEqual([...coveredClasses].sort(), ['隣接色相','類似色相','中差色相','対照色相','補色色相'].sort());
  assert.deepEqual(answerPositions, [3,3,3,3]);
});

test('shared Power TOEIC engine runs promoted named hue-classification questions', () => {
  const repository = new InMemoryQuestionBank({ questions: runtime.questions, skills: runtime.skills });
  const recipe = createWorkoutRecipe({ mode: 'TRAINING', totalCount: 2, skillAllocations: [{ skillId: authoring.skill.id, count: 2 }], seed: 31 });
  const ids = selectQuestionIds({ repository, recipe });
  assert.equal(ids.length, 2);
  const session = new QuizSession({ questionIds: ids, repository, now: () => 1000 });
  const question = session.currentQuestion;
  assert.equal(question.skillId, authoring.skill.id);
  assert.equal(session.submitAnswer(question.correctIndex).correct, true);
});
