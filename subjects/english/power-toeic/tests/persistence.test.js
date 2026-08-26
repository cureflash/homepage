import test from 'node:test';
import assert from 'node:assert/strict';
import {
  APP_STATE_VERSION,
  VersionedAppStore,
  createDefaultAppState
} from '../js/core/persistence.js';

class FakeStorage {
  constructor(initial = {}) {
    this.values = new Map(Object.entries(initial));
  }
  getItem(key) { return this.values.has(key) ? this.values.get(key) : null; }
  setItem(key, value) { this.values.set(key, String(value)); }
  removeItem(key) { this.values.delete(key); }
}

const attempt = Object.freeze({
  questionId: 'fixture-001',
  questionVersion: 1,
  skillId: 'fixture.skill',
  selectedIndex: 2,
  correctIndex: 2,
  correct: true,
  responseMs: 875
});

test('empty storage returns a versioned default root', () => {
  const store = new VersionedAppStore({ storage: new FakeStorage() });
  assert.deepEqual(store.load(), createDefaultAppState());
  assert.equal(store.load().version, APP_STATE_VERSION);
});

test('attempts, review entries and progression survive reload', () => {
  const storage = new FakeStorage();
  const store = new VersionedAppStore({ storage });
  store.appendAttempt(attempt);
  store.replaceReviewEntries([{ questionId: 'fixture-001', dueAt: '2026-08-27T00:00:00.000Z' }]);
  store.replaceProgression({ points: 12, stage: 1 });

  const reloaded = new VersionedAppStore({ storage }).load();
  assert.deepEqual(reloaded.attempts, [attempt]);
  assert.deepEqual(reloaded.reviewEntries, [{ questionId: 'fixture-001', dueAt: '2026-08-27T00:00:00.000Z' }]);
  assert.deepEqual(reloaded.progression, { points: 12, stage: 1 });
});

test('corrupted JSON resets safely to defaults', () => {
  const storage = new FakeStorage({ 'power-toeic.app-state': '{broken' });
  const store = new VersionedAppStore({ storage });
  assert.deepEqual(store.load(), createDefaultAppState());
  assert.equal(storage.getItem('power-toeic.app-state'), null);
});

test('unsupported versions reset deterministically instead of guessing a migration', () => {
  const storage = new FakeStorage({
    'power-toeic.app-state': JSON.stringify({
      version: 999,
      attempts: [],
      reviewEntries: [],
      progression: { points: 0, stage: 0 }
    })
  });
  const store = new VersionedAppStore({ storage });
  assert.deepEqual(store.load(), createDefaultAppState());
  assert.equal(storage.getItem('power-toeic.app-state'), null);
});

test('storage API failures do not prevent safe reads or writes', () => {
  const storage = {
    getItem() { throw new Error('blocked'); },
    setItem() { throw new Error('blocked'); },
    removeItem() { throw new Error('blocked'); }
  };
  const store = new VersionedAppStore({ storage });
  assert.deepEqual(store.load(), createDefaultAppState());
  assert.doesNotThrow(() => store.save(createDefaultAppState()));
});
