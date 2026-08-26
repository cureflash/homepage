(() => {
  const unit = {
    id: "jh-civics-separation-powers-001",
    title: "三権分立",
    subtitle: "立法・行政・司法の役割と相互の抑制関係を整理する",
    schoolStage: "junior-high",
    field: "civics",
    unit: "民主政治と政治参加",
    era: "現代",
    practicalGradeGroup: "中学・公民",
    factcheckStatus: "verified",
    keyPoint: "国の権力を立法・行政・司法に分け、それぞれを異なる機関が担い、相互に抑制し合うことで権力の集中を防ぐ考え方を三権分立という。",
    timeline: [],
    facts: [
      { id: "powers-fact-01", claim: "日本では立法権を国会、行政権を内閣、司法権を裁判所が担う。", sources: ["mext-social-commentary", "shugiin-constitution"], factcheckStatus: "verified" },
      { id: "powers-fact-02", claim: "三権分立は国家権力を立法・行政・司法に分け、相互の抑制と均衡によって権力の集中や濫用を防ごうとする考え方である。", sources: ["mext-social-commentary", "shugiin-three-powers"], factcheckStatus: "verified" },
      { id: "powers-fact-03", claim: "国会は国会議員の中から内閣総理大臣を指名し、衆議院は内閣不信任決議を行うことができる。", sources: ["shugiin-powers", "kantei-system"], factcheckStatus: "verified" },
      { id: "powers-fact-04", claim: "裁判所は具体的な裁判を通して法令などが憲法に反していないか審査する違憲審査権を持つ。", sources: ["courts-judicial-review"], factcheckStatus: "verified" },
      { id: "powers-fact-05", claim: "国会は罷免の訴追を受けた裁判官を裁判するため、両議院の議員で組織する弾劾裁判所を設ける。", sources: ["shugiin-constitution"], factcheckStatus: "verified" }
    ],
    sections: [
      {
        id: "three-branches",
        heading: "三つの権力",
        lead: "一つの機関に権力を集中させず、役割を分担することが民主政治の重要な仕組みになっている。",
        sentences: [
          { id: "powers-01", template: "法律をつくる{{立法権}}は国会が担う。", terms: ["立法権"], importance: "A", sources: ["shugiin-constitution"], factcheckStatus: "verified" },
          { id: "powers-02", template: "政策を実行する{{行政権}}は内閣が担う。", terms: ["行政権"], importance: "A", sources: ["kantei-system"], factcheckStatus: "verified" },
          { id: "powers-03", template: "法に基づいて争いを裁く{{司法権}}は裁判所が担う。", terms: ["司法権"], importance: "A", sources: ["courts-overview", "shugiin-constitution"], factcheckStatus: "verified" }
        ]
      },
      {
        id: "checks-balances",
        heading: "相互の抑制と均衡",
        lead: "三つの機関は完全に無関係なのではなく、互いに働きをチェックする仕組みを持つ。",
        sentences: [
          { id: "powers-04", template: "国の権力を三つに分け、相互に抑制させる仕組みを{{三権分立}}という。", terms: ["三権分立"], importance: "A", sources: ["mext-social-commentary", "shugiin-three-powers"], factcheckStatus: "verified" },
          { id: "powers-05", template: "衆議院は内閣に対して{{内閣不信任決議}}を行うことができる。", terms: ["内閣不信任決議"], importance: "A", sources: ["shugiin-powers"], factcheckStatus: "verified" },
          { id: "powers-06", template: "裁判所は法令などを憲法に照らして審査する{{違憲審査権}}を持つ。", terms: ["違憲審査権"], importance: "A", sources: ["courts-judicial-review"], factcheckStatus: "verified" }
        ]
      }
    ],
    images: [],
    sources: [
      { id: "mext-social-commentary", label: "文部科学省『中学校学習指導要領解説 社会編』", url: "https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf" },
      { id: "shugiin-constitution", label: "衆議院『日本国憲法』", url: "https://www.shugiin.go.jp/internet/itdb_annai.nsf/html/statics/shiryo/dl-constitution.htm" },
      { id: "shugiin-powers", label: "衆議院『国会の権限』", url: "https://www.shugiin.go.jp/internet/itdb_annai.nsf/html/statics/kokkai/kokkai_kengen2.htm" },
      { id: "shugiin-three-powers", label: "衆議院会議録（三権分立の制度原理に関する説明）", url: "https://www.shugiin.go.jp/internet/itdb_kaigiroku.nsf/html/kaigiroku/001822120260302003.htm" },
      { id: "kantei-system", label: "首相官邸『内閣制度の概要』", url: "https://www.kantei.go.jp/jp/seido/seido_2.html" },
      { id: "courts-overview", label: "裁判所『概要・裁判所の審級制度』", url: "https://www.courts.go.jp/about/sosiki/gaiyo/index.html" },
      { id: "courts-judicial-review", label: "裁判所『違憲審査権』説明資料", url: "https://www.courts.go.jp/vc-files/courts/file2/20916002.pdf" }
    ]
  };
  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
