import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const requestPath = path.join(root, '.promotion-request.json');

async function exists(filePath) {
  try { await fs.access(filePath); return true; } catch { return false; }
}

if (!(await exists(requestPath))) {
  console.log('No Power Color promotion request; nothing to promote.');
  process.exit(0);
}

const request = JSON.parse(await fs.readFile(requestPath, 'utf8'));
const runtimePath = path.resolve(root, request.runtime ?? 'data/grade3-runtime.json');
const authoringPath = path.resolve(root, request.authoring);
const runtime = JSON.parse(await fs.readFile(runtimePath, 'utf8'));
const authoring = JSON.parse(await fs.readFile(authoringPath, 'utf8'));

assert.equal(runtime.questions.length, request.expectedBefore, 'unexpected runtime size before promotion');
assert.equal(authoring.grade, runtime.grade, 'grade mismatch');
assert.ok(authoring.skill?.id, 'authoring batch must declare skill.id');
assert.ok(Array.isArray(authoring.questions) && authoring.questions.length > 0, 'authoring batch must contain questions');
assert.equal(request.expectedAfter, request.expectedBefore + authoring.questions.length, 'expectedAfter mismatch');

const runtimeIds = new Set(runtime.questions.map((question) => question.id));
assert.equal(runtimeIds.size, runtime.questions.length, 'runtime already contains duplicate IDs');
for (const question of authoring.questions) {
  assert.equal(question.skillId, authoring.skill.id, `skill mismatch: ${question.id}`);
  assert.equal(question.validationStatus, 'verified', `unverified question: ${question.id}`);
  assert.equal(question.qa?.generatedAs, 'pending_validation', `missing pending-first audit: ${question.id}`);
  assert.ok(!runtimeIds.has(question.id), `question already exists in runtime: ${question.id}`);
  runtimeIds.add(question.id);
}

const existingSkill = runtime.skills.find((skill) => skill.id === authoring.skill.id);
if (existingSkill) assert.deepEqual(existingSkill, authoring.skill, 'runtime skill metadata differs from authoring skill metadata');
else runtime.skills.push(structuredClone(authoring.skill));

runtime.questions.push(...structuredClone(authoring.questions));
assert.equal(runtime.questions.length, request.expectedAfter, 'runtime size after promotion mismatch');
assert.equal(new Set(runtime.questions.map((question) => question.id)).size, runtime.questions.length, 'promotion introduced duplicate IDs');
if (request.notice) runtime.notice = request.notice;

await fs.writeFile(runtimePath, JSON.stringify(runtime), 'utf8');
await fs.unlink(requestPath);
console.log(`Promoted ${authoring.questions.length} verified ${authoring.skill.id} records: ${request.expectedBefore} -> ${request.expectedAfter}`);
