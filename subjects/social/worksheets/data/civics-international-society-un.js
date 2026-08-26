(() => {
  const unit = {
    id:"jh-civics-international-un-001", title:"国際社会と国際連合", subtitle:"国際社会の課題と国際連合の役割を整理する",
    schoolStage:"junior-high", field:"civics", unit:"私たちと国際社会", era:"現代", practicalGradeGroup:"中学・公民", factcheckStatus:"verified",
    keyPoint:"国際社会では国家間の協力が必要であり、国際連合は平和と安全、人権、開発などの課題に取り組む。総会では全加盟国が参加し、安全保障理事会は国際の平和と安全の維持に主要な責任を負う。",
    timeline:[{ label:"1945年", note:"国際連合成立" }, { label:"1956年", note:"日本が国際連合に加盟" }],
    facts:[
      { id:"un-fact-01", claim:"国際連合は1945年に国際連合憲章に基づいて成立した。", sources:["un-charter","mofa-un"], factcheckStatus:"verified" },
      { id:"un-fact-02", claim:"国際連合総会には全加盟国が参加し、各加盟国は一票を持ち、討議や勧告などを行う。", sources:["un-charter","un-ga"], factcheckStatus:"verified" },
      { id:"un-fact-03", claim:"安全保障理事会は国際の平和と安全の維持について主要な責任を負い、常任理事国5か国と非常任理事国10か国で構成される。", sources:["un-charter","mofa-un"], factcheckStatus:"verified" },
      { id:"un-fact-04", claim:"日本は1956年12月18日に国際連合へ加盟した。", sources:["mofa-japan-un"], factcheckStatus:"verified" },
      { id:"un-fact-05", claim:"地球環境、貧困、難民、人権、感染症など国境を越える課題には国際協力が求められる。", sources:["mext","un-sdgs"], factcheckStatus:"verified" }
    ],
    sections:[
      { id:"org", heading:"国際連合の仕組み", lead:"国際連合には役割の異なる主要機関がある。", sentences:[
        { id:"un-01", template:"1945年に成立した国際機関を{{国際連合}}という。", terms:["国際連合"], importance:"A", sources:["un-charter"], factcheckStatus:"verified" },
        { id:"un-02", template:"全加盟国が参加する主要機関を{{総会}}という。", terms:["総会"], importance:"A", sources:["un-ga"], factcheckStatus:"verified" },
        { id:"un-03", template:"国際の平和と安全の維持に主要な責任を負う機関を{{安全保障理事会}}という。", terms:["安全保障理事会"], importance:"A", sources:["un-charter","mofa-un"], factcheckStatus:"verified" }
      ]},
      { id:"cooperation", heading:"国際協力", lead:"国境を越える課題は一国だけでは解決しにくい。", sentences:[
        { id:"un-04", template:"日本が国際連合に加盟したのは{{1956年}}である。", terms:["1956年"], importance:"A", sources:["mofa-japan-un"], factcheckStatus:"verified" },
        { id:"un-05", template:"持続可能な開発のための国際目標を{{SDGs}}という。", terms:["SDGs"], importance:"B", sources:["un-sdgs"], factcheckStatus:"verified" },
        { id:"un-06", template:"国家どうしが共通の課題に協力して取り組むことを{{国際協力}}という。", terms:["国際協力"], importance:"A", sources:["mext"], factcheckStatus:"verified" }
      ]}
    ],
    images:[],
    sources:[
      { id:"mext", label:"文部科学省『中学校学習指導要領（平成29年告示）解説 社会編』", url:"https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf" },
      { id:"mofa-un", label:"外務省『国連外交』", url:"https://www.mofa.go.jp/mofaj/gaiko/un.html" },
      { id:"mofa-japan-un", label:"外務省『国連加盟50周年記念式典』", url:"https://www.mofa.go.jp/mofaj/gaiko/bluebook/2007/html/h3/h3_13.html" },
      { id:"un-charter", label:"United Nations『Charter of the United Nations』", url:"https://www.un.org/en/about-us/un-charter/full-text" },
      { id:"un-ga", label:"United Nations『General Assembly』", url:"https://www.un.org/en/ga/" },
      { id:"un-sdgs", label:"United Nations『Sustainable Development Goals』", url:"https://sdgs.un.org/goals" }
    ]
  };
  window.SOCIAL_WORKSHEET_UNITS=window.SOCIAL_WORKSHEET_UNITS||[]; window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
