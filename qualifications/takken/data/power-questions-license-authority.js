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
    ["001", ["takken-k-license-authority-minister-multiple-prefectures"], "宅建業者Aが東京都と神奈川県にそれぞれ事務所を設置して宅地建物取引業を営もうとする場合、免許権者として正しいものはどれか。", ["国土交通大臣", "東京都知事", "神奈川県知事", "東京都知事と神奈川県知事の双方"], 0, "事務所が2以上の都道府県に所在するため、国土交通大臣免許となる。", ["正しい。2以上の都道府県に事務所を設置する場合は国土交通大臣が免許権者である。", "東京都だけの知事免許では足りない。", "神奈川県だけの知事免許では足りない。", "複数知事から重ねて免許を受ける制度ではない。"]],
    ["002", ["takken-k-license-authority-governor-single-prefecture"], "宅建業者Bが大阪府内に本店と支店を置き、他の都道府県には事務所を置かない場合、免許権者は誰か。", ["国土交通大臣", "大阪府知事", "本店所在地の市長", "本店所在地を管轄する法務局長"], 1, "すべての事務所が1の都道府県内だけに所在する場合、その都道府県知事の免許となる。", ["事務所数が複数でも1都道府県内だけなら大臣免許ではない。", "正しい。大阪府内だけに事務所があるため大阪府知事免許である。", "市長は宅建業法3条の免許権者ではない。", "法務局長は宅建業法3条の免許権者ではない。"]],
    ["003", ["takken-k-license-authority-minister-multiple-prefectures"], "宅建業者Cが京都府に本店、兵庫県に支店を設置して営業する場合の免許について正しいものはどれか。", ["京都府知事免許だけを受ける", "兵庫県知事免許だけを受ける", "国土交通大臣免許を受ける", "京都府知事と兵庫県知事から別々に免許を受ける"], 2, "京都府と兵庫県という2以上の都道府県に事務所を置くため、国土交通大臣免許となる。", ["一方の知事免許だけではない。", "一方の知事免許だけではない。", "正しい。事務所所在地が2以上の都道府県にまたがるため大臣免許である。", "都道府県ごとに複数免許を受ける制度ではない。"]],
    ["004", ["takken-k-license-authority-governor-single-prefecture"], "宅建業者Dが福岡県内だけに3か所の事務所を設置する場合、免許権者として正しいものはどれか。", ["国土交通大臣", "各事務所所在地の市町村長", "九州地方整備局長", "福岡県知事"], 3, "事務所の数ではなく、事務所が所在する都道府県の数で免許権者を区分する。福岡県内だけなら福岡県知事免許である。", ["複数事務所でも1都道府県内だけなら大臣免許ではない。", "市町村長は免許権者ではない。", "宅建業法3条の免許権者としては国土交通大臣または都道府県知事である。", "正しい。すべての事務所が福岡県内だけなので福岡県知事免許である。"]],
    ["005", ["takken-k-license-authority-minister-multiple-prefectures", "takken-k-license-authority-governor-single-prefecture"], "宅建業免許の免許権者を決める基本的な基準として正しいものはどれか。", ["事務所が所在する都道府県の数", "従業員数", "年間売上高", "取り扱う物件価格"], 0, "宅建業法3条は、事務所が2以上の都道府県にあるか、1の都道府県内だけかで大臣免許と知事免許を区分する。", ["正しい。事務所所在地の都道府県数が基本的な分岐である。", "従業員数は免許権者の分岐基準ではない。", "売上高は免許権者の分岐基準ではない。", "物件価格は免許権者の分岐基準ではない。"]],
    ["006", ["takken-k-license-authority-governor-single-prefecture"], "個人Eが北海道内だけに事務所を設置して宅地建物取引業を営もうとする場合、免許権者について正しいものはどれか。", ["個人なので国土交通大臣", "北海道知事", "個人なので免許権者の区分はない", "事務所所在地の市長"], 1, "法人か個人かではなく事務所所在地で区分する。1の都道府県内だけに事務所があるため北海道知事免許となる。", ["個人であることを理由に大臣免許にはならない。", "正しい。1都道府県内だけなので北海道知事が免許権者である。", "個人も宅建業免許制度の対象である。", "市長は免許権者ではない。"]],
    ["007", ["takken-k-license-authority-minister-multiple-prefectures"], "法人Fが愛知県と岐阜県に事務所を置く場合、法人であることを踏まえた免許権者として正しいものはどれか。", ["法人なので必ず本店所在地の知事", "法人なので必ず国土交通大臣", "事務所が2以上の都道府県にあるため国土交通大臣", "代表者住所地の都道府県知事"], 2, "法人・個人の別ではなく、2以上の都道府県に事務所があるため国土交通大臣免許となる。", ["本店所在地だけでは決まらない。", "法人だからという理由だけで大臣免許になるわけではない。", "正しい。2以上の都道府県に事務所があるため大臣免許である。", "代表者住所地は免許権者の分岐基準ではない。"]],
    ["008", ["takken-k-license-authority-governor-single-prefecture"], "宅建業者Gは千葉県内だけに事務所を置くが、東京都の物件も多数取り扱う予定である。免許権者として正しいものはどれか。", ["国土交通大臣", "東京都知事", "千葉県知事と東京都知事の双方", "千葉県知事"], 3, "取扱物件の所在地ではなく事務所所在地の都道府県数で区分する。事務所が千葉県内だけなら千葉県知事免許である。", ["他県物件を扱うことだけで大臣免許にはならない。", "東京都に事務所がない前提なので東京都知事免許ではない。", "複数知事から免許を受ける制度ではない。", "正しい。事務所が千葉県内だけなので千葉県知事が免許権者である。"]],
    ["009", ["takken-k-license-authority-minister-multiple-prefectures"], "宅建業者Hは埼玉県に本店を置き、新たに群馬県にも事務所を設置して営業しようとしている。事務所配置に基づく免許権者として正しいものはどれか。", ["国土交通大臣", "埼玉県知事", "群馬県知事", "本店所在地の市長"], 0, "埼玉県と群馬県の2以上の都道府県に事務所を置くため国土交通大臣免許の区分となる。", ["正しい。2以上の都道府県に事務所があるため大臣免許である。", "埼玉県だけの知事免許の区分ではない。", "群馬県だけの知事免許の区分ではない。", "市長は免許権者ではない。"]],
    ["010", ["takken-k-license-authority-governor-single-prefecture"], "宅建業者Iが広島県内に本店1か所のみを設置する場合、免許権者は誰か。", ["国土交通大臣", "広島県知事", "広島市長", "中国地方整備局長"], 1, "事務所が1の都道府県内だけに所在する場合、その所在地を管轄する都道府県知事の免許となる。", ["1都道府県内だけなので大臣免許ではない。", "正しい。広島県知事が免許権者である。", "市長は免許権者ではない。", "宅建業法3条上の免許権者の表現は国土交通大臣または都道府県知事である。"]],
    ["011", ["takken-k-license-authority-minister-multiple-prefectures"], "宅建業者Jが静岡県、山梨県、長野県の3県に事務所を設置する場合、免許権者として正しいものはどれか。", ["静岡県知事", "3県の知事全員", "国土交通大臣", "最も事務所数が多い県の知事"], 2, "事務所が2以上の都道府県に所在する場合は国土交通大臣免許であり、3県に所在する場合も同じである。", ["一県の知事免許ではない。", "都道府県ごとに複数免許を受ける制度ではない。", "正しい。2以上の都道府県に事務所があるため大臣免許である。", "事務所数が最多の県で決める制度ではない。"]],
    ["012", ["takken-k-license-authority-governor-single-prefecture"], "宅建業者Kは沖縄県内に複数の事務所を置くが、県外には事務所を置かない。免許権者について正しいものはどれか。", ["事務所が複数なので国土交通大臣", "那覇市長", "沖縄総合事務局長", "沖縄県知事"], 3, "複数事務所でも、すべてが1の都道府県内だけに所在するならその都道府県知事免許である。", ["事務所数そのものではなく都道府県数で区分する。", "市長は免許権者ではない。", "宅建業法3条の免許権者としては都道府県知事となる。", "正しい。沖縄県内だけなので沖縄県知事免許である。"]],
    ["013", ["takken-k-license-authority-minister-multiple-prefectures", "takken-k-license-authority-governor-single-prefecture"], "次のうち、国土交通大臣免許となる事務所配置はどれか。", ["東京都に本店、神奈川県に支店を置く", "大阪府内に本店と2支店を置く", "福岡県内に本店だけを置く", "北海道内に2事務所を置く"], 0, "国土交通大臣免許となるのは、事務所が2以上の都道府県に所在する場合である。", ["正しい。東京都と神奈川県の2都道府県に事務所がある。", "大阪府内だけなので大阪府知事免許である。", "福岡県内だけなので福岡県知事免許である。", "北海道内だけなので北海道知事免許である。"]],
    ["014", ["takken-k-license-authority-governor-single-prefecture"], "次のうち、都道府県知事免許となる事務所配置として正しいものはどれか。", ["東京都と千葉県に事務所を置く", "宮城県内だけに本店と支店を置く", "京都府と大阪府に事務所を置く", "香川県と徳島県に事務所を置く"], 1, "1の都道府県内だけに事務所を設置する場合は、その都道府県知事免許となる。", ["2都道府県にまたがるため大臣免許である。", "正しい。宮城県内だけなので宮城県知事免許である。", "2都道府県にまたがるため大臣免許である。", "2都道府県にまたがるため大臣免許である。"]],
    ["015", ["takken-k-license-authority-minister-multiple-prefectures", "takken-k-license-authority-governor-single-prefecture"], "宅建業免許の免許権者に関する説明として正しいものはどれか。", ["事務所が2県にあっても本店が1県なら本店所在地の知事免許である", "1県内に複数事務所があれば国土交通大臣免許である", "2以上の都道府県に事務所があれば国土交通大臣免許である", "取扱物件が全国にあれば事務所が1県だけでも必ず国土交通大臣免許である"], 2, "免許権者は事務所所在地の都道府県数で区分され、2以上なら国土交通大臣、1都道府県内だけならその知事である。", ["本店だけでなく全事務所の所在地で判断する。", "1県内だけなら事務所数が複数でも知事免許である。", "正しい。2以上の都道府県に事務所があれば大臣免許である。", "取扱物件の地域ではなく事務所所在地で区分する。"]],
    ["016", ["takken-k-license-authority-governor-single-prefecture"], "宅建業者Lは奈良県内に事務所を1か所置き、京都府の顧客とも取引する。免許権者として正しいものはどれか。", ["国土交通大臣", "京都府知事", "奈良県知事と京都府知事", "奈良県知事"], 3, "顧客や取引先の所在地ではなく事務所所在地で区分する。奈良県内だけに事務所があるため奈良県知事免許となる。", ["県外顧客との取引だけで大臣免許にはならない。", "京都府に事務所がない前提なので京都府知事免許ではない。", "複数知事から免許を受ける制度ではない。", "正しい。事務所が奈良県内だけなので奈良県知事免許である。"]],
    ["017", ["takken-k-license-authority-minister-multiple-prefectures"], "宅建業者Mが宮城県に2事務所、福島県に1事務所を置く場合、免許権者は誰か。", ["国土交通大臣", "宮城県知事", "福島県知事", "事務所数が多い宮城県知事"], 0, "事務所数の多寡ではなく、2以上の都道府県に事務所が所在するため国土交通大臣免許となる。", ["正しい。宮城県と福島県に事務所があるため大臣免許である。", "一方の知事免許ではない。", "一方の知事免許ではない。", "事務所数が最多の県を基準にする制度ではない。"]],
    ["018", ["takken-k-license-authority-governor-single-prefecture"], "宅建業者Nが東京都内に10か所の事務所を置き、都外には事務所を置かない場合、免許権者について正しいものはどれか。", ["事務所が10か所なので国土交通大臣", "東京都知事", "各区市町村長", "国土交通大臣と東京都知事の双方"], 1, "事務所が多数でも1の都道府県内だけに所在する場合は、その都道府県知事免許である。", ["事務所数が多いことだけで大臣免許にはならない。", "正しい。東京都内だけなので東京都知事免許である。", "区市町村長は免許権者ではない。", "大臣と知事の双方から免許を受ける制度ではない。"]],
    ["019", ["takken-k-license-authority-minister-multiple-prefectures"], "本店が大阪府、支店が兵庫県にある宅建業者Oについて、支店が1か所しかないことを理由に大阪府知事免許でよいとする説明は正しいか。", ["正しい。支店が1か所なら知事免許である", "正しい。本店所在地だけで免許権者を決める", "誤り。2以上の都道府県に事務所があるため国土交通大臣免許である", "誤りだが、兵庫県知事免許だけを受ける"], 2, "本店・支店を含む事務所が2以上の都道府県に所在するため、支店数が1でも国土交通大臣免許となる。", ["支店数が1かどうかは分岐基準ではない。", "本店所在地だけでは決まらない。", "正しい。2都道府県に事務所があるため大臣免許である。", "兵庫県知事だけの免許ではない。"]],
    ["020", ["takken-k-license-authority-governor-single-prefecture"], "宅建業者Pが山口県内だけに本店と支店を設置している。山口県外の土地を媒介する場合、免許権者はどうなるか。", ["媒介する土地の所在県ごとに知事免許を追加する", "県外物件を扱うので国土交通大臣免許に変わる", "国土交通大臣と山口県知事の双方の免許が必要になる", "事務所が山口県内だけなら山口県知事免許の区分である"], 3, "免許権者の区分は事務所所在地で決まり、取扱物件の所在地が県外であることだけでは変わらない。", ["物件所在地ごとに免許を追加する制度ではない。", "県外物件を扱うことだけで大臣免許にはならない。", "双方免許を受ける制度ではない。", "正しい。事務所が山口県内だけなので山口県知事免許の区分である。"]],
    ["021", ["takken-k-license-authority-minister-multiple-prefectures", "takken-k-license-authority-governor-single-prefecture"], "宅建業免許について、事務所所在地と免許権者の対応として正しいものはどれか。", ["2以上の都道府県に事務所がある場合は国土交通大臣、1都道府県内だけならその知事", "2以上の都道府県に事務所がある場合は各知事、1都道府県内だけなら国土交通大臣", "事務所数が2以上なら国土交通大臣、1か所なら知事", "本店がある都道府県の知事が常に免許権者"], 0, "宅建業法3条は、事務所が所在する都道府県数によって大臣免許と知事免許を区分する。", ["正しい。法定の区分そのものである。", "大臣免許と知事免許の対応が逆である。", "事務所の個数ではなく所在都道府県数で判断する。", "本店所在地だけで常に決まるわけではない。"]],
    ["022", ["takken-k-license-authority-governor-single-prefecture"], "宅建業者Qは長崎県内だけに事務所を置き、全国向けにインターネット広告を行う。免許権者として正しいものはどれか。", ["全国広告をするので国土交通大臣", "長崎県知事", "広告を閲覧する都道府県すべての知事", "国土交通大臣と長崎県知事の双方"], 1, "広告の到達範囲ではなく事務所所在地の都道府県数で区分する。事務所が長崎県内だけなら長崎県知事免許となる。", ["全国広告だけで大臣免許にはならない。", "正しい。長崎県内だけに事務所があるため長崎県知事免許である。", "広告閲覧地域ごとに免許を受ける制度ではない。", "双方から免許を受ける制度ではない。"]],
    ["023", ["takken-k-license-authority-minister-multiple-prefectures"], "宅建業者Rは東京都に本店を置き、北海道に支店を設置している。取扱物件の大半が東京都内であっても、免許権者として正しいものはどれか。", ["東京都知事", "北海道知事", "国土交通大臣", "取扱件数が多い地域の知事"], 2, "取扱件数の多寡ではなく、東京都と北海道の2以上の都道府県に事務所があるため国土交通大臣免許となる。", ["東京都だけの知事免許ではない。", "北海道だけの知事免許ではない。", "正しい。2以上の都道府県に事務所があるため大臣免許である。", "取扱件数が最多の地域で決める制度ではない。"]],
    ["024", ["takken-k-license-authority-governor-single-prefecture"], "宅建業者Sは新潟県内に本店と複数支店を置く一方、富山県では物件案内だけを行い、富山県には事務所を設置しない。事務所配置だけを前提とした免許権者として正しいものはどれか。", ["国土交通大臣", "富山県知事", "新潟県知事と富山県知事の双方", "新潟県知事"], 3, "事務所が新潟県内だけに所在するという前提では、新潟県知事免許の区分となる。", ["富山県に事務所を設置していない前提なので2都道府県事務所には当たらない。", "富山県に事務所がない前提なので富山県知事免許ではない。", "複数知事から免許を受ける制度ではない。", "正しい。事務所が新潟県内だけなので新潟県知事免許の区分である。"]],
    ["025", ["takken-k-license-authority-minister-multiple-prefectures", "takken-k-license-authority-governor-single-prefecture"], "免許権者の判断に関する次の説明のうち正しいものはどれか。", ["本店と支店が異なる都道府県にあれば国土交通大臣免許となる", "同一都道府県内に2事務所あれば国土交通大臣免許となる", "県外物件を1件扱えば国土交通大臣免許となる", "法人は事務所所在地にかかわらず国土交通大臣免許となる"], 0, "本店・支店などの事務所が2以上の都道府県に所在すれば国土交通大臣免許となる。事務所の個数、県外物件、法人形態だけでは決まらない。", ["正しい。異なる都道府県に事務所があるため大臣免許である。", "同一都道府県内だけなら知事免許である。", "県外物件の取扱いだけでは大臣免許にならない。", "法人・個人の別ではなく事務所所在地で区分する。"]]
  ];

  const questions = rows.map(([serial, knowledge_refs, stem, choices, answer_index, detailed_explanation, choice_explanations]) => ({
    ...shared,
    question_id: `takken-power-q-license-authority-${serial}`,
    knowledge_refs,
    stem,
    choices,
    answer_index,
    detailed_explanation,
    choice_explanations
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
    if (!Array.isArray(q.knowledge_refs) || q.knowledge_refs.length < 1 || q.knowledge_refs.length > 2 || q.knowledge_refs.some((id) => !allowedKnowledgeIds.has(id))) throw new Error(`Invalid knowledge refs: ${q.question_id}`);
    if (!Array.isArray(q.choices) || q.choices.length !== 4 || new Set(q.choices).size !== 4) throw new Error(`Invalid choices: ${q.question_id}`);
    if (!Number.isInteger(q.answer_index) || q.answer_index < 0 || q.answer_index > 3) throw new Error(`Invalid answer index: ${q.question_id}`);
    answerCounts[q.answer_index] += 1;
    if (!Array.isArray(q.choice_explanations) || q.choice_explanations.length !== 4 || q.choice_explanations.some((reason) => !reason.trim())) throw new Error(`Invalid choice explanations: ${q.question_id}`);
    if (!Array.isArray(q.primary_source_refs) || q.primary_source_refs.length !== 2 || q.primary_source_refs.some((id) => !allowedSourceIds.has(id))) throw new Error(`Invalid source refs: ${q.question_id}`);
    if (q.exam_year !== 2026 || q.law_as_of !== "2026-04-01") throw new Error(`Invalid legal version: ${q.question_id}`);
    if (q.validation_status !== "pending_validation") throw new Error(`Unexpected validation status: ${q.question_id}`);
  }
  if (Math.max(...answerCounts) - Math.min(...answerCounts) > 1) throw new Error(`Answer-position skew: ${answerCounts.join("/")}`);

  window.PowerTakkenQuestionsLicenseAuthority = Object.freeze(questions);
})();
