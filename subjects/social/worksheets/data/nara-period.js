(() => {
  const unit = {
    id: "jh-history-nara-period-001",
    title: "奈良時代",
    subtitle: "平城京と律令国家、天平文化を資料からつかむ",
    schoolStage: "junior-high",
    field: "history",
    unit: "古代までの日本",
    practicalGradeGroup: "中学・歴史導入",
    factcheckStatus: "pending_factcheck",
    keyPoint: "平城京を中心に律令国家の政治が行われ、唐などの影響を受けた国際色豊かな文化が栄えた。",
    timeline: [
      { label: "710年", note: "平城京へ遷都" },
      { label: "752年", note: "東大寺大仏の開眼供養" },
      { label: "756年", note: "聖武天皇の遺愛品などを正倉院へ" }
    ],
    sections: [
      {
        id: "heijokyo",
        heading: "平城京と律令国家",
        lead: "奈良の都には宮殿や役所が置かれ、律令国家の政治の中心となった。",
        sentences: [
          {
            id: "nara-01",
            template: "710年、都が藤原京から{{平城京}}へ移された。",
            terms: ["平城京"],
            importance: "A",
            sources: ["nara-history", "mext-social-commentary"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "nara-02",
            template: "{{平城京}}は中国・唐の都{{長安}}にならった計画都市で、大路や小路によって整然と区画された。",
            terms: ["平城京", "長安"],
            importance: "A",
            sources: ["nara-history", "nara-suzaku"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "nara-03",
            template: "平城京には天皇の宮殿や役所が集まり、{{律令国家}}の政治の中心となった。",
            terms: ["律令国家"],
            importance: "B",
            sources: ["mext-social-commentary", "nara-history"],
            factcheckStatus: "pending_factcheck"
          }
        ]
      },
      {
        id: "tenpyo",
        heading: "仏教と天平文化",
        lead: "仏教による国づくりと、東アジアとの交流を背景に文化が発展した。",
        sentences: [
          {
            id: "nara-04",
            template: "{{聖武天皇}}は仏教の力で国を守ろうとし、{{東大寺}}の大仏は752年に開眼供養が行われた。",
            terms: ["聖武天皇", "東大寺"],
            importance: "A",
            sources: ["nara-todaiji"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "nara-05",
            template: "756年、聖武天皇の遺愛品などが東大寺に奉献され、{{正倉院}}の宝物のもとになった。",
            terms: ["正倉院"],
            importance: "A",
            sources: ["nara-crafts", "nara-todaiji"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "nara-06",
            template: "奈良時代に栄えた、唐などの影響を受けた国際色のある文化を{{天平文化}}と呼ぶ。",
            terms: ["天平文化"],
            importance: "A",
            sources: ["nara-history", "mext-social-commentary"],
            factcheckStatus: "pending_factcheck"
          }
        ]
      }
    ],
    images: [
      {
        id: "todaiji-daibutsuden",
        section: "tenpyo",
        label: "東大寺大仏殿",
        note: "聖武天皇の発願で建立された東大寺の中心建築",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Todaiji-Daibutsuden-1999.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Todaiji-Daibutsuden-1999.jpg",
        credit: "Bigjap / Wikimedia Commons",
        license: "CC0 1.0",
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "shosoin",
        section: "tenpyo",
        label: "正倉院正倉",
        note: "奈良時代の宝物を伝える校倉造の建物",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Shosin-shouso.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Shosin-shouso.jpg",
        credit: "あずきごはん / Wikimedia Commons",
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
        id: "nara-history",
        label: "奈良市『奈良のあゆみ－明治以前－』",
        url: "https://www.city.nara.lg.jp/soshiki/3/148230.html"
      },
      {
        id: "nara-suzaku",
        label: "奈良市『平城京朱雀大路跡』",
        url: "https://www.city.nara.lg.jp/soshiki/134/2438.html"
      },
      {
        id: "nara-todaiji",
        label: "奈良市『東大寺』",
        url: "https://www.city.nara.lg.jp/site/world-heritage/88515.html"
      },
      {
        id: "nara-crafts",
        label: "奈良市『奈良の工芸の歴史』",
        url: "https://www.city.nara.lg.jp/site/shimindayori/251997.html"
      },
      {
        id: "commons-todaiji",
        label: "Wikimedia Commons『Todaiji-Daibutsuden-1999.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:Todaiji-Daibutsuden-1999.jpg"
      },
      {
        id: "commons-shosoin",
        label: "Wikimedia Commons『Shosin-shouso.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:Shosin-shouso.jpg"
      }
    ]
  };

  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
