(() => {
  "use strict";

  const gsiLandConditionMap = Object.freeze({
    id: "gsi-land-condition-map",
    label: "国土地理院『土地条件図』",
    url: "https://www.gsi.go.jp/bousaichiri/lc_index.html",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-landform-disaster-risk",
    sourceUnitIds: ["land-building-knowledge"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-landform-disaster-risk-land-condition-map-classifications",
      claim: "土地条件図は、主に山地、台地・段丘、低地、水部、人工地形などの地形分類を示す。",
      conditions: ["国土地理院の土地条件図を読む場合"],
      exceptions: [],
      importance: "A",
      primarySources: [gsiLandConditionMap],
      sourceFactIds: ["u88-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-landform-disaster-risk-land-condition-map-purpose",
      claim: "土地条件図は、防災対策や土地利用・土地保全・地域開発等の計画策定に必要な土地の自然条件等に関する基礎資料を提供するために整備されている。",
      conditions: ["国土地理院の土地条件図の利用目的を判断する場合"],
      exceptions: [],
      importance: "A",
      primarySources: [gsiLandConditionMap],
      sourceFactIds: ["u88-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-landform-disaster-risk-classification-indicates-hazard",
      claim: "地形と自然災害には密接な関係があり、地形分類の内容からその土地で発生しやすい自然災害を推定できる。",
      conditions: ["土地条件図等の地形分類から災害リスクを把握する場合"],
      exceptions: ["地形分類だけで個別地点の災害発生を断定するものではない。"],
      importance: "A",
      primarySources: [gsiLandConditionMap],
      sourceFactIds: ["u88-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-landform-disaster-risk-liquefaction-landforms",
      claim: "液状化の被害を受けやすい代表的な地形分類には、盛土地・埋立地、旧河道、砂丘の縁辺部、砂丘間低地・砂州間低地がある。",
      conditions: ["地震時の液状化リスクを地形分類から把握する場合"],
      exceptions: [],
      importance: "A",
      primarySources: [gsiLandConditionMap],
      sourceFactIds: ["u88-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-landform-disaster-risk-ground-collapse-landforms",
      claim: "地震時の地盤崩壊の被害を受けやすい代表的な地形分類には、山麓堆積地形、盛土地・埋立地がある。",
      conditions: ["地震時の地盤崩壊リスクを地形分類から把握する場合"],
      exceptions: [],
      importance: "B",
      primarySources: [gsiLandConditionMap],
      sourceFactIds: ["u88-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-landform-disaster-risk-debris-slope-landforms",
      claim: "洪水時の土石流・斜面崩壊の被害を受けやすい代表的な地形分類には、山麓堆積地形、扇状地がある。",
      conditions: ["土石流・斜面崩壊リスクを地形分類から把握する場合"],
      exceptions: [],
      importance: "B",
      primarySources: [gsiLandConditionMap],
      sourceFactIds: ["u88-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-landform-disaster-risk-flood-inundation-landforms",
      claim: "洪水氾濫・内水氾濫の被害を受けやすい代表的な地形分類には、旧河道、後背低地、干拓地、海岸平野・三角州、谷底平野・氾濫平野がある。",
      conditions: ["洪水氾濫・内水氾濫リスクを地形分類から把握する場合"],
      exceptions: [],
      importance: "A",
      primarySources: [gsiLandConditionMap],
      sourceFactIds: ["u88-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-landform-disaster-risk-storm-surge-landforms",
      claim: "高潮洪水の被害を受けやすい代表的な地形分類には、干拓地、海岸平野・三角州、盛土地・埋立地、後背低地、砂州・砂堆がある。",
      conditions: ["高潮洪水リスクを地形分類から把握する場合"],
      exceptions: [],
      importance: "B",
      primarySources: [gsiLandConditionMap],
      sourceFactIds: ["u88-f2"]
    }
  ];

  const allowedFactIds = new Set(["u88-f1", "u88-f2"]);
  const ids = new Set();
  const allowedImportance = new Set(["A", "B", "C"]);
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate Power Takken knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (!item.knowledgeId.startsWith("takken-k-")) throw new Error(`Invalid Power Takken knowledge id: ${item.knowledgeId}`);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") {
      throw new Error(`Invalid Power Takken knowledge verification state: ${item.knowledgeId}`);
    }
    if (item.conceptId !== "takken-concept-landform-disaster-risk") {
      throw new Error(`Unexpected Power Takken concept id: ${item.knowledgeId}`);
    }
    if (!allowedImportance.has(item.importance)) throw new Error(`Invalid Power Takken importance: ${item.knowledgeId}`);
    if (!Array.isArray(item.primarySources) || item.primarySources.length === 0) throw new Error(`Missing primary source: ${item.knowledgeId}`);
    for (const source of item.primarySources) {
      if (!source || source.sourceType !== "official_guidance") throw new Error(`Non-primary Power Takken source: ${item.knowledgeId}`);
    }
    if (!Array.isArray(item.sourceFactIds) || item.sourceFactIds.length === 0) throw new Error(`Missing source fact: ${item.knowledgeId}`);
    for (const factId of item.sourceFactIds) {
      if (!allowedFactIds.has(factId)) throw new Error(`Unexpected source fact ${factId}: ${item.knowledgeId}`);
    }
  }
  if (knowledgeItems.length !== 8) throw new Error(`Unexpected landform-disaster-risk knowledge count: ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsLandformDisasterRisk = Object.freeze(
    knowledgeItems.map((item) => Object.freeze({ ...item }))
  );
})();
