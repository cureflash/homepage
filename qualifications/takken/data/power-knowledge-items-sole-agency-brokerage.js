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
    conceptId: "takken-concept-sole-agency-brokerage",
    sourceUnitIds: ["brokerage-contract-types", "brokerage-reins-reporting"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-sole-agency-brokerage-other-brokers-prohibited",
      claim: "専属専任媒介契約では、依頼者は同じ目的物件の売買・交換について、契約相手の宅建業者以外の宅建業者へ重ねて媒介または代理を依頼することができない。",
      conditions: ["売買または交換について専属専任媒介契約を締結していること"],
      exceptions: ["一般媒介契約では他の宅建業者へ重ねて依頼することができる。"],
      importance: "A",
      primarySources: [statute, mlitStandardBrokerage],
      sourceFactIds: ["u16-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-sole-agency-brokerage-self-found-transaction-prohibited",
      claim: "専属専任媒介契約では、依頼者は自ら発見した相手方と売買・交換契約を締結することができない。",
      conditions: ["専属専任媒介契約であること"],
      exceptions: ["専任媒介契約では自己発見取引が認められる。"],
      importance: "A",
      primarySources: [statute, mlitStandardBrokerage],
      sourceFactIds: ["u16-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-sole-agency-brokerage-period-three-month-cap",
      claim: "専属専任媒介契約の有効期間は3か月を超えることができず、3か月を超える定めをしても法定上限を超える部分は認められない。",
      conditions: ["専属専任媒介契約の有効期間を定める場合であること"],
      exceptions: ["一般媒介契約には宅建業法上のこの3か月上限は適用されない。"],
      importance: "A",
      primarySources: [statute, mlitStandardBrokerage],
      sourceFactIds: ["u16-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-sole-agency-brokerage-renewal-client-request",
      claim: "専属専任媒介契約は、依頼者からの申出がある場合に更新することができる。",
      conditions: ["専属専任媒介契約の有効期間満了後も契約を継続する場合であること"],
      exceptions: ["宅建業者側だけの判断による自動更新を前提にしてはならない。"],
      importance: "A",
      primarySources: [statute, mlitStandardBrokerage],
      sourceFactIds: ["u16-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-sole-agency-brokerage-renewal-three-month-cap",
      claim: "専属専任媒介契約を更新する場合も、更新後の有効期間は3か月を超えることができない。",
      conditions: ["依頼者の申出により専属専任媒介契約を更新する場合であること"],
      exceptions: ["更新によって3か月の法定上限を回避することはできない。"],
      importance: "A",
      primarySources: [statute, mlitStandardBrokerage],
      sourceFactIds: ["u16-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-sole-agency-brokerage-reins-five-days",
      claim: "専属専任媒介契約では、宅建業者は媒介契約締結の日から5日以内に、指定流通機構へ所定事項を登録しなければならない。",
      conditions: ["専属専任媒介契約について指定流通機構への法定登録期限を判定する場合であること"],
      exceptions: ["専任媒介契約の法定登録期限は7日以内である。"],
      importance: "A",
      primarySources: [statute, mlitStandardBrokerage],
      sourceFactIds: ["u17-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-sole-agency-brokerage-report-one-week",
      claim: "専属専任媒介契約では、宅建業者は依頼者に対し、業務の処理状況を1週間に1回以上報告しなければならない。",
      conditions: ["専属専任媒介契約に基づく業務処理状況の報告頻度を判定する場合であること"],
      exceptions: ["専任媒介契約では2週間に1回以上の報告が必要である。"],
      importance: "A",
      primarySources: [statute, mlitStandardBrokerage],
      sourceFactIds: ["u17-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate sole-agency-brokerage knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "official_notice")) throw new Error(`Missing standard brokerage authority: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 7) throw new Error(`Expected 7 sole-agency-brokerage knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsSoleAgencyBrokerage = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
