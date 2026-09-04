import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { buildPilotRuntime, PILOT_EXPLANATIONS, PILOT_QUESTION_IDS, PILOT_SKILL_IDS } from '../js/data/pilot-question-set.js';

const betaBank = JSON.parse(await readFile(new URL('../js/data/runtime/beta-bank.json', import.meta.url), 'utf8'));

const expectedIds = [
  'p5_conn_because_vs_because_of_0001', 'p5_conn_because_vs_because_of_0002', 'p5_conn_because_vs_because_of_0003', 'p5_conn_because_vs_because_of_0004', 'p5_conn_because_vs_because_of_0005',
  'p5_conn_because_vs_because_of_0011', 'p5_conn_because_vs_because_of_0012', 'p5_conn_because_vs_because_of_0013', 'p5_conn_because_vs_because_of_0014', 'p5_conn_because_vs_because_of_0015',
  'p5_conn_despite_vs_although_0001', 'p5_conn_despite_vs_although_0002', 'p5_conn_despite_vs_although_0003', 'p5_conn_despite_vs_although_0004', 'p5_conn_despite_vs_although_0005',
  'p5_conn_despite_vs_although_0026', 'p5_conn_despite_vs_although_0027', 'p5_conn_despite_vs_although_0028', 'p5_conn_despite_vs_although_0029', 'p5_conn_despite_vs_although_0030',
  'p5_conn_during_vs_while_0001', 'p5_conn_during_vs_while_0002', 'p5_conn_during_vs_while_0003', 'p5_conn_during_vs_while_0004', 'p5_conn_during_vs_while_0005',
  'p5_conn_during_vs_while_0026', 'p5_conn_during_vs_while_0027', 'p5_conn_during_vs_while_0028', 'p5_conn_during_vs_while_0029', 'p5_conn_during_vs_while_0030'
];

test('pilot exposes exactly the selected 30 already-verified questions and three skills', () => {
  const pilot = buildPilotRuntime(betaBank);
  assert.equal(pilot.questions.length, 30);
  assert.equal(pilot.skills.length, 3);
  assert.deepEqual(PILOT_QUESTION_IDS, expectedIds);
  assert.deepEqual(new Set(pilot.skills.map((skill) => skill.id)), new Set(PILOT_SKILL_IDS));
  assert.deepEqual(pilot.questions.map((question) => question.id), expectedIds);
  assert.ok(pilot.questions.every((question) => question.validationStatus === 'verified'));
});

test('all 30 pilot explanations are immediate structural decision rules', () => {
  assert.equal(Object.keys(PILOT_EXPLANATIONS).length, 30);
  for (const id of expectedIds) {
    const explanation = PILOT_EXPLANATIONS[id];
    assert.match(explanation, /空欄の直後/);
    assert.match(explanation, /(名詞句|SV)/);
    assert.match(explanation, /(選べ|だ！)/);
    assert.doesNotMatch(explanation, /文脈を確認|意味を正しく|自然につながる/);
  }
});
