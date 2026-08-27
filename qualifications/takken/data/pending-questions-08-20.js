(() => {
  "use strict";

  const Q = [
    {
      id: "takken-q-08-001",
      unitId: "takken-shi-registration",
      unitOrder: 8,
      factIds: ["u08-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅地建物取引士制度について、正しいものはどれか。",
      choices: [
        "宅建試験に合格すれば、資格登録や宅地建物取引士証の制度とは無関係に直ちに宅建士として業務できる",
        "宅建業法には、資格試験、資格登録、宅地建物取引士証という別々の制度上の段階が設けられている",
        "宅地建物取引士証は宅建業者の法人免許を証明する書類である",
        "資格登録制度は宅建業法には設けられていない"
      ],
      proposedAnswerIndex: 1,
      explanation: "宅建業法は、宅地建物取引士について資格試験、資格登録、宅地建物取引士証の制度をそれぞれ設けている。試験合格だけで全ての手続が完了するわけではない。",
      sourceIds: ["mlit-takkenshi"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-09-001",
      unitId: "takken-shi-card",
      unitOrder: 9,
      factIds: ["u09-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "重要事項説明と宅地建物取引士に関する説明として、正しいものはどれか。",
      choices: [
        "重要事項説明は宅建業者の従業者であれば誰でも行うことができる",
        "重要事項説明は依頼者本人だけが行うことができる",
        "重要事項説明は宅地建物取引士が担当し、宅地建物取引士証の制度が設けられている",
        "宅地建物取引士証は重要事項説明とは無関係な建築確認用の証明書である"
      ],
      proposedAnswerIndex: 2,
      explanation: "宅地建物取引士制度には宅地建物取引士証が設けられており、重要事項説明は宅地建物取引士が担当する。",
      sourceIds: ["mlit-takkenshi"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-10-001",
      unitId: "takken-shi-exclusive",
      unitOrder: 10,
      factIds: ["u10-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅建業者の事務所に置く専任の宅地建物取引士の法定割合として、正しいものはどれか。",
      choices: [
        "業務従事者10人に1人以上",
        "業務従事者8人に1人以上",
        "業務従事者3人に1人以上",
        "業務従事者5人に1人以上"
      ],
      proposedAnswerIndex: 3,
      explanation: "宅建業者の事務所では、業務従事者5人に1人以上の割合で専任の宅地建物取引士を置く必要がある。",
      sourceIds: ["mlit-license", "mlit-takkenshi"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-11-001",
      unitId: "takken-shi-exclusive-duties",
      unitOrder: 11,
      factIds: ["u11-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅地建物取引士の業務として位置付けられているものの組合せとして、最も適切なものはどれか。",
      choices: [
        "重要事項説明と、35条関係書面・37条関係書面への記名",
        "建築確認の審査と、所有権移転登記の申請代理",
        "固定資産税の賦課決定と、地価公示価格の決定",
        "宅建業免許の交付と、開発許可の審査"
      ],
      proposedAnswerIndex: 0,
      explanation: "国土交通省は宅地建物取引士の業務として、重要事項説明および35条関係書面・37条関係書面への記名を位置付けている。",
      sourceIds: ["mlit-takkenshi", "mlit-interpretation-2026"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-12-001",
      unitId: "business-guarantee-deposit",
      unitOrder: 12,
      factIds: ["u12-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅地建物取引業法上の営業保証金について、正しいものはどれか。",
      choices: [
        "宅建業法の業務規制には営業保証金の供託制度は存在しない",
        "営業保証金は宅建士個人の資格登録料を積み立てる制度である",
        "営業保証金は建築基準法上の確認手数料を供託する制度である",
        "宅建業法の業務規制には営業保証金の供託制度が含まれる"
      ],
      proposedAnswerIndex: 3,
      explanation: "宅建業法には、宅建業者による営業保証金の供託制度が設けられている。",
      sourceIds: ["mlit-overview"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-13-001",
      unitId: "business-guarantee-refund",
      unitOrder: 13,
      factIds: ["u13-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "営業保証金の還付制度について、最も適切なものはどれか。",
      choices: [
        "宅建業者との取引により生じた一定の債権について、還付を受ける仕組みがある",
        "営業保証金は宅建業者本人だけが自由に引き出すための預金制度である",
        "営業保証金から還付を受けられる仕組みは一切設けられていない",
        "営業保証金は宅建士試験の受験料返還だけに用いられる"
      ],
      proposedAnswerIndex: 0,
      explanation: "営業保証金制度には、宅建業者との取引により生じた一定の債権について還付を受ける仕組みがある。",
      sourceIds: ["mlit-interpretation-2026"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-14-001",
      unitId: "guarantee-association",
      unitOrder: 14,
      factIds: ["u14-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅地建物取引業保証協会に関する説明として、正しいものはどれか。",
      choices: [
        "保証協会制度は民法上の任意組合にすぎず、宅建業法には規定がない",
        "宅建業法には、宅地建物取引業保証協会および弁済業務保証金に関する制度がある",
        "保証協会は宅建士試験の合否だけを決定する機関である",
        "弁済業務保証金は建築確認申請の手数料制度である"
      ],
      proposedAnswerIndex: 1,
      explanation: "宅建業法には、宅地建物取引業保証協会と弁済業務保証金に関する制度が設けられている。",
      sourceIds: ["mlit-interpretation-2026"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-15-001",
      unitId: "brokerage-contract-basics",
      unitOrder: 15,
      factIds: ["u15-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅建業者が宅地・建物の売買または交換の媒介契約を締結した場合について、正しいものはどれか。",
      choices: [
        "所定事項を記載した書面は契約終了時にだけ交付すればよい",
        "依頼者から請求があった場合に限り書面を交付すればよい",
        "遅滞なく所定事項を記載した書面を依頼者に交付する制度がある",
        "媒介契約について書面交付に関する制度はない"
      ],
      proposedAnswerIndex: 2,
      explanation: "宅地・建物の売買または交換の媒介契約を締結した宅建業者は、遅滞なく所定事項を記載した書面を依頼者に交付する制度の対象となる。",
      sourceIds: ["mlit-brokerage"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-16-001",
      unitId: "brokerage-contract-types",
      unitOrder: 16,
      factIds: ["u16-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "標準媒介契約約款における専任媒介契約・専属専任媒介契約の有効期間について、正しいものはどれか。",
      choices: [
        "6か月を超えない範囲で定める",
        "3か月を超えない範囲で定める",
        "1年を超えない範囲で定める",
        "期間の上限は設けられていない"
      ],
      proposedAnswerIndex: 1,
      explanation: "標準媒介契約約款では、専任媒介契約と専属専任媒介契約の有効期間は3か月を超えない範囲で定める。",
      sourceIds: ["mlit-standard-brokerage"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-17-001",
      unitId: "brokerage-reins-reporting",
      unitOrder: 17,
      factIds: ["u17-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "標準媒介契約約款における専任媒介契約について、指定流通機構への登録期限と業務処理状況の報告頻度の組合せとして正しいものはどれか。",
      choices: [
        "5日以内・1週間に1回以上",
        "5日以内・2週間に1回以上",
        "7日以内・2週間に1回以上",
        "7日以内・1週間に1回以上"
      ],
      proposedAnswerIndex: 2,
      explanation: "専任媒介契約では、指定流通機構へ7日以内に登録し、依頼者へ2週間に1回以上の頻度で業務処理状況を報告する。",
      sourceIds: ["mlit-standard-brokerage"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-17-002",
      unitId: "brokerage-reins-reporting",
      unitOrder: 17,
      factIds: ["u17-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "標準媒介契約約款における専属専任媒介契約について、指定流通機構への登録期限と業務処理状況の報告頻度の組合せとして正しいものはどれか。",
      choices: [
        "5日以内・1週間に1回以上",
        "7日以内・2週間に1回以上",
        "7日以内・1週間に1回以上",
        "10日以内・2週間に1回以上"
      ],
      proposedAnswerIndex: 0,
      explanation: "専属専任媒介契約では、指定流通機構へ5日以内に登録し、依頼者へ1週間に1回以上の頻度で業務処理状況を報告する。",
      sourceIds: ["mlit-standard-brokerage"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-18-001",
      unitId: "advertising-start-time",
      unitOrder: 18,
      factIds: ["u18-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "工事完了前の宅地・建物の広告開始時期に関する説明として、正しいものはどれか。",
      choices: [
        "必要な許可等を受ける前でも、広告であることを明示すれば自由に開始できる",
        "必要な許可等を受ける前の広告を制限する規定が宅建業法にある",
        "広告開始時期は宅建業法では一切規制されていない",
        "工事完了前物件については、完成後まで一切広告できない"
      ],
      proposedAnswerIndex: 1,
      explanation: "宅建業法には、工事完了前の宅地・建物について、必要な許可等を受ける前に広告することを制限する規定がある。",
      sourceIds: ["mlit-interpretation-2026"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-19-001",
      unitId: "contract-start-time",
      unitOrder: 19,
      factIds: ["u19-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "工事完了前物件の契約締結時期に関する説明として、正しいものはどれか。",
      choices: [
        "必要な許可等を受ける前でも、買主が承諾すれば売買等の契約を自由に締結できる",
        "広告を開始していれば、必要な許可等を受けていなくても契約締結できる",
        "必要な許可等を受ける前の売買等の契約締結を制限する規定が宅建業法にある",
        "工事完了前物件の契約締結時期は宅建業法の規制対象ではない"
      ],
      proposedAnswerIndex: 2,
      explanation: "宅建業法には、工事完了前物件について、必要な許可等を受ける前に売買等の契約を締結することを制限する規定がある。",
      sourceIds: ["mlit-interpretation-2026"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-20-001",
      unitId: "false-advertising-prohibited-conduct",
      unitOrder: 20,
      factIds: ["u20-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅建業法上の誇大広告等の規制について、正しいものはどれか。",
      choices: [
        "規制対象は物件の所在地だけで、代金等の取引条件は含まれない",
        "事実と異なる表示でも、広告に小さく注意書きを付ければ常に許される",
        "宅建業法には誇大広告等を禁止する規定はない",
        "物件の所在・規模・形質、利用制限、環境、代金等に関する不当表示が規制対象となる"
      ],
      proposedAnswerIndex: 3,
      explanation: "宅建業法は誇大広告等を禁止し、物件の所在・規模・形質、利用制限、環境、代金等に関する著しく事実と異なる表示などを規制する。",
      sourceIds: ["mlit-interpretation-2026"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    }
  ];

  const ids = new Set();
  const stems = new Set();
  for (const q of Q) {
    if (ids.has(q.id)) throw new Error(`Duplicate Takken question id: ${q.id}`);
    ids.add(q.id);
    const normalizedStem = q.stem.replace(/\s+/g, "").toLowerCase();
    if (stems.has(normalizedStem)) throw new Error(`Duplicate Takken question stem: ${q.id}`);
    stems.add(normalizedStem);
    if (!Array.isArray(q.choices) || q.choices.length !== 4) throw new Error(`Invalid choices: ${q.id}`);
    if (new Set(q.choices).size !== 4) throw new Error(`Duplicate choices: ${q.id}`);
    if (!Number.isInteger(q.proposedAnswerIndex) || q.proposedAnswerIndex < 0 || q.proposedAnswerIndex > 3) throw new Error(`Invalid answer index: ${q.id}`);
    if (q.validationStatus !== "pending_validation") throw new Error(`Invalid validation status: ${q.id}`);
    if (q.examYear !== 2026 || q.lawAsOf !== "2026-04-01") throw new Error(`Invalid exam metadata: ${q.id}`);
  }

  window.TakkenPendingQuestions0820 = Object.freeze(Q);
})();
