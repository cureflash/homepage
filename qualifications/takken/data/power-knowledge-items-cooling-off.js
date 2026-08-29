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
    conceptId: "takken-concept-cooling-off",
    sourceUnitIds: ["cooling-off"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-cooling-off-outside-office-scope",
      claim: "宅建業者が自ら売主となる宅地・建物の売買で、買主側が事務所等以外の場所で買受けの申込みをした場合等には、宅建業法37条の2による申込みの撤回または売買契約の解除が認められ得る。",
      conditions: ["宅建業者が自ら売主となる宅地または建物の売買であること", "買受けの申込み等が法37条の2の対象となる場所で行われていること"],
      exceptions: ["事務所等で買受けの申込みをした後、事務所等以外の場所で売買契約を締結した買主は、この規定による撤回等の対象から除かれる。", "宅建業者相互間の取引では法78条2項により法37条の2は適用されない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u26-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-cooling-off-application-place-controls",
      claim: "事務所等で買受けの申込みをした買主は、その後に事務所等以外の場所で売買契約を締結しても、宅建業法37条の2によるクーリング・オフをすることができない。",
      conditions: ["買受けの申込みをした場所と売買契約を締結した場所が異なる場合の適用可否を判断すること"],
      exceptions: ["事務所等以外で申込みをした場合には、別途、期間経過や履行完了などの適用除外を確認する。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u26-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-cooling-off-written-withdrawal",
      claim: "宅建業法37条の2による申込みの撤回等は、書面により行う。",
      conditions: ["法37条の2による申込みの撤回または売買契約の解除を行うこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u26-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-cooling-off-eight-days",
      claim: "申込者等が申込みの撤回等を行うことができる旨およびその方法について法定の方法で告げられた場合、その告げられた日から起算して8日を経過すると、宅建業法37条の2による撤回等はできなくなる。",
      conditions: ["申込みの撤回等ができる旨とその方法について法定の方法による告知があること"],
      exceptions: ["8日の経過前でも、引渡しを受け、かつ代金全額を支払った場合は撤回等ができなくなる。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u26-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-cooling-off-delivery-full-payment",
      claim: "申込者等が宅地または建物の引渡しを受け、かつ代金の全部を支払ったときは、宅建業法37条の2による申込みの撤回等はできない。",
      conditions: ["引渡しと代金全額支払いの双方が完了していること"],
      exceptions: ["引渡しだけ、または代金全額支払いだけでは、この適用除外要件を満たさない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u26-f1", "u26-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-cooling-off-dispatch-effect",
      claim: "宅建業法37条の2による申込みの撤回等は、申込者等が撤回等の書面を発した時に効力を生ずる。",
      conditions: ["法37条の2による撤回等を書面で行うこと"],
      exceptions: ["相手方への到達時を効力発生時とする到達主義ではない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u26-f1", "u26-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-cooling-off-no-damages-penalty",
      claim: "宅建業法37条の2による申込みの撤回等が行われる場合、売主である宅建業者は、その撤回等に伴う損害賠償または違約金の支払を請求できない。",
      conditions: ["法37条の2に基づく有効な申込みの撤回等であること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u26-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-cooling-off-refund-money",
      claim: "宅建業法37条の2による申込みの撤回等が行われた場合、宅建業者は、申込みまたは契約締結に際して受領した手付金その他の金銭を速やかに返還しなければならない。",
      conditions: ["法37条の2による申込みの撤回等が行われたこと", "宅建業者が申込みまたは契約締結に際して金銭を受領していること"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u26-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-cooling-off-adverse-special-terms",
      claim: "宅建業法37条の2第1項から第3項までの規定に反する特約で申込者等に不利なものは無効である。",
      conditions: ["法37条の2第1項から第3項までの買主保護より申込者等に不利な特約であること"],
      exceptions: ["申込者等に有利な特約まで無効とする規定ではない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u26-f1", "u26-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate cooling-off knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 9) throw new Error(`Expected 9 cooling-off knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsCoolingOff = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();
