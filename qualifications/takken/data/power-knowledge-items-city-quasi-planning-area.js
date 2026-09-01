(() => {
  "use strict";

  const cityPlanningAct = Object.freeze({
    id: "egov-city-planning-act-20260401",
    label: "e-Gov法令検索『都市計画法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/343AC0000000100?occasion_date=20260401",
    sourceType: "statute"
  });

  const shared = Object.freeze({ examYear: 2026, lawAsOf: "2026-04-01", factcheckStatus: "verified", conceptId: "takken-concept-city-quasi-planning-area", sourceUnitIds: ["city-planning-area"] });

  const knowledgeItems = [
    { ...shared, knowledgeId: "takken-k-city-quasi-planning-area-city-authority-prefecture", claim: "都市計画区域は、都市計画法5条に基づき、原則として都道府県が指定する。", conditions: ["都市計画法5条による都市計画区域の指定であること"], exceptions: ["二以上の都府県の区域にわたる都市計画区域については、同条の定める国土交通大臣の指定手続がある。"], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u61-f1"] },
    { ...shared, knowledgeId: "takken-k-city-quasi-planning-area-city-integrated-need", claim: "都市計画区域は、自然的・社会的条件や人口・土地利用・交通量等の現況・推移を勘案し、一体の都市として総合的に整備し、開発し、及び保全する必要がある区域について指定する。", conditions: ["市または政令所定の要件に該当する町村の中心市街地を含む区域等について都市計画区域を指定する場合"], exceptions: [], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u61-f1"] },
    { ...shared, knowledgeId: "takken-k-city-quasi-planning-area-city-cross-municipality", claim: "都市計画区域は、必要があるときは、対象となる市町村の行政区域外にわたって指定することができる。", conditions: ["一体の都市として指定するため必要があること"], exceptions: [], importance: "B", primarySources: [cityPlanningAct], sourceFactIds: ["u61-f1"] },
    { ...shared, knowledgeId: "takken-k-city-quasi-planning-area-quasi-authority-prefecture", claim: "準都市計画区域は、都市計画法5条の2に基づき、都道府県が指定する。", conditions: ["都市計画法5条の2による準都市計画区域の指定であること"], exceptions: [], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u61-f2"] },
    { ...shared, knowledgeId: "takken-k-city-quasi-planning-area-quasi-outside-city-area", claim: "準都市計画区域は、都市計画区域外の区域について指定される。", conditions: ["準都市計画区域の指定対象であること"], exceptions: ["準都市計画区域の全部または一部に都市計画区域が指定された場合、重複部分については準都市計画区域が廃止または変更されたものとみなされる。"], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u61-f2"] },
    { ...shared, knowledgeId: "takken-k-city-quasi-planning-area-quasi-land-use-risk", claim: "準都市計画区域は、相当数の建築物等の建築・建設または敷地造成が現に行われ、または見込まれる区域を含み、放置すれば土地利用の整序または環境保全上、将来の一体の都市としての整備・開発・保全に支障が生じるおそれがある一定の区域について指定できる。", conditions: ["都市計画区域外であること", "自然的・社会的条件や他法令による土地利用規制等の現況・推移を勘案すること"], exceptions: [], importance: "A", primarySources: [cityPlanningAct], sourceFactIds: ["u61-f2"] },
    { ...shared, knowledgeId: "takken-k-city-quasi-planning-area-quasi-hearing", claim: "都道府県が準都市計画区域を指定しようとするときは、あらかじめ関係市町村および都道府県都市計画審議会の意見を聴かなければならない。", conditions: ["準都市計画区域を指定しようとする場合"], exceptions: [], importance: "B", primarySources: [cityPlanningAct], sourceFactIds: ["u61-f2"] }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate city-quasi-planning-area knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-city-quasi-planning-area") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u61-f1" || id === "u61-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 7) throw new Error(`Expected 7 city-quasi-planning-area knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsCityQuasiPlanningArea = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
