import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const batch = JSON.parse(await readFile(new URL('../data/grade1-authoring-culture-ancient-to-early-modern-japan-0001-0008.json', import.meta.url), 'utf8'));
const priorFiles = [
  '../data/grade1-authoring-culture-ancient-europe-materials-0001-0008.json',
  '../data/grade1-authoring-culture-medieval-early-modern-europe-0001-0008.json',
  '../data/grade1-authoring-culture-modern-europe-color-science-0001-0008.json',
  '../data/grade1-authoring-culture-ancient-japan-colour-0001-0008.json'
];
const priorBatches = await Promise.all(priorFiles.map(async (path) => JSON.parse(await readFile(new URL(path, import.meta.url), 'utf8'))));

function fingerprint(q) { return JSON.stringify([q.sentence, q.choices]); }

test('Grade 1 p017 Japan culture batch remains verified, source-bound, nonvisual, globally unique and balanced', () => {
  assert.equal(batch.grade, 1);
  assert.equal(batch.skill.id, 'pc1.culture.ancient_to_early_modern_japan');
  assert.equal(batch.questions.length, 8);
  assert.deepEqual(batch.qaSummary, {
    generated: 8, checked: 8, verified: 8, needsRevision: 0, rejected: 0, pending: 0,
    correctIndexDistribution: { A: 2, B: 2, C: 2, D: 2 }
  });

  const ids = new Set(priorBatches.flatMap((b) => b.questions.map((q) => q.id)));
  const fps = new Set(priorBatches.flatMap((b) => b.questions.map(fingerprint)));
  const positions = [0, 0, 0, 0];
  const allowedSources = new Set([
    'okayama_prefectural_university_heian_kasane',
    'agency_cultural_affairs_noshi_yukiwa_kosode',
    'agency_cultural_affairs_jakago_oju_kosode',
    'agency_cultural_affairs_tanpopo_cho_kosode'
  ]);

  for (const q of batch.questions) {
    assert.equal(q.validationStatus, 'verified');
    assert.equal(q.qa.generatedAs, 'pending_validation');
    assert.match(q.qa.independentRecheck, /^independently /);
    assert.equal(q.questionType, 'text_choice');
    assert.equal(q.taxonomyPath, 'grade1/culture/ancient_to_early_modern_japan');
    assert.equal(q.skillId, batch.skill.id);
    assert.equal(q.categoryId, batch.skill.categoryId);
    assert.equal(q.prompt, q.sentence);
    assert.equal(q.choices.length, 4);
    assert.equal(new Set(q.choices).size, 4);
    assert.ok(Number.isInteger(q.correctIndex) && q.correctIndex >= 0 && q.correctIndex < 4);
    assert.equal(q.proposedAnswer, q.choices[q.correctIndex]);
    assert.equal('presentation' in q, false);
    assert.equal('colorRefs' in q, false);
    assert.equal(/#[0-9a-f]{3,8}\b/i.test(JSON.stringify(q)), false);
    assert.ok(q.sourceRefs.length >= 1);
    assert.equal(q.sourceRefs.every((source) => allowedSources.has(source)), true);
    assert.equal(ids.has(q.id), false);
    assert.equal(fps.has(fingerprint(q)), false);
    ids.add(q.id);
    fps.add(fingerprint(q));
    positions[q.correctIndex] += 1;

    const feedback = getAnswerFeedbackModel(q, new Map());
    assert.equal(feedback.kind, 'text');
    assert.equal(feedback.showSwatch, false);
  }

  assert.deepEqual(positions, [2, 2, 2, 2]);
});
