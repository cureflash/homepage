(() => {
  "use strict";
  const ntaOverview = Object.freeze({ id: "nta-registration-tax-20260401", label: "国税庁『登録免許税のあらまし』（令和8年4月1日現在法令等）", url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/inshi/7190.htm", sourceType: "official_guidance" });
  const ntaRates = Object.freeze({ id: "nta-registration-tax-rates-20260401", label: "国税庁『登録免許税の税額表』（令和8年4月1日現在法令等）", url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/inshi/7191.htm", sourceType: "official_guidance" });
  const ntaTaxTypes = Object.freeze({ id: "nta-national-local-tax-types-20260401", label: "国税庁『国税と地方税の種類』（令和8年4月1日現在法令等）", url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/osirase/9000.htm", sourceType: "official_guidance" });
  const shared = Object.freeze({ examYear: 2026, lawAsOf: "2026-04-01", factcheckStatus: "verified", conceptId: "takken-concept-registration-license-tax", sourceUnitIds: ["registration-license-tax"] });
  const knowledgeItems = [
    { ...shared, knowledgeId: "takken-k-registration-license-tax-taxable-registration", claim: "登録免許税は、不動産等の登記・登録のほか、免許、許可、認可、認定、指定等について課税される。", conditions: ["登録免許税法の課税対象となる登記・登録等を受けること"], exceptions: ["法令上の非課税・免税措置が適用される場合を除く。"], importance: "A", primarySources: [ntaOverview], sourceFactIds: ["u81-f1"] },
    { ...shared, knowledgeId: "takken-k-registration-license-tax-national-tax", claim: "登録免許税は国税である。", conditions: ["税の国税・地方税区分を判定すること"], exceptions: [], importance: "A", primarySources: [ntaTaxTypes], sourceFactIds: ["u81-f1"] },
    { ...shared, knowledgeId: "takken-k-registration-license-tax-taxpayer-recipient", claim: "登録免許税の納税義務者は、原則として登記や登録等を受ける者である。", conditions: ["登記・登録等を受けること"], exceptions: ["個別の非課税・免税規定が適用される場合を除く。"], importance: "A", primarySources: [ntaOverview], sourceFactIds: ["u81-f2"] },
    { ...shared, knowledgeId: "takken-k-registration-license-tax-real-estate-value-base", claim: "不動産の価額を課税標準とする登記では、固定資産課税台帳に登録された価格がある場合、原則としてその価格を課税標準とする。", conditions: ["不動産の価額を課税標準とする登記であること", "固定資産課税台帳に登録価格があること"], exceptions: ["登録価格がない場合は、登記官が認定した価額による。"], importance: "A", primarySources: [ntaRates], sourceFactIds: [] },
    { ...shared, knowledgeId: "takken-k-registration-license-tax-land-sale-transfer-rate", claim: "土地の売買による所有権移転登記の本則税率は1,000分の20で、2026年4月1日時点では令和11年3月31日まで1,000分の15の軽減税率が適用される。", conditions: ["土地の売買による所有権移転登記であること", "令和11年3月31日までに登記を受けること"], exceptions: ["相続・贈与等の別の登記原因には別税率が適用される。"], importance: "A", primarySources: [ntaRates], sourceFactIds: [] },
    { ...shared, knowledgeId: "takken-k-registration-license-tax-land-inheritance-transfer-rate", claim: "土地の相続による所有権移転登記の税率は1,000分の4である。", conditions: ["土地の相続による所有権移転登記であること"], exceptions: ["一定の相続登記には期限付きの免税措置がある。"], importance: "A", primarySources: [ntaRates], sourceFactIds: [] },
    { ...shared, knowledgeId: "takken-k-registration-license-tax-building-preservation-rate", claim: "建物の所有権保存登記の本則税率は1,000分の4である。", conditions: ["建物の所有権保存登記であること"], exceptions: ["要件を満たす住宅用家屋には軽減税率がある。"], importance: "A", primarySources: [ntaRates], sourceFactIds: [] },
    { ...shared, knowledgeId: "takken-k-registration-license-tax-building-sale-transfer-rate", claim: "建物の売買または競売による所有権移転登記の本則税率は1,000分の20である。", conditions: ["建物の売買または競売による所有権移転登記であること"], exceptions: ["要件を満たす住宅用家屋には軽減税率がある。"], importance: "A", primarySources: [ntaRates], sourceFactIds: [] },
    { ...shared, knowledgeId: "takken-k-registration-license-tax-residential-preservation-reduced-rate", claim: "一定の住宅用家屋の所有権保存登記は、2026年4月1日時点では令和9年3月31日まで1,000分の1.5の軽減税率を受けられる。", conditions: ["個人が住宅用家屋を新築し、または建築後使用されたことのない住宅用家屋を取得して自己の居住の用に供すること", "床面積50平方メートル以上など法定要件を満たすこと", "新築または取得後1年以内に登記すること"], exceptions: ["市町村等の証明書を登記申請時に添付しない場合は軽減税率を受けられない。"], importance: "B", primarySources: [ntaRates], sourceFactIds: [] },
    { ...shared, knowledgeId: "takken-k-registration-license-tax-residential-transfer-reduced-rate", claim: "一定の住宅用家屋を売買または競落で取得した個人が自己居住用に供する所有権移転登記は、2026年4月1日時点では令和9年3月31日まで1,000分の3の軽減税率を受けられる。", conditions: ["個人が住宅用家屋を売買または競落により取得して自己の居住の用に供すること", "床面積50平方メートル以上など法定要件を満たすこと", "取得後1年以内に登記すること"], exceptions: ["認定長期優良住宅等には別の軽減税率が定められている。"], importance: "B", primarySources: [ntaRates], sourceFactIds: [] }
  ];
  const allowedFactIds = new Set(["u81-f1", "u81-f2"]); const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate registration-license-tax knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-registration-license-tax") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute" || entry.sourceType === "official_guidance")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => allowedFactIds.has(id))) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 10) throw new Error(`Expected 10 registration-license-tax knowledge items, got ${knowledgeItems.length}`);
  window.PowerTakkenKnowledgeItemsRegistrationLicenseTax = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
