(() => {
  "use strict";

  const SOURCES = Object.freeze({
    takkenAct: Object.freeze({
      id: "egov-takken-act",
      label: "e-Gov法令検索『宅地建物取引業法』",
      url: "https://laws.e-gov.go.jp/law/327AC1000000176",
      sourceType: "statute"
    }),
    takkenRegulations: Object.freeze({
      id: "egov-takken-regulations",
      label: "e-Gov法令検索『宅地建物取引業法施行規則』",
      url: "https://laws.e-gov.go.jp/law/332M50004000012/",
      sourceType: "ministerial_ordinance"
    })
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-office-signs",
    sourceUnitIds: ["takken-gyoho-roster-signs"],
    sourceFactIds: ["u07-f1"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-office-signs-office-conspicuous-posting",
      claim: "宅地建物取引業者は、事務所等ごとに、公衆の見やすい場所へ国土交通省令で定める標識を掲げなければならない。",
      conditions: ["宅地建物取引業法50条1項の事務所等に該当する場所であること", "標識は公衆の見やすい場所に掲げること"],
      exceptions: [],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.takkenRegulations]
    },
    {
      ...shared,
      knowledgeId: "takken-k-office-signs-continuous-facility",
      claim: "継続的に業務を行うことができる施設を有する事務所以外の場所も、法令上の区分に応じて標識掲示の対象となる。",
      conditions: ["宅地建物取引業法施行規則19条1項1号に該当する場所であること"],
      exceptions: ["法31条の3第1項の『事務所等』に該当する場所は、法50条1項前段の事務所等として掲示義務を負う。"],
      importance: "B",
      primarySources: [SOURCES.takkenAct, SOURCES.takkenRegulations]
    },
    {
      ...shared,
      knowledgeId: "takken-k-office-signs-own-subdivision-site",
      claim: "宅建業者が一団の宅地または建物を自ら分譲する場合、その宅地または建物の所在場所は標識掲示の対象となる。",
      conditions: ["宅建業者自身が一団の宅地または建物を分譲する場合であること"],
      exceptions: [],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.takkenRegulations]
    },
    {
      ...shared,
      knowledgeId: "takken-k-office-signs-own-subdivision-guide-office",
      claim: "宅建業者が一団の宅地または建物の分譲を案内所を設置して行う場合、その案内所は標識掲示の対象となる。",
      conditions: ["自ら行う一団の宅地または建物の分譲のために案内所を設置する場合であること"],
      exceptions: [],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.takkenRegulations]
    },
    {
      ...shared,
      knowledgeId: "takken-k-office-signs-other-broker-guide-office",
      claim: "他の宅建業者が行う一団の宅地または建物の分譲について、代理または媒介を案内所を設置して行う場合、その案内所は標識掲示の対象となる。",
      conditions: ["他の宅建業者による一団の分譲を代理または媒介するために案内所を設置する場合であること"],
      exceptions: [],
      importance: "B",
      primarySources: [SOURCES.takkenAct, SOURCES.takkenRegulations]
    },
    {
      ...shared,
      knowledgeId: "takken-k-office-signs-exhibition-event",
      claim: "宅建業者が業務に関して展示会その他これに類する催しを実施する場所も標識掲示の対象となる。",
      conditions: ["宅建業者がその業務に関して展示会その他これに類する催しを実施する場合であること"],
      exceptions: [],
      importance: "B",
      primarySources: [SOURCES.takkenAct, SOURCES.takkenRegulations]
    },
    {
      ...shared,
      knowledgeId: "takken-k-office-signs-form-varies-by-place",
      claim: "掲示する標識の様式は、事務所、案内所、分譲物件所在地など掲示場所の区分に応じて宅地建物取引業法施行規則で定められている。",
      conditions: ["宅地建物取引業法施行規則19条2項の場所区分に応じた様式を用いること"],
      exceptions: ["すべての掲示場所で同一様式を用いるわけではない。"],
      importance: "B",
      primarySources: [SOURCES.takkenAct, SOURCES.takkenRegulations]
    }
  ];

  const ids = new Set();
  const allowedImportance = new Set(["A", "B", "C"]);
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate Power Takken office-signs knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (!item.knowledgeId.startsWith("takken-k-office-signs-")) throw new Error(`Invalid office-signs knowledge id: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-office-signs") throw new Error(`Unexpected office-signs concept id: ${item.knowledgeId}`);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01") throw new Error(`Invalid law version: ${item.knowledgeId}`);
    if (item.factcheckStatus !== "verified") throw new Error(`Unverified office-signs knowledge item: ${item.knowledgeId}`);
    if (!allowedImportance.has(item.importance)) throw new Error(`Invalid importance: ${item.knowledgeId}`);
    if (!Array.isArray(item.primarySources) || !item.primarySources.some((source) => source.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
    if (!item.primarySources.some((source) => source.sourceType === "ministerial_ordinance")) throw new Error(`Missing ministerial ordinance source: ${item.knowledgeId}`);
    if (!item.sourceUnitIds.includes("takken-gyoho-roster-signs") || !item.sourceFactIds.includes("u07-f1")) throw new Error(`Invalid source traceability: ${item.knowledgeId}`);
  }

  if (knowledgeItems.length !== 7) throw new Error(`Expected 7 office-signs knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsOfficeSigns = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
