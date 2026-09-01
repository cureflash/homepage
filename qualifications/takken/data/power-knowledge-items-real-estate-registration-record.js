(() => {
  "use strict";

  const registrationAct = Object.freeze({
    id: "egov-real-estate-registration-act",
    label: "e-Gov法令検索『不動産登記法』",
    url: "https://laws.e-gov.go.jp/law/416AC0000000123/20260401_503AC0000000024",
    sourceType: "statute"
  });

  const registrationRules = Object.freeze({
    id: "egov-real-estate-registration-rules",
    label: "e-Gov法令検索『不動産登記規則』",
    url: "https://laws.e-gov.go.jp/law/417M60000010018?occasion_date=20260401",
    sourceType: "statute"
  });

  const shared = Object.freeze({ examYear: 2026, lawAsOf: "2026-04-01", factcheckStatus: "verified", conceptId: "takken-concept-real-estate-registration-record", sourceUnitIds: ["real-estate-registration"] });

  const knowledgeItems = [
    { ...shared, knowledgeId: "takken-k-real-estate-registration-record-per-property", claim: "登記記録は、表示に関する登記または権利に関する登記について、一筆の土地または一個の建物ごとに作成される電磁的記録である。", conditions: ["不動産登記法上の登記記録であること"], exceptions: [], importance: "A", primarySources: [registrationAct], sourceFactIds: ["u60-f1"] },
    { ...shared, knowledgeId: "takken-k-real-estate-registration-record-title-rights-division", claim: "登記記録は、表題部と権利部に区分して作成する。", conditions: ["登記記録を作成する場合"], exceptions: [], importance: "A", primarySources: [registrationAct], sourceFactIds: ["u60-f1"] },
    { ...shared, knowledgeId: "takken-k-real-estate-registration-record-title-section", claim: "表題部は、登記記録のうち、表示に関する登記が記録される部分である。", conditions: ["登記記録の表題部であること"], exceptions: [], importance: "A", primarySources: [registrationAct], sourceFactIds: ["u60-f1"] },
    { ...shared, knowledgeId: "takken-k-real-estate-registration-record-rights-section", claim: "権利部は、登記記録のうち、権利に関する登記が記録される部分である。", conditions: ["登記記録の権利部であること"], exceptions: [], importance: "A", primarySources: [registrationAct], sourceFactIds: ["u60-f1"] },
    { ...shared, knowledgeId: "takken-k-real-estate-registration-record-section-a-ownership", claim: "権利部の甲区には、所有権に関する登記の登記事項を記録する。", conditions: ["権利部の甲区であること"], exceptions: [], importance: "A", primarySources: [registrationRules], sourceFactIds: ["u60-f2"] },
    { ...shared, knowledgeId: "takken-k-real-estate-registration-record-section-b-nonownership", claim: "権利部の乙区には、抵当権など所有権以外の権利に関する登記の登記事項を記録する。", conditions: ["権利部の乙区であること"], exceptions: [], importance: "A", primarySources: [registrationRules], sourceFactIds: ["u60-f2"] }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate real-estate-registration-record knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-real-estate-registration-record") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u60-f1" || id === "u60-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 6) throw new Error(`Expected 6 real-estate-registration-record knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsRealEstateRegistrationRecord = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
