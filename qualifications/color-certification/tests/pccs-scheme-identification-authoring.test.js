import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const batch = JSON.parse(await readFile(new URL('../data/grade3-authoring-scheme-identification-0001-0012.json', import.meta.url), 'utf8'));
const labels = new Set(['同一トーン配色', '同一色相配色', '補色の色相関係', '明度のグラデーション']);

function parseNotation(value) {
  const match = value.match(/^([a-z]+)(\d{1,2})$/);
  assert.ok(match, `invalid PCCS notation: ${value}`);
  const hue = Number(match[2]);
  assert.ok(Number.isInteger(hue) && hue >= 1 && hue <= 24, `invalid hue position: ${value}`);
  return { tone: match[1], hue };
}

function classify(question) {
  if (question.prompt.includes('PCCS記号')) {
    const matches = [...question.prompt.matchAll(/「([a-z]+\d{1,2})」/g)].map((match) => parseNotation(match[1]));
    assert.equal(matches.length, 2, `expected two PCCS notations: ${question.id}`);
    const [a, b] = matches;
    if (a.tone === b.tone && a.hue !== b.hue) return '同一トーン配色';
    if (a.hue === b.hue && a.tone !== b.tone) return '同一色相配色';
    return null;
  }

  if (question.prompt.includes('PCCS24色相環')) {
    const match = question.prompt.match(/色相番号(\d{1,2})と(\d{1,2})/);
    assert.ok(match, `missing hue positions: ${question.id}`);
    const a = Number(match[1]);
    const b = Number(match[2]);
    const raw = Math.abs(a - b);
    return Math.min(raw, 24 - raw) === 12 ? '補色の色相関係' : null;
  }

  if (question.prompt.includes('明度レベル')) {
    const match = question.prompt.match(/「([0-9→]+)」/);
    assert.ok(match, `missing lightness sequence: ${question.id}`);
    const values = match[1].split('→').map(Number);
    assert.equal(values.length, 4, question.id);
    const diffs = values.slice(1).map((value, index) => value - values[index]);
    return (diffs.every((diff) => diff > 0) || diffs.every((diff) => diff < 0)) ? '明度のグラデーション' : null;
  }

  return null;
}

test('Grade 3 scheme-identification batch combines only already confirmed non-visual rules', () => {
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
    assert.equal(new Set(question.choices).size, 4);
    assert.deepEqual(new Set(question.choices), labels);
    assert.equal('presentation' in question, false);
    assert.equal('colorRef' in question, false);
    assert.equal('colorRefs' in question, false);

    const expected = classify(question);
    assert.ok(expected, `question must independently resolve to one confirmed rule: ${question.id}`);
    assert.equal(question.choices.filter((choice) => choice === expected).length, 1, question.id);
    assert.equal(question.correctIndex, question.choices.indexOf(expected), question.id);
    assert.equal(question.proposedAnswer, expected, question.id);
    coverage.set(expected, coverage.get(expected) + 1);
    positions[question.correctIndex] += 1;
  }

  assert.deepEqual(Object.fromEntries(coverage), {
    '同一トーン配色': 3,
    '同一色相配色': 3,
    '補色の色相関係': 3,
    '明度のグラデーション': 3
  });
  assert.deepEqual(positions, [3, 3, 3, 3]);
});

test('Scheme-identification answer feedback remains text-only and monitor-independent', () => {
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
