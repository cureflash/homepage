(() => {
  "use strict";

  const landReadjustmentAct = Object.freeze({
    id: "egov-land-readjustment-act-20260401",
    label: "e-Gov法令検索『土地区画整理法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/329AC0000000119?occasion_date=20260401",
    sourceType: "statute"
  });

  const mlitLandReadjustmentFlow = Object.freeze({
    id: "mlit-land-readjustment-project-flow",
    label: "国土交通省『土地区画整理事業』事業の流れ",
    url: "https://www.mlit.go.jp/toshi/city/sigaiti/toshi_urbanmainte_tk_000033.html",
    sourceType: "official_guidance"
  });

  const mlitLandReadjustmentGuidance = Object.freeze({
    id: "mlit-land-readjustment-operation-guidance-provisional-replotting",
    label: "国土交通省『土地区画整理事業運用指針』仮換地指定",
    url: "https://www.mlit.go.jp/toshi/city/sigaiti/content/001740690.pdf",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-provisional-replotting",
    sourceUnitIds: ["land-readjustment"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-provisional-replotting-designation-authority",
      claim: "土地区画整理法98条により、仮換地を指定する主体は土地区画整理事業の施行者である。",
      conditions: ["換地処分前の土地区画整理事業であること", "施行地区内の宅地について仮換地を指定する場面であること"],
      exceptions: [],
      importance: "A",
      primarySources: [landReadjustmentAct, mlitLandReadjustmentGuidance],
      sourceFactIds: ["u76-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-provisional-replotting-designation-grounds",
      claim: "施行者は、土地の区画形質の変更・公共施設の新設若しくは変更に係る工事のため必要がある場合、または換地計画に基づき換地処分を行うため必要がある場合に、仮換地を指定できる。",
      conditions: ["換地処分を行う前であること", "土地区画整理法98条1項の必要性があること"],
      exceptions: [],
      importance: "A",
      primarySources: [landReadjustmentAct, mlitLandReadjustmentGuidance],
      sourceFactIds: ["u76-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-provisional-replotting-consideration-standard",
      claim: "仮換地を指定する場合、施行者は換地計画で定められた事項または土地区画整理法上の換地計画決定基準を考慮しなければならない。",
      conditions: ["土地区画整理法98条1項に基づき仮換地を指定すること"],
      exceptions: [],
      importance: "B",
      primarySources: [landReadjustmentAct, mlitLandReadjustmentGuidance],
      sourceFactIds: ["u76-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-provisional-replotting-use-profit-shift",
      claim: "仮換地指定の効力発生日から換地処分公告の日まで、従前地を権原に基づき使用収益できた者は、原則として仮換地を従前の権利内容と同様に使用収益でき、従前地は使用収益できない。",
      conditions: ["仮換地が指定されていること", "従前地について権原に基づく使用収益権があること"],
      exceptions: ["施行者が仮換地の使用収益開始日を別に定めた場合は、その別日までは仮換地を使用収益できない。"],
      importance: "A",
      primarySources: [landReadjustmentAct, mlitLandReadjustmentGuidance, mlitLandReadjustmentFlow],
      sourceFactIds: ["u76-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-provisional-replotting-separate-use-start-date",
      claim: "仮換地に使用収益の障害となる物件がある場合その他特別の事情がある場合、施行者は仮換地の使用収益開始日を仮換地指定の効力発生日とは別に定めることができる。",
      conditions: ["仮換地が指定されていること", "使用収益の障害となる物件その他特別の事情があること"],
      exceptions: [],
      importance: "B",
      primarySources: [landReadjustmentAct, mlitLandReadjustmentGuidance],
      sourceFactIds: ["u76-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-provisional-replotting-unusable-gap-compensation",
      claim: "仮換地の使用収益開始日が別に定められ、従前地も仮換地も使用収益できない期間に通常生ずべき損失があるときは、施行者が補償する。",
      conditions: ["仮換地指定の効力発生日と使用収益開始日が異なること", "その間の使用収益不能により通常生ずべき損失があること"],
      exceptions: [],
      importance: "B",
      primarySources: [landReadjustmentAct, mlitLandReadjustmentGuidance],
      sourceFactIds: ["u76-f1"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate provisional-replotting knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-provisional-replotting") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute" || entry.sourceType === "official_guidance")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u76-f1")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 6) throw new Error(`Expected 6 provisional-replotting knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsProvisionalReplotting = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
