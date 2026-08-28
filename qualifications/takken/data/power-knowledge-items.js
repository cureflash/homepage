(() => {
  "use strict";

  const SOURCES = Object.freeze({
    takkenAct: Object.freeze({
      id: "egov-takken-act",
      label: "e-Gov法令検索『宅地建物取引業法』",
      url: "https://laws.e-gov.go.jp/law/327AC1000000176",
      sourceType: "statute"
    }),
    mlitLicense: Object.freeze({
      id: "mlit-license",
      label: "国土交通省『宅地建物取引の免許について』",
      url: "https://www.mlit.go.jp/totikensangyo/const/1_6_bt_000242.html",
      sourceType: "official_guidance"
    })
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified"
  });

  const knowledgeItems = [
    {
      ...shared,
      conceptId: "takken-concept-business-definition",
      knowledgeId: "takken-k-business-definition-self-sale-exchange",
      claim: "宅地または建物について、自ら売買または交換を業として行うことは宅地建物取引業に含まれる。",
      conditions: ["対象が宅地または建物であること", "売買または交換を業として行うこと"],
      exceptions: [],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.mlitLicense],
      sourceUnitIds: ["takken-gyoho-definition"],
      sourceFactIds: ["u01-f1"]
    },
    {
      ...shared,
      conceptId: "takken-concept-business-definition",
      knowledgeId: "takken-k-business-definition-agency-brokerage",
      claim: "宅地または建物の売買・交換・貸借について、代理または媒介を業として行うことは宅地建物取引業に含まれる。",
      conditions: ["対象が宅地または建物の売買・交換・貸借であること", "代理または媒介を業として行うこと"],
      exceptions: [],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.mlitLicense],
      sourceUnitIds: ["takken-gyoho-definition"],
      sourceFactIds: ["u01-f2"]
    },
    {
      ...shared,
      conceptId: "takken-concept-business-definition",
      knowledgeId: "takken-k-business-definition-self-lease-exclusion",
      claim: "宅地または建物を所有者が自ら貸主として賃貸する行為そのものは、宅地建物取引業法2条2号の宅地建物取引業の定義には含まれない。",
      conditions: ["所有者等が自ら貸主となる賃貸であること", "他人の貸借を代理・媒介する行為ではないこと"],
      exceptions: ["他人の貸借を代理または媒介して業として行う場合は宅地建物取引業に含まれる。"],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.mlitLicense],
      sourceUnitIds: ["takken-gyoho-definition"],
      sourceFactIds: ["u01-f1", "u01-f2"]
    },
    {
      ...shared,
      conceptId: "takken-concept-license-required",
      knowledgeId: "takken-k-license-required-general",
      claim: "宅地建物取引業を営もうとする者は、国土交通大臣または都道府県知事の免許を受けなければならない。",
      conditions: ["宅地建物取引業法2条2号の宅地建物取引業を営もうとすること", "個人・法人の別を問わない"],
      exceptions: ["宅地建物取引業に当たらない行為だけを行う場合は、この宅建業免許義務の対象ではない。"],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.mlitLicense],
      sourceUnitIds: ["takken-gyoho-license-required"],
      sourceFactIds: ["u02-f1"]
    },
    {
      ...shared,
      conceptId: "takken-concept-license-authority",
      knowledgeId: "takken-k-license-authority-minister-multiple-prefectures",
      claim: "2以上の都道府県に事務所を設置して宅地建物取引業を営もうとする場合、免許権者は国土交通大臣である。",
      conditions: ["宅地建物取引業を営もうとすること", "事務所が2以上の都道府県に所在すること", "法人・個人の別を問わない"],
      exceptions: ["事務所が1の都道府県内だけに所在する場合は国土交通大臣免許ではなく、その都道府県知事の免許となる。"],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.mlitLicense],
      sourceUnitIds: ["takken-gyoho-license-authority"],
      sourceFactIds: ["u03-f1"]
    },
    {
      ...shared,
      conceptId: "takken-concept-license-authority",
      knowledgeId: "takken-k-license-authority-governor-single-prefecture",
      claim: "1の都道府県内だけに事務所を設置して宅地建物取引業を営もうとする場合、免許権者はその都道府県知事である。",
      conditions: ["宅地建物取引業を営もうとすること", "すべての事務所が1の都道府県内に所在すること", "法人・個人の別を問わない"],
      exceptions: ["事務所が2以上の都道府県に所在する場合は都道府県知事免許ではなく、国土交通大臣免許となる。"],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.mlitLicense],
      sourceUnitIds: ["takken-gyoho-license-authority"],
      sourceFactIds: ["u03-f1"]
    }
  ];

  const knownConceptIds = new Set([
    "takken-concept-business-definition",
    "takken-concept-license-required",
    "takken-concept-license-authority"
  ]);
  const ids = new Set();
  const allowedImportance = new Set(["A", "B", "C"]);
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate Power Takken knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (!item.knowledgeId.startsWith("takken-k-")) throw new Error(`Invalid Power Takken knowledge id: ${item.knowledgeId}`);
    if (!knownConceptIds.has(item.conceptId)) throw new Error(`Unexpected concept mapping: ${item.knowledgeId}`);
    if (!item.claim || !Array.isArray(item.conditions) || !Array.isArray(item.exceptions)) throw new Error(`Invalid knowledge payload: ${item.knowledgeId}`);
    if (!allowedImportance.has(item.importance)) throw new Error(`Invalid importance: ${item.knowledgeId}`);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01") throw new Error(`Invalid law version: ${item.knowledgeId}`);
    if (!Array.isArray(item.primarySources) || item.primarySources.length === 0) throw new Error(`Missing primary sources: ${item.knowledgeId}`);
    if (!item.primarySources.some((source) => source.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
    if (item.factcheckStatus !== "verified") throw new Error(`Unverified canonical knowledge: ${item.knowledgeId}`);
    if (!Array.isArray(item.sourceUnitIds) || item.sourceUnitIds.length === 0) throw new Error(`Missing source unit traceability: ${item.knowledgeId}`);
    if (!Array.isArray(item.sourceFactIds) || item.sourceFactIds.length === 0) throw new Error(`Missing source fact traceability: ${item.knowledgeId}`);
  }

  const countsByConcept = new Map();
  for (const item of knowledgeItems) countsByConcept.set(item.conceptId, (countsByConcept.get(item.conceptId) || 0) + 1);
  if (countsByConcept.get("takken-concept-business-definition") !== 3) throw new Error("Business-definition knowledge count changed unexpectedly");
  if (countsByConcept.get("takken-concept-license-required") !== 1) throw new Error("License-required knowledge coverage is incomplete");
  if (countsByConcept.get("takken-concept-license-authority") !== 2) throw new Error("License-authority knowledge coverage is incomplete");

  window.PowerTakkenKnowledgeItems = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
