export const APP_STATE_VERSION = 1;
export const DEFAULT_STORAGE_KEY = 'power-toeic.app-state';

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

export function createDefaultAppState() {
  return {
    version: APP_STATE_VERSION,
    attempts: [],
    reviewEntries: [],
    progression: {
      points: 0,
      stage: 0
    }
  };
}

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function isAttempt(value) {
  return isPlainObject(value)
    && typeof value.questionId === 'string'
    && Number.isInteger(value.questionVersion)
    && typeof value.skillId === 'string'
    && Number.isInteger(value.selectedIndex)
    && Number.isInteger(value.correctIndex)
    && typeof value.correct === 'boolean'
    && Number.isFinite(value.responseMs)
    && value.responseMs >= 0;
}

function isReviewEntry(value) {
  return isPlainObject(value);
}

function isProgression(value) {
  return isPlainObject(value)
    && Number.isFinite(value.points)
    && value.points >= 0
    && Number.isInteger(value.stage)
    && value.stage >= 0;
}

export function validateAppState(value) {
  return isPlainObject(value)
    && value.version === APP_STATE_VERSION
    && Array.isArray(value.attempts)
    && value.attempts.every(isAttempt)
    && Array.isArray(value.reviewEntries)
    && value.reviewEntries.every(isReviewEntry)
    && isProgression(value.progression);
}

export class VersionedAppStore {
  constructor({ storage, key = DEFAULT_STORAGE_KEY } = {}) {
    if (!storage || typeof storage.getItem !== 'function' || typeof storage.setItem !== 'function') {
      throw new Error('storage must implement getItem/setItem');
    }
    this.storage = storage;
    this.key = key;
  }

  load() {
    let raw;
    try {
      raw = this.storage.getItem(this.key);
    } catch {
      return createDefaultAppState();
    }

    if (raw == null) return createDefaultAppState();

    try {
      const parsed = JSON.parse(raw);
      if (!validateAppState(parsed)) {
        this.#resetInvalidPayload();
        return createDefaultAppState();
      }
      return clone(parsed);
    } catch {
      this.#resetInvalidPayload();
      return createDefaultAppState();
    }
  }

  save(state) {
    if (!validateAppState(state)) throw new Error('invalid app state');
    const serialized = JSON.stringify(state);
    try {
      this.storage.setItem(this.key, serialized);
      return clone(state);
    } catch {
      return clone(state);
    }
  }

  appendAttempt(attempt) {
    if (!isAttempt(attempt)) throw new Error('invalid attempt');
    const current = this.load();
    const next = {
      ...current,
      attempts: [...current.attempts, clone(attempt)]
    };
    return this.save(next);
  }

  replaceReviewEntries(reviewEntries) {
    if (!Array.isArray(reviewEntries) || !reviewEntries.every(isReviewEntry)) {
      throw new Error('invalid review entries');
    }
    const current = this.load();
    return this.save({ ...current, reviewEntries: clone(reviewEntries) });
  }

  replaceProgression(progression) {
    if (!isProgression(progression)) throw new Error('invalid progression');
    const current = this.load();
    return this.save({ ...current, progression: clone(progression) });
  }

  #resetInvalidPayload() {
    try {
      if (typeof this.storage.removeItem === 'function') this.storage.removeItem(this.key);
    } catch {
      // Storage failures must never prevent the app from falling back to defaults.
    }
  }
}

export function createBrowserAppStore({ key = DEFAULT_STORAGE_KEY, storage } = {}) {
  let candidate = storage;
  if (!candidate) {
    try {
      candidate = globalThis.localStorage;
    } catch {
      candidate = null;
    }
  }

  if (!candidate) {
    const memory = new Map();
    candidate = {
      getItem(name) { return memory.has(name) ? memory.get(name) : null; },
      setItem(name, value) { memory.set(name, String(value)); },
      removeItem(name) { memory.delete(name); }
    };
  }

  return new VersionedAppStore({ storage: candidate, key });
}
