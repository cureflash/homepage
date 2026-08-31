const fs = require('fs');

const runtimePath = 'qualifications/color-certification/data/grade3-runtime.json';
const authoringPath = 'qualifications/color-certification/data/grade3-authoring-complementary-hue-number-0001-0012.json';
const statusPath = 'docs/power-color/STATUS.json';
const bankTestPath = 'qualifications/color-certification/tests/color-bank.test.js';
const corpusTestPath = 'qualifications/color-certification/tests/conventional-corpus-gate.test.js';
const promotionTestPath = 'qualifications/color-certification/tests/pccs-complementary-hue-runtime-promotion.test.js';
const planPath = 'docs/power-color/20_EXECUTION_PLAN.md';
const handoffPath = 'docs/power-color/90_HANDOFF.md';

const runtime = JSON.parse(fs.readFileSync(runtimePath, 'utf8'));
const authoring = JSON.parse(fs.readFileSync(authoringPath, 'utf8'));
const existingIds = new Set(runtime.questions.map((q) => q.id));
const duplicatePromotions = authoring.questions.filter((q) => existingIds.has(q.id));
if (duplicatePromotions.length) throw new Error(`promotion would duplicate ids: ${duplicatePromotions.map((q) => q.id).join(', ')}`);
if (runtime.questions.length !== 127) throw new Error(`expected 127 pre-promotion runtime questions, got ${runtime.questions.length}`);
if (authoring.questions.length !== 12 || authoring.questions.some((q) => q.validationStatus !== 'verified')) throw new Error('authoring batch is not exactly 12 verified records');
if (!runtime.skills.some((skill) => skill.id === authoring.skill.id)) runtime.skills.push(authoring.skill);
runtime.questions.push(...authoring.questions);
runtime.notice = '3級慣用色名127問とPCCS補色色相番号12問、計139問を独立QA済みruntimeとして収録。表示RGB/HEXは学習用参考であり、本試験の印刷色を完全再現するものではありません。PCCSの表示色を使う問題は継続作業中です。';
if (runtime.questions.length !== 139) throw new Error(`expected 139 post-promotion questions, got ${runtime.questions.length}`);
fs.writeFileSync(runtimePath, JSON.stringify(runtime) + '\n');

let bankTest = fs.readFileSync(bankTestPath, 'utf8');
if (!bankTest.includes('grade3-authoring-complementary-hue-number-0001-0012.json')) {
  bankTest = bankTest.replace(
    "const runtime = JSON.parse(await readFile(new URL('../data/grade3-runtime.json', import.meta.url), 'utf8'));\n",
    "const runtime = JSON.parse(await readFile(new URL('../data/grade3-runtime.json', import.meta.url), 'utf8'));\nconst complementaryAuthoring = JSON.parse(await readFile(new URL('../data/grade3-authoring-complementary-hue-number-0001-0012.json', import.meta.url), 'utf8'));\n"
  );
}
const oldRuntimeTestStart = "test('runtime bank exposes verified questions only and all color refs resolve', () => {";
const oldRuntimeTestEnd = '\nfunction assertAuthoringCheckpoint';
const start = bankTest.indexOf(oldRuntimeTestStart);
const end = bankTest.indexOf(oldRuntimeTestEnd, start);
if (start < 0 || end < 0) throw new Error('could not locate runtime bank test block');
const replacement = `test('runtime bank exposes 139 verified questions and validates each presentation domain', () => {
  const colorById = new Map(colors.colors.map((color) => [color.id, color]));
  const colorByName = new Map(colors.colors.map((color) => [color.name, color]));
  assert.equal(runtime.questions.length, 139);
  assert.equal(new Set(runtime.questions.map((question) => question.id)).size, runtime.questions.length);
  for (const question of runtime.questions) {
    assert.equal(question.validationStatus, 'verified');
    assert.equal(question.choices.length, 4);
    assert.equal(new Set(question.choices).size, 4);
    if (question.skillId === 'pc3.pccs.complementary_hue_number') {
      assert.equal(question.questionType, 'text_choice');
      assert.equal(question.categoryId, 'pc3.pccs');
      assert.equal(question.presentation, undefined);
      continue;
    }
    assert.ok(colorById.has(question.colorRef));
    const target = colorById.get(question.colorRef);
    if (question.presentation.kind === 'prompt_color') {
      assert.equal(question.presentation.promptColorRef, question.colorRef);
      assert.equal(question.choices[question.correctIndex], target.name);
      question.choices.forEach((choice) => assert.ok(colorByName.has(choice), `Unknown conventional color choice: ${choice}`));
    } else {
      assert.equal(question.presentation.choiceColorRefs.length, 4);
      question.presentation.choiceColorRefs.forEach((ref) => assert.ok(colorById.has(ref)));
      assert.equal(question.presentation.choiceColorRefs[question.correctIndex], question.colorRef);
    }
  }
});

test('promoted PCCS complementary-hue runtime records remain record-identical to verified authoring', () => {
  const promoted = runtime.questions.filter((question) => question.skillId === complementaryAuthoring.skill.id);
  assert.deepEqual(promoted, complementaryAuthoring.questions);
});
`;
bankTest = bankTest.slice(0, start) + replacement + bankTest.slice(end);
if (!bankTest.includes('shared Power TOEIC engine runs promoted PCCS text-choice questions')) {
  bankTest += `\n\ntest('shared Power TOEIC engine runs promoted PCCS text-choice questions', () => {
  const repository = new InMemoryQuestionBank({ questions: runtime.questions, skills: runtime.skills });
  const recipe = createWorkoutRecipe({
    mode: 'TRAINING',
    totalCount: 2,
    skillAllocations: [{ skillId: 'pc3.pccs.complementary_hue_number', count: 2 }],
    seed: 7
  });
  const ids = selectQuestionIds({ repository, recipe });
  assert.equal(ids.length, 2);
  const session = new QuizSession({ questionIds: ids, repository, now: () => 1000 });
  const question = session.currentQuestion;
  assert.equal(question.skillId, 'pc3.pccs.complementary_hue_number');
  const attempt = session.submitAnswer(question.correctIndex);
  assert.equal(attempt.correct, true);
});
`;
}
fs.writeFileSync(bankTestPath, bankTest);

