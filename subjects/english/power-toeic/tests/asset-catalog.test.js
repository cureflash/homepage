import test from 'node:test';
import assert from 'node:assert/strict';
import { AssetCatalog, ASSET_IDS, SafeAudioPlayer } from '../js/ui/asset-catalog.js';

test('asset catalog resolves semantic IDs without leaking source names to callers', () => {
  const catalog = new AssetCatalog({ [ASSET_IDS.SERGEANT_NEUTRAL]: '/placeholder/sergeant.webp' });
  assert.equal(catalog.resolve(ASSET_IDS.SERGEANT_NEUTRAL), '/placeholder/sergeant.webp');
  assert.equal(catalog.resolve('missing.asset'), null);
});

test('safe audio failure never blocks quiz flow', async () => {
  const player = new SafeAudioPlayer({
    catalog: new AssetCatalog(),
    createAudio: () => ({ play: async () => { throw new Error('blocked'); } })
  });
  assert.equal(await player.play(ASSET_IDS.AUDIO_CORRECT), false);
});
