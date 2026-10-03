import { createWorkoutRecipe } from './workout-builder.js';

export function createCategoryWorkout({ repository, categoryIds, skillId = null, mode = 'TRAINING', totalCount = 30 }) {
  const selected = new Set(categoryIds);
  const skills = repository.listSkills().filter((skill) => selected.has(skill.categoryId) && (!skillId || skill.id === skillId));
  if (!skills.length) throw new Error('分野を1つ以上選んでください。');
  return createWorkoutRecipe({
    mode, totalCount, labelPolicy: mode === 'TEST' ? 'hide_skill' : 'show_skill',
    skillAllocations: skills.map((skill) => ({ skillId: skill.id, weight: 1 })),
  });
}
