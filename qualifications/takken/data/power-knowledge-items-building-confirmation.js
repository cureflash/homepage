(() => {
  "use strict";

  const buildingStandardsAct = Object.freeze({
    id: "egov-building-standards-act-20260401",
    label: "e-Gov法令検索『建築基準法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/325AC0000000201?occasion_date=20260401",
    sourceType: "statute"
  });
  const mlitConfirmationReform = Object.freeze({
    id: "mlit-building-confirmation-scope-2025",
    label: "国土交通省『建築確認等の対象の見直し』（令和7年4月1日施行）",
    url: "https://www.mlit.go.jp/jutakukentiku/build/content/001907414.pdf",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({ examYear: 2026, lawAsOf: "2026-04-01", factcheckStatus: "verified", conceptId: "takken-concept-building-confirmation", sourceUnitIds: ["building-confirmation"] });

  const knowledgeItems = [
    { ...shared, knowledgeId: "takken-k-building-confirmation-category1-special-building", claim: "建築基準法6条1項1号は、別表第一（い）欄に掲げる用途に供する特殊建築物で、その用途に供する部分の床面積の合計が200平方メートルを超えるものを建築確認の対象区分としている。", conditions: ["別表第一（い）欄に掲げる用途に供する特殊建築物であること", "その用途に供する部分の床面積の合計が200平方メートルを超えること"], exceptions: [], importance: "A", primarySources: [buildingStandardsAct, mlitConfirmationReform], sourceFactIds: ["u67-f1"] },
    { ...shared, knowledgeId: "takken-k-building-confirmation-category2-scale", claim: "建築基準法6条1項2号は、1号建築物を除き、階数が2以上である建築物または延べ面積が200平方メートルを超える建築物を建築確認の対象区分としている。", conditions: ["建築基準法6条1項1号に掲げる建築物ではないこと", "階数2以上または延べ面積200平方メートル超のいずれかに該当すること"], exceptions: [], importance: "A", primarySources: [buildingStandardsAct, mlitConfirmationReform], sourceFactIds: ["u67-f1"] },
    { ...shared, knowledgeId: "takken-k-building-confirmation-category3-designated-area", claim: "建築基準法6条1項3号は、1号・2号建築物を除き、都市計画区域、準都市計画区域その他同号が定める指定区域内の建築物を建築確認の対象区分としている。", conditions: ["建築基準法6条1項1号・2号に掲げる建築物ではないこと", "都市計画区域、準都市計画区域または同号に基づき指定された区域内であること"], exceptions: ["1号・2号建築物は区域を問わず各号の対象となるため、3号の区域要件で判定しない。"], importance: "A", primarySources: [buildingStandardsAct, mlitConfirmationReform], sourceFactIds: ["u67-f1"] },
    { ...shared, knowledgeId: "takken-k-building-confirmation-category12-work-scope", claim: "1号または2号建築物については、建築に加え、大規模の修繕または大規模の模様替をしようとする場合も建築確認の対象となる。", conditions: ["建築基準法6条1項1号または2号の建築物であること", "建築、大規模の修繕または大規模の模様替のいずれかを行うこと"], exceptions: [], importance: "A", primarySources: [buildingStandardsAct, mlitConfirmationReform], sourceFactIds: ["u67-f1"] },
    { ...shared, knowledgeId: "takken-k-building-confirmation-category3-work-scope", claim: "3号建築物は建築をしようとする場合に建築確認の対象となるが、6条1項は3号建築物の大規模の修繕・大規模の模様替を確認対象として列挙していない。", conditions: ["建築基準法6条1項3号の建築物であること"], exceptions: ["別の規定により確認等が必要となる場合を否定するものではない。"], importance: "B", primarySources: [buildingStandardsAct, mlitConfirmationReform], sourceFactIds: ["u67-f1"] },
    { ...shared, knowledgeId: "takken-k-building-confirmation-before-start", claim: "建築基準法6条1項の確認対象となる工事は、工事に着手する前に、その計画が建築基準関係規定に適合することについて確認を受けなければならない。", conditions: ["建築基準法6条1項の確認対象となる工事であること"], exceptions: ["国、都道府県または建築主事等を置く市町村の建築物については、建築基準法18条の計画通知等の特則がある。"], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u67-f1"] },
    { ...shared, knowledgeId: "takken-k-building-confirmation-building-official", claim: "建築基準法6条による行政側の確認は、確認申請を受けた建築主事または建築副主事（建築主事等）が行う。", conditions: ["建築基準法6条の確認申請を行政側へ提出すること"], exceptions: ["建築副主事が行える確認には法令上の範囲制限がある。"], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u67-f2"] },
    { ...shared, knowledgeId: "takken-k-building-confirmation-designated-body", claim: "建築基準法6条の2により、建築主は国土交通大臣または都道府県知事の指定を受けた指定確認検査機関による確認を受けることができ、その確認は建築主事等による確認と同様に扱われる。", conditions: ["建築基準法6条1項の確認対象となる計画であること", "法77条の18から77条の21までに基づく指定確認検査機関による確認であること"], exceptions: [], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u67-f2"] },
    { ...shared, knowledgeId: "takken-k-building-confirmation-confirmation-certificate", claim: "確認の結果、申請に係る計画が建築基準関係規定に適合すると認められたときは確認済証が交付され、確認対象工事は工事着手前にその交付を受ける必要がある。", conditions: ["確認対象の計画が建築基準関係規定に適合すると認められること"], exceptions: [], importance: "A", primarySources: [buildingStandardsAct], sourceFactIds: ["u67-f2"] }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate building-confirmation knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-building-confirmation") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute" || entry.sourceType === "official_guidance")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u67-f1" || id === "u67-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 9) throw new Error(`Expected 9 building-confirmation knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsBuildingConfirmation = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
