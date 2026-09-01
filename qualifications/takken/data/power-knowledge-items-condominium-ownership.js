(() => {
  "use strict";

  const condominiumAct = Object.freeze({
    id: "egov-condominium-act",
    label: "e-Gov法令検索『建物の区分所有等に関する法律』",
    url: "https://laws.e-gov.go.jp/law/337AC0000000069?occasion_date=20260401",
    sourceType: "statute"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-condominium-ownership",
    sourceUnitIds: ["condominium-law"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-condominium-ownership-separate-ownership-conditions",
      claim: "一棟の建物に、構造上区分され、独立して住居・店舗・事務所・倉庫その他建物としての用途に供することができる数個の部分があるときは、その各部分をそれぞれ所有権の目的とすることができる。",
      conditions: ["一棟の建物の部分であること", "構造上区分されていること", "独立して建物としての用途に供することができること"],
      exceptions: [],
      importance: "A",
      primarySources: [condominiumAct],
      sourceFactIds: ["u59-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-condominium-ownership-unit-ownership-definition",
      claim: "区分所有権とは、区分所有法1条の建物部分のうち、規約により共用部分とされたものを除いた部分を目的とする所有権である。",
      conditions: ["区分所有法1条に規定する建物部分であること"],
      exceptions: ["規約により共用部分とされた部分は区分所有権の目的から除かれる"],
      importance: "A",
      primarySources: [condominiumAct],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-condominium-ownership-exclusive-part-definition",
      claim: "専有部分とは、区分所有権の目的となる建物の部分をいう。",
      conditions: ["区分所有権の目的となる建物部分であること"],
      exceptions: [],
      importance: "A",
      primarySources: [condominiumAct],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-condominium-ownership-common-part-definition",
      claim: "共用部分とは、専有部分以外の建物部分、専有部分に属しない建物の附属物、および規約により共用部分とされた附属の建物をいう。",
      conditions: [],
      exceptions: [],
      importance: "A",
      primarySources: [condominiumAct],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-condominium-ownership-structural-common-part-not-exclusive",
      claim: "数個の専有部分に通ずる廊下・階段室など、構造上区分所有者の全員または一部の共用に供されるべき建物部分は、区分所有権の目的とならない。",
      conditions: ["構造上、区分所有者の全員または一部の共用に供されるべき建物部分であること"],
      exceptions: [],
      importance: "A",
      primarySources: [condominiumAct],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-condominium-ownership-by-law-common-part",
      claim: "区分所有法1条に規定する建物部分および附属の建物は、規約によって共用部分とすることができる。",
      conditions: ["規約で共用部分と定めること"],
      exceptions: [],
      importance: "B",
      primarySources: [condominiumAct],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-condominium-ownership-by-law-common-part-registration",
      claim: "規約によって共用部分とした建物部分または附属建物は、その旨の登記をしなければ第三者に対抗することができない。",
      conditions: ["規約により共用部分とされた建物部分または附属建物であること", "第三者への対抗が問題となること"],
      exceptions: [],
      importance: "A",
      primarySources: [condominiumAct],
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-condominium-ownership-common-part-all-owners",
      claim: "共用部分は、原則として区分所有者全員の共有に属する。",
      conditions: ["共用部分であること"],
      exceptions: ["一部共用部分は、その共用に供される区分所有者の共有に属する", "規約で別段の定めをすることができる場合がある"],
      importance: "A",
      primarySources: [condominiumAct],
      sourceFactIds: ["u59-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-condominium-ownership-partial-common-part-owners",
      claim: "一部の区分所有者のみの共用に供されるべきことが明らかな共用部分は、原則としてその区分所有者の共有に属する。",
      conditions: ["一部の区分所有者のみの共用に供されるべきことが明らかな共用部分であること"],
      exceptions: ["規約で別段の定めをすることができる場合がある"],
      importance: "B",
      primarySources: [condominiumAct],
      sourceFactIds: []
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate condominium-ownership knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-condominium-ownership") throw new Error(`Unexpected concept id: ${item.knowledgeId}`);
    if (!item.primarySources.every((entry) => entry.sourceType === "statute")) throw new Error(`Unexpected primary source type: ${item.knowledgeId}`);
    if (!item.sourceFactIds.every((id) => id === "u59-f1" || id === "u59-f2")) throw new Error(`Unexpected source fact id: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 9) throw new Error(`Expected 9 condominium-ownership knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsCondominiumOwnership = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
