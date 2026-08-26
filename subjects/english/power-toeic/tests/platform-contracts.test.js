import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateAttemptRecord,
  validateMasterySnapshotRecord,
  validateProgressionStateRecord,
  validateQuestionRecord,
  validateQuestionReportRecord,
  validateReviewEntryRecord,
  validateSemanticAssetId,
  validateSkillRecord,
  validateWorkoutRecipeRecord,
} from '../js/data/platform-contracts.js';

const NOW = '2026-08-27T00:00:00.000Z';

test('accepts representative Web V1 platform-neutral records', () => {
  assert.equal(validateSkillRecord({ id: 'p5.pos.adverb', label: '副詞', categoryId: 'p5.pos' }), true);
  assert.equal(validateQuestionRecord({
    id: 'q-1', version: 1, skillId: 'p5.pos.adverb', categoryId: 'p5.pos',
    sentence: 'The machine operates _____.',
    choices: ['efficient', 'efficiency', 'efficiently', 'efficiencies'],
    correctIndex: 2, explanation: 'The verb requires an adverb.',
  }), true);
  assert.equal(validateWorkoutRecipeRecord({
    mode: 'POWER', totalCount: 100,
    skillAllocations: [{ skillId: 'p5.pos.adverb', count: 100 }],
    selectionPolicy: 'standard', labelPolicy: 'show_skill', seed: 1, endless: false,
  }), true);
  assert.equal(validateAttemptRecord({
    questionId: 'q-1', questionVersion: 1, skillId: 'p5.pos.adverb',
    selectedIndex: 2, correctIndex: 2, correct: true, responseMs: 1234,
    answeredAt: NOW, context: 'training',
  }), true);
  assert.equal(validateMasterySnapshotRecord({
    skillId: 'p5.pos.adverb', state: 'training', attempts: 4, correct: 3, accuracy: 0.75,
    recentAttempts: 4, recentCorrect: 3, recentAccuracy: 0.75,
    mixed: { attempts: 0, correct: 0, accuracy: 0 },
    review: { attempts: 0, correct: 0, accuracy: 0 },
  }), true);
  assert.equal(validateReviewEntryRecord({
    questionId: 'q-1', questionVersion: 1, skillId: 'p5.pos.adverb',
    dueAt: '2026-08-28T00:00:00.000Z', intervalIndex: 0, status: 'scheduled', lastAttemptAt: NOW,
  }), true);
  assert.equal(validateProgressionStateRecord({ points: 42, stage: 2 }), true);
  assert.equal(validateQuestionReportRecord({
    id: `q-1@1:${NOW}`, questionId: 'q-1', questionVersion: 1,
    reason: 'ambiguous', detail: '', createdAt: NOW,
  }), true);
  assert.equal(validateSemanticAssetId('sergeant.neutral'), true);
  assert.equal(validateSemanticAssetId('trainee.stage_5.complete'), true);
  assert.equal(validateSemanticAssetId('audio.correct'), true);
});

test('rejects shapes that would create Web/Swift semantic drift', () => {
  assert.throws(() => validateQuestionRecord({
    id: 'q-1', version: 1, skillId: 's', categoryId: 'c', sentence: 'x',
    choices: ['a', 'b', 'c', 'c'], correctIndex: 2, explanation: 'x',
  }), /distinct/);
  assert.throws(() => validateWorkoutRecipeRecord({
    mode: 'TEST', totalCount: 30, skillAllocations: [], selectionPolicy: 'standard',
    labelPolicy: 'hide_skill', seed: -1, endless: false,
  }), /seed/);
  assert.throws(() => validateAttemptRecord({
    questionId: 'q', questionVersion: 1, skillId: 's', selectedIndex: 4, correctIndex: 0,
    correct: false, responseMs: 0, answeredAt: NOW, context: 'training',
  }), /indexes/);
  assert.throws(() => validateMasterySnapshotRecord({
    skillId: 's', state: 'master-ish', attempts: 0, correct: 0, accuracy: 0,
    recentAttempts: 0, recentCorrect: 0, recentAccuracy: 0,
    mixed: { attempts: 0, correct: 0, accuracy: 0 }, review: { attempts: 0, correct: 0, accuracy: 0 },
  }), /state/);
  assert.throws(() => validateReviewEntryRecord({
    questionId: 'q', questionVersion: 1, skillId: 's', dueAt: NOW,
    intervalIndex: 0, status: 'done', lastAttemptAt: NOW,
  }), /scheduled/);
  assert.throws(() => validateProgressionStateRecord({ points: 1, stage: 6 }), /0\.\.\.5/);
  assert.throws(() => validateQuestionReportRecord({
    id: 'r', questionId: 'q', questionVersion: 1, reason: 'typo', detail: '', createdAt: NOW,
  }), /reason/);
  assert.throws(() => validateSemanticAssetId('https://example.com/image.png'), /namespace/);
});
