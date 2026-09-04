(() => {
  "use strict";

  const mlitLandPrice2026 = Object.freeze({
    id: "mlit-2026-land-price",
    label: "国土交通省『令和8年地価公示 全国の地価動向』",
    url: "https://www.mlit.go.jp/totikensangyo/content/001985434.pdf",
    sourceType: "official_statistics"
  });

  const mlitHousingStarts2025 = Object.freeze({
    id: "mlit-2025-housing-starts",
    label: "国土交通省『令和7年度の新設住宅着工戸数（概要）』",
    url: "https://www.mlit.go.jp/report/press/content/kencha714.pdf",
    sourceType: "official_statistics"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-housing-market-statistics",
    sourceUnitIds: ["statistics"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-housing-market-statistics-2026-land-price-five-year-rise",
      claim: "令和8年地価公示では、全国平均の全用途平均・住宅地・商業地はいずれも5年連続で上昇した。",
      conditions: ["令和8年地価公示の全国平均を読む場合"],
      exceptions: [],
      importance: "A",
      primarySources: [mlitLandPrice2026],
      sourceFactIds: ["u89-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-housing-market-statistics-2026-land-price-change-width",
      claim: "令和8年地価公示の全国平均では、全用途平均・商業地は上昇幅が拡大し、住宅地は前年と同じ上昇幅となった。",
      conditions: ["令和8年地価公示の全国平均について前年からの上昇幅を比較する場合"],
      exceptions: [],
      importance: "B",
      primarySources: [mlitLandPrice2026],
      sourceFactIds: ["u89-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-housing-market-statistics-2025-housing-starts-total",
      claim: "令和7年度の新設住宅着工戸数は711,171戸で、前年度比12.9%減となり、前年度の増加から再び減少した。",
      conditions: ["令和7年度の新設住宅着工戸数の総戸数を読む場合"],
      exceptions: [],
      importance: "A",
      primarySources: [mlitHousingStarts2025],
      sourceFactIds: ["u89-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-housing-market-statistics-2025-housing-starts-owner-occupied",
      claim: "令和7年度の持家の新設住宅着工戸数は195,111戸で、前年度比12.6%減となり、前年度の増加から再び減少した。",
      conditions: ["令和7年度の利用関係別住宅着工で持家を読む場合"],
      exceptions: [],
      importance: "B",
      primarySources: [mlitHousingStarts2025],
      sourceFactIds: ["u89-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-housing-market-statistics-2025-housing-starts-rental",
      claim: "令和7年度の貸家の新設住宅着工戸数は308,906戸で、前年度比13.5%減となり、前年度の増加から再び減少した。",
      conditions: ["令和7年度の利用関係別住宅着工で貸家を読む場合"],
      exceptions: [],
      importance: "B",
      primarySources: [mlitHousingStarts2025],
      sourceFactIds: ["u89-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-housing-market-statistics-2025-housing-starts-for-sale",
      claim: "令和7年度の分譲住宅の新設住宅着工戸数は200,563戸で、前年度比12.6%減となり、3年連続の減少となった。",
      conditions: ["令和7年度の利用関係別住宅着工で分譲住宅を読む場合"],
      exceptions: [],
      importance: "B",
      primarySources: [mlitHousingStarts2025],
      sourceFactIds: ["u89-f2"]
    }
  ];

  const allowedFactIds = new Set(["u89-f1", "u89-f2"]);
  const ids = new Set();
  const allowedImportance = new Set(["A", "B", "C"]);
  const allowedSourceTypes = new Set(["official_statistics"]);
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate Power Takken knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (!item.knowledgeId.startsWith("takken-k-")) throw new Error(`Invalid Power Takken knowledge id: ${item.knowledgeId}`);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") {
      throw new Error(`Invalid Power Takken knowledge verification state: ${item.knowledgeId}`);
    }
    if (item.conceptId !== "takken-concept-housing-market-statistics") {
      throw new Error(`Unexpected Power Takken concept id: ${item.knowledgeId}`);
    }
    if (!allowedImportance.has(item.importance)) throw new Error(`Invalid Power Takken importance: ${item.knowledgeId}`);
    if (!Array.isArray(item.primarySources) || item.primarySources.length === 0) throw new Error(`Missing primary source: ${item.knowledgeId}`);
    for (const source of item.primarySources) {
      if (!source || !allowedSourceTypes.has(source.sourceType)) throw new Error(`Non-primary Power Takken source: ${item.knowledgeId}`);
    }
    if (!Array.isArray(item.sourceFactIds) || item.sourceFactIds.length === 0) throw new Error(`Missing source fact: ${item.knowledgeId}`);
    for (const factId of item.sourceFactIds) {
      if (!allowedFactIds.has(factId)) throw new Error(`Unexpected source fact ${factId}: ${item.knowledgeId}`);
    }
  }
  if (knowledgeItems.length !== 6) throw new Error(`Unexpected housing-market-statistics knowledge count: ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsHousingMarketStatistics = Object.freeze(
    knowledgeItems.map((item) => Object.freeze({ ...item }))
  );
})();
