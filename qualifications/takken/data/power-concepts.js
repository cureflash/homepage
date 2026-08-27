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
    { conceptId: "takken-concept-unowned-property-sale", title: "自己の所有に属しない宅地建物の売買", category: "takken-gyoho", sourceUnits: ["unowned-property-restriction"], scopeNote: "宅建業者自ら売主の他人物売買等の原則禁止と法定例外を扱う。" }
  ].map((concept) => ({ ...base, ...concept }));

  const ids = concepts.map((concept) => concept.conceptId);
  if (new Set(ids).size !== ids.length) throw new Error("Duplicate Power Takken conceptId");
  if (concepts.length !== 37) throw new Error(`Expected 37 concepts for units 1-30 checkpoint, got ${concepts.length}`);
  for (const concept of concepts) {
    if (!concept.title || !concept.category || !Array.isArray(concept.sourceUnits) || concept.sourceUnits.length === 0) {
      throw new Error(`Invalid Power Takken concept: ${concept.conceptId}`);
    }
  }

  window.POWER_TAKKEN_CONCEPTS = concepts;
})();
