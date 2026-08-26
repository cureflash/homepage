export class ChoiceRenderer {
  constructor({ root }) {
    this.root = root;
    this.onAnswer = () => {};
  }

  setAnswerHandler(handler) {
    this.onAnswer = handler;
  }

  render(question) {
    this.root.replaceChildren();
    const grid = document.createElement("div");
    grid.className = "choice-grid";
    for (const option of question.options ?? []) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice-button";
      if (option.kind === "flag") button.classList.add("choice-button-flag");
      button.dataset.key = String(option.key);
      button.textContent = option.label;
      button.addEventListener("click", () => this.onAnswer(option.key));
      grid.append(button);
    }
    this.root.append(grid);
  }

  showResult({ selected, correct }) {
    this.root.querySelectorAll(".choice-button").forEach((button) => {
      button.disabled = true;
      if (button.dataset.key === String(correct)) button.classList.add("is-correct");
      if (button.dataset.key === String(selected) && selected !== correct) button.classList.add("is-wrong");
    });
  }
}
