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
    conceptId: "takken-concept-unowned-property-sale",
    sourceUnitIds: ["unowned-property-restriction"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-unowned-property-sale-self-seller-nonbroker-scope",
      claim: "宅建業法33条の2の自己所有でない宅地・建物の売買契約締結制限は、宅建業者が自ら売主となり、買主が宅建業者ではない売買に適用される。",
      conditions: ["宅建業者が自ら売主となる売買であること", "売買対象が売主業者の所有に属しない宅地または建物であること", "買主が宅建業者ではないこと"],
      exceptions: ["宅建業者相互間の取引では、宅建業法78条2項により33条の2は適用されない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u30-f1", "u30-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-unowned-property-sale-general-prohibition-including-reservation",
      claim: "33条の2が適用される場合、宅建業者は自己の所有に属しない宅地または建物について、自ら売主となる売買契約を原則として締結できず、この売買契約には予約も含まれる。",
      conditions: ["宅建業法33条の2が適用される取引であること"],
      exceptions: ["33条の2各号の法定例外に該当する場合は締結できる。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u30-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-unowned-property-sale-acquisition-contract-exception",
      claim: "売主業者が対象宅地・建物を取得する契約を既に締結しているときは、33条の2第1号の例外となり得る。取得契約には予約を含むが、その効力の発生が条件に係るものは除かれる。",
      conditions: ["宅建業法33条の2が適用される取引であること", "売主業者が対象宅地・建物を取得する契約または予約を締結済みであること"],
      exceptions: ["取得契約または予約の効力発生が条件に係る場合は、この例外に含まれない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u30-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-unowned-property-sale-clear-acquisition-exception",
      claim: "売主業者が対象宅地・建物を取得できることが明らかな場合で、国土交通省令・内閣府令で定める場合も、33条の2第1号の例外となる。",
      conditions: ["宅建業法33条の2が適用される取引であること", "対象宅地・建物を取得できることが明らかであること", "国土交通省令・内閣府令で定める場合に該当すること"],
      exceptions: [],
      importance: "B",
      primarySources: [statute],
      sourceFactIds: ["u30-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-unowned-property-sale-article41-safeguard-exception",
      claim: "対象宅地・建物の売買が宅建業法41条1項の売買に該当し、同項1号または2号の手付金等保全措置が講じられている場合は、33条の2第2号の例外となる。",
      conditions: ["宅建業法33条の2が適用される取引であること", "売買が宅建業法41条1項に規定する売買に該当すること", "41条1項1号または2号の措置が講じられていること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u30-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate unowned-property-sale knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 5) throw new Error(`Expected 5 unowned-property-sale knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsUnownedPropertySale = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
