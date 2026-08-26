import { createBrowserAppStore } from './core/persistence.js';
import { QuizSession } from './core/session.js';
import { createWorkoutRecipe, selectQuestionIds } from './core/workout-builder.js';
import { InMemoryQuestionBank } from './data/question-bank-adapter.js';
import { demoQuestions, demoSkills } from './data/fixtures.js';
import { ClozeChoiceRenderer } from './renderers/cloze-choice.js';
import { getQuestionPresentation } from './ui/question-presentation.js';
import { renderResults } from './ui/result.js';
import { WorkoutEditor } from './ui/workout-editor.js';

const repository = new InMemoryQuestionBank({ questions: demoQuestions, skills: demoSkills });
const appStore = createBrowserAppStore();
const skillLabels = new Map(repository.listSkills().map((skill) => [skill.id, skill.label]));

const editorView = document.querySelector('[data-view="workout-editor"]');
const quizView = document.querySelector('[data-view="quiz"]');
const resultView = document.querySelector('[data-view="result"]');
const progressEl = document.querySelector('[data-role="progress"]');
const feedbackEl = document.querySelector('[data-role="feedback"]');
const contextEl = document.querySelector('[data-role="question-context"]');
const nextButton = document.querySelector('[data-action="next"]');

const renderer = new ClozeChoiceRenderer({
  sentenceEl: document.querySelector('[data-role="sentence"]'),
  choicesEl: document.querySelector('[data-role="choices"]'),
  explanationEl: document.querySelector('[data-role="explanation"]')
});

let session;
let activeRecipe;

const defaultRecipe = createWorkoutRecipe({
  mode: 'CUSTOM',
  totalCount: 3,
  skillAllocations: [
    { skillId: 'fixture.pos-adverb', count: 2 },
    { skillId: 'fixture.verb-tense', count: 1 },
  ],
  seed: 1,
});

const editor = new WorkoutEditor({
  container: editorView,
  repository,
  onStart: (recipe) => startSession(recipe),
});

function showEditor(recipe = activeRecipe ?? defaultRecipe) {
  activeRecipe = recipe;
  quizView.hidden = true;
  resultView.hidden = true;
  editorView.hidden = false;
  progressEl.textContent = '設定';
  editor.open(recipe);
}

function startSession(recipe) {
  const attempts = appStore.load().attempts;
  const questionIds = selectQuestionIds({ repository, recipe, attempts });
  if (!questionIds.length) {
    showEditor(recipe);
    return;
  }
  activeRecipe = recipe;
  session = new QuizSession({ questionIds, repository });
  editorView.hidden = true;
  resultView.hidden = true;
  quizView.hidden = false;
  renderCurrent();
}

function renderCurrent() {
  const question = session.currentQuestion;
  if (!question) return finishSession();
  const { current, total } = session.progress;
  const presentation = getQuestionPresentation({ recipe: activeRecipe, question, skillLabels });
  progressEl.textContent = `${current} / ${total}`;
  contextEl.textContent = presentation.contextText;
  feedbackEl.textContent = '軍曹「この一問を仕上げろ！」';
  nextButton.hidden = true;
  renderer.render(question);
}

renderer.setAnswerHandler((selectedIndex) => {
  const question = session.currentQuestion;
  const attempt = session.submitAnswer(selectedIndex);
  appStore.appendAttempt(attempt);
  renderer.showResult({ selectedIndex, correctIndex: question.correctIndex, explanation: question.explanation });
  feedbackEl.textContent = attempt.correct ? '軍曹「よし、その調子だ！」' : '軍曹「違う。理由を確認して次だ！」';
  nextButton.textContent = session.progress.current === session.progress.total ? '結果を見る' : '次の問題';
  nextButton.hidden = false;
});

nextButton.addEventListener('click', () => {
  session.next();
  renderCurrent();
});

resultView.addEventListener('click', (event) => {
  if (event.target.closest('[data-action="restart"]')) startSession(activeRecipe ?? defaultRecipe);
  if (event.target.closest('[data-action="edit-workout"]')) showEditor(activeRecipe ?? defaultRecipe);
});

function finishSession() {
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
