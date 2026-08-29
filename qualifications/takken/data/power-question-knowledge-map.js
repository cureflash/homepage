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
    { questionId: "takken-q-14-001", conceptId: "takken-concept-guarantee-association", knowledgeRefs: ["takken-k-guarantee-association-statutory-system"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-15-001", conceptId: "takken-concept-brokerage-contract-document", knowledgeRefs: ["takken-k-brokerage-contract-document-delivery-duty"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-16-001", conceptId: "takken-concept-exclusive-brokerage", knowledgeRefs: ["takken-k-exclusive-brokerage-period-three-month-cap"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-17-001", conceptId: "takken-concept-exclusive-brokerage", knowledgeRefs: ["takken-k-exclusive-brokerage-reins-seven-days", "takken-k-exclusive-brokerage-report-two-weeks"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-17-002", conceptId: "takken-concept-sole-agency-brokerage", knowledgeRefs: ["takken-k-sole-agency-brokerage-reins-five-days", "takken-k-sole-agency-brokerage-report-one-week"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-18-001", conceptId: "takken-concept-advertising-start", knowledgeRefs: ["takken-k-advertising-start-permit-before-advertising"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-19-001", conceptId: "takken-concept-contract-start", knowledgeRefs: ["takken-k-contract-start-permit-before-contract"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-20-001", conceptId: "takken-concept-false-advertising", knowledgeRefs: ["takken-k-false-advertising-property-scope"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-21-001", conceptId: "takken-concept-article35-procedure", knowledgeRefs: ["takken-k-article35-procedure-before-contract", "takken-k-article35-procedure-takkenshi-explains", "takken-k-article35-procedure-document-delivery"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-21-002", conceptId: "takken-concept-article35-procedure", knowledgeRefs: ["takken-k-article35-procedure-card-presentation"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-22-001", conceptId: "takken-concept-article35-items", knowledgeRefs: ["takken-k-article35-items-registered-rights"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-22-002", conceptId: "takken-concept-article35-items", knowledgeRefs: ["takken-k-article35-items-legal-restrictions"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-23-001", conceptId: "takken-concept-article37-document", knowledgeRefs: ["takken-k-article37-document-after-contract"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-23-002", conceptId: "takken-concept-article37-document", knowledgeRefs: ["takken-k-article37-document-takkenshi-name"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-24-001", conceptId: "takken-concept-article35-vs-37", knowledgeRefs: ["takken-k-article35-vs-37-article35-before-contract"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-24-002", conceptId: "takken-concept-article35-vs-37", knowledgeRefs: ["takken-k-article35-vs-37-article37-after-contract"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-25-001", conceptId: "takken-concept-eight-restrictions-scope", knowledgeRefs: ["takken-k-eight-restrictions-scope-regulation-family"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-25-002", conceptId: "takken-concept-eight-restrictions-scope", knowledgeRefs: ["takken-k-eight-restrictions-scope-adverse-special-terms"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-26-001", conceptId: "takken-concept-cooling-off", knowledgeRefs: ["takken-k-cooling-off-outside-office-scope"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-26-002", conceptId: "takken-concept-cooling-off", knowledgeRefs: ["takken-k-cooling-off-eight-days"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-27-002", conceptId: "takken-concept-earnest-money-safeguards", knowledgeRefs: ["takken-k-earnest-money-safeguards-unfinished-exemption", "takken-k-earnest-money-safeguards-completed-exemption"], sourceQuestionValidationStatus: "verified" }
  ];

  const knownKnowledgeIds = new Set(mappings.flatMap((mapping) => mapping.knowledgeRefs));
  const allowedConceptIds = new Set(mappings.map((mapping) => mapping.conceptId));
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

  if (mappings.length !== 35) throw new Error(`Expected 35 mapped questions through earnest-money-safeguards, got ${mappings.length}`);
  if (!questionIds.has("takken-q-27-002")) throw new Error("Earnest-money safeguards source question mapping is missing");

  window.PowerTakkenQuestionKnowledgeMap = Object.freeze(mappings.map((mapping) => Object.freeze(mapping)));
})();
