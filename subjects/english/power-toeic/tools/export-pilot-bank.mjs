import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { buildPilotRuntime } from '../js/data/pilot-question-set.js';

export async function buildPilotBank() {
  const bank = JSON.parse(await readFile(new URL('../js/data/runtime/beta-bank.json', import.meta.url), 'utf8'));
  const taxonomy = JSON.parse(await readFile(new URL('../js/data/taxonomy/part5-v1.json', import.meta.url), 'utf8'));
  const pilot = buildPilotRuntime(bank);
  if (pilot.questions.some((question) => question.validationStatus !== 'verified')) throw new Error('Pilot export requires verified questions');
  const categories = taxonomy.groups.map((group) => ({ id: group.id, label: group.label_ja }))
    .filter((group) => pilot.skills.some((skill) => skill.categoryId === group.id));
  return { format: 'power-toeic-pilot-runtime-bank-v1', productionApproved: false, categories, ...pilot };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const text = JSON.stringify(await buildPilotBank(), null, 2) + '\n';
  for (const url of [
    new URL('../js/data/runtime/pilot-bank.json', import.meta.url),
    new URL('../../power-toeic-ios/Sources/PowerTOEIC/Resources/Questions/pilot-bank.json', import.meta.url),
  ]) {
    await mkdir(dirname(fileURLToPath(url)), { recursive: true });
    await writeFile(url, text);
  }
}
