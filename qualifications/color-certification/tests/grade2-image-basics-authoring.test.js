import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const batch = JSON.parse(await readFile(new URL('../data/grade2-authoring-image-basics-0001-0012.json', import.meta.url), 'utf8'));
const runtime = JSON.parse(await readFile(new URL('../data/grade2-runtime.json', import.meta.url), 'utf8'));

function fingerprint(q) {
  return JSON.stringify([q.sentence, q.choices]);
}

test('Grade 2 image-basics authoring batch is independently verified, nonvisual, balanced, and not yet runtime-promoted', () => {
  assert.equal(batch.grade, 2);
  assert.equal(batch.skill.id, 'pc2.media.image_basics');
  assert.equal(batch.questions.length, 12);
  assert.deepEqual(batch.qaSummary, {
    generated: 12, checked: 12, verified: 12, needsRevision: 0, rejected: 0, pending: 0,
    correctIndexDistribution: { A: 3, B: 3, C: 3, D: 3 }
  });

  const positions = [0, 0, 0, 0];
  for (const q of batch.questions) {
    assert.equal(q.validationStatus, 'verified');
    assert.equal(q.qa.generatedAs, 'pending_validation');
    assert.equal(q.questionType, 'text_choice');
    assert.equal(q.taxonomyPath, 'grade2/media/image_basics');
    assert.equal(q.choices.length, 4);
    assert.equal(new Set(q.choices).size, 4);
    assert.equal(q.proposedAnswer, q.choices[q.correctIndex]);
    assert.equal('presentation' in q, false);
    assert.equal('colorRefs' in q, false);
    assert.equal(/#[0-9a-f]{3,8}\b/i.test(JSON.stringify(q)), false);
    positions[q.correctIndex] += 1;

    const feedback = getAnswerFeedbackModel(q, new Map());
    assert.equal(feedback.kind, 'text');
    assert.equal(feedback.showSwatch, false);
  }

  assert.deepEqual(positions, [3, 3, 3, 3]);
  assert.equal(new Set(batch.questions.map(fingerprint)).size, 12);
  assert.ok(batch.questions.some(q => q.sourceRefs.includes('adobe_raster_vector_2023')));
  assert.ok(batch.questions.some(q => q.sourceRefs.includes('adobe_image_essentials_2024')));
  assert.equal(runtime.skills.some((skill) => skill.id === batch.skill.id), false);
  assert.equal(runtime.questions.some((q) => q.skillId === batch.skill.id), false);
});
