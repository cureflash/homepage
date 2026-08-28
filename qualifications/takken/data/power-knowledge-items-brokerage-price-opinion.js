(() => {
  "use strict";

  const statute = Object.freeze({
    id: "egov-takken-act",
    label: "e-Gov法令検索『宅地建物取引業法』",
    url: "https://laws.e-gov.go.jp/law/327AC1000000176",
    sourceType: "statute"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-brokerage-price-opinion",
    sourceUnitIds: ["brokerage-contract-basics"],
    sourceFactIds: ["u15-f1"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-price-opinion-basis-required",
      claim: "宅建業者が媒介契約の対象となる宅地・建物の売買価額または交換評価額について意見を述べるときは、その根拠を明らかにしなければならない。",
      conditions: ["宅地または建物の売買・交換の媒介契約に関して、宅建業者が価額または評価額について意見を述べる場合であること"],
      exceptions: ["依頼者が提示した価額を媒介契約書面に記載するだけで、宅建業者自身が価額について意見を述べていない場合まで、同じ根拠明示義務が生じるという規定ではない。"],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-price-opinion-sale-and-exchange",
      claim: "根拠明示義務の対象は、売買すべき価額についての意見だけでなく、交換の場合の評価額についての意見にも及ぶ。",
      conditions: ["宅建業法34条の2第2項の対象となる価額・評価額について宅建業者が意見を述べる場合であること"],
      exceptions: ["売買価額だけに限定される制度ではない。"],
      importance: "A",
      primarySources: [statute]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate brokerage-price-opinion knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 2) throw new Error(`Expected 2 brokerage-price-opinion knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsBrokeragePriceOpinion = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();