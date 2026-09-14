# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-14

## 現在地

Topic 01〜05は `completed`。Topic 06 `25kVからどうやって電圧が誘導される？` は解説本文＋3段階例題＋解説PDF＋練習問題source＋練習PDF＋解説画像PowerPointまで完了。完成後独立再解答を実施し、`14 / 16 PASS` で `NEEDS_REVISION`。

完成数: `5 / 21`

current_status: `topic_06_independent_reanswer_needs_revision`

active_topic: `06 25kVからどうやって電圧が誘導される？`

## Topic 06 固定範囲

系列SPECどおり、次だけを扱う。

- ファラデーの法則
- レンツの法則
- 誘導起電力
- 自己インダクタンス
- 相互インダクタンス
- 結合係数
- 磁気エネルギー

中心式は `e = -N dΦ/dt`。磁界・磁気回路そのものはTopic 05、電磁力・トルクはTopic 07、フェーザ・交流回路は後続Topicへ譲る。変圧器等価回路等も追加しない。

## Topic 06 固定EXAM_ALIGNMENT

品質ゲート対象は一次「理論」5問・16小問。

- R7 問2 (1)(2)(4)(5): 結合係数、結合コイルの磁気エネルギー、鎖交磁束、ファラデーの法則。公式解答 `ヲ / ワ / イ / ヨ`
- R5 問2 (2)〜(4): 鎖交磁束の変化、速度、ファラデーの法則。公式解答 `イ / ニ / ロ`
- R2 問2 (1)〜(5): `Ψ=Li`、`W=Li²/2`、鎖交磁束保存、位置依存自己インダクタンス。公式解答 `イ / ヨ / ワ / ロ / ヌ`
- H30 問2 (4)(5): `L=N1²/R`、`M=N1N2/R` として選定済み。公式解答 `ヌ / イ`
- H28 問1 (3)(5): `Ψ=Li`、`W=Li²/2`。公式解答 `ヨ / ル`

R8問2後半は前段のビオ・サバール依存、R7問2(3)はトルク、R5問2(1)(5)はTopic 05依存、H30問2(1)〜(3)とH28問1(1)(2)(4)もTopic 05側のため固定ゲートから除外する。

R7〜R5の二次「電力・管理」「機械・制御」を全6科目確認したが、Topic 06固定範囲だけで直接解かせる問題は確認できなかった。`08 理論・二種` は一次理論中心のため、二次問題を数合わせで追加しない。

## Topic 06 解説本文の確定内容

- `Ψ=NΦ` と `e=-dΨ/dt=-N dΦ/dt`
- レンツ則の負号と基準方向
- 自己インダクタンス `Ψ=Li`
- 一定 `L` の `e=-Ldi/dt` と、位置依存時の `e=-d(Li)/dt`
- 抵抗ゼロ短絡コイルの鎖交磁束保存 `L(0)I=L(x)i`
- 相互インダクタンス、`M0=k√(L1L2)`、`0<=k<=1`
- 与えられた磁気抵抗から `L=N²/R`、`M=N1N2/R`
- 2巻線の磁気エネルギー `W=1/2 L1i1² + 1/2 L2i2² ± Mi1i2`
- `M(θ)=M0cosθ` の鎖交磁束・誘導起電力。トルクは扱わない
- 移動コイルの `e=-(dΨ/dl)v`
- 単一コイルの磁気エネルギー `W=Li²/2=Ψ²/(2L)`
- 0系主変圧器は電磁誘導の導入例に限定し、未確認実車値・等価回路・フェーザへ広げない

## 練習問題

source: `topics/06_transformer_electromagnetic_induction/06_transformer_electromagnetic_induction_practice.md`

PDF: `topics/06_transformer_electromagnetic_induction/06_transformer_electromagnetic_induction_practice.pdf`

- 全12問、すべて五肢択一
- 基礎3 / 本試験標準6 / 複合・ひっかけ3
- 正答一意性 `12 / 12 PASS`
- R7対応: 問3、8、11
- R5対応: 問1、7、10
- R2対応: 問4、6、10、12
- H30対応: 問5
- H28対応: 問4、9、12
- SPEC必須のレンツ則、磁束と鎖交磁束の区別: 問1、2、9
- 二次数合わせ0件、固定範囲外追加0件、未確認実車値0件
- A4縦4ページ、全4ページ200 dpi表示QA PASS

## 解説画像PowerPoint

PPTX: `topics/06_transformer_electromagnetic_induction/06_transformer_electromagnetic_induction_images.pptx`

- 16:9、3スライド
- ファラデー則とレンツ則、自己インダクタンス、相互インダクタンス、位置・角度変化、過去問接続を図解
- 固定一次5問・16小問への接続を維持
- 二次数合わせ0件、固定範囲外追加0件、未確認実車値0件
- 全3スライド表示QA PASS
- overflow検査 PASS、ZIP整合性 PASS

## 完成後独立再解答

記録: `topics/06_transformer_electromagnetic_induction/06_transformer_electromagnetic_induction_independent_reanswer.md`

- R7: `4 / 4 PASS`
- R5: `3 / 3 PASS`
- R2: `5 / 5 PASS`
- H28: `2 / 2 PASS`
- H30: `0 / 2 PASS`
- 合計: `14 / 16 PASS`

H30問2(4)(5)では不整合を検出した。公式問題の `R` は各a-d枝の磁気抵抗で、正答へ到達するには3枝磁気回路の合成と磁束分流から、コイル1から見た有効磁気抵抗 `3R/2` と右枝の共有磁束を導く必要がある。現教材§7は与えられた単一共通磁路の `R` から `L=N²/R`、`M=N1N2/R` へ接続する説明に限定しており、この中間知識を含まない。

Topic 05の磁気回路知識を教材外補完すれば、(4) `L1=2N1²/(3R)` → `ヌ`、(5) `M=N1N2/(3R)` → `イ` と公式解答へ一致する。しかし `EXAM_ALIGNMENT_SPEC.md` の独立試験条件では教材外補完はFAILなので、H30の2小問はPASS扱いしない。

このrunでは原因だけを記録し、固定範囲変更・仕様追加・H30の勝手な除外はしていない。

## Topic 06 成果物・進捗

- source: `topics/06_transformer_electromagnetic_induction/06_transformer_electromagnetic_induction.md`
- 制作前EXAM_ALIGNMENT: 完了
- 公式解答照合: `16 / 16`
- 解説本文＋3段階例題: 完了
- 解説PDF＋表示QA: 完了
- 練習問題source＋練習PDF＋表示QA: 完了
- 解説画像PowerPoint＋表示QA: 完了
- 固定範囲外追加: 0件
- 二次数合わせ: 0件
- 完成後独立再解答: 実施済み、`14 / 16 PASS / NEEDS_REVISION`
- 最終QA: 未着手

## 今回の更新

1. MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC / STATUS / HANDOFF / Topic 06 sourceを再確認。
2. 固定一次5問・16小問を教材内容だけで独立再解答。
3. R7・R5・R2・H28は14小問すべてPASS。
4. H30問2(4)(5)は教材外の磁気回路合成・磁束分流が必要と判定し、2小問FAIL。
5. 二次非採用判断、固定範囲、仕様を変更せず、独立再解答記録・STATUS・HANDOFFへ反映。

## 次に行うこと

H30問2(4)(5)のEXAM_ALIGNMENTと教材内カバレッジの不整合を、Topic 06固定範囲を変更せずに是正する。その後、固定一次5問・16小問の完成後独立再解答を再実施する。最終QAは独立再解答PASS後に行う。