let corpusTest = fs.readFileSync(corpusTestPath, 'utf8');
corpusTest = corpusTest.replace(
  'const runtimeQuestions = runtime.questions;\n',
  "const runtimeQuestions = runtime.questions;\nconst conventionalRuntimeQuestions = runtimeQuestions.filter((question) => question.categoryId === 'pc3.conventional');\n"
);
corpusTest = corpusTest.replace(
  "test('Grade 3 conventional runtime contains all 127 verified questions and no pending records', () => {\n  assert.equal(authoringFiles.length, 14, `Unexpected authoring file count: ${authoringFiles.join(', ')}`);\n  assert.equal(authoringQuestions.length, 111);\n  assert.equal(runtimeQuestions.length, 127);\n  assert.equal(runtimeQuestions.filter((question) => question.validationStatus === 'verified').length, 127);\n  assert.equal(runtimeQuestions.filter((question) => question.validationStatus === 'pending_validation').length, 0);\n});",
  "test('Grade 3 conventional runtime slice remains 127 verified questions inside the 139-question bank', () => {\n  assert.equal(authoringFiles.length, 14, `Unexpected authoring file count: ${authoringFiles.join(', ')}`);\n  assert.equal(authoringQuestions.length, 111);\n  assert.equal(runtimeQuestions.length, 139);\n  assert.equal(conventionalRuntimeQuestions.length, 127);\n  assert.equal(conventionalRuntimeQuestions.filter((question) => question.validationStatus === 'verified').length, 127);\n  assert.equal(runtimeQuestions.filter((question) => question.validationStatus === 'pending_validation').length, 0);\n});"
);
corpusTest = corpusTest.replace(
  "  for (const question of runtimeQuestions) {\n    for (const key of required) assert.ok(Object.hasOwn(question, key), `${question.id} missing ${key}`);",
  "  for (const question of conventionalRuntimeQuestions) {\n    for (const key of required) assert.ok(Object.hasOwn(question, key), `${question.id} missing ${key}`);"
);
corpusTest = corpusTest.replace(
  "const questions = runtimeQuestions.filter((question) => question.skillId === 'pc3.conventional.color_to_name');",
  "const questions = conventionalRuntimeQuestions.filter((question) => question.skillId === 'pc3.conventional.color_to_name');"
);
corpusTest = corpusTest.replace(
  "const questions = runtimeQuestions.filter((question) => question.skillId === 'pc3.conventional.name_to_color');",
  "const questions = conventionalRuntimeQuestions.filter((question) => question.skillId === 'pc3.conventional.name_to_color');"
);
if (!corpusTest.includes('conventionalRuntimeQuestions.length, 127')) throw new Error('failed to scope conventional corpus gate to conventional runtime slice');
fs.writeFileSync(corpusTestPath, corpusTest);

fs.writeFileSync(promotionTestPath, `import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const runtime = JSON.parse(await readFile(new URL('../data/grade3-runtime.json', import.meta.url), 'utf8'));
const authoring = JSON.parse(await readFile(new URL('../data/grade3-authoring-complementary-hue-number-0001-0012.json', import.meta.url), 'utf8'));

test('PCCS complementary-hue runtime promotion preserves all 12 verified authoring records exactly', () => {
  const promoted = runtime.questions.filter((question) => question.skillId === authoring.skill.id);
  assert.equal(promoted.length, 12);
  assert.deepEqual(promoted, authoring.questions);
  assert.ok(runtime.skills.some((skill) => skill.id === authoring.skill.id));
});

test('promoted complementary-hue answers independently recompute from the 24-position hue circle', () => {
  const promoted = runtime.questions.filter((question) => question.skillId === authoring.skill.id);
  const distribution = [0, 0, 0, 0];
  for (const question of promoted) {
    const match = question.prompt.match(/色相番号(\\d+)/);
    assert.ok(match, `missing hue number in prompt: ${question.id}`);
    const sourceHue = Number(match[1]);
    const expected = ((sourceHue + 11) % 24) + 1;
    assert.equal(Number(question.choices[question.correctIndex]), expected, question.id);
    assert.equal(question.validationStatus, 'verified');
    assert.equal(question.questionType, 'text_choice');
    assert.equal(question.choices.length, 4);
    assert.equal(new Set(question.choices).size, 4);
    distribution[question.correctIndex] += 1;
  }
  assert.deepEqual(distribution, [3, 3, 3, 3]);
});
`);

