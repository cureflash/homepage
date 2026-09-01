import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const batch = JSON.parse(await readFile(new URL('../data/grade2-authoring-triad-hue-positions-0001-0012.json', import.meta.url), 'utf8'));

function wrap24(n) {
  return ((n - 1) % 24 + 24) % 24 + 1;
}

test('Grade 2 triad hue-position authoring is complete, balanced, and independently derivable', () => {
  assert.equal(batch.grade, 2);
  assert.equal(batch.skill.id, 'pc2.scheme.triad_hue_positions');
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

  const answerPositions = [0,0,0,0];
  for (const q of batch.questions) {
    assert.equal(q.validationStatus, 'verified');
    assert.equal(q.qa.generatedAs, 'pending_validation');
    assert.equal(q.questionType, 'text_choice');
    assert.equal(q.taxonomyPath, 'grade2/scheme/triad_hue_positions');
    assert.equal(q.skillId, 'pc2.scheme.triad_hue_positions');
    assert.deepEqual(q.sourceRefs, ['aft_grade2_current_sample_page_2026', 'jcri_2022_report']);
    assert.equal(q.choices.length, 4);
    assert.equal(new Set(q.choices).size, 4);
    assert.equal(q.proposedAnswer, q.choices[q.correctIndex]);
    assert.equal('presentation' in q, false);

    const pairMatch = q.prompt.match(/色相番号(\d+)を1色目/);
    const missingMatch = q.prompt.match(/色相番号(\d+)と(\d+)を含む/);
    if (pairMatch) {
      const start = Number(pairMatch[1]);
      const expected = `${wrap24(start + 8)}と${wrap24(start + 16)}`;
      assert.equal(q.proposedAnswer, expected, q.id);
    } else {
      assert.ok(missingMatch, q.id);
      const a = Number(missingMatch[1]);
      const b = Number(missingMatch[2]);
      assert.equal(wrap24(a + 8), b, q.id);
      assert.equal(Number(q.proposedAnswer), wrap24(a + 16), q.id);
    }

    answerPositions[q.correctIndex] += 1;
  }
  assert.deepEqual(answerPositions, [3,3,3,3]);
});

test('Grade 2 triad hue-position records remain text-only in the shared renderer', () => {
  for (const q of batch.questions) {
    const feedback = getAnswerFeedbackModel(q, new Map());
    assert.equal(feedback.kind, 'text');
    assert.equal(feedback.title, `正解：${q.choices[q.correctIndex]}`);
    assert.equal(feedback.colorRef, null);
    assert.equal(feedback.showSwatch, false);
    assert.equal(feedback.explanation, q.explanation);
  }
});
