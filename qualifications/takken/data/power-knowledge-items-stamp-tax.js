(() => {
  "use strict";
  const ntaStamp = Object.freeze({ id: "nta-stamp-tax-20260401", label: "国税庁『不動産の譲渡・土地の賃貸借・消費貸借・運送等に関する契約書』（令和8年4月1日現在法令等）", url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/inshi/7101.htm", sourceType: "official_guidance" });
  const ntaRelief = Object.freeze({ id: "nta-stamp-tax-relief-20260401", label: "国税庁『不動産の譲渡、建設工事の請負に関する契約書に係る印紙税の軽減措置』（令和8年4月1日現在法令等）", url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/inshi/7108.htm", sourceType: "official_guidance" });
  const shared = Object.freeze({ examYear: 2026, lawAsOf: "2026-04-01", factcheckStatus: "verified", conceptId: "takken-concept-stamp-tax", sourceUnitIds: ["stamp-tax"] });
  const knowledgeItems = [
    { ...shared, knowledgeId: "takken-k-stamp-tax-real-estate-transfer-first-document", claim: "不動産売買契約書など不動産の譲渡に関する契約書は、印紙税額一覧表の第1号文書に該当する。", conditions: ["不動産の譲渡に関する契約書を作成すること"], exceptions: ["課税物件表上の非課税物件に該当する場合を除く。"], importance: "A", primarySources: [ntaStamp], sourceFactIds: ["u82-f1"] },
    { ...shared, knowledgeId: "takken-k-stamp-tax-real-estate-transfer-examples", claim: "不動産の譲渡に関する第1号文書には、不動産売買契約書、土地建物売買契約書、不動産交換契約書、不動産売渡証書などが含まれる。", conditions: ["文書の記載内容が不動産の譲渡に関する契約を証すること"], exceptions: [], importance: "B", primarySources: [ntaStamp], sourceFactIds: ["u82-f1"] },
    { ...shared, knowledgeId: "takken-k-stamp-tax-amount-determines-tax", claim: "第1号文書の印紙税額は、原則として契約書に記載された契約金額に応じて定まる。", conditions: ["契約金額の記載がある第1号文書であること"], exceptions: ["契約金額の記載がない場合は別に定額が定められる。", "軽減措置が適用される不動産譲渡契約書では軽減後税額による。"], importance: "A", primarySources: [ntaStamp, ntaRelief], sourceFactIds: [] },
    { ...shared, knowledgeId: "takken-k-stamp-tax-under-ten-thousand-nontaxable", claim: "第1号文書は、記載された契約金額が1万円未満であれば非課税である。", conditions: ["第1号文書で契約金額の記載があること", "記載された契約金額が1万円未満であること"], exceptions: [], importance: "A", primarySources: [ntaStamp], sourceFactIds: [] },
    { ...shared, knowledgeId: "takken-k-stamp-tax-no-amount-two-hundred", claim: "第1号文書で契約金額の記載がないものの印紙税額は200円である。", conditions: ["第1号文書に該当すること", "契約金額の記載がないこと"], exceptions: ["法令上の非課税措置が適用される場合を除く。"], importance: "B", primarySources: [ntaStamp], sourceFactIds: [] },
    { ...shared, knowledgeId: "takken-k-stamp-tax-relief-period", claim: "2026年4月1日時点では、不動産の譲渡に関する一定の契約書について、平成26年4月1日から令和9年3月31日までに作成されるものに印紙税の軽減措置がある。", conditions: ["平成26年4月1日から令和9年3月31日までの間に作成されること", "不動産の譲渡に関する契約書であること"], exceptions: ["記載された契約金額が10万円以下の不動産譲渡契約書は軽減措置の対象外。"], importance: "A", primarySources: [ntaRelief], sourceFactIds: ["u82-f2"] },
    { ...shared, knowledgeId: "takken-k-stamp-tax-relief-threshold", claim: "不動産譲渡契約書の軽減措置は、契約書に記載された契約金額が10万円を超えるものを対象とする。", conditions: ["不動産の譲渡に関する第1号の1文書であること", "契約書に記載された契約金額が10万円を超えること", "軽減措置の適用期間内に作成されること"], exceptions: ["10万円以下は軽減対象外で、1万円未満は非課税。"], importance: "A", primarySources: [ntaRelief], sourceFactIds: ["u82-f2"] },
    { ...shared, knowledgeId: "takken-k-stamp-tax-relief-rate-schedule", claim: "2026年4月1日時点の不動産譲渡契約書の軽減後税額は、記載金額が10万円超50万円以下200円、50万円超100万円以下500円、100万円超500万円以下1,000円、500万円超1,000万円以下5,000円、1,000万円超5,000万円以下1万円、5,000万円超1億円以下3万円、1億円超5億円以下6万円、5億円超10億円以下16万円、10億円超50億円以下32万円、50億円超48万円である。", conditions: ["不動産の譲渡に関する第1号の1文書であること", "軽減措置の適用期間内に作成されること", "契約書に記載された契約金額が10万円を超えること"], exceptions: ["記載金額10万円以下は軽減対象外。", "記載金額1万円未満は非課税。"], importance: "B", primarySources: [ntaRelief], sourceFactIds: [] }
  ];
  const allowedFactIds = new Set(["u82-f1", "u82-f2"]); const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate stamp-tax knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-stamp-tax") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute" || entry.sourceType === "official_guidance")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => allowedFactIds.has(id))) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 8) throw new Error(`Expected 8 stamp-tax knowledge items, got ${knowledgeItems.length}`);
  window.PowerTakkenKnowledgeItemsStampTax = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
