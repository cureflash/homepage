import { readdir, readFile, writeFile } from 'node:fs/promises';

const dataDir = new URL('../data/', import.meta.url);
const runtimeUrl = new URL('grade3-runtime.json', dataDir);
const runtime = JSON.parse(await readFile(runtimeUrl, 'utf8'));
const authoringFiles = (await readdir(dataDir))
  .filter((name) => /^grade3-authoring-(color-to-name|name-to-color)-\d{4}-\d{4}\.json$/.test(name))
  .sort();

if (authoringFiles.length !== 14) {
  throw new Error(`Expected 14 authoring files, found ${authoringFiles.length}: ${authoringFiles.join(', ')}`);
}

const authoringBanks = await Promise.all(
  authoringFiles.map(async (name) => JSON.parse(await readFile(new URL(name, dataDir), 'utf8')))
);
const stagedQuestions = authoringBanks.flatMap((bank) => bank.questions);
if (stagedQuestions.length !== 111) {
  throw new Error(`Expected 111 staged questions, found ${stagedQuestions.length}`);
}
if (stagedQuestions.some((question) => question.validationStatus !== 'verified')) {
  throw new Error('All staged questions must be individually verified before promotion.');
}

const existingById = new Map(runtime.questions.map((question) => [question.id, question]));
for (const question of stagedQuestions) {
  if (existingById.has(question.id)) {
    throw new Error(`Runtime already contains staged question id ${question.id}; refusing non-idempotent promotion.`);
  }
}

const promotedQuestions = [...runtime.questions, ...stagedQuestions];
if (promotedQuestions.length !== 127) {
  throw new Error(`Expected 127 runtime questions after promotion, found ${promotedQuestions.length}`);
}
if (new Set(promotedQuestions.map((question) => question.id)).size !== 127) {
  throw new Error('Duplicate question IDs detected during promotion.');
}

runtime.notice = '3級慣用色名の有効な色→名前63状態と名前→色64状態、計127問を独立QA済みruntimeとして公開。表示RGB/HEXは学習用参考であり、本試験の印刷色を完全再現するものではありません。PCCS以降は継続作業中。';
runtime.questions = promotedQuestions;
await writeFile(runtimeUrl, `${JSON.stringify(runtime)}\n`, 'utf8');
