import { MASTERY_STATES } from './mastery.js';

export const DEFAULT_WEAKNESS_CONFIG = Object.freeze({
  recentWeight: 0.7,
  overallWeight: 0.3,
  weakStateBonus: 0.15
});

export function rankWeakSkills(snapshots, config = DEFAULT_WEAKNESS_CONFIG) {
  if (!Array.isArray(snapshots)) throw new Error('snapshots must be an array');
  const weightTotal = config.recentWeight + config.overallWeight;
  if (!Number.isFinite(weightTotal) || weightTotal <= 0) throw new Error('invalid weakness weights');

  const ranked = snapshots
    .filter((snapshot) => snapshot && snapshot.attempts > 0)
    .map((snapshot) => {
      const overallError = 1 - snapshot.accuracy;
      const recentError = 1 - snapshot.recentAccuracy;
      const base = (
        recentError * config.recentWeight
        + overallError * config.overallWeight
      ) / weightTotal;
      const stateBonus = snapshot.state === MASTERY_STATES.WEAK ? config.weakStateBonus : 0;
      return Object.freeze({
        skillId: snapshot.skillId,
        state: snapshot.state,
        attempts: snapshot.attempts,
        accuracy: snapshot.accuracy,
        recentAccuracy: snapshot.recentAccuracy,
        weaknessScore: base + stateBonus
      });
    })
    .sort((a, b) => (
      b.weaknessScore - a.weaknessScore
      || b.attempts - a.attempts
      || a.skillId.localeCompare(b.skillId)
    ));

  return Object.freeze(ranked);
}
