(() => {
  const unit = {
    id: "jh-history-meiji-state-industrialization-001",
    title: "明治国家と産業化",
    subtitle: "教育・兵制・税制の改革と、近代産業・生活の変化をつなぐ",
    schoolStage: "junior-high",
    field: "history",
    unit: "近代の日本と世界",
    era: "明治前期",
    practicalGradeGroup: "中学・歴史",
    factcheckStatus: "verified",
    keyPoint: "明治政府は富国強兵・殖産興業を進め、教育・兵制・税制などを改めるとともに、鉄道や工場を整備した。欧米の制度や文化が取り入れられ、人々の生活も大きく変化した。",
    timeline: [
      { label: "1872年", note: "学制・新橋―横浜間の鉄道・富岡製糸場" },
      { label: "1873年", note: "徴兵令・地租改正条例" },
      { label: "明治前期", note: "殖産興業と文明開化" }
    ],
    facts: [
      {
        id: "meiji-state-fact-01",
        claim: "明治政府は富国強兵・殖産興業政策の下で、教育・兵制・税制などの制度を改革し、近代国家の基礎を整えようとした。",
        sources: ["mext-social-commentary"],
        factcheckStatus: "verified"
      },
      {
        id: "meiji-state-fact-02",
        claim: "1872年に学制が公布され、全国的な近代学校制度を整備する方針が示された。",
        sources: ["national-archives-gakusei", "mext-social-commentary"],
        factcheckStatus: "verified"
      },
      {
        id: "meiji-state-fact-03",
        claim: "1873年に徴兵令が発せられ、男子を兵籍に登録し、徴兵検査の合格者から兵役に服する者を選ぶ制度が設けられた。",
        sources: ["national-archives-conscription", "mext-social-commentary"],
        factcheckStatus: "verified"
      },
      {
        id: "meiji-state-fact-04",
        claim: "1873年の地租改正条例では、地価を基準に地租を定め、従来の米などによる物納から金納へ改める仕組みが示された。",
        sources: ["national-archives-land-tax", "mext-social-commentary"],
        factcheckStatus: "verified"
      },
      {
        id: "meiji-state-fact-05",
        claim: "明治初期には封建的な身分制度が改められ、華族・士族・平民という新たな区分が設けられる一方、旧来の身分に基づく法的な制限が段階的に廃止された。ただし、現実の社会には差別が残った。",
        sources: ["ndl-meiji-constitution-background", "mext-social-commentary"],
        factcheckStatus: "verified"
      },
      {
        id: "meiji-industry-fact-01",
        claim: "政府は殖産興業を進め、近代的な産業や技術を育てるために官営工場などを設けた。1872年に操業を始めた富岡製糸場は、器械製糸の模範工場として設立された。",
        sources: ["mext-social-commentary", "tomioka-official"],
        factcheckStatus: "verified"
      },
      {
        id: "meiji-industry-fact-02",
        claim: "1872年、新橋と横浜の間で日本最初の鉄道が本開業し、近代的な交通網の整備が始まった。",
        sources: ["national-archives-railway", "mext-social-commentary"],
        factcheckStatus: "verified"
      },
      {
        id: "meiji-culture-fact-01",
        claim: "明治初期には洋装・洋風建築・鉄道・郵便など欧米由来の制度や文化が広がり、こうした社会や生活の変化は文明開化と呼ばれた。",
        sources: ["mext-social-commentary", "national-archives-civilization", "ndl-meiji-nishikie"],
        factcheckStatus: "verified"
      }
    ],
    sections: [
      {
        id: "state-building",
        heading: "近代国家をつくる改革",
        lead: "新政府は全国を共通の制度で運営するため、教育・軍事・税などを大きく改めた。",
        sentences: [
          {
            id: "meiji-state-01",
            template: "明治政府は{{富国強兵}}を進め、教育・兵制・税制などを改めて近代国家の基礎を整えようとした。",
            terms: ["富国強兵"],
            importance: "A",
            sources: ["mext-social-commentary"],
            factcheckStatus: "verified"
          },
          {
            id: "meiji-state-02",
            template: "1872年に{{学制}}が公布され、全国的な近代学校制度を整備する方針が示された。",
            terms: ["学制"],
            importance: "A",
            sources: ["national-archives-gakusei", "mext-social-commentary"],
            factcheckStatus: "verified"
          },
          {
            id: "meiji-state-03",
            template: "1873年に{{徴兵令}}が発せられ、男子を兵籍に登録し、徴兵検査を基に兵役に服する者を選ぶ制度が設けられた。",
            terms: ["徴兵令"],
            importance: "A",
            sources: ["national-archives-conscription", "mext-social-commentary"],
            factcheckStatus: "verified"
          },
          {
            id: "meiji-state-04",
            template: "1873年の{{地租改正}}では、地価を基準に税額を定め、地租を米などではなく{{金納}}する仕組みへ改めた。",
            terms: ["地租改正", "金納"],
            importance: "A",
            sources: ["national-archives-land-tax", "mext-social-commentary"],
            factcheckStatus: "verified"
          },
          {
            id: "meiji-state-05",
            template: "明治初期には江戸時代の身分制度が改められ、旧来の身分に基づく法的な制限が段階的に廃止されたが、現実の社会には差別が残った。",
            terms: [],
            importance: "B",
            sources: ["ndl-meiji-constitution-background", "mext-social-commentary"],
            factcheckStatus: "verified"
          }
        ]
      },
      {
        id: "industry-culture",
        heading: "産業化と文明開化",
        lead: "政府は産業や交通を育て、欧米の技術や文化も積極的に取り入れた。",
        sentences: [
          {
            id: "meiji-industry-01",
            template: "政府は{{殖産興業}}を進め、1872年には器械製糸の模範工場として{{富岡製糸場}}が操業を始めた。",
            terms: ["殖産興業", "富岡製糸場"],
            importance: "A",
            sources: ["mext-social-commentary", "tomioka-official"],
            factcheckStatus: "verified"
          },
          {
            id: "meiji-industry-02",
            template: "1872年、{{新橋}}―{{横浜}}間で日本最初の{{鉄道}}が本開業し、近代的な交通網の整備が始まった。",
            terms: ["新橋", "横浜", "鉄道"],
            importance: "A",
            sources: ["national-archives-railway", "mext-social-commentary"],
            factcheckStatus: "verified"
          },
          {
            id: "meiji-culture-01",
            template: "洋装・洋風建築・鉄道・郵便など欧米由来の制度や文化が広がった明治初期の風潮を{{文明開化}}という。",
            terms: ["文明開化"],
            importance: "A",
            sources: ["mext-social-commentary", "national-archives-civilization", "ndl-meiji-nishikie"],
            factcheckStatus: "verified"
          }
        ]
      }
    ],
    images: [
      {
        id: "meiji-elementary-school-1874",
        section: "state-building",
        label: "明治初期の小学校を描いた錦絵",
        note: "1874年刊『訓童 小學校教導之圖』。学制発布後の小学校の情景を描く資料",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kund%C5%8D_sh%C5%8Dgakk%C5%8D_ky%C5%8Dd%C5%8D_no_zu.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Kund%C5%8D_sh%C5%8Dgakk%C5%8D_ky%C5%8Dd%C5%8D_no_zu.jpg",
        credit: "肉亭夏良（小林清親と推定） / Wikimedia Commons",
        license: "Public Domain (PD-Japan / PD-US)",
        factcheckStatus: "verified"
      },
      {
        id: "tomioka-east-cocoon-warehouse",
        section: "industry-culture",
        label: "富岡製糸場 東置繭所",
        note: "1872年に建てられた富岡製糸場の東置繭所を撮影した写真",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tomioka_Silk_Mill_East_Cocoon_Warehouse04.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Tomioka_Silk_Mill_East_Cocoon_Warehouse04.jpg",
        credit: "Hasec / Wikimedia Commons",
        license: "Public Domain (PD-self)",
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
        id: "national-archives-gakusei",
        label: "国立公文書館『学制が公布される』",
        url: "https://www.archives.go.jp/ayumi/kobetsu/m05_1872_02.html"
      },
      {
        id: "national-archives-conscription",
        label: "国立公文書館『徴兵令が発せられる』",
        url: "https://www.archives.go.jp/ayumi/kobetsu/m06_1873_01.html"
      },
      {
        id: "national-archives-land-tax",
        label: "国立公文書館『地租改正条例が制定される』",
        url: "https://www.archives.go.jp/ayumi/kobetsu/m06_1873_03.html"
      },
      {
        id: "ndl-meiji-constitution-background",
        label: "国立国会図書館『明治憲法と日本国憲法に関する基礎的資料』",
        url: "https://dl.ndl.go.jp/view/download/digidepo_11343084_po_shukenshi027.pdf?contentNo=1"
      },
      {
        id: "tomioka-official",
        label: "富岡市『富岡製糸場 場内のご案内』",
        url: "https://www.tomioka-silk.jp/_tomioka-silk-mill/guide/overview.html"
      },
      {
        id: "national-archives-railway",
        label: "国立公文書館『新橋・横浜間の鉄道が開通する』",
        url: "https://www.archives.go.jp/ayumi/kobetsu/m05_1872_03.html"
      },
      {
        id: "national-archives-civilization",
        label: "国立公文書館『文明開化と明治のくらし』",
        url: "https://www.archives.go.jp/exhibition/jousetsu_25_4.html"
      },
      {
        id: "ndl-meiji-nishikie",
        label: "国立国会図書館 NDLイメージバンク『明治時代の錦絵の特徴』",
        url: "https://www.ndl.go.jp/imagebank/column/meiji_nishikie"
      },
      {
        id: "commons-meiji-school",
        label: "Wikimedia Commons『Kundō shōgakkō kyōdō no zu.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:Kund%C5%8D_sh%C5%8Dgakk%C5%8D_ky%C5%8Dd%C5%8D_no_zu.jpg"
      },
      {
        id: "commons-tomioka-warehouse",
        label: "Wikimedia Commons『Tomioka Silk Mill East Cocoon Warehouse04.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:Tomioka_Silk_Mill_East_Cocoon_Warehouse04.jpg"
      }
    ]
  };

  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();