import test from 'node:test';
import assert from 'node:assert/strict';
import { InMemoryQuestionBank } from '../js/data/question-bank-adapter.js';
import {
  createWorkoutRecipe,
  createPresetRecipe,
  createWeaknessWorkoutRecipe,
  selectQuestionIds,
} from '../js/core/workout-builder.js';

const questions = [
  { id: 'a1', skillId: 'a', categoryId: 'g', choices: ['1','2','3','4'] },
  { id: 'a2', skillId: 'a', categoryId: 'g', choices: ['1','2','3','4'] },
  { id: 'a3', skillId: 'a', categoryId: 'g', choices: ['1','2','3','4'] },
  { id: 'b1', skillId: 'b', categoryId: 'g', choices: ['1','2','3','4'] },
  { id: 'b2', skillId: 'b', categoryId: 'g', choices: ['1','2','3','4'] },
  { id: 'b3', skillId: 'b', categoryId: 'g', choices: ['1','2','3','4'] },
];
const repository = new InMemoryQuestionBank({ questions, skills: [{ id: 'a' }, { id: 'b' }] });

test('recipe is JSON-friendly, immutable, and rejects invalid allocations', () => {
  const recipe = createWorkoutRecipe({ mode: 'CUSTOM', totalCount: 4, skillAllocations: [{ skillId: 'a', count: 2 }, { skillId: 'b', weight: 1 }], seed: 7 });
  assert.equal(recipe.mode, 'CUSTOM');
  assert.equal(JSON.parse(JSON.stringify(recipe)).seed, 7);
  assert.ok(Object.isFrozen(recipe));
  assert.ok(Object.isFrozen(recipe.skillAllocations));
  assert.throws(() => createWorkoutRecipe({ mode: 'CUSTOM', totalCount: 2, skillAllocations: [{ skillId: 'a', count: 1 }, { skillId: 'a', count: 1 }] }), /Duplicate/);
  assert.throws(() => createWorkoutRecipe({ mode: 'TEST', totalCount: 2, labelPolicy: 'show_skill' }), /hide skill/);
});

test('selector is deterministic, prefers unseen, and avoids duplicate IDs', () => {
  const recipe = createWorkoutRecipe({ mode: 'CUSTOM', totalCount: 4, skillAllocations: [{ skillId: 'a', count: 2 }, { skillId: 'b', count: 2 }], seed: 13 });
  const attempts = [{ questionId: 'a1', answeredAt: '2026-08-25T10:00:00Z' }, { questionId: 'b1', answeredAt: '2026-08-25T11:00:00Z' }];
  const first = selectQuestionIds({ repository, recipe, attempts });
  const second = selectQuestionIds({ repository, recipe, attempts });
  assert.deepEqual(first, second);
  assert.equal(first.length, 4);
  assert.equal(new Set(first).size, 4);
  assert.ok(first.slice(0, 2).every((id) => id.startsWith('a')));
  assert.ok(first.slice(2).every((id) => id.startsWith('b')));
  assert.ok(!first.slice(0, 2).includes('a1'));
  assert.ok(!first.slice(2).includes('b1'));
});

test('presets resolve to common recipes and REVIEW selects only due IDs', () => {
  assert.equal(createPresetRecipe('QUICK', { totalCount: 5 }).mode, 'QUICK');
  assert.equal(createPresetRecipe('TRAINING', { skillId: 'a', totalCount: 2 }).skillAllocations[0].count, 2);
  assert.equal(createPresetRecipe('POWER', { skillId: 'a' }).totalCount, 100);
  assert.equal(createPresetRecipe('TEST').labelPolicy, 'hide_skill');
  const review = createPresetRecipe('REVIEW', { totalCount: 2, seed: 2 });
  assert.deepEqual(new Set(selectQuestionIds({ repository, recipe: review, reviewQuestionIds: ['a2', 'b3'] })), new Set(['a2', 'b3']));
});

test('weakness recipe weights demonstrated weaknesses through the same model', () => {
  const recipe = createWeaknessWorkoutRecipe([{ skillId: 'a', score: 3 }, { skillId: 'b', score: 1 }], { totalCount: 4, seed: 1 });
  assert.equal(recipe.mode, 'WEAKNESS');
  assert.equal(recipe.skillAllocations.length, 2);
  const ids = selectQuestionIds({ repository, recipe });
  assert.equal(ids.length, 4);
  assert.equal(ids.filter((id) => id.startsWith('a')).length, 3);
  assert.equal(ids.filter((id) => id.startsWith('b')).length, 1);
});
