(() => {
  "use strict";

  const cityPlanningAct = Object.freeze({
    id: "egov-city-planning-act-20260401",
    label: "e-Gov法令検索『都市計画法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/343AC0000000100?occasion_date=20260401",
    sourceType: "statute"
  });

  const buildingStandardsAct = Object.freeze({
    id: "egov-building-standards-act-20260401",
    label: "e-Gov法令検索『建築基準法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/325AC0000000201?occasion_date=20260401",
    sourceType: "statute"
  });

  const mlitFirePreventionGuidance = Object.freeze({
    id: "mlit-building-standards-fire-prevention-zones-61-66",
    label: "国土交通省『防火地域・準防火地域（法第61～66条）』",
    url: "https://www.mlit.go.jp/jutakukentiku/house/content/001894190.pdf",
    sourceType: "official_guidance"
  });

  const mlitFireSafetyGuidance = Object.freeze({
    id: "mlit-building-fire-safety-openings",
    label: "国土交通省『火災に関係する事項』",
    url: "https://www.mlit.go.jp/gobuild/content/001512318.pdf",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({ examYear: 2026, lawAsOf: "2026-04-01", factcheckStatus: "verified", conceptId: "takken-concept-fire-prevention-zones", sourceUnitIds: ["fire-prevention-zones"] });

  const knowledgeItems = [
    { ...shared, knowledgeId: "takken-k-fire-prevention-zones-regional-district-status", claim: "防火地域および準防火地域は、都市計画法8条に掲げる地域地区として都市計画で定めることができる。", conditions: ["防火地域・準防火地域の都市計画法上の位置付けを判定すること"], exceptions: ["建築確認の種類や市街化区域そのものではない。"], importance: "A", primarySources: [cityPlanningAct, mlitFirePreventionGuidance], sourceFactIds: ["u72-f1"] },
    { ...shared, knowledgeId: "takken-k-fire-prevention-zones-purpose", claim: "防火地域・準防火地域は、建築物の防火性能を高め、市街地における火災の延焼・拡大を抑制するために定められる。", conditions: ["防火地域・準防火地域の制度目的を整理すること"], exceptions: ["個々の建築物内部だけの避難安全を目的とする制度に限られない。"], importance: "B", primarySources: [mlitFirePreventionGuidance], sourceFactIds: ["u72-f2"] },
    { ...shared, knowledgeId: "takken-k-fire-prevention-zones-article61-performance-rule", claim: "建築基準法61条は、防火地域・準防火地域内の建築物について、壁・柱・床その他の部分および防火設備に周囲への延焼を防止するため必要な性能を求める。", conditions: ["防火地域・準防火地域内の建築物に建築基準法上の防火性能規制があるかを判定すること"], exceptions: ["区域内であっても防火性能に関する規制が一切ない、という扱いではない。"], importance: "A", primarySources: [buildingStandardsAct, mlitFirePreventionGuidance, mlitFireSafetyGuidance], sourceFactIds: ["u72-f2"] },
    { ...shared, knowledgeId: "takken-k-fire-prevention-zones-requirement-varies-by-zone-scale", claim: "防火地域・準防火地域で要求される防火性能は、区域区分に加えて建築物の階数や延べ面積などに応じて異なる。", conditions: ["具体的な建築物に必要な防火性能を判定すること"], exceptions: ["防火地域と準防火地域の全建築物に全国一律で同一の構造要件が課されるわけではない。"], importance: "A", primarySources: [buildingStandardsAct, mlitFirePreventionGuidance], sourceFactIds: ["u72-f2"] },
    { ...shared, knowledgeId: "takken-k-fire-prevention-zones-equivalent-extension-prevention", claim: "現行の防火地域・準防火地域の規制では、従来の耐火建築物・準耐火建築物に加え、それらと同等の延焼防止性能を確保する建築物も法令上の技術基準により認められる。", conditions: ["現行法の構造規制を旧来の耐火・準耐火の名称だけで判定しないこと"], exceptions: ["同等性能であれば無条件に自由な構造でよいのではなく、法令上の技術基準への適合が必要である。"], importance: "B", primarySources: [buildingStandardsAct, mlitFirePreventionGuidance], sourceFactIds: ["u72-f2"] },
    { ...shared, knowledgeId: "takken-k-fire-prevention-zones-openings-fire-equipment", claim: "防火地域・準防火地域内の建築物では、外壁の開口部のうち延焼のおそれのある部分について、防火戸その他の所定の防火設備による延焼防止性能の確保が求められる。", conditions: ["外壁開口部が延焼のおそれのある部分に該当する場合の防火措置を整理すること"], exceptions: ["すべての開口部を位置にかかわらず同一に扱うのではなく、延焼のおそれのある部分かどうか等の法定条件による。"], importance: "B", primarySources: [buildingStandardsAct, mlitFireSafetyGuidance], sourceFactIds: ["u72-f2"] }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate fire-prevention-zones knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-fire-prevention-zones") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute" || entry.sourceType === "official_guidance")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u72-f1" || id === "u72-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 6) throw new Error(`Expected 6 fire-prevention-zones knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsFirePreventionZones = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
