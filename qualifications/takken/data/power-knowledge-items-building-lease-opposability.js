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
    conceptId: "takken-concept-building-lease-opposability",
    sourceUnitIds: ["lease-deposit-opposability"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-building-lease-opposability-delivery-without-registration",
      claim: "建物賃貸借は、賃借権の登記がなくても建物の引渡しがあれば第三者対抗力を取得する。",
      conditions: ["建物の賃貸借であること", "建物の引渡しがあること"],
      exceptions: [],
      importance: "A",
      primarySources: [landBuildingLeaseAct],
      sourceFactIds: ["u51-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-building-lease-opposability-subsequent-property-right-acquirer",
      claim: "建物の引渡しによる建物賃貸借の対抗力は、その後に当該建物について物権を取得した者に対して生ずる。",
      conditions: ["建物の引渡し後に第三者が当該建物について物権を取得したこと"],
      exceptions: [],
      importance: "A",
      primarySources: [landBuildingLeaseAct],
      sourceFactIds: ["u51-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate building-lease-opposability knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-building-lease-opposability") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Non-statutory primary source: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u51-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 2) throw new Error(`Expected 2 building-lease-opposability knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsBuildingLeaseOpposability = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
