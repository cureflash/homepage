(() => {
  "use strict";

  const cityPlanningAct = Object.freeze({
    id: "egov-city-planning-act-20260401",
    label: "e-Gov法令検索『都市計画法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/343AC0000000100?occasion_date=20260401",
    sourceType: "statute"
  });
  const mlitDevelopmentPermission = Object.freeze({
    id: "mlit-development-permission-overview",
    label: "国土交通省『開発許可制度の概要』",
    url: "https://www.mlit.go.jp/toshi/city_plan/toshi_city_plan_fr_000046.html",
    sourceType: "official_guidance"
  });
  const nationalLandUseAct = Object.freeze({
    id: "egov-national-land-use-act-20260401",
    label: "e-Gov法令検索『国土利用計画法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/349AC0000000092?occasion_date=20260401",
    sourceType: "statute"
  });
  const mlitLandTransaction = Object.freeze({
    id: "mlit-national-land-use-transaction-regulation",
    label: "国土交通省『土地取引規制制度』",
    url: "https://www.mlit.go.jp/totikensangyo/totikensangyo_tk2_000019.html",
    sourceType: "official_guidance"
  });
  const farmlandAct = Object.freeze({
    id: "egov-farmland-act-20260401",
    label: "e-Gov法令検索『農地法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/327AC0000000229?occasion_date=20260401",
    sourceType: "statute"
  });
  const maffFarmlandTransfer = Object.freeze({
    id: "maff-farmland-transfer-overview",
    label: "農林水産省『土地管理情報収集分析調査の概要（農地等の転用）』",
    url: "https://www.maff.go.jp/j/tokei/kouhyou/toti_kanri/gaiyou/index.html",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-legal-permit-notification-comparison",
    sourceUnitIds: ["legal-restrictions-comparison"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-legal-comparison-development-prior-permit",
      claim: "都市計画法29条の開発許可は、都市計画区域または準都市計画区域内で法定の開発行為をしようとする者が、原則として行為前に都道府県知事等の許可を受ける制度である。",
      conditions: ["都市計画区域または準都市計画区域内の開発行為であること", "都市計画法29条の許可対象に該当すること"],
      exceptions: ["都市計画法29条が定める許可不要の開発行為がある。"],
      importance: "A",
      primarySources: [cityPlanningAct, mlitDevelopmentPermission],
      sourceFactIds: ["u78-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-legal-comparison-development-target-action",
      claim: "都市計画法の開発許可が対象とする開発行為は、主として建築物の建築または特定工作物の建設を目的とする土地の区画形質の変更であり、土地売買契約そのものに対する届出制度ではない。",
      conditions: ["都市計画法4条12項の開発行為に該当すること"],
      exceptions: [],
      importance: "A",
      primarySources: [cityPlanningAct, mlitDevelopmentPermission],
      sourceFactIds: ["u78-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-legal-comparison-national-land-post-notification-actor",
      claim: "国土利用計画法23条の一般的な事後届出では、法定面積以上の土地について土地売買等の契約を締結した場合、土地に関する権利を取得する者が契約締結後に届け出る。",
      conditions: ["国土利用計画法23条1項の土地売買等の契約であること", "同条の法定面積等の適用条件を満たすこと"],
      exceptions: ["規制区域・注視区域・監視区域や、同条2項等が定める適用除外では別の制度または取扱いとなる。"],
      importance: "A",
      primarySources: [nationalLandUseAct, mlitLandTransaction],
      sourceFactIds: ["u78-f2", "u73-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-legal-comparison-national-land-two-week-route",
      claim: "国土利用計画法23条の事後届出は、原則として契約締結の日から起算して2週間以内に、土地所在地の市町村長を経由して都道府県知事等へ行う。",
      conditions: ["国土利用計画法23条1項の事後届出義務が生じること"],
      exceptions: [],
      importance: "A",
      primarySources: [nationalLandUseAct, mlitLandTransaction],
      sourceFactIds: ["u78-f2", "u73-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-legal-comparison-national-land-area-thresholds",
      claim: "国土利用計画法23条の一般的な事後届出の法定面積は、市街化区域2,000平方メートル以上、市街化区域以外の都市計画区域5,000平方メートル以上、都市計画区域外10,000平方メートル以上である。",
      conditions: ["一般的な事後届出制の法定面積を判定すること"],
      exceptions: ["一団の土地として面積要件を判定する場合や、規制区域・注視区域・監視区域等では別途確認が必要である。"],
      importance: "A",
      primarySources: [nationalLandUseAct, mlitLandTransaction],
      sourceFactIds: ["u73-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-legal-comparison-farmland-article3-prior-permit",
      claim: "農地法3条は、農地または採草放牧地を農地等として利用するために所有権を移転し、または使用収益権を設定・移転する場合、原則として農業委員会の許可を必要とする。",
      conditions: ["農地または採草放牧地について権利を設定または移転すること", "転用目的ではなく農地等としての利用を前提とすること"],
      exceptions: ["農地法3条1項各号に許可不要となる場合がある。"],
      importance: "A",
      primarySources: [farmlandAct],
      sourceFactIds: ["u74-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-legal-comparison-farmland-conversion-permit-notification",
      claim: "農地法4条・5条の転用は原則として許可制である一方、市街化区域内の農地については、法定の要件を満たしてあらかじめ農業委員会へ届け出る場合、4条・5条の許可を要しない。",
      conditions: ["農地法4条または5条の転用に該当すること"],
      exceptions: ["市街化区域内農地の届出特例など、農地法が定める許可不要事由がある。"],
      importance: "A",
      primarySources: [farmlandAct, maffFarmlandTransfer],
      sourceFactIds: ["u75-f1", "u75-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-legal-comparison-permit-vs-post-notification-timing",
      claim: "法令上の制限を横断比較すると、都市計画法29条や農地法3条・4条・5条の原則的な許可は対象行為の前に行政庁の許可を要するのに対し、国土利用計画法23条の一般的制度は土地売買等の契約締結後に権利取得者が行う事後届出である。",
      conditions: ["各制度の一般原則を比較すること"],
      exceptions: ["国土利用計画法にも注視区域・監視区域の事前届出制や規制区域の許可制があり、農地法にも市街化区域内農地の届出特例等がある。"],
      importance: "A",
      primarySources: [cityPlanningAct, mlitDevelopmentPermission, nationalLandUseAct, mlitLandTransaction, farmlandAct, maffFarmlandTransfer],
      sourceFactIds: ["u78-f1", "u78-f2", "u74-f1", "u75-f1", "u75-f2"]
    }
  ];

  const allowedFactIds = new Set(["u78-f1", "u78-f2", "u73-f1", "u73-f2", "u74-f1", "u75-f1", "u75-f2"]);
  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate legal-comparison knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-legal-permit-notification-comparison") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute" || entry.sourceType === "official_guidance")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => allowedFactIds.has(id))) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 8) throw new Error(`Expected 8 legal-comparison knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsLegalPermitNotificationComparison = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
