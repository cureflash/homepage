const audioUrl = (name) => new URL(`../old-maid/audio/${name}`, import.meta.url).href;

export const AUDIO_CONFIG = {
  bgm: audioUrl("bgm.mp3"),
  select: audioUrl("select.mp3"),
  correct: audioUrl("correct.mp3"),
  wrong: audioUrl("wrong.mp3"),
  clear: audioUrl("clear.mp3"),
};
