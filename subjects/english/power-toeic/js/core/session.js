export class QuizSession {
  constructor({ questionIds, repository, now = () => Date.now() }) {
    if (!Array.isArray(questionIds) || questionIds.length === 0) throw new Error('questionIds must be non-empty');
    this.repository = repository;
    this.questionIds = Object.freeze([...questionIds]);
    this.now = now;
    this.index = 0;
    this.attempts = [];
    this.questionStartedAt = this.now();
    this.answeredCurrent = false;
  }

  get isComplete() { return this.index >= this.questionIds.length; }
  get currentQuestion() { return this.isComplete ? null : this.repository.getQuestion(this.questionIds[this.index]); }
  get progress() { return { current: Math.min(this.index + 1, this.questionIds.length), total: this.questionIds.length }; }

  submitAnswer(selectedIndex) {
    if (this.isComplete) throw new Error('session is complete');
    if (this.answeredCurrent) throw new Error('current question already answered');
    const question = this.currentQuestion;
    if (!question) throw new Error('question not found');
    if (!Number.isInteger(selectedIndex) || selectedIndex < 0 || selectedIndex >= question.choices.length) throw new Error('invalid answer index');

    const answeredAt = this.now();
    const attempt = Object.freeze({
      questionId: question.id,
      questionVersion: question.version,
      skillId: question.skillId,
      selectedIndex,
      correctIndex: question.correctIndex,
      correct: selectedIndex === question.correctIndex,
      responseMs: Math.max(0, answeredAt - this.questionStartedAt)
    });
    this.attempts.push(attempt);
    this.answeredCurrent = true;
    return attempt;
  }

  next() {
    if (!this.answeredCurrent) throw new Error('answer current question before advancing');
    this.index += 1;
    this.answeredCurrent = false;
    this.questionStartedAt = this.now();
    return this.currentQuestion;
  }

  getResults() {
    const correct = this.attempts.filter((attempt) => attempt.correct).length;
    const bySkill = {};
    for (const attempt of this.attempts) {
      const bucket = bySkill[attempt.skillId] ??= { answered: 0, correct: 0 };
      bucket.answered += 1;
      if (attempt.correct) bucket.correct += 1;
    }
    return Object.freeze({
      answered: this.attempts.length,
      correct,
      accuracy: this.attempts.length ? correct / this.attempts.length : 0,
      bySkill
    });
  }
}
