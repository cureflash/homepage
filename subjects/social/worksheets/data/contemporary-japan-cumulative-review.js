(() => {
  const unit = {
    id: "jh-history-contemporary-japan-review-001",
    title: "現代日本と近現代の累積復習",
    subtitle: "高度経済成長から沖縄返還・石油危機までを確認し、近現代の流れをつなぎ直す",
    schoolStage: "junior-high",
    field: "history",
    unit: "現代の日本と世界",
    era: "高度経済成長期〜現代",
    practicalGradeGroup: "中学・歴史",
    factcheckStatus: "verified",
    keyPoint: "戦後復興後、日本は高度経済成長を経験し生活が大きく変化した。一方で公害などの問題も生まれ、1972年の沖縄返還や1973年の石油危機などを経て現代へつながっていく。",
    timeline: [
      { label: "1950年代後半〜", note: "高度経済成長" },
      { label: "1964年", note: "東海道新幹線・東京オリンピック" },
      { label: "1972年", note: "沖縄返還" },
      { label: "1973年", note: "石油危機" }
    ],
    facts: [
      { id: "contemporary-fact-01", claim: "1950年代後半から1970年代初めにかけて、日本経済は高い成長を続け、工業化・都市化と生活水準の向上が進んだ。", sources: ["mext-social-commentary", "archives-high-growth"], factcheckStatus: "verified" },
      { id: "contemporary-fact-02", claim: "1964年には東海道新幹線が開業し、東京オリンピックが開催された。", sources: ["archives-high-growth"], factcheckStatus: "verified" },
      { id: "contemporary-fact-03", claim: "高度経済成長の一方で大気汚染や水質汚濁などの公害が深刻化し、社会問題となった。", sources: ["mext-science-history", "archives-high-growth"], factcheckStatus: "verified" },
      { id: "contemporary-fact-04", claim: "1972年、沖縄はアメリカの施政権下から日本へ返還された。", sources: ["mext-social-commentary", "archives-high-growth"], factcheckStatus: "verified" },
      { id: "contemporary-fact-05", claim: "1973年の石油危機は日本経済に大きな影響を与え、高度経済成長期からの転換点の一つとなった。", sources: ["mext-social-commentary", "mext-science-history"], factcheckStatus: "verified" }
    ],
    sections: [
      {
        id: "growth",
        heading: "高度経済成長と生活の変化",
        lead: "戦後復興の後、日本では工業や交通網が急速に発達し、人々の生活も変化した。",
        sentences: [
          { id: "contemporary-01", template: "1950年代後半から日本は{{高度経済成長}}を経験し、工業化や都市化が進んだ。", terms: ["高度経済成長"], importance: "A", sources: ["mext-social-commentary", "archives-high-growth"], factcheckStatus: "verified" },
          { id: "contemporary-02", template: "1964年には{{東海道新幹線}}が開業し、{{東京オリンピック}}が開催された。", terms: ["東海道新幹線", "東京オリンピック"], importance: "A", sources: ["archives-high-growth"], factcheckStatus: "verified" },
          { id: "contemporary-03", template: "急速な工業化の一方で、各地で{{公害}}が深刻な社会問題となった。", terms: ["公害"], importance: "A", sources: ["mext-science-history", "archives-high-growth"], factcheckStatus: "verified" }
        ]
      },
      {
        id: "turning-points",
        heading: "1970年代の転換と累積復習",
        lead: "国際関係と経済の大きな変化を、戦後日本の流れの中で確認する。",
        sentences: [
          { id: "contemporary-04", template: "1972年、沖縄の施政権がアメリカから日本へ返還されたことを{{沖縄返還}}という。", terms: ["沖縄返還"], importance: "A", sources: ["mext-social-commentary", "archives-high-growth"], factcheckStatus: "verified" },
          { id: "contemporary-05", template: "1973年の{{石油危機}}は日本経済に大きな影響を与え、高度経済成長からの転換点の一つとなった。", terms: ["石油危機"], importance: "A", sources: ["mext-social-commentary", "mext-science-history"], factcheckStatus: "verified" },
          { id: "contemporary-06", template: "近現代の流れは、{{明治維新}}→日清・日露戦争→大正デモクラシー→アジア・太平洋戦争→戦後改革→高度経済成長の順につなげて復習する。", terms: ["明治維新"], importance: "B", sources: ["mext-social-commentary"], factcheckStatus: "verified" }
        ]
      }
    ],
    images: [],
    sources: [
      { id: "mext-social-commentary", label: "文部科学省『中学校学習指導要領解説 社会編』", url: "https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf" },
      { id: "archives-high-growth", label: "国立公文書館 特別展『高度成長の時代へ 1951-1972』展示資料", url: "https://www.archives.go.jp/information/pdf/h26/shiryou4-9.pdf" },
      { id: "mext-science-history", label: "文部科学省『戦後から科学技術基本法制定前まで』", url: "https://www.mext.go.jp/b_menu/hakusho/html/hpaa202501/1421221_00023.html" }
    ]
  };
  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
