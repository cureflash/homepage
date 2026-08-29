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
    conceptId: "takken-concept-installment-cancellation",
    sourceUnitIds: ["installment-sales-ownership"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-installment-cancellation-self-seller-nonbroker-scope",
      claim: "宅建業法42条の割賦販売契約の解除等の制限は、宅建業者が自ら売主となり、買主が宅建業者ではない宅地・建物の割賦販売に適用される。",
      conditions: ["宅建業者が自ら売主となる宅地または建物の割賦販売であること", "買主が宅建業者ではないこと"],
      exceptions: ["宅建業者相互間の取引では、宅建業法78条2項により42条は適用されない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u31-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-installment-cancellation-installment-default-trigger",
      claim: "42条の制限は、自ら売主の割賦販売契約で買主の賦払金支払義務が履行されない場合に問題となる。",
      conditions: ["宅建業法42条が適用される割賦販売であること", "賦払金の支払義務が履行されていないこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u31-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-installment-cancellation-thirty-day-reasonable-period",
      claim: "賦払金の支払遅滞を理由に解除等をするには、売主業者は30日以上の相当の期間を定めて支払を催告しなければならない。",
      conditions: ["宅建業法42条が適用されること", "賦払金の支払遅滞を理由に解除または期限未到来の賦払金請求をしようとすること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u31-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-installment-cancellation-written-demand",
      claim: "42条の催告は書面で行わなければならず、口頭の催告だけでは法定要件を満たさない。",
      conditions: ["宅建業法42条の催告を行う場面であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u31-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-installment-cancellation-remedies-after-nonperformance",
      claim: "30日以上の相当期間を定めた書面催告後も期間内に履行がないときに限り、売主業者は賦払金の支払遅滞を理由として契約を解除し、または支払時期が到来していない賦払金の支払を請求できる。",
      conditions: ["宅建業法42条が適用されること", "30日以上の相当期間を定めた書面催告をしていること", "その期間内に賦払金の支払義務が履行されなかったこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u31-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-installment-cancellation-adverse-special-term-invalid",
      claim: "宅建業法42条1項の解除等の制限に反する特約は無効である。",
      conditions: ["宅建業法42条が適用される割賦販売契約であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u31-f1"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate installment-cancellation knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 6) throw new Error(`Expected 6 installment-cancellation knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsInstallmentCancellation = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
