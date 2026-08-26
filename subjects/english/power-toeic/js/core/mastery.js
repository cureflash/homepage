export const MASTERY_STATES = Object.freeze({
  UNKNOWN: 'unknown',
  TRAINING: 'training',
  WEAK: 'weak'
});

export const DEFAULT_MASTERY_CONFIG = Object.freeze({
  minimumAttempts: 4,
  recentWindow: 8,
  weakAccuracyThreshold: 0.6
});

function validateConfig(config) {
  if (!Number.isInteger(config.minimumAttempts) || config.minimumAttempts < 1) {
    throw new Error('minimumAttempts must be a positive integer');
  }
  if (!Number.isInteger(config.recentWindow) || config.recentWindow < 1) {
    throw new Error('recentWindow must be a positive integer');
  }
  if (!Number.isFinite(config.weakAccuracyThreshold)
      || config.weakAccuracyThreshold < 0
      || config.weakAccuracyThreshold > 1) {
    throw new Error('weakAccuracyThreshold must be between 0 and 1');
  }
}

function safeAccuracy(correct, total) {
  return total > 0 ? correct / total : 0;
}

function summarizeEvidence(attempts, context) {
  const filtered = attempts.filter((attempt) => attempt.context === context);
  const correct = filtered.filter((attempt) => attempt.correct).length;
  return Object.freeze({
    attempts: filtered.length,
    correct,
    accuracy: safeAccuracy(correct, filtered.length)
  });
}

export function buildMasterySnapshot(skillId, attempts, config = DEFAULT_MASTERY_CONFIG) {
  if (typeof skillId !== 'string' || !skillId) throw new Error('skillId is required');
  if (!Array.isArray(attempts)) throw new Error('attempts must be an array');
  validateConfig(config);

  const skillAttempts = attempts.filter((attempt) => attempt.skillId === skillId);
  const correct = skillAttempts.filter((attempt) => attempt.correct).length;
  const recentAttempts = skillAttempts.slice(-config.recentWindow);
  const recentCorrect = recentAttempts.filter((attempt) => attempt.correct).length;
  const accuracy = safeAccuracy(correct, skillAttempts.length);
  const recentAccuracy = safeAccuracy(recentCorrect, recentAttempts.length);
  const mixed = summarizeEvidence(skillAttempts, 'mixed');
  const review = summarizeEvidence(skillAttempts, 'review');

  let state = MASTERY_STATES.UNKNOWN;
  if (skillAttempts.length > 0 && skillAttempts.length < config.minimumAttempts) {
    state = MASTERY_STATES.TRAINING;
  } else if (skillAttempts.length >= config.minimumAttempts) {
    state = recentAccuracy < config.weakAccuracyThreshold
      ? MASTERY_STATES.WEAK
      : MASTERY_STATES.TRAINING;
  }

  return Object.freeze({
    skillId,
    state,
    attempts: skillAttempts.length,
    correct,
    accuracy,
    recentAttempts: recentAttempts.length,
    recentCorrect,
    recentAccuracy,
    mixed,
    review
  });
}

export function buildMasterySnapshots({ attempts, skillIds = [], config = DEFAULT_MASTERY_CONFIG }) {
  if (!Array.isArray(attempts)) throw new Error('attempts must be an array');
  if (!Array.isArray(skillIds)) throw new Error('skillIds must be an array');
  validateConfig(config);

  const ordered = [];
  const seen = new Set();
  for (const skillId of skillIds) {
    if (typeof skillId !== 'string' || !skillId || seen.has(skillId)) continue;
    seen.add(skillId);
    ordered.push(skillId);
  }

  const extra = [...new Set(attempts.map((attempt) => attempt.skillId))]
    .filter((skillId) => typeof skillId === 'string' && skillId && !seen.has(skillId))
    .sort();

  return Object.freeze([
    ...ordered,
    ...extra
  ].map((skillId) => buildMasterySnapshot(skillId, attempts, config)));
}
