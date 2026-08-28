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
    { questionId: "takken-q-06-001", conceptId: "takken-concept-license-change-closure", knowledgeRefs: ["takken-k-license-change-notice-thirty-days"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-07-001", conceptId: "takken-concept-roster", knowledgeRefs: ["takken-k-roster-statutory-system"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-08-001", conceptId: "takken-concept-takkenshi-registration", knowledgeRefs: ["takken-k-takkenshi-registration-stages-separate"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-10-001", conceptId: "takken-concept-exclusive-takkenshi", knowledgeRefs: ["takken-k-exclusive-takkenshi-office-one-fifth"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-11-001", conceptId: "takken-concept-takkenshi-exclusive-duties", knowledgeRefs: ["takken-k-takkenshi-exclusive-duties-important-matters-explanation", "takken-k-takkenshi-exclusive-duties-article35-name", "takken-k-takkenshi-exclusive-duties-article37-name"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-12-001", conceptId: "takken-concept-business-guarantee-deposit", knowledgeRefs: ["takken-k-business-guarantee-deposit-statutory-system"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-13-001", conceptId: "takken-concept-business-guarantee-refund", knowledgeRefs: ["takken-k-business-guarantee-refund-transaction-claim-right"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-14-001", conceptId: "takken-concept-guarantee-association", knowledgeRefs: ["takken-k-guarantee-association-statutory-system"], sourceQuestionValidationStatus: "verified" }
  ];

  const knownKnowledgeIds = new Set([
    "takken-k-business-definition-self-sale-exchange", "takken-k-business-definition-agency-brokerage", "takken-k-business-definition-self-lease-exclusion",
    "takken-k-license-required-general",
    "takken-k-license-authority-minister-multiple-prefectures", "takken-k-license-authority-governor-single-prefecture",
    "takken-k-license-disqualification-cancellation-five-years", "takken-k-license-disqualification-hearing-closure-five-years", "takken-k-license-disqualification-criminal-sentence-five-years", "takken-k-license-disqualification-misconduct-prior-five-years",
    "takken-k-license-validity-five-years", "takken-k-license-renewal-application-window",
    "takken-k-license-change-notice-thirty-days",
    "takken-k-roster-statutory-system",
    "takken-k-takkenshi-registration-stages-separate",
    "takken-k-exclusive-takkenshi-office-one-fifth",
    "takken-k-takkenshi-exclusive-duties-important-matters-explanation", "takken-k-takkenshi-exclusive-duties-article35-name", "takken-k-takkenshi-exclusive-duties-article37-name",
    "takken-k-business-guarantee-deposit-statutory-system",
    "takken-k-business-guarantee-refund-transaction-claim-right",
    "takken-k-guarantee-association-statutory-system"
  ]);
  const allowedConceptIds = new Set([
    "takken-concept-business-definition", "takken-concept-license-required", "takken-concept-license-authority", "takken-concept-license-disqualification", "takken-concept-license-validity-renewal", "takken-concept-license-change-closure", "takken-concept-roster", "takken-concept-takkenshi-registration", "takken-concept-exclusive-takkenshi", "takken-concept-takkenshi-exclusive-duties", "takken-concept-business-guarantee-deposit", "takken-concept-business-guarantee-refund", "takken-concept-guarantee-association"
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

  if (mappings.length !== 15) throw new Error(`Expected 15 mapped questions through guarantee association, got ${mappings.length}`);
  const coveredKnowledgeIds = new Set(mappings.flatMap((mapping) => mapping.knowledgeRefs));
  for (const knowledgeId of knownKnowledgeIds) if (!coveredKnowledgeIds.has(knowledgeId)) throw new Error(`Mapped knowledge coverage is incomplete: ${knowledgeId}`);
  if (!questionIds.has("takken-q-12-001")) throw new Error("Business guarantee deposit source question mapping is missing");
  if (!questionIds.has("takken-q-13-001")) throw new Error("Business guarantee refund source question mapping is missing");
  if (!questionIds.has("takken-q-14-001")) throw new Error("Guarantee association source question mapping is missing");

  window.PowerTakkenQuestionKnowledgeMap = Object.freeze(mappings.map((mapping) => Object.freeze(mapping)));
})();