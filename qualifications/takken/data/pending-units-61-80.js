(() => {
  "use strict";

  const SOURCES = {
    cityPlanningAct: {
      id: "egov-city-planning-act-20260401",
      label: "e-Gov法令検索『都市計画法』（2026年4月1日時点）",
      url: "https://laws.e-gov.go.jp/law/343AC0000000100?occasion_date=20260401"
    },
    buildingStandardsAct: {
      id: "egov-building-standards-act-20260401",
      label: "e-Gov法令検索『建築基準法』（2026年4月1日時点）",
      url: "https://laws.e-gov.go.jp/law/325AC0000000201?occasion_date=20260401"
    },
    nationalLandUseAct: {
      id: "egov-national-land-use-act-20260401",
      label: "e-Gov法令検索『国土利用計画法』（2026年4月1日時点）",
      url: "https://laws.e-gov.go.jp/law/349AC0000000092?occasion_date=20260401"
    },
    farmlandAct: {
      id: "egov-farmland-act-20260401",
      label: "e-Gov法令検索『農地法』（2026年4月1日時点）",
      url: "https://laws.e-gov.go.jp/law/327AC0000000229?occasion_date=20260401"
    },
    landReadjustmentAct: {
      id: "egov-land-readjustment-act-20260401",
      label: "e-Gov法令検索『土地区画整理法』（2026年4月1日時点）",
      url: "https://laws.e-gov.go.jp/law/329AC0000000119?occasion_date=20260401"
    },
    embankmentAct: {
      id: "egov-embankment-regulation-act-20260401",
      label: "e-Gov法令検索『宅地造成及び特定盛土等規制法』（2026年4月1日時点）",
      url: "https://laws.e-gov.go.jp/law/336AC0000000191?occasion_date=20260401"
    },
    localTaxAct: {
      id: "egov-local-tax-act-20260401",
      label: "e-Gov法令検索『地方税法』（2026年4月1日時点）",
      url: "https://laws.e-gov.go.jp/law/325AC0000000226?occasion_date=20260401"
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
      keyPoint,
      facts,
      sections: [{ id: "core", heading: title, lead: subtitle, sentences }],
      questions: [],
      sources
    };
  }

  const U = [];

  U.push(unit(61, "city-planning-area", "都市計画区域・準都市計画区域", "都市計画法の適用範囲となる区域区分の入口を整理する", "legal-restrictions", "都市計画法", "都市計画法等の法令上の制限",
    "都市計画区域は一体の都市として総合的に整備・開発・保全する必要がある区域、準都市計画区域は都市計画区域外でも土地利用を整序する必要がある区域として指定される。",
    [
      fact("u61-f1", "都市計画法5条は、都道府県が一体の都市として総合的に整備し、開発し、保全する必要がある区域を都市計画区域として指定できると定める。", ["egov-city-planning-act-20260401"]),
      fact("u61-f2", "都市計画法5条の2は、都市計画区域外でも土地利用の整序または環境保全のため必要な区域を準都市計画区域として指定できると定める。", ["egov-city-planning-act-20260401"])
    ],
    [
      sentence("u61-s1", "{{都市計画区域}}は、一体の都市として総合的に整備・開発・保全する必要がある区域である。", ["都市計画区域"], ["egov-city-planning-act-20260401"]),
      sentence("u61-s2", "都市計画区域外でも土地利用を整序する必要がある区域は{{準都市計画区域}}に指定されることがある。", ["準都市計画区域"], ["egov-city-planning-act-20260401"])
    ], [SOURCES.cityPlanningAct]));

  U.push(unit(62, "area-division", "市街化区域・市街化調整区域等", "区域区分の意味を市街化促進・抑制の観点で整理する", "legal-restrictions", "都市計画法", "都市計画法等の法令上の制限",
    "区域区分では、市街化区域と市街化調整区域を定める。市街化区域は既成市街地とおおむね10年以内に優先的・計画的に市街化すべき区域。",
    [
      fact("u62-f1", "都市計画法7条は、区域区分として都市計画区域を市街化区域と市街化調整区域に区分できると定める。", ["egov-city-planning-act-20260401"]),
      fact("u62-f2", "市街化区域は既に市街地を形成している区域およびおおむね10年以内に優先的かつ計画的に市街化を図るべき区域で、市街化調整区域は市街化を抑制すべき区域である。", ["egov-city-planning-act-20260401"])
    ],
    [
      sentence("u62-s1", "{{市街化区域}}は、既成市街地とおおむね10年以内に優先的・計画的に市街化を図る区域である。", ["市街化区域"], ["egov-city-planning-act-20260401"]),
      sentence("u62-s2", "{{市街化調整区域}}は、市街化を抑制すべき区域である。", ["市街化調整区域"], ["egov-city-planning-act-20260401"])
    ], [SOURCES.cityPlanningAct]));

  U.push(unit(63, "use-districts", "用途地域・地域地区", "土地利用規制の代表である用途地域を押さえる", "legal-restrictions", "都市計画法", "都市計画法等の法令上の制限",
    "用途地域は住居・商業・工業などの土地利用を誘導する地域地区の中心。都市計画で定め、建築基準法上の用途制限と連動する。",
    [
      fact("u63-f1", "都市計画法8条は、用途地域を地域地区の一つとして位置付けている。", ["egov-city-planning-act-20260401"]),
      fact("u63-f2", "用途地域が定められた区域では、建築基準法48条により用途地域ごとに建築できる建築物の用途が制限される。", ["egov-building-standards-act-20260401"])
    ],
    [
      sentence("u63-s1", "用途地域は都市計画法上の{{地域地区}}の一つである。", ["地域地区"], ["egov-city-planning-act-20260401"]),
      sentence("u63-s2", "用途地域ごとの建築物用途の制限は主に{{建築基準法}}で定められる。", ["建築基準法"], ["egov-building-standards-act-20260401"])
    ], [SOURCES.cityPlanningAct, SOURCES.buildingStandardsAct]));

  U.push(unit(64, "city-planning-decisions", "都市計画の決定・都市計画事業", "都市計画決定と事業認可の流れを区別する", "legal-restrictions", "都市計画法", "都市計画法等の法令上の制限",
    "都市計画は原則として都道府県または市町村が定め、都市計画事業は認可・承認を受けて施行される。",
    [
      fact("u64-f1", "都市計画法15条は、広域的・根幹的な都市計画を都道府県が、その他を市町村が定める基本的な役割分担を定める。", ["egov-city-planning-act-20260401"]),
      fact("u64-f2", "都市計画事業は都市計画法59条に基づき、施行者に応じて国土交通大臣または都道府県知事の認可・承認を受けて施行される。", ["egov-city-planning-act-20260401"])
    ],
    [
      sentence("u64-s1", "都市計画は内容に応じて{{都道府県}}または市町村が定める。", ["都道府県"], ["egov-city-planning-act-20260401"]),
      sentence("u64-s2", "都市計画事業は原則として所定の{{認可・承認}}を受けて施行される。", ["認可・承認"], ["egov-city-planning-act-20260401"])
    ], [SOURCES.cityPlanningAct]));

  U.push(unit(65, "development-permission-required", "開発許可が必要な場合", "開発行為と許可の原則を理解する", "legal-restrictions", "都市計画法", "都市計画法等の法令上の制限",
    "都市計画区域・準都市計画区域内で一定の開発行為をする場合は、原則として都道府県知事等の許可が必要。",
    [
      fact("u65-f1", "都市計画法29条は、都市計画区域または準都市計画区域内で開発行為をしようとする者に、原則として都道府県知事等の許可を求めている。", ["egov-city-planning-act-20260401"]),
      fact("u65-f2", "同条は公益上必要な建築物に係る開発行為など、許可不要となる例外も定めている。", ["egov-city-planning-act-20260401"])
    ],
    [
      sentence("u65-s1", "一定の{{開発行為}}には、原則として都道府県知事等の許可が必要である。", ["開発行為"], ["egov-city-planning-act-20260401"]),
      sentence("u65-s2", "開発許可には法律上の{{例外}}もあるため、用途や区域を確認する。", ["例外"], ["egov-city-planning-act-20260401"])
    ], [SOURCES.cityPlanningAct]));

  U.push(unit(66, "development-permission-procedure", "開発許可・工事完了等", "許可後の工事完了公告までの流れを押さえる", "legal-restrictions", "都市計画法", "都市計画法等の法令上の制限",
    "開発許可を受けた工事が完了したときは届出を行い、検査を経て検査済証が交付され、工事完了公告がされる。",
    [
      fact("u66-f1", "都市計画法36条は、開発許可を受けた工事が完了したとき、許可を受けた者が都道府県知事等へ届け出ることを定める。", ["egov-city-planning-act-20260401"]),
      fact("u66-f2", "都道府県知事等は工事が許可内容に適合しているか検査し、適合していれば検査済証を交付し、工事完了を公告する。", ["egov-city-planning-act-20260401"])
    ],
    [
      sentence("u66-s1", "開発工事が完了したときは、まず{{完了届}}を行う。", ["完了届"], ["egov-city-planning-act-20260401"]),
      sentence("u66-s2", "適合が確認されると{{検査済証}}が交付され、工事完了が公告される。", ["検査済証"], ["egov-city-planning-act-20260401"])
    ], [SOURCES.cityPlanningAct]));

  U.push(unit(67, "building-confirmation", "建築確認", "建築前の確認と確認済証の役割を理解する", "legal-restrictions", "建築基準法", "都市計画法等の法令上の制限",
    "一定の建築物を建築・大規模修繕等する場合、工事着手前に建築主事または指定確認検査機関の確認を受ける。",
    [
      fact("u67-f1", "建築基準法6条は、一定の建築物の建築等をしようとする建築主に、工事着手前の確認申請を求めている。", ["egov-building-standards-act-20260401"]),
      fact("u67-f2", "確認は建築主事または指定確認検査機関が行い、適合が確認されると確認済証が交付される。", ["egov-building-standards-act-20260401"])
    ],
    [
      sentence("u67-s1", "一定の建築では、工事着手前に{{建築確認}}を受ける。", ["建築確認"], ["egov-building-standards-act-20260401"]),
      sentence("u67-s2", "確認に適合すると{{確認済証}}が交付される。", ["確認済証"], ["egov-building-standards-act-20260401"])
    ], [SOURCES.buildingStandardsAct]));

  U.push(unit(68, "roads-frontage", "建築基準法上の道路・接道義務", "道路幅員と敷地の接道義務を整理する", "legal-restrictions", "建築基準法", "都市計画法等の法令上の制限",
    "都市計画区域等では、建築物の敷地は原則として建築基準法上の道路に2m以上接しなければならない。",
    [
      fact("u68-f1", "建築基準法42条は、同法上の道路を原則として幅員4m以上のもの等と定義する。", ["egov-building-standards-act-20260401"]),
      fact("u68-f2", "建築基準法43条は、都市計画区域等内の建築物の敷地について、原則として道路に2m以上接することを求める。", ["egov-building-standards-act-20260401"])
    ],
    [
      sentence("u68-s1", "建築基準法上の道路は原則として幅員{{4m以上}}である。", ["4m以上"], ["egov-building-standards-act-20260401"]),
      sentence("u68-s2", "敷地は原則として道路に{{2m以上}}接しなければならない。", ["2m以上"], ["egov-building-standards-act-20260401"])
    ], [SOURCES.buildingStandardsAct]));

  U.push(unit(69, "building-coverage-ratio", "建ぺい率", "敷地面積に対する建築面積の割合を理解する", "legal-restrictions", "建築基準法", "都市計画法等の法令上の制限",
    "建ぺい率は建築面積の敷地面積に対する割合で、用途地域等に応じて上限が定められる。",
    [
      fact("u69-f1", "建築基準法53条は、建築物の建築面積の敷地面積に対する割合について、用途地域等に応じた限度を定める。", ["egov-building-standards-act-20260401"]),
      fact("u69-f2", "一定の防火地域内の耐火建築物等や角地などには、建ぺい率の緩和・適用除外が生じる場合がある。", ["egov-building-standards-act-20260401"])
    ],
    [
      sentence("u69-s1", "建ぺい率は{{建築面積÷敷地面積}}で考える。", ["建築面積÷敷地面積"], ["egov-building-standards-act-20260401"]),
      sentence("u69-s2", "建ぺい率には防火地域や角地などによる{{緩和}}がある。", ["緩和"], ["egov-building-standards-act-20260401"])
    ], [SOURCES.buildingStandardsAct]));

  U.push(unit(70, "floor-area-ratio", "容積率", "延べ面積と敷地面積の割合、前面道路制限を押さえる", "legal-restrictions", "建築基準法", "都市計画法等の法令上の制限",
    "容積率は延べ面積の敷地面積に対する割合。都市計画で定めた指定容積率に加え、前面道路幅員による制限も確認する。",
    [
      fact("u70-f1", "建築基準法52条は、建築物の延べ面積の敷地面積に対する割合について用途地域等に応じた限度を定める。", ["egov-building-standards-act-20260401"]),
      fact("u70-f2", "前面道路の幅員が12m未満の場合、道路幅員に一定の数値を乗じて得た割合による容積率制限が適用される。", ["egov-building-standards-act-20260401"])
    ],
    [
      sentence("u70-s1", "容積率は{{延べ面積÷敷地面積}}で考える。", ["延べ面積÷敷地面積"], ["egov-building-standards-act-20260401"]),
      sentence("u70-s2", "前面道路幅員が狭い場合は{{前面道路幅員による制限}}も確認する。", ["前面道路幅員による制限"], ["egov-building-standards-act-20260401"])
    ], [SOURCES.buildingStandardsAct]));

  U.push(unit(71, "height-restrictions", "高さ制限・斜線・日影等", "建物の高さを抑える主要規制を整理する", "legal-restrictions", "建築基準法", "都市計画法等の法令上の制限",
    "建築物の高さには道路斜線・隣地斜線・北側斜線や日影規制などがあり、用途地域等によって適用関係が異なる。",
    [
      fact("u71-f1", "建築基準法56条は、道路斜線、隣地斜線、北側斜線に関する建築物の高さ制限を定める。", ["egov-building-standards-act-20260401"]),
      fact("u71-f2", "建築基準法56条の2は、条例で指定する区域内の一定の建築物について日影による高さ制限を定める。", ["egov-building-standards-act-20260401"])
    ],
    [
      sentence("u71-s1", "高さ制限には{{道路斜線}}・隣地斜線・北側斜線がある。", ["道路斜線"], ["egov-building-standards-act-20260401"]),
      sentence("u71-s2", "一定の区域では{{日影規制}}も適用される。", ["日影規制"], ["egov-building-standards-act-20260401"])
    ], [SOURCES.buildingStandardsAct]));

  U.push(unit(72, "fire-prevention-zones", "防火地域・準防火地域", "市街地の火災拡大防止規制を整理する", "legal-restrictions", "建築基準法", "都市計画法等の法令上の制限",
    "防火地域・準防火地域では、建築物の規模等に応じて耐火建築物・準耐火建築物等とする規制がある。",
    [
      fact("u72-f1", "都市計画法8条は、防火地域および準防火地域を地域地区として定めることができるとする。", ["egov-city-planning-act-20260401"]),
      fact("u72-f2", "建築基準法61条は、防火地域・準防火地域内の建築物について、規模等に応じた防火性能を求める。", ["egov-building-standards-act-20260401"])
    ],
    [
      sentence("u72-s1", "{{防火地域}}・準防火地域は都市計画上の地域地区である。", ["防火地域"], ["egov-city-planning-act-20260401"]),
      sentence("u72-s2", "区域内では建築物に所定の{{防火性能}}が求められる。", ["防火性能"], ["egov-building-standards-act-20260401"])
    ], [SOURCES.cityPlanningAct, SOURCES.buildingStandardsAct]));

  U.push(unit(73, "national-land-use-notification", "国土利用計画法の土地取引届出", "一定規模以上の土地取引に関する事後届出を押さえる", "legal-restrictions", "国土利用計画法", "都市計画法等の法令上の制限",
    "一定規模以上の土地売買等では、原則として権利取得者が契約締結後2週間以内に市町村長を経由して都道府県知事へ届け出る。",
    [
      fact("u73-f1", "国土利用計画法23条は、一定規模以上の土地売買等の契約を締結した場合、土地に関する権利の取得者に事後届出を求める。", ["egov-national-land-use-act-20260401"]),
      fact("u73-f2", "届出は原則として契約締結の日から2週間以内に、土地の所在する市町村の長を経由して都道府県知事へ行う。", ["egov-national-land-use-act-20260401"])
    ],
    [
      sentence("u73-s1", "国土利用計画法の事後届出は原則として{{権利取得者}}が行う。", ["権利取得者"], ["egov-national-land-use-act-20260401"]),
      sentence("u73-s2", "届出期限は契約締結日から原則{{2週間以内}}である。", ["2週間以内"], ["egov-national-land-use-act-20260401"])
    ], [SOURCES.nationalLandUseAct]));

  U.push(unit(74, "farmland-act-article3", "農地法3条", "農地を農地のまま権利移転する場合の許可を整理する", "legal-restrictions", "農地法", "都市計画法等の法令上の制限",
    "農地を農地として売買・賃貸するなど権利を設定・移転する場合は、原則として農業委員会の許可が必要。",
    [
      fact("u74-f1", "農地法3条は、農地または採草放牧地について所有権移転や使用収益権の設定・移転を行う場合、原則として農業委員会の許可を必要とする。", ["egov-farmland-act-20260401"]),
      fact("u74-f2", "許可を受けないでした行為は、同条の定める例外を除き効力を生じない。", ["egov-farmland-act-20260401"])
    ],
    [
      sentence("u74-s1", "農地を農地のまま権利移転する場合は原則として{{農業委員会の許可}}が必要である。", ["農業委員会の許可"], ["egov-farmland-act-20260401"]),
      sentence("u74-s2", "無許可の権利移転は原則として{{効力を生じない}}。", ["効力を生じない"], ["egov-farmland-act-20260401"])
    ], [SOURCES.farmlandAct]));

  U.push(unit(75, "farmland-act-articles4-5", "農地法4条・5条", "自己転用と権利移転を伴う転用を区別する", "legal-restrictions", "農地法", "都市計画法等の法令上の制限",
    "農地法4条は自己転用、5条は権利移転・設定を伴う転用を規制する。区域等によって許可・届出の扱いが異なる。",
    [
      fact("u75-f1", "農地法4条は、農地を農地以外のものにする自己転用について原則として都道府県知事等の許可を必要とする。", ["egov-farmland-act-20260401"]),
      fact("u75-f2", "農地法5条は、農地を転用する目的で権利を設定・移転する場合について原則として都道府県知事等の許可を必要とする。", ["egov-farmland-act-20260401"])
    ],
    [
      sentence("u75-s1", "農地法4条は{{自己転用}}を規制する。", ["自己転用"], ["egov-farmland-act-20260401"]),
      sentence("u75-s2", "農地法5条は{{権利移転・設定を伴う転用}}を規制する。", ["権利移転・設定を伴う転用"], ["egov-farmland-act-20260401"])
    ], [SOURCES.farmlandAct]));

  U.push(unit(76, "land-readjustment", "土地区画整理法", "換地処分と仮換地の基本を整理する", "legal-restrictions", "土地区画整理法", "都市計画法等の法令上の制限",
    "土地区画整理事業では、工事中に仮換地を指定し、最終的に換地処分によって従前地と換地の権利関係を整理する。",
    [
      fact("u76-f1", "土地区画整理法98条は、施行者が事業施行上必要がある場合等に仮換地を指定できると定める。", ["egov-land-readjustment-act-20260401"]),
      fact("u76-f2", "換地処分の公告があった日の翌日から、換地は従前の宅地とみなされるなど所定の法的効果が生じる。", ["egov-land-readjustment-act-20260401"])
    ],
    [
      sentence("u76-s1", "工事中に一時的な使用収益地として指定されるのが{{仮換地}}である。", ["仮換地"], ["egov-land-readjustment-act-20260401"]),
      sentence("u76-s2", "最終的な権利関係は{{換地処分}}によって整理される。", ["換地処分"], ["egov-land-readjustment-act-20260401"])
    ], [SOURCES.landReadjustmentAct]));

  U.push(unit(77, "embankment-regulation", "宅地造成及び特定盛土等規制法", "盛土等による災害防止のための許可規制を理解する", "legal-restrictions", "盛土規制法", "都市計画法等の法令上の制限",
    "宅地造成等工事規制区域・特定盛土等規制区域では、一定の盛土・切土等について都道府県知事等の許可が必要。",
    [
      fact("u77-f1", "宅地造成及び特定盛土等規制法は、盛土等に伴う災害を防止するため、都道府県知事等による規制区域の指定制度を設けている。", ["egov-embankment-regulation-act-20260401"]),
      fact("u77-f2", "規制区域内で一定規模の宅地造成、特定盛土等または土石の堆積に関する工事を行う場合、原則として都道府県知事等の許可が必要となる。", ["egov-embankment-regulation-act-20260401"])
    ],
    [
      sentence("u77-s1", "盛土規制法は{{盛土等による災害防止}}を目的とする。", ["盛土等による災害防止"], ["egov-embankment-regulation-act-20260401"]),
      sentence("u77-s2", "規制区域内の一定規模の工事には原則として{{許可}}が必要である。", ["許可"], ["egov-embankment-regulation-act-20260401"])
    ], [SOURCES.embankmentAct]));

  U.push(unit(78, "legal-restrictions-comparison", "法令上の制限・許可届出比較", "各法令の許可・届出主体と時期を横断整理する", "legal-restrictions", "横断整理", "都市計画法等の法令上の制限",
    "開発許可、国土利用計画法の事後届出、農地法許可などは、主体・時期・対象行為が異なるためセットで比較する。",
    [
      fact("u78-f1", "都市計画法29条の開発許可は、一定の開発行為をする前に許可を受ける制度である。", ["egov-city-planning-act-20260401"]),
      fact("u78-f2", "国土利用計画法23条の届出は、一定規模以上の土地売買等について契約締結後に権利取得者が行う事後届出である。", ["egov-national-land-use-act-20260401"])
    ],
    [
      sentence("u78-s1", "都市計画法29条は原則として行為前の{{開発許可}}である。", ["開発許可"], ["egov-city-planning-act-20260401"]),
      sentence("u78-s2", "国土利用計画法23条は契約後の{{事後届出}}である。", ["事後届出"], ["egov-national-land-use-act-20260401"])
    ], [SOURCES.cityPlanningAct, SOURCES.nationalLandUseAct]));

  U.push(unit(79, "real-estate-acquisition-tax", "不動産取得税", "不動産取得時に課される都道府県税の基本を押さえる", "tax-other", "地方税", "税・その他",
    "不動産取得税は、不動産の取得に対して、その不動産所在の都道府県が課する地方税。",
    [
      fact("u79-f1", "地方税法73条の2は、不動産取得税を不動産の取得に対し、その不動産所在の道府県が不動産取得者に課する税として定める。", ["egov-local-tax-act-20260401"]),
      fact("u79-f2", "不動産取得税は登記の有無や有償・無償を問わず、原則として所有権の取得という事実に着目して課税される。", ["egov-local-tax-act-20260401"])
    ],
    [
      sentence("u79-s1", "不動産取得税は不動産の取得に対する{{都道府県税}}である。", ["都道府県税"], ["egov-local-tax-act-20260401"]),
      sentence("u79-s2", "納税義務者は原則として不動産を{{取得した者}}である。", ["取得した者"], ["egov-local-tax-act-20260401"])
    ], [SOURCES.localTaxAct]));

  U.push(unit(80, "fixed-asset-tax", "固定資産税", "毎年の所有に対して課される市町村税の基本を整理する", "tax-other", "地方税", "税・その他",
    "固定資産税は土地・家屋・償却資産の所有者に対して市町村が課する税で、原則として1月1日現在の所有者が納税義務者。",
    [
      fact("u80-f1", "地方税法343条は、固定資産税を固定資産の所有者に課することを原則とする。", ["egov-local-tax-act-20260401"]),
      fact("u80-f2", "地方税法359条は、固定資産税の賦課期日を当該年度の初日の属する年の1月1日と定める。", ["egov-local-tax-act-20260401"])
    ],
    [
      sentence("u80-s1", "固定資産税は原則として固定資産の{{所有者}}に課される。", ["所有者"], ["egov-local-tax-act-20260401"]),
      sentence("u80-s2", "固定資産税の賦課期日は毎年{{1月1日}}である。", ["1月1日"], ["egov-local-tax-act-20260401"])
    ], [SOURCES.localTaxAct]));

  window.TAKKEN_PENDING_UNITS_61_80 = U;
})();