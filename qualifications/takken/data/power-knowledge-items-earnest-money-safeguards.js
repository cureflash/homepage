(() => {
  "use strict";

  const statute = Object.freeze({
    id: "egov-takken-act",
    label: "e-Gov法令検索『宅地建物取引業法』",
    url: "https://laws.e-gov.go.jp/law/327AC1000000176?occasion_date=20260401",
    sourceType: "statute"
  });

  const ministry = Object.freeze({
    id: "mlit-earnest-money-safeguards",
    label: "国土交通省『不動産取引における手付金等の保全について』",
    url: "https://www.mlit.go.jp/totikensangyo/const/1_6_bf_000013.html",
    sourceType: "government_guidance"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-earnest-money-safeguards",
    sourceUnitIds: ["earnest-money-and-safeguards"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-earnest-money-safeguards-self-seller-nonbroker-scope",
      claim: "宅建業法41条・41条の2の手付金等保全措置は、宅建業者が自ら売主となる宅地・建物の売買で、買主が宅建業者ではない場合に適用される。",
      conditions: ["宅建業者が自ら売主となる宅地または建物の売買であること", "買主が宅建業者ではないこと"],
      exceptions: ["宅建業者相互間の取引では、宅建業法78条2項により41条・41条の2は適用されない。"],
      importance: "A",
      primarySources: [statute, ministry],
      sourceFactIds: ["u27-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-earnest-money-safeguards-before-receipt",
      claim: "保全措置が必要な場合、宅建業者は所定の保全措置を講じた後でなければ買主から手付金等を受領してはならず、措置がなければ買主は支払いを拒むことができる。",
      conditions: ["41条または41条の2の保全措置義務が生じる手付金等であること"],
      exceptions: ["法定の保全措置不要要件に該当する場合はこの限りでない。"],
      importance: "A",
      primarySources: [statute, ministry],
      sourceFactIds: ["u27-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-earnest-money-safeguards-unfinished-exemption",
      claim: "工事完了前の物件では、受領しようとする手付金等と既受領額の合計が代金の5%以下かつ1,000万円以下であれば、手付金等の保全措置は不要である。",
      conditions: ["宅地の造成または建築工事の完了前の売買であること", "手付金等の累計額が代金額の5%以下であること", "手付金等の累計額が1,000万円以下であること"],
      exceptions: ["5%以下でも1,000万円を超える場合、または1,000万円以下でも5%を超える場合は、この金額基準による免除にはならない。"],
      importance: "A",
      primarySources: [statute, ministry],
      sourceFactIds: ["u27-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-earnest-money-safeguards-completed-exemption",
      claim: "工事完了後の物件では、受領しようとする手付金等と既受領額の合計が代金の10%以下かつ1,000万円以下であれば、手付金等の保全措置は不要である。",
      conditions: ["工事完了後の宅地または建物の売買であること", "手付金等の累計額が代金額の10%以下であること", "手付金等の累計額が1,000万円以下であること"],
      exceptions: ["10%以下でも1,000万円を超える場合、または1,000万円以下でも10%を超える場合は、この金額基準による免除にはならない。"],
      importance: "A",
      primarySources: [statute, ministry],
      sourceFactIds: ["u27-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-earnest-money-safeguards-registration-exemption",
      claim: "買主への所有権移転登記がされた場合、または買主が所有権の登記をした場合には、41条・41条の2の手付金等保全措置は不要となる。",
      conditions: ["対象宅地または建物について買主の所有権登記が済んでいること"],
      exceptions: [],
      importance: "B",
      primarySources: [statute],
      sourceFactIds: ["u27-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-earnest-money-safeguards-unfinished-methods",
      claim: "工事完了前の物件で保全措置が必要な場合、法41条所定の保証措置または保険措置を講じる。",
      conditions: ["工事完了前の売買であること", "法定の保全措置不要要件に該当しないこと"],
      exceptions: ["完成物件で認められる指定保管機関による保管措置は、工事完了前の41条の保全方法には含まれない。"],
      importance: "A",
      primarySources: [statute, ministry],
      sourceFactIds: ["u27-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-earnest-money-safeguards-completed-methods",
      claim: "工事完了後の物件で保全措置が必要な場合、保証措置・保険措置に加えて、指定保管機関による保管措置を利用できる。",
      conditions: ["工事完了後の売買であること", "法定の保全措置不要要件に該当しないこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute, ministry],
      sourceFactIds: ["u27-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate earnest-money-safeguards knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 7) throw new Error(`Expected 7 earnest-money-safeguards knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsEarnestMoneySafeguards = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
