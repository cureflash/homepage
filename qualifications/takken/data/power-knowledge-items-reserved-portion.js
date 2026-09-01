(() => {
  "use strict";

  const civilCode = Object.freeze({
    id: "egov-civil-code",
    label: "e-Gov法令検索『民法』",
    url: "https://laws.e-gov.go.jp/law/129AC0000000089?occasion_date=20260401",
    sourceType: "statute"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-reserved-portion",
    sourceUnitIds: ["will-reserved-portion"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-reserved-portion-heirs-excluding-siblings",
      claim: "兄弟姉妹以外の相続人は、民法1042条に基づく遺留分を有する。",
      conditions: ["相続人に該当すること", "兄弟姉妹ではないこと"],
      exceptions: ["兄弟姉妹には遺留分がない"],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: ["u58-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-reserved-portion-only-lineal-ascendants-one-third",
      claim: "直系尊属のみが相続人である場合、遺留分の総体的割合は被相続人の財産の3分の1である。",
      conditions: ["相続人が直系尊属のみであること"],
      exceptions: [],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-reserved-portion-general-one-half",
      claim: "直系尊属のみが相続人である場合を除き、遺留分の総体的割合は被相続人の財産の2分の1である。",
      conditions: ["直系尊属のみが相続人である場合ではないこと"],
      exceptions: ["直系尊属のみが相続人である場合は3分の1"],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-reserved-portion-multiple-heirs-statutory-share",
      claim: "遺留分権利者が複数いる場合、各自の遺留分割合は民法1042条1項の総体的割合に各自の法定相続分を乗じて算定する。",
      conditions: ["遺留分を有する相続人が複数いること"],
      exceptions: [],
      importance: "B",
      primarySources: [civilCode],
      sourceFactIds: []
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate reserved-portion knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-reserved-portion") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u58-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 4) throw new Error(`Expected 4 reserved-portion knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsReservedPortion = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
