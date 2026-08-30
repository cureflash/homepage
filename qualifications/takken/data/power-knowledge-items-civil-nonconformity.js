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
    conceptId: "takken-concept-civil-nonconformity",
    sourceUnitIds: ["contract-nonconformity-civil"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-civil-nonconformity-cure-right",
      claim: "引き渡された目的物が種類・品質・数量に関して契約内容に適合しないとき、買主は売主に対し、修補、代替物の引渡しまたは不足分の引渡しによる履行の追完を請求できる。",
      conditions: ["売買目的物が引き渡されていること", "種類・品質・数量のいずれかについて契約内容に適合しないこと"],
      exceptions: ["不適合が買主の責めに帰すべき事由による場合は追完請求できない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u49-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-civil-nonconformity-seller-alternative-cure",
      claim: "売主は、買主に不相当な負担を課さないときは、買主が請求した方法と異なる方法で履行の追完をすることができる。",
      conditions: ["民法562条1項の履行の追完をする場面であること", "異なる追完方法が買主に不相当な負担を課さないこと"],
      exceptions: ["買主に不相当な負担を課す異なる方法へ一方的に変更することはできない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-civil-nonconformity-buyer-fault-no-cure",
      claim: "目的物の契約不適合が買主の責めに帰すべき事由によるとき、買主は履行の追完を請求できない。",
      conditions: ["契約不適合が買主の責めに帰すべき事由によること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-civil-nonconformity-price-reduction-demand-principle",
      claim: "契約不適合がある場合、買主が相当の期間を定めて履行の追完を催告し、その期間内に追完がないときは、不適合の程度に応じて代金減額を請求できる。",
      conditions: ["民法562条1項本文の契約不適合があること", "買主が相当の期間を定めて追完を催告したこと", "その期間内に追完がないこと"],
      exceptions: ["民法563条2項各号に該当する場合は催告なしで直ちに代金減額を請求できる。", "不適合が買主の責めに帰すべき事由による場合は代金減額を請求できない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u49-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-civil-nonconformity-price-reduction-no-demand-impossible",
      claim: "履行の追完が不能であるとき、買主は催告をせず直ちに不適合の程度に応じた代金減額を請求できる。",
      conditions: ["履行の追完が不能であること"],
      exceptions: ["不適合が買主の責めに帰すべき事由による場合は代金減額を請求できない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-civil-nonconformity-price-reduction-no-demand-refusal",
      claim: "売主が履行の追完を拒絶する意思を明確に表示したとき、買主は催告をせず直ちに不適合の程度に応じた代金減額を請求できる。",
      conditions: ["売主が履行の追完を拒絶する意思を明確に表示したこと"],
      exceptions: ["不適合が買主の責めに帰すべき事由による場合は代金減額を請求できない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-civil-nonconformity-price-reduction-no-demand-fixed-time",
      claim: "特定日時または一定期間内の履行が契約目的達成に不可欠で、売主が追完しないままその時期を経過したとき、買主は催告をせず直ちに不適合の程度に応じた代金減額を請求できる。",
      conditions: ["契約の性質または当事者の意思表示により特定日時または一定期間内の履行が契約目的達成に不可欠であること", "売主が追完をしないままその時期を経過したこと"],
      exceptions: ["不適合が買主の責めに帰すべき事由による場合は代金減額を請求できない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-civil-nonconformity-price-reduction-no-demand-no-prospect",
      claim: "催告をしても履行の追完を受ける見込みがないことが明らかなとき、買主は催告をせず直ちに不適合の程度に応じた代金減額を請求できる。",
      conditions: ["買主が催告しても履行の追完を受ける見込みがないことが明らかであること"],
      exceptions: ["不適合が買主の責めに帰すべき事由による場合は代金減額を請求できない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-civil-nonconformity-buyer-fault-no-price-reduction",
      claim: "契約不適合が買主の責めに帰すべき事由によるとき、買主は代金減額を請求できない。",
      conditions: ["契約不適合が買主の責めに帰すべき事由によること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: []
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate civil-nonconformity knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-civil-nonconformity") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.id === "egov-civil-code" && entry.sourceType === "statute")) throw new Error(`Missing Civil Code statute source: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u49-f1" || id === "u49-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 9) throw new Error(`Expected 9 civil-nonconformity knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsCivilNonconformity = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
