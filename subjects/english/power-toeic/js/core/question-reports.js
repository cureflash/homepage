export const QUESTION_REPORT_STORAGE_KEY = 'power-toeic.question-reports.v1';
export const QUESTION_REPORT_REASONS = Object.freeze([
  'ambiguous',
  'unnatural_english',
  'wrong_answer',
  'wrong_explanation',
  'other',
]);

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function isReport(value) {
  return value && typeof value === 'object'
    && typeof value.id === 'string'
    && typeof value.questionId === 'string'
    && Number.isInteger(value.questionVersion)
    && QUESTION_REPORT_REASONS.includes(value.reason)
    && typeof value.detail === 'string'
    && typeof value.createdAt === 'string';
}

export function createQuestionReport({ questionId, questionVersion, reason, detail = '', createdAt = new Date().toISOString(), id } = {}) {
  if (typeof questionId !== 'string' || !questionId) throw new Error('questionId is required');
  if (!Number.isInteger(questionVersion) || questionVersion < 1) throw new Error('questionVersion must be a positive integer');
  if (!QUESTION_REPORT_REASONS.includes(reason)) throw new Error('invalid report reason');
  if (typeof detail !== 'string') throw new Error('detail must be a string');
  const reportId = id ?? `${questionId}@${questionVersion}:${createdAt}`;
  return Object.freeze({ id: reportId, questionId, questionVersion, reason, detail: detail.trim(), createdAt });
}

export class QuestionReportStore {
  constructor({ storage, key = QUESTION_REPORT_STORAGE_KEY } = {}) {
    if (!storage || typeof storage.getItem !== 'function' || typeof storage.setItem !== 'function') {
      throw new Error('storage must implement getItem/setItem');
    }
    this.storage = storage;
    this.key = key;
  }

  list() {
    try {
      const raw = this.storage.getItem(this.key);
      if (raw == null) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) && parsed.every(isReport) ? clone(parsed) : [];
    } catch {
      return [];
    }
  }

  append(report) {
    if (!isReport(report)) throw new Error('invalid question report');
    const next = [...this.list(), clone(report)];
    try { this.storage.setItem(this.key, JSON.stringify(next)); } catch { /* reporting must not block quiz */ }
    return clone(report);
  }
}

export function createBrowserQuestionReportStore({ storage, key = QUESTION_REPORT_STORAGE_KEY } = {}) {
  let candidate = storage;
  if (!candidate) {
    try { candidate = globalThis.localStorage; } catch { candidate = null; }
  }
  if (!candidate) {
    const memory = new Map();
    candidate = {
      getItem(name) { return memory.has(name) ? memory.get(name) : null; },
      setItem(name, value) { memory.set(name, String(value)); },
    };
  }
  return new QuestionReportStore({ storage: candidate, key });
}
