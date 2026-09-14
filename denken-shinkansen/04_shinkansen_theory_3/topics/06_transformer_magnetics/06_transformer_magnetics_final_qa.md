# Topic 06 最終QA記録

対象: `06 0系の変圧器は何をしていた？`

実施日: 2026-09-14

## 判定

`NEEDS_REVISION / in_progress`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`04_shinkansen_theory_3/SPEC.md` の既定範囲だけで判定し、新しい仕様は追加していない。

必須成果物、固定EXAM_ALIGNMENT 5問、完成後独立再解答、SPEC境界はPASSした。一方、主source `06_transformer_magnetics.md` の進捗記録がGitHub正本の実態と一致していないため、Topic 06はまだ `completed` としない。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

| 成果物 | blob SHA | 判定 |
|---|---|---|
| source Markdown | `0ea6e8788851eda04726cbea62ac0342cb7ee8ee` | PASS |
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

## 完成後独立再解答

`06_transformer_magnetics_exam_recheck.md` を確認した。

- 独立解答列: `(1), (3), (2), (2), (2)`
- 公式解答列: `(1), (3), (2), (2), (2)`
- 一致: `5 / 5 PASS`
- 教材外知識の補完: `0問`
- 後続Topic知識への依存: `0問`
- 未確認0系実車値への依存: `0問`

過去問対応品質ゲート自体はPASSしている。

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

FAIL。

`06_transformer_magnetics.md` 冒頭は現在も、

- `status: EXPLANATION_SOURCE_COMPLETE`
- `完了判定: in_progress`
- 「完成後独立再解答は未実施」

となっている。

さらに末尾 `source段階品質確認` は、

- `完成後独立再解答: 未実施`
- `最終QA: 未実施`

のままで、`次工程` も「このsourceを正本として解説PDFを作成する」と記録されている。

しかしGitHub正本には、解説PDF、練習PDF、PowerPoint、完成後独立再解答 `5 / 5 PASS` がすでに存在する。したがってsource進捗記録と実態が不整合である。

## 最終判定

- 必須成果物: PASS
- 三種公式過去問5問のEXAM_ALIGNMENT: PASS
- 教材で必要な中間知識: PASS
- 3段階例題: PASS
- 練習問題数・本試験形式: PASS
- SPEC境界: PASS
- 完成後独立再解答: `5 / 5 PASS`
- 教材外知識補完: `0件`
- source進捗記録整合性: FAIL

結論: `NEEDS_REVISION`。完成数は `5 / 14` のまま。次は `06_transformer_magnetics.md` の進捗記録だけをGitHub正本の現在地へ同期し、教材本文・固定EXAM_ALIGNMENT・数式・例題・仕様範囲は変更しない。