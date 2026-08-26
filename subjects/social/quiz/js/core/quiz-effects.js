export class QuizEffects {
  constructor(sources = {}) {
    this.sounds = new Map();
    if (typeof Audio === "undefined") return;

    Object.entries(sources).forEach(([name, source]) => {
      const audio = new Audio(source);
      audio.preload = "auto";
      this.sounds.set(name, audio);
    });
  }

  play(name) {
    const audio = this.sounds.get(name);
    if (!audio) return;
    try {
      audio.currentTime = 0;
      const playback = audio.play();
      if (playback && typeof playback.catch === "function") playback.catch(() => {});
    } catch {
      // Sound effects are optional; quiz play must continue if audio is blocked.
    }
  }
}
