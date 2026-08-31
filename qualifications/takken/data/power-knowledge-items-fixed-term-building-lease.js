(() => {
  "use strict";

  const landBuildingLeaseAct = Object.freeze({
    id: "egov-land-building-lease-act",
    label: "e-Gov法令検索『借地借家法』",
    url: "https://laws.e-gov.go.jp/law/403AC0000000090?occasion_date=20260401",
    sourceType: "statute"
  });

  const supremeCourtSeparateExplanation = Object.freeze({
    id: "courts-supreme-20120913-fixed-term-building-lease",
    label: "最高裁判所平成24年9月13日判決（平成22年（受）第1209号）",
    url: "https://www.courts.go.jp/app/files/hanrei_jp/539/082539_hanrei.pdf",
    sourceType: "judgment"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-fixed-term-building-lease",
    sourceUnitIds: ["fixed-term-building-lease"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-fixed-term-building-lease-no-renewal-expiry",
      claim: "期間の定めがある建物賃貸借では、所定の方式で契約することにより、契約の更新がなく期間満了で終了する旨を定めることができる。",
      conditions: ["期間の定めがある建物賃貸借であること", "借地借家法38条所定の契約方式を満たすこと"],
      exceptions: [],
      importance: "A",
      primarySources: [landBuildingLeaseAct],
      sourceFactIds: ["u55-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-fixed-term-building-lease-contract-form",
      claim: "定期建物賃貸借は、公正証書による等の書面または所定の電磁的記録によって契約する必要がある。",
      conditions: ["借地借家法38条の定期建物賃貸借を設定する場合"],
      exceptions: [],
      importance: "A",
      primarySources: [landBuildingLeaseAct],
      sourceFactIds: ["u55-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-fixed-term-building-lease-prior-explanation",
      claim: "賃貸人は、定期建物賃貸借の契約締結前に、契約の更新がなく期間満了で終了することを賃借人へ説明しなければならない。",
      conditions: ["定期建物賃貸借を締結しようとする場合", "説明主体が建物の賃貸人であること", "契約締結前であること"],
      exceptions: [],
      importance: "A",
      primarySources: [landBuildingLeaseAct],
      sourceFactIds: ["u55-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-fixed-term-building-lease-prior-explanation-form",
      claim: "定期建物賃貸借の事前説明は、契約書とは別個独立の説明書面を交付して行う必要があり、賃借人の承諾を得た電磁的方法による提供でその書面交付に代えることができる。",
      conditions: ["借地借家法38条所定の事前説明を行う場合"],
      exceptions: [],
      importance: "A",
      primarySources: [landBuildingLeaseAct, supremeCourtSeparateExplanation],
      sourceFactIds: ["u55-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-fixed-term-building-lease-no-explanation-invalid",
      claim: "賃貸人が借地借家法38条所定の事前説明をしなかったときは、契約の更新がないこととする旨の定めは無効となる。",
      conditions: ["定期建物賃貸借として更新がない旨を定めた場合", "賃貸人が所定の事前説明をしていないこと"],
      exceptions: [],
      importance: "A",
      primarySources: [landBuildingLeaseAct],
      sourceFactIds: ["u55-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate fixed-term-building-lease knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-fixed-term-building-lease") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute" || entry.sourceType === "judgment")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u55-f1" || id === "u55-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 5) throw new Error(`Expected 5 fixed-term-building-lease knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsFixedTermBuildingLease = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
