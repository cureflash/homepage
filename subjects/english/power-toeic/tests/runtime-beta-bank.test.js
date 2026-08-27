import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const bankUrl = new URL('../js/data/runtime/beta-bank.json', import.meta.url);

async function loadBank() {
  return JSON.parse(await readFile(bankUrl, 'utf8'));
}

test('public beta runtime bank contains only QA-verified unique questions', async () => {
  const bank = await loadBank();
  assert.equal(bank.format, 'power-toeic-beta-runtime-bank-v1');
  assert.equal(bank.productionApproved, false);
  assert.ok(bank.questions.length >= 1000, `expected at least 1000 verified beta questions, got ${bank.questions.length}`);
  assert.equal(bank.questions.length, bank.source.runtimeQuestionCount);
  assert.ok(bank.skills.length > 0);

  const ids = bank.questions.map((question) => question.id);
  assert.equal(new Set(ids).size, ids.length, 'runtime question IDs must be unique');
  assert.ok(bank.questions.every((question) => question.validationStatus === 'verified'));
  assert.ok(bank.questions.every((question) => question.betaCandidate === true));
  assert.ok(bank.questions.every((question) => Array.isArray(question.choices) && question.choices.length === 4));
  assert.ok(bank.questions.every((question) => Number.isInteger(question.correctIndex) && question.correctIndex >= 0 && question.correctIndex < 4));

  const skillIds = new Set(bank.skills.map((skill) => skill.id));
  assert.ok(bank.questions.every((question) => skillIds.has(question.skillId)));
});

test('quarantined duplicate candidates never enter the beta runtime question list', async () => {
  const bank = await loadBank();
  const runtimeIds = new Set(bank.questions.map((question) => question.id));
  for (const entry of bank.quarantine ?? []) {
    assert.equal(runtimeIds.has(entry.id), false, `quarantined ${entry.id} must not ship in beta runtime bank`);
  }
  assert.equal(bank.betaGlobalSimilarityGate?.passed, true);
  assert.match(bank.betaGlobalSimilarityGate?.note ?? '', /does not replace the final semantic production-bank gate/i);
});
