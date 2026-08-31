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
    conceptId: "takken-concept-building-lease-term",
    sourceUnitIds: ["building-lease-right"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-building-lease-term-less-than-one-year-deemed-indefinite",
      claim: "期間を1年未満とする建物賃貸借は、期間の定めがない建物賃貸借とみなされる。",
      conditions: ["建物の賃貸借であること", "契約で定めた期間が1年未満であること"],
      exceptions: [],
      importance: "A",
      primarySources: [landBuildingLeaseAct],
      sourceFactIds: ["u54-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate building-lease-term knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-building-lease-term") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Non-statutory primary source: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u54-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 1) throw new Error(`Expected 1 building-lease-term knowledge item, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsBuildingLeaseTerm = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
