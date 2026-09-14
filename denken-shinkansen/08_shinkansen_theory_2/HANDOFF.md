# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-14

## 現在地

Topic 01〜05は `completed`。Topic 06 `25kVからどうやって電圧が誘導される？` は解説本文＋3段階例題＋解説PDF＋練習問題source＋練習PDF＋解説画像PowerPointまで完了。

旧EXAM_ALIGNMENTで完成後独立再解答を実施した結果 `14 / 16 PASS / NEEDS_REVISION` となり、H30問2(4)(5)がTopic 05の磁気回路知識を前提とする不整合を検出した。今回、固定範囲を増やさずH30を除外し、H21問2(2)(3)へ差し替えてEXAM_ALIGNMENTを是正した。

完成数: `5 / 21`

current_status: `topic_06_exam_alignment_revised`

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

H30問2(4)(5)は旧選定から除外した。完成後独立再解答で、公式問題の3枝磁気回路から有効磁気抵抗と磁束分流を求めないと正答できないことを確認したためである。この前段はTopic 05固定範囲であり、Topic 06へ追加しない。

H21問2(2)(3)は、同一磁路条件のため共通磁気抵抗が比で消え、Topic 06の自己・相互インダクタンスだけで完結する。

- (2): `Lbc/Lab=(1.5N/N)²=2.25` → `ヨ`
- (3): `Mbc,cd/Lab=(1.5N×2N)/N²=3` → `ヘ`

修正版も一次5問・16小問を維持し、公式解答照合は `16 / 16`。

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
- 旧独立再解答記録: `topics/06_transformer_electromagnetic_induction/06_transformer_electromagnetic_induction_independent_reanswer.md`

練習問題の内容自体は固定範囲内であり、問5の `L=N1²/R`、`M=N1N2/R` は自己・相互インダクタンスの計算訓練としてそのまま有効。今回の是正は公式過去問品質ゲートの選定誤りを直したもので、磁気回路論点を追加していない。

## 旧独立再解答の扱い

旧選定では以下だった。

- R7: `4 / 4 PASS`
- R5: `3 / 3 PASS`
- R2: `5 / 5 PASS`
- H28: `2 / 2 PASS`
- H30: `0 / 2 PASS`
- 合計: `14 / 16 PASS / NEEDS_REVISION`

H30の2小問FAILが今回のEXAM_ALIGNMENT是正の根拠であり、この記録は履歴として残す。修正版EXAM_ALIGNMENTについてはまだ独立再解答していないため、Topic 06を `completed` にはしない。

## 今回の更新

1. MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC / STATUS / HANDOFF / Topic 06 sourceを確認。
2. H30問2(4)(5)のFAIL原因を再確認し、Topic 05依存であることを確定。
3. 旧年度の公式一次問題を確認し、H21問2(2)(3)を代替選定。
4. H21(2)(3)が `L∝N²`、`M∝N1N2` だけで完結し、公式解答 `ヨ / ヘ` と一致することを確認。
5. 固定範囲・二次非採用判断・5問16小問という品質ゲート件数を変更せず、source・STATUS・HANDOFFへ反映。

## 次に行うこと

修正版EXAM_ALIGNMENTの一次5問・16小問を、完成教材だけで独立再解答する。H21問2(2)(3)は自己・相互インダクタンスの比例関係だけを使い、Topic 05の磁気回路計算で補完しない。最終QAは独立再解答PASS後に行う。