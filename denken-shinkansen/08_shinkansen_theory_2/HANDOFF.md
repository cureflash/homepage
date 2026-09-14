# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-15

## 現在地

Topic 01〜06は `completed`。Topic 06 `25kVからどうやって電圧が誘導される？` は最終QA再々実施まで完了し、全品質ゲート `PASS / completed`。

完成数: `6 / 21`

current_status: `topic_06_completed`

active_topic: `07 0系のモーターはなぜ力を出せる？`

次工程: Topic 07の制作前EXAM_ALIGNMENT。

## Topic 06 固定範囲

系列SPECどおり、次だけを扱った。

- ファラデーの法則
- レンツの法則
- 誘導起電力
- 自己インダクタンス
- 相互インダクタンス
- 結合係数
- 磁気エネルギー

中心式は `e = -N dΦ/dt`。磁界・磁気回路そのものはTopic 05、電磁力・トルクはTopic 07、フェーザ・交流回路は後続Topicへ譲る。変圧器等価回路等も追加していない。

## Topic 06 修正版EXAM_ALIGNMENT

品質ゲート対象は一次「理論」5問・16小問。

- R7 問2 (1)(2)(4)(5): 結合係数、結合コイルの磁気エネルギー、鎖交磁束、ファラデーの法則。公式解答 `ヲ / ワ / イ / ヨ`
- R5 問2 (2)〜(4): 鎖交磁束の変化、速度、ファラデーの法則。公式解答 `イ / ニ / ロ`
- R2 問2 (1)〜(5): `Ψ=Li`、`W=Li²/2`、鎖交磁束保存、磁気エネルギー。公式解答 `イ / ヨ / ワ / ロ / ヌ`
- H28 問1 (3)(5): `Ψ=Li`、`W=Li²/2`。公式解答 `ヨ / ル`
- H21 問2 (2)(3): 同一磁路で `L∝N²`、`M∝N1N2`。公式解答 `ヨ / ヘ`

旧H30問2(4)(5)は3枝磁気回路の合成磁気抵抗・磁束分流を前提としてTopic 05依存になるため除外。固定範囲を増やさずH21問2(2)(3)へ差し替えた。

R7〜R5の二次「電力・管理」「機械・制御」を全6科目確認済みだが、Topic 06固定範囲だけで直接解かせる問題は確認できない。`08 理論・二種` は一次理論中心のため、二次問題を数合わせで追加していない。

## Topic 06 成果物

- source: `topics/06_transformer_electromagnetic_induction/06_transformer_electromagnetic_induction.md`
- 練習source: `topics/06_transformer_electromagnetic_induction/06_transformer_electromagnetic_induction_practice.md`
- 解説PDF: A4縦4ページ・表示QA PASS
- 練習PDF: A4縦4ページ・12問・表示QA PASS
- 解説画像PowerPoint: 16:9・3スライド・表示QA / overflow / ZIP整合性 PASS
- 独立再解答記録: `topics/06_transformer_electromagnetic_induction/06_transformer_electromagnetic_induction_independent_reanswer.md`
- 最終QA記録: `topics/06_transformer_electromagnetic_induction/06_transformer_electromagnetic_induction_final_qa.md`

## Topic 06 最終品質ゲート

- 修正版一次5問・16小問: `16 / 16 PASS`
- 教材外知識補完: 0件
- 二次数合わせ: 0件
- 固定範囲外論点追加: 0件
- 解説PDF・練習PDF・PowerPoint表示QA: PASS
- 練習12問の正答一意性・独立再計算: `12 / 12 PASS`
- 主source・練習source・独立再解答記録・最終QA記録の相互整合: PASS
- 最終判定: `PASS / completed`

## 今回の更新

1. `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、STATUS、HANDOFF、Topic 06成果物を再照合。
2. Topic 06最終QAを再々実施し、前回までの進捗記録不整合が解消済みであることを確認。
3. Topic 06主sourceと最終QA記録を `completed` へ同期。
4. STATUS / HANDOFFの完成数を `6 / 21` へ更新。
5. 教材本文・固定EXAM_ALIGNMENT・数式・例題・問題・PDF/PPTX・固定範囲は変更していない。

## 次に行うこと

Topic 07 `0系のモーターはなぜ力を出せる？` の制作前EXAM_ALIGNMENTを実施する。

系列SPECの固定範囲は、ローレンツ力、`F=q(v×B)`、`F=BIl`、電子の運動、電界中・磁界中の荷電粒子、円運動、電子の比電荷。直流機そのものの特性は機械編へ譲り、仕様外論点を追加しない。