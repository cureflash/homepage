(() => {
  "use strict";

  const shared = Object.freeze({
    concept_id: "takken-concept-license-disqualification",
    exam_year: 2026,
    law_as_of: "2026-04-01",
    primary_source_refs: Object.freeze(["egov-takken-act", "mlit-license"]),
    generation_status: "generated",
    validation_status: "pending_validation"
  });

  const rows = [
    ["026",["takken-k-license-disqualification-cancellation-five-years"],"宅建業法上の一定の事由により免許を取り消された者が、取消しの日から4年11か月後に新たな免許を申請した。正しいものはどれか。",["取消しの日から5年を経過していないため、この取消しを理由とする欠格期間中である","4年を経過すれば欠格期間は終了する","申請時点で自動的に欠格ではなくなる","取消しを受けた者は永久に免許を受けられない"],0,"一定の免許取消しによる欠格期間は取消しの日から5年であり、4年11か月ではまだ期間を経過していない。",["正しい。5年を経過していない。","5年が基準であり4年ではない。","申請によって期間要件が消えることはない。","永久欠格ではなく法定の期間欠格である。"]],
    ["027",["takken-k-license-disqualification-cancellation-five-years"],"一定の免許取消しによる5年間の欠格期間について、起算点として正しいものはどれか。",["取消処分の聴聞公示日","免許を取り消された日","新たな免許申請日","取消しの原因となった行為日"],1,"一定の免許取消しに基づく5年間の欠格期間は、免許を取り消された日を基準とする。",["聴聞公示日はこの取消しによる5年期間の起算点ではない。","正しい。取消しの日が基準となる。","新たな申請日は起算点ではない。","原因行為の日ではなく取消しの日が基準となる。"]],
    ["028",["takken-k-license-disqualification-hearing-closure-five-years"],"免許取消処分の聴聞の期日・場所が公示された後、相当の理由なく廃業の届出をした者について、届出から3年後の扱いとして正しいものはどれか。",["聴聞公示から1年経過しているので免許を受けられる","廃業届をした時点で欠格は生じない","届出の日から5年を経過していないため欠格事由に当たる","必ず永久欠格となる"],2,"聴聞公示後に相当の理由なく一定の廃業等の届出をした者は、その届出の日から5年を経過しない間、欠格事由に該当する。",["1年では足りない。","法定要件を満たす届出は欠格事由となる。","正しい。届出から5年が基準である。","永久欠格ではない。"]],
    ["029",["takken-k-license-disqualification-hearing-closure-five-years"],"免許取消処分の聴聞公示後に廃業等の届出をした場合の欠格事由について、正しいものはどれか。",["廃業等の理由は一切考慮されない","聴聞公示前の届出だけが対象となる","欠格期間は10年である","解散や廃止について相当の理由がある場合は、この欠格事由から除外され得る"],3,"聴聞公示後の一定の廃業等でも、解散または廃止について相当の理由がある場合は、この欠格事由から除外され得る。",["相当の理由の有無は法定上意味を持つ。","対象となるのは聴聞公示後の一定の届出である。","5年が基準であり10年ではない。","正しい。相当の理由がある場合は除外され得る。"]],
    ["030",["takken-k-license-disqualification-criminal-sentence-five-years"],"拘禁刑以上の刑に処せられ、その刑の執行を終えた日から4年を経過した者について、その刑だけを前提とした扱いとして正しいものはどれか。",["5年を経過していないため欠格事由に当たる","執行終了後3年で欠格は終了する","拘禁刑以上でも罰金刑でなければ欠格にならない","判決確定と同時に欠格は終了する"],0,"拘禁刑以上の刑では、刑の執行を終わり、または執行を受けることがなくなった日から5年を経過しない間は欠格となる。",["正しい。執行終了から4年では5年を経過していない。","3年ではなく5年が基準である。","拘禁刑以上の刑自体が対象となる。","判決確定時ではなく執行終了等から5年が基準である。"]],
    ["031",["takken-k-license-disqualification-criminal-sentence-five-years"],"拘禁刑以上の刑に関する欠格期間の基準として正しいものはどれか。",["起訴の日から5年","刑の執行を終わり、または執行を受けることがなくなった日から5年","判決言渡しの日から10年","免許申請の日から5年"],1,"拘禁刑以上の刑による欠格期間は、刑の執行終了等の日から5年を経過しない間である。",["起訴日は基準ではない。","正しい。執行終了等の日が基準である。","判決言渡日から10年ではない。","申請日を起算点とする制度ではない。"]],
    ["032",["takken-k-license-disqualification-criminal-sentence-five-years"],"罰金刑と宅建業免許の欠格事由との関係について正しいものはどれか。",["すべての罰金刑が犯罪の種類を問わず5年間の欠格となる","罰金刑はどのような場合も欠格事由にならない","宅建業法が定める違反・罪による罰金刑は欠格対象となり得る","罰金刑を受けた者は永久に欠格となる"],2,"罰金刑は一律ではなく、宅建業法5条が定める一定の違反・罪によるものが欠格対象となる。",["すべての罰金刑が対象ではない。","法定の罰金刑は欠格対象となり得る。","正しい。法定の違反・罪に限って対象となる。","永久欠格ではない。"]],
    ["033",["takken-k-license-disqualification-criminal-sentence-five-years"],"宅建業法上、欠格対象となる法定の罪による罰金刑の執行を終えた者が、執行終了から6年後に免許を申請した。その罰金刑だけを前提とした説明として正しいものはどれか。",["罰金刑なので10年間欠格となる","罰金刑は永久欠格となる","6年後でも必ず欠格となる","当該罰金刑を理由とする5年間の欠格期間は経過している"],3,"法定の罪による罰金刑でも、刑の執行終了等から5年を経過すれば、その刑だけを理由とする5年間の期間欠格は終了する。",["10年ではない。","永久欠格ではない。","5年を超えているためその刑だけでは期間要件を満たさない。","正しい。5年間の欠格期間は経過している。"]],
    ["034",["takken-k-license-disqualification-misconduct-prior-five-years"],"免許申請の2年前に、宅地建物取引業に関して著しく不当な行為をした者について正しいものはどれか。",["申請前5年以内のため欠格事由に当たり得る","刑罰を受けていなければ絶対に欠格にならない","申請前1年以内だけが対象である","宅建業に関する行為でも期間要件はない"],0,"申請前5年以内に宅地建物取引業に関し不正または著しく不当な行為をした者は欠格事由となる。",["正しい。2年前は申請前5年以内である。","刑罰の有無とは別にこの欠格事由がある。","1年ではなく5年以内が基準である。","申請前5年以内という期間要件がある。"]],
    ["035",["takken-k-license-disqualification-misconduct-prior-five-years"],"申請前5年以内の不正・著しく不当な行為による欠格について、対象行為との関係で正しいものはどれか。",["私生活上のすべての不適切行為が対象となる","宅地建物取引業に関する不正または著しく不当な行為が対象となる","民事上の債務不履行は内容を問わず必ず対象となる","交通反則はすべて対象となる"],1,"この欠格事由は、宅地建物取引業に関する不正または著しく不当な行為を対象とする。",["私生活上の行為を一律に対象とする規定ではない。","正しい。宅建業に関する行為であることが必要である。","債務不履行を一律に対象とする規定ではない。","交通反則を一律に対象とする規定ではない。"]],
    ["036",["takken-k-license-disqualification-misconduct-prior-five-years"],"免許申請の7年前に宅地建物取引業に関し不正な行為をした者について、その行為だけを前提とした場合の説明として正しいものはどれか。",["申請前10年以内なので必ず欠格となる","不正行為は時期を問わず永久欠格となる","申請前5年以内ではないため、この期間要件による欠格事由には該当しない","7年経過後は自動的に免許が付与される"],2,"この欠格事由の期間要件は申請前5年以内であるため、7年前の行為だけではこの要件に該当しない。",["10年ではなく5年以内が基準である。","永久欠格ではない。","正しい。7年前は申請前5年以内ではない。","他の免許要件の審査は別に必要であり自動付与ではない。"]],
    ["037",["takken-k-license-disqualification-misconduct-prior-five-years"],"宅地建物取引業に関する不正・著しく不当な行為の欠格期間を判定する際、正しい基準はどれか。",["行為後10年間","行為後永久","前回免許の有効期間中かどうかだけ","免許申請前5年以内に行為があったか"],3,"宅建業に関する不正または著しく不当な行為は、免許申請前5年以内に行われたかが期間要件となる。",["10年ではない。","永久ではない。","前回免許の有効期間だけで判定する規定ではない。","正しい。申請前5年以内が基準である。"]],
    ["038",["takken-k-license-disqualification-cancellation-five-years","takken-k-license-disqualification-hearing-closure-five-years"],"次のうち、5年間の欠格期間の起算点の組合せとして正しいものはどれか。",["一定の免許取消しは取消しの日、聴聞公示後の一定の廃業等は届出の日","一定の免許取消しも聴聞公示後の廃業等も聴聞公示の日","一定の免許取消しは申請日、廃業等は取消予定日","いずれも原因行為の日"],0,"一定の免許取消しは取消しの日、聴聞公示後の一定の廃業等は届出の日から、それぞれ5年が基準となる。",["正しい。それぞれ取消しの日と届出の日が基準である。","双方とも聴聞公示日ではない。","申請日や取消予定日ではない。","原因行為の日を共通の起算点とはしない。"]],
    ["039",["takken-k-license-disqualification-hearing-closure-five-years","takken-k-license-disqualification-misconduct-prior-five-years"],"欠格事由の期間に関する記述として正しいものはどれか。",["聴聞公示後の一定の廃業等は申請前5年以内だけをみる","聴聞公示後の一定の廃業等は届出の日から5年、不正・著しく不当な行為は申請前5年以内が基準である","両者とも永久欠格である","両者とも一律に取消しの日から5年である"],1,"聴聞公示後の一定の廃業等は届出の日から5年、不正・著しく不当な行為は免許申請前5年以内という異なる期間基準を持つ。",["廃業等は届出の日が基準である。","正しい。両者の期間基準は異なる。","永久欠格ではない。","不正行為は取消しの日を基準としない。"]],
    ["040",["takken-k-license-disqualification-criminal-sentence-five-years","takken-k-license-disqualification-misconduct-prior-five-years"],"次のうち正しいものはどれか。",["拘禁刑以上の刑による欠格は判決言渡しから3年で終了する","宅建業に関する不正行為は申請前10年以内なら一律欠格となる","拘禁刑以上の刑は執行終了等から5年、不正・著しく不当な行為は申請前5年以内が期間基準となる","両者とも刑罰を受けた場合だけ欠格となる"],2,"刑による欠格は執行終了等から5年、不正・著しく不当な行為による欠格は申請前5年以内が基準である。",["3年ではなく5年で、基準も判決言渡日ではない。","10年ではなく5年以内である。","正しい。両者の期間基準を正しく区別している。","不正・著しく不当な行為の欠格は刑罰を必須要件としない。"]],
    ["041",["takken-k-license-disqualification-cancellation-five-years","takken-k-license-disqualification-criminal-sentence-five-years"],"一定の免許取消しと拘禁刑以上の刑による欠格について、正しい説明はどれか。",["どちらも免許申請日から5年を数える","どちらも永久欠格である","どちらも判決確定日から5年を数える","一定の免許取消しは取消しの日、拘禁刑以上の刑は執行終了等の日がそれぞれ5年期間の基準となる"],3,"一定の免許取消しと刑では起算点が異なり、前者は取消しの日、後者は刑の執行終了等の日が基準となる。",["申請日は起算点ではない。","永久欠格ではない。","取消しについて判決確定日は基準ではない。","正しい。起算点を正しく区別している。"]],
    ["042",["takken-k-license-disqualification-cancellation-five-years"],"一定の免許取消しを受けた者について、その取消しから6年が経過している。他に欠格事由がないものとした場合、当該取消しによる5年期間について正しいものはどれか。",["当該取消しを理由とする5年間の欠格期間は経過している","取消しから10年経過するまで欠格である","取消しを受けた以上永久欠格である","6年後から新たな5年期間が始まる"],0,"一定の免許取消しによる欠格期間は取消しの日から5年であり、6年経過時点ではその期間は終了している。",["正しい。5年を超えている。","10年ではない。","永久欠格ではない。","新たな5年期間が始まる規定ではない。"]],
    ["043",["takken-k-license-disqualification-hearing-closure-five-years"],"聴聞の期日・場所の公示後に一定の廃業等の届出をした者について、欠格期間の起算点を判断するため最も重要な日付はどれか。",["免許申請書の作成日","廃業等の届出の日","聴聞を実際に実施した日","事務所を開設した日"],1,"この欠格事由では、聴聞公示後に行われた一定の廃業等の届出の日から5年を経過したかが問題となる。",["申請書作成日は起算点ではない。","正しい。届出の日が5年期間の基準となる。","実際の聴聞実施日は起算点ではない。","事務所開設日は無関係である。"]],
    ["044",["takken-k-license-disqualification-criminal-sentence-five-years"],"次のうち、刑に関する欠格事由の説明として正しいものはどれか。",["拘禁刑以上の刑でも執行終了と同時に欠格期間は必ず終了する","罰金刑は犯罪の種類にかかわらずすべて対象となる","拘禁刑以上の刑は対象となり、罰金刑は法定の違反・罪によるものが対象となる","刑に関する欠格事由には期間制限がない"],2,"拘禁刑以上の刑は対象となり、罰金刑については宅建業法が列挙する一定の違反・罪によるものが対象となる。",["執行終了等から5年を経過しない間は欠格となる。","すべての罰金刑が対象ではない。","正しい。刑の種類に応じた法定範囲を述べている。","刑による欠格には5年の期間基準がある。"]],
    ["045",["takken-k-license-disqualification-misconduct-prior-five-years"],"免許申請者について、4年前に宅建業と無関係な私生活上の軽微なトラブルがあった。この事実だけを前提に、申請前5年以内の不正・著しく不当な行為による欠格事由との関係として正しいものはどれか。",["5年以内の出来事なら内容を問わず欠格となる","私生活上の出来事はすべて永久欠格となる","4年前なので必ず刑に関する欠格事由となる","宅地建物取引業に関する不正・著しく不当な行為という要件を満たさない"],3,"この欠格事由は宅地建物取引業に関する不正または著しく不当な行為を対象とするため、無関係な軽微な私生活上のトラブルだけではこの要件を満たさない。",["期間内であるだけでは足りず、行為の性質も要件となる。","そのような永久欠格規定ではない。","刑に処せられたという前提もない。","正しい。宅建業に関する行為という要件を満たさない。"]],
    ["046",["takken-k-license-disqualification-cancellation-five-years","takken-k-license-disqualification-hearing-closure-five-years","takken-k-license-disqualification-criminal-sentence-five-years","takken-k-license-disqualification-misconduct-prior-five-years"],"次のア〜エのうち、正しい記述はいくつあるか。\nア 一定の免許取消しは取消しの日から5年を経過しない間、欠格となる。\nイ 聴聞公示後の一定の廃業等は、相当の理由がない場合、届出の日から5年を経過しない間、欠格となる。\nウ 拘禁刑以上の刑は、執行終了等から5年を経過しない間、欠格となる。\nエ 宅建業に関する不正・著しく不当な行為は、申請前5年以内のものが対象となる。",["4つ","3つ","2つ","1つ"],0,"ア〜エはいずれも、当該4 knowledge item の期間・条件を正しく述べている。",["正しい。4つすべて正しい。","誤りではない記述が4つある。","正しい記述は2つではない。","正しい記述は1つではない。"]],
    ["047",["takken-k-license-disqualification-cancellation-five-years","takken-k-license-disqualification-criminal-sentence-five-years"],"次の組合せのうち、5年期間の起算点がともに正しいものはどれか。",["免許取消し＝聴聞公示日、拘禁刑以上＝判決言渡日","免許取消し＝取消しの日、拘禁刑以上＝執行終了等の日","免許取消し＝申請日、拘禁刑以上＝起訴日","免許取消し＝原因行為日、拘禁刑以上＝申請日"],1,"一定の免許取消しは取消しの日、拘禁刑以上の刑は執行終了等の日が、それぞれ5年期間の基準となる。",["どちらの起算点も誤っている。","正しい。両方の起算点が正しい。","どちらの起算点も誤っている。","どちらの起算点も誤っている。"]],
    ["048",["takken-k-license-disqualification-hearing-closure-five-years","takken-k-license-disqualification-misconduct-prior-five-years"],"次の記述のうち正しいものはどれか。",["聴聞公示後の廃業等は理由を問わず永久欠格となる","宅建業に関する不正行為は申請前1年以内だけが対象となる","聴聞公示後の一定の廃業等には相当の理由による除外があり、不正・著しく不当な行為は申請前5年以内が基準となる","両者とも刑事有罪判決がなければ欠格にならない"],2,"聴聞公示後の一定の廃業等には相当の理由に関する例外があり、宅建業に関する不正・著しく不当な行為は申請前5年以内が期間要件である。",["永久欠格ではなく、相当の理由による除外もある。","1年ではなく5年以内である。","正しい。両制度の条件を正しく述べている。","刑事有罪は両者の必須要件ではない。"]],
    ["049",["takken-k-license-disqualification-cancellation-five-years","takken-k-license-disqualification-hearing-closure-five-years","takken-k-license-disqualification-criminal-sentence-five-years","takken-k-license-disqualification-misconduct-prior-five-years"],"免許欠格の4つの期間基準を整理した記述として正しいものはどれか。",["すべて申請日から5年を数える","すべて原因行為から10年を数える","すべて永久欠格である","一定の免許取消しは取消しの日、聴聞公示後の一定の廃業等は届出の日、刑は執行終了等の日からそれぞれ5年、不正・著しく不当な行為は申請前5年以内を基準とする"],3,"4つの欠格事由は、取消日・届出日・刑の執行終了等の日・申請前5年以内という異なる基準を持つ。",["すべて申請日を起算点とするわけではない。","10年ではない。","永久欠格ではない。","正しい。4つの期間基準を正確に整理している。"]]
  ];

  const questions = rows.map(([serial, knowledge_refs, stem, choices, answer_index, detailed_explanation, choice_explanations]) => Object.freeze({
    ...shared,
    question_id: `takken-power-q-license-disqualification-${serial}`,
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
    "takken-k-license-disqualification-cancellation-five-years",
    "takken-k-license-disqualification-hearing-closure-five-years",
    "takken-k-license-disqualification-criminal-sentence-five-years",
    "takken-k-license-disqualification-misconduct-prior-five-years"
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
    if (q.concept_id !== "takken-concept-license-disqualification") throw new Error(`Unexpected concept: ${q.question_id}`);
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

  window.PowerTakkenQuestionsLicenseDisqualificationBatch2 = Object.freeze(questions);
})();
