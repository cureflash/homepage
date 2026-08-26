(() => {
  const unit = {
    id: "jh-history-imperialism-sino-russo-wars-001",
    title: "帝国主義と日清・日露戦争",
    subtitle: "列強のアジア進出と、日本の戦争・条約・朝鮮半島との関係をつなぐ",
    schoolStage: "junior-high",
    field: "history",
    unit: "近代の日本と世界",
    era: "明治中期〜末期",
    practicalGradeGroup: "中学・歴史",
    factcheckStatus: "verified",
    keyPoint: "19世紀後半、列強はアジアで植民地や権益を広げた。日本も日清・日露戦争を経て国際的地位を高める一方、台湾の領有や韓国併合など、アジアへの支配を拡大した。",
    timeline: [
      { label: "1894〜1895年", note: "日清戦争" },
      { label: "1895年", note: "下関条約・三国干渉" },
      { label: "1902年", note: "日英同盟" },
      { label: "1904〜1905年", note: "日露戦争" },
      { label: "1905年", note: "ポーツマス条約" },
      { label: "1910年", note: "韓国併合" }
    ],
    facts: [
      {
        id: "imperialism-wars-fact-01",
        claim: "19世紀後半、工業化を進めた欧米列強はアジアやアフリカで植民地や権益を拡大し、列強による進出と競争が強まった。こうした動きは帝国主義の時代背景として扱われる。",
        sources: ["mext-social-commentary", "mext-social-curriculum"],
        factcheckStatus: "verified"
      },
      {
        id: "imperialism-wars-fact-02",
        claim: "1894年、朝鮮での甲午農民戦争をきっかけに日本と清が出兵し、両国の対立が深まって日清戦争が始まった。",
        sources: ["national-archives-sino-war", "mext-social-commentary"],
        factcheckStatus: "verified"
      },
      {
        id: "imperialism-wars-fact-03",
        claim: "1895年の下関条約で、清は朝鮮の独立を認め、日本に台湾・澎湖諸島・遼東半島を割譲し、賠償金2億両を支払うことなどを認めた。",
        sources: ["national-archives-shimonoseki", "mofa-meiji-treaties"],
        factcheckStatus: "verified"
      },
      {
        id: "imperialism-wars-fact-04",
        claim: "下関条約直後、ロシア・ドイツ・フランスは日本に遼東半島の返還を勧告し、日本は三国干渉を受け入れて清に返還した。",
        sources: ["national-archives-sino-war", "mofa-triple-intervention"],
        factcheckStatus: "verified"
      },
      {
        id: "imperialism-wars-fact-05",
        claim: "日清戦争後、列強が清で権益を広げ、ロシアが満州へ進出する中、日本はロシアを警戒して1902年にイギリスと日英同盟を結んだ。",
        sources: ["national-archives-russo-war", "mofa-russo-war-materials"],
        factcheckStatus: "verified"
      },
      {
        id: "imperialism-wars-fact-06",
        claim: "満州と韓国をめぐる日露交渉が決裂し、1904年に日露戦争が始まった。日本は奉天会戦や日本海海戦などを経たが、長期戦を続ける国力には限界があった。",
        sources: ["national-archives-russo-war", "mofa-russo-war-materials"],
        factcheckStatus: "verified"
      },
      {
        id: "imperialism-wars-fact-07",
        claim: "1905年のポーツマス条約で、ロシアは韓国における日本の優越的な地位を認め、旅順・大連の租借権、長春以南の鉄道利権を日本に譲り、南樺太を割譲した。",
        sources: ["national-archives-portsmouth", "mofa-meiji-treaties"],
        factcheckStatus: "verified"
      },
      {
        id: "imperialism-wars-fact-08",
        claim: "日本は日露戦争後、韓国への支配を強め、1910年の韓国併合条約によって韓国を日本に併合した。",
        sources: ["national-archives-korea-annexation", "mofa-russo-war-materials", "mext-social-commentary"],
        factcheckStatus: "verified"
      }
    ],
    sections: [
      {
        id: "sino-war",
        heading: "列強の進出と日清戦争",
        lead: "19世紀後半、欧米列強のアジア進出が強まり、日本も朝鮮半島をめぐって清と対立した。",
        sentences: [
          {
            id: "imperialism-wars-01",
            template: "19世紀後半、欧米の列強はアジアやアフリカで植民地や権益を広げ、{{帝国主義}}の動きが強まった。",
            terms: ["帝国主義"],
            importance: "A",
            sources: ["mext-social-commentary", "mext-social-curriculum"],
            factcheckStatus: "verified"
          },
          {
            id: "imperialism-wars-02",
            template: "1894年、朝鮮での甲午農民戦争をきっかけに日本と清の対立が深まり、{{日清戦争}}が始まった。",
            terms: ["日清戦争"],
            importance: "A",
            sources: ["national-archives-sino-war", "mext-social-commentary"],
            factcheckStatus: "verified"
          },
          {
            id: "imperialism-wars-03",
            template: "1895年の{{下関条約}}で、清は朝鮮の独立を認め、日本に台湾・澎湖諸島・遼東半島を割譲し、賠償金を支払うことなどを認めた。",
            terms: ["下関条約"],
            importance: "A",
            sources: ["national-archives-shimonoseki", "mofa-meiji-treaties"],
            factcheckStatus: "verified"
          },
          {
            id: "imperialism-wars-04",
            template: "下関条約の直後、ロシア・ドイツ・フランスが遼東半島の返還を求めた{{三国干渉}}を、日本は受け入れた。",
            terms: ["三国干渉"],
            importance: "A",
            sources: ["national-archives-sino-war", "mofa-triple-intervention"],
            factcheckStatus: "verified"
          }
        ]
      },
      {
        id: "russo-war-korea",
        heading: "日露戦争と韓国への支配拡大",
        lead: "日清戦争後はロシアとの対立が深まり、戦争と講和を経て日本の大陸・朝鮮半島への関与がさらに強まった。",
        sentences: [
          {
            id: "imperialism-wars-05",
            template: "ロシアの満州進出を警戒した日本は、1902年にイギリスと{{日英同盟}}を結んだ。",
            terms: ["日英同盟"],
            importance: "A",
            sources: ["national-archives-russo-war", "mofa-russo-war-materials"],
            factcheckStatus: "verified"
          },
          {
            id: "imperialism-wars-06",
            template: "満州と韓国をめぐる日露交渉が決裂し、1904年に{{日露戦争}}が始まった。",
            terms: ["日露戦争"],
            importance: "A",
            sources: ["national-archives-russo-war", "mofa-russo-war-materials"],
            factcheckStatus: "verified"
          },
          {
            id: "imperialism-wars-07",
            template: "1905年の{{ポーツマス条約}}で、ロシアは韓国における日本の優越的な地位を認め、旅順・大連の租借権や長春以南の鉄道利権を譲り、南樺太を日本に割譲した。",
            terms: ["ポーツマス条約"],
            importance: "A",
            sources: ["national-archives-portsmouth", "mofa-meiji-treaties"],
            factcheckStatus: "verified"
          },
          {
            id: "imperialism-wars-08",
            template: "日本は日露戦争後に韓国への支配を強め、1910年の{{韓国併合}}によって韓国を日本に併合した。",
            terms: ["韓国併合"],
            importance: "A",
            sources: ["national-archives-korea-annexation", "mext-social-commentary"],
            factcheckStatus: "verified"
          }
        ]
      }
    ],
    images: [
      {
        id: "shimonoseki-treaty-japanese-ratification",
        section: "sino-war",
        label: "日清講和条約（下関条約）の日本側批准書",
        note: "1895年の日清講和条約に関する日本政府文書の画像",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Treaty_of_Shimonoseki_Nippon_tenn%C5%8D.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Treaty_of_Shimonoseki_Nippon_tenn%C5%8D.jpg",
        credit: "大日本帝國政府 / 故宮博物院資料庫 / Wikimedia Commons",
        license: "Public Domain (PD-Japan-exempt; Japan Copyright Act Article 13)",
        factcheckStatus: "verified"
      },
      {
        id: "korea-annexation-treaty-1910",
        section: "russo-war-korea",
        label: "韓国併合に関する条約",
        note: "1910年8月22日に調印された条約原本の一部。国立公文書館所蔵資料を出典とする画像",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Japan%E2%80%93Korea_Annexation_Treaty_1.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Japan%E2%80%93Korea_Annexation_Treaty_1.jpg",
        credit: "大日本帝国・大韓帝国 / 国立公文書館・JACAR / Wikimedia Commons",
        license: "Public Domain (PD-Japan / PD-1996; Commons file-page tags)",
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
        id: "mext-social-curriculum",
        label: "文部科学省『中学校学習指導要領 社会』",
        url: "https://www.mext.go.jp/a_menu/shotou/new-cs/youryou/chu/sya.htm"
      },
      {
        id: "national-archives-sino-war",
        label: "国立公文書館『近代国家 日本の登場―日清戦争』",
        url: "https://www.archives.go.jp/exhibition/digital/modean_state/contents/nisshin-war/index.html"
      },
      {
        id: "national-archives-shimonoseki",
        label: "国立公文書館 学習コンテンツ『日清戦争―日清両国媾和条約及別約』",
        url: "https://www.archives.go.jp/learning/archive_collection_9/collection_3/"
      },
      {
        id: "mofa-meiji-treaties",
        label: "外務省外交史料館『条約書にみる明治の日本外交』",
        url: "https://www.mofa.go.jp/mofaj/ms/da/page25_001357.html"
      },
      {
        id: "mofa-triple-intervention",
        label: "外務省外交史料館『外交史料Q&A 明治期―三国干渉』",
        url: "https://www.mofa.go.jp/mofaj/annai/honsho/shiryo/qa/meiji_04.html"
      },
      {
        id: "national-archives-russo-war",
        label: "国立公文書館『近代国家 日本の登場―日露戦争』",
        url: "https://www.archives.go.jp/exhibition/digital/modean_state/contents/nichiro-war/index.html"
      },
      {
        id: "mofa-russo-war-materials",
        label: "外務省外交史料館『史料と解説―日露戦争』",
        url: "https://www.mofa.go.jp/mofaj/ms/da/page25_001749.html"
      },
      {
        id: "national-archives-portsmouth",
        label: "国立公文書館 学習コンテンツ『日露戦争―日露両国講和条約及追加約款』",
        url: "https://www.archives.go.jp/learning/archive_collection_10/collection_5/"
      },
      {
        id: "national-archives-korea-annexation",
        label: "国立公文書館『韓国併合条約が結ばれる』",
        url: "https://www.archives.go.jp/ayumi/kobetsu/m43_1910_01.html"
      },
      {
        id: "commons-shimonoseki-treaty",
        label: "Wikimedia Commons『Treaty of Shimonoseki Nippon tennō.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:Treaty_of_Shimonoseki_Nippon_tenn%C5%8D.jpg"
      },
      {
        id: "commons-korea-annexation-treaty",
        label: "Wikimedia Commons『Japan–Korea Annexation Treaty 1.jpg』",
        url: "https://commons.wikimedia.org/wiki/File:Japan%E2%80%93Korea_Annexation_Treaty_1.jpg"
      }
    ]
  };

  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();