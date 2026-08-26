(() => {
  const unit = {
    id: "jh-history-taisho-democracy-interwar-001",
    title: "大正デモクラシーと戦間期",
    subtitle: "政党政治・普通選挙・社会運動から昭和初期の不安定化までをつなぐ",
    schoolStage: "junior-high",
    field: "history",
    unit: "近代の日本と世界",
    era: "大正〜昭和初期",
    practicalGradeGroup: "中学・歴史",
    factcheckStatus: "pending_factcheck",
    keyPoint: "第一次世界大戦後、政党政治や普通選挙を求める動きが広がった一方、治安維持法や世界恐慌などを背景に政治と社会は不安定さを増していった。",
    timeline: [
      { label: "1918年", note: "米騒動・原敬内閣" },
      { label: "1925年", note: "普通選挙法・治安維持法" },
      { label: "1928年", note: "最初の男子普通選挙" },
      { label: "1929年", note: "世界恐慌" }
    ],
    facts: [
      { id: "taisho-fact-01", claim: "第一次世界大戦期から戦後にかけて、民意を政治に反映させようとする動きが広がり、この時期の政治・社会の民主化を求める風潮は大正デモクラシーと呼ばれる。", sources: ["mext-social-commentary", "ndl-taisho"], factcheckStatus: "pending_factcheck" },
      { id: "taisho-fact-02", claim: "1918年、米価の急騰を背景に各地で米騒動が起こり、その後、衆議院に基盤を持つ立憲政友会総裁の原敬が首相となった。", sources: ["mext-social-commentary", "ndl-taisho"], factcheckStatus: "pending_factcheck" },
      { id: "taisho-fact-03", claim: "1925年の衆議院議員選挙法改正で納税資格が撤廃され、一定年齢以上の男子に選挙権を認める男子普通選挙が実現した。", sources: ["ndl-universal-suffrage"], factcheckStatus: "pending_factcheck" },
      { id: "taisho-fact-04", claim: "1925年には治安維持法も制定され、国体の変革や私有財産制度の否認を目的とする結社などを取り締まる仕組みが設けられた。", sources: ["ndl-universal-suffrage"], factcheckStatus: "pending_factcheck" },
      { id: "taisho-fact-05", claim: "1929年に始まった世界恐慌は日本経済にも大きな打撃を与え、昭和初期の社会不安を強める背景の一つとなった。", sources: ["mext-social-commentary", "ndl-modern"], factcheckStatus: "pending_factcheck" }
    ],
    sections: [
      {
        id: "democracy",
        heading: "大正デモクラシーと政党政治",
        lead: "民意を政治へ反映させようとする動きが強まり、政党内閣や普通選挙への期待が高まった。",
        sentences: [
          { id: "taisho-01", template: "政治や社会の民主化を求める大正期の風潮を{{大正デモクラシー}}という。", terms: ["大正デモクラシー"], importance: "A", sources: ["mext-social-commentary", "ndl-taisho"], factcheckStatus: "pending_factcheck" },
          { id: "taisho-02", template: "1918年、米価の急騰を背景に各地で{{米騒動}}が起こった。", terms: ["米騒動"], importance: "A", sources: ["ndl-taisho"], factcheckStatus: "pending_factcheck" },
          { id: "taisho-03", template: "米騒動後、立憲政友会総裁の{{原敬}}が首相となり、政党を基盤とする内閣を組織した。", terms: ["原敬"], importance: "A", sources: ["ndl-taisho"], factcheckStatus: "pending_factcheck" }
        ]
      },
      {
        id: "suffrage-crisis",
        heading: "普通選挙と昭和初期の不安",
        lead: "選挙権は広がったが、同時に思想統制が強まり、世界恐慌も社会に大きな影響を与えた。",
        sentences: [
          { id: "taisho-04", template: "1925年、納税資格をなくして一定年齢以上の男子に選挙権を広げる{{普通選挙法}}が成立した。", terms: ["普通選挙法"], importance: "A", sources: ["ndl-universal-suffrage"], factcheckStatus: "pending_factcheck" },
          { id: "taisho-05", template: "同じ1925年には、社会運動や思想を取り締まる{{治安維持法}}も成立した。", terms: ["治安維持法"], importance: "A", sources: ["ndl-universal-suffrage"], factcheckStatus: "pending_factcheck" },
          { id: "taisho-06", template: "1929年に始まった{{世界恐慌}}は日本にも及び、昭和初期の社会不安を強めた。", terms: ["世界恐慌"], importance: "A", sources: ["mext-social-commentary", "ndl-modern"], factcheckStatus: "pending_factcheck" }
        ]
      }
    ],
    images: [
      {
        id: "hara-takashi-portrait",
        section: "democracy",
        label: "原敬",
        note: "1918年に首相となった原敬の肖像",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Picture_of_Takashi_Hara.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Picture_of_Takashi_Hara.jpg",
        credit: "Unknown author / The World's Work (1918) / Wikimedia Commons",
        license: "Public Domain in the United States (generation-stage candidate; recheck before publication)",
        factcheckStatus: "pending_factcheck"
      }
    ],
    sources: [
      { id: "mext-social-commentary", label: "文部科学省『中学校学習指導要領解説 社会編』", url: "https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf" },
      { id: "ndl-taisho", label: "国立国会図書館『史料にみる日本の近代 第3章 大正デモクラシー』", url: "https://www.ndl.go.jp/modern/cha3/" },
      { id: "ndl-universal-suffrage", label: "国立国会図書館『男子普通選挙法の成立と治安維持法』", url: "https://www.ndl.go.jp/modern/cha3/description13.html" },
      { id: "ndl-modern", label: "国立国会図書館『史料にみる日本の近代』", url: "https://www.ndl.go.jp/modern/" },
      { id: "commons-hara", label: "Wikimedia Commons『Picture of Takashi Hara.jpg』", url: "https://commons.wikimedia.org/wiki/File:Picture_of_Takashi_Hara.jpg" }
    ]
  };
  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
