const DAY_MS = 24 * 60 * 60 * 1000;
export const DEFAULT_REVIEW_INTERVAL_DAYS = Object.freeze([1, 3, 7, 14]);

function parseTime(value, field) {
  const time = Date.parse(value);
  if (!Number.isFinite(time)) throw new Error(`${field} must be a valid date-time`);
  return time;
}

function addDays(iso, days) {
  return new Date(parseTime(iso, 'answeredAt') + (days * DAY_MS)).toISOString();
}

export function createReviewEntryFromAttempt(attempt, previousEntry = null, intervals = DEFAULT_REVIEW_INTERVAL_DAYS) {
  if (!attempt || typeof attempt.questionId !== 'string' || !attempt.questionId) throw new Error('attempt.questionId is required');
  if (!Number.isInteger(attempt.questionVersion)) throw new Error('attempt.questionVersion is required');
  if (typeof attempt.skillId !== 'string' || !attempt.skillId) throw new Error('attempt.skillId is required');
  if (typeof attempt.correct !== 'boolean') throw new Error('attempt.correct is required');
  if (!Array.isArray(intervals) || !intervals.length || intervals.some((days) => !Number.isInteger(days) || days <= 0)) {
    throw new Error('intervals must contain positive integer days');
  }
  parseTime(attempt.answeredAt, 'answeredAt');

  const previousIndex = Number.isInteger(previousEntry?.intervalIndex) ? previousEntry.intervalIndex : -1;
  const intervalIndex = attempt.context === 'review' && attempt.correct
    ? Math.min(previousIndex + 1, intervals.length - 1)
    : 0;
  const dueAt = addDays(attempt.answeredAt, intervals[intervalIndex]);

  return Object.freeze({
    questionId: attempt.questionId,
    questionVersion: attempt.questionVersion,
    skillId: attempt.skillId,
    dueAt,
    intervalIndex,
    status: 'scheduled',
    lastAttemptAt: attempt.answeredAt,
  });
}

export function upsertReviewEntry(entries, nextEntry) {
  if (!Array.isArray(entries)) throw new Error('entries must be an array');
  const remaining = entries.filter((entry) => entry.questionId !== nextEntry.questionId);
  return Object.freeze([...remaining, nextEntry].sort((a, b) => a.dueAt.localeCompare(b.dueAt) || a.questionId.localeCompare(b.questionId)));
}

export function getDueReviewEntries(entries, now = new Date().toISOString()) {
  if (!Array.isArray(entries)) throw new Error('entries must be an array');
  const nowMs = parseTime(now, 'now');
  return Object.freeze(entries
    .filter((entry) => entry.status === 'scheduled' && parseTime(entry.dueAt, 'dueAt') <= nowMs)
    .sort((a, b) => a.dueAt.localeCompare(b.dueAt) || a.questionId.localeCompare(b.questionId)));
}

export function getDueReviewQuestionIds(entries, now) {
  return Object.freeze(getDueReviewEntries(entries, now).map((entry) => entry.questionId));
}
