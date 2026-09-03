(() => {
  "use strict";

  const landReadjustmentAct = Object.freeze({
    id: "egov-land-readjustment-act-20260401",
    label: "e-Gov法令検索『土地区画整理法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/329AC0000000119?occasion_date=20260401",
    sourceType: "statute"
  });

  const mlitLandReadjustmentGuidance = Object.freeze({
    id: "mlit-land-readjustment-operation-guidance-replotting-disposition",
    label: "国土交通省『土地区画整理事業運用指針』換地処分・保留地処分・清算金",
    url: "https://www.mlit.go.jp/toshi/city/sigaiti/content/001737966.pdf",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-replotting-disposition",
    sourceUnitIds: ["land-readjustment"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-replotting-disposition-effect-start-next-day",
      claim: "換地処分の公告があった場合、土地区画整理法104条に定める換地処分の主要な法的効果は、その公告があった日の翌日から生じる。",
      conditions: ["土地区画整理法103条4項の換地処分公告があったこと"],
      exceptions: ["同法104条1項等により公告日の終了時に消滅するとされる権利もある。"],
      importance: "A",
      primarySources: [landReadjustmentAct, mlitLandReadjustmentGuidance],
      sourceFactIds: ["u76-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-replotting-disposition-replot-deemed-former-land",
      claim: "換地計画で定められた換地は、換地処分公告があった日の翌日から従前の宅地とみなされる。",
      conditions: ["換地計画に換地が定められていること", "換地処分公告があったこと"],
      exceptions: [],
      importance: "A",
      primarySources: [landReadjustmentAct, mlitLandReadjustmentGuidance],
      sourceFactIds: ["u76-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-replotting-disposition-no-replot-rights-extinguish",
      claim: "換地計画で換地を定めなかった従前の宅地について存する権利は、換地処分公告があった日が終了した時に消滅する。",
      conditions: ["換地計画で当該従前地について換地を定めていないこと", "換地処分公告があったこと"],
      exceptions: ["行政上または裁判上の処分で従前の宅地に専属するものには、土地区画整理法104条1項・2項の効果は及ばない。"],
      importance: "A",
      primarySources: [landReadjustmentAct],
      sourceFactIds: ["u76-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-replotting-disposition-other-rights-shift",
      claim: "従前の宅地に存した所有権・地役権以外の権利または処分の制限は、換地計画でその目的となるべき換地またはその部分が定められていれば、換地処分公告の翌日からその換地または部分を目的とするものとして扱われる。",
      conditions: ["従前地に所有権・地役権以外の権利または処分の制限があること", "換地計画でその目的となるべき換地または部分が定められていること"],
      exceptions: ["換地計画で目的となるべき換地の部分を定められなかった権利は、公告日が終了した時に消滅する。"],
      importance: "A",
      primarySources: [landReadjustmentAct, mlitLandReadjustmentGuidance],
      sourceFactIds: ["u76-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-replotting-disposition-easement-remains-former-land",
      claim: "施行地区内の宅地に存する地役権は、換地処分公告の翌日以後も原則として従前の宅地の上に存続する。",
      conditions: ["施行地区内の宅地に地役権が存在すること", "換地処分公告があったこと"],
      exceptions: ["土地区画整理事業の施行により行使する利益がなくなった地役権は公告日が終了した時に消滅する。"],
      importance: "B",
      primarySources: [landReadjustmentAct],
      sourceFactIds: ["u76-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-replotting-disposition-easement-no-benefit-extinguish",
      claim: "土地区画整理事業の施行により行使する利益がなくなった地役権は、換地処分公告があった日が終了した時に消滅する。",
      conditions: ["施行地区内の宅地に地役権があること", "事業施行によりその地役権を行使する利益がなくなったこと"],
      exceptions: [],
      importance: "B",
      primarySources: [landReadjustmentAct],
      sourceFactIds: ["u76-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-replotting-disposition-settlement-money-fixed",
      claim: "換地計画で定められた清算金は、換地処分公告があった日の翌日に確定する。",
      conditions: ["土地区画整理法94条により換地計画に清算金が定められていること", "換地処分公告があったこと"],
      exceptions: [],
      importance: "B",
      primarySources: [landReadjustmentAct, mlitLandReadjustmentGuidance],
      sourceFactIds: ["u76-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-replotting-disposition-reserved-land-acquired-by-implementer",
      claim: "換地計画で定められた保留地は、換地処分公告があった日の翌日に施行者が取得する。",
      conditions: ["土地区画整理法96条1項または2項により換地計画に保留地が定められていること", "換地処分公告があったこと"],
      exceptions: [],
      importance: "B",
      primarySources: [landReadjustmentAct],
      sourceFactIds: ["u76-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate replotting-disposition knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-replotting-disposition") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute" || entry.sourceType === "official_guidance")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u76-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 8) throw new Error(`Expected 8 replotting-disposition knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsReplottingDisposition = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
