import test from 'node:test';
import assert from 'node:assert/strict';
import { performance } from 'node:perf_hooks';
import { InMemoryQuestionBank } from '../js/data/question-bank-adapter.js';
import { createWorkoutRecipe, selectQuestionIds } from '../js/core/workout-builder.js';

function makeSyntheticBank({ skillCount = 40, questionsPerSkill = 500 } = {}) {
  const skills = Array.from({ length: skillCount }, (_, skillIndex) => ({
    id: `synthetic.skill-${skillIndex}`,
    label: `Synthetic Skill ${skillIndex}`,
    categoryId: `synthetic.category-${Math.floor(skillIndex / 5)}`
  }));
  const questions = [];
  for (let skillIndex = 0; skillIndex < skillCount; skillIndex += 1) {
    for (let questionIndex = 0; questionIndex < questionsPerSkill; questionIndex += 1) {
      questions.push({
        id: `synthetic-q-${skillIndex}-${questionIndex}`,
        version: 1,
        skillId: `synthetic.skill-${skillIndex}`,
        categoryId: `synthetic.category-${Math.floor(skillIndex / 5)}`,
        sentence: `Synthetic fixture ${skillIndex}-${questionIndex} ____ .`,
        choices: ['A', 'B', 'C', 'D'],
        correctIndex: questionIndex % 4,
        explanation: 'Synthetic performance fixture only.',
        fixture: true
      });
    }
  }
  return { skills, questions };
}

test('20k-question synthetic bank can build and select a 100-question workout responsively', () => {
  const bank = makeSyntheticBank();
  const started = performance.now();
  const repository = new InMemoryQuestionBank(bank);
  const recipe = createWorkoutRecipe({
    mode: 'CUSTOM',
    totalCount: 100,
    skillAllocations: Array.from({ length: 10 }, (_, index) => ({
      skillId: `synthetic.skill-${index}`,
      count: 10
    })),
    seed: 20260827
  });
  const selected = selectQuestionIds({ repository, recipe, attempts: [] });
  const elapsedMs = performance.now() - started;

  assert.equal(selected.length, 100);
  assert.equal(new Set(selected).size, 100);
  assert.ok(elapsedMs < 2000, `synthetic 20k bank build+selection took ${elapsedMs.toFixed(1)}ms`);
});
