import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const indexHtml = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const mainSource = await readFile(new URL('../js/main.js', import.meta.url), 'utf8');
const runtimeBankSource = await readFile(new URL('../js/data/runtime-bank.js', import.meta.url), 'utf8');
const soundSource = await readFile(new URL('../js/quiz-sounds.js', import.meta.url), 'utf8');
const correctSound = await readFile(new URL('../../../../qualifications/color-certification/audio/quiz-correct.mp3', import.meta.url));
const wrongSound = await readFile(new URL('../../../../qualifications/color-certification/audio/quiz-wrong.mp3', import.meta.url));
const questionSound = await readFile(new URL('../../../../qualifications/color-certification/audio/quiz-question.mp3', import.meta.url));

test('Power TOEIC reuses the same valid quiz audio assets as Power Color', () => {
  for (const sound of [correctSound, wrongSound, questionSound]) {
    assert.equal(sound.subarray(0, 3).toString('ascii'), 'ID3');
    assert.ok(sound.length > 2000);
  }
  assert.match(soundSource, /qualifications\/color-certification\/audio\/quiz-correct\.mp3/);
  assert.match(soundSource, /qualifications\/color-certification\/audio\/quiz-wrong\.mp3/);
  assert.match(soundSource, /qualifications\/color-certification\/audio\/quiz-question\.mp3/);
});

test('Power TOEIC plays prompt and answer sounds from the session authority', () => {
  assert.match(mainSource, /import \{ playAnswerSound, playQuestionSound \} from '\.\/quiz-sounds\.js'/);
  assert.match(mainSource, /renderer\.render\(question\); playQuestionSound\(\);/);
  assert.match(mainSource, /renderer\.showResult\([^;]+\); playAnswerSound\(attempt\.correct\);/);
  assert.match(soundSource, /sound\.currentTime = 0/);
  assert.match(soundSource, /sound\.play\(\)/);
});

test('Power TOEIC browser entry refreshes the current concise pilot build and its nested data module', () => {
  assert.match(indexHtml, /js\/main\.js\?v=20260904-short-pilot-v2/);
  assert.match(mainSource, /data\/runtime-bank\.js\?v=20260904-short-pilot-v2/);
  assert.match(runtimeBankSource, /pilot-question-set\.js\?v=20260904-short-pilot-v2/);
});
