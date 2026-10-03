import { createBrowserAppStore } from './core/persistence.js';
import { createBrowserQuestionReportStore } from './core/question-reports.js';
import { createCategoryWorkout } from './core/category-workouts.js';
import { WorkoutRun } from './core/workout-run.js';
import { loadRuntimeQuestionBank } from './data/runtime-bank.js?v=20261003-workout-flow';
import { playAnswerSound, playQuestionSound } from './quiz-sounds.js';
import { ClozeChoiceRenderer } from './renderers/cloze-choice.js';
import { CharacterPresenter } from './ui/character-presenter.js';
import { HomeView } from './ui/home.js';
import { getQuestionPresentation } from './ui/question-presentation.js';
import { QuestionReportUI } from './ui/question-report.js';
import { renderResults } from './ui/result.js';
import { WorkoutEditor } from './ui/workout-editor.js';

const { repository, runtimeInfo } = await loadRuntimeQuestionBank();
const appStore = createBrowserAppStore();
const reportStore = createBrowserQuestionReportStore();
const skillLabels = new Map(repository.listSkills().map((skill) => [skill.id, skill.label]));
const homeView = document.querySelector('[data-view="home"]');
const editorView = document.querySelector('[data-view="workout-editor"]');
const quizView = document.querySelector('[data-view="quiz"]');
const resultView = document.querySelector('[data-view="result"]');
const progressEl = document.querySelector('[data-role="progress"]');
const feedbackEl = document.querySelector('[data-role="feedback"]');
const contextEl = document.querySelector('[data-role="question-context"]');
const traineeStatusEl = document.querySelector('[data-role="trainee-status"]');
const bankStatusEl = document.querySelector('[data-role="bank-status"]');
const nextButton = document.querySelector('[data-action="next"]');
const endButton = document.querySelector('[data-action="end-workout"]');
const reportButton = document.querySelector('[data-action="report-question"]');
const renderer = new ClozeChoiceRenderer({
  sentenceEl: document.querySelector('[data-role="sentence"]'),
  choicesEl: document.querySelector('[data-role="choices"]'),
  explanationEl: document.querySelector('[data-role="explanation"]'),
});
const characters = new CharacterPresenter({
  sergeantEl: document.querySelector('[data-role="sergeant-character"]'),
  traineeEl: document.querySelector('[data-role="trainee-character"]'),
});
const questionReporter = new QuestionReportUI({ container: document.querySelector('[data-role="question-report"]'), store: reportStore });
const defaultRecipe = createCategoryWorkout({
  repository, categoryIds: repository.listCategories().map((category) => category.id), mode: 'CUSTOM',
});
let run;
let activeRecipe = defaultRecipe;
const editor = new WorkoutEditor({ container: editorView, repository, onStart: startSession });
const home = new HomeView({ container: homeView, repository, appStore, onStart: startSession, onEdit: (recipe = defaultRecipe) => showEditor(recipe) });

if (bankStatusEl) {
  bankStatusEl.textContent = runtimeInfo.source === 'beta_verified_bank'
    ? `30問パイロット / ${runtimeInfo.skillCount}分野`
    : `問題DB読込失敗: ${runtimeInfo.questionCount}問の動作確認用問題で動作中`;
  bankStatusEl.dataset.source = runtimeInfo.source;
}

function hideViews() { [homeView, editorView, quizView, resultView].forEach((view) => { view.hidden = true; }); }
function currentProgression() { return appStore.load().progression; }
function showHome(message = '') {
  questionReporter.close();
  hideViews();
  homeView.hidden = false;
  progressEl.textContent = 'HOME';
  home.render();
  const notice = homeView.querySelector('[data-role="home-notice"]');
  notice.textContent = message;
  notice.hidden = !message;
}
function showEditor(recipe = activeRecipe) {
  activeRecipe = recipe;
  questionReporter.close();
  hideViews();
  editorView.hidden = false;
  progressEl.textContent = '設定';
  editor.open(recipe);
}
function startSession(recipe) {
  try {
    run = new WorkoutRun({ repository, appStore, recipe });
  } catch (error) { showHome(error.message); return; }
  activeRecipe = recipe;
  hideViews();
  quizView.hidden = false;
  endButton.hidden = !recipe.endless;
  renderCurrent();
}
function renderCurrent() {
  questionReporter.close();
  const question = run.currentQuestion;
  if (!question) { finishSession(); return; }
  const { current, total } = run.progress;
  const progression = currentProgression();
  progressEl.textContent = total === null ? `${current}問目・無限` : `${current} / ${total}`;
  contextEl.textContent = getQuestionPresentation({ recipe: activeRecipe, question, skillLabels }).contextText;
  feedbackEl.textContent = '軍曹「この一問を仕上げろ！」';
  traineeStatusEl.textContent = `訓練生ステージ ${progression.stage} ・ ${progression.points} POWER`;
  characters.render({ traineeStage: progression.stage, reaction: 'neutral' });
  nextButton.hidden = true;
  renderer.render(question);
  playQuestionSound();
}
renderer.setAnswerHandler((selectedIndex) => {
  const question = run.currentQuestion;
  const { attempt, progression } = run.submitAnswer(selectedIndex);
  renderer.showResult({ selectedIndex, correctIndex: question.correctIndex, explanation: question.explanation });
  playAnswerSound(attempt.correct);
  characters.render({ traineeStage: progression.stage, reaction: attempt.correct ? 'correct' : 'wrong' });
  traineeStatusEl.textContent = progression.earned > 0
    ? `+${progression.earned} POWER ・ ステージ ${progression.stage}`
    : `ステージ ${progression.stage} ・ ${progression.points} POWER`;
  feedbackEl.textContent = attempt.correct ? '軍曹「よし、その調子だ！」' : '軍曹「違う。理由を確認して次だ！」';
  nextButton.textContent = !activeRecipe.endless && run.progress.current === run.progress.total ? '結果を見る' : '次の問題';
  nextButton.hidden = false;
});
nextButton.addEventListener('click', () => { if (run.next()) renderCurrent(); else finishSession(); });
endButton.addEventListener('click', finishSession);
document.querySelector('[data-action="home"]').addEventListener('click', () => showHome());
reportButton.addEventListener('click', () => { if (run?.currentQuestion) questionReporter.open(run.currentQuestion); });
resultView.addEventListener('click', (event) => {
  if (event.target.closest('[data-action="restart"]')) startSession(activeRecipe);
  if (event.target.closest('[data-action="edit-workout"]')) showEditor();
});
function finishSession() {
  questionReporter.close();
  const results = run.finish();
  characters.render({ traineeStage: currentProgression().stage, reaction: 'complete' });
  hideViews();
  resultView.hidden = false;
  renderResults(resultView, results, skillLabels);
  const edit = document.createElement('button');
  edit.type = 'button';
  edit.className = 'secondary-button';
  edit.dataset.action = 'edit-workout';
  edit.textContent = '内容を調整';
  resultView.querySelector('.result-actions').append(edit);
}
showHome();
