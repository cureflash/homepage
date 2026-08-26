(() => {
  const unit = {
    id:"hs-history-comprehensive-nation-state-meiji-restoration-001", title:"国民国家と明治維新", subtitle:"欧米の国民国家形成と日本の立憲国家形成を関連付ける",
    schoolStage:"high-school", field:"history", formalCourse:"歴史総合", formalPlacement:"B「近代化と私たち」(3) 国民国家と明治維新", unit:"歴史総合", era:"18世紀後半〜19世紀", practicalGradeGroup:"高校・歴史総合", factcheckStatus:"verified",
    keyPoint:"18世紀後半以降、欧米では市民革命や国民統合を通じて政治参加が拡大し、立憲体制に基づく国民国家の形成が進んだ。日本でも明治維新後の中央集権化、自由民権運動、大日本帝国憲法と帝国議会を通じて立憲国家の基礎が形成された。",
    timeline:[
      {label:"1871年",note:"廃藩置県"},
      {label:"1870年代〜",note:"自由民権運動の広がり"},
      {label:"1889年",note:"大日本帝国憲法発布"},
      {label:"1890年",note:"第1回帝国議会"}
    ],
    facts:[
      { id:"hc-b3-f1", claim:"18世紀後半以降の欧米では、市民革命や国民統合の動向の中で人々の政治的発言権が拡大し、立憲体制に基づく国民国家の形成が進んだ。", sources:["mext-hs-history-commentary"], factcheckStatus:"verified" },
      { id:"hc-b3-f2", claim:"日本では明治維新後の制度改革を通じて中央集権国家が形成され、1871年の廃藩置県では藩を廃して県を置き、政府が任命する府知事・県知事が行政を担うことになった。", sources:["mext-hs-history-commentary","archives-han"], factcheckStatus:"verified" },
      { id:"hc-b3-f3", claim:"自由民権運動は1870年代後半以降全国的に広がり、各地の民間政社などから国会開設や憲法制定を求める動きが展開した。", sources:["ndl-constitutional-start"], factcheckStatus:"verified" },
      { id:"hc-b3-f4", claim:"大日本帝国憲法は1889年2月11日に発布され、1890年11月に第1回帝国議会が開かれた。", sources:["archives-meiji-constitution","archives-imperial-diet"], factcheckStatus:"verified" }
    ],
    sections:[
      { id:"state", heading:"国民国家の形成", lead:"欧米と日本の政治変革を比較し、国民国家と立憲体制の形成を見る。", sentences:[
        { id:"hc-b3-01", template:"18世紀後半以降の欧米では、立憲体制に基づく{{国民国家}}の形成が進んだ。", terms:["国民国家"], importance:"A", sources:["mext-hs-history-commentary"], factcheckStatus:"verified" },
        { id:"hc-b3-02", template:"日本では明治維新後、1871年の{{廃藩置県}}などを通じて中央集権国家の形成が進んだ。", terms:["廃藩置県"], importance:"A", sources:["mext-hs-history-commentary","archives-han"], factcheckStatus:"verified" }
      ]},
      { id:"constitution", heading:"立憲国家への歩み", lead:"政治参加の拡大と憲法・議会の成立を関連付ける。", sentences:[
        { id:"hc-b3-03", template:"国会開設や憲法制定を求める動きを含む政治運動を{{自由民権運動}}という。", terms:["自由民権運動"], importance:"A", sources:["ndl-constitutional-start"], factcheckStatus:"verified" },
        { id:"hc-b3-04", template:"1889年に{{大日本帝国憲法}}が発布され、1890年に第1回帝国議会が開かれた。", terms:["大日本帝国憲法"], importance:"A", sources:["archives-meiji-constitution","archives-imperial-diet"], factcheckStatus:"verified" }
      ]}
    ],
    images:[],
    sources:[
      { id:"mext-hs-history-commentary", label:"文部科学省『高等学校学習指導要領（平成30年告示）解説 地理歴史編』", url:"https://www.mext.go.jp/content/20220802-mxt_kyoiku02-100002620_03.pdf" },
      { id:"archives-han", label:"国立公文書館『廃藩置県が断行される』", url:"https://www.archives.go.jp/ayumi/kobetsu/m04_1871_04.html" },
      { id:"ndl-constitutional-start", label:"国立国会図書館『第1章 立憲国家への始動』", url:"https://www.ndl.go.jp/modern/cha1/" },
      { id:"archives-meiji-constitution", label:"国立公文書館『大日本帝国憲法が発布される』", url:"https://www.archives.go.jp/ayumi/kobetsu/m22_1889_01.html" },
      { id:"archives-imperial-diet", label:"国立公文書館『第1回帝国議会が開会する』", url:"https://www.archives.go.jp/ayumi/kobetsu/m23_1890_03.html" }
    ]
  };
  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
