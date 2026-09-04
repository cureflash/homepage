import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { InMemoryQuestionBank } from '../../../subjects/english/power-toeic/js/data/question-bank-adapter.js';
import { QuizSession } from '../../../subjects/english/power-toeic/js/core/session.js';
import { createWorkoutRecipe, selectQuestionIds } from '../../../subjects/english/power-toeic/js/core/workout-builder.js';

const runtime = JSON.parse(await readFile(new URL('../data/grade1-runtime.json', import.meta.url), 'utf8'));
const ancientEurope = JSON.parse(await readFile(new URL('../data/grade1-authoring-culture-ancient-europe-materials-0001-0008.json', import.meta.url), 'utf8'));
const medievalEurope = JSON.parse(await readFile(new URL('../data/grade1-authoring-culture-medieval-early-modern-europe-0001-0008.json', import.meta.url), 'utf8'));
const modernEurope = JSON.parse(await readFile(new URL('../data/grade1-authoring-culture-modern-europe-color-science-0001-0008.json', import.meta.url), 'utf8'));
const ancientJapan = JSON.parse(await readFile(new URL('../data/grade1-authoring-culture-ancient-japan-colour-0001-0008.json', import.meta.url), 'utf8'));
const batches = [ancientEurope, medievalEurope, modernEurope, ancientJapan];

function fingerprint(question) {
  return JSON.stringify([question.sentence, question.choices]);
}

test('Grade 1 runtime contains only record-identical verified authoring batches', () => {
  assert.equal(runtime.format, 'power-color-grade1-runtime-v1');
  assert.equal(runtime.grade, 1);
  assert.equal(runtime.productionApproved, false);
  assert.equal(runtime.questions.length, 32);
  assert.equal(runtime.questions.filter((question) => question.validationStatus === 'verified').length, 32);
  assert.equal(runtime.questions.filter((question) => question.validationStatus === 'pending_validation').length, 0);
  assert.deepEqual(runtime.questions, batches.flatMap((batch) => batch.questions));
  assert.deepEqual(runtime.skills, batches.map((batch) => batch.skill));
});

test('Grade 1 runtime has no full-fingerprint duplicates and keeps balanced answers', () => {
  const fingerprints = runtime.questions.map(fingerprint);
  assert.equal(new Set(fingerprints).size, fingerprints.length);
  const counts = runtime.questions.reduce((acc, question) => {
    acc[question.correctIndex] += 1;
    return acc;
  }, [0, 0, 0, 0]);
  assert.deepEqual(counts, [8, 8, 8, 8]);
});

test('shared Power TOEIC engine runs promoted Grade 1 questions', () => {
  const repository = new InMemoryQuestionBank({ questions: runtime.questions, skills: runtime.skills });
  const recipe = createWorkoutRecipe({
    mode: 'TRAINING',
    totalCount: 32,
    skillAllocations: batches.map((batch) => ({ skillId: batch.skill.id, count: 8 })),
    seed: 47
  });
  const ids = selectQuestionIds({ repository, recipe });
  assert.equal(ids.length, 32);
  const session = new QuizSession({ questionIds: ids, repository, now: () => 1000 });
  for (let index = 0; index < ids.length; index += 1) {
    const question = session.currentQuestion;
    assert.equal(question.grade, 1);
    assert.equal(session.submitAnswer(question.correctIndex).correct, true);
    if (index < ids.length - 1) session.next();
  }
});
