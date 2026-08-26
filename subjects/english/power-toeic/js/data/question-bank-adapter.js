export class QuestionBankRepository {
  getQuestion(_id) { throw new Error('Not implemented'); }
  listQuestions(_filter = {}) { throw new Error('Not implemented'); }
  listSkills() { throw new Error('Not implemented'); }
}

export class InMemoryQuestionBank extends QuestionBankRepository {
  constructor({ questions = [], skills = [] } = {}) {
    super();
    this.questions = questions.map((question) => Object.freeze({ ...question, choices: Object.freeze([...question.choices]) }));
    this.skills = skills.map((skill) => Object.freeze({ ...skill }));
    this.byId = new Map(this.questions.map((question) => [question.id, question]));
  }

  getQuestion(id) {
    return this.byId.get(id) ?? null;
  }

  listQuestions({ skillId = null, categoryId = null } = {}) {
    return this.questions.filter((question) =>
      (!skillId || question.skillId === skillId) &&
      (!categoryId || question.categoryId === categoryId)
    );
  }

  listSkills() {
    return [...this.skills];
  }
}
