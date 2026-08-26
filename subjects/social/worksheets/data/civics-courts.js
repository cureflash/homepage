(() => {
  const unit = {
    id: "jh-civics-courts-001",
    title: "裁判所",
    subtitle: "司法権・裁判官の独立・三審制・違憲審査権を整理する",
    schoolStage: "junior-high",
    field: "civics",
    unit: "民主政治と政治参加",
    era: "現代",
    practicalGradeGroup: "中学・公民",
    factcheckStatus: "pending_factcheck",
    keyPoint: "司法権は裁判所が担い、裁判官は独立して裁判を行う。日本では原則として三審制が採られ、裁判所には違憲審査権も認められている。",
    timeline: [],
    facts: [
      { id: "courts-fact-01", claim: "憲法第76条は、すべて司法権が最高裁判所および法律で設置される下級裁判所に属すると定めている。", sources: ["shugiin-constitution", "courts-overview"], factcheckStatus: "pending_factcheck" },
      { id: "courts-fact-02", claim: "裁判官は良心に従い独立して職権を行い、憲法と法律にのみ拘束される。", sources: ["shugiin-constitution"], factcheckStatus: "pending_factcheck" },
      { id: "courts-fact-03", claim: "日本では原則として、第一審・第二審・第三審の三つの審級で審理を受けられる三審制が採られている。", sources: ["courts-overview"], factcheckStatus: "pending_factcheck" },
      { id: "courts-fact-04", claim: "裁判所は、具体的な事件の裁判を通して法令などが憲法に違反しないか審査する違憲審査権を持つ。", sources: ["courts-judicial-review", "shugiin-constitution"], factcheckStatus: "pending_factcheck" },
      { id: "courts-fact-05", claim: "最高裁判所は法令などが憲法に適合するかについて終審として判断するため、憲法の番人と呼ばれることがある。", sources: ["courts-judicial-review"], factcheckStatus: "pending_factcheck" }
    ],
    sections: [
      {
        id: "judiciary",
        heading: "司法権と裁判官の独立",
        lead: "争いを法に基づいて解決し、人の権利を守る司法は裁判所が担う。",
        sentences: [
          { id: "courts-01", template: "国の{{司法権}}は、最高裁判所と法律で設けられる下級裁判所が担う。", terms: ["司法権"], importance: "A", sources: ["shugiin-constitution", "courts-overview"], factcheckStatus: "pending_factcheck" },
          { id: "courts-02", template: "裁判官が他の国家機関などから不当に指図されず判断する原則を{{裁判官の独立}}という。", terms: ["裁判官の独立"], importance: "A", sources: ["shugiin-constitution"], factcheckStatus: "pending_factcheck" },
          { id: "courts-03", template: "日本では、原則として同じ事件について3回まで審理を求められる{{三審制}}が採られている。", terms: ["三審制"], importance: "A", sources: ["courts-overview"], factcheckStatus: "pending_factcheck" }
        ]
      },
      {
        id: "review",
        heading: "違憲審査権",
        lead: "裁判所は法令や行政の行為が憲法に反していないかを、具体的な事件の中で審査する。",
        sentences: [
          { id: "courts-04", template: "法令などが憲法に違反しないかを審査する権限を{{違憲審査権}}という。", terms: ["違憲審査権"], importance: "A", sources: ["courts-judicial-review"], factcheckStatus: "pending_factcheck" },
          { id: "courts-05", template: "{{最高裁判所}}は違憲審査について終審として判断するため、『憲法の番人』と呼ばれることがある。", terms: ["最高裁判所"], importance: "A", sources: ["courts-judicial-review"], factcheckStatus: "pending_factcheck" }
        ]
      }
    ],
    images: [
      {
        id: "supreme-court-building",
        section: "judiciary",
        label: "最高裁判所",
        note: "東京都千代田区にある最高裁判所の庁舎",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Supreme_Court_of_Japan01s4s3872.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Supreme_Court_of_Japan01s4s3872.jpg",
        credit: "663highland / Wikimedia Commons",
        license: "CC BY-SA 3.0 (generation-stage candidate; recheck before publication)",
        factcheckStatus: "pending_factcheck"
      }
    ],
    sources: [
      { id: "mext-social-commentary", label: "文部科学省『中学校学習指導要領解説 社会編』", url: "https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf" },
      { id: "shugiin-constitution", label: "衆議院『日本国憲法』", url: "https://www.shugiin.go.jp/internet/itdb_annai.nsf/html/statics/shiryo/dl-constitution.htm" },
      { id: "courts-overview", label: "裁判所『概要・裁判所の審級制度』", url: "https://www.courts.go.jp/about/sosiki/gaiyo/index.html" },
      { id: "courts-judicial-review", label: "裁判所『違憲審査権』説明資料", url: "https://www.courts.go.jp/vc-files/courts/file2/20916002.pdf" },
      { id: "commons-supreme-court", label: "Wikimedia Commons『Supreme Court of Japan01s4s3872.jpg』", url: "https://commons.wikimedia.org/wiki/File:Supreme_Court_of_Japan01s4s3872.jpg" }
    ]
  };
  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
