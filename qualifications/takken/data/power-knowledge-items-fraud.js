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
    conceptId: "takken-concept-fraud",
    sourceUnitIds: ["civil-fraud-duress"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-fraud-cancellation",
      claim: "詐欺による意思表示は取り消すことができる。",
      conditions: ["詐欺による意思表示であること"],
      exceptions: ["第三者が詐欺を行った場合は民法96条2項の要件を別途満たす必要がある。", "善意かつ無過失の第三者との関係では民法96条3項の保護を別途検討する。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u36-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-fraud-third-party-fraud-counterparty-awareness",
      claim: "相手方に対する意思表示について第三者が詐欺を行った場合、相手方がその事実を知り、または知ることができたときに限り、その意思表示を取り消すことができる。",
      conditions: ["相手方に対する意思表示について第三者が詐欺を行ったこと", "相手方が第三者による詐欺の事実を知り、または知ることができたこと"],
      exceptions: ["相手方が第三者による詐欺の事実を知らず、かつ知ることもできなかった場合は、この規定による取消しはできない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u36-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-fraud-third-party-good-faith-no-negligence",
      claim: "詐欺による意思表示の取消しは、善意でかつ過失がない第三者に対抗することができない。",
      conditions: ["詐欺による意思表示が取り消されたこと", "第三者が善意かつ無過失であること"],
      exceptions: ["第三者が善意無過失でない場合は、民法96条3項による保護の要件を満たさない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u36-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate fraud knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 3) throw new Error(`Expected 3 fraud knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsFraud = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();