(() => {
  "use strict";

  const Q = [
    {
      id: "takken-q-78-001",
      unitId: "legal-restrictions-comparison",
      unitOrder: 78,
      factIds: ["u78-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "都市計画法29条の開発許可について正しいものはどれか。",
      choices: [
        "一定の開発行為を行う前に、原則として許可を受ける制度である",
        "土地売買契約後に権利取得者が行う事後届出である",
        "登記完了後に法務局へ提出する届出である",
        "開発行為完了後にのみ申請できる制度である"
      ],
      proposedAnswerIndex: 0,
      explanation: "都市計画法29条の開発許可は、一定の開発行為を行う前に原則として都道府県知事等の許可を受ける制度である。",
      sourceIds: ["egov-city-planning-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-78-002",
      unitId: "legal-restrictions-comparison",
      unitOrder: 78,
      factIds: ["u78-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "国土利用計画法23条の事後届出について正しいものはどれか。",
      choices: [
        "一定規模以上の土地売買等では売主が契約前に行う",
        "一定規模以上の土地売買等では契約締結後に権利取得者が行う",
        "すべての土地売買で宅建業者が契約前に行う",
        "登記官が所有権移転登記と同時に行う"
      ],
      proposedAnswerIndex: 1,
      explanation: "国土利用計画法23条の届出は、一定規模以上の土地売買等について、契約締結後に土地に関する権利の取得者が行う事後届出である。",
      sourceIds: ["egov-national-land-use-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-79-001",
      unitId: "real-estate-acquisition-tax",
      unitOrder: 79,
      factIds: ["u79-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "不動産取得税について正しいものはどれか。",
      choices: [
        "国が全国一律に課する国税である",
        "不動産所在の市町村が課する市町村税である",
        "不動産の取得に対し、その不動産所在の都道府県が取得者に課する税である",
        "不動産を売却した者だけに課される税である"
      ],
      proposedAnswerIndex: 2,
      explanation: "不動産取得税は、不動産の取得に対し、その不動産所在の都道府県が不動産取得者に課する地方税である。",
      sourceIds: ["egov-local-tax-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-79-002",
      unitId: "real-estate-acquisition-tax",
      unitOrder: 79,
      factIds: ["u79-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "不動産取得税の課税について正しいものはどれか。",
      choices: [
        "登記をした場合に限って課税される",
        "有償で取得した場合に限って課税される",
        "売買による取得には課税されない",
        "原則として登記の有無や有償・無償を問わず、所有権取得の事実に着目して課税される"
      ],
      proposedAnswerIndex: 3,
      explanation: "不動産取得税は原則として、登記の有無や有償・無償を問わず、不動産の所有権を取得した事実に着目して課税される。",
      sourceIds: ["egov-local-tax-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-80-001",
      unitId: "fixed-asset-tax",
      unitOrder: 80,
      factIds: ["u80-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "固定資産税の納税義務者について、地方税法上の原則として正しいものはどれか。",
      choices: [
        "固定資産の所有者である",
        "固定資産を使用している者であれば所有者でなくても常に納税義務者となる",
        "固定資産を仲介した宅建業者である",
        "固定資産の所在地を管轄する登記官である"
      ],
      proposedAnswerIndex: 0,
      explanation: "地方税法343条は、固定資産税を原則として固定資産の所有者に課すると定めている。",
      sourceIds: ["egov-local-tax-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-80-002",
      unitId: "fixed-asset-tax",
      unitOrder: 80,
      factIds: ["u80-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "固定資産税の賦課期日として正しいものはどれか。",
      choices: [
        "毎年4月1日",
        "毎年1月1日",
        "毎年7月1日",
        "毎年12月31日"
      ],
      proposedAnswerIndex: 1,
      explanation: "地方税法359条は、固定資産税の賦課期日を当該年度の初日の属する年の1月1日と定めている。",
      sourceIds: ["egov-local-tax-act-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-81-001",
      unitId: "registration-license-tax",
      unitOrder: 81,
      factIds: ["u81-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "登録免許税について正しいものはどれか。",
      choices: [
        "不動産の保有そのものに毎年課される市町村税である",
        "不動産の取得事実だけを課税原因とする都道府県税である",
        "不動産等の登記・登録、免許、許可等について課税される",
        "不動産売買契約書を作成した場合にのみ課される"
      ],
      proposedAnswerIndex: 2,
      explanation: "登録免許税は、不動産等の登記・登録のほか、免許、許可等について課税される国税である。",
      sourceIds: ["nta-registration-tax-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-81-002",
      unitId: "registration-license-tax",
      unitOrder: 81,
      factIds: ["u81-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "登録免許税の納税義務者について原則として正しいものはどれか。",
      choices: [
        "登記所の職員である",
        "常に不動産の売主だけである",
        "常に司法書士だけである",
        "登記や登録等を受ける者である"
      ],
      proposedAnswerIndex: 3,
      explanation: "登録免許税の納税義務者は、原則として登記や登録等を受ける者である。",
      sourceIds: ["nta-registration-tax-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-82-001",
      unitId: "stamp-tax",
      unitOrder: 82,
      factIds: ["u82-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "印紙税法上、不動産売買契約書など不動産の譲渡に関する契約書の位置付けとして正しいものはどれか。",
      choices: [
        "第1号文書に該当する",
        "課税文書には一切該当しない",
        "第20号文書にのみ該当する",
        "契約金額にかかわらず必ず非課税文書となる"
      ],
      proposedAnswerIndex: 0,
      explanation: "不動産売買契約書など、不動産の譲渡に関する契約書は印紙税の第1号文書に該当する。",
      sourceIds: ["nta-stamp-tax-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-82-002",
      unitId: "stamp-tax",
      unitOrder: 82,
      factIds: ["u82-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "不動産譲渡契約書の印紙税について正しいものはどれか。",
      choices: [
        "軽減措置は一切設けられていない",
        "一定期間に作成される一定額超の契約書には軽減措置が設けられている",
        "すべての不動産譲渡契約書は印紙税が0円になる",
        "軽減措置は賃貸借契約書だけに適用される"
      ],
      proposedAnswerIndex: 1,
      explanation: "一定期間に作成される一定額超の不動産譲渡契約書には、印紙税の軽減措置が設けられている。",
      sourceIds: ["nta-stamp-tax-relief-20260401"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-83-001",
      unitId: "income-tax-real-estate-transfer",
      unitOrder: 83,
      factIds: ["u83-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "土地や建物を譲渡した場合の譲渡所得の課税方法について正しいものはどれか。",
      choices: [
        "必ず給与所得と合算して総合課税する",
        "所得税は一切課税されない",
        "給与所得など他の所得と区分して計算する分離課税である",
        "固定資産税としてのみ課税される"
      ],
      proposedAnswerIndex: 2,
      explanation: "土地や建物の譲渡所得は、給与所得など他の所得と区分して計算する分離課税である。",
      sourceIds: ["nta-real-estate-transfer-2026"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-83-002",
      unitId: "income-tax-real-estate-transfer",
      unitOrder: 83,
      factIds: ["u83-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "土地・建物の譲渡所得を長期譲渡所得と短期譲渡所得に区分する基準として正しいものはどれか。",
      choices: [
        "売買契約締結日時点で所有期間が3年を超えるかどうか",
        "引渡日時点で所有期間が10年を超えるかどうか",
        "登記申請日時点で所有期間が5年以上かどうか",
        "譲渡年の1月1日現在で所有期間が5年を超えるかどうか"
      ],
      proposedAnswerIndex: 3,
      explanation: "譲渡年の1月1日現在で所有期間が5年を超える場合は長期譲渡所得、5年以下なら短期譲渡所得となる。",
      sourceIds: ["nta-real-estate-transfer-2026"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-84-001",
      unitId: "land-price-public-notice",
      unitOrder: 84,
      factIds: ["u84-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "地価公示における標準地の正常な価格について正しいものはどれか。",
      choices: [
        "土地鑑定委員会が、2人以上の不動産鑑定士の鑑定評価を求めて判定する",
        "市町村長が固定資産税評価額と同額に決定する",
        "宅建業者が自由に決定する",
        "法務局が登記申請のたびに判定する"
      ],
      proposedAnswerIndex: 0,
      explanation: "地価公示では、土地鑑定委員会が標準地について2人以上の不動産鑑定士の鑑定評価を求め、正常な価格を判定する。",
      sourceIds: ["mlit-land-price-system"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-84-002",
      unitId: "land-price-public-notice",
      unitOrder: 84,
      factIds: ["u84-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "地価公示の標準地について鑑定評価を行う際の考え方として正しいものはどれか。",
      choices: [
        "収益還元法だけを用い、他の手法は考慮しない",
        "取引事例比較法・収益還元法・原価法等の結果を勘案する",
        "固定資産税評価額だけをそのまま採用する",
        "売主の希望価格だけを基礎にする"
      ],
      proposedAnswerIndex: 1,
      explanation: "標準地の鑑定評価では、取引事例比較法・収益還元法・原価法等の結果を勘案して評価する。",
      sourceIds: ["mlit-land-price-system"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-85-001",
      unitId: "real-estate-appraisal",
      unitOrder: 85,
      factIds: ["u85-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "不動産鑑定評価の基本的な三方式の組合せとして正しいものはどれか。",
      choices: [
        "原価方式・税務方式・登記方式",
        "比較方式・登記方式・融資方式",
        "原価方式・比較方式・収益方式",
        "売買方式・賃貸方式・交換方式"
      ],
      proposedAnswerIndex: 2,
      explanation: "不動産鑑定評価の方式には、原価方式、比較方式、収益方式の三方式がある。",
      sourceIds: ["mlit-appraisal-standard"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-85-002",
      unitId: "real-estate-appraisal",
      unitOrder: 85,
      factIds: ["u85-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "不動産の価格を求める基本的手法の組合せとして正しいものはどれか。",
      choices: [
        "原価法・固定資産法・路線価法",
        "収益還元法・登記法・課税法",
        "取引事例比較法・公示価格法・固定資産税評価法",
        "原価法・取引事例比較法・収益還元法"
      ],
      proposedAnswerIndex: 3,
      explanation: "不動産の価格を求める基本的手法は、原価法、取引事例比較法、収益還元法に大別される。",
      sourceIds: ["mlit-appraisal-standard"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-86-001",
      unitId: "housing-finance-agency",
      unitOrder: 86,
      factIds: ["u86-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "フラット35の金利の特徴として正しいものはどれか。",
      choices: [
        "全期間固定金利である",
        "毎月必ず金利が変動する",
        "借入後5年間だけ無利息である",
        "金利は金融機関が変更できず常に0％である"
      ],
      proposedAnswerIndex: 0,
      explanation: "フラット35は全期間固定金利の住宅ローンである。",
      sourceIds: ["jhf-flat35-overview"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-86-002",
      unitId: "housing-finance-agency",
      unitOrder: 86,
      factIds: ["u86-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "住宅金融支援機構の証券化支援事業（買取型）について正しいものはどれか。",
      choices: [
        "機構が住宅を直接建築して販売する制度である",
        "機構が民間金融機関からフラット35の住宅ローン債権を買い取り、それを基礎に資金調達を行う",
        "民間金融機関が機構から土地を買い取る制度である",
        "借入者が機構の株式を購入する制度である"
      ],
      proposedAnswerIndex: 1,
      explanation: "証券化支援事業（買取型）では、住宅金融支援機構が民間金融機関からフラット35の住宅ローン債権を買い取り、それを基礎に資金調達を行う。",
      sourceIds: ["jhf-flat35-overview"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-87-001",
      unitId: "fair-competition-advertising",
      unitOrder: 87,
      factIds: ["u87-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "不動産広告における交通の利便性や徒歩所要時間の表示について正しいものはどれか。",
      choices: [
        "実際より良く見せる表示でも広告主の判断で自由に行える",
        "徒歩所要時間は表示規制の対象外である",
        "実際より良く見せる誤認表示は禁止される",
        "交通利便性は必ず実際より短く表示しなければならない"
      ],
      proposedAnswerIndex: 2,
      explanation: "不動産の表示規約では、交通の利便性や徒歩所要時間を実際より良く見せる誤認表示が禁止されている。",
      sourceIds: ["rftc-display-rules"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-87-002",
      unitId: "fair-competition-advertising",
      unitOrder: 87,
      factIds: ["u87-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "不動産広告の面積や取引態様の表示について正しいものはどれか。",
      choices: [
        "面積については事実と異なる表示をしてもよい",
        "取引態様は表示しなくてもよい",
        "実際より有利に見えるなら事実と異なってもよい",
        "事実と異なる、または実際より有利・優良と誤認させる表示は禁止対象となる"
      ],
      proposedAnswerIndex: 3,
      explanation: "物件の面積や取引態様についても、事実と異なる表示や実際より有利・優良と誤認させる表示は規約上の禁止対象となる。",
      sourceIds: ["rftc-display-rules"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-88-001",
      unitId: "land-building-knowledge",
      unitOrder: 88,
      factIds: ["u88-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "国土地理院の土地条件図について正しいものはどれか。",
      choices: [
        "山地・台地・低地・人工地形などの地形分類を示し、防災や土地利用の基礎資料として利用される",
        "土地の所有権者だけを一覧表示する図である",
        "建物の固定資産税額だけを示す図である",
        "用途地域だけを示す都市計画図と同一である"
      ],
      proposedAnswerIndex: 0,
      explanation: "土地条件図は、山地・台地・低地・人工地形などの地形分類を示し、防災や土地利用の基礎資料として利用される。",
      sourceIds: ["gsi-land-condition-map"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-88-002",
      unitId: "land-building-knowledge",
      unitOrder: 88,
      factIds: ["u88-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "土地の地形分類と災害リスクについて正しいものはどれか。",
      choices: [
        "旧河道や後背低地は災害リスクを考慮する必要がない",
        "旧河道、後背低地、盛土地・埋立地などでは、洪水や液状化等のリスクに注意が必要である",
        "盛土地・埋立地は必ず災害が発生するため利用できない",
        "地形分類は災害リスクの把握には一切利用できない"
      ],
      proposedAnswerIndex: 1,
      explanation: "旧河道、後背低地、盛土地・埋立地などは、地形分類に応じて洪水や液状化等の災害リスクに注意が必要である。",
      sourceIds: ["gsi-land-condition-map"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-89-001",
      unitId: "statistics",
      unitOrder: 89,
      factIds: ["u89-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "令和8年地価公示の全国平均について、国土交通省の公表内容として正しいものはどれか。",
      choices: [
        "全用途平均・住宅地・商業地はいずれも5年連続で下落した",
        "住宅地だけが上昇し、全用途平均と商業地は下落した",
        "全用途平均・住宅地・商業地はいずれも5年連続で上昇した",
        "全用途平均だけが横ばいで、住宅地と商業地は下落した"
      ],
      proposedAnswerIndex: 2,
      explanation: "令和8年地価公示では、全国平均の全用途平均・住宅地・商業地はいずれも5年連続で上昇したと国土交通省が公表している。",
      sourceIds: ["mlit-2026-land-price"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-89-002",
      unitId: "statistics",
      unitOrder: 89,
      factIds: ["u89-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "令和7年度の新設住宅着工戸数について、国土交通省の公表内容として正しいものはどれか。",
      choices: [
        "持家・貸家・分譲住宅のすべてが増加した",
        "持家だけが増加し、貸家・分譲住宅は横ばいだった",
        "前年度と完全に同数だった",
        "持家・貸家・分譲住宅が減少し、前年度の増加から再び減少した"
      ],
      proposedAnswerIndex: 3,
      explanation: "令和7年度の新設住宅着工戸数は、持家・貸家・分譲住宅が減少し、前年度の増加から再び減少したと国土交通省が公表している。",
      sourceIds: ["mlit-2025-housing-starts"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-90-001",
      unitId: "five-question-exemption-review",
      unitOrder: 90,
      factIds: ["u90-f1"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅建試験の登録講習修了者に対する5問免除について正しいものはどれか。",
      choices: [
        "通常50問のところ、登録講習修了者は5問が免除され45問を解答する",
        "通常40問のところ、登録講習修了者は10問が免除され30問を解答する",
        "登録講習修了者も必ず50問すべてを解答する",
        "登録講習修了者は試験そのものが全問免除される"
      ],
      proposedAnswerIndex: 0,
      explanation: "宅建試験は通常50問の四肢択一式で、登録講習修了者は5問が免除され45問となる。",
      sourceIds: ["retio-2026-exam"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    },
    {
      id: "takken-q-90-002",
      unitId: "five-question-exemption-review",
      unitOrder: 90,
      factIds: ["u90-f2"],
      examYear: 2026,
      lawAsOf: "2026-04-01",
      stem: "宅建の登録講習と試験の一部免除について正しいものはどれか。",
      choices: [
        "誰でも従業者証明書なしで登録講習を受講でき、修了後10年間免除される",
        "宅地建物取引業に従事し従業者証明書を持つ者が受講でき、修了試験合格後3年以内に行われる試験で一部免除を受けられる",
        "宅建士証の交付を受けた者だけが受講でき、修了後1回だけ全問免除される",
        "登録講習を受講すれば修了試験に合格しなくても5問免除される"
      ],
      proposedAnswerIndex: 1,
      explanation: "登録講習は宅地建物取引業に従事し従業者証明書を持つ者が受講でき、修了試験合格後3年以内に行われる宅建試験で一部免除を受けられる。",
      sourceIds: ["retio-registration-course"],
      validationStatus: "pending_validation",
      validationMeta: { checkedAt: null, result: null }
    }
  ];

  const normalize = (value) => String(value).normalize("NFKC").replace(/\s+/g, "").toLowerCase();
  const ids = new Set();
  const stems = new Set();
  const answerPositions = [0, 0, 0, 0];

  for (const q of Q) {
    if (ids.has(q.id)) throw new Error(`Duplicate question id: ${q.id}`);
    ids.add(q.id);
    const normalizedStem = normalize(q.stem);
    if (stems.has(normalizedStem)) throw new Error(`Duplicate normalized stem: ${q.id}`);
    stems.add(normalizedStem);
    if (!Array.isArray(q.choices) || q.choices.length !== 4) throw new Error(`Invalid choice count: ${q.id}`);
    if (new Set(q.choices.map(normalize)).size !== 4) throw new Error(`Duplicate choices: ${q.id}`);
    if (!Number.isInteger(q.proposedAnswerIndex) || q.proposedAnswerIndex < 0 || q.proposedAnswerIndex > 3) throw new Error(`Invalid answer index: ${q.id}`);
    if (q.validationStatus !== "pending_validation") throw new Error(`Invalid validation status: ${q.id}`);
    if (q.examYear !== 2026 || q.lawAsOf !== "2026-04-01") throw new Error(`Invalid exam metadata: ${q.id}`);
    answerPositions[q.proposedAnswerIndex] += 1;
  }

  const expectedDistribution = [7, 7, 6, 6];
  if (answerPositions.some((count, index) => count !== expectedDistribution[index])) {
    throw new Error(`Unbalanced answer positions: ${answerPositions.join(",")}`);
  }

  window.TakkenPendingQuestions7890 = Object.freeze(Q);
})();
