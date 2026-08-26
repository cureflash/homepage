import { createBrowserAppStore } from './core/persistence.js';
import { applyProgressionEvent, progressionEventFromAttempt } from './core/progression.js';
import { createBrowserQuestionReportStore } from './core/question-reports.js';
import { createReviewEntryFromAttempt, getDueReviewQuestionIds, upsertReviewEntry } from './core/review.js';
import { QuizSession } from './core/session.js';
import { createWorkoutRecipe, selectQuestionIds } from './core/workout-builder.js';
import { InMemoryQuestionBank } from './data/question-bank-adapter.js';
import { demoQuestions, demoSkills } from './data/fixtures.js';
import { ClozeChoiceRenderer } from './renderers/cloze-choice.js';
import { CharacterPresenter } from './ui/character-presenter.js';
import { getQuestionPresentation } from './ui/question-presentation.js';
import { QuestionReportUI } from './ui/question-report.js';
import { renderResults } from './ui/result.js';
import { WorkoutEditor } from './ui/workout-editor.js';

const repository = new InMemoryQuestionBank({ questions: demoQuestions, skills: demoSkills });
const appStore = createBrowserAppStore();
const reportStore = createBrowserQuestionReportStore();
const skillLabels = new Map(repository.listSkills().map((skill) => [skill.id, skill.label]));

const editorView = document.querySelector('[data-view="workout-editor"]');
const quizView = document.querySelector('[data-view="quiz"]');
const resultView = document.querySelector('[data-view="result"]');
const progressEl = document.querySelector('[data-role="progress"]');
const feedbackEl = document.querySelector('[data-role="feedback"]');
const contextEl = document.querySelector('[data-role="question-context"]');
const traineeStatusEl = document.querySelector('[data-role="trainee-status"]');
const nextButton = document.querySelector('[data-action="next"]');
const reportButton = document.querySelector('[data-action="report-question"]');

const renderer = new ClozeChoiceRenderer({
  sentenceEl: document.querySelector('[data-role="sentence"]'),
  choicesEl: document.querySelector('[data-role="choices"]'),
  explanationEl: document.querySelector('[data-role="explanation"]')
});

const characters = new CharacterPresenter({
  sergeantEl: document.querySelector('[data-role="sergeant-character"]'),
  traineeEl: document.querySelector('[data-role="trainee-character"]'),
});

const questionReporter = new QuestionReportUI({
  container: document.querySelector('[data-role="question-report"]'),
  store: reportStore,
});

let session;
let activeRecipe;
let sessionCompletionAwarded = false;

const defaultRecipe = createWorkoutRecipe({
  mode: 'CUSTOM',
  totalCount: 3,
  skillAllocations: [
    { skillId: 'fixture.pos-adverb', count: 2 },
    { skillId: 'fixture.verb-tense', count: 1 },
  ],
  seed: 1,
});

const editor = new WorkoutEditor({ container: editorView, repository, onStart: (recipe) => startSession(recipe) });

function sessionContextForRecipe(recipe) {
  if (recipe.mode === 'TEST') return 'mixed';
  if (recipe.mode === 'REVIEW') return 'review';
  return 'training';
}

function currentProgression() { return appStore.load().progression; }
function currentTraineeStage() { return Math.min(5, Math.max(0, Number(currentProgression().stage) || 0)); }

function saveProgressionEvent(event) {
  const next = applyProgressionEvent(currentProgression(), event);
  appStore.replaceProgression({ points: next.points, stage: next.stage });
  return next;
}

function showEditor(recipe = activeRecipe ?? defaultRecipe) {
  activeRecipe = recipe;
  questionReporter.close();
  quizView.hidden = true;
  resultView.hidden = true;
  editorView.hidden = false;
  progressEl.textContent = '設定';
  editor.open(recipe);
}

