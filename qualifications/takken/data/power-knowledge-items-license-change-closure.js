(() => {
  "use strict";

  const SOURCES = Object.freeze({
    takkenAct: Object.freeze({
      id: "egov-takken-act",
      label: "e-Gov法令検索『宅地建物取引業法』",
      url: "https://laws.e-gov.go.jp/law/327AC1000000176",
      sourceType: "statute"
    }),
    kantoClosureGuide: Object.freeze({
      id: "kanto-takken-closure-guide-2025",
      label: "関東地方整備局『宅地建物取引業者免許申請の手引き（廃業等届出書）』",
      url: "https://www.ktr.mlit.go.jp/ktr_content/content/000906656.pdf",
      sourceType: "official_guidance"
    })
  });

  const shared = Object.freeze({
    conceptId: "takken-concept-license-change-closure",
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    sourceUnitIds: ["takken-gyoho-license-change-closure"],
    primarySources: [SOURCES.takkenAct, SOURCES.kantoClosureGuide]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-license-change-notice-thirty-days",
      claim: "宅地建物取引業者名簿の法定の登載事項に変更があった宅建業者は、変更があった日から30日以内に、その旨を免許権者へ届け出なければならない。",
      conditions: ["宅地建物取引業法8条2項2号から6号までの事項に変更があること", "宅地建物取引業者自身による変更届であること"],
      exceptions: ["免許換えが必要となる事務所所在地の変更は、単なる変更届だけで完結しない場合がある。"],
      importance: "A",
      sourceFactIds: ["u06-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-license-closure-death-heir-thirty-days-from-knowledge",
      claim: "個人の宅建業者が死亡した場合、その相続人は死亡の事実を知った日から30日以内に届け出なければならない。",
      conditions: ["免許を受けた宅建業者が個人であること", "その宅建業者が死亡したこと", "届出人が相続人であること"],
      exceptions: ["死亡以外の廃業等では、届出主体と30日の起算点が別に定められる。"],
      importance: "A",
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-license-closure-merger-former-representative-thirty-days",
      claim: "法人の宅建業者が合併により消滅した場合、その法人を代表する役員であった者は、合併の日から30日以内に届け出なければならない。",
      conditions: ["免許を受けた宅建業者が法人であること", "合併により法人が消滅したこと", "届出人がその法人を代表する役員であった者であること"],
      exceptions: [],
      importance: "A",
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-license-closure-bankruptcy-trustee-thirty-days",
      claim: "宅建業者について破産手続開始の決定があった場合、破産管財人はその日から30日以内に届け出なければならない。",
      conditions: ["宅建業者について破産手続開始の決定があったこと", "届出人が破産管財人であること"],
      exceptions: [],
      importance: "A",
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-license-closure-dissolution-liquidator-thirty-days",
      claim: "法人の宅建業者が合併または破産手続開始以外の理由で解散した場合、清算人は解散の日から30日以内に届け出なければならない。",
      conditions: ["免許を受けた宅建業者が法人であること", "合併または破産手続開始以外の理由による解散であること", "届出人が清算人であること"],
      exceptions: [],
      importance: "A",
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-license-closure-business-abolition-former-licensee-thirty-days",
      claim: "宅建業を廃止した場合、宅建業者であった個人または法人を代表する役員は、廃止の日から30日以内に届け出なければならない。",
      conditions: ["宅地建物取引業そのものを廃止したこと", "個人の場合は宅建業者であった者、法人の場合は法人を代表する役員が届け出ること"],
      exceptions: ["法人自体が消滅・解散する場合は、それぞれ合併、破産、解散の届出主体に関する規定が適用される。"],
      importance: "A",
      sourceFactIds: []
    },
    {
      ...shared,
      knowledgeId: "takken-k-license-closure-license-effect-timing",
      claim: "死亡または合併による消滅ではその事実が生じた時に免許が失効し、破産・解散・宅建業廃止では廃業等の届出があった時に免許が失効する。",
      conditions: ["宅地建物取引業法11条の廃業等に該当すること"],
      exceptions: ["すべての廃業等で届出時に一律失効するわけではない。死亡・合併消滅は事実発生時に失効する。"],
      importance: "A",
      sourceFactIds: []
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate license-change-closure knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (!item.knowledgeId.startsWith("takken-k-license-")) throw new Error(`Invalid license-change-closure knowledge id: ${item.knowledgeId}`);
    if (item.conceptId !== "takken-concept-license-change-closure") throw new Error(`Unexpected concept: ${item.knowledgeId}`);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01") throw new Error(`Wrong law version: ${item.knowledgeId}`);
    if (item.factcheckStatus !== "verified") throw new Error(`Unverified knowledge item: ${item.knowledgeId}`);
    if (!item.primarySources.some((source) => source.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
    if (!item.sourceUnitIds.includes("takken-gyoho-license-change-closure")) throw new Error(`Missing source-unit traceability: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 7) throw new Error(`Expected 7 license-change-closure knowledge items, got ${knowledgeItems.length}`);

  // Existing q06-001 directly tests only the 30-day change-notice rule.
  // The six closure/abolition rules remain explicit Phase 4.3 question-coverage gaps.
  const existingVerifiedQuestionEvidence = Object.freeze([
    Object.freeze({
      questionId: "takken-q-06-001",
      knowledgeRefs: Object.freeze(["takken-k-license-change-notice-thirty-days"])
    })
  ]);

  window.PowerTakkenLicenseChangeClosureKnowledgeItems = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
  window.PowerTakkenLicenseChangeClosureExistingEvidence = existingVerifiedQuestionEvidence;
})();
