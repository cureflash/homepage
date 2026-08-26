(() => {
  "use strict";

  const SOURCES = {
    mlitInterpretation2026: {
      id: "mlit-interpretation-2026",
      label: "国土交通省『宅地建物取引業法 法令改正・解釈について（令和8年4月1日以降）』",
      url: "https://www.mlit.go.jp/totikensangyo/const/1_6_bt_000268.html"
    },
    mlitLicense: {
      id: "mlit-license",
      label: "国土交通省『宅地建物取引の免許について』",
      url: "https://www.mlit.go.jp/totikensangyo/const/1_6_bt_000242.html"
    },
    mlitLicensePdf: {
      id: "mlit-license-pdf",
      label: "国土交通省『宅地建物取引業の免許について』",
      url: "https://www.mlit.go.jp/common/001233953.pdf"
    },
    mlitDuty: {
      id: "mlit-duty",
      label: "国土交通省 北陸地方整備局『宅地建物取引業免許後における義務等について』",
      url: "https://www.hrr.mlit.go.jp/kensei/sangyo/fudousan/duty.html"
    },
    mlitBrokerage: {
      id: "mlit-brokerage",
      label: "国土交通省『宅地建物取引業法関係／標準媒介契約約款』",
      url: "https://www.mlit.go.jp/totikensangyo/const/1_6_bt_000266.html"
    },
    mlitStandardBrokerage: {
      id: "mlit-standard-brokerage",
      label: "国土交通省『標準媒介契約約款』",
      url: "https://www.mlit.go.jp/notice/noticedata/sgml/1990/26196400/26196400.html"
    },
    mlitTakkenshi: {
      id: "mlit-takkenshi",
      label: "国土交通省『宅地建物取引士制度の概要』",
      url: "https://www.mlit.go.jp/common/001093934.pdf"
    },
    mlitOverview: {
      id: "mlit-overview",
      label: "国土交通省『宅地建物取引業法の概要』",
      url: "https://www.mlit.go.jp/common/001308308.pdf"
    }
  };

  const base = {
    examYear: 2026,
    lawAsOf: "2026-04-01",
    category: "takken-gyoho",
    officialScope: "宅地建物取引業法及び同法の関係法令",
    factcheckStatus: "pending_factcheck",
    questions: []
  };

  function sentence(id, template, terms, sources, importance = "A") {
    return { id, template, terms, importance, sources, factcheckStatus: "pending_factcheck" };
  }
  function fact(id, claim, sources) {
    return { id, claim, sources, factcheckStatus: "pending_factcheck" };
  }
  function unit(order, id, title, subtitle, chapter, keyPoint, facts, sentences, sources) {
    return {
      ...base,
      id, title, subtitle, chapter, unitOrder: order, keyPoint,
      facts,
      sections: [{ id: "core", heading: title, lead: subtitle, sentences }],
      sources
    };
  }

  const U = [];

  U.push(unit(1, "takken-gyoho-definition", "宅地・建物・宅建業の定義", "何を『宅建業』として規制するかを最初に整理する", "免許制度",
    "自ら行う賃貸は宅建業の定義に含まれない一方、売買・交換や、その代理・媒介は『業として』行えば宅建業になり得る。",
    [
      fact("u01-f1", "宅建業には、宅地・建物の売買または交換を業として行うことが含まれる。", ["mlit-license"]),
      fact("u01-f2", "宅建業には、宅地・建物の売買・交換・貸借の代理または媒介を業として行うことが含まれる。", ["mlit-license"])
    ],
    [
      sentence("u01-s1", "宅地・建物の{{売買}}や{{交換}}を業として行うことは宅建業に含まれる。", ["売買", "交換"], ["mlit-license"]),
      sentence("u01-s2", "売買・交換・貸借の{{代理}}または{{媒介}}を業として行うことも宅建業に含まれる。", ["代理", "媒介"], ["mlit-license"])
    ], [SOURCES.mlitLicense, SOURCES.mlitOverview]));

  U.push(unit(2, "takken-gyoho-license-required", "免許が必要な取引・不要な行為", "取引の種類と『業として』の要件を区別する", "免許制度",
    "宅建業を営むには免許が必要。取引類型と反復継続性を切り分けて判断する。",
    [fact("u02-f1", "宅地建物取引業を営もうとする者は、国土交通大臣または都道府県知事の免許を受ける必要がある。", ["mlit-license"])],
    [
      sentence("u02-s1", "{{宅地建物取引業}}を営もうとする者は、原則として宅建業の{{免許}}を受ける必要がある。", ["宅地建物取引業", "免許"], ["mlit-license"]),
      sentence("u02-s2", "試験では、まず行為が{{売買・交換}}なのか、{{代理・媒介}}なのかを分類する。", ["売買・交換", "代理・媒介"], ["mlit-license"])
    ], [SOURCES.mlitLicense]));

  U.push(unit(3, "takken-gyoho-license-authority", "国土交通大臣免許・都道府県知事免許", "事務所を置く都道府県数で免許権者を判断する", "免許制度",
    "1都道府県だけに事務所なら知事、2以上の都道府県に事務所なら国土交通大臣。",
    [fact("u03-f1", "2以上の都道府県に事務所を設置して宅建業を営む場合は国土交通大臣免許、1都道府県のみなら都道府県知事免許となる。", ["mlit-license"])],
    [
      sentence("u03-s1", "事務所が{{2以上の都道府県}}にある場合、免許権者は{{国土交通大臣}}である。", ["2以上の都道府県", "国土交通大臣"], ["mlit-license"]),
      sentence("u03-s2", "事務所が{{1の都道府県}}だけにある場合、免許権者はその{{都道府県知事}}である。", ["1の都道府県", "都道府県知事"], ["mlit-license"])
    ], [SOURCES.mlitLicense, SOURCES.mlitLicensePdf]));

  U.push(unit(4, "takken-gyoho-license-disqualification", "免許の欠格事由", "免許を受けられない代表的な場合を整理する", "免許制度",
    "欠格事由では、一定の取消し・刑罰・不正行為などについて『5年間』が重要な軸になる。",
    [fact("u04-f1", "国土交通省は、宅建業法5条の欠格要件として、一定の免許取消し・刑罰・不正行為等に関する5年間の制限を案内している。", ["mlit-license"])],
    [
      sentence("u04-s1", "免許の欠格事由のうち、一定の免許取消しや刑罰などでは{{5年間}}という期間が重要になる。", ["5年間"], ["mlit-license"]),
      sentence("u04-s2", "欠格事由は宅建業法{{第5条}}を基準に確認する。", ["第5条"], ["mlit-license"])
    ], [SOURCES.mlitLicense, SOURCES.mlitInterpretation2026]));

  U.push(unit(5, "takken-gyoho-license-validity-renewal", "免許の有効期間・更新", "5年の有効期間と更新申請時期を押さえる", "免許制度",
    "免許は5年間。更新申請は満了日の90日前から30日前まで。",
    [
      fact("u05-f1", "宅地建物取引業免許の有効期間は5年間である。", ["mlit-license-pdf"]),
      fact("u05-f2", "更新申請は有効期間満了日の90日前から30日前までに行う。", ["mlit-license-pdf"])
    ],
    [
      sentence("u05-s1", "宅建業免許の有効期間は{{5年間}}である。", ["5年間"], ["mlit-license-pdf"]),
      sentence("u05-s2", "更新申請は、満了日の{{90日前}}から{{30日前}}までに行う。", ["90日前", "30日前"], ["mlit-license-pdf"])
    ], [SOURCES.mlitLicensePdf, SOURCES.mlitDuty]));

  U.push(unit(6, "takken-gyoho-license-change-closure", "免許換え・変更届・廃業等", "免許後に事情が変わったときの届出を整理する", "免許制度",
    "名簿登載事項の一定の変更は30日以内の届出対象。免許権者が変わる事務所移転等では免許換えも論点になる。",
    [fact("u06-f1", "宅建業法8条2項2号から6号の事項に変更があった場合、30日以内に変更の届出を行うと国土交通省地方整備局が案内している。", ["mlit-duty"])],
    [
      sentence("u06-s1", "一定の名簿登載事項に変更があったときは、原則として{{30日以内}}に変更届を提出する。", ["30日以内"], ["mlit-duty"]),
      sentence("u06-s2", "事務所の移転等で免許権者の区分が変わる場合は{{免許換え}}の論点を確認する。", ["免許換え"], ["mlit-interpretation-2026"])
    ], [SOURCES.mlitDuty, SOURCES.mlitInterpretation2026]));

  U.push(unit(7, "takken-gyoho-roster-signs", "宅建業者名簿・標識等", "免許後の公示・表示制度を整理する", "免許制度",
    "宅建業者は免許を受けた後も、名簿・標識などを通じて取引相手が事業者情報を確認できる制度の対象になる。",
    [fact("u07-f1", "宅建業法には宅地建物取引業者名簿および標識に関する規定がある。", ["mlit-interpretation-2026"])],
    [
      sentence("u07-s1", "宅建業者の免許情報等は{{宅地建物取引業者名簿}}で管理される。", ["宅地建物取引業者名簿"], ["mlit-interpretation-2026"]),
      sentence("u07-s2", "宅建業者には事務所等での{{標識}}掲示に関する規制がある。", ["標識"], ["mlit-interpretation-2026"])
    ], [SOURCES.mlitInterpretation2026]));

  U.push(unit(8, "takken-shi-registration", "宅建士資格登録", "試験合格から宅建士として業務するまでの手続きを分ける", "宅地建物取引士",
    "試験合格と、資格登録・宅建士証の取得は別段階。",
    [fact("u08-f1", "宅建業法は宅地建物取引士の資格試験、登録、宅地建物取引士証の制度を設けている。", ["mlit-takkenshi"])],
    [
      sentence("u08-s1", "宅建試験の{{合格}}と、宅建士の{{資格登録}}は別の手続段階である。", ["合格", "資格登録"], ["mlit-takkenshi"]),
      sentence("u08-s2", "実務で宅建士として必要な手続は、試験合格だけで完了するわけではない。", [], ["mlit-takkenshi"])
    ], [SOURCES.mlitTakkenshi, SOURCES.mlitInterpretation2026]));

  U.push(unit(9, "takken-shi-card", "宅地建物取引士証", "宅建士証の役割と提示場面を整理する", "宅地建物取引士",
    "重要事項説明では、宅地建物取引士証の提示が重要な手続になる。",
    [fact("u09-f1", "宅地建物取引士制度では宅地建物取引士証が設けられ、重要事項説明は宅地建物取引士が担当する。", ["mlit-takkenshi"])],
    [
      sentence("u09-s1", "重要事項説明を行う宅建士は、{{宅地建物取引士証}}の制度の下で業務を行う。", ["宅地建物取引士証"], ["mlit-takkenshi"]),
      sentence("u09-s2", "重要事項説明は{{宅地建物取引士}}が担当する。", ["宅地建物取引士"], ["mlit-takkenshi"])
    ], [SOURCES.mlitTakkenshi, SOURCES.mlitInterpretation2026]));

  U.push(unit(10, "takken-shi-exclusive", "専任の宅建士", "事務所に必要な専任宅建士の人数を押さえる", "宅地建物取引士",
    "事務所では、業務従事者5人に1人以上の割合で専任宅建士を置く。",
    [fact("u10-f1", "宅建業者の事務所では、業務従事者5人に1人以上の割合で専任の宅地建物取引士を置く必要がある。", ["mlit-license", "mlit-takkenshi"])],
    [
      sentence("u10-s1", "事務所では、業務従事者{{5人に1人以上}}の割合で{{専任の宅地建物取引士}}を置く。", ["5人に1人以上", "専任の宅地建物取引士"], ["mlit-license", "mlit-takkenshi"]),
      sentence("u10-s2", "専任宅建士が法定数を欠く状態は、免許制度上も重要な問題になる。", [], ["mlit-license"])
    ], [SOURCES.mlitLicense, SOURCES.mlitTakkenshi]));

  U.push(unit(11, "takken-shi-exclusive-duties", "宅建士の独占業務", "35条・37条と宅建士の役割を結び付ける", "宅地建物取引士",
    "重要事項説明と、35条・37条関係書面への宅建士の関与をセットで整理する。",
    [fact("u11-f1", "国土交通省は宅地建物取引士の業務として重要事項説明、35条関係書面・37条関係書面への記名を位置付けている。", ["mlit-takkenshi", "mlit-interpretation-2026"])],
    [
      sentence("u11-s1", "契約前の{{重要事項説明}}は宅地建物取引士が行う。", ["重要事項説明"], ["mlit-takkenshi"]),
      sentence("u11-s2", "{{35条}}と{{37条}}の書面等では、宅地建物取引士の記名が重要な手続になる。", ["35条", "37条"], ["mlit-interpretation-2026"])
    ], [SOURCES.mlitTakkenshi, SOURCES.mlitInterpretation2026]));

  U.push(unit(12, "business-guarantee-deposit", "営業保証金", "取引相手を保護する供託制度の骨格をつかむ", "営業保証・保証協会",
    "宅建業者には、営業保証金または保証協会制度を通じた取引相手保護の仕組みがある。",
    [fact("u12-f1", "宅建業法の業務規制には営業保証金の供託制度が含まれる。", ["mlit-overview"])],
    [
      sentence("u12-s1", "宅建業法には取引相手を保護するための{{営業保証金}}制度がある。", ["営業保証金"], ["mlit-overview"]),
      sentence("u12-s2", "営業保証金は{{供託}}を用いる制度である。", ["供託"], ["mlit-overview", "mlit-interpretation-2026"])
    ], [SOURCES.mlitOverview, SOURCES.mlitInterpretation2026]));

  U.push(unit(13, "business-guarantee-refund", "営業保証金の還付・不足額", "営業保証金が実際に使われる場面を整理する", "営業保証・保証協会",
    "営業保証金は、宅建業に関する一定の取引債権を保護するために還付制度と結び付いている。",
    [fact("u13-f1", "営業保証金制度には、宅建業者との取引により生じた一定の債権について還付を受ける仕組みがある。", ["mlit-interpretation-2026"])],
    [
      sentence("u13-s1", "営業保証金は、一定の場合に取引相手への{{還付}}に用いられる。", ["還付"], ["mlit-interpretation-2026"]),
      sentence("u13-s2", "還付により供託額が不足した場合には{{不足額}}を回復する仕組みがある。", ["不足額"], ["mlit-interpretation-2026"])
    ], [SOURCES.mlitInterpretation2026]));

  U.push(unit(14, "guarantee-association", "保証協会・弁済業務保証金", "営業保証金と保証協会の二つのルートを比較する", "営業保証・保証協会",
    "保証協会の社員となる宅建業者には、弁済業務保証金制度が用意されている。",
    [fact("u14-f1", "宅建業法には、宅地建物取引業保証協会および弁済業務保証金に関する制度がある。", ["mlit-interpretation-2026"])],
    [
      sentence("u14-s1", "営業保証金とは別に、{{保証協会}}を利用する制度がある。", ["保証協会"], ["mlit-interpretation-2026"]),
      sentence("u14-s2", "保証協会では{{弁済業務保証金}}の仕組みにより取引相手の保護を図る。", ["弁済業務保証金"], ["mlit-interpretation-2026"])
    ], [SOURCES.mlitInterpretation2026]));

  U.push(unit(15, "brokerage-contract-basics", "媒介契約の基本", "売買・交換の媒介契約で必要な書面と説明を押さえる", "媒介契約",
    "売買・交換の媒介契約を締結した宅建業者は、遅滞なく所定事項を記載した書面等を依頼者に交付する。",
    [fact("u15-f1", "宅建業者が宅地・建物の売買または交換の媒介契約を締結したときは、遅滞なく所定事項を記載した書面を依頼者に交付する制度がある。", ["mlit-brokerage"])],
    [
      sentence("u15-s1", "売買・交換の{{媒介契約}}を締結したときは、遅滞なく所定の書面等を依頼者に交付する。", ["媒介契約"], ["mlit-brokerage"]),
      sentence("u15-s2", "媒介価額について意見を述べるときは、その{{根拠}}を示すことが重要である。", ["根拠"], ["mlit-standard-brokerage"])
    ], [SOURCES.mlitBrokerage, SOURCES.mlitStandardBrokerage]));

  U.push(unit(16, "brokerage-contract-types", "一般・専任・専属専任媒介", "三つの媒介契約の違いを比較する", "媒介契約",
    "専任媒介・専属専任媒介では、一般媒介より宅建業者側の義務が強くなる。専任系の有効期間は3か月を超えない。",
    [fact("u16-f1", "標準媒介契約約款では、専任媒介契約・専属専任媒介契約の有効期間は3か月を超えない範囲で定める。", ["mlit-standard-brokerage"])],
    [
      sentence("u16-s1", "専任媒介契約と専属専任媒介契約の有効期間は{{3か月}}を超えない。", ["3か月"], ["mlit-standard-brokerage"]),
      sentence("u16-s2", "{{一般媒介}}・{{専任媒介}}・{{専属専任媒介}}は、他業者への依頼可否や報告義務などを比較して覚える。", ["一般媒介", "専任媒介", "専属専任媒介"], ["mlit-standard-brokerage"])
    ], [SOURCES.mlitStandardBrokerage]));

  U.push(unit(17, "brokerage-reins-reporting", "指定流通機構・業務処理状況報告", "REINS登録期限と報告頻度をセットで覚える", "媒介契約",
    "専任は7日以内・2週間に1回以上、専属専任は5日以内・1週間に1回以上が基本。",
    [
      fact("u17-f1", "標準媒介契約約款では、専任媒介は指定流通機構へ7日以内に登録し、2週間に1回以上業務処理状況を報告する。", ["mlit-standard-brokerage"]),
      fact("u17-f2", "標準媒介契約約款では、専属専任媒介は指定流通機構へ5日以内に登録し、1週間に1回以上業務処理状況を報告する。", ["mlit-standard-brokerage"])
    ],
    [
      sentence("u17-s1", "{{専任媒介}}はREINSへ{{7日以内}}に登録し、{{2週間に1回以上}}報告する。", ["専任媒介", "7日以内", "2週間に1回以上"], ["mlit-standard-brokerage"]),
      sentence("u17-s2", "{{専属専任媒介}}はREINSへ{{5日以内}}に登録し、{{1週間に1回以上}}報告する。", ["専属専任媒介", "5日以内", "1週間に1回以上"], ["mlit-standard-brokerage"])
    ], [SOURCES.mlitStandardBrokerage, SOURCES.mlitBrokerage]));

  U.push(unit(18, "advertising-start-time", "広告開始時期", "工事完了前物件で広告を始められる時点を押さえる", "業務規制",
    "必要な開発許可・建築確認等を受ける前に、工事完了前物件の広告を始めてよいわけではない。",
    [fact("u18-f1", "宅建業法には、工事完了前の宅地・建物について、必要な許可等の前に広告することを制限する規定がある。", ["mlit-interpretation-2026"])],
    [
      sentence("u18-s1", "工事完了前物件では、必要な{{許可等}}を受ける前の広告は制限される。", ["許可等"], ["mlit-interpretation-2026"]),
      sentence("u18-s2", "広告開始時期は、宅建業法{{第33条}}の論点として整理する。", ["第33条"], ["mlit-interpretation-2026"])
    ], [SOURCES.mlitInterpretation2026]));

  U.push(unit(19, "contract-start-time", "契約締結時期", "広告開始時期との違いを整理する", "業務規制",
    "工事完了前物件では、必要な許可等を受ける前の契約締結も制限される。広告規制とは条文を分けて覚える。",
    [fact("u19-f1", "宅建業法には、工事完了前物件について必要な許可等の前に売買等の契約を締結することを制限する規定がある。", ["mlit-interpretation-2026"])],
    [
      sentence("u19-s1", "工事完了前物件では、必要な{{許可等}}を受ける前の契約締結も制限される。", ["許可等"], ["mlit-interpretation-2026"]),
      sentence("u19-s2", "契約締結時期の制限は宅建業法{{第36条}}の論点として整理する。", ["第36条"], ["mlit-interpretation-2026"])
    ], [SOURCES.mlitInterpretation2026]));

  U.push(unit(20, "false-advertising-prohibited-conduct", "誇大広告・禁止行為", "広告表示と取引勧誘の規制を整理する", "業務規制",
    "物件の所在・規模・形質、利用制限、環境、代金等について、著しく事実と異なる表示や実際より著しく優良・有利と誤認させる広告は禁止される。",
    [fact("u20-f1", "宅建業法には誇大広告等を禁止する規定があり、物件の所在・規模・形質、利用制限、環境、代金等に関する不当表示を規制する。", ["mlit-interpretation-2026"])],
    [
      sentence("u20-s1", "宅建業者には{{誇大広告等}}の禁止があり、著しく事実と異なる表示などは認められない。", ["誇大広告等"], ["mlit-interpretation-2026"]),
      sentence("u20-s2", "広告規制では、物件の内容だけでなく{{代金等の取引条件}}も対象になる。", ["代金等の取引条件"], ["mlit-interpretation-2026"])
    ], [SOURCES.mlitInterpretation2026]));

  window.TAKKEN_PENDING_UNITS = U;
})();
