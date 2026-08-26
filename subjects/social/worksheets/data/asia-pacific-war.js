(() => {
  const unit = {
    id: "jh-history-asia-pacific-war-001",
    title: "アジア・太平洋戦争",
    subtitle: "満州事変から日中戦争、太平洋戦争と敗戦までをつなぐ",
    schoolStage: "junior-high",
    field: "history",
    unit: "現代の日本と世界",
    era: "昭和前期",
    practicalGradeGroup: "中学・歴史",
    factcheckStatus: "verified",
    keyPoint: "1930年代、日本は中国大陸で軍事行動を拡大し、1941年にはアメリカ・イギリスなどとの戦争に入った。戦争は1945年のポツダム宣言受諾と降伏によって終わった。",
    timeline: [
      { label: "1931年", note: "満州事変" },
      { label: "1937年", note: "日中戦争" },
      { label: "1941年", note: "太平洋戦争" },
      { label: "1945年", note: "ポツダム宣言受諾・敗戦" }
    ],
    facts: [
      { id: "apw-fact-01", claim: "1931年、南満州鉄道の線路爆破事件をきっかけとして日本の関東軍が軍事行動を拡大し、満州事変が始まった。", sources: ["mext-social-commentary", "ndl-modern"], factcheckStatus: "verified" },
      { id: "apw-fact-02", claim: "1932年、日本の軍事的影響下で満州国が建国され、国際連盟の調査と日本への批判を経て、日本は1933年に国際連盟脱退を通告した。", sources: ["mext-social-commentary", "ndl-modern"], factcheckStatus: "verified" },
      { id: "apw-fact-03", claim: "1937年の盧溝橋事件をきっかけに日中戦争が始まり、戦闘は中国各地へ拡大した。", sources: ["mext-social-commentary", "ndl-modern"], factcheckStatus: "verified" },
      { id: "apw-fact-04", claim: "戦争の長期化に伴い、1938年の国家総動員法などによって人や物資を戦争に動員する体制が強められた。", sources: ["mext-social-commentary", "ndl-modern"], factcheckStatus: "verified" },
      { id: "apw-fact-05", claim: "1941年12月、日本軍はハワイの真珠湾などを攻撃し、アメリカ・イギリスなどとの太平洋戦争に入った。", sources: ["mext-social-commentary", "national-archives-s20"], factcheckStatus: "verified" },
      { id: "apw-fact-06", claim: "1945年、日本はポツダム宣言を受諾し、9月2日に降伏文書へ調印した。", sources: ["national-archives-end-war", "national-archives-reconstruction"], factcheckStatus: "verified" }
    ],
    sections: [
      {
        id: "expansion",
        heading: "戦争の拡大",
        lead: "1930年代、日本の軍事行動は中国大陸で拡大し、国際社会との対立も深まった。",
        sentences: [
          { id: "apw-01", template: "1931年、日本の関東軍の軍事行動から{{満州事変}}が始まった。", terms: ["満州事変"], importance: "A", sources: ["mext-social-commentary", "ndl-modern"], factcheckStatus: "verified" },
          { id: "apw-02", template: "1937年、盧溝橋事件をきっかけに{{日中戦争}}が始まった。", terms: ["日中戦争"], importance: "A", sources: ["mext-social-commentary", "ndl-modern"], factcheckStatus: "verified" },
          { id: "apw-03", template: "1938年には{{国家総動員法}}が制定され、人や物資を戦争へ動員する体制が強められた。", terms: ["国家総動員法"], importance: "A", sources: ["mext-social-commentary", "ndl-modern"], factcheckStatus: "verified" }
        ]
      },
      {
        id: "pacific-end",
        heading: "太平洋戦争と敗戦",
        lead: "1941年から戦争はアジア・太平洋の広い範囲へ拡大し、日本国内にも大きな被害が及んだ。",
        sentences: [
          { id: "apw-04", template: "1941年12月、日本はアメリカ・イギリスなどとの{{太平洋戦争}}に入った。", terms: ["太平洋戦争"], importance: "A", sources: ["mext-social-commentary"], factcheckStatus: "verified" },
          { id: "apw-05", template: "1945年7月、連合国は日本に降伏を求める{{ポツダム宣言}}を発表した。", terms: ["ポツダム宣言"], importance: "A", sources: ["national-archives-potsdam"], factcheckStatus: "verified" },
          { id: "apw-06", template: "日本はポツダム宣言を受諾し、1945年9月2日に{{降伏文書}}へ調印した。", terms: ["降伏文書"], importance: "A", sources: ["national-archives-reconstruction"], factcheckStatus: "verified" }
        ]
      }
    ],
    images: [],
    sources: [
      { id: "mext-social-commentary", label: "文部科学省『中学校学習指導要領解説 社会編』", url: "https://www.mext.go.jp/content/20240919-mxt_kyoiku01-100002608.pdf" },
      { id: "ndl-modern", label: "国立国会図書館『史料にみる日本の近代』", url: "https://www.ndl.go.jp/modern/" },
      { id: "national-archives-s20", label: "国立公文書館『昭和20年』", url: "https://www.archives.go.jp/exhibition/digital/s20/" },
      { id: "national-archives-potsdam", label: "国立公文書館『本土決戦の準備とポツダム宣言』", url: "https://www.archives.go.jp/exhibition/digital/s20/contents/4_01.html" },
      { id: "national-archives-end-war", label: "国立公文書館『終戦の詔書』", url: "https://www.archives.go.jp/exhibition/digital/koubunshonosekai/contents/09.html" },
      { id: "national-archives-reconstruction", label: "国立公文書館『再建日本の出発』年表", url: "https://www.archives.go.jp/exhibition/digital/saiken/table.html" }
    ]
  };
  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(unit);
})();
