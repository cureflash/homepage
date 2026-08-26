import test from 'node:test';
import assert from 'node:assert/strict';
import {
  AssetCatalog,
  ASSET_IDS,
  SafeAudioPlayer,
  sergeantAssetId,
  traineeAssetId,
} from '../js/ui/asset-catalog.js';

test('asset catalog resolves semantic IDs without leaking source names to callers', () => {
  const catalog = new AssetCatalog({ [ASSET_IDS.SERGEANT_NEUTRAL]: '/placeholder/sergeant.webp' });
  assert.equal(catalog.resolve(ASSET_IDS.SERGEANT_NEUTRAL), '/placeholder/sergeant.webp');
  assert.equal(catalog.resolve('missing.asset'), null);
});

test('sergeant reaction falls back to neutral asset', () => {
  const catalog = new AssetCatalog({ [ASSET_IDS.SERGEANT_NEUTRAL]: '/sergeant-neutral.webp' });
  assert.equal(sergeantAssetId('wrong'), 'sergeant.wrong');
  assert.equal(catalog.resolveSergeant('wrong'), '/sergeant-neutral.webp');
});

test('trainee reaction falls back to the same stage neutral asset', () => {
  const stageThree = traineeAssetId(3, 'neutral');
  const catalog = new AssetCatalog({ [stageThree]: '/trainee-stage-3.webp' });
  assert.equal(traineeAssetId(3, 'correct'), 'trainee.stage_3.correct');
  assert.equal(catalog.resolveTrainee(3, 'correct'), '/trainee-stage-3.webp');
});

test('missing trainee stage falls back to stage zero when available', () => {
  const catalog = new AssetCatalog({ [ASSET_IDS.TRAINEE_STAGE_0]: '/trainee-stage-0.webp' });
  assert.equal(catalog.resolveTrainee(5, 'complete'), '/trainee-stage-0.webp');
});

test('safe audio failure never blocks quiz flow', async () => {
  const player = new SafeAudioPlayer({
    catalog: new AssetCatalog(),
    createAudio: () => ({ play: async () => { throw new Error('blocked'); } })
  });
  assert.equal(await player.play(ASSET_IDS.AUDIO_CORRECT), false);
});
