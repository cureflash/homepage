(() => {
  "use strict";

  const cityPlanningAct = Object.freeze({
    id: "egov-city-planning-act-20260401",
    label: "e-Gov法令検索『都市計画法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/343AC0000000100?occasion_date=20260401",
    sourceType: "statute"
  });

  const shared = Object.freeze({ examYear: 2026, lawAsOf: "2026-04-01", factcheckStatus: "verified", conceptId: "takken-concept-area-division", sourceUnitIds: ["area-division"] });

  const knowledgeItems = [
    { ...shared, knowledgeId: "takken-k-area-division-purpose-and-two-zones", claim: "区域区分は、無秩序な市街化を防止し計画的な市街化を図るため、都市計画区域を市街化区域と市街化調整区域に区分する制度である。", conditions: ["都市計画法7条による区域区分であること"], exceptions: ["都市計画法7条1項は、一定の都市計画区域について区域区分を定めるものとする場合を別途定めている。"], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u62-f1"] },
    { ...shared, knowledgeId: "takken-k-area-division-urbanization-existing-built-up", claim: "市街化区域には、既に市街地を形成している区域が含まれる。", conditions: ["都市計画法7条2項の市街化区域に該当すること"], exceptions: [], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u62-f2"] },
    { ...shared, knowledgeId: "takken-k-area-division-urbanization-ten-years", claim: "市街化区域には、おおむね10年以内に優先的かつ計画的に市街化を図るべき区域が含まれる。", conditions: ["都市計画法7条2項の市街化区域に該当すること"], exceptions: [], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u62-f2"] },
    { ...shared, knowledgeId: "takken-k-area-division-control-suppress-urbanization", claim: "市街化調整区域は、市街化を抑制すべき区域である。", conditions: ["都市計画法7条3項の市街化調整区域に該当すること"], exceptions: [], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u62-f2"] }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate area-division knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-area-division") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u62-f1" || id === "u62-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 4) throw new Error(`Expected 4 area-division knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsAreaDivision = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
