import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import test from 'node:test';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const dataUrl = new URL('../data/', import.meta.url);
const fileNames = [
  'grade1-authoring-landscape-color-standard-exceptions-p145-0001-0004.json',
  'grade1-authoring-landscape-outdoor-ad-color-standard-p145-0001-0004.json'
];
const batches = await Promise.all(fileNames.map(async name => JSON.parse(await readFile(new URL(name, dataUrl), 'utf8'))));
const priorFiles = (await readdir(dataUrl)).filter(name => name.startsWith('grade1-authoring-') && name.endsWith('.json') && !fileNames.includes(name));
const prior = await Promise.all(priorFiles.map(async name => JSON.parse(await readFile(new URL(name, dataUrl), 'utf8'))));
const fp = q => JSON.stringify([q.sentence, q.choices]);

const expected = new Map([
  ['pc1.landscape.color_standard_exceptions_p145','grade1/landscape/color_standard_exceptions_p145'],
  ['pc1.landscape.outdoor_ad_color_standard_p145','grade1/landscape/outdoor_ad_color_standard_p145']
]);

test('Grade 1 p145 landscape batches remain verified, source-bound, nonvisual and globally unique', () => {
  const ids = new Set(prior.flatMap(b => b.questions.map(q => q.id)));
  const fps = new Set(prior.flatMap(b => b.questions.map(fp)));
  for (const batch of batches) {
    assert.equal(batch.grade,1); assert.equal(batch.questions.length,4); assert.ok(expected.has(batch.skill.id));
    assert.deepEqual(batch.qaSummary,{generated:4,checked:4,verified:4,needsRevision:0,rejected:0,pending:0,correctIndexDistribution:{A:1,B:1,C:1,D:1}});
    const positions=[0,0,0,0];
    for (const q of batch.questions) {
      assert.equal(q.validationStatus,'verified'); assert.equal(q.qa.generatedAs,'pending_validation'); assert.match(q.qa.independentRecheck,/^independently /);
      assert.equal(q.questionType,'text_choice'); assert.equal(q.taxonomyPath,expected.get(batch.skill.id)); assert.equal(q.prompt,q.sentence);
      assert.equal(q.choices.length,4); assert.equal(new Set(q.choices).size,4); assert.equal(q.proposedAnswer,q.choices[q.correctIndex]);
      assert.ok(q.sourceRefs.includes('aft_grade1_toc_current')); assert.equal('presentation' in q,false); assert.equal('colorRefs' in q,false);
      assert.equal(ids.has(q.id),false); assert.equal(fps.has(fp(q)),false); ids.add(q.id); fps.add(fp(q)); positions[q.correctIndex]+=1;
      const feedback=getAnswerFeedbackModel(q,new Map()); assert.equal(feedback.kind,'text'); assert.equal(feedback.showSwatch,false);
    }
    assert.deepEqual(positions,[1,1,1,1]);
  }
});
