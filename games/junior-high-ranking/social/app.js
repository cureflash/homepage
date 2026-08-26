(() => {
  const config = window.RANKING_CONFIG || {};
  const questionPool = window.RANKING_QUESTIONS || [];
  const audio = window.RankingAudio || {};
  const questionCount = Math.max(1, Number(config.questionCount) || 7);
  const ranks = Array.isArray(config.ranks) && config.ranks.length >= 2
    ? config.ranks
    : ["一流中学生", "上級中学生", "普通中学生", "見習い中学生", "要復習中学生", "中学社会そっくりさん", "映す価値なし"];

  const els = {
    questionNumber: document.querySelector("#question-number"),
    rankLabel: document.querySelector("#rank-label"),
    rankLadder: document.querySelector("#rank-ladder"),
    prompt: document.querySelector("#question-prompt"),
    choices: document.querySelector("#choices"),
    answerBreakdown: document.querySelector("#answer-breakdown"),
    feedback: document.querySelector("#feedback"),
    nextButton: document.querySelector("#next-button"),
    gamePanel: document.querySelector("#game-panel"),
    resultPanel: document.querySelector("#result-panel"),
    resultLabel: document.querySelector("#result-label"),
    resultRank: document.querySelector("#result-rank"),
    resultCopy: document.querySelector("#result-copy"),
    restartButton: document.querySelector("#restart-button")
  };

  const state = { questions: [], index: 0, rankIndex: 0, selectedChoice: null, locked: false, revealed: false, gameOver: false };

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function newRound() {
    state.questions = shuffle(questionPool).slice(0, Math.min(questionCount, questionPool.length));
    state.index = 0;
    state.rankIndex = 0;
    state.selectedChoice = null;
    state.locked = false;
    state.revealed = false;
    state.gameOver = false;
  }

  function clampRank(index) {
    return Math.max(0, Math.min(ranks.length - 1, index));
  }

  function updateRank() {
    els.rankLabel.textContent = ranks[state.rankIndex];
    els.rankLadder.innerHTML = "";
    ranks.forEach((rank, index) => {
      const item = document.createElement("li");
      item.textContent = rank;
      if (index < state.rankIndex) item.classList.add("passed");
      if (index === state.rankIndex) item.classList.add("current");
      els.rankLadder.appendChild(item);
    });
  }

  function makeImageChoice(choice, choiceIndex) {
    const letter = String.fromCharCode(65 + choiceIndex);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `choice-button choice-${letter.toLowerCase()} has-image`;
    button.setAttribute("aria-label", `選択肢${letter}の人物画像`);

    const imageWrap = document.createElement("span");
    imageWrap.className = "choice-image-wrap";

    const image = document.createElement("img");
    image.className = "choice-image";
    image.src = choice.image;
    image.alt = "";
    image.loading = "eager";
    image.decoding = "async";
    image.referrerPolicy = "no-referrer";

    const fallback = document.createElement("span");
    fallback.className = "choice-image-fallback";
    fallback.textContent = "画像を読み込めません";
    fallback.hidden = true;

    image.addEventListener("error", () => {
      image.hidden = true;
      fallback.hidden = false;
    });

    imageWrap.append(image, fallback);

    const letterBadge = document.createElement("span");
    letterBadge.className = "choice-letter";
    letterBadge.textContent = letter;

    const name = document.createElement("span");
    name.className = "choice-name";
    name.textContent = choice.name;

    button.append(imageWrap, letterBadge, name);
    button.addEventListener("click", () => selectChoice(choiceIndex));
    return button;
  }

  function renderQuestion() {
    const question = state.questions[state.index];
    state.selectedChoice = null;
    state.locked = false;
    state.revealed = false;
    state.gameOver = false;

    els.questionNumber.textContent = `第${state.index + 1}問 / ${state.questions.length}`;
    els.prompt.textContent = question.prompt;
    els.choices.innerHTML = "";
    els.choices.className = "choices image-choices";
    els.answerBreakdown.innerHTML = "";
    els.answerBreakdown.hidden = true;
    els.feedback.textContent = "";
    els.feedback.className = "feedback";
    els.nextButton.hidden = true;
    els.nextButton.classList.remove("game-over-button");

    question.choices.forEach((choice, choiceIndex) => {
      els.choices.appendChild(makeImageChoice(choice, choiceIndex));
    });

    updateRank();
  }

  function renderAnswerBreakdown(question) {
    els.answerBreakdown.innerHTML = "";

    question.choices.forEach((choice, choiceIndex) => {
      const letter = String.fromCharCode(65 + choiceIndex);
      const role = choiceIndex === question.answer ? "正解" : choiceIndex === question.absoluteWrong ? "絶対アカン" : "誤答";
      const row = document.createElement("div");
      row.className = `answer-detail choice-${letter.toLowerCase()} role-${role === "正解" ? "correct" : role === "絶対アカン" ? "absolute" : "wrong"}`;

      const copy = document.createElement("span");
      copy.className = "answer-copy";

      const label = document.createElement("span");
      label.className = "answer-choice";
      label.textContent = `${letter}＝${choice.name}`;

      const note = document.createElement("small");
      note.className = "answer-note";
      note.textContent = choice.note;

      const source = document.createElement("a");
      source.className = "answer-source";
      source.href = choice.sourcePage;
      source.target = "_blank";
      source.rel = "noopener noreferrer";
      source.textContent = `画像出典：${choice.credit} / ${choice.license}`;

      const roleLabel = document.createElement("strong");
      roleLabel.textContent = role;

      copy.append(label, note, source);
      row.append(copy, roleLabel);
      els.answerBreakdown.appendChild(row);
    });

    els.answerBreakdown.hidden = false;
  }

  function selectChoice(choiceIndex) {
    if (state.locked) return;
    state.locked = true;
    state.selectedChoice = choiceIndex;

    if (typeof audio.startBgm === "function") audio.startBgm();
    if (typeof audio.playSelect === "function") audio.playSelect();

    const buttons = [...els.choices.querySelectorAll(".choice-button")];
    buttons.forEach((button) => { button.disabled = true; });
    buttons[choiceIndex].classList.add("selected");

    els.feedback.textContent = "選択しました。結果発表を押してください。";
    els.feedback.className = "feedback selected-feedback";
    els.nextButton.textContent = "結果発表";
    els.nextButton.hidden = false;
  }

  function revealAnswer() {
    if (!state.locked || state.revealed || state.selectedChoice === null) return;

    state.revealed = true;
    const question = state.questions[state.index];
    const buttons = [...els.choices.querySelectorAll(".choice-button")];
    const selected = buttons[state.selectedChoice];

    selected.classList.remove("selected");
    els.choices.classList.add("revealed");

    buttons.forEach((button, index) => {
      const letter = String.fromCharCode(65 + index);
      button.setAttribute("aria-label", `選択肢${letter}、${question.choices[index].name}`);
    });

    if (state.selectedChoice === question.answer) {
      selected.classList.add("correct");
      els.feedback.textContent = `正解！ ${question.explanation}`;
      els.feedback.className = "feedback correct-feedback";
      if (typeof audio.playCorrect === "function") audio.playCorrect();
    } else if (state.selectedChoice === question.absoluteWrong) {
      state.rankIndex = clampRank(state.rankIndex + 3);
      selected.classList.add("absolute-wrong");
      els.feedback.textContent = `絶対アカン！ 3ランクダウン。${question.explanation}`;
      els.feedback.className = "feedback absolute-feedback";
      if (typeof audio.playAbsoluteWrong === "function") audio.playAbsoluteWrong();
    } else {
      state.rankIndex = clampRank(state.rankIndex + 1);
      selected.classList.add("wrong");
      els.feedback.textContent = `不正解。1ランクダウン。${question.explanation}`;
      els.feedback.className = "feedback wrong-feedback";
      if (typeof audio.playWrong === "function") audio.playWrong();
    }

    buttons[question.answer].classList.add("answer");
    renderAnswerBreakdown(question);
    updateRank();

    if (state.rankIndex === ranks.length - 1) {
      state.gameOver = true;
      els.feedback.textContent += " 映す価値なし。ゲームオーバー。";
      els.nextButton.textContent = "GAME OVER";
      els.nextButton.classList.add("game-over-button");
    } else {
      els.nextButton.textContent = state.index === state.questions.length - 1 ? "最終結果を見る" : "次の問題";
    }
  }

  function showResult(gameOver) {
    if (typeof audio.stopBgm === "function") audio.stopBgm();
    if (typeof audio.playFinish === "function") audio.playFinish(gameOver);

    els.gamePanel.hidden = true;
    els.resultPanel.hidden = false;
    els.resultPanel.classList.toggle("game-over", gameOver);
    els.resultRank.textContent = ranks[state.rankIndex];

    if (gameOver) {
      els.resultLabel.textContent = "GAME OVER";
      els.resultCopy.textContent = config.gameOverCopy || "映す価値なしになったため、ここで終了です。";
    } else {
      els.resultLabel.textContent = "最終結果";
      els.resultCopy.textContent = config.resultCopy || `${state.questions.length}問の格付けチェックが終了しました。`;
    }
  }

  els.nextButton.addEventListener("click", () => {
    if (!state.locked) return;
    if (!state.revealed) { revealAnswer(); return; }
    if (state.gameOver) { showResult(true); return; }
    if (state.index >= state.questions.length - 1) { showResult(false); return; }
    state.index += 1;
    renderQuestion();
  });

  els.restartButton.addEventListener("click", () => {
    if (typeof audio.stopBgm === "function") audio.stopBgm();
    newRound();
    els.resultPanel.hidden = true;
    els.resultPanel.classList.remove("game-over");
    els.gamePanel.hidden = false;
    renderQuestion();
  });

  if (questionPool.length === 0) {
    els.prompt.textContent = "問題データを読み込めませんでした。";
    els.choices.innerHTML = "";
    return;
  }

  newRound();
  renderQuestion();
})();
