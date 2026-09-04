(() => {
  "use strict";

  const shared = Object.freeze({
    concept_id: "takken-concept-business-definition",
    exam_year: 2026,
    law_as_of: "2026-04-01",
    primary_source_refs: Object.freeze(["egov-takken-act", "mlit-license"]),
    generation_status: "generated",
    validation_status: "pending_validation"
  });

  const rows = [
    ["026", ["takken-k-business-definition-self-sale-exchange"], "宅地建物取引業法上、自ら当事者として行う場合に宅建業の対象となる行為はどれか。", ["自己所有建物の売買を業として行う", "自己所有建物の賃貸を業として行う", "自己所有建物の管理だけを行う", "自己所有建物の清掃だけを行う"], 0, "自ら当事者として行う宅地・建物の売買または交換は宅建業に含まれる。自ら貸主として行う賃貸は含まれない。", ["正しい。自ら行う建物売買を業とする行為は対象である。", "自ら貸主として行う賃貸は定義外である。", "管理だけでは法2条2号の取引類型に当たらない。", "清掃だけでは法2条2号の取引類型に当たらない。"]],
    ["027", ["takken-k-business-definition-agency-brokerage"], "他人所有の宅地について、交換契約の相手方を探して契約成立を媒介することを業として行う場合、正しいものはどれか。", ["交換の媒介を業とするため宅建業に含まれる", "売買でないので宅建業に含まれない", "代理なら含まれるが媒介は含まれない", "建物なら含まれるが宅地は含まれない"], 0, "宅地または建物の交換について代理または媒介を業として行うことは宅建業に含まれる。", ["正しい。宅地の交換媒介を業とする行為は対象である。", "交換も代理・媒介の対象取引に含まれる。", "代理だけでなく媒介も対象である。", "宅地も建物も対象である。"]],
    ["028", ["takken-k-business-definition-self-lease-exclusion"], "自己所有の宅地を駐車場用地として自ら貸主となって反復継続して賃貸する行為そのものについて、正しいものはどれか。", ["自ら貸主として行う賃貸そのものは宅建業に含まれない", "反復継続しているため必ず宅建業に当たる", "宅地の貸借なので必ず宅建業に当たる", "賃料が高額なら宅建業に当たる"], 0, "宅地であっても、所有者が自ら貸主として賃貸する行為そのものは宅建業の定義に含まれない。", ["正しい。自己賃貸は定義外である。", "反復継続性だけで自己賃貸が対象になるわけではない。", "自ら貸主として行う貸借は対象外である。", "賃料額はこの定義上の区別を変えない。"]],
    ["029", ["takken-k-business-definition-self-sale-exchange", "takken-k-business-definition-self-lease-exclusion"], "自己所有の建物について行う行為のうち、宅地建物取引業に含まれるものはどれか。", ["自ら売却することを業とする", "自ら貸主として賃貸することを業とする", "賃料の集金だけを行う", "建物の修繕だけを行う"], 0, "自ら行う建物の売買は宅建業に含まれるが、自ら貸主として行う賃貸は含まれない。", ["正しい。自ら建物を売買することを業とする行為は対象である。", "自己賃貸は定義外である。", "集金だけでは対象取引類型に当たらない。", "修繕だけでは対象取引類型に当たらない。"]],
    ["030", ["takken-k-business-definition-agency-brokerage"], "他人の建物の売買について、売主の代理人として契約を締結することを業とする場合の説明として正しいものはどれか。", ["建物の売買の代理を業とするため宅建業に含まれる", "本人所有でないため対象外である", "媒介ではないので対象外である", "貸借の代理だけが宅建業に含まれる"], 0, "他人の宅地・建物の売買・交換・貸借について代理または媒介を業として行うことは宅建業に含まれる。", ["正しい。建物売買の代理を業とする行為は対象である。", "他人の取引を代理することも対象である。", "代理も媒介と並んで対象である。", "売買・交換・貸借の代理・媒介が対象である。"]],
    ["031", ["takken-k-business-definition-self-sale-exchange", "takken-k-business-definition-agency-brokerage", "takken-k-business-definition-self-lease-exclusion"], "次の行為を宅地建物取引業に含まれるものだけに分けた組合せとして正しいものはどれか。\nア 自己所有宅地を自ら売却することを業とする\nイ 自己所有建物を自ら賃貸することを業とする\nウ 他人所有宅地の貸借を媒介することを業とする", ["ア・ウ", "ア・イ", "イ・ウ", "ア・イ・ウ"], 0, "アは自ら売買なので対象、イは自己賃貸なので対象外、ウは他人の貸借媒介なので対象である。", ["正しい。アとウが対象である。", "イが対象外である。", "イが対象外で、アが対象である。", "イを含めるのが誤りである。"]],
    ["032", ["takken-k-business-definition-self-sale-exchange"], "宅地建物取引業法2条2号の『自ら行う取引』について正しいものはどれか。", ["売買だけが対象で交換は対象外である", "売買と交換が対象で、貸借は含まれない", "交換だけが対象で売買は対象外である", "売買・交換・貸借がすべて対象である"], 1, "自ら当事者として行う場合は宅地・建物の売買または交換が対象であり、自ら貸主として行う貸借は含まれない。", ["交換も対象である。", "正しい。自ら行う場合の対象は売買・交換である。", "売買も対象である。", "自ら貸借は含まれない。"]],
    ["033", ["takken-k-business-definition-agency-brokerage"], "宅地建物取引業法上、代理・媒介の対象となり得る取引の範囲として正しいものはどれか。", ["売買・交換のみ", "売買・交換・貸借", "売買・貸借のみ", "売買のみ"], 1, "代理または媒介を業として行う場合、対象取引は宅地・建物の売買・交換・貸借である。", ["貸借が漏れている。", "正しい。三類型すべてが対象である。", "交換が漏れている。", "交換と貸借が漏れている。"]],
    ["034", ["takken-k-business-definition-self-lease-exclusion", "takken-k-business-definition-agency-brokerage"], "建物の貸借に関する次の説明のうち正しいものはどれか。", ["所有者が自ら貸主となる賃貸も、他人の貸借の媒介も、いずれも宅建業である", "所有者が自ら貸主となる賃貸は宅建業ではないが、他人の貸借の媒介を業とする行為は宅建業である", "所有者の自己賃貸だけが宅建業である", "貸借に関する行為は一切宅建業にならない"], 1, "自己賃貸そのものは対象外である一方、他人の宅地・建物の貸借の代理・媒介を業とする行為は対象である。", ["自己賃貸を含める点が誤り。", "正しい。自己賃貸と貸借媒介を区別している。", "逆である。", "貸借の代理・媒介は対象である。"]],
    ["035", ["takken-k-business-definition-self-sale-exchange"], "所有者が自己所有の宅地を複数回に分けて自ら売却する事業を行う。宅建業の定義上の説明として最も適切なものはどれか。", ["所有者自身の土地なので宅建業に含まれない", "自ら売買を業として行うため宅建業に含まれる", "媒介業者を使わない限り宅建業に含まれない", "交換でないため宅建業に含まれない"], 1, "自己所有物件であっても、自ら宅地・建物の売買を業として行うことは宅建業に含まれる。", ["自己所有であることは除外理由ではない。", "正しい。自己所有物件の自ら売買も対象である。", "媒介業者の利用は要件ではない。", "売買自体が対象である。"]],
    ["036", ["takken-k-business-definition-agency-brokerage"], "他人所有の建物について、買主候補を紹介し売買契約成立を媒介することを業としている者の行為はどう扱われるか。", ["自ら売主でないので対象外", "売買の媒介を業とするため宅建業に含まれる", "代理権がないので対象外", "建物の媒介は対象外"], 1, "他人の宅地・建物の売買を媒介することを業として行う行為は宅建業に含まれる。", ["他人の取引の媒介が定義上対象である。", "正しい。建物売買の媒介は対象である。", "媒介は代理権を前提とせず、媒介自体が対象である。", "建物も対象である。"]],
    ["037", ["takken-k-business-definition-self-lease-exclusion"], "自己所有建物を自ら貸主として賃貸している者について、宅建業の定義との関係で正しいものはどれか。", ["1戸だけなら対象外だが2戸以上なら対象となる", "賃貸戸数にかかわらず、その自己賃貸行為そのものは法2条2号の宅建業に含まれない", "法人なら自己賃貸でも必ず対象となる", "居住用だけが対象外で事業用は対象となる"], 1, "自己所有建物を所有者が自ら貸主として賃貸する行為そのものは、戸数や法人・個人、用途によって宅建業の定義へ変わるものではない。", ["戸数で自己賃貸が対象化する規定ではない。", "正しい。自己賃貸という行為類型そのものが定義外である。", "法人・個人でこの行為類型の扱いは変わらない。", "用途で自己賃貸の定義上の扱いが変わるわけではない。"]],
    ["038", ["takken-k-business-definition-self-sale-exchange", "takken-k-business-definition-agency-brokerage"], "宅建業に含まれる行為を二つ選んだ組合せとして正しいものはどれか。\nア 自己所有建物の交換を業として行う\nイ 他人所有宅地の交換を媒介することを業として行う\nウ 自己所有建物を自ら賃貸する", ["ア・ウ", "イ・ウ", "ア・イ", "ウのみ"], 2, "アは自ら交換、イは他人の交換の媒介でいずれも対象。ウの自己賃貸は対象外である。", ["ウは対象外である。", "ウは対象外で、アが対象である。", "正しい。アとイが対象である。", "アとイも対象である。"]],
    ["039", ["takken-k-business-definition-agency-brokerage"], "他人の宅地の貸借について、貸主を代理して借主と契約を締結することを業として行う場合、正しいものはどれか。", ["自ら貸主でないので対象外", "貸借は売買でないので対象外", "貸借の代理を業とするため宅建業に含まれる", "媒介なら対象だが代理は対象外"], 2, "宅地または建物の貸借について代理を業として行うことは宅建業に含まれる。", ["他人の貸借を代理することが対象である。", "貸借も代理・媒介の場合は対象である。", "正しい。宅地貸借の代理は対象である。", "代理も媒介も対象である。"]],
    ["040", ["takken-k-business-definition-self-sale-exchange", "takken-k-business-definition-self-lease-exclusion"], "自己所有物件について『自ら』行う取引の扱いとして誤っているものはどれか。", ["宅地の売買を業とする場合は対象となる", "建物の交換を業とする場合は対象となる", "建物を自ら貸主として賃貸する場合も売買と同様に対象となる", "宅地の交換を業とする場合は対象となる"], 2, "自ら行う場合に対象となるのは売買・交換であり、自ら貸主として行う賃貸は含まれない。", ["正しい説明である。", "正しい説明である。", "誤り。自己賃貸は対象外である。", "正しい説明である。"]],
    ["041", ["takken-k-business-definition-self-sale-exchange", "takken-k-business-definition-agency-brokerage", "takken-k-business-definition-self-lease-exclusion"], "N社の事業は、①自社所有宅地の売却、②自社所有建物の賃貸、③他人所有建物の売買媒介である。宅建業に含まれる事業の組合せはどれか。", ["①のみ", "②のみ", "①と③", "②と③"], 2, "①は自ら売買で対象、②は自己賃貸で対象外、③は他人の売買媒介で対象である。", ["③も対象である。", "②は対象外である。", "正しい。①と③が対象である。", "②は対象外で、①が対象である。"]],
    ["042", ["takken-k-business-definition-agency-brokerage"], "宅地建物取引業の定義について、『媒介』に関する説明として正しいものはどれか。", ["売買の媒介だけが対象で、交換・貸借の媒介は対象外", "売買・交換の媒介だけが対象で、貸借の媒介は対象外", "売買・交換・貸借の媒介はいずれも対象となり得る", "貸借の媒介だけが対象となる"], 2, "宅地・建物の売買・交換・貸借の媒介を業として行うことはいずれも宅建業に含まれる。", ["交換と貸借も対象である。", "貸借も対象である。", "正しい。三類型の媒介が対象である。", "売買・交換も対象である。"]],
    ["043", ["takken-k-business-definition-self-lease-exclusion", "takken-k-business-definition-agency-brokerage"], "所有者Oが自分の建物を賃貸し、別件で他人Pの建物の賃貸借契約を媒介している。宅建業の定義上、行為を正しく区別したものはどれか。", ["O自身の賃貸もP物件の媒介も対象外", "O自身の賃貸だけが対象", "P物件の貸借媒介だけが対象", "両方とも対象"], 2, "所有者自身が貸主となる自己賃貸は対象外だが、他人の建物の貸借媒介を業として行う行為は対象である。", ["P物件の媒介は対象である。", "自己賃貸は対象外である。", "正しい。P物件の貸借媒介だけが対象である。", "自己賃貸は対象外なので両方ではない。"]],
    ["044", ["takken-k-business-definition-self-sale-exchange"], "自ら行う宅地・建物の交換について、宅地建物取引業法上正しいものはどれか。", ["交換は無償なら常に宅建業である", "交換は売買ではないため一切対象外である", "交換の媒介だけが対象で自ら交換は対象外である", "交換を業として自ら行うことも宅建業に含まれる"], 3, "法2条2号は、自ら行う宅地・建物の売買だけでなく交換を業として行う場合も対象としている。", ["無償かどうかだけでこの結論になるものではない。", "交換は明示的に対象である。", "自ら行う交換も対象である。", "正しい。自ら交換を業とする行為も対象である。"]],
    ["045", ["takken-k-business-definition-agency-brokerage"], "Q社は他人所有宅地の売買について契約成立のための媒介のみを反復継続して行う。宅建業の定義上、正しいものはどれか。", ["自ら売買しないので対象外", "代理権がないので対象外", "交換も同時に扱わなければ対象にならない", "売買媒介を業として行うため対象となる"], 3, "他人の宅地・建物の売買の媒介を業として行うこと自体が宅建業に含まれる。", ["自ら売買しなくても媒介類型として対象である。", "媒介に代理権は必要なく、媒介自体が対象である。", "交換を同時に扱うことは要件ではない。", "正しい。売買媒介を業とするため対象である。"]],
    ["046", ["takken-k-business-definition-self-sale-exchange", "takken-k-business-definition-agency-brokerage", "takken-k-business-definition-self-lease-exclusion"], "次のうち宅地建物取引業に含まれない行為はどれか。", ["自己所有宅地の売買を業として行う", "他人所有宅地の交換を代理することを業として行う", "他人所有建物の貸借を媒介することを業として行う", "自己所有建物を自ら貸主として賃貸する"], 3, "自己所有建物を自ら貸主として賃貸する行為そのものは宅建業の定義外である。他の三つは対象類型である。", ["自ら売買は対象である。", "他人の交換代理は対象である。", "他人の貸借媒介は対象である。", "正しい。自己賃貸は対象外である。"]],
    ["047", ["takken-k-business-definition-self-lease-exclusion"], "自己所有の建物を自ら貸主として賃貸する行為が宅建業に含まれない理由を、法2条2号の取引類型との関係で正しく示すものはどれか。", ["建物の貸借は法律上の取引ではないから", "賃貸借は個人だけが行えるから", "自己所有物件には宅建業法が一切適用されないから", "自ら行う取引として規定されるのは売買・交換であり、貸借は代理・媒介を業とする場合に対象となるから"], 3, "法2条2号は、自ら行うものとして売買・交換を掲げ、貸借については代理・媒介を業とする場合を対象とするため、自己賃貸そのものは定義に含まれない。", ["貸借自体が法律上の取引でないわけではない。", "法人・個人の別による除外ではない。", "自己所有物件の自ら売買・交換は対象となるため誤り。", "正しい。条文上の取引類型の違いを示している。"]],
    ["048", ["takken-k-business-definition-self-sale-exchange", "takken-k-business-definition-agency-brokerage", "takken-k-business-definition-self-lease-exclusion"], "宅地建物取引業の定義を最も正確に要約したものはどれか。", ["宅地・建物に関するすべての取引を自ら行えば対象となる", "売買だけが対象で、交換と貸借は一切対象外である", "代理・媒介は対象外で、自ら行う取引だけが対象である", "宅地・建物について自ら行う売買・交換と、売買・交換・貸借の代理・媒介を業とする行為が対象であり、自ら貸主として行う賃貸は含まれない"], 3, "宅建業は、自ら行う宅地・建物の売買・交換と、宅地・建物の売買・交換・貸借の代理・媒介を業とする行為を含む。一方、自己賃貸そのものは含まれない。", ["自ら貸借は対象外であるため誤り。", "交換および貸借の代理・媒介も対象である。", "代理・媒介も明示的に対象である。", "正しい。三つのcanonical knowledge itemを正確に統合している。"]]
  ];

  const questions = rows.map(([serial, knowledge_refs, stem, choices, answer_index, detailed_explanation, choice_explanations]) => Object.freeze({
    ...shared,
    question_id: `takken-power-q-business-definition-${serial}`,
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
    "takken-k-business-definition-self-sale-exchange",
    "takken-k-business-definition-agency-brokerage",
    "takken-k-business-definition-self-lease-exclusion"
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
    if (q.concept_id !== "takken-concept-business-definition") throw new Error(`Unexpected concept: ${q.question_id}`);
    if (!Array.isArray(q.knowledge_refs) || q.knowledge_refs.length === 0 || q.knowledge_refs.some((id) => !allowedKnowledgeIds.has(id))) throw new Error(`Invalid knowledge refs: ${q.question_id}`);
    if (!Array.isArray(q.choices) || q.choices.length !== 4 || new Set(q.choices).size !== 4) throw new Error(`Invalid choices: ${q.question_id}`);
    if (!Number.isInteger(q.answer_index) || q.answer_index < 0 || q.answer_index > 3) throw new Error(`Invalid answer index: ${q.question_id}`);
    answerCounts[q.answer_index] += 1;
    if (!Array.isArray(q.choice_explanations) || q.choice_explanations.length !== 4 || q.choice_explanations.some((reason) => !reason.trim())) throw new Error(`Invalid choice explanations: ${q.question_id}`);
    if (!Array.isArray(q.primary_source_refs) || q.primary_source_refs.length === 0 || q.primary_source_refs.some((id) => !allowedSourceIds.has(id))) throw new Error(`Invalid source refs: ${q.question_id}`);
    if (q.exam_year !== 2026 || q.law_as_of !== "2026-04-01") throw new Error(`Invalid legal version: ${q.question_id}`);
    if (q.validation_status !== "pending_validation") throw new Error(`Unexpected validation status: ${q.question_id}`);
  }
  if (Math.max(...answerCounts) - Math.min(...answerCounts) > 3) throw new Error(`Answer-position skew: ${answerCounts.join("/")}`);

  window.PowerTakkenQuestionsBusinessDefinitionBatch2 = Object.freeze(questions);
})();
