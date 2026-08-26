const MODES = new Set(['QUICK', 'TRAINING', 'POWER', 'WEAKNESS', 'CUSTOM', 'TEST', 'REVIEW']);
const LABEL_POLICIES = new Set(['show_skill', 'hide_skill']);
const SELECTION_POLICIES = new Set(['standard', 'review_due']);

function freezeRecipe(recipe) {
  return Object.freeze({
    ...recipe,
    skillAllocations: Object.freeze(recipe.skillAllocations.map((entry) => Object.freeze({ ...entry }))),
  });
}

export function createWorkoutRecipe({
  mode,
  totalCount,
  skillAllocations = [],
  selectionPolicy = 'standard',
  labelPolicy = mode === 'TEST' ? 'hide_skill' : 'show_skill',
  seed = 1,
  endless = false,
} = {}) {
  const normalized = {
    mode: String(mode ?? '').toUpperCase(),
    totalCount: Number(totalCount),
    skillAllocations: skillAllocations.map(({ skillId, count, weight }) => ({
      skillId: String(skillId ?? ''),
      ...(count == null ? {} : { count: Number(count) }),
      ...(weight == null ? {} : { weight: Number(weight) }),
    })),
    selectionPolicy,
    labelPolicy,
    seed: Number(seed),
    endless: Boolean(endless),
  };
  validateWorkoutRecipe(normalized);
  return freezeRecipe(normalized);
}

export function validateWorkoutRecipe(recipe) {
  if (!MODES.has(recipe.mode)) throw new Error(`Unsupported workout mode: ${recipe.mode}`);
  if (!Number.isInteger(recipe.totalCount) || recipe.totalCount <= 0) throw new Error('totalCount must be a positive integer');
  if (!Number.isInteger(recipe.seed) || recipe.seed < 0) throw new Error('seed must be a non-negative integer');
  if (!SELECTION_POLICIES.has(recipe.selectionPolicy)) throw new Error(`Unsupported selectionPolicy: ${recipe.selectionPolicy}`);
  if (!LABEL_POLICIES.has(recipe.labelPolicy)) throw new Error(`Unsupported labelPolicy: ${recipe.labelPolicy}`);
  if (!Array.isArray(recipe.skillAllocations)) throw new Error('skillAllocations must be an array');

  const seen = new Set();
  let explicitCount = 0;
  for (const entry of recipe.skillAllocations) {
    if (!entry.skillId) throw new Error('skill allocation requires skillId');
    if (seen.has(entry.skillId)) throw new Error(`Duplicate skill allocation: ${entry.skillId}`);
    seen.add(entry.skillId);
    const hasCount = entry.count != null;
    const hasWeight = entry.weight != null;
    if (hasCount === hasWeight) throw new Error(`Skill ${entry.skillId} must specify exactly one of count or weight`);
    if (hasCount) {
      if (!Number.isInteger(entry.count) || entry.count <= 0) throw new Error(`Invalid count for ${entry.skillId}`);
      explicitCount += entry.count;
    }
    if (hasWeight && (!Number.isFinite(entry.weight) || entry.weight <= 0)) throw new Error(`Invalid weight for ${entry.skillId}`);
  }
  if (explicitCount > recipe.totalCount) throw new Error('Skill allocation counts exceed totalCount');
  if (recipe.mode === 'TEST' && recipe.labelPolicy !== 'hide_skill') throw new Error('TEST mode must hide skill labels');
  if (recipe.mode === 'REVIEW' && recipe.selectionPolicy !== 'review_due') throw new Error('REVIEW mode must use review_due selection');
  return true;
}

