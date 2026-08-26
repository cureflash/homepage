import { QuizSession } from './core/session.js';
import { InMemoryQuestionBank } from './data/question-bank-adapter.js';
import { demoQuestions, demoSkills } from './data/fixtures.js';
import { ClozeChoiceRenderer } from './renderers/cloze-choice.js';
import { renderResults } from './ui/result.js';

const repository = new InMemoryQuestionBank({ questions: demoQuestions, skills: demoSkills });
const skillLabels = new Map(repository.listSkills().map((skill) => [skill.id, skill.label]));

const quizView = document.querySelector('[data-view="quiz"]');
const resultView = document.querySelector('[data-view="result"]');
const progressEl = document.querySelector('[data-role="progress"]');
const feedbackEl = document.querySelector('[data-role="feedback"]');
const nextButton = document.querySelector('[data-action="next"]');

const renderer = new ClozeChoiceRenderer({
  sentenceEl: document.querySelector('[data-role="sentence"]'),
  choicesEl: document.querySelector('[data-role="choices"]'),
  explanationEl: document.querySelector('[data-role="explanation"]')
});

let session;

function startSession() {
  session = new QuizSession({ questionIds: repository.listQuestions().map((question) => question.id), repository });
  resultView.hidden = true;
  quizView.hidden = false;
  renderCurrent();
}

function renderCurrent() {
  const question = session.currentQuestion;
  if (!question) return finishSession();
  const { current, total } = session.progress;
  progressEl.textContent = `${current} / ${total}`;
  feedbackEl.textContent = '軍曹「この一問を仕上げろ！」';
  nextButton.hidden = true;
  renderer.render(question);
}

renderer.setAnswerHandler((selectedIndex) => {
  const question = session.currentQuestion;
  const attempt = session.submitAnswer(selectedIndex);
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
  if (event.target.closest('[data-action="restart"]')) startSession();
});

function finishSession() {
  quizView.hidden = true;
  resultView.hidden = false;
  renderResults(resultView, session.getResults(), skillLabels);
}

startSession();
