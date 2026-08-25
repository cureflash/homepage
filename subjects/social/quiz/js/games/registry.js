import { assertValidGameDefinition } from "../core/game-validator.js";
import { prefectureCapitalChoiceGame } from "./prefecture-capital-choice.js";
import { prefecturalCapitalGame } from "./prefectural-capitals.js";
import { prefectureGame } from "./prefectures.js";

const registeredGames = [
  prefectureGame,
  prefecturalCapitalGame,
  prefectureCapitalChoiceGame
].map((game) => assertValidGameDefinition(game));
const gamesById = new Map();

for (const game of registeredGames) {
  if (gamesById.has(game.id)) {
    throw new Error(`Duplicate registered game id: ${game.id}`);
  }
  gamesById.set(game.id, game);
}

export const defaultGameId = prefectureGame.id;

export function listGames() {
  return [...registeredGames];
}

export function getGame(gameId = defaultGameId) {
  return gamesById.get(gameId) ?? null;
}

export function requireGame(gameId = defaultGameId) {
  const game = getGame(gameId);
  if (!game) throw new Error(`Unknown game id: ${gameId}`);
  return game;
}
