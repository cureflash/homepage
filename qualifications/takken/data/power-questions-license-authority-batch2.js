(() => {
  "use strict";

  const shared = Object.freeze({
    concept_id: "takken-concept-license-authority",
    exam_year: 2026,
    law_as_of: "2026-04-01",
    primary_source_refs: Object.freeze(["egov-takken-act", "mlit-license"]),
    generation_status: "generated",
    validation_status: "pending_validation"
  });

  const rows = [
    ["026", ["takken-k-license-authority-governor-single-prefecture"], "宅建業者Aは東京都内に本店と4つの支店を置き、他の都道府県には事務所を置かない。免許権者は誰か。", ["東京都知事", "国土交通大臣", "各支店所在地の区長", "本店所在地を管轄する法務局長"], 0, "事務所が複数あっても、そのすべてが1の都道府県内だけに所在する場合は、その都道府県知事が免許権者となる。", ["正しい。事務所は東京都内だけなので東京都知事免許である。", "事務所数が多いだけでは大臣免許にならない。", "区長は宅建業法3条の免許権者ではない。", "法務局長は宅建業法3条の免許権者ではない。"]],
    ["027", ["takken-k-license-authority-minister-multiple-prefectures"], "宅建業者Bは大阪府に本店を置き、京都府に1か所だけ支店を置く。免許権者について正しいものはどれか。", ["大阪府知事", "国土交通大臣", "京都府知事", "大阪府知事と京都府知事の双方"], 1, "事務所が大阪府と京都府の2以上の都道府県に所在するため、国土交通大臣が免許権者となる。", ["本店所在地の知事だけではない。", "正しい。2以上の都道府県に事務所があるため国土交通大臣免許である。", "支店所在地の知事だけではない。", "各知事から重ねて免許を受ける制度ではない。"]],
    ["028", ["takken-k-license-authority-governor-single-prefecture"], "宅建業者Cは神奈川県内に事務所を1か所だけ置き、東京都・千葉県・埼玉県の物件も取り扱う。免許権者は誰か。", ["国土交通大臣", "取扱物件が最も多い都県の知事", "神奈川県知事", "取扱物件のある全都県知事"], 2, "免許権者は取扱物件の所在地ではなく事務所所在地の都道府県数で区分する。事務所が神奈川県内だけなら神奈川県知事である。", ["他都県の物件を扱うだけでは大臣免許にならない。", "取扱件数は区分基準ではない。", "正しい。事務所が神奈川県内だけなので神奈川県知事免許である。", "物件所在地ごとに知事免許を受ける制度ではない。"]],
    ["029", ["takken-k-license-authority-minister-multiple-prefectures"], "宅建業者Dは福岡県、佐賀県、熊本県に各1か所の事務所を置く。免許権者として正しいものはどれか。", ["福岡県知事", "3県の知事全員", "九州地方整備局長", "国土交通大臣"], 3, "事務所が3県に所在しており、2以上の都道府県に事務所を置く場合に当たるため国土交通大臣免許となる。", ["一県の知事だけではない。", "各県知事から別々に免許を受ける制度ではない。", "宅建業法3条上の免許権者は国土交通大臣である。", "正しい。2以上の都道府県に事務所があるため国土交通大臣免許である。"]],
    ["030", ["takken-k-license-authority-minister-multiple-prefectures", "takken-k-license-authority-governor-single-prefecture"], "宅建業の免許権者を大臣か知事かに分ける際、直接の基準となるものはどれか。", ["事務所が所在する都道府県の数", "年間の契約件数", "代表者の住所", "資本金の額"], 0, "宅建業法3条は、事務所が2以上の都道府県にあるか、1の都道府県内だけかで免許権者を区分する。", ["正しい。事務所所在地の都道府県数が直接の区分基準である。", "契約件数は区分基準ではない。", "代表者住所は区分基準ではない。", "資本金額は区分基準ではない。"]],
    ["031", ["takken-k-license-authority-governor-single-prefecture"], "法人Eは北海道内の札幌市と旭川市に事務所を置く。市が異なることを踏まえ、免許権者として正しいものはどれか。", ["国土交通大臣", "北海道知事", "札幌市長と旭川市長", "本店所在地の市長"], 1, "複数の市に事務所があっても、すべて北海道という1の都道府県内に所在するため北海道知事免許となる。", ["市が複数でも都道府県が1つなら大臣免許ではない。", "正しい。北海道内だけなので北海道知事が免許権者である。", "市長は宅建業法3条の免許権者ではない。", "本店所在地の市長で決める制度ではない。"]],
    ["032", ["takken-k-license-authority-minister-multiple-prefectures"], "個人Fが愛知県と三重県にそれぞれ事務所を設けて宅建業を営む場合、免許権者として正しいものはどれか。", ["個人なので愛知県知事", "個人なので主たる事務所所在地の知事", "国土交通大臣", "個人には大臣免許は認められない"], 2, "法人か個人かにかかわらず、事務所が2以上の都道府県に所在すれば国土交通大臣免許となる。", ["個人であることは知事免許の理由にならない。", "主たる事務所だけで区分しない。", "正しい。2県に事務所があるため国土交通大臣免許である。", "個人でも事務所配置が要件を満たせば大臣免許の区分となる。"]],
    ["033", ["takken-k-license-authority-governor-single-prefecture"], "宅建業者Gは兵庫県内だけに事務所を置く一方、顧客の多くは大阪府在住である。免許権者として正しいものはどれか。", ["国土交通大臣", "大阪府知事", "兵庫県知事と大阪府知事の双方", "兵庫県知事"], 3, "顧客の住所ではなく事務所所在地で区分する。事務所が兵庫県内だけなら兵庫県知事免許である。", ["顧客が他府県にいるだけでは大臣免許にならない。", "顧客住所は免許権者の基準ではない。", "複数知事から免許を受ける制度ではない。", "正しい。事務所が兵庫県内だけなので兵庫県知事免許である。"]],
    ["034", ["takken-k-license-authority-governor-single-prefecture"], "宅建業者Hは沖縄県内に本店・支店・営業所を置き、県外には宅建業法上の事務所を置かない。免許権者は誰か。", ["沖縄県知事", "国土交通大臣", "沖縄総合事務局長", "各事務所所在地の市町村長"], 0, "名称や事務所数にかかわらず、宅建業法上の事務所が1の都道府県内だけに所在する場合は、その都道府県知事免許となる。", ["正しい。事務所は沖縄県内だけなので沖縄県知事免許である。", "複数事務所というだけでは大臣免許にならない。", "宅建業法3条上の免許権者としては沖縄県知事である。", "市町村長は免許権者ではない。"]],
    ["035", ["takken-k-license-authority-minister-multiple-prefectures"], "宅建業者Iは長野県に2か所、新潟県に1か所の事務所を置く。この場合の免許権者は誰か。", ["長野県知事", "国土交通大臣", "新潟県知事", "事務所数が多い長野県の市町村長"], 1, "事務所数の多少ではなく、2以上の都道府県に事務所が所在するため国土交通大臣免許となる。", ["一県の知事だけではない。", "正しい。長野県と新潟県に事務所があるため国土交通大臣免許である。", "一県の知事だけではない。", "最多事務所の地域で免許権者を決める制度ではない。"]],
    ["036", ["takken-k-license-authority-governor-single-prefecture"], "宅建業者Jは京都府内だけに事務所を置き、奈良県で広告を出して顧客を募集する。免許権者について正しいものはどれか。", ["広告地域が2府県に及ぶため国土交通大臣", "奈良県知事", "京都府知事", "京都府知事と奈良県知事の双方"], 2, "広告や営業活動の地域ではなく、事務所が所在する都道府県の数で区分する。事務所が京都府内だけなら京都府知事免許である。", ["広告地域は直接の区分基準ではない。", "奈良県に事務所がない前提では奈良県知事免許ではない。", "正しい。事務所が京都府内だけなので京都府知事免許である。", "複数知事から免許を受ける制度ではない。"]],
    ["037", ["takken-k-license-authority-minister-multiple-prefectures"], "宅建業者Kの本店は岡山県、支店は広島県にあり、取り扱う物件はすべて岡山県内にある。免許権者として正しいものはどれか。", ["岡山県知事", "広島県知事", "物件所在地の岡山県知事だけ", "国土交通大臣"], 3, "取扱物件が一県内だけでも、事務所が岡山県と広島県の2県に所在するため国土交通大臣免許となる。", ["本店所在地だけでは決まらない。", "支店所在地だけでは決まらない。", "物件所在地は直接の区分基準ではない。", "正しい。事務所が2県にあるため国土交通大臣免許である。"]],
    ["038", ["takken-k-license-authority-minister-multiple-prefectures", "takken-k-license-authority-governor-single-prefecture"], "次のうち、都道府県知事免許となる事務所配置はどれか。", ["宮城県内に本店と2支店を置き、他県には事務所を置かない", "宮城県と山形県に1事務所ずつ置く", "東京都と神奈川県に事務所を置く", "大阪府・京都府・兵庫県に事務所を置く"], 0, "知事免許となるのは、すべての事務所が1の都道府県内だけに所在する場合である。", ["正しい。宮城県内だけなので宮城県知事免許となる。", "2県に事務所があるため大臣免許となる。", "2都県に事務所があるため大臣免許となる。", "3府県に事務所があるため大臣免許となる。"]],
    ["039", ["takken-k-license-authority-minister-multiple-prefectures", "takken-k-license-authority-governor-single-prefecture"], "次の事項のうち、宅建業の免許権者を大臣か知事かに区分する際に直接考慮するものはどれか。", ["取引相手の居住地", "宅建業法上の事務所の所在地", "取引対象物件の所在地", "代表者の出身地"], 1, "大臣免許か知事免許かは宅建業法上の事務所が所在する都道府県の数で区分する。", ["取引相手の居住地は直接の区分基準ではない。", "正しい。事務所所在地が区分の基礎となる。", "物件所在地は直接の区分基準ではない。", "代表者の出身地は区分基準ではない。"]],
    ["040", ["takken-k-license-authority-minister-multiple-prefectures"], "宅建業者Lは東京都内だけに事務所を置いていたが、新たに埼玉県にも宅建業法上の事務所を置くことになった。新しい事務所配置に基づく免許権者の区分はどれか。", ["東京都知事", "埼玉県知事", "国土交通大臣", "東京都知事と埼玉県知事の双方"], 2, "新しい事務所配置では東京都と埼玉県の2都県に事務所が所在するため、免許権者の区分は国土交通大臣となる。", ["新配置は1都県内だけではない。", "埼玉県だけでもない。", "正しい。2都県に事務所があるため国土交通大臣の区分となる。", "複数知事から重ねて免許を受ける制度ではない。"]],
    ["041", ["takken-k-license-authority-governor-single-prefecture"], "宅建業者Mは大阪府と兵庫県に事務所を置いていたが、兵庫県の事務所を閉じ、大阪府内の事務所だけになった。新しい事務所配置に基づく免許権者の区分はどれか。", ["国土交通大臣", "兵庫県知事", "大阪府知事と兵庫県知事の双方", "大阪府知事"], 3, "新しい事務所配置では事務所が大阪府内だけに所在するため、免許権者の区分は大阪府知事となる。", ["新配置は2以上の都道府県ではない。", "兵庫県には事務所が残っていない前提である。", "複数知事から免許を受ける区分ではない。", "正しい。1府内だけなので大阪府知事の区分となる。"]],
    ["042", ["takken-k-license-authority-governor-single-prefecture"], "宅建業者Nが東京都23区内の複数区に事務所を置く場合、他県に事務所がないときの免許権者として正しいものはどれか。", ["東京都知事", "国土交通大臣", "各区長", "関東地方整備局長"], 0, "複数の特別区に事務所があっても、すべて東京都という1の都道府県内に所在するため東京都知事免許となる。", ["正しい。都道府県単位では東京都内だけなので東京都知事免許である。", "区が複数でも都道府県は1つなので大臣免許ではない。", "区長は免許権者ではない。", "宅建業法3条上は東京都知事が免許権者となる。"]],
    ["043", ["takken-k-license-authority-minister-multiple-prefectures"], "宅建業者Oは山口県と福岡県に事務所を置いている。両県が隣接していることは免許権者の区分に影響するか。", ["隣接県なら山口県知事免許となる", "影響せず、国土交通大臣免許となる", "隣接県なら福岡県知事免許となる", "隣接県なら両県知事の共同免許となる"], 1, "都道府県が隣接しているかどうかにかかわらず、2以上の都道府県に事務所が所在すれば国土交通大臣免許となる。", ["隣接していても1県内扱いにはならない。", "正しい。2県に事務所があるため国土交通大臣免許である。", "隣接していても一方の知事免許にはならない。", "共同免許という区分ではない。"]],
    ["044", ["takken-k-license-authority-governor-single-prefecture"], "宅建業者Pは静岡県内だけに事務所を置くが、会社の本店登記上の住所とは別の県に代表者の自宅がある。免許権者を決めるうえで正しいものはどれか。", ["代表者の自宅所在地の知事が免許権者となる", "代表者住所が他県なので国土交通大臣となる", "事務所が静岡県内だけなので静岡県知事となる", "代表者住所と事務所所在地の両知事から免許を受ける"], 2, "代表者の住所ではなく宅建業法上の事務所所在地で区分する。事務所が静岡県内だけなら静岡県知事免許である。", ["代表者住所は直接の区分基準ではない。", "代表者住所が他県というだけでは大臣免許にならない。", "正しい。事務所が静岡県内だけなので静岡県知事免許である。", "複数知事から免許を受ける制度ではない。"]],
    ["045", ["takken-k-license-authority-minister-multiple-prefectures"], "宅建業者Qは香川県と愛媛県に事務所を置くが、従業員の大半は香川県の事務所に勤務している。免許権者として正しいものはどれか。", ["香川県知事", "従業員数の多い事務所所在地の知事", "愛媛県知事", "国土交通大臣"], 3, "従業員数の偏りは区分基準ではない。事務所が香川県と愛媛県の2県に所在するため国土交通大臣免許となる。", ["一方の県に従業員が多くても知事免許にはならない。", "従業員数は区分基準ではない。", "一方の知事だけではない。", "正しい。2県に事務所があるため国土交通大臣免許である。"]],
    ["046", ["takken-k-license-authority-minister-multiple-prefectures", "takken-k-license-authority-governor-single-prefecture"], "次のア〜ウのうち、免許権者の区分に関する正しい記述はいくつあるか。\nア 事務所が1の都道府県内だけなら、その都道府県知事が免許権者となる。\nイ 事務所が2以上の都道府県にあるなら、国土交通大臣が免許権者となる。\nウ 取扱物件が2以上の都道府県にあるだけで、必ず国土交通大臣が免許権者となる。", ["2つ", "1つ", "3つ", "0"], 0, "アとイが正しく、ウは誤りである。取扱物件の所在地ではなく事務所所在地の都道府県数で区分する。", ["正しい。アとイの2つが正しい。", "正しい記述は2つある。", "ウが誤りなので3つではない。", "アとイが正しいため0ではない。"]],
    ["047", ["takken-k-license-authority-minister-multiple-prefectures", "takken-k-license-authority-governor-single-prefecture"], "宅建業者Rについて、どの情報があれば大臣免許か知事免許かを直接判定できるか。", ["年間売上高と従業員数", "宅建業法上の各事務所が所在する都道府県", "取り扱う物件の総額", "代表者と専任宅建士の住所"], 1, "免許権者の区分には、宅建業法上の事務所が1の都道府県内だけか、2以上の都道府県にまたがるかという情報が必要となる。", ["売上高や従業員数では判定しない。", "正しい。各事務所の都道府県が分かれば区分できる。", "物件総額は区分基準ではない。", "関係者の住所は直接の区分基準ではない。"]],
    ["048", ["takken-k-license-authority-governor-single-prefecture"], "宅建業者Sは鹿児島県内に5か所の事務所を置き、宮崎県では物件案内だけを行うが、宮崎県には事務所を置かない。免許権者として正しいものはどれか。", ["国土交通大臣", "鹿児島県知事と宮崎県知事", "鹿児島県知事", "宮崎県知事"], 2, "物件案内を行う地域だけでは免許権者の区分は変わらない。事務所が鹿児島県内だけなら鹿児島県知事免許である。", ["宮崎県に事務所がない前提では2県配置ではない。", "複数知事から免許を受ける制度ではない。", "正しい。事務所が鹿児島県内だけなので鹿児島県知事免許である。", "宮崎県に事務所がないため宮崎県知事免許ではない。"]],
    ["049", ["takken-k-license-authority-minister-multiple-prefectures"], "宅建業者Tは青森県に本店、岩手県に支店を置く。資本金が少額で事業規模も小さい場合、免許権者として正しいものはどれか。", ["青森県知事", "事業規模が小さいのでいずれか一方の知事", "資本金額に応じて免許権者が変わる", "国土交通大臣"], 3, "資本金や事業規模にかかわらず、事務所が青森県と岩手県の2県に所在するため国土交通大臣免許となる。", ["本店所在地だけで決まらない。", "事業規模は区分基準ではない。", "資本金額は区分基準ではない。", "正しい。2県に事務所があるため国土交通大臣免許である。"]]
  ];

  const questions = rows.map(([serial, knowledge_refs, stem, choices, answer_index, detailed_explanation, choice_explanations]) => Object.freeze({
    ...shared,
    question_id: `takken-power-q-license-authority-${serial}`,
    knowledge_refs: Object.freeze(knowledge_refs),
    stem,
    choices: Object.freeze(choices),
    answer_index,
    detailed_explanation,
    choice_explanations: Object.freeze(choice_explanations)
  }));

  const ids = new Set();
  const stems = new Set();
  const allowedKnowledgeIds = new Set([
    "takken-k-license-authority-minister-multiple-prefectures",
    "takken-k-license-authority-governor-single-prefecture"
  ]);
  const allowedSourceIds = new Set(["egov-takken-act", "mlit-license"]);
  const answerCounts = [0, 0, 0, 0];
  const normalize = (value) => value.replace(/\s+/g, "").toLowerCase();

  for (const q of questions) {
    if (ids.has(q.question_id)) throw new Error(`Duplicate Power Takken question id: ${q.question_id}`);
    ids.add(q.question_id);
    const normalizedStem = normalize(q.stem);
    if (stems.has(normalizedStem)) throw new Error(`Duplicate Power Takken stem: ${q.question_id}`);
    stems.add(normalizedStem);
    if (q.concept_id !== "takken-concept-license-authority") throw new Error(`Unexpected concept: ${q.question_id}`);
    if (!Array.isArray(q.knowledge_refs) || q.knowledge_refs.length < 1 || q.knowledge_refs.some((id) => !allowedKnowledgeIds.has(id))) throw new Error(`Invalid knowledge refs: ${q.question_id}`);
    if (!Array.isArray(q.choices) || q.choices.length !== 4 || new Set(q.choices).size !== 4) throw new Error(`Invalid choices: ${q.question_id}`);
    if (!Number.isInteger(q.answer_index) || q.answer_index < 0 || q.answer_index > 3) throw new Error(`Invalid answer index: ${q.question_id}`);
    answerCounts[q.answer_index] += 1;
    if (!Array.isArray(q.choice_explanations) || q.choice_explanations.length !== 4 || q.choice_explanations.some((reason) => !reason.trim())) throw new Error(`Invalid choice explanations: ${q.question_id}`);
    if (!Array.isArray(q.primary_source_refs) || q.primary_source_refs.length !== 2 || q.primary_source_refs.some((id) => !allowedSourceIds.has(id))) throw new Error(`Invalid source refs: ${q.question_id}`);
    if (q.exam_year !== 2026 || q.law_as_of !== "2026-04-01") throw new Error(`Invalid legal version: ${q.question_id}`);
    if (q.validation_status !== "pending_validation") throw new Error(`Unexpected validation status: ${q.question_id}`);
  }
  if (Math.max(...answerCounts) - Math.min(...answerCounts) > 1) throw new Error(`Answer-position skew: ${answerCounts.join("/")}`);

  window.PowerTakkenQuestionsLicenseAuthorityBatch2 = Object.freeze(questions);
})();
