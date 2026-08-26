export const WORLD_MAP_SOURCE = {
  package: "svg-world-maps",
  version: "1.0.1",
  sourceRepository: "https://github.com/homayounmmdy/svg-world-maps",
  sourceCommit: "06c2de4a159326e527e38e8506e3b9f2705bdf42",
  mapFile: "src/maps/World.ts",
  softwareLicense: "MIT",
  mapDataSource: "SimpleMaps SVG Map Library",
  mapDataLicense: "SimpleMaps SVG Map Library License",
  mapDataLicenseUrl: "https://simplemaps.com/resources/svg-license",
  note: "svg-world-maps software is MIT; its underlying SVG map paths are SimpleMaps data and follow the SimpleMaps SVG Map Library License."
};

export const WORLD_FACT_SOURCE = {
  title: "（キッズ外務省）世界の国々 基本情報を調べてみよう！",
  publisher: "外務省",
  url: "https://www.mofa.go.jp/mofaj/kids/ichiran/basic.html",
  note: "Japanese country/region naming, flags, and capital-name review source."
};

export const WORLD_NAME_SOURCE = {
  title: "country-list ja_JP",
  publisher: "umpirsky/country-list",
  sourceCommit: "bd490a163ae4709bbe4b54c4f638f24e032828d2",
  license: "MIT",
  url: "https://github.com/umpirsky/country-list/blob/bd490a163ae4709bbe4b54c4f638f24e032828d2/data/ja_JP/country.json"
};

function country(code, name, capital, region, extra = {}) {
  return Object.freeze({ code, name, capital, region, capitalQuiz: capital !== null, ...extra });
}

export function flagEmoji(code) {
  return [...code.toUpperCase()].map((char) => String.fromCodePoint(127397 + char.charCodeAt(0))).join("");
}

