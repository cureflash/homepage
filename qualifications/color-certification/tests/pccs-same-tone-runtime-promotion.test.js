import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const runtime = JSON.parse(await readFile(new URL('../data/grade3-runtime.json', import.meta.url), 'utf8'));
const authoring = JSON.parse(await readFile(new URL('../data/grade3-authoring-same-tone-0001-0012.json', import.meta.url), 'utf8'));
const structure = JSON.parse(await readFile(new URL('../data/grade3-pccs-structure.json', import.meta.url), 'utf8'));

const toneCodes = new Set(structure.tones.map((tone) => tone.notation));
const parseNotation = (notation) => {
  const match = notation.match(/^([a-z]+)(\d{1,2})$/i);
  assert.ok(match, 'invalid PCCS notation: ' + notation);
  return { tone: match[1], hue: Number(match[2]) };
};

test('PCCS same-tone runtime promotion preserves all 12 verified authoring records exactly', () => {
  const promoted = runtime.questions.filter((question) => question.skillId === authoring.skill.id);
  assert.equal(promoted.length, 12);
  assert.deepEqual(promoted, authoring.questions);
  assert.ok(runtime.skills.some((skill) => skill.id === authoring.skill.id));
  assert.equal(runtime.questions.length, 151);
  assert.equal(runtime.questions.filter((question) => question.validationStatus === 'verified').length, 151);
  assert.equal(runtime.questions.filter((question) => question.validationStatus === 'pending_validation').length, 0);
});

test('promoted same-tone answers independently resolve from PCCS notation', () => {
  const promoted = runtime.questions.filter((question) => question.skillId === authoring.skill.id);
  const distribution = [0, 0, 0, 0];
  const coveredTones = new Set();

  for (const question of promoted) {
    const anchorMatch = question.prompt.match(/「([^」]+)」/);
    assert.ok(anchorMatch, 'missing PCCS notation in prompt: ' + question.id);
    const anchor = parseNotation(anchorMatch[1]);
    assert.ok(toneCodes.has(anchor.tone), 'unknown source tone: ' + anchor.tone);

    const parsedChoices = question.choices.map(parseNotation);
    const matching = parsedChoices
      .map((choice, index) => ({ choice, index }))
      .filter(({ choice }) => choice.tone === anchor.tone);

    assert.equal(matching.length, 1, question.id + ' must have exactly one same-tone choice');
    assert.equal(matching[0].index, question.correctIndex, question.id);
    assert.notEqual(matching[0].choice.hue, anchor.hue, question.id + ' should vary hue number');
    assert.equal(question.validationStatus, 'verified');
    assert.equal(question.questionType, 'text_choice');
    assert.equal(question.choices.length, 4);
    assert.equal(new Set(question.choices).size, 4);

    coveredTones.add(anchor.tone);
    distribution[question.correctIndex] += 1;
  }

  assert.deepEqual(coveredTones, toneCodes);
  assert.deepEqual(distribution, [3, 3, 3, 3]);
});
