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
    conceptId: "takken-concept-mental-reservation",
    sourceUnitIds: ["civil-fictitious-declaration"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-mental-reservation-principle-valid",
      claim: "表意者が真意ではないことを知りながらした意思表示（心裡留保）は、原則として有効である。",
      conditions: ["表意者が自己の意思表示が真意ではないことを知ってしたこと"],
      exceptions: ["相手方が表意者の真意ではないことを知り、または知ることができたときは無効となる。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u37-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-mental-reservation-counterparty-aware-invalid",
      claim: "心裡留保でも、相手方が表意者の意思表示が真意ではないことを知り、または知ることができたときは、その意思表示は無効となる。",
      conditions: ["心裡留保による意思表示であること", "相手方が真意ではないことを知り、または知ることができたこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u37-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-mental-reservation-third-party-good-faith-protection",
      claim: "相手方の認識を理由として心裡留保の意思表示が無効となる場合でも、その無効は善意の第三者に対抗することができない。",
      conditions: ["民法93条1項ただし書により心裡留保の意思表示が無効となること", "第三者が善意であること"],
      exceptions: ["民法93条2項は第三者について無過失までは要求していない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u37-f1"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate mental-reservation knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 3) throw new Error(`Expected 3 mental-reservation knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsMentalReservation = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();