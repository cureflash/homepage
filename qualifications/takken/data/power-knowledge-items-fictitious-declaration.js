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
    conceptId: "takken-concept-fictitious-declaration",
    sourceUnitIds: ["civil-fictitious-declaration"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-fictitious-declaration-party-invalid",
      claim: "相手方と通じてした虚偽の意思表示（通謀虚偽表示）は、当事者間では無効である。",
      conditions: ["表意者と相手方が通じて虚偽の意思表示をしたこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u37-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-fictitious-declaration-third-party-good-faith-protection",
      claim: "通謀虚偽表示の無効は、善意の第三者に対抗することができない。",
      conditions: ["民法94条1項の通謀虚偽表示が無効であること", "第三者が善意であること"],
      exceptions: ["民法94条2項は第三者について無過失までは要求していない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u37-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate fictitious-declaration knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 2) throw new Error(`Expected 2 fictitious-declaration knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsFictitiousDeclaration = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();