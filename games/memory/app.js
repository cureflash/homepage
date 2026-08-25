import { MEMORY_GAME_CONFIG, TRUMP_PAIRS } from "./cards.js";

const board = document.querySelector("#memory-board");
const movesEl = document.querySelector("#moves");
const pairsEl = document.querySelector("#pairs-found");
const totalPairsEl = document.querySelector("#total-pairs");
const messageEl = document.querySelector("#game-message");
const restartButton = document.querySelector("#restart-button");

let firstCard = null;
let secondCard = null;
let boardLocked = false;
let moves = 0;
let matchedPairs = 0;

function shuffle(items) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function buildDeck() {
  const pairCount = Math.min(MEMORY_GAME_CONFIG.pairCount, TRUMP_PAIRS.length);
  const selectedPairs = shuffle(TRUMP_PAIRS).slice(0, pairCount);

  return shuffle(
    selectedPairs.flatMap((pair) =>
      pair.cards.map((card, index) => ({
        ...card,
        pairId: pair.id,
        cardId: `${pair.id}-${index}`,
      })),
    ),
  );
}

function suitClass(suit) {
  return suit === "♥" || suit === "♦" ? "card-red" : "card-black";
}

function resetTurn() {
  firstCard = null;
  secondCard = null;
  boardLocked = false;
}

function finishIfComplete() {
  if (matchedPairs !== Number(totalPairsEl.textContent)) return;
  messageEl.textContent = `${moves}手でクリア！`;
}

function handleCardClick(button) {
  if (boardLocked || button === firstCard || button.dataset.matched === "true") return;

  button.classList.add("is-open");
  button.setAttribute("aria-pressed", "true");

  if (!firstCard) {
    firstCard = button;
    return;
  }

  secondCard = button;
  moves += 1;
  movesEl.textContent = String(moves);

  if (firstCard.dataset.pairId === secondCard.dataset.pairId) {
    firstCard.dataset.matched = "true";
    secondCard.dataset.matched = "true";
    firstCard.classList.add("is-matched");
    secondCard.classList.add("is-matched");
    firstCard.disabled = true;
    secondCard.disabled = true;
    matchedPairs += 1;
    pairsEl.textContent = String(matchedPairs);
    resetTurn();
    finishIfComplete();
    return;
  }

  boardLocked = true;
  window.setTimeout(() => {
    firstCard.classList.remove("is-open");
    secondCard.classList.remove("is-open");
    firstCard.setAttribute("aria-pressed", "false");
    secondCard.setAttribute("aria-pressed", "false");
    resetTurn();
  }, 700);
}

function createCard(card) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "memory-card";
  button.dataset.pairId = card.pairId;
  button.dataset.matched = "false";
  button.setAttribute("aria-label", "伏せられたカード");
  button.setAttribute("aria-pressed", "false");

  const back = document.createElement("span");
  back.className = "card-face card-back";
  back.setAttribute("aria-hidden", "true");
  back.textContent = "★";

  const front = document.createElement("span");
  front.className = `card-face card-front ${suitClass(card.suit)}`;
  front.setAttribute("aria-hidden", "true");
  front.innerHTML = `<span class="card-rank">${card.rank}</span><span class="card-suit">${card.suit}</span>`;

  button.append(back, front);
  button.addEventListener("click", () => handleCardClick(button));
  button.addEventListener("focus", () => {
    if (button.classList.contains("is-open") || button.dataset.matched === "true") {
      button.setAttribute("aria-label", `${card.rank}${card.suit}`);
    } else {
      button.setAttribute("aria-label", "伏せられたカード");
    }
  });

  return button;
}

function renderGame() {
  const deck = buildDeck();
  moves = 0;
  matchedPairs = 0;
  resetTurn();

  movesEl.textContent = "0";
  pairsEl.textContent = "0";
  totalPairsEl.textContent = String(deck.length / 2);
  messageEl.textContent = "同じ数字のカードを2枚そろえよう。";
  board.replaceChildren(...deck.map(createCard));

  const columns = deck.length <= 16 ? 4 : deck.length <= 24 ? 6 : 7;
  board.style.setProperty("--memory-columns", String(columns));
}

restartButton.addEventListener("click", renderGame);
renderGame();
