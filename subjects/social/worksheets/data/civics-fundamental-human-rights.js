(() => {
  const unit = {
    id: "jh-civics-fundamental-human-rights-001",
    title: "基本的人権",
    subtitle: "個人の尊重・平等・自由権・社会権を整理する",
    schoolStage: "junior-high",
    field: "civics",
    unit: "人間の尊重と日本国憲法の基本的原則",
    era: "現代",
    practicalGradeGroup: "中学・公民",
    factcheckStatus: "pending_factcheck",
    keyPoint: "日本国憲法は基本的人権を保障し、個人の尊重、法の下の平等、自由権、社会権などを定めている。",
    timeline: [],
    facts: [
      { id: "rights-fact-01", claim: "憲法第11条は、国民が基本的人権の享有を妨げられず、基本的人権を侵すことのできない永久の権利として保障している。", sources: ["ndl-constitution", "shugiin-constitution"], factcheckStatus: "pending_factcheck" },
      { id: "rights-fact-02", claim: "憲法第13条は、すべて国民を個人として尊重し、生命・自由・幸福追求に対する権利を尊重する考え方を示している。", sources: ["ndl-constitution"], factcheckStatus: "pending_factcheck" },
      { id: "rights-fact-03", claim: "憲法第14条は、すべて国民が法の下に平等であり、人種・信条・性別・社会的身分・門地により差別されないことを定めている。", sources: ["ndl-constitution"], factcheckStatus: "pending_factcheck" },
      { id: "rights-fact-04", claim: "思想・良心、信教、集会・結社・表現などの自由は自由権として学習される。", sources: ["mext-social-commentary", "ndl-constitution"], factcheckStatus: "pending_factcheck" },
      { id: "rights-fact-05", claim: "健康で文化的な最低限度の生活、教育を受ける権利、勤労者の権利などは社会権として学習される。", sources: ["mext-social-commentary", "ndl-constitution"], factcheckStatus: "pending_factcheck" }
    ],
    sections: [
      {
        id: "respect-equality",
        heading: "個人の尊重と平等",
        lead: "人は一人ひとり尊重され、法の下で平等に扱われることが憲法の重要な考え方である。",
        sentences: [
          { id: "rights-01", template: "日本国憲法は、侵すことのできない永久の権利として{{基本的人権}}を保障している。", terms: ["基本的人権"], importance: "A", sources: ["ndl-constitution"], factcheckStatus: "pending_factcheck" },
          { id: "rights-02", template: "憲法第13条は、すべて国民を{{個人として尊重}}するとしている。", terms: ["個人として尊重"], importance: "A", sources: ["ndl-constitution"], factcheckStatus: "pending_factcheck" },
          { id: "rights-03", template: "憲法第14条は、すべて国民が{{法の下の平等}}を保障されることを定めている。", terms: ["法の下の平等"], importance: "A", sources: ["ndl-constitution"], factcheckStatus: "pending_factcheck" }
        ]
      },
      {
        id: "freedom-social",
        heading: "自由権と社会権",
        lead: "国家から不当に干渉されない自由と、人間らしく生活するための権利の両方が保障されている。",
        sentences: [
          { id: "rights-04", template: "思想・良心、信教、表現などの自由は{{自由権}}として整理される。", terms: ["自由権"], importance: "A", sources: ["mext-social-commentary", "ndl-constitution"], factcheckStatus: "pending_factcheck" },
          { id: "rights-05", template: "生存権、教育を受ける権利、労働に関する権利などは{{社会権}}として整理される。", terms: ["社会権"], importance: "A", sources: ["mext-social-commentary", "ndl-constitution"], factcheckStatus: "pending_factcheck" }
        ]
      }
    ],
    images: [],
    sources: [
      { id: "mext-social-commentary", label: "文部科学省『中学校学習指導要領解説 社会編』", url: "https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf" },
      { id: "ndl-constitution", label: "国立国会図書館『日本国憲法の誕生』憲法条文", url: "https://www.ndl.go.jp/constitution/etc/j01.html" },
      { id: "shugiin-constitution", label: "衆議院『日本国憲法』", url: "https://www.shugiin.go.jp/internet/itdb_annai.nsf/html/statics/shiryo/dl-constitution.htm" }
    ]
  };
  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
