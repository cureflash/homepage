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
    conceptId: "takken-concept-mortgage",
    sourceUnitIds: ["mortgage"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-mortgage-no-possession-transfer",
      claim: "抵当権は、債務者または第三者が目的不動産の占有を抵当権者へ移転しないまま設定する担保物権である。",
      conditions: ["不動産を債務の担保に供する抵当権であること"],
      exceptions: ["質権のように目的物の占有移転を設定要件とする担保物権ではない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u44-f1", "u44-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-mortgage-priority-payment",
      claim: "抵当権者は、担保に供された不動産について、他の債権者に先立って自己の債権の弁済を受ける権利を有する。",
      conditions: ["債務者または第三者が不動産を債務の担保に供していること"],
      exceptions: ["抵当権は担保不動産からの優先弁済を内容とし、目的不動産の占有取得自体を内容としない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u44-f1"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate mortgage knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-mortgage") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.id === "egov-civil-code" && entry.sourceType === "statute")) throw new Error(`Missing Civil Code statute source: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u44-f1" || id === "u44-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 2) throw new Error(`Expected 2 mortgage knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsMortgage = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
