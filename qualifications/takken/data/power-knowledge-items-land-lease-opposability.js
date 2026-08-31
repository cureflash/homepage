(() => {
  "use strict";

  const landBuildingLeaseAct = Object.freeze({
    id: "egov-land-building-lease-act",
    label: "e-Gov法令検索『借地借家法』",
    url: "https://laws.e-gov.go.jp/law/403AC0000000090?occasion_date=20260401",
    sourceType: "statute"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-land-lease-opposability",
    sourceUnitIds: ["land-lease-right"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-land-lease-opposability-no-land-right-registration-required",
      claim: "借地権は、一定の要件を満たせば借地権自体の登記がなくても第三者に対抗できる。",
      conditions: ["借地借家法10条1項の要件を満たすこと"],
      exceptions: ["同項の代替対抗要件を満たさない場合、このルールだけでは第三者への対抗力を取得しない。"],
      importance: "A",
      primarySources: [landBuildingLeaseAct],
      sourceFactIds: ["u52-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-land-lease-opposability-registered-building-on-land",
      claim: "借地権者が借地上に自己名義で登記された建物を所有していることが、借地権登記に代わる対抗要件となる。",
      conditions: ["対象建物が借地権の目的である土地上に存在すること", "建物について借地権者が登記されていること", "借地権者がその建物を所有していること"],
      exceptions: [],
      importance: "A",
      primarySources: [landBuildingLeaseAct],
      sourceFactIds: ["u52-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-land-lease-opposability-effective-against-third-parties",
      claim: "借地借家法10条1項の対抗要件を満たした借地権者は、その借地権を第三者に対抗できる。",
      conditions: ["借地権の登記がない場合でも、借地権者が土地上に自己名義で登記された建物を所有していること"],
      exceptions: [],
      importance: "A",
      primarySources: [landBuildingLeaseAct],
      sourceFactIds: ["u52-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate land-lease-opposability knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-land-lease-opposability") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Non-statutory primary source: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u52-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 3) throw new Error(`Expected 3 land-lease-opposability knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsLandLeaseOpposability = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
