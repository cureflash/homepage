import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const batch = JSON.parse(await readFile(new URL('../data/grade2-authoring-official-sample-facts-0001-0012.json', import.meta.url), 'utf8'));

const expectedAnswers = new Map([
  ['pc2-official-sample-facts-0001', '無彩色を使用してもよい'],
  ['pc2-official-sample-facts-0002', 'ヘクサード'],
  ['pc2-official-sample-facts-0003', 'テトラード'],
  ['pc2-official-sample-facts-0004', 'テトラード'],
  ['pc2-official-sample-facts-0005', '減法混色'],
  ['pc2-official-sample-facts-0006', 'CMY'],
  ['pc2-official-sample-facts-0007', 'トライアド'],
  ['pc2-official-sample-facts-0008', 'トライアド'],
  ['pc2-official-sample-facts-0009', 'トーンイントーン配色'],
  ['pc2-official-sample-facts-0010', 'スプリットコンプリメンタリー'],
  ['pc2-official-sample-facts-0011', 'ペンタード'],
  ['pc2-official-sample-facts-0012', 'トーナル配色']
]);

test('Grade 2 first-party text-only authoring slice is complete and balanced', () => {
  assert.equal(batch.grade, 2);
  assert.equal(batch.skill.id, 'pc2.foundation.official_sample_facts');
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

  const answerPositions = [0, 0, 0, 0];
  for (const q of batch.questions) {
    assert.equal(q.validationStatus, 'verified');
    assert.equal(q.qa.generatedAs, 'pending_validation');
    assert.equal(q.questionType, 'text_choice');
    assert.equal(q.taxonomyPath, 'grade2/foundation/official_sample_facts');
    assert.equal(q.skillId, 'pc2.foundation.official_sample_facts');
    assert.equal(q.choices.length, 4);
    assert.equal(new Set(q.choices).size, 4);
    assert.equal(q.proposedAnswer, q.choices[q.correctIndex]);
    assert.equal(q.proposedAnswer, expectedAnswers.get(q.id), q.id);
    assert.deepEqual(q.sourceRefs, ['aft_grade2_sample']);
    assert.equal('presentation' in q, false);
    assert.match(q.qa.independentRecheck, /official|published|re-derived|verified/i);
    answerPositions[q.correctIndex] += 1;
  }
  assert.deepEqual(answerPositions, [3,3,3,3]);
});

test('Grade 2 first authoring slice remains non-visual in the shared renderer', () => {
  for (const q of batch.questions) {
    const feedback = getAnswerFeedbackModel(q, new Map());
    assert.equal(feedback.kind, 'text');
    assert.equal(feedback.title, `正解：${q.choices[q.correctIndex]}`);
    assert.equal(feedback.colorRef, null);
    assert.equal(feedback.showSwatch, false);
    assert.equal(feedback.explanation, q.explanation);
  }
});
