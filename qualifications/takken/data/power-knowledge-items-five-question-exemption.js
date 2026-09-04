(() => {
  "use strict";

  const retioExam2026 = Object.freeze({
    id: "retio-2026-exam",
    label: "一般財団法人不動産適正取引推進機構『令和8年度宅地建物取引士資格試験』",
    url: "https://moushikomi.retio.or.jp/",
    sourceType: "official_exam_guidance"
  });

  const retioRegistrationCourse = Object.freeze({
    id: "retio-registration-course",
    label: "一般財団法人不動産適正取引推進機構『登録講習について』",
    url: "https://www.retio.or.jp/exam/tourokukosyu/",
    sourceType: "official_exam_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-five-question-exemption",
    sourceUnitIds: ["five-question-exemption-review"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-five-question-exemption-normal-50-registered-45",
      claim: "宅地建物取引士資格試験は通常50問であり、登録講習修了者は5問が免除され45問を解答する。",
      conditions: ["令和8年度宅地建物取引士資格試験の出題数を比較する場合"],
      exceptions: [],
      importance: "A",
      primarySources: [retioExam2026, retioRegistrationCourse],
      sourceFactIds: ["u90-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-five-question-exemption-five-questions",
      claim: "登録講習修了者が受ける宅地建物取引士資格試験では、試験の一部5問が免除される。",
      conditions: ["登録講習修了者として一部免除のある試験を申し込む場合"],
      exceptions: [],
      importance: "A",
      primarySources: [retioRegistrationCourse],
      sourceFactIds: ["u90-f1", "u90-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-five-question-exemption-course-eligibility",
      claim: "登録講習は、宅地建物取引業に従事し、宅地建物取引業法48条1項の従業者証明書を持つ者が受講できる。",
      conditions: ["宅建試験の5問免除につながる登録講習を受講する場合"],
      exceptions: ["一般の者は登録講習を受講できない。"],
      importance: "A",
      primarySources: [retioRegistrationCourse],
      sourceFactIds: ["u90-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-five-question-exemption-completion-exam-required",
      claim: "登録講習を受講しただけでは試験の一部免除は受けられず、登録講習修了試験に合格して登録講習修了者となる必要がある。",
      conditions: ["登録講習による宅建試験の一部免除を受ける場合"],
      exceptions: ["宅建試験の申込み時点で登録講習を受講中であるだけでは、登録講習修了者として申し込むことはできない。"],
      importance: "A",
      primarySources: [retioRegistrationCourse],
      sourceFactIds: ["u90-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-five-question-exemption-three-year-validity",
      claim: "登録講習修了試験に合格した者は、その合格後3年以内に行われる宅地建物取引士資格試験について一部5問免除のある試験を申し込むことができる。",
      conditions: ["登録講習修了試験に合格していること", "合格後3年以内に行われる宅建試験であること"],
      exceptions: [],
      importance: "A",
      primarySources: [retioRegistrationCourse],
      sourceFactIds: ["u90-f2"]
    }
  ];

  const allowedFactIds = new Set(["u90-f1", "u90-f2"]);
  const ids = new Set();
  const allowedImportance = new Set(["A", "B", "C"]);
  const allowedSourceTypes = new Set(["official_exam_guidance"]);
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate Power Takken knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (!item.knowledgeId.startsWith("takken-k-")) throw new Error(`Invalid Power Takken knowledge id: ${item.knowledgeId}`);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") {
      throw new Error(`Invalid Power Takken knowledge verification state: ${item.knowledgeId}`);
    }
    if (item.conceptId !== "takken-concept-five-question-exemption") {
      throw new Error(`Unexpected Power Takken concept id: ${item.knowledgeId}`);
    }
    if (!allowedImportance.has(item.importance)) throw new Error(`Invalid Power Takken importance: ${item.knowledgeId}`);
    if (!Array.isArray(item.primarySources) || item.primarySources.length === 0) throw new Error(`Missing primary source: ${item.knowledgeId}`);
    for (const source of item.primarySources) {
      if (!source || !allowedSourceTypes.has(source.sourceType)) throw new Error(`Non-primary Power Takken source: ${item.knowledgeId}`);
    }
    if (!Array.isArray(item.sourceFactIds) || item.sourceFactIds.length === 0) throw new Error(`Missing source fact: ${item.knowledgeId}`);
    for (const factId of item.sourceFactIds) {
      if (!allowedFactIds.has(factId)) throw new Error(`Unexpected source fact ${factId}: ${item.knowledgeId}`);
    }
  }
  if (knowledgeItems.length !== 5) throw new Error(`Unexpected five-question-exemption knowledge count: ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsFiveQuestionExemption = Object.freeze(
    knowledgeItems.map((item) => Object.freeze({ ...item }))
  );
})();
