(() => {
  "use strict";

  const mappings = [
    {
      questionId: "takken-q-90-001",
      conceptId: "takken-concept-five-question-exemption",
      knowledgeRefs: [
        "takken-k-five-question-exemption-normal-50-registered-45",
        "takken-k-five-question-exemption-five-questions"
      ],
      sourceQuestionValidationStatus: "verified"
    },
    {
      questionId: "takken-q-90-002",
      conceptId: "takken-concept-five-question-exemption",
      knowledgeRefs: [
        "takken-k-five-question-exemption-course-eligibility",
        "takken-k-five-question-exemption-completion-exam-required",
        "takken-k-five-question-exemption-three-year-validity"
      ],
      sourceQuestionValidationStatus: "verified"
    }
  ];

  const knownKnowledgeIds = new Set([
    "takken-k-five-question-exemption-normal-50-registered-45",
    "takken-k-five-question-exemption-five-questions",
    "takken-k-five-question-exemption-course-eligibility",
    "takken-k-five-question-exemption-completion-exam-required",
    "takken-k-five-question-exemption-three-year-validity"
  ]);
  const questionIds = new Set();

  for (const mapping of mappings) {
    if (questionIds.has(mapping.questionId)) throw new Error(`Duplicate Power Takken Unit 90 question mapping: ${mapping.questionId}`);
    questionIds.add(mapping.questionId);
    if (mapping.conceptId !== "takken-concept-five-question-exemption") throw new Error(`Unexpected Unit 90 concept mapping: ${mapping.questionId}`);
    if (!Array.isArray(mapping.knowledgeRefs) || mapping.knowledgeRefs.length === 0) throw new Error(`Missing Unit 90 knowledge refs: ${mapping.questionId}`);
    if (new Set(mapping.knowledgeRefs).size !== mapping.knowledgeRefs.length) throw new Error(`Duplicate Unit 90 knowledge refs: ${mapping.questionId}`);
    for (const knowledgeId of mapping.knowledgeRefs) {
      if (!knownKnowledgeIds.has(knowledgeId)) throw new Error(`Unknown Unit 90 knowledge ref ${knowledgeId} from ${mapping.questionId}`);
    }
    if (mapping.sourceQuestionValidationStatus !== "verified") throw new Error(`Unverified Unit 90 Phase 2/3 question mapping: ${mapping.questionId}`);
  }

  if (mappings.length !== 2) throw new Error(`Expected 2 Unit 90 mapped questions, got ${mappings.length}`);
  const coveredKnowledgeIds = new Set(mappings.flatMap((mapping) => mapping.knowledgeRefs));
  if (coveredKnowledgeIds.size !== 5) throw new Error(`Expected 5 directly covered Unit 90 knowledge items, got ${coveredKnowledgeIds.size}`);
  for (const knowledgeId of knownKnowledgeIds) {
    if (!coveredKnowledgeIds.has(knowledgeId)) throw new Error(`Unit 90 mapped knowledge coverage is incomplete: ${knowledgeId}`);
  }

  window.PowerTakkenQuestionKnowledgeMapUnit90 = Object.freeze(
    mappings.map((mapping) => Object.freeze({ ...mapping, knowledgeRefs: Object.freeze([...mapping.knowledgeRefs]) }))
  );
})();
