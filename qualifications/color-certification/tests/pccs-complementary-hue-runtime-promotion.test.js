import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const runtime = JSON.parse(await readFile(new URL('../data/grade3-runtime.json', import.meta.url), 'utf8'));
const authoring = JSON.parse(await readFile(new URL('../data/grade3-authoring-complementary-hue-number-0001-0012.json', import.meta.url), 'utf8'));

test('PCCS complementary-hue runtime promotion preserves all 12 verified authoring records exactly', () => {
  const promoted = runtime.questions.filter((question) => question.skillId === authoring.skill.id);
  assert.equal(promoted.length, 12);
  assert.deepEqual(promoted, authoring.questions);
  assert.ok(runtime.skills.some((skill) => skill.id === authoring.skill.id));
});

test('promoted complementary-hue answers independently recompute from the 24-position hue circle', () => {
  const promoted = runtime.questions.filter((question) => question.skillId === authoring.skill.id);
  const distribution = [0, 0, 0, 0];
  for (const question of promoted) {
    const match = question.prompt.match(/色相番号(\d+)/);
    assert.ok(match, 'missing hue number in prompt: ' + question.id);
    const sourceHue = Number(match[1]);
    const expected = ((sourceHue + 11) % 24) + 1;
    assert.equal(Number(question.choices[question.correctIndex]), expected, question.id);
    assert.equal(question.validationStatus, 'verified');
    assert.equal(question.questionType, 'text_choice');
    assert.equal(question.choices.length, 4);
    assert.equal(new Set(question.choices).size, 4);
    distribution[question.correctIndex] += 1;
  }
  assert.deepEqual(distribution, [3, 3, 3, 3]);
});
