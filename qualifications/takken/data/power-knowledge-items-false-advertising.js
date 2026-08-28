(() => {
  "use strict";

  const statute = Object.freeze({
    id: "egov-takken-act",
    label: "e-Gov法令検索『宅地建物取引業法』",
    url: "https://laws.e-gov.go.jp/law/327AC1000000176",
    sourceType: "statute"
  });
  const mlitBaitAdvertising = Object.freeze({
    id: "mlit-bait-advertising-notice",
    label: "国土交通省『いわゆる「おとり広告」等に係る宅地建物取引業法第32条の適用について』",
    url: "https://www.mlit.go.jp/totikensangyo/const/content/001738457.pdf",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-false-advertising",
    sourceUnitIds: ["false-advertising-prohibited-conduct"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-false-advertising-materially-false",
      claim: "宅建業者は、その業務に関する広告について、宅地・建物や取引条件等に関し著しく事実に相違する表示をしてはならない。",
      conditions: ["宅建業者がその業務に関して広告をすること", "表示内容が宅建業法32条の対象事項に関すること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u20-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-false-advertising-materially-superior-favorable",
      claim: "宅建業者は、その業務に関する広告について、実際のものよりも著しく優良または有利であると人を誤認させるような表示をしてはならない。",
      conditions: ["宅建業者がその業務に関して広告をすること", "表示内容が宅建業法32条の対象事項に関すること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u20-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-false-advertising-property-scope",
      claim: "誇大広告等の禁止対象には、宅地・建物の所在、規模、形質、現在または将来の利用の制限、環境、交通その他の利用に関する事項が含まれる。",
      conditions: ["宅建業者の業務に関する広告であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u20-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-false-advertising-transaction-conditions-scope",
      claim: "誇大広告等の禁止対象には、代金・借賃等の対価の額、その支払方法、および代金または交換差金に関する金銭の貸借のあっせんも含まれる。",
      conditions: ["宅建業者の業務に関する広告であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u20-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-false-advertising-bait-fictitious-ads",
      claim: "国土交通省の解釈運用では、顧客を集めるために売る意思のない好条件物件を広告して別物件へ誘導するおとり広告や、実際には存在しない物件等の虚偽広告にも宅建業法32条が適用される。",
      conditions: ["宅建業者が顧客誘引のために物件広告をすること", "おとり広告または実在しない物件等の虚偽広告に該当すること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute, mlitBaitAdvertising],
      sourceFactIds: ["u20-f1"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate false advertising knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 5) throw new Error(`Expected 5 false advertising knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsFalseAdvertising = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
