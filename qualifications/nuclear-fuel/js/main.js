import { QuizSession } from '../../../subjects/english/power-toeic/js/core/session.js';
import { createWorkoutRecipe, selectQuestionIds } from '../../../subjects/english/power-toeic/js/core/workout-builder.js';
import { InMemoryQuestionBank } from '../../../subjects/english/power-toeic/js/data/question-bank-adapter.js';
import { ColorChoiceRenderer } from '../../color-certification/js/color-choice-renderer.js?v=20260904-answer-feedback-v1';
import { loadRuntimeQuestionBank } from './question-source.js?v=20260912-v1';

const homeView = document.querySelector('[data-view="home"]');
const quizView = document.querySelector('[data-view="quiz"]');
const resultView = document.querySelector('[data-view="result"]');
const skillsEl = document.querySelector('[data-role="skills"]');
const bankStatusEl = document.querySelector('[data-role="bank-status"]');
const loadErrorEl = document.querySelector('[data-role="load-error"]');
const progressEl = document.querySelector('[data-role="progress"]');
const resultEl = document.querySelector('[data-role="result"]');
const nextButton = document.querySelector('[data-action="next"]');
const mixedButton = document.querySelector('[data-skill="mixed"]');
const explanationEl = document.querySelector('[data-role="explanation"]');

const renderer = new ColorChoiceRenderer({
  promptEl: document.querySelector('[data-role="prompt"]'),
  choicesEl: document.querySelector('[data-role="choices"]'),
  explanationEl,
  colors: new Map(),
});

let payload = null;
let repository = null;
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
      seed,
    });
  }
  const available = repository.listQuestions({ skillId }).length;
  return createWorkoutRecipe({
    mode: 'TRAINING',
    totalCount: Math.min(8, available),
    skillAllocations: [{ skillId, count: Math.min(8, available) }],
    seed,
  });
}

function start(skillId) {
  if (!repository) return;
  const recipe = createRecipe(skillId);
  const questionIds = selectQuestionIds({ repository, recipe });
  session = new QuizSession({
    questionIds,
    repository,
    context: recipe.mode === 'TEST' ? 'mixed' : 'training',
  });
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

function appendAnswerDetails(question) {
  const card = explanationEl.querySelector('.answer-card');
  if (!card) return;
  if (question.explanation) {
    const detail = document.createElement('p');
    detail.className = 'answer-detail';
    detail.textContent = question.explanation;
    card.append(detail);
  }
  if (question.sourceUrls?.length) {
    const list = document.createElement('ul');
    list.className = 'answer-sources';
    for (const [index, url] of question.sourceUrls.entries()) {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = question.sourceUrls.length === 1 ? '出典' : `出典 ${index + 1}`;
      item.append(link);
      list.append(item);
    }
    card.append(list);
  }
}

renderer.setAnswerHandler((selectedIndex) => {
  const question = session.currentQuestion;
  session.submitAnswer(selectedIndex);
  renderer.showResult({
    question,
    selectedIndex,
    correctIndex: question.correctIndex,
  });
  appendAnswerDetails(question);
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

function renderSkillButtons() {
  skillsEl.replaceChildren();
  for (const skill of payload.skills) {
    const count = repository.listQuestions({ skillId: skill.id }).length;
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.skill = skill.id;
    button.textContent = `${skill.label}（${count}問）`;
    button.addEventListener('click', () => start(skill.id));
    skillsEl.append(button);
  }
  mixedButton.disabled = payload.questions.length === 0;
  mixedButton.addEventListener('click', () => start('mixed'));
}

async function boot() {
  try {
    payload = await loadRuntimeQuestionBank();
    if (payload.questions.some((question) => question.validationStatus !== 'verified')) {
      throw new Error('Runtime bank contains non-verified source question');
    }
    repository = new InMemoryQuestionBank({ questions: payload.questions, skills: payload.skills });
    renderSkillButtons();
    bankStatusEl.textContent = `検証済み ${payload.questions.length}問 / ${payload.skills.length}分野。完了topicはGitHubのMDから自動反映されます。`;
    loadErrorEl.hidden = true;
  } catch (error) {
    mixedButton.disabled = true;
    bankStatusEl.textContent = '問題データを読み込めませんでした。';
    loadErrorEl.textContent = error instanceof Error ? error.message : String(error);
    loadErrorEl.hidden = false;
  }
}

document.querySelector('[data-action="home"]').addEventListener('click', () => show(homeView));
show(homeView);
await boot();
