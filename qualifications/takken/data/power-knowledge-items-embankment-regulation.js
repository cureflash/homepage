(() => {
  "use strict";

  const embankmentAct = Object.freeze({
    id: "egov-embankment-regulation-act-20260401",
    label: "e-Gov法令検索『宅地造成及び特定盛土等規制法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/336AC0000000191?occasion_date=20260401",
    sourceType: "statute"
  });

  const mlitEmbankmentOverview = Object.freeze({
    id: "mlit-embankment-regulation-overview",
    label: "国土交通省『盛土規制法の概要』",
    url: "https://www.mlit.go.jp/toshi/morido-gaiyou.html",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-embankment-regulation",
    sourceUnitIds: ["embankment-regulation"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-embankment-regulation-land-use-neutral",
      claim: "盛土規制法は、宅地・農地・森林など土地の用途にかかわらず、盛土等に伴う災害を防止するため危険な盛土等を包括的に規制する。",
      conditions: ["宅地造成、特定盛土等または土石の堆積に伴う災害防止に関する制度であること"],
      exceptions: [],
      importance: "A",
      primarySources: [embankmentAct, mlitEmbankmentOverview],
      sourceFactIds: ["u77-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-embankment-regulation-takuzo-zone",
      claim: "都道府県知事等は、市街地・集落等を含む区域で、宅地造成等に伴う災害により人家等へ危害を生ずるおそれが大きく、工事規制が必要な区域を宅地造成等工事規制区域として指定できる。",
      conditions: ["宅地造成等に伴う災害により人家等へ危害を生ずるおそれが大きい区域であること", "宅地造成等に関する工事について規制を行う必要があること"],
      exceptions: [],
      importance: "A",
      primarySources: [embankmentAct, mlitEmbankmentOverview],
      sourceFactIds: ["u77-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-embankment-regulation-special-zone",
      claim: "都道府県知事等は、宅地造成等工事規制区域以外の土地で、特定盛土等または土石の堆積に伴う災害により人家等へ危害を生ずるおそれが大きく、工事規制が必要な区域を特定盛土等規制区域として指定できる。",
      conditions: ["宅地造成等工事規制区域以外の土地であること", "特定盛土等または土石の堆積に伴う災害により人家等へ危害を生ずるおそれが大きい区域であること", "工事について規制を行う必要があること"],
      exceptions: [],
      importance: "A",
      primarySources: [embankmentAct, mlitEmbankmentOverview],
      sourceFactIds: ["u77-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-embankment-regulation-zone-designation-authority",
      claim: "宅地造成等工事規制区域および特定盛土等規制区域は、基礎調査の結果を踏まえ、関係市町村長の意見を聴いた上で都道府県知事等が指定する。",
      conditions: ["盛土規制法に基づく規制区域の指定であること"],
      exceptions: [],
      importance: "A",
      primarySources: [embankmentAct, mlitEmbankmentOverview],
      sourceFactIds: ["u77-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-embankment-regulation-takuzo-zone-permit",
      claim: "宅地造成等工事規制区域内で宅地造成等に関する工事を行う場合、工事主は原則として工事着手前に都道府県知事等の許可を受けなければならない。",
      conditions: ["宅地造成等工事規制区域内であること", "法令上の許可対象となる宅地造成等に関する工事であること"],
      exceptions: ["公共施設用地における工事や、災害発生のおそれがないものとして法令で定める工事等は許可対象から除かれる。"],
      importance: "A",
      primarySources: [embankmentAct, mlitEmbankmentOverview],
      sourceFactIds: ["u77-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-embankment-regulation-special-zone-permit",
      claim: "特定盛土等規制区域内で、特定盛土等または土石の堆積に関する工事のうち政令で定める一定規模以上のものを行う場合、工事主は原則として工事着手前に都道府県知事等の許可を受けなければならない。",
      conditions: ["特定盛土等規制区域内であること", "特定盛土等または土石の堆積に関する工事であること", "政令で定める許可対象規模に該当すること"],
      exceptions: ["公共施設用地における工事や、災害発生のおそれがないものとして法令で定める工事等は許可対象から除かれる。"],
      importance: "A",
      primarySources: [embankmentAct, mlitEmbankmentOverview],
      sourceFactIds: ["u77-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-embankment-regulation-covered-works",
      claim: "盛土規制法の規制対象には、宅地造成や特定盛土等だけでなく、一定期間後に除却する土石の堆積も含まれる。",
      conditions: ["盛土規制法上の宅地造成等または特定盛土等・土石の堆積に関する工事であること"],
      exceptions: ["具体的に許可が必要となる規模は規制区域の種類と政令上の規模要件によって異なる。"],
      importance: "A",
      primarySources: [embankmentAct, mlitEmbankmentOverview],
      sourceFactIds: ["u77-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate embankment-regulation knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-embankment-regulation") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute" || entry.sourceType === "official_guidance")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u77-f1" || id === "u77-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 7) throw new Error(`Expected 7 embankment-regulation knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsEmbankmentRegulation = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
