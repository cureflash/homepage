import test from 'node:test';
import assert from 'node:assert/strict';
import { createWorkoutRecipe } from '../js/core/workout-builder.js';
import { createEndlessChunk, createFiniteSessionRecipe, FINITE_SESSION_SIZES } from '../js/core/session-planner.js';

function makeRepository(count = 160) {
  const questions = Array.from({ length: count }, (_, index) => ({ id: `q-${String(index + 1).padStart(3, '0')}`, skillId: index % 2 ? 'b' : 'a' }));
  return {
    listQuestions({ skillId = null } = {}) {
      return skillId ? questions.filter((question) => question.skillId === skillId) : [...questions];
    },
  };
}

test('finite session presets support 10, 30, 50 and 100', () => {
  const base = createWorkoutRecipe({ mode: 'CUSTOM', totalCount: 30, skillAllocations: [{ skillId: 'a', weight: 1 }] });
  assert.deepEqual(FINITE_SESSION_SIZES, [10, 30, 50, 100]);
  for (const size of FINITE_SESSION_SIZES) {
    const recipe = createFiniteSessionRecipe(base, size);
    assert.equal(recipe.totalCount, size);
    assert.equal(recipe.endless, false);
  }
  assert.throws(() => createFiniteSessionRecipe(base, 20), /Unsupported finite session size/);
});

test('endless mode returns bounded deterministic chunks', () => {
  const repository = makeRepository();
  const recipe = createWorkoutRecipe({
    mode: 'POWER', totalCount: 100, skillAllocations: [{ skillId: 'a', count: 100 }], seed: 11, endless: true,
  });
  const first = createEndlessChunk({ repository, recipe, chunkIndex: 0, chunkSize: 30 });
  const repeat = createEndlessChunk({ repository, recipe, chunkIndex: 0, chunkSize: 30 });
  assert.equal(first.questionIds.length, 30);
  assert.deepEqual(first.questionIds, repeat.questionIds);
  assert.equal(first.nextChunkIndex, 1);
});

test('later endless chunk prefers questions not present in attempt history', () => {
  const repository = makeRepository(100);
  const recipe = createWorkoutRecipe({
    mode: 'CUSTOM', totalCount: 30, skillAllocations: [], seed: 3, endless: true,
  });
  const first = createEndlessChunk({ repository, recipe, chunkIndex: 0, chunkSize: 30 });
  const attempts = first.questionIds.map((questionId, index) => ({ questionId, answeredAt: `2026-08-27T00:${String(index).padStart(2, '0')}:00Z` }));
  const second = createEndlessChunk({ repository, recipe, attempts, chunkIndex: 1, chunkSize: 30 });
  assert.equal(second.questionIds.length, 30);
  assert.equal(second.questionIds.some((id) => first.questionIds.includes(id)), false);
});

test('endless chunk validates bounds instead of creating unbounded arrays', () => {
  const repository = makeRepository();
  const recipe = createWorkoutRecipe({ mode: 'CUSTOM', totalCount: 30, skillAllocations: [], endless: true });
  assert.throws(() => createEndlessChunk({ repository, recipe, chunkSize: 0 }), /1 to 100/);
  assert.throws(() => createEndlessChunk({ repository, recipe, chunkSize: 101 }), /1 to 100/);
});
