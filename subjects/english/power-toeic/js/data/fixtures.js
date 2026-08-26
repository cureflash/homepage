export const demoSkills = Object.freeze([
  { id: 'fixture.pos-adverb', label: '副詞（fixture）', categoryId: 'fixture.parts-of-speech' },
  { id: 'fixture.verb-tense', label: '時制（fixture）', categoryId: 'fixture.verbs' }
]);

export const demoQuestions = Object.freeze([
  {
    id: 'fixture-q-001', version: 1, skillId: 'fixture.pos-adverb', categoryId: 'fixture.parts-of-speech',
    sentence: 'The machine operates ____ during the night shift.',
    choices: ['efficient', 'efficiency', 'efficiently', 'efficiencies'], correctIndex: 2,
    explanation: '動詞 operates を修飾するので副詞 efficiently を選ぶ。', fixture: true
  },
  {
    id: 'fixture-q-002', version: 1, skillId: 'fixture.verb-tense', categoryId: 'fixture.verbs',
    sentence: 'Ms. Lee ____ the report yesterday afternoon.',
    choices: ['finishes', 'finished', 'has finished', 'finishing'], correctIndex: 1,
    explanation: 'yesterday があるので単純過去 finished を選ぶ。', fixture: true
  },
  {
    id: 'fixture-q-003', version: 1, skillId: 'fixture.pos-adverb', categoryId: 'fixture.parts-of-speech',
    sentence: 'Please review the figures ____ before the meeting.',
    choices: ['care', 'careful', 'carefully', 'carefulness'], correctIndex: 2,
    explanation: '動詞 review の仕方を表す副詞 carefully が必要。', fixture: true
  }
]);
