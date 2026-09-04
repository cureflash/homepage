const correctSound = new Audio(new URL('../audio/quiz-correct.mp3', import.meta.url).href);
const wrongSound = new Audio(new URL('../audio/quiz-wrong.mp3', import.meta.url).href);

correctSound.preload = 'auto';
wrongSound.preload = 'auto';

function play(sound) {
  sound.currentTime = 0;
  void sound.play().catch(() => {});
}

document.addEventListener('click', (event) => {
  const button = event.target.closest?.('button.choice');
  if (!button) return;

  if (button.dataset.state === 'correct') {
    play(correctSound);
  } else if (button.dataset.state === 'wrong') {
    play(wrongSound);
  }
});
