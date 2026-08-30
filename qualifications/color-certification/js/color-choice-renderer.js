export function getAnswerFeedbackModel(question, colors) {
  const target = colors.get(question?.colorRef);
  if (!target) throw new Error(`Unknown answer color ref: ${question?.colorRef}`);

  const kind = question?.presentation?.kind;
  if (kind === 'prompt_color') {
    return Object.freeze({
      kind,
      title: `正解：${target.name}`,
      name: target.name,
      reading: target.reading,
      colorRef: target.id,
      showSwatch: true,
      explanation: question.explanation
    });
  }

  if (kind === 'choice_colors') {
    return Object.freeze({
      kind,
      title: `正解：${target.name}`,
      name: target.name,
      reading: target.reading,
      colorRef: target.id,
      showSwatch: false,
      explanation: question.explanation
    });
  }

  return Object.freeze({
    kind: kind ?? 'text',
    title: '正解',
    name: target.name,
    reading: target.reading,
    colorRef: target.id,
    showSwatch: false,
    explanation: question.explanation
  });
}

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

  color(ref) {
    const color = this.colors.get(ref);
    if (!color) throw new Error(`Unknown color ref: ${ref}`);
    return color;
  }

  colorHex(ref) {
    return this.color(ref).displayHex;
  }

  createSwatch(ref, className, ariaLabel) {
    const swatch = this.documentRef.createElement('div');
    swatch.className = className;
    swatch.style.backgroundColor = this.colorHex(ref);
    swatch.setAttribute('role', 'img');
    swatch.setAttribute('aria-label', ariaLabel);
    return swatch;
  }

  render(question) {
    this.promptEl.replaceChildren();
    this.choicesEl.replaceChildren();
    this.explanationEl.hidden = true;
    this.explanationEl.replaceChildren();

    const text = this.documentRef.createElement('div');
    text.textContent = question.sentence;
    this.promptEl.append(text);

    if (question.presentation?.kind === 'prompt_color') {
      this.promptEl.append(this.createSwatch(
        question.presentation.promptColorRef,
        'prompt-swatch',
        '問題の色見本'
      ));
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

  showResult({ question, selectedIndex, correctIndex }) {
    this.buttons.forEach((button, index) => {
      button.disabled = true;
      if (index === correctIndex) button.dataset.state = 'correct';
      else if (index === selectedIndex) button.dataset.state = 'wrong';
    });

    const feedback = getAnswerFeedbackModel(question, this.colors);
    this.explanationEl.replaceChildren();

    const card = this.documentRef.createElement('div');
    card.className = 'answer-card';

    const heading = this.documentRef.createElement('strong');
    heading.className = 'answer-title';
    heading.textContent = feedback.title;
    card.append(heading);

    if (feedback.showSwatch) {
      card.append(this.createSwatch(
        feedback.colorRef,
        'answer-swatch',
        `正解の色見本：${feedback.name}`
      ));
    }

    const identity = this.documentRef.createElement('div');
    identity.className = 'answer-identity';
    identity.textContent = feedback.reading
      ? `${feedback.name}（${feedback.reading}）`
      : feedback.name;
    card.append(identity);

    const detail = this.documentRef.createElement('p');
    detail.className = 'answer-explanation';
    detail.textContent = feedback.explanation;
    card.append(detail);

    this.explanationEl.append(card);
    this.explanationEl.hidden = false;
  }
}
