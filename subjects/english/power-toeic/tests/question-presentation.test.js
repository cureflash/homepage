import test from 'node:test';
import assert from 'node:assert/strict';
import { createWorkoutRecipe } from '../js/core/workout-builder.js';
import { getQuestionPresentation } from '../js/ui/question-presentation.js';

const question = { id: 'q1', skillId: 'skill.adverb' };
const labels = new Map([['skill.adverb', '副詞']]);

test('training presentation can show the learner-facing skill label', () => {
  const recipe = createWorkoutRecipe({ mode: 'TRAINING', totalCount: 10, skillAllocations: [{ skillId: 'skill.adverb', count: 10 }] });
  const presentation = getQuestionPresentation({ recipe, question, skillLabels: labels });
  assert.equal(presentation.modeLabel, '集中トレーニング');
  assert.equal(presentation.skillLabel, '副詞');
  assert.match(presentation.contextText, /副詞/);
});

test('TEST presentation hides the same question skill label', () => {
  const recipe = createWorkoutRecipe({ mode: 'TEST', totalCount: 10, skillAllocations: [], labelPolicy: 'hide_skill' });
  const presentation = getQuestionPresentation({ recipe, question, skillLabels: labels });
  assert.equal(presentation.modeLabel, 'ミックステスト');
  assert.equal(presentation.skillLabel, null);
  assert.equal(presentation.contextText, 'ミックステスト');
  assert.equal(presentation.contextText.includes('副詞'), false);
});

test('missing learner label never leaks the raw micro-skill id into mixed mode', () => {
  const recipe = createWorkoutRecipe({ mode: 'TEST', totalCount: 10, skillAllocations: [] });
  const presentation = getQuestionPresentation({ recipe, question, skillLabels: new Map() });
  assert.equal(presentation.contextText.includes(question.skillId), false);
});
