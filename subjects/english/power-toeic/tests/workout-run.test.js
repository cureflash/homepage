import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { InMemoryQuestionBank } from '../js/data/question-bank-adapter.js';
import { VersionedAppStore } from '../js/core/persistence.js';
import { createCategoryWorkout } from '../js/core/category-workouts.js';
import { createPresetRecipe } from '../js/core/workout-builder.js';
import { createWorkoutDraft, normalizeEditedWorkout, removeSkillAllocation } from '../js/core/workout-editor-model.js';
import { WorkoutRun } from '../js/core/workout-run.js';
import { buildPilotBank } from '../tools/export-pilot-bank.mjs';

function bank() {
  const skills = [{ id: 'a', label: 'A', categoryId: 'one' }, { id: 'b', label: 'B', categoryId: 'two' }];
  const questions = skills.flatMap((skill) => Array.from({ length: 40 }, (_, i) => ({
    id: `${skill.id}-${i}`, version: 1, skillId: skill.id, categoryId: skill.categoryId,
    sentence: 'Fixture ____.', choices: ['A', 'B', 'C', 'D'], correctIndex: 0, explanation: 'Fixture only.',
  })));
  return new InMemoryQuestionBank({ questions, skills, categories: [{ id: 'one', label: 'One' }, { id: 'two', label: 'Two' }] });
}

function store() {
  const values = new Map();
  return new VersionedAppStore({ storage: {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  } });
}

test('category tests stay inside selected categories even when requested count exceeds the pool', () => {
  const repository = bank();
  const recipe = createCategoryWorkout({ repository, categoryIds: ['one'], mode: 'TEST', totalCount: 100 });
  const run = new WorkoutRun({ repository, appStore: store(), recipe });
  assert.equal(run.session.questionIds.length, 40);
  assert.ok(run.session.questionIds.every((id) => repository.getQuestion(id).categoryId === 'one'));
  assert.equal(run.session.context, 'mixed');
  assert.equal(recipe.labelPolicy, 'hide_skill');
  assert.throws(() => createCategoryWorkout({ repository, categoryIds: [], mode: 'TEST' }));
});

test('removing a proposed skill before starting excludes it from the entire workout', () => {
  const repository = bank();
  const proposed = createCategoryWorkout({ repository, categoryIds: ['one', 'two'], mode: 'TEST', totalCount: 100 });
  const draft = removeSkillAllocation(createWorkoutDraft(proposed), 'b');
  const run = new WorkoutRun({ repository, appStore: store(), recipe: normalizeEditedWorkout(draft) });
  assert.ok(run.session.questionIds.every((id) => id.startsWith('a-')));
  assert.equal(run.session.context, 'mixed');
});

test('endless continues beyond the first bounded chunk, aggregates answers, and awards completion once', () => {
  const repository = bank();
  const appStore = store();
  let time = Date.parse('2026-01-01T00:00:00Z');
  const recipe = createPresetRecipe('POWER', { skillId: 'a', endless: true });
  const run = new WorkoutRun({ repository, appStore, recipe, now: () => time++ });
  const first = [...run.session.questionIds];
  for (let i = 0; i < 65; i++) {
    assert.ok(run.currentQuestion.id.startsWith('a-'));
    run.submitAnswer(0);
    run.next();
    assert.ok(run.session.questionIds.length <= 30);
  }
  assert.equal(run.progress.current, 66);
  assert.equal(run.chunkIndex, 2);
  assert.notDeepEqual(first, run.session.questionIds);
  assert.equal(appStore.load().attempts.length, 65);
  const before = appStore.load().progression.points;
  assert.equal(run.finish().answered, 65);
  assert.equal(run.results().correct, 65);
  assert.equal(appStore.load().progression.points, before + 5);
  run.finish();
  assert.equal(appStore.load().progression.points, before + 5);
});

test('saved training becomes a due review after restart and advances its review interval', () => {
  const repository = bank();
  const appStore = store();
  const training = new WorkoutRun({ repository, appStore, recipe: createPresetRecipe('QUICK', { totalCount: 1 }), now: () => Date.parse('2026-01-01T00:00:00Z') });
  const id = training.currentQuestion.id;
  training.submitAnswer(0);
  training.next();
  assert.equal(appStore.load().progression.points, 2);
  const review = new WorkoutRun({ repository, appStore, recipe: createPresetRecipe('REVIEW'), now: () => Date.parse('2026-01-02T00:00:00Z') });
  assert.equal(review.currentQuestion.id, id);
  review.submitAnswer(0);
  review.next();
  assert.equal(appStore.load().attempts[1].context, 'review');
  assert.equal(appStore.load().reviewEntries[0].intervalIndex, 1);
  assert.equal(appStore.load().progression.points, 5);
});

test('Web and native resources are the exact same verified 30-question pilot export', async () => {
  const expected = await buildPilotBank();
  for (const path of ['../js/data/runtime/pilot-bank.json', '../../power-toeic-ios/Sources/PowerTOEIC/Resources/Questions/pilot-bank.json']) {
    const actual = JSON.parse(await readFile(new URL(path, import.meta.url), 'utf8'));
    assert.deepEqual(actual, expected);
    assert.equal(actual.questions.length, 30);
    assert.equal(actual.categories[0].label, '前置詞・接続詞');
  }
});
