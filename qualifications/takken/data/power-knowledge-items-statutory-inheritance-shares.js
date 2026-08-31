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
    conceptId: "takken-concept-statutory-inheritance-shares",
    sourceUnitIds: ["inheritance-heirs-shares"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-statutory-inheritance-shares-spouse-child-half-each",
      claim: "配偶者と子が共同相続人である場合、法定相続分は配偶者が2分の1、子全体で2分の1となる。",
      conditions: ["配偶者と子が共同相続人であること"],
      exceptions: [],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: ["u56-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-statutory-inheritance-shares-spouse-ascendant-two-thirds-one-third",
      claim: "配偶者と直系尊属が共同相続人である場合、法定相続分は配偶者が3分の2、直系尊属全体で3分の1となる。",
      conditions: ["配偶者と直系尊属が共同相続人であること"],
      exceptions: [],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-statutory-inheritance-shares-spouse-sibling-three-quarters-one-quarter",
      claim: "配偶者と兄弟姉妹が共同相続人である場合、法定相続分は配偶者が4分の3、兄弟姉妹全体で4分の1となる。",
      conditions: ["配偶者と兄弟姉妹が共同相続人であること"],
      exceptions: [],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-statutory-inheritance-shares-same-rank-equal",
      claim: "子、直系尊属または兄弟姉妹がそれぞれ複数いる場合、各人の法定相続分は原則として等しい。",
      conditions: ["同一順位の子、直系尊属または兄弟姉妹が複数共同相続人となること"],
      exceptions: ["父母の一方のみを同じくする兄弟姉妹には民法900条4号ただし書の特則がある"],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-statutory-inheritance-shares-half-blood-sibling-half",
      claim: "父母の一方のみを同じくする兄弟姉妹の法定相続分は、父母の双方を同じくする兄弟姉妹の相続分の2分の1となる。",
      conditions: ["兄弟姉妹が共同相続人であること", "父母の一方のみを同じくする兄弟姉妹と父母の双方を同じくする兄弟姉妹がいること"],
      exceptions: [],
      importance: "B",
      primarySources: [civilCode],
      sourceFactIds: []
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate statutory-inheritance-shares knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-statutory-inheritance-shares") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u56-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 5) throw new Error(`Expected 5 statutory-inheritance-shares knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsStatutoryInheritanceShares = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
