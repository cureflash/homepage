(() => {
  "use strict";
  const ntaTransfer = Object.freeze({ id: "nta-real-estate-transfer-2026", label: "国税庁『土地や建物を売ったとき』令和8年分案内", url: "https://www.nta.go.jp/publication/pamph/koho/kurashi/html/05_3.htm", sourceType: "official_guidance" });
  const shared = Object.freeze({ examYear: 2026, lawAsOf: "2026-04-01", factcheckStatus: "verified", conceptId: "takken-concept-real-estate-transfer-income", sourceUnitIds: ["income-tax-real-estate-transfer"] });
  const knowledgeItems = [
    { ...shared, knowledgeId: "takken-k-real-estate-transfer-income-separate-taxation", claim: "土地や建物を売ったときの譲渡所得に対する税金は、給与所得などの他の所得と区分する分離課税で計算する。", conditions: ["土地または建物の譲渡所得であること"], exceptions: ["確定申告の手続自体は他の所得と一緒に行う。"], importance: "A", primarySources: [ntaTransfer], sourceFactIds: ["u83-f1"] },
    { ...shared, knowledgeId: "takken-k-real-estate-transfer-income-classification-reference-date", claim: "土地・建物の譲渡所得を長期・短期に区分する所有期間は、譲渡した年の1月1日現在で判定する。", conditions: ["土地または建物を譲渡したこと"], exceptions: [], importance: "A", primarySources: [ntaTransfer], sourceFactIds: ["u83-f2"] },
    { ...shared, knowledgeId: "takken-k-real-estate-transfer-income-long-term-over-five-years", claim: "譲渡した年の1月1日現在で所有期間が5年を超える土地・建物の譲渡所得は、長期譲渡所得となる。", conditions: ["譲渡年1月1日現在の所有期間が5年を超えること"], exceptions: [], importance: "A", primarySources: [ntaTransfer], sourceFactIds: ["u83-f2"] },
    { ...shared, knowledgeId: "takken-k-real-estate-transfer-income-short-term-five-years-or-less", claim: "譲渡した年の1月1日現在で所有期間が5年以下の土地・建物の譲渡所得は、短期譲渡所得となる。", conditions: ["譲渡年1月1日現在の所有期間が5年以下であること"], exceptions: [], importance: "A", primarySources: [ntaTransfer], sourceFactIds: ["u83-f2"] }
  ];
  const allowedFactIds = new Set(["u83-f1", "u83-f2"]); const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate real-estate-transfer-income knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-real-estate-transfer-income") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute" || entry.sourceType === "official_guidance")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => allowedFactIds.has(id))) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 4) throw new Error(`Expected 4 real-estate-transfer-income knowledge items, got ${knowledgeItems.length}`);
  window.PowerTakkenKnowledgeItemsRealEstateTransferIncome = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
