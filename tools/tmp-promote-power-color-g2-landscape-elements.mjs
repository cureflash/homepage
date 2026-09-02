import { readFile, writeFile } from 'node:fs/promises';

const runtimePath = 'qualifications/color-certification/data/grade2-runtime.json';
const authoringPath = 'qualifications/color-certification/data/grade2-authoring-landscape-element-examples-0001-0012.json';
const testPath = 'qualifications/color-certification/tests/grade2-runtime-promotion.test.js';

const runtime = JSON.parse(await readFile(runtimePath, 'utf8'));
const authoring = JSON.parse(await readFile(authoringPath, 'utf8'));

if (authoring.skill?.id !== 'pc2.landscape.element_examples') throw new Error('unexpected authoring skill');
if (authoring.questions?.length !== 12) throw new Error('expected 12 authoring records');
if (!authoring.questions.every((q) => q.validationStatus === 'verified')) throw new Error('all authoring records must be verified');
if (new Set(authoring.questions.map((q) => q.id)).size !== 12) throw new Error('duplicate authoring ids');

const alreadyPromoted = runtime.skills.some((skill) => skill.id === authoring.skill.id);
if (!alreadyPromoted) {
  if (runtime.skills.length !== 21 || runtime.questions.length !== 252) {
    throw new Error(`unexpected promotion frontier: ${runtime.skills.length} skills / ${runtime.questions.length} questions`);
  }
  const existingIds = new Set(runtime.questions.map((q) => q.id));
  for (const q of authoring.questions) {
    if (existingIds.has(q.id)) throw new Error(`runtime already contains id ${q.id}`);
  }
  const fingerprint = (q) => JSON.stringify([q.sentence, q.choices]);
  const existingFingerprints = new Set(runtime.questions.map(fingerprint));
  for (const q of authoring.questions) {
    if (existingFingerprints.has(fingerprint(q))) throw new Error(`full-fingerprint collision ${q.id}`);
  }
  runtime.skills.push(structuredClone(authoring.skill));
  runtime.questions.push(...authoring.questions.map((q) => structuredClone(q)));
  await writeFile(runtimePath, `${JSON.stringify(runtime, null, 2)}\n`);
}

let test = await readFile(testPath, 'utf8');
if (!test.includes('const landscapeElementExamples =')) {
  test = test.replace(
    "const landscapePublicNature = JSON.parse(await readFile(new URL('../data/grade2-authoring-landscape-public-nature-0001-0012.json', import.meta.url), 'utf8'));\n",
    "const landscapePublicNature = JSON.parse(await readFile(new URL('../data/grade2-authoring-landscape-public-nature-0001-0012.json', import.meta.url), 'utf8'));\nconst landscapeElementExamples = JSON.parse(await readFile(new URL('../data/grade2-authoring-landscape-element-examples-0001-0012.json', import.meta.url), 'utf8'));\n"
  );
  test = test.replace('interiorStyleNames, landscapePublicNature];', 'interiorStyleNames, landscapePublicNature, landscapeElementExamples];');
  test = test.replace('runtime.questions.length, 252', 'runtime.questions.length, 264');
  test = test.replace("validationStatus === 'verified').length, 252", "validationStatus === 'verified').length, 264");
  test = test.replace('totalCount: 63', 'totalCount: 66');
  test = test.replace(').length, 63);', ').length, 66);');
  await writeFile(testPath, test);
}

const promotedRuntime = JSON.parse(await readFile(runtimePath, 'utf8'));
if (promotedRuntime.skills.length !== 22 || promotedRuntime.questions.length !== 264) throw new Error('promotion count mismatch');
if (JSON.stringify(promotedRuntime.skills.at(-1)) !== JSON.stringify(authoring.skill)) throw new Error('skill is not record-identical');
if (JSON.stringify(promotedRuntime.questions.slice(-12)) !== JSON.stringify(authoring.questions)) throw new Error('questions are not record-identical');

console.log('Grade 2 landscape element examples promoted record-identically: 252 -> 264, 21 -> 22 skills');
