import test from 'node:test';
import assert from 'node:assert/strict';
import { createWorkoutRecipe } from '../js/core/workout-builder.js';
import {
  addSkillAllocation,
  createWorkoutDraft,
  normalizeEditedWorkout,
  removeSkillAllocation,
  setSkillCount,
  setWorkoutTotalCount,
} from '../js/core/workout-editor-model.js';

test('weakness recommendation becomes an editable CUSTOM recipe', () => {
  const weakness = createWorkoutRecipe({
    mode: 'WEAKNESS', totalCount: 30,
    skillAllocations: [{ skillId: 'a', weight: 3 }, { skillId: 'b', weight: 2 }], seed: 7,
  });
  let draft = createWorkoutDraft(weakness);
  assert.equal(draft.mode, 'CUSTOM');
  draft = setSkillCount(draft, 'a', 12);
  draft = setSkillCount(draft, 'b', 10);
  draft = setWorkoutTotalCount(draft, 22);
  const edited = normalizeEditedWorkout(draft);
  assert.equal(edited.mode, 'CUSTOM');
  assert.equal(edited.totalCount, 22);
  assert.deepEqual(edited.skillAllocations, [{ skillId: 'a', count: 12 }, { skillId: 'b', count: 10 }]);
});

test('skills can be removed and added without mutating original recipe', () => {
  const original = createWorkoutRecipe({ mode: 'CUSTOM', totalCount: 10, skillAllocations: [{ skillId: 'a', count: 10 }] });
  let draft = createWorkoutDraft(original);
  draft = removeSkillAllocation(draft, 'a');
  draft = addSkillAllocation(draft, 'b', 10);
  const edited = normalizeEditedWorkout(draft);
  assert.deepEqual(original.skillAllocations, [{ skillId: 'a', count: 10 }]);
  assert.deepEqual(edited.skillAllocations, [{ skillId: 'b', count: 10 }]);
});

test('invalid edited totals are rejected by the shared recipe validator', () => {
  const original = createWorkoutRecipe({ mode: 'CUSTOM', totalCount: 10, skillAllocations: [{ skillId: 'a', count: 10 }] });
  const draft = setWorkoutTotalCount(setSkillCount(createWorkoutDraft(original), 'a', 12), 10);
  assert.throws(() => normalizeEditedWorkout(draft), /exceed totalCount/);
});

test('duplicate skill add and unknown count edits fail explicitly', () => {
  const original = createWorkoutRecipe({ mode: 'CUSTOM', totalCount: 10, skillAllocations: [{ skillId: 'a', count: 10 }] });
  const draft = createWorkoutDraft(original);
  assert.throws(() => addSkillAllocation(draft, 'a', 1), /already exists/);
  assert.throws(() => setSkillCount(draft, 'missing', 1), /Unknown draft skill/);
});
