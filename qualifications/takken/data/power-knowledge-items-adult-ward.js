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
    conceptId: "takken-concept-adult-ward",
    sourceUnitIds: ["civil-limited-capacity"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-adult-ward-cancellation-principle",
      claim: "成年被後見人がした法律行為は、原則として取り消すことができる。",
      conditions: ["行為者が成年被後見人であること", "法律行為であること"],
      exceptions: ["日用品の購入その他日常生活に関する行為は取り消すことができない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u38-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-adult-ward-daily-life-exception",
      claim: "成年被後見人がした日用品の購入その他日常生活に関する行為は、成年被後見人であることを理由として取り消すことができない。",
      conditions: ["日用品の購入その他日常生活に関する法律行為であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u38-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate adult-ward knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 2) throw new Error(`Expected 2 adult-ward knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsAdultWard = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
