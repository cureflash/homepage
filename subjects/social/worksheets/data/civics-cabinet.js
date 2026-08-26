(() => {
  const unit = {
    id: "jh-civics-cabinet-001",
    title: "内閣",
    subtitle: "行政権・議院内閣制・内閣総理大臣の役割を整理する",
    schoolStage: "junior-high",
    field: "civics",
    unit: "民主政治と政治参加",
    era: "現代",
    practicalGradeGroup: "中学・公民",
    factcheckStatus: "pending_factcheck",
    keyPoint: "行政権は内閣に属し、内閣は国会の信任を基礎とする議院内閣制のもとで国会に対して連帯して責任を負う。",
    timeline: [],
    facts: [
      { id: "cabinet-fact-01", claim: "憲法第65条は行政権が内閣に属すると定めている。", sources: ["kantei-system", "shugiin-constitution"], factcheckStatus: "pending_factcheck" },
      { id: "cabinet-fact-02", claim: "日本は、内閣総理大臣の選出や内閣の存立を国会の信任に置く議院内閣制を採用している。", sources: ["kantei-system"], factcheckStatus: "pending_factcheck" },
      { id: "cabinet-fact-03", claim: "内閣総理大臣は国会議員の中から国会の議決で指名される。", sources: ["kantei-system", "shugiin-constitution"], factcheckStatus: "pending_factcheck" },
      { id: "cabinet-fact-04", claim: "内閣総理大臣は国務大臣を任命し、任意に罷免することができ、国務大臣の過半数は国会議員の中から選ばれなければならない。", sources: ["kantei-system", "shugiin-constitution"], factcheckStatus: "pending_factcheck" },
      { id: "cabinet-fact-05", claim: "衆議院で内閣不信任決議案が可決された場合、内閣は10日以内に衆議院が解散されない限り総辞職しなければならない。", sources: ["shugiin-powers", "kantei-system"], factcheckStatus: "pending_factcheck" }
    ],
    sections: [
      {
        id: "executive",
        heading: "行政を担う内閣",
        lead: "法律や予算に基づいて政策を実施する行政は、内閣を中心に行われる。",
        sentences: [
          { id: "cabinet-01", template: "憲法第65条では、{{行政権}}は内閣に属すると定められている。", terms: ["行政権"], importance: "A", sources: ["kantei-system"], factcheckStatus: "pending_factcheck" },
          { id: "cabinet-02", template: "国会の信任を基礎として内閣が成り立つ制度を{{議院内閣制}}という。", terms: ["議院内閣制"], importance: "A", sources: ["kantei-system"], factcheckStatus: "pending_factcheck" },
          { id: "cabinet-03", template: "{{内閣総理大臣}}は国会議員の中から国会の議決で指名される。", terms: ["内閣総理大臣"], importance: "A", sources: ["kantei-system", "shugiin-constitution"], factcheckStatus: "pending_factcheck" }
        ]
      },
      {
        id: "responsibility",
        heading: "国会との関係",
        lead: "内閣は国会から独立して存在するのではなく、国会に対して政治的な責任を負う。",
        sentences: [
          { id: "cabinet-04", template: "内閣は行政権の行使について、国会に対し{{連帯して責任}}を負う。", terms: ["連帯して責任"], importance: "A", sources: ["kantei-system"], factcheckStatus: "pending_factcheck" },
          { id: "cabinet-05", template: "衆議院で{{内閣不信任決議}}が可決された場合、内閣は衆議院の解散か総辞職を選ぶことになる。", terms: ["内閣不信任決議"], importance: "A", sources: ["shugiin-powers", "kantei-system"], factcheckStatus: "pending_factcheck" }
        ]
      }
    ],
    images: [
      {
        id: "kantei-building",
        section: "executive",
        label: "内閣総理大臣官邸",
        note: "内閣総理大臣官邸の建物",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kantei_PM_Japan_Residence.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Kantei_PM_Japan_Residence.jpg",
        credit: "内閣官房内閣広報室 / Wikimedia Commons",
        license: "CC BY 4.0 (generation-stage candidate; recheck before publication)",
        factcheckStatus: "pending_factcheck"
      }
    ],
    sources: [
      { id: "mext-social-commentary", label: "文部科学省『中学校学習指導要領解説 社会編』", url: "https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf" },
      { id: "kantei-system", label: "首相官邸『内閣制度の概要』", url: "https://www.kantei.go.jp/jp/seido/seido_2.html" },
      { id: "shugiin-constitution", label: "衆議院『日本国憲法』", url: "https://www.shugiin.go.jp/internet/itdb_annai.nsf/html/statics/shiryo/dl-constitution.htm" },
      { id: "shugiin-powers", label: "衆議院『国会の権限』", url: "https://www.shugiin.go.jp/internet/itdb_annai.nsf/html/statics/kokkai/kokkai_kengen2.htm" },
      { id: "commons-kantei", label: "Wikimedia Commons『Kantei PM Japan Residence.jpg』", url: "https://commons.wikimedia.org/wiki/File:Kantei_PM_Japan_Residence.jpg" }
    ]
  };
  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
