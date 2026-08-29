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
    conceptId: "takken-concept-declaration-arrival",
    sourceUnitIds: ["civil-intent-general"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-declaration-arrival-effective-on-arrival",
      claim: "相手方のある意思表示は、その通知が相手方に到達した時から効力を生ずる。",
      conditions: ["相手方のある意思表示であること", "意思表示の通知が相手方に到達したこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u34-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-declaration-arrival-obstruction-deemed-arrival",
      claim: "相手方が正当な理由なく意思表示の通知の到達を妨げたときは、その通知は通常到達すべきであった時に到達したものとみなすことができる。",
      conditions: ["相手方が通知の到達を妨げたこと", "到達を妨げたことに正当な理由がないこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u34-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate declaration-arrival knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 2) throw new Error(`Expected 2 declaration-arrival knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsDeclarationArrival = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();