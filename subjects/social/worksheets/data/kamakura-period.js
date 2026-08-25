(() => {
  const unit = {
    id: "jh-history-kamakura-001",
    title: "鎌倉時代",
    subtitle: "武士の政権の成立から執権政治・元寇までをつなぐ",
    schoolStage: "junior-high",
    field: "history",
    unit: "中世の日本",
    era: "鎌倉時代",
    practicalGradeGroup: "中学・歴史",
    factcheckStatus: "pending_factcheck",
    keyPoint: "源頼朝が鎌倉を本拠に武士の政権を築き、御家人との主従関係を基盤に政治が行われた。頼朝の死後は北条氏が執権として実権を握り、元寇への対応などを経験した。",
    timeline: [
      { label: "1185年", note: "守護・地頭の任命権を得る" },
      { label: "1192年", note: "源頼朝が征夷大将軍となる" },
      { label: "1221年", note: "承久の乱" },
      { label: "1232年", note: "御成敗式目" },
      { label: "1274年", note: "文永の役" },
      { label: "1281年", note: "弘安の役" }
    ],
    sections: [
      {
        id: "bakufu",
        heading: "鎌倉幕府と御家人",
        lead: "東国の武士を基盤に、朝廷とは別の武士の政治組織が整えられていった。",
        sentences: [
          {
            id: "kamakura-01",
            template: "源頼朝は鎌倉を本拠とし、1185年には朝廷から全国に{{守護}}・{{地頭}}を置く権限を認められた。",
            terms: ["守護", "地頭"],
            importance: "A",
            sources: ["kamakura-city-history-plan", "mext-social-commentary"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "kamakura-02",
            template: "1192年、{{源頼朝}}は{{征夷大将軍}}に任じられた。鎌倉幕府の成立は、現在では一つの年だけでなく段階的に進んだと考えられている。",
            terms: ["源頼朝", "征夷大将軍"],
            importance: "A",
            sources: ["kamakura-city-history", "kamakura-city-kamakuradono"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "kamakura-03",
            template: "将軍と主従関係を結んだ武士を{{御家人}}といい、将軍から所領の保護などの{{御恩}}を受け、その代わりに軍役などの{{奉公}}を行った。",
            terms: ["御家人", "御恩", "奉公"],
            importance: "A",
            sources: ["mext-social-commentary", "rekihaku-medieval-warriors"],
            factcheckStatus: "pending_factcheck"
          }
        ]
      },
      {
        id: "hojo-mongol",
        heading: "執権政治と元寇",
        lead: "源氏将軍の後も幕府は続き、北条氏が政治の中心を担った。",
        sentences: [
          {
            id: "kamakura-04",
            template: "源頼朝の死後、北条氏は将軍を補佐する{{執権}}の地位を通じて幕府の実権を握るようになった。",
            terms: ["執権"],
            importance: "A",
            sources: ["kamakura-city-history", "national-archives-yoshitoki"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "kamakura-05",
            template: "1221年の{{承久の乱}}では、後鳥羽上皇側が幕府に敗れ、その後、幕府の朝廷や西国に対する影響力が強まった。",
            terms: ["承久の乱"],
            importance: "A",
            sources: ["national-archives-timeline", "mext-social-commentary"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "kamakura-06",
            template: "1232年、北条泰時は武士のための裁判の基準として{{御成敗式目}}を定めた。",
            terms: ["御成敗式目"],
            importance: "A",
            sources: ["national-archives-timeline", "mext-social-commentary"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "kamakura-07",
            template: "元の軍勢が日本に攻めてきた1274年の{{文永の役}}と1281年の{{弘安の役}}を合わせて{{元寇}}という。幕府は九州の御家人を中心に防衛にあたった。",
            terms: ["文永の役", "弘安の役", "元寇"],
            importance: "A",
            sources: ["national-archives-timeline", "mext-social-commentary"],
            factcheckStatus: "pending_factcheck"
          }
        ]
      }
    ],
    images: [
      {
        id: "kamakura-daibutsu",
        section: "bakufu",
        label: "鎌倉大仏",
        note: "鎌倉時代の文化を伝える代表的な史跡の一つ",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kamakura_Daibutsu_-_01.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Kamakura_Daibutsu_-_01.jpg",
        credit: "Quercus acuta / Wikimedia Commons",
        license: "CC0 1.0",
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "moko-shurai-ekotoba",
        section: "hojo-mongol",
        label: "『蒙古襲来絵詞』",
        note: "元寇の戦いを伝える絵巻資料",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/M%C5%8Dko_Sh%C5%ABrai_Ekotoba.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:M%C5%8Dko_Sh%C5%ABrai_Ekotoba.jpg",
        credit: "『蒙古襲来絵詞』 / Wikimedia Commons",
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
        id: "kamakura-city-history",
        label: "鎌倉市『鎌倉市の歴史』",
        url: "https://www.city.kamakura.kanagawa.jp/rekibun-rekishi.html"
      },
      {
        id: "kamakura-city-history-plan",
        label: "鎌倉市『鎌倉市歴史的風致維持向上計画』",
        url: "https://www.city.kamakura.kanagawa.jp/fuuchi/documents/1shou.pdf"
      },
      {
        id: "kamakura-city-kamakuradono",
        label: "鎌倉市『鎌倉殿とは』",
        url: "https://www.city.kamakura.kanagawa.jp/kouhou/kamakura/21/t210801-6.html"
      },
      {
        id: "rekihaku-medieval-warriors",
        label: "国立歴史民俗博物館『中世武士団―地域に生きた武家の領主―』",
        url: "https://www.rekihaku.ac.jp/event/2022_exhibitions_kikaku_cyu.html"
      },
      {
        id: "national-archives-yoshitoki",
        label: "国立公文書館『北条義時下文』",
        url: "https://www.digital.archives.go.jp/DAS/pickup/view/detail/detailArchives/0000000610"
      },
      {
        id: "national-archives-timeline",
        label: "国立公文書館『歴史と物語 年表』",
        url: "https://www.archives.go.jp/exhibition/digital/rekishitomonogatari/history01.html"
      },
      {
        id: "commons-kamakura-daibutsu",
        label: "Wikimedia Commons『Kamakura Daibutsu - 01.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:Kamakura_Daibutsu_-_01.jpg"
      },
      {
        id: "commons-moko-shurai",
        label: "Wikimedia Commons『Mōko Shūrai Ekotoba.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:M%C5%8Dko_Sh%C5%ABrai_Ekotoba.jpg"
      }
    ]
  };

  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
