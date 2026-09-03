(() => {
  "use strict";

  const localTaxAct = Object.freeze({
    id: "egov-local-tax-act-20260401",
    label: "e-Gov法令検索『地方税法』（2026年4月1日時点）",
    url: "https://laws.e-gov.go.jp/law/325AC0000000226?occasion_date=20260401",
    sourceType: "statute"
  });
  const osakaAcquisitionTax = Object.freeze({
    id: "osaka-pref-real-estate-acquisition-tax-20260409",
    label: "大阪府『不動産取得税』（2026年4月9日更新）",
    url: "https://www.pref.osaka.lg.jp/o050040/zei/alacarte/fudousan.html",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-real-estate-acquisition-tax",
    sourceUnitIds: ["real-estate-acquisition-tax"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-acquisition-tax-prefectural-taxpayer",
      claim: "不動産取得税は、不動産の取得に対し、その不動産が所在する都道府県が不動産取得者に課する都道府県税である。",
      conditions: ["土地または家屋の取得があること"],
      exceptions: ["地方税法上の非課税取得等は課税されない。"],
      importance: "A",
      primarySources: [localTaxAct, osakaAcquisitionTax],
      sourceFactIds: ["u79-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-acquisition-tax-acquisition-regardless-registration-payment",
      claim: "不動産取得税の対象となる取得は所有権取得の事実に着目し、売買・交換・贈与・新築・増築・改築等について、登記の有無や有償・無償を問わない。",
      conditions: ["実質的に不動産の所有権を取得していること"],
      exceptions: ["非課税取得に該当する場合を除く。"],
      importance: "A",
      primarySources: [localTaxAct, osakaAcquisitionTax],
      sourceFactIds: ["u79-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-acquisition-tax-inheritance-nontaxable",
      claim: "相続による不動産の取得には不動産取得税は課されない。",
      conditions: ["相続により不動産を取得すること"],
      exceptions: [],
      importance: "A",
      primarySources: [localTaxAct, osakaAcquisitionTax],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-acquisition-tax-base-registered-value",
      claim: "不動産取得税の課税標準となる価格は購入価格や建築工事費ではなく、原則として取得時の固定資産課税台帳登録価格である。新築家屋など登録価格がない場合は都道府県が取得時の価格を決定する。",
      conditions: ["通常の土地・家屋取得の課税標準を判定すること"],
      exceptions: ["新築家屋など登録価格がない場合や、登録価格により難い特別の事情がある場合は都道府県が価格を決定する。"],
      importance: "A",
      primarySources: [localTaxAct, osakaAcquisitionTax],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-acquisition-tax-land-half-tax-base",
      claim: "2026年4月1日時点では、宅地または宅地比準土地を2027年3月31日までに取得した場合、固定資産課税台帳登録価格の2分の1を課税標準とする特例が適用される。",
      conditions: ["宅地または宅地比準土地の取得であること", "取得日が2027年3月31日までであること"],
      exceptions: [],
      importance: "A",
      primarySources: [localTaxAct, osakaAcquisitionTax],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-acquisition-tax-rates-20260401",
      claim: "2026年4月1日時点では、不動産取得税の標準税率は4％だが、2027年3月31日までに取得した土地と住宅については特例税率3％が適用され、住宅以外の家屋は4％である。",
      conditions: ["取得日が2027年3月31日までであること"],
      exceptions: ["別の個別特例が適用される場合はその規定を確認する。"],
      importance: "A",
      primarySources: [localTaxAct, osakaAcquisitionTax],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-acquisition-tax-exemption-thresholds-20260401",
      claim: "2026年4月1日以後の不動産取得税の免税点は、土地16万円未満、家屋の新築・増築・改築は1戸66万円未満、売買・交換・贈与等による家屋取得は1戸34万円未満である。",
      conditions: ["取得日が2026年4月1日以後であること", "課税標準となるべき額で免税点を判定すること"],
      exceptions: [],
      importance: "B",
      primarySources: [localTaxAct, osakaAcquisitionTax],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-acquisition-tax-new-house-deduction",
      claim: "2026年4月1日以後に取得する一定の新築住宅は、床面積40平方メートル以上240平方メートル以下などの要件を満たすと、住宅価格から1戸につき最高1,200万円を控除して不動産取得税を計算する。",
      conditions: ["特例適用住宅を建築または新築未使用で取得すること", "2026年4月1日以後は床面積40平方メートル以上240平方メートル以下であること"],
      exceptions: ["認定長期優良住宅には別の上乗せ特例がある。", "共同住宅等では独立した区画ごとに判定・控除する。"],
      importance: "A",
      primarySources: [localTaxAct, osakaAcquisitionTax],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-acquisition-tax-long-life-house-deduction",
      claim: "一定期間内に新築または新築未使用で取得した認定長期優良住宅については、不動産取得税の住宅価格から1戸につき最高1,300万円を控除する特例がある。",
      conditions: ["認定長期優良住宅であること", "法定の適用期間・住宅要件を満たすこと"],
      exceptions: [],
      importance: "B",
      primarySources: [localTaxAct, osakaAcquisitionTax],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-real-estate-acquisition-tax-residential-land-reduction",
      claim: "一定の住宅用土地の取得では、土地の不動産取得税額から、4万5,000円または『土地1平方メートル当たりの特例適用後価格×住宅床面積の2倍（1戸200平方メートル限度）×3％』のいずれか高い額を減額する。",
      conditions: ["住宅用土地に係る法定の取得時期・住宅要件を満たすこと"],
      exceptions: ["新築住宅用土地と既存住宅用土地では取得前後の期限等の要件が異なる。"],
      importance: "A",
      primarySources: [localTaxAct, osakaAcquisitionTax],
      sourceFactIds: []
    }
  ];

  const allowedFactIds = new Set(["u79-f1", "u79-f2"]);
  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate real-estate-acquisition-tax knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-real-estate-acquisition-tax") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute" || entry.sourceType === "official_guidance")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => allowedFactIds.has(id))) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 10) throw new Error(`Expected 10 real-estate-acquisition-tax knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsRealEstateAcquisitionTax = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
