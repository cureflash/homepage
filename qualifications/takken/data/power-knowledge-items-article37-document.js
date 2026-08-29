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
    conceptId: "takken-concept-article37-document",
    sourceUnitIds: ["article37-basics", "article35-vs-37"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-article37-document-after-contract",
      claim: "37条書面は、宅地・建物の売買・交換または貸借について契約が成立した後に、宅建業者が契約内容を明らかにするため交付する書面である。",
      conditions: ["宅建業法37条1項または2項の対象となる契約が成立したこと"],
      exceptions: ["35条の重要事項説明のように契約成立前に行う手続ではない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u23-f1", "u24-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article37-document-sale-exchange-self-recipient",
      claim: "宅建業者が宅地・建物の売買または交換について自ら当事者として契約を締結したときは、37条書面をその相手方に交付する。",
      conditions: ["宅建業者が売買または交換の契約当事者であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u23-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article37-document-sale-exchange-agency-recipient",
      claim: "宅建業者が宅地・建物の売買または交換について当事者を代理して契約を締結したときは、37条書面を契約の相手方と代理を依頼した者の双方に交付する。",
      conditions: ["売買または交換について宅建業者が一方当事者を代理して契約を締結したこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u23-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article37-document-sale-exchange-brokerage-recipient",
      claim: "宅建業者の媒介により宅地・建物の売買または交換の契約が成立したときは、37条書面をその契約の各当事者に交付する。",
      conditions: ["売買または交換の契約が宅建業者の媒介により成立したこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u23-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article37-document-lease-recipient",
      claim: "宅建業者が宅地・建物の貸借を代理したときは相手方と代理を依頼した者に、媒介したときは契約の各当事者に37条書面を交付する。",
      conditions: ["宅地または建物の貸借について宅建業者が代理または媒介をしたこと"],
      exceptions: ["宅建業者が自ら貸主となるだけの賃貸は、37条2項の代理・媒介の交付義務とは別である。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u23-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article37-document-party-identification",
      claim: "37条書面の記載事項には、契約当事者の氏名（法人は名称）および住所が含まれる。",
      conditions: ["宅建業法37条の書面を作成すること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u23-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article37-document-property-identification",
      claim: "37条書面には、対象宅地の所在・地番等または建物の所在・種類・構造等、目的物を特定するために必要な表示を記載する。",
      conditions: ["宅建業法37条の対象となる宅地または建物の契約であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u23-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article37-document-consideration-payment",
      claim: "37条書面には、売買・交換では代金または交換差金の額と支払時期・方法を、貸借では借賃の額と支払時期・方法を記載する。",
      conditions: ["売買・交換では37条1項、貸借では37条2項の対象であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u23-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article37-document-delivery-time",
      claim: "37条書面には、宅地または建物の引渡しの時期を記載する。",
      conditions: ["宅建業法37条の対象となる契約であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u23-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article37-document-registration-time",
      claim: "売買・交換の37条書面には、所有権移転登記の申請の時期を記載する。",
      conditions: ["宅地または建物の売買・交換について37条1項の書面を作成すること"],
      exceptions: ["貸借の37条2項の記載事項として移転登記申請時期を要求するものではない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u23-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article37-document-takkenshi-name",
      claim: "宅建業者は37条1項・2項の書面を作成したとき、宅地建物取引士をしてその書面に記名させなければならない。",
      conditions: ["37条1項または2項により交付すべき書面を作成したこと"],
      exceptions: ["宅建士の押印までは法37条3項上要求されない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u23-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-article37-document-electronic-provision",
      claim: "37条書面は、法定の相手方の承諾を得て所定の電磁的方法で記載事項を提供することで、書面交付に代えることができる。",
      conditions: ["宅建業法37条4項・5項および関係政省令の要件を満たすこと", "提供を受ける者の承諾を得ること"],
      exceptions: ["相手方の承諾なしに一方的に電子提供へ切り替えることはできない。"],
      importance: "B",
      primarySources: [statute],
      sourceFactIds: ["u23-f1"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate Article 37 document knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 12) throw new Error(`Expected 12 Article 37 document knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsArticle37Document = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
