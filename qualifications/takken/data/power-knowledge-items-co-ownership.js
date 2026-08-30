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
    conceptId: "takken-concept-co-ownership",
    sourceUnitIds: ["co-ownership"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-co-ownership-use-entire-property-by-share",
      claim: "各共有者は、共有物の全部について、その持分に応じた使用をすることができる。",
      conditions: ["共有物について共有持分を有すること"],
      exceptions: ["自己の持分に相当する物理的部分だけに使用範囲が限定されるわけではない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u43-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-co-ownership-excess-use-compensation",
      claim: "共有物を使用する共有者は、別段の合意がある場合を除き、他の共有者に対し、自己の持分を超える使用の対価を償還する義務を負う。",
      conditions: ["共有者が共有物を使用していること", "その使用が自己の持分を超えること"],
      exceptions: ["共有者間に別段の合意がある場合は、その合意に従う。"],
      importance: "B",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-co-ownership-use-duty-of-care",
      claim: "共有者は、善良な管理者の注意をもって共有物を使用しなければならない。",
      conditions: ["共有者が共有物を使用すること"],
      exceptions: [],
      importance: "B",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-co-ownership-equal-shares-presumed",
      claim: "各共有者の持分は、持分割合が明らかでないときは相等しいものと推定される。",
      conditions: ["各共有者の持分割合が明らかでないこと"],
      exceptions: ["持分割合を定める根拠がある場合は、その割合に従う。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u43-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-co-ownership-substantial-change-unanimous-consent",
      claim: "共有物に形状または効用の著しい変更を伴う変更を加えるには、原則として他の共有者の同意が必要である。",
      conditions: ["共有物の形状または効用の著しい変更を伴う変更であること"],
      exceptions: ["形状または効用の著しい変更を伴わない軽微変更は、民法252条の管理事項として持分価格の過半数で決する。", "所在等不明共有者がいる場合には、民法251条2項の裁判手続による例外がある。"],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-co-ownership-management-majority-by-value",
      claim: "共有物の管理に関する事項は、原則として各共有者の持分の価格に従い、その過半数で決する。",
      conditions: ["民法251条の著しい変更に当たらない管理事項であること"],
      exceptions: ["保存行為は各共有者が単独ですることができる。", "形状または効用の著しい変更を伴わない軽微変更も管理事項として扱われる。"],
      importance: "A",
      primarySources: [statute]
    },
    {
      ...shared,
      knowledgeId: "takken-k-co-ownership-preservation-unilateral",
      claim: "共有物の保存行為は、各共有者が単独ですることができる。",
      conditions: ["共有物の現状を維持する保存行為であること"],
      exceptions: ["管理事項や著しい変更に当たる行為まで単独で決定できるわけではない。"],
      importance: "A",
      primarySources: [statute]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate co-ownership knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-co-ownership") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.id === "egov-civil-code" && entry.sourceType === "statute")) throw new Error(`Missing Civil Code statute source: ${item.knowledgeId}`);
    if (item.sourceFactIds && !item.sourceFactIds.every((id) => id === "u43-f1" || id === "u43-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 7) throw new Error(`Expected 7 co-ownership knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsCoOwnership = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
