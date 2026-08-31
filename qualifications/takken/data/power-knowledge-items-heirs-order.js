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
    conceptId: "takken-concept-heirs-order",
    sourceUnitIds: ["inheritance-heirs-shares"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-heirs-order-spouse-always-heir",
      claim: "被相続人の配偶者は常に相続人となる。",
      conditions: ["被相続人に法律上の配偶者がいること"],
      exceptions: [],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: ["u56-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-heirs-order-children-first-rank",
      claim: "被相続人の子は血族相続人の第1順位となる。",
      conditions: ["被相続人に子がいること"],
      exceptions: [],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: ["u56-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-heirs-order-lineal-ascendants-second-rank",
      claim: "被相続人に第1順位の相続人がいない場合、直系尊属が第2順位の血族相続人となる。",
      conditions: ["民法887条の相続人がいないこと", "相続資格を有する直系尊属がいること"],
      exceptions: ["親等の異なる直系尊属がいるときは、被相続人に近い親等の者が先に相続人となる"],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: ["u56-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-heirs-order-siblings-third-rank",
      claim: "被相続人に第1順位・第2順位の相続人がいない場合、兄弟姉妹が第3順位の血族相続人となる。",
      conditions: ["民法887条の相続人がいないこと", "相続資格を有する直系尊属がいないこと", "被相続人に兄弟姉妹がいること"],
      exceptions: [],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: ["u56-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-heirs-order-spouse-child-half-each",
      claim: "配偶者と子が共同相続人である場合、法定相続分は配偶者が2分の1、子全体で2分の1となる。",
      conditions: ["配偶者と子が共同相続人であること"],
      exceptions: ["子が数人いるときは、原則として子全体の2分の1を各子の相続分に応じて分ける"],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: ["u56-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate heirs-order knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-heirs-order") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u56-f1" || id === "u56-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 5) throw new Error(`Expected 5 heirs-order knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsHeirsOrder = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
