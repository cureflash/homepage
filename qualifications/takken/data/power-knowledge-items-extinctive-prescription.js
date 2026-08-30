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
    conceptId: "takken-concept-extinctive-prescription",
    sourceUnitIds: ["civil-prescription"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-extinctive-prescription-subjective-five-years",
      claim: "債権は、債権者が権利を行使することができることを知った時から5年間行使しないとき、時効によって消滅する。",
      conditions: ["対象が債権であること", "債権者が権利を行使することができることを知ったこと", "その時から5年間権利を行使しないこと"],
      exceptions: ["民法その他の法令に特則がある場合は、その特則を別途確認する。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u41-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-extinctive-prescription-objective-ten-years",
      claim: "債権は、権利を行使することができる時から10年間行使しないとき、時効によって消滅する。",
      conditions: ["対象が債権であること", "客観的に権利を行使することができる時が到来したこと", "その時から10年間権利を行使しないこと"],
      exceptions: ["民法その他の法令に特則がある場合は、その特則を別途確認する。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u41-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate extinctive prescription knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
    if (!item.sourceFactIds.includes("u41-f2")) throw new Error(`Unexpected source fact for extinctive prescription: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 2) throw new Error(`Expected 2 extinctive prescription knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsExtinctivePrescription = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
