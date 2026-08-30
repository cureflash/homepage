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
    conceptId: "takken-concept-lease-general",
    sourceUnitIds: ["lease-general"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-lease-general-lessor-use-profit",
      claim: "賃貸借では、賃貸人は賃借人に目的物の使用および収益をさせることを約する。",
      conditions: ["民法601条の賃貸借契約であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u50-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-lease-general-lessee-rent",
      claim: "賃貸借では、賃借人は賃貸人に賃料を支払うことを約する。",
      conditions: ["民法601条の賃貸借契約であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u50-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-lease-general-lessee-return-at-end",
      claim: "賃貸借では、賃借人は契約が終了したときに賃借物を返還することを約する。",
      conditions: ["民法601条の賃貸借契約が終了したこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u50-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-lease-general-duration-fifty-year-cap",
      claim: "民法上の賃貸借の存続期間は50年を超えることができず、50年を超える期間を定めたときは50年となる。",
      conditions: ["民法604条が適用される賃貸借であること"],
      exceptions: ["借地借家法など特別法に別段の定めがある場合は、その特別法の規律を別途確認する。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u50-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-lease-general-renewal-fifty-year-cap",
      claim: "民法上の賃貸借は更新できるが、更新後の存続期間は更新の時から50年を超えることができない。",
      conditions: ["民法604条が適用される賃貸借を更新すること"],
      exceptions: ["借地借家法など特別法に別段の定めがある場合は、その特別法の規律を別途確認する。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: []
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate lease-general knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-lease-general") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.id === "egov-civil-code" && entry.sourceType === "statute")) throw new Error(`Missing Civil Code statute source: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u50-f1" || id === "u50-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 5) throw new Error(`Expected 5 lease-general knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsLeaseGeneral = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