export const WORLD_COUNTRIES = Object.freeze([
  // East Asia
  country("CN", "中国", "北京", "east-asia"),
  country("JP", "日本", "東京", "east-asia"),
  country("KP", "北朝鮮", "平壌", "east-asia"),
  country("KR", "韓国", "ソウル", "east-asia"),
  country("MN", "モンゴル", "ウランバートル", "east-asia"),
  country("TW", "台湾", "台北", "east-asia", { statusNote: "国・地域として出題。外交上の国家承認を意味しない。" }),

  // Southeast Asia
  country("BN", "ブルネイ", "バンダルスリブガワン", "southeast-asia"),
  country("KH", "カンボジア", "プノンペン", "southeast-asia"),
  country("ID", "インドネシア", "ジャカルタ", "southeast-asia", { capitalQuiz: false, capitalNote: "首都移転過程のため首都単独問題から除外。" }),
  country("LA", "ラオス", "ビエンチャン", "southeast-asia"),
  country("MY", "マレーシア", "クアラルンプール", "southeast-asia"),
  country("MM", "ミャンマー", "ネピドー", "southeast-asia"),
  country("PH", "フィリピン", "マニラ", "southeast-asia"),
  country("SG", "シンガポール", "シンガポール", "southeast-asia", { marker: [103.8198, 1.3521] }),
  country("TH", "タイ", "バンコク", "southeast-asia"),
  country("TL", "東ティモール", "ディリ", "southeast-asia"),
  country("VN", "ベトナム", "ハノイ", "southeast-asia"),

  // South Asia
  country("BD", "バングラデシュ", "ダッカ", "south-asia"),
  country("BT", "ブータン", "ティンプー", "south-asia"),
  country("IN", "インド", "ニューデリー", "south-asia"),
  country("MV", "モルディブ", "マレ", "south-asia", { marker: [73.2207, 3.2028] }),
  country("NP", "ネパール", "カトマンズ", "south-asia"),
  country("PK", "パキスタン", "イスラマバード", "south-asia"),
  country("LK", "スリランカ", "スリジャヤワルダナプラコッテ", "south-asia"),

  // West / Central Asia
  country("AF", "アフガニスタン", "カブール", "west-central-asia"),
  country("AM", "アルメニア", "エレバン", "west-central-asia"),
  country("AZ", "アゼルバイジャン", "バクー", "west-central-asia"),
  country("BH", "バーレーン", "マナーマ", "west-central-asia", { marker: [50.5577, 26.0667] }),
  country("CY", "キプロス", "ニコシア", "west-central-asia"),
  country("GE", "ジョージア", "トビリシ", "west-central-asia"),
  country("IR", "イラン", "テヘラン", "west-central-asia"),
  country("IQ", "イラク", "バグダッド", "west-central-asia"),
  country("IL", "イスラエル", "エルサレム", "west-central-asia", { capitalQuiz: false, capitalNote: "エルサレムの地位をめぐる外交上の論点があるため首都単独問題から除外。" }),
  country("JO", "ヨルダン", "アンマン", "west-central-asia"),
  country("KZ", "カザフスタン", "アスタナ", "west-central-asia"),
  country("KG", "キルギス", "ビシュケク", "west-central-asia"),
  country("KW", "クウェート", "クウェート", "west-central-asia"),
  country("LB", "レバノン", "ベイルート", "west-central-asia"),
  country("OM", "オマーン", "マスカット", "west-central-asia"),
  country("PS", "パレスチナ", "ラマラ", "west-central-asia", { capitalQuiz: false, statusNote: "国・地域として出題。", capitalNote: "政治的・外交的論点があるため首都単独問題から除外。" }),
  country("QA", "カタール", "ドーハ", "west-central-asia", { marker: [51.1839, 25.3548] }),
  country("SA", "サウジアラビア", "リヤド", "west-central-asia"),
  country("SY", "シリア", "ダマスカス", "west-central-asia"),
  country("TJ", "タジキスタン", "ドゥシャンベ", "west-central-asia"),
  country("TM", "トルクメニスタン", "アシガバート", "west-central-asia"),
  country("TR", "トルコ", "アンカラ", "west-central-asia"),
  country("AE", "アラブ首長国連邦", "アブダビ", "west-central-asia"),
  country("UZ", "ウズベキスタン", "タシケント", "west-central-asia"),
  country("YE", "イエメン", "サヌア", "west-central-asia", { capitalQuiz: false, capitalNote: "内戦下の統治拠点の問題があるため首都単独問題から除外。" }),

  // Northern / Western Europe
  country("IS", "アイスランド", "レイキャビク", "north-west-europe"),
  country("IE", "アイルランド", "ダブリン", "north-west-europe"),
  country("GB", "イギリス", "ロンドン", "north-west-europe"),
  country("NO", "ノルウェー", "オスロ", "north-west-europe"),
  country("SE", "スウェーデン", "ストックホルム", "north-west-europe"),
  country("FI", "フィンランド", "ヘルシンキ", "north-west-europe"),
  country("DK", "デンマーク", "コペンハーゲン", "north-west-europe"),
  country("NL", "オランダ", "アムステルダム", "north-west-europe"),
  country("BE", "ベルギー", "ブリュッセル", "north-west-europe"),
  country("LU", "ルクセンブルク", "ルクセンブルク", "north-west-europe", { marker: [6.1296, 49.8153] }),
  country("FR", "フランス", "パリ", "north-west-europe"),
  country("DE", "ドイツ", "ベルリン", "north-west-europe"),
  country("CH", "スイス", "ベルン", "north-west-europe"),
  country("AT", "オーストリア", "ウィーン", "north-west-europe"),
  country("LI", "リヒテンシュタイン", "ファドゥーツ", "north-west-europe", { marker: [9.5554, 47.166] }),
  country("MC", "モナコ", "モナコ", "north-west-europe", { marker: [7.4246, 43.7384] }),
  country("AD", "アンドラ", "アンドラ・ラ・ベリャ", "north-west-europe", { marker: [1.5218, 42.5063] }),

  // Central / Southern Europe
  country("ES", "スペイン", "マドリード", "central-south-europe"),
  country("PT", "ポルトガル", "リスボン", "central-south-europe"),
  country("IT", "イタリア", "ローマ", "central-south-europe"),
  country("MT", "マルタ", "バレッタ", "central-south-europe", { marker: [14.3754, 35.9375] }),
  country("SM", "サンマリノ", "サンマリノ", "central-south-europe", { marker: [12.4578, 43.9424] }),
  country("VA", "バチカン", "バチカン", "central-south-europe", { marker: [12.4534, 41.9029] }),
  country("GR", "ギリシャ", "アテネ", "central-south-europe"),
  country("AL", "アルバニア", "ティラナ", "central-south-europe"),
  country("MK", "北マケドニア", "スコピエ", "central-south-europe"),
  country("ME", "モンテネグロ", "ポドゴリツァ", "central-south-europe"),
  country("RS", "セルビア", "ベオグラード", "central-south-europe"),
  country("BA", "ボスニア・ヘルツェゴビナ", "サラエボ", "central-south-europe"),
  country("HR", "クロアチア", "ザグレブ", "central-south-europe"),
  country("SI", "スロベニア", "リュブリャナ", "central-south-europe"),
  country("CZ", "チェコ", "プラハ", "central-south-europe"),
  country("SK", "スロバキア", "ブラチスラバ", "central-south-europe"),
  country("HU", "ハンガリー", "ブダペスト", "central-south-europe"),
  country("BG", "ブルガリア", "ソフィア", "central-south-europe"),
  country("RO", "ルーマニア", "ブカレスト", "central-south-europe"),
  country("MD", "モルドバ", "キシナウ", "central-south-europe"),

  // Eastern Europe
  country("PL", "ポーランド", "ワルシャワ", "east-europe"),
  country("EE", "エストニア", "タリン", "east-europe"),
  country("LV", "ラトビア", "リガ", "east-europe"),
  country("LT", "リトアニア", "ビリニュス", "east-europe"),
  country("BY", "ベラルーシ", "ミンスク", "east-europe"),
  country("UA", "ウクライナ", "キーウ", "east-europe"),
  country("RU", "ロシア", "モスクワ", "east-europe"),
  country("XK", "コソボ", "プリシュティナ", "east-europe", { statusNote: "日本が承認する国として出題。" }),

  // North Africa
  country("MA", "モロッコ", "ラバト", "north-africa"),
  country("DZ", "アルジェリア", "アルジェ", "north-africa"),
  country("TN", "チュニジア", "チュニス", "north-africa"),
  country("LY", "リビア", "トリポリ", "north-africa"),
  country("EG", "エジプト", "カイロ", "north-africa"),

  // West / Central Africa
  country("MR", "モーリタニア", "ヌアクショット", "west-central-africa"),
  country("ML", "マリ", "バマコ", "west-central-africa"),
  country("SN", "セネガル", "ダカール", "west-central-africa"),
  country("GM", "ガンビア", "バンジュール", "west-central-africa"),
  country("GN", "ギニア", "コナクリ", "west-central-africa"),
  country("GW", "ギニアビサウ", "ビサウ", "west-central-africa"),
  country("SL", "シエラレオネ", "フリータウン", "west-central-africa"),
  country("LR", "リベリア", "モンロビア", "west-central-africa"),
  country("CI", "コートジボワール", "ヤムスクロ", "west-central-africa"),
  country("GH", "ガーナ", "アクラ", "west-central-africa"),
  country("TG", "トーゴ", "ロメ", "west-central-africa"),
  country("BJ", "ベナン", "ポルトノボ", "west-central-africa"),
  country("BF", "ブルキナファソ", "ワガドゥグー", "west-central-africa"),
  country("NE", "ニジェール", "ニアメ", "west-central-africa"),
  country("NG", "ナイジェリア", "アブジャ", "west-central-africa"),
  country("CM", "カメルーン", "ヤウンデ", "west-central-africa"),
  country("CF", "中央アフリカ", "バンギ", "west-central-africa"),
  country("TD", "チャド", "ンジャメナ", "west-central-africa"),
  country("GQ", "赤道ギニア", "マラボ", "west-central-africa"),
  country("GA", "ガボン", "リーブルビル", "west-central-africa"),
  country("CG", "コンゴ共和国", "ブラザビル", "west-central-africa"),
  country("CD", "コンゴ民主共和国", "キンシャサ", "west-central-africa"),
  country("AO", "アンゴラ", "ルアンダ", "west-central-africa"),
  country("CV", "カーボベルデ", "プライア", "west-central-africa", { marker: [-23.6052, 15.1201] }),
  country("ST", "サントメ・プリンシペ", "サントメ", "west-central-africa", { marker: [6.6131, 0.1864] }),

  // East / Southern Africa
  country("SD", "スーダン", "ハルツーム", "east-south-africa", { capitalQuiz: false, capitalNote: "武力衝突下の政府機能移転を考慮し首都単独問題から除外。" }),
  country("SS", "南スーダン", "ジュバ", "east-south-africa"),
  country("ER", "エリトリア", "アスマラ", "east-south-africa"),
  country("ET", "エチオピア", "アディスアベバ", "east-south-africa"),
  country("DJ", "ジブチ", "ジブチ", "east-south-africa"),
  country("SO", "ソマリア", "モガディシュ", "east-south-africa"),
  country("KE", "ケニア", "ナイロビ", "east-south-africa"),
  country("UG", "ウガンダ", "カンパラ", "east-south-africa"),
  country("RW", "ルワンダ", "キガリ", "east-south-africa"),
  country("BI", "ブルンジ", "ギテガ", "east-south-africa"),
  country("TZ", "タンザニア", "ドドマ", "east-south-africa"),
  country("MW", "マラウイ", "リロングウェ", "east-south-africa"),
  country("MZ", "モザンビーク", "マプト", "east-south-africa"),
  country("ZM", "ザンビア", "ルサカ", "east-south-africa"),
  country("ZW", "ジンバブエ", "ハラレ", "east-south-africa"),
  country("BW", "ボツワナ", "ハボローネ", "east-south-africa"),
  country("NA", "ナミビア", "ウィントフック", "east-south-africa"),
  country("ZA", "南アフリカ", "プレトリア", "east-south-africa", { capitalQuiz: false, capitalNote: "行政・立法・司法の首都が分かれるため首都単独問題から除外。" }),
  country("LS", "レソト", "マセル", "east-south-africa"),
  country("SZ", "エスワティニ", "ムババーネ", "east-south-africa", { capitalQuiz: false, capitalNote: "行政・王宮／立法の中心が分かれるため首都単独問題から除外。" }),
  country("MG", "マダガスカル", "アンタナナリボ", "east-south-africa"),
  country("KM", "コモロ", "モロニ", "east-south-africa", { marker: [43.3333, -11.6455] }),
  country("MU", "モーリシャス", "ポートルイス", "east-south-africa", { marker: [57.5522, -20.3484] }),
  country("SC", "セーシェル", "ビクトリア", "east-south-africa", { marker: [55.492, -4.6796] }),

  // North / Central America
  country("CA", "カナダ", "オタワ", "north-central-america"),
  country("US", "アメリカ合衆国", "ワシントンD.C.", "north-central-america"),
  country("MX", "メキシコ", "メキシコシティ", "north-central-america"),
  country("GT", "グアテマラ", "グアテマラシティ", "north-central-america"),
  country("BZ", "ベリーズ", "ベルモパン", "north-central-america"),
  country("HN", "ホンジュラス", "テグシガルパ", "north-central-america"),
  country("SV", "エルサルバドル", "サンサルバドル", "north-central-america"),
  country("NI", "ニカラグア", "マナグア", "north-central-america"),
  country("CR", "コスタリカ", "サンホセ", "north-central-america"),
  country("PA", "パナマ", "パナマシティ", "north-central-america"),

  // Caribbean
  country("BS", "バハマ", "ナッソー", "caribbean"),
  country("CU", "キューバ", "ハバナ", "caribbean"),
  country("JM", "ジャマイカ", "キングストン", "caribbean"),
  country("HT", "ハイチ", "ポルトープランス", "caribbean"),
  country("DO", "ドミニカ共和国", "サントドミンゴ", "caribbean"),
  country("AG", "アンティグア・バーブーダ", "セントジョンズ", "caribbean", { marker: [-61.7964, 17.0608] }),
  country("DM", "ドミニカ国", "ロゾー", "caribbean", { marker: [-61.371, 15.415] }),
  country("GD", "グレナダ", "セントジョージズ", "caribbean", { marker: [-61.679, 12.1165] }),
  country("BB", "バルバドス", "ブリッジタウン", "caribbean", { marker: [-59.5432, 13.1939] }),
  country("TT", "トリニダード・トバゴ", "ポートオブスペイン", "caribbean", { marker: [-61.2225, 10.6918] }),
  country("KN", "セントクリストファー・ネービス", "バセテール", "caribbean", { marker: [-62.7829, 17.3578] }),
  country("LC", "セントルシア", "カストリーズ", "caribbean", { marker: [-60.9789, 13.9094] }),
  country("VC", "セントビンセント及びグレナディーン諸島", "キングスタウン", "caribbean", { marker: [-61.1971, 13.2528] }),

  // South America
  country("CO", "コロンビア", "ボゴタ", "south-america"),
  country("VE", "ベネズエラ", "カラカス", "south-america"),
  country("GY", "ガイアナ", "ジョージタウン", "south-america"),
  country("SR", "スリナム", "パラマリボ", "south-america"),
  country("EC", "エクアドル", "キト", "south-america"),
  country("PE", "ペルー", "リマ", "south-america"),
  country("BR", "ブラジル", "ブラジリア", "south-america"),
  country("BO", "ボリビア", "スクレ", "south-america"),
  country("PY", "パラグアイ", "アスンシオン", "south-america"),
  country("UY", "ウルグアイ", "モンテビデオ", "south-america"),
  country("AR", "アルゼンチン", "ブエノスアイレス", "south-america"),
  country("CL", "チリ", "サンティアゴ", "south-america"),

  // Oceania — western / larger states
  country("AU", "オーストラリア", "キャンベラ", "oceania-west"),
  country("NZ", "ニュージーランド", "ウェリントン", "oceania-west"),
  country("PG", "パプアニューギニア", "ポートモレスビー", "oceania-west"),
  country("FJ", "フィジー", "スバ", "oceania-west"),
  country("SB", "ソロモン諸島", "ホニアラ", "oceania-west", { marker: [160.1562, -9.6457] }),
  country("VU", "バヌアツ", "ポートビラ", "oceania-west", { marker: [168.3273, -17.7333] }),

  // Pacific islands (displayed on a dateline-wrapped regional view)
  country("PW", "パラオ", "ンゲルルムッド", "pacific-islands", { marker: [134.5825, 7.5006] }),
  country("FM", "ミクロネシア連邦", "パリキール", "pacific-islands", { marker: [158.161, 6.9248] }),
  country("MH", "マーシャル諸島", "マジュロ", "pacific-islands", { marker: [171.1845, 7.1315] }),
  country("KI", "キリバス", "タラワ", "pacific-islands", { marker: [172.9791, 1.4518] }),
  country("NR", "ナウル", null, "pacific-islands", { marker: [166.9315, -0.5228], capitalQuiz: false, capitalNote: "公式の首都を定めていないため首都単独問題から除外。" }),
  country("TV", "ツバル", "フナフティ", "pacific-islands", { marker: [179.1942, -8.5211] }),
  country("WS", "サモア", "アピア", "pacific-islands", { marker: [-171.7514, -13.8507] }),
  country("TO", "トンガ", "ヌクアロファ", "pacific-islands", { marker: [-175.1982, -21.1394] })
]);

export const COUNTRIES_BY_CODE = new Map(WORLD_COUNTRIES.map((item) => [item.code, item]));

export function countriesForRegion(regionId, { capitalOnly = false } = {}) {
  return WORLD_COUNTRIES.filter((item) => item.region === regionId && (!capitalOnly || item.capitalQuiz));
}
