import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const master = JSON.parse(fs.readFileSync(path.resolve(here, '../data/grade3-pccs-structure.json'), 'utf8'));
const batch = JSON.parse(fs.readFileSync(path.resolve(here, '../data/grade3-authoring-same-tone-0001-0012.json'), 'utf8'));

const hueById = new Map(master.hues.map((hue) => [hue.id, hue]));
const toneByNotation = new Map(master.tones.map((tone) => [tone.notation, tone]));
const toneCodes = [...toneByNotation.keys()].sort((a, b) => b.length - a.length);

function parsePccsNotation(value) {
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

test('Grade 3 same-tone authoring batch covers all 12 source-confirmed chromatic tones exactly once', () => {
  assert.equal(batch.grade, 3);
  assert.equal(batch.skill.id, 'pc3.relation.same_tone');
  assert.equal(batch.questions.length, 12);
  assert.equal(new Set(batch.questions.map((q) => q.id)).size, 12);

  const coveredTones = new Set();
  for (const q of batch.questions) {
    assert.equal(q.validationStatus, 'verified');
    assert.equal(q.qa.generatedAs, 'pending_validation');
    assert.equal(q.questionType, 'text_choice');
    assert.equal(q.taxonomyPath, 'grade3/relation/same_tone');
    assert.equal(q.skillId, 'pc3.relation.same_tone');
    assert.equal(q.choices.length, 4);
    assert.equal(new Set(q.choices).size, 4);
    assert.ok(q.correctIndex >= 0 && q.correctIndex < 4);
    assert.equal(q.proposedAnswer, q.choices[q.correctIndex]);
    assert.equal(q.colorRefs.length, 2);
    assert.ok(q.sourceRefs.includes('aft_happy_color_life'));
    assert.ok(q.sourceRefs.includes('aft_grade3_scope'));

    const anchor = parsePccsNotation(promptNotation(q.prompt));
    const options = q.choices.map(parsePccsNotation);
    const independentlyCorrect = options
      .map((option, index) => ({ option, index }))
      .filter(({ option }) => option.toneCode === anchor.toneCode);

    assert.equal(independentlyCorrect.length, 1, `same-tone answer must be unique for ${q.id}`);
    assert.equal(q.correctIndex, independentlyCorrect[0].index);
    assert.equal(parsePccsNotation(q.proposedAnswer).toneCode, anchor.toneCode);
    assert.ok(toneByNotation.has(anchor.toneCode));

    const [leftRef, rightRef] = q.colorRefs;
    const leftHue = hueById.get(leftRef);
    const rightHue = hueById.get(rightRef);
    assert.ok(leftHue, `unknown anchor hue ref: ${leftRef}`);
    assert.ok(rightHue, `unknown answer hue ref: ${rightRef}`);
    assert.equal(leftHue.position, anchor.huePosition);
    assert.equal(rightHue.position, parsePccsNotation(q.proposedAnswer).huePosition);
    assert.notEqual(leftHue.position, rightHue.position);

    coveredTones.add(anchor.toneCode);
  }

  assert.deepEqual([...coveredTones].sort(), [...toneByNotation.keys()].sort());
});

test('Same-tone batch balances answer positions and has no monitor-color dependency', () => {
  const counts = [0, 0, 0, 0];
  for (const q of batch.questions) {
    counts[q.correctIndex] += 1;
    assert.equal('presentation' in q, false);
  }
  assert.deepEqual(counts, [3, 3, 3, 3]);
});

test('Same-tone text questions produce feedback without display-color lookup', () => {
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
