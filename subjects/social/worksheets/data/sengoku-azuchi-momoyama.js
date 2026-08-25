(() => {
  const unit = {
    id: "jh-history-sengoku-azuchi-momoyama-001",
    title: "戦国時代と安土桃山時代",
    subtitle: "ヨーロッパ人の来航から織田・豊臣の統一事業までをつなぐ",
    schoolStage: "junior-high",
    field: "history",
    unit: "近世の日本",
    era: "戦国時代・安土桃山時代",
    practicalGradeGroup: "中学・歴史",
    factcheckStatus: "pending_factcheck",
    keyPoint: "戦国の争乱が続く中でヨーロッパとの交流が始まり、織田信長と豊臣秀吉が軍事・経済・土地支配の政策を進めて全国統一へ向かった。",
    timeline: [
      { label: "1543年", note: "種子島に鉄砲が伝わる" },
      { label: "1549年", note: "ザビエルが鹿児島に上陸" },
      { label: "1568年", note: "織田信長が足利義昭を奉じて京都へ入る" },
      { label: "1576年", note: "信長が安土城の築城に着手" },
      { label: "1582年", note: "本能寺の変で信長が死去" },
      { label: "1588年", note: "秀吉が刀狩令を出す" },
      { label: "1590年", note: "小田原合戦を経て秀吉の全国統一が成る" }
    ],
    sections: [
      {
        id: "europe-contact-nobunaga",
        heading: "ヨーロッパとの交流と織田信長",
        lead: "16世紀、日本列島には新しい武器や宗教が伝わり、戦国大名の争いと社会の変化に影響を与えた。",
        sentences: [
          {
            id: "sengoku-01",
            template: "1543年、ポルトガル人を乗せた船が種子島に来航し、日本に{{鉄砲}}が伝わった。",
            terms: ["鉄砲"],
            importance: "A",
            sources: ["mext-social-commentary", "nishinoomote-tanegashima-gun"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "sengoku-02",
            template: "1549年、イエズス会の宣教師{{フランシスコ・ザビエル}}が鹿児島に上陸し、日本で{{キリスト教}}の布教を始めた。",
            terms: ["フランシスコ・ザビエル", "キリスト教"],
            importance: "A",
            sources: ["mext-social-commentary", "kagoshima-christianity"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "sengoku-03",
            template: "{{織田信長}}は戦国大名との戦いを重ねて勢力を広げ、1568年には足利義昭を奉じて京都に入った。",
            terms: ["織田信長"],
            importance: "A",
            sources: ["mext-social-commentary", "nagoya-nobunaga-hideyoshi"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "sengoku-04",
            template: "信長は城下町などで{{楽市楽座}}を進め、商工業者が活動しやすい環境を整えようとした。",
            terms: ["楽市楽座"],
            importance: "A",
            sources: ["nagoya-nobunaga-hideyoshi", "omihachiman-azuchi-town"],
            factcheckStatus: "pending_factcheck"
          }
        ]
      },
      {
        id: "hideyoshi-unification-culture",
        heading: "豊臣秀吉の統一事業と桃山文化",
        lead: "信長の死後、豊臣秀吉が統一事業を引き継ぎ、土地と武器を把握する政策を進めた。",
        sentences: [
          {
            id: "sengoku-05",
            template: "信長の死後、{{豊臣秀吉}}が統一事業を進め、1590年の小田原合戦を経て全国統一を成し遂げた。",
            terms: ["豊臣秀吉"],
            importance: "A",
            sources: ["mext-social-commentary", "odawara-unification", "nagoya-nobunaga-hideyoshi"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "sengoku-06",
            template: "秀吉は田畑の面積や収穫高、耕作者などを調べる{{太閤検地}}を進め、土地支配の基礎を整えた。",
            terms: ["太閤検地"],
            importance: "A",
            sources: ["mext-social-commentary", "ndl-taiko-kenchi"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "sengoku-07",
            template: "1588年、秀吉は農民から刀ややりなどの武器を集める{{刀狩}}を命じた。",
            terms: ["刀狩"],
            importance: "A",
            sources: ["mext-social-commentary", "ndl-katanagari"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "sengoku-08",
            template: "城郭や大寺院の内部には金地を用いた大画面の{{障壁画}}などが描かれ、豪壮・華麗な{{桃山文化}}が展開した。",
            terms: ["障壁画", "桃山文化"],
            importance: "B",
            sources: ["mext-social-commentary", "kyohaku-momoyama-wall-painting", "tnm-momoyama"],
            factcheckStatus: "pending_factcheck"
          }
        ]
      }
    ],
    images: [
      {
        id: "oda-nobunaga-portrait",
        section: "europe-contact-nobunaga",
        label: "織田信長像",
        note: "狩野宗秀筆。原本は1583年制作とされ、長興寺に伝わる肖像",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Odanobunaga.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Odanobunaga.jpg",
        credit: "狩野宗秀筆・長興寺蔵 / Wikimedia Commons",
        license: "Public Domain Mark 1.0",
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "toyotomi-hideyoshi-portrait",
        section: "hideyoshi-unification-culture",
        label: "豊臣秀吉像",
        note: "狩野光信筆とされる高台寺所蔵の肖像（1601年ごろ）",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Toyotomi_hideyoshi.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Toyotomi_hideyoshi.jpg",
        credit: "狩野光信筆・高台寺蔵 / Wikimedia Commons",
        license: "Public Domain Mark 1.0",
        factcheckStatus: "pending_factcheck"
      }
    ],
    sources: [
      {
        id: "mext-social-commentary",
        label: "文部科学省『中学校学習指導要領（平成29年告示）解説 社会編』",
        url: "https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf"
      },
      {
        id: "nishinoomote-tanegashima-gun",
        label: "西之表市『種子島銃（ポルトガル初伝銃）』",
        url: "https://www.city.nishinoomote.lg.jp/admin/soshiki/kyouikuiinkai/rekishibunkaka/bunkazai/bunkazai/siseki/siteibunnkazai/kennsitei/8388.html"
      },
      {
        id: "kagoshima-christianity",
        label: "鹿児島県『キリスト教の伝来』",
        url: "https://www.pref.kagoshima.jp/ab23/pr/gaiyou/rekishi/tyuusei/christ2.html"
      },
      {
        id: "nagoya-nobunaga-hideyoshi",
        label: "名古屋市博物館『尾張の統一と信長・秀吉』",
        url: "https://www.museum.city.nagoya.jp/exhibition/owari/theme_07/"
      },
      {
        id: "omihachiman-azuchi-town",
        label: "近江八幡市『近世都市の先駆け〜六角・信長・秀次の城と城下の歴史文化』",
        url: "https://www.city.omihachiman.lg.jp/material/files/group/102/dai7syouzenhan2.pdf"
      },
      {
        id: "odawara-unification",
        label: "小田原市『小田原ってどんなまち』",
        url: "https://www.city.odawara.kanagawa.jp/about/introduction/"
      },
      {
        id: "ndl-taiko-kenchi",
        label: "国立国会図書館サーチ『太閤検地 : 秀吉が目指した国のかたち』",
        url: "https://ndlsearch.ndl.go.jp/books/R100000002-I029853918"
      },
      {
        id: "ndl-katanagari",
        label: "国立国会図書館サーチ『豊臣秀吉刀狩條書』",
        url: "https://ndlsearch.ndl.go.jp/books/R000000050-I000076170"
      },
      {
        id: "kyohaku-momoyama-wall-painting",
        label: "京都国立博物館『近世の障壁画（桃山～江戸時代）』",
        url: "https://www.kyohaku.go.jp/old/jp/theme/floor2_4/f2_4_koremade/kinse_20150102.html"
      },
      {
        id: "tnm-momoyama",
        label: "東京国立博物館『桃山―天下人の100年』関連資料",
        url: "https://www.tnm.jp/modules/r_free_page/index.php?id=2043&lang=ja"
      },
      {
        id: "commons-nobunaga",
        label: "Wikimedia Commons『Odanobunaga.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:Odanobunaga.jpg"
      },
      {
        id: "commons-hideyoshi",
        label: "Wikimedia Commons『Toyotomi hideyoshi.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:Toyotomi_hideyoshi.jpg"
      }
    ]
  };

  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
