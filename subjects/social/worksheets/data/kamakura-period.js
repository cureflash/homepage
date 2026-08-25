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
    factcheckStatus: "verified",
    keyPoint: "源頼朝が鎌倉を本拠に武士の政権を築き、御家人との主従関係を基盤に政治が行われた。頼朝の死後は北条氏が執権として実権を握り、元寇への対応などを経験した。",
    timeline: [
      { label: "1185年", note: "守護・地頭の設置が認められる" },
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
            template: "1185年、朝廷は源頼朝に、諸国に{{守護}}を、荘園や公領に{{地頭}}を置くことを認めた。",
            terms: ["守護", "地頭"],
            importance: "A",
            sources: ["kamakura-city-history-plan", "national-theatre-kamakura", "mext-social-commentary"],
            factcheckStatus: "verified"
          },
          {
            id: "kamakura-02",
            template: "1192年、{{源頼朝}}は{{征夷大将軍}}に任じられた。鎌倉幕府の成立は、現在では一つの年だけでなく段階的に進んだと考えられている。",
            terms: ["源頼朝", "征夷大将軍"],
            importance: "A",
            sources: ["kamakura-city-history", "kamakura-city-kamakuradono", "national-archives-timeline"],
            factcheckStatus: "verified"
          },
          {
            id: "kamakura-03",
            template: "将軍と主従関係を結んだ武士を{{御家人}}といい、将軍から所領の保護などの{{御恩}}を受け、その代わりに軍役などの{{奉公}}を行った。",
            terms: ["御家人", "御恩", "奉公"],
            importance: "A",
            sources: ["mext-social-commentary", "national-tax-college-kamakura", "national-theatre-kamakura", "rekihaku-medieval-warriors"],
            factcheckStatus: "verified"
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
            sources: ["kamakura-city-history", "kamakura-city-masako", "national-archives-yoshitoki"],
            factcheckStatus: "verified"
          },
          {
            id: "kamakura-05",
            template: "1221年の{{承久の乱}}では、後鳥羽上皇側が幕府に敗れ、その後、幕府の朝廷や西国に対する影響力が強まった。",
            terms: ["承久の乱"],
            importance: "A",
            sources: ["national-archives-timeline", "kamakura-city-masako", "mext-social-commentary"],
            factcheckStatus: "verified"
          },
          {
            id: "kamakura-06",
            template: "1232年、執権の北条泰時は、御家人の裁判などの基準となる{{御成敗式目}}を定めた。",
            terms: ["御成敗式目"],
            importance: "A",
            sources: ["national-archives-timeline", "courts-goseibai", "mext-social-commentary"],
            factcheckStatus: "verified"
          },
          {
            id: "kamakura-07",
            template: "元・高麗などの軍勢が日本に攻めてきた1274年の{{文永の役}}と1281年の{{弘安の役}}を合わせて{{元寇}}という。幕府は北九州の防衛態勢を強め、御家人らが戦った。",
            terms: ["文永の役", "弘安の役", "元寇"],
            importance: "A",
            sources: ["national-archives-timeline", "national-archives-mongolia", "mext-social-commentary"],
            factcheckStatus: "verified"
          }
        ]
      }
    ],
    images: [
      {
        id: "kamakura-daibutsu",
        section: "bakufu",
        label: "鎌倉大仏",
        note: "鎌倉時代に造立が進められた高徳院の大仏",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kamakura_Daibutsu_-_01.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Kamakura_Daibutsu_-_01.jpg",
        credit: "Quercus acuta / Wikimedia Commons",
        license: "CC0 1.0",
        factcheckStatus: "verified"
      },
      {
        id: "moko-shurai-ekotoba",
        section: "hojo-mongol",
        label: "『蒙古襲来絵詞』",
        note: "文永の役で竹崎季長らが元軍と戦う様子を伝える絵巻資料",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/M%C5%8Dko_Sh%C5%ABrai_Ekotoba.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:M%C5%8Dko_Sh%C5%ABrai_Ekotoba.jpg",
        credit: "『蒙古襲来絵詞』 / Wikimedia Commons",
        license: "Public Domain Mark 1.0",
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
        id: "kamakura-city-masako",
        label: "鎌倉市『北条政子』",
        url: "https://www.city.kamakura.kanagawa.jp/kouhou/kamakura/21/t211101-6.html"
      },
      {
        id: "national-tax-college-kamakura",
        label: "国税庁 税務大学校『鎌倉幕府の財源』",
        url: "https://www.nta.go.jp/about/organization/ntc/sozei/quiz/1204/index.htm"
      },
      {
        id: "national-theatre-kamakura",
        label: "文化デジタルライブラリー『鎌倉時代の社会』",
        url: "https://www2.ntj.jac.go.jp/dglib/contents/learn/edc24/haikei/jidai1/1c3.html"
      },
      {
        id: "rekihaku-medieval-warriors",
        label: "国立歴史民俗博物館『中世武士団―地域に生きた武家の領主―』",
        url: "https://archive.rekihaku.ac.jp/exhibitions/project/old/220315/index.html"
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
        id: "courts-goseibai",
        label: "裁判所『御成敗式目の制定過程とその目的』関連講義資料",
        url: "https://www.courts.go.jp/saikosai/vc-files/saikosai/shihoukensyujyo/ronsyu2024-5.pdf"
      },
      {
        id: "national-archives-mongolia",
        label: "国立公文書館『日本とモンゴル～綴られた交流のあゆみ～』",
        url: "https://www.archives.go.jp/about/activity/international/jp_mn50/ch01.html"
      },
      {
        id: "kotokuin-daibutsu",
        label: "高徳院『鎌倉大仏 保存修理報告』",
        url: "https://www.kotoku-in.jp/pdf/amidanyoraizazou_preservation-repair-report.pdf"
      },
      {
        id: "bunka-moko-shurai",
        label: "国指定文化財等データベース『紙本著色蒙古襲来絵詞』",
        url: "https://kunishitei.bunka.go.jp/bsys/maindetails/201/00011961"
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
