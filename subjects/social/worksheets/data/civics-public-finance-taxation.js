(() => {
  const unit = {
    id:"jh-civics-public-finance-taxation-001", title:"財政と税", subtitle:"政府の収入と支出、税の役割を整理する",
    schoolStage:"junior-high", field:"civics", unit:"私たちと経済", era:"現代", practicalGradeGroup:"中学・公民", factcheckStatus:"pending_factcheck",
    keyPoint:"国や地方公共団体は税などを収入として公共サービスを提供する。財政は収入と支出を通して社会や経済に関わり、税には公共サービスの財源や所得再分配などの役割がある。",
    timeline:[],
    facts:[
      { id:"finance-fact-01", claim:"国や地方公共団体が行う経済活動を財政といい、予算を通して収入と支出を計画する。", sources:["mext","mof-budget"], factcheckStatus:"pending_factcheck" },
      { id:"finance-fact-02", claim:"租税は国や地方公共団体が公共サービスを提供するための重要な財源である。", sources:["mext","nta-tax"], factcheckStatus:"pending_factcheck" },
      { id:"finance-fact-03", claim:"所得税のように納税者と実際に負担する者が原則同じ税を直接税、消費税のように納税者と負担者が異なる税を間接税と分類する。", sources:["nta-tax"], factcheckStatus:"pending_factcheck" },
      { id:"finance-fact-04", claim:"国の歳出には社会保障、地方交付税交付金等、国債費、公共事業、教育などが含まれる。", sources:["mof-budget"], factcheckStatus:"pending_factcheck" },
      { id:"finance-fact-05", claim:"歳入不足を補うため国が発行する債券を国債といい、将来の元利払いが必要になる。", sources:["mof-budget"], factcheckStatus:"pending_factcheck" }
    ],
    sections:[
      { id:"budget", heading:"財政の仕組み", lead:"政府は予算を編成し、集めた収入を公共サービスや政策に使う。", sentences:[
        { id:"finance-01", template:"国や地方公共団体の経済活動を{{財政}}という。", terms:["財政"], importance:"A", sources:["mext"], factcheckStatus:"pending_factcheck" },
        { id:"finance-02", template:"国の一年間の収入を{{歳入}}、支出を{{歳出}}という。", terms:["歳入","歳出"], importance:"A", sources:["mof-budget"], factcheckStatus:"pending_factcheck" },
        { id:"finance-03", template:"国が資金を借りるために発行する債券を{{国債}}という。", terms:["国債"], importance:"A", sources:["mof-budget"], factcheckStatus:"pending_factcheck" }
      ]},
      { id:"tax", heading:"税の役割", lead:"税は公共サービスを支え、負担の仕方には複数の考え方がある。", sentences:[
        { id:"finance-04", template:"国や地方公共団体が法律などに基づいて集めるお金を{{税金}}という。", terms:["税金"], importance:"A", sources:["nta-tax"], factcheckStatus:"pending_factcheck" },
        { id:"finance-05", template:"所得税など、納税者が直接負担する税を{{直接税}}という。", terms:["直接税"], importance:"A", sources:["nta-tax"], factcheckStatus:"pending_factcheck" },
        { id:"finance-06", template:"消費税など、納税者と実際の負担者が異なる税を{{間接税}}という。", terms:["間接税"], importance:"A", sources:["nta-tax"], factcheckStatus:"pending_factcheck" }
      ]}
    ],
    images:[],
    sources:[
      { id:"mext", label:"文部科学省『中学校学習指導要領（平成29年告示）解説 社会編』", url:"https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf" },
      { id:"mof-budget", label:"財務省『日本の財政を考える』", url:"https://www.mof.go.jp/policy/budget/fiscal_condition/" },
      { id:"nta-tax", label:"国税庁『税の学習コーナー』", url:"https://www.nta.go.jp/taxes/kids/" }
    ]
  };
  window.SOCIAL_WORKSHEET_UNITS=window.SOCIAL_WORKSHEET_UNITS||[]; window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
