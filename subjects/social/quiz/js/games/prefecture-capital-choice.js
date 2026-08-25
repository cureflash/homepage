import {
  JAPAN_PREFECTURES,
  PREFECTURAL_CAPITAL_SOURCE,
  PREFECTURE_CURRICULUM_SOURCE
} from "../data/japan-prefectures.js";
import { PREFECTURE_CAPITAL_OPTION_CODES } from "../data/prefecture-capital-options.js";

const prefecturesByCode = new Map(JAPAN_PREFECTURES.map((item) => [item.code, item]));

export const prefectureCapitalChoiceGame = {
  id: "japan-prefecture-capital-choice",
  title: "県庁所在地5択",
  description: "表示された都道府県の県庁所在地を5つの候補から選んでください。",
  instruction: "この都道府県の県庁所在地は？",
  shuffle: true,
  advanceDelay: 800,
  source: PREFECTURAL_CAPITAL_SOURCE,
  curriculum: {
    stage: "junior-high",
    subject: "geography",
    topic: "日本の地域構成",
    source: PREFECTURE_CURRICULUM_SOURCE
  },
  renderer: { type: "choice" },
  questions: JAPAN_PREFECTURES.map(({ code, name, capital }) => ({
    id: `pref-to-capital-${code.padStart(2, "0")}`,
    prompt: name,
    answer: code,
    answerLabel: capital,
    options: PREFECTURE_CAPITAL_OPTION_CODES[code].map((optionCode) => ({
      key: optionCode,
      label: prefecturesByCode.get(optionCode).capital
    }))
  }))
};
