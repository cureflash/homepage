export class ColorChoiceRenderer {
  constructor({ promptEl, choicesEl, explanationEl, colors, documentRef = document }) {
    this.promptEl = promptEl;
    this.choicesEl = choicesEl;
    this.explanationEl = explanationEl;
    this.colors = colors;
    this.documentRef = documentRef;
    this.answerHandler = null;
    this.buttons = [];
  }

  setAnswerHandler(handler) { this.answerHandler = handler; }

  colorHex(ref) {
    const color = this.colors.get(ref);
    if (!color) throw new Error(`Unknown color ref: ${ref}`);
    return color.displayHex;
  }

  render(question) {
    this.promptEl.replaceChildren();
    this.choicesEl.replaceChildren();
    this.explanationEl.hidden = true;
    this.explanationEl.textContent = '';

    const text = this.documentRef.createElement('div');
    text.textContent = question.sentence;
    this.promptEl.append(text);

    if (question.presentation?.kind === 'prompt_color') {
      const swatch = this.documentRef.createElement('div');
      swatch.className = 'prompt-swatch';
      swatch.style.backgroundColor = this.colorHex(question.presentation.promptColorRef);
      swatch.setAttribute('role', 'img');
      swatch.setAttribute('aria-label', '問題の色見本');
      this.promptEl.append(swatch);
    }

    this.buttons = question.choices.map((choice, index) => {
      const button = this.documentRef.createElement('button');
      button.type = 'button';
      button.className = 'choice';
      button.dataset.index = String(index);

      const label = this.documentRef.createElement('span');
      label.textContent = question.presentation?.kind === 'choice_colors'
        ? String.fromCharCode(65 + index)
        : `${String.fromCharCode(65 + index)}. ${choice}`;
      button.append(label);

      if (question.presentation?.kind === 'choice_colors') {
        const colorRef = question.presentation.choiceColorRefs[index];
        const swatch = this.documentRef.createElement('span');
        swatch.className = 'choice-swatch';
        swatch.style.backgroundColor = this.colorHex(colorRef);
        swatch.setAttribute('aria-hidden', 'true');
        button.append(swatch);
        button.setAttribute('aria-label', `${String.fromCharCode(65 + index)} の色見本`);
      }

      button.addEventListener('click', () => this.answerHandler?.(index));
      this.choicesEl.append(button);
      return button;
    });
  }

  showResult({ selectedIndex, correctIndex, explanation }) {
    this.buttons.forEach((button, index) => {
      button.disabled = true;
      if (index === correctIndex) button.dataset.state = 'correct';
      else if (index === selectedIndex) button.dataset.state = 'wrong';
    });
    this.explanationEl.textContent = explanation;
    this.explanationEl.hidden = false;
  }
}
