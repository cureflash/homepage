import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { InMemoryQuestionBank } from '../../../subjects/english/power-toeic/js/data/question-bank-adapter.js';
import { QuizSession } from '../../../subjects/english/power-toeic/js/core/session.js';
import { createWorkoutRecipe, selectQuestionIds } from '../../../subjects/english/power-toeic/js/core/workout-builder.js';
import { getAnswerFeedbackModel, getChoiceRevealModels, getPromptChoiceSwatchModels, readableTextColor } from '../js/color-choice-renderer.js';

const colors = JSON.parse(await readFile(new URL('../data/grade3-colors.json', import.meta.url), 'utf8'));
const runtime = JSON.parse(await readFile(new URL('../data/grade3-runtime.json', import.meta.url), 'utf8'));
const complementaryAuthoring = JSON.parse(await readFile(new URL('../data/grade3-authoring-complementary-hue-number-0001-0012.json', import.meta.url), 'utf8'));
const authoring0017 = JSON.parse(await readFile(new URL('../data/grade3-authoring-color-to-name-0017-0024.json', import.meta.url), 'utf8'));
const authoring0025 = JSON.parse(await readFile(new URL('../data/grade3-authoring-color-to-name-0025-0032.json', import.meta.url), 'utf8'));
const authoring0033 = JSON.parse(await readFile(new URL('../data/grade3-authoring-color-to-name-0033-0040.json', import.meta.url), 'utf8'));
const authoring0041 = JSON.parse(await readFile(new URL('../data/grade3-authoring-color-to-name-0041-0048.json', import.meta.url), 'utf8'));
const authoring0049 = JSON.parse(await readFile(new URL('../data/grade3-authoring-color-to-name-0049-0056.json', import.meta.url), 'utf8'));
const indexHtml = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const mainSource = await readFile(new URL('../js/main.js', import.meta.url), 'utf8');
const rendererSource = await readFile(new URL('../js/color-choice-renderer.js', import.meta.url), 'utf8');

