(() => {
  "use strict";

  const mappings = [
    { questionId: "takken-q-01-001", conceptId: "takken-concept-business-definition", knowledgeRefs: ["takken-k-business-definition-self-sale-exchange", "takken-k-business-definition-self-lease-exclusion"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-01-002", conceptId: "takken-concept-business-definition", knowledgeRefs: ["takken-k-business-definition-agency-brokerage", "takken-k-business-definition-self-lease-exclusion"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-02-001", conceptId: "takken-concept-license-required", knowledgeRefs: ["takken-k-license-required-general"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-03-001", conceptId: "takken-concept-license-authority", knowledgeRefs: ["takken-k-license-authority-minister-multiple-prefectures", "takken-k-license-authority-governor-single-prefecture"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-04-001", conceptId: "takken-concept-license-disqualification", knowledgeRefs: ["takken-k-license-disqualification-cancellation-five-years", "takken-k-license-disqualification-hearing-closure-five-years", "takken-k-license-disqualification-criminal-sentence-five-years", "takken-k-license-disqualification-misconduct-prior-five-years"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-05-001", conceptId: "takken-concept-license-validity-renewal", knowledgeRefs: ["takken-k-license-validity-five-years"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-05-002", conceptId: "takken-concept-license-validity-renewal", knowledgeRefs: ["takken-k-license-renewal-application-window"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-06-001", conceptId: "takken-concept-license-change-closure", knowledgeRefs: ["takken-k-license-change-notice-thirty-days"], sourceQuestionValidationStatus: "verified" }
  ];

  const knownKnowledgeIds = new Set([
    "takken-k-business-definition-self-sale-exchange", "takken-k-business-definition-agency-brokerage", "takken-k-business-definition-self-lease-exclusion",
    "takken-k-license-required-general",
    "takken-k-license-authority-minister-multiple-prefectures", "takken-k-license-authority-governor-single-prefecture",
    "takken-k-license-disqualification-cancellation-five-years", "takken-k-license-disqualification-hearing-closure-five-years", "takken-k-license-disqualification-criminal-sentence-five-years", "takken-k-license-disqualification-misconduct-prior-five-years",
    "takken-k-license-validity-five-years", "takken-k-license-renewal-application-window",
    "takken-k-license-change-notice-thirty-days"
  ]);
  const allowedConceptIds = new Set([
    "takken-concept-business-definition", "takken-concept-license-required", "takken-concept-license-authority", "takken-concept-license-disqualification", "takken-concept-license-validity-renewal", "takken-concept-license-change-closure"
  ]);
  const questionIds = new Set();

  for (const mapping of mappings) {
    if (questionIds.has(mapping.questionId)) throw new Error(`Duplicate Power Takken question mapping: ${mapping.questionId}`);
    questionIds.add(mapping.questionId);
    if (!allowedConceptIds.has(mapping.conceptId)) throw new Error(`Unexpected concept mapping: ${mapping.questionId}`);
    if (!Array.isArray(mapping.knowledgeRefs) || mapping.knowledgeRefs.length === 0) throw new Error(`Missing knowledge refs: ${mapping.questionId}`);
    if (new Set(mapping.knowledgeRefs).size !== mapping.knowledgeRefs.length) throw new Error(`Duplicate knowledge refs: ${mapping.questionId}`);
    for (const knowledgeId of mapping.knowledgeRefs) if (!knownKnowledgeIds.has(knowledgeId)) throw new Error(`Unknown knowledge ref ${knowledgeId} from ${mapping.questionId}`);
    if (mapping.sourceQuestionValidationStatus !== "verified") throw new Error(`Unverified Phase 2/3 question mapping: ${mapping.questionId}`);
  }

  if (mappings.length !== 8) throw new Error(`Expected 8 mapped questions through license-change-closure, got ${mappings.length}`);
  const coveredKnowledgeIds = new Set(mappings.flatMap((mapping) => mapping.knowledgeRefs));
  for (const knowledgeId of knownKnowledgeIds) if (!coveredKnowledgeIds.has(knowledgeId)) throw new Error(`Mapped knowledge coverage is incomplete: ${knowledgeId}`);
  if (!questionIds.has("takken-q-06-001")) throw new Error("License change-notice source question mapping is missing");

  window.PowerTakkenQuestionKnowledgeMap = Object.freeze(mappings.map((mapping) => Object.freeze(mapping)));
})();
