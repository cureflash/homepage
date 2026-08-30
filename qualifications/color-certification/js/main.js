import { QuizSession } from '../../../subjects/english/power-toeic/js/core/session.js';
import { createWorkoutRecipe, selectQuestionIds } from '../../../subjects/english/power-toeic/js/core/workout-builder.js';
import { InMemoryQuestionBank } from '../../../subjects/english/power-toeic/js/data/question-bank-adapter.js';
import { ColorChoiceRenderer } from './color-choice-renderer.js';

async function loadJson(url) {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Power Color data HTTP ${response.status}: ${url}`);
  return response.json();
}

const [colorMaster, payload] = await Promise.all([
  loadJson('./data/grade3-colors.json'),
  loadJson('./data/grade3-runtime.json')
]);

if (colorMaster.format !== 'power-color-grade3-color-master-v1') throw new Error('Unsupported Grade 3 color master');
if (payload.format !== 'power-color-grade3-runtime-v1') throw new Error('Unsupported Power Color runtime bank');
if (payload.questions.some((question) => question.validationStatus !== 'verified')) throw new Error('Runtime bank contains non-verified question');

const colors = new Map(colorMaster.colors.map((color) => [color.id, color]));
const repository = new InMemoryQuestionBank({ questions: payload.questions, skills: payload.skills });
const homeView = document.querySelector('[data-view="home"]');
const quizView = document.querySelector('[data-view="quiz"]');
const resultView = document.querySelector('[data-view="result"]');
const progressEl = document.querySelector('[data-role="progress"]');
const resultEl = document.querySelector('[data-role="result"]');
const nextButton = document.querySelector('[data-action="next"]');
document.querySelector('[data-role="notice"]').textContent = payload.notice;

const renderer = new ColorChoiceRenderer({
  promptEl: document.querySelector('[data-role="prompt"]'),
  choicesEl: document.querySelector('[data-role="choices"]'),
  explanationEl: document.querySelector('[data-role="explanation"]'),
  colors
});

let session = null;

function show(view) {
  homeView.hidden = view !== homeView;
  quizView.hidden = view !== quizView;
  resultView.hidden = view !== resultView;
}

function createRecipe(skillId) {
  const seed = Math.floor(Date.now() / 1000) % 100000;
  if (skillId === 'mixed') {
    return createWorkoutRecipe({
      mode: 'TEST',
      totalCount: Math.min(10, payload.questions.length),
      skillAllocations: [],
      seed
    });
  }
  const available = repository.listQuestions({ skillId }).length;
  return createWorkoutRecipe({
    mode: 'TRAINING',
    totalCount: Math.min(8, available),
    skillAllocations: [{ skillId, count: Math.min(8, available) }],
    seed
  });
}

function start(skillId) {
  const recipe = createRecipe(skillId);
  const questionIds = selectQuestionIds({ repository, recipe });
  session = new QuizSession({ questionIds, repository, context: recipe.mode === 'TEST' ? 'mixed' : 'training' });
  show(quizView);
  renderCurrent();
}

function renderCurrent() {
  const question = session.currentQuestion;
  if (!question) return finish();
  const { current, total } = session.progress;
  progressEl.textContent = `${current} / ${total}`;
  nextButton.hidden = true;
  renderer.render(question);
}

renderer.setAnswerHandler((selectedIndex) => {
  const question = session.currentQuestion;
  session.submitAnswer(selectedIndex);
  renderer.showResult({
    selectedIndex,
    correctIndex: question.correctIndex,
    explanation: question.explanation
  });
  nextButton.textContent = session.progress.current === session.progress.total ? '結果を見る' : '次の問題';
  nextButton.hidden = false;
});

nextButton.addEventListener('click', () => {
  session.next();
  renderCurrent();
});

function finish() {
  const result = session.getResults();
  resultEl.textContent = `${result.correct} / ${result.answered} 正解（${Math.round(result.accuracy * 100)}%）`;
  show(resultView);
}

document.querySelectorAll('[data-skill]').forEach((button) => {
  button.addEventListener('click', () => start(button.dataset.skill));
});
document.querySelector('[data-action="home"]').addEventListener('click', () => show(homeView));
show(homeView);
