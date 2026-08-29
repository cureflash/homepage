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
    conceptId: "takken-concept-eight-restrictions-scope",
    sourceUnitIds: ["eight-restrictions-overview"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-eight-restrictions-scope-self-seller",
      claim: "いわゆる8種制限は、宅地建物取引業者が宅地または建物の売買で自ら売主となる場面を中心に、買主保護のために設けられた規制である。",
      conditions: ["宅地建物取引業者が自ら売主となる宅地または建物の売買であること"],
      exceptions: ["各条文には個別の適用要件があるため、すべての規制が常に一律に適用されるわけではない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u25-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-eight-restrictions-scope-buyer-non-broker",
      claim: "宅建業法37条の2から43条までの自ら売主に関する規制は、売主・買主の双方が宅地建物取引業者である取引には適用されないため、典型的な適用場面は買主が宅地建物取引業者でない場合である。",
      conditions: ["売主が宅地建物取引業者であること", "37条の2から43条までの規定の適用を判断すること"],
      exceptions: ["宅地建物取引業者相互間の取引では、宅建業法78条2項により37条の2から43条までの規定は適用されない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u25-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-eight-restrictions-scope-not-agency-brokerage-lease",
      claim: "8種制限は宅建業者が自ら売主となる売買を対象とする規制群であり、宅建業者が代理・媒介をするだけの取引や、自ら賃貸人となる賃貸借を8種制限の適用場面として扱わない。",
      conditions: ["取引態様が自ら売主か、代理・媒介か、自ら賃貸かを区別すること"],
      exceptions: ["代理・媒介や賃貸借には、35条・37条その他の別の宅建業法上の規制が適用され得る。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u25-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-eight-restrictions-scope-regulation-family",
      claim: "宅建業法37条の2から43条までには、申込みの撤回等、損害賠償額の予定等、手付、契約不適合責任に関する特約、手付金等の保全、割賦販売に関する制限など、自ら売主となる宅建業者に対する買主保護規制が置かれている。",
      conditions: ["37条の2から43条までの規制群の全体像を把握すること"],
      exceptions: ["個々の制度の具体的な要件・期限・金額は、それぞれの専用conceptで扱う。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u25-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-eight-restrictions-scope-adverse-special-terms",
      claim: "自ら売主となる宅建業者への買主保護規制には、法定の保護より買主に不利な特約を無効とする規定が複数あり、契約で自由に買主保護を排除できるわけではない。",
      conditions: ["各規定が買主に不利な特約の効力を制限しているかを個別に確認すること"],
      exceptions: ["すべての37条の2から43条までの規定が同一の文言・方式で特約無効を定めているわけではない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u25-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate eight-restrictions scope knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 5) throw new Error(`Expected 5 eight-restrictions scope knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsEightRestrictionsScope = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
