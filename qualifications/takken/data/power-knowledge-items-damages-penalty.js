(() => {
  "use strict";

  const statute = Object.freeze({
    id: "egov-takken-act",
    label: "e-Gov法令検索『宅地建物取引業法』",
    url: "https://laws.e-gov.go.jp/law/327AC1000000176?occasion_date=20260401",
    sourceType: "statute"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-damages-penalty",
    sourceUnitIds: ["damages-penalty"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-damages-penalty-self-seller-nonbroker-scope",
      claim: "宅建業法38条の損害賠償額の予定等の制限は、宅建業者が自ら売主となる宅地・建物の売買で、買主が宅建業者ではない場合に適用される。",
      conditions: ["宅建業者が自ら売主となる宅地または建物の売買であること", "買主が宅建業者ではないこと"],
      exceptions: ["宅建業者相互間の取引では、宅建業法78条2項により38条は適用されない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u28-f1", "u28-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-damages-penalty-combined-amount",
      claim: "38条では、損害賠償額の予定と違約金の双方を定める場合、それぞれを別枠で扱わず合算した額で上限を判定する。",
      conditions: ["損害賠償額の予定または違約金に関する定めを置くこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u28-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-damages-penalty-twenty-percent-cap",
      claim: "38条の適用がある売買では、損害賠償額の予定と違約金の合算額を代金額の20%を超える額と定めることはできない。",
      conditions: ["宅建業法38条が適用される売買であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u28-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-damages-penalty-excess-part-invalid",
      claim: "38条の20%上限を超える損害賠償額の予定・違約金の特約は、特約全体ではなく代金額の20%を超える部分だけが無効となる。",
      conditions: ["38条の適用がある売買で、損害賠償額の予定と違約金の合算額が代金額の20%を超えること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u28-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate damages-penalty knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 4) throw new Error(`Expected 4 damages-penalty knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsDamagesPenalty = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
