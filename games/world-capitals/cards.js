export const WORLD_CAPITAL_CONFIG = {
  normalPairCount: 4,
};

// 各地域の主要国から30か国を収録。
// 首都移転中、複数首都など判定が揺れやすい国は除外する。
export const COUNTRY_CAPITAL_PAIRS = [
  { id: "japan", region: "東アジア", country: "日本", capital: "東京" },
  { id: "china", region: "東アジア", country: "中国", capital: "北京" },
  { id: "south-korea", region: "東アジア", country: "韓国", capital: "ソウル" },
  { id: "india", region: "南アジア", country: "インド", capital: "ニューデリー" },
  { id: "thailand", region: "東南アジア", country: "タイ", capital: "バンコク" },
  { id: "vietnam", region: "東南アジア", country: "ベトナム", capital: "ハノイ" },
  { id: "philippines", region: "東南アジア", country: "フィリピン", capital: "マニラ" },
  { id: "saudi-arabia", region: "中東", country: "サウジアラビア", capital: "リヤド" },
  { id: "turkey", region: "中東", country: "トルコ", capital: "アンカラ" },

  { id: "united-kingdom", region: "ヨーロッパ", country: "イギリス", capital: "ロンドン" },
  { id: "france", region: "ヨーロッパ", country: "フランス", capital: "パリ" },
  { id: "germany", region: "ヨーロッパ", country: "ドイツ", capital: "ベルリン" },
  { id: "italy", region: "ヨーロッパ", country: "イタリア", capital: "ローマ" },
  { id: "spain", region: "ヨーロッパ", country: "スペイン", capital: "マドリード" },
  { id: "russia", region: "ヨーロッパ", country: "ロシア", capital: "モスクワ" },
  { id: "poland", region: "ヨーロッパ", country: "ポーランド", capital: "ワルシャワ" },

  { id: "egypt", region: "アフリカ", country: "エジプト", capital: "カイロ" },
  { id: "nigeria", region: "アフリカ", country: "ナイジェリア", capital: "アブジャ" },
  { id: "kenya", region: "アフリカ", country: "ケニア", capital: "ナイロビ" },
  { id: "ethiopia", region: "アフリカ", country: "エチオピア", capital: "アディスアベバ" },
  { id: "morocco", region: "アフリカ", country: "モロッコ", capital: "ラバト" },

  { id: "united-states", region: "北アメリカ", country: "アメリカ", capital: "ワシントンD.C." },
  { id: "canada", region: "北アメリカ", country: "カナダ", capital: "オタワ" },
  { id: "mexico", region: "北アメリカ", country: "メキシコ", capital: "メキシコシティ" },

  { id: "brazil", region: "南アメリカ", country: "ブラジル", capital: "ブラジリア" },
  { id: "argentina", region: "南アメリカ", country: "アルゼンチン", capital: "ブエノスアイレス" },
  { id: "chile", region: "南アメリカ", country: "チリ", capital: "サンティアゴ" },
  { id: "peru", region: "南アメリカ", country: "ペルー", capital: "リマ" },

  { id: "australia", region: "オセアニア", country: "オーストラリア", capital: "キャンベラ" },
  { id: "new-zealand", region: "オセアニア", country: "ニュージーランド", capital: "ウェリントン" },
];

// ババとして混ぜる、正解ペアには含まれない国名。
export const ODD_COUNTRIES = [
  "スウェーデン",
  "ノルウェー",
  "ポルトガル",
  "ギリシャ",
  "スイス",
  "オーストリア",
  "キューバ",
  "コロンビア",
  "パキスタン",
  "マレーシア",
  "モンゴル",
  "ネパール",
  "ガーナ",
  "タンザニア",
  "アルジェリア",
  "チュニジア",
];
