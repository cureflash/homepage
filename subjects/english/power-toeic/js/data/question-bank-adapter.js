export class QuestionBankRepository {
  getQuestion(_id) { throw new Error('Not implemented'); }
  listQuestions(_filter = {}) { throw new Error('Not implemented'); }
  listSkills() { throw new Error('Not implemented'); }
  listCategories() { throw new Error('Not implemented'); }
}

export class InMemoryQuestionBank extends QuestionBankRepository {
  constructor({ questions = [], skills = [], categories = [] } = {}) {
    super();
    this.questions = questions.map((question) => Object.freeze({ ...question, choices: Object.freeze([...question.choices]) }));
    this.skills = skills.map((skill) => Object.freeze({ ...skill }));
    this.byId = new Map(this.questions.map((question) => [question.id, question]));
    this.categoryLabels = new Map(categories.map((category) => [category.id, category.label]));
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

  listCategories() {
    return [...new Set(this.skills.map((skill) => skill.categoryId))].map((id) => ({
      id, label: this.categoryLabels.get(id) ?? id,
      skills: this.skills.filter((skill) => skill.categoryId === id),
    }));
  }
}
