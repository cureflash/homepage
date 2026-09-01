import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { InMemoryQuestionBank } from '../../../subjects/english/power-toeic/js/data/question-bank-adapter.js';
import { QuizSession } from '../../../subjects/english/power-toeic/js/core/session.js';
import { createWorkoutRecipe, selectQuestionIds } from '../../../subjects/english/power-toeic/js/core/workout-builder.js';

const runtime = JSON.parse(await readFile(new URL('../data/grade2-runtime.json', import.meta.url), 'utf8'));
const foundation = JSON.parse(await readFile(new URL('../data/grade2-authoring-official-sample-facts-0001-0012.json', import.meta.url), 'utf8'));
const triad = JSON.parse(await readFile(new URL('../data/grade2-authoring-triad-hue-positions-0001-0012.json', import.meta.url), 'utf8'));
const munsell = JSON.parse(await readFile(new URL('../data/grade2-authoring-munsell-notation-components-0001-0012.json', import.meta.url), 'utf8'));
const naturalComplex = JSON.parse(await readFile(new URL('../data/grade2-authoring-natural-complex-harmony-0001-0012.json', import.meta.url), 'utf8'));
const dominant = JSON.parse(await readFile(new URL('../data/grade2-authoring-dominant-color-tone-0001-0012.json', import.meta.url), 'utf8'));
const toneOnTone = JSON.parse(await readFile(new URL('../data/grade2-authoring-tone-on-tone-0001-0012.json', import.meta.url), 'utf8'));
const toneInTone = JSON.parse(await readFile(new URL('../data/grade2-authoring-tone-in-tone-0001-0012.json', import.meta.url), 'utf8'));
const tonal = JSON.parse(await readFile(new URL('../data/grade2-authoring-tonal-0001-0012.json', import.meta.url), 'utf8'));
const camaieu = JSON.parse(await readFile(new URL('../data/grade2-authoring-camaieu-faux-camaieu-0001-0012.json', import.meta.url), 'utf8'));
const bicolorTricolor = JSON.parse(await readFile(new URL('../data/grade2-authoring-bicolor-tricolor-0001-0012.json', import.meta.url), 'utf8'));

const batches = [foundation, triad, munsell, naturalComplex, dominant, toneOnTone, toneInTone, tonal, camaieu, bicolorTricolor];

function fingerprint(q) {
  return JSON.stringify([q.sentence, q.choices]);
}

test('Grade 2 runtime is the record-identical union of verified authoring batches', () => {
  assert.equal(runtime.format, 'power-color-grade2-runtime-v1');
  assert.equal(runtime.grade, 2);
  assert.equal(runtime.questions.length, 120);
  assert.equal(runtime.questions.filter((q) => q.validationStatus === 'verified').length, 120);
  assert.equal(runtime.questions.filter((q) => q.validationStatus === 'pending_validation').length, 0);
  assert.deepEqual(runtime.questions, batches.flatMap((batch) => batch.questions));
  assert.deepEqual(runtime.skills, batches.map((batch) => batch.skill));
});

test('Grade 2 runtime has no full-fingerprint duplicates', () => {
  const fingerprints = runtime.questions.map(fingerprint);
  assert.equal(new Set(fingerprints).size, fingerprints.length);
});

test('shared Power TOEIC engine runs all Grade 2 skills', () => {
  const repository = new InMemoryQuestionBank({ questions: runtime.questions, skills: runtime.skills });
  for (const batch of batches) {
    const targetId = batch.questions[0].id;
    const session = new QuizSession({ questionIds: [targetId], repository, now: () => 1000 });
    const question = session.currentQuestion;
    assert.equal(question.id, targetId);
    assert.equal(session.submitAnswer(question.correctIndex).correct, true);
  }

  const recipe = createWorkoutRecipe({
    mode: 'TRAINING',
    totalCount: 30,
    skillAllocations: batches.map((batch) => ({ skillId: batch.skill.id, count: 3 })),
    seed: 41
  });
  assert.equal(selectQuestionIds({ repository, recipe }).length, 30);
});
