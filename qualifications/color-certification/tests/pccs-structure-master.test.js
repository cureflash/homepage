import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const masterPath = path.resolve(here, '../data/grade3-pccs-structure.json');
const master = JSON.parse(fs.readFileSync(masterPath, 'utf8'));

const expectedHueNotations = [
  'pR', 'R', 'yR', 'rO', 'O', 'yO', 'rY', 'Y',
  'gY', 'YG', 'yG', 'G', 'bG', 'BG', 'BG', 'gB',
  'B', 'B', 'pB', 'V', 'bP', 'P', 'rP', 'RP',
];

const expectedToneCodes = ['v', 'b', 's', 'dp', 'lt', 'sf', 'd', 'dk', 'p', 'ltg', 'g', 'dkg'];

test('Grade 3 PCCS structural master has the source-confirmed 24 hue positions and notations', () => {
  assert.equal(master.format, 'power-color-grade3-pccs-structure-v1');
  assert.equal(master.grade, 3);
  assert.equal(master.system, 'PCCS');
  assert.equal(master.hues.length, 24);

  assert.deepEqual(master.hues.map((hue) => hue.position), Array.from({ length: 24 }, (_, index) => index + 1));
  assert.deepEqual(master.hues.map((hue) => hue.notation), expectedHueNotations);
  assert.equal(new Set(master.hues.map((hue) => hue.id)).size, 24);

  for (const hue of master.hues) {
    assert.equal(hue.displayReference, null);
    assert.equal(hue.validationStatus, 'source_confirmed');
    assert.equal(hue.nameValidationStatus, 'pending_source');
    assert.equal(hue.nameJa, null);
    assert.equal(hue.reading, null);
  }
});

test('Grade 3 PCCS structural master keeps the current hue-20 V notation until the authority changes', () => {
  const hue20 = master.hues.find((hue) => hue.position === 20);
  assert.ok(hue20);
  assert.equal(hue20.notation, 'V');
  assert.ok(hue20.sourceRefs.includes('jcri_color_calc_manual'));
  assert.match(hue20.changeNote, /future rename/i);
});

test('Grade 3 PCCS structural master has all 12 source-confirmed chromatic tone codes', () => {
  assert.equal(master.tones.length, 12);
  assert.deepEqual(master.tones.map((tone) => tone.notation), expectedToneCodes);
  assert.equal(new Set(master.tones.map((tone) => tone.id)).size, 12);

  for (const tone of master.tones) {
    assert.equal(tone.displayReference, null);
    assert.equal(tone.validationStatus, 'source_confirmed');
    assert.ok(tone.nameJa);
  }

  assert.equal(master.tones.find((tone) => tone.notation === 'lt').newColorCard199Notation, 'lt+');
  assert.equal(master.tones.find((tone) => tone.notation === 'p').newColorCard199Notation, 'p+');
  assert.equal(master.tones.find((tone) => tone.notation === 's').newColorCard199Notation, null);
});

test('Every PCCS structural fact references a declared authority and visual question generation remains blocked', () => {
  const sourceIds = new Set(Object.keys(master.sources));

  for (const record of [...master.hues, ...master.tones]) {
    assert.ok(record.sourceRefs.length > 0);
    for (const sourceRef of record.sourceRefs) {
      assert.ok(sourceIds.has(sourceRef), `undeclared sourceRef: ${sourceRef}`);
    }
  }

  assert.equal(master.completion.huePositionsAndNotations, 'complete');
  assert.equal(master.completion.hueJapaneseNames, 'pending_source');
  assert.equal(master.completion.toneCodesAndNames, 'complete');
  assert.equal(master.completion.monitorFacingQuestionGenerationAllowed, false);
});
