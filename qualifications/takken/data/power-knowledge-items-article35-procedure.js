(() => {
  "use strict";

  const statute = Object.freeze({
    id: "egov-takken-act",
    label: "e-Gov法令検索『宅地建物取引業法』",
    url: "https://laws.e-gov.go.jp/law/327AC1000000176?occasion_date=20260401",
    sourceType: "statute"
  });
  const mlitElectronicDocuments = Object.freeze({
    id: "mlit-electronic-real-estate-documents-20220518",
    label: "国土交通省『不動産取引時の書面が電子書面で提供できるようになります』",
    url: "https://www.mlit.go.jp/report/press/tochi_fudousan_kensetsugyo16_hh_000001_00036.html",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-article35-procedure",
    sourceUnitIds: ["article35-basics", "article35-vs-37"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-article35-procedure-before-contract",
      claim: "宅建業者は、35条の重要事項説明を契約が成立するまでの間に行わせなければならない。",
      conditions: ["宅地・建物の売買、交換または貸借について宅建業法35条の説明対象となる取引であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u21-f1", "u24-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article35-procedure-takkenshi-explains",
      claim: "35条の重要事項説明は、宅建業者が宅地建物取引士をして行わせなければならない。",
      conditions: ["宅建業法35条の重要事項説明を行うこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u21-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article35-procedure-document-delivery",
      claim: "35条では、重要事項を記載した書面を説明対象者に交付した上で、宅地建物取引士に重要事項を説明させる。",
      conditions: ["宅建業法35条の重要事項説明を行うこと"],
      exceptions: ["法定の要件を満たす電磁的方法による提供は書面交付に代えることができる"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u21-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article35-procedure-electronic-delivery",
      claim: "35条書面は、相手方等の承諾を得て法定の電磁的方法で提供することができ、その場合は書面を交付したものとみなされる。",
      conditions: ["相手方等の承諾を得ること", "法令で定める電磁的方法によって提供すること"],
      exceptions: [],
      importance: "B",
      primarySources: [statute, mlitElectronicDocuments],
      sourceFactIds: ["u21-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article35-procedure-card-presentation",
      claim: "宅地建物取引士は35条の重要事項説明をするとき、説明の相手方に宅地建物取引士証を提示しなければならない。",
      conditions: ["宅地建物取引士が35条の重要事項説明を行うこと"],
      exceptions: ["相手方からの請求の有無にかかわらず提示義務がある"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u21-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate Article 35 procedure knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 5) throw new Error(`Expected 5 Article 35 procedure knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsArticle35Procedure = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
