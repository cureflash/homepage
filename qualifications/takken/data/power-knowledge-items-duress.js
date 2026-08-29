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
    conceptId: "takken-concept-duress",
    sourceUnitIds: ["civil-fraud-duress"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-duress-cancellation",
      claim: "強迫による意思表示は取り消すことができる。",
      conditions: ["強迫による意思表示であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u36-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-duress-third-party-actor-counterparty-awareness-not-required",
      claim: "第三者が強迫を行った場合でも、相手方がその事実を知り、または知ることができたことは取消しの要件ではない。",
      conditions: ["相手方に対する意思表示について第三者が強迫を行ったこと"],
      exceptions: ["民法96条2項の相手方の認識要件は第三者による詐欺について定められたものであり、強迫には適用されない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u36-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-duress-third-party-no-good-faith-protection",
      claim: "強迫による意思表示の取消しは、善意かつ無過失の第三者にも対抗することができる。",
      conditions: ["強迫による意思表示が取り消されたこと", "取消しの効果を第三者との関係で問題にすること"],
      exceptions: ["民法96条3項の善意無過失の第三者保護は詐欺による意思表示の取消しについて定められたものであり、強迫には適用されない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u36-f1"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate duress knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 3) throw new Error(`Expected 3 duress knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsDuress = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();