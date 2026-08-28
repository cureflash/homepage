(() => {
  "use strict";

  const SOURCES = Object.freeze({
    takkenAct: Object.freeze({
      id: "egov-takken-act",
      label: "e-Gov法令検索『宅地建物取引業法』",
      url: "https://laws.e-gov.go.jp/law/327AC1000000176",
      sourceType: "statute"
    }),
    osakaRegistration: Object.freeze({
      id: "osaka-takkenshi-registration",
      label: "大阪府『宅地建物取引士資格登録申請』",
      url: "https://www.pref.osaka.lg.jp/menkyo/o130200/0002947.html",
      sourceType: "official_guidance"
    }),
    kyotoProcedures: Object.freeze({
      id: "kyoto-takkenshi-procedures",
      label: "京都府『宅地建物取引士に関する諸手続』",
      url: "https://www.pref.kyoto.jp/kenchiku/16000030.html",
      sourceType: "official_guidance"
    })
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-takkenshi-registration",
    sourceUnitIds: ["takken-shi-registration"],
    sourceFactIds: ["u08-f1"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-takkenshi-registration-stages-separate",
      claim: "宅地建物取引士制度では、資格試験への合格、資格登録、宅地建物取引士証の交付はそれぞれ別の手続段階である。",
      conditions: ["宅地建物取引士として業務に従事するまでの制度上の段階を区別すること"],
      exceptions: ["資格試験への合格だけで資格登録や宅地建物取引士証の交付まで完了するわけではない。"],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.kyotoProcedures]
    },
    {
      ...shared,
      knowledgeId: "takken-k-takkenshi-registration-exam-prefecture-governor",
      claim: "宅地建物取引士の資格登録は、宅地建物取引士資格試験に合格した都道府県の知事に申請する。",
      conditions: ["宅地建物取引士資格試験の合格者であること", "資格登録の新規申請であること"],
      exceptions: ["合格後に他の都道府県へ転居しただけでは、新規登録の申請先が現在住所地の都道府県へ変わるわけではない。"],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.osakaRegistration, SOURCES.kyotoProcedures]
    },
    {
      ...shared,
      knowledgeId: "takken-k-takkenshi-registration-experience-or-equivalent",
      claim: "資格登録を受けるには、原則として登録申請前10年以内に宅地建物取引業の実務経験を2年以上有するか、登録実務講習の修了など法令上これと同等に扱われる要件を満たす必要がある。",
      conditions: ["宅地建物取引士資格試験の合格者であること", "登録申請前10年以内の実務経験等として法令上認められること", "宅地建物取引業の一般管理業務だけの経験は実務経験に含めない"],
      exceptions: ["国土交通大臣の登録を受けた機関が実施する登録実務講習の修了者等は、2年以上の通常の宅建業実務経験がなくても法令上の要件を満たし得る。"],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.osakaRegistration, SOURCES.kyotoProcedures]
    },
    {
      ...shared,
      knowledgeId: "takken-k-takkenshi-registration-needed-for-practice-not-pass-validity",
      claim: "宅地建物取引士として業務に従事するには資格登録を受ける必要があるが、業務に従事する予定がなければ直ちに登録する義務はなく、登録しないことだけで資格試験の合格が無効になるわけではない。",
      conditions: ["宅地建物取引士として業務に従事するか否かを区別すること"],
      exceptions: ["宅地建物取引士として業務に従事する場合は、資格登録だけでなく宅地建物取引士証の交付も必要となる。"],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.kyotoProcedures]
    }
  ];

  const ids = new Set();
  const allowedImportance = new Set(["A", "B", "C"]);
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate Power Takken takkenshi-registration knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (!item.knowledgeId.startsWith("takken-k-takkenshi-registration-")) throw new Error(`Invalid takkenshi-registration knowledge id: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-takkenshi-registration") throw new Error(`Unexpected takkenshi-registration concept id: ${item.knowledgeId}`);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01") throw new Error(`Invalid law version: ${item.knowledgeId}`);
    if (item.factcheckStatus !== "verified") throw new Error(`Unverified takkenshi-registration knowledge item: ${item.knowledgeId}`);
    if (!allowedImportance.has(item.importance)) throw new Error(`Invalid importance: ${item.knowledgeId}`);
    if (!Array.isArray(item.primarySources) || !item.primarySources.some((source) => source.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
    if (!item.sourceUnitIds.includes("takken-shi-registration") || !item.sourceFactIds.includes("u08-f1")) throw new Error(`Invalid source traceability: ${item.knowledgeId}`);
  }

  if (knowledgeItems.length !== 4) throw new Error(`Expected 4 takkenshi-registration knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsTakkenshiRegistration = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();