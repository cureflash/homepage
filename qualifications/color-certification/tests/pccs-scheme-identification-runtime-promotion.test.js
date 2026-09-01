import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { InMemoryQuestionBank } from '../../../subjects/english/power-toeic/js/data/question-bank-adapter.js';
import { QuizSession } from '../../../subjects/english/power-toeic/js/core/session.js';
import { createWorkoutRecipe, selectQuestionIds } from '../../../subjects/english/power-toeic/js/core/workout-builder.js';

const runtime = JSON.parse(await readFile(new URL('../data/grade3-runtime.json', import.meta.url), 'utf8'));
const authoring = JSON.parse(await readFile(new URL('../data/grade3-authoring-scheme-identification-0001-0012.json', import.meta.url), 'utf8'));

function classify(question) {
  if (/トーン記号が同じ/.test(question.prompt)) return '同一トーン配色';
  if (/色相番号が同じ/.test(question.prompt)) return '同一色相配色';
  if (/12段階離れています/.test(question.prompt)) return '補色の色相関係';
  const match = question.prompt.match(/明度レベルが「([0-9→]+)」/);
  if (match) {
    const values = match[1].split('→').map(Number);
    const diffs = values.slice(1).map((value, index) => value - values[index]);
    if (diffs.every((value) => value > 0) || diffs.every((value) => value < 0)) return '明度のグラデーション';
  }
  return null;
}

test('scheme-identification runtime promotion remains record-identical after later runtime growth', () => {
  assert.ok(runtime.questions.length >= 199);
  assert.equal(runtime.questions.filter((question) => question.validationStatus === 'verified').length, runtime.questions.length);
  assert.equal(runtime.questions.filter((question) => question.validationStatus === 'pending_validation').length, 0);
  const promoted = runtime.questions.filter((question) => question.skillId === authoring.skill.id);
  assert.equal(promoted.length, 12);
  assert.deepEqual(promoted, authoring.questions);
  assert.ok(runtime.skills.some((skill) => skill.id === authoring.skill.id));
});

test('scheme-identification answers independently resolve from source-confirmed non-visual rules', () => {
  const promoted = runtime.questions.filter((question) => question.skillId === authoring.skill.id);
  const distribution = [0, 0, 0, 0];
  const relationCounts = new Map();
  const fingerprints = new Set();
  for (const question of promoted) {
    const expected = classify(question);
    assert.ok(expected, question.id);
    assert.equal(question.choices.filter((choice) => choice === expected).length, 1, question.id);
    assert.equal(question.choices[question.correctIndex], expected, question.id);
    distribution[question.correctIndex] += 1;
    relationCounts.set(expected, (relationCounts.get(expected) ?? 0) + 1);
    fingerprints.add(JSON.stringify({ skillId: question.skillId, colorRef: question.colorRef, choices: question.choices, presentation: question.presentation }));
  }
  assert.deepEqual(distribution, [3, 3, 3, 3]);
  assert.deepEqual(Object.fromEntries(relationCounts), {
    '同一トーン配色': 3,
    '同一色相配色': 3,
    '補色の色相関係': 3,
    '明度のグラデーション': 3
  });
  assert.equal(fingerprints.size, 12);
});

test('shared Power TOEIC engine runs promoted scheme-identification questions', () => {
  const repository = new InMemoryQuestionBank({ questions: runtime.questions, skills: runtime.skills });
  const recipe = createWorkoutRecipe({ mode: 'TRAINING', totalCount: 2, skillAllocations: [{ skillId: authoring.skill.id, count: 2 }], seed: 29 });
  const ids = selectQuestionIds({ repository, recipe });
  assert.equal(ids.length, 2);
  const session = new QuizSession({ questionIds: ids, repository, now: () => 1000 });
  const question = session.currentQuestion;
  assert.equal(question.skillId, authoring.skill.id);
  assert.equal(session.submitAnswer(question.correctIndex).correct, true);
});
