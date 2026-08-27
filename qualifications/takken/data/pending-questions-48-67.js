(() => {
  "use strict";

  const Q = [
    {
      id: "takken-q-48-001",
      unitId: "sale-earnest",
      unitOrder: 48,
      factIds: ["u48-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "売買契約で買主から売主へ手付が交付された場合、買主が解約手付による解除をできる時期について正しいものはどれか。",
      choices: [
        "相手方が契約の履行に着手するまでは、手付を放棄して解除できる",
        "契約締結後24時間以内に限り解除できる",
        "売主が履行に着手した後でも常に解除できる",
        "裁判所の許可を受けた場合に限り解除できる"
      ],
      proposedAnswerIndex: 0,
      explanation: "民法557条により、相手方が契約の履行に着手するまでは、買主は手付を放棄して契約を解除できる。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-48-002",
      unitId: "sale-earnest",
      unitOrder: 48,
      factIds: ["u48-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "売主が解約手付による解除をする方法として正しいものはどれか。",
      choices: [
        "受領した手付と同額を返還するだけでよい",
        "手付の倍額を現実に提供する",
        "手付の3倍額を供託する",
        "違約金として代金の20%を支払う"
      ],
      proposedAnswerIndex: 1,
      explanation: "民法557条により、売主は手付の倍額を現実に提供して解除できる。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-49-001",
      unitId: "contract-nonconformity-civil",
      unitOrder: 49,
      factIds: ["u49-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "引き渡された売買目的物が種類・品質・数量について契約内容に適合しない場合、買主が民法上請求できるものとして正しいものはどれか。",
      choices: [
        "必ず契約を無効にすることだけ",
        "刑事罰を科すこと",
        "修補・代替物の引渡し・不足分の引渡しによる履行の追完",
        "所有権を自動的に第三者へ移転すること"
      ],
      proposedAnswerIndex: 2,
      explanation: "民法562条は、契約不適合がある場合に修補、代替物の引渡しまたは不足分の引渡しによる履行の追完を請求できると定める。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-49-002",
      unitId: "contract-nonconformity-civil",
      unitOrder: 49,
      factIds: ["u49-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "契約不適合を理由とする代金減額請求について、民法上の原則として正しいものはどれか。",
      choices: [
        "追完を求めず常に全額返還を請求する",
        "不適合があっても代金減額は一切できない",
        "裁判所の確定判決がなければ請求できない",
        "相当期間を定めて追完を催告し、その期間内に追完がないとき、不適合の程度に応じて請求できる"
      ],
      proposedAnswerIndex: 3,
      explanation: "民法563条は、原則として相当期間を定めて追完を催告し、期間内に追完がないときに不適合の程度に応じた代金減額請求を認める。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-50-001",
      unitId: "lease-general",
      unitOrder: 50,
      factIds: ["u50-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "民法上の賃貸借の基本的な内容として正しいものはどれか。",
      choices: [
        "賃貸人が物を使用・収益させ、賃借人が賃料を支払い、終了時に物を返還する契約である",
        "賃借人が所有権を取得することを必須とする契約である",
        "賃料を支払わない無償契約に限られる",
        "契約終了後も返還義務はない"
      ],
      proposedAnswerIndex: 0,
      explanation: "民法601条は、賃貸借を、賃貸人が物を使用・収益させ、賃借人が賃料を支払い、終了時に返還する契約として定める。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-50-002",
      unitId: "lease-general",
      unitOrder: 50,
      factIds: ["u50-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "民法上、賃貸借の存続期間の上限として正しいものはどれか。",
      choices: [
        "20年",
        "50年",
        "30年",
        "100年"
      ],
      proposedAnswerIndex: 1,
      explanation: "民法604条により、賃貸借の存続期間は50年を超えることができない。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-51-001",
      unitId: "lease-deposit-opposability",
      unitOrder: 51,
      factIds: ["u51-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "敷金の返還について、民法上正しいものはどれか。",
      choices: [
        "契約締結直後に全額返還する",
        "賃借人の未払債務があっても控除できない",
        "賃貸借終了・目的物返還後などに、未払債務を控除した残額を返還する",
        "敷金はどのような場合も返還しない"
      ],
      proposedAnswerIndex: 2,
      explanation: "民法622条の2により、賃貸人は賃貸借終了・目的物返還後などに、敷金から賃借人の金銭債務額を控除した残額を返還する。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-51-002",
      unitId: "lease-deposit-opposability",
      unitOrder: 51,
      factIds: ["u51-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "建物賃貸借を、その後に建物について物権を取得した第三者に対抗するための要件として、借地借家法上正しいものはどれか。",
      choices: [
        "必ず賃借権の登記が必要である",
        "公正証書の作成だけで足りる",
        "固定資産税の納付が必要である",
        "建物の引渡しがあれば、登記がなくても対抗できる"
      ],
      proposedAnswerIndex: 3,
      explanation: "借地借家法31条により、建物賃貸借は建物の引渡しがあれば、登記がなくてもその後に物権を取得した者に対抗できる。",
      sourceIds: ["egov-land-building-lease-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-52-001",
      unitId: "land-lease-right",
      unitOrder: 52,
      factIds: ["u52-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "普通借地権の当初の存続期間について正しいものはどれか。",
      choices: [
        "原則30年で、契約でこれより長い期間を定めたときはその期間となる",
        "原則10年で延長できない",
        "原則20年である",
        "必ず50年以上でなければならない"
      ],
      proposedAnswerIndex: 0,
      explanation: "借地借家法3条により、借地権の存続期間は30年とし、契約でこれより長い期間を定めたときはその期間となる。",
      sourceIds: ["egov-land-building-lease-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-52-002",
      unitId: "land-lease-right",
      unitOrder: 52,
      factIds: ["u52-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "借地権の登記がない場合に第三者へ対抗する方法として、借地借家法上正しいものはどれか。",
      choices: [
        "土地の固定資産税を納付する",
        "土地上に借地権者名義で登記された建物を所有する",
        "口頭で第三者へ通知する",
        "地主の印鑑証明書を所持する"
      ],
      proposedAnswerIndex: 1,
      explanation: "借地借家法10条により、借地権の登記がなくても、土地上に借地権者が登記されている建物を所有するときは第三者に対抗できる。",
      sourceIds: ["egov-land-building-lease-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-53-001",
      unitId: "fixed-term-land-lease",
      unitOrder: 53,
      factIds: ["u53-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "一般定期借地権について正しいものはどれか。",
      choices: [
        "存続期間は10年以上で設定する",
        "更新を排除する特約は認められない",
        "存続期間を50年以上として設定し、更新等がなく建物買取請求をしない旨を定めることができる",
        "存続期間を1年以上とすれば自由に設定できる"
      ],
      proposedAnswerIndex: 2,
      explanation: "借地借家法22条により、一般定期借地権は存続期間を50年以上として設定し、更新等がなく建物買取請求をしない旨を定めることができる。",
      sourceIds: ["egov-land-building-lease-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-53-002",
      unitId: "fixed-term-land-lease",
      unitOrder: 53,
      factIds: ["u53-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "一般定期借地権の更新なし等の特約の方式として正しいものはどれか。",
      choices: [
        "口頭だけでなければならない",
        "当事者の黙示の合意で足りる",
        "市町村長の許可だけで足りる",
        "書面または所定の電磁的記録によって行う必要がある"
      ],
      proposedAnswerIndex: 3,
      explanation: "借地借家法22条の特約は、公正証書による等の書面または所定の電磁的記録によってしなければならない。",
      sourceIds: ["egov-land-building-lease-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-54-001",
      unitId: "building-lease-right",
      unitOrder: 54,
      factIds: ["u54-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "建物賃貸借の第三者対抗力について正しいものはどれか。",
      choices: [
        "建物の引渡しがあれば、登記がなくてもその後に物権を取得した者に対抗できる",
        "必ず賃借権登記がなければ対抗できない",
        "賃料を1年分前払いした場合だけ対抗できる",
        "公証人の認証が必要である"
      ],
      proposedAnswerIndex: 0,
      explanation: "借地借家法31条により、建物賃貸借は建物の引渡しによって第三者への対抗力を得る。",
      sourceIds: ["egov-land-building-lease-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-54-002",
      unitId: "building-lease-right",
      unitOrder: 54,
      factIds: ["u54-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "期間を1年未満と定めた建物賃貸借について、借地借家法上正しいものはどれか。",
      choices: [
        "契約は当然に無効となる",
        "期間の定めがない建物賃貸借とみなされる",
        "必ず1年間の契約とみなされる",
        "定期建物賃貸借とみなされる"
      ],
      proposedAnswerIndex: 1,
      explanation: "借地借家法29条により、期間を1年未満とする建物賃貸借は期間の定めがない建物賃貸借とみなされる。",
      sourceIds: ["egov-land-building-lease-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-55-001",
      unitId: "fixed-term-building-lease",
      unitOrder: 55,
      factIds: ["u55-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "定期建物賃貸借について正しいものはどれか。",
      choices: [
        "必ず契約更新がある",
        "口頭契約でのみ成立する",
        "書面等で契約し、更新がなく期間満了で終了する旨を定めることができる",
        "期間の定めを設けることはできない"
      ],
      proposedAnswerIndex: 2,
      explanation: "借地借家法38条により、期間の定めがある建物賃貸借を書面等で契約するとき、更新がなく期間満了で終了する旨を定めることができる。",
      sourceIds: ["egov-land-building-lease-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-55-002",
      unitId: "fixed-term-building-lease",
      unitOrder: 55,
      factIds: ["u55-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "定期建物賃貸借の事前説明について正しいものはどれか。",
      choices: [
        "契約後に口頭説明すれば足りる",
        "説明は一切不要である",
        "賃借人が宅建士なら必ず不要である",
        "賃貸人が契約締結前に更新がなく期間満了で終了する旨を書面等で説明しないと、その旨の定めは無効となる"
      ],
      proposedAnswerIndex: 3,
      explanation: "借地借家法38条により、賃貸人が契約前に所定の書面等を交付して説明しなければ、更新がない旨の定めは無効となる。",
      sourceIds: ["egov-land-building-lease-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-56-001",
      unitId: "inheritance-heirs-shares",
      unitOrder: 56,
      factIds: ["u56-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "法定相続人の順位について正しいものはどれか。",
      choices: [
        "配偶者は常に相続人となり、血族は子、直系尊属、兄弟姉妹の順に相続人となる",
        "兄弟姉妹は常に配偶者より先に相続する",
        "直系尊属は子がいる場合でも必ず共同相続人となる",
        "配偶者は子がいると相続人にならない"
      ],
      proposedAnswerIndex: 0,
      explanation: "民法890条、887条、889条により、配偶者は常に相続人となり、子、直系尊属、兄弟姉妹が順位に従って相続人となる。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-56-002",
      unitId: "inheritance-heirs-shares",
      unitOrder: 56,
      factIds: ["u56-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "配偶者と子が共同相続人である場合の法定相続分として正しいものはどれか。",
      choices: [
        "配偶者3分の2、子全体3分の1",
        "配偶者2分の1、子全体2分の1",
        "配偶者4分の3、子全体4分の1",
        "配偶者3分の1、子全体3分の2"
      ],
      proposedAnswerIndex: 1,
      explanation: "民法900条により、配偶者と子が共同相続人の場合、配偶者の法定相続分は2分の1、子全体で2分の1である。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-57-001",
      unitId: "inheritance-acceptance-renunciation",
      unitOrder: 57,
      factIds: ["u57-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "相続の承認・放棄を選択する熟慮期間について、民法上の原則として正しいものはどれか。",
      choices: [
        "相続開始の日から1か月",
        "被相続人の死亡から1年",
        "自己のために相続開始があったことを知った時から3か月",
        "相続財産を知った時から6か月"
      ],
      proposedAnswerIndex: 2,
      explanation: "民法915条により、相続人は原則として自己のために相続開始があったことを知った時から3か月以内に承認・限定承認・放棄を選択する。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-57-002",
      unitId: "inheritance-acceptance-renunciation",
      unitOrder: 57,
      factIds: ["u57-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "相続放棄の方法として正しいものはどれか。",
      choices: [
        "市町村長へ届け出る",
        "法務局に登記申請する",
        "他の相続人へ口頭で伝えれば足りる",
        "家庭裁判所に申述する"
      ],
      proposedAnswerIndex: 3,
      explanation: "民法938条により、相続放棄は家庭裁判所への申述によって行う。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-58-001",
      unitId: "will-reserved-portion",
      unitOrder: 58,
      factIds: ["u58-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "遺言が効力を生じる時期について、民法上の原則として正しいものはどれか。",
      choices: [
        "遺言者の死亡時",
        "遺言書を作成した時",
        "公証人が保管した時",
        "相続人全員が同意した時"
      ],
      proposedAnswerIndex: 0,
      explanation: "民法985条により、遺言は原則として遺言者の死亡の時から効力を生ずる。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-58-002",
      unitId: "will-reserved-portion",
      unitOrder: 58,
      factIds: ["u58-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "遺留分を有する相続人について正しいものはどれか。",
      choices: [
        "兄弟姉妹だけである",
        "兄弟姉妹以外の相続人である",
        "すべての法定相続人に必ずある",
        "配偶者には遺留分がない"
      ],
      proposedAnswerIndex: 1,
      explanation: "民法1042条は、兄弟姉妹以外の相続人に遺留分を認めている。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-59-001",
      unitId: "condominium-law",
      unitOrder: 59,
      factIds: ["u59-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "区分所有権の対象となる建物部分について正しいものはどれか。",
      choices: [
        "一棟の建物はどのような場合も分けて所有できない",
        "廊下や階段だけが専有部分になる",
        "構造上区分され、独立して住居・店舗等の用途に供することができる部分は所有権の目的とすることができる",
        "敷地だけが区分所有権の対象となる"
      ],
      proposedAnswerIndex: 2,
      explanation: "区分所有法1条により、構造上区分された部分が独立して住居・店舗等の用途に供することができるとき、その各部分を所有権の目的とできる。",
      sourceIds: ["egov-condominium-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-59-002",
      unitId: "condominium-law",
      unitOrder: 59,
      factIds: ["u59-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "マンション等の共用部分の帰属について、区分所有法上の原則として正しいものはどれか。",
      choices: [
        "管理会社だけの所有となる",
        "最上階の区分所有者だけの所有となる",
        "市町村の所有となる",
        "区分所有者全員の共有に属する"
      ],
      proposedAnswerIndex: 3,
      explanation: "区分所有法11条により、共用部分は原則として区分所有者全員の共有に属する。",
      sourceIds: ["egov-condominium-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-60-001",
      unitId: "real-estate-registration",
      unitOrder: 60,
      factIds: ["u60-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "不動産登記記録の表題部と権利部について正しいものはどれか。",
      choices: [
        "表題部には表示に関する登記が、権利部には権利に関する登記が記録される",
        "表題部には抵当権だけが記録される",
        "権利部には所在・地番だけが記録される",
        "土地と建物を一つの登記記録にまとめる"
      ],
      proposedAnswerIndex: 0,
      explanation: "不動産登記法2条は、表題部を表示に関する登記が、権利部を権利に関する登記が記録される部分と定義する。",
      sourceIds: ["egov-real-estate-registration-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-60-002",
      unitId: "real-estate-registration",
      unitOrder: 60,
      factIds: ["u60-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "不動産登記記録の権利部について正しいものはどれか。",
      choices: [
        "甲区には抵当権、乙区には所有権だけを記録する",
        "甲区には所有権に関する事項、乙区には抵当権など所有権以外の権利に関する事項を記録する",
        "甲区と乙区には同じ事項を記録する",
        "権利部には権利関係を記録しない"
      ],
      proposedAnswerIndex: 1,
      explanation: "法務局の案内では、権利部の甲区には所有権に関する事項、乙区には抵当権など所有権以外の権利に関する事項が記録される。",
      sourceIds: ["moj-real-estate-registration-faq"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-61-001",
      unitId: "city-planning-area",
      unitOrder: 61,
      factIds: ["u61-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "都市計画区域について正しいものはどれか。",
      choices: [
        "国土全域が自動的に都市計画区域となる",
        "市町村だけが指定できる",
        "都道府県は、一体の都市として総合的に整備・開発・保全する必要がある区域を都市計画区域として指定できる",
        "都市計画区域は農地だけを対象とする"
      ],
      proposedAnswerIndex: 2,
      explanation: "都市計画法5条により、都道府県は一体の都市として総合的に整備し、開発し、保全する必要がある区域を都市計画区域として指定できる。",
      sourceIds: ["egov-city-planning-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-61-002",
      unitId: "city-planning-area",
      unitOrder: 61,
      factIds: ["u61-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "準都市計画区域について正しいものはどれか。",
      choices: [
        "都市計画区域内にしか指定できない",
        "市街化区域と同じ意味である",
        "必ず国土交通大臣が全国一律に指定する",
        "都市計画区域外でも、土地利用の整序または環境保全のため必要な区域に指定されることがある"
      ],
      proposedAnswerIndex: 3,
      explanation: "都市計画法5条の2により、都市計画区域外でも土地利用の整序または環境保全のため必要な区域を準都市計画区域として指定できる。",
      sourceIds: ["egov-city-planning-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-62-001",
      unitId: "area-division",
      unitOrder: 62,
      factIds: ["u62-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "都市計画法上の区域区分について正しいものはどれか。",
      choices: [
        "都市計画区域を市街化区域と市街化調整区域に区分する仕組みである",
        "用途地域を住居専用地域だけにする仕組みである",
        "農地を宅地へ自動転用する仕組みである",
        "都道府県を市町村に分ける仕組みである"
      ],
      proposedAnswerIndex: 0,
      explanation: "都市計画法7条は、区域区分として都市計画区域を市街化区域と市街化調整区域に区分することを定める。",
      sourceIds: ["egov-city-planning-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-62-002",
      unitId: "area-division",
      unitOrder: 62,
      factIds: ["u62-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "市街化区域と市街化調整区域の説明として正しいものはどれか。",
      choices: [
        "市街化調整区域は優先的に市街化を図る区域である",
        "市街化区域は既成市街地とおおむね10年以内に優先的・計画的に市街化を図る区域で、市街化調整区域は市街化を抑制すべき区域である",
        "市街化区域は市街化を禁止する区域である",
        "両区域の意味に差はない"
      ],
      proposedAnswerIndex: 1,
      explanation: "都市計画法7条により、市街化区域は既成市街地およびおおむね10年以内に優先的・計画的に市街化を図る区域、市街化調整区域は市街化を抑制すべき区域である。",
      sourceIds: ["egov-city-planning-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-63-001",
      unitId: "use-districts",
      unitOrder: 63,
      factIds: ["u63-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "用途地域の都市計画法上の位置付けとして正しいものはどれか。",
      choices: [
        "都市施設の一種である",
        "市街地開発事業だけを指す",
        "地域地区の一つである",
        "区域区分そのものである"
      ],
      proposedAnswerIndex: 2,
      explanation: "都市計画法8条は、用途地域を地域地区の一つとして位置付けている。",
      sourceIds: ["egov-city-planning-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-63-002",
      unitId: "use-districts",
      unitOrder: 63,
      factIds: ["u63-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "用途地域ごとの建築物の用途制限について正しいものはどれか。",
      choices: [
        "民法だけで定められる",
        "農地法だけで定められる",
        "地方税法だけで定められる",
        "建築基準法48条により用途地域ごとに建築できる建築物の用途が制限される"
      ],
      proposedAnswerIndex: 3,
      explanation: "用途地域が定められた区域では、建築基準法48条により用途地域ごとに建築できる建築物の用途が制限される。",
      sourceIds: ["egov-building-standards-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-64-001",
      unitId: "city-planning-decisions",
      unitOrder: 64,
      factIds: ["u64-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "都市計画を定める主体について正しいものはどれか。",
      choices: [
        "広域的・根幹的な都市計画を都道府県が、その他を市町村が定めるという基本的な役割分担がある",
        "すべて国土交通大臣だけが定める",
        "すべて市町村長だけが定める",
        "民間事業者だけが定める"
      ],
      proposedAnswerIndex: 0,
      explanation: "都市計画法15条は、広域的・根幹的な都市計画を都道府県が、その他を市町村が定める基本的な役割分担を定める。",
      sourceIds: ["egov-city-planning-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-64-002",
      unitId: "city-planning-decisions",
      unitOrder: 64,
      factIds: ["u64-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "都市計画事業の施行について正しいものはどれか。",
      choices: [
        "都市計画決定があれば認可等は一切不要である",
        "施行者に応じて国土交通大臣または都道府県知事の認可・承認を受けて施行される",
        "必ず市町村議会の全会一致だけで施行される",
        "民間事業者は一切施行できない"
      ],
      proposedAnswerIndex: 1,
      explanation: "都市計画法59条により、都市計画事業は施行者に応じて国土交通大臣または都道府県知事の認可・承認を受けて施行される。",
      sourceIds: ["egov-city-planning-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-65-001",
      unitId: "development-permission-required",
      unitOrder: 65,
      factIds: ["u65-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "都市計画区域または準都市計画区域内で一定の開発行為をしようとする場合について正しいものはどれか。",
      choices: [
        "常に許可不要である",
        "市町村長への事後届出だけで足りる",
        "原則として都道府県知事等の許可が必要である",
        "法務局の登記だけで足りる"
      ],
      proposedAnswerIndex: 2,
      explanation: "都市計画法29条により、都市計画区域または準都市計画区域内で開発行為をしようとする者は、原則として都道府県知事等の許可を受ける必要がある。",
      sourceIds: ["egov-city-planning-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-65-002",
      unitId: "development-permission-required",
      unitOrder: 65,
      factIds: ["u65-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "都市計画法上の開発許可について正しいものはどれか。",
      choices: [
        "例外なく全ての開発行為に必要である",
        "住宅建築にだけ必要である",
        "区域に関係なく全国一律に同じ扱いである",
        "公益上必要な建築物に係る開発行為など、法律上の許可不要例外がある"
      ],
      proposedAnswerIndex: 3,
      explanation: "都市計画法29条は、公益上必要な建築物に係る開発行為など、開発許可が不要となる例外も定めている。",
      sourceIds: ["egov-city-planning-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-66-001",
      unitId: "development-permission-procedure",
      unitOrder: 66,
      factIds: ["u66-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "開発許可を受けた工事が完了した場合の手続として正しいものはどれか。",
      choices: [
        "許可を受けた者が都道府県知事等へ工事完了を届け出る",
        "何の手続も不要である",
        "法務局へ所有権移転登記だけを申請する",
        "国税庁へ完成申告をする"
      ],
      proposedAnswerIndex: 0,
      explanation: "都市計画法36条により、開発許可を受けた工事が完了したときは、許可を受けた者が都道府県知事等へ届け出る。",
      sourceIds: ["egov-city-planning-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-66-002",
      unitId: "development-permission-procedure",
      unitOrder: 66,
      factIds: ["u66-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "開発工事の完了届後の流れとして正しいものはどれか。",
      choices: [
        "届出だけで直ちに自由使用となり検査はない",
        "都道府県知事等が許可内容への適合を検査し、適合していれば検査済証を交付して工事完了を公告する",
        "裁判所が検査済証を交付する",
        "国税庁が完了公告をする"
      ],
      proposedAnswerIndex: 1,
      explanation: "都市計画法36条により、都道府県知事等は工事を検査し、適合していれば検査済証を交付し、工事完了を公告する。",
      sourceIds: ["egov-city-planning-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-67-001",
      unitId: "building-confirmation",
      unitOrder: 67,
      factIds: ["u67-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "建築基準法上の建築確認について正しいものはどれか。",
      choices: [
        "工事完了後だけに行う",
        "全ての工作物について例外なく必要である",
        "一定の建築物の建築等では、工事着手前に確認申請が必要となる",
        "確認は税務署へ申請する"
      ],
      proposedAnswerIndex: 2,
      explanation: "建築基準法6条は、一定の建築物の建築等をしようとする建築主に、工事着手前の確認申請を求めている。",
      sourceIds: ["egov-building-standards-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-67-002",
      unitId: "building-confirmation",
      unitOrder: 67,
      factIds: ["u67-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "建築確認を行う者と確認済証について正しいものはどれか。",
      choices: [
        "税務署長が確認し納税証明書を交付する",
        "市町村議会が確認し議決書を交付する",
        "法務局が確認し登記識別情報を交付する",
        "建築主事または指定確認検査機関が確認し、適合が確認されると確認済証が交付される"
      ],
      proposedAnswerIndex: 3,
      explanation: "建築確認は建築主事または指定確認検査機関が行い、適合が確認されると確認済証が交付される。",
      sourceIds: ["egov-building-standards-act-20260401"],
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

  window.TakkenPendingQuestions4867 = Object.freeze(Q);
})();