const status = JSON.parse(fs.readFileSync(statusPath, 'utf8'));
status.phase = 'grade3_pccs_runtime_promoted';
status.grade3.relation_scheme_master.complementary_hue_number.runtime_status = 'promoted';
status.grade3.relation_scheme_master.complementary_hue_number.runtime_promotion = {
  status: 'complete',
  promotedRecords: 12,
  recordLevelEqualityGate: true,
  expectedRuntimeTotal: 139
};
status.grade3.runtime_questions = { verified: 139, pending: 0, needs_revision: 0, rejected: 0 };
status.grade3.authoring_questions.status = '127 conventional runtime plus 12 verified PCCS complementary-hue records now promoted record-identically; all 139 runtime records verified; pending 0';
status.grade3.micro_skills.implemented_runtime = 3;
status.current_run = { generated: 0, checked: 12, verified: 12, needs_revision: 0, rejected: 0, pending: 0 };
status.next = 'Continue Grade 3 PCCS non-visual relation/scheme work only where deterministically derivable from source-confirmed structure, while continuing authoritative acquisition for the complete 24 Japanese hue-name/readings mapping and current representative PCCS sRGB values. Do not generate monitor-facing PCCS questions before those values are sourced.';
fs.writeFileSync(statusPath, JSON.stringify(status, null, 2) + '\n');

let plan = fs.readFileSync(planPath, 'utf8');
const oldPlanLine = '  - [ ] Promote the 12 verified records to `grade3-runtime.json`, then rerun record-equality, duplicate/schema, browser-feedback and shared-engine regression gates.';
const newPlanLine = '  - [x] Promote the 12 verified records record-identically to `grade3-runtime.json`; runtime is now 139 verified / pending 0, with record-equality, duplicate/schema, browser-feedback and shared-engine regression gates required by the promotion checkpoint.';
if (!plan.includes(oldPlanLine)) throw new Error('execution plan promotion line no longer matches canonical state');
plan = plan.replace(oldPlanLine, newPlanLine);
fs.writeFileSync(planPath, plan);

const handoff = `# Power Color — HANDOFF

## Current checkpoint
Grade 3 runtime now contains 139 verified questions: 127 conventional-color questions plus 12 record-identical \`pc3.pccs.complementary_hue_number\` questions. The 12 PCCS questions remain text-only and use the shared Power TOEIC question-bank/workout/session engine; no color-specific engine fork was introduced.

Completed this run:
- Re-fetched latest \`main\` and reconciled unrelated parallel changes before branching.
- Promoted all 12 independently verified complementary-hue records from \`grade3-authoring-complementary-hue-number-0001-0012.json\` into \`grade3-runtime.json\` without changing record content.
- Added \`pc3.pccs.complementary_hue_number\` to runtime skills.
- Raised runtime from 127 to 139 verified / pending 0.
- Reworked runtime gates so conventional visual questions remain checked against the canonical conventional-color contract while PCCS text-only questions are validated as their own presentation domain.
- Added a record-level equality promotion gate and an independent 24-position complement recomputation gate; correct-position balance remains A/B/C/D = 3/3/3/3.
- Added a shared Power TOEIC engine regression that selects and answers the promoted PCCS skill.
- Current-run accounting: 0 generated / 12 checked / 12 verified / 0 needs_revision / 0 rejected / 0 pending.

Existing source blockers retained:
- PCCS Japanese hue names/readings remain 0/24 populated until a complete current authoritative mapping is acquired.
- PCCS representative monitor values remain unpopulated; current licensed JCRI Color Calc direct numeric output remains the approved primary acquisition path.
- Monitor-facing PCCS questions remain blocked.
- Hue 20 remains \`V\` until the authority actually changes it.

Not complete:
- remaining Grade 3 PCCS relation/scheme skills;
- complete 24-record Japanese hue-name/readings mapping;
- current representative digital display values for monitor swatches;
- Grade 3 visual PCCS question families;
- full Grade 3 completion, then Grade 2 and Grade 1;
- \`color_database_complete\` remains false.

## Next exact start point
Continue the next Grade 3 non-visual relationship/scheme micro-skill only if it can be derived deterministically from already source-confirmed PCCS structure, and continue authoritative acquisition for the 24 hue-name/readings mapping and current PCCS representative sRGB values. Keep \`nameJa\`, \`reading\`, and \`displayReference\` null until evidence is acquired; do not generate monitor-facing PCCS questions before that gate clears.
`;
fs.writeFileSync(handoffPath, handoff);
