(() => {
  const unit = {
    id: "jh-civics-diet-001",
    title: "国会",
    subtitle: "二院制と国会の権限、衆議院の優越を整理する",
    schoolStage: "junior-high",
    field: "civics",
    unit: "民主政治と政治参加",
    era: "現代",
    practicalGradeGroup: "中学・公民",
    factcheckStatus: "verified",
    keyPoint: "国会は国権の最高機関であり、国の唯一の立法機関である。衆議院と参議院の二院で構成され、法律・予算・条約・内閣総理大臣の指名などを扱う。",
    timeline: [],
    facts: [
      { id: "diet-fact-01", claim: "憲法第41条は、国会を国権の最高機関かつ国の唯一の立法機関と定めている。", sources: ["shugiin-diet-status", "shugiin-constitution"], factcheckStatus: "verified" },
      { id: "diet-fact-02", claim: "憲法第42条により、国会は衆議院と参議院の二院で構成される。", sources: ["shugiin-constitution"], factcheckStatus: "verified" },
      { id: "diet-fact-03", claim: "衆議院議員の任期は4年で解散があり、参議院議員の任期は6年で3年ごとに半数を改選する。", sources: ["shugiin-constitution"], factcheckStatus: "verified" },
      { id: "diet-fact-04", claim: "国会は法律の制定、予算の議決、条約承認、内閣総理大臣の指名などの権限を持つ。", sources: ["shugiin-powers"], factcheckStatus: "verified" },
      { id: "diet-fact-05", claim: "法律案、予算、条約、内閣総理大臣の指名などについて、憲法は一定の場合に衆議院の優越を認めている。", sources: ["shugiin-powers", "shugiin-constitution"], factcheckStatus: "verified" }
    ],
    sections: [
      {
        id: "status-bicameral",
        heading: "国会の地位と二院制",
        lead: "国会は選挙された議員で構成され、衆議院と参議院の二院で審議する。",
        sentences: [
          { id: "diet-01", template: "国会は、国権の{{最高機関}}であり、国の唯一の{{立法機関}}である。", terms: ["最高機関", "立法機関"], importance: "A", sources: ["shugiin-diet-status"], factcheckStatus: "verified" },
          { id: "diet-02", template: "国会は{{衆議院}}と{{参議院}}の二院で構成される。", terms: ["衆議院", "参議院"], importance: "A", sources: ["shugiin-constitution"], factcheckStatus: "verified" },
          { id: "diet-03", template: "衆議院議員の任期は4年で解散があり、参議院議員の任期は{{6年}}で3年ごとに半数を改選する。", terms: ["6年"], importance: "B", sources: ["shugiin-constitution"], factcheckStatus: "verified" }
        ]
      },
      {
        id: "powers",
        heading: "国会の仕事",
        lead: "法律や予算を審議するだけでなく、条約承認や内閣総理大臣の指名も行う。",
        sentences: [
          { id: "diet-04", template: "国会は法律の制定、予算の議決、条約の承認、{{内閣総理大臣の指名}}などを行う。", terms: ["内閣総理大臣の指名"], importance: "A", sources: ["shugiin-powers"], factcheckStatus: "verified" },
          { id: "diet-05", template: "予算や条約、内閣総理大臣の指名などでは、一定の場合に{{衆議院の優越}}が認められている。", terms: ["衆議院の優越"], importance: "A", sources: ["shugiin-powers"], factcheckStatus: "verified" }
        ]
      }
    ],
    images: [],
    sources: [
      { id: "mext-social-commentary", label: "文部科学省『中学校学習指導要領解説 社会編』", url: "https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf" },
      { id: "shugiin-constitution", label: "衆議院『日本国憲法』", url: "https://www.shugiin.go.jp/internet/itdb_annai.nsf/html/statics/shiryo/dl-constitution.htm" },
      { id: "shugiin-diet-status", label: "衆議院『国会の地位』", url: "https://www.shugiin.go.jp/internet/itdb_annai.nsf/html/statics/kokkai/kokkai_chii.htm" },
      { id: "shugiin-powers", label: "衆議院『国会の権限』", url: "https://www.shugiin.go.jp/internet/itdb_annai.nsf/html/statics/kokkai/kokkai_kengen2.htm" }
    ]
  };
  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
