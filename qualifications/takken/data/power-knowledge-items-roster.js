(() => {
  "use strict";

  const SOURCES = Object.freeze({
    takkenAct: Object.freeze({
      id: "egov-takken-act",
      label: "e-Gov法令検索『宅地建物取引業法』",
      url: "https://laws.e-gov.go.jp/law/327AC1000000176",
      sourceType: "statute"
    }),
    mlitRosterSearch: Object.freeze({
      id: "mlit-takken-roster-search",
      label: "国土交通省『宅地建物取引業者 検索』",
      url: "https://etsuran2.mlit.go.jp/TAKKEN/takkenKensaku.do",
      sourceType: "official_registry"
    }),
    mlitRosterDx: Object.freeze({
      id: "mlit-takken-roster-dx",
      label: "国土交通省『不動産分野におけるDXの推進について』",
      url: "https://www.mlit.go.jp/policy/shingikai/content/001710694.pdf",
      sourceType: "official_guidance"
    })
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-roster",
    sourceUnitIds: ["takken-gyoho-roster-signs"],
    sourceFactIds: ["u07-f1"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-roster-statutory-system",
      claim: "宅地建物取引業法には、免許を受けた宅地建物取引業者の情報を管理する宅地建物取引業者名簿の制度がある。",
      conditions: ["宅地建物取引業法に基づく宅地建物取引業者名簿であること"],
      exceptions: ["宅地建物取引士個人の資格登録簿とは別の制度である。"],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.mlitRosterSearch, SOURCES.mlitRosterDx]
    },
    {
      ...shared,
      knowledgeId: "takken-k-roster-maintained-by-licensing-authority",
      claim: "国土交通大臣または都道府県知事は、自ら免許をした宅地建物取引業者について宅地建物取引業者名簿を備える。",
      conditions: ["国土交通大臣免許業者については国土交通大臣側の名簿管理対象となること", "都道府県知事免許業者については当該都道府県知事側の名簿管理対象となること"],
      exceptions: [],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.mlitRosterDx]
    },
    {
      ...shared,
      knowledgeId: "takken-k-roster-license-identity-entries",
      claim: "宅地建物取引業者名簿には、免許証番号・免許年月日および商号または名称など、業者を特定する基本情報が記載される。",
      conditions: ["宅地建物取引業者名簿の記載事項であること"],
      exceptions: [],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.mlitRosterDx]
    },
    {
      ...shared,
      knowledgeId: "takken-k-roster-personnel-entries",
      claim: "宅地建物取引業者名簿には、法人では役員および政令で定める使用人、個人では本人および政令で定める使用人の氏名が記載される。",
      conditions: ["法人業者と個人業者で記載対象となる人物区分を区別すること"],
      exceptions: [],
      importance: "B",
      primarySources: [SOURCES.takkenAct, SOURCES.mlitRosterDx]
    },
    {
      ...shared,
      knowledgeId: "takken-k-roster-office-exclusive-takkenshi-entries",
      claim: "宅地建物取引業者名簿には、事務所の名称・所在地と、その事務所ごとに置かれる専任の宅地建物取引士に関する情報が記載される。",
      conditions: ["宅地建物取引業者の事務所に関する名簿記載事項であること"],
      exceptions: [],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.mlitRosterSearch, SOURCES.mlitRosterDx]
    },
    {
      ...shared,
      knowledgeId: "takken-k-roster-other-statutory-entries",
      claim: "宅地建物取引業者名簿には、法令上の認可に関する事項、行政処分に関する情報、宅建業以外に営む事業の種類なども記載事項となる。",
      conditions: ["各事項について法令上記載対象となる場合であること"],
      exceptions: [],
      importance: "B",
      primarySources: [SOURCES.takkenAct, SOURCES.mlitRosterDx]
    },
    {
      ...shared,
      knowledgeId: "takken-k-roster-public-inspection",
      claim: "国土交通大臣または都道府県知事は、法令の定めるところにより宅地建物取引業者名簿等を一般の閲覧に供する制度を設けている。",
      conditions: ["宅地建物取引業法10条の閲覧制度であること", "閲覧対象・方法は国土交通省令等の現行ルールに従うこと"],
      exceptions: ["個人情報保護等の観点から、公開・閲覧の対象や方法は制度改正の影響を受け得るため、年度更新時に再確認する。"],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.mlitRosterSearch, SOURCES.mlitRosterDx]
    }
  ];

  const ids = new Set();
  const allowedImportance = new Set(["A", "B", "C"]);
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate Power Takken roster knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (!item.knowledgeId.startsWith("takken-k-roster-")) throw new Error(`Invalid roster knowledge id: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-roster") throw new Error(`Unexpected roster concept id: ${item.knowledgeId}`);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01") throw new Error(`Invalid law version: ${item.knowledgeId}`);
    if (item.factcheckStatus !== "verified") throw new Error(`Unverified roster knowledge item: ${item.knowledgeId}`);
    if (!allowedImportance.has(item.importance)) throw new Error(`Invalid importance: ${item.knowledgeId}`);
    if (!Array.isArray(item.primarySources) || !item.primarySources.some((source) => source.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
    if (!item.sourceUnitIds.includes("takken-gyoho-roster-signs") || !item.sourceFactIds.includes("u07-f1")) throw new Error(`Invalid source traceability: ${item.knowledgeId}`);
  }

  if (knowledgeItems.length !== 7) throw new Error(`Expected 7 roster knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsRoster = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
