(() => {
  const unit = {
    id:"jh-civics-cumulative-review-001", title:"公民 累積復習", subtitle:"憲法・政治・経済・国際社会の重要語を横断して確認する",
    schoolStage:"junior-high", field:"civics", unit:"公民累積復習", era:"現代", practicalGradeGroup:"中学・公民", factcheckStatus:"verified",
    keyPoint:"公民では、日本国憲法の基本原理、民主政治の制度、市場経済と政府の役割、社会保障、国際協力を相互に関連付けて理解することが重要である。",
    timeline:[],
    facts:[
      { id:"civics-review-fact-01", claim:"日本国憲法の基本原理として国民主権、基本的人権の尊重、平和主義が扱われる。", sources:["mext","constitution"], factcheckStatus:"verified" },
      { id:"civics-review-fact-02", claim:"日本の国政では国会・内閣・裁判所が立法・行政・司法を分担する。", sources:["constitution"], factcheckStatus:"verified" },
      { id:"civics-review-fact-03", claim:"民主政治では選挙とともに、地方自治や多様な政治参加が重要である。", sources:["mext"], factcheckStatus:"verified" },
      { id:"civics-review-fact-04", claim:"市場経済では企業・家計・政府・金融機関などが関わり、公正な競争を守る制度も設けられている。", sources:["mext","jftc"], factcheckStatus:"verified" },
      { id:"civics-review-fact-05", claim:"社会保障や国際協力は、個人や一国だけでは対応しにくい課題に社会や国際社会が共同で対応する仕組みである。", sources:["mext","mhlw","mofa"], factcheckStatus:"verified" }
    ],
    sections:[
      { id:"politics", heading:"憲法と政治", lead:"憲法の原理と政治制度を一つの流れとして確認する。", sentences:[
        { id:"civics-review-01", template:"日本国憲法の三大原理は、国民主権・基本的人権の尊重・{{平和主義}}である。", terms:["平和主義"], importance:"A", sources:["constitution","mext"], factcheckStatus:"verified" },
        { id:"civics-review-02", template:"国会・内閣・裁判所に権力を分ける仕組みを{{三権分立}}という。", terms:["三権分立"], importance:"A", sources:["constitution","mext"], factcheckStatus:"verified" },
        { id:"civics-review-03", template:"住民が地域の政治に関わる仕組みを学ぶ分野が{{地方自治}}である。", terms:["地方自治"], importance:"A", sources:["mext"], factcheckStatus:"verified" }
      ]},
      { id:"economy-international", heading:"経済と国際社会", lead:"暮らしを支える経済制度と国際協力を横断して復習する。", sentences:[
        { id:"civics-review-04", template:"市場で売り手と買い手が取引し、需要と供給などを通じて価格が形成される経済の仕組みを{{市場経済}}という。", terms:["市場経済"], importance:"A", sources:["mext","jftc"], factcheckStatus:"verified" },
        { id:"civics-review-05", template:"病気や老齢などの生活上のリスクに社会全体で備える仕組みを{{社会保障}}という。", terms:["社会保障"], importance:"A", sources:["mhlw"], factcheckStatus:"verified" },
        { id:"civics-review-06", template:"国際の平和と安全の維持に主要な責任を負う国連機関は{{安全保障理事会}}である。", terms:["安全保障理事会"], importance:"A", sources:["mofa"], factcheckStatus:"verified" }
      ]}
    ],
    images:[],
    sources:[
      { id:"mext", label:"文部科学省『中学校学習指導要領（平成29年告示）解説 社会編』", url:"https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf" },
      { id:"constitution", label:"衆議院『日本国憲法』", url:"https://www.shugiin.go.jp/internet/itdb_annai.nsf/html/statics/shiryo/dl-constitution.htm" },
      { id:"jftc", label:"公正取引委員会『市場経済とは？』", url:"https://www.jftc.go.jp/ippan/part1/market.html" },
      { id:"mhlw", label:"厚生労働省『社会保障とは何か』", url:"https://www.mhlw.go.jp/stf/newpage_21479.html" },
      { id:"mofa", label:"外務省『国連外交』", url:"https://www.mofa.go.jp/mofaj/gaiko/un.html" }
    ]
  };
  window.SOCIAL_WORKSHEET_UNITS=window.SOCIAL_WORKSHEET_UNITS||[]; window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
