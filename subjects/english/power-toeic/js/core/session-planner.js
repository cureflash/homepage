import { createWorkoutRecipe, selectQuestionIds } from './workout-builder.js';

export const FINITE_SESSION_SIZES = Object.freeze([10, 30, 50, 100]);
export const DEFAULT_ENDLESS_CHUNK_SIZE = 30;

export function isSupportedFiniteSessionSize(size) {
  return FINITE_SESSION_SIZES.includes(Number(size));
}

export function createFiniteSessionRecipe(recipe, size) {
  const totalCount = Number(size);
  if (!isSupportedFiniteSessionSize(totalCount)) {
    throw new Error(`Unsupported finite session size: ${size}`);
  }
  return createWorkoutRecipe({
    ...recipe,
    totalCount,
    endless: false,
    skillAllocations: recipe.skillAllocations.map((entry) =>
      entry.weight != null ? { skillId: entry.skillId, weight: entry.weight } : { skillId: entry.skillId, count: Math.min(entry.count, totalCount) }
    ),
  });
}

export function createEndlessChunk({
  repository,
  recipe,
  attempts = [],
  reviewQuestionIds = [],
  chunkIndex = 0,
  chunkSize = DEFAULT_ENDLESS_CHUNK_SIZE,
} = {}) {
  if (!recipe?.endless) throw new Error('Endless chunk requires recipe.endless = true');
  if (!Number.isInteger(chunkIndex) || chunkIndex < 0) throw new Error('chunkIndex must be a non-negative integer');
  if (!Number.isInteger(chunkSize) || chunkSize <= 0 || chunkSize > 100) throw new Error('chunkSize must be an integer from 1 to 100');

  const chunkRecipe = createWorkoutRecipe({
    ...recipe,
    totalCount: chunkSize,
    seed: recipe.seed + chunkIndex,
    endless: true,
    skillAllocations: recipe.skillAllocations.map((entry) =>
      entry.weight != null
        ? { skillId: entry.skillId, weight: entry.weight }
        : { skillId: entry.skillId, weight: Math.max(1, entry.count) }
    ),
  });

  const questionIds = selectQuestionIds({ repository, recipe: chunkRecipe, attempts, reviewQuestionIds });
  return Object.freeze({
    chunkIndex,
    chunkSize,
    questionIds,
    hasQuestions: questionIds.length > 0,
    nextChunkIndex: chunkIndex + 1,
  });
}
