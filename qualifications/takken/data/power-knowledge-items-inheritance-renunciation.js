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
    conceptId: "takken-concept-inheritance-renunciation",
    sourceUnitIds: ["inheritance-acceptance-renunciation"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-inheritance-renunciation-family-court-declaration",
      claim: "相続の放棄をしようとする者は、その旨を家庭裁判所に申述しなければならない。",
      conditions: ["相続放棄をしようとすること"],
      exceptions: [],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: ["u57-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-inheritance-renunciation-deemed-never-heir",
      claim: "相続の放棄をした者は、その相続について初めから相続人とならなかったものとみなされる。",
      conditions: ["相続放棄がされたこと"],
      exceptions: [],
      importance: "A",
      primarySources: [civilCode],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-inheritance-renunciation-possession-preservation-duty",
      claim: "相続放棄時に相続財産に属する財産を現に占有している者は、その財産を相続人または相続財産清算人へ引き渡すまで、自己の財産と同一の注意をもって保存しなければならない。",
      conditions: ["相続放棄の時に、相続財産に属する財産を現に占有していること"],
      exceptions: ["保存義務は、相続人または民法952条1項の相続財産清算人に当該財産を引き渡すまでの間に限られる"],
      importance: "B",
      primarySources: [civilCode],
      sourceFactIds: []
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate inheritance-renunciation knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-inheritance-renunciation") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u57-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 3) throw new Error(`Expected 3 inheritance-renunciation knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsInheritanceRenunciation = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
