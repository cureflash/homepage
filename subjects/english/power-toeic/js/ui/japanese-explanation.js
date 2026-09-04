function answerOf(question) {
  return question.choices?.[question.correctIndex] ?? '';
}

const ruleBySkill = {
  'p5.conn.because_vs_because_of': (a) => a === 'because of'
    ? "後ろが名詞句だから『because of』だ！ 『because』の後ろには主語＋動詞の節が必要になるぞ！"
    : "後ろが主語＋動詞の節だから『because』だ！ 名詞句だけなら『because of』を使うぞ！",
  'p5.conn.by_vs_until': (a) => a === 'by'
    ? "『by』は『その時点までに』という締切だ！ 完了期限を表すならこれになるぞ！"
    : "『until』は『その時点までずっと』という継続だ！ 動作や状態が続くならこれだ！",
  'p5.conn.despite_vs_although': (a) => a === 'despite'
    ? "『despite』は前置詞だから後ろに名詞句を取る！ 節を直接続けることはできないぞ！"
    : "『although』は接続詞だから後ろに主語＋動詞の節を取る！ 文の形を見抜け！",
  'p5.conn.during_vs_while': (a) => a === 'during'
    ? "『during』は前置詞だ！ 後ろに名詞句が来るならこれになるぞ！"
    : "『while』は接続詞だ！ 後ろに主語＋動詞の節が来るならこれだ！",
  'p5.conn.for_vs_since': (a) => a === 'for'
    ? "『for』は期間を表す！ 『3 years』のような長さを示すならこれだ！"
    : "『since』は起点を表す！ 『2019』のような開始時点を示すならこれになるぞ！",
  'p5.conn.logical_conjunction': (a) => `前後の論理関係を読め！ この文では『${a}』が意味を正しくつなぐ接続詞だ！`,
  'p5.conn.preposition_vs_conjunction': (a) => `空所の後ろの形を見ろ！ この文では『${a}』が前置詞・接続詞として正しい形になるぞ！`,
  'p5.conn.time_prepositions': (a) => `時間表現との組み合わせを覚えろ！ この文では『${a}』が正しい前置詞だ！`,
  'p5.det.another_other_others': (a) => `名詞を伴うか、単数か複数かを見ろ！ この形では『${a}』が正解になるぞ！`,
  'p5.det.article_choice': (a) => `冠詞は名詞の特定性・可算性・単複で決まる！ この文では『${a}』が条件に合うぞ！`,
  'p5.det.countable_number': (a) => `可算名詞は単数・複数を数量表現と一致させろ！ この文では『${a}』の形が正しいぞ！`,
  'p5.det.few_vs_little': (a) => /few/i.test(a)
    ? "『few』は可算名詞の複数形に使う！ 数えられる名詞ならこっちだ！"
    : "『little』は不可算名詞に使う！ 数えられない名詞ならこっちになるぞ！",
  'p5.det.much_vs_many': (a) => /many/i.test(a)
    ? "『many』は可算名詞の複数形に使う！ 数えられる名詞を見逃すな！"
    : "『much』は不可算名詞に使う！ 数えられない名詞ならこれだ！",
  'p5.pos.adjective_after_linking_verb': (a) => `連結動詞の後ろでは主語の状態を説明する形容詞が必要だ！ 正解は『${a}』になるぞ！`,
  'p5.pos.adjective_before_noun': (a) => `名詞の直前でその名詞を修飾するなら形容詞だ！ 正解は『${a}』だ！`,
  'p5.pos.adverb_modifies_adjective': (a) => `形容詞をさらに修飾するのは副詞だ！ この位置には『${a}』が入るぞ！`,
  'p5.pos.adverb_modifies_verb': (a) => `動詞の動作を修飾するのは副詞だ！ この位置では『${a}』が正解だ！`,
  'p5.pos.noun_in_noun_slot': (a) => `主語・目的語・前置詞の目的語など、名詞が必要な位置だ！ だから『${a}』を選べ！`,
  'p5.pos.participle_adjective_ed_ing': (a) => /ed\b/i.test(a)
    ? `『${a}』のような -ed 形は、主に人や対象が「そう感じる・そうされた」状態を表すぞ！`
    : `『${a}』のような -ing 形は、主に物事が「そう感じさせる」性質を表すぞ！`,
  'p5.pos.word_form_object_position': (a) => `動詞の後ろの目的語位置には名詞相当の形が必要だ！ この文では『${a}』になるぞ！`,
  'p5.pos.word_form_subject_position': (a) => `文の主語位置には名詞相当の形が必要だ！ この文では『${a}』を選べ！`,
  'p5.pron.indefinite_agreement': (a) => `不定代名詞に合わせて動詞や代名詞の数を一致させろ！ この文では『${a}』が正しいぞ！`,
  'p5.pron.possessive_forms': (a) => `後ろに名詞があるかを確認しろ！ 所有格と所有代名詞を区別すると『${a}』になるぞ！`,
  'p5.pron.reflexive': (a) => `主語と目的語が同一人物・同一物なら再帰代名詞を使う！ 正解は『${a}』だ！`,
  'p5.pron.subject_vs_object': (a) => `代名詞の位置を見ろ！ 主語なら主格、動詞や前置詞の後ろなら目的格だ！ ここは『${a}』になるぞ！`,
  'p5.rel.where_vs_when': (a) => a === 'where'
    ? "場所を先行詞にして『そこで』という意味を作るなら『where』だ！"
    : "時を先行詞にして『その時に』という意味を作るなら『when』だ！",
  'p5.rel.who_vs_which': (a) => a === 'who'
    ? "先行詞が人なら『who』だ！ 人を受ける関係詞を選べ！"
    : "先行詞が物・事なら『which』だ！ 人以外を受ける形になるぞ！",
  'p5.rel.whose': () => "所有関係を表す関係詞は『whose』だ！ 後ろの名詞との『～の』関係を見抜け！",
  'p5.verb.active_vs_passive': (a) => `主語が動作をするのか、されるのかを見ろ！ この文では『${a}』の態が正しいぞ！`,
  'p5.verb.gerund_pattern': (a) => `この動詞の後ろは動名詞を取る形だ！ 『${a}』のパターンをセットで覚えろ！`,
  'p5.verb.modal_base_form': (a) => `助動詞の直後は動詞の原形だ！ だから『${a}』になるぞ！`,
  'p5.verb.present_perfect_vs_past': (a) => `現在とのつながりがあるのか、完結した過去なのかを見極めろ！ この文では『${a}』が正しい時制だ！`,
  'p5.verb.present_vs_past': (a) => `時を示す語と文脈を確認しろ！ この文の時点に合うのは『${a}』だ！`,
  'p5.verb.subject_verb_agreement': (a) => `主語の単数・複数と動詞を一致させろ！ この主語なら『${a}』になるぞ！`,
  'p5.verb.to_infinitive_pattern': (a) => `この動詞の後ろは to不定詞を取る形だ！ 『${a}』のパターンを覚えろ！`,
  'p5.vocab.adjective_noun_collocation': (a) => `形容詞と名詞には自然な組み合わせがある！ この名詞と結び付くのは『${a}』だ！`,
  'p5.vocab.business_context': (a) => `文全体の業務文脈を読め！ 意味が最も自然につながるのは『${a}』だ！`,
  'p5.vocab.confusing_words': (a) => `似た語でも意味と使い方は別だ！ この文脈に合うのは『${a}』になるぞ！`,
  'p5.vocab.phrasal_verb': (a) => `句動詞は語の組み合わせ全体で意味が決まる！ この文では『${a}』が正解だ！`,
  'p5.vocab.preposition_collocation': (a) => `語と前置詞の結び付きはセットで覚えろ！ この表現では『${a}』になるぞ！`,
  'p5.vocab.verb_noun_collocation': (a) => `動詞と名詞には定番の組み合わせがある！ この名詞には『${a}』を使うぞ！`,
};

export function getJapaneseExplanation(question) {
  const answer = answerOf(question);
  const rule = ruleBySkill[question.skillId];
  if (rule) return rule(answer, question);
  return `正解は『${answer}』だ！ 文法と文脈を確認して、この形を選べるようにしておけ！`;
}
