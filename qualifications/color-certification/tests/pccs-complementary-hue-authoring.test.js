import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const master = JSON.parse(fs.readFileSync(path.resolve(here, '../data/grade3-pccs-structure.json'), 'utf8'));
const batch = JSON.parse(fs.readFileSync(path.resolve(here, '../data/grade3-authoring-complementary-hue-number-0001-0012.json'), 'utf8'));

const hueById = new Map(master.hues.map((hue) => [hue.id, hue]));

function complement(position) {
  return ((position + 11) % 24) + 1;
}

test('Grade 3 complementary-hue authoring batch covers each unique opposite pair exactly once', () => {
  assert.equal(batch.grade, 3);
  assert.equal(batch.skill.id, 'pc3.pccs.complementary_hue_number');
  assert.equal(batch.questions.length, 12);
  assert.equal(new Set(batch.questions.map((q) => q.id)).size, 12);

  const pairs = new Set();
  for (const q of batch.questions) {
    assert.equal(q.validationStatus, 'verified');
    assert.equal(q.qa.generatedAs, 'pending_validation');
    assert.equal(q.questionType, 'text_choice');
    assert.equal(q.taxonomyPath, 'grade3/pccs/complementary_hue_number');
    assert.equal(q.choices.length, 4);
    assert.equal(new Set(q.choices).size, 4);
    assert.ok(q.correctIndex >= 0 && q.correctIndex < 4);
    assert.equal(q.proposedAnswer, q.choices[q.correctIndex]);
    assert.equal(q.colorRefs.length, 2);

    const [leftRef, rightRef] = q.colorRefs;
    const left = hueById.get(leftRef);
    const right = hueById.get(rightRef);
    assert.ok(left, `unknown left hue ref: ${leftRef}`);
    assert.ok(right, `unknown right hue ref: ${rightRef}`);
    assert.equal(right.position, complement(left.position));
    assert.equal(Number(q.proposedAnswer), right.position);
    assert.ok(q.sourceRefs.includes('jcri_2022_report'));

    const key = [left.position, right.position].sort((a, b) => a - b).join('-');
    assert.ok(!pairs.has(key), `duplicate complementary pair: ${key}`);
    pairs.add(key);
  }
  assert.equal(pairs.size, 12);
});

test('Complementary-hue batch has balanced answer positions and no monitor-color dependency', () => {
  const counts = [0, 0, 0, 0];
  for (const q of batch.questions) {
    counts[q.correctIndex] += 1;
    assert.equal('presentation' in q, false);
  }
  assert.deepEqual(counts, [3, 3, 3, 3]);
});

test('Text-only PCCS questions produce answer feedback without a display-color dependency', () => {
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
