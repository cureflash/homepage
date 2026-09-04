import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { CORRECT_QUIZ_SOUND_URL, WRONG_QUIZ_SOUND_URL } from '../js/quiz-sounds.js';

const mainSource = await readFile(new URL('../js/main.js', import.meta.url), 'utf8');

function decodeSound(url) {
  assert.match(url, /^data:audio\/mpeg;base64,/);
  return Buffer.from(url.replace(/^data:audio\/mpeg;base64,/, ''), 'base64');
}

test('quiz feedback sounds preserve the supplied MP3 files', () => {
  const correct = decodeSound(CORRECT_QUIZ_SOUND_URL);
  const wrong = decodeSound(WRONG_QUIZ_SOUND_URL);

  assert.equal(correct.length, 42630);
  assert.equal(wrong.length, 13791);
  assert.equal(createHash('sha256').update(correct).digest('hex'), 'ff3f5255687dfc29484cd3b5b87ab7952649182871155355d52b79c44ef8fc9f');
  assert.equal(createHash('sha256').update(wrong).digest('hex'), 'b3a349f3714434f6d51a0b07c43f2273a28f2d7a59df686aa24f35bacc8f41a4');
});

test('quiz answer handler selects the feedback sound from correctness', () => {
  assert.match(mainSource, /new Audio\(CORRECT_QUIZ_SOUND_URL\)/);
  assert.match(mainSource, /new Audio\(WRONG_QUIZ_SOUND_URL\)/);
  assert.match(mainSource, /playFeedbackSound\(selectedIndex === question\.correctIndex\)/);
});
