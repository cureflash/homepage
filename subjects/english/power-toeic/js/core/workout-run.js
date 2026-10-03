import { QuizSession } from './session.js';
import { selectQuestionIds } from './workout-builder.js';
import { createEndlessChunk } from './session-planner.js';
import { createReviewEntryFromAttempt, getDueReviewQuestionIds, upsertReviewEntry } from './review.js';
import { applyProgressionEvent, progressionEventFromAttempt } from './progression.js';

// Coordinates the existing selector, quiz, and persistence; each endless chunk stays bounded.
export class WorkoutRun {
  constructor({ repository, appStore, recipe, now = () => Date.now() }) {
    this.repository = repository;
    this.appStore = appStore;
    this.recipe = recipe;
    this.now = now;
    this.chunkIndex = 0;
    this.completedQuestions = 0;
    this.finished = false;
    this.totals = { answered: 0, correct: 0, bySkill: {} };
    this.startChunk();
  }

  startChunk() {
    const state = this.appStore.load();
    const reviewQuestionIds = getDueReviewQuestionIds(state.reviewEntries, new Date(this.now()).toISOString());
    const inputs = { repository: this.repository, recipe: this.recipe, attempts: state.attempts, reviewQuestionIds };
    const ids = this.recipe.endless
      ? createEndlessChunk({ ...inputs, chunkIndex: this.chunkIndex }).questionIds
      : selectQuestionIds(inputs);
    if (!ids.length) throw new Error(this.recipe.mode === 'REVIEW' ? '今は復習する問題がありません。' : '選んだ範囲に出題できる問題がありません。');
    this.session = new QuizSession({
      questionIds: ids, repository: this.repository, now: this.now,
      context: this.recipe.mode === 'TEST' ? 'mixed' : this.recipe.mode === 'REVIEW' ? 'review' : 'training',
    });
  }

  get currentQuestion() { return this.session.currentQuestion; }
  get progress() {
    const { current, total } = this.session.progress;
    return { current: current + this.completedQuestions, total: this.recipe.endless ? null : total };
  }

  submitAnswer(index) {
    if (this.finished) throw new Error('workout is finished');
    const before = this.appStore.load();
    const attempt = this.session.submitAnswer(index);
    const previous = before.reviewEntries.find((entry) => entry.questionId === attempt.questionId) ?? null;
    this.appStore.appendAttempt(attempt);
    this.appStore.replaceReviewEntries(upsertReviewEntry(before.reviewEntries, createReviewEntryFromAttempt(attempt, previous)));
    const progression = applyProgressionEvent(before.progression, progressionEventFromAttempt(attempt, before.attempts));
    this.appStore.replaceProgression({ points: progression.points, stage: progression.stage });
    this.totals.answered += 1;
    if (attempt.correct) this.totals.correct += 1;
    const bucket = this.totals.bySkill[attempt.skillId] ??= { answered: 0, correct: 0 };
    bucket.answered += 1;
    if (attempt.correct) bucket.correct += 1;
    return { attempt, progression };
  }

  next() {
    if (this.finished) return false;
    this.session.next();
    if (!this.session.isComplete) return true;
    if (!this.recipe.endless) { this.finish(); return false; }
    this.completedQuestions += this.session.questionIds.length;
    this.chunkIndex += 1;
    this.startChunk();
    return true;
  }

  finish() {
    if (!this.finished) {
      const progression = applyProgressionEvent(this.appStore.load().progression, { type: 'session_complete', questionCount: this.totals.answered });
      this.appStore.replaceProgression({ points: progression.points, stage: progression.stage });
      this.finished = true;
    }
    return this.results();
  }

  results() {
    return { ...this.totals, accuracy: this.totals.answered ? this.totals.correct / this.totals.answered : 0 };
  }
}
