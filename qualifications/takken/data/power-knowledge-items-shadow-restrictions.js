(() => {
  "use strict";

  const buildingStandardsAct = Object.freeze({
    id: "egov-building-standards-act-20260401",
    label: "e-Gov法令検索『建築基準法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/325AC0000000201?occasion_date=20260401",
    sourceType: "statute"
  });

  const mlitShadowGuidance = Object.freeze({
    id: "mlit-building-standards-act-56-2-shadow",
    label: "国土交通省『日影規制（法第56条の2）』",
    url: "https://www.mlit.go.jp/jutakukentiku/house/content/001854167.pdf",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({ examYear: 2026, lawAsOf: "2026-04-01", factcheckStatus: "verified", conceptId: "takken-concept-shadow-restrictions", sourceUnitIds: ["height-restrictions"] });

  const knowledgeItems = [
    { ...shared, knowledgeId: "takken-k-shadow-restrictions-ordinance-designated-scope", claim: "建築基準法56条の2の日影規制は、地方公共団体の条例で指定する区域内の一定の建築物に適用される。", conditions: ["建築基準法56条の2の日影による中高層建築物の高さ制限を判定すること"], exceptions: ["全国のすべての建築物に一律に適用される規制ではない。"], importance: "A", primarySources: [buildingStandardsAct, mlitShadowGuidance], sourceFactIds: ["u71-f2"] },
    { ...shared, knowledgeId: "takken-k-shadow-restrictions-purpose", claim: "日影規制は、住居系の用途地域等における日照を確保するため、敷地境界線から一定範囲に一定時間以上の日影を生じさせないよう中高層建築物の高さを制限する制度である。", conditions: ["日影規制の制度趣旨と規制方法を整理すること"], exceptions: ["建築物の高さを全国一律の単一数値で制限する制度ではない。"], importance: "B", primarySources: [mlitShadowGuidance], sourceFactIds: ["u71-f2"] },
    { ...shared, knowledgeId: "takken-k-shadow-restrictions-local-ordinance-content", claim: "日影規制の対象区域と規制内容は、建築基準法56条の2の枠内で地方公共団体の条例により定められる。", conditions: ["対象区域または規制内容の決定主体を判定すること"], exceptions: ["条例は建築基準法の法定枠組みを離れて自由に制度を設けるものではない。"], importance: "A", primarySources: [buildingStandardsAct, mlitShadowGuidance], sourceFactIds: ["u71-f2"] },
    { ...shared, knowledgeId: "takken-k-shadow-restrictions-commercial-industrial-excluded", claim: "商業地域、工業地域および工業専用地域は、建築基準法56条の2の日影規制の対象区域から除かれている。", conditions: ["用途地域別の日影規制対象を判定すること"], exceptions: ["地方公共団体が別制度により独自の建築制限を設ける場合まで否定するものではない。"], importance: "A", primarySources: [buildingStandardsAct, mlitShadowGuidance], sourceFactIds: ["u71-f2"] },
    { ...shared, knowledgeId: "takken-k-shadow-restrictions-target-building-varies-by-zone", claim: "日影規制の対象となる建築物の規模要件は用途地域等によって異なり、軒高・地上階数または建築物の高さを基準に定められている。", conditions: ["日影規制の対象建築物かを判定すること"], exceptions: ["すべての用途地域で同一の高さ・階数基準を用いるわけではない。"], importance: "A", primarySources: [buildingStandardsAct, mlitShadowGuidance], sourceFactIds: ["u71-f2"] },
    { ...shared, knowledgeId: "takken-k-shadow-restrictions-measurement-plane", claim: "日影時間は、用途地域等に応じて定められる平均地盤面から一定の高さの水平面で測定する。", conditions: ["日影規制の測定方法を整理すること"], exceptions: ["測定面の高さは全区域で一律ではない。"], importance: "B", primarySources: [buildingStandardsAct, mlitShadowGuidance], sourceFactIds: ["u71-f2"] },
    { ...shared, knowledgeId: "takken-k-shadow-restrictions-five-ten-meter-bands", claim: "日影規制では、敷地境界線から5mを超え10m以内の範囲と、10mを超える範囲とで許容される日影時間を区分して規制する。", conditions: ["敷地境界線外の日影時間規制を整理すること"], exceptions: ["具体的な許容時間は用途地域等と条例指定により異なる。"], importance: "A", primarySources: [buildingStandardsAct, mlitShadowGuidance], sourceFactIds: ["u71-f2"] },
    { ...shared, knowledgeId: "takken-k-shadow-restrictions-shadow-time-selected-by-ordinance", claim: "各距離帯で許容される日影時間は、建築基準法の別表で示された選択肢の範囲から地方公共団体の条例で定められる。", conditions: ["具体的な日影時間の決定方法を判定すること"], exceptions: ["全国一律に同一の日影時間が適用されるわけではない。"], importance: "A", primarySources: [buildingStandardsAct, mlitShadowGuidance], sourceFactIds: ["u71-f2"] },
    { ...shared, knowledgeId: "takken-k-shadow-restrictions-special-permission", claim: "土地の状況等により周囲の居住環境を害するおそれがないと特定行政庁が認め、建築審査会の同意を得て許可した場合などには、日影規制の制限を超えることができる。", conditions: ["建築基準法56条の2ただし書の特例許可を検討すること"], exceptions: ["単に建築主が必要とするだけでは足りず、法定の許可要件を満たす必要がある。"], importance: "B", primarySources: [buildingStandardsAct, mlitShadowGuidance], sourceFactIds: ["u71-f2"] }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate shadow-restrictions knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-shadow-restrictions") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute" || entry.sourceType === "official_guidance")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u71-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 9) throw new Error(`Expected 9 shadow-restrictions knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsShadowRestrictions = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
