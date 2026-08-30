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
    conceptId: "takken-concept-acquisitive-prescription",
    sourceUnitIds: ["civil-prescription"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-acquisitive-prescription-common-possession-requirements",
      claim: "所有権の取得時効には、所有の意思をもって、平穏かつ公然に他人の物を占有することが必要である。",
      conditions: ["所有の意思をもって占有すること", "占有が平穏であること", "占有が公然であること", "対象が他人の物であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u41-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-acquisitive-prescription-twenty-years",
      claim: "所有の意思をもって平穏かつ公然に他人の物を20年間占有した者は、その所有権を取得する。",
      conditions: ["取得時効の共通占有要件を満たすこと", "占有期間が20年間継続すること"],
      exceptions: ["占有開始時に善意かつ無過失であれば、民法162条2項の10年の取得時効が適用される。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u41-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-acquisitive-prescription-ten-years-good-faith-no-negligence",
      claim: "占有開始時に、自己の占有する物が自己の所有であると信じ、かつそのことについて過失がない者は、所有の意思をもって平穏かつ公然に他人の物を10年間占有すると、その所有権を取得する。",
      conditions: ["取得時効の共通占有要件を満たすこと", "占有開始時に善意であること", "占有開始時に無過失であること", "占有期間が10年間継続すること"],
      exceptions: ["善意だけでは足りず、占有開始時に無過失であることも必要である。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u41-f1"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate acquisitive prescription knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
    if (!item.sourceFactIds.includes("u41-f1")) throw new Error(`Unexpected source fact for acquisitive prescription: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 3) throw new Error(`Expected 3 acquisitive prescription knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsAcquisitivePrescription = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
