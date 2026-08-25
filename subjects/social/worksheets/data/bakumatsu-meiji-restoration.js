(() => {
  const unit = {
    id: "jh-history-bakumatsu-meiji-restoration-001",
    title: "幕末と明治維新",
    subtitle: "開国から幕府の終わり、新政府の成立までをつなぐ",
    schoolStage: "junior-high",
    field: "history",
    unit: "近代の日本と世界",
    era: "幕末〜明治初期",
    practicalGradeGroup: "中学・歴史",
    factcheckStatus: "pending_factcheck",
    keyPoint: "欧米諸国の進出を背景に幕府は開国へ転じ、その政治的・社会的な影響の中で幕府が終わり、新政府が成立して明治維新の改革が始まった。",
    timeline: [
      { label: "1853年", note: "ペリーが浦賀に来航" },
      { label: "1854年", note: "日米和親条約" },
      { label: "1858年", note: "日米修好通商条約" },
      { label: "1867年", note: "大政奉還・王政復古" },
      { label: "1868年", note: "戊辰戦争・五箇条の御誓文" },
      { label: "1871年", note: "廃藩置県" }
    ],
    facts: [
      {
        id: "bakumatsu-fact-01",
        claim: "1853年、アメリカ東インド艦隊司令長官ペリーが4隻の艦船を率いて浦賀沖に来航し、幕府にアメリカ大統領の国書を渡した。",
        sources: ["national-archives-blackships", "mext-social-commentary"],
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "bakumatsu-fact-02",
        claim: "1854年の日米和親条約で下田・箱館が開かれ、幕府は対外政策を転換して開国へ進んだ。",
        sources: ["national-archives-treaties", "mext-social-commentary"],
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "bakumatsu-fact-03",
        claim: "1858年の日米修好通商条約では開港地・開市場、関税、領事裁判権などが定められ、日本側に領事裁判権撤廃や関税自主権回復という課題を残した。",
        sources: ["national-archives-treaties", "national-archives-treaty-revision"],
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "bakumatsu-fact-04",
        claim: "開国の政治的・社会的な影響や幕府への反発が広がる中、薩摩藩と長州藩は協力を深め、倒幕を目指す動きが強まった。",
        sources: ["mext-social-commentary", "national-archives-bakumatsu-timeline"],
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "bakumatsu-fact-05",
        claim: "1867年、将軍徳川慶喜は政権を朝廷に返す大政奉還を行い、同年に王政復古の大号令が発せられた。",
        sources: ["national-archives-bakumatsu-timeline", "national-archives-restoration"],
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "meiji-restoration-fact-01",
        claim: "1868年に始まった戊辰戦争では新政府軍と旧幕府側が戦い、1869年の箱館での降伏まで戦闘が続いた。",
        sources: ["national-archives-bakumatsu-timeline", "national-archives-ayumi"],
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "meiji-restoration-fact-02",
        claim: "1868年、新政府は五箇条の御誓文を示し、広く会議を開くことや世界から知識を求めることなどを新しい政治の基本方針として掲げた。",
        sources: ["national-archives-charter-oath", "jacar-charter-oath"],
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "meiji-restoration-fact-03",
        claim: "1871年の廃藩置県で藩は廃止され、中央政府が府知事・県知事を任命する仕組みに改められた。",
        sources: ["mext-social-commentary", "national-archives-ayumi", "national-archives-pamphlet"],
        factcheckStatus: "pending_factcheck"
      }
    ],
    sections: [
      {
        id: "opening",
        heading: "黒船来航と開国",
        lead: "欧米諸国がアジアへ進出する中、日本にも開国を求める圧力が強まった。",
        sentences: [
          {
            id: "bakumatsu-01",
            template: "1853年、アメリカ東インド艦隊司令長官{{ペリー}}が4隻の艦船を率いて{{浦賀}}沖に来航し、幕府に大統領の国書を渡した。",
            terms: ["ペリー", "浦賀"],
            importance: "A",
            sources: ["national-archives-blackships", "mext-social-commentary"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "bakumatsu-02",
            template: "1854年、幕府はアメリカと{{日米和親条約}}を結び、{{下田}}・{{箱館}}を開くなど、対外政策を転換して開国へ進んだ。",
            terms: ["日米和親条約", "下田", "箱館"],
            importance: "A",
            sources: ["national-archives-treaties", "mext-social-commentary"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "bakumatsu-03",
            template: "1858年の{{日米修好通商条約}}では開港地や関税、{{領事裁判権}}などが定められ、のちに領事裁判権の撤廃と{{関税自主権}}の回復が条約改正の課題となった。",
            terms: ["日米修好通商条約", "領事裁判権", "関税自主権"],
            importance: "A",
            sources: ["national-archives-treaties", "national-archives-treaty-revision"],
            factcheckStatus: "pending_factcheck"
          }
        ]
      },
      {
        id: "bakufu-collapse",
        heading: "幕府の終わり",
        lead: "開国後の社会不安と政治対立の中で、幕府に代わる政治を求める動きが強まった。",
        sentences: [
          {
            id: "bakumatsu-04",
            template: "開国の影響や幕府への反発が広がる中、{{薩摩藩}}と{{長州藩}}は協力を深め、倒幕を目指す動きが強まった。",
            terms: ["薩摩藩", "長州藩"],
            importance: "A",
            sources: ["mext-social-commentary", "national-archives-bakumatsu-timeline"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "bakumatsu-05",
            template: "1867年、将軍{{徳川慶喜}}は政権を朝廷に返す{{大政奉還}}を行い、同じ年に{{王政復古の大号令}}が発せられた。",
            terms: ["徳川慶喜", "大政奉還", "王政復古の大号令"],
            importance: "A",
            sources: ["national-archives-bakumatsu-timeline", "national-archives-restoration"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "bakumatsu-06",
            template: "1868年に始まった{{戊辰戦争}}では新政府軍と旧幕府側が戦い、1869年の箱館での降伏まで戦闘が続いた。",
            terms: ["戊辰戦争"],
            importance: "B",
            sources: ["national-archives-bakumatsu-timeline", "national-archives-ayumi"],
            factcheckStatus: "pending_factcheck"
          }
        ]
      },
      {
        id: "new-government",
        heading: "新政府の基本方針",
        lead: "新政府は中央集権的な国家をつくるため、政治の方針と制度を大きく改めていった。",
        sentences: [
          {
            id: "bakumatsu-07",
            template: "1868年、新政府は{{五箇条の御誓文}}を示し、広く会議を開くことや世界から知識を求めることなどを新しい政治の基本方針として掲げた。",
            terms: ["五箇条の御誓文"],
            importance: "A",
            sources: ["national-archives-charter-oath", "jacar-charter-oath"],
            factcheckStatus: "pending_factcheck"
          },
          {
            id: "bakumatsu-08",
            template: "1871年の{{廃藩置県}}で藩は廃止され、中央政府が府知事・県知事を任命する仕組みに改められた。",
            terms: ["廃藩置県"],
            importance: "A",
            sources: ["mext-social-commentary", "national-archives-ayumi", "national-archives-pamphlet"],
            factcheckStatus: "pending_factcheck"
          }
        ]
      }
    ],
    images: [
      {
        id: "perry-yokohama-commissioners",
        section: "opening",
        label: "ペリーと日本側使節の会見を描いた石版画",
        note: "1856年刊行のペリー遠征記に収められた、横浜での会見場面を描く石版画",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Commo._Perry_meeting_the_imperial_Commissioners_at_Yokuhama_-_from_nature_by_W.T._Petris_%3B_Lith._of_Sarony_%26_Co.%2C_New_York._LCCN95507967.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Commo._Perry_meeting_the_imperial_Commissioners_at_Yokuhama_-_from_nature_by_W.T._Petris_%3B_Lith._of_Sarony_%26_Co.%2C_New_York._LCCN95507967.jpg",
        credit: "Sarony & Co. / Library of Congress / Wikimedia Commons",
        license: "Public Domain Mark 1.0",
        factcheckStatus: "pending_factcheck"
      },
      {
        id: "charter-oath-government-journal",
        section: "new-government",
        label: "『五箇条の御誓文』",
        note: "1876年発行の『太政官日誌』に掲載された五箇条の御誓文",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/5jo1.gif",
        sourcePage: "https://commons.wikimedia.org/wiki/File:5jo1.gif",
        credit: "日本政府『太政官日誌』 / Wikimedia Commons",
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
        id: "national-archives-blackships",
        label: "国立公文書館『激動幕末―黒船と開国』",
        url: "https://www.archives.go.jp/exhibition/digital/bakumatsu/contents/category03.html"
      },
      {
        id: "national-archives-treaties",
        label: "国立公文書館『激動幕末―五ヶ国条約并税則』",
        url: "https://www.archives.go.jp/exhibition/digital/bakumatsu/contents/20.html"
      },
      {
        id: "national-archives-treaty-revision",
        label: "国立公文書館『近代国家 日本の登場―条約改正交渉』",
        url: "https://www.archives.go.jp/exhibition/digital/modean_state/contents/negotiation/index.html"
      },
      {
        id: "national-archives-bakumatsu-timeline",
        label: "国立公文書館『激動幕末―年表』",
        url: "https://www.archives.go.jp/exhibition/digital/bakumatsu/history.html"
      },
      {
        id: "national-archives-restoration",
        label: "国立公文書館『王政復古の大号令が発せられる』",
        url: "https://www.archives.go.jp/ayumi/kobetsu/k03_1867_01.html"
      },
      {
        id: "national-archives-charter-oath",
        label: "国立公文書館『五箇条の御誓文が発せられる』",
        url: "https://www.archives.go.jp/ayumi/kobetsu/m01_1868_02.html"
      },
      {
        id: "jacar-charter-oath",
        label: "アジア歴史資料センター『五ヶ条ノ御誓文』",
        url: "https://www.jacar.archives.go.jp/das/meta/A14110269100"
      },
      {
        id: "national-archives-ayumi",
        label: "国立公文書館『日本のあゆみ 年表』",
        url: "https://www.archives.go.jp/ayumi/table.html"
      },
      {
        id: "national-archives-pamphlet",
        label: "国立公文書館パンフレット（廃藩置県）",
        url: "https://www.archives.go.jp/publication/pamphlet/pamphlet.pdf"
      },
      {
        id: "commons-perry-yokohama",
        label: "Wikimedia Commons『Commo. Perry meeting the imperial Commissioners at Yokuhama...』",
        url: "https://commons.wikimedia.org/wiki/File:Commo._Perry_meeting_the_imperial_Commissioners_at_Yokuhama_-_from_nature_by_W.T._Petris_%3B_Lith._of_Sarony_%26_Co.%2C_New_York._LCCN95507967.jpg"
      },
      {
        id: "commons-charter-oath",
        label: "Wikimedia Commons『5jo1.gif』",
        url: "https://commons.wikimedia.org/wiki/File:5jo1.gif"
      }
    ]
  };

  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
