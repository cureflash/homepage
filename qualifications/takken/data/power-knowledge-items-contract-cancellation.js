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
    conceptId: "takken-concept-contract-cancellation",
    sourceUnitIds: ["contract-cancellation"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-contract-cancellation-demand-principle",
      claim: "一方当事者が債務を履行しない場合、相手方は相当の期間を定めて履行を催告し、その期間内に履行がないときは、原則として契約を解除できる。",
      conditions: ["一方当事者に債務不履行があること", "相手方が相当の期間を定めて履行を催告したこと", "その期間内に履行がないこと"],
      exceptions: ["催告期間経過時の債務不履行が契約および取引上の社会通念に照らして軽微であるときは解除できない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u46-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-contract-cancellation-minor-breach-no-cancellation",
      claim: "催告期間を経過した時点の債務不履行が、契約および取引上の社会通念に照らして軽微であるときは、民法541条による催告解除はできない。",
      conditions: ["民法541条の催告期間が経過していること", "その時点の債務不履行が軽微であること"],
      exceptions: ["軽微性は契約および取引上の社会通念に照らして判断する。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-contract-cancellation-no-demand-total-impossibility",
      claim: "債務の全部の履行が不能であるとき、債権者は催告をせず直ちに契約を解除できる。",
      conditions: ["債務の全部の履行が不能であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u46-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-contract-cancellation-no-demand-total-refusal",
      claim: "債務者が債務の全部の履行を拒絶する意思を明確に表示したとき、債権者は催告をせず直ちに契約を解除できる。",
      conditions: ["債務者が債務全部の履行拒絶意思を明確に表示したこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-contract-cancellation-no-demand-partial-purpose-failure",
      claim: "債務の一部が履行不能である場合または債務者が一部の履行拒絶意思を明確に表示した場合に、残存部分のみでは契約目的を達成できないとき、債権者は催告をせず直ちに契約全部を解除できる。",
      conditions: ["一部履行不能または一部履行拒絶意思の明確な表示があること", "残存部分のみでは契約目的を達成できないこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-contract-cancellation-no-demand-fixed-time-purpose-failure",
      claim: "契約の性質または当事者の意思表示により特定日時または一定期間内の履行が契約目的達成に必要であり、債務者が履行しないままその時期を経過したとき、債権者は催告をせず直ちに契約を解除できる。",
      conditions: ["特定日時または一定期間内の履行が契約目的達成に不可欠であること", "債務者が履行しないままその時期を経過したこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-contract-cancellation-no-demand-no-prospect",
      claim: "債務者が債務を履行せず、催告をしても契約目的を達成するのに足りる履行がされる見込みがないことが明らかなとき、債権者は催告をせず直ちに契約を解除できる。",
      conditions: ["債務者が債務を履行していないこと", "催告しても契約目的達成に足りる履行の見込みがないことが明らかであること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-contract-cancellation-partial-no-demand-impossibility",
      claim: "債務の一部の履行が不能であるとき、債権者は催告をせず直ちに契約の一部を解除できる。",
      conditions: ["債務の一部の履行が不能であること"],
      exceptions: [],
      importance: "B",
      primarySources: [statute],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-contract-cancellation-partial-no-demand-refusal",
      claim: "債務者が債務の一部の履行を拒絶する意思を明確に表示したとき、債権者は催告をせず直ちに契約の一部を解除できる。",
      conditions: ["債務者が債務の一部の履行拒絶意思を明確に表示したこと"],
      exceptions: [],
      importance: "B",
      primarySources: [statute],
      sourceFactIds: []
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate contract-cancellation knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-contract-cancellation") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.id === "egov-civil-code" && entry.sourceType === "statute")) throw new Error(`Missing Civil Code statute source: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u46-f1" || id === "u46-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 9) throw new Error(`Expected 9 contract-cancellation knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsContractCancellation = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
