(() => {
  "use strict";

  const cityPlanningAct = Object.freeze({
    id: "egov-city-planning-act-20260401",
    label: "e-Gov法令検索『都市計画法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/343AC0000000100?occasion_date=20260401",
    sourceType: "statute"
  });

  const buildingStandardsAct = Object.freeze({
    id: "egov-building-standards-act-20260401",
    label: "e-Gov法令検索『建築基準法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/325AC0000000201?occasion_date=20260401",
    sourceType: "statute"
  });

  const shared = Object.freeze({ examYear: 2026, lawAsOf: "2026-04-01", factcheckStatus: "verified", conceptId: "takken-concept-use-districts", sourceUnitIds: ["use-districts"] });

  const knowledgeItems = [
    { ...shared, knowledgeId: "takken-k-use-districts-regional-district", claim: "用途地域は、都市計画法8条に定める地域地区の一つである。", conditions: ["都市計画法8条の地域地区に関する位置付けを問う場合"], exceptions: [], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u63-f1"] },
    { ...shared, knowledgeId: "takken-k-use-districts-building-use-restrictions", claim: "用途地域が定められた区域では、建築基準法48条により、用途地域ごとに建築できる建築物の用途が制限される。", conditions: ["用途地域内の建築物の用途制限を問う場合"], exceptions: ["建築基準法48条各項には、特定行政庁の許可等により例外的に建築できる場合がある。"], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u63-f2"] }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate use-districts knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-use-districts") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u63-f1" || id === "u63-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 2) throw new Error(`Expected 2 use-districts knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsUseDistricts = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
