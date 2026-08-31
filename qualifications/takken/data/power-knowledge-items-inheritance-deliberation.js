(() => {
  "use strict";

  const civilCode = Object.freeze({
    id: "egov-civil-code",
    label: "e-Gov法令検索『民法』",
    url: "https://laws.e-gov.go.jp/law/129AC0000000089?occasion_date=20260401",
    sourceType: "statute"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-inheritance-deliberation",
    sourceUnitIds: ["inheritance-acceptance-renunciation"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-inheritance-deliberation-three-month-period",
      claim: "相続人は、自己のために相続の開始があったことを知った時から3か月以内に、相続について承認または放棄を選択しなければならない。",
      conditions: ["相続人が自己のために相続の開始があったことを知ったこと"],
      exceptions: ["民法915条1項ただし書により、利害関係人または検察官の請求によって家庭裁判所が期間を伸長することができる"],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: ["u57-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-inheritance-deliberation-three-options",
      claim: "熟慮期間内に選択する相続の処理は、単純承認、限定承認または相続放棄である。",
      conditions: ["民法915条1項の熟慮期間内であること"],
      exceptions: [],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: ["u57-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-inheritance-deliberation-period-extension",
      claim: "民法915条の3か月の期間は、利害関係人または検察官の請求によって、家庭裁判所が伸長することができる。",
      conditions: ["利害関係人または検察官から請求があること"],
      exceptions: [],
      importance: "B",
      primarySources: [civilCode],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-inheritance-deliberation-estate-investigation-before-choice",
      claim: "相続人は、相続の承認または放棄をする前に、相続財産を調査することができる。",
      conditions: ["相続の承認または放棄をする前であること"],
      exceptions: [],
      importance: "B",
      primarySources: [civilCode],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-inheritance-deliberation-renunciation-family-court",
      claim: "相続の放棄をしようとする者は、その旨を家庭裁判所に申述しなければならない。",
      conditions: ["相続放棄をしようとすること"],
      exceptions: [],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: ["u57-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate inheritance-deliberation knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-inheritance-deliberation") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u57-f1" || id === "u57-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 5) throw new Error(`Expected 5 inheritance-deliberation knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsInheritanceDeliberation = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
