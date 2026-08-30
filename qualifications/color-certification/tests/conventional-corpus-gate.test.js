import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import test from 'node:test';

const dataDir = new URL('../data/', import.meta.url);
const colors = JSON.parse(await readFile(new URL('grade3-colors.json', dataDir), 'utf8'));
const runtime = JSON.parse(await readFile(new URL('grade3-runtime.json', dataDir), 'utf8'));
const authoringFiles = (await readdir(dataDir))
  .filter((name) => /^grade3-authoring-(color-to-name|name-to-color)-\d{4}-\d{4}\.json$/.test(name))
  .sort();
const authoringBanks = await Promise.all(
  authoringFiles.map(async (name) => ({
    name,
    bank: JSON.parse(await readFile(new URL(name, dataDir), 'utf8'))
  }))
);

const colorById = new Map(colors.colors.map((color) => [color.id, color]));
const colorByName = new Map(colors.colors.map((color) => [color.name, color]));
const runtimeQuestions = runtime.questions;
const authoringQuestions = authoringBanks.flatMap(({ bank }) => bank.questions);
const corpus = [...runtimeQuestions, ...authoringQuestions];

function distribution(questions) {
  return questions.reduce((counts, question) => {
    counts[question.correctIndex] += 1;
    return counts;
  }, [0, 0, 0, 0]);
}

function assertBalanced(questions, label) {
  const counts = distribution(questions);
  assert.ok(Math.max(...counts) - Math.min(...counts) <= 1, `${label} answer positions are imbalanced: ${counts.join('/')}`);
}

function questionFingerprint(question) {
  return JSON.stringify({
    skillId: question.skillId,
    colorRef: question.colorRef,
    choices: question.choices,
    presentation: question.presentation
  });
}

test('Grade 3 conventional corpus contains the complete staged set and no pending records', () => {
  assert.equal(authoringFiles.length, 14, `Unexpected authoring file count: ${authoringFiles.join(', ')}`);
  assert.equal(runtimeQuestions.length, 16);
  assert.equal(authoringQuestions.length, 111);
  assert.equal(corpus.length, 127);
  assert.equal(corpus.filter((question) => question.validationStatus === 'verified').length, 127);
  assert.equal(corpus.filter((question) => question.validationStatus === 'pending_validation').length, 0);
});

test('all conventional questions satisfy shared schema and canonical reference integrity', () => {
  const required = ['id', 'version', 'skillId', 'categoryId', 'sentence', 'choices', 'correctIndex', 'explanation', 'validationStatus', 'colorRef', 'presentation', 'sourceRefs'];
  for (const question of corpus) {
    for (const key of required) assert.ok(Object.hasOwn(question, key), `${question.id} missing ${key}`);
    assert.equal(question.categoryId, 'pc3.conventional');
    assert.ok(['pc3.conventional.color_to_name', 'pc3.conventional.name_to_color'].includes(question.skillId));
    assert.equal(question.validationStatus, 'verified');
    assert.equal(question.choices.length, 4);
    assert.equal(new Set(question.choices).size, 4);
    assert.ok(Number.isInteger(question.correctIndex) && question.correctIndex >= 0 && question.correctIndex < 4);
    assert.ok(colorById.has(question.colorRef), `${question.id} has unknown target ${question.colorRef}`);
    assert.ok(Array.isArray(question.sourceRefs) && question.sourceRefs.length > 0, `${question.id} lacks sourceRefs`);
    assert.ok(question.sourceRefs.includes('aft-color-list-2022'), `${question.id} lacks the canonical conventional-color source ref`);
  }
  for (const question of authoringQuestions) {
    assert.equal(typeof question.proposedAnswer, 'string', `${question.id} lacks proposedAnswer`);
    assert.ok(question.proposedAnswer.length > 0, `${question.id} has empty proposedAnswer`);
  }
});

test('color-to-name questions independently resolve to the canonical target and remain monitor-discriminable', () => {
  const questions = corpus.filter((question) => question.skillId === 'pc3.conventional.color_to_name');
  assert.equal(questions.length, 63);
  for (const question of questions) {
    const target = colorById.get(question.colorRef);
    assert.equal(question.presentation.kind, 'prompt_color');
    assert.equal(question.presentation.promptColorRef, question.colorRef);
    assert.equal(question.choices[question.correctIndex], target.name);
    const choiceColors = question.choices.map((name) => colorByName.get(name));
    choiceColors.forEach((color) => assert.ok(color, `${question.id} has unknown color-name choice`));
    assert.equal(new Set(choiceColors.map((color) => color.displayHex)).size, 4, `${question.id} contains display-indistinguishable choices`);
    if (Object.hasOwn(question, 'proposedAnswer')) assert.equal(question.proposedAnswer, target.name);
  }
  const targetRefs = questions.map((question) => question.colorRef);
  assert.equal(new Set(targetRefs).size, 63);
  const missing = colors.colors.map((color) => color.id).filter((id) => !new Set(targetRefs).has(id));
  assert.deepEqual(missing, ['c3-conventional-052']);
  assertBalanced(questions, 'color_to_name');
});

test('name-to-color questions independently resolve all 64 canonical targets with discriminable choice swatches', () => {
  const questions = corpus.filter((question) => question.skillId === 'pc3.conventional.name_to_color');
  assert.equal(questions.length, 64);
  for (const question of questions) {
    const target = colorById.get(question.colorRef);
    assert.equal(question.presentation.kind, 'choice_colors');
    assert.equal(question.presentation.choiceColorRefs.length, 4);
    assert.equal(new Set(question.presentation.choiceColorRefs).size, 4);
    const choiceColors = question.presentation.choiceColorRefs.map((ref) => colorById.get(ref));
    choiceColors.forEach((color) => assert.ok(color, `${question.id} has unknown color choice ref`));
    assert.equal(new Set(choiceColors.map((color) => color.displayHex)).size, 4, `${question.id} contains display-indistinguishable swatches`);
    assert.equal(question.presentation.choiceColorRefs[question.correctIndex], question.colorRef);
    assert.match(question.sentence, new RegExp(`「${target.name}」`));
    if (Object.hasOwn(question, 'proposedAnswer')) assert.equal(question.proposedAnswer, target.name);
  }
  const targetRefs = questions.map((question) => question.colorRef);
  assert.equal(new Set(targetRefs).size, 64);
  assert.deepEqual(new Set(targetRefs), new Set(colors.colors.map((color) => color.id)));
  assertBalanced(questions, 'name_to_color');
});

test('the only duplicate master display value is the documented 空色/スカイブルー exception', () => {
  const refsByHex = new Map();
  for (const color of colors.colors) {
    const refs = refsByHex.get(color.displayHex) ?? [];
    refs.push(color.id);
    refsByHex.set(color.displayHex, refs);
  }
  const duplicateGroups = [...refsByHex.values()].filter((refs) => refs.length > 1);
  assert.deepEqual(duplicateGroups, [['c3-conventional-017', 'c3-conventional-052']]);
});

test('cross-bank IDs, targets, and full question fingerprints have no accidental duplicates', () => {
  assert.equal(new Set(corpus.map((question) => question.id)).size, corpus.length);
  assert.equal(new Set(corpus.map(questionFingerprint)).size, corpus.length);
  for (const skillId of ['pc3.conventional.color_to_name', 'pc3.conventional.name_to_color']) {
    const questions = corpus.filter((question) => question.skillId === skillId);
    const targetKeys = questions.map((question) => `${skillId}:${question.colorRef}`);
    assert.equal(new Set(targetKeys).size, targetKeys.length, `${skillId} reuses a target master color`);
  }
});
