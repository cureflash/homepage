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
    }),
    nagasakiLicense: Object.freeze({
      id: "nagasaki-takken-license",
      label: "長崎県『宅地建物取引業の免許とは』",
      url: "https://www.pref.nagasaki.lg.jp/doc/page-349751.html",
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
    },
    {
      ...shared,
      conceptId: "takken-concept-license-disqualification",
      knowledgeId: "takken-k-license-disqualification-cancellation-five-years",
      claim: "宅地建物取引業法66条1項8号または9号に該当して免許を取り消された者は、その取消しの日から5年を経過しない間、免許を受けることができない。",
      conditions: ["宅地建物取引業法66条1項8号または9号に該当することを理由に免許を取り消されたこと", "取消しの日から5年を経過していないこと"],
      exceptions: ["免許取消しであれば理由を問わず永久に欠格となるわけではない。"],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.mlitLicense],
      sourceUnitIds: ["takken-gyoho-license-disqualification"],
      sourceFactIds: ["u04-f1"]
    },
    {
      ...shared,
      conceptId: "takken-concept-license-disqualification",
      knowledgeId: "takken-k-license-disqualification-hearing-closure-five-years",
      claim: "宅地建物取引業法66条1項8号または9号に該当するとして免許取消処分の聴聞が公示された後、処分前に一定の廃業等の届出をした者は、相当の理由がある場合を除き、その届出の日から5年を経過しない間、免許を受けることができない。",
      conditions: ["免許取消処分の聴聞の期日および場所が公示された後の届出であること", "宅地建物取引業法5条1項3号が定める期間内の一定の届出であること", "届出の日から5年を経過していないこと"],
      exceptions: ["解散または宅地建物取引業の廃止について相当の理由がある場合は、この欠格事由から除外される。"],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.mlitLicense],
      sourceUnitIds: ["takken-gyoho-license-disqualification"],
      sourceFactIds: ["u04-f1"]
    },
    {
      ...shared,
      conceptId: "takken-concept-license-disqualification",
      knowledgeId: "takken-k-license-disqualification-criminal-sentence-five-years",
      claim: "拘禁刑以上の刑に処せられた者、または宅地建物取引業法違反等の法定の罪により罰金刑に処せられた者は、刑の執行を終わり、または執行を受けることがなくなった日から5年を経過しない間、免許を受けることができない。",
      conditions: ["拘禁刑以上の刑、または宅地建物取引業法5条1項6号が列挙する違反・罪による罰金刑であること", "刑の執行を終わり、または執行を受けることがなくなった日から5年を経過していないこと"],
      exceptions: ["罰金刑はすべて一律に5年間の欠格となるのではなく、同号が定める違反・罪によるものが対象となる。"],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.mlitLicense],
      sourceUnitIds: ["takken-gyoho-license-disqualification"],
      sourceFactIds: ["u04-f1"]
    },
    {
      ...shared,
      conceptId: "takken-concept-license-disqualification",
      knowledgeId: "takken-k-license-disqualification-misconduct-prior-five-years",
      claim: "免許の申請前5年以内に宅地建物取引業に関し不正または著しく不当な行為をした者は、免許を受けることができない。",
      conditions: ["宅地建物取引業に関する不正または著しく不当な行為であること", "その行為が免許申請前5年以内にあること"],
      exceptions: [],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.mlitLicense],
      sourceUnitIds: ["takken-gyoho-license-disqualification"],
      sourceFactIds: ["u04-f1"]
    },
    {
      ...shared,
      conceptId: "takken-concept-license-validity-renewal",
      knowledgeId: "takken-k-license-validity-five-years",
      claim: "宅地建物取引業免許の有効期間は5年である。",
      conditions: ["宅地建物取引業法3条1項の免許であること"],
      exceptions: [],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.nagasakiLicense],
      sourceUnitIds: ["takken-gyoho-license-validity-renewal"],
      sourceFactIds: ["u05-f1"]
    },
    {
      ...shared,
      conceptId: "takken-concept-license-validity-renewal",
      knowledgeId: "takken-k-license-renewal-application-window",
      claim: "宅建業免許の有効期間満了後も引き続き宅地建物取引業を営もうとする場合、更新申請は有効期間満了日の90日前から30日前までに行う。",
      conditions: ["現在の免許の有効期間満了後も引き続き宅地建物取引業を営もうとすること", "更新申請であること"],
      exceptions: ["有効期間満了後に引き続き営まない場合は更新を受ける必要はない。"],
      importance: "A",
      primarySources: [SOURCES.takkenAct, SOURCES.nagasakiLicense],
      sourceUnitIds: ["takken-gyoho-license-validity-renewal"],
      sourceFactIds: ["u05-f2"]
    }
  ];

  const knownConceptIds = new Set([
    "takken-concept-business-definition",
    "takken-concept-license-required",
    "takken-concept-license-authority",
    "takken-concept-license-disqualification",
    "takken-concept-license-validity-renewal"
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
  if (countsByConcept.get("takken-concept-license-disqualification") !== 4) throw new Error("License-disqualification knowledge coverage is incomplete");
  if (countsByConcept.get("takken-concept-license-validity-renewal") !== 2) throw new Error("License-validity-renewal knowledge coverage is incomplete");

  window.PowerTakkenKnowledgeItems = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
