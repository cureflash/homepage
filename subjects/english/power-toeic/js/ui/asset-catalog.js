const TRAINEE_STAGES = Object.freeze([0, 1, 2, 3, 4, 5]);
const CHARACTER_REACTIONS = Object.freeze(['neutral', 'correct', 'wrong', 'complete']);

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

export function sergeantAssetId(reaction = 'neutral') {
  const normalized = CHARACTER_REACTIONS.includes(reaction) ? reaction : 'neutral';
  return `sergeant.${normalized}`;
}

export function traineeAssetId(stage = 0, reaction = 'neutral') {
  const normalizedStage = TRAINEE_STAGES.includes(Number(stage)) ? Number(stage) : 0;
  const normalizedReaction = CHARACTER_REACTIONS.includes(reaction) ? reaction : 'neutral';
  return `trainee.stage_${normalizedStage}.${normalizedReaction}`;
}

export class AssetCatalog {
  constructor(overrides = {}) {
    this.assets = Object.freeze({ ...assetMap, ...overrides });
  }

  resolve(id, fallbackId = null) {
    return this.assets[id] ?? (fallbackId ? this.assets[fallbackId] ?? null : null);
  }

  resolveSergeant(reaction = 'neutral') {
    return this.resolve(sergeantAssetId(reaction), ASSET_IDS.SERGEANT_NEUTRAL);
  }

  resolveTrainee(stage = 0, reaction = 'neutral') {
    const neutralId = traineeAssetId(stage, 'neutral');
    return this.resolve(traineeAssetId(stage, reaction), neutralId)
      ?? this.resolve(ASSET_IDS.TRAINEE_STAGE_0);
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
