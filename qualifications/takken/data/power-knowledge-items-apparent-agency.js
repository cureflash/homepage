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
    conceptId: "takken-concept-apparent-agency",
    sourceUnitIds: ["civil-unauthorized-agency"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-apparent-agency-statutory-overview",
      claim: "民法は、代理権授与表示、権限外行為、代理権消滅後について、所定の要件を満たすときに本人へ効果を帰属させる表見代理の制度を置いている。",
      conditions: ["実際の代理権だけではなく、本人側に帰責可能な代理権の外観があること", "各類型について民法109条、110条または112条の要件を満たすこと"],
      exceptions: ["単に無権代理であるだけでは表見代理は成立せず、各条の相手方保護要件等を満たす必要がある。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u40-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-apparent-agency-authority-grant-representation",
      claim: "第三者に対して他人に代理権を与えた旨を表示した者は、その表示した代理権の範囲内でその他人が第三者との間でした行為について、原則として責任を負う。",
      conditions: ["本人が第三者に対して他人へ代理権を与えた旨を表示したこと", "行為が表示された代理権の範囲内であること"],
      exceptions: ["第三者が代理権を与えられていないことを知り、または過失によって知らなかったときは保護されない。"],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-apparent-agency-beyond-authority",
      claim: "代理人が権限外の行為をした場合でも、第三者に代理人の権限があると信ずべき正当な理由があるときは、本人がその行為について責任を負う。",
      conditions: ["代理人に何らかの代理権があること", "その代理権の範囲外の行為をしたこと", "第三者に代理人の権限があると信ずべき正当な理由があること"],
      exceptions: ["第三者に権限があると信ずべき正当な理由がない場合は、民法110条による表見代理は成立しない。"],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-apparent-agency-after-authority-extinction",
      claim: "以前代理権を有していた者が代理権消滅後にその代理権の範囲内の行為をした場合、第三者が代理権消滅を知らず、かつ知らなかったことについて過失がないときは、本人が原則として責任を負う。",
      conditions: ["行為者が以前は代理権を有していたこと", "代理権消滅後の行為であること", "行為が消滅前の代理権の範囲内であること", "第三者が代理権消滅を知らず、そのことについて過失がないこと"],
      exceptions: ["第三者が代理権消滅を知っていた場合、または知らなかったことに過失がある場合は保護されない。"],
      importance: "A",
      primarySources: [statute]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate apparent agency knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 4) throw new Error(`Expected 4 apparent agency knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsApparentAgency = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
