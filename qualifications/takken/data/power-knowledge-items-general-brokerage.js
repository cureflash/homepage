(() => {
  "use strict";

  const statute = Object.freeze({
    id: "egov-takken-act",
    label: "e-Gov法令検索『宅地建物取引業法』",
    url: "https://laws.e-gov.go.jp/law/327AC1000000176",
    sourceType: "statute"
  });
  const mlitStandardBrokerage = Object.freeze({
    id: "mlit-standard-brokerage-current",
    label: "国土交通省『宅地建物取引業法施行規則の規定による標準媒介契約約款』",
    url: "https://www.mlit.go.jp/totikensangyo/const/content/001723420.pdf",
    sourceType: "official_notice"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-general-brokerage",
    sourceUnitIds: ["brokerage-contract-types"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-general-brokerage-multiple-brokers-allowed",
      claim: "一般媒介契約では、依頼者は同じ目的物件の売買・交換の媒介または代理を、契約相手の宅建業者以外の宅建業者にも重ねて依頼することができる。",
      conditions: ["売買または交換について一般媒介契約を締結していること"],
      exceptions: ["専任媒介契約・専属専任媒介契約では、他の宅建業者へ重ねて依頼することはできない。"],
      importance: "A",
      primarySources: [statute, mlitStandardBrokerage],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-general-brokerage-self-found-transaction-allowed",
      claim: "一般媒介契約では、依頼者は自ら発見した相手方と売買・交換契約を締結することができる。",
      conditions: ["売買または交換について一般媒介契約を締結していること"],
      exceptions: ["専属専任媒介契約では自己発見取引は認められない。"],
      importance: "A",
      primarySources: [statute, mlitStandardBrokerage],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-general-brokerage-disclosure-default",
      claim: "標準一般媒介契約約款では、原則の契約書式は、依頼者が重ねて依頼する他の宅建業者を明示する義務を負う方式である。",
      conditions: ["国土交通大臣が定める標準一般媒介契約約款に基づく通常の契約書式を用いる場合であること"],
      exceptions: ["一般媒介契約で常に他業者の明示が必須という意味ではなく、明示しない契約とする特約も認められている。"],
      importance: "A",
      primarySources: [statute, mlitStandardBrokerage],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-general-brokerage-nondisclosure-special-agreement",
      claim: "標準一般媒介契約約款では、重ねて依頼する他の宅建業者を明示しない一般媒介契約とする場合、その旨を特約することができる。",
      conditions: ["一般媒介契約について、他の宅建業者を明示しない方式を採用する場合であること"],
      exceptions: ["標準書式の原則は他業者を明示する方式である。"],
      importance: "A",
      primarySources: [statute, mlitStandardBrokerage],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-general-brokerage-reins-not-mandatory",
      claim: "一般媒介契約には、専任媒介契約・専属専任媒介契約のような指定流通機構への法定登録義務はなく、標準一般媒介契約書では登録の有無を選択する。",
      conditions: ["一般媒介契約について指定流通機構への登録義務を判定する場合であること"],
      exceptions: ["一般媒介でも任意に指定流通機構へ登録することはできる。"],
      importance: "A",
      primarySources: [statute, mlitStandardBrokerage],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-general-brokerage-no-statutory-three-month-cap",
      claim: "一般媒介契約には、専任媒介契約・専属専任媒介契約に適用される宅建業法上の3か月の有効期間上限は適用されない。",
      conditions: ["一般媒介契約の有効期間について、宅建業法34条の2の専任系契約に対する期間制限との違いを判定する場合であること"],
      exceptions: ["専任媒介契約・専属専任媒介契約では、有効期間は3か月を超えることができない。"],
      importance: "A",
      primarySources: [statute, mlitStandardBrokerage],
      sourceFactIds: ["u16-f1"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate general-brokerage knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "official_notice")) throw new Error(`Missing standard brokerage authority: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 6) throw new Error(`Expected 6 general-brokerage knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsGeneralBrokerage = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
