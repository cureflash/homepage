(() => {
  const unit = {
    id:"jh-civics-market-firms-labor-001", title:"市場経済・企業・労働", subtitle:"市場の働きと企業・労働者の役割を整理する",
    schoolStage:"junior-high", field:"civics", unit:"私たちと経済", era:"現代", practicalGradeGroup:"中学・公民", factcheckStatus:"verified",
    keyPoint:"市場経済では価格が需要と供給の影響を受け、企業は財やサービスを生産する。公正な競争や労働者の権利を守る制度も経済活動を支えている。",
    timeline:[],
    facts:[
      { id:"market-fact-01", claim:"市場では需要と供給の関係が価格形成に影響する。", sources:["mext","jftc-market"], factcheckStatus:"verified" },
      { id:"market-fact-02", claim:"企業は生産活動を行い、家計は消費や労働力の提供を通して経済に関わる。", sources:["mext"], factcheckStatus:"verified" },
      { id:"market-fact-03", claim:"独占禁止法は公正かつ自由な競争を促進し、一般消費者の利益を確保することを目的としている。", sources:["jftc-antimonopoly"], factcheckStatus:"verified" },
      { id:"market-fact-04", claim:"労働基準法は労働条件について最低基準を定める法律である。", sources:["labor-standards"], factcheckStatus:"verified" },
      { id:"market-fact-05", claim:"日本国憲法は勤労者の団結権、団体交渉権、団体行動権を保障している。", sources:["constitution","mext"], factcheckStatus:"verified" }
    ],
    sections:[
      { id:"market", heading:"市場の働き", lead:"商品やサービスの取引では、需要と供給、企業間の競争が重要な役割を果たす。", sentences:[
        { id:"market-01", template:"商品を買いたい量を{{需要}}、売りたい量を{{供給}}という。", terms:["需要","供給"], importance:"A", sources:["mext"], factcheckStatus:"verified" },
        { id:"market-02", template:"売り手と買い手が取引し、需要と供給などを通じて価格が形成される経済の仕組みを{{市場経済}}という。", terms:["市場経済"], importance:"A", sources:["mext","jftc-market"], factcheckStatus:"verified" },
        { id:"market-03", template:"公正で自由な競争を守る基本的な法律が{{独占禁止法}}である。", terms:["独占禁止法"], importance:"A", sources:["jftc-antimonopoly"], factcheckStatus:"verified" }
      ]},
      { id:"labor", heading:"企業と労働", lead:"企業活動を支える労働者には、法律や憲法によって守られる権利がある。", sentences:[
        { id:"market-04", template:"労働条件の最低基準を定める法律を{{労働基準法}}という。", terms:["労働基準法"], importance:"A", sources:["labor-standards"], factcheckStatus:"verified" },
        { id:"market-05", template:"労働者が労働組合をつくる権利を{{団結権}}という。", terms:["団結権"], importance:"A", sources:["constitution"], factcheckStatus:"verified" },
        { id:"market-06", template:"団結権・団体交渉権・団体行動権をまとめて{{労働三権}}という。", terms:["労働三権"], importance:"A", sources:["mext","constitution"], factcheckStatus:"verified" }
      ]}
    ],
    images:[],
    sources:[
      { id:"mext", label:"文部科学省『中学校学習指導要領（平成29年告示）解説 社会編』", url:"https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf" },
      { id:"jftc-market", label:"公正取引委員会『私たちが安くて良い商品を買えるワケ。～市場における競争の必要性～』", url:"https://www.jftc.go.jp/ippan/part1/market.html" },
      { id:"jftc-antimonopoly", label:"公正取引委員会『独占禁止法』", url:"https://www.jftc.go.jp/dk/guideline/lawdk.html" },
      { id:"constitution", label:"衆議院『日本国憲法』", url:"https://www.shugiin.go.jp/internet/itdb_annai.nsf/html/statics/shiryo/dl-constitution.htm" },
      { id:"labor-standards", label:"厚生労働省『労働基準法』", url:"https://www.mhlw.go.jp/web/t_doc?dataId=73022000" }
    ]
  };
  window.SOCIAL_WORKSHEET_UNITS=window.SOCIAL_WORKSHEET_UNITS||[]; window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
