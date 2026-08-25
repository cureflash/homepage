(() => {
  const unit = {
    id: "jh-history-asuka-ritsuryo-001",
    title: "飛鳥時代と律令国家への歩み",
    subtitle: "聖徳太子の政治から大化の改新、大宝律令までをつなぐ",
    schoolStage: "junior-high",
    field: "history",
    unit: "古代までの日本",
    practicalGradeGroup: "中学・歴史導入",
    factcheckStatus: "verified",
    keyPoint: "東アジアの制度や文化を取り入れながら、天皇を中心とする国家の仕組みが整えられていった。",
    timeline: [
      { label: "603年", note: "冠位十二階" },
      { label: "604年", note: "十七条の憲法" },
      { label: "607年", note: "小野妹子を隋へ" },
      { label: "645年", note: "大化の改新" },
      { label: "701年", note: "大宝律令" }
    ],
    sections: [
      {
        id: "shotoku",
        heading: "聖徳太子の政治",
        lead: "豪族をまとめ、隋など東アジアから学びながら政治の仕組みを整えようとした。",
        sentences: [
          {
            id: "asuka-01",
            template: "603年、役人の地位を能力や功績に応じて示す{{冠位十二階}}が定められた。",
            terms: ["冠位十二階"],
            importance: "A",
            sources: ["nara-shotoku-material", "horyuji"],
            factcheckStatus: "verified"
          },
          {
            id: "asuka-02",
            template: "604年、役人が守るべき心構えを示した{{十七条の憲法}}が定められた。",
            terms: ["十七条の憲法"],
            importance: "A",
            sources: ["nara-shotoku-material", "nara-manyohyakuka"],
            factcheckStatus: "verified"
          },
          {
            id: "asuka-03",
            template: "607年、{{小野妹子}}らが{{遣隋使}}として中国の隋へ派遣された。",
            terms: ["小野妹子", "遣隋使"],
            importance: "A",
            sources: ["nara-shotoku-material", "horyuji"],
            factcheckStatus: "verified"
          }
        ]
      },
      {
        id: "reform",
        heading: "大化の改新から律令国家へ",
        lead: "7世紀後半には、中央集権的な国家を目指す改革が続いた。",
        sentences: [
          {
            id: "asuka-04",
            template: "645年の政変をきっかけに、{{中大兄皇子}}や{{中臣鎌足}}らが進めた政治改革を{{大化の改新}}と呼ぶ。",
            terms: ["中大兄皇子", "中臣鎌足", "大化の改新"],
            importance: "A",
            sources: ["mext-social-commentary", "nabunken-taika"],
            factcheckStatus: "verified"
          },
          {
            id: "asuka-05",
            template: "701年に{{大宝律令}}が制定され、律と令を基本とする{{律令国家}}の仕組みが整えられた。",
            terms: ["大宝律令", "律令国家"],
            importance: "A",
            sources: ["mext-social-commentary", "nabunken-taiho"],
            factcheckStatus: "verified"
          }
        ]
      }
    ],
    images: [
      {
        id: "shotoku-portrait",
        section: "shotoku",
        label: "聖徳太子二王子像",
        note: "聖徳太子を描いたものとして伝えられてきた肖像",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Portrait_of_Prince_Sh%C5%8Dtoku_and_Two_Princes.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Portrait_of_Prince_Sh%C5%8Dtoku_and_Two_Princes.jpg",
        credit: "伝・阿佐太子 / Wikimedia Commons",
        license: "Public Domain Mark 1.0",
        factcheckStatus: "verified"
      },
      {
        id: "horyuji",
        section: "reform",
        label: "法隆寺西院伽藍",
        note: "飛鳥文化を伝える法隆寺の寺院建築",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Horyu-ji_National_Treasure_World_heritage_%E5%9B%BD%E5%AE%9D%E3%83%BB%E4%B8%96%E7%95%8C%E9%81%BA%E7%94%A3%E6%B3%95%E9%9A%86%E5%AF%BA57.JPG",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Horyu-ji_National_Treasure_World_heritage_%E5%9B%BD%E5%AE%9D%E3%83%BB%E4%B8%96%E7%95%8C%E9%81%BA%E7%94%A3%E6%B3%95%E9%9A%86%E5%AF%BA57.JPG",
        credit: "Nekosuki / Wikimedia Commons",
        license: "CC BY-SA 4.0",
        factcheckStatus: "verified"
      }
    ],
    sources: [
      {
        id: "mext-social-commentary",
        label: "文部科学省『中学校学習指導要領（平成29年告示）解説 社会編』",
        url: "https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf"
      },
      {
        id: "horyuji",
        label: "法隆寺『法隆寺伽藍』",
        url: "https://www.horyuji.or.jp/garan/"
      },
      {
        id: "nara-shotoku-material",
        label: "奈良県 聖徳太子関連補足資料",
        url: "https://www.pref.nara.jp/secure/61525/05.pdf"
      },
      {
        id: "nara-manyohyakuka",
        label: "奈良県立万葉文化館『万葉百科：憲法十七条』",
        url: "https://manyo-hyakka.pref.nara.jp/db/detailLink?cls=db_yougo3&pkey=3"
      },
      {
        id: "nabunken-taika",
        label: "全国遺跡報告総覧掲載資料（大化改新関連年表）",
        url: "https://sitereports.nabunken.go.jp/files/attach/6/6402/4752_1_%E5%B9%B3%E5%B0%BE%E9%81%BA%E8%B7%A1.pdf"
      },
      {
        id: "nabunken-taiho",
        label: "全国遺跡報告総覧掲載資料『律令国家の確立と鞠智城』",
        url: "https://sitereports.nabunken.go.jp/files/attach/47/47621/122567_1_%E5%BE%8B%E4%BB%A4%E5%9B%BD%E5%AE%B6%E3%81%AE%E7%A2%BA%E7%AB%8B%E3%81%A8%E9%9E%A0%E6%99%BA%E5%9F%8E.pdf"
      },
      {
        id: "commons-shotoku",
        label: "Wikimedia Commons『Portrait of Prince Shōtoku and Two Princes.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:Portrait_of_Prince_Sh%C5%8Dtoku_and_Two_Princes.jpg"
      },
      {
        id: "commons-horyuji",
        label: "Wikimedia Commons『Horyu-ji ... 法隆寺57.JPG』",
        url: "https://commons.wikimedia.org/wiki/File:Horyu-ji_National_Treasure_World_heritage_%E5%9B%BD%E5%AE%9D%E3%83%BB%E4%B8%96%E7%95%8C%E9%81%BA%E7%94%A3%E6%B3%95%E9%9A%86%E5%AF%BA57.JPG"
      }
    ]
  };

  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
