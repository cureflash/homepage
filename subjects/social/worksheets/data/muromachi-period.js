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
    factcheckStatus: "pending_factcheck",
    keyPoint: "南北朝の争乱の中で足利氏の武家政権が成立し、3代将軍足利義満の時代に政治が安定して日明貿易も進んだ。その後、守護大名どうしの対立などを背景に応仁の乱が起こった。",
    timeline: [
      { label: "1336年", note: "京都に北朝が成立し、南北朝の争乱へ" },
      { label: "1338年", note: "足利尊氏が征夷大将軍となる" },
      { label: "1378年", note: "足利義満が花の御所を造営" },
      { label: "1392年", note: "南北朝が合一" },
      { label: "1404年", note: "明から勘合がもたらされ、日明貿易が進む" },
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
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "muromachi-02",
            template: "後醍醐天皇が吉野へ移ると、京都の北朝と吉野の南朝が並び立つ{{南北朝}}の争乱が続き、1392年に{{足利義満}}の時代に合一した。",
            terms: ["南北朝", "足利義満"],
            importance: "A",
            sources: ["mext-social-commentary", "kyoto-history-timeline", "kyoto-hana-no-gosho"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "muromachi-03",
            template: "室町時代には、各地の{{守護}}の中から広い地域に強い支配力をもつ{{守護大名}}が現れ、幕府政治でも大きな力をもった。",
            terms: ["守護", "守護大名"],
            importance: "A",
            sources: ["mext-social-commentary", "rekihaku-kanrei-document"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "muromachi-04",
            template: "3代将軍{{足利義満}}は1378年に京都の室町に{{花の御所}}を造営し、ここで政務が行われたことから武家政権は{{室町幕府}}と呼ばれる。",
            terms: ["足利義満", "花の御所", "室町幕府"],
            importance: "A",
            sources: ["kyoto-muromachi-site", "kyoto-hana-no-gosho"],
            factcheckStatus: "pending_factcheck"
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
            template: "足利義満の時代に明との{{日明貿易}}が進み、正式な貿易船を示す証明として{{勘合}}が用いられたため、{{勘合貿易}}とも呼ばれる。",
            terms: ["日明貿易", "勘合", "勘合貿易"],
            importance: "A",
            sources: ["mext-social-commentary", "mofa-nichimin-trade", "kyoto-city-outline"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "muromachi-06",
            template: "義満が1397年に北山に造営した山荘の中心建物として知られる{{金閣}}は、禅宗などの影響も受けた{{北山文化}}を代表する建築として学ばれる。",
            terms: ["金閣", "北山文化"],
            importance: "B",
            sources: ["kyoto-city-outline", "kyoto-kids-history"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "muromachi-07",
            template: "1467年、将軍家の後継争いと有力大名どうしの対立などを背景に{{応仁の乱}}が始まり、京都を中心に長い戦乱が続いて幕府の支配力が弱まった。",
            terms: ["応仁の乱"],
            importance: "A",
            sources: ["mext-social-commentary", "kyoto-kids-history", "kyoto-muromachi-site"],
            factcheckStatus: "pending_factcheck"
          }
        ]
      }
    ],
    images: [
      {
        id: "ashikaga-yoshimitsu-portrait",
        section: "bakufu",
        label: "足利義満像",
        note: "鹿苑寺に伝わる足利義満の肖像として紹介される作品",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Yoshimitsu_Ashikaga_cropped.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Yoshimitsu_Ashikaga_cropped.jpg",
        credit: "鹿苑寺蔵 / Wikimedia Commons",
        license: "Public Domain",
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "kinkaku-ji",
        section: "yoshimitsu-trade-onin",
        label: "鹿苑寺（金閣寺）の金閣",
        note: "義満の北山山荘に由来し、北山文化を考える代表的な建築資料",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kinkaku-ji_temple_in_Kyoto.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Kinkaku-ji_temple_in_Kyoto.jpg",
        credit: "Geertchaos / Wikimedia Commons",
        license: "CC BY-SA 4.0",
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
        label: "国立歴史民俗博物館 khirin『室町幕府管領奉書』",
        url: "https://khirin.rekihaku.ac.jp/pid/nmjh_collection/H-1907-3.html"
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
        id: "kyoto-kids-history",
        label: "京都市『こども情報館（みてみよう歴史）』",
        url: "https://www.city.kyoto.lg.jp/sogo/page/0000097185.html?furigana=on"
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
