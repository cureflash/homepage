(() => {
  const source = { id: "mext-hs-civics-commentary", label: "文部科学省 高等学校学習指導要領解説 公民編", url: "https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002620_04.pdf" };
  const specs = [
    {"n":15,"course":"政治・経済","slug":"political-economy-international-society-law","title":"国際社会の変遷と国際法","subtitle":"国家間の関係を支えるルール","era":"現代","placement":"B「グローバル化する国際社会の諸課題」(1) 現代の国際政治・経済","keyPoint":"国際社会の成り立ちと変化を踏まえ、国家間の関係を調整する国際法の役割を捉える。","items":[{"term":"国際社会","claim":"国際社会では、主権国家を中心に多様な主体が関わり合いながら共通の課題に対応している。","template":"{{国際社会}}では、主権国家を中心に多様な主体が関わり合いながら共通の課題に対応している。"},{"term":"国際法","claim":"国際法は、国家間の関係や国際社会の共通ルールを定める法規範である。","template":"{{国際法}}は、国家間の関係や国際社会の共通ルールを定める法規範である。"}]},
    {"n":16,"course":"政治・経済","slug":"political-economy-human-rights-sovereignty-territory","title":"人権・国家主権・領土","subtitle":"国家と人々の権利を国際社会で考える","era":"現代","placement":"B「グローバル化する国際社会の諸課題」(1) 現代の国際政治・経済","keyPoint":"人権保障、国家主権、領土を相互に関連付け、国際社会における国家の権限と責任を考える。","items":[{"term":"国家主権","claim":"国家主権は、国家がその領域と統治について最高の権力をもつという考え方である。","template":"{{国家主権}}は、国家がその領域と統治について最高の権力をもつという考え方である。"},{"term":"領土","claim":"領土は国家の主権が及ぶ空間に関わり、国際関係ではその範囲や扱いが重要な課題となる。","template":"{{領土}}は国家の主権が及ぶ空間に関わり、国際関係ではその範囲や扱いが重要な課題となる。"}]},
    {"n":17,"course":"政治・経済","slug":"political-economy-un-international-organizations","title":"国際連合と国際機構","subtitle":"国際協力を支える制度","era":"現代","placement":"B「グローバル化する国際社会の諸課題」(1) 現代の国際政治・経済","keyPoint":"国際連合や各種の国際機構が、平和・安全や経済・社会分野の国際協力を支える役割を捉える。","items":[{"term":"国際連合","claim":"国際連合は、国際の平和と安全や国際協力を進めるために設けられた国際機構である。","template":"{{国際連合}}は、国際の平和と安全や国際協力を進めるために設けられた国際機構である。"},{"term":"国際機構","claim":"国際機構は、複数の国が共通の目的のために継続的に協力する制度的な枠組みである。","template":"{{国際機構}}は、複数の国が共通の目的のために継続的に協力する制度的な枠組みである。"}]},
    {"n":18,"course":"政治・経済","slug":"political-economy-security-defense-contribution","title":"安全保障・防衛と国際貢献","subtitle":"平和と安全を支える方法を考える","era":"現代","placement":"B「グローバル化する国際社会の諸課題」(1) 現代の国際政治・経済","keyPoint":"安全保障と防衛、国際社会への貢献を関連付け、平和と安全を維持するための多様な手段を考える。","items":[{"term":"安全保障","claim":"安全保障は、国家や人々の平和と安全を脅威から守るための政策や仕組みに関わる。","template":"{{安全保障}}は、国家や人々の平和と安全を脅威から守るための政策や仕組みに関わる。"},{"term":"国際貢献","claim":"国際貢献には、国際協力や人道支援などを通して国際社会の課題解決に関わる取組が含まれる。","template":"{{国際貢献}}には、国際協力や人道支援などを通して国際社会の課題解決に関わる取組が含まれる。"}]},
    {"n":19,"course":"政治・経済","slug":"political-economy-trade","title":"貿易の現状と意義","subtitle":"国境を越える財とサービスの取引","era":"現代","placement":"B「グローバル化する国際社会の諸課題」(1) 現代の国際政治・経済","keyPoint":"貿易の意義を国際分業や各国経済の相互依存と関連付けて捉える。","items":[{"term":"貿易","claim":"貿易は、国境を越えて財やサービスを取引する経済活動である。","template":"{{貿易}}は、国境を越えて財やサービスを取引する経済活動である。"},{"term":"国際分業","claim":"国際分業では、各国や地域がそれぞれの特徴を生かして生産や取引を分担する。","template":"{{国際分業}}では、各国や地域がそれぞれの特徴を生かして生産や取引を分担する。"}]},
    {"n":20,"course":"政治・経済","slug":"political-economy-exchange-balance-payments","title":"為替相場と国際収支","subtitle":"国際取引を数字で捉える","era":"現代","placement":"B「グローバル化する国際社会の諸課題」(1) 現代の国際政治・経済","keyPoint":"為替相場と国際収支を、国際的な財・サービス・資金の移動と関連付けて理解する。","items":[{"term":"為替相場","claim":"為替相場は、異なる通貨を交換するときの交換比率である。","template":"{{為替相場}}は、異なる通貨を交換するときの交換比率である。"},{"term":"国際収支","claim":"国際収支は、一定期間に行われた一国と外国との経済取引を体系的に記録したものである。","template":"{{国際収支}}は、一定期間に行われた一国と外国との経済取引を体系的に記録したものである。"}]},
    {"n":21,"course":"政治・経済","slug":"political-economy-international-cooperation-economic-institutions","title":"国際協調と国際経済機関","subtitle":"世界経済の安定と協力を支える","era":"現代","placement":"B「グローバル化する国際社会の諸課題」(1) 現代の国際政治・経済","keyPoint":"国際協調と国際経済機関の役割を、貿易・金融・開発など国境を越える経済課題と関連付けて考える。","items":[{"term":"国際協調","claim":"国際協調は、複数の国が共通の課題についてルールや政策を調整しながら協力することである。","template":"{{国際協調}}は、複数の国が共通の課題についてルールや政策を調整しながら協力することである。"},{"term":"国際経済機関","claim":"国際経済機関は、貿易や金融、開発などの分野で各国の協力を支える役割を担う。","template":"{{国際経済機関}}は、貿易や金融、開発などの分野で各国の協力を支える役割を担う。"}]},
    {"n":22,"course":"政治・経済","slug":"political-economy-global-issues-inquiry","title":"グローバル化する国際社会の課題探究","subtitle":"国際社会の課題を政治と経済から考える","era":"現代","placement":"B「グローバル化する国際社会の諸課題」(2) 諸課題の探究","keyPoint":"国際社会の課題について資料を基に複数の立場を比較し、政治と経済を関連付けて解決の方向を構想する。","items":[{"term":"グローバル化","claim":"グローバル化が進む社会では、人・物・資金・情報の国境を越えた移動が各国の政治や経済を相互に結び付ける。","template":"{{グローバル化}}が進む社会では、人・物・資金・情報の国境を越えた移動が各国の政治や経済を相互に結び付ける。"},{"term":"課題探究","claim":"国際社会の課題探究では、資料を基に複数の立場や利害を比較し、実現可能性も考えながら解決の方向を構想する。","template":"国際社会の{{課題探究}}では、資料を基に複数の立場や利害を比較し、実現可能性も考えながら解決の方向を構想する。"}]}
  ];

  const units = specs.map((spec) => ({
    id: `political-economy-${String(spec.n).padStart(2, "0")}-${spec.slug}`,
    title: spec.title,
    subtitle: spec.subtitle,
    schoolStage: "high-school",
    field: "civics",
    formalCourse: spec.course,
    unit: spec.placement,
    era: spec.era,
    practicalGradeGroup: `高校・${spec.course}`,
    factcheckStatus: "pending_factcheck",
    keyPoint: spec.keyPoint,
    timeline: [],
    facts: spec.items.map((item, index) => ({
      id: `${spec.slug}-fact-${String(index + 1).padStart(2, "0")}`,
      claim: item.claim,
      sources: [source.id],
      factcheckStatus: "pending_factcheck"
    })),
    sections: [{
      id: "core",
      heading: spec.title,
      lead: spec.subtitle,
      sentences: spec.items.map((item, index) => ({
        id: `${spec.slug}-sentence-${String(index + 1).padStart(2, "0")}`,
        template: item.template,
        terms: [item.term],
        importance: "A",
        sources: [source.id],
        factcheckStatus: "pending_factcheck"
      }))
    }],
    images: [],
    sources: [source]
  }));

  window.SOCIAL_WORKSHEET_UNITS = window.SOCIAL_WORKSHEET_UNITS || [];
  window.SOCIAL_WORKSHEET_UNITS.push(...units);
})();