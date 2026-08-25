(() => {
  let context = null;
  let bgmTimer = null;
  let bgmStep = 0;

  function getContext() {
    if (!context) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return null;
      context = new AudioContext();
    }
    if (context.state === "suspended") {
      context.resume().catch(() => {});
    }
    return context;
  }

  function tone(frequency, duration = 0.12, volume = 0.05, type = "sine", delay = 0) {
    const ctx = getContext();
    if (!ctx) return;

    const start = ctx.currentTime + delay;
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.02);
  }

  function startBgm() {
    if (bgmTimer) return;
    const ctx = getContext();
    if (!ctx) return;

    const melody = [261.63, 329.63, 392.0, 329.63, 293.66, 349.23, 440.0, 349.23];
    const playStep = () => {
      const note = melody[bgmStep % melody.length];
      tone(note, 0.16, 0.018, "triangle");
      if (bgmStep % 2 === 0) tone(note / 2, 0.2, 0.012, "sine");
      bgmStep += 1;
    };

    playStep();
    bgmTimer = window.setInterval(playStep, 360);
  }

  function stopBgm() {
    if (bgmTimer) {
      window.clearInterval(bgmTimer);
      bgmTimer = null;
    }
    bgmStep = 0;
  }

  function playSelect() {
    tone(440, 0.07, 0.04, "square");
  }

  function playCorrect() {
    tone(523.25, 0.12, 0.05, "sine");
    tone(659.25, 0.12, 0.05, "sine", 0.11);
    tone(783.99, 0.18, 0.05, "sine", 0.22);
  }

  function playWrong() {
    tone(220, 0.16, 0.05, "sawtooth");
    tone(174.61, 0.22, 0.05, "sawtooth", 0.14);
  }

  function playAbsoluteWrong() {
    tone(196, 0.18, 0.07, "square");
    tone(146.83, 0.18, 0.07, "square", 0.14);
    tone(98, 0.38, 0.08, "square", 0.28);
  }

  function playFinish(gameOver) {
    if (gameOver) {
      tone(164.81, 0.22, 0.06, "sawtooth");
      tone(130.81, 0.22, 0.06, "sawtooth", 0.18);
      tone(98, 0.5, 0.07, "sawtooth", 0.36);
      return;
    }

    tone(523.25, 0.13, 0.05, "triangle");
    tone(659.25, 0.13, 0.05, "triangle", 0.12);
    tone(783.99, 0.13, 0.05, "triangle", 0.24);
    tone(1046.5, 0.35, 0.05, "triangle", 0.36);
  }

  window.RankingAudio = {
    startBgm,
    stopBgm,
    playSelect,
    playCorrect,
    playWrong,
    playAbsoluteWrong,
    playFinish
  };
})();
