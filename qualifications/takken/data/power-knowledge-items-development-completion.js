(() => {
  "use strict";

  const cityPlanningAct = Object.freeze({
    id: "egov-city-planning-act-20260401",
    label: "e-Gov法令検索『都市計画法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/343AC0000000100?occasion_date=20260401",
    sourceType: "statute"
  });

  const shared = Object.freeze({ examYear: 2026, lawAsOf: "2026-04-01", factcheckStatus: "verified", conceptId: "takken-concept-development-completion", sourceUnitIds: ["development-permission-procedure"] });

  const knowledgeItems = [
    { ...shared, knowledgeId: "takken-k-development-completion-completion-notice", claim: "開発許可を受けた者は、開発区域または工区の全部について開発行為に関する工事を完了したとき、国土交通省令で定めるところにより、その旨を都道府県知事等に届け出なければならない。", conditions: ["都市計画法29条の開発許可を受けていること", "開発区域または工区の全部について対象工事を完了したこと"], exceptions: ["公共施設に関する部分については、その公共施設に関する工事の完了を対象として届出する。"], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u66-f1"] },
    { ...shared, knowledgeId: "takken-k-development-completion-conformity-inspection", claim: "工事完了の届出があったとき、都道府県知事等は遅滞なく、その工事が開発許可の内容に適合しているかを検査しなければならない。", conditions: ["都市計画法36条1項の工事完了届出があったこと"], exceptions: [], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u66-f2"] },
    { ...shared, knowledgeId: "takken-k-development-completion-inspection-certificate", claim: "工事完了検査の結果、工事が開発許可の内容に適合していると認められたとき、都道府県知事等は検査済証を開発許可を受けた者に交付しなければならない。", conditions: ["工事完了検査を実施したこと", "検査の結果、工事が開発許可の内容に適合していること"], exceptions: [], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u66-f2"] },
    { ...shared, knowledgeId: "takken-k-development-completion-public-notice", claim: "都道府県知事等は、検査済証を交付したとき、遅滞なく、国土交通省令で定めるところにより工事が完了した旨を公告しなければならない。", conditions: ["都市計画法36条2項により検査済証を交付したこと"], exceptions: [], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u66-f2"] }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate development-completion knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-development-completion") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u66-f1" || id === "u66-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 4) throw new Error(`Expected 4 development-completion knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsDevelopmentCompletion = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
