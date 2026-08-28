(() => {
  "use strict";

  const SOURCES = Object.freeze({
    takkenAct: Object.freeze({
      id: "egov-takken-act",
      label: "e-Gov法令検索『宅地建物取引業法』",
      url: "https://laws.e-gov.go.jp/law/327AC1000000176",
      sourceType: "statute"
    }),
    osakaCard: Object.freeze({
      id: "osaka-takkenshi-card",
      label: "大阪府『宅地建物取引士証の交付申請』",
      url: "https://www.pref.osaka.lg.jp/menkyo/o130200/0002949.html",
      sourceType: "official_guidance"
    }),
    kyotoProcedures: Object.freeze({
      id: "kyoto-takkenshi-procedures",
      label: "京都府『宅地建物取引士に関する諸手続』",
      url: "https://www.pref.kyoto.jp/kenchiku/16000030.html",
      sourceType: "official_guidance"
    }),
    osakaImportantMatters: Object.freeze({
      id: "osaka-important-matters-card-presentation",
      label: "大阪府『契約の際には、こんな注意を』",
      url: "https://www.pref.osaka.lg.jp/o130200/kenshin/chotto_chintai/chui.html",
      sourceType: "official_guidance"
    })
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-takkenshi-card",
    sourceUnitIds: ["takken-shi-card"],
    sourceFactIds: ["u09-f1"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-takkenshi-card-registration-and-issuance",
      claim: "宅地建物取引士として業務に従事するには、資格登録を受けたうえで宅地建物取引士証の交付を受ける必要があり、取引士証は登録後の申請により交付される。",
      conditions: ["宅地建物取引士資格登録が完了していること", "宅地建物取引士として業務に従事しようとすること"],
      exceptions: ["宅地建物取引士として業務に従事しない登録者は、常に取引士証の交付を受け続けなければならないわけではない。"],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.osakaCard, SOURCES.kyotoProcedures]
    },
    {
      ...shared,
      knowledgeId: "takken-k-takkenshi-card-validity-five-years",
      claim: "宅地建物取引士証の有効期間は5年であり、申請により更新できる。",
      conditions: ["有効な宅地建物取引士証についての有効期間であること"],
      exceptions: ["資格試験の合格や資格登録そのものに5年の有効期間があるという意味ではない。"],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.osakaCard, SOURCES.kyotoProcedures]
    },
    {
      ...shared,
      knowledgeId: "takken-k-takkenshi-card-statutory-training",
      claim: "宅地建物取引士証の交付または更新を受ける者は、原則として交付申請前6か月以内に都道府県知事が指定する法定講習を受講する必要がある。",
      conditions: ["宅地建物取引士証の新規交付または有効期間更新の申請であること", "法定講習は都道府県知事が指定する講習であること"],
      exceptions: ["宅地建物取引士資格試験の合格日から1年以内に取引士証の交付を申請する者は、法定講習の受講義務が免除される。"],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.kyotoProcedures]
    },
    {
      ...shared,
      knowledgeId: "takken-k-takkenshi-card-presentation-important-matters",
      claim: "宅地建物取引士が重要事項説明を行うときは、相手方から請求がなくても宅地建物取引士証を提示しなければならない。",
      conditions: ["宅地建物取引業法35条の重要事項説明を行う場面であること", "説明を行う者が宅地建物取引士であること"],
      exceptions: ["一般の取引関係者への提示義務が請求を契機とする場合と異なり、重要事項説明時の提示は請求の有無を問わない。"],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.osakaImportantMatters]
    },
    {
      ...shared,
      knowledgeId: "takken-k-takkenshi-card-presentation-on-request",
      claim: "宅地建物取引士は、宅地建物取引業者の業務に従事しているとき、取引の関係者から請求があった場合には宅地建物取引士証を提示しなければならない。",
      conditions: ["宅地建物取引業者の業務に従事している宅地建物取引士であること", "取引の関係者から宅地建物取引士証の提示請求があること"],
      exceptions: ["重要事項説明時は、相手方からの請求を待たずに取引士証を提示する必要がある。"],
      importance: "A",
      primarySources: [SOURCES.takkenAct]
    }
  ];

  const ids = new Set();
  const allowedImportance = new Set(["A", "B", "C"]);
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate Power Takken takkenshi-card knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (!item.knowledgeId.startsWith("takken-k-takkenshi-card-")) throw new Error(`Invalid takkenshi-card knowledge id: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-takkenshi-card") throw new Error(`Unexpected takkenshi-card concept id: ${item.knowledgeId}`);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01") throw new Error(`Invalid law version: ${item.knowledgeId}`);
    if (item.factcheckStatus !== "verified") throw new Error(`Unverified takkenshi-card knowledge item: ${item.knowledgeId}`);
    if (!allowedImportance.has(item.importance)) throw new Error(`Invalid importance: ${item.knowledgeId}`);
    if (!Array.isArray(item.primarySources) || !item.primarySources.some((source) => source.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
    if (!item.sourceUnitIds.includes("takken-shi-card") || !item.sourceFactIds.includes("u09-f1")) throw new Error(`Invalid source traceability: ${item.knowledgeId}`);
  }

  if (knowledgeItems.length !== 5) throw new Error(`Expected 5 takkenshi-card knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsTakkenshiCard = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();