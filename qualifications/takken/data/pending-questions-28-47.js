(() => {
  "use strict";

  const Q = [
    {
      id: "takken-q-28-001",
      unitId: "damages-penalty",
      unitOrder: 28,
      factIds: ["u28-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅建業者が自ら売主となる売買契約で、損害賠償額の予定と違約金の合算額について正しいものはどれか。",
      choices: [
        "代金の20%までである",
        "代金の10%までである",
        "代金の30%までである",
        "上限はない"
      ],
      proposedAnswerIndex: 0,
      explanation: "宅建業者が自ら売主となる売買契約では、損害賠償額の予定と違約金の合算額は代金の20%を超える定めをしてはならない。",
      sourceIds: ["egov-takken-law-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-28-002",
      unitId: "damages-penalty",
      unitOrder: 28,
      factIds: ["u28-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "損害賠償額の予定と違約金の合算額が代金の20%を超える特約について、正しいものはどれか。",
      choices: [
        "特約全体が当然に無効となる",
        "超える部分について無効となる",
        "買主が同意すれば全額有効となる",
        "都道府県知事の承認があれば全額有効となる"
      ],
      proposedAnswerIndex: 1,
      explanation: "20%を超える特約は、超える部分について無効となる。",
      sourceIds: ["egov-takken-law-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-29-001",
      unitId: "contract-nonconformity-special-rule",
      unitOrder: 29,
      factIds: ["u29-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅建業者が自ら売主となる売買で、契約不適合責任に関する特約として認められるものはどれか。",
      choices: [
        "民法566条の期間を引渡しの日から6か月とする",
        "民法566条の期間を引渡しの日から1年とする",
        "民法566条の期間を引渡しの日から2年以上とする",
        "契約不適合責任を全面的に免除する"
      ],
      proposedAnswerIndex: 2,
      explanation: "民法566条の期間を引渡しの日から2年以上とする特約は許されるが、それ以外に買主へ不利な特約は原則として制限される。",
      sourceIds: ["egov-takken-law-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-29-002",
      unitId: "contract-nonconformity-special-rule",
      unitOrder: 29,
      factIds: ["u29-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅建業者が自ら売主となる売買で、宅建業法の制限に反して買主に不利な契約不適合責任の特約をした場合、その特約はどうなるか。",
      choices: [
        "有効である",
        "知事の承認があれば有効となる",
        "買主が宅建士なら常に有効となる",
        "無効となる"
      ],
      proposedAnswerIndex: 3,
      explanation: "宅建業法の制限に反する買主に不利な特約は無効となる。",
      sourceIds: ["egov-takken-law-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-30-001",
      unitId: "unowned-property-restriction",
      unitOrder: 30,
      factIds: ["u30-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅建業者が自ら売主として、自己の所有に属しない宅地または建物を売買することについて、正しいものはどれか。",
      choices: [
        "原則として制限される",
        "常に自由に契約できる",
        "賃貸借だけが制限される",
        "個人業者だけが制限される"
      ],
      proposedAnswerIndex: 0,
      explanation: "宅建業法33条の2は、宅建業者が自ら売主として自己の所有に属しない宅地または建物を売買することを原則として制限している。",
      sourceIds: ["egov-takken-law-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-30-002",
      unitId: "unowned-property-restriction",
      unitOrder: 30,
      factIds: ["u30-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅建業者が自ら売主として自己所有でない物件を売る場合の例外として、正しいものはどれか。",
      choices: [
        "買主が口頭で同意した場合は常に自由",
        "その物件を取得する契約を締結している場合など、法定要件を満たす場合",
        "広告を出してから1か月経過した場合",
        "売買代金が1000万円以下の場合"
      ],
      proposedAnswerIndex: 1,
      explanation: "宅建業者が当該物件を取得する契約を締結している場合など、法定の例外がある。",
      sourceIds: ["egov-takken-law-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-31-001",
      unitId: "installment-sales-ownership",
      unitOrder: 31,
      factIds: ["u31-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅建業者が自ら売主となる割賦販売で、賦払金の支払遅滞を理由に契約を解除するための催告として、正しいものはどれか。",
      choices: [
        "7日以上の口頭催告",
        "14日以上の口頭催告",
        "30日以上の期間を定めた書面による催告",
        "催告は不要"
      ],
      proposedAnswerIndex: 2,
      explanation: "賦払金の支払遅滞を理由に解除するには、30日以上の相当期間を定めて書面で催告し、その期間内に履行がないことが原則として必要である。",
      sourceIds: ["egov-takken-law-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-31-002",
      unitId: "installment-sales-ownership",
      unitOrder: 31,
      factIds: ["u31-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅建業者が自ら売主となる割賦販売の所有権留保等の規制で重要な基準となる割合はどれか。",
      choices: [
        "代金の10%",
        "代金の20%",
        "代金の50%",
        "代金の30%"
      ],
      proposedAnswerIndex: 3,
      explanation: "宅建業法43条では、引渡しや代金の30%超の支払時点を基準とする所有権留保等の制限が置かれている。",
      sourceIds: ["egov-takken-law-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-32-001",
      unitId: "brokerage-fees",
      unitOrder: 32,
      factIds: ["u32-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅建業者が売買・交換・貸借の代理または媒介に関して受けられる報酬額を定める者は誰か。",
      choices: [
        "国土交通大臣",
        "都道府県知事",
        "市町村長",
        "法務大臣"
      ],
      proposedAnswerIndex: 0,
      explanation: "宅建業者が代理または媒介に関して受けられる報酬額は国土交通大臣が定める。",
      sourceIds: ["egov-takken-law-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-32-002",
      unitId: "brokerage-fees",
      unitOrder: 32,
      factIds: ["u32-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅建業者の媒介・代理の報酬について、正しいものはどれか。",
      choices: [
        "国土交通大臣が定めた額を超えて受け取ってよい",
        "国土交通大臣が定めた額を超えて受けてはならない",
        "依頼者が同意すれば上限を超えてよい",
        "法人の宅建業者には上限がない"
      ],
      proposedAnswerIndex: 1,
      explanation: "宅建業者は国土交通大臣が定めた額を超えて報酬を受けてはならない。",
      sourceIds: ["egov-takken-law-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-33-001",
      unitId: "supervision-penalties",
      unitOrder: 33,
      factIds: ["u33-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅建業法65条による業務停止処分の期間について、正しいものはどれか。",
      choices: [
        "3か月以内に限る",
        "6か月以内に限る",
        "1年以内の期間を定めて命じることがある",
        "期間の上限はない"
      ],
      proposedAnswerIndex: 2,
      explanation: "宅建業法65条では、一定の場合に1年以内の期間を定めて業務の全部または一部の停止を命じることができる。",
      sourceIds: ["egov-takken-law-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-33-002",
      unitId: "supervision-penalties",
      unitOrder: 33,
      factIds: ["u33-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅建業法66条について、正しいものはどれか。",
      choices: [
        "報酬額の上限だけを定めている",
        "宅建士証の有効期間だけを定めている",
        "媒介契約の種類だけを定めている",
        "一定の重大事由について免許取消しを定めている"
      ],
      proposedAnswerIndex: 3,
      explanation: "宅建業法66条は、一定の重大事由について免許を取り消さなければならない場合を定めている。",
      sourceIds: ["egov-takken-law-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-34-001",
      unitId: "civil-intent-general",
      unitOrder: 34,
      factIds: ["u34-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "相手方のある意思表示が効力を生ずる時期について、民法の原則として正しいものはどれか。",
      choices: [
        "通知が相手方に到達した時",
        "意思表示を作成した時",
        "通知を発送した時",
        "相手方が内容を理解した時"
      ],
      proposedAnswerIndex: 0,
      explanation: "民法97条により、意思表示はその通知が相手方に到達した時から効力を生ずる。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-34-002",
      unitId: "civil-intent-general",
      unitOrder: 34,
      factIds: ["u34-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "相手方が正当な理由なく意思表示の通知の到達を妨げた場合について、正しいものはどれか。",
      choices: [
        "永遠に到達しないものと扱う",
        "通常到達すべき時に到達したものとみなされることがある",
        "発送時に必ず到達したものとみなす",
        "裁判所の許可がなければ効力は生じない"
      ],
      proposedAnswerIndex: 1,
      explanation: "相手方が正当な理由なく到達を妨げた場合、通常到達すべき時に到達したものとみなす規定がある。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-35-001",
      unitId: "civil-mistake",
      unitOrder: 35,
      factIds: ["u35-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "民法上の錯誤による意思表示について、正しいものはどれか。",
      choices: [
        "どのような勘違いでも必ず無効となる",
        "錯誤は一切取り消せない",
        "一定の錯誤が法律行為の目的・取引上の社会通念に照らして重要であれば、要件の下で取り消すことができる",
        "相手方が法人の場合だけ取り消せる"
      ],
      proposedAnswerIndex: 2,
      explanation: "民法95条は、一定の錯誤が法律行為の目的および取引上の社会通念に照らして重要な場合に取消しを認めている。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-35-002",
      unitId: "civil-mistake",
      unitOrder: 35,
      factIds: ["u35-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "錯誤による取消しについて、正しいものはどれか。",
      choices: [
        "表意者に重大な過失があっても常に無条件で取り消せる",
        "第三者保護の規定は存在しない",
        "錯誤は常に当然無効であり取消しの問題にならない",
        "表意者の重大な過失や第三者保護に関する制限がある"
      ],
      proposedAnswerIndex: 3,
      explanation: "錯誤による取消しには、表意者の重大な過失や第三者保護に関する制限がある。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-36-001",
      unitId: "civil-fraud-duress",
      unitOrder: 36,
      factIds: ["u36-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "詐欺または強迫による意思表示について、民法上正しいものはどれか。",
      choices: [
        "どちらも取り消すことができる",
        "詐欺だけ取り消せる",
        "強迫だけ取り消せる",
        "どちらも当然無効である"
      ],
      proposedAnswerIndex: 0,
      explanation: "民法96条1項は、詐欺または強迫による意思表示を取り消すことができると定める。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-36-002",
      unitId: "civil-fraud-duress",
      unitOrder: 36,
      factIds: ["u36-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "詐欺による意思表示の取消しと第三者の関係について、正しいものはどれか。",
      choices: [
        "善意かつ無過失の第三者にも常に対抗できる",
        "善意かつ無過失の第三者には対抗できない",
        "悪意の第三者にしか対抗できない",
        "第三者の善意・悪意は一切関係しない"
      ],
      proposedAnswerIndex: 1,
      explanation: "詐欺による意思表示の取消しは、善意かつ無過失の第三者に対抗できない。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-37-001",
      unitId: "civil-fictitious-declaration",
      unitOrder: 37,
      factIds: ["u37-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "心裡留保による意思表示について、正しいものはどれか。",
      choices: [
        "常に無効である",
        "原則無効だが公証すれば有効になる",
        "原則有効だが、相手方が真意でないことを知りまたは知ることができたときは無効となる",
        "必ず取り消しの対象となる"
      ],
      proposedAnswerIndex: 2,
      explanation: "民法93条は心裡留保を原則有効とし、相手方が真意でないことを知りまたは知ることができたときは無効とする。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-37-002",
      unitId: "civil-fictitious-declaration",
      unitOrder: 37,
      factIds: ["u37-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "相手方と通じてした虚偽の意思表示について、正しいものはどれか。",
      choices: [
        "当事者間でも常に有効である",
        "1年後に自動的に有効になる",
        "裁判所の許可がなければ成立しない",
        "当事者間では無効である"
      ],
      proposedAnswerIndex: 3,
      explanation: "民法94条は、相手方と通じてした虚偽の意思表示を無効とする。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-38-001",
      unitId: "civil-limited-capacity",
      unitOrder: 38,
      factIds: ["u38-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "未成年者の法律行為について、民法上の原則として正しいものはどれか。",
      choices: [
        "原則として法定代理人の同意が必要で、同意なくした行為は取り消すことができる",
        "法定代理人の同意は原則不要である",
        "未成年者の行為はすべて当然無効である",
        "18歳未満だけでなく20歳未満はすべて未成年者である"
      ],
      proposedAnswerIndex: 0,
      explanation: "未成年者が法律行為をするには原則として法定代理人の同意が必要で、同意なくした行為は取り消すことができる。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-38-002",
      unitId: "civil-limited-capacity",
      unitOrder: 38,
      factIds: ["u38-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "成年被後見人の法律行為について、正しいものはどれか。",
      choices: [
        "すべて当然無効である",
        "日用品の購入その他日常生活に関する行為を除き取り消すことができる",
        "日常生活に関する行為だけ取り消すことができる",
        "成年後見人の事前同意があれば一切取り消せない"
      ],
      proposedAnswerIndex: 1,
      explanation: "成年被後見人の法律行為は、日用品の購入その他日常生活に関する行為を除き取り消すことができる。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-39-001",
      unitId: "civil-agency",
      unitOrder: 39,
      factIds: ["u39-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "代理人が権限内で本人のためにすることを示してした意思表示の効果について、正しいものはどれか。",
      choices: [
        "代理人だけに効力が生じる",
        "相手方にだけ効力が生じる",
        "本人に直接効力が生じる",
        "裁判所の承認まで効力が生じない"
      ],
      proposedAnswerIndex: 2,
      explanation: "民法99条により、代理人が権限内で本人のためにすることを示してした意思表示は本人に直接効力を生ずる。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-39-002",
      unitId: "civil-agency",
      unitOrder: 39,
      factIds: ["u39-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "代理人が本人のためにすることを示さずに意思表示をした場合の原則として、正しいものはどれか。",
      choices: [
        "本人のためにしたものとみなす",
        "当然に無効となる",
        "相手方のためにしたものとみなす",
        "代理人自身のためにしたものとみなす"
      ],
      proposedAnswerIndex: 3,
      explanation: "本人のためにすることを示さない意思表示は、原則として代理人自身のためにしたものとみなされる。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-40-001",
      unitId: "civil-unauthorized-agency",
      unitOrder: 40,
      factIds: ["u40-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "無権代理人が本人の代理人としてした契約について、正しいものはどれか。",
      choices: [
        "本人が追認しなければ原則として本人に対して効力を生じない",
        "本人が追認しなくても常に本人に効力が生じる",
        "無権代理人が成人なら本人に効力が生じる",
        "契約金額が少額なら自動的に有効となる"
      ],
      proposedAnswerIndex: 0,
      explanation: "民法113条により、無権代理人がした契約は本人が追認しなければ原則として本人に対して効力を生じない。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-40-002",
      unitId: "civil-unauthorized-agency",
      unitOrder: 40,
      factIds: ["u40-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "表見代理について、正しいものはどれか。",
      choices: [
        "無権代理では一切本人に効果が帰属する余地はない",
        "一定の外観と法定要件がある場合、本人に効果が帰属することがある",
        "本人が死亡した場合だけ成立する",
        "代理権が実際に存在する場合だけ成立する"
      ],
      proposedAnswerIndex: 1,
      explanation: "代理権授与表示、権限外行為、代理権消滅後など一定の要件の下で表見代理が成立し、本人に効果が帰属することがある。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-41-001",
      unitId: "civil-prescription",
      unitOrder: 41,
      factIds: ["u41-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "所有権の取得時効の期間について、正しいものはどれか。",
      choices: [
        "常に5年である",
        "原則30年で、善意なら20年である",
        "原則20年で、占有開始時に善意無過失なら10年である",
        "原則10年で、悪意なら5年である"
      ],
      proposedAnswerIndex: 2,
      explanation: "民法162条により、所有権の取得時効は原則20年、占有開始時に善意かつ無過失なら10年である。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-41-002",
      unitId: "civil-prescription",
      unitOrder: 41,
      factIds: ["u41-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "債権の消滅時効について、民法上の原則として正しいものはどれか。",
      choices: [
        "知った時から3年だけである",
        "行使できる時から20年だけである",
        "期間制限はない",
        "知った時から5年または行使できる時から10年である"
      ],
      proposedAnswerIndex: 3,
      explanation: "民法166条により、債権は原則として権利を行使できることを知った時から5年、または権利を行使できる時から10年で時効消滅する。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-42-001",
      unitId: "property-rights-opposability",
      unitOrder: 42,
      factIds: ["u42-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "物権の設定・移転が当事者間で効力を生じる要件について、民法上正しいものはどれか。",
      choices: [
        "当事者の意思表示のみによって効力を生じる",
        "必ず登記が必要である",
        "公証人の認証が必要である",
        "引渡しがなければ一切効力を生じない"
      ],
      proposedAnswerIndex: 0,
      explanation: "民法176条は、物権の設定および移転は当事者の意思表示のみによって効力を生ずると定める。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-42-002",
      unitId: "property-rights-opposability",
      unitOrder: 42,
      factIds: ["u42-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "不動産に関する物権変動を第三者に対抗するための原則的な要件はどれか。",
      choices: [
        "公正証書",
        "登記",
        "口頭通知",
        "固定資産税の納付"
      ],
      proposedAnswerIndex: 1,
      explanation: "民法177条により、不動産に関する物権の得喪および変更は登記をしなければ第三者に対抗できない。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-43-001",
      unitId: "co-ownership",
      unitOrder: 43,
      factIds: ["u43-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "共有者の持分が不明な場合について、民法上正しいものはどれか。",
      choices: [
        "最年長者の持分が最大と推定される",
        "出資額が不明なら共有関係は無効となる",
        "持分は相等しいものと推定される",
        "裁判所が決めるまで誰にも持分はない"
      ],
      proposedAnswerIndex: 2,
      explanation: "民法250条により、各共有者の持分が不明なときは相等しいものと推定される。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-43-002",
      unitId: "co-ownership",
      unitOrder: 43,
      factIds: ["u43-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "共有者による共有物の使用について、正しいものはどれか。",
      choices: [
        "自己の持分に相当する物理的部分だけ使用できる",
        "他の共有者全員の同意がなければ一切使用できない",
        "持分が2分の1未満なら使用できない",
        "共有物の全部について自己の持分に応じた使用ができる"
      ],
      proposedAnswerIndex: 3,
      explanation: "民法249条により、各共有者は共有物の全部について、その持分に応じた使用をすることができる。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-44-001",
      unitId: "mortgage",
      unitOrder: 44,
      factIds: ["u44-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "抵当権について、正しいものはどれか。",
      choices: [
        "目的不動産の占有を移さず、他の債権者に先立って弁済を受けることができる",
        "目的不動産の占有を必ず抵当権者へ移す",
        "動産にしか設定できない",
        "担保としての効力はない"
      ],
      proposedAnswerIndex: 0,
      explanation: "民法369条により、抵当権者は占有を移転せず担保に供された不動産について、他の債権者に先立って弁済を受ける権利を有する。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-44-002",
      unitId: "mortgage",
      unitOrder: 44,
      factIds: ["u44-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "抵当権設定時の目的不動産の占有について、正しいものはどれか。",
      choices: [
        "必ず抵当権者へ移転する",
        "抵当権者へ移転しない",
        "裁判所へ移転する",
        "法務局へ移転する"
      ],
      proposedAnswerIndex: 1,
      explanation: "抵当権は、質権と異なり目的不動産の占有を抵当権者へ移転しない。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-45-001",
      unitId: "default-damages",
      unitOrder: 45,
      factIds: ["u45-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "債務者が債務の本旨に従った履行をしない場合について、民法上正しいものはどれか。",
      choices: [
        "債権者は一切損害賠償を請求できない",
        "必ず契約が当然無効となる",
        "債権者は原則として損害賠償を請求できる",
        "刑事罰だけが問題となる"
      ],
      proposedAnswerIndex: 2,
      explanation: "民法415条は、債務者が債務の本旨に従った履行をしないとき等に、債権者が損害賠償を請求できることを原則とする。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-45-002",
      unitId: "default-damages",
      unitOrder: 45,
      factIds: ["u45-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "債務不履行による損害賠償責任について、正しいものはどれか。",
      choices: [
        "債務者に帰責できない事由による場合でも必ず責任を負う",
        "不可抗力でも常に倍額賠償する",
        "帰責事由は一切考慮されない",
        "債務者の責めに帰することができない事由による場合は責任を負わないことがある"
      ],
      proposedAnswerIndex: 3,
      explanation: "契約その他の債務発生原因および取引上の社会通念に照らして債務者の責めに帰することができない事由による場合は、損害賠償責任を負わない。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-46-001",
      unitId: "contract-cancellation",
      unitOrder: 46,
      factIds: ["u46-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "債務不履行を理由とする催告解除について、民法上の原則として正しいものはどれか。",
      choices: [
        "相当の期間を定めて履行を催告し、その期間内に履行がないときに解除できる",
        "催告なしで常に直ちに解除できる",
        "1年以上待たなければ解除できない",
        "裁判判決がなければ解除できない"
      ],
      proposedAnswerIndex: 0,
      explanation: "民法541条により、原則として相当の期間を定めて履行を催告し、その期間内に履行がないときに契約を解除できる。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-46-002",
      unitId: "contract-cancellation",
      unitOrder: 46,
      factIds: ["u46-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "無催告解除が認められる場合として、正しいものはどれか。",
      choices: [
        "どのような軽微な遅滞でも常に認められる",
        "債務の全部が履行不能である場合など一定の場合",
        "相手方が法人である場合だけ",
        "契約締結から1年経過した場合だけ"
      ],
      proposedAnswerIndex: 1,
      explanation: "民法542条は、債務の全部が履行不能である場合など一定の場合に、催告をせず直ちに契約を解除できると定める。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-47-001",
      unitId: "risk-simultaneous-performance",
      unitOrder: 47,
      factIds: ["u47-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "双務契約の同時履行の抗弁について、正しいものはどれか。",
      choices: [
        "自己の履行は常に先にしなければならない",
        "契約締結後は履行を拒むことは一切できない",
        "相手方が履行を提供するまで自己の債務の履行を拒むことができるのが原則である",
        "売買契約には適用されない"
      ],
      proposedAnswerIndex: 2,
      explanation: "民法533条により、双務契約の当事者の一方は、相手方が債務の履行を提供するまでは自己の債務の履行を拒むことができるのが原則である。",
      sourceIds: ["egov-civil-code-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-47-002",
      unitId: "risk-simultaneous-performance",
      unitOrder: 47,
      factIds: ["u47-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "当事者双方の責めに帰することができない事由によって債務を履行できなくなった場合について、民法上正しいものはどれか。",
      choices: [
        "債権者は必ず反対給付をしなければならない",
        "債務者は常に倍額の反対給付を受けられる",
        "契約は必ず刑事事件となる",
        "債権者は反対給付の履行を拒むことができる"
      ],
      proposedAnswerIndex: 3,
      explanation: "民法536条1項により、当事者双方の責めに帰することができない事由で債務を履行できなくなったとき、債権者は反対給付の履行を拒むことができる。",
      sourceIds: ["egov-civil-code-20260401"],
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

  window.TakkenPendingQuestions2847 = Object.freeze(Q);
})();
