import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import test from 'node:test';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const dataUrl = new URL('../data/', import.meta.url);
const fileName = 'grade1-authoring-landscape-notification-p141-0001-0004.json';
const batch = JSON.parse(await readFile(new URL(fileName, dataUrl), 'utf8'));
const priorFiles = (await readdir(dataUrl)).filter(name => name.startsWith('grade1-authoring-') && name.endsWith('.json') && name !== fileName);
const prior = await Promise.all(priorFiles.map(async name => JSON.parse(await readFile(new URL(name, dataUrl), 'utf8'))));
const fp = q => JSON.stringify([q.sentence, q.choices]);

test('Grade 1 p141 landscape-notification batch remains verified, source-bound, nonvisual and globally unique', () => {
  assert.equal(batch.grade,1); assert.equal(batch.skill.id,'pc1.landscape.landscape_notification_p141'); assert.equal(batch.questions.length,4);
  assert.deepEqual(batch.qaSummary,{generated:4,checked:4,verified:4,needsRevision:0,rejected:0,pending:0,correctIndexDistribution:{A:1,B:1,C:1,D:1}});
  const ids=new Set(prior.flatMap(b=>b.questions.map(q=>q.id))); const fps=new Set(prior.flatMap(b=>b.questions.map(fp))); const positions=[0,0,0,0];
  for(const q of batch.questions){assert.equal(q.validationStatus,'verified');assert.equal(q.qa.generatedAs,'pending_validation');assert.match(q.qa.independentRecheck,/^independently /);assert.equal(q.questionType,'text_choice');assert.equal(q.taxonomyPath,'grade1/landscape/landscape_notification_p141');assert.equal(q.prompt,q.sentence);assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);assert.equal(q.proposedAnswer,q.choices[q.correctIndex]);assert.ok(q.sourceRefs.includes('aft_grade1_toc_current'));assert.equal('presentation' in q,false);assert.equal('colorRefs' in q,false);assert.equal(ids.has(q.id),false);assert.equal(fps.has(fp(q)),false);ids.add(q.id);fps.add(fp(q));positions[q.correctIndex]+=1;const feedback=getAnswerFeedbackModel(q,new Map());assert.equal(feedback.kind,'text');assert.equal(feedback.showSwatch,false);} assert.deepEqual(positions,[1,1,1,1]);
});
