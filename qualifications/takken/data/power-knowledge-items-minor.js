(() => {
  "use strict";

  const statute = Object.freeze({
    id: "egov-civil-code",
    label: "e-Gov法令検索『民法』",
    url: "https://laws.e-gov.go.jp/law/129AC0000000089?occasion_date=20260401",
    sourceType: "statute"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-minor",
    sourceUnitIds: ["civil-limited-capacity"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-minor-adult-at-eighteen",
      claim: "民法上、年齢18歳をもって成年となり、18歳未満の者が未成年者である。",
      conditions: ["民法上の成年年齢を判断する場面であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u38-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-minor-consent-principle",
      claim: "未成年者が法律行為をするには、原則として法定代理人の同意を得なければならない。",
      conditions: ["行為者が未成年者であること", "未成年者が法律行為をすること"],
      exceptions: ["単に権利を得、または義務を免れる法律行為には法定代理人の同意を要しない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u38-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-minor-right-only-exception",
      claim: "未成年者が単に権利を得、または義務を免れる法律行為をする場合、法定代理人の同意は不要である。",
      conditions: ["未成年者に新たな義務を負わせず、単に権利を得るか既存の義務を免れる法律行為であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u38-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-minor-cancellation-without-consent",
      claim: "法定代理人の同意を要するのに同意を得ずに未成年者がした法律行為は、取り消すことができる。",
      conditions: ["法定代理人の同意を要する法律行為であること", "必要な同意を得ていないこと"],
      exceptions: ["同意を要しない法律行為には、この取消しの根拠は適用されない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u38-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-minor-permitted-property",
      claim: "法定代理人が目的を定めて処分を許した財産はその目的の範囲内で、目的を定めず処分を許した財産はその範囲で、未成年者が自由に処分できる。",
      conditions: ["法定代理人が未成年者に財産の処分を許していること"],
      exceptions: ["目的を定めて許した場合は、その目的の範囲を超える処分まで自由になるわけではない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u38-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-minor-permitted-business-capacity",
      claim: "一種または数種の営業を許された未成年者は、その営業に関して成年者と同一の行為能力を有する。",
      conditions: ["法定代理人から一種または数種の営業を許されていること", "その許された営業に関する法律行為であること"],
      exceptions: ["未成年者が営業に堪えることができない事由があるときは、法定代理人は法定の手続に従い許可を取り消し、または制限できる。"],
      importance: "B",
      primarySources: [statute],
      sourceFactIds: ["u38-f1"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate minor knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 6) throw new Error(`Expected 6 minor knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsMinor = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();