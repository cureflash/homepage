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
    conceptId: "takken-concept-property-transfer-opposability",
    sourceUnitIds: ["property-rights-opposability"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-property-transfer-opposability-consensual-effect",
      claim: "物権の設定および移転は、当事者の意思表示のみによって効力を生ずる。",
      conditions: ["物権の設定または移転を目的とする当事者の意思表示があること"],
      exceptions: ["不動産物権変動を第三者に対抗する要件は、民法177条の登記の問題として区別する。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u42-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-property-transfer-opposability-registration-for-third-party-opposability",
      claim: "不動産に関する物権の得喪および変更は、原則として、登記をしなければ第三者に対抗することができない。",
      conditions: ["不動産に関する物権の得喪または変更であること", "第三者に対する対抗関係が問題となること"],
      exceptions: ["当事者間で物権変動が効力を生じること自体は、民法176条の意思主義と区別する。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u42-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate Power Takken knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01") throw new Error(`Unexpected legal metadata: ${item.knowledgeId}`);
    if (item.factcheckStatus !== "verified") throw new Error(`Unverified Power Takken knowledge item: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-property-transfer-opposability") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.some((source) => source.id === "egov-civil-code" && source.sourceType === "statute")) throw new Error(`Missing Civil Code statute source: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u42-f1" || id === "u42-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 2) throw new Error(`Expected 2 property-transfer-opposability knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsPropertyTransferOpposability = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
