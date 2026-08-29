(() => {
  "use strict";

  const statute = Object.freeze({
    id: "egov-takken-act",
    label: "e-Gov法令検索『宅地建物取引業法』",
    url: "https://laws.e-gov.go.jp/law/327AC1000000176?occasion_date=20260401",
    sourceType: "statute"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-supervision-dispositions",
    sourceUnitIds: ["supervision-penalties"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-supervision-dispositions-instruction-license-authority",
      claim: "国土交通大臣または都道府県知事は、その免許を受けた宅建業者が宅建業法65条1項各号のいずれかに該当するとき、必要な指示をすることができる。",
      conditions: ["監督庁が当該宅建業者の免許権者であること", "宅建業法65条1項所定の事由があること"],
      exceptions: ["他の都道府県知事による区域内監督については宅建業法65条3項の別規定がある。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u33-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-supervision-dispositions-instruction-damage-risk",
      claim: "宅建業に関し取引関係者へ損害を与えたとき、または損害を与えるおそれが大きいときは、宅建業法65条1項による指示処分の対象となり得る。",
      conditions: ["宅建業に関する行為であること", "取引関係者への損害またはその大きなおそれがあること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u33-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-supervision-dispositions-instruction-fairness-risk",
      claim: "宅建業に関し取引の公正を害する行為をしたとき、またはそのおそれが大きいときは、宅建業法65条1項による指示処分の対象となり得る。",
      conditions: ["宅建業に関する行為であること", "取引の公正を害する行為またはその大きなおそれがあること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u33-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-supervision-dispositions-instruction-other-law-unsuitable",
      claim: "宅建業に関し他の法令に違反し、宅建業者として不適当と認められるときは、宅建業法65条1項による指示処分の対象となり得る。",
      conditions: ["宅建業に関する他法令違反があること", "宅建業者として不適当と認められること"],
      exceptions: [],
      importance: "B",
      primarySources: [statute],
      sourceFactIds: ["u33-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-supervision-dispositions-instruction-takkenshi-responsibility",
      claim: "宅建業者の宅建士が宅建業法68条の処分を受け、その処分原因について宅建業者に責めに帰すべき理由があるときは、宅建業者も65条1項の指示処分の対象となり得る。",
      conditions: ["当該宅建業者の宅地建物取引士が宅建業法68条の処分を受けたこと", "その原因について宅建業者に責めに帰すべき理由があること"],
      exceptions: [],
      importance: "B",
      primarySources: [statute],
      sourceFactIds: ["u33-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-supervision-dispositions-local-governor-instruction",
      claim: "都道府県知事は、国土交通大臣または他の都道府県知事の免許を受けた宅建業者でも、その都道府県内で行った業務について65条3項所定の事由があるときは必要な指示をすることができる。",
      conditions: ["当該都道府県の区域内で行った業務に関すること", "宅建業法65条3項所定の事由があること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u33-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-supervision-dispositions-business-suspension-one-year",
      claim: "宅建業法65条による業務停止処分は、1年以内の期間を定めて、業務の全部または一部の停止を命ずるものである。",
      conditions: ["宅建業法65条2項または4項所定の業務停止事由があること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u33-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-supervision-dispositions-business-suspension-statutory-violations",
      claim: "宅建業法65条2項が列挙する宅建業法上の義務違反等は、免許権者による業務停止処分の原因となり得る。",
      conditions: ["宅建業法65条2項所定の違反に該当すること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u33-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-supervision-dispositions-business-suspension-ignore-instruction",
      claim: "宅建業者が宅建業法65条1項または3項による指示に従わないときは、業務停止処分の原因となり得る。",
      conditions: ["有効な指示処分を受けていること", "その指示に従わないこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u33-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-supervision-dispositions-business-suspension-disposition-violation",
      claim: "宅建業者が宅建業法に基づく監督上の処分に違反したときは、宅建業法65条2項による業務停止処分の原因となり得る。",
      conditions: ["宅建業法に基づく監督上の処分があること", "その処分に違反したこと"],
      exceptions: ["業務停止命令そのものへの違反は、宅建業法66条1項の免許取消事由にもなり得る。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u33-f1", "u33-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-supervision-dispositions-business-suspension-fraud-gross-improper",
      claim: "宅建業に関し不正または著しく不当な行為をしたときは、宅建業法65条2項による業務停止処分の原因となり得る。",
      conditions: ["宅建業に関する不正または著しく不当な行為であること"],
      exceptions: ["事情が特に重い場合は宅建業法66条1項の免許取消事由となり得る。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u33-f1", "u33-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-supervision-dispositions-local-governor-business-suspension",
      claim: "都道府県知事は、国土交通大臣または他の都道府県知事の免許を受けた宅建業者についても、その都道府県内の業務に関して65条4項所定の事由があるときは、1年以内の期間を定めて業務の全部または一部の停止を命ずることができる。",
      conditions: ["当該都道府県の区域内で行った業務に関すること", "宅建業法65条4項所定の業務停止事由があること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u33-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-supervision-dispositions-mandatory-cancellation-framework",
      claim: "宅建業法66条1項各号のいずれかに該当するとき、免許権者はその宅建業者の免許を取り消さなければならない。",
      conditions: ["宅建業法66条1項所定の免許取消事由に該当すること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u33-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-supervision-dispositions-mandatory-cancellation-disqualification",
      claim: "免許取得後に宅建業法5条1項の所定の欠格事由へ該当するなど、66条1項が定める場合には免許取消しが必要となる。",
      conditions: ["宅建業法66条1項が参照する欠格事由等に該当すること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u33-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-supervision-dispositions-mandatory-cancellation-inactive-one-year",
      claim: "免許を受けてから1年以内に事業を開始しないとき、または引き続いて1年以上事業を休止したときは、宅建業法66条1項の免許取消事由となる。",
      conditions: ["免許後1年以内に事業を開始しないこと、または継続して1年以上事業を休止したこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u33-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-supervision-dispositions-mandatory-cancellation-fraud-license",
      claim: "不正の手段により宅建業の免許を受けたときは、宅建業法66条1項の免許取消事由となる。",
      conditions: ["不正の手段によって免許を取得したこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u33-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-supervision-dispositions-mandatory-cancellation-severe-or-suspension-violation",
      claim: "宅建業法65条2項各号の業務停止事由に該当し情状が特に重いとき、または65条2項・4項の業務停止処分に違反したときは、宅建業法66条1項の免許取消事由となる。",
      conditions: ["業務停止事由に該当して情状が特に重いこと、または業務停止処分に違反したこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u33-f1", "u33-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-supervision-dispositions-optional-cancellation-license-condition",
      claim: "宅建業者が宅建業法3条の2第1項により付された免許の条件に違反したとき、免許権者は宅建業法66条2項により免許を取り消すことができる。",
      conditions: ["宅建業法3条の2第1項に基づく免許条件が付されていること", "その条件に違反したこと"],
      exceptions: ["宅建業法66条1項の必要的取消しとは異なり、66条2項は『取り消すことができる』規定である。"],
      importance: "B",
      primarySources: [statute],
      sourceFactIds: ["u33-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate supervision-dispositions knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 18) throw new Error(`Expected 18 supervision-dispositions knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsSupervisionDispositions = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
