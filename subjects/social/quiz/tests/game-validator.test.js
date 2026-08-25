import test from "node:test";
import assert from "node:assert/strict";

import { assertValidGameDefinition, validateGameDefinition } from "../js/core/game-validator.js";
import { prefectureGame } from "../js/games/prefectures.js";

function validChoiceGame(overrides = {}) {
  return {
    id: "choice-test",
    title: "選択問題",
    renderer: { type: "choice" },
    questions: [
      {
        id: "q1",
        prompt: "正しいものは？",
        answer: "a",
        options: [
          { key: "a", label: "A" },
          { key: "b", label: "B" }
        ]
      }
    ],
    ...overrides
  };
}

function errorPaths(game) {
  return validateGameDefinition(game).errors.map((error) => error.path);
}

test("current prefecture game satisfies the schema", () => {
  const result = validateGameDefinition(prefectureGame);
  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, []);
  assert.equal(assertValidGameDefinition(prefectureGame), prefectureGame);
});

test("rejects missing game fields and unsupported renderer configuration", () => {
  const result = validateGameDefinition({ questions: [] });
  assert.equal(result.valid, false);
  assert.deepEqual(errorPaths({ questions: [] }), ["id", "title", "renderer", "questions"]);

  const unsupported = validChoiceGame({ renderer: { type: "unknown" } });
  assert.ok(errorPaths(unsupported).includes("renderer.type"));
});

test("svg-region renderer requires source, region selector, and key attribute", () => {
  const game = {
    id: "map-test",
    title: "地図",
    renderer: { type: "svg-region" },
    questions: [{ id: "q1", prompt: "どこ？", answer: "1" }]
  };

  assert.deepEqual(errorPaths(game), [
    "renderer.source",
    "renderer.regionSelector",
    "renderer.keyAttribute"
  ]);
});

test("rejects duplicate question ids, empty prompts, and missing answers", () => {
  const game = validChoiceGame({
    questions: [
      {
        id: "same",
        prompt: "Q1",
        answer: "a",
        options: [{ key: "a", label: "A" }, { key: "b", label: "B" }]
      },
      {
        id: "same",
        prompt: " ",
        answer: "",
        options: [{ key: "a", label: "A" }, { key: "b", label: "B" }]
      }
    ]
  });

  const paths = errorPaths(game);
  assert.ok(paths.includes("questions[1].id"));
  assert.ok(paths.includes("questions[1].prompt"));
  assert.ok(paths.includes("questions[1].answer"));
});

test("choice questions require unique keys and labels and an answer present in the options", () => {
  const game = validChoiceGame({
    questions: [
      {
        id: "q1",
        prompt: "Q",
        answer: "missing",
        options: [
          { key: "a", label: "同じ" },
          { key: "a", label: "同じ" }
        ]
      }
    ]
  });

  const paths = errorPaths(game);
  assert.ok(paths.includes("questions[0].options[1].key"));
  assert.ok(paths.includes("questions[0].options[1].label"));
  assert.ok(paths.includes("questions[0].answer"));
});

test("assert helper reports invalid definitions before page wiring uses them", () => {
  assert.throws(
    () => assertValidGameDefinition(validChoiceGame({ id: "" })),
    /Invalid game definition:\nid: game id is required/
  );
});
