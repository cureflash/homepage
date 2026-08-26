import { QUESTION_REPORT_REASONS, createQuestionReport } from '../core/question-reports.js';

const LABELS = Object.freeze({
  ambiguous: '正解が複数ありそう',
  unnatural_english: '英語が不自然',
  wrong_answer: '正答が違う',
  wrong_explanation: '解説が違う',
  other: 'その他',
});

export class QuestionReportUI {
  constructor({ container, store } = {}) {
    this.container = container;
    this.store = store;
    this.question = null;
  }

  open(question) {
    if (!this.container || !question) return;
    this.question = question;
    this.container.hidden = false;
    this.container.replaceChildren();

    const title = document.createElement('h2');
    title.textContent = 'この問題を報告';

    const form = document.createElement('form');
    form.className = 'report-form';
    const select = document.createElement('select');
    select.name = 'reason';
    select.setAttribute('aria-label', '報告理由');
    for (const reason of QUESTION_REPORT_REASONS) {
      const option = document.createElement('option');
      option.value = reason;
      option.textContent = LABELS[reason];
      select.append(option);
    }

    const detail = document.createElement('textarea');
    detail.name = 'detail';
    detail.rows = 3;
    detail.placeholder = '補足（任意）';

    const actions = document.createElement('div');
    actions.className = 'report-actions';
    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.className = 'primary-button';
    submit.textContent = '報告する';
    const cancel = document.createElement('button');
    cancel.type = 'button';
    cancel.className = 'secondary-button';
    cancel.textContent = '閉じる';
    cancel.addEventListener('click', () => this.close());
    actions.append(submit, cancel);

    form.append(select, detail, actions);
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const report = createQuestionReport({
        questionId: this.question.id,
        questionVersion: this.question.version,
        reason: select.value,
        detail: detail.value,
      });
      this.store.append(report);
      this.container.replaceChildren();
      const done = document.createElement('p');
      done.className = 'report-success';
      done.textContent = '報告を保存しました。';
      const close = document.createElement('button');
      close.type = 'button';
      close.className = 'secondary-button';
      close.textContent = '閉じる';
      close.addEventListener('click', () => this.close());
      this.container.append(done, close);
    });

    this.container.append(title, form);
  }

  close() {
    if (!this.container) return;
    this.container.hidden = true;
    this.container.replaceChildren();
    this.question = null;
  }
}