test('Grade 3 conventional-color master contains 64 stable records', () => {
  assert.equal(colors.colors.length, 64);
  assert.equal(new Set(colors.colors.map((color) => color.id)).size, 64);
  assert.equal(colors.displayValueAuthority, 'reference_only');
  for (const color of colors.colors) assert.match(color.displayHex, /^#[0-9A-F]{6}$/);
});

test('runtime bank exposes 151 verified questions and validates each presentation domain', () => {
  const colorById = new Map(colors.colors.map((color) => [color.id, color]));
  const colorByName = new Map(colors.colors.map((color) => [color.name, color]));
  assert.equal(runtime.questions.length, 151);
  assert.equal(new Set(runtime.questions.map((question) => question.id)).size, runtime.questions.length);
  for (const question of runtime.questions) {
    assert.equal(question.validationStatus, 'verified');
    assert.equal(question.choices.length, 4);
    assert.equal(new Set(question.choices).size, 4);
    if (question.questionType === 'text_choice') {
      assert.equal(question.presentation, undefined);
      continue;
    }
    assert.ok(colorById.has(question.colorRef));
    const target = colorById.get(question.colorRef);
    if (question.presentation.kind === 'prompt_color') {
      assert.equal(question.presentation.promptColorRef, question.colorRef);
      assert.equal(question.choices[question.correctIndex], target.name);
      question.choices.forEach((choice) => assert.ok(colorByName.has(choice), 'Unknown conventional color choice: ' + choice));
    } else {
      assert.equal(question.presentation.choiceColorRefs.length, 4);
      question.presentation.choiceColorRefs.forEach((ref) => assert.ok(colorById.has(ref)));
      assert.equal(question.presentation.choiceColorRefs[question.correctIndex], question.colorRef);
    }
  }
});

test('promoted PCCS complementary-hue runtime records remain record-identical to verified authoring', () => {
  const promoted = runtime.questions.filter((question) => question.skillId === complementaryAuthoring.skill.id);
  assert.deepEqual(promoted, complementaryAuthoring.questions);
});

function assertAuthoringCheckpoint(authoring, expectedStart, expectedEnd) {
  const colorById = new Map(colors.colors.map((color) => [color.id, color]));
  const colorByName = new Map(colors.colors.map((color) => [color.name, color]));
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
  assert.equal(authoring.questions[0].id, `pc3-conventional-color-to-name-${expectedStart}`);
  assert.equal(authoring.questions.at(-1).id, `pc3-conventional-color-to-name-${expectedEnd}`);
  for (const question of authoring.questions) {
    assert.equal(question.validationStatus, 'verified');
    assert.equal(question.skillId, 'pc3.conventional.color_to_name');
    assert.equal(question.choices.length, 4);
    assert.equal(new Set(question.choices).size, 4);
    question.choices.forEach((choice) => assert.ok(colorByName.has(choice), `Unknown conventional color choice: ${choice}`));
    assert.ok(colorById.has(question.colorRef));
    const target = colorById.get(question.colorRef);
    assert.equal(question.presentation.kind, 'prompt_color');
    assert.equal(question.presentation.promptColorRef, question.colorRef);
    assert.equal(question.choices[question.correctIndex], target.name);
    assert.equal(question.proposedAnswer, target.name);
  }
}

test('authoring checkpoint 0017-0024 is independently verified and internally consistent', () => {
  assertAuthoringCheckpoint(authoring0017, '0017', '0024');
});

test('authoring checkpoint 0025-0032 is independently verified and internally consistent', () => {
  assertAuthoringCheckpoint(authoring0025, '0025', '0032');
});

test('authoring checkpoint 0033-0040 is independently verified and internally consistent', () => {
  assertAuthoringCheckpoint(authoring0033, '0033', '0040');
});

test('authoring checkpoint 0041-0048 is independently verified and internally consistent', () => {
  assertAuthoringCheckpoint(authoring0041, '0041', '0048');
});

test('authoring checkpoint 0049-0056 is independently verified and internally consistent', () => {
  assertAuthoringCheckpoint(authoring0049, '0049', '0056');
});

test('verified color-to-name coverage does not reuse target master colors', () => {
  const runtimeTargets = runtime.questions
    .filter((question) => question.skillId === 'pc3.conventional.color_to_name' && Number(question.id.slice(-4)) <= 16)
    .map((question) => question.colorRef);
  const authoringTargets = [...authoring0017.questions, ...authoring0025.questions, ...authoring0033.questions, ...authoring0041.questions, ...authoring0049.questions]
    .map((question) => question.colorRef);
  const targetRefs = [...runtimeTargets, ...authoringTargets];
  assert.equal(new Set(targetRefs).size, targetRefs.length);
  assert.equal(targetRefs.length, 48);
});

test('answer feedback re-shows the correct color for color-to-name questions', () => {
  const colorById = new Map(colors.colors.map((color) => [color.id, color]));
  const question = runtime.questions.find((entry) => entry.presentation?.kind === 'prompt_color');
  const feedback = getAnswerFeedbackModel(question, colorById);
  assert.equal(feedback.name, colorById.get(question.colorRef).name);
  assert.equal(feedback.colorRef, question.colorRef);
  assert.equal(feedback.showSwatch, true);
  assert.match(feedback.title, /^正解：/);
});

test('color-to-name feedback maps every text choice to its color card', () => {
  const colorById = new Map(colors.colors.map((color) => [color.id, color]));
  const colorByName = new Map(colors.colors.map((color) => [color.name, color]));
  const question = runtime.questions.find((entry) => entry.presentation?.kind === 'prompt_color');
  const reveals = getPromptChoiceSwatchModels(question, colorById);
  assert.equal(reveals.length, 4);
  reveals.forEach((reveal, index) => {
    const expected = colorByName.get(question.choices[index]);
    assert.equal(reveal.index, index);
    assert.equal(reveal.colorRef, expected.id);
    assert.equal(reveal.name, expected.name);
    assert.equal(reveal.displayHex, expected.displayHex);
  });
});

test('answer feedback names the correct color for name-to-color questions', () => {
  const colorById = new Map(colors.colors.map((color) => [color.id, color]));
  const question = runtime.questions.find((entry) => entry.presentation?.kind === 'choice_colors');
  const feedback = getAnswerFeedbackModel(question, colorById);
  assert.equal(feedback.name, colorById.get(question.colorRef).name);
  assert.equal(feedback.showSwatch, false);
  assert.equal(feedback.title, `正解：${colorById.get(question.colorRef).name}`);
});

test('name-to-color feedback reveals every choice color name after answering', () => {
  const colorById = new Map(colors.colors.map((color) => [color.id, color]));
  const question = runtime.questions.find((entry) => entry.presentation?.kind === 'choice_colors');
  const reveals = getChoiceRevealModels(question, colorById);
  assert.equal(reveals.length, 4);
  reveals.forEach((reveal, index) => {
    const ref = question.presentation.choiceColorRefs[index];
    assert.equal(reveal.colorRef, ref);
    assert.equal(reveal.name, colorById.get(ref).name);
    assert.equal(reveal.displayHex, colorById.get(ref).displayHex);
  });
});

test('revealed swatch labels choose readable dark/light text', () => {
  assert.equal(readableTextColor('#FCEEEB'), '#111111');
  assert.equal(readableTextColor('#134A63'), '#ffffff');
});

test('choice color names and color-to-name cards are pre-rendered hidden and then revealed', () => {
  assert.match(rendererSource, /name\.dataset\.role = 'choice-color-name'/);
  assert.match(rendererSource, /swatch\.dataset\.role = 'choice-name-swatch'/);
  assert.match(rendererSource, /swatch\.hidden = true/);
  assert.match(rendererSource, /swatch\.hidden = false/);
  assert.match(rendererSource, /revealPromptChoiceSwatches/);
});

test('browser-facing Power Color assets use the same cache-busting version', () => {
  const version = '20260830-color-name-swatches-v3';
  assert.match(indexHtml, new RegExp(`styles\\.css\\?v=${version}`));
  assert.match(indexHtml, new RegExp(`js/main\\.js\\?v=${version}`));
  assert.match(mainSource, new RegExp(`color-choice-renderer\\.js\\?v=${version}`));
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


test('shared Power TOEIC engine runs promoted PCCS text-choice questions', () => {
  const repository = new InMemoryQuestionBank({ questions: runtime.questions, skills: runtime.skills });
  const recipe = createWorkoutRecipe({
    mode: 'TRAINING',
    totalCount: 2,
    skillAllocations: [{ skillId: 'pc3.pccs.complementary_hue_number', count: 2 }],
    seed: 7
  });
  const ids = selectQuestionIds({ repository, recipe });
  assert.equal(ids.length, 2);
  const session = new QuizSession({ questionIds: ids, repository, now: () => 1000 });
  const question = session.currentQuestion;
  assert.equal(question.skillId, 'pc3.pccs.complementary_hue_number');
  const attempt = session.submitAnswer(question.correctIndex);
  assert.equal(attempt.correct, true);
});