function startSession(recipe) {
  const state = appStore.load();
  const reviewQuestionIds = recipe.mode === 'REVIEW' ? getDueReviewQuestionIds(state.reviewEntries) : [];
  const questionIds = selectQuestionIds({ repository, recipe, attempts: state.attempts, reviewQuestionIds });
  if (!questionIds.length) return showEditor(recipe);
  activeRecipe = recipe;
  sessionCompletionAwarded = false;
  session = new QuizSession({ questionIds, repository, context: sessionContextForRecipe(recipe) });
  editorView.hidden = true;
  resultView.hidden = true;
  quizView.hidden = false;
  renderCurrent();
}

function renderCurrent() {
  questionReporter.close();
  const question = session.currentQuestion;
  if (!question) return finishSession();
  const { current, total } = session.progress;
  const stage = currentTraineeStage();
  const presentation = getQuestionPresentation({ recipe: activeRecipe, question, skillLabels });
  progressEl.textContent = `${current} / ${total}`;
  contextEl.textContent = presentation.contextText;
  feedbackEl.textContent = '軍曹「この一問を仕上げろ！」';
  traineeStatusEl.textContent = `訓練生ステージ ${stage} ・ ${currentProgression().points} POWER`;
  characters.render({ traineeStage: stage, reaction: 'neutral' });
  nextButton.hidden = true;
  renderer.render(question);
}

reportButton.addEventListener('click', () => {
  if (session?.currentQuestion) questionReporter.open(session.currentQuestion);
});

renderer.setAnswerHandler((selectedIndex) => {
  const question = session.currentQuestion;
  const beforeState = appStore.load();
  const attempt = session.submitAnswer(selectedIndex);
  const previousReview = beforeState.reviewEntries.find((entry) => entry.questionId === attempt.questionId) ?? null;
  const nextReview = createReviewEntryFromAttempt(attempt, previousReview);
  appStore.appendAttempt(attempt);
  appStore.replaceReviewEntries(upsertReviewEntry(beforeState.reviewEntries, nextReview));
  const progression = saveProgressionEvent(progressionEventFromAttempt(attempt, beforeState.attempts));
  renderer.showResult({ selectedIndex, correctIndex: question.correctIndex, explanation: question.explanation });
  const reaction = attempt.correct ? 'correct' : 'wrong';
  characters.render({ traineeStage: progression.stage, reaction });
  traineeStatusEl.textContent = progression.earned > 0
    ? `+${progression.earned} POWER ・ ステージ ${progression.stage}`
    : `ステージ ${progression.stage} ・ ${progression.points} POWER`;
  feedbackEl.textContent = attempt.correct ? '軍曹「よし、その調子だ！」' : '軍曹「違う。理由を確認して次だ！」';
  nextButton.textContent = session.progress.current === session.progress.total ? '結果を見る' : '次の問題';
  nextButton.hidden = false;
});

nextButton.addEventListener('click', () => { session.next(); renderCurrent(); });

resultView.addEventListener('click', (event) => {
  if (event.target.closest('[data-action="restart"]')) startSession(activeRecipe ?? defaultRecipe);
  if (event.target.closest('[data-action="edit-workout"]')) showEditor(activeRecipe ?? defaultRecipe);
});

function finishSession() {
  questionReporter.close();
  if (!sessionCompletionAwarded) {
    saveProgressionEvent({ type: 'session_complete', questionCount: session.attempts.length });
    sessionCompletionAwarded = true;
  }
  characters.render({ traineeStage: currentTraineeStage(), reaction: 'complete' });
  quizView.hidden = true;
  resultView.hidden = false;
  renderResults(resultView, session.getResults(), skillLabels);
  const controls = resultView.querySelector('.result-actions');
  if (controls && !controls.querySelector('[data-action="edit-workout"]')) {
    const edit = document.createElement('button');
    edit.type = 'button';
    edit.className = 'secondary-button';
    edit.dataset.action = 'edit-workout';
    edit.textContent = '内容を調整';
    controls.append(edit);
  }
}

showEditor(defaultRecipe);
