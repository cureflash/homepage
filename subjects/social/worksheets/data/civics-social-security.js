(() => {
  const unit = {
    id:"jh-civics-social-security-001", title:"社会保障", subtitle:"生活を支える社会保障制度を整理する",
    schoolStage:"junior-high", field:"civics", unit:"私たちと経済", era:"現代", practicalGradeGroup:"中学・公民", factcheckStatus:"verified",
    keyPoint:"社会保障は、病気、老齢、失業、生活困窮など生活上のリスクに社会全体で備える仕組みで、社会保険・社会福祉・公的扶助・保健医療・公衆衛生などから成る。",
    timeline:[],
    facts:[
      { id:"security-fact-01", claim:"日本の社会保障制度は、社会保険、社会福祉、公的扶助、保健医療・公衆衛生などを通して国民生活を支える。", sources:["mext","mhlw-security"], factcheckStatus:"verified" },
      { id:"security-fact-02", claim:"社会保険には年金保険、医療保険、介護保険、雇用保険、労災保険などの制度がある。", sources:["mhlw-education"], factcheckStatus:"verified" },
      { id:"security-fact-03", claim:"生活保護は生活に困窮する人に必要な保護を行い、最低限度の生活を保障するとともに自立を助長する制度である。", sources:["constitution","public-assistance"], factcheckStatus:"verified" },
      { id:"security-fact-04", claim:"少子高齢化は社会保障の給付と負担の在り方を考える重要な背景の一つである。", sources:["mext","mhlw-balance"], factcheckStatus:"verified" },
      { id:"security-fact-05", claim:"日本国憲法第25条は健康で文化的な最低限度の生活を営む権利と、国の社会福祉・社会保障・公衆衛生向上の責務を定めている。", sources:["constitution"], factcheckStatus:"verified" }
    ],
    sections:[
      { id:"system", heading:"社会保障の仕組み", lead:"生活上のさまざまなリスクを社会全体で支える制度がある。", sentences:[
        { id:"security-01", template:"病気や老齢などに備えて生活を支える仕組みを{{社会保障}}という。", terms:["社会保障"], importance:"A", sources:["mext","mhlw-security"], factcheckStatus:"verified" },
        { id:"security-02", template:"年金・医療・介護・雇用・労災などの公的な保険制度を{{社会保険}}という。", terms:["社会保険"], importance:"A", sources:["mhlw-education"], factcheckStatus:"verified" },
        { id:"security-03", template:"生活に困窮する人の最低限度の生活を保障し、自立を助ける仕組みを{{公的扶助}}という。", terms:["公的扶助"], importance:"A", sources:["mhlw-security","public-assistance"], factcheckStatus:"verified" }
      ]},
      { id:"rights", heading:"生存権と社会保障", lead:"社会保障は憲法が示す生存権とも関係する。", sentences:[
        { id:"security-04", template:"健康で文化的な最低限度の生活を営む権利を{{生存権}}という。", terms:["生存権"], importance:"A", sources:["constitution"], factcheckStatus:"verified" },
        { id:"security-05", template:"高齢者の増加と子どもの減少が同時に進むことを{{少子高齢化}}という。", terms:["少子高齢化"], importance:"A", sources:["mext"], factcheckStatus:"verified" }
      ]}
    ],
    images:[],
    sources:[
      { id:"mext", label:"文部科学省『中学校学習指導要領（平成29年告示）解説 社会編』", url:"https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf" },
      { id:"mhlw-security", label:"厚生労働省『社会保障とは何か』", url:"https://www.mhlw.go.jp/stf/newpage_21479.html" },
      { id:"mhlw-education", label:"厚生労働省『社会保障教育』", url:"https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hokabunya/shakaihoshou/kyouiku/" },
      { id:"mhlw-balance", label:"厚生労働省『給付と負担について』", url:"https://www.mhlw.go.jp/stf/newpage_21509.html" },
      { id:"public-assistance", label:"e-Gov法令検索『生活保護法』", url:"https://laws.e-gov.go.jp/law/325AC0000000144" },
      { id:"constitution", label:"衆議院『日本国憲法』", url:"https://www.shugiin.go.jp/internet/itdb_annai.nsf/html/statics/shiryo/dl-constitution.htm" }
    ]
  };
  window.SOCIAL_WORKSHEET_UNITS=window.SOCIAL_WORKSHEET_UNITS||[]; window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
