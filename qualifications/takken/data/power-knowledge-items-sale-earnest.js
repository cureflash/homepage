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
    conceptId: "takken-concept-sale-earnest",
    sourceUnitIds: ["sale-earnest"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-sale-earnest-buyer-abandon",
      claim: "買主が売主に手付を交付したとき、買主は手付を放棄して契約を解除することができる。",
      conditions: ["買主が売主に手付を交付していること", "相手方である売主が契約の履行に着手する前であること"],
      exceptions: ["売主が契約の履行に着手した後は、民法557条1項ただし書によりこの方法では解除できない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u48-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-sale-earnest-seller-double-actual-tender",
      claim: "買主から手付を受領した売主は、手付の倍額を現実に提供して契約を解除することができる。",
      conditions: ["買主から売主に手付が交付されていること", "相手方である買主が契約の履行に着手する前であること"],
      exceptions: ["買主が契約の履行に着手した後は、民法557条1項ただし書によりこの方法では解除できない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u48-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-sale-earnest-before-counterparty-performance",
      claim: "解約手付による解除は、解除しようとする当事者の相手方が契約の履行に着手する前に限られ、相手方が履行に着手した後はできない。",
      conditions: ["民法557条1項の手付による解除をする場面であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u48-f1"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate sale-earnest knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-sale-earnest") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.id === "egov-civil-code" && entry.sourceType === "statute")) throw new Error(`Missing Civil Code statute source: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u48-f1" || id === "u48-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 3) throw new Error(`Expected 3 sale-earnest knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsSaleEarnest = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
