(() => {
  "use strict";

  const statute = Object.freeze({
    id: "egov-takken-act",
    label: "e-Gov法令検索『宅地建物取引業法』",
    url: "https://laws.e-gov.go.jp/law/327AC1000000176",
    sourceType: "statute"
  });
  const standardBrokerage = Object.freeze({
    id: "mlit-standard-brokerage",
    label: "国土交通省『標準媒介契約約款』",
    url: "https://www.mlit.go.jp/notice/noticedata/sgml/1990/26196400/26196400.html",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-brokerage-reporting",
    sourceUnitIds: ["brokerage-reins-reporting"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-reporting-exclusive-and-sole-duty",
      claim: "専任媒介契約および専属専任媒介契約では、宅建業者は依頼者に対して媒介契約に係る業務の処理状況を報告しなければならない。",
      conditions: ["宅地または建物の売買・交換について専任媒介契約または専属専任媒介契約を締結していること"],
      exceptions: ["一般媒介契約には、宅建業法34条の2が定める同じ法定頻度の業務処理状況報告義務はない。"],
      importance: "A",
      primarySources: [statute, standardBrokerage],
      sourceFactIds: ["u17-f1", "u17-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-reporting-exclusive-two-weeks",
      claim: "専任媒介契約では、宅建業者は依頼者に対し、2週間に1回以上の頻度で業務の処理状況を報告しなければならない。",
      conditions: ["専属専任媒介契約ではない専任媒介契約について法定報告頻度を判定する場合であること"],
      exceptions: ["専属専任媒介契約では1週間に1回以上の報告が必要である。"],
      importance: "A",
      primarySources: [statute, standardBrokerage],
      sourceFactIds: ["u17-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-brokerage-reporting-sole-one-week",
      claim: "専属専任媒介契約では、宅建業者は依頼者に対し、1週間に1回以上の頻度で業務の処理状況を報告しなければならない。",
      conditions: ["専属専任媒介契約について法定報告頻度を判定する場合であること"],
      exceptions: ["専属専任でない専任媒介契約では2週間に1回以上の報告が必要である。"],
      importance: "A",
      primarySources: [statute, standardBrokerage],
      sourceFactIds: ["u17-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate brokerage reporting knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 3) throw new Error(`Expected 3 brokerage reporting knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsBrokerageReporting = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
