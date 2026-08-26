const SUPPORTED_RENDERERS = new Set(["svg-region", "choice", "world-region", "world-map-choice"]);

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function hasAnswer(value) {
  if (value === null || value === undefined) return false;
  return String(value).trim().length > 0;
}

function addError(errors, path, message) {
  errors.push({ path, message });
}

function validateRenderer(renderer, errors) {
  if (!renderer || typeof renderer !== "object" || Array.isArray(renderer)) {
    addError(errors, "renderer", "renderer must be an object");
    return;
  }

  if (!isNonEmptyString(renderer.type)) {
    addError(errors, "renderer.type", "renderer.type is required");
    return;
  }

  if (!SUPPORTED_RENDERERS.has(renderer.type)) {
    addError(errors, "renderer.type", `unsupported renderer type: ${renderer.type}`);
    return;
  }

  if (renderer.type === "svg-region") {
    for (const field of ["source", "regionSelector", "keyAttribute"]) {
      if (!isNonEmptyString(renderer[field])) {
        addError(errors, `renderer.${field}`, `${field} is required for svg-region`);
      }
    }
  }

  if (renderer.type === "world-region" || renderer.type === "world-map-choice") {
    if (!renderer.region || !isNonEmptyString(renderer.region.id)) {
      addError(errors, "renderer.region", "region with an id is required for world map renderers");
    }
    if (!Array.isArray(renderer.countries) || renderer.countries.length === 0) {
      addError(errors, "renderer.countries", "countries are required for world map renderers");
    }
  }
}

function validateChoiceQuestion(question, index, errors) {
  const path = `questions[${index}].options`;
  if (!Array.isArray(question.options) || question.options.length < 2) {
    addError(errors, path, "choice questions require at least two options");
    return;
  }

  const seenKeys = new Set();
  const seenLabels = new Set();

  question.options.forEach((option, optionIndex) => {
    const optionPath = `${path}[${optionIndex}]`;
    if (!option || typeof option !== "object" || Array.isArray(option)) {
      addError(errors, optionPath, "option must be an object");
      return;
    }

    if (!hasAnswer(option.key)) {
      addError(errors, `${optionPath}.key`, "option key is required");
    } else {
      const key = String(option.key);
      if (seenKeys.has(key)) addError(errors, `${optionPath}.key`, `duplicate option key: ${key}`);
      seenKeys.add(key);
    }

    if (!isNonEmptyString(option.label)) {
      addError(errors, `${optionPath}.label`, "option label is required");
    } else {
      const label = option.label.trim();
      if (seenLabels.has(label)) addError(errors, `${optionPath}.label`, `duplicate option label: ${label}`);
      seenLabels.add(label);
    }
  });

  if (hasAnswer(question.answer) && !seenKeys.has(String(question.answer))) {
    addError(errors, `questions[${index}].answer`, "answer must match one option key");
  }
}

export function validateGameDefinition(game) {
  const errors = [];

  if (!game || typeof game !== "object" || Array.isArray(game)) {
    addError(errors, "game", "game must be an object");
    return { valid: false, errors };
  }

  if (!isNonEmptyString(game.id)) addError(errors, "id", "game id is required");
  if (!isNonEmptyString(game.title)) addError(errors, "title", "game title is required");

  validateRenderer(game.renderer, errors);

  if (!Array.isArray(game.questions) || game.questions.length === 0) {
    addError(errors, "questions", "questions must be a non-empty array");
    return { valid: errors.length === 0, errors };
  }

  const questionIds = new Set();

  game.questions.forEach((question, index) => {
    const path = `questions[${index}]`;
    if (!question || typeof question !== "object" || Array.isArray(question)) {
      addError(errors, path, "question must be an object");
      return;
    }

    if (!isNonEmptyString(question.id)) {
      addError(errors, `${path}.id`, "question id is required");
    } else {
      const id = question.id.trim();
      if (questionIds.has(id)) addError(errors, `${path}.id`, `duplicate question id: ${id}`);
      questionIds.add(id);
    }

    if (!isNonEmptyString(question.prompt)) addError(errors, `${path}.prompt`, "prompt is required");
    if (!hasAnswer(question.answer)) addError(errors, `${path}.answer`, "answer is required");

    if (game.renderer?.type === "choice" || game.renderer?.type === "world-map-choice") {
      validateChoiceQuestion(question, index, errors);
    }
    if (game.renderer?.type === "world-map-choice" && !hasAnswer(question.highlightKey)) {
      addError(errors, `${path}.highlightKey`, "highlightKey is required for world-map-choice questions");
    }
  });

  return { valid: errors.length === 0, errors };
}

export function assertValidGameDefinition(game) {
  const result = validateGameDefinition(game);
  if (!result.valid) {
    const detail = result.errors.map(({ path, message }) => `${path}: ${message}`).join("\n");
    throw new Error(`Invalid game definition:\n${detail}`);
  }
  return game;
}
