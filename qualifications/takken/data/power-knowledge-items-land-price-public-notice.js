(() => {
  "use strict";
  const landPriceAct = Object.freeze({ id: "egov-land-price-public-notice-act-20260401", label: "e-Gov法令検索『地価公示法』", url: "https://laws.e-gov.go.jp/law/344AC0000000049", sourceType: "statute" });
  const mlitLandPrice = Object.freeze({ id: "mlit-land-price-system", label: "国土交通省『地価公示制度の概要』", url: "https://www.mlit.go.jp/totikensangyo/totikensangyo_fr4_000161.html", sourceType: "official_guidance" });
  const shared = Object.freeze({ examYear: 2026, lawAsOf: "2026-04-01", factcheckStatus: "verified", conceptId: "takken-concept-land-price-public-notice", sourceUnitIds: ["land-price-public-notice"] });
  const knowledgeItems = [
    { ...shared, knowledgeId: "takken-k-land-price-public-notice-annual-january-first-unit-price", claim: "地価公示で公示される価格は、毎年1月1日における標準地の単位面積当たりの正常な価格である。", conditions: ["地価公示法上の標準地であること"], exceptions: [], importance: "A", primarySources: [landPriceAct, mlitLandPrice], sourceFactIds: [] },
    { ...shared, knowledgeId: "takken-k-land-price-public-notice-normal-price-free-transaction", claim: "地価公示法上の正常な価格は、土地について自由な取引が行われるとした場合に通常成立すると認められる価格である。", conditions: ["標準地の正常な価格を判定すること"], exceptions: [], importance: "A", primarySources: [landPriceAct, mlitLandPrice], sourceFactIds: [] },
    { ...shared, knowledgeId: "takken-k-land-price-public-notice-vacant-land-assumption", claim: "標準地に建物や地上権その他土地の使用収益を制限する権利がある場合でも、正常な価格はそれらがないものとして判定する。", conditions: ["標準地に建物または土地の使用収益を制限する権利が存在すること"], exceptions: [], importance: "A", primarySources: [landPriceAct, mlitLandPrice], sourceFactIds: [] },
    { ...shared, knowledgeId: "takken-k-land-price-public-notice-committee-determines", claim: "標準地の正常な価格は土地鑑定委員会が判定する。", conditions: ["地価公示における標準地の正常な価格の判定であること"], exceptions: [], importance: "A", primarySources: [landPriceAct, mlitLandPrice], sourceFactIds: ["u84-f1"] },
    { ...shared, knowledgeId: "takken-k-land-price-public-notice-two-or-more-appraisers", claim: "土地鑑定委員会は、標準地の正常な価格を判定するため、2人以上の不動産鑑定士の鑑定評価を求める。", conditions: ["地価公示における標準地の正常な価格を判定すること"], exceptions: [], importance: "A", primarySources: [landPriceAct, mlitLandPrice], sourceFactIds: ["u84-f1"] },
    { ...shared, knowledgeId: "takken-k-land-price-public-notice-three-appraisal-methods", claim: "標準地の鑑定評価では、取引事例比較法、収益還元法および原価法の3手法により求められる価格を勘案する。", conditions: ["不動産鑑定士が地価公示の標準地を鑑定評価すること"], exceptions: [], importance: "A", primarySources: [landPriceAct, mlitLandPrice], sourceFactIds: ["u84-f2"] },
    { ...shared, knowledgeId: "takken-k-land-price-public-notice-official-gazette", claim: "土地鑑定委員会は標準地の正常な価格を判定したとき、その価格その他法定事項を速やかに官報で公示する。", conditions: ["土地鑑定委員会が標準地の正常な価格を判定したこと"], exceptions: [], importance: "B", primarySources: [landPriceAct, mlitLandPrice], sourceFactIds: [] },
    { ...shared, knowledgeId: "takken-k-land-price-public-notice-transaction-indicator", claim: "公示区域内で土地取引を行う者は、公示価格を指標として取引を行うよう努めなければならない。", conditions: ["公示区域内で土地取引を行うこと"], exceptions: [], importance: "A", primarySources: [landPriceAct, mlitLandPrice], sourceFactIds: [] },
    { ...shared, knowledgeId: "takken-k-land-price-public-notice-appraisal-benchmark", claim: "不動産鑑定士が公示区域内の土地の正常な価格を鑑定評価するときは、公示価格を規準としなければならない。", conditions: ["不動産鑑定士が公示区域内の土地について正常な価格を鑑定評価すること"], exceptions: [], importance: "A", primarySources: [landPriceAct, mlitLandPrice], sourceFactIds: [] },
    { ...shared, knowledgeId: "takken-k-land-price-public-notice-public-project-acquisition-benchmark", claim: "土地収用法その他の法律により土地を収用できる事業者が公示区域内の土地を事業用に取得する場合、その取得価格を定めるときは公示価格を規準としなければならない。", conditions: ["土地を収用できる事業を行う者であること", "公示区域内の土地を事業用に取得すること"], exceptions: [], importance: "A", primarySources: [landPriceAct, mlitLandPrice], sourceFactIds: [] }
  ];
  const allowedFactIds = new Set(["u84-f1", "u84-f2"]); const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate land-price-public-notice knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-land-price-public-notice") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute" || entry.sourceType === "official_guidance")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => allowedFactIds.has(id))) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 10) throw new Error(`Expected 10 land-price-public-notice knowledge items, got ${knowledgeItems.length}`);
  window.PowerTakkenKnowledgeItemsLandPricePublicNotice = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
