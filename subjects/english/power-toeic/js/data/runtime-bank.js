import { InMemoryQuestionBank } from './question-bank-adapter.js';
import { demoQuestions, demoSkills } from './fixtures.js';
import { buildPilotRuntime } from './pilot-question-set.js?v=20260904-short-pilot-v2';

export async function loadRuntimeQuestionBank({ url = './js/data/runtime/beta-bank.json' } = {}) {
  try {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) throw new Error(`runtime bank HTTP ${response.status}`);
    const payload = await response.json();
    if (payload?.format !== 'power-toeic-beta-runtime-bank-v1') throw new Error('unsupported runtime bank format');
    if (!Array.isArray(payload.questions) || !payload.questions.length) throw new Error('runtime bank has no questions');
    if (!Array.isArray(payload.skills) || !payload.skills.length) throw new Error('runtime bank has no skills');
    if (payload.questions.some((question) => question.validationStatus !== 'verified')) throw new Error('runtime bank contains non-verified question');

    const pilot = buildPilotRuntime(payload);
    return {
      repository: new InMemoryQuestionBank({ questions: pilot.questions, skills: pilot.skills }),
      runtimeInfo: Object.freeze({
        source: 'beta_verified_bank',
        questionCount: pilot.questions.length,
        skillCount: pilot.skills.length,
        productionApproved: false,
        notice: '判断ルール型の解説を確認する30問パイロットです。'
      })
    };
  } catch (error) {
    console.warn('Power TOEIC beta bank unavailable; using tiny synthetic fallback.', error);
    return {
      repository: new InMemoryQuestionBank({ questions: demoQuestions, skills: demoSkills }),
      runtimeInfo: Object.freeze({
        source: 'synthetic_fallback',
        questionCount: demoQuestions.length,
        skillCount: demoSkills.length,
        productionApproved: false,
        notice: 'β問題データを読み込めなかったため、3問の動作確認用fixtureを使用中です。'
      })
    };
  }
}
