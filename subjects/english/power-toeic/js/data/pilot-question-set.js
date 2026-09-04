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

export const PILOT_EXPLANATIONS = Object.freeze({
  p5_conn_because_vs_because_of_0001: '空欄の直後は「a safety defect ...」で名詞句だ。SVがない！ found は defect を説明する過去分詞だ！ 理由＋名詞句なら because of を選べ！',
  p5_conn_because_vs_because_of_0002: '空欄の直後は「heavy fog ...」で名詞句だ。SVがない！ 理由＋名詞句なら because of を選べ！',
  p5_conn_because_vs_because_of_0003: '空欄の直後は「a power failure ...」で名詞句だ。SVがない！ 理由＋名詞句なら because of を選べ！',
  p5_conn_because_vs_because_of_0004: '空欄の直後は「an unexpected shortage ...」で名詞句だ。SVがない！ 理由＋名詞句なら because of を選べ！',
  p5_conn_because_vs_because_of_0005: '空欄の直後は「emergency repairs ...」で名詞句だ。SVがない！ 理由＋名詞句なら because of を選べ！',
  p5_conn_because_vs_because_of_0011: '空欄の直後は「its inventory system(S) went(V) offline」でSVがそろっている！ 理由＋SVなら because を選べ！',
  p5_conn_because_vs_because_of_0012: '空欄の直後は「her train(S) was delayed(V)」でSVがそろっている！ 理由＋SVなら because を選べ！',
  p5_conn_because_vs_because_of_0013: '空欄の直後は「several totals(S) had been entered(V) ...」でSVがそろっている！ 理由＋SVなら because を選べ！',
  p5_conn_because_vs_because_of_0014: '空欄の直後は「the customer line(S) had become(V) ...」でSVがそろっている！ 理由＋SVなら because を選べ！',
  p5_conn_because_vs_because_of_0015: '空欄の直後は「repeated connection tests(S) showed(V) ...」でSVがそろっている！ 理由＋SVなら because を選べ！',

  p5_conn_despite_vs_although_0001: '空欄の直後は「steady rain ...」で名詞句だ。SVがない！ 逆接＋名詞句なら despite を選べ！',
  p5_conn_despite_vs_although_0002: '空欄の直後は「a temporary outage ...」で名詞句だ。SVがない！ 逆接＋名詞句なら despite を選べ！',
  p5_conn_despite_vs_although_0003: '空欄の直後は「a shortage ...」で名詞句だ。SVがない！ 逆接＋名詞句なら despite を選べ！',
  p5_conn_despite_vs_although_0004: '空欄の直後は「delays ...」で名詞句だ。SVがない！ 逆接＋名詞句なら despite を選べ！',
  p5_conn_despite_vs_although_0005: '空欄の直後は「renovation work ...」で名詞句だ。SVがない！ 逆接＋名詞句なら despite を選べ！',
  p5_conn_despite_vs_although_0026: '空欄の直後は「customer traffic(S) declines(V) ...」でSVがある！ 逆接＋SVなら although を選べ！',
  p5_conn_despite_vs_although_0027: '空欄の直後は「the original contract(S) had been approved(V)」でSVがある！ 逆接＋SVなら although を選べ！',
  p5_conn_despite_vs_although_0028: '空欄の直後は「several features(S) required(V) ...」でSVがある！ 逆接＋SVなら although を選べ！',
  p5_conn_despite_vs_although_0029: '空欄の直後は「demand(S) had softened(V) ...」でSVがある！ 逆接＋SVなら although を選べ！',
  p5_conn_despite_vs_although_0030: '空欄の直後は「the department(S) was(V) close ...」でSVがある！ 逆接＋SVなら although を選べ！',

  p5_conn_during_vs_while_0001: '空欄の直後は「the lunch break」で名詞句だ。SVがない！ 「〜の間に」＋名詞句なら during を選べ！',
  p5_conn_during_vs_while_0002: '空欄の直後は「the holiday weekend」で名詞句だ。SVがない！ 「〜の間に」＋名詞句なら during を選べ！',
  p5_conn_during_vs_while_0003: '空欄の直後は「the scheduled maintenance period」で名詞句だ。SVがない！ 「〜の間に」＋名詞句なら during を選べ！',
  p5_conn_during_vs_while_0004: '空欄の直後は「the afternoon promotion」で名詞句だ。SVがない！ 「〜の間に」＋名詞句なら during を選べ！',
  p5_conn_during_vs_while_0005: '空欄の直後は「the planning session」で名詞句だ。SVがない！ 「〜の間に」＋名詞句なら during を選べ！',
  p5_conn_during_vs_while_0026: '空欄の直後は「the technicians(S) were calibrating(V) ...」でSVがある！ 「〜している間」＋SVなら while を選べ！',
  p5_conn_during_vs_while_0027: '空欄の直後は「the reservation system(S) was being restarted(V)」でSVがある！ 「〜している間」＋SVなら while を選べ！',
  p5_conn_during_vs_while_0028: '空欄の直後は「the finance team(S) reviews(V) ...」でSVがある！ 「〜している間」＋SVなら while を選べ！',
  p5_conn_during_vs_while_0029: '空欄の直後は「they(S) are working(V) ...」でSVがある！ 「〜している間」＋SVなら while を選べ！',
  p5_conn_during_vs_while_0030: '空欄の直後は「workers(S) were completing(V) ...」でSVがある！ 「〜している間」＋SVなら while を選べ！'
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
