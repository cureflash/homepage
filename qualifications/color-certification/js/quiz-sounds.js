const correctSound = new Audio(new URL('../audio/quiz-correct.mp3', import.meta.url).href);
const wrongSound = new Audio(new URL('../audio/quiz-wrong.mp3', import.meta.url).href);
const questionSound = new Audio(new URL('../audio/quiz-question.mp3', import.meta.url).href);

correctSound.preload = 'auto';
wrongSound.preload = 'auto';
questionSound.preload = 'auto';

function play(sound) {
  sound.currentTime = 0;
  void sound.play().catch(() => {});
}

const quizView = document.querySelector('[data-view="quiz"]');

document.addEventListener('click', (event) => {
  const button = event.target.closest?.('button');
  if (!button) return;

  if (button.matches('[data-skill], [data-action="next"]')) {
    if (!quizView?.hidden) play(questionSound);
    return;
  }

  if (!button.matches('button.choice')) return;

  if (button.dataset.state === 'correct') {
    play(correctSound);
  } else if (button.dataset.state === 'wrong') {
    play(wrongSound);
  }
});
