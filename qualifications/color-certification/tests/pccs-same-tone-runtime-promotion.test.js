import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const runtime = JSON.parse(await readFile(new URL('../data/grade3-runtime.json', import.meta.url), 'utf8'));
const authoring = JSON.parse(await readFile(new URL('../data/grade3-authoring-same-tone-0001-0012.json', import.meta.url), 'utf8'));
const structure = JSON.parse(await readFile(new URL('../data/grade3-pccs-structure.json', import.meta.url), 'utf8'));
const toneCodes = structure.tones.map((tone) => tone.notation).sort((a, b) => b.length - a.length);

function parseNotation(value) {
  const toneCode = toneCodes.find((code) => value.startsWith(code));
  assert.ok(toneCode, `unknown tone code: ${value}`);
  const hue = Number(value.slice(toneCode.length));
  assert.ok(Number.isInteger(hue) && hue >= 1 && hue <= 24, `invalid hue number: ${value}`);
  return { toneCode, hue };
}

test('PCCS same-tone runtime promotion preserves all 12 verified authoring records exactly', () => {
  assert.equal(runtime.questions.length, 151);
  assert.equal(runtime.questions.filter((q) => q.validationStatus === 'verified').length, 151);
  const promoted = runtime.questions.filter((question) => question.skillId === authoring.skill.id);
  assert.equal(promoted.length, 12);
  assert.deepEqual(promoted, authoring.questions);
  assert.ok(runtime.skills.some((skill) => skill.id === authoring.skill.id));
});

test('promoted same-tone answers independently resolve to the anchor tone', () => {
  const promoted = runtime.questions.filter((question) => question.skillId === authoring.skill.id);
  const distribution = [0, 0, 0, 0];
  const covered = new Set();
  for (const question of promoted) {
    const match = question.prompt.match(/「([a-z]+\d{1,2})」/);
    assert.ok(match, `missing notation: ${question.id}`);
    const anchor = parseNotation(match[1]);
    const matches = question.choices
      .map((choice, index) => ({ parsed: parseNotation(choice), index }))
      .filter(({ parsed }) => parsed.toneCode === anchor.toneCode);
    assert.equal(matches.length, 1, `same-tone answer must be unique: ${question.id}`);
    assert.equal(question.correctIndex, matches[0].index);
    assert.notEqual(matches[0].parsed.hue, anchor.hue);
    covered.add(anchor.toneCode);
    distribution[question.correctIndex] += 1;
  }
  assert.deepEqual([...covered].sort(), structure.tones.map((tone) => tone.notation).sort());
  assert.deepEqual(distribution, [3, 3, 3, 3]);
});
