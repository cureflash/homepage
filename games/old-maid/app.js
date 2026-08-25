import { ODD_PREFECTURES, OLD_MAID_CONFIG, PREFECTURE_CAPITAL_PAIRS } from "./cards.js?v=4";
import { AUDIO_CONFIG } from "./audio.js?v=1";

const handEl = document.querySelector("#hand");
const discardButton = document.querySelector("#discard-button");
const restartButton = document.querySelector("#restart-button");
const normalModeButton = document.querySelector("#normal-mode-button");
const hardModeButton = document.querySelector("#hard-mode-button");
const bgmButton = document.querySelector("#bgm-button");
const seButton = document.querySelector("#se-button");
const messageEl = document.querySelector("#game-message");
const pairsEl = document.querySelector("#pairs-discarded");
const totalPairsEl = document.querySelector("#pairs-total");
const modeLabelEl = document.querySelector("#mode-label");

let selectedCards = [];
let discardedPairs = 0;
let gameActive = true;
let gameMode = "normal";
let bgmEnabled = true;
let seEnabled = true;

function makeAudio(src, loop = false) {
  if (!src) return null;
  const audio = new Audio(src);
  audio.loop = loop;
  audio.preload = "none";
  return audio;
}

const audio = {
  bgm: makeAudio(AUDIO_CONFIG.bgm, true),
  select: makeAudio(AUDIO_CONFIG.select),
  correct: makeAudio(AUDIO_CONFIG.correct),
  wrong: makeAudio(AUDIO_CONFIG.wrong),
  clear: makeAudio(AUDIO_CONFIG.clear),
};

function playBgm() {
  if (!bgmEnabled || !audio.bgm) return;
  audio.bgm.play().catch(() => {});
}

function stopBgm() {
  if (!audio.bgm) return;
  audio.bgm.pause();
}

