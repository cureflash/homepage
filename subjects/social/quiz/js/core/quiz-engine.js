function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export const DEFAULT_TIME_LIMIT_SECONDS = 180;
export const DEFAULT_WRONG_PENALTY_SECONDS = 20;

export class QuizEngine {
  constructor({ game, renderer, ui, effects = null }) {
    if (!game?.questions?.length) throw new Error("game.questions is required");
    if (!renderer) throw new Error("renderer is required");
    this.game = game;
    this.renderer = renderer;
    this.ui = ui;
    this.effects = effects;
    this.advanceTimer = null;
    this.countdownTimer = null;
    this.locked = false;
    this.finished = false;
    this.renderer.setAnswerHandler((answerKey) => this.submit(answerKey));
  }

  start() {
    this.clearTimers();
    this.queue = this.game.shuffle === false ? [...this.game.questions] : shuffle(this.game.questions);
    this.index = 0;
    this.score = 0;
    this.answered = 0;
    this.locked = false;
    this.finished = false;
    this.timeRemaining = Number.isFinite(this.game.timeLimitSeconds)
      ? Math.max(0, Math.floor(this.game.timeLimitSeconds))
      : DEFAULT_TIME_LIMIT_SECONDS;
    this.wrongPenaltySeconds = Number.isFinite(this.game.wrongPenaltySeconds)
      ? Math.max(0, Math.floor(this.game.wrongPenaltySeconds))
      : DEFAULT_WRONG_PENALTY_SECONDS;

    if (this.ui.startPanel) this.ui.startPanel.hidden = true;
    if (this.ui.questionPanel) this.ui.questionPanel.hidden = false;
    this.ui.resultPanel.hidden = true;
    this.ui.answerPanel.hidden = false;

    this.updateHeader();
    this.renderCurrent();
    this.effects?.play?.("start");
    this.startCountdown();
  }

  updateHeader() {
    this.ui.title.textContent = this.game.title;
    this.ui.description.textContent = this.game.description ?? "";
    this.updateStatus();
  }

  updateStatus() {
    const total = this.queue?.length ?? this.game.questions.length;
    const shown = this.queue ? Math.min(this.index + 1, total) : 0;
    this.ui.progress.textContent = `${shown} / ${total}`;
    this.ui.score.textContent = String(this.score ?? 0);
    const accuracy = !this.answered ? 0 : Math.round((this.score / this.answered) * 100);
    this.ui.accuracy.textContent = `${accuracy}%`;
    if (this.ui.time) this.ui.time.textContent = `${Math.max(0, this.timeRemaining ?? DEFAULT_TIME_LIMIT_SECONDS)}秒`;
  }

  renderCurrent() {
    if (this.finished) return;
    const question = this.queue[this.index];
    if (!question) {
      this.finish("clear");
      return;
    }
    this.locked = false;
    this.ui.feedback.className = "feedback";
    this.ui.feedback.textContent = "";
    this.ui.questionLabel.textContent = question.instruction ?? this.game.instruction ?? "問題";
    this.ui.questionText.textContent = question.prompt;
    this.renderer.render(question);
    this.updateStatus();
  }

  submit(answerKey) {
    if (this.locked || this.finished) return;
    const question = this.queue[this.index];
    if (!question) return;

    this.locked = true;
    this.answered += 1;
    const selected = String(answerKey);
    const correct = String(question.answer);
    const isCorrect = selected === correct;

    if (isCorrect) {
      this.score += 1;
      this.effects?.play?.("correct");
    } else {
      this.effects?.play?.("wrong");
      this.timeRemaining = Math.max(0, this.timeRemaining - this.wrongPenaltySeconds);
    }

    this.renderer.showResult({ selected, correct, isCorrect, question });
    this.ui.feedback.className = `feedback ${isCorrect ? "correct" : "wrong"}`;
    this.ui.feedback.textContent = isCorrect
      ? (question.correctText ?? "正解！")
      : (question.wrongText ?? `正解は「${question.answerLabel ?? correct}」`);
    this.updateStatus();

    if (this.timeRemaining <= 0) {
      this.finish("timeout");
      return;
    }

    const delay = Number.isFinite(this.game.advanceDelay) ? this.game.advanceDelay : 750;
    const isLastQuestion = this.index >= this.queue.length - 1;

    if (isLastQuestion) {
      this.clearCountdown();
      this.advanceTimer = window.setTimeout(() => {
        this.advanceTimer = null;
        this.finish("clear");
      }, Math.max(0, delay));
      return;
    }

    this.advanceTimer = window.setTimeout(() => {
      this.advanceTimer = null;
      this.index += 1;
      this.renderCurrent();
    }, Math.max(0, delay));
  }

  startCountdown() {
    if (this.timeRemaining <= 0) {
      this.finish("timeout");
      return;
    }
    this.countdownTimer = window.setInterval(() => {
      if (this.finished) return;
      this.timeRemaining = Math.max(0, this.timeRemaining - 1);
      this.updateStatus();
      if (this.timeRemaining <= 0) this.finish("timeout");
    }, 1000);
  }

  finish(reason = "clear") {
    if (this.finished) return;
    this.finished = true;
    this.locked = true;
    this.clearTimers();
    this.ui.answerPanel.hidden = true;
    this.ui.resultPanel.hidden = false;
    if (this.ui.resultTitle) this.ui.resultTitle.textContent = reason === "timeout" ? "ゲームオーバー" : "クリア！";
    if (reason === "clear") this.ui.progress.textContent = `${this.queue.length} / ${this.queue.length}`;
    const accuracy = this.answered === 0 ? 0 : Math.round((this.score / this.answered) * 100);
    const suffix = reason === "timeout" ? `　時間切れ（${this.answered}問回答）` : `　残り${this.timeRemaining}秒`;
    this.ui.resultScore.textContent = `${this.score} / ${this.queue.length} 問正解（${accuracy}%）${suffix}`;
    this.ui.feedback.className = "feedback";
    this.ui.feedback.textContent = "";
    this.updateStatus();
  }

  clearCountdown() {
    if (this.countdownTimer !== null) {
      window.clearInterval(this.countdownTimer);
      this.countdownTimer = null;
    }
  }

  clearTimers() {
    if (this.advanceTimer !== null) {
      window.clearTimeout(this.advanceTimer);
      this.advanceTimer = null;
    }
    this.clearCountdown();
  }
}
