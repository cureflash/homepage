(() => {
  "use strict";

  const SOURCES = Object.freeze({
    takkenAct: Object.freeze({
      id: "egov-takken-act",
      label: "e-Gov法令検索『宅地建物取引業法』",
      url: "https://laws.e-gov.go.jp/law/327AC1000000176",
      sourceType: "statute"
    }),
    osakaLicenseTransfer: Object.freeze({
      id: "osaka-license-transfer",
      label: "大阪府『宅地建物取引業者の免許換えのオンライン申請について』",
      url: "https://www.pref.osaka.lg.jp/o130200/menkyo/takkenmenkyo/takkenmenkyogaeonline.html",
      sourceType: "official_guidance"
    })
  });

  const shared = Object.freeze({
    conceptId: "takken-concept-license-transfer",
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    sourceUnitIds: ["takken-gyoho-license-change-closure"],
    sourceFactIds: [],
    primarySources: [SOURCES.takkenAct, SOURCES.osakaLicenseTransfer]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-license-transfer-minister-to-governor",
      claim: "国土交通大臣免許の宅建業者が、事務所を一の都道府県の区域内にのみ有することとなり、引き続き宅建業を営もうとする場合は、その都道府県知事の免許を受ける免許換えが必要となる。",
      conditions: ["従前が国土交通大臣免許であること", "変更後の事務所が一の都道府県内だけになること", "引き続き宅地建物取引業を営むこと"],
      exceptions: ["宅地建物取引業を廃止する場合は、引き続き営むための免許換えではなく廃業等の手続が問題となる。"],
      importance: "A"
    },
    {
      ...shared,
      knowledgeId: "takken-k-license-transfer-governor-to-other-governor",
      claim: "都道府県知事免許の宅建業者が、その都道府県内の事務所を廃止し、他の一の都道府県内に事務所を設置して引き続き宅建業を営もうとする場合は、移転先の都道府県知事の免許を受ける免許換えが必要となる。",
      conditions: ["従前が都道府県知事免許であること", "従前の都道府県内の事務所を廃止すること", "他の一の都道府県内に事務所を設置すること", "引き続き宅地建物取引業を営むこと"],
      exceptions: ["従前の都道府県にも事務所を残し、他都道府県にも事務所を設ける場合は国土交通大臣免許への免許換えの類型となる。"],
      importance: "A"
    },
    {
      ...shared,
      knowledgeId: "takken-k-license-transfer-governor-to-minister",
      claim: "都道府県知事免許の宅建業者が、二以上の都道府県の区域内に事務所を有することとなり、引き続き宅建業を営もうとする場合は、国土交通大臣の免許を受ける免許換えが必要となる。",
      conditions: ["従前が都道府県知事免許であること", "変更後に事務所が二以上の都道府県に所在すること", "引き続き宅地建物取引業を営むこと"],
      exceptions: ["事務所が一の都道府県内だけにとどまる場合は国土交通大臣免許への免許換えにはならない。"],
      importance: "A"
    },
    {
      ...shared,
      knowledgeId: "takken-k-license-transfer-old-license-loses-effect",
      claim: "免許換えにより新たな国土交通大臣または都道府県知事の免許を受けたときは、従前の免許はその効力を失う。",
      conditions: ["宅地建物取引業法7条の免許換えに該当すること", "新たな免許を受けたこと"],
      exceptions: ["新免許を受ける前に当然に従前免許が失効するという規定ではない。"],
      importance: "A"
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate license-transfer knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (!item.knowledgeId.startsWith("takken-k-license-transfer-")) throw new Error(`Invalid license-transfer knowledge id: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-license-transfer") throw new Error(`Unexpected concept: ${item.knowledgeId}`);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01") throw new Error(`Wrong law version: ${item.knowledgeId}`);
    if (item.factcheckStatus !== "verified") throw new Error(`Unverified knowledge item: ${item.knowledgeId}`);
    if (!item.primarySources.some((source) => source.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
    if (!Array.isArray(item.sourceUnitIds) || !item.sourceUnitIds.includes("takken-gyoho-license-change-closure")) throw new Error(`Missing source-unit traceability: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 4) throw new Error(`Expected 4 license-transfer knowledge items, got ${knowledgeItems.length}`);

  // Phase 2/3 has no verified question that directly tests these four license-transfer rules.
  // takken-q-06-001 tests only the 30-day change-notice rule and is intentionally reserved
  // for takken-concept-license-change-closure rather than being falsely mapped here.
  const existingVerifiedQuestionEvidence = Object.freeze([]);

  window.PowerTakkenLicenseTransferKnowledgeItems = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
  window.PowerTakkenLicenseTransferExistingEvidence = existingVerifiedQuestionEvidence;
})();
