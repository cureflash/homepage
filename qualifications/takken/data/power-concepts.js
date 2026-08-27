(() => {
  "use strict";

  const base = {
    examYear: 2026,
    lawAsOf: "2026-04-01",
    inventoryStatus: "normalized",
    phase: "4.1_concept_inventory"
  };

  const concepts = [
    { conceptId: "takken-concept-business-definition", title: "宅建業の定義", category: "takken-gyoho", sourceUnits: ["takken-gyoho-definition"], scopeNote: "売買・交換・代理・媒介と、自ら行う賃貸を区別して宅建業該当性を判断する。" },
    { conceptId: "takken-concept-license-required", title: "宅建業免許の要否", category: "takken-gyoho", sourceUnits: ["takken-gyoho-license-required"], scopeNote: "取引類型と業としての反復継続性から免許要否を判断する。" },
    { conceptId: "takken-concept-license-authority", title: "宅建業免許の免許権者", category: "takken-gyoho", sourceUnits: ["takken-gyoho-license-authority"], scopeNote: "事務所所在地の都道府県数から国土交通大臣免許と知事免許を区別する。" },
    { conceptId: "takken-concept-license-disqualification", title: "宅建業免許の欠格事由", category: "takken-gyoho", sourceUnits: ["takken-gyoho-license-disqualification"], scopeNote: "取消し・刑罰・不正行為等の欠格要件と期間制限を扱う。" },
    { conceptId: "takken-concept-license-validity-renewal", title: "宅建業免許の有効期間と更新", category: "takken-gyoho", sourceUnits: ["takken-gyoho-license-validity-renewal"], scopeNote: "5年の有効期間と更新申請期間を一体で扱う。" },
    { conceptId: "takken-concept-license-transfer", title: "免許換え", category: "takken-gyoho", sourceUnits: ["takken-gyoho-license-change-closure"], scopeNote: "事務所移転等で免許権者区分が変わる場合の免許換えを扱う。" },
    { conceptId: "takken-concept-license-change-closure", title: "変更届・廃業等の届出", category: "takken-gyoho", sourceUnits: ["takken-gyoho-license-change-closure"], scopeNote: "名簿登載事項の変更、廃業等の届出主体・期限を扱う。" },
    { conceptId: "takken-concept-roster", title: "宅地建物取引業者名簿", category: "takken-gyoho", sourceUnits: ["takken-gyoho-roster-signs"], scopeNote: "免許情報等を管理する宅地建物取引業者名簿の制度を扱う。" },
    { conceptId: "takken-concept-office-signs", title: "宅建業者の標識", category: "takken-gyoho", sourceUnits: ["takken-gyoho-roster-signs"], scopeNote: "事務所等での標識掲示義務を扱う。" },
    { conceptId: "takken-concept-takkenshi-registration", title: "宅地建物取引士の資格登録", category: "takken-gyoho", sourceUnits: ["takken-shi-registration"], scopeNote: "試験合格、資格登録、宅建士証取得を段階別に扱う。" },
    { conceptId: "takken-concept-takkenshi-card", title: "宅地建物取引士証", category: "takken-gyoho", sourceUnits: ["takken-shi-card"], scopeNote: "宅建士証の制度と提示が必要な場面を扱う。" },
    { conceptId: "takken-concept-exclusive-takkenshi", title: "専任の宅地建物取引士", category: "takken-gyoho", sourceUnits: ["takken-shi-exclusive"], scopeNote: "事務所等に必要な専任宅建士の法定人数・割合を扱う。" },
    { conceptId: "takken-concept-takkenshi-exclusive-duties", title: "宅建士の独占業務", category: "takken-gyoho", sourceUnits: ["takken-shi-exclusive-duties"], scopeNote: "重要事項説明と35条・37条関係書面への宅建士の関与を扱う。" },
    { conceptId: "takken-concept-business-guarantee-deposit", title: "営業保証金の供託", category: "takken-gyoho", sourceUnits: ["business-guarantee-deposit"], scopeNote: "営業保証金制度の供託と営業開始との関係を扱う。" },
    { conceptId: "takken-concept-business-guarantee-refund", title: "営業保証金の還付・不足額補充", category: "takken-gyoho", sourceUnits: ["business-guarantee-refund"], scopeNote: "取引債権の還付と還付後の不足額補充を扱う。" },
    { conceptId: "takken-concept-guarantee-association", title: "保証協会・弁済業務保証金", category: "takken-gyoho", sourceUnits: ["guarantee-association"], scopeNote: "保証協会社員の弁済業務保証金制度と営業保証金制度との相違を扱う。" },
    { conceptId: "takken-concept-brokerage-contract-document", title: "媒介契約書面", category: "takken-gyoho", sourceUnits: ["brokerage-contract-basics"], scopeNote: "売買・交換の媒介契約締結時の書面交付と記載事項を扱う。" },
    { conceptId: "takken-concept-brokerage-price-opinion", title: "媒介価額・評価額の意見と根拠", category: "takken-gyoho", sourceUnits: ["brokerage-contract-basics"], scopeNote: "宅建業者が価額について意見を述べる場合の根拠明示を扱う。" },
    { conceptId: "takken-concept-general-brokerage", title: "一般媒介契約", category: "takken-gyoho", sourceUnits: ["brokerage-contract-types"], scopeNote: "一般媒介の依頼自由度と専任系との比較を扱う。" },
    { conceptId: "takken-concept-exclusive-brokerage", title: "専任媒介契約", category: "takken-gyoho", sourceUnits: ["brokerage-contract-types", "brokerage-reins-reporting"], scopeNote: "有効期間、他業者への依頼制限、REINS登録、報告義務を専任媒介として統合して扱う。" },
    { conceptId: "takken-concept-sole-agency-brokerage", title: "専属専任媒介契約", category: "takken-gyoho", sourceUnits: ["brokerage-contract-types", "brokerage-reins-reporting"], scopeNote: "有効期間、自己発見取引、REINS登録、報告義務を専属専任媒介として統合して扱う。" },
    { conceptId: "takken-concept-reins-registration", title: "指定流通機構（REINS）への登録", category: "takken-gyoho", sourceUnits: ["brokerage-reins-reporting"], scopeNote: "専任・専属専任の登録義務と登録期限を比較する。" },
    { conceptId: "takken-concept-brokerage-reporting", title: "媒介契約の業務処理状況報告", category: "takken-gyoho", sourceUnits: ["brokerage-reins-reporting"], scopeNote: "専任・専属専任の依頼者への報告頻度を比較する。" },
    { conceptId: "takken-concept-advertising-start", title: "工事完了前物件の広告開始時期", category: "takken-gyoho", sourceUnits: ["advertising-start-time"], scopeNote: "必要な許可・確認前の広告規制を扱う。" },
    { conceptId: "takken-concept-contract-start", title: "工事完了前物件の契約締結時期", category: "takken-gyoho", sourceUnits: ["contract-start-time"], scopeNote: "必要な許可・確認前の売買等契約締結規制を扱う。" },
    { conceptId: "takken-concept-false-advertising", title: "誇大広告等の禁止", category: "takken-gyoho", sourceUnits: ["false-advertising-prohibited-conduct"], scopeNote: "物件内容・環境・取引条件についての著しい不実表示等を扱う。" },
    { conceptId: "takken-concept-article35-procedure", title: "重要事項説明の時期・主体・方法", category: "takken-gyoho", sourceUnits: ["article35-basics", "article35-vs-37"], scopeNote: "契約成立前、宅建士による説明、書面交付、宅建士証提示を一体で扱う。" },
    { conceptId: "takken-concept-article35-items", title: "35条重要事項の説明事項", category: "takken-gyoho", sourceUnits: ["article35-items"], scopeNote: "登記された権利、法令上の制限等を取引類型別に扱う。" },
    { conceptId: "takken-concept-article37-document", title: "37条書面", category: "takken-gyoho", sourceUnits: ["article37-basics", "article35-vs-37"], scopeNote: "契約成立後の書面交付、記載事項、宅建士の記名を扱う。" },
    { conceptId: "takken-concept-article35-vs-37", title: "35条書面と37条書面の比較", category: "takken-gyoho", sourceUnits: ["article35-vs-37"], scopeNote: "交付時期、説明義務、宅建士の役割、記載内容を横断比較する。" },
    { conceptId: "takken-concept-eight-restrictions-scope", title: "8種制限の適用範囲", category: "takken-gyoho", sourceUnits: ["eight-restrictions-overview"], scopeNote: "宅建業者自ら売主・買主が宅建業者でない場面を中心に適用範囲と強行規定を整理する。" },
    { conceptId: "takken-concept-cooling-off", title: "クーリング・オフ", category: "takken-gyoho", sourceUnits: ["cooling-off"], scopeNote: "適用場所、告知、8日、効力発生時期、適用除外を扱う。" },
    { conceptId: "takken-concept-earnest-money-limit", title: "自ら売主の手付額上限", category: "takken-gyoho", sourceUnits: ["earnest-money-and-safeguards"], scopeNote: "宅建業者自ら売主の場合の手付額20%上限を扱う。" },
    { conceptId: "takken-concept-earnest-money-safeguards", title: "手付金等の保全措置", category: "takken-gyoho", sourceUnits: ["earnest-money-and-safeguards"], scopeNote: "未完成・完成物件の保全措置と免除基準を区別する。" },
    { conceptId: "takken-concept-damages-penalty", title: "損害賠償額の予定・違約金", category: "takken-gyoho", sourceUnits: ["damages-penalty"], scopeNote: "自ら売主の場合の合算20%上限と超過部分の効力を扱う。" },
    { conceptId: "takken-concept-nonconformity-special-rule", title: "自ら売主の契約不適合責任特約", category: "takken-gyoho", sourceUnits: ["contract-nonconformity-special-rule"], scopeNote: "民法より買主に不利な特約制限と引渡しから2年以上の通知期間特約を扱う。" },
    { conceptId: "takken-concept-unowned-property-sale", title: "自己の所有に属しない宅地建物の売買", category: "takken-gyoho", sourceUnits: ["unowned-property-restriction"], scopeNote: "宅建業者自ら売主の他人物売買等の原則禁止と法定例外を扱う。" },
    { conceptId: "takken-concept-installment-cancellation", title: "割賦販売の解除制限", category: "takken-gyoho", sourceUnits: ["installment-sales-ownership"], scopeNote: "自ら売主の割賦販売で支払遅滞を理由に解除等をする際の30日以上の書面催告を扱う。" },
    { conceptId: "takken-concept-installment-ownership-retention", title: "割賦販売の所有権留保等の制限", category: "takken-gyoho", sourceUnits: ["installment-sales-ownership"], scopeNote: "自ら売主の割賦販売における引渡し・代金30%超支払と所有権留保等の制限を扱う。" },
    { conceptId: "takken-concept-brokerage-fees", title: "媒介・代理の報酬額制限", category: "takken-gyoho", sourceUnits: ["brokerage-fees"], scopeNote: "国土交通大臣が定める報酬上限と超過報酬受領禁止を扱う。" },
    { conceptId: "takken-concept-supervision-dispositions", title: "宅建業者への監督処分", category: "takken-gyoho", sourceUnits: ["supervision-penalties"], scopeNote: "指示、1年以内の業務停止、免許取消しの区別と適用場面を扱う。" },
    { conceptId: "takken-concept-declaration-arrival", title: "意思表示の到達主義", category: "rights", sourceUnits: ["civil-intent-general"], scopeNote: "相手方のある意思表示の効力発生時期と到達妨害時のみなし到達を扱う。" },
    { conceptId: "takken-concept-mistake", title: "錯誤", category: "rights", sourceUnits: ["civil-mistake"], scopeNote: "錯誤取消しの重要性要件、重大な過失、第三者保護を扱う。" },
    { conceptId: "takken-concept-fraud", title: "詐欺による意思表示", category: "rights", sourceUnits: ["civil-fraud-duress"], scopeNote: "詐欺による取消しと善意無過失の第三者保護を扱う。" },
    { conceptId: "takken-concept-duress", title: "強迫による意思表示", category: "rights", sourceUnits: ["civil-fraud-duress"], scopeNote: "強迫による意思表示の取消しと詐欺との第三者保護の差異を扱う。" },
    { conceptId: "takken-concept-mental-reservation", title: "心裡留保", category: "rights", sourceUnits: ["civil-fictitious-declaration"], scopeNote: "心裡留保の原則有効と相手方が真意でないことを知る等の場合の無効を扱う。" },
    { conceptId: "takken-concept-fictitious-declaration", title: "通謀虚偽表示", category: "rights", sourceUnits: ["civil-fictitious-declaration"], scopeNote: "相手方と通じた虚偽表示の無効と第三者関係を扱う。" },
    { conceptId: "takken-concept-minor", title: "未成年者の法律行為", category: "rights", sourceUnits: ["civil-limited-capacity"], scopeNote: "法定代理人の同意、同意を欠く法律行為の取消し等を扱う。" },
    { conceptId: "takken-concept-adult-ward", title: "成年被後見人の法律行為", category: "rights", sourceUnits: ["civil-limited-capacity"], scopeNote: "成年被後見人の法律行為の取消しと日常生活行為の例外を扱う。" },
    { conceptId: "takken-concept-agency", title: "代理", category: "rights", sourceUnits: ["civil-agency"], scopeNote: "代理権内・顕名による本人への直接効果と顕名を欠く場合を扱う。" },
    { conceptId: "takken-concept-unauthorized-agency", title: "無権代理", category: "rights", sourceUnits: ["civil-unauthorized-agency"], scopeNote: "無権代理行為の本人への効果、追認、相手方との関係を扱う。" },
    { conceptId: "takken-concept-apparent-agency", title: "表見代理", category: "rights", sourceUnits: ["civil-unauthorized-agency"], scopeNote: "代理権授与表示、権限外行為、代理権消滅後などの外観保護を扱う。" },
    { conceptId: "takken-concept-acquisitive-prescription", title: "取得時効", category: "rights", sourceUnits: ["civil-prescription"], scopeNote: "所有権取得時効の20年と善意無過失時10年の要件を扱う。" },
    { conceptId: "takken-concept-extinctive-prescription", title: "消滅時効", category: "rights", sourceUnits: ["civil-prescription"], scopeNote: "債権の主観的5年・客観的10年の消滅時効を扱う。" },
    { conceptId: "takken-concept-property-transfer-opposability", title: "不動産物権変動と対抗要件", category: "rights", sourceUnits: ["property-rights-opposability"], scopeNote: "当事者間では意思表示で効力が生じ、第三者対抗には原則登記を要する構造を扱う。" },
    { conceptId: "takken-concept-co-ownership", title: "共有", category: "rights", sourceUnits: ["co-ownership"], scopeNote: "共有持分、共有物全部の使用その他共有関係の基本を扱う。" },
    { conceptId: "takken-concept-mortgage", title: "抵当権", category: "rights", sourceUnits: ["mortgage"], scopeNote: "占有を移転しない担保設定と目的不動産からの優先弁済を扱う。" },
    { conceptId: "takken-concept-default-damages", title: "債務不履行と損害賠償", category: "rights", sourceUnits: ["default-damages"], scopeNote: "債務不履行・履行不能による損害賠償と帰責不能事由の例外を扱う。" },
    { conceptId: "takken-concept-contract-cancellation", title: "債務不履行による契約解除", category: "rights", sourceUnits: ["contract-cancellation"], scopeNote: "催告解除と一定の場合の無催告解除を比較して扱う。" },
    { conceptId: "takken-concept-simultaneous-performance", title: "同時履行の抗弁権", category: "rights", sourceUnits: ["risk-simultaneous-performance"], scopeNote: "双務契約で相手方が履行を提供するまで自己の履行を拒める原則を扱う。" },
    { conceptId: "takken-concept-risk-allocation", title: "危険負担", category: "rights", sourceUnits: ["risk-simultaneous-performance"], scopeNote: "双方に帰責できない履行不能における反対給付拒絶を扱う。" },
    { conceptId: "takken-concept-sale-earnest", title: "民法上の解約手付", category: "rights", sourceUnits: ["sale-earnest"], scopeNote: "相手方の履行着手前の手付放棄・倍額の現実提供による解除を扱う。" },
    { conceptId: "takken-concept-civil-nonconformity", title: "民法上の契約不適合責任", category: "rights", sourceUnits: ["contract-nonconformity-civil"], scopeNote: "追完請求、代金減額請求など契約不適合時の買主救済を扱う。" },
    { conceptId: "takken-concept-lease-general", title: "民法上の賃貸借", category: "rights", sourceUnits: ["lease-general"], scopeNote: "使用収益、賃料、返還という契約構造と存続期間上限を扱う。" }
  ].map((concept) => ({ ...base, ...concept }));

  const ids = concepts.map((concept) => concept.conceptId);
  if (new Set(ids).size !== ids.length) throw new Error("Duplicate Power Takken conceptId");
  if (concepts.length !== 64) throw new Error(`Expected 64 concepts for units 1-50 checkpoint, got ${concepts.length}`);
  for (const concept of concepts) {
    if (!concept.title || !concept.category || !Array.isArray(concept.sourceUnits) || concept.sourceUnits.length === 0) {
      throw new Error(`Invalid Power Takken concept: ${concept.conceptId}`);
    }
  }

  window.POWER_TAKKEN_CONCEPTS = concepts;
})();
