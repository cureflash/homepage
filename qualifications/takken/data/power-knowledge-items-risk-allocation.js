(() => {
  "use strict";

  const statute = Object.freeze({
    id: "egov-civil-code",
    label: "e-Gov法令検索『民法』",
    url: "https://laws.e-gov.go.jp/law/129AC0000000089?occasion_date=20260401",
    sourceType: "statute"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-risk-allocation",
    sourceUnitIds: ["risk-simultaneous-performance"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-risk-allocation-no-fault-refuse-counter-performance",
      claim: "当事者双方の責めに帰することができない事由によって債務を履行できなくなったとき、債権者は反対給付の履行を拒むことができる。",
      conditions: ["双務契約その他反対給付関係があること", "履行不能が当事者双方の責めに帰することができない事由によること"],
      exceptions: ["履行不能が債権者の責めに帰すべき事由による場合は、民法536条2項により債権者は反対給付の履行を拒むことができない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u47-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-risk-allocation-creditor-fault-no-refusal",
      claim: "債権者の責めに帰すべき事由によって債務を履行できなくなったとき、債権者は反対給付の履行を拒むことができない。",
      conditions: ["債務が履行不能となったこと", "その履行不能が債権者の責めに帰すべき事由によること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-risk-allocation-debtor-benefit-reimbursement",
      claim: "債権者の責めに帰すべき事由による履行不能で債務者が自己の債務を免れたことによって利益を得たとき、債務者はその利益を債権者に償還しなければならない。",
      conditions: ["債権者の責めに帰すべき事由による履行不能であること", "債務者が自己の債務を免れたことによって利益を得たこと"],
      exceptions: [],
      importance: "B",
      primarySources: [statute],
      sourceFactIds: []
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate risk-allocation knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-risk-allocation") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.id === "egov-civil-code" && entry.sourceType === "statute")) throw new Error(`Missing Civil Code statute source: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u47-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 3) throw new Error(`Expected 3 risk-allocation knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsRiskAllocation = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
