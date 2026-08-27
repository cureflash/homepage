(() => {
  "use strict";

  const Q = [
    {
      id: "takken-q-68-001",
      unitId: "roads-frontage",
      unitOrder: 68,
      factIds: ["u68-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "建築基準法上の『道路』の原則的な幅員について正しいものはどれか。",
      choices: ["原則として幅員4m以上である", "原則として幅員2m以上である", "原則として幅員6m以上である", "原則として幅員12m以上である"],
      proposedAnswerIndex: 0,
      explanation: "建築基準法42条は、同法上の道路を原則として幅員4m以上のもの等と定義している。",
      sourceIds: ["egov-building-standards-act-20260401"],
      validationStatus: "verified",
      validationMeta: { checkedAt: "2026-08-28T00:28:00+09:00", result: "verified" }
    },
    {
      id: "takken-q-68-002",
      unitId: "roads-frontage",
      unitOrder: 68,
      factIds: ["u68-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "都市計画区域等内にある建築物の敷地の接道義務について、建築基準法上の原則として正しいものはどれか。",
      choices: ["道路に1m以上接すればよい", "道路に2m以上接しなければならない", "道路に4m以上接しなければならない", "接道は不要である"],
      proposedAnswerIndex: 1,
      explanation: "建築基準法43条は、都市計画区域等内の建築物の敷地について、原則として道路に2m以上接することを求めている。",
      sourceIds: ["egov-building-standards-act-20260401"],
      validationStatus: "verified",
      validationMeta: { checkedAt: "2026-08-28T00:28:00+09:00", result: "verified" }
    },
    {
      id: "takken-q-69-001",
      unitId: "building-coverage-ratio",
      unitOrder: 69,
      factIds: ["u69-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "建ぺい率の説明として正しいものはどれか。",
      choices: ["建築物の延べ面積の敷地面積に対する割合である", "建築物の高さの敷地幅に対する割合である", "建築物の建築面積の敷地面積に対する割合である", "敷地面積の前面道路幅員に対する割合である"],
      proposedAnswerIndex: 2,
      explanation: "建築基準法53条は、建築物の建築面積の敷地面積に対する割合について、用途地域等に応じた限度を定めている。",
      sourceIds: ["egov-building-standards-act-20260401"],
      validationStatus: "verified",
      validationMeta: { checkedAt: "2026-08-28T00:28:00+09:00", result: "verified" }
    },
    {
      id: "takken-q-69-002",
      unitId: "building-coverage-ratio",
      unitOrder: 69,
      factIds: ["u69-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "建ぺい率について、建築基準法上正しいものはどれか。",
      choices: ["防火地域内であっても建ぺい率の緩和は一切ない", "角地であっても建ぺい率の緩和は一切ない", "用途地域にかかわらず全国一律の上限だけが適用される", "一定の防火地域内の耐火建築物等や角地などでは、緩和・適用除外が生じる場合がある"],
      proposedAnswerIndex: 3,
      explanation: "建築基準法53条には、一定の防火地域内の耐火建築物等や角地などについて建ぺい率の緩和・適用除外が生じる規定がある。",
      sourceIds: ["egov-building-standards-act-20260401"],
      validationStatus: "verified",
      validationMeta: { checkedAt: "2026-08-28T00:28:00+09:00", result: "verified" }
    },
    {
      id: "takken-q-70-001",
      unitId: "floor-area-ratio",
      unitOrder: 70,
      factIds: ["u70-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "容積率の説明として正しいものはどれか。",
      choices: ["建築物の延べ面積の敷地面積に対する割合である", "建築物の建築面積の敷地面積に対する割合である", "建築物の高さの敷地面積に対する割合である", "敷地面積の道路面積に対する割合である"],
      proposedAnswerIndex: 0,
      explanation: "建築基準法52条は、建築物の延べ面積の敷地面積に対する割合について、用途地域等に応じた限度を定めている。",
      sourceIds: ["egov-building-standards-act-20260401"],
      validationStatus: "verified",
      validationMeta: { checkedAt: "2026-08-28T00:28:00+09:00", result: "verified" }
    },
    {
      id: "takken-q-70-002",
      unitId: "floor-area-ratio",
      unitOrder: 70,
      factIds: ["u70-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "前面道路の幅員が12m未満である敷地の容積率について、建築基準法上正しいものはどれか。",
      choices: ["指定容積率だけを見ればよく、道路幅員は一切関係しない", "道路幅員に一定の数値を乗じて得た割合による制限も適用される", "容積率の制限はなくなる", "建ぺい率と同じ数値が自動的に容積率となる"],
      proposedAnswerIndex: 1,
      explanation: "建築基準法52条では、前面道路の幅員が12m未満の場合、道路幅員に一定の数値を乗じて得た割合による容積率制限が適用される。",
      sourceIds: ["egov-building-standards-act-20260401"],
      validationStatus: "verified",
      validationMeta: { checkedAt: "2026-08-28T00:28:00+09:00", result: "verified" }
    },
    {
      id: "takken-q-71-001",
      unitId: "height-restrictions",
      unitOrder: 71,
      factIds: ["u71-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "建築基準法56条に定められる建築物の高さ制限の組合せとして正しいものはどれか。",
      choices: ["日影規制・建ぺい率・容積率", "用途制限・接道義務・建築確認", "道路斜線・隣地斜線・北側斜線", "市街化区域・市街化調整区域・用途地域"],
      proposedAnswerIndex: 2,
      explanation: "建築基準法56条は、道路斜線、隣地斜線、北側斜線に関する高さ制限を定めている。",
      sourceIds: ["egov-building-standards-act-20260401"],
      validationStatus: "verified",
      validationMeta: { checkedAt: "2026-08-28T00:28:00+09:00", result: "verified" }
    },
    {
      id: "takken-q-71-002",
      unitId: "height-restrictions",
      unitOrder: 71,
      factIds: ["u71-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "日影による建築物の高さ制限について、建築基準法上正しいものはどれか。",
      choices: ["全国のすべての建築物に一律に適用される", "用途地域と無関係に必ず適用される", "都市計画法だけに定められ、建築基準法には規定がない", "条例で指定する区域内の一定の建築物について適用される"],
      proposedAnswerIndex: 3,
      explanation: "建築基準法56条の2は、条例で指定する区域内の一定の建築物について日影による高さ制限を定めている。",
      sourceIds: ["egov-building-standards-act-20260401"],
      validationStatus: "verified",
      validationMeta: { checkedAt: "2026-08-28T00:28:00+09:00", result: "verified" }
    },
    {
      id: "takken-q-72-001",
      unitId: "fire-prevention-zones",
      unitOrder: 72,
      factIds: ["u72-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "防火地域・準防火地域の都市計画法上の位置付けとして正しいものはどれか。",
      choices: ["地域地区として定めることができる", "市街化区域の一種としてだけ定められる", "都市計画区域外にしか定められない", "建築確認の種類の一つである"],
      proposedAnswerIndex: 0,
      explanation: "都市計画法8条は、防火地域および準防火地域を地域地区として定めることができるとしている。",
      sourceIds: ["egov-city-planning-act-20260401"],
      validationStatus: "verified",
      validationMeta: { checkedAt: "2026-08-28T00:28:00+09:00", result: "verified" }
    },
    {
      id: "takken-q-72-002",
      unitId: "fire-prevention-zones",
      unitOrder: 72,
      factIds: ["u72-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "防火地域・準防火地域内の建築物について、建築基準法上正しいものはどれか。",
      choices: ["区域内であっても防火性能に関する規制はない", "建築物の規模等に応じた防火性能が求められる", "すべて木造でなければならない", "用途地域が商業地域の場合に限り規制される"],
      proposedAnswerIndex: 1,
      explanation: "建築基準法61条は、防火地域・準防火地域内の建築物について、その規模等に応じた防火性能を求めている。",
      sourceIds: ["egov-building-standards-act-20260401"],
      validationStatus: "verified",
      validationMeta: { checkedAt: "2026-08-28T00:28:00+09:00", result: "verified" }
    },
    {
      id: "takken-q-73-001",
      unitId: "national-land-use-notification",
      unitOrder: 73,
      factIds: ["u73-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "国土利用計画法23条による一定規模以上の土地売買等の事後届出について、原則として届出義務を負う者は誰か。",
      choices: ["売主だけ", "媒介した宅建業者だけ", "土地に関する権利の取得者", "登記官"],
      proposedAnswerIndex: 2,
      explanation: "国土利用計画法23条は、一定規模以上の土地売買等の契約を締結した場合、土地に関する権利の取得者に事後届出を求めている。",
      sourceIds: ["egov-national-land-use-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-73-002",
      unitId: "national-land-use-notification",
      unitOrder: 73,
      factIds: ["u73-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "国土利用計画法の事後届出について、原則的な期限と提出経路の組合せとして正しいものはどれか。",
      choices: ["契約締結日から1週間以内に国土交通大臣へ直接届け出る", "登記完了日から1か月以内に法務局へ届け出る", "契約締結日から30日以内に市町村長へ届け出て完了する", "契約締結日から2週間以内に、市町村長を経由して都道府県知事へ届け出る"],
      proposedAnswerIndex: 3,
      explanation: "国土利用計画法23条では、原則として契約締結の日から2週間以内に、土地の所在する市町村の長を経由して都道府県知事へ届け出る。",
      sourceIds: ["egov-national-land-use-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-74-001",
      unitId: "farmland-act-article3",
      unitOrder: 74,
      factIds: ["u74-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "農地を農地のまま売買して所有権を移転する場合、農地法3条上の原則として正しいものはどれか。",
      choices: ["農業委員会の許可が必要である", "国土交通大臣の免許が必要である", "登記だけで足り、許可は不要である", "市町村長への事後届出だけで足りる"],
      proposedAnswerIndex: 0,
      explanation: "農地法3条は、農地または採草放牧地について所有権移転や使用収益権の設定・移転を行う場合、原則として農業委員会の許可を必要としている。",
      sourceIds: ["egov-farmland-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-74-002",
      unitId: "farmland-act-article3",
      unitOrder: 74,
      factIds: ["u74-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "農地法3条の許可を必要とする権利移転を、許可を受けずに行った場合の効力について、原則として正しいものはどれか。",
      choices: ["常に有効だが過料だけが科される", "同条の例外を除き効力を生じない", "登記をすれば必ず有効になる", "1年経過すれば自動的に有効になる"],
      proposedAnswerIndex: 1,
      explanation: "農地法3条では、許可を受けないでした行為は、同条に定める例外を除き効力を生じない。",
      sourceIds: ["egov-farmland-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-75-001",
      unitId: "farmland-act-articles4-5",
      unitOrder: 75,
      factIds: ["u75-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "農地所有者が自分の農地を農地以外の用途へ転用する場合、農地法上主に適用される条文はどれか。",
      choices: ["農地法3条", "農地法5条", "農地法4条", "農地法23条"],
      proposedAnswerIndex: 2,
      explanation: "農地法4条は、農地を農地以外のものにする自己転用について、原則として都道府県知事等の許可を必要としている。",
      sourceIds: ["egov-farmland-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-75-002",
      unitId: "farmland-act-articles4-5",
      unitOrder: 75,
      factIds: ["u75-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "農地を転用する目的で所有権を移転する場合、農地法上主に適用される条文はどれか。",
      choices: ["農地法3条だけが適用される", "農地法4条だけが適用される", "国土利用計画法だけが適用される", "農地法5条が適用される"],
      proposedAnswerIndex: 3,
      explanation: "農地法5条は、農地を転用する目的で権利を設定・移転する場合について、原則として都道府県知事等の許可を必要としている。",
      sourceIds: ["egov-farmland-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-76-001",
      unitId: "land-readjustment",
      unitOrder: 76,
      factIds: ["u76-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "土地区画整理事業における仮換地について正しいものはどれか。",
      choices: ["施行者は、事業施行上必要がある場合等に仮換地を指定できる", "仮換地は裁判所だけが指定できる", "仮換地は換地処分後に初めて指定できる", "仮換地制度は土地区画整理法には存在しない"],
      proposedAnswerIndex: 0,
      explanation: "土地区画整理法98条は、施行者が事業施行上必要がある場合等に仮換地を指定できると定めている。",
      sourceIds: ["egov-land-readjustment-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-76-002",
      unitId: "land-readjustment",
      unitOrder: 76,
      factIds: ["u76-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "土地区画整理事業の換地処分について、法的効果が生じる時期として正しいものはどれか。",
      choices: ["換地計画を作成した日から", "換地処分の公告があった日の翌日から", "工事着手の日から", "仮換地指定の日から"],
      proposedAnswerIndex: 1,
      explanation: "換地処分の公告があった日の翌日から、換地は従前の宅地とみなされるなど所定の法的効果が生じる。",
      sourceIds: ["egov-land-readjustment-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-77-001",
      unitId: "embankment-regulation",
      unitOrder: 77,
      factIds: ["u77-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅地造成及び特定盛土等規制法の規制区域制度の趣旨として正しいものはどれか。",
      choices: ["農地の集約化だけを目的とする", "土地価格の上昇を抑えることだけを目的とする", "盛土等に伴う災害を防止するため、都道府県知事等が規制区域を指定する", "建築物の用途だけを制限する"],
      proposedAnswerIndex: 2,
      explanation: "同法は盛土等に伴う災害を防止するため、都道府県知事等による規制区域の指定制度を設けている。",
      sourceIds: ["egov-embankment-regulation-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-77-002",
      unitId: "embankment-regulation",
      unitOrder: 77,
      factIds: ["u77-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "盛土規制法の規制区域内で一定規模の宅地造成、特定盛土等または土石の堆積に関する工事を行う場合、原則として必要な手続はどれか。",
      choices: ["法務局への登記だけ", "国税庁への申告だけ", "市町村長への任意の通知だけ", "都道府県知事等の許可"],
      proposedAnswerIndex: 3,
      explanation: "規制区域内で一定規模の宅地造成、特定盛土等または土石の堆積に関する工事を行う場合、原則として都道府県知事等の許可が必要となる。",
      sourceIds: ["egov-embankment-regulation-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    }
  ];

  const normalize = (value) => String(value).normalize("NFKC").replace(/\s+/g, "").toLowerCase();
  const ids = new Set();
  const stems = new Set();
  const answerPositions = [0, 0, 0, 0];
  const allowedStatuses = new Set(["pending_validation", "verified", "needs_revision", "rejected"]);

  for (const q of Q) {
    if (ids.has(q.id)) throw new Error(`Duplicate question id: ${q.id}`);
    ids.add(q.id);
    const normalizedStem = normalize(q.stem);
    if (stems.has(normalizedStem)) throw new Error(`Duplicate normalized stem: ${q.id}`);
    stems.add(normalizedStem);
    if (!Array.isArray(q.choices) || q.choices.length !== 4) throw new Error(`Invalid choice count: ${q.id}`);
    if (new Set(q.choices.map(normalize)).size !== 4) throw new Error(`Duplicate choices: ${q.id}`);
    if (!Number.isInteger(q.proposedAnswerIndex) || q.proposedAnswerIndex < 0 || q.proposedAnswerIndex > 3) throw new Error(`Invalid answer index: ${q.id}`);
    if (!allowedStatuses.has(q.validationStatus)) throw new Error(`Invalid validation status: ${q.id}`);
    if (q.examYear !== 2026 || q.lawAsOf !== "2026-04-01") throw new Error(`Invalid exam metadata: ${q.id}`);
    answerPositions[q.proposedAnswerIndex] += 1;
  }

  if (answerPositions.some((count) => count !== 5)) throw new Error(`Unbalanced answer positions: ${answerPositions.join(",")}`);
  window.TakkenPendingQuestions6877 = Object.freeze(Q);
})();