const MODES = new Set(['QUICK', 'TRAINING', 'POWER', 'WEAKNESS', 'CUSTOM', 'TEST', 'REVIEW']);
const LABEL_POLICIES = new Set(['show_skill', 'hide_skill']);
const SELECTION_POLICIES = new Set(['standard', 'review_due']);
const ATTEMPT_CONTEXTS = new Set(['training', 'mixed', 'review']);
const MASTERY_STATES = new Set(['unknown', 'training', 'weak', 'mixed_pass', 'reviewing', 'mastered']);
const REPORT_REASONS = new Set(['ambiguous', 'unnatural_english', 'wrong_answer', 'wrong_explanation', 'other']);

function requiredString(value, name) {
  if (typeof value !== 'string' || !value) throw new Error(`${name} must be a non-empty string`);
}

function nonNegativeInteger(value, name) {
  if (!Number.isInteger(value) || value < 0) throw new Error(`${name} must be a non-negative integer`);
}

function positiveInteger(value, name) {
  if (!Number.isInteger(value) || value < 1) throw new Error(`${name} must be a positive integer`);
}

function finiteRatio(value, name) {
  if (!Number.isFinite(value) || value < 0 || value > 1) throw new Error(`${name} must be between 0 and 1`);
}

function isoDate(value, name) {
  requiredString(value, name);
  if (!Number.isFinite(Date.parse(value))) throw new Error(`${name} must be an ISO-compatible date-time`);
}

export function validateSkillRecord(skill) {
  requiredString(skill?.id, 'skill.id');
  requiredString(skill?.label, 'skill.label');
  requiredString(skill?.categoryId, 'skill.categoryId');
  return true;
}

export function validateQuestionRecord(question) {
  requiredString(question?.id, 'question.id');
  positiveInteger(question?.version, 'question.version');
  requiredString(question?.skillId, 'question.skillId');
  requiredString(question?.categoryId, 'question.categoryId');
  requiredString(question?.sentence, 'question.sentence');
  if (!Array.isArray(question?.choices) || question.choices.length !== 4 || question.choices.some((choice) => typeof choice !== 'string' || !choice)) {
    throw new Error('question.choices must contain exactly four non-empty strings');
  }
  if (new Set(question.choices).size !== 4) throw new Error('question.choices must be distinct');
  if (!Number.isInteger(question.correctIndex) || question.correctIndex < 0 || question.correctIndex > 3) throw new Error('question.correctIndex must be 0...3');
  requiredString(question.explanation, 'question.explanation');
  return true;
}

export function validateWorkoutRecipeRecord(recipe) {
  if (!MODES.has(recipe?.mode)) throw new Error('workout.mode is invalid');
  positiveInteger(recipe?.totalCount, 'workout.totalCount');
  nonNegativeInteger(recipe?.seed, 'workout.seed');
  if (!SELECTION_POLICIES.has(recipe.selectionPolicy)) throw new Error('workout.selectionPolicy is invalid');
  if (!LABEL_POLICIES.has(recipe.labelPolicy)) throw new Error('workout.labelPolicy is invalid');
  if (typeof recipe.endless !== 'boolean') throw new Error('workout.endless must be boolean');
  if (!Array.isArray(recipe.skillAllocations)) throw new Error('workout.skillAllocations must be an array');
  for (const allocation of recipe.skillAllocations) {
    requiredString(allocation?.skillId, 'allocation.skillId');
    const count = allocation.count;
    const weight = allocation.weight;
    if ((count == null) === (weight == null)) throw new Error('allocation must contain exactly one of count or weight');
    if (count != null) positiveInteger(count, 'allocation.count');
    if (weight != null && (!Number.isFinite(weight) || weight <= 0)) throw new Error('allocation.weight must be positive');
  }
  return true;
}

export function validateAttemptRecord(attempt) {
  requiredString(attempt?.questionId, 'attempt.questionId');
  positiveInteger(attempt?.questionVersion, 'attempt.questionVersion');
  requiredString(attempt?.skillId, 'attempt.skillId');
  nonNegativeInteger(attempt?.selectedIndex, 'attempt.selectedIndex');
  nonNegativeInteger(attempt?.correctIndex, 'attempt.correctIndex');
  if (attempt.selectedIndex > 3 || attempt.correctIndex > 3) throw new Error('attempt answer indexes must be 0...3');
  if (typeof attempt.correct !== 'boolean') throw new Error('attempt.correct must be boolean');
  nonNegativeInteger(attempt?.responseMs, 'attempt.responseMs');
  isoDate(attempt?.answeredAt, 'attempt.answeredAt');
  if (!ATTEMPT_CONTEXTS.has(attempt?.context)) throw new Error('attempt.context is invalid');
  return true;
}

function validateEvidence(evidence, name) {
  nonNegativeInteger(evidence?.attempts, `${name}.attempts`);
  nonNegativeInteger(evidence?.correct, `${name}.correct`);
  finiteRatio(evidence?.accuracy, `${name}.accuracy`);
}

export function validateMasterySnapshotRecord(snapshot) {
  requiredString(snapshot?.skillId, 'mastery.skillId');
  if (!MASTERY_STATES.has(snapshot?.state)) throw new Error('mastery.state is invalid');
  nonNegativeInteger(snapshot?.attempts, 'mastery.attempts');
  nonNegativeInteger(snapshot?.correct, 'mastery.correct');
  finiteRatio(snapshot?.accuracy, 'mastery.accuracy');
  nonNegativeInteger(snapshot?.recentAttempts, 'mastery.recentAttempts');
  nonNegativeInteger(snapshot?.recentCorrect, 'mastery.recentCorrect');
  finiteRatio(snapshot?.recentAccuracy, 'mastery.recentAccuracy');
  validateEvidence(snapshot?.mixed, 'mastery.mixed');
  validateEvidence(snapshot?.review, 'mastery.review');
  return true;
}

export function validateReviewEntryRecord(entry) {
  requiredString(entry?.questionId, 'review.questionId');
  positiveInteger(entry?.questionVersion, 'review.questionVersion');
  requiredString(entry?.skillId, 'review.skillId');
  isoDate(entry?.dueAt, 'review.dueAt');
  nonNegativeInteger(entry?.intervalIndex, 'review.intervalIndex');
  if (entry?.status !== 'scheduled') throw new Error('review.status must be scheduled in V1');
  isoDate(entry?.lastAttemptAt, 'review.lastAttemptAt');
  return true;
}

export function validateProgressionStateRecord(state) {
  if (!Number.isFinite(state?.points) || state.points < 0) throw new Error('progression.points must be non-negative');
  nonNegativeInteger(state?.stage, 'progression.stage');
  if (state.stage > 5) throw new Error('progression.stage must be 0...5');
  return true;
}

export function validateQuestionReportRecord(report) {
  requiredString(report?.id, 'report.id');
  requiredString(report?.questionId, 'report.questionId');
  positiveInteger(report?.questionVersion, 'report.questionVersion');
  if (!REPORT_REASONS.has(report?.reason)) throw new Error('report.reason is invalid');
  if (typeof report?.detail !== 'string') throw new Error('report.detail must be a string');
  isoDate(report?.createdAt, 'report.createdAt');
  return true;
}

export function validateSemanticAssetId(value) {
  requiredString(value, 'assetId');
  if (!/^(sergeant\.|trainee\.stage_[0-5]\.|audio\.)[a-z0-9_.-]+$/.test(value)) throw new Error('assetId is outside the V1 semantic asset namespace');
  return true;
}
