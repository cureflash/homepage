import { JAPAN_PREFECTURE_MAP } from "../data/japan-prefecture-map.js";
import { JAPAN_PREFECTURES, PREFECTURE_CURRICULUM_SOURCE } from "../data/japan-prefectures.js";

export const prefectureGame = {
  id: "japan-prefectures",
  title: "都道府県当て",
  description: "表示された都道府県を日本地図から選んでください。",
  instruction: "この都道府県はどこ？",
  shuffle: true,
  advanceDelay: 800,
  curriculum: {
    stage: "junior-high",
    subject: "geography",
    topic: "日本の地域構成",
    source: PREFECTURE_CURRICULUM_SOURCE
  },
  renderer: {
    type: "svg-region",
    source: JAPAN_PREFECTURE_MAP.rawUrl,
    regionSelector: JAPAN_PREFECTURE_MAP.regionSelector,
    keyAttribute: JAPAN_PREFECTURE_MAP.keyAttribute
  },
  questions: JAPAN_PREFECTURES.map(({ code, name }) => ({
    id: `pref-${String(code).padStart(2, "0")}`,
    prompt: name,
    answer: code,
    answerLabel: name
  }))
};
