(() => {
  "use strict";

  const farmlandAct = Object.freeze({
    id: "egov-farmland-act-20260401",
    label: "e-Gov法令検索『農地法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/327AC0000000229?occasion_date=20260401",
    sourceType: "statute"
  });

  const maffAgriculturalCommittee = Object.freeze({
    id: "maff-agricultural-committee-rights-transfer",
    label: "農林水産省『農業委員会について』",
    url: "https://www.maff.go.jp/j/keiei/koukai/iinkai.html",
    sourceType: "official_guidance"
  });

  const maffArticle3CriteriaReform = Object.freeze({
    id: "maff-farmland-act-article3-minimum-area-abolition",
    label: "農林水産省『農地法改正に伴う下限面積要件の廃止について』",
    url: "https://www.maff.go.jp/j/keiei/koukai/attach/pdf/chiiki_keikaku-50.pdf",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-farmland-article3",
    sourceUnitIds: ["farmland-act-article3"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-farmland-article3-rights-transfer-scope",
      claim: "農地法3条は、農地または採草放牧地について、所有権を移転し、または地上権・永小作権・質権・使用貸借による権利・賃借権その他の使用収益権を設定・移転する場合を原則として許可の対象とする。",
      conditions: ["農地または採草放牧地についての権利設定・移転であること", "農地法3条1項本文の対象となる行為であること"],
      exceptions: ["農地法3条1項各号その他の法定の許可不要の場合は除く。", "農地を農地以外の用途へ転用する4条・5条の場面とは区別する。"],
      importance: "A",
      primarySources: [farmlandAct],
      sourceFactIds: ["u74-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-farmland-article3-agricultural-committee-permit",
      claim: "農地法3条1項の対象となる農地等の権利設定・移転は、法定の例外を除き、原則として農業委員会の許可を受けなければならない。",
      conditions: ["農地法3条1項本文の対象となる権利設定・移転であること"],
      exceptions: ["同項各号その他の法定の許可不要の場合は除く。"],
      importance: "A",
      primarySources: [farmlandAct, maffAgriculturalCommittee],
      sourceFactIds: ["u74-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-farmland-article3-unpermitted-act-invalid",
      claim: "農地法3条の許可を受ける必要がある行為について許可を受けないでした行為は、同条の法定例外を除き、その効力を生じない。",
      conditions: ["農地法3条の許可を必要とする行為であること", "必要な許可を受けていないこと"],
      exceptions: ["農地法3条が許可不要としている場合には、この無許可を理由とする無効の扱いは適用されない。"],
      importance: "A",
      primarySources: [farmlandAct],
      sourceFactIds: ["u74-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-farmland-article3-efficient-use-criterion",
      claim: "農地法3条の許可基準では、権利取得後にその者または世帯員等が所有・借受けしている農地等の全てを効率的に利用して耕作または養畜の事業を行うと認められることが重要な基準となる。",
      conditions: ["農地法3条の許否を判断する場面であること"],
      exceptions: ["法が別途認める特例的な権利取得については、その特例の要件を個別に確認する。"],
      importance: "A",
      primarySources: [farmlandAct, maffArticle3CriteriaReform],
      sourceFactIds: ["u74-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-farmland-article3-regular-engagement-criterion",
      claim: "農地法3条の原則的な許可基準には、必要な農作業に常時従事すると認められることが含まれる。",
      conditions: ["農地法3条2項の常時従事要件が適用される権利取得であること"],
      exceptions: ["法人や貸借等について法が設ける特例が適用される場合は、その特例要件を優先して判定する。"],
      importance: "B",
      primarySources: [farmlandAct, maffArticle3CriteriaReform],
      sourceFactIds: ["u74-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-farmland-article3-surrounding-use-criterion",
      claim: "農地法3条の許可基準では、権利取得後の耕作・養畜の内容等からみて、周辺の農地の農業上の効率的かつ総合的な利用の確保に支障を生ずるおそれがないことが求められる。",
      conditions: ["農地法3条の許否を判断する場面であること"],
      exceptions: ["地域計画がある場合は、その達成への支障の有無も許可判断上確認される。"],
      importance: "A",
      primarySources: [farmlandAct, maffArticle3CriteriaReform],
      sourceFactIds: ["u74-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-farmland-article3-no-minimum-area-criterion",
      claim: "農地法3条の許可基準にかつて存在した下限面積要件は2023年4月1日に廃止されており、2026年4月1日時点では50アール以上などの最低経営面積そのものを一律の許可要件とはしない。",
      conditions: ["2026年4月1日時点の農地法3条の許可基準を判定すること"],
      exceptions: ["下限面積要件が廃止されても、全部効率利用、必要な農作業への常時従事、周辺農地利用への支障がないこと等の他の許可基準は残る。"],
      importance: "A",
      primarySources: [farmlandAct, maffArticle3CriteriaReform],
      sourceFactIds: ["u74-f1"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate farmland-article3 knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-farmland-article3") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute" || entry.sourceType === "official_guidance")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u74-f1" || id === "u74-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 7) throw new Error(`Expected 7 farmland-article3 knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsFarmlandArticle3 = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
