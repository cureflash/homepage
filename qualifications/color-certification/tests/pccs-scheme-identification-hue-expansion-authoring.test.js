import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const batch = JSON.parse(await readFile(new URL('../data/grade3-authoring-scheme-identification-0013-0024.json', import.meta.url), 'utf8'));
const labels = new Set(['隣接色相配色', '類似色相配色', '中差色相配色', '対照色相配色']);

function classify(a, b) {
  const raw = Math.abs(a - b);
  const diff = Math.min(raw, 24 - raw);
  if (diff === 1) return '隣接色相配色';
  if (diff >= 2 && diff <= 3) return '類似色相配色';
  if (diff >= 4 && diff <= 7) return '中差色相配色';
  if (diff >= 8 && diff <= 10) return '対照色相配色';
  return null;
}

test('Grade 3 scheme-identification named-hue expansion re-derives every answer independently', () => {
  assert.equal(batch.grade, 3);
  assert.equal(batch.skill.id, 'pc3.scheme.identification');
  assert.equal(batch.questions.length, 12);
  assert.equal(new Set(batch.questions.map((question) => question.id)).size, 12);
  assert.deepEqual(batch.qaSummary, {
    generated: 12,
    checked: 12,
    verified: 12,
    needsRevision: 0,
    rejected: 0,
    pending: 0,
    correctIndexDistribution: { A: 3, B: 3, C: 3, D: 3 }
  });

  const coverage = new Map([...labels].map((label) => [label, 0]));
  const positions = [0, 0, 0, 0];
  for (const question of batch.questions) {
    assert.equal(question.validationStatus, 'verified');
    assert.equal(question.qa.generatedAs, 'pending_validation');
    assert.equal(question.skillId, 'pc3.scheme.identification');
    assert.equal(question.categoryId, 'pc3.scheme');
    assert.equal(question.taxonomyPath, 'grade3/scheme/identification');
    assert.equal(question.questionType, 'text_choice');
    assert.equal(question.choices.length, 4);
    assert.deepEqual(new Set(question.choices), labels);
    assert.equal('presentation' in question, false);
    assert.equal('colorRef' in question, false);
    assert.equal('colorRefs' in question, false);

    const match = question.prompt.match(/色相番号(\d{1,2})と(\d{1,2})/);
    assert.ok(match, `missing hue positions: ${question.id}`);
    const expected = classify(Number(match[1]), Number(match[2]));
    assert.ok(expected, `question must resolve within the approved non-complementary named hue classes: ${question.id}`);
    assert.equal(question.proposedAnswer, expected, question.id);
    assert.equal(question.correctIndex, question.choices.indexOf(expected), question.id);
    coverage.set(expected, coverage.get(expected) + 1);
    positions[question.correctIndex] += 1;
  }

  assert.deepEqual(Object.fromEntries(coverage), {
    '隣接色相配色': 3,
    '類似色相配色': 3,
    '中差色相配色': 3,
    '対照色相配色': 3
  });
  assert.deepEqual(positions, [3, 3, 3, 3]);
});

test('Named-hue scheme expansion stays text-only and monitor-independent', () => {
  for (const question of batch.questions) {
    const feedback = getAnswerFeedbackModel(question, new Map());
    assert.equal(feedback.kind, 'text');
    assert.equal(feedback.title, `正解：${question.choices[question.correctIndex]}`);
    assert.equal(feedback.name, question.choices[question.correctIndex]);
    assert.equal(feedback.colorRef, null);
    assert.equal(feedback.showSwatch, false);
    assert.equal(feedback.explanation, question.explanation);
  }
});
