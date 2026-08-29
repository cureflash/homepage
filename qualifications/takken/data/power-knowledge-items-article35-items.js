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
    conceptId: "takken-concept-article35-items",
    sourceUnitIds: ["article35-items"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-article35-items-registered-rights",
      claim: "35条の重要事項には、対象宅地・建物の上に存する登記された権利の種類および内容が含まれる。",
      conditions: ["宅建業法35条1項の重要事項説明の対象となる取引であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u22-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article35-items-registered-owner-name",
      claim: "登記された権利に関する35条の説明事項には、登記名義人または登記簿の表題部に記録された所有者の氏名・法人名称も含まれる。",
      conditions: ["宅建業法35条1項1号の対象となる宅地・建物であること"],
      exceptions: [],
      importance: "B",
      primarySources: [statute],
      sourceFactIds: ["u22-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article35-items-legal-restrictions",
      claim: "35条の重要事項には、都市計画法・建築基準法その他の法令に基づく制限のうち、政令で定めるものに関する事項の概要が含まれる。",
      conditions: ["宅建業法35条1項2号の対象となる取引であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u22-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article35-items-contract-type-dependent",
      claim: "35条で説明すべき法令上の制限は、目的物が宅地か建物か、また売買・交換か貸借かという契約内容の別に応じて決まる。",
      conditions: ["宅建業法35条1項2号の法令上の制限を判断する場面であること"],
      exceptions: ["すべての取引類型について同一の法令上の制限を一律に説明する仕組みではない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u22-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate Article 35 items knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 4) throw new Error(`Expected 4 Article 35 items knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsArticle35Items = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
