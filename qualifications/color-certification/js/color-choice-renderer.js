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

export function getChoiceRevealModels(question, colors) {
  if (question?.presentation?.kind !== 'choice_colors') return Object.freeze([]);
  return Object.freeze(question.presentation.choiceColorRefs.map((ref, index) => {
    const color = colors.get(ref);
    if (!color) throw new Error(`Unknown choice color ref: ${ref}`);
    return Object.freeze({
      index,
      colorRef: ref,
      name: color.name,
      reading: color.reading,
      displayHex: color.displayHex
    });
  }));
}

export function getPromptChoiceSwatchModels(question, colors) {
  if (question?.presentation?.kind !== 'prompt_color') return Object.freeze([]);
  const byName = new Map([...colors.values()].map((color) => [color.name, color]));
  return Object.freeze(question.choices.map((choice, index) => {
    const color = byName.get(choice);
    if (!color) throw new Error(`Unknown prompt choice color name: ${choice}`);
    return Object.freeze({
      index,
      colorRef: color.id,
      name: color.name,
      reading: color.reading,
      displayHex: color.displayHex
    });
  }));
}

export function readableTextColor(hex) {
  const match = /^#([0-9a-f]{6})$/i.exec(hex ?? '');
  if (!match) return '#111111';
  const value = Number.parseInt(match[1], 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
  return brightness >= 155 ? '#111111' : '#ffffff';
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

  createHiddenChoiceName(colorRef) {
    const color = this.color(colorRef);
    const name = this.documentRef.createElement('span');
    name.className = 'choice-swatch-name';
    name.dataset.role = 'choice-color-name';
    name.textContent = color.name;
    name.style.color = readableTextColor(color.displayHex);
    name.hidden = true;
    return name;
  }

  createHiddenPromptChoiceSwatch(choiceName) {
    const byName = new Map([...this.colors.values()].map((color) => [color.name, color]));
    const color = byName.get(choiceName);
    if (!color) throw new Error(`Unknown prompt choice color name: ${choiceName}`);
    const swatch = this.documentRef.createElement('span');
    swatch.className = 'choice-name-swatch';
    swatch.dataset.role = 'choice-name-swatch';
    swatch.style.backgroundColor = color.displayHex;
    swatch.hidden = true;
    swatch.setAttribute('aria-hidden', 'true');
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

      if (question.presentation?.kind === 'prompt_color') {
        const row = this.documentRef.createElement('span');
        row.className = 'choice-text-row';
        row.append(label, this.createHiddenPromptChoiceSwatch(choice));
        button.append(row);
      } else {
        button.append(label);
      }

      if (question.presentation?.kind === 'choice_colors') {
        const colorRef = question.presentation.choiceColorRefs[index];
        const swatch = this.documentRef.createElement('span');
        swatch.className = 'choice-swatch';
        swatch.style.backgroundColor = this.colorHex(colorRef);
        swatch.setAttribute('aria-hidden', 'true');
        swatch.append(this.createHiddenChoiceName(colorRef));
        button.append(swatch);
        button.setAttribute('aria-label', `${String.fromCharCode(65 + index)} の色見本`);
      }

      button.addEventListener('click', () => this.answerHandler?.(index));
      this.choicesEl.append(button);
      return button;
    });
  }

  revealChoiceNames(question) {
    const reveals = getChoiceRevealModels(question, this.colors);
    reveals.forEach((reveal) => {
      const button = this.buttons[reveal.index];
      const swatch = button?.querySelector?.('.choice-swatch');
      const name = swatch?.querySelector?.('[data-role="choice-color-name"]');
      if (!swatch || !name) throw new Error(`Missing pre-rendered choice color name: ${reveal.index}`);
      name.hidden = false;
      swatch.removeAttribute('aria-hidden');
      swatch.setAttribute('role', 'img');
      swatch.setAttribute('aria-label', reveal.reading ? `${reveal.name}（${reveal.reading}）` : reveal.name);
      button.setAttribute('aria-label', `${String.fromCharCode(65 + reveal.index)} ${reveal.name}`);
    });
  }

  revealPromptChoiceSwatches(question) {
    const reveals = getPromptChoiceSwatchModels(question, this.colors);
    reveals.forEach((reveal) => {
      const button = this.buttons[reveal.index];
      const swatch = button?.querySelector?.('[data-role="choice-name-swatch"]');
      if (!swatch) throw new Error(`Missing pre-rendered prompt choice swatch: ${reveal.index}`);
      swatch.hidden = false;
      swatch.removeAttribute('aria-hidden');
      swatch.setAttribute('role', 'img');
      swatch.setAttribute('aria-label', reveal.reading ? `${reveal.name}（${reveal.reading}）の色見本` : `${reveal.name}の色見本`);
    });
  }

  showResult({ question, selectedIndex, correctIndex }) {
    this.buttons.forEach((button, index) => {
      button.disabled = true;
      if (index === correctIndex) button.dataset.state = 'correct';
      else if (index === selectedIndex) button.dataset.state = 'wrong';
    });

    if (question?.presentation?.kind === 'choice_colors') this.revealChoiceNames(question);
    if (question?.presentation?.kind === 'prompt_color') this.revealPromptChoiceSwatches(question);

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
