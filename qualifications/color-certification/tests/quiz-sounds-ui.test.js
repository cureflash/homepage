import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const indexHtml = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const soundSource = await readFile(new URL('../js/quiz-sounds.js', import.meta.url), 'utf8');
const correctSound = await readFile(new URL('../audio/quiz-correct.mp3', import.meta.url));
const wrongSound = await readFile(new URL('../audio/quiz-wrong.mp3', import.meta.url));
const questionSound = await readFile(new URL('../audio/quiz-question.mp3', import.meta.url));

test('quiz audio assets are valid MP3 payloads', () => {
  assert.equal(correctSound.subarray(0, 3).toString('ascii'), 'ID3');
  assert.equal(wrongSound.subarray(0, 3).toString('ascii'), 'ID3');
  assert.equal(questionSound.subarray(0, 3).toString('ascii'), 'ID3');
  assert.ok(correctSound.length > 7000);
  assert.ok(wrongSound.length > 2000);
  assert.ok(questionSound.length > 9000);
});

test('quiz UI loads the sound hook and routes answer and question sounds', () => {
  assert.match(indexHtml, /js\/quiz-sounds\.js\?v=20260904-quiz-sounds-v2/);
  assert.match(soundSource, /audio\/quiz-correct\.mp3/);
  assert.match(soundSource, /audio\/quiz-wrong\.mp3/);
  assert.match(soundSource, /audio\/quiz-question\.mp3/);
  assert.match(soundSource, /dataset\.state === 'correct'/);
  assert.match(soundSource, /dataset\.state === 'wrong'/);
  assert.match(soundSource, /\[data-skill\], \[data-action="next"\]/);
  assert.match(soundSource, /!quizView\?\.hidden/);
  assert.match(soundSource, /play\(questionSound\)/);
  assert.match(soundSource, /sound\.currentTime = 0/);
  assert.match(soundSource, /sound\.play\(\)/);
});
