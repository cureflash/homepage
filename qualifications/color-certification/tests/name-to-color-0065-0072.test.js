import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const colors = JSON.parse(await readFile(new URL('../data/grade3-colors.json', import.meta.url), 'utf8'));
const runtime = JSON.parse(await readFile(new URL('../data/grade3-runtime.json', import.meta.url), 'utf8'));
const previous1 = JSON.parse(await readFile(new URL('../data/grade3-authoring-name-to-color-0017-0024.json', import.meta.url), 'utf8'));
const previous2 = JSON.parse(await readFile(new URL('../data/grade3-authoring-name-to-color-0025-0032.json', import.meta.url), 'utf8'));
const previous3 = JSON.parse(await readFile(new URL('../data/grade3-authoring-name-to-color-0033-0040.json', import.meta.url), 'utf8'));
const previous4 = JSON.parse(await readFile(new URL('../data/grade3-authoring-name-to-color-0041-0048.json', import.meta.url), 'utf8'));
const previous5 = JSON.parse(await readFile(new URL('../data/grade3-authoring-name-to-color-0049-0056.json', import.meta.url), 'utf8'));
const previous6 = JSON.parse(await readFile(new URL('../data/grade3-authoring-name-to-color-0057-0064.json', import.meta.url), 'utf8'));
const authoring = JSON.parse(await readFile(new URL('../data/grade3-authoring-name-to-color-0065-0072.json', import.meta.url), 'utf8'));

const colorById = new Map(colors.colors.map((color) => [color.id, color]));

test('name-to-color checkpoint 0065-0072 is independently verified and internally consistent', () => {
  assert.deepEqual(authoring.qaSummary, {
    generated: 8, checked: 8, verified: 8, needsRevision: 0, rejected: 0, pending: 0,
    correctIndexDistribution: { A: 2, B: 2, C: 2, D: 2 }
  });
  assert.equal(authoring.questions.length, 8);
  assert.equal(authoring.questions[0].id, 'pc3-conventional-name-to-color-0065');
  assert.equal(authoring.questions.at(-1).id, 'pc3-conventional-name-to-color-0072');
  assert.equal(new Set(authoring.questions.map((q) => q.id)).size, 8);
  assert.deepEqual(authoring.questions.map((q) => q.colorRef), [
    'c3-conventional-056','c3-conventional-057','c3-conventional-058','c3-conventional-059',
    'c3-conventional-060','c3-conventional-061','c3-conventional-062','c3-conventional-064'
  ]);
  for (const question of authoring.questions) {
    assert.equal(question.skillId, 'pc3.conventional.name_to_color');
    assert.equal(question.validationStatus, 'verified');
    assert.equal(question.presentation.kind, 'choice_colors');
    assert.deepEqual(question.choices, ['A','B','C','D']);
    assert.deepEqual(question.colorRefs, question.presentation.choiceColorRefs);
    assert.equal(new Set(question.presentation.choiceColorRefs).size, 4);
    question.presentation.choiceColorRefs.forEach((ref) => assert.ok(colorById.has(ref), `Unknown color ref: ${ref}`));
    assert.equal(question.presentation.choiceColorRefs[question.correctIndex], question.colorRef);
    assert.equal(question.proposedAnswer, colorById.get(question.colorRef).name);
    const displayHexes = question.presentation.choiceColorRefs.map((ref) => colorById.get(ref).displayHex);
    assert.equal(new Set(displayHexes).size, 4, `Monitor-ambiguous duplicate display colors in ${question.id}`);
  }
});

test('name-to-color staged coverage reaches all 64 master refs without target reuse', () => {
  const runtimeTargets = runtime.questions.filter((q) => q.skillId === 'pc3.conventional.name_to_color' && Number(q.id.slice(-4)) <= 16).map((q) => q.colorRef);
  const stagedTargets = [...previous1.questions,...previous2.questions,...previous3.questions,...previous4.questions,...previous5.questions,...previous6.questions,...authoring.questions].map((q) => q.colorRef);
  const allTargets = [...runtimeTargets, ...stagedTargets];
  assert.equal(runtimeTargets.length, 8);
  assert.equal(stagedTargets.length, 56);
  assert.equal(allTargets.length, 64);
  assert.equal(new Set(allTargets).size, 64);
  assert.deepEqual(new Set(allTargets), new Set(colors.colors.map((color) => color.id)));
});
