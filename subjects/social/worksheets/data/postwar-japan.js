(() => {
  const unit = {
    id: "jh-history-postwar-japan-001",
    title: "戦後日本の出発",
    subtitle: "占領・民主化・日本国憲法・主権回復までをつなぐ",
    schoolStage: "junior-high",
    field: "history",
    unit: "現代の日本と世界",
    era: "戦後復興期",
    practicalGradeGroup: "中学・歴史",
    factcheckStatus: "verified",
    keyPoint: "敗戦後、日本は連合国軍の占領下で民主化改革を進め、日本国憲法を施行した。1951年のサンフランシスコ平和条約を経て、1952年に主権を回復した。",
    timeline: [
      { label: "1945年", note: "GHQによる占領開始・戦後改革" },
      { label: "1946年", note: "日本国憲法公布" },
      { label: "1947年", note: "日本国憲法施行" },
      { label: "1951年", note: "サンフランシスコ平和条約調印" },
      { label: "1952年", note: "条約発効・主権回復" }
    ],
    facts: [
      { id: "postwar-fact-01", claim: "敗戦後、日本は連合国軍最高司令官総司令部（GHQ）の占領下に置かれ、日本政府を通じて民主化・非軍事化に関する改革が進められた。", sources: ["mext-social-commentary", "archives-reconstruction"], factcheckStatus: "verified" },
      { id: "postwar-fact-02", claim: "戦後改革では女性参政権の実現、労働制度の改革、財閥解体、農地改革などが進められた。", sources: ["archives-s20-reforms", "archives-land-reform"], factcheckStatus: "verified" },
      { id: "postwar-fact-03", claim: "日本国憲法は1946年11月3日に公布され、1947年5月3日に施行された。", sources: ["archives-reconstruction", "ndl-constitution"], factcheckStatus: "verified" },
      { id: "postwar-fact-04", claim: "日本国憲法は国民主権、基本的人権の尊重、平和主義を基本原則としている。", sources: ["mext-social-commentary", "ndl-constitution"], factcheckStatus: "verified" },
      { id: "postwar-fact-05", claim: "1951年、日本はサンフランシスコ平和条約に調印し、条約が発効した1952年に主権を回復した。", sources: ["mext-social-commentary", "archives-high-growth"], factcheckStatus: "verified" }
    ],
    sections: [
      {
        id: "occupation-reform",
        heading: "占領と民主化改革",
        lead: "戦後、日本では政治・経済・社会の仕組みを大きく変える改革が進められた。",
        sentences: [
          { id: "postwar-01", template: "敗戦後、日本は連合国軍最高司令官総司令部（{{GHQ}}）の占領下に置かれた。", terms: ["GHQ"], importance: "A", sources: ["archives-reconstruction"], factcheckStatus: "verified" },
          { id: "postwar-02", template: "戦後改革では{{女性参政権}}の実現、財閥解体、農地改革などが進められた。", terms: ["女性参政権"], importance: "A", sources: ["archives-s20-reforms"], factcheckStatus: "verified" },
          { id: "postwar-03", template: "地主の小作地を国が買い上げて小作人へ売り渡すなどの{{農地改革}}が進められた。", terms: ["農地改革"], importance: "A", sources: ["archives-land-reform"], factcheckStatus: "verified" }
        ]
      },
      {
        id: "constitution-peace",
        heading: "新しい憲法と主権回復",
        lead: "新しい憲法のもとで政治の仕組みが変わり、講和条約によって占領は終わった。",
        sentences: [
          { id: "postwar-04", template: "{{日本国憲法}}は1946年11月3日に公布され、1947年5月3日に施行された。", terms: ["日本国憲法"], importance: "A", sources: ["archives-reconstruction", "ndl-constitution"], factcheckStatus: "verified" },
          { id: "postwar-05", template: "日本国憲法の基本原則は、{{国民主権}}・{{基本的人権の尊重}}・{{平和主義}}である。", terms: ["国民主権", "基本的人権の尊重", "平和主義"], importance: "A", sources: ["mext-social-commentary", "ndl-constitution"], factcheckStatus: "verified" },
          { id: "postwar-06", template: "1951年に{{サンフランシスコ平和条約}}へ調印し、1952年の発効によって日本は主権を回復した。", terms: ["サンフランシスコ平和条約"], importance: "A", sources: ["archives-high-growth"], factcheckStatus: "verified" }
        ]
      }
    ],
    images: [
      {
        id: "constitution-signatures",
        section: "constitution-peace",
        label: "日本国憲法の公布原本に関する署名部分",
        note: "日本国憲法の公布原本の署名部分を撮影した資料画像",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Constitution_of_Japan_original_signatures.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Constitution_of_Japan_original_signatures.jpg",
        credit: "Etsujirō / Wikimedia Commons",
        license: "CC BY-SA 4.0",
        factcheckStatus: "verified"
      }
    ],
    sources: [
      { id: "mext-social-commentary", label: "文部科学省『中学校学習指導要領解説 社会編』", url: "https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf" },
      { id: "archives-reconstruction", label: "国立公文書館『再建日本の出発』年表", url: "https://www.archives.go.jp/exhibition/digital/saiken/table.html" },
      { id: "archives-s20-reforms", label: "国立公文書館『昭和20年 様々な改革と新日本建設』", url: "https://www.archives.go.jp/exhibition/digital/s20/contents/7_01.html" },
      { id: "archives-land-reform", label: "国立公文書館 学習コンテンツ『農地改革』", url: "https://www.archives.go.jp/learning/archive_collection_6/" },
      { id: "archives-high-growth", label: "国立公文書館 特別展『高度成長の時代へ 1951-1972』資料", url: "https://www.archives.go.jp/information/pdf/h26/shiryou4-9.pdf" },
      { id: "ndl-constitution", label: "国立国会図書館『日本国憲法の誕生』憲法条文", url: "https://www.ndl.go.jp/constitution/etc/j01.html" },
      { id: "commons-constitution", label: "Wikimedia Commons『Constitution of Japan original signatures.jpg』", url: "https://commons.wikimedia.org/wiki/File:Constitution_of_Japan_original_signatures.jpg" }
    ]
  };
  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
