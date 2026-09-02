(() => {
  "use strict";

  const cityPlanningAct = Object.freeze({
    id: "egov-city-planning-act-20260401",
    label: "e-Gov法令検索『都市計画法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/343AC0000000100?occasion_date=20260401",
    sourceType: "statute"
  });

  const shared = Object.freeze({ examYear: 2026, lawAsOf: "2026-04-01", factcheckStatus: "verified", conceptId: "takken-concept-city-planning-decision", sourceUnitIds: ["city-planning-decisions"] });

  const knowledgeItems = [
    { ...shared, knowledgeId: "takken-k-city-planning-decision-prefecture-specified-plans", claim: "都市計画法15条1項に列挙される都市計画は、原則として都道府県が定める。", conditions: ["都市計画法15条1項に列挙される都市計画を問う場合"], exceptions: ["都市計画法15条には、指定都市等に関する特例その他の法定特例があるため、個別の都市計画については適用条項を確認する。"], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u64-f1"] },
    { ...shared, knowledgeId: "takken-k-city-planning-decision-municipality-other-plans", claim: "都市計画法15条1項により、同項に列挙されるもの以外の都市計画は、原則として市町村が定める。", conditions: ["都市計画法15条1項の都道府県決定事項に該当しない都市計画を問う場合"], exceptions: ["都市計画法その他の法令に特例がある場合は、その特例が優先する。"], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u64-f1"] },
    { ...shared, knowledgeId: "takken-k-city-planning-decision-project-municipality-authorization", claim: "都市計画事業は、原則として市町村が都道府県知事の認可を受けて施行する。第一号法定受託事務として施行する場合は、認可権者は国土交通大臣である。", conditions: ["都市計画法59条1項に基づき市町村が都市計画事業を施行する場合"], exceptions: ["第一号法定受託事務として施行する場合は都道府県知事ではなく国土交通大臣の認可を受ける。"], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u64-f2"] },
    { ...shared, knowledgeId: "takken-k-city-planning-decision-project-prefecture-authorization", claim: "市町村による施行が困難または不適当な場合その他特別の事情があるときは、都道府県が国土交通大臣の認可を受けて都市計画事業を施行できる。", conditions: ["市町村が施行することが困難または不適当な場合その他特別の事情があること", "都市計画法59条2項に基づき都道府県が施行すること"], exceptions: [], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u64-f2"] },
    { ...shared, knowledgeId: "takken-k-city-planning-decision-project-national-approval", claim: "国の機関は、国土交通大臣の承認を受けて、国の利害に重大な関係を有する都市計画事業を施行できる。", conditions: ["施行者が国の機関であること", "国の利害に重大な関係を有する都市計画事業であること"], exceptions: [], importance: "B", primarySources: [cityPlanningAct], sourceFactIds: ["u64-f2"] },
    { ...shared, knowledgeId: "takken-k-city-planning-decision-project-private-authorization", claim: "国の機関、都道府県および市町村以外の者は、法定の特別な事情等がある場合、都道府県知事の認可を受けて都市計画事業を施行できる。", conditions: ["施行者が国の機関、都道府県、市町村以外の者であること", "都市計画法59条4項の要件を満たすこと"], exceptions: [], importance: "B", primarySources: [cityPlanningAct], sourceFactIds: ["u64-f2"] }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate city-planning-decision knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-city-planning-decision") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u64-f1" || id === "u64-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 6) throw new Error(`Expected 6 city-planning-decision knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsCityPlanningDecision = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
