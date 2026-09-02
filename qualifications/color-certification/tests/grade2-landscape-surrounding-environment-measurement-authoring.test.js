import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const batch = JSON.parse(await readFile(new URL('../data/grade2-authoring-landscape-surrounding-environment-measurement-0001-0012.json', import.meta.url), 'utf8'));
const runtime = JSON.parse(await readFile(new URL('../data/grade2-runtime.json', import.meta.url), 'utf8'));

function fingerprint(q) { return JSON.stringify([q.sentence, q.choices]); }

test('Grade 2 Landscape p123 surrounding measurement batch remains independently verified, source-bound, nonvisual, balanced and record-identical after promotion', () => {
  assert.equal(batch.grade, 2);
  assert.equal(batch.skill.id, 'pc2.landscape.surrounding_environment_measurement');
  assert.equal(batch.questions.length, 12);
  assert.deepEqual(batch.qaSummary, {
    generated: 12, checked: 12, verified: 12, needsRevision: 0, rejected: 0, pending: 0,
    correctIndexDistribution: { A: 3, B: 3, C: 3, D: 3 }
  });

  const ids = new Set();
  const fps = new Set();
  const positions = [0, 0, 0, 0];
  const runtimeIds = new Set(runtime.questions.map((q) => q.id));
  const runtimeFingerprints = new Set(runtime.questions.map(fingerprint));
  const allowedSources = new Set([
    'aft_grade2_current_toc_2026',
    'jpma_ccs_2025_practical',
    'mlit_plateau_uc25_12',
    'jcri_jis_standard_color_chart'
  ]);

  for (const q of batch.questions) {
    assert.equal(q.validationStatus, 'verified');
    assert.equal(q.qa.generatedAs, 'pending_validation');
    assert.match(q.qa.independentRecheck, /^independently /);
    assert.equal(q.questionType, 'text_choice');
    assert.equal(q.taxonomyPath, 'grade2/landscape/surrounding_environment_measurement');
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
    assert.equal(runtimeIds.has(q.id), true);
    assert.equal(runtimeFingerprints.has(fingerprint(q)), true);
    assert.equal(ids.has(q.id), false);
    assert.equal(fps.has(fingerprint(q)), false);
    ids.add(q.id);
    fps.add(fingerprint(q));
    positions[q.correctIndex] += 1;

    const feedback = getAnswerFeedbackModel(q, new Map());
    assert.equal(feedback.kind, 'text');
    assert.equal(feedback.showSwatch, false);
  }

  assert.deepEqual(positions, [3, 3, 3, 3]);
  assert.equal(runtime.skills.some((skill) => skill.id === batch.skill.id), true);
  assert.deepEqual(runtime.questions.filter((q) => q.skillId === batch.skill.id), batch.questions);
});
