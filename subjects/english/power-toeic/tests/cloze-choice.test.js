import test from 'node:test';
import assert from 'node:assert/strict';
import { ClozeChoiceRenderer } from '../js/renderers/cloze-choice.js';

class FakeElement {
  constructor() { this.children = []; this.dataset = {}; this.attributes = {}; this.hidden = false; this.disabled = false; this.textContent = ''; }
  append(child) { this.children.push(child); }
  replaceChildren() { this.children = []; }
  addEventListener(type, handler) { this[`on${type}`] = handler; }
  setAttribute(name, value) { this.attributes[name] = value; }
  click() { this.onclick?.(); }
}

const documentRef = { createElement: () => new FakeElement() };

test('renders exactly four semantic buttons and forwards stable index', () => {
  const sentenceEl = new FakeElement();
  const choicesEl = new FakeElement();
  const explanationEl = new FakeElement();
  const renderer = new ClozeChoiceRenderer({ sentenceEl, choicesEl, explanationEl, documentRef });
  let selected = null;
  renderer.setAnswerHandler((index) => { selected = index; });
  renderer.render({ sentence: 'A ____ sentence.', choices: ['one', 'two', 'three', 'four'] });

  assert.equal(sentenceEl.textContent, 'A ____ sentence.');
  assert.equal(choicesEl.children.length, 4);
  assert.deepEqual(choicesEl.children.map((button) => button.type), ['button', 'button', 'button', 'button']);
  choicesEl.children[2].click();
  assert.equal(selected, 2);
});

test('result disables choices and marks correct/wrong without relying on color alone', () => {
  const renderer = new ClozeChoiceRenderer({ sentenceEl: new FakeElement(), choicesEl: new FakeElement(), explanationEl: new FakeElement(), documentRef });
  renderer.render({ sentence: 'A ____ sentence.', choices: ['one', 'two', 'three', 'four'] });
  renderer.showResult({ selectedIndex: 0, correctIndex: 2, explanation: 'Because.' });

  assert.equal(renderer.buttons.every((button) => button.disabled), true);
  assert.equal(renderer.buttons[0].dataset.state, 'wrong');
  assert.match(renderer.buttons[0].attributes['aria-label'], /不正解/);
  assert.equal(renderer.buttons[2].dataset.state, 'correct');
  assert.match(renderer.buttons[2].attributes['aria-label'], /正解/);
});
