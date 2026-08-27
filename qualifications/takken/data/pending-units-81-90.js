(() => {
  "use strict";

  const SOURCES = {
    regtax: {
      id: "nta-registration-tax-20260401",
      label: "国税庁『登録免許税のあらまし』（令和8年4月1日現在法令等）",
      url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/inshi/7190.htm"
    },
    stamp: {
      id: "nta-stamp-tax-20260401",
      label: "国税庁『不動産の譲渡等に関する契約書』（令和8年4月1日現在法令等）",
      url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/inshi/7101.htm"
    },
    stamprelief: {
      id: "nta-stamp-tax-relief-20260401",
      label: "国税庁『不動産の譲渡等に関する契約書の印紙税軽減措置』（令和8年4月1日現在法令等）",
      url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/inshi/7108.htm"
    },
    joto: {
      id: "nta-real-estate-transfer-2026",
      label: "国税庁『土地や建物を売ったとき』",
      url: "https://www.nta.go.jp/publication/pamph/koho/kurashi/html/05_3.htm"
    },
    landprice: {
      id: "mlit-land-price-system",
      label: "国土交通省『地価公示制度の概要』",
      url: "https://www.mlit.go.jp/totikensangyo/totikensangyo_fr4_000161.html"
    },
    appraisal: {
      id: "mlit-appraisal-standard",
      label: "国土交通省『不動産鑑定評価基準 第7章 鑑定評価の方式』",
      url: "https://www.mlit.go.jp/common/001204035.pdf"
    },
    jhf: {
      id: "jhf-flat35-overview",
      label: "住宅金融支援機構『フラット35とは』",
      url: "https://www.jhf.go.jp/recruit/initiatives/flat35.html"
    },
    rftc: {
      id: "rftc-display-rules",
      label: "不動産公正取引協議会連合会『不動産の表示に関する公正競争規約・同施行規則』",
      url: "https://www.rftc.jp/webkanri/kanri/wp-content/uploads/2019/02/h_kiyaku.pdf"
    },
    gsi: {
      id: "gsi-land-condition-map",
      label: "国土地理院『土地条件図』",
      url: "https://www.gsi.go.jp/bousaichiri/lc_index.html"
    },
    kouji2026: {
      id: "mlit-2026-land-price",
      label: "国土交通省『令和8年地価公示』",
      url: "https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/tochi_fudousan_kensetsugyo_fr4_000001_00324.html"
    },
    housing: {
      id: "mlit-2025-housing-starts",
      label: "国土交通省『建築着工統計調査報告（令和7年度計分）』",
      url: "https://www.mlit.go.jp/report/press/joho04_hh_001367.html"
    },
    retio: {
      id: "retio-2026-exam",
      label: "RETIO『令和8年度宅建試験概要・申込案内』",
      url: "https://moushikomi.retio.or.jp/"
    },
    retio_course: {
      id: "retio-registration-course",
      label: "RETIO『登録講習について』",
      url: "https://www.retio.or.jp/exam/tourokukosyu/"
    }
  };

  function sentence(id, template, terms, sources, importance = "A") {
    return { id, template, terms, importance, sources, factcheckStatus: "pending_factcheck" };
  }
  function fact(id, claim, sources) {
    return { id, claim, sources, factcheckStatus: "pending_factcheck" };
  }
  function unit(order, id, title, subtitle, category, chapter, officialScope, keyPoint, facts, sentences, sources) {
    return {
      id, title, subtitle,
      examYear: 2026,
      lawAsOf: "2026-04-01",
      category, chapter, unitOrder: order, officialScope,
      factcheckStatus: "pending_factcheck",
      keyPoint, facts,
      sections: [{ id: "core", heading: title, lead: subtitle, sentences }],
      questions: [], sources
    };
  }

  const U = [];

  U.push(unit(81, "registration-license-tax", "登録免許税", "不動産登記に伴う登録免許税の基本を整理する", "tax-other", "税", "宅地及び建物についての税に関する法令",
    "登録免許税は登記・登録等を受けるときに課され、不動産登記では登記原因や登記の種類に応じて課税標準・税率が異なる。",
    [
      fact("u81-f1", "登録免許税は、不動産等の登記・登録、免許、許可等について課税される。", ["nta-registration-tax-20260401"]),
      fact("u81-f2", "納税義務者は原則として登記や登録等を受ける者である。", ["nta-registration-tax-20260401"])
    ],
    [
      sentence("u81-s1", "不動産の所有権移転登記などには{{登録免許税}}が課される。", ["登録免許税"], ["nta-registration-tax-20260401"]),
      sentence("u81-s2", "登録免許税の納税義務者は原則として登記等を{{受ける者}}である。", ["受ける者"], ["nta-registration-tax-20260401"])
    ], [SOURCES.regtax]));

  U.push(unit(82, "stamp-tax", "印紙税", "不動産契約書にかかる印紙税の課税文書を押さえる", "tax-other", "税", "宅地及び建物についての税に関する法令",
    "不動産の譲渡に関する契約書は印紙税の課税文書に該当し、記載金額等に応じて税額が定まる。",
    [
      fact("u82-f1", "不動産売買契約書など不動産の譲渡に関する契約書は、印紙税の第1号文書に該当する。", ["nta-stamp-tax-20260401"]),
      fact("u82-f2", "一定期間に作成される一定額超の不動産譲渡契約書には軽減措置が設けられている。", ["nta-stamp-tax-relief-20260401"])
    ],
    [
      sentence("u82-s1", "不動産売買契約書は印紙税の{{第1号文書}}に該当する。", ["第1号文書"], ["nta-stamp-tax-20260401"]),
      sentence("u82-s2", "不動産譲渡契約書には要件を満たすと{{軽減措置}}が適用されることがある。", ["軽減措置"], ["nta-stamp-tax-relief-20260401"])
    ], [SOURCES.stamp, SOURCES.stamprelief]));

  U.push(unit(83, "income-tax-real-estate-transfer", "所得税・不動産譲渡の基礎", "土地建物の譲渡所得を長期・短期に分ける基準を理解する", "tax-other", "税", "宅地及び建物についての税に関する法令",
    "土地・建物の譲渡所得は分離課税で、譲渡年1月1日現在の所有期間が5年を超えるかどうかで長期・短期を区分する。",
    [
      fact("u83-f1", "土地や建物の譲渡所得は、給与所得など他の所得と区分して計算する分離課税である。", ["nta-real-estate-transfer-2026"]),
      fact("u83-f2", "譲渡年の1月1日現在で所有期間が5年を超える場合は長期譲渡所得、5年以下なら短期譲渡所得となる。", ["nta-real-estate-transfer-2026"])
    ],
    [
      sentence("u83-s1", "土地建物の譲渡所得は原則として{{分離課税}}である。", ["分離課税"], ["nta-real-estate-transfer-2026"]),
      sentence("u83-s2", "長期・短期の判定は譲渡年の{{1月1日}}現在の所有期間で行う。", ["1月1日"], ["nta-real-estate-transfer-2026"])
    ], [SOURCES.joto]));

  U.push(unit(84, "land-price-public-notice", "地価公示法", "標準地・正常価格・公示の仕組みを押さえる", "tax-other", "価格評定", "宅地及び建物の価格の評定に関すること",
    "地価公示は標準地について土地鑑定委員会が正常な価格を判定・公示し、一般の土地取引価格の指標等として機能する。",
    [
      fact("u84-f1", "地価公示では、土地鑑定委員会が標準地について2人以上の不動産鑑定士の鑑定評価を求め、正常な価格を判定する。", ["mlit-land-price-system"]),
      fact("u84-f2", "標準地の鑑定評価では、取引事例比較法・収益還元法・原価法等の結果を勘案する。", ["mlit-land-price-system"])
    ],
    [
      sentence("u84-s1", "地価公示の価格は{{土地鑑定委員会}}が判定する。", ["土地鑑定委員会"], ["mlit-land-price-system"]),
      sentence("u84-s2", "標準地の正常な価格は複数の{{不動産鑑定士}}の鑑定評価を基礎に判定される。", ["不動産鑑定士"], ["mlit-land-price-system"])
    ], [SOURCES.landprice]));

  U.push(unit(85, "real-estate-appraisal", "不動産鑑定評価の基礎", "原価・比較・収益の三方式と代表的手法を整理する", "tax-other", "価格評定", "宅地及び建物の価格の評定に関すること",
    "不動産鑑定評価では原価方式・比較方式・収益方式を基本とし、価格を求める代表的手法が原価法・取引事例比較法・収益還元法である。",
    [
      fact("u85-f1", "不動産鑑定評価の方式には原価方式、比較方式、収益方式の三方式がある。", ["mlit-appraisal-standard"]),
      fact("u85-f2", "価格を求める基本的手法は原価法、取引事例比較法、収益還元法に大別される。", ["mlit-appraisal-standard"])
    ],
    [
      sentence("u85-s1", "鑑定評価の基本三方式は原価・比較・{{収益}}方式である。", ["収益"], ["mlit-appraisal-standard"]),
      sentence("u85-s2", "取引事例に着目する価格手法は{{取引事例比較法}}である。", ["取引事例比較法"], ["mlit-appraisal-standard"])
    ], [SOURCES.appraisal]));

  U.push(unit(86, "housing-finance-agency", "住宅金融支援機構", "証券化支援とフラット35の基本構造を理解する", "tax-other", "需給・実務", "宅地及び建物の需給に関する法令及び実務に関すること",
    "住宅金融支援機構は民間金融機関による住宅金融を支援し、フラット35では民間金融機関の住宅ローン債権を買い取る証券化支援の仕組みを用いる。",
    [
      fact("u86-f1", "フラット35は全期間固定金利の住宅ローンである。", ["jhf-flat35-overview"]),
      fact("u86-f2", "証券化支援事業（買取型）では、機構が民間金融機関からフラット35の住宅ローン債権を買い取り、それを基礎に資金調達を行う。", ["jhf-flat35-overview"])
    ],
    [
      sentence("u86-s1", "{{フラット35}}は全期間固定金利の住宅ローンである。", ["フラット35"], ["jhf-flat35-overview"]),
      sentence("u86-s2", "買取型では機構が民間金融機関の住宅ローン{{債権を買い取る}}。", ["債権を買い取る"], ["jhf-flat35-overview"])
    ], [SOURCES.jhf]));

  U.push(unit(87, "fair-competition-advertising", "不動産広告・景品表示等", "不動産広告の表示規約と誤認防止の考え方を押さえる", "tax-other", "需給・実務", "宅地及び建物の需給に関する法令及び実務に関すること",
    "不動産広告では公正競争規約により、交通利便性、距離、面積、取引態様などについて実際より有利・優良と誤認させる表示が禁止される。",
    [
      fact("u87-f1", "不動産の表示規約は、交通の利便性や徒歩所要時間を実際より良く見せる誤認表示を禁止している。", ["rftc-display-rules"]),
      fact("u87-f2", "物件の面積や取引態様についても、事実と異なる又は実際より有利・優良と誤認させる表示が禁止対象となる。", ["rftc-display-rules"])
    ],
    [
      sentence("u87-s1", "徒歩所要時間などを実際より短く見せる{{誤認表示}}は禁止される。", ["誤認表示"], ["rftc-display-rules"]),
      sentence("u87-s2", "広告では物件の{{取引態様}}も正確に表示する必要がある。", ["取引態様"], ["rftc-display-rules"])
    ], [SOURCES.rftc]));

  U.push(unit(88, "land-building-knowledge", "土地・建物の基礎知識", "地形と災害リスクを土地選択の基礎として理解する", "tax-other", "土地・建物", "土地の形質、地積、地目及び種別並びに建物の形質、構造及び種別に関すること",
    "土地の地形分類は自然災害リスクと関係し、低地・旧河道・盛土地等では洪水、液状化、地盤崩壊などの注意点が異なる。",
    [
      fact("u88-f1", "国土地理院の土地条件図は、山地・台地・低地・人工地形などの地形分類を示し、防災や土地利用の基礎資料として利用される。", ["gsi-land-condition-map"]),
      fact("u88-f2", "旧河道、後背低地、盛土地・埋立地などは、地形分類に応じて洪水や液状化等の災害リスクに注意が必要である。", ["gsi-land-condition-map"])
    ],
    [
      sentence("u88-s1", "土地条件図では土地を{{地形分類}}して自然条件を把握できる。", ["地形分類"], ["gsi-land-condition-map"]),
      sentence("u88-s2", "旧河道や低地では{{洪水}}など地形に応じた災害リスクを確認する。", ["洪水"], ["gsi-land-condition-map"])
    ], [SOURCES.gsi]));

  U.push(unit(89, "statistics", "宅建試験の統計問題", "最新公的統計を出典と時点付きで読む習慣をつける", "tax-other", "需給・実務", "宅地及び建物の需給に関する法令及び実務に関すること",
    "統計問題は年度で数値が変わるため、地価公示や住宅着工統計などの公的統計を、公表年・対象期間・増減方向をセットで確認する。",
    [
      fact("u89-f1", "令和8年地価公示では、全国平均の全用途平均・住宅地・商業地はいずれも5年連続で上昇したと国土交通省が公表している。", ["mlit-2026-land-price"]),
      fact("u89-f2", "令和7年度の新設住宅着工戸数は、持家・貸家・分譲住宅が減少し、前年度の増加から再び減少したと国土交通省が公表している。", ["mlit-2025-housing-starts"])
    ],
    [
      sentence("u89-s1", "令和8年地価公示は{{1月1日}}時点の地価を公表する。", ["1月1日"], ["mlit-2026-land-price"]),
      sentence("u89-s2", "住宅着工統計は年度ごとの{{新設住宅着工戸数}}を確認する重要な統計である。", ["新設住宅着工戸数"], ["mlit-2025-housing-starts"])
    ], [SOURCES.kouji2026, SOURCES.housing]));

  U.push(unit(90, "five-question-exemption-review", "5問免除科目まとめ", "登録講習修了者の免除範囲と対象分野を整理する", "tax-other", "需給・実務", "土地・建物の基礎及び宅地建物の需給に関する法令・実務",
    "登録講習修了者は宅建試験50問のうち5問が免除され45問を解答し、免除対象は土地・建物の基礎と需給・実務に関する分野である。",
    [
      fact("u90-f1", "宅建試験は通常50問の四肢択一式で、登録講習修了者は5問が免除され45問となる。", ["retio-2026-exam"]),
      fact("u90-f2", "登録講習は宅地建物取引業に従事し従業者証明書を持つ者が受講でき、修了試験合格後3年以内に行われる試験で一部免除を受けられる。", ["retio-registration-course"])
    ],
    [
      sentence("u90-s1", "登録講習修了者の出題数は{{45問}}である。", ["45問"], ["retio-2026-exam"]),
      sentence("u90-s2", "登録講習の修了による免除は{{5問}}である。", ["5問"], ["retio-registration-course"])
    ], [SOURCES.retio, SOURCES.retio_course]));

  window.TAKKEN_PENDING_UNITS_81_90 = U;
})();
