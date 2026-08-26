export const PROGRESSION_STAGE_THRESHOLDS = Object.freeze([0, 20, 60, 140, 280, 500]);

export const DEFAULT_PROGRESSION_POINTS = Object.freeze({
  firstCorrect: 2,
  mixedCorrectBonus: 2,
  reviewCorrectBonus: 3,
  masteryMilestone: 10,
  substantialSessionComplete: 5,
});

export function deriveProgressionStage(points, thresholds = PROGRESSION_STAGE_THRESHOLDS) {
  if (!Number.isFinite(points) || points < 0) throw new Error('points must be non-negative');
  const resolvedThresholds = Array.isArray(thresholds) ? thresholds : PROGRESSION_STAGE_THRESHOLDS;
  let stage = 0;
  resolvedThresholds.forEach((threshold, index) => {
    if (points >= threshold) stage = index;
  });
  return Math.min(5, stage);
}

export function progressionEventFromAttempt(attempt, priorAttempts = []) {
  if (!attempt || typeof attempt.correct !== 'boolean') throw new Error('attempt is required');
  if (!Array.isArray(priorAttempts)) throw new Error('priorAttempts must be an array');
  const wasSeenCorrect = priorAttempts.some((prior) => prior.questionId === attempt.questionId && prior.correct);
  return Object.freeze({
    type: 'attempt',
    correct: attempt.correct,
    firstCorrect: attempt.correct && !wasSeenCorrect,
    context: attempt.context ?? 'training',
  });
}

export function applyProgressionEvent(state, event, config = DEFAULT_PROGRESSION_POINTS) {
  const current = {
    points: Number(state?.points) || 0,
    stage: Number.isInteger(state?.stage) ? state.stage : 0,
  };
  let earned = 0;

  if (event?.type === 'attempt' && event.correct) {
    if (event.firstCorrect) earned += config.firstCorrect;
    if (event.context === 'mixed') earned += config.mixedCorrectBonus;
    if (event.context === 'review') earned += config.reviewCorrectBonus;
  } else if (event?.type === 'mastery' && event.newlyMastered) {
    earned += config.masteryMilestone;
  } else if (event?.type === 'session_complete' && Number(event.questionCount) >= 10) {
    earned += config.substantialSessionComplete;
  }

  const points = current.points + Math.max(0, earned);
  return Object.freeze({
    points,
    stage: deriveProgressionStage(points),
    earned,
  });
}
