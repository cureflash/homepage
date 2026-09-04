export const PILOT_QUESTION_IDS = Object.freeze([
  'p5_conn_because_vs_because_of_0001',
  'p5_conn_because_vs_because_of_0002',
  'p5_conn_because_vs_because_of_0003',
  'p5_conn_because_vs_because_of_0004',
  'p5_conn_because_vs_because_of_0005',
  'p5_conn_because_vs_because_of_0011',
  'p5_conn_because_vs_because_of_0012',
  'p5_conn_because_vs_because_of_0013',
  'p5_conn_because_vs_because_of_0014',
  'p5_conn_because_vs_because_of_0015',
  'p5_conn_despite_vs_although_0001',
  'p5_conn_despite_vs_although_0002',
  'p5_conn_despite_vs_although_0003',
  'p5_conn_despite_vs_although_0004',
  'p5_conn_despite_vs_although_0005',
  'p5_conn_despite_vs_although_0026',
  'p5_conn_despite_vs_although_0027',
  'p5_conn_despite_vs_although_0028',
  'p5_conn_despite_vs_although_0029',
  'p5_conn_despite_vs_although_0030',
  'p5_conn_during_vs_while_0001',
  'p5_conn_during_vs_while_0002',
  'p5_conn_during_vs_while_0003',
  'p5_conn_during_vs_while_0004',
  'p5_conn_during_vs_while_0005',
  'p5_conn_during_vs_while_0026',
  'p5_conn_during_vs_while_0027',
  'p5_conn_during_vs_while_0028',
  'p5_conn_during_vs_while_0029',
  'p5_conn_during_vs_while_0030'
]);

export const PILOT_SKILL_IDS = Object.freeze([
  'p5.conn.because_vs_because_of',
  'p5.conn.despite_vs_although',
  'p5.conn.during_vs_while'
]);

function explanationsFor(ids, text) {
  return Object.fromEntries(ids.map((id) => [id, text]));
}

export const PILOT_EXPLANATIONS = Object.freeze({
  ...explanationsFor(PILOT_QUESTION_IDS.slice(0, 5), '理由＋名詞句なら because of を選べ！'),
  ...explanationsFor(PILOT_QUESTION_IDS.slice(5, 10), '理由＋SVなら because を選べ！'),
  ...explanationsFor(PILOT_QUESTION_IDS.slice(10, 15), '逆接＋名詞句なら despite を選べ！'),
  ...explanationsFor(PILOT_QUESTION_IDS.slice(15, 20), '逆接＋SVなら although を選べ！'),
  ...explanationsFor(PILOT_QUESTION_IDS.slice(20, 25), '「〜の間に」＋名詞句なら during を選べ！'),
  ...explanationsFor(PILOT_QUESTION_IDS.slice(25, 30), '「〜している間」＋SVなら while を選べ！')
});

export function buildPilotRuntime(payload) {
  const questionById = new Map(payload.questions.map((question) => [question.id, question]));
  const missing = PILOT_QUESTION_IDS.filter((id) => !questionById.has(id));
  if (missing.length) throw new Error(`Power TOEIC pilot questions missing from verified bank: ${missing.join(', ')}`);

  const questions = PILOT_QUESTION_IDS.map((id) => ({
    ...questionById.get(id),
    explanation: PILOT_EXPLANATIONS[id]
  }));
  const skillSet = new Set(PILOT_SKILL_IDS);
  const skills = payload.skills.filter((skill) => skillSet.has(skill.id));
  if (skills.length !== PILOT_SKILL_IDS.length) throw new Error('Power TOEIC pilot skill metadata is incomplete');

  return { questions, skills };
}
