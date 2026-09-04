const correctSound = new Audio(new URL('../../../../qualifications/color-certification/audio/quiz-correct.mp3', import.meta.url).href);
const wrongSound = new Audio(new URL('../../../../qualifications/color-certification/audio/quiz-wrong.mp3', import.meta.url).href);
const questionSound = new Audio(new URL('../../../../qualifications/color-certification/audio/quiz-question.mp3', import.meta.url).href);

correctSound.preload = 'auto';
wrongSound.preload = 'auto';
questionSound.preload = 'auto';

function play(sound) {
  sound.currentTime = 0;
  void sound.play().catch(() => {});
}

export function playQuestionSound() {
  play(questionSound);
}

export function playAnswerSound(correct) {
  play(correct ? correctSound : wrongSound);
}
