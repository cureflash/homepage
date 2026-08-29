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
    conceptId: "takken-concept-nonconformity-special-rule",
    sourceUnitIds: ["contract-nonconformity-special-rule"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-nonconformity-special-rule-self-seller-nonbroker-scope",
      claim: "宅建業法40条の担保責任についての特約制限は、宅建業者が自ら売主となる宅地・建物の売買で、買主が宅建業者ではない場合に適用される。",
      conditions: ["宅建業者が自ら売主となる宅地または建物の売買であること", "買主が宅建業者ではないこと"],
      exceptions: ["宅建業者相互間の取引では、宅建業法78条2項により40条は適用されない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u29-f1", "u29-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-nonconformity-special-rule-kind-quality-scope",
      claim: "40条が直接規制するのは、売買の目的物が種類または品質に関して契約内容に適合しない場合の担保責任に関する特約である。",
      conditions: ["宅建業法40条が適用される売買であること", "種類または品質に関する契約不適合であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u29-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-nonconformity-special-rule-adverse-term-prohibited",
      claim: "40条が適用される売買では、民法566条に規定するものより買主に不利となる契約不適合責任の特約を原則として定めることができない。",
      conditions: ["宅建業法40条が適用される売買であること"],
      exceptions: ["民法566条に規定する期間について、目的物の引渡しの日から2年以上となる特約は許される。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u29-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-nonconformity-special-rule-two-years-from-delivery",
      claim: "民法566条に規定する期間については、目的物の引渡しの日から2年以上となる特約を定めることが、40条の買主不利特約禁止の例外として認められる。",
      conditions: ["宅建業法40条が適用される売買であること", "民法566条に規定する期間についての特約であること"],
      exceptions: ["引渡しの日から2年未満とするなど、40条の例外に当たらず民法566条より買主に不利となる特約は許されない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u29-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-nonconformity-special-rule-invalid-adverse-term",
      claim: "宅建業法40条1項の制限に反して定めた買主に不利な特約は無効となる。",
      conditions: ["宅建業法40条1項に反する特約であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u29-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate nonconformity-special-rule knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 5) throw new Error(`Expected 5 nonconformity-special-rule knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsNonconformitySpecialRule = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
