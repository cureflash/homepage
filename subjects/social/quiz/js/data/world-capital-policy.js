// Additional cases where a single bare "capital" prompt is pedagogically
// misleading even if the canonical country table stores one conventional value.
// Keep these countries in name/flag map drills, but exclude them from modes that
// require one unqualified capital answer.
export const CAPITAL_MODE_EXCLUDED_CODES = new Set([
  "BO" // Sucre is the constitutional capital; La Paz is the seat of government.
]);

export function isCapitalQuizEligible(country) {
  return Boolean(country?.capitalQuiz) && !CAPITAL_MODE_EXCLUDED_CODES.has(country.code);
}
