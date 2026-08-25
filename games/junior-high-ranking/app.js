(() => {
  const questionPool = window.RANKING_QUESTIONS || [];
  const audio = window.RankingAudio || {};
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
    const shuffled = [...questionPool];
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, Math.min(questionCount, shuffled.length));
  }

  let questions = selectQuestions();

  const state = {
    index: 0,
    rankIndex: 0,
    locked: false,
    revealed: false,
    selectedChoice: null,
    gameOver: false
  };

  const questionNumber = document.querySelector("#question-number");
  const rankLabel = document.querySelector("#rank-label");
  const rankLadder = document.querySelector("#rank-ladder");
  const prompt = document.querySelector("#question-prompt");
  const choices = document.querySelector("#choices");
  const answerBreakdown = document.querySelector("#answer-breakdown");
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
    state.revealed = false;
    state.selectedChoice = null;
    state.gameOver = false;
    feedback.textContent = "";
    feedback.className = "feedback";
    answerBreakdown.innerHTML = "";
    answerBreakdown.hidden = true;
    nextButton.hidden = true;
    nextButton.classList.remove("game-over-button");
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

  function renderAnswerBreakdown(question) {
    answerBreakdown.innerHTML = "";

    question.choices.forEach((choice, choiceIndex) => {
      const letter = String.fromCharCode(65 + choiceIndex);
      const row = document.createElement("div");
      const role = choiceIndex === question.answer
        ? "正解"
        : choiceIndex === question.absoluteWrong
          ? "絶対アカン"
          : "誤答";

      row.className = `answer-detail choice-${letter.toLowerCase()} role-${role === "正解" ? "correct" : role === "絶対アカン" ? "absolute" : "wrong"}`;
      row.innerHTML = `<span class="answer-choice">${letter}＝${choice}</span><strong>${role}</strong>`;
      answerBreakdown.appendChild(row);
    });

    answerBreakdown.hidden = false;
  }

  function showResult(isGameOver = false) {
    if (typeof audio.stopBgm === "function") audio.stopBgm();
    if (typeof audio.playFinish === "function") audio.playFinish(isGameOver);

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
    state.selectedChoice = choiceIndex;

    if (typeof audio.startBgm === "function") audio.startBgm();
    if (typeof audio.playSelect === "function") audio.playSelect();

    const buttons = [...choices.querySelectorAll(".choice-button")];
    buttons.forEach((button) => {
      button.disabled = true;
    });
    buttons[choiceIndex].classList.add("selected");

    feedback.textContent = "選択しました。結果発表を押してください。";
    feedback.className = "feedback selected-feedback";
    nextButton.textContent = "結果発表";
    nextButton.hidden = false;
  }

  function revealAnswer() {
    if (!state.locked || state.revealed || state.selectedChoice === null) return;

    state.revealed = true;
    const question = questions[state.index];
    const choiceIndex = state.selectedChoice;
    const buttons = [...choices.querySelectorAll(".choice-button")];
    const selectedButton = buttons[choiceIndex];

    selectedButton.classList.remove("selected");

    if (choiceIndex === question.answer) {
      selectedButton.classList.add("correct");
      feedback.textContent = `正解！ ${question.explanation}`;
      feedback.className = "feedback correct-feedback";
      if (typeof audio.playCorrect === "function") audio.playCorrect();
    } else if (choiceIndex === question.absoluteWrong) {
      state.rankIndex = clampRank(state.rankIndex + 3);
      selectedButton.classList.add("absolute-wrong");
      feedback.textContent = `絶対アカン！ 3ランクダウン。${question.explanation}`;
      feedback.className = "feedback absolute-feedback";
      if (typeof audio.playAbsoluteWrong === "function") audio.playAbsoluteWrong();
    } else {
      state.rankIndex = clampRank(state.rankIndex + 1);
      selectedButton.classList.add("wrong");
      feedback.textContent = `不正解。1ランクダウン。${question.explanation}`;
      feedback.className = "feedback wrong-feedback";
      if (typeof audio.playWrong === "function") audio.playWrong();
    }

    buttons[question.answer].classList.add("answer");
    renderAnswerBreakdown(question);
    updateRank();

    if (state.rankIndex === ranks.length - 1) {
      state.gameOver = true;
      feedback.textContent += " 映す価値なし。ゲームオーバー。";
      nextButton.textContent = "GAME OVER";
      nextButton.classList.add("game-over-button");
      return;
    }

    nextButton.textContent = state.index === questions.length - 1 ? "最終結果を見る" : "次の問題";
  }

  nextButton.addEventListener("click", () => {
    if (!state.locked) return;

    if (!state.revealed) {
      revealAnswer();
      return;
    }

    if (state.gameOver) {
      showResult(true);
      return;
    }

    if (state.index >= questions.length - 1) {
      showResult(false);
      return;
    }

    state.index += 1;
    renderQuestion();
  });

  restartButton.addEventListener("click", () => {
    if (typeof audio.stopBgm === "function") audio.stopBgm();

    questions = selectQuestions();
    state.index = 0;
    state.rankIndex = 0;
    state.locked = false;
    state.revealed = false;
    state.selectedChoice = null;
    state.gameOver = false;
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
