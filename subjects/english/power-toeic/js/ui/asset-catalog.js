export const ASSET_IDS = Object.freeze({
  SERGEANT_NEUTRAL: 'sergeant.neutral',
  SERGEANT_CORRECT: 'sergeant.correct',
  SERGEANT_WRONG: 'sergeant.wrong',
  SERGEANT_COMPLETE: 'sergeant.complete',
  TRAINEE_STAGE_0: 'trainee.stage_0.neutral',
  TRAINEE_STAGE_1: 'trainee.stage_1.neutral',
  TRAINEE_STAGE_2: 'trainee.stage_2.neutral',
  TRAINEE_STAGE_3: 'trainee.stage_3.neutral',
  TRAINEE_STAGE_4: 'trainee.stage_4.neutral',
  TRAINEE_STAGE_5: 'trainee.stage_5.neutral',
  AUDIO_CORRECT: 'audio.correct',
  AUDIO_WRONG: 'audio.wrong',
  AUDIO_INSPIRATION: 'audio.inspiration'
});

const assetMap = Object.freeze({
  [ASSET_IDS.SERGEANT_NEUTRAL]: null,
  [ASSET_IDS.SERGEANT_CORRECT]: null,
  [ASSET_IDS.SERGEANT_WRONG]: null,
  [ASSET_IDS.SERGEANT_COMPLETE]: null,
  [ASSET_IDS.TRAINEE_STAGE_0]: null,
  [ASSET_IDS.TRAINEE_STAGE_1]: null,
  [ASSET_IDS.TRAINEE_STAGE_2]: null,
  [ASSET_IDS.TRAINEE_STAGE_3]: null,
  [ASSET_IDS.TRAINEE_STAGE_4]: null,
  [ASSET_IDS.TRAINEE_STAGE_5]: null,
  [ASSET_IDS.AUDIO_CORRECT]: './assets/audio/otologic_correct.mp3',
  [ASSET_IDS.AUDIO_WRONG]: './assets/audio/otologic_incorrect.mp3',
  [ASSET_IDS.AUDIO_INSPIRATION]: './assets/audio/otologic_inspiration.mp3'
});

export class AssetCatalog {
  constructor(overrides = {}) {
    this.assets = Object.freeze({ ...assetMap, ...overrides });
  }

  resolve(id, fallbackId = null) {
    return this.assets[id] ?? (fallbackId ? this.assets[fallbackId] ?? null : null);
  }
}

export class SafeAudioPlayer {
  constructor({ catalog = new AssetCatalog(), createAudio = (src) => new Audio(src) } = {}) {
    this.catalog = catalog;
    this.createAudio = createAudio;
  }

  async play(id) {
    const src = this.catalog.resolve(id);
    if (!src) return false;
    try {
      await this.createAudio(src).play();
      return true;
    } catch {
      return false;
    }
  }
}
