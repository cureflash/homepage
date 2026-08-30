(() => {
  "use strict";

  const civilCode = Object.freeze({
    id: "egov-civil-code",
    label: "e-Gov法令検索『民法』",
    url: "https://laws.e-gov.go.jp/law/129AC0000000089?occasion_date=20260401",
    sourceType: "statute"
  });

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
    conceptId: "takken-concept-lease-deposit-opposability",
    sourceUnitIds: ["lease-deposit-opposability"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-lease-deposit-opposability-deposit-security-definition",
      claim: "敷金とは、名目を問わず、賃料債務その他の賃貸借に基づく賃借人の金銭債務を担保する目的で賃借人が賃貸人に交付する金銭である。",
      conditions: ["民法622条の2の敷金に当たること"],
      exceptions: [],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-lease-deposit-opposability-return-after-end-and-return",
      claim: "賃貸借が終了し、かつ賃貸人が賃貸物の返還を受けたとき、賃貸人は敷金の返還義務を負う。",
      conditions: ["賃貸借が終了していること", "賃貸物の返還を受けていること"],
      exceptions: [],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: ["u51-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-lease-deposit-opposability-return-after-lawful-assignment",
      claim: "賃借人が適法に賃借権を譲り渡したときも、賃貸人は敷金の返還義務を負う。",
      conditions: ["賃借権の譲渡が適法であること"],
      exceptions: [],
      importance: "B",
      primarySources: [civilCode],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-lease-deposit-opposability-return-net-of-debt",
      claim: "敷金返還額は、受領した敷金額から賃貸借に基づく賃借人の賃貸人に対する金銭債務額を控除した残額である。",
      conditions: ["民法622条の2第1項の敷金返還場面であること"],
      exceptions: [],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: ["u51-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-lease-deposit-opposability-lessor-may-apply-unpaid-debt",
      claim: "賃借人が賃貸借に基づく金銭債務を履行しないとき、賃貸人は敷金をその債務の弁済に充てることができる。",
      conditions: ["賃借人が賃貸借に基づく金銭債務を履行していないこと"],
      exceptions: [],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-lease-deposit-opposability-lessee-cannot-demand-application",
      claim: "賃借人は賃貸人に対して、敷金を未払債務の弁済に充てるよう請求することはできない。",
      conditions: ["民法622条の2第2項の敷金充当場面であること"],
      exceptions: [],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-lease-deposit-opposability-delivery-without-registration",
      claim: "建物賃貸借は、賃借権の登記がなくても建物の引渡しがあれば第三者対抗力を取得する。",
      conditions: ["建物の賃貸借であること", "建物の引渡しがあること"],
      exceptions: [],
      importance: "A",
      primarySources: [landBuildingLeaseAct],
      sourceFactIds: ["u51-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-lease-deposit-opposability-subsequent-property-right-acquirer",
      claim: "建物の引渡しによる建物賃貸借の対抗力は、その後に当該建物について物権を取得した者に対して生ずる。",
      conditions: ["建物の引渡し後に第三者が当該建物について物権を取得したこと"],
      exceptions: [],
      importance: "A",
      primarySources: [landBuildingLeaseAct],
      sourceFactIds: ["u51-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate lease-deposit-opposability knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-lease-deposit-opposability") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Non-statutory primary source: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u51-f1" || id === "u51-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 8) throw new Error(`Expected 8 lease-deposit-opposability knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsLeaseDepositOpposability = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
