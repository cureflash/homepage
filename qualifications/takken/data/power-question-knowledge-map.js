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
    { questionId: "takken-q-25-002", conceptId: "takken-concept-eight-restrictions-scope", knowledgeRefs: ["takken-k-eight-restrictions-scope-adverse-special-terms"], sourceQuestionValidationStatus: "verified" }
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
    "takken-k-guarantee-association-statutory-system",
    "takken-k-brokerage-contract-document-delivery-duty",
    "takken-k-exclusive-brokerage-period-three-month-cap", "takken-k-exclusive-brokerage-reins-seven-days", "takken-k-exclusive-brokerage-report-two-weeks",
    "takken-k-sole-agency-brokerage-reins-five-days", "takken-k-sole-agency-brokerage-report-one-week",
    "takken-k-advertising-start-permit-before-advertising",
    "takken-k-contract-start-permit-before-contract",
    "takken-k-false-advertising-property-scope",
    "takken-k-article35-procedure-before-contract", "takken-k-article35-procedure-takkenshi-explains", "takken-k-article35-procedure-document-delivery", "takken-k-article35-procedure-card-presentation",
    "takken-k-article35-items-registered-rights", "takken-k-article35-items-legal-restrictions",
    "takken-k-article37-document-after-contract", "takken-k-article37-document-takkenshi-name",
    "takken-k-article35-vs-37-article35-before-contract", "takken-k-article35-vs-37-article37-after-contract",
    "takken-k-eight-restrictions-scope-regulation-family", "takken-k-eight-restrictions-scope-adverse-special-terms"
  ]);
  const allowedConceptIds = new Set([
    "takken-concept-business-definition", "takken-concept-license-required", "takken-concept-license-authority", "takken-concept-license-disqualification", "takken-concept-license-validity-renewal", "takken-concept-license-change-closure", "takken-concept-roster", "takken-concept-takkenshi-registration", "takken-concept-exclusive-takkenshi", "takken-concept-takkenshi-exclusive-duties", "takken-concept-business-guarantee-deposit", "takken-concept-business-guarantee-refund", "takken-concept-guarantee-association", "takken-concept-brokerage-contract-document", "takken-concept-exclusive-brokerage", "takken-concept-sole-agency-brokerage", "takken-concept-advertising-start", "takken-concept-contract-start", "takken-concept-false-advertising", "takken-concept-article35-procedure", "takken-concept-article35-items", "takken-concept-article37-document", "takken-concept-article35-vs-37", "takken-concept-eight-restrictions-scope"
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

  if (mappings.length !== 32) throw new Error(`Expected 32 mapped questions through eight restrictions scope, got ${mappings.length}`);
  const coveredKnowledgeIds = new Set(mappings.flatMap((mapping) => mapping.knowledgeRefs));
  for (const knowledgeId of knownKnowledgeIds) if (!coveredKnowledgeIds.has(knowledgeId)) throw new Error(`Mapped knowledge coverage is incomplete: ${knowledgeId}`);
  if (!questionIds.has("takken-q-15-001")) throw new Error("Brokerage contract document source question mapping is missing");
  if (!questionIds.has("takken-q-16-001")) throw new Error("Exclusive brokerage period source question mapping is missing");
  if (!questionIds.has("takken-q-17-001")) throw new Error("Exclusive brokerage REINS/reporting source question mapping is missing");
  if (!questionIds.has("takken-q-17-002")) throw new Error("Sole-agency brokerage REINS/reporting source question mapping is missing");
  if (!questionIds.has("takken-q-18-001")) throw new Error("Advertising start source question mapping is missing");
  if (!questionIds.has("takken-q-19-001")) throw new Error("Contract start source question mapping is missing");
  if (!questionIds.has("takken-q-20-001")) throw new Error("False advertising source question mapping is missing");
  if (!questionIds.has("takken-q-21-001") || !questionIds.has("takken-q-21-002")) throw new Error("Article 35 procedure source question mappings are missing");
  if (!questionIds.has("takken-q-22-001") || !questionIds.has("takken-q-22-002")) throw new Error("Article 35 items source question mappings are missing");
  if (!questionIds.has("takken-q-23-001") || !questionIds.has("takken-q-23-002")) throw new Error("Article 37 document source question mappings are missing");
  if (!questionIds.has("takken-q-24-001") || !questionIds.has("takken-q-24-002")) throw new Error("Article 35 vs 37 source question mappings are missing");
  if (!questionIds.has("takken-q-25-001") || !questionIds.has("takken-q-25-002")) throw new Error("Eight restrictions scope source question mappings are missing");

  window.PowerTakkenQuestionKnowledgeMap = Object.freeze(mappings.map((mapping) => Object.freeze(mapping)));
})();