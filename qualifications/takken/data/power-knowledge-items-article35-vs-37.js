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
    conceptId: "takken-concept-article35-vs-37",
    sourceUnitIds: ["article35-vs-37"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-article35-vs-37-article35-before-contract",
      claim: "35条の重要事項説明は、宅地・建物の売買・交換・貸借の契約が成立するまでの間に行う。",
      conditions: ["宅建業法35条の重要事項説明対象となる取引であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u24-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article35-vs-37-article37-after-contract",
      claim: "37条書面は、宅地・建物の売買・交換・貸借に関する契約が成立したときに交付する。",
      conditions: ["宅建業法37条1項または2項の対象となる契約が成立したこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u24-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article35-vs-37-explanation-duty",
      claim: "35条では宅地建物取引士による重要事項の説明が必要であるのに対し、37条は契約成立後の契約内容を記載した書面の交付を義務付ける制度であり、37条書面について35条と同じ重要事項説明義務を定めたものではない。",
      conditions: ["35条と37条の法定手続を比較すること"],
      exceptions: ["37条書面の内容を当事者へ説明する実務上の対応が行われることはあっても、35条の法定重要事項説明とは別である。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u24-f1", "u24-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article35-vs-37-takkenshi-role",
      claim: "35条では宅地建物取引士が重要事項を説明し、説明時に宅建士証を提示する一方、35条書面と37条書面はいずれも宅地建物取引士の記名が必要である。",
      conditions: ["35条の重要事項説明と37条書面を宅建士の役割で比較すること"],
      exceptions: ["37条書面の交付時に35条と同じ宅建士証提示義務が課されるわけではない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u24-f1", "u24-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article35-vs-37-content-purpose",
      claim: "35条書面は契約締結の判断に必要な重要事項を契約前に示すためのものであり、37条書面は成立した契約の当事者・目的物・代金や借賃・引渡時期等の契約内容を契約後に明確にするためのものである。",
      conditions: ["35条書面と37条書面の記載内容と役割を比較すること"],
      exceptions: ["両書面には一部共通して現れる事項もあるため、記載事項が完全に排他的に分かれるわけではない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u24-f1", "u24-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate Article 35 vs 37 knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 5) throw new Error(`Expected 5 Article 35 vs 37 knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsArticle35Vs37 = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();