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
    conceptId: "takken-concept-default-damages",
    sourceUnitIds: ["default-damages"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-default-damages-nonperformance-claim",
      claim: "債務者が債務の本旨に従った履行をしないとき、債権者は原則として、これによって生じた損害の賠償を請求できる。",
      conditions: ["債務者が債務の本旨に従った履行をしないこと"],
      exceptions: ["民法415条1項ただし書の帰責不能事由に該当する場合は、この限りでない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u45-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-default-damages-impossibility-claim",
      claim: "債務の履行が不能であるとき、債権者は原則として、これによって生じた損害の賠償を請求できる。",
      conditions: ["債務の履行が不能であること"],
      exceptions: ["民法415条1項ただし書の帰責不能事由に該当する場合は、この限りでない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u45-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-default-damages-no-liability-without-attribution",
      claim: "債務不履行が、契約その他の債務の発生原因および取引上の社会通念に照らして債務者の責めに帰することができない事由によるとき、債務者は損害賠償責任を負わない。",
      conditions: ["債務不履行について、契約その他の債務の発生原因および取引上の社会通念に照らして債務者へ帰責できないこと"],
      exceptions: ["債務者の責めに帰することができる事由による債務不履行まで免責する規定ではない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u45-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate default-damages knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-default-damages") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.id === "egov-civil-code" && entry.sourceType === "statute")) throw new Error(`Missing Civil Code statute source: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u45-f1" || id === "u45-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 3) throw new Error(`Expected 3 default-damages knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsDefaultDamages = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