function hashSeed(seed, text) {
  let h = (2166136261 ^ seed) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

function historyByQuestion(attempts = []) {
  const map = new Map();
  attempts.forEach((attempt, index) => {
    const id = attempt.questionId;
    if (!id) return;
    const when = Date.parse(attempt.answeredAt ?? attempt.timestamp ?? '') || index;
    const previous = map.get(id);
    if (!previous || when >= previous.lastSeen) map.set(id, { lastSeen: when, seenCount: (previous?.seenCount ?? 0) + 1 });
    else previous.seenCount += 1;
  });
  return map;
}

function rankCandidates(questions, attempts, seed) {
  const history = historyByQuestion(attempts);
  return [...questions].sort((a, b) => {
    const ah = history.get(a.id);
    const bh = history.get(b.id);
    if (!ah && bh) return -1;
    if (ah && !bh) return 1;
    if (ah && bh && ah.lastSeen !== bh.lastSeen) return ah.lastSeen - bh.lastSeen;
    return hashSeed(seed, a.id) - hashSeed(seed, b.id) || a.id.localeCompare(b.id);
  });
}

function allocationCounts(recipe) {
  if (!recipe.skillAllocations.length) return [];
  const result = recipe.skillAllocations.map((entry) => ({ ...entry, resolvedCount: entry.count ?? 0 }));
  let remaining = recipe.totalCount - result.reduce((sum, entry) => sum + entry.resolvedCount, 0);
  const weighted = result.filter((entry) => entry.weight != null);
  if (!weighted.length) return result;
  const weightTotal = weighted.reduce((sum, entry) => sum + entry.weight, 0);
  const weightedBudget = remaining;
  weighted.forEach((entry) => {
    const share = Math.floor((weightedBudget * entry.weight) / weightTotal);
    entry.resolvedCount += share;
    remaining -= share;
  });
  let cursor = 0;
  while (remaining > 0 && weighted.length) {
    weighted[cursor % weighted.length].resolvedCount += 1;
    cursor += 1;
    remaining -= 1;
  }
  return result;
}

export function selectQuestionIds({ repository, recipe, attempts = [], reviewQuestionIds = [] }) {
  validateWorkoutRecipe(recipe);
  const selected = [];
  const used = new Set();
  const reviewSet = new Set(reviewQuestionIds);
  const addFrom = (questions, count, salt) => {
    for (const question of rankCandidates(questions, attempts, recipe.seed + salt)) {
      if (selected.length >= recipe.totalCount || count <= 0) break;
      if (used.has(question.id)) continue;
      used.add(question.id);
      selected.push(question.id);
      count -= 1;
    }
  };

  if (recipe.selectionPolicy === 'review_due') {
    addFrom(repository.listQuestions().filter((q) => reviewSet.has(q.id)), recipe.totalCount, 9000);
    return Object.freeze(selected);
  }

  const allocations = allocationCounts(recipe);
  allocations.forEach((entry, index) => addFrom(repository.listQuestions({ skillId: entry.skillId }), entry.resolvedCount, index + 1));
  if (selected.length < recipe.totalCount) addFrom(repository.listQuestions(), recipe.totalCount - selected.length, 5000);
  return Object.freeze(selected);
}

export function createPresetRecipe(mode, { skillId = null, totalCount, seed = 1, endless = false } = {}) {
  const upper = String(mode).toUpperCase();
  const defaults = { QUICK: 10, TRAINING: 30, POWER: 100, TEST: 30, REVIEW: 30 };
  const count = totalCount ?? defaults[upper];
  if (!count) throw new Error(`Preset requires totalCount: ${upper}`);
  if ((upper === 'TRAINING' || upper === 'POWER') && !skillId) throw new Error(`${upper} preset requires skillId`);
  return createWorkoutRecipe({
    mode: upper,
    totalCount: count,
    skillAllocations: skillId ? [{ skillId, count }] : [],
    selectionPolicy: upper === 'REVIEW' ? 'review_due' : 'standard',
    labelPolicy: upper === 'TEST' ? 'hide_skill' : 'show_skill',
    seed,
    endless,
  });
}

export function createWeaknessWorkoutRecipe(rankedWeaknesses, { totalCount = 30, maxSkills = 3, seed = 1 } = {}) {
  const eligible = rankedWeaknesses.filter((entry) => entry?.skillId).slice(0, maxSkills);
  if (!eligible.length) throw new Error('Cannot build weakness workout without demonstrated weak skills');
  const allocations = eligible.map((entry, index) => ({
    skillId: entry.skillId,
    weight: Math.max(1, Number(entry.score) || (eligible.length - index)),
  }));
  return createWorkoutRecipe({ mode: 'WEAKNESS', totalCount, skillAllocations: allocations, seed });
}
