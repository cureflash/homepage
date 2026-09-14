# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-14

## 現在地

Topic 01〜05は `completed`。Topic 06 `25kVからどうやって電圧が誘導される？` は解説本文＋3段階例題＋解説PDF＋練習問題source＋練習PDF＋解説画像PowerPointまで完了している。

旧EXAM_ALIGNMENTの完成後独立再解答は `14 / 16 PASS / NEEDS_REVISION` となり、H30問2(4)(5)がTopic 05の磁気回路知識を前提とする不整合を検出した。このため固定範囲を増やさずH30を除外し、H21問2(2)(3)へ差し替えた。

修正版EXAM_ALIGNMENTの一次5問・16小問を完成教材だけで再度独立再解答し、`16 / 16 PASS`。教材外知識補完0件、二次数合わせ0件、固定範囲外論点追加0件。

完成数: `5 / 21`

current_status: `topic_06_independent_reanswer_complete`

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

## Topic 06 修正版EXAM_ALIGNMENT

品質ゲート対象は一次「理論」5問・16小問。

- R7 問2 (1)(2)(4)(5): 結合係数、結合コイルの磁気エネルギー、鎖交磁束、ファラデーの法則。公式解答 `ヲ / ワ / イ / ヨ`
- R5 問2 (2)〜(4): 鎖交磁束の変化、速度、ファラデーの法則。公式解答 `イ / ニ / ロ`
- R2 問2 (1)〜(5): `Ψ=Li`、`W=Li²/2`、鎖交磁束保存、位置依存自己インダクタンス。公式解答 `イ / ヨ / ワ / ロ / ヌ`
- H28 問1 (3)(5): `Ψ=Li`、`W=Li²/2`。公式解答 `ヨ / ル`
- H21 問2 (2)(3): 同一磁路で `L∝N²`、`M∝N1N2`。公式解答 `ヨ / ヘ`

H30問2(4)(5)は旧選定から除外済み。3枝磁気回路の合成磁気抵抗・磁束分流を前提とし、Topic 05依存となるためである。H21問2(2)(3)は共通磁気抵抗が比で消え、Topic 06の自己・相互インダクタンスだけで完結する。

R7〜R5の二次「電力・管理」「機械・制御」を全6科目確認済みだが、Topic 06固定範囲だけで直接解かせる問題は確認できていない。`08 理論・二種` は一次理論中心のため、二次問題を数合わせで追加しない。

## Topic 06 教材内容

- `Ψ=NΦ` と `e=-dΨ/dt=-N dΦ/dt`
- レンツ則の負号と基準方向
- 自己インダクタンス `Ψ=Li`
- 一定 `L` の `e=-Ldi/dt` と、位置依存時の `e=-d(Li)/dt`
- 抵抗ゼロ短絡コイルの鎖交磁束保存 `L(0)I=L(x)i`
- 相互インダクタンス、`M0=k√(L1L2)`、`0<=k<=1`
- 同一磁路で `L∝N²`、`M∝N1N2`
- 2巻線の磁気エネルギー `W=1/2 L1i1² + 1/2 L2i2² ± Mi1i2`
- `M(θ)=M0cosθ` の鎖交磁束・誘導起電力。トルクは扱わない
- 移動コイルの `e=-(dΨ/dl)v`
- 単一コイルの磁気エネルギー `W=Li²/2=Ψ²/(2L)`
- 0系主変圧器は電磁誘導の導入例に限定し、未確認実車値・等価回路・フェーザへ広げない

## 成果物

- source: `topics/06_transformer_electromagnetic_induction/06_transformer_electromagnetic_induction.md`
- 練習source: `topics/06_transformer_electromagnetic_induction/06_transformer_electromagnetic_induction_practice.md`
- 解説PDF: 完了・表示QA PASS
- 練習PDF: A4縦4ページ・12問・表示QA PASS
- 解説画像PowerPoint: 16:9・3スライド・表示QA / overflow / ZIP整合性 PASS
- 独立再解答記録: `topics/06_transformer_electromagnetic_induction/06_transformer_electromagnetic_induction_independent_reanswer.md`

## 修正版独立再解答

- R7: `4 / 4 PASS`
- R5: `3 / 3 PASS`
- R2: `5 / 5 PASS`
- H28: `2 / 2 PASS`
- H21: `2 / 2 PASS`
- 合計: `16 / 16 PASS`
- 教材外知識補完: 0件
- 二次数合わせ: 0件
- 固定範囲外論点追加: 0件

旧 `14 / 16 PASS / NEEDS_REVISION` はH30問2(4)(5)の選定不整合を検出した履歴として独立再解答記録内に残す。修正版ではH21問2(2)(3)を教材§7の比例関係だけで解き、Topic 05の磁気回路計算を補完していない。

## 今回の更新

1. MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC / STATUS / HANDOFF / Topic 06 sourceを確認。
2. 修正版EXAM_ALIGNMENTの一次5問・16小問を、完成教材だけで独立再解答。
3. 解法を導出した後に公式解答と照合し、`16 / 16 PASS` を確認。
4. 教材外知識補完0件、二次数合わせ0件、固定範囲外論点追加0件を確認。
5. 独立再解答記録・STATUS・HANDOFFへ反映。

## 次に行うこと

Topic 06の最終QAを実施する。独立再解答はPASSしたが、この段階では `completed` へ進めない。
