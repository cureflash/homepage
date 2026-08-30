import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const colors = JSON.parse(await readFile(new URL('../data/grade3-colors.json', import.meta.url), 'utf8'));
const runtime = JSON.parse(await readFile(new URL('../data/grade3-runtime.json', import.meta.url), 'utf8'));
const checkpoint = JSON.parse(await readFile(new URL('../data/grade3-authoring-color-to-name-0057-0064.json', import.meta.url), 'utf8'));
const previousFiles = [
  'grade3-authoring-color-to-name-0017-0024.json',
  'grade3-authoring-color-to-name-0025-0032.json',
  'grade3-authoring-color-to-name-0033-0040.json',
  'grade3-authoring-color-to-name-0041-0048.json',
  'grade3-authoring-color-to-name-0049-0056.json'
];
const previous = await Promise.all(previousFiles.map(async (file) => JSON.parse(await readFile(new URL(`../data/${file}`, import.meta.url), 'utf8'))));

const colorById = new Map(colors.colors.map((color) => [color.id, color]));
const colorByName = new Map(colors.colors.map((color) => [color.name, color]));

test('checkpoint 0057-0064 is individually verified and schema-consistent', () => {
  assert.deepEqual(checkpoint.qaSummary, {
    generated: 8,
    checked: 8,
    verified: 8,
    needsRevision: 0,
    rejected: 0,
    pending: 0,
    correctIndexDistribution: { A: 2, B: 2, C: 2, D: 2 }
  });
  assert.equal(checkpoint.questions.length, 8);
  assert.equal(checkpoint.questions[0].id, 'pc3-conventional-color-to-name-0057');
  assert.equal(checkpoint.questions.at(-1).id, 'pc3-conventional-color-to-name-0064');

  for (const question of checkpoint.questions) {
    assert.equal(question.validationStatus, 'verified');
    assert.equal(question.grade, 3);
    assert.equal(question.skillId, 'pc3.conventional.color_to_name');
    assert.equal(question.choices.length, 4);
    assert.equal(new Set(question.choices).size, 4);
    question.choices.forEach((choice) => assert.ok(colorByName.has(choice), `Unknown choice ${choice}`));
    const target = colorById.get(question.colorRef);
    assert.ok(target, `Unknown target ${question.colorRef}`);
    assert.equal(question.presentation.promptColorRef, question.colorRef);
    assert.equal(question.choices[question.correctIndex], target.name);
    assert.equal(question.proposedAnswer, target.name);
  }
});

test('0057-0064 adds eight new color-to-name targets without reusing prior coverage', () => {
  const priorTargets = [
    ...runtime.questions.filter((q) => q.skillId === 'pc3.conventional.color_to_name').map((q) => q.colorRef),
    ...previous.flatMap((bank) => bank.questions.map((q) => q.colorRef))
  ];
  const newTargets = checkpoint.questions.map((q) => q.colorRef);
  assert.equal(new Set(newTargets).size, 8);
  newTargets.forEach((ref) => assert.ok(!priorTargets.includes(ref), `Target already covered: ${ref}`));
  assert.equal(new Set([...priorTargets, ...newTargets]).size, 56);
});

test('monitor-ambiguous sky blue is not emitted as a color-to-name question', () => {
  const skyBlue = colorById.get('c3-conventional-052');
  const sora = colorById.get('c3-conventional-017');
  assert.equal(skyBlue.displayHex, sora.displayHex);
  assert.ok(!checkpoint.questions.some((q) => q.colorRef === skyBlue.id));
});
