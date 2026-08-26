import test from 'node:test';
import assert from 'node:assert/strict';
import { InMemoryQuestionBank } from '../js/data/question-bank-adapter.js';
import { demoQuestions, demoSkills } from '../js/data/fixtures.js';

test('fixture bank is consumed through repository contract', () => {
  const repository = new InMemoryQuestionBank({ questions: demoQuestions, skills: demoSkills });
  assert.equal(repository.getQuestion('fixture-q-001').id, 'fixture-q-001');
  assert.equal(repository.listQuestions({ skillId: 'fixture.pos-adverb' }).length, 2);
  assert.equal(repository.listSkills().length, 2);
  assert.equal(repository.getQuestion('missing'), null);
});

test('repository freezes question records and choices', () => {
  const repository = new InMemoryQuestionBank({ questions: demoQuestions, skills: demoSkills });
  const question = repository.getQuestion('fixture-q-001');
  assert.equal(Object.isFrozen(question), true);
  assert.equal(Object.isFrozen(question.choices), true);
});
