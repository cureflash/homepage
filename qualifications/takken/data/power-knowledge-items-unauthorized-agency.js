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
    conceptId: "takken-concept-unauthorized-agency",
    sourceUnitIds: ["civil-unauthorized-agency"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-unauthorized-agency-no-effect-unless-ratified",
      claim: "代理権のない者がした契約は、本人が追認しない限り、本人に対してその効力を生じない。",
      conditions: ["行為者に代理権がないこと", "本人のためにした契約であること"],
      exceptions: ["本人が追認した場合は、本人に対して効力を生ずる。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u40-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-unauthorized-agency-ratification-retroactive",
      claim: "本人の追認は、別段の意思表示がない限り、契約時にさかのぼって効力を生ずる。",
      conditions: ["無権代理行為について本人が追認すること"],
      exceptions: ["本人が別段の意思を表示した場合は、その意思に従う。"],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-unauthorized-agency-counterparty-demand-ratification",
      claim: "相手方は、本人に対し、相当の期間を定めて追認するかどうかを確答すべき旨を催告でき、期間内に確答がなければ追認を拒絶したものとみなされる。",
      conditions: ["無権代理行為の相手方であること", "本人に相当期間を定めて確答を求めること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-unauthorized-agency-withdrawal-before-ratification",
      claim: "本人が追認しない間は、相手方は、無権代理行為を取り消すことができる。ただし、契約時に無権代理であることを知っていた場合は、この限りでない。",
      conditions: ["本人が追認していないこと", "相手方が契約時に無権代理であることを知らなかったこと"],
      exceptions: ["相手方が契約時に無権代理であることを知っていた場合は取消しできない。"],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-unauthorized-agency-agent-liability",
      claim: "無権代理人は、相手方の選択により、履行または損害賠償の責任を負うことがある。",
      conditions: ["無権代理人が代理権を証明できないこと", "本人の追認がないこと", "相手方が無権代理を知らず、かつ過失もないこと"],
      exceptions: ["無権代理人が制限行為能力者である場合など、民法117条の責任を負わない場合がある。"],
      importance: "A",
      primarySources: [statute]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate unauthorized agency knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 5) throw new Error(`Expected 5 unauthorized agency knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsUnauthorizedAgency = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
