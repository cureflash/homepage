(() => {
  const unit = {
    id: "jh-history-muromachi-001",
    title: "室町時代",
    subtitle: "南北朝の争乱から室町幕府・日明貿易・応仁の乱までをつなぐ",
    schoolStage: "junior-high",
    field: "history",
    unit: "中世の日本",
    era: "室町時代",
    practicalGradeGroup: "中学・歴史",
    factcheckStatus: "verified",
    keyPoint: "南北朝の争乱の中で足利氏の武家政権が成立し、3代将軍足利義満の時代に幕府の政治基盤が強まり、日明貿易も進んだ。その後、有力大名や幕府内部の対立などを背景に応仁の乱が起こった。",
    timeline: [
      { label: "1336年", note: "京都に北朝が成立し、南北朝の争乱へ" },
      { label: "1338年", note: "足利尊氏が征夷大将軍となる" },
      { label: "1377〜1378年ごろ", note: "足利義満が花の御所を造営" },
      { label: "1392年", note: "南北朝が合一" },
      { label: "1404年", note: "明から勘合がもたらされ、日明貿易で用いられる" },
      { label: "1467年", note: "応仁の乱が始まる" }
    ],
    sections: [
      {
        id: "bakufu",
        heading: "南北朝と室町幕府",
        lead: "鎌倉幕府滅亡後の争乱を経て、京都を中心とする新しい武家政権が形づくられた。",
        sentences: [
          {
            id: "muromachi-01",
            template: "後醍醐天皇の建武政権と対立した{{足利尊氏}}は京都を政治の拠点とし、1338年に{{征夷大将軍}}に任じられた。",
            terms: ["足利尊氏", "征夷大将軍"],
            importance: "A",
            sources: ["mext-social-commentary", "kyoto-history-timeline"],
            factcheckStatus: "verified"
          },
          {
            id: "muromachi-02",
            template: "後醍醐天皇が吉野へ移ると、京都の北朝と吉野の南朝が並び立つ{{南北朝}}の争乱が続き、1392年に{{足利義満}}の時代に合一した。",
            terms: ["南北朝", "足利義満"],
            importance: "A",
            sources: ["mext-social-commentary", "kyoto-history-timeline", "kyoto-hana-no-gosho"],
            factcheckStatus: "verified"
          },
          {
            id: "muromachi-03",
            template: "室町時代には、足利将軍家から任じられた{{守護}}の中から、国内の武士を従えて一国規模の支配力を強めた{{守護大名}}が現れ、幕府政治でも大きな力をもった。",
            terms: ["守護", "守護大名"],
            importance: "A",
            sources: ["mext-social-commentary", "mext-jsl-social", "rekihaku-kanrei-document"],
            factcheckStatus: "verified"
          },
          {
            id: "muromachi-04",
            template: "3代将軍{{足利義満}}は1377〜1378年ごろ京都の室町に{{花の御所}}を造営し、ここで政務が行われたことから武家政権は{{室町幕府}}と呼ばれる。",
            terms: ["足利義満", "花の御所", "室町幕府"],
            importance: "A",
            sources: ["kyoto-muromachi-site", "kyoto-hana-no-gosho", "kyoto-history-timeline"],
            factcheckStatus: "verified"
          }
        ]
      },
      {
        id: "yoshimitsu-trade-onin",
        heading: "義満の時代と応仁の乱",
        lead: "義満の時代には東アジアとの交流が進み、その後は幕府内部や有力大名の対立が深まった。",
        sentences: [
          {
            id: "muromachi-05",
            template: "足利義満の時代に明との{{日明貿易}}が行われ、正式な貿易船を見分ける証明として{{勘合}}が用いられたため、{{勘合貿易}}とも呼ばれる。",
            terms: ["日明貿易", "勘合", "勘合貿易"],
            importance: "A",
            sources: ["mext-social-commentary", "mofa-nichimin-trade", "kyoto-city-outline"],
            factcheckStatus: "verified"
          },
          {
            id: "muromachi-06",
            template: "義満が1397年に北山に造営を始めた山荘の舎利殿である{{金閣}}は、禅宗などの影響も受けた{{北山文化}}を代表する建築として学ばれる。",
            terms: ["金閣", "北山文化"],
            importance: "B",
            sources: ["kyoto-city-outline", "shokokuji-story"],
            factcheckStatus: "verified"
          },
          {
            id: "muromachi-07",
            template: "1467年、将軍家の後継問題や有力大名どうしの対立などを背景に{{応仁の乱}}が始まり、京都を中心に1477年まで戦乱が続いた。乱後、各地で地域勢力の自立が進んだ。",
            terms: ["応仁の乱"],
            importance: "A",
            sources: ["mext-social-commentary", "national-archives-timeline", "kyoto-onin"],
            factcheckStatus: "verified"
          }
        ]
      }
    ],
    images: [
      {
        id: "ashikaga-yoshimitsu-portrait",
        section: "bakufu",
        label: "足利義満像",
        note: "15世紀初頭の足利義満像として鹿苑寺に伝わる肖像",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Yoshimitsu_Ashikaga_cropped.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Yoshimitsu_Ashikaga_cropped.jpg",
        credit: "鹿苑寺蔵 / Wikimedia Commons",
        license: "Public Domain Mark 1.0",
        factcheckStatus: "verified"
      },
      {
        id: "kinkaku-ji",
        section: "yoshimitsu-trade-onin",
        label: "鹿苑寺（金閣寺）の金閣",
        note: "義満の北山第に由来する金閣。現在の建物は1950年の焼失後に再建されたもの",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kinkaku-ji_temple_in_Kyoto.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Kinkaku-ji_temple_in_Kyoto.jpg",
        credit: "Geertchaos / Wikimedia Commons",
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
        id: "mext-jsl-social",
        label: "文部科学省『学校教育におけるJSLカリキュラム（中学校編）社会用語対訳一覧』",
        url: "https://www.mext.go.jp/component/a_menu/education/micro_detail/__icsFiles/afieldfile/2015/10/06/1235806_022.pdf"
      },
      {
        id: "kyoto-history-timeline",
        label: "京都市『京都の歴史年表 都市のすがた』",
        url: "https://www2.city.kyoto.lg.jp/somu/rekishi/fm/nenpyou/toshi_nenpyo.html"
      },
      {
        id: "kyoto-muromachi-site",
        label: "京都市上京区役所『室町幕府址』",
        url: "https://www.city.kyoto.lg.jp/kamigyo/page/0000012475.html"
      },
      {
        id: "kyoto-hana-no-gosho",
        label: "京都市上京区役所『花の御所』",
        url: "https://www.city.kyoto.lg.jp/kamigyo/page/0000012401.html"
      },
      {
        id: "rekihaku-kanrei-document",
        label: "国立歴史民俗博物館 khirin『将軍家御教書（室町幕府管領奉書）』",
        url: "https://khirin.rekihaku.ac.jp/pid/nmjh_collection/H-743-421-7.html"
      },
      {
        id: "mofa-nichimin-trade",
        label: "外務省 日中歴史共同研究報告書（中近世の日中関係）",
        url: "https://www.mofa.go.jp/mofaj/files/100512962.pdf"
      },
      {
        id: "kyoto-city-outline",
        label: "京都市『京都市のあらまし（京都市のあゆみ）』",
        url: "https://www.city.kyoto.lg.jp/sogo/page/0000015599.html"
      },
      {
        id: "shokokuji-story",
        label: "相国寺『相国寺物語』",
        url: "https://www.shokoku-ji.jp/wp-content/themes/shokokuji/assets/img/shokokuji/about/shokokuji_story.pdf"
      },
      {
        id: "national-archives-timeline",
        label: "国立公文書館『歴史と物語 年表』",
        url: "https://www.archives.go.jp/exhibition/digital/rekishitomonogatari/history01.html"
      },
      {
        id: "kyoto-onin",
        label: "京都市歴史資料館『応仁・文明の乱』",
        url: "https://www2.city.kyoto.lg.jp/somu/rekishi/fm/nenpyou/pdffile/toshi14.pdf"
      },
      {
        id: "commons-yoshimitsu",
        label: "Wikimedia Commons『Yoshimitsu Ashikaga cropped.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:Yoshimitsu_Ashikaga_cropped.jpg"
      },
      {
        id: "commons-kinkaku",
        label: "Wikimedia Commons『Kinkaku-ji temple in Kyoto.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:Kinkaku-ji_temple_in_Kyoto.jpg"
      }
    ]
  };

  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
