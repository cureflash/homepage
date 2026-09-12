import assert from 'node:assert/strict';
import test from 'node:test';
import { InMemoryQuestionBank } from '../../../subjects/english/power-toeic/js/data/question-bank-adapter.js';
import { QuizSession } from '../../../subjects/english/power-toeic/js/core/session.js';
import { buildRuntimeQuestionBank, parseCompletedTopics, parseTopicMarkdown } from '../js/question-source.js';

const fixture = `# LAW-01 テスト分野

### LAW-01-Q001
- 問題文: 問1
- 正答: 答えA
- 解説: 解説A
- 出典: https://example.com/a
- verified: true

### LAW-01-Q002
- 問題文: 問2
- 正答: 答えB
- 解説: 解説B
- 出典: https://example.com/b
- verified: true

### LAW-01-Q003
- 問題文: 問3
- 正答: 答えC
- 解説: 解説C
- 出典: https://example.com/c
- verified: true

### LAW-01-Q004
- 問題文: 問4
- 正答: 答えD
- 解説: 解説D
- 出典: https://example.com/d
- verified: true

### LAW-01-Q005
- 問題文: 非公開
- 正答: 未検証
- verified: false
`;

test('worker status exposes completed topic ids', () => {
  assert.deepEqual(parseCompletedTopics('- next_topic_id: LAW-03\n- completed: LAW-01, LAW-02\n'), ['LAW-01', 'LAW-02']);
  assert.deepEqual(parseCompletedTopics('- completed: なし\n'), []);
});

test('verified Markdown questions are parsed and unverified questions are excluded', () => {
  const parsed = parseTopicMarkdown(fixture, 'LAW-01');
  assert.equal(parsed.label, 'テスト分野');
  assert.equal(parsed.questions.length, 4);
  assert.equal(parsed.questions[0].sourceUrls[0], 'https://example.com/a');
});

test('free-answer source is deterministically converted to exactly four unique choices', () => {
  const runtime = buildRuntimeQuestionBank([{ topicId: 'LAW-01', markdown: fixture }]);
  assert.equal(runtime.questions.length, 4);
  for (const question of runtime.questions) {
    assert.equal(question.choices.length, 4);
    assert.equal(new Set(question.choices).size, 4);
    assert.ok(question.correctIndex >= 0 && question.correctIndex < 4);
    assert.ok(/^答え[A-D]$/.test(question.choices[question.correctIndex]));
    assert.equal(question.choiceAuthority, 'derived_from_verified_answers');
  }
  assert.deepEqual(runtime, buildRuntimeQuestionBank([{ topicId: 'LAW-01', markdown: fixture }]));
});

test('authored four-choice fields override derived distractors', () => {
  const authored = `# NUC-01 作問済み\n\n### NUC-01-Q001\n- 問題文: 正しいものはどれか。\n- 選択肢: ["甲", "乙", "丙", "丁"]\n- 正答選択肢: C\n- 正答: 丙\n- 解説: 丙が正しい。\n- 出典: https://example.com/nuc\n- verified: true\n`;
  const runtime = buildRuntimeQuestionBank([{ topicId: 'NUC-01', markdown: authored }]);
  assert.deepEqual(runtime.questions[0].choices, ['甲', '乙', '丙', '丁']);
  assert.equal(runtime.questions[0].correctIndex, 2);
  assert.equal(runtime.questions[0].choiceAuthority, 'authored');
});

test('runtime records work with the same shared QuizSession engine', () => {
  const runtime = buildRuntimeQuestionBank([{ topicId: 'LAW-01', markdown: fixture }]);
  const repository = new InMemoryQuestionBank(runtime);
  const question = runtime.questions[0];
  const session = new QuizSession({ questionIds: [question.id], repository });
  const attempt = session.submitAnswer(question.correctIndex);
  assert.equal(attempt.correct, true);
  assert.equal(session.getResults().accuracy, 1);
});
