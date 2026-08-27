(() => {
  "use strict";

  const Q = [
    {
      id: "takken-q-01-001",
      unitId: "takken-gyoho-definition",
      unitOrder: 1,
      factIds: ["u01-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅地建物取引業法上の『宅地建物取引業』に含まれる行為として、最も適切なものはどれか。",
      choices: [
        "宅地または建物の売買を業として行うこと",
        "自己所有の建物を自ら賃貸することだけを業として行うこと",
        "宅地または建物の清掃を請け負うこと",
        "建物の設計だけを業として行うこと"
      ],
      proposedAnswerIndex: 0,
      explanation: "宅地・建物の売買または交換を業として行うことは宅建業に含まれる。自ら行う賃貸そのものは宅建業の定義には含まれない。",
      sourceIds: ["mlit-license"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-01-002",
      unitId: "takken-gyoho-definition",
      unitOrder: 1,
      factIds: ["u01-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅地・建物の取引について、宅地建物取引業に含まれるものとして正しいものはどれか。",
      choices: [
        "貸借の当事者が自ら貸主として賃貸する行為のみ",
        "売買・交換・貸借の代理または媒介を業として行うこと",
        "建物の修繕工事を媒介せずに請け負うこと",
        "土地の測量のみを業として行うこと"
      ],
      proposedAnswerIndex: 1,
      explanation: "宅地・建物の売買、交換、貸借について、その代理または媒介を業として行うことは宅建業に含まれる。",
      sourceIds: ["mlit-license"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-02-001",
      unitId: "takken-gyoho-license-required",
      unitOrder: 2,
      factIds: ["u02-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅地建物取引業を営もうとする者の免許について、正しいものはどれか。",
      choices: [
        "法人であれば免許は不要である",
        "個人であれば免許は不要である",
        "国土交通大臣または都道府県知事の免許を受ける必要がある",
        "宅地建物取引士証を持つ者が1人いれば事業者の免許は不要である"
      ],
      proposedAnswerIndex: 2,
      explanation: "宅地建物取引業を営もうとする者は、事務所の設置状況に応じて国土交通大臣または都道府県知事の免許を受ける必要がある。",
      sourceIds: ["mlit-license"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-03-001",
      unitId: "takken-gyoho-license-authority",
      unitOrder: 3,
      factIds: ["u03-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅建業者が2以上の都道府県に事務所を設置して宅建業を営む場合の免許権者は誰か。",
      choices: [
        "主たる事務所所在地の市町村長",
        "主たる事務所所在地の都道府県知事",
        "各事務所所在地の都道府県知事全員",
        "国土交通大臣"
      ],
      proposedAnswerIndex: 3,
      explanation: "2以上の都道府県に事務所を設置する場合は国土交通大臣免許となる。1都道府県内だけに事務所を置く場合はその都道府県知事免許となる。",
      sourceIds: ["mlit-license"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-04-001",
      unitId: "takken-gyoho-license-disqualification",
      unitOrder: 4,
      factIds: ["u04-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅建業免許の欠格事由に関する説明として、最も適切なものはどれか。",
      choices: [
        "一定の免許取消しや刑罰等については5年間の制限が問題となる場合がある",
        "欠格事由に期間制限が設けられることは一切ない",
        "欠格事由は宅建業者名簿に関する規定だけで定められている",
        "過去に免許を取り消された者は理由を問わず永久に免許を受けられない"
      ],
      proposedAnswerIndex: 0,
      explanation: "宅建業法5条の欠格事由には、一定の免許取消し、刑罰、不正行為等について5年間という期間が関係するものがある。",
      sourceIds: ["mlit-license"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-05-001",
      unitId: "takken-gyoho-license-validity-renewal",
      unitOrder: 5,
      factIds: ["u05-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅地建物取引業免許の有効期間として正しいものはどれか。",
      choices: ["3年間", "5年間", "7年間", "10年間"],
      proposedAnswerIndex: 1,
      explanation: "宅地建物取引業免許の有効期間は5年間である。",
      sourceIds: ["mlit-license-pdf"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-05-002",
      unitId: "takken-gyoho-license-validity-renewal",
      unitOrder: 5,
      factIds: ["u05-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅建業免許の更新申請時期について、正しいものはどれか。",
      choices: [
        "有効期間満了日の180日前から120日前まで",
        "有効期間満了日の120日前から60日前まで",
        "有効期間満了日の90日前から30日前まで",
        "有効期間満了後30日以内"
      ],
      proposedAnswerIndex: 2,
      explanation: "更新申請は、免許の有効期間満了日の90日前から30日前までに行う。",
      sourceIds: ["mlit-license-pdf"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-06-001",
      unitId: "takken-gyoho-license-change-closure",
      unitOrder: 6,
      factIds: ["u06-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅建業者名簿の一定の登載事項に変更があった場合の変更届について、正しいものはどれか。",
      choices: [
        "変更後7日以内に届け出る",
        "変更後14日以内に届け出る",
        "変更後60日以内に届け出る",
        "変更後30日以内に届け出る"
      ],
      proposedAnswerIndex: 3,
      explanation: "宅建業法8条2項2号から6号の一定事項に変更があった場合、30日以内に変更の届出を行う。",
      sourceIds: ["mlit-duty"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-07-001",
      unitId: "takken-gyoho-roster-signs",
      unitOrder: 7,
      factIds: ["u07-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅地建物取引業法上の制度に関する説明として、正しいものはどれか。",
      choices: [
        "宅建業法には宅地建物取引業者名簿や標識に関する規定がある",
        "宅建業者名簿は宅建業法とは無関係な任意制度である",
        "宅建業者には標識に関する規制は一切ない",
        "宅建業者名簿は宅地建物取引士個人だけを登録する制度である"
      ],
      proposedAnswerIndex: 0,
      explanation: "宅建業法には宅地建物取引業者名簿および標識に関する規定がある。",
      sourceIds: ["mlit-interpretation-2026"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    }
  ];

  const ids = new Set();
  for (const q of Q) {
    if (ids.has(q.id)) throw new Error(`Duplicate Takken question id: ${q.id}`);
    ids.add(q.id);
    if (!Array.isArray(q.choices) || q.choices.length !== 4) throw new Error(`Invalid choices: ${q.id}`);
    if (new Set(q.choices).size !== 4) throw new Error(`Duplicate choices: ${q.id}`);
    if (!Number.isInteger(q.proposedAnswerIndex) || q.proposedAnswerIndex < 0 || q.proposedAnswerIndex > 3) throw new Error(`Invalid answer index: ${q.id}`);
    if (q.validationStatus !== "pending_validation") throw new Error(`Invalid validation status: ${q.id}`);
  }

  window.TakkenPendingQuestions0107 = Object.freeze(Q);
})();
