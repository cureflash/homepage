(() => {
  const unit = {
    id: "jh-civics-local-government-001",
    title: "地方自治",
    subtitle: "地域の政治と住民参加の仕組みを整理する",
    schoolStage:"junior-high", field:"civics", unit:"民主政治と政治参加", era:"現代", practicalGradeGroup:"中学・公民", factcheckStatus:"verified",
    keyPoint:"地方自治では、都道府県や市町村などの地方公共団体が地域の行政を担い、住民が選挙や直接請求などを通して地域政治に参加する。",
    timeline:[],
    facts:[
      { id:"local-fact-01", claim:"普通地方公共団体には都道府県と市町村があり、地域住民に身近な行政を担う。", sources:["mext","local-autonomy"], factcheckStatus:"verified" },
      { id:"local-fact-02", claim:"地方公共団体の長と議会議員は住民が直接選挙で選ぶ。", sources:["constitution","local-autonomy"], factcheckStatus:"verified" },
      { id:"local-fact-03", claim:"地方議会は条例の制定・改廃や予算の議決などを行い、首長は行政を執行する。", sources:["local-autonomy","mext"], factcheckStatus:"verified" },
      { id:"local-fact-04", claim:"一定数の署名を集めることで、条例の制定・改廃や議会の解散、議員・長の解職などを求める直接請求制度がある。", sources:["local-autonomy"], factcheckStatus:"verified" },
      { id:"local-fact-05", claim:"地方自治は、住民の意思に基づく住民自治と、国から一定の独立性をもつ団体自治の考え方で説明される。", sources:["mext"], factcheckStatus:"verified" }
    ],
    sections:[
      { id:"organization", heading:"地方公共団体の仕組み", lead:"地域の課題は、住民に近い地方公共団体が担う。", sentences:[
        { id:"local-01", template:"都道府県や市町村などを{{地方公共団体}}という。", terms:["地方公共団体"], importance:"A", sources:["mext","local-autonomy"], factcheckStatus:"verified" },
        { id:"local-02", template:"地方公共団体が法令に違反しない範囲で制定する自治立法を{{条例}}という。", terms:["条例"], importance:"A", sources:["local-autonomy"], factcheckStatus:"verified" },
        { id:"local-03", template:"都道府県知事や市町村長など、地方公共団体の代表者を{{首長}}という。", terms:["首長"], importance:"A", sources:["mext"], factcheckStatus:"verified" }
      ]},
      { id:"participation", heading:"住民の政治参加", lead:"地域政治では、選挙だけでなく住民が直接働きかける制度もある。", sentences:[
        { id:"local-04", template:"住民が一定数の署名を集めて条例制定などを求める制度を{{直接請求}}という。", terms:["直接請求"], importance:"A", sources:["local-autonomy"], factcheckStatus:"verified" },
        { id:"local-05", template:"地域の政治を住民の意思に基づいて行う考え方を{{住民自治}}という。", terms:["住民自治"], importance:"A", sources:["mext"], factcheckStatus:"verified" },
        { id:"local-06", template:"地方公共団体が国から一定の独立性をもって政治を行う考え方を{{団体自治}}という。", terms:["団体自治"], importance:"A", sources:["mext"], factcheckStatus:"verified" }
      ]}
    ],
    images:[],
    sources:[
      { id:"mext", label:"文部科学省『中学校学習指導要領（平成29年告示）解説 社会編』", url:"https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf" },
      { id:"constitution", label:"衆議院『日本国憲法』", url:"https://www.shugiin.go.jp/internet/itdb_annai.nsf/html/statics/shiryo/dl-constitution.htm" },
      { id:"local-autonomy", label:"e-Gov法令検索『地方自治法』", url:"https://laws.e-gov.go.jp/law/322AC0000000067" }
    ]
  };
  window.SOCIAL_WORKSHEET_UNITS=window.SOCIAL_WORKSHEET_UNITS||[]; window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
