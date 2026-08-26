(() => {
  const unit = {
    id: "jh-civics-elections-participation-001",
    title: "選挙と政治参加",
    subtitle: "選挙の原則と代表を選ぶ仕組みを整理する",
    schoolStage: "junior-high", field: "civics", unit: "民主政治と政治参加", era: "現代", practicalGradeGroup: "中学・公民",
    factcheckStatus: "pending_factcheck",
    keyPoint: "民主政治では、主権者である国民が選挙などを通して代表者を選び、政治に参加する。日本では18歳以上の国民に選挙権があり、普通・平等・直接・秘密選挙の原則が基本となる。",
    timeline: [{ label: "2016年", note: "国政選挙で18歳選挙権が実施" }],
    facts: [
      { id:"election-fact-01", claim:"日本国憲法は、公務員を選定し罷免することを国民固有の権利とし、成年者による普通選挙を保障している。", sources:["constitution","mext"], factcheckStatus:"pending_factcheck" },
      { id:"election-fact-02", claim:"公職選挙法では、国政選挙の選挙権年齢は18歳以上である。", sources:["soumu-election","mext"], factcheckStatus:"pending_factcheck" },
      { id:"election-fact-03", claim:"衆議院議員総選挙は小選挙区選挙と比例代表選挙を組み合わせて行われる。", sources:["soumu-election"], factcheckStatus:"pending_factcheck" },
      { id:"election-fact-04", claim:"選挙以外にも、請願、住民運動、政党や政治団体への参加など多様な政治参加の方法がある。", sources:["mext","constitution"], factcheckStatus:"pending_factcheck" },
      { id:"election-fact-05", claim:"秘密投票は、誰に投票したかを他人に知られないようにし、自由な意思による投票を守る原則である。", sources:["constitution","soumu-election"], factcheckStatus:"pending_factcheck" }
    ],
    sections:[
      { id:"principles", heading:"選挙の原則", lead:"選挙は、主権者の意思を政治に反映する代表的な制度である。", sentences:[
        { id:"election-01", template:"日本では国政選挙の選挙権は原則として{{18歳以上}}の国民に認められている。", terms:["18歳以上"], importance:"A", sources:["soumu-election"], factcheckStatus:"pending_factcheck" },
        { id:"election-02", template:"財産や性別などによらず広く選挙権を認める原則を{{普通選挙}}という。", terms:["普通選挙"], importance:"A", sources:["constitution","mext"], factcheckStatus:"pending_factcheck" },
        { id:"election-03", template:"誰に投票したかを他人に知られないようにする原則を{{秘密選挙}}という。", terms:["秘密選挙"], importance:"A", sources:["constitution"], factcheckStatus:"pending_factcheck" }
      ]},
      { id:"systems", heading:"代表を選ぶ仕組み", lead:"選挙制度には、地域から代表を選ぶ方法と、得票に応じて議席を配分する方法がある。", sentences:[
        { id:"election-04", template:"一つの選挙区から一人を選ぶ方式を{{小選挙区制}}という。", terms:["小選挙区制"], importance:"A", sources:["soumu-election"], factcheckStatus:"pending_factcheck" },
        { id:"election-05", template:"政党などの得票に応じて議席を配分する方式を{{比例代表制}}という。", terms:["比例代表制"], importance:"A", sources:["soumu-election"], factcheckStatus:"pending_factcheck" },
        { id:"election-06", template:"選挙や請願などを通して政治に関わることを{{政治参加}}という。", terms:["政治参加"], importance:"A", sources:["mext"], factcheckStatus:"pending_factcheck" }
      ]}
    ],
    images: [],
    sources:[
      { id:"mext", label:"文部科学省『中学校学習指導要領（平成29年告示）解説 社会編』", url:"https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf" },
      { id:"constitution", label:"衆議院『日本国憲法』", url:"https://www.shugiin.go.jp/internet/itdb_annai.nsf/html/statics/shiryo/dl-constitution.htm" },
      { id:"soumu-election", label:"総務省『選挙・政治資金』", url:"https://www.soumu.go.jp/senkyo/" }
    ]
  };
  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || []; window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
