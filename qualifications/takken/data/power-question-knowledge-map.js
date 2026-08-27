(() => {
  "use strict";

  const mappings = [
    {
      questionId: "takken-q-01-001",
      conceptId: "takken-concept-business-definition",
      knowledgeRefs: [
        "takken-k-business-definition-self-sale-exchange",
        "takken-k-business-definition-self-lease-exclusion"
      ],
      sourceQuestionValidationStatus: "verified"
    },
    {
      questionId: "takken-q-01-002",
      conceptId: "takken-concept-business-definition",
      knowledgeRefs: [
        "takken-k-business-definition-agency-brokerage",
        "takken-k-business-definition-self-lease-exclusion"
      ],
      sourceQuestionValidationStatus: "verified"
    }
  ];

  const knownKnowledgeIds = new Set([
    "takken-k-business-definition-self-sale-exchange",
    "takken-k-business-definition-agency-brokerage",
    "takken-k-business-definition-self-lease-exclusion"
  ]);
  const questionIds = new Set();

  for (const mapping of mappings) {
    if (questionIds.has(mapping.questionId)) throw new Error(`Duplicate Power Takken question mapping: ${mapping.questionId}`);
    questionIds.add(mapping.questionId);
    if (mapping.conceptId !== "takken-concept-business-definition") throw new Error(`Unexpected concept mapping: ${mapping.questionId}`);
    if (!Array.isArray(mapping.knowledgeRefs) || mapping.knowledgeRefs.length === 0) throw new Error(`Missing knowledge refs: ${mapping.questionId}`);
    if (new Set(mapping.knowledgeRefs).size !== mapping.knowledgeRefs.length) throw new Error(`Duplicate knowledge refs: ${mapping.questionId}`);
    for (const knowledgeId of mapping.knowledgeRefs) {
      if (!knownKnowledgeIds.has(knowledgeId)) throw new Error(`Unknown knowledge ref ${knowledgeId} from ${mapping.questionId}`);
    }
    if (mapping.sourceQuestionValidationStatus !== "verified") throw new Error(`Unverified Phase 2/3 question mapping: ${mapping.questionId}`);
  }

  if (mappings.length !== 2) throw new Error(`Expected 2 mapped business-definition questions, got ${mappings.length}`);
  if (new Set(mappings.flatMap((mapping) => mapping.knowledgeRefs)).size !== knownKnowledgeIds.size) {
    throw new Error("Business-definition knowledge coverage is incomplete");
  }

  window.PowerTakkenQuestionKnowledgeMap = Object.freeze(mappings.map((mapping) => Object.freeze(mapping)));
})();
