import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const master = JSON.parse(fs.readFileSync(path.resolve(here, '../data/grade3-pccs-structure.json'), 'utf8'));
const batch = JSON.parse(fs.readFileSync(path.resolve(here, '../data/grade3-authoring-same-hue-0001-0012.json'), 'utf8'));

const hueById = new Map(master.hues.map((hue) => [hue.id, hue]));
const toneCodes = master.tones.map((tone) => tone.notation).sort((a, b) => b.length - a.length);

function parseNotation(value) {
  const toneCode = toneCodes.find((code) => value.startsWith(code));
  assert.ok(toneCode, `unknown tone code in ${value}`);
  const hueText = value.slice(toneCode.length);
  assert.match(hueText, /^(?:[1-9]|1\d|2[0-4])$/);
  return { toneCode, huePosition: Number(hueText) };
}

function promptNotation(prompt) {
  const match = prompt.match(/「([a-z]+\d{1,2})」/);
  assert.ok(match, `missing PCCS notation in prompt: ${prompt}`);
  return match[1];
}

test('Grade 3 same-hue batch independently covers 12 anchor tones and 12 source-confirmed hue positions', () => {
  assert.equal(batch.grade, 3);
  assert.equal(batch.skill.id, 'pc3.relation.same_hue');
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

  const coveredTones = new Set();
  const coveredHues = new Set();
  for (const q of batch.questions) {
    assert.equal(q.validationStatus, 'verified');
    assert.equal(q.qa.generatedAs, 'pending_validation');
    assert.equal(q.questionType, 'text_choice');
    assert.equal(q.taxonomyPath, 'grade3/relation/same_hue');
    assert.equal(q.skillId, 'pc3.relation.same_hue');
    assert.equal(q.choices.length, 4);
    assert.equal(new Set(q.choices).size, 4);
    assert.equal(q.proposedAnswer, q.choices[q.correctIndex]);
    assert.ok(q.sourceRefs.includes('aft_happy_color_life'));
    assert.ok(q.sourceRefs.includes('aft_grade3_scope'));

    const anchor = parseNotation(promptNotation(q.prompt));
    const options = q.choices.map(parseNotation);
    const independentlyCorrect = options
      .map((option, index) => ({ option, index }))
      .filter(({ option }) => option.huePosition === anchor.huePosition);
    assert.equal(independentlyCorrect.length, 1, `same-hue answer must be unique for ${q.id}`);
    assert.equal(q.correctIndex, independentlyCorrect[0].index);
    assert.notEqual(independentlyCorrect[0].option.toneCode, anchor.toneCode, `answer must change tone for ${q.id}`);

    assert.equal(q.colorRefs.length, 1);
    const hue = hueById.get(q.colorRefs[0]);
    assert.ok(hue, `unknown hue ref: ${q.colorRefs[0]}`);
    assert.equal(hue.position, anchor.huePosition);
    coveredTones.add(anchor.toneCode);
    coveredHues.add(anchor.huePosition);
  }
  assert.deepEqual([...coveredTones].sort(), master.tones.map((tone) => tone.notation).sort());
  assert.equal(coveredHues.size, 12);
});

test('Same-hue batch balances answer positions and remains monitor-independent', () => {
  const counts = [0, 0, 0, 0];
  for (const q of batch.questions) {
    counts[q.correctIndex] += 1;
    assert.equal('presentation' in q, false);
  }
  assert.deepEqual(counts, [3, 3, 3, 3]);
});

test('Same-hue text questions produce feedback without display-color lookup', () => {
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
