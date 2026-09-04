import correct1 from './audio-data/quiz-correct-1.js';
import correct2 from './audio-data/quiz-correct-2.js';
import correct3 from './audio-data/quiz-correct-3.js';
import correct4 from './audio-data/quiz-correct-4.js';
import wrong1 from './audio-data/quiz-wrong-1.js';
import wrong2 from './audio-data/quiz-wrong-2.js';

export const CORRECT_QUIZ_SOUND_URL = `data:audio/mpeg;base64,${correct1}${correct2}${correct3}${correct4}`;
export const WRONG_QUIZ_SOUND_URL = `data:audio/mpeg;base64,${wrong1}${wrong2}`;
