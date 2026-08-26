const MODE_LABELS = Object.freeze({
  QUICK: 'クイック',
  TRAINING: '集中トレーニング',
  POWER: 'POWER',
  WEAKNESS: '弱点トレーニング',
  CUSTOM: 'カスタム',
  TEST: 'ミックステスト',
  REVIEW: '復習',
});

export function getQuestionPresentation({ recipe, question, skillLabels = new Map() }) {
  const modeLabel = MODE_LABELS[recipe.mode] ?? recipe.mode;
  const skillLabel = recipe.labelPolicy === 'hide_skill'
    ? null
    : (skillLabels.get(question.skillId) ?? null);

  return Object.freeze({
    modeLabel,
    skillLabel,
    contextText: skillLabel ? `${modeLabel} ・ ${skillLabel}` : modeLabel,
  });
}
