(() => {
  const unit = {
    id: "jh-history-edo-economy-culture-foreign-relations-001",
    title: "江戸の経済・文化・対外関係",
    subtitle: "産業と交通、町人文化、統制下でも続いた海外との交流をつなぐ",
    schoolStage: "junior-high",
    field: "history",
    unit: "近世の日本",
    era: "江戸時代",
    practicalGradeGroup: "中学・歴史",
    factcheckStatus: "pending_factcheck",
    keyPoint: "江戸時代には産業・交通・都市の発達を背景に町人文化が広がった。幕府は海外との往来や貿易を統制したが、長崎・対馬・薩摩・松前などを通した交易や交流は続いた。",
    timeline: [
      { label: "17世紀", note: "幕府が海外渡航や貿易を段階的に統制" },
      { label: "1641年", note: "オランダ商館が長崎の出島へ移る" },
      { label: "江戸時代", note: "産業・交通・都市文化が発達" }
    ],
    facts: [
      {
        id: "edo-econ-fact-01",
        claim: "近世には農林水産業・手工業・商業が発達し、河川・海上交通や街道も発達した。",
        sources: ["mext-social-commentary"],
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "edo-econ-fact-02",
        claim: "大坂には諸藩の蔵屋敷が集まり、年貢米や各地の産物の販売・換金を担った。",
        sources: ["osaka-city-kurayashiki", "osaka-city-history"],
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "edo-culture-fact-01",
        claim: "大阪・京都・江戸などの都市では、経済力を高めた町人が文化の担い手となった。",
        sources: ["mext-social-commentary", "osaka-history-museum-chonin"],
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "edo-culture-fact-02",
        claim: "藩校や寺子屋などの普及は、人々の教育への関心の高まりと文化の社会的な広がりに関係した。",
        sources: ["mext-social-commentary"],
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "edo-foreign-fact-01",
        claim: "幕府は海外渡航や貿易船を制限し、キリスト教を禁止するなど対外関係を統制したが、交易・交流そのものがなくなったわけではない。",
        sources: ["mext-social-commentary", "rekihaku-room3"],
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "edo-foreign-fact-02",
        claim: "長崎ではオランダ・中国との交易が続き、1641年にはオランダ商館が出島へ移転した。",
        sources: ["mext-social-commentary", "dejima-history"],
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "edo-foreign-fact-03",
        claim: "朝鮮とは対馬藩を介して交流し、琉球との外交関係には薩摩藩が関わった。",
        sources: ["mext-social-commentary", "rekihaku-room3", "tsushima-museum-chosen"],
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "edo-foreign-fact-04",
        claim: "蝦夷地ではアイヌの人々が海産物などを交易し、松前藩を介した通商関係も形成された。",
        sources: ["mext-social-commentary", "rekihaku-room3", "national-ainu-trade"],
        factcheckStatus: "pending_factcheck"
      }
    ],
    sections: [
      {
        id: "economy-transport",
        heading: "産業・交通と都市",
        lead: "生産と流通が広がり、各地の産物と都市の市場が水運や街道で結び付いた。",
        sentences: [
          {
            id: "edo-economy-01",
            template: "江戸時代には農林水産業や手工業・{{商業}}が発達し、河川・{{海上交通}}や{{街道}}を通して人や物の移動が活発になった。",
            terms: ["商業", "海上交通", "街道"],
            importance: "A",
            sources: ["mext-social-commentary"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "edo-economy-02",
            template: "{{大坂}}には諸藩の{{蔵屋敷}}が集まり、年貢米や各地の産物の販売・換金を支える商業都市として発展した。",
            terms: ["大坂", "蔵屋敷"],
            importance: "A",
            sources: ["osaka-city-kurayashiki", "osaka-city-history"],
            factcheckStatus: "pending_factcheck"
          }
        ]
      },
      {
        id: "chonin-culture",
        heading: "町人文化と教育",
        lead: "都市経済の発達と教育の広がりを背景に、文化を担う人々の層が広がった。",
        sentences: [
          {
            id: "edo-culture-01",
            template: "大阪・京都・江戸などの都市では、経済力を高めた{{町人}}が文化の担い手となり、都市を中心に{{町人文化}}が形成された。",
            terms: ["町人", "町人文化"],
            importance: "A",
            sources: ["mext-social-commentary", "osaka-history-museum-chonin"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "edo-culture-02",
            template: "各地では{{藩校}}や{{寺子屋}}などが広がり、人々の教育への関心が高まるとともに、学問や文化が社会に広がった。",
            terms: ["藩校", "寺子屋"],
            importance: "B",
            sources: ["mext-social-commentary"],
            factcheckStatus: "pending_factcheck"
          }
        ]
      },
      {
        id: "foreign-relations",
        heading: "統制の中で続いた対外関係",
        lead: "幕府は海外との往来を厳しく統制したが、日本が国際社会から完全に切り離されたわけではなかった。",
        sentences: [
          {
            id: "edo-foreign-01",
            template: "幕府は海外渡航や貿易を制限し、キリスト教を禁止するなど対外関係を統制した。これらの政策は後に{{鎖国}}と呼ばれたが、海外との交易や交流は続いた。",
            terms: ["鎖国"],
            importance: "A",
            sources: ["mext-social-commentary", "rekihaku-room3"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "edo-foreign-02",
            template: "{{長崎}}では{{オランダ}}・{{中国}}との交易が続き、1641年にはオランダ商館が{{出島}}へ移された。",
            terms: ["長崎", "オランダ", "中国", "出島"],
            importance: "A",
            sources: ["mext-social-commentary", "dejima-history"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "edo-foreign-03",
            template: "{{朝鮮}}とは{{対馬藩}}を介して交流し、{{琉球}}との外交関係には{{薩摩藩}}が関わるなど、複数の窓口を通して海外との関係が保たれた。",
            terms: ["朝鮮", "対馬藩", "琉球", "薩摩藩"],
            importance: "A",
            sources: ["mext-social-commentary", "rekihaku-room3", "tsushima-museum-chosen"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "edo-foreign-04",
            template: "蝦夷地では{{アイヌ}}の人々が海産物などを交易し、{{松前藩}}を介した通商関係も形成された。",
            terms: ["アイヌ", "松前藩"],
            importance: "A",
            sources: ["mext-social-commentary", "rekihaku-room3", "national-ainu-trade"],
            factcheckStatus: "pending_factcheck"
          }
        ]
      }
    ],
    images: [
      {
        id: "hiroshige-tokaido-kyo",
        section: "economy-transport",
        label: "歌川広重『東海道五十三對　京』",
        note: "1844〜1847年ごろの錦絵。三条大橋付近の人の往来を描いた東海道関連資料",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/T%C5%8Dkaid%C5%8D_goj%C5%ABsan_tsui%2C_Ky%C5%8D_by_Hiroshige.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:T%C5%8Dkaid%C5%8D_goj%C5%ABsan_tsui%2C_Ky%C5%8D_by_Hiroshige.jpg",
        credit: "歌川広重 / Museum of Fine Arts, Boston / Wikimedia Commons",
        license: "Public Domain Mark 1.0 (PD-Art / PD-Japan)",
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "dejima-nagasaki-bay",
        section: "foreign-relations",
        label: "出島と長崎港の交易風景",
        note: "1800〜1825年ごろの絵画。出島付近にオランダ船と中国船が描かれている",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/DejimaInNagasakiBay.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:DejimaInNagasakiBay.jpg",
        credit: "作者不詳の絵画 / British Museum / Wikimedia Commons",
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
        id: "osaka-city-kurayashiki",
        label: "大阪市『蔵屋敷跡』",
        url: "https://www.city.osaka.lg.jp/kensetsu/page/0000009873.html"
      },
      {
        id: "osaka-city-history",
        label: "大阪市立図書館・大阪市史編纂所『中世・近世の大坂』",
        url: "https://www.oml.city.osaka.lg.jp/page/1146.html"
      },
      {
        id: "osaka-history-museum-chonin",
        label: "大阪歴史博物館『近世大坂の町人文化』",
        url: "https://www.osakamushis.jp/news/2001/chounin_bunka.html"
      },
      {
        id: "rekihaku-room3",
        label: "国立歴史民俗博物館『第3展示室―国際社会のなかの近世日本』",
        url: "https://www.rekihaku.ac.jp/exhibitions/room3/"
      },
      {
        id: "dejima-history",
        label: "出島公式サイト『出島の歴史』",
        url: "https://nagasakidejima.jp/history/"
      },
      {
        id: "tsushima-museum-chosen",
        label: "対馬博物館『対馬の外交II 朝鮮通信使』",
        url: "https://tsushimamuseum.jp/exhibition/1058/"
      },
      {
        id: "national-ainu-trade",
        label: "国立アイヌ民族博物館関連資料（近世の交易）",
        url: "https://nam.go.jp/wp/wp-content/uploads/2020/10/siryou1.pdf"
      },
      {
        id: "commons-hiroshige-tokaido-kyo",
        label: "Wikimedia Commons『Tōkaidō gojūsan tsui, Kyō by Hiroshige.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:T%C5%8Dkaid%C5%8D_goj%C5%ABsan_tsui%2C_Ky%C5%8D_by_Hiroshige.jpg"
      },
      {
        id: "commons-dejima-nagasaki-bay",
        label: "Wikimedia Commons『DejimaInNagasakiBay.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:DejimaInNagasakiBay.jpg"
      }
    ]
  };

  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
