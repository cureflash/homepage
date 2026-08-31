import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const colors = JSON.parse(await readFile(new URL('../data/grade3-colors.json', import.meta.url), 'utf8'));
const runtime = JSON.parse(await readFile(new URL('../data/grade3-runtime.json', import.meta.url), 'utf8'));
const authoring = JSON.parse(await readFile(new URL('../data/grade3-authoring-name-to-color-0017-0024.json', import.meta.url), 'utf8'));

const colorById = new Map(colors.colors.map((color) => [color.id, color]));

test('name-to-color checkpoint 0017-0024 is independently verified and internally consistent', () => {
  assert.deepEqual(authoring.qaSummary, {
    generated: 8,
    checked: 8,
    verified: 8,
    needsRevision: 0,
    rejected: 0,
    pending: 0,
    correctIndexDistribution: { A: 2, B: 2, C: 2, D: 2 }
  });
  assert.equal(authoring.questions.length, 8);
  assert.equal(authoring.questions[0].id, 'pc3-conventional-name-to-color-0017');
  assert.equal(authoring.questions.at(-1).id, 'pc3-conventional-name-to-color-0024');
  assert.equal(new Set(authoring.questions.map((question) => question.id)).size, 8);

  for (const question of authoring.questions) {
    assert.equal(question.skillId, 'pc3.conventional.name_to_color');
    assert.equal(question.validationStatus, 'verified');
    assert.equal(question.presentation.kind, 'choice_colors');
    assert.deepEqual(question.choices, ['A', 'B', 'C', 'D']);
    assert.equal(question.presentation.choiceColorRefs.length, 4);
    assert.equal(new Set(question.presentation.choiceColorRefs).size, 4);
    question.presentation.choiceColorRefs.forEach((ref) => assert.ok(colorById.has(ref), `Unknown color ref: ${ref}`));
    assert.equal(question.presentation.choiceColorRefs[question.correctIndex], question.colorRef);
    assert.equal(question.proposedAnswer, colorById.get(question.colorRef).name);

    const displayHexes = question.presentation.choiceColorRefs.map((ref) => colorById.get(ref).displayHex);
    assert.equal(new Set(displayHexes).size, 4, `Monitor-ambiguous duplicate display colors in ${question.id}`);
  }
});

test('name-to-color coverage adds eight new master refs without reusing runtime targets', () => {
  const runtimeTargets = runtime.questions
    .filter((question) => question.skillId === 'pc3.conventional.name_to_color' && Number(question.id.slice(-4)) <= 16)
    .map((question) => question.colorRef);
  const stagedTargets = authoring.questions.map((question) => question.colorRef);
  const allTargets = [...runtimeTargets, ...stagedTargets];
  assert.equal(runtimeTargets.length, 8);
  assert.equal(stagedTargets.length, 8);
  assert.equal(new Set(allTargets).size, 16);
});
