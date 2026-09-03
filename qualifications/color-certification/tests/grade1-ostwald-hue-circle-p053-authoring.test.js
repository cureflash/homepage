import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const batch = JSON.parse(await readFile(new URL('../data/grade1-authoring-ostwald-hue-circle-p053-0001-0004.json', import.meta.url), 'utf8'));
const priorFiles = [
  '../data/grade1-authoring-culture-ancient-europe-materials-0001-0008.json',
  '../data/grade1-authoring-culture-medieval-early-modern-europe-0001-0008.json',
  '../data/grade1-authoring-culture-modern-europe-color-science-0001-0008.json',
  '../data/grade1-authoring-culture-ancient-japan-colour-0001-0008.json',
  '../data/grade1-authoring-culture-ancient-to-early-modern-japan-0001-0008.json',
  '../data/grade1-authoring-culture-modern-japan-colour-0001-0008.json',
  '../data/grade1-authoring-harmony-judd-p024-0001-0004.json',
  '../data/grade1-authoring-harmony-chevreul-p025-0001-0003.json',
  '../data/grade1-authoring-harmony-rood-p027-0001-0003.json',
  '../data/grade1-authoring-harmony-ostwald-p028-0001-0004.json',
  '../data/grade1-authoring-harmony-itten-p029-0001-0004.json',
  '../data/grade1-authoring-harmony-moon-spencer-p030-0001-0004.json',
  '../data/grade1-authoring-light-color-appearance-p032-0001-0003.json',
  '../data/grade1-authoring-lighting-properties-p036-0001-0004.json',
  '../data/grade1-authoring-measurement-illuminants-p039-0001-0004.json',
  '../data/grade1-authoring-grassmann-laws-p041-0001-0004.json',
  '../data/grade1-authoring-xyz-p046-0001-0004.json',
  '../data/grade1-authoring-cielab-p050-0001-0004.json'
];
const priorBatches = await Promise.all(priorFiles.map(async (path) => JSON.parse(await readFile(new URL(path, import.meta.url), 'utf8'))));
function fingerprint(q) { return JSON.stringify([q.sentence, q.choices]); }

test('Grade 1 p053 Ostwald hue-circle batch remains verified, source-bound, nonvisual and globally unique', () => {
  assert.equal(batch.grade, 1);
  assert.equal(batch.skill.id, 'pc1.color_representation.ostwald_hue_circle_p053');
  assert.equal(batch.questions.length, 4);
  assert.deepEqual(batch.qaSummary, {generated:4,checked:4,verified:4,needsRevision:0,rejected:0,pending:0,correctIndexDistribution:{A:1,B:1,C:1,D:1}});
  const ids = new Set(priorBatches.flatMap((b) => b.questions.map((q) => q.id)));
  const fps = new Set(priorBatches.flatMap((b) => b.questions.map(fingerprint)));
  const allowedSources = new Set(['musabi_hue_circle','cra_ostwald_2023']);
  const positions=[0,0,0,0];
  for (const q of batch.questions) {
    assert.equal(q.validationStatus,'verified');
    assert.equal(q.qa.generatedAs,'pending_validation');
    assert.match(q.qa.independentRecheck,/^independently /);
    assert.equal(q.questionType,'text_choice');
    assert.equal(q.taxonomyPath,'grade1/color_representation/ostwald_hue_circle_p053');
    assert.equal(q.skillId,batch.skill.id);
    assert.equal(q.prompt,q.sentence);
    assert.equal(q.choices.length,4);
    assert.equal(new Set(q.choices).size,4);
    assert.equal(q.proposedAnswer,q.choices[q.correctIndex]);
    assert.ok(q.sourceRefs.length >= 1);
    for (const ref of q.sourceRefs) assert.equal(allowedSources.has(ref),true);
    assert.equal('presentation' in q,false);
    assert.equal('colorRefs' in q,false);
    assert.equal(/#[0-9a-f]{3,8}\b/i.test(JSON.stringify(q)),false);
    assert.equal(ids.has(q.id),false);
    assert.equal(fps.has(fingerprint(q)),false);
    ids.add(q.id); fps.add(fingerprint(q)); positions[q.correctIndex]+=1;
    const feedback=getAnswerFeedbackModel(q,new Map());
    assert.equal(feedback.kind,'text');
    assert.equal(feedback.showSwatch,false);
  }
  assert.deepEqual(positions,[1,1,1,1]);
});
