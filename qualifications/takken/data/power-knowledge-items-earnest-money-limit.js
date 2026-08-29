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
    conceptId: "takken-concept-earnest-money-limit",
    sourceUnitIds: ["earnest-money-and-safeguards"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-earnest-money-limit-self-seller-nonbroker-scope",
      claim: "宅建業法39条の手付額制限は、宅建業者が自ら売主となる宅地・建物の売買で、買主が宅建業者ではない場合に適用される。",
      conditions: ["宅建業者が自ら売主となる宅地または建物の売買であること", "買主が宅建業者ではないこと"],
      exceptions: ["宅建業者相互間の取引では、宅建業法78条2項により39条は適用されない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u27-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-earnest-money-limit-twenty-percent-cap",
      claim: "宅建業法39条が適用される売買では、宅建業者は代金額の20%を超える額の手付を受領することができない。",
      conditions: ["宅建業者が自ら売主となること", "買主が宅建業者ではないこと", "売買契約の締結に際して手付を受領すること"],
      exceptions: ["代金額の20%ちょうどまでであれば、39条1項の手付額上限には抵触しない。", "宅建業者相互間の取引では、宅建業法78条2項により39条は適用されない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u27-f1"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate earnest-money-limit knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 2) throw new Error(`Expected 2 earnest-money-limit knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsEarnestMoneyLimit = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
