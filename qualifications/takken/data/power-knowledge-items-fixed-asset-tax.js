(() => {
  "use strict";
  const source = Object.freeze({ id: "egov-local-tax-act-20260401", label: "e-Gov法令検索『地方税法』（2026年4月1日時点）", url: "https://laws.e-gov.go.jp/law/325AC0000000226?occasion_date=20260401", sourceType: "statute" });
  const osaka = Object.freeze({ id: "osaka-city-fixed-asset-tax-20260401", label: "大阪市『固定資産税』（2026年4月1日更新）", url: "https://www.city.osaka.lg.jp/zaisei/page/0000021272.html", sourceType: "official_guidance" });
  const shared = Object.freeze({ examYear: 2026, lawAsOf: "2026-04-01", factcheckStatus: "verified", conceptId: "takken-concept-fixed-asset-tax", sourceUnitIds: ["fixed-asset-tax"] });
  const knowledgeItems = [
    { ...shared, knowledgeId: "takken-k-fixed-asset-tax-municipal-owner-tax", claim: "固定資産税は、土地・家屋・償却資産の所有者に対して市町村が課する税である。", conditions: ["固定資産の所有者であること"], exceptions: ["東京都23区内には都が課する特例がある。"], importance: "A", primarySources: [source, osaka], sourceFactIds: ["u80-f1"] },
    { ...shared, knowledgeId: "takken-k-fixed-asset-tax-assessment-date-january1", claim: "固定資産税の賦課期日は毎年1月1日である。", conditions: ["当該年度の納税義務者を判定すること"], exceptions: [], importance: "A", primarySources: [source, osaka], sourceFactIds: ["u80-f2"] },
    { ...shared, knowledgeId: "takken-k-fixed-asset-tax-ledger-owner", claim: "土地・家屋は原則として登記簿または補充課税台帳に所有者として登記・登録されている者が納税義務者となる。", conditions: ["土地または家屋であること"], exceptions: ["死亡者名義等には現所有者課税の特則がある。"], importance: "A", primarySources: [source, osaka], sourceFactIds: ["u80-f1"] },
    { ...shared, knowledgeId: "takken-k-fixed-asset-tax-standard-rate", claim: "固定資産税の標準税率は1.4％である。", conditions: ["通常の固定資産税率を判定すること"], exceptions: ["条例で別の税率を定める場合がある。"], importance: "A", primarySources: [source, osaka], sourceFactIds: [] },
    { ...shared, knowledgeId: "takken-k-fixed-asset-tax-exemption-thresholds", claim: "固定資産税の免税点は土地30万円、家屋20万円、償却資産150万円である。", conditions: ["同一市町村内の資産区分ごとの課税標準額合計で判定すること"], exceptions: [], importance: "A", primarySources: [source, osaka], sourceFactIds: [] },
    { ...shared, knowledgeId: "takken-k-fixed-asset-tax-revaluation-three-years", claim: "土地・家屋の価格は原則として3年ごとの基準年度に評価替えを行う。", conditions: ["土地または家屋の評価であること"], exceptions: ["地目変更、新築・増改築等の特別事情がある場合を除く。"], importance: "B", primarySources: [source, osaka], sourceFactIds: [] },
    { ...shared, knowledgeId: "takken-k-fixed-asset-tax-small-residential-land-one-sixth", claim: "住宅1戸につき200平方メートルまでの小規模住宅用地は、固定資産税の課税標準が価格の6分の1となる。", conditions: ["小規模住宅用地であること"], exceptions: [], importance: "A", primarySources: [source, osaka], sourceFactIds: [] },
    { ...shared, knowledgeId: "takken-k-fixed-asset-tax-general-residential-land-one-third", claim: "小規模住宅用地以外の一般住宅用地は、固定資産税の課税標準が価格の3分の1となる。", conditions: ["一般住宅用地であること"], exceptions: [], importance: "A", primarySources: [source, osaka], sourceFactIds: [] },
    { ...shared, knowledgeId: "takken-k-fixed-asset-tax-new-house-reduction", claim: "一定の新築住宅は、住宅部分120平方メートルまでの固定資産税額の2分の1が、一般住宅は3年間、3階建て以上の耐火・準耐火住宅は5年間減額される。", conditions: ["法定要件を満たす新築住宅であること"], exceptions: ["認定長期優良住宅には別の期間特例がある。"], importance: "B", primarySources: [source, osaka], sourceFactIds: [] }
  ];
  const allowedFactIds = new Set(["u80-f1", "u80-f2"]); const ids = new Set();
  for (const item of knowledgeItems) { if (ids.has(item.knowledgeId)) throw new Error(`Duplicate fixed-asset-tax knowledge id: ${item.knowledgeId}`); ids.add(item.knowledgeId); if (!item.sourceFactIds.every((id) => allowedFactIds.has(id))) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`); }
  if (knowledgeItems.length !== 9) throw new Error(`Expected 9 fixed-asset-tax knowledge items, got ${knowledgeItems.length}`);
  window.PowerTakkenKnowledgeItemsFixedAssetTax = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
