import { JAPAN_PREFECTURE_MAP } from "../data/japan-prefecture-map.js";
import {
  JAPAN_PREFECTURES,
  PREFECTURAL_CAPITAL_SOURCE,
  PREFECTURE_CURRICULUM_SOURCE
} from "../data/japan-prefectures.js";

export const prefecturalCapitalGame = {
  id: "japan-prefectural-capitals",
  title: "県庁所在地当て",
  description: "表示された都道府県庁所在地がある都道府県を、日本地図から選んでください。",
  instruction: "この都道府県庁所在地があるのはどこ？",
  shuffle: true,
  advanceDelay: 800,
  source: PREFECTURAL_CAPITAL_SOURCE,
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
  questions: JAPAN_PREFECTURES.map(({ code, name, capital }) => ({
    id: `capital-to-pref-${String(code).padStart(2, "0")}`,
    prompt: capital,
    answer: code,
    answerLabel: name
  }))
};
