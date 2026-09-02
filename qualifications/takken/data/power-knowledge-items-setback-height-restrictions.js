(() => {
  "use strict";

  const buildingStandardsAct = Object.freeze({
    id: "egov-building-standards-act-20260401",
    label: "e-Gov法令検索『建築基準法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/325AC0000000201?occasion_date=20260401",
    sourceType: "statute"
  });

  const mlitSlopeGuidance = Object.freeze({
    id: "mlit-building-standards-act-56-slope",
    label: "国土交通省『建築物の各部分の高さ（斜線制限）（法第56条）』",
    url: "https://www.mlit.go.jp/jutakukentiku/house/content/001894190.pdf",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({ examYear: 2026, lawAsOf: "2026-04-01", factcheckStatus: "verified", conceptId: "takken-concept-setback-height-restrictions", sourceUnitIds: ["height-restrictions"] });

  const knowledgeItems = [
    { ...shared, knowledgeId: "takken-k-setback-height-three-slope-types", claim: "建築基準法56条の斜線制限には、道路斜線、隣地斜線、北側斜線がある。", conditions: ["建築基準法56条の建築物の各部分の高さ制限を整理すること"], exceptions: ["各斜線制限の適用地域・算定方法は同一ではない。"], importance: "A", primarySources: [buildingStandardsAct, mlitSlopeGuidance], sourceFactIds: ["u71-f1"] },
    { ...shared, knowledgeId: "takken-k-setback-height-road-slope-principle", claim: "道路斜線制限は、建築物の各部分から前面道路の反対側の境界線までの水平距離を基礎に、用途地域等の区分に応じた数値で高さを制限する。", conditions: ["建築基準法56条1項1号の道路斜線制限を適用すること"], exceptions: ["適用距離、勾配、道路の状況等について法令上の特例・緩和がある。"], importance: "A", primarySources: [buildingStandardsAct, mlitSlopeGuidance], sourceFactIds: ["u71-f1"] },
    { ...shared, knowledgeId: "takken-k-setback-height-road-setback-relaxation", claim: "建築物を前面道路の境界線から後退して建築する場合、一定の要件の下で道路斜線制限の算定上、前面道路の反対側の境界線をその後退距離に相当する分だけ外側にあるものとみなす。", conditions: ["建築物が前面道路の境界線から後退していること", "建築基準法56条2項の要件を満たすこと"], exceptions: ["後退部分に法令上算入される建築物部分等がある場合は、単純に後退距離全部を使えるとは限らない。"], importance: "B", primarySources: [buildingStandardsAct], sourceFactIds: ["u71-f1"] },
    { ...shared, knowledgeId: "takken-k-setback-height-adjacent-slope-lowrise-exclusion", claim: "第一種・第二種低層住居専用地域および田園住居地域には、建築基準法56条1項2号の隣地斜線制限は適用されない。", conditions: ["隣地斜線制限の適用地域を判定すること"], exceptions: ["道路斜線や北側斜線など、別の高さ制限まで適用されないことを意味しない。"], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u71-f1"] },
    { ...shared, knowledgeId: "takken-k-setback-height-adjacent-slope-residential-baseline", claim: "第一種・第二種中高層住居専用地域、第一種・第二種住居地域、準住居地域では、隣地斜線制限は原則として隣地境界線からの水平距離に1.25を乗じた値に20mを加えた高さを基準とする。", conditions: ["建築基準法56条1項2号イに該当する地域であること"], exceptions: ["特定行政庁が指定する区域では、法令上31mや2.5を用いる取扱いがある。"], importance: "A", primarySources: [buildingStandardsAct, mlitSlopeGuidance], sourceFactIds: ["u71-f1"] },
    { ...shared, knowledgeId: "takken-k-setback-height-adjacent-slope-nonresidential-baseline", claim: "近隣商業地域、商業地域、準工業地域、工業地域、工業専用地域では、隣地斜線制限は原則として隣地境界線からの水平距離に2.5を乗じた値に31mを加えた高さを基準とする。", conditions: ["建築基準法56条1項2号ロに該当する地域であること"], exceptions: ["高層住居誘導地区や用途地域の指定のない区域等は、同号の別区分で扱う。"], importance: "A", primarySources: [buildingStandardsAct, mlitSlopeGuidance], sourceFactIds: ["u71-f1"] },
    { ...shared, knowledgeId: "takken-k-setback-height-north-slope-applicable-zones", claim: "北側斜線制限は、第一種・第二種低層住居専用地域、田園住居地域、第一種・第二種中高層住居専用地域に適用される。", conditions: ["建築基準法56条1項3号の北側斜線制限の適用地域を判定すること"], exceptions: ["第一種・第二種中高層住居専用地域では、建築基準法56条の2第1項の条例指定区域について北側斜線制限が適用されない。"], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u71-f1"] },
    { ...shared, knowledgeId: "takken-k-setback-height-north-slope-lowrise-baseline", claim: "第一種・第二種低層住居専用地域および田園住居地域の北側斜線制限は、真北方向の水平距離に1.25を乗じた値に5mを加えた高さを基準とする。", conditions: ["建築基準法56条1項3号の低層住居系・田園住居地域に該当すること"], exceptions: ["水面、線路敷その他これらに類するものに接する場合や敷地の地盤面に高低差がある場合など、法令上の緩和がある。"], importance: "A", primarySources: [buildingStandardsAct, mlitSlopeGuidance], sourceFactIds: ["u71-f1"] },
    { ...shared, knowledgeId: "takken-k-setback-height-north-slope-midrise-baseline", claim: "第一種・第二種中高層住居専用地域の北側斜線制限は、真北方向の水平距離に1.25を乗じた値に10mを加えた高さを基準とする。", conditions: ["建築基準法56条1項3号の第一種・第二種中高層住居専用地域に該当すること"], exceptions: ["建築基準法56条の2第1項の条例指定区域では北側斜線制限は適用されない。", "水面、線路敷その他これらに類するものに接する場合や敷地の地盤面に高低差がある場合など、法令上の緩和がある。"], importance: "A", primarySources: [buildingStandardsAct, mlitSlopeGuidance], sourceFactIds: ["u71-f1"] }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate setback-height-restrictions knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-setback-height-restrictions") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute" || entry.sourceType === "official_guidance")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u71-f1")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 9) throw new Error(`Expected 9 setback-height-restrictions knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsSetbackHeightRestrictions = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
