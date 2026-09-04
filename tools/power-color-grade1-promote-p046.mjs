import { readFile, writeFile } from 'node:fs/promises';

const runtimePath = 'qualifications/color-certification/data/grade1-runtime.json';
const authoringPath = 'qualifications/color-certification/data/grade1-authoring-xyz-p046-0001-0004.json';
const testPath = 'qualifications/color-certification/tests/grade1-runtime-promotion.test.js';

const runtime = JSON.parse(await readFile(runtimePath, 'utf8'));
const authoring = JSON.parse(await readFile(authoringPath, 'utf8'));

if (runtime.questions.length !== 85 || runtime.skills.length !== 16) {
  throw new Error(`unexpected Grade 1 runtime frontier: ${runtime.questions.length} questions / ${runtime.skills.length} skills`);
}
if (runtime.productionApproved !== false) throw new Error('productionApproved must remain false');
if (authoring.qaSummary?.verified !== 4 || authoring.qaSummary?.pending !== 0) throw new Error('p.046 authoring is not canonical 4/4 verified pending 0');
if (runtime.skills.some((skill) => skill.id === authoring.skill.id)) throw new Error('p.046 skill is already promoted');
if (runtime.questions.some((q) => q.skillId === authoring.skill.id)) throw new Error('p.046 questions are already promoted');

runtime.skills.push(structuredClone(authoring.skill));
runtime.questions.push(...structuredClone(authoring.questions));
await writeFile(runtimePath, `${JSON.stringify(runtime, null, 2)}\n`);

let test = await readFile(testPath, 'utf8');
test = test.replace(
  "const grassmannLaws = JSON.parse(await readFile(new URL('../data/grade1-authoring-grassmann-laws-p041-0001-0004.json', import.meta.url), 'utf8'));\nconst batches = [ancientEurope, medievalEurope, modernEurope, ancientJapan, ancientToEarlyModernJapan, modernJapan, judd, chevreul, rood, ostwald, itten, moonSpencer, appearanceMode, lightingProperties, measurementIlluminants, grassmannLaws];",
  "const grassmannLaws = JSON.parse(await readFile(new URL('../data/grade1-authoring-grassmann-laws-p041-0001-0004.json', import.meta.url), 'utf8'));\nconst xyz = JSON.parse(await readFile(new URL('../data/grade1-authoring-xyz-p046-0001-0004.json', import.meta.url), 'utf8'));\nconst batches = [ancientEurope, medievalEurope, modernEurope, ancientJapan, ancientToEarlyModernJapan, modernJapan, judd, chevreul, rood, ostwald, itten, moonSpencer, appearanceMode, lightingProperties, measurementIlluminants, grassmannLaws, xyz];"
);
test = test.replaceAll('runtime.questions.length, 85', 'runtime.questions.length, 89');
test = test.replaceAll("validationStatus === 'verified').length, 85", "validationStatus === 'verified').length, 89");
test = test.replace('assert.deepEqual(counts, [22, 22, 22, 19]);', 'assert.deepEqual(counts, [23, 23, 23, 20]);');
test = test.replace('totalCount: 85,', 'totalCount: 89,');
test = test.replace('assert.equal(ids.length, 85);', 'assert.equal(ids.length, 89);');
if (!test.includes("const xyz = JSON.parse")) throw new Error('failed to extend runtime gate with p.046 authoring');
await writeFile(testPath, test);

const promoted = JSON.parse(await readFile(runtimePath, 'utf8'));
if (JSON.stringify(promoted.questions.slice(-4)) !== JSON.stringify(authoring.questions)) throw new Error('runtime p.046 questions are not record-identical');
if (JSON.stringify(promoted.skills.at(-1)) !== JSON.stringify(authoring.skill)) throw new Error('runtime p.046 skill is not record-identical');
console.log('p.046 canonical promotion prepared: 89 questions / 17 skills');
