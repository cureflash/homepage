import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const colors = JSON.parse(await readFile(new URL('../data/grade3-colors.json', import.meta.url), 'utf8'));
const runtime = JSON.parse(await readFile(new URL('../data/grade3-runtime.json', import.meta.url), 'utf8'));
const checkpointPaths = [
  '../data/grade3-authoring-color-to-name-0017-0024.json',
  '../data/grade3-authoring-color-to-name-0025-0032.json',
  '../data/grade3-authoring-color-to-name-0033-0040.json',
  '../data/grade3-authoring-color-to-name-0041-0048.json',
  '../data/grade3-authoring-color-to-name-0049-0056.json',
  '../data/grade3-authoring-color-to-name-0057-0064.json',
  '../data/grade3-authoring-color-to-name-0065-0071.json'
];
const checkpoints = await Promise.all(checkpointPaths.map(async (path) => JSON.parse(await readFile(new URL(path, import.meta.url), 'utf8'))));
const colorById = new Map(colors.colors.map((color) => [color.id, color]));
const colorByName = new Map(colors.colors.map((color) => [color.name, color]));

test('late color-to-name checkpoint is independently verified and internally consistent', () => {
  const checkpoint = checkpoints.at(-1);
  assert.deepEqual(checkpoint.qaSummary, {
    generated: 7,
    checked: 7,
    verified: 7,
    needsRevision: 0,
    rejected: 0,
    pending: 0,
    correctIndexDistribution: { A: 2, B: 2, C: 2, D: 1 }
  });
  assert.equal(checkpoint.questions.length, 7);
  assert.equal(checkpoint.questions[0].id, 'pc3-conventional-color-to-name-0065');
  assert.equal(checkpoint.questions.at(-1).id, 'pc3-conventional-color-to-name-0071');
  for (const question of checkpoint.questions) {
    assert.equal(question.validationStatus, 'verified');
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

test('color-to-name useful state-space coverage reaches 63 unique master refs with only c3-052 deferred', () => {
  const runtimeTargets = runtime.questions
    .filter((question) => question.skillId === 'pc3.conventional.color_to_name')
    .map((question) => question.colorRef);
  const authoringTargets = checkpoints.flatMap((checkpoint) => checkpoint.questions.map((question) => question.colorRef));
  const targets = [...runtimeTargets, ...authoringTargets];
  assert.equal(targets.length, 63);
  assert.equal(new Set(targets).size, 63);
  const missing = colors.colors.map((color) => color.id).filter((id) => !new Set(targets).has(id));
  assert.deepEqual(missing, ['c3-conventional-052']);
  assert.equal(colorById.get('c3-conventional-052').displayHex, colorById.get('c3-conventional-017').displayHex);
});
