import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { InMemoryQuestionBank } from '../../power-toeic/js/question-bank-repository.js';
import { QuizSession } from '../../power-toeic/js/quiz-session.js';
import { buildWorkout } from '../../power-toeic/js/workout-builder.js';

const runtime = JSON.parse(await readFile(new URL('../data/grade2-runtime.json', import.meta.url), 'utf8'));
const foundation = JSON.parse(await readFile(new URL('../data/grade2-authoring-official-sample-facts-0001-0012.json', import.meta.url), 'utf8'));
const triad = JSON.parse(await readFile(new URL('../data/grade2-authoring-triad-hue-positions-0001-0012.json', import.meta.url), 'utf8'));
const munsell = JSON.parse(await readFile(new URL('../data/grade2-authoring-munsell-notation-components-0001-0012.json', import.meta.url), 'utf8'));
const naturalComplex = JSON.parse(await readFile(new URL('../data/grade2-authoring-natural-complex-harmony-0001-0012.json', import.meta.url), 'utf8'));
const dominant = JSON.parse(await readFile(new URL('../data/grade2-authoring-dominant-color-tone-0001-0012.json', import.meta.url), 'utf8'));
const toneOnTone = JSON.parse(await readFile(new URL('../data/grade2-authoring-tone-on-tone-0001-0012.json', import.meta.url), 'utf8'));
const toneInTone = JSON.parse(await readFile(new URL('../data/grade2-authoring-tone-in-tone-0001-0012.json', import.meta.url), 'utf8'));
const tonal = JSON.parse(await readFile(new URL('../data/grade2-authoring-tonal-0001-0012.json', import.meta.url), 'utf8'));

function fingerprint(q) {
  return JSON.stringify([q.prompt, q.choices]);
}

test('Grade 2 runtime is the record-identical union of verified authoring batches', () => {
  const authoringBatches = [foundation, triad, munsell, naturalComplex, dominant, toneOnTone, toneInTone, tonal];
  const expectedQuestions = authoringBatches.flatMap((batch) => batch.questions);
  const expectedSkills = authoringBatches.map((batch) => batch.skill);

  assert.equal(runtime.grade, 2);
  assert.equal(runtime.productionApproved, false);
  assert.equal(runtime.questions.length, 96);
  assert.equal(runtime.questions.filter((q) => q.validationStatus === 'verified').length, 96);
  assert.equal(runtime.questions.filter((q) => q.validationStatus === 'pending_validation').length, 0);
  assert.deepEqual(runtime.questions, expectedQuestions);
  assert.deepEqual(runtime.skills, expectedSkills);
});

test('Grade 2 runtime has no full-fingerprint duplicates', () => {
  const fingerprints = runtime.questions.map(fingerprint);
  assert.equal(new Set(fingerprints).size, fingerprints.length);
});

test('Grade 2 runtime records execute through the shared Power TOEIC engine', async () => {
  const repository = new InMemoryQuestionBank(runtime.questions);
  const skillFirstIds = [
    foundation.questions[0].id,
    triad.questions[0].id,
    munsell.questions[0].id,
    naturalComplex.questions[0].id,
    dominant.questions[0].id,
    toneOnTone.questions[0].id,
    toneInTone.questions[0].id,
    tonal.questions[0].id
  ];

  for (const id of skillFirstIds) {
    const session = new QuizSession({ questionBank: repository });
    await session.start([id]);
    const question = session.getCurrentQuestion();
    const result = session.submit(question.correctIndex);
    assert.equal(result.isCorrect, true);
  }

  const workout = buildWorkout({
    questionBank: runtime.questions,
    totalCount: 24,
    allocations: [
      { skillId: foundation.skill.id, count: 3 },
      { skillId: triad.skill.id, count: 3 },
      { skillId: munsell.skill.id, count: 3 },
      { skillId: naturalComplex.skill.id, count: 3 },
      { skillId: dominant.skill.id, count: 3 },
      { skillId: toneOnTone.skill.id, count: 3 },
      { skillId: toneInTone.skill.id, count: 3 },
      { skillId: tonal.skill.id, count: 3 }
    ],
    seed: 41
  });

  assert.equal(workout.length, 24);
  assert.deepEqual(
    [...new Set(workout.map((q) => q.skillId))].sort(),
    authoringSkillIds().sort()
  );
});

function authoringSkillIds() {
  return [
    foundation.skill.id,
    triad.skill.id,
    munsell.skill.id,
    naturalComplex.skill.id,
    dominant.skill.id,
    toneOnTone.skill.id,
    toneInTone.skill.id,
    tonal.skill.id
  ];
}