function playSe(name) {
  if (!seEnabled) return;
  const sound = audio[name];
  if (!sound) return;
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

function updateAudioButtons() {
  bgmButton.textContent = `BGM: ${bgmEnabled ? "ON" : "OFF"}`;
  bgmButton.setAttribute("aria-pressed", String(bgmEnabled));
  seButton.textContent = `SE: ${seEnabled ? "ON" : "OFF"}`;
  seButton.setAttribute("aria-pressed", String(seEnabled));
}

function shuffle(items) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getPairsForMode() {
  if (gameMode === "hard") {
    return shuffle(PREFECTURE_CAPITAL_PAIRS);
  }
  return shuffle(PREFECTURE_CAPITAL_PAIRS).slice(0, OLD_MAID_CONFIG.normalPairCount);
}

function buildHand() {
  const pairs = getPairsForMode();
  const pairedCards = pairs.flatMap((pair) => [
    {
      id: `${pair.id}-prefecture`,
      pairId: pair.id,
      label: pair.prefecture,
      odd: false,
    },
    {
      id: `${pair.id}-capital`,
      pairId: pair.id,
      label: pair.capital,
      odd: false,
    },
  ]);

  const oddPrefecture = shuffle(ODD_PREFECTURES)[0];
  const oddCard = {
    id: "odd-prefecture",
    pairId: "odd",
    label: oddPrefecture,
    odd: true,
  };

  return {
    cards: shuffle([...pairedCards, oddCard]),
    pairCount: pairs.length,
  };
}

function displayLabel(label) {
  if (label === "北海道") return label;
  return label.replace(/[都府県市区]$/, "");
}

function updateDiscardButton() {
  discardButton.disabled = !gameActive || selectedCards.length !== 2;
}

function selectCard(cardEl) {
  if (!gameActive || cardEl.classList.contains("is-discarded") || selectedCards.length >= 2 || cardEl.classList.contains("is-selected")) return;

  cardEl.classList.add("is-selected");
  cardEl.setAttribute("aria-pressed", "true");
  selectedCards.push(cardEl);
  playSe("select");

  messageEl.textContent = selectedCards.length === 2
    ? "2枚選びました。ペアだと思ったら「捨てる」を押してください。"
    : "もう1枚選んでください。";
  updateDiscardButton();
}

function unselectCard(cardEl) {
  if (!gameActive || !cardEl.classList.contains("is-selected")) return;

  cardEl.classList.remove("is-selected");
  cardEl.setAttribute("aria-pressed", "false");
  selectedCards = selectedCards.filter((item) => item !== cardEl);
  playSe("select");
  messageEl.textContent = "カードをタッチして2枚選んでください。";
  updateDiscardButton();
}

function handleCardTouch(cardEl) {
  if (!gameActive || cardEl.classList.contains("is-discarded")) return;
  playBgm();

  if (cardEl.classList.contains("is-selected")) {
    unselectCard(cardEl);
  } else {
    selectCard(cardEl);
  }
}

function createCard(card) {
  const button = document.createElement("button");
  const label = displayLabel(card.label);
  button.type = "button";
  button.className = "playing-card";
  button.dataset.pairId = card.pairId;
  button.dataset.odd = String(card.odd);
  button.setAttribute("aria-label", label);
  button.setAttribute("aria-pressed", "false");
  button.textContent = label;
  button.addEventListener("click", () => handleCardTouch(button));
  return button;
}

function finishGameIfComplete() {
  const remaining = [...handEl.querySelectorAll(".playing-card:not(.is-discarded)")];
  if (remaining.length === 1 && remaining[0].dataset.odd === "true") {
    gameActive = false;
    remaining[0].disabled = true;
    discardButton.disabled = true;
    playSe("clear");
    messageEl.textContent = `クリア！ 「${remaining[0].textContent}」がババでした。`;
  }
}

function discardSelectedPair() {
  if (!gameActive || selectedCards.length !== 2) return;
  playBgm();

  const [first, second] = selectedCards;
  const isPair = first.dataset.odd === "false"
    && second.dataset.odd === "false"
    && first.dataset.pairId === second.dataset.pairId;

  if (!isPair) {
    gameActive = false;
    discardButton.disabled = true;
    document.querySelectorAll(".playing-card").forEach((card) => {
      card.disabled = true;
    });
    playSe("wrong");
    messageEl.textContent = "ゲームオーバー。正しい都道府県と県庁所在地のペアではありません。";
    return;
  }

  if (gameMode === "hard") {
    [first, second].forEach((card) => {
      card.classList.remove("is-selected");
      card.classList.add("is-discarded");
      card.setAttribute("aria-pressed", "false");
      card.disabled = true;
    });
  } else {
    first.remove();
    second.remove();
  }

  selectedCards = [];
  discardedPairs += 1;
  pairsEl.textContent = String(discardedPairs);
  playSe("correct");
  messageEl.textContent = "正解。ペアを捨てました。次の2枚を選んでください。";
  updateDiscardButton();
  finishGameIfComplete();
}

function updateModeButtons() {
  const hard = gameMode === "hard";
  normalModeButton.setAttribute("aria-pressed", String(!hard));
  hardModeButton.setAttribute("aria-pressed", String(hard));
  normalModeButton.classList.toggle("is-active", !hard);
  hardModeButton.classList.toggle("is-active", hard);
  handEl.classList.toggle("hard-mode", hard);
  modeLabelEl.textContent = hard ? "ハード" : "通常";
}

function renderGame() {
  const { cards, pairCount } = buildHand();
  selectedCards = [];
  discardedPairs = 0;
  gameActive = true;

  pairsEl.textContent = "0";
  totalPairsEl.textContent = String(pairCount);
  messageEl.textContent = "カードをタッチして2枚選んでください。";
  handEl.replaceChildren(...cards.map(createCard));
  updateModeButtons();
  updateDiscardButton();
}

discardButton.addEventListener("click", discardSelectedPair);
restartButton.addEventListener("click", () => {
  playBgm();
  playSe("select");
  renderGame();
});
normalModeButton.addEventListener("click", () => {
  if (gameMode === "normal") return;
  gameMode = "normal";
  playBgm();
  playSe("select");
  renderGame();
});
hardModeButton.addEventListener("click", () => {
  if (gameMode === "hard") return;
  gameMode = "hard";
  playBgm();
  playSe("select");
  renderGame();
});
bgmButton.addEventListener("click", () => {
  bgmEnabled = !bgmEnabled;
  if (bgmEnabled) {
    playBgm();
  } else {
    stopBgm();
  }
  updateAudioButtons();
});
seButton.addEventListener("click", () => {
  seEnabled = !seEnabled;
  updateAudioButtons();
  if (seEnabled) playSe("select");
});

updateAudioButtons();
renderGame();
