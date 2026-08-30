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
    conceptId: "takken-concept-simultaneous-performance",
    sourceUnitIds: ["risk-simultaneous-performance"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-simultaneous-performance-refusal-until-tender",
      claim: "双務契約の当事者の一方は、相手方がその債務の履行を提供するまでは、自己の債務の履行を拒むことができる。",
      conditions: ["双務契約であること", "相手方がその債務の履行をまだ提供していないこと"],
      exceptions: ["相手方の債務が弁済期にないときは、この抗弁によって自己の履行を拒むことはできない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u47-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-simultaneous-performance-counter-obligation-not-due-exception",
      claim: "相手方の債務が弁済期にないときは、民法533条の同時履行の抗弁権によって自己の債務の履行を拒むことはできない。",
      conditions: ["双務契約であること", "相手方の債務がまだ弁済期にないこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: []
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate simultaneous-performance knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-simultaneous-performance") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.id === "egov-civil-code" && entry.sourceType === "statute")) throw new Error(`Missing Civil Code statute source: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u47-f1")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 2) throw new Error(`Expected 2 simultaneous-performance knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsSimultaneousPerformance = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
