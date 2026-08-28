(() => {
  "use strict";

  const statute = Object.freeze({
    id: "egov-takken-act",
    label: "e-Gov法令検索『宅地建物取引業法』",
    url: "https://laws.e-gov.go.jp/law/327AC1000000176",
    sourceType: "statute"
  });
  const guaranteeRule = Object.freeze({
    id: "egov-takken-business-guarantee-rule",
    label: "e-Gov法令検索『宅地建物取引業者営業保証金規則』",
    url: "https://laws.e-gov.go.jp/law/332M50004010001",
    sourceType: "statute"
  });
  const mlitRefundGuidance = Object.freeze({
    id: "mlit-business-guarantee-confirmation",
    label: "国土交通省『宅地建物取引業者営業保証金規則第一条による確認書の交付申請について』",
    url: "https://www.mlit.go.jp/totikensangyo/const/sosei_const_fr3_000067.html",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-business-guarantee-refund",
    sourceUnitIds: ["business-guarantee-refund"],
    sourceFactIds: ["u13-f1"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-business-guarantee-refund-transaction-claim-right",
      claim: "宅建業者と宅地建物取引業に関し取引をした者は、その取引により生じた債権について、その宅建業者が供託した営業保証金から弁済を受ける権利を有する。",
      conditions: ["宅建業者との宅地建物取引業に関する取引から生じた債権であること"],
      exceptions: ["宅建業に関係しない取引から生じた債権は対象にならない。", "取引時に宅地建物取引業者に該当する者は法27条1項の保護対象から除かれる。"],
      importance: "A",
      primarySources: [statute, guaranteeRule, mlitRefundGuidance]
    },
    {
      ...shared,
      knowledgeId: "takken-k-business-guarantee-refund-broker-excluded",
      claim: "営業保証金から弁済を受ける法27条1項の権利は、取引時に宅地建物取引業者に該当する者には認められない。",
      conditions: ["営業保証金の還付を請求する者の資格を判定する場合であること"],
      exceptions: ["平成29年3月31日以前の取引については営業保証金規則に経過的な取扱いがあるため、2026年度教材では現行取引ルールと混同しない。"],
      importance: "A",
      primarySources: [statute, guaranteeRule, mlitRefundGuidance]
    },
    {
      ...shared,
      knowledgeId: "takken-k-business-guarantee-refund-unrelated-claim-excluded",
      claim: "営業保証金の還付対象となるのは宅地建物取引業に関する取引から生じた債権であり、宅建業に関係しない一般の債権まで営業保証金から弁済を受けられるわけではない。",
      conditions: ["債権の発生原因が宅地建物取引業に関する取引かを判定する場合であること"],
      exceptions: ["単に相手方が宅建業者であるだけでは還付対象にならない。"],
      importance: "A",
      primarySources: [statute, guaranteeRule]
    },
    {
      ...shared,
      knowledgeId: "takken-k-business-guarantee-refund-shortfall-redeposit-two-weeks",
      claim: "営業保証金の還付により法定額に不足が生じた宅建業者は、法令で定める通知を受けた日から2週間以内にその不足額を供託しなければならない。",
      conditions: ["法27条1項の権利実行により営業保証金が法定額を下回った場合であること"],
      exceptions: ["不足が生じた日そのものから2週間とするのではなく、営業保証金規則に基づく通知を受けた日を起算点とする。"],
      importance: "A",
      primarySources: [statute, guaranteeRule]
    },
    {
      ...shared,
      knowledgeId: "takken-k-business-guarantee-refund-shortfall-notice-two-weeks",
      claim: "不足額を供託した宅建業者は、供託書の写しを添えて、供託後2週間以内にその旨を免許を受けた国土交通大臣または都道府県知事へ届け出なければならない。",
      conditions: ["営業保証金の不足額を法28条1項に基づき供託した場合であること"],
      exceptions: ["30日以内の変更届と混同しない。"],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-business-guarantee-refund-shortfall-securities-allowed",
      claim: "営業保証金の不足額の供託にも、法25条3項の準用により、法令で認められた有価証券を充てることができる。",
      conditions: ["法28条1項に基づく不足額の供託を行う場合であること"],
      exceptions: ["不足額は必ず金銭だけで供託しなければならないわけではない。", "有価証券の種類・評価は営業保証金の通常の供託ルールに従う。"],
      importance: "B",
      primarySources: [statute]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate business-guarantee-refund knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 6) throw new Error(`Expected 6 business-guarantee-refund knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsBusinessGuaranteeRefund = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
