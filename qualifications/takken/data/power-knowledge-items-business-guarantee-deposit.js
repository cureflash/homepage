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
  const enforcementRegulation = Object.freeze({
    id: "egov-takken-enforcement-regulation",
    label: "e-Gov法令検索『宅地建物取引業法施行規則』",
    url: "https://laws.e-gov.go.jp/law/332M50004000012",
    sourceType: "statute"
  });
  const kinkiGuidance = Object.freeze({
    id: "mlit-kinki-takken-license-requirements",
    label: "国土交通省近畿地方整備局『宅地建物取引業の範囲・免許権者・免許の要件等・有効期間について』",
    url: "https://www-2.kkr.mlit.go.jp/kensei/kensetsu/fudousanjyounado/torihikigyou/copy_of_takken.html",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-business-guarantee-deposit",
    sourceUnitIds: ["business-guarantee-deposit"],
    sourceFactIds: ["u12-f1"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-business-guarantee-deposit-statutory-system",
      claim: "宅建業法には、宅建業者が営業開始前に営業保証金を供託する制度が設けられている。",
      conditions: [
        "営業保証金制度を利用して営業を開始する宅建業者であること",
        "保証協会の社員として弁済業務保証金制度を利用する場合は別制度で扱うこと"
      ],
      exceptions: [
        "保証協会の社員は営業保証金の直接供託に代えて弁済業務保証金制度を利用する。",
        "免許を受けただけでは営業開始要件を満たさない。"
      ],
      importance: "A",
      primarySources: [statute, kinkiGuidance]
    },
    {
      ...shared,
      knowledgeId: "takken-k-business-guarantee-deposit-place",
      claim: "営業保証金は、主たる事務所の最寄りの供託所に供託する。",
      conditions: ["営業保証金を直接供託する場合であること"],
      exceptions: ["従たる事務所ごとに別々の最寄り供託所へ分散して供託する制度ではない。"],
      importance: "A",
      primarySources: [statute, kinkiGuidance]
    },
    {
      ...shared,
      knowledgeId: "takken-k-business-guarantee-deposit-amount",
      claim: "営業保証金の額は、主たる事務所につき1,000万円、その他の事務所につき事務所ごとに500万円を合計した額である。",
      conditions: ["営業保証金を直接供託する場合であること"],
      exceptions: ["保証協会の弁済業務保証金分担金の主たる事務所60万円・従たる事務所30万円と混同しない。"],
      importance: "A",
      primarySources: [statute, enforcementOrder, kinkiGuidance]
    },
    {
      ...shared,
      knowledgeId: "takken-k-business-guarantee-deposit-cash-or-securities",
      claim: "営業保証金は金銭で供託できるほか、国債証券その他法令で認められた有価証券を充てることができる。",
      conditions: ["宅建業法25条3項および施行規則15条・15条の2の対象となる有価証券であること"],
      exceptions: ["どの有価証券でも額面どおりに営業保証金へ算入できるわけではない。"],
      importance: "B",
      primarySources: [statute, enforcementRegulation]
    },
    {
      ...shared,
      knowledgeId: "takken-k-business-guarantee-deposit-security-valuation",
      claim: "営業保証金に充てる有価証券は、国債証券は額面金額、地方債証券・政府保証債は額面金額の90%、その他の法定債券は額面金額の80%を原則として評価する。",
      conditions: ["営業保証金に有価証券を充てる場合であること"],
      exceptions: ["割引発行債券で供託日から償還期限まで5年を超えるものには施行規則15条2項の特則がある。"],
      importance: "A",
      primarySources: [statute, enforcementRegulation]
    },
    {
      ...shared,
      knowledgeId: "takken-k-business-guarantee-deposit-notice-after-deposit",
      claim: "宅建業者は営業保証金を供託したとき、供託書の写しを添えて免許を受けた国土交通大臣または都道府県知事にその旨を届け出る。",
      conditions: ["営業保証金の供託を完了した後であること"],
      exceptions: ["供託だけで届出を省略してよいわけではない。"],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-business-guarantee-deposit-business-start-gate",
      claim: "宅建業者は、営業保証金を供託した旨の届出をした後でなければ事業を開始できない。",
      conditions: ["営業保証金制度によって営業開始する場合であること"],
      exceptions: ["免許取得日や供託日だけを基準に直ちに営業開始できるわけではない。"],
      importance: "A",
      primarySources: [statute, kinkiGuidance]
    },
    {
      ...shared,
      knowledgeId: "takken-k-business-guarantee-deposit-new-office-additional-deposit",
      claim: "営業保証金を供託している宅建業者が新たに事務所を設置したときは、その事務所分の営業保証金を供託して届け出た後でなければ、その新設事務所で事業を開始できない。",
      conditions: [
        "営業保証金制度を利用している宅建業者が免許取得後に事務所を新設した場合であること",
        "追加額はその他の事務所1か所につき500万円の割合で算定すること"
      ],
      exceptions: ["保証協会の社員が新設事務所について負う弁済業務保証金分担金の追加納付とは別制度である。"],
      importance: "A",
      primarySources: [statute, enforcementOrder]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate business-guarantee-deposit knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 8) throw new Error(`Expected 8 business-guarantee-deposit knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsBusinessGuaranteeDeposit = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
