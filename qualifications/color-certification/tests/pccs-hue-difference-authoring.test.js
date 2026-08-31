import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const master = JSON.parse(await readFile(new URL('../data/grade3-pccs-structure.json', import.meta.url), 'utf8'));
const batch = JSON.parse(await readFile(new URL('../data/grade3-authoring-hue-difference-0001-0012.json', import.meta.url), 'utf8'));
const hueById = new Map(master.hues.map((hue) => [hue.id, hue]));

function circularHueDifference(a, b) {
  const raw = Math.abs(a - b);
  return Math.min(raw, 24 - raw);
}

function promptPositions(prompt) {
  const match = prompt.match(/色相番号(\d{1,2})と(\d{1,2})/);
  assert.ok(match, `missing hue positions in prompt: ${prompt}`);
  return [Number(match[1]), Number(match[2])];
}

test('Grade 3 hue-difference batch independently covers numeric circular differences 1-12 exactly once', () => {
  assert.equal(batch.grade, 3);
  assert.equal(batch.skill.id, 'pc3.relation.hue_difference');
  assert.equal(batch.questions.length, 12);
  assert.equal(new Set(batch.questions.map((q) => q.id)).size, 12);
  assert.deepEqual(batch.qaSummary, {
    generated: 12,
    checked: 12,
    verified: 12,
    needsRevision: 0,
    rejected: 0,
    pending: 0,
    correctIndexDistribution: { A: 3, B: 3, C: 3, D: 3 }
  });

  const coveredDifferences = new Set();
  for (const q of batch.questions) {
    assert.equal(q.validationStatus, 'verified');
    assert.equal(q.qa.generatedAs, 'pending_validation');
    assert.equal(q.questionType, 'text_choice');
    assert.equal(q.taxonomyPath, 'grade3/relation/hue_difference');
    assert.equal(q.skillId, 'pc3.relation.hue_difference');
    assert.equal(q.choices.length, 4);
    assert.equal(new Set(q.choices).size, 4);
    assert.equal(q.proposedAnswer, q.choices[q.correctIndex]);
    assert.ok(q.sourceRefs.includes('jcri_2022_report'));
    assert.ok(q.sourceRefs.includes('aft_grade3_scope'));

    const [a, b] = promptPositions(q.prompt);
    const difference = circularHueDifference(a, b);
    assert.equal(Number(q.choices[q.correctIndex]), difference, `wrong hue difference for ${q.id}`);
    assert.ok(q.choices.every((choice) => /^\d{1,2}$/.test(choice)));
    assert.equal(q.choices.filter((choice) => Number(choice) === difference).length, 1);

    assert.equal(q.colorRefs.length, 2);
    const refs = q.colorRefs.map((ref) => hueById.get(ref));
    refs.forEach((hue) => assert.ok(hue, `unknown hue ref in ${q.id}`));
    assert.deepEqual(refs.map((hue) => hue.position), [a, b]);
    coveredDifferences.add(difference);
  }
  assert.deepEqual([...coveredDifferences].sort((a, b) => a - b), [1,2,3,4,5,6,7,8,9,10,11,12]);
});

test('Hue-difference batch balances answer positions and remains monitor-independent', () => {
  const counts = [0, 0, 0, 0];
  for (const q of batch.questions) {
    counts[q.correctIndex] += 1;
    assert.equal('presentation' in q, false);
  }
  assert.deepEqual(counts, [3, 3, 3, 3]);
});

test('Hue-difference text questions produce feedback without display-color lookup', () => {
  for (const q of batch.questions) {
    const feedback = getAnswerFeedbackModel(q, new Map());
    assert.equal(feedback.kind, 'text');
    assert.equal(feedback.title, `正解：${q.choices[q.correctIndex]}`);
    assert.equal(feedback.name, q.choices[q.correctIndex]);
    assert.equal(feedback.colorRef, null);
    assert.equal(feedback.showSwatch, false);
    assert.equal(feedback.explanation, q.explanation);
  }
});
