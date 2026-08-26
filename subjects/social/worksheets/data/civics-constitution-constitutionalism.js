(() => {
  const unit = {
    id: "jh-civics-constitution-constitutionalism-001",
    title: "日本国憲法と立憲主義",
    subtitle: "憲法の基本原則と、政治権力を憲法で制約する考え方を学ぶ",
    schoolStage: "junior-high",
    field: "civics",
    unit: "人間の尊重と日本国憲法の基本的原則",
    era: "現代",
    practicalGradeGroup: "中学・公民",
    factcheckStatus: "verified",
    keyPoint: "日本の政治は日本国憲法に基づいて行われる。日本国憲法は国民主権・基本的人権の尊重・平和主義を基本原則とし、憲法によって政治権力を制約する立憲主義の考え方と結び付いている。",
    timeline: [
      { label: "1946年11月3日", note: "日本国憲法公布" },
      { label: "1947年5月3日", note: "日本国憲法施行" }
    ],
    facts: [
      { id: "constitution-fact-01", claim: "日本国憲法は1946年11月3日に公布され、1947年5月3日に施行された。", sources: ["ndl-constitution", "archives-reconstruction"], factcheckStatus: "verified" },
      { id: "constitution-fact-02", claim: "日本国憲法の基本原則は国民主権、基本的人権の尊重、平和主義である。", sources: ["mext-social-commentary", "ndl-constitution"], factcheckStatus: "verified" },
      { id: "constitution-fact-03", claim: "立憲主義は、憲法によって国家権力を制限し、人の権利や自由を保障しようとする考え方として扱われる。", sources: ["mext-social-commentary"], factcheckStatus: "verified" },
      { id: "constitution-fact-04", claim: "憲法第1条は天皇を日本国および日本国民統合の象徴とし、その地位は主権の存する日本国民の総意に基づくとしている。", sources: ["shugiin-constitution", "ndl-constitution"], factcheckStatus: "verified" },
      { id: "constitution-fact-05", claim: "憲法第98条は日本国憲法を国の最高法規とし、これに反する法律などは効力を有しないと定めている。", sources: ["ndl-constitution"], factcheckStatus: "verified" }
    ],
    sections: [
      {
        id: "principles",
        heading: "日本国憲法の基本原則",
        lead: "憲法は政治の基本的なルールであり、国の政治はその枠組みに基づいて行われる。",
        sentences: [
          { id: "constitution-01", template: "日本国憲法は1946年11月3日に{{公布}}され、1947年5月3日に{{施行}}された。", terms: ["公布", "施行"], importance: "A", sources: ["ndl-constitution", "archives-reconstruction"], factcheckStatus: "verified" },
          { id: "constitution-02", template: "日本国憲法の基本原則は、{{国民主権}}・{{基本的人権の尊重}}・{{平和主義}}である。", terms: ["国民主権", "基本的人権の尊重", "平和主義"], importance: "A", sources: ["mext-social-commentary", "ndl-constitution"], factcheckStatus: "verified" },
          { id: "constitution-03", template: "憲法によって国家権力を制限し、人の権利や自由を守ろうとする考え方を{{立憲主義}}という。", terms: ["立憲主義"], importance: "A", sources: ["mext-social-commentary"], factcheckStatus: "verified" }
        ]
      },
      {
        id: "constitutional-order",
        heading: "象徴天皇と最高法規",
        lead: "日本国憲法は天皇の地位や、憲法と他の法令との関係も定めている。",
        sentences: [
          { id: "constitution-04", template: "天皇は日本国と日本国民統合の{{象徴}}とされ、その地位は主権の存する日本国民の総意に基づく。", terms: ["象徴"], importance: "A", sources: ["shugiin-constitution"], factcheckStatus: "verified" },
          { id: "constitution-05", template: "日本国憲法は国の{{最高法規}}であり、憲法に反する法律などは効力をもたない。", terms: ["最高法規"], importance: "A", sources: ["ndl-constitution"], factcheckStatus: "verified" }
        ]
      }
    ],
    images: [
      {
        id: "constitution-signatures-civics",
        section: "principles",
        label: "日本国憲法の公布原本に関する署名部分",
        note: "日本国憲法の公布原本の署名部分を撮影した資料画像",
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Constitution_of_Japan_original_signatures.jpg",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Constitution_of_Japan_original_signatures.jpg",
        credit: "Etsujirō / Wikimedia Commons",
        license: "CC BY-SA 4.0",
        factcheckStatus: "verified"
      }
    ],
    sources: [
      { id: "mext-social-commentary", label: "文部科学省『中学校学習指導要領解説 社会編』", url: "https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf" },
      { id: "ndl-constitution", label: "国立国会図書館『日本国憲法の誕生』憲法条文", url: "https://www.ndl.go.jp/constitution/etc/j01.html" },
      { id: "archives-reconstruction", label: "国立公文書館『再建日本の出発』年表", url: "https://www.archives.go.jp/exhibition/digital/saiken/table.html" },
      { id: "shugiin-constitution", label: "衆議院『日本国憲法』", url: "https://www.shugiin.go.jp/internet/itdb_annai.nsf/html/statics/shiryo/dl-constitution.htm" },
      { id: "commons-constitution", label: "Wikimedia Commons『Constitution of Japan original signatures.jpg』", url: "https://commons.wikimedia.org/wiki/File:Constitution_of_Japan_original_signatures.jpg" }
    ]
  };
  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
