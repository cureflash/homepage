(() => {
  "use strict";

  const farmlandAct = Object.freeze({
    id: "egov-farmland-act-20260401",
    label: "e-Gov法令検索『農地法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/327AC0000000229?occasion_date=20260401",
    sourceType: "statute"
  });

  const maffConversionOverview = Object.freeze({
    id: "maff-farmland-conversion-permit-system",
    label: "農林水産省『農業振興地域制度及び農地転用許可制度』",
    url: "https://www.maff.go.jp/j/nousin/noukei/totiriyo/index.html",
    sourceType: "official_guidance"
  });

  const maffConversionSurvey = Object.freeze({
    id: "maff-farmland-rights-transfer-survey-conversion",
    label: "農林水産省『農地の権利移動・借賃等調査結果の概要』",
    url: "https://www.maff.go.jp/j/tokei/kouhyou/nouti_kenri/gaiyo/",
    sourceType: "official_guidance"
  });

  const maffRegionalConversion = Object.freeze({
    id: "maff-regional-farmland-conversion-permit",
    label: "農林水産省関東農政局『農地転用許可制度について』",
    url: "https://www.maff.go.jp/kanto/nouson/shinkou/nouchitenyou/index.html",
    sourceType: "official_guidance"
  });

  const maffViolationGuidance = Object.freeze({
    id: "maff-illegal-farmland-conversion-guidance",
    label: "農林水産省『農地の違反転用発生防止・早期発見・早期是正へ向けた取組み』",
    url: "https://www.maff.go.jp/j/nousin/noukei/totiriyo/ihan_tenyo.html",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-farmland-article5",
    sourceUnitIds: ["farmland-act-articles4-5"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-farmland-article5-rights-transfer-conversion-scope",
      claim: "農地法5条は、農地を農地以外のものにするため、または採草放牧地を農地以外の採草放牧地以外のものにするために、所有権移転や賃借権等の権利設定・移転をする場合を規制する。",
      conditions: ["転用目的で権利を設定または移転すること", "対象が農地または採草放牧地であること"],
      exceptions: ["権利設定・移転を伴わず農地を自己転用する場合は農地法4条の対象となる。", "採草放牧地を農地にするための権利設定・移転は5条の転用対象から除かれる。"],
      importance: "A",
      primarySources: [farmlandAct, maffConversionSurvey],
      sourceFactIds: ["u75-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-farmland-article5-includes-grazing-land",
      claim: "農地法5条は農地だけでなく採草放牧地も対象に含み、4条が農地のみを対象とする点と異なる。",
      conditions: ["採草放牧地を採草放牧地以外のものへ転用する目的で権利設定・移転をすること"],
      exceptions: ["採草放牧地を農地にする場合は5条の転用対象から除かれる。"],
      importance: "B",
      primarySources: [farmlandAct, maffConversionSurvey],
      sourceFactIds: ["u75-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-farmland-article5-permit-principle",
      claim: "農地法5条の転用目的の権利設定・移転は、法定の例外を除き、当事者が都道府県知事または農林水産大臣が指定する市町村の長の許可を受けなければならない。",
      conditions: ["農地法5条1項本文の対象となる権利設定・移転であること", "市街化区域内の事前届出特例その他の法定例外に該当しないこと"],
      exceptions: ["農地法5条1項各号その他の法定の許可不要の場合は除く。", "市街化区域内では所定の事前届出により許可不要となる場合がある。"],
      importance: "A",
      primarySources: [farmlandAct, maffConversionOverview, maffRegionalConversion],
      sourceFactIds: ["u75-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-farmland-article5-permit-authority-no-area-threshold",
      claim: "2016年4月1日以後の農地転用許可は、転用面積にかかわらず、都道府県知事または農林水産大臣が指定する市町村の長が行う。",
      conditions: ["2026年4月1日時点の農地法5条許可権限を判定すること"],
      exceptions: ["市街化区域内の事前届出など、そもそも許可を要しない法定の場面は別に判定する。"],
      importance: "A",
      primarySources: [farmlandAct, maffRegionalConversion],
      sourceFactIds: ["u75-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-farmland-article5-urbanization-area-notification",
      claim: "市街化区域内にある農地または採草放牧地について、転用目的で権利を取得する場合は、所定の手続によりあらかじめ農業委員会へ届け出れば、農地法5条の許可を要しない。",
      conditions: ["対象土地が市街化区域内にあること", "農地法5条の転用目的の権利設定・移転であること", "権利取得前に所定の届出を行うこと"],
      exceptions: ["市街化区域外では、この届出特例だけを理由に許可不要とはならない。"],
      importance: "A",
      primarySources: [farmlandAct, maffConversionSurvey, maffViolationGuidance],
      sourceFactIds: ["u75-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-farmland-article5-vs-article4-rights-transfer",
      claim: "農地転用で権利設定・移転を伴わない自己転用は4条、転用目的で所有権移転や賃借権等の権利設定・移転を伴う場合は5条として区別する。",
      conditions: ["農地を農地以外のものにする転用であること"],
      exceptions: ["具体的な許可・届出要否は区域や法定例外を別途確認する。", "5条は一定の採草放牧地も対象とする。"],
      importance: "A",
      primarySources: [farmlandAct, maffConversionSurvey],
      sourceFactIds: ["u75-f1", "u75-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate farmland-article5 knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-farmland-article5") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute" || entry.sourceType === "official_guidance")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u75-f1" || id === "u75-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 6) throw new Error(`Expected 6 farmland-article5 knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsFarmlandArticle5 = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
