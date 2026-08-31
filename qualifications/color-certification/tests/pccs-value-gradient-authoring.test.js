import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const batch = JSON.parse(await readFile(new URL('../data/grade3-authoring-value-gradient-0001-0012.json', import.meta.url), 'utf8'));

function parseSequence(value) {
  return value.split('→').map((part) => Number(part));
}

function direction(sequence) {
  const diffs = sequence.slice(1).map((value, index) => value - sequence[index]);
  if (diffs.every((diff) => diff > 0)) return 'up';
  if (diffs.every((diff) => diff < 0)) return 'down';
  return null;
}

test('Grade 3 value-gradient batch has 12 independently derivable text-only questions', () => {
  assert.equal(batch.grade, 3);
  assert.equal(batch.skill.id, 'pc3.value.gradient');
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

  const directions = { up: 0, down: 0 };
  for (const question of batch.questions) {
    assert.equal(question.validationStatus, 'verified');
    assert.equal(question.qa.generatedAs, 'pending_validation');
    assert.equal(question.questionType, 'text_choice');
    assert.equal(question.skillId, 'pc3.value.gradient');
    assert.equal(question.categoryId, 'pc3.value');
    assert.equal(question.taxonomyPath, 'grade3/value/gradient');
    assert.ok(question.sourceRefs.includes('aft_grade3_scope'));
    assert.equal('presentation' in question, false);
    assert.equal('colorRef' in question, false);
    assert.equal('colorRefs' in question, false);
    assert.equal(question.choices.length, 4);
    assert.equal(new Set(question.choices).size, 4);

    const parsed = question.choices.map(parseSequence);
    parsed.forEach((sequence) => {
      assert.equal(sequence.length, 4, question.id);
      sequence.forEach((value) => assert.ok(Number.isFinite(value), question.id));
    });
    const independentlyValid = parsed
      .map((sequence, index) => ({ direction: direction(sequence), index }))
      .filter(({ direction }) => direction !== null);
    assert.equal(independentlyValid.length, 1, `exactly one monotonic lightness sequence required: ${question.id}`);
    assert.equal(question.correctIndex, independentlyValid[0].index, question.id);
    assert.equal(question.proposedAnswer, question.choices[question.correctIndex]);
    directions[independentlyValid[0].direction] += 1;
  }
  assert.deepEqual(directions, { up: 6, down: 6 });
});

test('Value-gradient batch balances answer positions and text feedback remains monitor-independent', () => {
  const counts = [0, 0, 0, 0];
  for (const question of batch.questions) {
    counts[question.correctIndex] += 1;
    const feedback = getAnswerFeedbackModel(question, new Map());
    assert.equal(feedback.kind, 'text');
    assert.equal(feedback.title, `正解：${question.choices[question.correctIndex]}`);
    assert.equal(feedback.name, question.choices[question.correctIndex]);
    assert.equal(feedback.colorRef, null);
    assert.equal(feedback.showSwatch, false);
    assert.equal(feedback.explanation, question.explanation);
  }
  assert.deepEqual(counts, [3, 3, 3, 3]);
});
