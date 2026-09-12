export const DEFAULT_SOURCE_ROOT = 'https://raw.githubusercontent.com/cureflash/tmp/main/kakunen-question-scope';
const STATUS_FILES = [1, 2, 3, 4, 5].map((n) => `status/worker-${n}.md`);

function normalize(value) {
  return String(value ?? '').trim().replace(/\s+/g, ' ');
}

function hashText(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function parseCompletedTopics(markdown) {
  const match = /^- completed:\s*(.+)$/m.exec(markdown);
  if (!match) return [];
  const value = match[1].trim();
  if (!value || value === 'なし' || value.toLowerCase() === 'none') return [];
  return value.split(',').map((item) => item.trim()).filter(Boolean);
}

function parseInlineChoices(value) {
  if (!value) return null;
  try {
    const parsed = JSON.parse(value);
    if (!Array.isArray(parsed) || parsed.length !== 4) return null;
    const choices = parsed.map((choice) => normalize(choice));
    if (choices.some((choice) => !choice) || new Set(choices).size !== 4) return null;
    return choices;
  } catch {
    return null;
  }
}

function parseSourceUrls(value) {
  return String(value ?? '')
    .split(/\s*[;；]\s*/)
    .map((item) => item.trim())
    .filter((item) => /^https?:\/\//.test(item));
}

export function parseTopicMarkdown(markdown, requestedTopicId = null) {
  const titleMatch = /^#\s+([A-Z]+-\d+)\s+(.+)$/m.exec(markdown);
  const topicId = requestedTopicId ?? titleMatch?.[1] ?? null;
  if (!topicId) throw new Error('Topic id is missing');
  const label = titleMatch?.[2]?.trim() || topicId;
  const chunks = markdown.split(/^###\s+/m).slice(1);
  const questions = [];

  for (const chunk of chunks) {
    const lines = chunk.split('\n');
    const id = lines.shift()?.trim();
    if (!id || !id.startsWith(`${topicId}-Q`)) continue;
    const fields = new Map();
    for (const line of lines) {
      const match = /^-\s+([^:：]+)[:：]\s*(.*)$/.exec(line.trim());
      if (match) fields.set(match[1].trim(), match[2].trim());
    }

    const verified = /^true$/i.test(fields.get('verified') ?? '');
    const sentence = fields.get('問題文');
    const answer = fields.get('正答');
    if (!verified || !sentence || !answer) continue;

    const rawChoices = fields.get('選択肢');
    const curatedChoices = parseInlineChoices(rawChoices);
    if (rawChoices != null && !curatedChoices) throw new Error(`Invalid authored choices: ${id}`);
    if (fields.has('正答選択肢') && !curatedChoices) throw new Error(`Correct choice requires authored choices: ${id}`);

    const correctLetter = normalize(fields.get('正答選択肢')).toUpperCase();
    let correctIndex = /^[ABCD]$/.test(correctLetter) ? correctLetter.charCodeAt(0) - 65 : -1;
    if (curatedChoices && correctIndex < 0) correctIndex = curatedChoices.findIndex((choice) => choice === normalize(answer));
    if (curatedChoices && (correctIndex < 0 || correctIndex > 3)) throw new Error(`Invalid curated correct choice: ${id}`);
    if (curatedChoices && curatedChoices[correctIndex] !== normalize(answer)) {
      throw new Error(`Authored correct choice does not match canonical answer: ${id}`);
    }

    questions.push({
      id,
      topicId,
      label,
      sentence: normalize(sentence),
      answer: normalize(answer),
      explanation: normalize(fields.get('解説')),
      sourceUrls: parseSourceUrls(fields.get('出典')),
      curatedChoices,
      curatedCorrectIndex: correctIndex,
    });
  }
  return { topicId, label, questions };
}

function uniqueAnswers(questions) {
  const seen = new Set();
  const values = [];
  for (const question of questions) {
    const value = normalize(question.answer);
    if (!value || seen.has(value)) continue;
    seen.add(value);
    values.push(value);
  }
  return values;
}

function fallbackChoices(question, topicQuestions, allQuestions) {
  const correct = normalize(question.answer);
  const localPool = uniqueAnswers(topicQuestions).filter((value) => value !== correct);
  const globalPool = uniqueAnswers(allQuestions).filter((value) => value !== correct && !localPool.includes(value));
  const candidates = [...localPool, ...globalPool]
    .sort((a, b) => Math.abs(a.length - correct.length) - Math.abs(b.length - correct.length) || a.localeCompare(b));
  if (candidates.length < 3) throw new Error(`Not enough distractors for ${question.id}`);
  const offset = hashText(question.id) % candidates.length;
  const distractors = [];
  for (let i = 0; distractors.length < 3 && i < candidates.length; i += 1) {
    const candidate = candidates[(offset + i) % candidates.length];
    if (!distractors.includes(candidate)) distractors.push(candidate);
  }
  const correctIndex = hashText(`${question.id}:answer`) % 4;
  const choices = [...distractors];
  choices.splice(correctIndex, 0, correct);
  return { choices, correctIndex };
}

export function buildRuntimeQuestionBank(topicDocs) {
  const parsedTopics = topicDocs.map(({ topicId, markdown }) => parseTopicMarkdown(markdown, topicId));
  const allQuestions = parsedTopics.flatMap((topic) => topic.questions);
  const skills = parsedTopics
    .filter((topic) => topic.questions.length > 0)
    .map((topic) => ({ id: topic.topicId, label: `${topic.topicId} ${topic.label}`, categoryId: topic.topicId.split('-')[0] }));

  const questions = [];
  for (const topic of parsedTopics) {
    for (const source of topic.questions) {
      const choiceModel = source.curatedChoices
        ? { choices: source.curatedChoices, correctIndex: source.curatedCorrectIndex }
        : fallbackChoices(source, topic.questions, allQuestions);
      questions.push(Object.freeze({
        id: source.id,
        version: 1,
        skillId: source.topicId,
        categoryId: source.topicId.split('-')[0],
        sentence: source.sentence,
        choices: Object.freeze([...choiceModel.choices]),
        correctIndex: choiceModel.correctIndex,
        explanation: source.explanation,
        validationStatus: 'verified',
        sourceUrls: Object.freeze([...source.sourceUrls]),
        choiceAuthority: source.curatedChoices ? 'authored' : 'derived_from_verified_answers',
      }));
    }
  }

  return Object.freeze({
    format: 'power-nuclear-fuel-runtime-v1',
    skills: Object.freeze(skills),
    questions: Object.freeze(questions),
  });
}

async function fetchText(fetchImpl, url) {
  const response = await fetchImpl(url, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Question source HTTP ${response.status}: ${url}`);
  return response.text();
}

export async function loadRuntimeQuestionBank({ fetchImpl = fetch, root = DEFAULT_SOURCE_ROOT } = {}) {
  const statuses = await Promise.all(STATUS_FILES.map((path) => fetchText(fetchImpl, `${root}/${path}`)));
  const completed = [...new Set(statuses.flatMap(parseCompletedTopics))];
  if (!completed.length) throw new Error('No completed nuclear-fuel topics');
  const topicDocs = await Promise.all(completed.map(async (topicId) => ({
    topicId,
    markdown: await fetchText(fetchImpl, `${root}/questions/${topicId}.md`),
  })));
  return buildRuntimeQuestionBank(topicDocs);
}
