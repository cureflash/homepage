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
    conceptId: "takken-concept-will-effect",
    sourceUnitIds: ["will-reserved-portion"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-will-effect-death",
      claim: "遺言は、遺言者の死亡の時から効力を生ずる。",
      conditions: ["遺言が有効に成立していること"],
      exceptions: ["停止条件を付した遺言で、その条件が遺言者の死亡後に成就した場合は、条件成就時から効力を生ずる"],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: ["u58-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-will-effect-suspensive-condition-after-death",
      claim: "停止条件を付した遺言で、その条件が遺言者の死亡後に成就したときは、遺言は条件が成就した時から効力を生ずる。",
      conditions: ["遺言に停止条件が付されていること", "その停止条件が遺言者の死亡後に成就すること"],
      exceptions: [],
      importance: "B",
      primarySources: [civilCode],
      sourceFactIds: []
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate will-effect knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-will-effect") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u58-f1")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 2) throw new Error(`Expected 2 will-effect knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsWillEffect = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
