export const MEMORY_GAME_CONFIG = {
  pairCount: 8,
};

// 1つの要素が1ペア。pairCountを増やすか、ここへペアを追加すれば枚数を増やせる。
export const TRUMP_PAIRS = [
  { id: "A", cards: [{ rank: "A", suit: "♥" }, { rank: "A", suit: "♠" }] },
  { id: "2", cards: [{ rank: "2", suit: "♦" }, { rank: "2", suit: "♣" }] },
  { id: "3", cards: [{ rank: "3", suit: "♥" }, { rank: "3", suit: "♣" }] },
  { id: "4", cards: [{ rank: "4", suit: "♦" }, { rank: "4", suit: "♠" }] },
  { id: "5", cards: [{ rank: "5", suit: "♥" }, { rank: "5", suit: "♠" }] },
  { id: "6", cards: [{ rank: "6", suit: "♦" }, { rank: "6", suit: "♣" }] },
  { id: "7", cards: [{ rank: "7", suit: "♥" }, { rank: "7", suit: "♣" }] },
  { id: "8", cards: [{ rank: "8", suit: "♦" }, { rank: "8", suit: "♠" }] },
  { id: "9", cards: [{ rank: "9", suit: "♥" }, { rank: "9", suit: "♠" }] },
  { id: "10", cards: [{ rank: "10", suit: "♦" }, { rank: "10", suit: "♣" }] },
  { id: "J", cards: [{ rank: "J", suit: "♥" }, { rank: "J", suit: "♣" }] },
  { id: "Q", cards: [{ rank: "Q", suit: "♦" }, { rank: "Q", suit: "♠" }] },
  { id: "K", cards: [{ rank: "K", suit: "♥" }, { rank: "K", suit: "♠" }] },
];
