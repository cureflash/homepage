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
    conceptId: "takken-concept-ordinary-land-lease-term",
    sourceUnitIds: ["land-lease-right"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-ordinary-land-lease-term-thirty-years",
      claim: "普通借地権の当初の存続期間は30年である。",
      conditions: ["借地借家法3条が適用される普通借地権であること", "契約で30年を超える存続期間を定めていないこと"],
      exceptions: ["契約で30年を超える存続期間を定めたときは、その契約期間となる。"],
      importance: "A",
      primarySources: [landBuildingLeaseAct],
      sourceFactIds: ["u52-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-ordinary-land-lease-term-longer-contract-controls",
      claim: "普通借地権について契約で30年を超える存続期間を定めたときは、その定めた期間が当初の存続期間となる。",
      conditions: ["借地借家法3条が適用される普通借地権であること", "契約で30年を超える存続期間を定めていること"],
      exceptions: [],
      importance: "A",
      primarySources: [landBuildingLeaseAct],
      sourceFactIds: ["u52-f1"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate ordinary-land-lease-term knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-ordinary-land-lease-term") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Non-statutory primary source: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u52-f1")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 2) throw new Error(`Expected 2 ordinary-land-lease-term knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsOrdinaryLandLeaseTerm = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
