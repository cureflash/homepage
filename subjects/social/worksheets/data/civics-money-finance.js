(() => {
  const unit = {
    id:"jh-civics-money-finance-001", title:"お金と金融", subtitle:"貨幣・銀行・日本銀行の役割を整理する",
    schoolStage:"junior-high", field:"civics", unit:"私たちと経済", era:"現代", practicalGradeGroup:"中学・公民", factcheckStatus:"verified",
    keyPoint:"貨幣は交換や価値の保存などに使われ、金融機関は資金の貸し手と借り手をつなぐ。日本銀行は中央銀行として銀行券の発行や金融政策を担う。",
    timeline:[],
    facts:[
      { id:"money-fact-01", claim:"貨幣には交換の仲立ち、価値の尺度、価値の保存などの機能がある。", sources:["mext","boj-education"], factcheckStatus:"verified" },
      { id:"money-fact-02", claim:"銀行などの金融機関は、預金を受け入れたり貸出を行ったりして資金を仲介する。", sources:["mext","fsa-finance"], factcheckStatus:"verified" },
      { id:"money-fact-03", claim:"日本銀行は日本の中央銀行で、銀行券の発行、通貨・金融の調節、金融機関間の資金決済の円滑化などを担う。", sources:["boj-outline"], factcheckStatus:"verified" },
      { id:"money-fact-04", claim:"日本銀行の金融政策は、物価の安定を図ることを通じて国民経済の健全な発展に資することを目的として行われる。", sources:["boj-purpose"], factcheckStatus:"verified" },
      { id:"money-fact-05", claim:"金利はお金を借りる際の利息の割合などを示し、家計や企業の借入・預金・投資に影響する。", sources:["mext","boj-education"], factcheckStatus:"verified" }
    ],
    sections:[
      { id:"money", heading:"貨幣と金融", lead:"現代の経済では、お金が取引を支え、金融機関が資金を必要なところへ仲介する。", sentences:[
        { id:"money-01", template:"商品やサービスの交換の仲立ちをするものを{{貨幣}}という。", terms:["貨幣"], importance:"A", sources:["mext"], factcheckStatus:"verified" },
        { id:"money-02", template:"資金の貸し借りを仲介する仕組みを{{金融}}という。", terms:["金融"], importance:"A", sources:["mext"], factcheckStatus:"verified" },
        { id:"money-03", template:"銀行が預金を受け入れ、必要な人や企業へ貸し出す働きを{{金融仲介}}という。", terms:["金融仲介"], importance:"B", sources:["fsa-finance"], factcheckStatus:"verified" }
      ]},
      { id:"central-bank", heading:"日本銀行", lead:"日本銀行は中央銀行として通貨と金融の安定に関わる。", sentences:[
        { id:"money-04", template:"日本の中央銀行は{{日本銀行}}である。", terms:["日本銀行"], importance:"A", sources:["boj-outline"], factcheckStatus:"verified" },
        { id:"money-05", template:"日本銀行が通貨や金融を調節する政策を{{金融政策}}という。", terms:["金融政策"], importance:"A", sources:["boj-purpose"], factcheckStatus:"verified" },
        { id:"money-06", template:"日本銀行は金融政策を通して{{物価の安定}}を目指す。", terms:["物価の安定"], importance:"A", sources:["boj-purpose"], factcheckStatus:"verified" }
      ]}
    ],
    images:[],
    sources:[
      { id:"mext", label:"文部科学省『中学校学習指導要領（平成29年告示）解説 社会編』", url:"https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf" },
      { id:"boj-outline", label:"日本銀行『日本銀行 その機能と組織』", url:"https://www.boj.or.jp/announcements/education/data/boj_pamphlet.pdf" },
      { id:"boj-purpose", label:"日本銀行『日本銀行の目的』", url:"https://www.boj.or.jp/about/education/oshiete/outline/a01.htm" },
      { id:"boj-education", label:"日本銀行『教えて！にちぎん』", url:"https://www.boj.or.jp/about/education/oshiete/index.htm" },
      { id:"fsa-finance", label:"金融庁『金融経済教育』", url:"https://www.fsa.go.jp/teach/" }
    ]
  };
  window.SOCIAL_WORKSHEET_UNITS=window.SOCIAL_WORKSHEET_UNITS||[]; window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
