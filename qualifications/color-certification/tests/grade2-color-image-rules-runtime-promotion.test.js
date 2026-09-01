import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { InMemoryQuestionBank } from '../../../subjects/english/power-toeic/js/data/question-bank-adapter.js';
import { QuizSession } from '../../../subjects/english/power-toeic/js/core/session.js';
import { createWorkoutRecipe, selectQuestionIds } from '../../../subjects/english/power-toeic/js/core/workout-builder.js';

const runtime = JSON.parse(await readFile(new URL('../data/grade2-runtime.json', import.meta.url), 'utf8'));
const authoring = JSON.parse(await readFile(new URL('../data/grade2-authoring-color-image-rules-0001-0012.json', import.meta.url), 'utf8'));
const staleBatch = JSON.parse(await readFile(new URL('../data/grade2-authoring-official-sample-facts-0001-0012.json', import.meta.url), 'utf8'));

test('Grade 2 current-source runtime promotion is record-identical', () => {
  assert.equal(runtime.format, 'power-color-grade2-runtime-v1');
  assert.equal(runtime.grade, 2);
  assert.equal(runtime.questions.length, 12);
  assert.equal(runtime.questions.filter((q) => q.validationStatus === 'verified').length, 12);
  assert.equal(runtime.questions.filter((q) => q.validationStatus === 'pending_validation').length, 0);
  assert.deepEqual(runtime.questions, authoring.questions);
  assert.deepEqual(runtime.skills, [authoring.skill]);
});

test('stale PR #483 batch is not promoted into Grade 2 runtime', () => {
  const runtimeIds = new Set(runtime.questions.map((q) => q.id));
  for (const q of staleBatch.questions) assert.equal(runtimeIds.has(q.id), false, q.id);
});

test('shared Power TOEIC engine runs the Grade 2 runtime records', () => {
  const repository = new InMemoryQuestionBank({ questions: runtime.questions, skills: runtime.skills });
  const targetId = runtime.questions[0].id;
  const session = new QuizSession({ questionIds: [targetId], repository, now: () => 1000 });
  const question = session.currentQuestion;
  assert.equal(question.id, targetId);
  assert.equal(question.skillId, 'pc2.image.color_image_rules');
  assert.equal(session.submitAnswer(question.correctIndex).correct, true);

  const recipe = createWorkoutRecipe({
    mode: 'TRAINING',
    totalCount: 8,
    skillAllocations: [{ skillId: 'pc2.image.color_image_rules', count: 8 }],
    seed: 41
  });
  assert.equal(selectQuestionIds({ repository, recipe }).length, 8);
});
