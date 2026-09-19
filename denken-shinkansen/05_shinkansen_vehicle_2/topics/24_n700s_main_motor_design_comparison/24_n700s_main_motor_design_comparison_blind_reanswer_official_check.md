# Topic 24 N700S 主電動機設計の比較 — clean blind公式照合

更新日: 2026-09-20

判定: `PASS / CLEAN_BLIND_COMPLETE`

## reconcile

最新main、系列 `STATUS.md` / `HANDOFF.md`、Topic 24成果物、直近コミット、既存車両二種worker成果をreconcileした。固定候補は `24_n700s_main_motor_design_comparison_blind_reanswer_candidates_clean.md` の `CANDIDATES_FIXED / OFFICIAL_NOT_CHECKED` をそのまま使用し、公式照合後の候補編集は行わない。

PowerPoint正本修復済み成果、既存EXAM_ALIGNMENT、解説・練習成果物QAは再利用し、重複生成・重複QAはしていない。

Topic 21 H26二次「機械・制御」問1(4)の `48.1 / 48.0 N·m` 差は既存診断どおり、公式標準解答が `π=3.14` 相当を用いた過去問固有丸め差として扱う。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 公式正本

- R7 一次公式解答: https://www.shiken.or.jp/chief/upload/20250831_ch_second_a01.pdf
- R4 一次公式解答: https://www.shiken.or.jp/chief/upload/20220820_ch_second_a01.pdf
- R2 一次公式解答: https://www.shiken.or.jp/chief/upload/20200912_ch_second_a01.pdf
- R3 二次標準解答: https://www.shiken.or.jp/chief/upload/20211114_ch_second_a01.pdf
- R7 二次標準解答: https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf

参照日: 2026-09-20

## 1. R7 一次「機械」問2

| 要素 | 固定候補 | 公式解答 | 判定 |
|---|---|---|---|
| (1) | `3V_1^2` `(ハ)` | ハ | PASS |
| (2) | `s>0` `(ヌ)` | ヌ | PASS |
| (3) | 停動 `(ル)` | ル | PASS |
| (4) | `r'_2` `(チ)` | チ | PASS |
| (5) | 比例する `(ワ)` | ワ | PASS |

結果: `5 / 5 PASS`。

## 2. R4 一次「機械」問2 — 固定対象 `(3)〜(5)`

| 要素 | 固定候補 | 公式解答 | 判定 |
|---|---|---|---|
| (3) | 同期速度 `(ハ)` | ハ | PASS |
| (4) | 電動機動作 `(ホ)` | ホ | PASS |
| (5) | 正の `(ヨ)` | ヨ | PASS |

結果: `3 / 3 PASS`。

## 3. R2 一次「機械」問3 — 固定対象 `(1),(4),(5)`

| 要素 | 固定候補 | 公式解答 | 判定 |
|---|---|---|---|
| (1) | `2πf/p` `(ワ)` | ワ | PASS |
| (4) | `V/f` 一定制御 `(ロ)` | ロ | PASS |
| (5) | 磁束 `(ト)` | ト | PASS |

結果: `3 / 3 PASS`。

## 4. R3 二次「機械・制御」問1 — 固定対象 `(3),(4)`

| 要素 | 固定候補 | 公式標準解答 | 判定 |
|---|---|---|---|
| (3) | `ω_0=2πf/p` | `ω_0=2πf/p` | PASS |
| (4) | `T=3V_1^2(r'_2/s) / {ω_0[(r_1+r'_2/s)^2+x^2]}` | 同値式 | PASS |

`1/ω_0=p/(2πf)` なので、固定候補のトルク式と公式標準解答の表現は代数的に同値である。

結果: `2 / 2 PASS`。

## 5. R7 二次「機械・制御」問2 — 固定対象 `(1),(3)`

| 要素 | 固定候補 | 公式標準解答 | 判定 |
|---|---:|---:|---|
| (1) 定格すべり | `3.50 %` | `3.5 %` | PASS |
| (1) 定格トルク | `181 N·m` | `181 N·m` | PASS |
| (3) 50%トルク時回転速度 | `1179 ≒ 1180 min^-1` | `1180 min^-1` | PASS |
| (3) 50%トルク時出力 | `11199.5 ≒ 11200 W` | `11200 W` | PASS |

結果: `4 / 4 PASS`。

## 総合判定

- 固定過去問: 第二種一次3問＋二次2問 = `5 / 5 PASS`
- 一次答案要素: `11 / 11 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計答案要素: `17 / 17 PASS`
- 固定候補の公式照合後編集: `0件`
- 教材外知識による補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- SPEC外主題追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- 新たなexact blocker: `0件`

解説source/PDF、練習source/PDF、解説画像PowerPointは既存QAでPASS済みであり、完成後clean blindも `17 / 17 PASS` となった。したがってTopic 24は過去問対応品質ゲートを満たし、`PASS / COMPLETED` とする。

完成数: `24 / 39`。

## 次工程

Topic 25 `N700S バッテリー自走のエネルギー設計` の制作前EXAM_ALIGNMENT。公式第二種一次・二次過去問を先に固定し、既存workerの検証済み成果と重複しない範囲だけ新規調査する。