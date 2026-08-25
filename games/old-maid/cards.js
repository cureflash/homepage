export const OLD_MAID_CONFIG = {
  normalPairCount: 4,
};

// 都道府県名と都道府県庁所在地名が異なる組だけを収録する。
// 埼玉県・東京都は出題対象から除外する。
export const PREFECTURE_CAPITAL_PAIRS = [
  { id: "hokkaido", prefecture: "北海道", capital: "札幌市" },
  { id: "iwate", prefecture: "岩手県", capital: "盛岡市" },
  { id: "miyagi", prefecture: "宮城県", capital: "仙台市" },
  { id: "ibaraki", prefecture: "茨城県", capital: "水戸市" },
  { id: "tochigi", prefecture: "栃木県", capital: "宇都宮市" },
  { id: "gunma", prefecture: "群馬県", capital: "前橋市" },
  { id: "kanagawa", prefecture: "神奈川県", capital: "横浜市" },
  { id: "ishikawa", prefecture: "石川県", capital: "金沢市" },
  { id: "yamanashi", prefecture: "山梨県", capital: "甲府市" },
  { id: "aichi", prefecture: "愛知県", capital: "名古屋市" },
  { id: "mie", prefecture: "三重県", capital: "津市" },
  { id: "shiga", prefecture: "滋賀県", capital: "大津市" },
  { id: "hyogo", prefecture: "兵庫県", capital: "神戸市" },
  { id: "shimane", prefecture: "島根県", capital: "松江市" },
  { id: "kagawa", prefecture: "香川県", capital: "高松市" },
  { id: "ehime", prefecture: "愛媛県", capital: "松山市" },
  { id: "okinawa", prefecture: "沖縄県", capital: "那覇市" },
];

// ババとして混ぜる、正解ペアには含まれない都道府県名。
export const ODD_PREFECTURES = [
  "青森県",
  "秋田県",
  "山形県",
  "福島県",
  "千葉県",
  "新潟県",
  "富山県",
  "福井県",
  "長野県",
  "岐阜県",
  "静岡県",
  "京都府",
  "大阪府",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "高知県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
];
