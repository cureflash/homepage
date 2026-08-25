function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export class QuizEngine {
  constructor({ game, renderer, ui }) {
    if (!game?.questions?.length) throw new Error("game.questions is required");
    if (!renderer) throw new Error("renderer is required");
    this.game = game;
    this.renderer = renderer;
    this.ui = ui;
    this.advanceTimer = null;
    this.locked = false;
    this.renderer.setAnswerHandler((answerKey) => this.submit(answerKey));
  }

  start() {
    this.clearTimer();
    this.queue = this.game.shuffle === false ? [...this.game.questions] : shuffle(this.game.questions);
    this.index = 0;
    this.score = 0;
    this.answered = 0;
    this.locked = false;
    this.ui.resultPanel.hidden = true;
    this.ui.answerPanel.hidden = false;
    this.updateHeader();
    this.renderCurrent();
  }

  updateHeader() {
    this.ui.title.textContent = this.game.title;
    this.ui.description.textContent = this.game.description ?? "";
    this.updateStatus();
  }

  updateStatus() {
    const total = this.queue?.length ?? this.game.questions.length;
    const shown = total === 0 ? 0 : Math.min(this.index + 1, total);
    this.ui.progress.textContent = `${shown} / ${total}`;
    this.ui.score.textContent = String(this.score);
    const accuracy = this.answered === 0 ? 0 : Math.round((this.score / this.answered) * 100);
    this.ui.accuracy.textContent = `${accuracy}%`;
  }

  renderCurrent() {
    const question = this.queue[this.index];
    if (!question) {
      this.finish();
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
    if (this.locked) return;
    const question = this.queue[this.index];
    if (!question) return;
    this.locked = true;
    this.answered += 1;
    const selected = String(answerKey);
    const correct = String(question.answer);
    const isCorrect = selected === correct;
    if (isCorrect) this.score += 1;
    this.renderer.showResult({ selected, correct, isCorrect, question });
    this.ui.feedback.className = `feedback ${isCorrect ? "correct" : "wrong"}`;
    this.ui.feedback.textContent = isCorrect ? (question.correctText ?? "正解！") : (question.wrongText ?? `正解は「${question.answerLabel ?? correct}」`);
    this.updateStatus();
    const delay = Number.isFinite(this.game.advanceDelay) ? this.game.advanceDelay : 750;
    this.advanceTimer = window.setTimeout(() => {
      this.index += 1;
      this.renderCurrent();
    }, Math.max(0, delay));
  }

  finish() {
    this.clearTimer();
    this.ui.answerPanel.hidden = true;
    this.ui.resultPanel.hidden = false;
    this.ui.progress.textContent = `${this.queue.length} / ${this.queue.length}`;
    const accuracy = this.answered === 0 ? 0 : Math.round((this.score / this.answered) * 100);
    this.ui.resultScore.textContent = `${this.score} / ${this.queue.length} 問正解（${accuracy}%）`;
    this.ui.feedback.className = "feedback";
    this.ui.feedback.textContent = "";
  }

  clearTimer() {
    if (this.advanceTimer !== null) {
      window.clearTimeout(this.advanceTimer);
      this.advanceTimer = null;
    }
  }
}
