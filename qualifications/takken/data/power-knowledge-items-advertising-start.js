(() => {
  "use strict";

  const statute = Object.freeze({
    id: "egov-takken-act",
    label: "e-Gov法令検索『宅地建物取引業法』",
    url: "https://laws.e-gov.go.jp/law/327AC1000000176",
    sourceType: "statute"
  });
  const enforcementOrder = Object.freeze({
    id: "egov-takken-enforcement-order",
    label: "e-Gov法令検索『宅地建物取引業法施行令』",
    url: "https://laws.e-gov.go.jp/law/331CO0000000383",
    sourceType: "statute"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-advertising-start",
    sourceUnitIds: ["advertising-start-time"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-advertising-start-permit-before-advertising",
      claim: "宅地の造成または建物の建築に関する工事の完了前は、その工事に必要な法令上の許可・確認等の処分があった後でなければ、その工事に係る宅地・建物の売買その他の業務に関する広告をしてはならない。",
      conditions: ["宅地の造成または建物の建築に関する工事が完了する前であること", "当該工事について法令上必要な許可・確認等があること"],
      exceptions: ["必要な許可・確認等の処分があった後は、宅建業法33条の広告開始時期規制によって広告開始を妨げられない。ただし、誇大広告等の他の広告規制は別途適用される。"],
      importance: "A",
      primarySources: [statute, enforcementOrder],
      sourceFactIds: ["u18-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-advertising-start-development-permit-building-confirmation",
      claim: "宅建業法33条が広告開始前に必要とする代表的な処分には、都市計画法29条1項・2項の開発許可と、建築基準法6条1項の建築確認が含まれる。",
      conditions: ["当該工事について都市計画法上の開発許可または建築基準法上の建築確認が必要な場合であること"],
      exceptions: ["広告開始前に必要となる処分はこの2種類だけではなく、宅建業法施行令2条の5が定めるその他の法令上の許可等も含まれる。"],
      importance: "A",
      primarySources: [statute, enforcementOrder],
      sourceFactIds: ["u18-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-advertising-start-application-not-enough",
      claim: "工事完了前物件の広告開始について、必要な許可・確認等を申請しただけでは足りず、許可・確認等の処分が実際にあった後でなければ広告を開始できない。",
      conditions: ["宅建業法33条の対象となる工事完了前物件について、必要な許可・確認等の手続中であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute, enforcementOrder],
      sourceFactIds: ["u18-f1"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate advertising start knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 3) throw new Error(`Expected 3 advertising start knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsAdvertisingStart = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
