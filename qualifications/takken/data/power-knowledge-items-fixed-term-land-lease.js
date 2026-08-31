(() => {
  "use strict";

  const landBuildingLeaseAct = Object.freeze({
    id: "egov-land-building-lease-act",
    label: "e-Gov法令検索『借地借家法』",
    url: "https://laws.e-gov.go.jp/law/403AC0000000090?occasion_date=20260401",
    sourceType: "statute"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-fixed-term-land-lease",
    sourceUnitIds: ["fixed-term-land-lease"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-fixed-term-land-lease-duration-fifty-years-or-more",
      claim: "一般定期借地権は、存続期間を50年以上として設定する。",
      conditions: ["借地借家法22条の定期借地権として設定すること"],
      exceptions: [],
      importance: "A",
      primarySources: [landBuildingLeaseAct],
      sourceFactIds: ["u53-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-fixed-term-land-lease-no-contract-renewal",
      claim: "一般定期借地権では、契約の更新がない旨を特約できる。",
      conditions: ["存続期間を50年以上として借地権を設定すること", "更新の請求および土地の使用継続による更新も排除対象に含むこと"],
      exceptions: [],
      importance: "A",
      primarySources: [landBuildingLeaseAct],
      sourceFactIds: ["u53-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-fixed-term-land-lease-no-extension-by-rebuilding",
      claim: "一般定期借地権では、建物の築造による存続期間の延長がない旨を特約できる。",
      conditions: ["存続期間を50年以上として借地権を設定すること"],
      exceptions: [],
      importance: "A",
      primarySources: [landBuildingLeaseAct],
      sourceFactIds: ["u53-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-fixed-term-land-lease-no-building-purchase-demand",
      claim: "一般定期借地権では、借地借家法13条による建物買取請求をしない旨を特約できる。",
      conditions: ["存続期間を50年以上として借地権を設定すること"],
      exceptions: [],
      importance: "A",
      primarySources: [landBuildingLeaseAct],
      sourceFactIds: ["u53-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-fixed-term-land-lease-special-agreement-written-form",
      claim: "一般定期借地権の更新なし等の特約は、公正証書による等の書面によってしなければならない。",
      conditions: ["借地借家法22条の更新なし等の特約であること"],
      exceptions: ["法定要件を満たす電磁的記録によってされた場合は、書面によってされたものとみなされる。"],
      importance: "A",
      primarySources: [landBuildingLeaseAct],
      sourceFactIds: ["u53-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-fixed-term-land-lease-electronic-record-deemed-written",
      claim: "一般定期借地権の更新なし等の特約が法定要件を満たす電磁的記録によってされたときは、書面によってされたものとみなされる。",
      conditions: ["借地借家法22条の更新なし等の特約であること", "法令上認められる電磁的記録によること"],
      exceptions: [],
      importance: "A",
      primarySources: [landBuildingLeaseAct],
      sourceFactIds: ["u53-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate fixed-term-land-lease knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-fixed-term-land-lease") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Non-statutory primary source: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u53-f1" || id === "u53-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 6) throw new Error(`Expected 6 fixed-term-land-lease knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsFixedTermLandLease = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
