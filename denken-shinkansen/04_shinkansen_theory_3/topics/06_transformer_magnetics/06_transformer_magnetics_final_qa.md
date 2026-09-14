# Topic 06 最終QA記録

対象: `06 0系の変圧器は何をしていた？`

実施日: 2026-09-15

## 判定

`PASS / completed`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`04_shinkansen_theory_3/SPEC.md` の既定範囲だけで再判定し、新しい仕様は追加していない。

前回 `NEEDS_REVISION` の唯一のFAIL要因だった主source進捗記録不整合は解消済み。必須成果物、固定EXAM_ALIGNMENT 5問、完成後独立再解答、既存表示QA、SPEC境界、進捗記録整合性を全件PASSしたため、Topic 06を `completed` とする。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

| 成果物 | blob SHA | 判定 |
|---|---|---|
| source Markdown | `d3ae48e678c4133d5c0e928f3f557c8c0bf97a26` | PASS |
| 解説PDF | `f148459a58a0966030c8201aeefcdbcce3067f06` | PASS |
| 練習source | `e0cb1dab3caf527192169928939f7853c5d289e3` | PASS |
| 練習PDF | `3de26cec80adfb57732e374db9decc2bb7ffc961` | PASS |
| 解説画像PowerPoint | `c1bd9e14b680db4dbb5b87fe71fd12674c9ea7c1` | PASS |
| 完成後独立再解答 | `ef0a17b5bca39605c1785c93d235a6dc21860d74` | PASS |

## EXAM_ALIGNMENT確認

Topic 06固定範囲で選定した公式理論過去問5問について、要求知識と教材内対応をsource Markdownで再確認した。

1. 令和8年度上期 理論 問3 — 自己インダクタンス、鎖交磁束、磁気エネルギー
2. 令和7年度下期 理論 問3 — `Ψ=NΦ`、`L=NΦ/I`
3. 令和6年度上期 理論 問3 — 磁気諸量の単位
4. 令和5年度上期 理論 問3 — 起磁力、磁気抵抗、磁束、比例関係
5. 令和4年度上期 理論 問3 — 相互インダクタンス、結合係数、直列加極性

source Markdownは `B=μH`、`Φ=BA`、アンペアの法則、`ℱ=NI`、`Rm=l/(μA)`、`Φ=ℱ/Rm`、`Ψ=NΦ`、`L=Ψ/I`、`W=LI²/2`、`M=k√(L1L2)`、`Lseries=L1+L2±2M`、ファラデーの法則、レンツの法則、理想変圧器巻数比、3段階例題を収録し、5問の要求事項を全件マッピングしている。

## 完成教材・表示QA

前回最終QA時点でPASS済みの制作時QAを再確認した。今回変更したのは進捗記録だけであり、PDF・PowerPointのblob SHAは前回QA時から不変である。

- 解説PDF: A4縦2ページ。200 dpi全ページ表示QA・文字抽出QA PASS。
- 練習PDF: A4縦4ページ、15問すべて五肢択一。基礎4 / 標準8 / 複合・応用3。200 dpi全ページ表示QA・文字抽出QA・15問再計算 PASS。
- PowerPoint: 16:9・4枚。全4枚表示QA・PPTX整合性 PASS。

## 完成後独立再解答

`06_transformer_magnetics_exam_recheck.md` を再確認した。

- 独立解答列: `(1), (3), (2), (2), (2)`
- 公式解答列: `(1), (3), (2), (2), (2)`
- 一致: `5 / 5 PASS`
- 教材外知識の補完: `0問`
- 後続Topic知識への依存: `0問`
- 未確認0系実車値への依存: `0問`

## SPEC境界確認

次を完成ゲートへ追加していない。

- Topic 07の電磁力、運動導体の誘導起電力、モータ回転原理
- Topic 08・09の正弦波、実効値、RLC、リアクタンス、インピーダンス、交流位相
- Topic 10・11の力率、無効電力、三相交流、Y・Δ
- Topic 12・13の半導体、スイッチング、PWM
- 変圧器の損失・効率・電圧変動率・詳細等価回路
- 0系主変圧器の未確認実車値・内部巻線・結線・保護回路の推測

判定: PASS。

## 進捗記録整合性

PASS。

`06_transformer_magnetics.md` は現在、

- `status: COMPLETED`
- `完了判定: completed`
- 全成果物・完成後独立再解答・最終QA完了
- 独立再解答 `5 / 5 PASS`、教材外知識補完 `0問`
- 次工程: Topic 07の制作前EXAM_ALIGNMENT

へ同期済みで、GitHub正本上の実際の完成状況と一致している。

## 最終判定

- 必須成果物: PASS
- 三種公式過去問5問のEXAM_ALIGNMENT: PASS
- 教材で必要な中間知識: PASS
- 3段階例題: PASS
- 練習問題数・難易度配分・本試験形式: PASS
- 解説PDF・練習PDF・PowerPoint表示QA: PASS
- SPEC境界: PASS
- 完成後独立再解答: `5 / 5 PASS`
- 教材外知識補完: `0件`
- 後続Topic知識への依存: `0件`
- 未確認0系実車値への依存: `0件`
- source進捗記録整合性: PASS

結論: `PASS / completed`。Topic 06を完成数へ加算し、次はTopic 07「モーターはなぜ回る？」の制作前EXAM_ALIGNMENTへ進む。