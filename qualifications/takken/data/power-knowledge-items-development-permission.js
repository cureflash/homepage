(() => {
  "use strict";

  const cityPlanningAct = Object.freeze({
    id: "egov-city-planning-act-20260401",
    label: "e-Gov法令検索『都市計画法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/343AC0000000100?occasion_date=20260401",
    sourceType: "statute"
  });

  const shared = Object.freeze({ examYear: 2026, lawAsOf: "2026-04-01", factcheckStatus: "verified", conceptId: "takken-concept-development-permission", sourceUnitIds: ["development-permission-required"] });

  const knowledgeItems = [
    { ...shared, knowledgeId: "takken-k-development-permission-city-quasi-general-rule", claim: "都市計画区域または準都市計画区域内で開発行為をしようとする者は、都市計画法29条1項の許可不要例外に該当する場合を除き、あらかじめ開発許可を受けなければならない。", conditions: ["都市計画区域または準都市計画区域内で開発行為をしようとすること"], exceptions: ["都市計画法29条1項各号に掲げる開発行為は許可不要となる。"], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u65-f1"] },
    { ...shared, knowledgeId: "takken-k-development-permission-authority", claim: "都市計画法29条の開発許可の許可権者は都道府県知事等である。", conditions: ["都市計画法29条に基づく開発許可であること"], exceptions: ["指定都市・中核市その他法令上権限を有する市では、その市長が許可権者となる場合がある。"], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u65-f1"] },
    { ...shared, knowledgeId: "takken-k-development-permission-small-scale-exemption", claim: "市街化区域、区域区分が定められていない都市計画区域または準都市計画区域内で行う開発行為のうち、区域区分に応じて政令で定める規模未満のものは、都市計画法29条1項1号により開発許可を要しない。", conditions: ["市街化区域、区域区分が定められていない都市計画区域、または準都市計画区域内であること", "開発行為の規模が政令で定める規模未満であること"], exceptions: ["市街化調整区域については、この小規模開発の許可不要規定は適用されない。"], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u65-f2"] },
    { ...shared, knowledgeId: "takken-k-development-permission-agriculture-exemption", claim: "市街化調整区域、区域区分が定められていない都市計画区域または準都市計画区域内で、農林漁業の用に供する政令所定の建築物またはこれらの業務を営む者の居住用建築物の建築を目的として行う開発行為は、都市計画法29条1項2号により開発許可を要しない。", conditions: ["対象区域が市街化調整区域、区域区分が定められていない都市計画区域、または準都市計画区域であること", "農林漁業用の政令所定建築物または農林漁業従事者の居住用建築物の建築を目的とすること"], exceptions: ["市街化区域は同号の対象区域に含まれない。"], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u65-f2"] },
    { ...shared, knowledgeId: "takken-k-development-permission-public-interest-building-exemption", claim: "駅舎その他の鉄道施設、図書館、公民館その他これらに類する公益上必要な建築物のうち、政令で定めるものの建築を目的として行う開発行為は、都市計画法29条1項3号により開発許可を要しない。", conditions: ["公益上必要な建築物であること", "開発区域および周辺地域の適正・合理的な土地利用と環境保全に支障がないものとして政令で定める建築物であること"], exceptions: ["公益性があるというだけで全ての建築物が当然に許可不要となるわけではない。"], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u65-f2"] },
    { ...shared, knowledgeId: "takken-k-development-permission-city-planning-project-exemption", claim: "都市計画事業の施行として行う開発行為は、都市計画法29条1項4号により開発許可を要しない。", conditions: ["都市計画事業の施行として行う開発行為であること"], exceptions: [], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u65-f2"] },
    { ...shared, knowledgeId: "takken-k-development-permission-land-readjustment-exemption", claim: "土地区画整理事業の施行として行う開発行為は、都市計画法29条1項5号により開発許可を要しない。", conditions: ["土地区画整理事業の施行として行う開発行為であること"], exceptions: [], importance: "B", primarySources: [cityPlanningAct], sourceFactIds: ["u65-f2"] },
    { ...shared, knowledgeId: "takken-k-development-permission-disaster-emergency-exemption", claim: "非常災害のため必要な応急措置として行う開発行為は、都市計画法29条1項10号により開発許可を要しない。", conditions: ["非常災害のため必要な応急措置として行うこと"], exceptions: [], importance: "B", primarySources: [cityPlanningAct], sourceFactIds: ["u65-f2"] },
    { ...shared, knowledgeId: "takken-k-development-permission-ordinary-management-exemption", claim: "通常の管理行為、軽易な行為その他政令で定める開発行為は、都市計画法29条1項11号により開発許可を要しない。", conditions: ["通常の管理行為、軽易な行為その他政令で定める開発行為に該当すること"], exceptions: [], importance: "B", primarySources: [cityPlanningAct], sourceFactIds: ["u65-f2"] }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate development-permission knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-development-permission") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u65-f1" || id === "u65-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 9) throw new Error(`Expected 9 development-permission knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsDevelopmentPermission = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
