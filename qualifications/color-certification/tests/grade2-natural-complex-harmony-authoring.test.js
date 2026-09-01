import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const batch = JSON.parse(await readFile(new URL('../data/grade2-authoring-natural-complex-harmony-0001-0012.json', import.meta.url), 'utf8'));

function fingerprint(q) {
  return JSON.stringify([q.sentence, q.choices]);
}

test('Grade 2 natural/complex harmony batch is independently verified and balanced', () => {
  assert.equal(batch.grade, 2);
  assert.equal(batch.skill.id, 'pc2.scheme.natural_complex_harmony');
  assert.equal(batch.questions.length, 12);
  assert.deepEqual(batch.qaSummary, {
    generated: 12,
    checked: 12,
    verified: 12,
    needsRevision: 0,
    rejected: 0,
    pending: 0,
    correctIndexDistribution: { A: 3, B: 3, C: 3, D: 3 }
  });

  const answerPositions = [0, 0, 0, 0];
  for (const q of batch.questions) {
    assert.equal(q.validationStatus, 'verified');
    assert.equal(q.qa.generatedAs, 'pending_validation');
    assert.equal(q.questionType, 'text_choice');
    assert.equal(q.taxonomyPath, 'grade2/scheme/natural_complex_harmony');
    assert.equal(q.skillId, 'pc2.scheme.natural_complex_harmony');
    assert.equal(q.choices.length, 4);
    assert.equal(new Set(q.choices).size, 4);
    assert.equal(q.proposedAnswer, q.choices[q.correctIndex]);
    assert.ok(q.sourceRefs.includes('aft_grade2_toc_2026'));
    assert.ok(q.sourceRefs.includes('rockpaint_natural_harmony_2026'));
    assert.ok(q.sourceRefs.includes('daiwahouse_complex_harmony_2026'));
    assert.equal('presentation' in q, false);
    answerPositions[q.correctIndex] += 1;
  }
  assert.deepEqual(answerPositions, [3,3,3,3]);

  const fingerprints = batch.questions.map(fingerprint);
  assert.equal(new Set(fingerprints).size, fingerprints.length);
});

test('Natural/complex harmony text questions render without monitor color lookup', () => {
  for (const q of batch.questions) {
    const feedback = getAnswerFeedbackModel(q, new Map());
    assert.equal(feedback.kind, 'text');
    assert.equal(feedback.title, `正解：${q.choices[q.correctIndex]}`);
    assert.equal(feedback.colorRef, null);
    assert.equal(feedback.showSwatch, false);
  }
});
