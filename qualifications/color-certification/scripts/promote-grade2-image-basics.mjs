import { readFile, writeFile } from 'node:fs/promises';

const runtimePath = new URL('../data/grade2-runtime.json', import.meta.url);
const authoringPath = new URL('../data/grade2-authoring-image-basics-0001-0012.json', import.meta.url);

const runtime = JSON.parse(await readFile(runtimePath, 'utf8'));
const authoring = JSON.parse(await readFile(authoringPath, 'utf8'));

if (runtime.questions.length !== 168) throw new Error(`expected 168 runtime questions, got ${runtime.questions.length}`);
if (runtime.skills.some((skill) => skill.id === authoring.skill.id)) throw new Error(`${authoring.skill.id} already promoted`);
if (authoring.questions.length !== 12) throw new Error(`expected 12 authoring questions, got ${authoring.questions.length}`);
if (!authoring.questions.every((q) => q.validationStatus === 'verified')) throw new Error('all authoring questions must be verified');
if (!authoring.questions.every((q) => q.skillId === authoring.skill.id)) throw new Error('authoring skill mismatch');

runtime.skills.push(authoring.skill);
runtime.questions.push(...authoring.questions);

await writeFile(runtimePath, `${JSON.stringify(runtime, null, 2)}\n`, 'utf8');
