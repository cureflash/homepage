(() => {
  const questionPool = window.RANKING_QUESTIONS || [];
  const questionCount = 7;
  const ranks = [
    "一流中学生",
    "上級中学生",
    "普通中学生",
    "見習い中学生",
    "要復習中学生",
    "中学英語そっくりさん",
    "映す価値なし"
  ];

  function selectQuestions() {
    return [...questionPool]
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(questionCount, questionPool.length));
  }

  let questions = selectQuestions();

  const state = {
    index: 0,
    rankIndex: 0,
    locked: false
  };

  const questionNumber = document.querySelector("#question-number");
  const rankLabel = document.querySelector("#rank-label");
  const rankLadder = document.querySelector("#rank-ladder");
  const prompt = document.querySelector("#question-prompt");
  const choices = document.querySelector("#choices");
  const feedback = document.querySelector("#feedback");
  const nextButton = document.querySelector("#next-button");
  const gamePanel = document.querySelector("#game-panel");
  const resultPanel = document.querySelector("#result-panel");
  const resultLabel = document.querySelector("#result-label");
  const resultRank = document.querySelector("#result-rank");
  const resultCopy = document.querySelector("#result-copy");
  const restartButton = document.querySelector("#restart-button");

  function clampRank(index) {
    return Math.max(0, Math.min(ranks.length - 1, index));
  }

  function updateRank() {
    rankLabel.textContent = ranks[state.rankIndex];
    rankLadder.innerHTML = "";

    ranks.forEach((rank, index) => {
      const item = document.createElement("li");
      item.textContent = rank;
      if (index < state.rankIndex) item.classList.add("passed");
      if (index === state.rankIndex) item.classList.add("current");
      rankLadder.appendChild(item);
    });
  }

  function renderQuestion() {
    const question = questions[state.index];
    state.locked = false;
    feedback.textContent = "";
    feedback.className = "feedback";
    nextButton.hidden = true;
    choices.innerHTML = "";

    questionNumber.textContent = `第${state.index + 1}問 / ${questions.length}`;
    prompt.textContent = question.prompt;
    updateRank();

    question.choices.forEach((choice, choiceIndex) => {
      const button = document.createElement("button");
      const letter = String.fromCharCode(65 + choiceIndex);
      button.type = "button";
      button.className = `choice-button choice-${letter.toLowerCase()}`;
      button.innerHTML = `<span class="choice-letter">${letter}</span><span>${choice}</span>`;
      button.addEventListener("click", () => selectChoice(choiceIndex));
      choices.appendChild(button);
    });
  }

  function showResult(isGameOver = false) {
    gamePanel.hidden = true;
    resultPanel.hidden = false;
    resultPanel.classList.toggle("game-over", isGameOver);
    resultRank.textContent = ranks[state.rankIndex];

    if (isGameOver) {
      resultLabel.textContent = "GAME OVER";
      resultCopy.textContent = "映す価値なしになったため、ここで格付けチェック終了です。";
    } else {
      resultLabel.textContent = "最終結果";
      resultCopy.textContent = "7問の格付けチェックが終了しました。";
    }
  }

  function selectChoice(choiceIndex) {
    if (state.locked) return;
    state.locked = true;

    const question = questions[state.index];
    const buttons = [...choices.querySelectorAll(".choice-button")];
    const selectedButton = buttons[choiceIndex];

    buttons.forEach((button) => {
      button.disabled = true;
    });

    if (choiceIndex === question.answer) {
      selectedButton.classList.add("correct");
      feedback.textContent = `正解！ ${question.explanation}`;
      feedback.classList.add("correct-feedback");
    } else if (choiceIndex === question.absoluteWrong) {
      state.rankIndex = clampRank(state.rankIndex + 3);
      selectedButton.classList.add("absolute-wrong");
      feedback.textContent = `絶対アカン！ 3ランクダウン。${question.explanation}`;
      feedback.classList.add("absolute-feedback");
    } else {
      state.rankIndex = clampRank(state.rankIndex + 1);
      selectedButton.classList.add("wrong");
      feedback.textContent = `不正解。1ランクダウン。${question.explanation}`;
      feedback.classList.add("wrong-feedback");
    }

    buttons[question.answer].classList.add("answer");
    updateRank();

    if (state.rankIndex === ranks.length - 1) {
      showResult(true);
      return;
    }

    nextButton.textContent = state.index === questions.length - 1 ? "結果を見る" : "次の問題";
    nextButton.hidden = false;
  }

  nextButton.addEventListener("click", () => {
    if (!state.locked) return;
    if (state.index >= questions.length - 1) {
      showResult(false);
      return;
    }
    state.index += 1;
    renderQuestion();
  });

  restartButton.addEventListener("click", () => {
    questions = selectQuestions();
    state.index = 0;
    state.rankIndex = 0;
    state.locked = false;
    resultPanel.hidden = true;
    resultPanel.classList.remove("game-over");
    gamePanel.hidden = false;
    renderQuestion();
  });

  if (questions.length === 0) {
    prompt.textContent = "問題データを読み込めませんでした。";
    choices.innerHTML = "";
    return;
  }

  updateRank();
  renderQuestion();
})();
