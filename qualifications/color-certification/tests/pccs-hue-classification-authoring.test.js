import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const master = JSON.parse(await readFile(new URL('../data/grade3-pccs-structure.json', import.meta.url), 'utf8'));
const batch = JSON.parse(await readFile(new URL('../data/grade3-authoring-hue-classification-0001-0012.json', import.meta.url), 'utf8'));
const hueById = new Map(master.hues.map((hue) => [hue.id, hue]));

function circularHueDifference(a, b) {
  const raw = Math.abs(a - b);
  return Math.min(raw, 24 - raw);
}

function classifyHueDifference(difference) {
  if (difference === 0) return '同一色相';
  if (difference === 1) return '隣接色相';
  if (difference <= 3) return '類似色相';
  if (difference <= 7) return '中差色相';
  if (difference <= 10) return '対照色相';
  return '補色色相';
}

function promptPositions(prompt) {
  const match = prompt.match(/色相番号(\d{1,2})と(\d{1,2})/);
  assert.ok(match, `missing hue positions in prompt: ${prompt}`);
  return [Number(match[1]), Number(match[2])];
}

test('Grade 3 named hue-classification batch covers differences 1-12 and all sourced boundary regions', () => {
  assert.equal(batch.grade, 3);
  assert.equal(batch.skill.id, 'pc3.relation.hue_classification');
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
  const coveredClasses = new Set();
  const answerPositions = [0, 0, 0, 0];

  for (const q of batch.questions) {
    assert.equal(q.validationStatus, 'verified');
    assert.equal(q.qa.generatedAs, 'pending_validation');
    assert.equal(q.questionType, 'text_choice');
    assert.equal(q.taxonomyPath, 'grade3/relation/hue_classification');
    assert.equal(q.skillId, 'pc3.relation.hue_classification');
    assert.equal(q.choices.length, 4);
    assert.equal(new Set(q.choices).size, 4);
    assert.equal(q.proposedAnswer, q.choices[q.correctIndex]);
    assert.ok(q.sourceRefs.includes('aft_grade3_scope'));
    assert.ok(q.sourceRefs.includes('jstage_jhej_2024_hue_relation'));
    assert.ok(q.sourceRefs.includes('jstage_jsre_2026_hue_relation'));
    assert.equal('presentation' in q, false);

    const [a, b] = promptPositions(q.prompt);
    const difference = circularHueDifference(a, b);
    const expected = classifyHueDifference(difference);
    assert.equal(q.choices[q.correctIndex], expected, q.id);
    assert.equal(q.choices.filter((choice) => choice === expected).length, 1, q.id);

    assert.equal(q.colorRefs.length, 2);
    const refs = q.colorRefs.map((ref) => hueById.get(ref));
    refs.forEach((hue) => assert.ok(hue, `unknown hue ref in ${q.id}`));
    assert.deepEqual(refs.map((hue) => hue.position), [a, b]);

    coveredDifferences.add(difference);
    coveredClasses.add(expected);
    answerPositions[q.correctIndex] += 1;
  }

  assert.deepEqual([...coveredDifferences].sort((a, b) => a - b), [1,2,3,4,5,6,7,8,9,10,11,12]);
  assert.deepEqual([...coveredClasses].sort(), ['中差色相','補色色相','対照色相','類似色相','隣接色相'].sort());
  assert.deepEqual(answerPositions, [3,3,3,3]);
});

test('Named hue-classification text questions produce feedback without monitor color lookup', () => {
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
