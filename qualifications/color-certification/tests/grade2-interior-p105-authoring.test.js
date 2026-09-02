import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const colorPlanning = JSON.parse(await readFile(new URL('../data/grade2-authoring-interior-color-planning-principles-0001-0012.json', import.meta.url), 'utf8'));
const zoning = JSON.parse(await readFile(new URL('../data/grade2-authoring-interior-zoning-classification-0001-0012.json', import.meta.url), 'utf8'));
const runtime = JSON.parse(await readFile(new URL('../data/grade2-runtime.json', import.meta.url), 'utf8'));

function fingerprint(q) {
  return JSON.stringify([q.sentence, q.choices]);
}

function gate(batch, skillId, taxonomyPath) {
  assert.equal(batch.grade, 2);
  assert.equal(batch.skill.id, skillId);
  assert.equal(batch.questions.length, 12);
  assert.deepEqual(batch.qaSummary, {
    generated: 12, checked: 12, verified: 12, needsRevision: 0, rejected: 0, pending: 0,
    correctIndexDistribution: { A: 3, B: 3, C: 3, D: 3 }
  });
  const positions = [0, 0, 0, 0];
  for (const q of batch.questions) {
    assert.equal(q.validationStatus, 'verified');
    assert.equal(q.qa.generatedAs, 'pending_validation');
    assert.equal(q.questionType, 'text_choice');
    assert.equal(q.taxonomyPath, taxonomyPath);
    assert.equal(q.choices.length, 4);
    assert.equal(new Set(q.choices).size, 4);
    assert.equal(q.proposedAnswer, q.choices[q.correctIndex]);
    assert.equal('presentation' in q, false);
    assert.equal('colorRefs' in q, false);
    assert.equal(/#[0-9a-f]{3,8}\b/i.test(JSON.stringify(q)), false);
    positions[q.correctIndex] += 1;
    const feedback = getAnswerFeedbackModel(q, new Map());
    assert.equal(feedback.kind, 'text');
    assert.equal(feedback.showSwatch, false);
  }
  assert.deepEqual(positions, [3, 3, 3, 3]);
  assert.equal(new Set(batch.questions.map(fingerprint)).size, 12);
}

test('Grade 2 Interior p105 authoring batches are independently verified, nonvisual, balanced, duplicate-free, and shared-renderer compatible', () => {
  gate(colorPlanning, 'pc2.interior.color_planning_principles', 'grade2/interior/color_planning_principles');
  gate(zoning, 'pc2.interior.zoning_classification', 'grade2/interior/zoning_classification');

  const promoted = [...colorPlanning.questions, ...zoning.questions];
  const promotedIds = new Set(promoted.map((q) => q.id));
  const runtimePromoted = runtime.questions.filter((q) => promotedIds.has(q.id));
  assert.deepEqual(runtimePromoted, promoted);
  assert.equal(new Set(promoted.map(fingerprint)).size, 24);

  assert.ok(colorPlanning.questions.every(q => q.sourceRefs.includes('aft_grade2_current_toc_2026')));
  assert.ok(colorPlanning.questions.every(q => q.sourceRefs.includes('cleverlyhome_interior_color_2023_official_text_reference')));
  assert.ok(zoning.questions.every(q => q.sourceRefs.includes('cleverlyhome_interior_color_2023_official_text_reference')));
  assert.ok(zoning.questions.some(q => q.sourceRefs.includes('daiken_homelife_zoning_2025')));
});
