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
    conceptId: "takken-concept-agency",
    sourceUnitIds: ["civil-agency"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-agency-direct-effect-with-disclosure",
      claim: "代理人がその権限内において本人のためにすることを示してした意思表示は、本人に対して直接にその効力を生ずる。",
      conditions: ["代理人が代理権の範囲内で行為すること", "本人のためにすることを相手方に示すこと（顕名）"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u39-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-agency-undisclosed-deemed-self",
      claim: "代理人が本人のためにすることを示さないでした意思表示は、原則として代理人自身のためにしたものとみなされる。",
      conditions: ["代理人が本人のためにすることを示さずに意思表示をすること"],
      exceptions: ["相手方が、代理人が本人のためにすることを知り、または知ることができたときは、この原則は適用されない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u39-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-agency-undisclosed-counterparty-awareness-exception",
      claim: "代理人が顕名を欠いても、相手方が本人のためにすることを知り、または知ることができたときは、代理人自身のためにしたものとはみなされず、代理行為として本人に効果が帰属する。",
      conditions: ["代理人が本人のためにすることを明示していないこと", "相手方が本人のためにすることを知り、または知ることができたこと", "代理権の範囲内の行為であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u39-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate agency knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 3) throw new Error(`Expected 3 agency knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsAgency = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
