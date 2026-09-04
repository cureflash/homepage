import assert from 'node:assert/strict';
import test from 'node:test';
import { getJapaneseExplanation } from '../js/ui/japanese-explanation.js';
import { ClozeChoiceRenderer } from '../js/renderers/cloze-choice.js';

class FakeElement {
  constructor() { this.children = []; this.dataset = {}; this.attributes = {}; this.hidden = false; this.disabled = false; this.textContent = ''; }
  append(child) { this.children.push(child); }
  replaceChildren() { this.children = []; }
  addEventListener(type, handler) { this[`on${type}`] = handler; }
  setAttribute(name, value) { this.attributes[name] = value; }
}

const documentRef = { createElement: () => new FakeElement() };

function question(overrides = {}) {
  return {
    skillId: 'p5.conn.because_vs_because_of',
    sentence: 'The launch was delayed ____ heavy rain.',
    choices: ['because of', 'because', 'if', 'unless'],
    correctIndex: 0,
    explanation: 'English source explanation.',
    ...overrides,
  };
}

test('runtime explanation is Japanese and uses the requested forceful masculine tone', () => {
  const explanation = getJapaneseExplanation(question());
  assert.match(explanation, /後ろが名詞句/);
  assert.match(explanation, /だ！|なるぞ！|使うぞ！|選べ！|覚えろ！/);
  assert.doesNotMatch(explanation, /English source explanation/);
});

test('unknown skills still receive a Japanese forceful fallback instead of leaking English', () => {
  const explanation = getJapaneseExplanation(question({ skillId: 'future.skill', choices: ['rapidly', 'rapid', 'rapidity', 'rapidness'], correctIndex: 0 }));
  assert.equal(explanation, '正解は『rapidly』だ！ 文法と文脈を確認して、この形を選べるようにしておけ！');
});

test('renderer replaces canonical English explanation only for real skill-tagged runtime questions', () => {
  const explanationEl = new FakeElement();
  const renderer = new ClozeChoiceRenderer({ sentenceEl: new FakeElement(), choicesEl: new FakeElement(), explanationEl, documentRef });
  const runtimeQuestion = question();
  renderer.render(runtimeQuestion);
  renderer.showResult({ selectedIndex: 0, correctIndex: 0, explanation: runtimeQuestion.explanation });
  assert.match(explanationEl.textContent, /後ろが名詞句/);
  assert.doesNotMatch(explanationEl.textContent, /English source explanation/);
});
