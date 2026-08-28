(() => {
  "use strict";

  const statute = Object.freeze({
    id: "egov-takken-act",
    label: "e-Gov法令検索『宅地建物取引業法』",
    url: "https://laws.e-gov.go.jp/law/327AC1000000176",
    sourceType: "statute"
  });
  const enforcementOrder = Object.freeze({
    id: "egov-takken-enforcement-order",
    label: "e-Gov法令検索『宅地建物取引業法施行令』",
    url: "https://laws.e-gov.go.jp/law/339CO0000000383",
    sourceType: "statute"
  });
  const guaranteeRule = Object.freeze({
    id: "egov-takken-guarantee-association-rule",
    label: "e-Gov法令検索『宅地建物取引業保証協会弁済業務保証金規則』",
    url: "https://laws.e-gov.go.jp/law/348M50004010002",
    sourceType: "statute"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-guarantee-association",
    sourceUnitIds: ["guarantee-association"],
    sourceFactIds: ["u14-f1"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-guarantee-association-statutory-system",
      claim: "宅地建物取引業法には、宅地建物取引業保証協会と、その社員に関する弁済業務保証金制度が設けられている。",
      conditions: ["宅地建物取引業保証協会の社員となる宅建業者について制度を判定する場合であること"],
      exceptions: ["営業保証金制度とは別の法定ルートであり、単なる民法上の任意組合制度ではない。"],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-guarantee-association-contribution-amount",
      claim: "弁済業務保証金分担金は、主たる事務所につき60万円、その他の事務所につき事務所ごとに30万円の割合で算定する。",
      conditions: ["保証協会の社員が納付する弁済業務保証金分担金を算定する場合であること"],
      exceptions: ["営業保証金の主たる事務所1,000万円・その他の事務所500万円と混同しない。"],
      importance: "A",
      primarySources: [statute, enforcementOrder]
    },
    {
      ...shared,
      knowledgeId: "takken-k-guarantee-association-joining-contribution-deadline",
      claim: "宅建業者が保証協会に加入しようとするときは、その加入しようとする日までに所定の弁済業務保証金分担金を保証協会へ納付しなければならない。",
      conditions: ["新たに保証協会へ加入しようとする宅建業者であること"],
      exceptions: ["加入後2週間以内に納めればよいというルールではない。"],
      importance: "A",
      primarySources: [statute, enforcementOrder]
    },
    {
      ...shared,
      knowledgeId: "takken-k-guarantee-association-new-office-contribution-two-weeks",
      claim: "保証協会の社員が弁済業務保証金分担金納付後に新たな事務所を設置したときは、その日から2週間以内に追加の弁済業務保証金分担金を保証協会へ納付しなければならない。",
      conditions: ["保証協会の社員が新たに事務所を設置した場合であること"],
      exceptions: ["営業保証金制度の事務所新設時の追加供託手続と混同しない。"],
      importance: "A",
      primarySources: [statute, enforcementOrder]
    },
    {
      ...shared,
      knowledgeId: "takken-k-guarantee-association-association-deposit-one-week",
      claim: "保証協会は弁済業務保証金分担金の納付を受けたとき、その日から1週間以内に、その納付額に相当する弁済業務保証金を供託しなければならない。",
      conditions: ["保証協会が社員から分担金の納付を受けた場合であること"],
      exceptions: ["社員自身が弁済業務保証金を供託するのではなく、保証協会が供託する。"],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-guarantee-association-refund-right-and-limit",
      claim: "保証協会の社員と宅地建物取引業に関し取引をした非宅建業者は、社員加入前の取引を含め、その取引により生じた債権について、当該社員が社員でなければ供託すべき営業保証金相当額の範囲内で弁済業務保証金から弁済を受ける権利を有する。",
      conditions: ["保証協会の社員との宅地建物取引業に関する取引から生じた債権であること", "取引時の相手方が宅地建物取引業者に該当しないこと"],
      exceptions: ["社員となる前の取引も法定範囲に含まれる。", "取引時に宅地建物取引業者であった者は保護対象から除かれる。"],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-guarantee-association-refund-certification-required",
      claim: "弁済業務保証金から弁済を受ける権利を実行しようとする者は、弁済を受けることができる額について当該保証協会の認証を受けなければならない。",
      conditions: ["弁済業務保証金について権利実行しようとする場合であること"],
      exceptions: ["認証を経ずに直接供託所へ請求できる制度ではない。"],
      importance: "A",
      primarySources: [statute, guaranteeRule]
    },
    {
      ...shared,
      knowledgeId: "takken-k-guarantee-association-association-replenishment-two-weeks",
      claim: "弁済業務保証金の還付があった場合、保証協会は規則所定の通知書の送付を受けた日から2週間以内に、還付額に相当する弁済業務保証金を供託しなければならない。",
      conditions: ["弁済業務保証金について権利実行による還付があった場合であること"],
      exceptions: ["還付を受けた取引相手が補充供託するのではなく、保証協会が供託する。"],
      importance: "A",
      primarySources: [statute, guaranteeRule]
    },
    {
      ...shared,
      knowledgeId: "takken-k-guarantee-association-refund-charge-two-weeks",
      claim: "弁済業務保証金の還付に係る社員または元社員は、保証協会から通知を受けた日から2週間以内に、還付額に相当する還付充当金を保証協会へ納付しなければならない。",
      conditions: ["その社員または元社員に係る弁済業務保証金の還付があった場合であること"],
      exceptions: ["供託所へ直接納付するのではなく、保証協会へ還付充当金を納付する。"],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-guarantee-association-refund-charge-nonpayment-loss",
      claim: "保証協会の社員が法定期間内に還付充当金を納付しないときは、その社員の地位を失う。",
      conditions: ["保証協会の社員が還付充当金の納付通知を受け、2週間の法定期間内に納付しない場合であること"],
      exceptions: ["単なる任意の会費滞納として扱うのではなく、宅建業法上の社員地位喪失につながる。"],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-guarantee-association-member-deposit-exemption-and-loss",
      claim: "保証協会の社員は弁済業務開始日以後は営業保証金の供託を要しないが、社員の地位を失ったときは、その日から1週間以内に営業保証金を供託しなければならない。",
      conditions: ["国土交通大臣の指定する弁済業務開始日以後であること", "社員地位喪失後も宅建業を営む場合の営業保証金供託義務を判定する場合であること"],
      exceptions: ["保証協会加入により営業保証金制度そのものが消滅するわけではなく、社員地位喪失時には通常の営業保証金ルートへ戻る。"],
      importance: "A",
      primarySources: [statute]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate guarantee-association knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 11) throw new Error(`Expected 11 guarantee-association knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsGuaranteeAssociation = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
