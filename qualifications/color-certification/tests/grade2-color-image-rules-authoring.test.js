import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const batch = JSON.parse(await readFile(new URL('../data/grade2-authoring-color-image-rules-0001-0012.json', import.meta.url), 'utf8'));

const expectedAnswers = new Map([
  ['pc2-color-image-rules-0001', 'pトーンとltトーン'],
  ['pc2-color-image-rules-0002', 'p・ltトーンを中心にホワイト系を組み合わせる'],
  ['pc2-color-image-rules-0003', 'パープル系'],
  ['pc2-color-image-rules-0004', '抑える'],
  ['pc2-color-image-rules-0005', 'pトーンとltトーン'],
  ['pc2-color-image-rules-0006', 'ltgトーン'],
  ['pc2-color-image-rules-0007', 'ベーシックカラー'],
  ['pc2-color-image-rules-0008', 'エレガント'],
  ['pc2-color-image-rules-0009', 'アーバン'],
  ['pc2-color-image-rules-0010', 'クリア'],
  ['pc2-color-image-rules-0011', 'p・ltgトーンを使い、パープル系で明度差を抑える'],
  ['pc2-color-image-rules-0012', 'p・lt']
]);

test('current Grade 2 color-image rules batch is complete, balanced, and non-visual', () => {
  assert.equal(batch.grade, 2);
  assert.equal(batch.skill.id, 'pc2.image.color_image_rules');
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

  const positions = [0,0,0,0];
  for (const q of batch.questions) {
    assert.equal(q.validationStatus, 'verified');
    assert.equal(q.qa.generatedAs, 'pending_validation');
    assert.equal(q.questionType, 'text_choice');
    assert.equal(q.taxonomyPath, 'grade2/image/color_image_rules');
    assert.equal(q.skillId, 'pc2.image.color_image_rules');
    assert.equal(q.choices.length, 4);
    assert.equal(new Set(q.choices).size, 4);
    assert.equal(q.proposedAnswer, q.choices[q.correctIndex]);
    assert.equal(q.proposedAnswer, expectedAnswers.get(q.id), q.id);
    assert.deepEqual(q.sourceRefs, ['aft_grade2_current_sample_2026']);
    assert.equal('presentation' in q, false);
    assert.match(q.qa.independentRecheck, /current|published|re-read|re-derived|independently/i);
    positions[q.correctIndex] += 1;
  }
  assert.deepEqual(positions, [3,3,3,3]);
});

test('current Grade 2 color-image rules render through the shared text feedback path', () => {
  for (const q of batch.questions) {
    const feedback = getAnswerFeedbackModel(q, new Map());
    assert.equal(feedback.kind, 'text');
    assert.equal(feedback.title, `正解：${q.choices[q.correctIndex]}`);
    assert.equal(feedback.colorRef, null);
    assert.equal(feedback.showSwatch, false);
    assert.equal(feedback.explanation, q.explanation);
  }
});
