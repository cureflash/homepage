import { JOKER, OLD_MAID_CONFIG, RANKS, SUITS } from "./cards.js?v=2";

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
  const ranks = shuffle(RANKS).slice(0, OLD_MAID_CONFIG.pairCount);
  const cards = ranks.flatMap((rank) => {
    const suits = shuffle(SUITS).slice(0, 2);
    return suits.map((suit, index) => ({
      id: `${rank}-${suit}-${index}`,
      rank,
      suit,
      joker: false,
    }));
  });

  return shuffle([...cards, JOKER]);
}

function suitClass(card) {
  if (card.joker) return "card-joker";
  return card.suit === "♥" || card.suit === "♦" ? "card-red" : "card-black";
}

function updateDiscardButton() {
  discardButton.disabled = !gameActive || selectedCards.length !== 2;
}

function moveToSelected(cardEl) {
  if (!gameActive || selectedCards.length >= 2 || cardEl.dataset.zone === "selected") return;
  cardEl.dataset.zone = "selected";
  cardEl.classList.add("is-selected");
  selectedCards.push(cardEl);
  selectedEl.append(cardEl);
  messageEl.textContent = selectedCards.length === 2 ? "2枚選びました。そろっていると思ったら「捨てる」を押してください。" : "もう1枚選んでください。";
  updateDiscardButton();
}

function moveToHand(cardEl) {
  if (!gameActive || cardEl.dataset.zone !== "selected") return;
  cardEl.dataset.zone = "hand";
  cardEl.classList.remove("is-selected");
  selectedCards = selectedCards.filter((item) => item !== cardEl);
  handEl.append(cardEl);
  messageEl.textContent = "上にスワイプして2枚選んでください。";
  updateDiscardButton();
}

function attachSwipe(cardEl) {
  let startY = null;

  cardEl.addEventListener("pointerdown", (event) => {
    if (!gameActive) return;
    startY = event.clientY;
    cardEl.setPointerCapture?.(event.pointerId);
  });

  cardEl.addEventListener("pointerup", (event) => {
    if (startY === null || !gameActive) return;
    const deltaY = event.clientY - startY;
    startY = null;

    if (deltaY <= -OLD_MAID_CONFIG.swipeThreshold) {
      moveToSelected(cardEl);
    } else if (deltaY >= OLD_MAID_CONFIG.swipeThreshold) {
      moveToHand(cardEl);
    }
  });

  cardEl.addEventListener("pointercancel", () => {
    startY = null;
  });
}

function createCard(card) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `playing-card ${suitClass(card)}`;
  button.dataset.rank = card.rank;
  button.dataset.joker = String(card.joker);
  button.dataset.zone = "hand";
  button.setAttribute("aria-label", card.joker ? "ジョーカー" : `${card.rank}${card.suit}`);

  if (card.joker) {
    button.innerHTML = '<span class="joker-star">★</span><span class="joker-label">JOKER</span>';
  } else {
    button.innerHTML = `<span class="card-corner"><span>${card.rank}</span><span>${card.suit}</span></span><span class="card-center">${card.suit}</span>`;
  }

  attachSwipe(button);
  return button;
}

function finishGameIfComplete() {
  const remaining = [...handEl.children, ...selectedEl.children];
  if (remaining.length === 1 && remaining[0].dataset.joker === "true") {
    gameActive = false;
    remaining[0].disabled = true;
    discardButton.disabled = true;
    messageEl.textContent = "クリア！ ジョーカー1枚だけ残りました。";
  }
}

function discardSelectedPair() {
  if (!gameActive || selectedCards.length !== 2) return;

  const [first, second] = selectedCards;
  const isPair = first.dataset.joker === "false"
    && second.dataset.joker === "false"
    && first.dataset.rank === second.dataset.rank;

  if (!isPair) {
    gameActive = false;
    discardButton.disabled = true;
    document.querySelectorAll(".playing-card").forEach((card) => {
      card.disabled = true;
    });
    messageEl.textContent = "ゲームオーバー。正しいペアではありません。";
    return;
  }

  first.remove();
  second.remove();
  selectedCards = [];
  discardedPairs += 1;
  pairsEl.textContent = String(discardedPairs);
  messageEl.textContent = "ペアを捨てました。次の2枚を選んでください。";
  updateDiscardButton();
  finishGameIfComplete();
}

function renderGame() {
  const cards = buildHand();
  selectedCards = [];
  discardedPairs = 0;
  gameActive = true;

  pairsEl.textContent = "0";
  messageEl.textContent = "上にスワイプして2枚選んでください。";
  selectedEl.replaceChildren();
  handEl.replaceChildren(...cards.map(createCard));
  updateDiscardButton();
}

discardButton.addEventListener("click", discardSelectedPair);
restartButton.addEventListener("click", renderGame);
renderGame();
