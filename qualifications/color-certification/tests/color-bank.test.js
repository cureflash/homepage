import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { InMemoryQuestionBank } from '../../../subjects/english/power-toeic/js/data/question-bank-adapter.js';
import { QuizSession } from '../../../subjects/english/power-toeic/js/core/session.js';
import { createWorkoutRecipe, selectQuestionIds } from '../../../subjects/english/power-toeic/js/core/workout-builder.js';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const colors = JSON.parse(await readFile(new URL('../data/grade3-colors.json', import.meta.url), 'utf8'));
const runtime = JSON.parse(await readFile(new URL('../data/grade3-runtime.json', import.meta.url), 'utf8'));
const authoring = JSON.parse(await readFile(new URL('../data/grade3-authoring-color-to-name-0017-0024.json', import.meta.url), 'utf8'));

test('Grade 3 conventional-color master contains 64 stable records', () => {
  assert.equal(colors.colors.length, 64);
  assert.equal(new Set(colors.colors.map((color) => color.id)).size, 64);
  assert.equal(colors.displayValueAuthority, 'reference_only');
  for (const color of colors.colors) assert.match(color.displayHex, /^#[0-9A-F]{6}$/);
});

test('runtime bank exposes verified questions only and all color refs resolve', () => {
  const colorById = new Map(colors.colors.map((color) => [color.id, color]));
  assert.equal(runtime.questions.length, 16);
  assert.equal(new Set(runtime.questions.map((question) => question.id)).size, runtime.questions.length);
  for (const question of runtime.questions) {
    assert.equal(question.validationStatus, 'verified');
    assert.equal(question.choices.length, 4);
    assert.equal(new Set(question.choices).size, 4);
    assert.ok(colorById.has(question.colorRef));
    const target = colorById.get(question.colorRef);
    if (question.presentation.kind === 'prompt_color') {
      assert.equal(question.presentation.promptColorRef, question.colorRef);
      assert.equal(question.choices[question.correctIndex], target.name);
    } else {
      assert.equal(question.presentation.choiceColorRefs.length, 4);
      question.presentation.choiceColorRefs.forEach((ref) => assert.ok(colorById.has(ref)));
      assert.equal(question.presentation.choiceColorRefs[question.correctIndex], question.colorRef);
    }
  }
});

test('authoring checkpoint 0017-0024 is independently verified and internally consistent', () => {
  const colorById = new Map(colors.colors.map((color) => [color.id, color]));
  assert.deepEqual(authoring.qaSummary, {
    generated: 8,
    checked: 8,
    verified: 8,
    needsRevision: 0,
    rejected: 0,
    pending: 0,
    correctIndexDistribution: { A: 2, B: 2, C: 2, D: 2 }
  });
  assert.equal(authoring.questions.length, 8);
  assert.equal(new Set(authoring.questions.map((question) => question.id)).size, 8);
  for (const question of authoring.questions) {
    assert.equal(question.validationStatus, 'verified');
    assert.equal(question.skillId, 'pc3.conventional.color_to_name');
    assert.equal(question.choices.length, 4);
    assert.equal(new Set(question.choices).size, 4);
    assert.ok(colorById.has(question.colorRef));
    const target = colorById.get(question.colorRef);
    assert.equal(question.presentation.kind, 'prompt_color');
    assert.equal(question.presentation.promptColorRef, question.colorRef);
    assert.equal(question.choices[question.correctIndex], target.name);
    assert.equal(question.proposedAnswer, target.name);
  }
});

test('answer feedback re-shows the correct color for color-to-name questions', () => {
  const colorById = new Map(colors.colors.map((color) => [color.id, color]));
  const question = runtime.questions.find((entry) => entry.presentation.kind === 'prompt_color');
  const feedback = getAnswerFeedbackModel(question, colorById);
  assert.equal(feedback.name, colorById.get(question.colorRef).name);
  assert.equal(feedback.colorRef, question.colorRef);
  assert.equal(feedback.showSwatch, true);
  assert.match(feedback.title, /^正解：/);
});

test('answer feedback names the correct color for name-to-color questions', () => {
  const colorById = new Map(colors.colors.map((color) => [color.id, color]));
  const question = runtime.questions.find((entry) => entry.presentation.kind === 'choice_colors');
  const feedback = getAnswerFeedbackModel(question, colorById);
  assert.equal(feedback.name, colorById.get(question.colorRef).name);
  assert.equal(feedback.showSwatch, false);
  assert.equal(feedback.title, `正解：${colorById.get(question.colorRef).name}`);
});

test('Power TOEIC shared repository/workout/session engine runs a color question', () => {
  const repository = new InMemoryQuestionBank({ questions: runtime.questions, skills: runtime.skills });
  const recipe = createWorkoutRecipe({
    mode: 'TRAINING',
    totalCount: 2,
    skillAllocations: [{ skillId: 'pc3.conventional.color_to_name', count: 2 }],
    seed: 1
  });
  const ids = selectQuestionIds({ repository, recipe });
  assert.equal(ids.length, 2);
  const session = new QuizSession({ questionIds: ids, repository, now: () => 1000 });
  const question = session.currentQuestion;
  const attempt = session.submitAnswer(question.correctIndex);
  assert.equal(attempt.correct, true);
});
