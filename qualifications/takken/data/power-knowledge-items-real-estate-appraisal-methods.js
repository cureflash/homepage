(() => {
  "use strict";

  const mlitAppraisalStandard = Object.freeze({
    id: "mlit-appraisal-standard",
    label: "国土交通省『不動産鑑定評価基準』",
    url: "https://www.mlit.go.jp/common/001204035.pdf",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-real-estate-appraisal-methods",
    sourceUnitIds: ["real-estate-appraisal"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-appraisal-methods-three-approaches",
      claim: "不動産鑑定評価の方式には、原価方式、比較方式、収益方式の三方式がある。",
      conditions: ["不動産の価格を求める鑑定評価の方式を整理する場合"],
      exceptions: [],
      importance: "A",
      primarySources: [mlitAppraisalStandard],
      sourceFactIds: ["u85-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-appraisal-methods-three-basic-methods",
      claim: "不動産の価格を求める基本的な鑑定評価手法は、原価法、取引事例比較法、収益還元法に大別される。",
      conditions: ["不動産の価格を求める基本的な鑑定評価手法を整理する場合"],
      exceptions: [],
      importance: "A",
      primarySources: [mlitAppraisalStandard],
      sourceFactIds: ["u85-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-appraisal-methods-cost-method-process",
      claim: "原価法は、対象不動産の再調達原価を求め、これに減価修正を行って価格を求める手法である。",
      conditions: ["原価法によって対象不動産の価格を求める場合"],
      exceptions: [],
      importance: "A",
      primarySources: [mlitAppraisalStandard],
      sourceFactIds: ["u85-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-appraisal-methods-cost-method-result",
      claim: "原価法によって求められた試算価格を積算価格という。",
      conditions: ["原価法による試算価格であること"],
      exceptions: [],
      importance: "A",
      primarySources: [mlitAppraisalStandard],
      sourceFactIds: ["u85-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-appraisal-methods-comparison-method-process",
      claim: "取引事例比較法は、多数の取引事例を収集して適切な事例を選択し、必要に応じて事情補正・時点修正を行い、地域要因と個別的要因を比較して価格を求める手法である。",
      conditions: ["取引事例比較法によって対象不動産の価格を求める場合"],
      exceptions: [],
      importance: "A",
      primarySources: [mlitAppraisalStandard],
      sourceFactIds: ["u85-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-appraisal-methods-comparison-method-result",
      claim: "取引事例比較法によって求められた試算価格を比準価格という。",
      conditions: ["取引事例比較法による試算価格であること"],
      exceptions: [],
      importance: "A",
      primarySources: [mlitAppraisalStandard],
      sourceFactIds: ["u85-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-appraisal-methods-income-method-process",
      claim: "収益還元法は、対象不動産が将来生み出すと期待される純収益の現在価値の総和を求めることにより価格を求める手法である。",
      conditions: ["収益還元法によって対象不動産の価格を求める場合"],
      exceptions: [],
      importance: "A",
      primarySources: [mlitAppraisalStandard],
      sourceFactIds: ["u85-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-appraisal-methods-income-method-result",
      claim: "収益還元法によって求められた試算価格を収益価格という。",
      conditions: ["収益還元法による試算価格であること"],
      exceptions: [],
      importance: "A",
      primarySources: [mlitAppraisalStandard],
      sourceFactIds: ["u85-f2"]
    }
  ];

  const allowedFactIds = new Set(["u85-f1", "u85-f2"]);
  const ids = new Set();
  const allowedImportance = new Set(["A", "B", "C"]);
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate Power Takken knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (!item.knowledgeId.startsWith("takken-k-")) throw new Error(`Invalid Power Takken knowledge id: ${item.knowledgeId}`);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") {
      throw new Error(`Invalid Power Takken knowledge verification state: ${item.knowledgeId}`);
    }
    if (item.conceptId !== "takken-concept-real-estate-appraisal-methods") {
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
  if (knowledgeItems.length !== 8) throw new Error(`Unexpected real-estate-appraisal-methods knowledge count: ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsRealEstateAppraisalMethods = Object.freeze(
    knowledgeItems.map((item) => Object.freeze({ ...item }))
  );
})();
