(() => {
  const unit = {
    id:"hs-history-comprehensive-wwii-postwar-order-001", title:"第二次世界大戦と戦後国際秩序", subtitle:"戦争の惨禍から国連・冷戦・日本の改革と主権回復までをつなぐ",
    schoolStage:"high-school", field:"history", formalCourse:"歴史総合", formalPlacement:"C「国際秩序の変化や大衆化と私たち」(3) 経済危機と第二次世界大戦", unit:"歴史総合", era:"1939〜1950年代初頭", practicalGradeGroup:"高校・歴史総合", factcheckStatus:"verified",
    keyPoint:"第二次世界大戦は人類全体に大きな惨禍を及ぼした。戦後は国際連合と国際経済体制、冷戦とアジアの脱植民地化が進む中、日本では占領下の戦後改革と日本国憲法制定を経て、1952年に平和条約発効により独立を回復した。",
    timeline:[
      {label:"1939年",note:"第二次世界大戦開始"},
      {label:"1945年",note:"日本の降伏・国際連合発足"},
      {label:"1946年",note:"日本国憲法公布"},
      {label:"1951年",note:"サンフランシスコ平和条約署名"},
      {label:"1952年",note:"平和条約発効・独立回復"}
    ],
    facts:[
      { id:"hc-c3b-f1", claim:"第二次世界大戦は世界各地に戦場が広がり、戦争当事国だけでなく多くの民間人を含む人類全体に大きな惨禍を及ぼした。", sources:["mext-hs-history-commentary"], factcheckStatus:"verified" },
      { id:"hc-c3b-f2", claim:"日本はポツダム宣言の諸条項を受諾し、1945年9月2日に降伏文書への署名とその履行に関する措置をとった。", sources:["jacar-surrender"], factcheckStatus:"verified" },
      { id:"hc-c3b-f3", claim:"国際連合憲章は1945年10月24日に発効し、国際連合が成立した。戦後国際秩序の形成では、冷戦の始まりとアジア諸国の動向も相互に関係した。", sources:["un-charter","mext-hs-history-commentary"], factcheckStatus:"verified" },
      { id:"hc-c3b-f4", claim:"日本は占領下で戦後改革と日本国憲法制定を進め、1951年9月8日にサンフランシスコ平和条約へ署名し、1952年4月28日の発効によって独立を回復した。", sources:["mext-hs-history-commentary","mofa-san-francisco"], factcheckStatus:"verified" }
    ],
    sections:[
      { id:"war", heading:"第二次世界大戦の惨禍", lead:"世界規模の戦争が社会と人々の生活に及ぼした影響を捉える。", sentences:[
        { id:"hc-c3b-01", template:"{{第二次世界大戦}}は人類全体に大きな惨禍を及ぼした。", terms:["第二次世界大戦"], importance:"A", sources:["mext-hs-history-commentary"], factcheckStatus:"verified" },
        { id:"hc-c3b-02", template:"日本は1945年に{{ポツダム宣言}}を受諾し、9月2日に降伏文書への署名が行われた。", terms:["ポツダム宣言"], importance:"A", sources:["jacar-surrender"], factcheckStatus:"verified" }
      ]},
      { id:"postwar", heading:"戦後国際秩序と日本の復帰", lead:"国連・冷戦・脱植民地化と、日本の占領改革・独立回復を関連付ける。", sentences:[
        { id:"hc-c3b-03", template:"1945年、国際連合憲章の発効によって{{国際連合}}が成立した。", terms:["国際連合"], importance:"A", sources:["un-charter"], factcheckStatus:"verified" },
        { id:"hc-c3b-04", template:"日本は{{サンフランシスコ平和条約}}が1952年に発効したことで独立を回復した。", terms:["サンフランシスコ平和条約"], importance:"A", sources:["mofa-san-francisco"], factcheckStatus:"verified" }
      ]}
    ],
    images:[],
    sources:[
      { id:"mext-hs-history-commentary", label:"文部科学省『高等学校学習指導要領（平成30年告示）解説 地理歴史編』", url:"https://www.mext.go.jp/content/20220802-mxt_kyoiku02-100002620_03.pdf" },
      { id:"jacar-surrender", label:"アジア歴史資料センター『大東亜戦争終結ニ関スル関係文書調印ニ関スル件』", url:"https://www.jacar.archives.go.jp/das/meta/A04017701000" },
      { id:"un-charter", label:"United Nations Treaty Collection『Charter of the United Nations』", url:"https://treaties.un.org/Pages/ViewDetails.aspx?chapter=1&clang=_en&mtdsg_no=I-1&src=TREATY" },
      { id:"mofa-san-francisco", label:"外務省外交史料館『サンフランシスコ講和への道』", url:"https://www.mofa.go.jp/mofaj/annai/honsho/shiryo/san_francisco.html" }
    ]
  };
  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
