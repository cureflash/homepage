import { createWorkoutRecipe } from './workout-builder.js';

function cloneAllocations(allocations = []) {
  return allocations.map(({ skillId, count, weight }) => ({
    skillId: String(skillId),
    ...(count == null ? {} : { count: Number(count) }),
    ...(weight == null ? {} : { weight: Number(weight) }),
  }));
}

export function createWorkoutDraft(recipe) {
  return {
    mode: recipe.mode === 'WEAKNESS' ? 'CUSTOM' : recipe.mode,
    totalCount: recipe.totalCount,
    skillAllocations: cloneAllocations(recipe.skillAllocations),
    selectionPolicy: recipe.selectionPolicy,
    labelPolicy: recipe.labelPolicy,
    seed: recipe.seed,
    endless: recipe.endless,
  };
}

export function setWorkoutTotalCount(draft, totalCount) {
  return { ...draft, totalCount: Number(totalCount), skillAllocations: cloneAllocations(draft.skillAllocations) };
}

export function setSkillCount(draft, skillId, count) {
  const normalizedCount = Number(count);
  const found = draft.skillAllocations.some((entry) => entry.skillId === skillId);
  if (!found) throw new Error(`Unknown draft skill: ${skillId}`);
  return {
    ...draft,
    skillAllocations: draft.skillAllocations.map((entry) =>
      entry.skillId === skillId ? { skillId, count: normalizedCount } : { ...entry }
    ),
  };
}

export function addSkillAllocation(draft, skillId, count = 1) {
  if (!skillId) throw new Error('skillId is required');
  if (draft.skillAllocations.some((entry) => entry.skillId === skillId)) {
    throw new Error(`Skill already exists in workout: ${skillId}`);
  }
  return {
    ...draft,
    skillAllocations: [...cloneAllocations(draft.skillAllocations), { skillId: String(skillId), count: Number(count) }],
  };
}

export function removeSkillAllocation(draft, skillId) {
  return {
    ...draft,
    skillAllocations: draft.skillAllocations.filter((entry) => entry.skillId !== skillId).map((entry) => ({ ...entry })),
  };
}

export function normalizeEditedWorkout(draft) {
  return createWorkoutRecipe({
    ...draft,
    mode: draft.mode === 'WEAKNESS' ? 'CUSTOM' : draft.mode,
    skillAllocations: cloneAllocations(draft.skillAllocations),
  });
}
