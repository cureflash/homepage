(() => {
  "use strict";

  const buildingStandardsAct = Object.freeze({
    id: "egov-building-standards-act-20260401",
    label: "e-Gov法令検索『建築基準法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/325AC0000000201?occasion_date=20260401",
    sourceType: "statute"
  });

  const shared = Object.freeze({ examYear: 2026, lawAsOf: "2026-04-01", factcheckStatus: "verified", conceptId: "takken-concept-building-coverage-ratio", sourceUnitIds: ["building-coverage-ratio"] });

  const knowledgeItems = [
    { ...shared, knowledgeId: "takken-k-building-coverage-ratio-definition", claim: "建ぺい率は、建築物の建築面積の敷地面積に対する割合である。", conditions: ["建築基準法53条の建ぺい率を算定すること"], exceptions: [], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u69-f1"] },
    { ...shared, knowledgeId: "takken-k-building-coverage-ratio-designated-limit", claim: "建築基準法53条1項は、用途地域等の区分に応じ、都市計画で定める数値などを建ぺい率の限度としている。", conditions: ["53条1項が対象とする地域・区域内の建築物であること"], exceptions: ["53条3項から6項等の緩和・特例・適用除外が適用される場合がある。"], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u69-f1"] },
    { ...shared, knowledgeId: "takken-k-building-coverage-ratio-fire-relaxation", claim: "防火地域内の耐火建築物等、または準防火地域内の耐火建築物等・準耐火建築物等で法定要件を満たすものは、建ぺい率の限度が10分の1加算される。", conditions: ["建築基準法53条3項1号の地域・建築物要件を満たすこと"], exceptions: ["都市計画で定める建ぺい率が10分の8で、防火地域内の耐火建築物等として53条6項の適用除外に該当する場合は、単なる10分の1加算ではなく建ぺい率制限自体が適用されない。"], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u69-f2"] },
    { ...shared, knowledgeId: "takken-k-building-coverage-ratio-corner-relaxation", claim: "街区の角にある敷地またはこれに準ずる敷地で特定行政庁が指定するものにある建築物は、建ぺい率の限度が10分の1加算される。", conditions: ["特定行政庁が指定する角地等であること"], exceptions: [], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u69-f2"] },
    { ...shared, knowledgeId: "takken-k-building-coverage-ratio-double-relaxation", claim: "建築基準法53条3項の防火・準防火関係の緩和要件と角地等の緩和要件の双方に該当する建築物は、建ぺい率の限度が合計で10分の2加算される。", conditions: ["53条3項1号と2号の双方に該当すること"], exceptions: ["53条6項の適用除外に該当する場合は、その適用除外が優先する。"], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u69-f2"] },
    { ...shared, knowledgeId: "takken-k-building-coverage-ratio-wall-line-permit", claim: "隣地側または前面道路側に壁面線の指定等がある建築物については、特定行政庁が安全上、防火上および衛生上支障がないと認めて許可した場合、許可の範囲内で建ぺい率制限を緩和できる。", conditions: ["建築基準法53条4項または5項の法定要件を満たすこと", "特定行政庁の許可を受けること"], exceptions: [], importance: "B", primarySources: [buildingStandardsAct], sourceFactIds: ["u69-f2"] },
    { ...shared, knowledgeId: "takken-k-building-coverage-ratio-energy-retrofit-permit", claim: "建築物のエネルギー消費性能向上のため必要な外壁等の工事で、構造上やむを得ないものとして国土交通省令で定める場合には、特定行政庁の許可により許可の範囲内で建ぺい率制限を緩和できる。", conditions: ["建築基準法53条5項の法定要件を満たすこと", "特定行政庁の許可を受けること"], exceptions: [], importance: "C", primarySources: [buildingStandardsAct], sourceFactIds: ["u69-f2"] },
    { ...shared, knowledgeId: "takken-k-building-coverage-ratio-eighty-percent-fire-exclusion", claim: "都市計画で定める建ぺい率が10分の8の地域内で、かつ防火地域内にある耐火建築物等に該当する場合は、建築基準法53条の建ぺい率制限が適用されない。", conditions: ["都市計画で定める建ぺい率が10分の8であること", "防火地域内であること", "法定の耐火建築物等であること"], exceptions: [], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u69-f2"] },
    { ...shared, knowledgeId: "takken-k-building-coverage-ratio-public-facility-exclusion", claim: "巡査派出所、公衆便所、公共用歩廊その他法令所定の建築物などには、建築基準法53条6項により建ぺい率制限が適用されない場合がある。", conditions: ["53条6項各号の法定要件に該当すること"], exceptions: ["公園、広場、道路、川等の内にある建築物は、法定要件に加えて特定行政庁の許可を要する類型がある。"], importance: "C", primarySources: [buildingStandardsAct], sourceFactIds: ["u69-f2"] }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate building-coverage-ratio knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-building-coverage-ratio") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u69-f1" || id === "u69-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 9) throw new Error(`Expected 9 building-coverage-ratio knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsBuildingCoverageRatio = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
