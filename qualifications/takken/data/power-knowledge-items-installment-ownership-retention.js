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
    conceptId: "takken-concept-installment-ownership-retention",
    sourceUnitIds: ["installment-sales-ownership"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-installment-ownership-retention-self-seller-nonbroker-scope",
      claim: "宅建業法43条の所有権留保等の制限は、宅建業者が自ら売主となる所定の割賦販売等に適用され、買主が宅建業者である取引には適用されない。",
      conditions: ["宅建業者が自ら売主となる宅地または建物の取引であること", "43条各項が定める割賦販売または買主借入債務の保証を伴う売買に該当すること", "買主が宅建業者ではないこと"],
      exceptions: ["宅建業者相互間の取引では、宅建業法78条2項により43条は適用されない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u31-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-installment-ownership-retention-registration-by-delivery",
      claim: "自ら売主の割賦販売では、原則として売主業者は物件を買主に引き渡すまでに、登記その他の引渡し以外の売主の義務を履行しなければならない。",
      conditions: ["宅建業法43条1項が適用される割賦販売であること"],
      exceptions: ["引渡しまでに代金額の30%を超える金銭の支払を受けていない場合は、別途30%超支払時点までの猶予がある。", "43条1項ただし書の担保提供見込みに関する例外がある。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u31-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-installment-ownership-retention-thirty-percent-extension",
      claim: "割賦販売で引渡しまでに代金額の30%を超える金銭の支払を受けていない場合、売主業者が登記その他の引渡し以外の義務を履行すべき期限は、代金額の30%を超える金銭の支払を受けるまでとなる。",
      conditions: ["宅建業法43条1項が適用される割賦販売であること", "物件引渡しまでに受領した金銭が代金額の30%を超えていないこと"],
      exceptions: ["43条1項ただし書の担保提供見込みに関する例外がある。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u31-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-installment-ownership-retention-exact-thirty-percent-not-over",
      claim: "43条1項・2項の基準は代金額の30%を『超える』額であり、ちょうど30%の支払だけでは30%超の要件を満たさない。",
      conditions: ["宅建業法43条1項または2項の30%基準を判定すること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u31-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-installment-ownership-retention-security-exception",
      claim: "割賦販売について、買主が所有権登記後の代金債務を担保する抵当権または不動産売買の先取特権の登記を申請し、あるいは保証人を立てる見込みがないときは、43条1項本文の義務履行時期の制限は適用されない。",
      conditions: ["宅建業法43条1項が適用される割賦販売であること", "所有権登記後に残る代金債務を担保する場面であること"],
      exceptions: [],
      importance: "B",
      primarySources: [statute],
      sourceFactIds: ["u31-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-installment-ownership-retention-no-security-retransfer-after-threshold",
      claim: "自ら売主の割賦販売で、物件を買主に引き渡し、かつ代金額の30%を超える金銭の支払を受けた後は、売主業者は担保目的でその物件を買主から譲り受けてはならない。",
      conditions: ["宅建業法43条2項が適用される割賦販売であること", "物件を買主に引き渡していること", "代金額の30%を超える金銭の支払を受けていること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u31-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-installment-ownership-retention-guaranteed-loan-scope",
      claim: "43条3項・4項は、自ら売主の売買で、代金に充てる買主の借入債務を売主業者が保証し、その借入れが物件引渡し後1年以上にわたり、かつ2回以上に分割して返還する条件のものである場合も規制対象とする。",
      conditions: ["宅建業者が自ら売主となる宅地または建物の売買であること", "買主の借入金が代金の全部または一部に充てられること", "売主業者がその借入債務を保証していること", "返済条件が物件引渡し後1年以上にわたり、かつ2回以上の分割返済であること"],
      exceptions: ["買主が宅建業者である取引では、宅建業法78条2項により43条は適用されない。"],
      importance: "B",
      primarySources: [statute],
      sourceFactIds: ["u31-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-installment-ownership-retention-guaranteed-loan-adjusted-threshold",
      claim: "売主業者が所定の買主借入債務を保証した場合、受領代金額からその保証債務の未弁済額を控除した額が代金額の30%を超えるかどうかを基準として、登記その他の義務履行時期が判定される。",
      conditions: ["宅建業法43条3項が適用されること"],
      exceptions: ["引渡しまでに控除後の額が代金額の30%を超えていない場合は、その控除後の額が30%を超えるまで義務履行期限が延びる。", "43条3項ただし書の担保提供見込みに関する例外がある。"],
      importance: "B",
      primarySources: [statute],
      sourceFactIds: ["u31-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-installment-ownership-retention-guaranteed-loan-security-exception",
      claim: "所定の買主借入債務を売主業者が保証した場合でも、売主業者の保証履行後の求償権と所有権登記後の代金債権について、買主が抵当権・不動産売買の先取特権の登記を申請し、または保証人を立てる見込みがないときは、43条3項本文の義務履行時期の制限は適用されない。",
      conditions: ["宅建業法43条3項が適用されること"],
      exceptions: [],
      importance: "B",
      primarySources: [statute],
      sourceFactIds: ["u31-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-installment-ownership-retention-guaranteed-loan-no-security-retransfer",
      claim: "所定の買主借入債務を売主業者が保証した売買で、物件を引き渡し、受領代金額から保証債務の未弁済額を控除した額が代金額の30%を超えた後は、売主業者は担保目的でその物件を買主から譲り受けてはならない。",
      conditions: ["宅建業法43条4項が適用されること", "物件を買主に引き渡していること", "受領代金額から保証債務の未弁済額を控除した額が代金額の30%を超えていること"],
      exceptions: [],
      importance: "B",
      primarySources: [statute],
      sourceFactIds: ["u31-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate installment-ownership-retention knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 10) throw new Error(`Expected 10 installment-ownership-retention knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsInstallmentOwnershipRetention = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();