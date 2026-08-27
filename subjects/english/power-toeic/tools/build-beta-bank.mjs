import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(here, '..');
const questionRoot = path.join(appRoot, 'js/data/questions/part5');
const taxonomyPath = path.join(appRoot, 'js/data/taxonomy/part5-v1.json');
const outputDir = path.join(appRoot, 'js/data/runtime');
const outputPath = path.join(outputDir, 'beta-bank.json');

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (entry.isFile() && entry.name.endsWith('.json')) files.push(full);
  }
  return files;
}

const parseJson = async (file) => JSON.parse(await readFile(file, 'utf8'));

function normalizeStem(text) {
  return String(text)
    .toLowerCase()
    .replace(/_{2,}/g, ' <blank> ')
    .replace(/[^a-z0-9<>']+/g, ' ')
    .trim();
}

function ngrams(text, n = 3) {
  const compact = text.replace(/\s+/g, ' ');
  const out = new Set();
  for (let i = 0; i <= compact.length - n; i += 1) out.add(compact.slice(i, i + n));
  return out;
}

function dice(a, b) {
  if (!a.size && !b.size) return 1;
  let intersection = 0;
  const [small, large] = a.size <= b.size ? [a, b] : [b, a];
  for (const value of small) if (large.has(value)) intersection += 1;
  return (2 * intersection) / (a.size + b.size);
}

const files = await walk(questionRoot);
const approvedIndexFiles = files.filter((file) => file.includes(`${path.sep}verified${path.sep}`));
const candidateFiles = files.filter((file) => file.includes(`${path.sep}pending${path.sep}`));

const approvedIds = new Set();
const approvedSkillById = new Map();
for (const file of approvedIndexFiles) {
  const doc = await parseJson(file);
  if (doc.format !== 'power-toeic-approved-id-index-v1') continue;
  for (const id of doc.approved_ids ?? []) {
    approvedIds.add(id);
    approvedSkillById.set(id, doc.skill);
  }
}

const candidateById = new Map();
for (const file of candidateFiles) {
  const doc = await parseJson(file);
  if (!Array.isArray(doc.items) || !doc.skill) continue;
  for (const row of doc.items) {
    if (!Array.isArray(row) || row.length < 5) continue;
    const [id, sentence, choices, correctIndex, explanation] = row;
    candidateById.set(id, { id, sentence, choices, correctIndex, explanation, skillId: doc.skill });
  }
}

const taxonomy = await parseJson(taxonomyPath);
const skillMeta = new Map((taxonomy.micro_skills ?? []).map((skill) => [skill.id, skill]));
const groupMeta = new Map((taxonomy.groups ?? []).map((group) => [group.id, group]));

const verifiedCandidates = [];
const missing = [];
for (const id of [...approvedIds].sort()) {
  const candidate = candidateById.get(id);
  if (!candidate) {
    missing.push(id);
    continue;
  }
  const expectedSkill = approvedSkillById.get(id);
  if (expectedSkill && candidate.skillId !== expectedSkill) throw new Error(`Skill mismatch for ${id}`);
  const meta = skillMeta.get(candidate.skillId);
  if (!meta) throw new Error(`Missing taxonomy skill: ${candidate.skillId}`);
  verifiedCandidates.push({
    id: candidate.id,
    version: 1,
    skillId: candidate.skillId,
    categoryId: meta.group,
    sentence: candidate.sentence,
    choices: candidate.choices,
    correctIndex: candidate.correctIndex,
    explanation: candidate.explanation,
    validationStatus: 'verified',
    betaCandidate: true
  });
}
if (missing.length) throw new Error(`Approved IDs missing source candidates: ${missing.slice(0, 10).join(', ')}`);

// This is an explicit beta-only global lexical near-duplicate gate. It is not the
// final semantic production approval gate described in CONTENT_HANDOFF.md.
// Later items in a >=0.965 character-trigram Dice cluster are quarantined.
const kept = [];
const keptSignatures = [];
const quarantined = [];
const exactSeen = new Map();
for (const question of verifiedCandidates) {
  const normalized = normalizeStem(question.sentence);
  const exact = exactSeen.get(normalized);
  if (exact) {
    quarantined.push({ id: question.id, duplicateOf: exact.id, score: 1, reason: 'exact_normalized_stem' });
    continue;
  }
  const sig = ngrams(normalized, 3);
  let match = null;
  for (let i = 0; i < kept.length; i += 1) {
    const otherText = normalizeStem(kept[i].sentence);
    const ratio = Math.min(normalized.length, otherText.length) / Math.max(normalized.length, otherText.length);
    if (ratio < 0.8) continue;
    const score = dice(sig, keptSignatures[i]);
    if (score >= 0.965) {
      match = { id: kept[i].id, score };
      break;
    }
  }
  if (match) {
    quarantined.push({ id: question.id, duplicateOf: match.id, score: Number(match.score.toFixed(4)), reason: 'cross_bank_near_duplicate' });
    continue;
  }
  exactSeen.set(normalized, question);
  kept.push(question);
  keptSignatures.push(sig);
}

const usedSkillIds = [...new Set(kept.map((question) => question.skillId))];
const skills = usedSkillIds.map((id) => {
  const meta = skillMeta.get(id);
  const group = groupMeta.get(meta.group);
  return {
    id,
    label: meta.label_ja,
    categoryId: meta.group,
    categoryLabel: group?.label_ja ?? meta.group
  };
});

const payload = {
  format: 'power-toeic-beta-runtime-bank-v1',
  generatedAt: new Date().toISOString(),
  productionApproved: false,
  notice: 'Independent-QA verified candidates only. Final semantic production duplicate clearance is still pending; this bank is for the public beta.',
  source: {
    taxonomyVersion: taxonomy.version,
    approvedCandidateCount: verifiedCandidates.length,
    runtimeQuestionCount: kept.length,
    quarantinedNearDuplicateCount: quarantined.length
  },
  betaGlobalSimilarityGate: {
    passed: true,
    scope: 'all currently QA-approved candidates included in this build',
    method: 'normalized stem exact match + character-trigram Dice',
    threshold: 0.965,
    note: 'Beta lexical similarity gate only; does not replace the final semantic production-bank gate.'
  },
  skills,
  questions: kept,
  quarantine: quarantined
};

if (payload.questions.length < 100) throw new Error(`Refusing tiny beta bank: ${payload.questions.length}`);
if (payload.questions.some((question) => question.validationStatus !== 'verified')) throw new Error('Non-verified question entered beta bank');
if (new Set(payload.questions.map((question) => question.id)).size !== payload.questions.length) throw new Error('Duplicate question IDs in beta bank');

await mkdir(outputDir, { recursive: true });
await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
console.log(JSON.stringify({ approvedCandidates: verifiedCandidates.length, runtimeQuestions: kept.length, quarantined: quarantined.length, skills: skills.length }));
