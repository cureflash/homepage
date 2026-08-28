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
    conceptId: "takken-concept-contract-start",
    sourceUnitIds: ["contract-start-time"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-contract-start-permit-before-contract",
      claim: "宅地の造成または建物の建築に関する工事の完了前は、その工事に必要な法令上の許可・確認等の処分があった後でなければ、その工事に係る宅地・建物について宅建業者は売買・交換の契約を締結し、またはその代理・媒介をしてはならない。",
      conditions: ["宅地の造成または建物の建築に関する工事が完了する前であること", "当該工事について法令上必要な許可・確認等があること"],
      exceptions: ["必要な許可・確認等の処分があった後は、宅建業法36条の契約締結時期規制によって売買・交換の契約締結等を妨げられない。ただし、他の契約規制は別途適用される。"],
      importance: "A",
      primarySources: [statute, enforcementOrder],
      sourceFactIds: ["u19-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-contract-start-self-agency-brokerage",
      claim: "宅建業法36条の工事完了前の契約締結時期規制は、宅建業者が自ら当事者として売買・交換する場合だけでなく、当事者を代理して契約を締結する場合および売買・交換を媒介する場合にも及ぶ。",
      conditions: ["宅建業者が工事完了前物件の売買・交換について、自ら当事者、代理人または媒介者として関与すること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u19-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-contract-start-sale-exchange-scope",
      claim: "宅建業法36条が工事完了前に制限する契約類型は売買・交換であり、同条は貸借契約の締結時期を規制する条文ではない。",
      conditions: ["宅建業法36条の適用対象となる取引類型を判断する場面であること"],
      exceptions: ["貸借についても重要事項説明その他の宅建業法上の規制は別途適用され得る。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u19-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-contract-start-development-permit-building-confirmation",
      claim: "宅建業法36条が契約締結等の前提とする代表的な処分には、都市計画法29条1項・2項の開発許可と、建築基準法6条1項の建築確認が含まれる。",
      conditions: ["当該工事について都市計画法上の開発許可または建築基準法上の建築確認が必要な場合であること"],
      exceptions: ["契約締結等の前提となる処分はこの2種類だけではなく、宅建業法施行令2条の5が定めるその他の法令上の許可等も含まれる。"],
      importance: "A",
      primarySources: [statute, enforcementOrder],
      sourceFactIds: ["u19-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-contract-start-application-not-enough",
      claim: "工事完了前物件の売買・交換について、必要な許可・確認等を申請しただけでは足りず、許可・確認等の処分が実際にあった後でなければ宅建業者は契約締結・代理・媒介をできない。",
      conditions: ["宅建業法36条の対象となる工事完了前物件について、必要な許可・確認等の手続中であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute, enforcementOrder],
      sourceFactIds: ["u19-f1"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate contract start knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 5) throw new Error(`Expected 5 contract start knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsContractStart = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
