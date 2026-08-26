import test from "node:test";
import assert from "node:assert/strict";

import { ChoiceRenderer } from "../js/renderers/choice-renderer.js";

function fakeElement(tagName) {
  let classes = new Set();
  const element = {
    tagName: String(tagName).toUpperCase(),
    type: "",
    dataset: {},
    textContent: "",
    disabled: false,
    children: [],
    listeners: new Map(),
    append(child) {
      this.children.push(child);
    },
    addEventListener(type, handler) {
      this.listeners.set(type, handler);
    },
    click() {
      this.listeners.get("click")?.();
    },
    querySelectorAll(selector) {
      const found = [];
      const visit = (node) => {
        if (selector === ".choice-button" && node.classList?.contains("choice-button")) found.push(node);
        for (const child of node.children ?? []) visit(child);
      };
      for (const child of this.children) visit(child);
      return found;
    },
    replaceChildren(...children) {
      this.children = [...children];
    }
  };

  Object.defineProperty(element, "className", {
    get() {
      return [...classes].join(" ");
    },
    set(value) {
      classes = new Set(String(value).split(/\s+/).filter(Boolean));
    }
  });
  element.classList = {
    add(...names) {
      for (const name of names) classes.add(name);
    },
    contains(name) {
      return classes.has(name);
    }
  };

  return element;
}

function installFakeDocument() {
  globalThis.document = {
    createElement: (tagName) => fakeElement(tagName)
  };
  return () => delete globalThis.document;
}

test("ChoiceRenderer preserves the generic answer-handler contract", () => {
  const cleanup = installFakeDocument();
  try {
    const root = fakeElement("section");
    const renderer = new ChoiceRenderer({ root });
    const answers = [];
    renderer.setAnswerHandler((key) => answers.push(key));

    renderer.render({
      options: [
        { key: "a", label: "alpha" },
        { key: "b", label: "beta" },
        { key: "c", label: "gamma" },
        { key: "d", label: "delta" }
      ]
    });

    const buttons = root.querySelectorAll(".choice-button");
    assert.equal(buttons.length, 4);
    assert.deepEqual(buttons.map((button) => button.textContent), ["alpha", "beta", "gamma", "delta"]);

    buttons[2].click();
    assert.deepEqual(answers, ["c"]);
  } finally {
    cleanup();
  }
});

test("ChoiceRenderer disables choices and marks correct/selected-wrong states", () => {
  const cleanup = installFakeDocument();
  try {
    const root = fakeElement("section");
    const renderer = new ChoiceRenderer({ root });
    renderer.render({
      options: [
        { key: "a", label: "alpha" },
        { key: "b", label: "beta" },
        { key: "c", label: "gamma" },
        { key: "d", label: "delta" }
      ]
    });

    renderer.showResult({ selected: "b", correct: "c" });

    const buttons = root.querySelectorAll(".choice-button");
    assert.equal(buttons.every((button) => button.disabled), true);
    assert.equal(buttons[1].classList.contains("is-wrong"), true);
    assert.equal(buttons[2].classList.contains("is-correct"), true);
    assert.equal(buttons[0].classList.contains("is-wrong"), false);
    assert.equal(buttons[3].classList.contains("is-correct"), false);
  } finally {
    cleanup();
  }
});
