(() => {
  "use strict";

  const statute = Object.freeze({
    id: "egov-civil-code",
    label: "e-Gov法令検索『民法』",
    url: "https://laws.e-gov.go.jp/law/129AC0000000089?occasion_date=20260401",
    sourceType: "statute"
  });

  const shared = Object.freeze({
    examYear: 2026,
    lawAsOf: "2026-04-01",
    factcheckStatus: "verified",
    conceptId: "takken-concept-mistake",
    sourceUnitIds: ["civil-mistake"]
  });

  const knowledgeItems = [
    {
      ...shared,
      knowledgeId: "takken-k-mistake-cancellation-important",
      claim: "民法95条1項所定の錯誤に基づく意思表示で、その錯誤が法律行為の目的および取引上の社会通念に照らして重要なものであるときは、取り消すことができる。",
      conditions: ["民法95条1項1号または2号の錯誤に基づく意思表示であること", "錯誤が法律行為の目的および取引上の社会通念に照らして重要であること"],
      exceptions: ["重大な過失がある場合や第三者との関係では、同条3項・4項の制限を別途検討する。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u35-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-mistake-expression-intent-mismatch",
      claim: "民法95条1項1号は、意思表示に対応する意思を欠く錯誤を取消しの対象となり得る錯誤として定める。",
      conditions: ["意思表示に対応する意思を欠いていること", "95条1項の重要性要件を満たすこと"],
      exceptions: ["重大な過失がある場合は95条3項の制限を別途検討する。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u35-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-mistake-basis-circumstance-error",
      claim: "民法95条1項2号は、表意者が法律行為の基礎とした事情についての認識が真実に反する錯誤を取消しの対象となり得る錯誤として定める。",
      conditions: ["表意者が法律行為の基礎とした事情についての認識が真実に反すること", "95条1項の重要性要件を満たすこと"],
      exceptions: ["この類型による取消しには95条2項の表示要件が加わる。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u35-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-mistake-basis-circumstance-indicated",
      claim: "法律行為の基礎とした事情についての認識が真実に反する錯誤による取消しは、その事情が法律行為の基礎とされていることが表示されていたときに限る。",
      conditions: ["民法95条1項2号の錯誤であること", "その事情が法律行為の基礎とされていることが表示されていたこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u35-f1"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-mistake-gross-negligence-general-bar",
      claim: "錯誤が表意者の重大な過失によるものであった場合、原則として表意者は錯誤による意思表示を取り消すことができない。",
      conditions: ["錯誤が表意者の重大な過失によること"],
      exceptions: ["相手方が表意者に錯誤があることを知り、または重大な過失によって知らなかった場合", "相手方が表意者と同一の錯誤に陥っていた場合"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u35-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-mistake-gross-negligence-counterparty-bad-faith",
      claim: "表意者に重大な過失があっても、相手方が表意者に錯誤があることを知り、または重大な過失によって知らなかったときは、重大過失を理由とする取消制限は適用されない。",
      conditions: ["錯誤が表意者の重大な過失によること", "相手方が錯誤を知っていたか、重大な過失によって知らなかったこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u35-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-mistake-gross-negligence-shared-error",
      claim: "表意者に重大な過失があっても、相手方が表意者と同一の錯誤に陥っていたときは、重大過失を理由とする取消制限は適用されない。",
      conditions: ["錯誤が表意者の重大な過失によること", "相手方が表意者と同一の錯誤に陥っていたこと"],
      exceptions: [],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u35-f2"]
    },
    {
      ...shared,
      knowledgeId: "takken-k-mistake-third-party-good-faith-no-negligence",
      claim: "錯誤による意思表示の取消しは、善意でかつ過失がない第三者に対抗することができない。",
      conditions: ["錯誤による意思表示が取り消されたこと", "第三者が善意かつ無過失であること"],
      exceptions: ["第三者が善意無過失でない場合は、この95条4項による保護の要件を満たさない。"],
      importance: "A",
      primarySources: [statute],
      sourceFactIds: ["u35-f2"]
    }
  ];

  const ids = new Set();
  for (const item of knowledgeItems) {
    if (ids.has(item.knowledgeId)) throw new Error(`Duplicate mistake knowledge id: ${item.knowledgeId}`);
    ids.add(item.knowledgeId);
    if (item.examYear !== 2026 || item.lawAsOf !== "2026-04-01" || item.factcheckStatus !== "verified") throw new Error(`Invalid knowledge item state: ${item.knowledgeId}`);
    if (!item.primarySources.some((entry) => entry.sourceType === "statute")) throw new Error(`Missing statute source: ${item.knowledgeId}`);
  }
  if (knowledgeItems.length !== 8) throw new Error(`Expected 8 mistake knowledge items, got ${knowledgeItems.length}`);

  window.PowerTakkenKnowledgeItemsMistake = Object.freeze(knowledgeItems.map((item) => Object.freeze(item)));
})();