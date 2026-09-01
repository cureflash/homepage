(() => {
  "use strict";

  const mappings = [
    {
      questionId: "takken-q-58-001",
      conceptId: "takken-concept-will-effect",
      knowledgeRefs: ["takken-k-will-effect-death"],
      sourceQuestionValidationStatus: "verified"
    }
  ];

  if (mappings.length !== 1) throw new Error(`Expected 1 will-effect question mapping, got ${mappings.length}`);
  const [mapping] = mappings;
  if (mapping.questionId !== "takken-q-58-001") throw new Error(`Unexpected will-effect question mapping: ${mapping.questionId}`);
  if (mapping.conceptId !== "takken-concept-will-effect") throw new Error(`Unexpected will-effect concept mapping: ${mapping.conceptId}`);
  if (mapping.sourceQuestionValidationStatus !== "verified") throw new Error(`Unverified will-effect source question mapping: ${mapping.questionId}`);
  if (mapping.knowledgeRefs.length !== 1 || mapping.knowledgeRefs[0] !== "takken-k-will-effect-death") throw new Error(`Unexpected will-effect knowledge mapping: ${mapping.questionId}`);

  window.PowerTakkenQuestionKnowledgeMapWillEffect = Object.freeze(mappings.map((item) => Object.freeze(item)));
})();
