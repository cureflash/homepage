import { readFile, writeFile } from 'node:fs/promises';

const runtimeUrl = new URL('../data/grade2-runtime.json', import.meta.url);
const batchUrl = new URL('../data/grade2-authoring-rgb-cmyk-models-0001-0012.json', import.meta.url);

const runtime = JSON.parse(await readFile(runtimeUrl, 'utf8'));
const batch = JSON.parse(await readFile(batchUrl, 'utf8'));

const existingSkill = runtime.skills.find((skill) => skill.id === batch.skill.id);
if (existingSkill) {
  const existingQuestions = runtime.questions.filter((question) => question.skillId === batch.skill.id);
  if (JSON.stringify(existingSkill) !== JSON.stringify(batch.skill) || JSON.stringify(existingQuestions) !== JSON.stringify(batch.questions)) {
    throw new Error('pc2.media.rgb_cmyk_models exists in runtime but is not record-identical to verified authoring');
  }
  process.exit(0);
}

const ids = new Set(runtime.questions.map((question) => question.id));
for (const question of batch.questions) {
  if (question.validationStatus !== 'verified') throw new Error(`refusing to promote non-verified ${question.id}`);
  if (ids.has(question.id)) throw new Error(`duplicate question id ${question.id}`);
}

runtime.skills.push(batch.skill);
runtime.questions.push(...batch.questions);
await writeFile(runtimeUrl, `${JSON.stringify(runtime, null, 2)}\n`);
