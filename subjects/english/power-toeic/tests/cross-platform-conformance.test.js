import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { InMemoryQuestionBank } from '../js/data/question-bank-adapter.js';
import { createWorkoutRecipe, selectQuestionIds } from '../js/core/workout-builder.js';
import { QuizSession } from '../js/core/session.js';
import { buildMasterySnapshot } from '../js/core/mastery.js';
import { createReviewEntryFromAttempt, getDueReviewQuestionIds } from '../js/core/review.js';
import { applyProgressionEvent } from '../js/core/progression.js';
import { createQuestionReport } from '../js/core/question-reports.js';

const fixture = JSON.parse(readFileSync(new URL('./fixtures/cross-platform-conformance-v1.json', import.meta.url), 'utf8'));
const repository = new InMemoryQuestionBank({ questions: fixture.questions, skills: fixture.skills });

test('cross-platform fixture: seeded question selection is exact', () => {
  const recipe = createWorkoutRecipe(fixture.selection.recipe);
  const actual = selectQuestionIds({ repository, recipe, attempts: fixture.selection.attempts });
  assert.deepEqual([...actual], fixture.selection.expectedQuestionIds);
});

test('cross-platform fixture: QuizSession attempts and results are exact', () => {
  const clock = [...fixture.session.clockMs];
  const session = new QuizSession({
    questionIds: fixture.session.questionIds,
    repository,
    context: fixture.session.context,
    now: () => {
      if (!clock.length) throw new Error('fixture clock exhausted');
      return clock.shift();
    },
  });

  const attempts = [];
  fixture.session.selectedIndexes.forEach((selectedIndex, index) => {
    attempts.push(session.submitAnswer(selectedIndex));
    if (index < fixture.session.selectedIndexes.length - 1) session.next();
  });

  assert.deepEqual(attempts, fixture.session.expectedAttempts);
  assert.deepEqual(session.getResults(), fixture.session.expectedResults);
});

test('cross-platform fixture: mastery snapshots are exact', () => {
  for (const scenario of fixture.mastery.cases) {
    assert.deepEqual(
      buildMasterySnapshot(scenario.skillId, scenario.attempts),
      scenario.expected,
      scenario.name,
    );
  }
});

test('cross-platform fixture: review schedule and due IDs are exact', () => {
  const initial = createReviewEntryFromAttempt(fixture.review.initialAttempt);
  assert.deepEqual(initial, fixture.review.expectedInitialEntry);

  const advanced = createReviewEntryFromAttempt(
    fixture.review.successfulReviewAttempt,
    initial,
  );
  assert.deepEqual(advanced, fixture.review.expectedAdvancedEntry);
  assert.deepEqual(
    [...getDueReviewQuestionIds([advanced], fixture.review.dueAt)],
    fixture.review.expectedDueQuestionIds,
  );
});

test('cross-platform fixture: progression states are exact', () => {
  let state = fixture.progression.initialState;
  fixture.progression.events.forEach((event, index) => {
    state = applyProgressionEvent(state, event);
    assert.deepEqual(state, fixture.progression.expectedStates[index]);
  });
});

test('cross-platform fixture: question report serialization is exact', () => {
  assert.deepEqual(createQuestionReport(fixture.questionReport.input), fixture.questionReport.expected);
});
