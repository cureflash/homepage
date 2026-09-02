(() => {
  "use strict";

  const buildingStandardsAct = Object.freeze({
    id: "egov-building-standards-act-20260401",
    label: "e-Gov法令検索『建築基準法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/325AC0000000201?occasion_date=20260401",
    sourceType: "statute"
  });

  const shared = Object.freeze({ examYear: 2026, lawAsOf: "2026-04-01", factcheckStatus: "verified", conceptId: "takken-concept-floor-area-ratio", sourceUnitIds: ["floor-area-ratio"] });

  const knowledgeItems = [
    { ...shared, knowledgeId: "takken-k-floor-area-ratio-definition", claim: "容積率は、建築物の延べ面積の敷地面積に対する割合である。", conditions: ["建築基準法52条の容積率を算定すること"], exceptions: ["法令上、容積率算定の延べ面積に算入しない床面積がある。"], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u70-f1"] },
    { ...shared, knowledgeId: "takken-k-floor-area-ratio-designated-limit", claim: "建築基準法52条1項は、用途地域等の区分に応じ、都市計画で定める数値などを容積率の限度としている。", conditions: ["52条1項が対象とする地域・区域内の建築物であること"], exceptions: ["前面道路幅員が12m未満の場合などは、別の法定制限も併せて適用される。"], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u70-f1"] },
    { ...shared, knowledgeId: "takken-k-floor-area-ratio-front-road-under-twelve", claim: "前面道路の幅員が12m未満の場合、前面道路幅員に法定の数値を乗じて得た割合による容積率制限が適用される。", conditions: ["前面道路の幅員が12m未満であること"], exceptions: ["建築基準法52条の法定要件により別の取扱いとなる場合がある。"], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u70-f2"] },
    { ...shared, knowledgeId: "takken-k-floor-area-ratio-residential-road-factor", claim: "前面道路幅員による容積率制限では、住居系用途地域について原則として前面道路幅員に10分の4を乗じる。", conditions: ["前面道路の幅員が12m未満であること", "建築基準法52条2項が定める住居系用途地域に該当すること"], exceptions: ["法令または都市計画により異なる数値を用いる場合がある。"], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u70-f2"] },
    { ...shared, knowledgeId: "takken-k-floor-area-ratio-nonresidential-road-factor", claim: "前面道路幅員による容積率制限では、住居系用途地域以外について原則として前面道路幅員に10分の6を乗じる。", conditions: ["前面道路の幅員が12m未満であること", "建築基準法52条2項が定める住居系用途地域以外に該当すること"], exceptions: ["法令または都市計画により異なる数値を用いる場合がある。"], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u70-f2"] },
    { ...shared, knowledgeId: "takken-k-floor-area-ratio-lower-limit-controls", claim: "前面道路幅員が12m未満の場合は、都市計画等による指定容積率と前面道路幅員による容積率を比較し、原則として小さい方が容積率の上限となる。", conditions: ["前面道路幅員による容積率制限が適用されること"], exceptions: ["建築基準法52条の特例が適用される場合がある。"], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u70-f1", "u70-f2"] },
    { ...shared, knowledgeId: "takken-k-floor-area-ratio-multiple-zones-weighted-average", claim: "敷地が容積率制限の異なる2以上の地域・区域にわたる場合、敷地全体の容積率限度は各部分の面積に応じて加重平均して求める。", conditions: ["敷地が容積率制限の異なる2以上の地域・区域にわたること"], exceptions: [], importance: "B", primarySources: [buildingStandardsAct], sourceFactIds: ["u70-f1"] }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate floor-area-ratio knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-floor-area-ratio") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u70-f1" || id === "u70-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 7) throw new Error(`Expected 7 floor-area-ratio knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsFloorAreaRatio = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
