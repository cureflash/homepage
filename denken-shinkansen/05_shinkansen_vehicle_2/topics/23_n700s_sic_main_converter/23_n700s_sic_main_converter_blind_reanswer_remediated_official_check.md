# Topic 23 N700S SiC主変換装置 — 修正後clean blind公式照合

更新日: 2026-09-19

判定: `PASS / 23_OF_23`

## reconcile

latest main、最新 `STATUS.md` / `HANDOFF.md`、直近車両二種worker成果、初回clean blind公式照合、補強後成果物同期、修正後clean blind候補固定commit `5d28e38e9151edc9d2ca3e309783aea2e6b9272f` をreconcileした。

修正後候補ファイル `23_n700s_sic_main_converter_blind_reanswer_candidates_remediated_clean.md` は後編集しない。本照合では、初回公式照合で確認済みの同一固定5問の公式解答・標準解答を再利用し、重複調査を行わない。

Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は既存診断どおり過去問固有丸め差として扱い、一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 公式正本

- R7 一次公式解答: https://www.shiken.or.jp/chief/upload/20250831_ch_second_a01.pdf
- R4 一次公式解答: https://www.shiken.or.jp/chief/upload/20220820_ch_second_a01.pdf
- R2 一次公式解答: https://www.shiken.or.jp/chief/upload/20200912_ch_second_a01.pdf
- H24 一次公式解答: https://www.shiken.or.jp/chief/upload/20120908_ch_second_a01.pdf
- H24 二次標準解答: https://www.shiken.or.jp/chief/upload/20121202_ch_second_a01.pdf
- 初回公式照合: `23_n700s_sic_main_converter_blind_reanswer_official_check.md`
- 先行同一ゲート公式照合: `../17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_blind_reanswer_official_check.md`

参照日: 2026-09-19

## 1. R7 一次「機械」問4

| 要素 | 修正後候補 | 公式解答 | 判定 |
|---|---|---|---|
| (1) | 誘導性 | ホ 誘導性 | PASS |
| (2) | 二つ | ル 二つ | PASS |
| (3) | MOSFET | チ MOSFET | PASS |
| (4) | PWM | イ PWM | PASS |
| (5) | スイッチング | ハ スイッチング | PASS |

結果: `5 / 5 PASS`。

## 2. R4 一次「機械」問4

| 要素 | 修正後候補 | 公式解答 | 判定 |
|---|---|---|---|
| (1) | 大きい | ハ 大きい | PASS |
| (2) | 漏れ電流 | イ 漏れ電流 | PASS |
| (3) | スイッチング損失 | ト スイッチング損失 | PASS |
| (4) | が短いほど大きい | ロ 周期が短いほど大きい | PASS |
| (5) | ソフトスイッチング | ル ソフトスイッチング | PASS |

結果: `5 / 5 PASS`。

## 3. R2 一次「機械」問2

| 要素 | 修正後候補 | 公式解答 | 判定 |
|---|---|---|---|
| (1) | 通流率 | カ 通流率 | PASS |
| (2) | `D V_dc` | ト `D V_dc` | PASS |
| (3) | 正である | ヨ 正である | PASS |
| (4) | `(1/2)V_dc I_dc T_2` | リ `(1/2)V_dc I_dc T_2` | PASS |
| (5) | `(W_off+W_on)/T` | ホ `(W_off+W_on)/T` | PASS |

結果: `5 / 5 PASS`。

初回不一致だった `(2),(4)` は、補強後教材だけを使った修正後clean blindで公式解答と一致した。候補固定後の修正は `0件`。

## 4. H24 一次「機械」問6 — 固定対象 `(2),(3)`

| 要素 | 修正後候補 | 公式解答 | 判定 |
|---|---|---|---|
| (2) | 放熱 | ル 放熱 | PASS |
| (3) | 接合部 | カ 接合部 | PASS |

結果: `2 / 2 PASS`。

## 5. H24 二次「機械・制御」問1

| 要素 | 修正後候補 | 公式標準解答 | 判定 |
|---|---:|---:|---|
| (1) | `0.500 Ω` | `0.500 Ω` | PASS |
| (2) | `188 V`（計算値 `187.5 V`） | `187.5 → 188 V` | PASS |
| (3) | `1.48×10^3 min^-1`（計算値 `1484`） | `1484 → 1480 min^-1` | PASS |
| (4) | `133 V`（計算値 `132.5 V`） | `132.5 → 133 V` | PASS |
| (5) | `0.671` | `0.67085 → 0.671` | PASS |
| (6) | `116 ～ 1.71×10^3 min^-1`（計算値上限 `1708`） | `116〜1710 min^-1` | PASS |

結果: `6 / 6 PASS`。

## 総合判定

- 固定5問: `5 / 5 PASS`
- 一次答案要素: `17 / 17 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計: `23 / 23 PASS`
- 修正後候補ファイル後編集: `0件`
- 初回候補ファイル後編集: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- JR東海7%値・富士電機20%値の誤拡張: `0件`
- 新たなexact blocker: `0件`

過去問対応品質ゲートのclean blind再試験は `23 / 23 PASS`。Topic 23はまだ `completed` にせず、次工程で最終QAを実施する。
