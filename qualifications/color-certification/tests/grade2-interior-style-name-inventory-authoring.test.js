import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { getAnswerFeedbackModel } from '../js/color-choice-renderer.js';

const batch = JSON.parse(await readFile(new URL('../data/grade2-authoring-interior-style-name-inventory-0001-0012.json', import.meta.url), 'utf8'));
const runtime = JSON.parse(await readFile(new URL('../data/grade2-runtime.json', import.meta.url), 'utf8'));
const allowed = new Set(['ナチュラル', 'カジュアル', 'オーソドックス', 'クラシック', 'エレガント', 'モダン']);

function fingerprint(q) { return JSON.stringify([q.sentence, q.choices]); }

function labelsInChoice(choice) {
  return choice.split('・');
}

test('Grade 2 Interior p112 style-name batch is independently verified, inventory-only, balanced and runtime-promoted record-identically', () => {
  assert.equal(batch.grade, 2);
  assert.equal(batch.skill.id, 'pc2.interior.style_name_inventory');
  assert.equal(batch.questions.length, 12);
  assert.deepEqual(batch.qaSummary, {
    generated: 12, checked: 12, verified: 12, needsRevision: 0, rejected: 0, pending: 0,
    correctIndexDistribution: { A: 3, B: 3, C: 3, D: 3 }
  });

  const positions = [0, 0, 0, 0];
  for (const q of batch.questions) {
    assert.equal(q.validationStatus, 'verified');
    assert.equal(q.qa.generatedAs, 'pending_validation');
    assert.match(q.qa.independentRecheck, /^independently /);
    assert.equal(q.questionType, 'text_choice');
    assert.equal(q.taxonomyPath, 'grade2/interior/style_name_inventory');
    assert.equal(q.choices.length, 4);
    assert.equal(new Set(q.choices).size, 4);
    assert.equal(q.proposedAnswer, q.choices[q.correctIndex]);
    assert.equal('presentation' in q, false);
    assert.equal('colorRefs' in q, false);
    assert.equal(/#[0-9a-f]{3,8}\b/i.test(JSON.stringify(q)), false);
    assert.equal(/RGB|HEX|swatch|photograph|写真|画像|色相|トーン|素材|家具|形状/.test(q.prompt + q.explanation), false);
    positions[q.correctIndex] += 1;

    const feedback = getAnswerFeedbackModel(q, new Map());
    assert.equal(feedback.kind, 'text');
    assert.equal(feedback.showSwatch, false);

    if (q.prompt.includes('含まれる名称')) {
      assert.equal(allowed.has(q.proposedAnswer), true);
    } else if (q.prompt.includes('名称だけで構成された組合せ')) {
      assert.equal(labelsInChoice(q.proposedAnswer).every((label) => allowed.has(label)), true);
      for (const choice of q.choices.filter((choice) => choice !== q.proposedAnswer)) {
        assert.equal(labelsInChoice(choice).every((label) => allowed.has(label)), false);
      }
    } else if (q.prompt.includes('含まれない名称')) {
      assert.equal(allowed.has(q.proposedAnswer), false);
      for (const choice of q.choices.filter((choice) => choice !== q.proposedAnswer)) assert.equal(allowed.has(choice), true);
    } else {
      assert.fail(`unexpected prompt boundary: ${q.id}`);
    }
  }

  assert.deepEqual(positions, [3, 3, 3, 3]);
  const batchFingerprints = batch.questions.map(fingerprint);
  assert.equal(new Set(batchFingerprints).size, 12);
  const runtimeQuestions = runtime.questions.filter((q) => q.skillId === batch.skill.id);
  assert.deepEqual(runtimeQuestions, batch.questions);
  assert.deepEqual(runtime.skills.find((skill) => skill.id === batch.skill.id), batch.skill);
});
