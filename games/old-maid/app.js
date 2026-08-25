import { ODD_PREFECTURES, OLD_MAID_CONFIG, PREFECTURE_CAPITAL_PAIRS } from "./cards.js?v=3";

const handEl = document.querySelector("#hand");
const selectedEl = document.querySelector("#selected-cards");
const discardButton = document.querySelector("#discard-button");
const restartButton = document.querySelector("#restart-button");
const messageEl = document.querySelector("#game-message");
const pairsEl = document.querySelector("#pairs-discarded");

let selectedCards = [];
let discardedPairs = 0;
let gameActive = true;

function shuffle(items) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function buildHand() {
  const pairs = shuffle(PREFECTURE_CAPITAL_PAIRS).slice(0, OLD_MAID_CONFIG.pairCount);
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

  return shuffle([...pairedCards, oddCard]);
}

function updateDiscardButton() {
  discardButton.disabled = !gameActive || selectedCards.length !== 2;
}

function moveToSelected(cardEl) {
  if (!gameActive || selectedCards.length >= 2 || cardEl.dataset.zone === "selected") return;

  cardEl.dataset.zone = "selected";
  cardEl.classList.add("is-selected");
  cardEl.setAttribute("aria-pressed", "true");
  selectedCards.push(cardEl);
  selectedEl.append(cardEl);

  messageEl.textContent = selectedCards.length === 2
    ? "2枚選びました。ペアだと思ったら「捨てる」を押してください。"
    : "もう1枚選んでください。";
  updateDiscardButton();
}

function moveToHand(cardEl) {
  if (!gameActive || cardEl.dataset.zone !== "selected") return;

  cardEl.dataset.zone = "hand";
  cardEl.classList.remove("is-selected");
  cardEl.setAttribute("aria-pressed", "false");
  selectedCards = selectedCards.filter((item) => item !== cardEl);
  handEl.append(cardEl);
  messageEl.textContent = "カードをタッチして2枚選んでください。";
  updateDiscardButton();
}

function handleCardTouch(cardEl) {
  if (!gameActive) return;

  if (cardEl.dataset.zone === "selected") {
    moveToHand(cardEl);
  } else {
    moveToSelected(cardEl);
  }
}

function createCard(card) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "playing-card";
  button.dataset.pairId = card.pairId;
  button.dataset.odd = String(card.odd);
  button.dataset.zone = "hand";
  button.setAttribute("aria-label", card.label);
  button.setAttribute("aria-pressed", "false");
  button.textContent = card.label;
  button.addEventListener("click", () => handleCardTouch(button));
  return button;
}

function finishGameIfComplete() {
  const remaining = [...handEl.children, ...selectedEl.children];
  if (remaining.length === 1 && remaining[0].dataset.odd === "true") {
    gameActive = false;
    remaining[0].disabled = true;
    discardButton.disabled = true;
    messageEl.textContent = `クリア！ 「${remaining[0].textContent}」がババでした。`;
  }
}

function discardSelectedPair() {
  if (!gameActive || selectedCards.length !== 2) return;

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
    messageEl.textContent = "ゲームオーバー。正しい都道府県と県庁所在地のペアではありません。";
    return;
  }

  first.remove();
  second.remove();
  selectedCards = [];
  discardedPairs += 1;
  pairsEl.textContent = String(discardedPairs);
  messageEl.textContent = "正解。ペアを捨てました。次の2枚を選んでください。";
  updateDiscardButton();
  finishGameIfComplete();
}

function renderGame() {
  const cards = buildHand();
  selectedCards = [];
  discardedPairs = 0;
  gameActive = true;

  pairsEl.textContent = "0";
  messageEl.textContent = "カードをタッチして2枚選んでください。";
  selectedEl.replaceChildren();
  handEl.replaceChildren(...cards.map(createCard));
  updateDiscardButton();
}

discardButton.addEventListener("click", discardSelectedPair);
restartButton.addEventListener("click", renderGame);
renderGame();
