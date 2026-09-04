(() => {
  "use strict";

  const flat35Overview = Object.freeze({
    id: "jhf-flat35-overview",
    label: "住宅金融支援機構『【フラット３５】』",
    url: "https://www.flat35.com/loan/lineup/flat35/index.html",
    sourceType: "official_guidance"
  });

  const jhfPurchaseSecuritization = Object.freeze({
    id: "jhf-securitization-purchase-overview",
    label: "住宅金融支援機構『証券化支援業務（買取型）の概要』",
    url: "https://www.jhf.go.jp/about/financial/join/outline_kaitori.html",
    sourceType: "official_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-flat35-securitization",
    sourceUnitIds: ["housing-finance-agency"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-flat35-securitization-private-jhf-partnership",
      claim: "【フラット３５】は、民間金融機関と住宅金融支援機構が提携して提供する住宅ローンである。",
      conditions: ["【フラット３５】の提供主体・仕組みを整理する場合"],
      exceptions: [],
      importance: "A",
      primarySources: [flat35Overview],
      sourceFactIds: ["u86-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-flat35-securitization-all-period-fixed",
      claim: "【フラット３５】は、借入時に返済終了までの金利が確定する全期間固定金利の住宅ローンである。",
      conditions: ["【フラット３５】の基本的な金利方式を問う場合"],
      exceptions: ["一定期間の金利引下げメニューがあっても、基本の金利方式は全期間固定金利である。"],
      importance: "A",
      primarySources: [flat35Overview],
      sourceFactIds: ["u86-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-flat35-securitization-private-financial-institution-originates",
      claim: "証券化支援事業（買取型）では、まず民間金融機関が買取基準を満たす長期・固定金利の住宅ローンを顧客に実行する。",
      conditions: ["証券化支援事業（買取型）の住宅ローン実行段階"],
      exceptions: [],
      importance: "A",
      primarySources: [jhfPurchaseSecuritization],
      sourceFactIds: ["u86-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-flat35-securitization-jhf-purchases-receivable",
      claim: "証券化支援事業（買取型）では、民間金融機関が住宅ローン実行後、その住宅ローン債権を住宅金融支援機構に売却し、機構が買い取る。",
      conditions: ["証券化支援事業（買取型）の債権買取段階"],
      exceptions: [],
      importance: "A",
      primarySources: [jhfPurchaseSecuritization],
      sourceFactIds: ["u86-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-flat35-securitization-trust-collateral",
      claim: "住宅金融支援機構は、買い取った住宅ローン債権を信託銀行等に担保目的で信託する。",
      conditions: ["証券化支援事業（買取型）で買い取った債権を証券化する場合"],
      exceptions: [],
      importance: "B",
      primarySources: [jhfPurchaseSecuritization],
      sourceFactIds: ["u86-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-flat35-securitization-mbs-issuance",
      claim: "住宅金融支援機構は、信託した住宅ローン債権を担保として、資産担保証券（MBS）である住宅金融支援機構債券を発行する。",
      conditions: ["証券化支援事業（買取型）のMBS発行段階"],
      exceptions: [],
      importance: "A",
      primarySources: [jhfPurchaseSecuritization],
      sourceFactIds: ["u86-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-flat35-securitization-mbs-proceeds-purchase-payment",
      claim: "住宅金融支援機構は、投資家から受け取ったMBSの発行代金を用いて、民間金融機関に住宅ローン債権の買取代金を支払う。",
      conditions: ["証券化支援事業（買取型）の資金調達と債権買取代金の流れを整理する場合"],
      exceptions: [],
      importance: "A",
      primarySources: [jhfPurchaseSecuritization],
      sourceFactIds: ["u86-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-flat35-securitization-servicing-by-originator",
      claim: "住宅ローン債権を機構へ売却した金融機関は、その債権の管理・回収業務の受託者（サービサー）として債務者から元利金の返済を受ける。",
      conditions: ["証券化支援事業（買取型）で債権売却後の管理・回収を整理する場合"],
      exceptions: [],
      importance: "B",
      primarySources: [jhfPurchaseSecuritization],
      sourceFactIds: ["u86-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-flat35-securitization-repayments-remitted-to-jhf",
      claim: "サービサーである金融機関は、債務者から受け取った返済金を住宅金融支援機構へ引き渡す。",
      conditions: ["証券化支援事業（買取型）の返済金の流れを整理する場合"],
      exceptions: [],
      importance: "B",
      primarySources: [jhfPurchaseSecuritization],
      sourceFactIds: ["u86-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-flat35-securitization-investor-principal-interest",
      claim: "住宅金融支援機構は、債務者からの返済金を基に、発行したMBSについて投資家へ元利払いを行う。",
      conditions: ["証券化支援事業（買取型）の投資家への元利払いを整理する場合"],
      exceptions: [],
      importance: "B",
      primarySources: [jhfPurchaseSecuritization],
      sourceFactIds: ["u86-f2"]
    }
  ];

  const allowedFactIds = new Set(["u86-f1", "u86-f2"]);
  const ids = new Set();
  const allowedImportance = new Set(["A", "B", "C"]);
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate Power Takken knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (!item.knowledgeId.startsWith("takken-k-")) throw new Error(`Invalid Power Takken knowledge id: ${item.knowledgeId}`);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") {
      throw new Error(`Invalid Power Takken knowledge verification state: ${item.knowledgeId}`);
    }
    if (item.conceptId !== "takken-concept-flat35-securitization") {
      throw new Error(`Unexpected Power Takken concept id: ${item.knowledgeId}`);
    }
    if (!allowedImportance.has(item.importance)) throw new Error(`Invalid Power Takken importance: ${item.knowledgeId}`);
    if (!Array.isArray(item.primarySources) || item.primarySources.length === 0) throw new Error(`Missing primary source: ${item.knowledgeId}`);
    for (const source of item.primarySources) {
      if (!source || source.sourceType !== "official_guidance") throw new Error(`Non-primary Power Takken source: ${item.knowledgeId}`);
    }
    if (!Array.isArray(item.sourceFactIds) || item.sourceFactIds.length === 0) throw new Error(`Missing source fact: ${item.knowledgeId}`);
    for (const factId of item.sourceFactIds) {
      if (!allowedFactIds.has(factId)) throw new Error(`Unexpected source fact ${factId}: ${item.knowledgeId}`);
    }
  }
  if (knowledgeItems.length !== 10) throw new Error(`Unexpected flat35-securitization knowledge count: ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsFlat35Securitization = Object.freeze(
    knowledgeItems.map((item) => Object.freeze({ ...item }))
  );
})();
