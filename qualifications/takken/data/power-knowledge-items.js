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

  const base = Object.freeze({
    conceptId: "takken-concept-business-definition",
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified"
  });

  const knowledgeItems = [
    {
      ...base,
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
      ...base,
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
      ...base,
      knowledgeId: "takken-k-business-definition-self-lease-exclusion",
      claim: "宅地または建物を所有者が自ら貸主として賃貸する行為そのものは、宅地建物取引業法2条2号の宅地建物取引業の定義には含まれない。",
      conditions: ["所有者等が自ら貸主となる賃貸であること", "他人の貸借を代理・媒介する行為ではないこと"],
      exceptions: ["他人の貸借を代理または媒介して業として行う場合は宅地建物取引業に含まれる。"],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.mlitLicense],
      sourceUnitIds: ["takken-gyoho-definition"],
      sourceFactIds: ["u01-f1", "u01-f2"]
    }
  ];

  const ids = new Set();
  const allowedImportance = new Set(["A", "B", "C"]);
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate Power Takken knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (!item.knowledgeId.startsWith("takken-k-")) throw new Error(`Invalid Power Takken knowledge id: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-business-definition") throw new Error(`Unexpected concept mapping: ${item.knowledgeId}`);
    if (!item.claim || !Array.isArray(item.conditions) || !Array.isArray(item.exceptions)) throw new Error(`Invalid knowledge payload: ${item.knowledgeId}`);
    if (!allowedImportance.has(item.importance)) throw new Error(`Invalid importance: ${item.knowledgeId}`);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01") throw new Error(`Invalid law version: ${item.knowledgeId}`);
    if (!Array.isArray(item.primarySources) || item.primarySources.length === 0) throw new Error(`Missing primary sources: ${item.knowledgeId}`);
    if (!item.primarySources.some((source) => source.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
    if (item.factcheckStatus !== "verified") throw new Error(`Unverified canonical knowledge: ${item.knowledgeId}`);
  }

  window.PowerTakkenKnowledgeItems = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
