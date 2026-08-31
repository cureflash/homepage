import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.resolve(here, '../data/grade3-authoring-scheme-identification-0001-0012.json');
const authoring = JSON.parse(await fs.readFile(filePath, 'utf8'));
const question = authoring.questions.find((entry) => entry.id === 'pc3-scheme-identification-0012');
assert.ok(question, 'target question not found');

const before = ['同一色相配色','明度のグラデーション','補色の色相関係','同一トーン配色'];
const after = ['同一色相配色','明度のグラデーション','同一トーン配色','補色の色相関係'];
assert.deepEqual(question.choices, before, 'unexpected pre-revision choices');
assert.equal(question.proposedAnswer, '明度のグラデーション');
assert.equal(question.correctIndex, 1);

question.choices = after;
question.qa.revisionHistory = [
  {
    on: '2026-08-31',
    status: 'needs_revision',
    reason: 'full-fingerprint duplicate detected inside pc3.scheme.identification because the four-choice ordering matched pc3-scheme-identification-0003'
  },
  {
    on: '2026-08-31',
    status: 'verified',
    reason: 'independently re-derived the monotonic lightness-gradient answer after reordering distractors; correct answer remains uniquely at index 1'
  }
];

assert.equal(question.choices[question.correctIndex], question.proposedAnswer);
assert.equal(new Set(authoring.questions.map((entry) => JSON.stringify({ skillId: entry.skillId, colorRef: entry.colorRef, choices: entry.choices, presentation: entry.presentation }))).size, authoring.questions.length);
await fs.writeFile(filePath, JSON.stringify(authoring, null, 2) + '\n', 'utf8');
console.log('Revised pc3-scheme-identification-0012 duplicate fingerprint and independently preserved its answer.');
