(() => {
  "use strict";

  const rftcDisplayRules = Object.freeze({
    id: "rftc-display-rules",
    label: "不動産公正取引協議会連合会『不動産の表示に関する公正競争規約・同施行規則』",
    url: "https://www.rftc.jp/webkanri/kanri/wp-content/uploads/2019/02/h_kiyaku.pdf",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-real-estate-advertising-rules",
    sourceUnitIds: ["fair-competition-advertising"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-advertising-rules-misleading-display-prohibited",
      claim: "不動産広告では、物件の交通利便性、距離、面積、取引態様などについて、事実と異なる表示や実際より有利・優良であると誤認させる表示をしてはならない。",
      conditions: ["不動産の内容・取引条件等を広告表示する場合"],
      exceptions: [],
      importance: "A",
      primarySources: [rftcDisplayRules],
      sourceFactIds: ["u87-f1", "u87-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-advertising-rules-transaction-mode-terms",
      claim: "取引態様は、『売主』『貸主』『代理』または『媒介（仲介）』の別を、これらの用語を用いて表示する。",
      conditions: ["不動産広告で取引態様を表示する場合"],
      exceptions: [],
      importance: "A",
      primarySources: [rftcDisplayRules],
      sourceFactIds: ["u87-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-advertising-rules-nearest-station-walk-time",
      claim: "公共交通機関を利用することが通例である物件では、鉄道等の最寄駅等の名称と、物件から最寄駅等までの徒歩所要時間を明示する。",
      conditions: ["公共交通機関を利用することが通例である物件の交通利便性を表示する場合"],
      exceptions: [],
      importance: "A",
      primarySources: [rftcDisplayRules],
      sourceFactIds: ["u87-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-advertising-rules-walk-80m-per-minute",
      claim: "徒歩所要時間は、道路距離80メートルにつき1分を要するものとして算出する。",
      conditions: ["徒歩による所要時間を表示する場合"],
      exceptions: [],
      importance: "A",
      primarySources: [rftcDisplayRules],
      sourceFactIds: ["u87-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-advertising-rules-walk-fraction-round-up",
      claim: "徒歩所要時間の算出で1分未満の端数が生じたときは、その端数を1分として算出する。",
      conditions: ["道路距離を80メートルにつき1分として徒歩所要時間を算出し、1分未満の端数が生じる場合"],
      exceptions: [],
      importance: "A",
      primarySources: [rftcDisplayRules],
      sourceFactIds: ["u87-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-advertising-rules-multiple-lots-nearest-farthest",
      claim: "一団の宅地または建物と駅その他の施設との道路距離・所要時間は、取引する区画のうち施設に最も近い区画から算出した数値とともに、最も遠い区画から算出した数値も表示する。",
      conditions: ["複数区画からなる団地と駅その他の施設との道路距離または所要時間を表示する場合"],
      exceptions: [],
      importance: "B",
      primarySources: [rftcDisplayRules],
      sourceFactIds: ["u87-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-advertising-rules-area-metric-unit",
      claim: "物件の面積はメートル法で表示し、1平方メートル未満の数値は切り捨てて表示することができる。",
      conditions: ["不動産広告で物件の面積を表示する場合"],
      exceptions: [],
      importance: "B",
      primarySources: [rftcDisplayRules],
      sourceFactIds: ["u87-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-advertising-rules-land-horizontal-projection-area",
      claim: "土地の面積は水平投影面積を表示する。",
      conditions: ["不動産広告で土地の面積を表示する場合"],
      exceptions: ["取引する全区画の面積表示については、媒体等に応じて最小土地面積・最大土地面積のみの表示が認められる場合がある。"],
      importance: "A",
      primarySources: [rftcDisplayRules],
      sourceFactIds: ["u87-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-advertising-rules-building-total-floor-area",
      claim: "建物の面積（マンションは専有面積）は延べ面積を表示し、車庫・地下室等の面積を含むときは、その旨とその面積を表示する。",
      conditions: ["不動産広告で建物の面積を表示する場合"],
      exceptions: ["中古マンションでは、建物登記簿に記載された面積を表示することができる。"],
      importance: "A",
      primarySources: [rftcDisplayRules],
      sourceFactIds: ["u87-f2"]
    }
  ];

  const allowedFactIds = new Set(["u87-f1", "u87-f2"]);
  const ids = new Set();
  const allowedImportance = new Set(["A", "B", "C"]);
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate Power Takken knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (!item.knowledgeId.startsWith("takken-k-")) throw new Error(`Invalid Power Takken knowledge id: ${item.knowledgeId}`);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") {
      throw new Error(`Invalid Power Takken knowledge verification state: ${item.knowledgeId}`);
    }
    if (item.conceptId !== "takken-concept-real-estate-advertising-rules") {
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
  if (knowledgeItems.length !== 9) throw new Error(`Unexpected real-estate-advertising-rules knowledge count: ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsRealEstateAdvertisingRules = Object.freeze(
    knowledgeItems.map((item) => Object.freeze({ ...item }))
  );
})();
