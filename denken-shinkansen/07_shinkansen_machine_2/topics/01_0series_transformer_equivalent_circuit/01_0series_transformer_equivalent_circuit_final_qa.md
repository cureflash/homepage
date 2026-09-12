# Topic 01 最終QA記録

対象: `01 0系の主変圧器を等価回路で解剖する`

実施日: 2026-09-13

## 判定

PASS。Topic 01を `completed` としてよい。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`07_shinkansen_machine_2/SPEC.md` の範囲内で確認し、新しい仕様は追加していない。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

| 成果物 | blob SHA | 判定 |
|---|---|---|
| source Markdown | `caaad6b353dfd2e027da6617bd6fb27e93f505d3` | PASS |
| 解説PDF | `ec9e71d96b4b7414091bb92505c09523095d1ebe` | PASS |
| 練習PDF | `eb91ce4c434401c81f0ef2992b86ca441a80ab8c` | PASS |
| 解説画像PowerPoint | `8b0ce550619afed8da50a05b38f21592d8f2f43b` | PASS |
| 完成後独立再解答記録 | `5f3d48b19ecfb1a42df74f93c413c25a2ed04b8c` | PASS |

## EXAM_ALIGNMENT確認

選定対象は一次1問＋二次記述5問の計6問。

- R7 一次 機械 問3
- R6 二次 機械・制御 問2
- R3 二次 機械・制御 問2
- R2 二次 機械・制御 問2
- H28 二次 機械・制御 問2
- H27 二次 機械・制御 問2

二種の一次・二次を合わせて5問以上、かつ二次記述を含める品質ゲートを満たす。

source Markdownには、一次・二次換算、`R/X/g0/b0`、無負荷試験・短絡試験、`%Z/%r/%x`、フェーザ・電圧変動率、鉄損・銅損・効率・最大効率、並列運転、二次答案の途中式・単位・成立条件まで対応節がある。

## 完成教材間の整合確認

既存の制作記録と現在のblob SHAを照合した。

- 解説PDF: 現在blob `ec9e71...` は「verified PDF」として置換された版と同一。解説内容はsource Markdownの換算、等価回路、無負荷/短絡試験、百分率量、電圧変動率、効率、並列運転、3段階例題、0系接続を収録した記録と対応する。
- 練習PDF: 現在blob `eb91ce...` は制作時に一次型8問＋二次記述4問、計12問と完全解説を収録し、180 dpiで全5ページをPDFium / pdftoppmの両方で確認してPASSした版と同一。
- PowerPoint: 現在blob `8b0ce5...` は制作時の16:9・4枚版と同一。全4スライドのレンダリング目視確認とcanvas overflow検査PASSの記録がある。

式・数値について、source Markdownと独立再解答記録で使用する主要式・換算側・単位・近似条件に矛盾は確認されなかった。

## 実車値・計算値・仮定値の区別

0系について、公開確認済み値として扱うのは次の範囲。

- 交流60 Hz 25 kV
- 主変圧器容量 1650 kVA
- 低圧タップ切換
- 25段

`1650 kVA / 25 kV = 66 A` は公開値からの計算値として明示されている。

0系固有の `R, X, g0, b0, %Z`、鉄損、銅損は未確認であり、教材用例題値を実車値として扱っていない。仮定値は仮定値として明記されている。

## 完成後独立再解答

別記録 `01_0series_transformer_equivalent_circuit_independent_reanswer.md` を確認した。

6問すべて、完成教材だけで使用公式・換算側・成立条件・近似条件・途中式・単位を構成でき、公式標準解答との照合で一致している。教材外知識の補完は0件。

判定: 6 / 6 PASS。

## 最終判定

- 必須成果物: PASS
- 一次・二次過去問対応: PASS
- EXAM_ALIGNMENTの教材反映: PASS
- 式・数値・単位・換算側・近似条件: PASS
- 実車値 / 計算値 / 仮定値の区別: PASS
- 既実施レンダリングQAと現行blobの対応: PASS
- 完成後独立再解答: PASS

Topic 01を `completed` とする。次工程はTopic 02「0系の直流主電動機はどんな特性だった？」の制作前EXAM_ALIGNMENT。
