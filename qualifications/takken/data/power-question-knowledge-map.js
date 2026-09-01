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
    { questionId: "takken-q-27-002", conceptId: "takken-concept-earnest-money-safeguards", knowledgeRefs: ["takken-k-earnest-money-safeguards-unfinished-exemption", "takken-k-earnest-money-safeguards-completed-exemption"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-32-001", conceptId: "takken-concept-brokerage-fees", knowledgeRefs: ["takken-k-brokerage-fees-minister-sets-amount"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-32-002", conceptId: "takken-concept-brokerage-fees", knowledgeRefs: ["takken-k-brokerage-fees-no-excess"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-33-001", conceptId: "takken-concept-supervision-dispositions", knowledgeRefs: ["takken-k-supervision-dispositions-business-suspension-one-year"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-33-002", conceptId: "takken-concept-supervision-dispositions", knowledgeRefs: ["takken-k-supervision-dispositions-mandatory-cancellation-framework"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-34-001", conceptId: "takken-concept-declaration-arrival", knowledgeRefs: ["takken-k-declaration-arrival-effective-on-arrival"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-34-002", conceptId: "takken-concept-declaration-arrival", knowledgeRefs: ["takken-k-declaration-arrival-obstruction-deemed-arrival"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-35-001", conceptId: "takken-concept-mistake", knowledgeRefs: ["takken-k-mistake-cancellation-important"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-36-001", conceptId: "takken-concept-fraud", knowledgeRefs: ["takken-k-fraud-cancellation"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-36-002", conceptId: "takken-concept-fraud", knowledgeRefs: ["takken-k-fraud-third-party-good-faith-no-negligence"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-37-001", conceptId: "takken-concept-mental-reservation", knowledgeRefs: ["takken-k-mental-reservation-principle-valid", "takken-k-mental-reservation-counterparty-aware-invalid"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-37-002", conceptId: "takken-concept-fictitious-declaration", knowledgeRefs: ["takken-k-fictitious-declaration-party-invalid"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-38-001", conceptId: "takken-concept-minor", knowledgeRefs: ["takken-k-minor-consent-principle", "takken-k-minor-cancellation-without-consent"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-38-002", conceptId: "takken-concept-adult-ward", knowledgeRefs: ["takken-k-adult-ward-cancellation-principle", "takken-k-adult-ward-daily-life-exception"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-39-001", conceptId: "takken-concept-agency", knowledgeRefs: ["takken-k-agency-direct-effect-with-disclosure"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-39-002", conceptId: "takken-concept-agency", knowledgeRefs: ["takken-k-agency-undisclosed-deemed-self"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-40-002", conceptId: "takken-concept-apparent-agency", knowledgeRefs: ["takken-k-apparent-agency-statutory-overview"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-41-001", conceptId: "takken-concept-acquisitive-prescription", knowledgeRefs: ["takken-k-acquisitive-prescription-twenty-years", "takken-k-acquisitive-prescription-ten-years-good-faith-no-negligence"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-41-002", conceptId: "takken-concept-extinctive-prescription", knowledgeRefs: ["takken-k-extinctive-prescription-subjective-five-years", "takken-k-extinctive-prescription-objective-ten-years"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-42-001", conceptId: "takken-concept-property-transfer-opposability", knowledgeRefs: ["takken-k-property-transfer-opposability-consensual-effect"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-42-002", conceptId: "takken-concept-property-transfer-opposability", knowledgeRefs: ["takken-k-property-transfer-opposability-registration-for-third-party-opposability"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-43-001", conceptId: "takken-concept-co-ownership", knowledgeRefs: ["takken-k-co-ownership-equal-shares-presumed"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-43-002", conceptId: "takken-concept-co-ownership", knowledgeRefs: ["takken-k-co-ownership-use-entire-property-by-share"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-44-001", conceptId: "takken-concept-mortgage", knowledgeRefs: ["takken-k-mortgage-no-possession-transfer", "takken-k-mortgage-priority-payment"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-44-002", conceptId: "takken-concept-mortgage", knowledgeRefs: ["takken-k-mortgage-no-possession-transfer"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-45-001", conceptId: "takken-concept-default-damages", knowledgeRefs: ["takken-k-default-damages-nonperformance-claim"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-45-002", conceptId: "takken-concept-default-damages", knowledgeRefs: ["takken-k-default-damages-no-liability-without-attribution"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-46-001", conceptId: "takken-concept-contract-cancellation", knowledgeRefs: ["takken-k-contract-cancellation-demand-principle"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-46-002", conceptId: "takken-concept-contract-cancellation", knowledgeRefs: ["takken-k-contract-cancellation-no-demand-total-impossibility"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-47-001", conceptId: "takken-concept-simultaneous-performance", knowledgeRefs: ["takken-k-simultaneous-performance-refusal-until-tender"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-47-002", conceptId: "takken-concept-risk-allocation", knowledgeRefs: ["takken-k-risk-allocation-no-fault-refuse-counter-performance"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-48-001", conceptId: "takken-concept-sale-earnest", knowledgeRefs: ["takken-k-sale-earnest-buyer-abandon", "takken-k-sale-earnest-before-counterparty-performance"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-48-002", conceptId: "takken-concept-sale-earnest", knowledgeRefs: ["takken-k-sale-earnest-seller-double-actual-tender"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-49-001", conceptId: "takken-concept-civil-nonconformity", knowledgeRefs: ["takken-k-civil-nonconformity-cure-right"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-49-002", conceptId: "takken-concept-civil-nonconformity", knowledgeRefs: ["takken-k-civil-nonconformity-price-reduction-demand-principle"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-50-001", conceptId: "takken-concept-lease-general", knowledgeRefs: ["takken-k-lease-general-lessor-use-profit", "takken-k-lease-general-lessee-rent", "takken-k-lease-general-lessee-return-at-end"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-50-002", conceptId: "takken-concept-lease-general", knowledgeRefs: ["takken-k-lease-general-duration-fifty-year-cap"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-51-001", conceptId: "takken-concept-security-deposit", knowledgeRefs: ["takken-k-security-deposit-return-after-end-and-return", "takken-k-security-deposit-return-net-of-debt"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-51-002", conceptId: "takken-concept-building-lease-opposability", knowledgeRefs: ["takken-k-building-lease-opposability-delivery-without-registration", "takken-k-building-lease-opposability-subsequent-property-right-acquirer"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-52-001", conceptId: "takken-concept-ordinary-land-lease-term", knowledgeRefs: ["takken-k-ordinary-land-lease-term-thirty-years", "takken-k-ordinary-land-lease-term-longer-contract-controls"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-52-002", conceptId: "takken-concept-land-lease-opposability", knowledgeRefs: ["takken-k-land-lease-opposability-no-land-right-registration-required", "takken-k-land-lease-opposability-registered-building-on-land", "takken-k-land-lease-opposability-effective-against-third-parties"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-53-001", conceptId: "takken-concept-fixed-term-land-lease", knowledgeRefs: ["takken-k-fixed-term-land-lease-duration-fifty-years-or-more", "takken-k-fixed-term-land-lease-no-contract-renewal", "takken-k-fixed-term-land-lease-no-extension-by-rebuilding", "takken-k-fixed-term-land-lease-no-building-purchase-demand"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-53-002", conceptId: "takken-concept-fixed-term-land-lease", knowledgeRefs: ["takken-k-fixed-term-land-lease-special-agreement-written-form", "takken-k-fixed-term-land-lease-electronic-record-deemed-written"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-54-002", conceptId: "takken-concept-building-lease-term", knowledgeRefs: ["takken-k-building-lease-term-less-than-one-year-deemed-indefinite"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-55-001", conceptId: "takken-concept-fixed-term-building-lease", knowledgeRefs: ["takken-k-fixed-term-building-lease-no-renewal-expiry", "takken-k-fixed-term-building-lease-contract-form"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-55-002", conceptId: "takken-concept-fixed-term-building-lease", knowledgeRefs: ["takken-k-fixed-term-building-lease-prior-explanation", "takken-k-fixed-term-building-lease-no-explanation-invalid"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-56-001", conceptId: "takken-concept-heirs-order", knowledgeRefs: ["takken-k-heirs-order-spouse-always-heir", "takken-k-heirs-order-children-first-rank", "takken-k-heirs-order-lineal-ascendants-second-rank", "takken-k-heirs-order-siblings-third-rank"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-56-002", conceptId: "takken-concept-heirs-order", knowledgeRefs: ["takken-k-heirs-order-spouse-child-half-each"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-57-001", conceptId: "takken-concept-inheritance-deliberation", knowledgeRefs: ["takken-k-inheritance-deliberation-three-month-period"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-57-002", conceptId: "takken-concept-inheritance-deliberation", knowledgeRefs: ["takken-k-inheritance-deliberation-renunciation-family-court"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-58-001", conceptId: "takken-concept-will-effect", knowledgeRefs: ["takken-k-will-effect-death"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-58-002", conceptId: "takken-concept-reserved-portion", knowledgeRefs: ["takken-k-reserved-portion-heirs-excluding-siblings"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-59-001", conceptId: "takken-concept-condominium-ownership", knowledgeRefs: ["takken-k-condominium-ownership-separate-ownership-conditions"], sourceQuestionValidationStatus: "verified" },
    { questionId: "takken-q-59-002", conceptId: "takken-concept-condominium-ownership", knowledgeRefs: ["takken-k-condominium-ownership-common-part-all-owners"], sourceQuestionValidationStatus: "verified" }
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
    "takken-k-eight-restrictions-scope-regulation-family", "takken-k-eight-restrictions-scope-adverse-special-terms",
    "takken-k-cooling-off-outside-office-scope", "takken-k-cooling-off-eight-days",
    "takken-k-earnest-money-safeguards-unfinished-exemption", "takken-k-earnest-money-safeguards-completed-exemption",
    "takken-k-brokerage-fees-minister-sets-amount", "takken-k-brokerage-fees-no-excess",
    "takken-k-supervision-dispositions-business-suspension-one-year", "takken-k-supervision-dispositions-mandatory-cancellation-framework",
    "takken-k-declaration-arrival-effective-on-arrival", "takken-k-declaration-arrival-obstruction-deemed-arrival",
    "takken-k-mistake-cancellation-important",
    "takken-k-fraud-cancellation", "takken-k-fraud-third-party-good-faith-no-negligence",
    "takken-k-mental-reservation-principle-valid", "takken-k-mental-reservation-counterparty-aware-invalid",
    "takken-k-fictitious-declaration-party-invalid",
    "takken-k-minor-consent-principle", "takken-k-minor-cancellation-without-consent",
    "takken-k-adult-ward-cancellation-principle", "takken-k-adult-ward-daily-life-exception",
    "takken-k-agency-direct-effect-with-disclosure", "takken-k-agency-undisclosed-deemed-self",
    "takken-k-apparent-agency-statutory-overview",
    "takken-k-acquisitive-prescription-twenty-years", "takken-k-acquisitive-prescription-ten-years-good-faith-no-negligence",
    "takken-k-extinctive-prescription-subjective-five-years", "takken-k-extinctive-prescription-objective-ten-years",
    "takken-k-property-transfer-opposability-consensual-effect", "takken-k-property-transfer-opposability-registration-for-third-party-opposability",
    "takken-k-co-ownership-equal-shares-presumed", "takken-k-co-ownership-use-entire-property-by-share",
    "takken-k-mortgage-no-possession-transfer", "takken-k-mortgage-priority-payment",
    "takken-k-default-damages-nonperformance-claim", "takken-k-default-damages-no-liability-without-attribution",
    "takken-k-contract-cancellation-demand-principle", "takken-k-contract-cancellation-no-demand-total-impossibility",
    "takken-k-simultaneous-performance-refusal-until-tender",
    "takken-k-risk-allocation-no-fault-refuse-counter-performance",
    "takken-k-sale-earnest-buyer-abandon", "takken-k-sale-earnest-seller-double-actual-tender", "takken-k-sale-earnest-before-counterparty-performance",
    "takken-k-civil-nonconformity-cure-right", "takken-k-civil-nonconformity-price-reduction-demand-principle",
    "takken-k-lease-general-lessor-use-profit", "takken-k-lease-general-lessee-rent", "takken-k-lease-general-lessee-return-at-end", "takken-k-lease-general-duration-fifty-year-cap",
    "takken-k-security-deposit-return-after-end-and-return", "takken-k-security-deposit-return-net-of-debt",
    "takken-k-building-lease-opposability-delivery-without-registration", "takken-k-building-lease-opposability-subsequent-property-right-acquirer",
    "takken-k-ordinary-land-lease-term-thirty-years", "takken-k-ordinary-land-lease-term-longer-contract-controls",
    "takken-k-land-lease-opposability-no-land-right-registration-required", "takken-k-land-lease-opposability-registered-building-on-land", "takken-k-land-lease-opposability-effective-against-third-parties",
    "takken-k-fixed-term-land-lease-duration-fifty-years-or-more", "takken-k-fixed-term-land-lease-no-contract-renewal", "takken-k-fixed-term-land-lease-no-extension-by-rebuilding", "takken-k-fixed-term-land-lease-no-building-purchase-demand", "takken-k-fixed-term-land-lease-special-agreement-written-form", "takken-k-fixed-term-land-lease-electronic-record-deemed-written",
    "takken-k-building-lease-term-less-than-one-year-deemed-indefinite",
    "takken-k-fixed-term-building-lease-no-renewal-expiry", "takken-k-fixed-term-building-lease-contract-form", "takken-k-fixed-term-building-lease-prior-explanation", "takken-k-fixed-term-building-lease-no-explanation-invalid",
    "takken-k-heirs-order-spouse-always-heir", "takken-k-heirs-order-children-first-rank", "takken-k-heirs-order-lineal-ascendants-second-rank", "takken-k-heirs-order-siblings-third-rank", "takken-k-heirs-order-spouse-child-half-each",
    "takken-k-inheritance-deliberation-three-month-period", "takken-k-inheritance-deliberation-renunciation-family-court",
    "takken-k-will-effect-death",
    "takken-k-reserved-portion-heirs-excluding-siblings",
    "takken-k-condominium-ownership-separate-ownership-conditions", "takken-k-condominium-ownership-common-part-all-owners"
  ]);
  const allowedConceptIds = new Set([
    "takken-concept-business-definition", "takken-concept-license-required", "takken-concept-license-authority", "takken-concept-license-disqualification", "takken-concept-license-validity-renewal", "takken-concept-license-change-closure", "takken-concept-roster", "takken-concept-takkenshi-registration", "takken-concept-exclusive-takkenshi", "takken-concept-takkenshi-exclusive-duties", "takken-concept-business-guarantee-deposit", "takken-concept-business-guarantee-refund", "takken-concept-guarantee-association", "takken-concept-brokerage-contract-document", "takken-concept-exclusive-brokerage", "takken-concept-sole-agency-brokerage", "takken-concept-advertising-start", "takken-concept-contract-start", "takken-concept-false-advertising", "takken-concept-article35-procedure", "takken-concept-article35-items", "takken-concept-article37-document", "takken-concept-article35-vs-37", "takken-concept-eight-restrictions-scope", "takken-concept-cooling-off", "takken-concept-earnest-money-safeguards", "takken-concept-brokerage-fees", "takken-concept-supervision-dispositions", "takken-concept-declaration-arrival", "takken-concept-mistake", "takken-concept-fraud", "takken-concept-mental-reservation", "takken-concept-fictitious-declaration", "takken-concept-minor", "takken-concept-adult-ward", "takken-concept-agency", "takken-concept-apparent-agency", "takken-concept-acquisitive-prescription", "takken-concept-extinctive-prescription", "takken-concept-property-transfer-opposability", "takken-concept-co-ownership", "takken-concept-mortgage", "takken-concept-default-damages", "takken-concept-contract-cancellation", "takken-concept-simultaneous-performance", "takken-concept-risk-allocation", "takken-concept-sale-earnest", "takken-concept-civil-nonconformity", "takken-concept-lease-general", "takken-concept-security-deposit", "takken-concept-building-lease-opposability", "takken-concept-ordinary-land-lease-term", "takken-concept-land-lease-opposability", "takken-concept-fixed-term-land-lease", "takken-concept-building-lease-term", "takken-concept-fixed-term-building-lease", "takken-concept-heirs-order", "takken-concept-inheritance-deliberation", "takken-concept-will-effect", "takken-concept-reserved-portion", "takken-concept-condominium-ownership"
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

  if (mappings.length !== 88) throw new Error(`Expected 88 mapped questions through unit 59 q59-002, got ${mappings.length}`);
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
  if (!questionIds.has("takken-q-26-001") || !questionIds.has("takken-q-26-002")) throw new Error("Cooling-off source question mappings are missing");
  if (!questionIds.has("takken-q-27-002")) throw new Error("Earnest-money safeguards source question mapping is missing");
  if (!questionIds.has("takken-q-32-001") || !questionIds.has("takken-q-32-002")) throw new Error("Brokerage-fees source question mappings are missing");
  if (!questionIds.has("takken-q-33-001") || !questionIds.has("takken-q-33-002")) throw new Error("Supervision-dispositions source question mappings are missing");
  if (!questionIds.has("takken-q-34-001") || !questionIds.has("takken-q-34-002")) throw new Error("Declaration-arrival source question mappings are missing");
  if (!questionIds.has("takken-q-35-001")) throw new Error("Mistake source question mapping is missing");
  if (!questionIds.has("takken-q-36-001") || !questionIds.has("takken-q-36-002")) throw new Error("Fraud source question mappings are missing");
  if (!questionIds.has("takken-q-37-001")) throw new Error("Mental-reservation source question mapping is missing");
  if (!questionIds.has("takken-q-37-002")) throw new Error("Fictitious-declaration source question mapping is missing");
  if (!questionIds.has("takken-q-38-001")) throw new Error("Minor source question mapping is missing");
  if (!questionIds.has("takken-q-38-002")) throw new Error("Adult-ward source question mapping is missing");
  if (!questionIds.has("takken-q-39-001") || !questionIds.has("takken-q-39-002")) throw new Error("Agency source question mappings are missing");
  if (!questionIds.has("takken-q-40-002")) throw new Error("Apparent-agency overview source question mapping is missing");
  if (!questionIds.has("takken-q-41-001")) throw new Error("Acquisitive-prescription source question mapping is missing");
  if (!questionIds.has("takken-q-41-002")) throw new Error("Extinctive-prescription source question mapping is missing");
  if (!questionIds.has("takken-q-42-001") || !questionIds.has("takken-q-42-002")) throw new Error("Property-transfer-opposability source question mappings are missing");
  if (!questionIds.has("takken-q-43-001") || !questionIds.has("takken-q-43-002")) throw new Error("Co-ownership source question mappings are missing");
  if (!questionIds.has("takken-q-44-001") || !questionIds.has("takken-q-44-002")) throw new Error("Mortgage source question mappings are missing");
  if (!questionIds.has("takken-q-45-001") || !questionIds.has("takken-q-45-002")) throw new Error("Default-damages source question mappings are missing");
  if (!questionIds.has("takken-q-46-001") || !questionIds.has("takken-q-46-002")) throw new Error("Contract-cancellation source question mappings are missing");
  if (!questionIds.has("takken-q-47-001")) throw new Error("Simultaneous-performance source question mapping is missing");
  if (!questionIds.has("takken-q-47-002")) throw new Error("Risk-allocation source question mapping is missing");
  if (!questionIds.has("takken-q-48-001") || !questionIds.has("takken-q-48-002")) throw new Error("Sale-earnest source question mappings are missing");
  if (!questionIds.has("takken-q-49-001") || !questionIds.has("takken-q-49-002")) throw new Error("Civil-nonconformity source question mappings are missing");
  if (!questionIds.has("takken-q-50-001") || !questionIds.has("takken-q-50-002")) throw new Error("Lease-general source question mappings are missing");
  if (!questionIds.has("takken-q-51-001")) throw new Error("Security-deposit source question mapping is missing");
  if (!questionIds.has("takken-q-51-002")) throw new Error("Building-lease-opposability source question mapping is missing");
  if (!questionIds.has("takken-q-52-001")) throw new Error("Ordinary-land-lease-term source question mapping is missing");
  if (!questionIds.has("takken-q-52-002")) throw new Error("Land-lease-opposability source question mapping is missing");
  if (!questionIds.has("takken-q-53-001") || !questionIds.has("takken-q-53-002")) throw new Error("Fixed-term-land-lease source question mappings are missing");
  if (!questionIds.has("takken-q-54-002")) throw new Error("Building-lease-term source question mapping is missing");
  if (!questionIds.has("takken-q-55-001") || !questionIds.has("takken-q-55-002")) throw new Error("Fixed-term-building-lease source question mappings are missing");
  if (!questionIds.has("takken-q-56-001") || !questionIds.has("takken-q-56-002")) throw new Error("Heirs-order source question mappings are missing");
  if (!questionIds.has("takken-q-57-001") || !questionIds.has("takken-q-57-002")) throw new Error("Inheritance-deliberation source question mappings are missing");
  if (!questionIds.has("takken-q-58-001")) throw new Error("Will-effect source question mapping is missing");
  if (!questionIds.has("takken-q-58-002")) throw new Error("Reserved-portion source question mapping is missing");
  if (!questionIds.has("takken-q-59-001") || !questionIds.has("takken-q-59-002")) throw new Error("Condominium-ownership source question mappings are missing");

  window.PowerTakkenQuestionKnowledgeMap = Object.freeze(mappings.map((mapping) => Object.freeze(mapping)));
})();
