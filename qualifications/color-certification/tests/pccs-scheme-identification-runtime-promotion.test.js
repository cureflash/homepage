import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { InMemoryQuestionBank } from '../../../subjects/english/power-toeic/js/data/question-bank-adapter.js';
import { QuizSession } from '../../../subjects/english/power-toeic/js/core/session.js';
import { createWorkoutRecipe, selectQuestionIds } from '../../../subjects/english/power-toeic/js/core/workout-builder.js';

const runtime = JSON.parse(await readFile(new URL('../data/grade3-runtime.json', import.meta.url), 'utf8'));
const baseAuthoring = JSON.parse(await readFile(new URL('../data/grade3-authoring-scheme-identification-0001-0012.json', import.meta.url), 'utf8'));
const hueAuthoring = JSON.parse(await readFile(new URL('../data/grade3-authoring-scheme-identification-0013-0024.json', import.meta.url), 'utf8'));

function classifyBase(question) {
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

function classifyHue(question) {
  const match = question.prompt.match(/色相番号(\d{1,2})と(\d{1,2})/);
  assert.ok(match, `missing hue positions: ${question.id}`);
  const a = Number(match[1]);
  const b = Number(match[2]);
  const raw = Math.abs(a - b);
  const difference = Math.min(raw, 24 - raw);
  if (difference === 1) return '隣接色相配色';
  if (difference <= 3) return '類似色相配色';
  if (difference <= 7) return '中差色相配色';
  if (difference <= 10) return '対照色相配色';
  return null;
}

test('scheme-identification runtime promotion is record-identical and owns the 223-question frontier', () => {
  assert.equal(runtime.questions.length, 223);
  assert.equal(runtime.questions.filter((question) => question.validationStatus === 'verified').length, 223);
  assert.equal(runtime.questions.filter((question) => question.validationStatus === 'pending_validation').length, 0);
  const promoted = runtime.questions.filter((question) => question.skillId === baseAuthoring.skill.id);
  assert.equal(promoted.length, 24);
  assert.deepEqual(promoted, [...baseAuthoring.questions, ...hueAuthoring.questions]);
  assert.ok(runtime.skills.some((skill) => skill.id === baseAuthoring.skill.id));
});

test('original scheme-identification answers remain independently resolvable', () => {
  const promoted = runtime.questions.filter((question) => baseAuthoring.questions.some((record) => record.id === question.id));
  const distribution = [0, 0, 0, 0];
  for (const question of promoted) {
    const expected = classifyBase(question);
    assert.ok(expected, question.id);
    assert.equal(question.choices.filter((choice) => choice === expected).length, 1, question.id);
    assert.equal(question.choices[question.correctIndex], expected, question.id);
    distribution[question.correctIndex] += 1;
  }
  assert.deepEqual(distribution, [3, 3, 3, 3]);
});

test('named-hue scheme-identification expansion independently recomputes from circular hue distance', () => {
  const promoted = runtime.questions.filter((question) => hueAuthoring.questions.some((record) => record.id === question.id));
  const distribution = [0, 0, 0, 0];
  const relationCounts = new Map();
  for (const question of promoted) {
    const expected = classifyHue(question);
    assert.ok(expected, question.id);
    assert.equal(question.choices.filter((choice) => choice === expected).length, 1, question.id);
    assert.equal(question.choices[question.correctIndex], expected, question.id);
    distribution[question.correctIndex] += 1;
    relationCounts.set(expected, (relationCounts.get(expected) ?? 0) + 1);
  }
  assert.deepEqual(distribution, [3, 3, 3, 3]);
  assert.deepEqual(Object.fromEntries(relationCounts), {
    '隣接色相配色': 3,
    '類似色相配色': 3,
    '中差色相配色': 3,
    '対照色相配色': 3
  });
});

test('shared Power TOEIC engine runs the promoted named-hue scheme records', () => {
  const repository = new InMemoryQuestionBank({ questions: runtime.questions, skills: runtime.skills });
  const targetId = hueAuthoring.questions[0].id;
  const session = new QuizSession({ questionIds: [targetId], repository, now: () => 1000 });
  const question = session.currentQuestion;
  assert.equal(question.id, targetId);
  assert.equal(question.skillId, hueAuthoring.skill.id);
  assert.equal(session.submitAnswer(question.correctIndex).correct, true);

  const recipe = createWorkoutRecipe({ mode: 'TRAINING', totalCount: 2, skillAllocations: [{ skillId: hueAuthoring.skill.id, count: 2 }], seed: 37 });
  assert.equal(selectQuestionIds({ repository, recipe }).length, 2);
});
