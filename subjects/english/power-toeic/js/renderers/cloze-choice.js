export class ClozeChoiceRenderer {
  constructor({ sentenceEl, choicesEl, explanationEl, documentRef = document }) {
    this.sentenceEl = sentenceEl;
    this.choicesEl = choicesEl;
    this.explanationEl = explanationEl;
    this.documentRef = documentRef;
    this.answerHandler = null;
    this.buttons = [];
  }

  setAnswerHandler(handler) { this.answerHandler = handler; }

  render(question) {
    this.sentenceEl.textContent = question.sentence;
    this.explanationEl.hidden = true;
    this.explanationEl.textContent = '';
    this.choicesEl.replaceChildren();
    this.buttons = question.choices.map((choice, index) => {
      const button = this.documentRef.createElement('button');
      button.type = 'button';
      button.className = 'choice';
      button.dataset.index = String(index);
      button.textContent = `${String.fromCharCode(65 + index)}. ${choice}`;
      button.addEventListener('click', () => this.answerHandler?.(index));
      this.choicesEl.append(button);
      return button;
    });
  }

  showResult({ selectedIndex, correctIndex, explanation }) {
    this.buttons.forEach((button, index) => {
      button.disabled = true;
      button.setAttribute('aria-pressed', index === selectedIndex ? 'true' : 'false');
      if (index === correctIndex) {
        button.dataset.state = 'correct';
        button.setAttribute('aria-label', `${button.textContent} 正解`);
      } else if (index === selectedIndex) {
        button.dataset.state = 'wrong';
        button.setAttribute('aria-label', `${button.textContent} 不正解`);
      }
    });
    this.explanationEl.textContent = explanation;
    this.explanationEl.hidden = false;
  }
}
